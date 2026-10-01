
import React from 'react'

const Header = ({name}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center gap-4">

        {/* Profile Image */}
        <div className="relative shrink-0">
          <img
            src="/profile.jpg"
            alt="pandit ji"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-amber-400 ring-offset-2 shadow-lg hover:scale-105 duration-300"
          />

          {/* Om Badge */}
          <span className="absolute -right-1 -bottom-1 flex h-7 w-7 items-center justify-center 
           rounded-full bg-amber-500 text-sm text-white shadow-md">
            ॐ
          </span>
        </div>

        {/* Name */}
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Pandit
          </p>

          <h1 className="truncate text-xl font-bold tracking-tight text-gray-900/80 sm:text-2xl">
            {name}
          </h1>

          <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
            • Puja • Astrology • Spiritual Guidance 
          </p>
        </div>

      </div>
    </header>
  )
}

export default Header
