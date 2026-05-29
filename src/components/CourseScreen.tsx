import type { Topic, Difficulty, Unit, UserData } from '../types'
import { DIFFICULTIES } from '../data/topics'
import { isLessonCompleted } from '../lib/storage'

interface Props {
  topic: Topic
  difficulty: Difficulty
  units: Unit[]
  userData: UserData
  onSelectLesson: (unit: Unit, lessonIdx: number) => void
  onBack: () => void
}

export default function CourseScreen({ topic, difficulty, units, userData, onSelectLesson, onBack }: Props) {
  const diffInfo = DIFFICULTIES.find(d => d.id === difficulty)!

  const totalLessons = units.reduce((acc, u) => acc + u.lessons.length, 0)
  const completedCount = units.reduce(
    (acc, u) => acc + u.lessons.filter(l => isLessonCompleted(userData, topic.id, difficulty, l.id)).length,
    0,
  )
  const progress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0

  return (
    <div className="min-h-svh bg-[#0A0A1B] flex flex-col">
      {/* Safe area spacer */}
      <div className="safe-area-top" />

      {/* Hero header */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(ellipse at top, ${topic.color}, transparent 70%)` }}
        />
        <div className="relative px-4 pt-4 pb-6">
          <button onClick={onBack} className="flex items-center gap-2 text-white/50 active:text-white text-sm mb-4 transition-colors">
            <span>←</span> Back
          </button>

          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold flex-shrink-0"
              style={{ background: `${topic.color}25`, color: topic.color }}
            >
              {topic.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-black text-white">{topic.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm">{diffInfo.icon}</span>
                <span className="text-sm font-medium" style={{ color: diffInfo.color }}>{diffInfo.label}</span>
                <span className="text-xs text-white/30">· {completedCount}/{totalLessons} lessons</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Course Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${progress}%`, backgroundColor: topic.color }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="flex-1 overflow-y-auto px-4 pt-2 safe-area-bottom" style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 32px)' }}>
        {units.length === 0 ? (
          <NoContentCard topic={topic} difficulty={diffInfo.label} />
        ) : (
          <div className="flex flex-col gap-6">
            {units.map((unit, unitIdx) => {
              const unitCompleted = unit.lessons.filter(l =>
                isLessonCompleted(userData, topic.id, difficulty, l.id),
              ).length
              const isUnlocked = unitIdx === 0 || units[unitIdx - 1].lessons.every(l =>
                isLessonCompleted(userData, topic.id, difficulty, l.id),
              )

              return (
                <div key={unit.id}>
                  {/* Unit header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: isUnlocked ? `${topic.color}25` : 'rgba(255,255,255,0.05)' }}
                    >
                      {isUnlocked ? unit.emoji : '🔒'}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{unit.title}</div>
                      <div className="text-xs text-white/40">
                        {unitCompleted}/{unit.lessons.length} · {unit.description}
                      </div>
                    </div>
                  </div>

                  {/* Lessons */}
                  <div className="flex flex-col gap-2 pl-2">
                    {unit.lessons.map((lesson, lessonIdx) => {
                      const done = isLessonCompleted(userData, topic.id, difficulty, lesson.id)
                      const prevDone = lessonIdx === 0 || isLessonCompleted(userData, topic.id, difficulty, unit.lessons[lessonIdx - 1].id)
                      const canAccess = isUnlocked && prevDone

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => canAccess && onSelectLesson(unit, lessonIdx)}
                          disabled={!canAccess}
                          className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all active:scale-[0.98] ${
                            done
                              ? 'bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/50'
                              : canAccess
                              ? 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8'
                              : 'bg-white/2 border-white/5 opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                            style={{
                              background: done
                                ? 'rgba(16,185,129,0.2)'
                                : canAccess
                                ? `${topic.color}20`
                                : 'rgba(255,255,255,0.05)',
                            }}
                          >
                            {done ? '✓' : canAccess ? lesson.emoji : '🔒'}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-white">{lesson.title}</div>
                            <div className="text-xs text-white/40 mt-0.5 flex items-center gap-2">
                              <span>⚡ {lesson.xp} XP</span>
                              <span>·</span>
                              <span>{lesson.quiz.length} questions</span>
                            </div>
                          </div>
                          {done && (
                            <div className="text-emerald-400 text-sm font-semibold">Done</div>
                          )}
                          {canAccess && !done && (
                            <span className="text-white/20 text-sm">→</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function NoContentCard({ topic, difficulty }: { topic: Topic; difficulty: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      <div className="text-5xl mb-4">🚧</div>
      <h3 className="text-lg font-bold text-white mb-2">Content Coming Soon</h3>
      <p className="text-sm text-white/40 leading-relaxed max-w-xs">
        We're building the {difficulty} curriculum for {topic.name}. In the meantime, try the{' '}
        <strong className="text-amber-400">Explain It Simply</strong> feature for instant AI-powered lessons on any topic.
      </p>
    </div>
  )
}
