import { useState, useRef, useCallback } from 'react'
import type { ExplainMessage, UserData } from '../types'
import { explainSimply } from '../lib/anthropic'

interface Props {
  userData: UserData
  onBack: () => void
  onSettings: () => void
}

export default function ExplainScreen({ userData, onBack, onSettings }: Props) {
  const [messages, setMessages] = useState<ExplainMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<{ base64: string; mime: string; name: string } | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)

  const handleFile = useCallback(async (file: File) => {
    if (file.type === 'application/pdf') {
      const arrayBuffer = await file.arrayBuffer()
      const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist')
      GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`
      const pdf = await getDocument({ data: arrayBuffer }).promise
      let text = ''
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        text += content.items.map((item: any) => item.str).join(' ') + '\n'
      }
      setInput(prev => (prev ? prev + '\n\n[PDF content]:\n' + text.slice(0, 3000) : '[PDF content]:\n' + text.slice(0, 3000)))
      setImage(null)
    } else if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = e => {
        const result = e.target?.result as string
        const base64 = result.split(',')[1]
        setImage({ base64, mime: file.type, name: file.name })
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  async function handleSend() {
    if (!input.trim() && !image) return
    if (!userData.apiKey) {
      onSettings()
      return
    }

    const userMsg: ExplainMessage = {
      role: 'user',
      content: input.trim(),
      imageBase64: image?.base64,
      imageName: image?.name,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setImage(null)
    setLoading(true)
    scrollToBottom()

    try {
      const answer = await explainSimply(userData.apiKey, userMsg.content, image?.base64, image?.mime)
      const assistantMsg: ExplainMessage = {
        role: 'assistant',
        content: answer,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMsg])
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I couldn't fetch an answer. Error: ${err.message}. Make sure your API key is correct in Settings.`,
          timestamp: new Date(),
        },
      ])
    } finally {
      setLoading(false)
      scrollToBottom()
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A1B] flex flex-col" onDrop={handleDrop} onDragOver={e => e.preventDefault()}>
      {/* Header */}
      <div className="px-4 pt-12 pb-4 border-b border-white/5">
        <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors">
          <span>←</span> Back
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-white flex items-center gap-2">
              ✨ Explain It Simply
            </h1>
            <p className="text-sm text-white/40 mt-0.5">
              {messages.length === 0 ? "What can I explain for you simply today?" : `${messages.filter(m => m.role === 'assistant').length} explanation${messages.filter(m => m.role === 'assistant').length !== 1 ? 's' : ''}`}
            </p>
          </div>
          {!userData.apiKey && (
            <button
              onClick={onSettings}
              className="text-xs bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-xl px-3 py-1.5 font-medium"
            >
              Add API Key
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-4xl">
              ✨
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Ask me anything</h2>
              <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                Type a question, paste a problem, upload a screenshot, photo, or PDF — I'll give you a clear, complete explanation.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 w-full max-w-xs mt-2">
              {[
                'Explain quantum entanglement simply',
                'How does compound interest work?',
                'What caused World War 1?',
                'Explain how neural networks learn',
              ].map(prompt => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="text-xs bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white/60 text-left hover:border-white/20 hover:text-white/80 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">
                ✨
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-violet-500/20 border border-violet-500/30 rounded-tr-sm'
                  : 'bg-white/5 border border-white/10 rounded-tl-sm'
              }`}
            >
              {msg.imageName && (
                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
                  <span>🖼</span>
                  <span>{msg.imageName}</span>
                </div>
              )}
              {msg.role === 'user' ? (
                <p className="text-sm text-white/90 whitespace-pre-wrap">{msg.content}</p>
              ) : (
                <MarkdownResponse content={msg.content} />
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-sm mr-2 flex-shrink-0">
              ✨
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white/30 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-white/5 p-4 flex flex-col gap-3">
        {image && (
          <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-xl px-3 py-2">
            <span className="text-sm">🖼</span>
            <span className="text-xs text-violet-300 flex-1 truncate">{image.name}</span>
            <button onClick={() => setImage(null)} className="text-white/40 hover:text-white text-sm">✕</button>
          </div>
        )}
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileRef}
            className="hidden"
            accept="image/*,.pdf"
            onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 transition-colors flex-shrink-0"
            title="Upload image or PDF"
          >
            📎
          </button>
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
              placeholder={image ? 'Add a question about the image…' : 'Ask anything… (or drop a file here)'}
              rows={1}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 resize-none transition-colors leading-relaxed"
              style={{ minHeight: '44px', maxHeight: '120px', overflowY: 'auto' }}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={loading || (!input.trim() && !image)}
            className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all disabled:opacity-30 bg-gradient-to-br from-violet-500 to-indigo-500 hover:opacity-90 active:scale-95"
          >
            {loading ? '⏳' : '→'}
          </button>
        </div>
      </div>
    </div>
  )
}

function MarkdownResponse({ content }: { content: string }) {
  const lines = content.split('\n')
  return (
    <div className="flex flex-col gap-1.5">
      {lines.map((line, i) => {
        if (line.startsWith('## ')) return <h2 key={i} className="text-base font-bold text-white mt-2 mb-0.5">{line.slice(3)}</h2>
        if (line.startsWith('# ')) return <h1 key={i} className="text-lg font-black text-white mt-2 mb-1">{line.slice(2)}</h1>
        if (line.startsWith('### ')) return <h3 key={i} className="text-sm font-bold text-white/90 mt-1">{line.slice(4)}</h3>
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <div key={i} className="flex items-start gap-1.5 text-sm text-white/75">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
              <span>{line.slice(2)}</span>
            </div>
          )
        }
        if (line.trim() === '') return <div key={i} className="h-1" />
        return <p key={i} className="text-sm text-white/75 leading-relaxed">{line}</p>
      })}
    </div>
  )
}
