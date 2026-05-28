import type { UserData } from '../types'

interface Props {
  userData: UserData
  onSettings: () => void
}

export default function StatsBar({ userData, onSettings }: Props) {
  const xpToNext = 1000 - (userData.xp % 1000)
  const xpProgress = ((userData.xp % 1000) / 1000) * 100

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
      {/* Left: Level + XP */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
          <span className="text-xs font-black text-white">{userData.level}</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-amber-400">{userData.xp.toLocaleString()} XP</span>
            <span className="text-xs text-white/30">· {xpToNext} to next</span>
          </div>
          <div className="w-28 h-1 bg-white/10 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Right: Streak + Settings */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-orange-500/20 rounded-xl px-3 py-1.5">
          <span className="text-base">🔥</span>
          <span className="text-sm font-bold text-orange-400">{userData.streak}</span>
        </div>
        <button
          onClick={onSettings}
          className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <span className="text-sm">⚙️</span>
        </button>
      </div>
    </div>
  )
}
