/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE?: string
  readonly VITE_GROQ_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
