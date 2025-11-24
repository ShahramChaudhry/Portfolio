// 'use client'

// export default function HeroTopIntro() {
//   return (
//     <section className="w-full px-[350px] pt-24 pb-10"> 
//       <div className="flex items-center gap-5">

//         {/* Photo */}
//         <img
//           src="/profile.jpg"
//           alt="Profile"
//           className="w-12 h-12 rounded-full object-cover grayscale"
//         />

//         {/* Intro text */}
//         <div className="leading-tight">
//           <p className="text-white/60 text-xs">
//           Senior at NYU Abu Dhabi: exploring full-time roles across Tech, AI, Product, and Consulting, driven by building meaningful, high-impact systems.
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mt-6 border-t border-white/10 w-full"></div>
//     </section>
//   )
// }

'use client'

export default function HeroTopIntro() {
  return (
    <section className="w-full px-[350px] pt-48 pb-6">

      <div className="flex items-center gap-5">

        {/* Larger Photo */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover grayscale"
        />

        {/* Intro text — now forced into ~3 lines */}
        <div className="leading-tight max-w-lg">
          <p className="text-white/90 text-xl tracking-wide">
            Senior at NYU Abu Dhabi - exploring full-time roles across Tech, AI,
            Product, and Consulting, driven by building meaningful,
            high-impact systems.
          </p>
        </div>

      </div>
    </section>
  )
}