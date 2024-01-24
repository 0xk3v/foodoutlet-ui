type Outlet = {
  id: number;
  name: string;
  address: string;
  cuisineType: string;
  openingHours: string;
  ratings: Rating[];
};

type Rating = {
  id: number;
  rating: number;
  foodOutletId: number;
};

export type { Outlet, Rating };
