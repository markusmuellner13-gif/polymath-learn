import { useState } from 'react'
import type { Lesson, Topic } from '../types'

interface Props {
  lesson: Lesson
  topic: Topic
  onComplete: (score: number, xpEarned: number) => void
  onBack: () => void
}

export default function QuizScreen({ lesson, topic, onComplete, onBack }: Props) {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])

  const question = lesson.quiz[currentQ]
  const isLast = currentQ === lesson.quiz.length - 1

  function handleSelect(idx: number) {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
    setAnswers(prev => [...prev, idx === question.correct])
  }

  function handleNext() {
    if (isLast) {
      const correct = [...answers, selected === question.correct].filter(Boolean).length
      const score = Math.round((correct / lesson.quiz.length) * 100)
      const xpBonus = correct * 10
      const totalXP = lesson.xp + xpBonus
      onComplete(score, totalXP)
    } else {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setRevealed(false)
    }
  }

  const progress = ((currentQ + (revealed ? 1 : 0)) / lesson.quiz.length) * 100

  return (
    <div className="min-h-svh bg-[#0A0A1B] flex flex-col">
      {/* Safe area */}
      <div className="safe-area-top" />
      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
          <span>←</span> Exit Quiz
        </button>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: topic.color }}
            />
          </div>
          <span className="text-xs text-white/40 font-medium whitespace-nowrap">
            {currentQ + 1} / {lesson.quiz.length}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        <div className="mb-6">
          <p className="text-lg font-bold text-white leading-snug">{question.question}</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, idx) => {
            let style = 'bg-white/5 border-white/10 text-white/80 hover:border-white/25 hover:bg-white/8'
            if (revealed) {
              if (idx === question.correct) {
                style = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300'
              } else if (idx === selected && idx !== question.correct) {
                style = 'bg-red-500/15 border-red-500/50 text-red-300'
              } else {
                style = 'bg-white/3 border-white/5 text-white/30'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all active:scale-[0.98] ${style} ${revealed ? '' : 'cursor-pointer'}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 border ${
                    revealed && idx === question.correct
                      ? 'bg-emerald-500 border-emerald-400 text-white'
                      : revealed && idx === selected && idx !== question.correct
                      ? 'bg-red-500 border-red-400 text-white'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  {revealed && idx === question.correct ? '✓' : revealed && idx === selected ? '✗' : String.fromCharCode(65 + idx)}
                </div>
                <span className="text-sm font-medium">{option}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div className={`mt-4 rounded-2xl p-4 border text-sm ${selected === question.correct ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200' : 'bg-red-500/10 border-red-500/20 text-red-200'}`}>
            <p className="font-semibold mb-1">{selected === question.correct ? '✓ Correct!' : '✗ Not quite.'}</p>
            <p className="text-sm opacity-80 leading-relaxed">{question.explanation}</p>
          </div>
        )}
      </div>

      {/* Next button */}
      {revealed && (
        <div className="px-4 pt-4 border-t border-white/5 safe-area-bottom">
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98]"
            style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
          >
            {isLast ? 'See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  )
}
