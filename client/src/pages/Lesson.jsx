import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Kitty from '../components/Kitty'
import KawaiiDecor from '../components/KawaiiDecor'
import { lessonsData } from '../services/lessonData'
import { getAIFeedback } from '../services/aiService'

const Lesson = () => {
    const { type, id } = useParams()
    const navigate = useNavigate()
    const [showQuiz, setShowQuiz] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedbackMsg, setFeedbackMsg] = useState('')

    const lesson = lessonsData[type]?.find(l => l.id === (isNaN(id) ? id : parseInt(id))) || {
        title: "Coming Soon!",
        content: "Kittu is still writing this lesson. Check back later!",
        diagram: "✍️ + 🐱",
        code: "// Loading...",
        quiz: { q: "Is Kittu working hard?", a: ["Yes", "Maybe", "No"], c: 0 }
    }

    const handleAnswer = (index) => {
        setSelectedOption(index)
        const correct = index === lesson.quiz.c
        setIsCorrect(correct)
        setFeedbackMsg(getAIFeedback(correct, lesson.quiz.a[index], lesson.quiz.a[lesson.quiz.c], type))
        setShowFeedback(true)
    }

    const handleNext = () => {
        if (isCorrect) {
            if (!isNaN(id) && parseInt(id) < 20) {
                navigate(`/lesson/${type}/${parseInt(id) + 1}`)
                setShowQuiz(false)
                setSelectedOption(null)
                setIsCorrect(null)
                setShowFeedback(false)
            } else {
                navigate(type === 'deep-dive' ? '/deep-dive' : `/${type}`)
            }
        } else {
            setShowFeedback(false)
            setSelectedOption(null)
            setIsCorrect(null)
        }
    }

    return (
        <div style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--bg-light)', position: 'relative' }}>
            <KawaiiDecor />

            <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>
                <header className="aesthetic-banner" style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ zIndex: 2 }}>
                            <button
                                onClick={() => navigate(type === 'deep-dive' ? '/deep-dive' : `/${type}`)}
                                style={{
                                    marginBottom: '15px',
                                    color: 'var(--primary)',
                                    fontWeight: '800',
                                    background: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '25px',
                                    fontSize: '0.9rem'
                                }}
                            >
                                ← Back to Kingdom
                            </button>
                            <h1 style={{ fontSize: '2.8rem', color: 'var(--primary)', fontWeight: '800' }}>
                                {lesson.title}
                            </h1>
                            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ padding: '6px 15px', background: 'white', borderRadius: '15px', fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-muted)' }}>
                                    MASTER CLASS ✨
                                </span>
                                <span style={{ fontSize: '1.2rem' }}>📖</span>
                            </div>
                        </div>

                        <motion.div
                            className="float-soft"
                            style={{ fontSize: '4rem', opacity: 0.8 }}
                        >
                            🐈
                        </motion.div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {!showQuiz ? (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="glass-card"
                            style={{ padding: '50px', background: 'rgba(255,255,255,0.8)', border: '1px solid white' }}
                        >
                            <div style={{ fontSize: '1.35rem', lineHeight: '1.9', marginBottom: '40px', color: 'var(--text-main)', opacity: 0.9 }}>
                                {lesson.content}
                            </div>

                            <div className="float-soft" style={{
                                background: 'var(--cream)',
                                padding: '50px',
                                borderRadius: '35px',
                                textAlign: 'center',
                                fontSize: '5rem',
                                marginBottom: '40px',
                                border: '3px solid white',
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02)'
                            }}>
                                {lesson.diagram}
                            </div>

                            <div style={{
                                background: '#2C3333',
                                padding: '30px',
                                borderRadius: '22px',
                                fontFamily: "'Fira Code', monospace",
                                color: '#E7F6F2',
                                marginBottom: '50px',
                                position: 'relative',
                                whiteSpace: 'pre-wrap',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                            }}>
                                <div style={{ position: 'absolute', top: '15px', right: '20px', color: 'var(--secondary-light)', fontSize: '0.75rem', fontWeight: '800', opacity: 0.6 }}>CODE INSIGHT</div>
                                <pre style={{ fontSize: '1rem' }}>{lesson.code}</pre>
                            </div>

                            <button className="btn-primary" style={{ width: '100%', fontSize: '1.3rem', padding: '22px' }} onClick={() => setShowQuiz(true)}>
                                Take Thinking Test 🧠
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="quiz"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card"
                            style={{ padding: '50px', background: 'white', border: '1px solid var(--beige)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <span style={{ fontSize: '2.5rem' }}>🐚</span>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800' }}>Quick Quiz</h3>
                            </div>

                            <p style={{ fontSize: '1.4rem', marginBottom: '40px', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.5' }}>{lesson.quiz.q}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {lesson.quiz.a.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => !showFeedback && handleAnswer(i)}
                                        style={{
                                            padding: '25px',
                                            borderRadius: '25px',
                                            textAlign: 'left',
                                            fontSize: '1.15rem',
                                            fontWeight: '700',
                                            border: '2px solid',
                                            borderColor: selectedOption === i
                                                ? (isCorrect ? '#A5C9CA' : '#E2DCC8')
                                                : 'var(--cream)',
                                            background: selectedOption === i
                                                ? (isCorrect ? '#F8FBF8' : '#FAF9F6')
                                                : '#FAF9F6',
                                            color: 'var(--text-main)',
                                            cursor: showFeedback ? 'default' : 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>

                            {showFeedback && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ marginTop: '40px', textAlign: 'center' }}
                                >
                                    <p style={{
                                        fontSize: '1.3rem',
                                        fontWeight: '700',
                                        color: i === 0 ? 'var(--primary)' : 'var(--text-muted)',
                                        marginBottom: '25px',
                                        lineHeight: '1.7',
                                        padding: '25px',
                                        background: isCorrect ? 'var(--mint-green)' : 'var(--beige)',
                                        borderRadius: '25px',
                                        border: '1px solid white'
                                    }}>
                                        {feedbackMsg}
                                    </p>
                                    <button className="btn-primary" style={{ padding: '18px 60px' }} onClick={handleNext}>
                                        {isCorrect ? 'Continue Journey ✨' : 'Try Again 🌿'}
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '3rem', opacity: 0.3 }} className="float-soft">
                🧸
            </div>
        </div>
    )
}

export default Lesson
