// 'use client'

// export default function Header() {
//   const nav = [
//     { label: 'Experience', href: '#experience' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Opportunities', href: '#opportunities' },
//     { label: 'About', href: '#about' },
//     { label: 'Contact', href: '#contact' },
//   ]

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
//       <div className="px-[350px] h-14 flex items-center justify-between">

//         {/* NAME */}
//         <span className="text-2xl font-medium tracking-tight text-white">
//           Shahram Chaudhry
//         </span>

//         {/* NAV */}
//         <nav className="flex items-center gap-8 text-white/70 text-2xl">
//           {nav.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="hover:text-white transition-colors"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   )
// }
'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const nav = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 h-16 flex items-center justify-between">
          {/* Logo/Name */}
          <span className="text-xl sm:text-2xl font-medium tracking-tight text-white">
            Shahram Chaudhry
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base lg:text-lg text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-2 space-y-4 pb-6">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 text-lg text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Add padding to prevent content from being hidden behind fixed header */}
      <div className="h-16"></div>
    </>
  );
}