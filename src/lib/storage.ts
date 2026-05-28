import type { UserData, CourseProgress, LessonProgress } from '../types'

const USER_KEY = 'polymath_user'
const LESSON_CACHE_KEY = 'polymath_lesson_cache'

export const DEFAULT_USER: UserData = {
  xp: 0,
  level: 1,
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  totalLessonsCompleted: 0,
  courses: [],
  apiKey: '',
  onboarded: false,
}

export function loadUser(): UserData {
  try {
    const raw = localStorage.getItem(USER_KEY)
    if (!raw) return { ...DEFAULT_USER }
    return { ...DEFAULT_USER, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_USER }
  }
}

export function saveUser(data: UserData): void {
  localStorage.setItem(USER_KEY, JSON.stringify(data))
}

export function updateStreak(data: UserData): UserData {
  const today = new Date().toDateString()
  const last = data.lastActiveDate

  if (last === today) return data

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const isConsecutive = last === yesterday.toDateString()

  const newStreak = isConsecutive ? data.streak + 1 : 1
  const longestStreak = Math.max(data.longestStreak, newStreak)

  return { ...data, streak: newStreak, longestStreak, lastActiveDate: today }
}

export function addXP(data: UserData, amount: number): UserData {
  const newXP = data.xp + amount
  const newLevel = Math.floor(newXP / 1000) + 1
  return { ...data, xp: newXP, level: newLevel }
}

export function getCourseProgress(data: UserData, topicId: string, difficulty: string): CourseProgress | null {
  return data.courses.find(c => c.topicId === topicId && c.difficulty === difficulty) ?? null
}

export function isLessonCompleted(data: UserData, topicId: string, difficulty: string, lessonId: string): boolean {
  const course = getCourseProgress(data, topicId, difficulty)
  if (!course) return false
  return course.lessonsProgress.some(lp => lp.lessonId === lessonId && lp.completed)
}

export function completeLessonInData(
  data: UserData,
  topicId: string,
  difficulty: string,
  lessonId: string,
  score: number,
  xpEarned: number,
): UserData {
  const lessonProgress: LessonProgress = {
    lessonId,
    completed: true,
    score,
    completedAt: new Date().toISOString(),
  }

  let courses = [...data.courses]
  const courseIdx = courses.findIndex(c => c.topicId === topicId && c.difficulty === difficulty)

  if (courseIdx === -1) {
    courses.push({
      topicId,
      difficulty: difficulty as UserData['courses'][0]['difficulty'],
      startedAt: new Date().toISOString(),
      lessonsProgress: [lessonProgress],
    })
  } else {
    const course = { ...courses[courseIdx] }
    const existing = course.lessonsProgress.findIndex(lp => lp.lessonId === lessonId)
    if (existing === -1) {
      course.lessonsProgress = [...course.lessonsProgress, lessonProgress]
    } else {
      course.lessonsProgress = course.lessonsProgress.map((lp, i) => (i === existing ? lessonProgress : lp))
    }
    courses[courseIdx] = course
  }

  let updated = { ...data, courses, totalLessonsCompleted: data.totalLessonsCompleted + 1 }
  updated = addXP(updated, xpEarned)
  updated = updateStreak(updated)
  return updated
}

export function getCachedLessonContent(lessonId: string): string | null {
  try {
    const cache = JSON.parse(localStorage.getItem(LESSON_CACHE_KEY) ?? '{}')
    return cache[lessonId] ?? null
  } catch {
    return null
  }
}

export function cacheLessonContent(lessonId: string, content: string): void {
  try {
    const cache = JSON.parse(localStorage.getItem(LESSON_CACHE_KEY) ?? '{}')
    cache[lessonId] = content
    localStorage.setItem(LESSON_CACHE_KEY, JSON.stringify(cache))
  } catch {}
}
