import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Kitty from '../components/Kitty'
import KawaiiDecor from '../components/KawaiiDecor'

const DeepDive = () => {
    const navigate = useNavigate()

    const topics = [
        { id: 'boilerplate', title: 'Boilerplate Structure', icon: '🏗️', desc: 'Understanding the standard skeleton of every HTML file.' },
        { id: 'semantic', title: 'Semantic vs Non-Semantic', icon: '🏷️', desc: 'Why using <header> is better than <div> for structure.' },
        { id: 'attributes', title: 'Attribute Masterclass', icon: '🔧', desc: 'How src, href, alt, and title actually work.' },
        { id: 'css-selectors', title: 'Selector Deep Dive', icon: '🎯', desc: 'IDs, Classes, and complex nesting patterns.' },
        { id: 'box-model', title: 'The Box Model Secret', icon: '📦', desc: 'Padding vs Margin - the final showdown.' },
        { id: 'code-structure', title: 'Code Cleanliness', icon: '🧹', desc: 'Indentation, comments, and project organization.' },
    ]

    return (
        <div style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--bg-light)', position: 'relative' }}>
            <KawaiiDecor />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <header className="aesthetic-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                    <div style={{ zIndex: 2 }}>
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
                            Deep Dive Insights 🔍
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>
                            Explore the hidden textures of the web ✨
                        </p>
                    </div>
                    <motion.div className="float-soft" style={{ transform: 'scale(1.2)' }}>
                        <Kitty isCorner={true} showBubble={false} />
                    </motion.div>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px'
                }}>
                    {topics.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="glass-card"
                            onClick={() => navigate(`/lesson/deep-dive/${t.id}`)}
                            style={{
                                padding: '40px',
                                cursor: 'pointer',
                                background: 'white',
                                display: 'flex',
                                gap: '25px',
                                alignItems: 'center',
                                border: '2px solid var(--beige)'
                            }}
                        >
                            <div style={{ fontSize: '3.5rem' }}>{t.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--primary)', fontWeight: '800' }}>{t.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.5', fontWeight: '500' }}>{t.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="aesthetic-banner" style={{ marginTop: '80px', color: 'var(--text-main)', border: '2px dashed var(--primary-light)', paddingBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', color: 'var(--primary)', fontWeight: '800', fontSize: '2rem' }}>Aesthetic Tip from Kittu 🐾</h2>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.7', fontWeight: '600', opacity: 0.9 }}>
                        "Designing with a neutral palette isn't just about color—it's about space and feeling.
                        When your code is clean and structured, your website breathes. Take it slow,
                        learn the foundations, and the aesthetic will follow! ✨"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeepDive
