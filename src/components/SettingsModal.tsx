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
  const [showGuide, setShowGuide] = useState(!userData.apiKey)

  const handleSave = () => {
    onSaveApiKey(key.trim())
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const hasKey = !!userData.apiKey

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-[#12122A] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90svh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Settings</h2>
            <button onClick={onClose} className="text-white/50 hover:text-white text-xl w-8 h-8 flex items-center justify-center">✕</button>
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

          {/* API Key section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-bold text-white">Groq API Key</p>
                <p className="text-xs text-white/40">Powers "Explain Simply" and AI lessons</p>
              </div>
              <div className={`text-xs font-semibold rounded-full px-2.5 py-1 ${hasKey ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                {hasKey ? '✓ Active' : 'Not set'}
              </div>
            </div>

            {/* Free badge */}
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2.5 mb-3">
              <span className="text-lg">🎉</span>
              <p className="text-xs text-emerald-300 leading-relaxed">
                <strong>100% Free, no credit card ever</strong> — Groq runs Llama 4 at lightning speed on a generous free tier.
              </p>
            </div>

            {/* How to get key guide */}
            <button
              onClick={() => setShowGuide(g => !g)}
              className="w-full flex items-center justify-between bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-3 mb-3 text-left"
            >
              <span className="text-sm text-orange-300 font-medium">📖 Get your free Groq key (1 minute)</span>
              <span className="text-orange-400 text-sm">{showGuide ? '▲' : '▼'}</span>
            </button>

            {showGuide && (
              <div className="bg-white/3 border border-white/8 rounded-xl p-4 mb-3 flex flex-col gap-3">
                {[
                  { n: '1', text: 'Open', link: 'console.groq.com/keys', href: 'https://console.groq.com/keys' },
                  { n: '2', text: 'Sign up with your email — no credit card needed', link: '', href: '' },
                  { n: '3', text: 'Click "Create API key", give it any name', link: '', href: '' },
                  { n: '4', text: 'Copy the key (starts with gsk_) and paste it below', link: '', href: '' },
                ].map(step => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/30 text-orange-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.n}
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed pt-0.5">
                      {step.text}{' '}
                      {step.href && (
                        <a href={step.href} target="_blank" rel="noopener noreferrer" className="text-orange-400 underline font-medium">
                          {step.link}
                        </a>
                      )}
                    </p>
                  </div>
                ))}
                <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <p className="text-xs text-white/50">
                    🔒 Your key is stored only on <em>your device</em>. It is never sent anywhere except directly to Groq's servers when you use AI features.
                  </p>
                </div>
              </div>
            )}

            <input
              type="password"
              value={key}
              onChange={e => setKey(e.target.value)}
              placeholder="Paste your Groq key here: gsk_..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 font-mono mb-3"
            />

            <button
              onClick={handleSave}
              disabled={!key.trim()}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {saved ? '✓ Saved! AI features are now active.' : 'Save API Key'}
            </button>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/25 text-center">
              Best streak: {userData.longestStreak} days · {userData.totalLessonsCompleted} lessons completed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
