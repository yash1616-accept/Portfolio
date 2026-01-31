import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const skillData = [
    {
        category: "Languages & Core",
        // Adding Java here as a primary strength
        skills: ["Java", "TypeScript", "JavaScript", "Python", "Data Structures", "OOP"],
        color: "from-orange-500/20" // Java-themed warmth
    },
    {
        category: "Full Stack",
        skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Flask"],
        color: "from-blue-500/20"
    },
    {
        category: "DevOps & Cloud",
        skills: ["Docker", "Jenkins", "AWS Basics", "CI/CD", "GitHub Actions"],
        color: "from-cyan-500/20"
    },
    {
        category: "Backend & Infra",
        // Java developers often excel in SQL and Linux
        skills: ["SQL", "MongoDB", "Linux", "Git", "System Design"],
        color: "from-emerald-500/20"
    }
];

const Skills: React.FC = () => {
    return (
        <section id="Projects" className="w-full bg-[#030303] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        02. Technical Stack
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-white tracking-tight"
                    >
                        Tools & <span className="text-gray-500">Technologies.</span>
                    </motion.h3>
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillData.map((item) => (
                        <motion.div
                            key={item.category}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.color} to-transparent border border-white/5 overflow-hidden group`}
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

                            <h4 className="text-xl font-semibold text-white mb-6 tracking-tight">
                                {item.category}
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {item.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-gray-400 bg-black/40 border border-white/5 px-3 py-1.5 rounded-lg hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;