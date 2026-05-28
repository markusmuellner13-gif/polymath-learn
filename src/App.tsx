import { useState, useCallback } from 'react'
import type { AppScreen, Topic, Difficulty, Unit, Lesson } from './types'
import { useUserData } from './hooks/useUserData'
import { getAllUnitsForTopic } from './data/curriculum'
import LoadingScreen from './components/LoadingScreen'
import HomeScreen from './components/HomeScreen'
import DifficultyScreen from './components/DifficultyScreen'
import CourseScreen from './components/CourseScreen'
import LessonScreen from './components/LessonScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import ExplainScreen from './components/ExplainScreen'
import SettingsModal from './components/SettingsModal'

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('loading')
  const [showSettings, setShowSettings] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null)
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [quizScore, setQuizScore] = useState(0)
  const [quizXP, setQuizXP] = useState(0)

  const { userData, completeLesson, setApiKey } = useUserData()

  const handleTopicSelect = useCallback((topic: Topic) => {
    setSelectedTopic(topic)
    if (topic.id === 'explain') {
      setScreen('explain')
    } else {
      setScreen('difficulty')
    }
  }, [])

  const handleDifficultySelect = useCallback((difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty)
    setScreen('course')
  }, [])

  const handleLessonSelect = useCallback((unit: Unit, lessonIdx: number) => {
    setSelectedUnit(unit)
    setSelectedLesson(unit.lessons[lessonIdx])
    setScreen('lesson')
  }, [])

  const handleQuizComplete = useCallback(
    (score: number, xpEarned: number) => {
      if (selectedTopic && selectedDifficulty && selectedLesson) {
        completeLesson(selectedTopic.id, selectedDifficulty, selectedLesson.id, score, xpEarned)
        setQuizScore(score)
        setQuizXP(xpEarned)
        setScreen('result')
      }
    },
    [selectedTopic, selectedDifficulty, selectedLesson, completeLesson],
  )

  const currentUnits =
    selectedTopic && selectedDifficulty ? getAllUnitsForTopic(selectedTopic.id, selectedDifficulty) : []

  return (
    <div className="font-sans antialiased">
      {screen === 'loading' && <LoadingScreen onDone={() => setScreen('home')} />}

      {screen === 'home' && (
        <HomeScreen userData={userData} onSelectTopic={handleTopicSelect} onSettings={() => setShowSettings(true)} />
      )}

      {screen === 'explain' && (
        <ExplainScreen userData={userData} onBack={() => setScreen('home')} onSettings={() => setShowSettings(true)} />
      )}

      {screen === 'difficulty' && selectedTopic && (
        <DifficultyScreen
          topic={selectedTopic}
          onSelect={handleDifficultySelect}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'course' && selectedTopic && selectedDifficulty && (
        <CourseScreen
          topic={selectedTopic}
          difficulty={selectedDifficulty}
          units={currentUnits}
          userData={userData}
          onSelectLesson={handleLessonSelect}
          onBack={() => setScreen('difficulty')}
        />
      )}

      {screen === 'lesson' && selectedLesson && selectedUnit && selectedTopic && selectedDifficulty && (
        <LessonScreen
          lesson={selectedLesson}
          unit={selectedUnit}
          topic={selectedTopic}
          difficulty={selectedDifficulty}
          userData={userData}
          onStartQuiz={() => setScreen('quiz')}
          onBack={() => setScreen('course')}
        />
      )}

      {screen === 'quiz' && selectedLesson && selectedTopic && (
        <QuizScreen
          lesson={selectedLesson}
          topic={selectedTopic}
          onComplete={handleQuizComplete}
          onBack={() => setScreen('lesson')}
        />
      )}

      {screen === 'result' && selectedLesson && selectedTopic && (
        <ResultScreen
          lesson={selectedLesson}
          topic={selectedTopic}
          score={quizScore}
          xpEarned={quizXP}
          userData={userData}
          onContinue={() => setScreen('course')}
        />
      )}

      {showSettings && (
        <SettingsModal
          userData={userData}
          onSaveApiKey={key => { setApiKey(key); setShowSettings(false) }}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  )
}
