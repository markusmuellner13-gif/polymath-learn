import Anthropic from '@anthropic-ai/sdk'

let client: Anthropic | null = null

export function getClient(apiKey: string): Anthropic {
  if (!client || (client as any).apiKey !== apiKey) {
    client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
  }
  return client
}

export async function explainSimply(
  apiKey: string,
  question: string,
  imageBase64?: string,
  imageMime?: string,
): Promise<string> {
  const c = getClient(apiKey)

  const systemPrompt = `You are Polymath's "Explain Simply" tutor — a brilliant teacher who can explain ANY topic
clearly, accurately, and engagingly without dumbing it down or leaving anything important out.

Your explanations must:
- Start with the core concept in 1-2 plain sentences
- Build up with clear, well-structured sections using headers
- Use real-world analogies where helpful
- Include important nuances — don't oversimplify to the point of being wrong
- End with a "Key Takeaways" bullet list
- Use markdown formatting (headers, bold, bullet points, code blocks if needed)

If the user provides an image, diagram, drawing, equation, or screenshot — analyze it carefully and explain it in full.
If it contains math, solve it step by step. If it's a diagram or drawing, describe and explain what it shows.`

  const contentBlocks: Anthropic.MessageParam['content'] = []

  if (imageBase64 && imageMime) {
    contentBlocks.push({
      type: 'image',
      source: {
        type: 'base64',
        media_type: imageMime as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
        data: imageBase64,
      },
    })
  }

  contentBlocks.push({ type: 'text', text: question || 'Please explain what you see in this image.' })

  const msg = await c.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 2048,
    system: systemPrompt,
    messages: [{ role: 'user', content: contentBlocks }],
  })

  const block = msg.content[0]
  return block.type === 'text' ? block.text : ''
}

export async function generateLessonContent(
  apiKey: string,
  topicName: string,
  unitTitle: string,
  lessonTitle: string,
  difficulty: string,
  keyPoints: string[],
): Promise<string> {
  const c = getClient(apiKey)

  const prompt = `Generate a detailed, engaging lesson for a student learning "${topicName}" at the "${difficulty}" level.

Topic: ${topicName}
Unit: ${unitTitle}
Lesson: ${lessonTitle}
Key Points to Cover: ${keyPoints.join(', ')}

Write a comprehensive lesson (500-800 words) that:
- Opens with an interesting hook or real-world connection
- Explains each concept clearly with examples
- Includes a helpful analogy or visual description
- Flows naturally from basics to complexity
- Uses markdown formatting (headers, bold key terms, bullet points)
- Ends with a brief summary

Write for a ${difficulty === 'spark' ? 'complete beginner' : difficulty === 'builder' ? 'beginner with some basics' : difficulty === 'explorer' ? 'intermediate learner' : difficulty === 'scholar' ? 'advanced student' : 'near-expert'}.`

  const msg = await c.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  })

  const block = msg.content[0]
  return block.type === 'text' ? block.text : ''
}
