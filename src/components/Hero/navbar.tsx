import { motion } from "framer-motion";
import { Anchor } from 'lucide-react';


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },     // This matches id="About" in your sections
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

export default function Navbar() {
    // Logic for smooth scroll via JS if CSS isn't working
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        // Only intercept if it's an anchor link
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
        >
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tighter text-white">
                    <Anchor className="inline-block" />Yash<span className="text-blue-500">.</span>
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
                    {navItems.map((item) => (
                        <li key={item.name} className="group relative">
                            <a
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)} // Logic to handle the mapping
                                className="cursor-pointer hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </li>
                    ))}
                </ul>

                <div className="md:hidden text-white italic text-xs">Menu</div>
            </div>
        </motion.nav>
    );
}