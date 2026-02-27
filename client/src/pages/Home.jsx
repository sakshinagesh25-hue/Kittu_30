import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Kitty from '../components/Kitty'
import KawaiiDecor from '../components/KawaiiDecor'

const Home = () => {
    const [showContent, setShowContent] = useState(false)
    const [isKittyCorner, setIsKittyCorner] = useState(false)
    const [showWelcome, setShowWelcome] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsKittyCorner(true)
            setShowWelcome(false)
            setTimeout(() => setShowContent(true), 1000)
        }, 4500)
        return () => clearTimeout(timer)
    }, [])

    const paths = [
        { title: 'Programming Basics', path: '/programming', icon: '🧠', color: 'var(--beige)' },
        { title: 'HTML', path: '/html', icon: '📄', color: 'var(--mint-green)' },
        { title: 'CSS', path: '/css', icon: '🎨', color: 'var(--lavender-gray)' },
        { title: 'JavaScript', path: '/javascript', icon: '⚡', color: 'var(--peach)' },
        { title: 'Deep Dive: Tags & Code', path: '/deep-dive', icon: '🔍', color: 'var(--beige)' },
    ]

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-light)',
            overflow: 'hidden',
            padding: '20px',
            position: 'relative'
        }}>
            <KawaiiDecor />

            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 20
                        }}
                    >
                        <h1
                            className="welcome-text-anim"
                            style={{
                                fontSize: '4.5rem',
                                fontWeight: '800',
                                marginBottom: '20px',
                                color: 'var(--primary)',
                                textAlign: 'center',
                                textShadow: '2px 2px 10px rgba(0,0,0,0.05)',
                                fontFamily: "'Outfit', sans-serif"
                            }}
                        >
                            Welcome!
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: '600' }}>
                            to Kittu Code Kingdom ✨
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <Kitty isCorner={isKittyCorner} />

            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="animate-fade-in"
                        style={{
                            width: '100%',
                            maxWidth: '1000px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 10
                        }}
                    >
                        <h2 style={{
                            fontSize: '3rem',
                            marginBottom: '50px',
                            color: 'var(--primary)',
                            fontWeight: '800',
                            textAlign: 'center'
                        }}>
                            Choose Your Path 🌿
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '25px',
                            width: '100%',
                            marginBottom: '60px'
                        }}>
                            {paths.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate(p.path)}
                                    className="glass-card float-soft"
                                    style={{
                                        padding: '40px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'white',
                                        border: `2px solid ${p.color}`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                >
                                    <span style={{ fontSize: '4rem', marginBottom: '20px' }}>{p.icon}</span>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{p.title}</h3>
                                </motion.div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <button className="btn-primary" style={{ padding: '20px 60px', fontSize: '1.3rem' }} onClick={() => navigate('/programming')}>
                                Start Learning! 🪴
                            </button>
                            <button className="glass-card" style={{ padding: '18px 35px', fontWeight: '800', color: 'var(--primary)' }} onClick={() => navigate('/dashboard')}>
                                Profile Dashboard ☁️
                            </button>
                            <button className="glass-card" style={{ padding: '18px 35px', fontWeight: '800', color: 'var(--primary)' }} onClick={() => navigate('/level')}>
                                Level & Rewards ⭐
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Home
