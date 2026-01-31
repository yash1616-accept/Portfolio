import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Loader2, CheckCircle2 } from 'lucide-react';
// import ShinyButton from './ShinyButton';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Replace 'your_form_id' with your actual Formspree ID
            const response = await fetch("https://formspree.io/f/mqebopel", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section id="Contact" className="relative min-h-screen w-full bg-[#030303] py-24 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Left Side */}
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">04. Contact</h2>
                            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                                Let's build <br /> <span className="text-gray-500">something great.</span>
                            </h3>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
                            I'm currently looking for new opportunities and my inbox is always open.
                            I'll try my best to get back to you!
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4">
                            <a href="mailto:gaikwadyash964@gmail.com" className="flex items-center gap-4 text-white group w-fit">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    <Mail size={20} className="text-blue-500" />
                                </div>
                                <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">gaikwadyash964@gmail.com</span>
                            </a>

                            <div className="flex gap-4">
                                <a href="https://github.com/yash1616-accept" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/yash-gaikwad-441b1b368" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Animated Form Container */}
                    <motion.div
                        variants={itemVariants}
                        className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center text-center h-full py-12"
                                >
                                    <CheckCircle2 size={60} className="text-blue-500 mb-6" />
                                    <h4 className="text-2xl font-bold text-white mb-2">Message Received!</h4>
                                    <p className="text-gray-400 mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-sm font-mono text-blue-500 uppercase tracking-widest hover:underline"
                                    >
                                        Send another?
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleFormSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-gray-500 tracking-widest">Name</label>
                                            <input required name="name" type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase text-gray-500 tracking-widest">Email</label>
                                            <input required name="email" type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase text-gray-500 tracking-widest">Message</label>
                                        <textarea required name="message" rows={4} placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none" />
                                    </div>
                                    <button
                                        disabled={formStatus === 'sending'}
                                        type="submit"
                                        className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                                    >
                                        {formStatus === 'sending' ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <>
                                                Send Message<ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    {formStatus === 'error' && (
                                        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                    )}
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                    <p>© 2026 Yash Gaikwad. All rights reserved.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;