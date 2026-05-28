import type { Lesson, Topic, UserData } from '../types'

interface Props {
  lesson: Lesson
  topic: Topic
  score: number
  xpEarned: number
  userData: UserData
  onContinue: () => void
}

export default function ResultScreen({ lesson, topic, score, xpEarned, userData, onContinue }: Props) {
  const perfect = score === 100
  const passed = score >= 60

  const emoji = perfect ? '🏆' : passed ? '🎉' : '💪'
  const title = perfect ? 'Perfect Score!' : passed ? 'Lesson Complete!' : 'Keep Going!'
  const subtitle = perfect
    ? 'You nailed every question. Impressive!'
    : passed
    ? 'Great work — you\'ve mastered this lesson.'
    : "Don't worry — review and try again!"

  return (
    <div className="min-h-screen bg-[#0A0A1B] flex flex-col items-center justify-center px-6">
      {/* Fireworks background glow */}
      {passed && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center, ${topic.color}, transparent 70%)` }}
        />
      )}

      <div className="relative flex flex-col items-center text-center max-w-sm w-full gap-6">
        {/* Result emoji */}
        <div className="text-7xl animate-bounce" style={{ animationDuration: '1.5s' }}>{emoji}</div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-black text-white mb-2">{title}</h1>
          <p className="text-white/50 text-sm">{subtitle}</p>
        </div>

        {/* Score */}
        <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Stat label="Score" value={`${score}%`} color={passed ? '#10B981' : '#EF4444'} />
            <Stat label="XP Earned" value={`+${xpEarned}`} color="#F59E0B" />
            <Stat label="Streak" value={`${userData.streak}🔥`} color="#EF4444" />
          </div>

          {/* XP bar */}
          <div>
            <div className="flex justify-between text-xs text-white/40 mb-1.5">
              <span>Level {userData.level}</span>
              <span>{userData.xp % 1000}/1000 XP</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-1000"
                style={{ width: `${(userData.xp % 1000) / 10}%` }}
              />
            </div>
          </div>
        </div>

        {/* Lesson info */}
        <div className="flex items-center gap-2 text-sm text-white/40">
          <span>{lesson.emoji}</span>
          <span className="font-medium text-white/60">{lesson.title}</span>
          <span>completed</span>
        </div>

        {/* CTA */}
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all active:scale-[0.98] shadow-xl"
          style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)` }}
        >
          Continue Learning →
        </button>
      </div>
    </div>
  )
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xl font-black" style={{ color }}>{value}</span>
      <span className="text-xs text-white/40">{label}</span>
    </div>
  )
}
