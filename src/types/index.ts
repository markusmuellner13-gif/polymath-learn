export interface Topic {
  id: string
  name: string
  icon: string
  color: string
  gradient: string
  description: string
  tags: string[]
}

export type Difficulty = 'spark' | 'builder' | 'explorer' | 'scholar' | 'master'

export interface DifficultyInfo {
  id: Difficulty
  label: string
  tagline: string
  description: string
  icon: string
  color: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface Lesson {
  id: string
  title: string
  emoji: string
  content: string
  keyPoints: string[]
  quiz: QuizQuestion[]
  xp: number
}

export interface Unit {
  id: string
  title: string
  emoji: string
  description: string
  lessons: Lesson[]
}

export interface Curriculum {
  topicId: string
  difficulty: Difficulty
  units: Unit[]
}

export interface LessonProgress {
  lessonId: string
  completed: boolean
  score: number
  completedAt: string
}

export interface CourseProgress {
  topicId: string
  difficulty: Difficulty
  startedAt: string
  lessonsProgress: LessonProgress[]
}

export interface UserData {
  xp: number
  level: number
  streak: number
  longestStreak: number
  lastActiveDate: string | null
  totalLessonsCompleted: number
  courses: CourseProgress[]
  apiKey: string
  onboarded: boolean
}

export type AppScreen =
  | 'loading'
  | 'home'
  | 'difficulty'
  | 'course'
  | 'lesson'
  | 'quiz'
  | 'result'
  | 'explain'
  | 'settings'

export interface AppState {
  screen: AppScreen
  selectedTopic: Topic | null
  selectedDifficulty: Difficulty | null
  selectedUnit: Unit | null
  selectedLesson: Lesson | null
  quizAnswers: number[]
  userData: UserData
}

export interface ExplainMessage {
  role: 'user' | 'assistant'
  content: string
  imageBase64?: string
  imageName?: string
  timestamp: Date
}
