
import React from "react";

const gallery = [
  {
    name: "Kedarnath Darshan",
    image: "/darshan/kedarnath.png",
  },
  {
    name: "Kamakya Darshan",
    image: "/darshan/kamakya.png",
  },
  {
    name: "Guruji",
    image: "/darshan/guruji.png",
  },
];

const Gallery = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10">
      {/* Heading */}
      <div className="mb-7 text-center">
        <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
           Gallery
        </p>



        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-400" />

        <p className="mt-3 text-sm text-gray-500">
          Glimpses of my spiritual journey
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 gap-5">
        {gallery.map((item) => (
          <div
            key={item.name}
            className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                  active:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Name */}
              <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white drop-shadow-lg">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
