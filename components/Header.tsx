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

export default function Header() {
  const nav = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-4 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="px-[350px] h-16 flex items-center justify-between">

        {/* LEFT SIDE: name */}
        <span className="text-2xl font-medium tracking-tight text-white">
          Shahram Chaudhry
        </span>

        {/* MIDDLE UNDERLINE — only between name and nav */}
        <div className="flex-grow mx-8 border-t border-white/10"></div>

        {/* RIGHT SIDE: nav */}
        <nav className="flex items-center gap-10 text-white/70 text-2xl">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}