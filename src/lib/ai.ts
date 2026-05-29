import Groq from 'groq-sdk'

const VISION_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct'
const TEXT_MODEL = 'llama-3.3-70b-versatile'

// Built-in key baked in at build time via GitHub Secret (VITE_GROQ_KEY).
// User's own key (from Settings) always takes priority.
const BUILTIN_KEY = import.meta.env.VITE_GROQ_KEY ?? ''

export function hasBuiltinKey(): boolean {
  return BUILTIN_KEY.length > 0
}

function resolveKey(userKey: string): string {
  const key = userKey || BUILTIN_KEY
  if (!key) throw new Error('NO_KEY')
  return key
}

function client(userKey: string) {
  return new Groq({ apiKey: resolveKey(userKey), dangerouslyAllowBrowser: true })
}

const SYSTEM_PROMPT = `You are Polymath's "Explain Simply" tutor — a brilliant teacher who explains ANY topic clearly, accurately, and engagingly without dumbing it down or leaving anything important out.

Your explanations must:
- Start with the core concept in 1-2 plain sentences
- Build up with clear sections using markdown headers (##)
- Use real-world analogies where helpful
- Include important nuances — don't oversimplify to the point of being wrong
- End with a "## Key Takeaways" bullet list
- Use markdown formatting (## headers, **bold**, bullet points, code blocks if needed)

If the user provides an image, diagram, drawing, equation, or screenshot — analyze it carefully and explain it in full. If it contains math, solve it step by step. If it's a diagram or drawing, describe and explain what it shows.`

export async function explainSimply(
  apiKey: string,
  question: string,
  imageBase64?: string,
  imageMime?: string,
): Promise<string> {
  const groq = client(apiKey)
  const userText = question || 'Please explain what you see in this image.'

  const messages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
  ]

  if (imageBase64 && imageMime) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: userText },
        { type: 'image_url', image_url: { url: `data:${imageMime};base64,${imageBase64}` } },
      ],
    })
  } else {
    messages.push({ role: 'user', content: userText })
  }

  const model = imageBase64 ? VISION_MODEL : TEXT_MODEL
  const res = await groq.chat.completions.create({ model, messages, max_tokens: 2048 })
  return res.choices[0]?.message?.content ?? ''
}

export async function generateLessonContent(
  apiKey: string,
  topicName: string,
  unitTitle: string,
  lessonTitle: string,
  difficulty: string,
  keyPoints: string[],
): Promise<string> {
  const groq = client(apiKey)

  const levelDesc =
    difficulty === 'Spark' ? 'complete beginner'
    : difficulty === 'Builder' ? 'beginner with some basics'
    : difficulty === 'Explorer' ? 'intermediate learner'
    : difficulty === 'Scholar' ? 'advanced student'
    : 'near-expert'

  const prompt = `Generate a detailed, engaging lesson for a ${levelDesc} learning "${topicName}".

Unit: ${unitTitle}
Lesson: ${lessonTitle}
Key Points: ${keyPoints.join(', ')}

Write a lesson (500-800 words) that:
- Opens with an interesting hook or real-world connection
- Explains each concept clearly with examples
- Includes a helpful analogy
- Uses markdown formatting (## headers, **bold** key terms, bullet points)
- Ends with a brief summary`

  const res = await groq.chat.completions.create({
    model: TEXT_MODEL,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1500,
  })
  return res.choices[0]?.message?.content ?? ''
}
