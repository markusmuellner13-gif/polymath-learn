import { useState } from 'react'
import { TOPICS } from '../data/topics'
import type { Topic, UserData } from '../types'
import StatsBar from './StatsBar'

interface Props {
  userData: UserData
  onSelectTopic: (topic: Topic) => void
  onSettings: () => void
}

export default function HomeScreen({ userData, onSelectTopic, onSettings }: Props) {
  const [search, setSearch] = useState('')

  const regularTopics = TOPICS.filter(t => t.id !== 'explain')
  const explainTopic = TOPICS.find(t => t.id === 'explain')!

  const filtered = search
    ? regularTopics.filter(
        t =>
          t.name.toLowerCase().includes(search.toLowerCase()) ||
          t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())),
      )
    : regularTopics

  return (
    <div className="min-h-screen bg-[#0A0A1B] flex flex-col">
      <StatsBar userData={userData} onSettings={onSettings} />

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        {/* Hero */}
        <div className="pt-8 pb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-violet-400 text-xs font-semibold tracking-wide uppercase">Polymath</span>
          </div>
          <h1 className="text-3xl font-black text-white leading-tight mb-2">
            What will you<br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              master today?
            </span>
          </h1>
          <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
            Pick a subject, set your level, and learn through bite-sized interactive lessons.
            Earn XP and build your daily streak.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search topics…"
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>

        {/* Explain Simply card — full width */}
        <button
          onClick={() => onSelectTopic(explainTopic)}
          className="w-full mb-5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-5 text-left group hover:border-amber-400/60 transition-all active:scale-[0.98]"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-2xl flex-shrink-0">
              ✨
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-white">Explain It Simply</span>
                <span className="text-xs bg-amber-500/30 text-amber-300 rounded-full px-2 py-0.5 font-medium">AI</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Ask me anything. Paste a question, upload an image, screenshot, or PDF — I'll explain it clearly and completely.
              </p>
            </div>
          </div>
        </button>

        {/* Topics grid */}
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Choose a Subject</h2>
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-white/30 text-sm">No topics match "{search}"</div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filtered.map(topic => (
                <TopicCard key={topic.id} topic={topic} onClick={() => onSelectTopic(topic)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function TopicCard({ topic, onClick }: { topic: Topic; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative bg-white/5 border border-white/10 rounded-2xl p-4 text-left group hover:border-white/20 hover:bg-white/8 transition-all active:scale-95 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ background: `linear-gradient(135deg, ${topic.color}80, transparent)` }}
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 font-bold"
        style={{ background: `${topic.color}25`, color: topic.color }}
      >
        {topic.icon}
      </div>
      <div className="text-sm font-bold text-white mb-1 leading-tight">{topic.name}</div>
      <div className="text-xs text-white/40 leading-tight line-clamp-2">{topic.description}</div>
    </button>
  )
}
