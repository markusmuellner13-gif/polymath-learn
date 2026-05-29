import { GoogleGenerativeAI, type Part } from '@google/generative-ai'

const MODELS = ['gemini-2.0-flash-lite', 'gemini-1.5-flash-8b', 'gemini-2.0-flash', 'gemini-1.5-flash']

function getClient(apiKey: string) {
  return new GoogleGenerativeAI(apiKey)
}

async function callWithFallback(_apiKey: string, fn: (modelName: string) => Promise<string>): Promise<string> {
  let lastError: unknown
  for (const model of MODELS) {
    try {
      return await fn(model)
    } catch (err: any) {
      // Only fall through on quota / not-found errors, not on auth errors
      if (err?.message?.includes('401') || err?.message?.includes('403') || err?.message?.includes('API_KEY')) throw err
      lastError = err
    }
  }
  throw lastError
}

export async function explainSimply(
  apiKey: string,
  question: string,
  imageBase64?: string,
  imageMime?: string,
): Promise<string> {
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

  return callWithFallback(apiKey, async (modelName) => {
    const model = getClient(apiKey).getGenerativeModel({ model: modelName })
    const result = await model.generateContent(parts)
    return result.response.text()
  })
}

export async function generateLessonContent(
  apiKey: string,
  topicName: string,
  unitTitle: string,
  lessonTitle: string,
  difficulty: string,
  keyPoints: string[],
): Promise<string> {
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

  return callWithFallback(apiKey, async (modelName) => {
    const model = getClient(apiKey).getGenerativeModel({ model: modelName })
    const result = await model.generateContent(prompt)
    return result.response.text()
  })
}
