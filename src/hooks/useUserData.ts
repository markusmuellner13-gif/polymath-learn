import { useState, useCallback } from 'react'
import { loadUser, saveUser, completeLessonInData, updateStreak } from '../lib/storage'
import type { UserData, Difficulty } from '../types'

export function useUserData() {
  const [userData, setUserData] = useState<UserData>(() => {
    const u = loadUser()
    return updateStreak(u)
  })

  const update = useCallback((next: UserData) => {
    setUserData(next)
    saveUser(next)
  }, [])

  const completeLesson = useCallback(
    (topicId: string, difficulty: Difficulty, lessonId: string, score: number, xpEarned: number) => {
      setUserData(prev => {
        const next = completeLessonInData(prev, topicId, difficulty, lessonId, score, xpEarned)
        saveUser(next)
        return next
      })
    },
    [],
  )

  const setApiKey = useCallback((key: string) => {
    setUserData(prev => {
      const next = { ...prev, apiKey: key }
      saveUser(next)
      return next
    })
  }, [])

  const markOnboarded = useCallback(() => {
    setUserData(prev => {
      const next = { ...prev, onboarded: true }
      saveUser(next)
      return next
    })
  }, [])

  return { userData, update, completeLesson, setApiKey, markOnboarded }
}
