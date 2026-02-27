import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Kitty from '../components/Kitty'
import KawaiiDecor from '../components/KawaiiDecor'
import { lessonsData } from '../services/lessonData'

const Section = ({ title, type }) => {
    const navigate = useNavigate()
    const lessons = lessonsData[type] || []

    return (
        <div style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--bg-light)', position: 'relative' }}>
            <KawaiiDecor />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="aesthetic-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                    <div>
                        <button
                            onClick={() => navigate('/')}
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
                            ← Back Home
                        </button>
                        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '800' }}>
                            {title}
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>
                            Begin your coding adventure with Kittu 🌿
                        </p>
                    </div>
                    <div style={{ transform: 'scale(1)' }} className="float-soft">
                        <Kitty isCorner={true} showBubble={false} />
                    </div>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '25px'
                }}>
                    {lessons.map((l, i) => (
                        <motion.div
                            key={l.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => navigate(`/lesson/${type}/${l.id}`)}
                            className="glass-card"
                            style={{
                                padding: '35px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                background: 'white',
                                border: '2px solid var(--cream)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}
                        >
                            <div style={{ fontSize: '3rem' }}>🐚</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '5px' }}>Lesson {l.id}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '600' }}>{l.title}</p>
                            </div>
                        </motion.div>
                    ))}

                    {Array.from({ length: Math.max(0, 10 - lessons.length) }).map((_, i) => (
                        <div
                            key={`placeholder-${i}`}
                            className="glass-card"
                            style={{
                                padding: '35px',
                                textAlign: 'center',
                                opacity: 0.4,
                                background: 'var(--background-light)',
                                border: '1px dashed var(--primary-light)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem' }}>🔒</div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Lesson {lessons.length + i + 1}</h3>
                            <p style={{ fontSize: '0.85rem' }}>Unlocks Soon</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '80px', textAlign: 'center', paddingBottom: '40px' }}>
                    <button className="btn-primary" style={{ padding: '20px 60px', fontSize: '1.2rem' }} onClick={() => navigate('/quiz')}>
                        Take Thinking Test 🏆
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section
