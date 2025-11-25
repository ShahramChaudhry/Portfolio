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
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Intro text */}
        <div className="w-full max-w-3xl">
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
            Senior at NYU Abu Dhabi - exploring full-time roles across Tech, AI,
            Product, and Consulting, driven by building meaningful,
            high-impact systems.
          </p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="mt-6 md:mt-8 border-t border-white/10 w-full"></div>
    </section>
  )
}