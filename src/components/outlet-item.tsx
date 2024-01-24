import { Outlet } from "@/types";
import { Badge } from "./ui/badge";
import { MapPin, Star } from "lucide-react";
import calcRating from "@/lib/calc-rating";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  outlet: Outlet;
};

const OutletItem = ({ outlet }: Props) => {
  const calculatedRating = calcRating(outlet.ratings);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-72 relative sm:w-80 md:w-64 min-h-56 m-2 bg-white shadow hover:shadow-lg rounded-md overflow-hidden cursor-pointer">
          <div className="absolute right-1 top-1 flex">
            {Array.from({ length: Math.floor(calculatedRating) }, (_, i) => (
              <Star className="text-yellow-400 w-4" key={i} />
            ))}
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
              alt="restaurant"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4 ">
            <strong>{outlet.name}</strong>
            <div className="flex items-center justify-between">
              <div className="text-slate-700 text-sm flex items-center justify-between">
                <MapPin className="w-4 text-amber-700" />
                <p className="pl-2">{outlet.address}</p>
              </div>
              <Badge variant="amber">{outlet.cuisineType}</Badge>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <DialogTitle>{outlet.name}</DialogTitle>
            <div className="flex">
              {Array.from({ length: Math.floor(calculatedRating) }, (_, i) => (
                <Star className="text-amber-400 w-4" key={i} />
              ))}
            </div>
          </div>
        </DialogHeader>
        <img
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
          alt="restaurant"
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default OutletItem;
