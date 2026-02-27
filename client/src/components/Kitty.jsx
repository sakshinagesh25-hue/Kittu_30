import { motion } from 'framer-motion'

const Kitty = ({ isCorner = false, showBubble = true }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: isCorner ? 0.6 : 1,
                opacity: 1,
                x: isCorner ? 'calc(50vw - 80px)' : 0,
                y: isCorner ? 'calc(-50vh + 80px)' : 0
            }}
            transition={{ duration: 0.8, ease: "backOut" }}
            style={{
                position: 'relative',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {showBubble && !isCorner && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="glass-card"
                    style={{
                        padding: '10px 20px',
                        marginBottom: '20px',
                        borderRadius: '15px 15px 15px 0',
                        fontWeight: '600',
                        color: 'var(--primary)',
                        fontSize: '1.2rem',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Welcome to Kittu Code Kingdom!
                </motion.div>
            )}

            {/* Simple SVG Kitty */}
            <svg width="200" height="200" viewBox="0 0 200 200">
                {/* Body */}
                <circle cx="100" cy="140" r="45" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                {/* Head */}
                <path d="M60,80 Q60,40 100,40 Q140,40 140,80 Q140,120 100,120 Q60,120 60,80" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                {/* Ears */}
                <path d="M70,45 L60,20 L80,42" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M130,45 L140,20 L120,42" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                {/* Eyes */}
                <circle cx="85" cy="80" r="4" fill="#1e293b" />
                <circle cx="115" cy="80" r="4" fill="#1e293b" />
                {/* Nose */}
                <circle cx="100" cy="90" r="3" fill="#ec4899" />
                {/* Waving Hand */}
                <motion.path
                    d="M60,140 Q40,140 40,120"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    strokeLinecap="round"
                    animate={{ rotate: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    style={{ transformOrigin: '60px 140px' }}
                />
                {/* Hand 2 */}
                <path d="M140,140 Q160,140 160,120" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
            </svg>
        </motion.div>
    )
}

export default Kitty
