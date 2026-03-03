import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/Logo.jpeg"

const NavBar = () => {

const [isOpen, setIsOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
const [activeSection, setActiveSection] = useState("Home")

const navItems = [
{ id: "Home", label: "Home" },
{ id: "About", label: "About" },
{ id: "Skills", label: "Skills" },
{ id: "Work", label: "Work" },
{ id: "Certificate", label: "Certificate" },
{ id: "Contact", label: "Contact" }
]

useEffect(() => {

const handleScroll = () => {

setScrolled(window.scrollY > 10)

const sections = navItems.map(i => i.id)

for (let section of sections) {

const el = document.getElementById(section)

if (el) {

const rect = el.getBoundingClientRect()

if (rect.top <= 120 && rect.bottom >= 120) {

setActiveSection(section)

}

}

}

}

window.addEventListener("scroll", handleScroll)

return () => window.removeEventListener("scroll", handleScroll)

}, [])

const handleNavClick = (section, e) => {

e.preventDefault()

setIsOpen(false)

setActiveSection(section)

const element = document.getElementById(section)

if (element) {

const offset = 80

const top = element.getBoundingClientRect().top + window.pageYOffset - offset

window.scrollTo({ top, behavior: "smooth" })

}

}

return (

<header

className={`fixed top-0 w-full z-50 transition-all duration-200

${scrolled

? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700"

: "bg-transparent"

}`}

>

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

{/* Logo */}

<div className="flex items-center gap-3">

<img

src={logo}

alt="logo"

className="h-9 w-auto cursor-pointer"

/>

<span className="text-white font-semibold text-lg">

OT-G

</span>

</div>

{/* Desktop Navigation */}

<nav className="hidden md:flex items-center gap-2">

{navItems.map(item => (

<a

key={item.id}

href={`#${item.id}`}

onClick={(e)=>handleNavClick(item.id,e)}

className={`px-4 py-2 rounded-lg text-sm font-medium

transition-all duration-200 active:scale-95

${activeSection === item.id

? "text-white bg-indigo-600/10 border border-indigo-600/20"

: "text-slate-300 hover:text-white hover:bg-slate-800"

}`}

>

{item.label}

</a>

))}

{/* CTA */}

<a

href="#Contact"

onClick={(e)=>handleNavClick("Contact",e)}

className="ml-4 px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium

hover:bg-indigo-700

transition-all duration-200 active:scale-95"

>

Get Started

</a>

</nav>

{/* Mobile Button */}

<button

onClick={()=>setIsOpen(!isOpen)}

className="md:hidden p-2 rounded-lg text-slate-300

hover:bg-slate-800 hover:text-white

transition-all duration-200 active:scale-95"

>

{isOpen ? <X size={22}/> : <Menu size={22}/>}

</button>

</div>

{/* Mobile Menu */}

<div

className={`md:hidden transition-all duration-200

${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}

`}

>

<div className="bg-slate-900 border-t border-slate-700 px-6 py-6 space-y-2">

{navItems.map(item => (

<a

key={item.id}

href={`#${item.id}`}

onClick={(e)=>handleNavClick(item.id,e)}

className={`block px-4 py-3 rounded-lg text-base font-medium

transition-all duration-200 active:scale-95

${activeSection === item.id

? "text-white bg-indigo-600/10 border border-indigo-600/20"

: "text-slate-300 hover:text-white hover:bg-slate-800"

}`}

>

{item.label}

</a>

))}

<a

href="#Contact"

onClick={(e)=>handleNavClick("Contact",e)}

className="block text-center mt-4 px-6 py-3 rounded-lg

bg-indigo-600 text-white font-medium

hover:bg-indigo-700

transition-all duration-200 active:scale-95"

>

Start Project

</a>

</div>

</div>

</header>

)

}

export default NavBar