import { useState } from 'react'
import type { Lesson, Unit, Topic, Difficulty } from '../types'
import { DIFFICULTIES } from '../data/topics'

interface Props {
  lesson: Lesson
  unit: Unit
  topic: Topic
  difficulty: Difficulty
  onComplete: (score: number, xpEarned: number) => void
  onBack: () => void
}

type Card =
  | { kind: 'intro' }
  | { kind: 'concept'; text: string; pointIndex: number }
  | { kind: 'mcq'; qIndex: number }

function buildCards(lesson: Lesson): Card[] {
  const cards: Card[] = [{ kind: 'intro' }]
  const kps = lesson.keyPoints
  const qs = lesson.quiz
  const maxPairs = Math.min(kps.length, qs.length)
  for (let i = 0; i < maxPairs; i++) {
    cards.push({ kind: 'concept', text: kps[i], pointIndex: i })
    cards.push({ kind: 'mcq', qIndex: i })
  }
  for (let i = maxPairs; i < kps.length; i++) {
    cards.push({ kind: 'concept', text: kps[i], pointIndex: i })
  }
  for (let i = maxPairs; i < qs.length; i++) {
    cards.push({ kind: 'mcq', qIndex: i })
  }
  return cards
}

export default function LessonScreen({ lesson, unit, topic, difficulty, onComplete, onBack }: Props) {
  const diffInfo = DIFFICULTIES.find(d => d.id === difficulty)!
  const cards = buildCards(lesson)

  const [cardIndex, setCardIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const totalQuestions = lesson.quiz.length
  const card = cards[cardIndex]
  const isLast = cardIndex === cards.length - 1

  function handleSelect(idx: number) {
    if (revealed) return
    const q = lesson.quiz[(card as { kind: 'mcq'; qIndex: number }).qIndex]
    const isCorrect = idx === q.correct
    setSelected(idx)
    setRevealed(true)
    if (isCorrect) setCorrectAnswers(c => c + 1)
  }

  function handleNext() {
    if (isLast) {
      const finalCorrect = card.kind === 'mcq' && !revealed
        ? correctAnswers
        : correctAnswers
      const score = totalQuestions > 0 ? Math.round((finalCorrect / totalQuestions) * 100) : 100
      const xpBonus = finalCorrect * 10
      onComplete(score, lesson.xp + xpBonus)
      return
    }
    setCardIndex(i => i + 1)
    setSelected(null)
    setRevealed(false)
  }

  // Count MCQ cards answered so far for progress
  const mcqCards = cards.filter(c => c.kind === 'mcq').length
  const mcqAnswered = cards.slice(0, cardIndex + 1).filter(c => c.kind === 'mcq').length
  const progress = cards.length > 1 ? (cardIndex / (cards.length - 1)) * 100 : 0

  return (
    <div className="min-h-svh bg-[#0A0A1B] flex flex-col">
      <div className="safe-area-top" />

      {/* Header with progress */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <button onClick={onBack} className="text-white/40 hover:text-white transition-colors p-1">
            ✕
          </button>
          <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: topic.color }}
            />
          </div>
          <span className="text-xs text-white/30 font-medium whitespace-nowrap">
            {mcqAnswered}/{mcqCards}
          </span>
        </div>
        <div className="flex items-center gap-2 pl-8">
          <span className="text-xs text-white/30">{unit.title}</span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold" style={{ color: diffInfo.color }}>{diffInfo.label}</span>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col px-4 pb-4 overflow-y-auto">
        {card.kind === 'intro' && (
          <IntroCard lesson={lesson} topic={topic} onNext={handleNext} />
        )}
        {card.kind === 'concept' && (
          <ConceptCard
            text={card.text}
            pointIndex={card.pointIndex}
            topic={topic}
            onNext={handleNext}
          />
        )}
        {card.kind === 'mcq' && (
          <McqCard
            question={lesson.quiz[card.qIndex]}
            topic={topic}
            selected={selected}
            revealed={revealed}
            onSelect={handleSelect}
            onNext={handleNext}
            isLast={isLast}
          />
        )}
      </div>
    </div>
  )
}

function IntroCard({ lesson, topic, onNext }: { lesson: Lesson; topic: Topic; onNext: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-8">
      <div
        className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl"
        style={{ background: `${topic.color}20` }}
      >
        {lesson.emoji}
      </div>
      <div>
        <h1 className="text-2xl font-black text-white mb-2">{lesson.title}</h1>
        <p className="text-sm text-white/50 max-w-xs mx-auto leading-relaxed">
          {lesson.quiz.length} questions · ⚡ {lesson.xp} XP
        </p>
      </div>
      <div
        className="px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{ background: `${topic.color}20`, color: topic.color }}
      >
        Tap through to learn, then answer questions
      </div>
      <button
        onClick={onNext}
        className="w-full max-w-xs py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98]"
        style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
      >
        Start →
      </button>
    </div>
  )
}

function ConceptCard({
  text,
  pointIndex,
  topic,
  onNext,
}: {
  text: string
  pointIndex: number
  topic: Topic
  onNext: () => void
}) {
  const icons = ['💡', '🔑', '⭐', '🎯', '🧩', '📌', '🔥', '✨']
  const icon = icons[pointIndex % icons.length]

  return (
    <div className="flex-1 flex flex-col justify-between py-6">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl"
          style={{ background: `${topic.color}15` }}
        >
          {icon}
        </div>
        <div
          className="w-full rounded-3xl p-6 border"
          style={{ background: `${topic.color}08`, borderColor: `${topic.color}25` }}
        >
          <p className="text-white text-lg font-semibold text-center leading-relaxed">{text}</p>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98] mt-6"
        style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
      >
        Got it →
      </button>
    </div>
  )
}

function McqCard({
  question,
  topic,
  selected,
  revealed,
  onSelect,
  onNext,
  isLast,
}: {
  question: { question: string; options: string[]; correct: number; explanation: string }
  topic: Topic
  selected: number | null
  revealed: boolean
  onSelect: (idx: number) => void
  onNext: () => void
  isLast: boolean
}) {
  return (
    <div className="flex-1 flex flex-col justify-between py-4">
      {/* Question */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="text-center">
          <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Question</div>
          <p className="text-xl font-bold text-white leading-snug">{question.question}</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, idx) => {
            let bg = 'bg-white/5 border-white/10'
            let text = 'text-white/80'
            let icon: string | null = null

            if (revealed) {
              if (idx === question.correct) {
                bg = 'bg-emerald-500/20 border-emerald-500/50'
                text = 'text-emerald-300'
                icon = '✓'
              } else if (idx === selected) {
                bg = 'bg-red-500/20 border-red-500/50'
                text = 'text-red-300'
                icon = '✗'
              } else {
                bg = 'bg-white/3 border-white/5'
                text = 'text-white/25'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => onSelect(idx)}
                disabled={revealed}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all active:scale-[0.98] ${bg} ${revealed ? '' : 'hover:border-white/25 hover:bg-white/8'}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 border ${
                    revealed && idx === question.correct
                      ? 'bg-emerald-500 border-emerald-400 text-white'
                      : revealed && idx === selected && idx !== question.correct
                      ? 'bg-red-500 border-red-400 text-white'
                      : 'bg-white/5 border-white/10 text-white/50'
                  }`}
                >
                  {icon ?? String.fromCharCode(65 + idx)}
                </div>
                <span className={`text-sm font-medium ${text}`}>{option}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {revealed && (
          <div
            className={`rounded-2xl p-4 border text-sm ${
              selected === question.correct
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                : 'bg-red-500/10 border-red-500/20 text-red-200'
            }`}
          >
            <p className="font-semibold mb-1">{selected === question.correct ? '✓ Correct!' : '✗ Not quite.'}</p>
            <p className="opacity-80 leading-relaxed">{question.explanation}</p>
          </div>
        )}
      </div>

      {/* Continue button */}
      {revealed && (
        <button
          onClick={onNext}
          className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98] mt-6"
          style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
        >
          {isLast ? 'Finish →' : 'Continue →'}
        </button>
      )}

      {/* Tap prompt when not yet answered */}
      {!revealed && (
        <div className="mt-6 text-center text-xs text-white/20">Tap an answer to continue</div>
      )}
    </div>
  )
}
