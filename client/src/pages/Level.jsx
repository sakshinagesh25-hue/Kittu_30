import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Level = () => {
    const navigate = useNavigate()

    const levels = [
        { lvl: 10, range: '90-100%', desc: 'Kingdom Legend' },
        { lvl: 9, range: '80-89%', desc: 'Code Master' },
        { lvl: 8, range: '70-79%', desc: 'Logic Wizard' },
        { lvl: 7, range: '60-69%', desc: 'Script Ninja' },
        { lvl: 6, range: '50-59%', desc: 'Design Architect' },
    ]

    const badges = [
        { name: 'First Steps', icon: '🐣', unlocked: true },
        { name: 'HTML Hero', icon: '🏗️', unlocked: true },
        { name: 'CSS Artist', icon: '🎨', unlocked: false },
        { name: 'JS Brain', icon: '⚡', unlocked: false },
        { name: 'Streak King', icon: '👑', unlocked: false },
    ]

    return (
        <div style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <header style={{ marginBottom: '40px' }}>
                    <button onClick={() => navigate('/')} style={{ marginBottom: '10px', color: 'var(--primary)', fontWeight: '600' }}>← Back Home</button>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)' }}>Levels & Rewards</h1>
                </header>

                <section style={{ marginBottom: '60px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>🏅</span> Your Badges
                    </h3>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        {badges.map(b => (
                            <div
                                key={b.name}
                                className="glass-card"
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                    width: '120px',
                                    opacity: b.unlocked ? 1 : 0.4,
                                    filter: b.unlocked ? 'none' : 'grayscale(1)'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{b.icon}</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: '700' }}>{b.name}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '10px' }}>📈</span> Ranking System
                    </h3>
                    <div className="glass-card" style={{ overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead style={{ background: 'var(--bg-dark)', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Level</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Score Range</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {levels.map((l, i) => (
                                    <tr key={l.lvl} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? 'white' : '#f8fafc' }}>
                                        <td style={{ padding: '15px', fontWeight: '800', color: 'var(--primary)' }}>Level {l.lvl}</td>
                                        <td style={{ padding: '15px' }}>{l.range}</td>
                                        <td style={{ padding: '15px', fontWeight: '600' }}>{l.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Level
