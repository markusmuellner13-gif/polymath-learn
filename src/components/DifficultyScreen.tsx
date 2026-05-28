import { DIFFICULTIES } from '../data/topics'
import type { Topic, Difficulty } from '../types'

interface Props {
  topic: Topic
  onSelect: (difficulty: Difficulty) => void
  onBack: () => void
}

export default function DifficultyScreen({ topic, onSelect, onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#0A0A1B] flex flex-col">
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
          <span>←</span> Back
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold"
            style={{ background: `${topic.color}25`, color: topic.color }}
          >
            {topic.icon}
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">{topic.name}</h1>
            <p className="text-sm text-white/40">{topic.description}</p>
          </div>
        </div>
        <h2 className="text-lg font-bold text-white">Pick your level</h2>
        <p className="text-sm text-white/40 mt-1">Be honest — the right level makes learning stick.</p>
      </div>

      {/* Difficulty options */}
      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="flex flex-col gap-3">
          {DIFFICULTIES.map((diff, i) => (
            <button
              key={diff.id}
              onClick={() => onSelect(diff.id)}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 text-left hover:border-white/25 hover:bg-white/8 transition-all active:scale-[0.98] overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"
                style={{ backgroundColor: diff.color }}
              />
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${diff.color}20` }}
                >
                  {diff.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-white text-base">{diff.label}</span>
                    <span className="text-xs rounded-full px-2 py-0.5 font-medium" style={{ background: `${diff.color}20`, color: diff.color }}>
                      {diff.tagline}
                    </span>
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed">{diff.description}</p>
                </div>
                <span className="text-white/20 group-hover:text-white/50 text-lg transition-colors">→</span>
              </div>

              {/* Progress indicator dots */}
              <div className="flex gap-1 mt-3 ml-16">
                {DIFFICULTIES.map((_, j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full transition-all"
                    style={{
                      width: j <= i ? '20px' : '8px',
                      backgroundColor: j <= i ? diff.color : 'rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
