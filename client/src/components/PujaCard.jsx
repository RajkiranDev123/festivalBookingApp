
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, IndianRupee } from "lucide-react";


const PujaCard = ({ puja }) => {
  return (
    <Card className="overflow-hidden border-amber-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={puja.img}
          alt={puja.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Price */}
        <div className="absolute right-3 top-3 flex items-center rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-amber-700 shadow-lg">
          <IndianRupee className="h-4 w-4 animate-pulse"/> {puja.price}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-xl font-mono text-gray-900/70">
            {puja.name}
          </CardTitle>

          <span className="shrink-0 rounded-full gap-1 flex items-center bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
           <Clock className="w-3 h-3 animate-spin"/> {puja.duration}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        {/* Samagri */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-orange-50 p-4">
          
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900/70">
                Puja Samagri
              </h3>
            </div>

            <span className="rounded-full font-mono bg-white px-3 py-1 text-xs  text-amber-700 ">
              {puja.samagri.length} items
            </span>
          </div>

        
{/* Checkbox Items */}
<div className="flex gap-1 flex-wrap">
  {puja.samagri.map((item) => (
    <div
      key={item}
      className="rounded-xl font-mono flex gap-2 border border-gray-100 bg-white px-2 py-1 text-center
       text-sm font-medium text-gray-700/90  transition-all hover:-translate-y-0.5
     hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
    >
      {item}
    </div>
  ))}
</div>

{/*  */}

  <button
    type="button"
    className="mt-3 w-full rounded-xl bg-gray-500 px-4 py-2.5 text-sm font-semibold cursor-pointer
     text-white shadow-md transition-all duration-200 hover:bg-gray-600 hover:shadow-lg active:scale-[0.98]"
  >
    Select for Booking
  </button>


        </div>
      </CardContent>
    </Card>
  );
};

export default PujaCard;

