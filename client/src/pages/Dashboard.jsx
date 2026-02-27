import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Dashboard = () => {
    const navigate = useNavigate()

    // Mock user data - will be synced with backend/localStorage
    const user = {
        completedLessons: 12,
        totalPoints: 120,
        currentLevel: 2,
        streak: 3,
        recentScores: [100, 90, 80]
    }

    const stats = [
        { label: 'Completed Lessons', value: user.completedLessons, icon: '📚' },
        { label: 'Total Points', value: user.totalPoints, icon: '⭐' },
        { label: 'Current Level', value: user.currentLevel, icon: '🏆' },
        { label: 'Daily Streak', value: user.streak, icon: '🔥' },
    ]

    return (
        <div style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--bg-light)' }}>
            <div className="container">
                <header style={{ marginBottom: '40px' }}>
                    <button onClick={() => navigate('/')} style={{ marginBottom: '10px', color: 'var(--primary)', fontWeight: '600' }}>← Back Home</button>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)' }}>Your Kingdom Dashboard</h1>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px'
                }}>
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: '30px', textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{s.icon}</div>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{s.value}</div>
                            <div style={{ color: 'var(--text-muted)', fontWeight: '600' }}>{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="glass-card" style={{ padding: '40px', background: 'white' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Recent Mock Test Scores</h3>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', height: '100px' }}>
                        {user.recentScores.map((score, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    width: '100%',
                                    height: `${score}%`,
                                    background: 'var(--gradient-purple)',
                                    borderRadius: '10px 10px 0 0'
                                }}></div>
                                <div style={{ marginTop: '10px', fontWeight: '700' }}>{score}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
