import { useEffect, useState } from 'react'

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  const phases = ['Initializing knowledge base…', 'Loading your progress…', 'Preparing your lessons…', 'Ready!']

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 18 + 5
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 400)
          return 100
        }
        setPhase(Math.min(3, Math.floor((next / 100) * 4)))
        return next
      })
    }, 120)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className="min-h-svh bg-[#0A0A1B] flex flex-col items-center justify-center safe-area-top-pad safe-area-bottom px-8">
      <div className="flex flex-col items-center gap-8 w-full max-w-sm">
        {/* Logo */}
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-500/30">
            <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
              {/* Letter P as path */}
              <path
                d="M 18 14 L 18 86 L 30 86 L 30 58 L 56 58 Q 82 58 82 36 Q 82 14 56 14 Z"
                fill="white"
              />
              <path
                d="M 30 26 L 54 26 Q 70 26 70 36 Q 70 46 54 46 L 30 46 Z"
                fill="#6D28D9"
              />
            </svg>
          </div>
          <div className="absolute -inset-2 rounded-3xl bg-violet-500/20 blur-xl animate-ping" style={{ animationDuration: '2s' }} />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-black text-white tracking-tight">Polymath</h1>
          <p className="text-violet-300 mt-1 text-sm font-medium tracking-widest uppercase">Learn Anything</p>
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-white/40 mt-3 font-medium transition-all duration-300">
            {phases[phase]}
          </p>
        </div>
      </div>
    </div>
  )
}
