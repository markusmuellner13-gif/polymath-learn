import { GoogleGenerativeAI, type Part } from '@google/generative-ai'

function getModel(apiKey: string) {
  const genAI = new GoogleGenerativeAI(apiKey)
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
}

export async function explainSimply(
  apiKey: string,
  question: string,
  imageBase64?: string,
  imageMime?: string,
): Promise<string> {
  const model = getModel(apiKey)

  const systemPrompt = `You are Polymath's "Explain Simply" tutor — a brilliant teacher who explains ANY topic clearly, accurately, and engagingly without dumbing it down or leaving anything important out.

Your explanations must:
- Start with the core concept in 1-2 plain sentences
- Build up with clear, well-structured sections using markdown headers (##)
- Use real-world analogies where helpful
- Include important nuances — don't oversimplify to the point of being wrong
- End with a "## Key Takeaways" bullet list
- Use markdown formatting (headers, **bold**, bullet points, code blocks if needed)

If the user provides an image, diagram, drawing, equation, or screenshot — analyze it carefully and explain it in full. If it contains math, solve it step by step. If it's a diagram or drawing, describe and explain what it shows.`

  const parts: Part[] = [{ text: systemPrompt + '\n\n---\n\nUser question: ' + (question || 'Please explain what you see in this image.') }]

  if (imageBase64 && imageMime) {
    parts.push({
      inlineData: {
        mimeType: imageMime,
        data: imageBase64,
      },
    })
  }

  const result = await model.generateContent(parts)
  return result.response.text()
}

export async function generateLessonContent(
  apiKey: string,
  topicName: string,
  unitTitle: string,
  lessonTitle: string,
  difficulty: string,
  keyPoints: string[],
): Promise<string> {
  const model = getModel(apiKey)

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
- Uses markdown formatting (## headers, **bold** key terms, bullet points)
- Ends with a brief summary

Write for a ${difficulty === 'Spark' ? 'complete beginner' : difficulty === 'Builder' ? 'beginner with some basics' : difficulty === 'Explorer' ? 'intermediate learner' : difficulty === 'Scholar' ? 'advanced student' : 'near-expert'}.`

  const result = await model.generateContent(prompt)
  return result.response.text()
}
