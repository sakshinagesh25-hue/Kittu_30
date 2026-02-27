import { motion } from 'framer-motion'

const KawaiiDecor = () => {
    const elements = [
        { icon: '✨', top: '5%', left: '8%', size: '1.2rem', delay: 0 },
        { icon: '☁️', top: '15%', left: '20%', size: '2rem', delay: 1 },
        { icon: '⭐', top: '10%', right: '15%', size: '1rem', delay: 0.5 },
        { icon: '🌸', top: '80%', left: '5%', size: '1.5rem', delay: 2 },
        { icon: '🌿', top: '85%', right: '10%', size: '1.8rem', delay: 1.5 },
        { icon: '🫧', top: '50%', right: '8%', size: '1.3rem', delay: 0.2 },
        { icon: '✨', top: '70%', right: '20%', size: '1rem', delay: 1.2 },
        { icon: '🧸', top: '40%', left: '5%', size: '2.5rem', delay: 2.5 },
    ]

    return (
        <div className="particles-container">
            {elements.map((el, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.1, 1],
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        top: el.top,
                        left: el.left,
                        right: el.right,
                        fontSize: el.size,
                        filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.8))',
                        zIndex: 0
                    }}
                >
                    {el.icon}
                </motion.div>
            ))}
        </div>
    )
}

export default KawaiiDecor
