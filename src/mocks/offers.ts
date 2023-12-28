import { Offer } from '../types/offer';

const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    isPremium: false,
    isFavorite: true,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    goods: [
      'Heating'
    ]
  },
  {
    id: '2',
    title: 'Cozy and warm apartment in the heart of Paris',
    type: 'apartment',
    price: 80,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 3,
    isPremium: true,
    isFavorite: false,
    description: 'A cozy and warm apartment located in the heart of Paris, perfect for a romantic getaway.',
    previewImage: 'https://14.react.pages.academy/static/offer/6.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    location: {
      latitude: 48.856614,
      longitude: 2.3522219,
      zoom: 10
    },
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219,
        zoom: 10
      }
    },
    host: {
      name: 'John',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine'
    ]
  },
  {
    id: '3',
    title: 'Spacious and modern apartment in New York',
    type: 'apartment',
    price: 200,
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 6,
    isPremium: true,
    isFavorite: true,
    description: 'A spacious and modern apartment located in the heart of New York City, perfect for a family vacation.',
    previewImage: 'https://14.react.pages.academy/static/offer/2.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
      zoom: 10
    },
    city: {
      name: 'New York',
      location: {
        latitude: 40.712776,
        longitude: -74.005974,
        zoom: 10
      }
    },
    host: {
      name: 'Sarah',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Washing machine',
      'Gym',
      'Swimming pool'
    ]
  },
  {
    id: '4',
    title: 'Charming and cozy cottage in the countryside',
    type: 'house',
    price: 150,
    rating: 4.7,
    bedrooms: 2,
    maxAdults: 4,
    isPremium: false,
    isFavorite: false,
    description: 'A charming and cozy cottage located in the beautiful countryside, perfect for a peaceful retreat.',
    previewImage: 'https://14.react.pages.academy/static/offer/8.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    location: {
      latitude: 51.507351,
      longitude: -0.127758,
      zoom: 10
    },
    city: {
      name: 'London',
      location: {
        latitude: 51.507351,
        longitude: -0.127758,
        zoom: 10
      }
    },
    host: {
      name: 'David',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    goods: [
      'Fireplace',
      'Garden',
      'Parking'
    ]
  }
];

export { offers };
