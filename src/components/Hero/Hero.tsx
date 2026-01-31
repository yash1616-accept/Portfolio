import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Navbar from './navbar';

// 1. Define variants with explicit 'Variants' type outside the component
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white"
        >
            <Navbar />
            {/* Background Blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px]"
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants} // Applied here
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
            >
                <motion.span
                    variants={itemVariants} // Applied here
                    className="mb-4 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gray-400"
                >
                    Full Stack Developer <span className="text-blue-500 mx-1">·</span> DevOps Engineer <span className="text-blue-500 mx-1">·</span> AI Enthusiast

                </motion.span>

                <motion.h1
                    variants={itemVariants} // Applied here
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
                >
                    Yash Gaikwad
                </motion.h1>

                <motion.p
                    variants={itemVariants} // Applied here
                    className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10"
                >
                    Crafting high-performance digital experiences with precision and cinematic design.
                </motion.p>

                <motion.div
                    variants={itemVariants} // Applied here
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
                        View Projects
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/10 backdrop-blur-md text-white font-medium rounded-full hover:bg-white/5 transition-all">
                        Download Resume
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;