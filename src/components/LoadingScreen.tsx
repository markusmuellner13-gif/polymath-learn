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
    <div className="min-h-screen bg-[#0A0A1B] flex flex-col items-center justify-center px-8">
      <div className="flex flex-col items-center gap-8 w-full max-w-sm">
        {/* Logo */}
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 animate-pulse">
            <span className="text-4xl font-black text-white">P</span>
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
