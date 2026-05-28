import { useState } from 'react'
import type { UserData } from '../types'

interface Props {
  userData: UserData
  onSaveApiKey: (key: string) => void
  onClose: () => void
}

export default function SettingsModal({ userData, onSaveApiKey, onClose }: Props) {
  const [key, setKey] = useState(userData.apiKey)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    onSaveApiKey(key.trim())
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-[#12122A] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white text-xl">✕</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'XP', value: userData.xp.toLocaleString(), icon: '⚡' },
            { label: 'Level', value: userData.level, icon: '🎓' },
            { label: 'Streak', value: `${userData.streak}d`, icon: '🔥' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 rounded-2xl p-3 text-center">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40">{s.label}</div>
            </div>
          ))}
        </div>

        {/* API Key */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-white/70 mb-2">
            Claude API Key
            <span className="ml-2 text-xs text-violet-400 font-normal">Required for AI features</span>
          </label>
          <input
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="sk-ant-api03-..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 font-mono"
          />
          <p className="text-xs text-white/30 mt-2">
            Your key is stored locally on your device only. Get one at console.anthropic.com
          </p>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
        >
          {saved ? '✓ Saved!' : 'Save API Key'}
        </button>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-white/30 text-center">
            Best streak: {userData.longestStreak} days · {userData.totalLessonsCompleted} lessons completed
          </p>
        </div>
      </div>
    </div>
  )
}
