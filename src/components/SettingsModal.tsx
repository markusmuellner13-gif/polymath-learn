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
  const [showKey, setShowKey] = useState(false)
  const [copyLabel, setCopyLabel] = useState('Copy link')

  const hasKey = !!userData.apiKey

  function handleSave() {
    onSaveApiKey(key.trim())
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  async function handleShare() {
    const shareUrl = `${window.location.origin}${window.location.pathname}#k=${userData.apiKey}`
    if (navigator.share) {
      await navigator.share({
        title: 'Polymath – my API key',
        text: 'Open this on your other device to import my Polymath API key automatically.',
        url: shareUrl,
      }).catch(() => {})
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopyLabel('Copied!')
      setTimeout(() => setCopyLabel('Copy link'), 2500)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-[#12122A] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90svh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Settings</h2>
            <button onClick={onClose} className="text-white/50 active:text-white text-xl w-8 h-8 flex items-center justify-center">✕</button>
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
                <strong>100% Free, no credit card ever</strong> — Groq runs Llama 4 at lightning speed.
              </p>
            </div>

            {/* Transfer to other device — shown only when key is set */}
            {hasKey && (
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 mb-3">
                <p className="text-sm font-semibold text-violet-300 mb-1">📲 Use on another device</p>
                <p className="text-xs text-white/50 leading-relaxed mb-3">
                  Tap below to share a link. Open it on your other phone and your API key is imported automatically.
                </p>
                <button
                  onClick={handleShare}
                  className="w-full py-2.5 bg-violet-500/30 border border-violet-500/40 rounded-xl text-violet-200 text-sm font-semibold active:opacity-70 transition-opacity"
                >
                  {copyLabel === 'Copied!' ? '✓ Link copied!' : '🔗 Share key to another device'}
                </button>
                <p className="text-xs text-white/25 mt-2 text-center">Only send this link to yourself</p>
              </div>
            )}

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
                    🔒 Your key is stored only on this device. Use the "Share key" button above to transfer it.
                  </p>
                </div>
              </div>
            )}

            {/* Key input with show/hide */}
            <div className="relative mb-3">
              <input
                type={showKey ? 'text' : 'password'}
                value={key}
                onChange={e => setKey(e.target.value)}
                placeholder="Paste your Groq key here: gsk_..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-white/20 focus:outline-none focus:border-orange-400 font-mono"
              />
              {key && (
                <button
                  type="button"
                  onClick={() => setShowKey(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 active:text-white/70 text-lg"
                >
                  {showKey ? '🙈' : '👁'}
                </button>
              )}
            </div>

            <button
              onClick={handleSave}
              disabled={!key.trim()}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold text-sm transition-all active:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {saved ? '✓ Saved!' : 'Save API Key'}
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
