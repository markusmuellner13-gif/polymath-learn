import { useState, useEffect } from 'react'
import type { Lesson, Unit, Topic, Difficulty, UserData } from '../types'
import { getCachedLessonContent, cacheLessonContent } from '../lib/storage'
import { generateLessonContent, hasBuiltinKey } from '../lib/ai'
import { DIFFICULTIES } from '../data/topics'

interface Props {
  lesson: Lesson
  unit: Unit
  topic: Topic
  difficulty: Difficulty
  userData: UserData
  onStartQuiz: () => void
  onBack: () => void
}

export default function LessonScreen({ lesson, unit, topic, difficulty, userData, onStartQuiz, onBack }: Props) {
  const [aiContent, setAiContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const diffInfo = DIFFICULTIES.find(d => d.id === difficulty)!

  useEffect(() => {
    const cached = getCachedLessonContent(lesson.id)
    if (cached) {
      setAiContent(cached)
      return
    }
    if (!userData.apiKey && !hasBuiltinKey()) return

    setLoading(true)
    generateLessonContent(
      userData.apiKey,
      topic.name,
      unit.title,
      lesson.title,
      diffInfo.label,
      lesson.keyPoints,
    )
      .then(content => {
        setAiContent(content)
        cacheLessonContent(lesson.id, content)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [lesson.id, userData.apiKey])

  const displayContent = aiContent || lesson.content

  return (
    <div className="min-h-svh bg-[#0A0A1B] flex flex-col">
      {/* Header */}
      <div className="safe-area-top" />
      <div className="px-4 pt-4 pb-4 border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors">
          <span>←</span> Back
        </button>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-white/30 uppercase tracking-wider">{unit.title}</span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold" style={{ color: diffInfo.color }}>{diffInfo.label}</span>
        </div>
        <h1 className="text-2xl font-black text-white mb-1">{lesson.emoji} {lesson.title}</h1>
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span>⚡ {lesson.xp} XP</span>
          <span>·</span>
          <span>{lesson.quiz.length} quiz questions after</span>
          {aiContent && <span>·</span>}
          {aiContent && <span className="text-violet-400">✨ AI-enhanced</span>}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6">
          {loading ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
              <p className="text-sm text-white/40">Generating personalized lesson…</p>
            </div>
          ) : (
            <MarkdownContent content={displayContent} />
          )}

          {/* Key Points */}
          {!aiContent && (
            <div className="mt-6 bg-violet-500/10 border border-violet-500/20 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-violet-300 mb-3">Key Takeaways</h3>
              <ul className="flex flex-col gap-2">
                {lesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-violet-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No API Key notice */}
          {!userData.apiKey && !hasBuiltinKey() && (
            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-sm text-amber-300/70">
              💡 Add your free Google Gemini API key in Settings to get personalized, expanded lessons for each topic.
            </div>
          )}
        </div>
      </div>

      {/* Start Quiz CTA */}
      <div className="p-4 border-t border-white/5 safe-area-bottom">
        <button
          onClick={onStartQuiz}
          className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98] shadow-lg"
          style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
        >
          Start Quiz · {lesson.quiz.length} Questions →
        </button>
      </div>
    </div>
  )
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n')
  return (
    <div className="flex flex-col gap-3">
      {lines.map((line, i) => {
        if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold text-white mt-2">{line.slice(3)}</h2>
        if (line.startsWith('# ')) return <h1 key={i} className="text-xl font-black text-white mt-2">{line.slice(2)}</h1>
        if (line.startsWith('### ')) return <h3 key={i} className="text-base font-bold text-white/90 mt-1">{line.slice(4)}</h3>
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="text-violet-400 mt-0.5 flex-shrink-0">•</span>
              <span>{formatInline(line.slice(2))}</span>
            </div>
          )
        }
        if (line.trim() === '') return <div key={i} className="h-1" />
        if (line.match(/^\d+\./)) {
          const text = line.replace(/^\d+\.\s*/, '')
          return (
            <div key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">{line.match(/^\d+/)?.[0]}.</span>
              <span>{formatInline(text)}</span>
            </div>
          )
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={i} className="text-sm font-bold text-white/90">{line.slice(2, -2)}</p>
        }
        return <p key={i} className="text-sm text-white/70 leading-relaxed">{formatInline(line)}</p>
      })}
    </div>
  )
}

function formatInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      : part
  )
}
