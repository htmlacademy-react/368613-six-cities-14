export type Offer = {
  id: number;
  title: string;
  type: string;
  price: number;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  isPremium: boolean;
  isFavorite: boolean;
  description: string;
  previewImage: string;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  goods: string[];
}
