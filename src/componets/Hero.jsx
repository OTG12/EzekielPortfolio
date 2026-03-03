import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.jpeg";
import {
Github,
Linkedin,
ArrowDown,
Code,
Palette,
Cpu,
Sparkles
} from "lucide-react";

import { motion, useAnimation, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {

const containerRef = useRef(null);
const isInView = useInView(containerRef, { once: true });
const controls = useAnimation();

const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const services = [
{ icon: <Code size={18} />, label: "Web Development" },
{ icon: <Palette size={18} />, label: "UI/UX Design" },
{ icon: <Cpu size={18} />, label: "Fullstack Solutions" },
{ icon: <Sparkles size={18} />, label: "Modern Stack" }
];

useEffect(() => {

const handleMouseMove = (e) => {

const x = (e.clientX / window.innerWidth - 0.5) * 20;
const y = (e.clientY / window.innerHeight - 0.5) * 20;

setMousePosition({ x, y });

};

window.addEventListener("mousemove", handleMouseMove);

if (isInView) controls.start("visible");

return () => window.removeEventListener("mousemove", handleMouseMove);

}, [isInView, controls]);

const handleContactClick = () => {

const section = document.getElementById("Contact");

if (section) {
section.scrollIntoView({ behavior: "smooth" });
}

};

return (

<section
id="Home"
ref={containerRef}
className="relative min-h-screen flex items-center px-6 lg:px-16 overflow-hidden bg-slate-900"
>

{/* Background Glow */}

<div className="absolute inset-0">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full"/>

<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"/>

</div>

<div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

{/* LEFT SIDE */}

<motion.div
initial={{ opacity:0, y:40 }}
animate={controls}
variants={{
visible:{ opacity:1, y:0 }
}}
transition={{ duration:0.8 }}
className="space-y-8 text-center lg:text-left"
>

{/* Badge */}

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 border border-indigo-600/20">

<Sparkles size={16} className="text-indigo-400"/>

<span className="text-sm text-slate-300">
Premium Development
</span>

</div>

{/* Heading */}

<div className="space-y-4">

<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">

Welcome to

<span className="block text-indigo-500 mt-3">
OT G Hive
</span>

</h1>

<p className="text-lg text-slate-400 max-w-xl">
We build modern high-performance web applications using scalable technologies and clean design systems.
</p>

</div>

{/* Typing */}

<div className="text-xl md:text-2xl font-semibold text-indigo-400 h-10">

<TypeAnimation
sequence={[
"Enterprise Web Apps",
2500,
"Modern UI Systems",
2500,
"Scalable Fullstack Apps",
2500
]}
speed={45}
repeat={Infinity}
/>

</div>

{/* Services */}

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

{services.map((service,i)=>(

<div
key={i}
className="p-3 bg-slate-800 border border-slate-700 rounded-xl text-center transition-all duration-200 hover:border-indigo-600"
>

<div className="flex justify-center text-indigo-500 mb-2">
{service.icon}
</div>

<p className="text-sm text-slate-300">
{service.label}
</p>

</div>

))}

</div>

{/* CTA */}

<div className="flex flex-col sm:flex-row gap-4 pt-2">

<button
onClick={handleContactClick}
className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all duration-200 active:scale-95"
>

Start Project
<ArrowDown size={16}/>

</button>

<a
href="#Work"
className="px-8 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold flex items-center justify-center gap-2 hover:border-indigo-600 hover:text-white transition-all duration-200 active:scale-95"
>

View Portfolio
<Code size={16}/>

</a>

</div>

{/* Social */}

<div className="flex gap-4 pt-6 justify-center lg:justify-start">

<a
href="https://github.com/OTG12"
target="_blank"
className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-600 transition-all duration-200 active:scale-95"
>

<Github size={20} className="text-slate-300"/>

</a>

<a
href="https://www.linkedin.com/in/ezekiel-otene-279074364"
target="_blank"
className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-600 transition-all duration-200 active:scale-95"
>

<Linkedin size={20} className="text-slate-300"/>

</a>

</div>

</motion.div>

{/* RIGHT SIDE LOGO */}

<motion.div
initial={{ opacity:0, scale:0.9 }}
animate={{ opacity:1, scale:1 }}
transition={{ duration:0.8 }}
className="flex justify-center lg:justify-end"
style={{
transform:`translate(${mousePosition.x*0.3}px,${mousePosition.y*0.3}px)`
}}
>

<div className="relative">

<div className="absolute -inset-8 bg-indigo-600/20 blur-3xl rounded-full"/>

<div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl border border-slate-700 bg-slate-800 flex items-center justify-center">

<img
src={logo}
alt="logo"
className="w-full h-full object-contain p-10"
/>

</div>

</div>

</motion.div>

</div>

{/* Scroll indicator */}

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

<span className="text-sm text-slate-400">
Scroll
</span>

<div className="w-6 h-10 border border-slate-700 rounded-xl flex justify-center">

<motion.div
animate={{ y:[0,14,0] }}
transition={{ repeat:Infinity, duration:1.5 }}
className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"
/>

</div>

</div>

</section>

);

};

export default Hero;