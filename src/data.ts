import { Tour, Service, Deal } from './types';

export const TOURS: Tour[] = [
  // Half Day Tours
  {
    id: 'hd-1',
    title: 'Mandela Capture Site',
    type: 'Half Day',
    location: 'Howick, KwaZulu-Natal',
    duration: '4-5 Hours',
    price: 950,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/mandela-capture.png',
    description: 'We head inland to the Historic Nelson Mandela Capture site where you will re-live the "Long Walk to Freedom" and view the Unique Sculpture dedicated to Nelson Mandela. This will leave you with new insights. Lunch and maybe a swim at 95 meter Howick Falls.',
  },
  {
    id: 'hd-2',
    title: 'The Gandhi Tour',
    type: 'Half Day',
    location: 'Inanda Settlement, Durban',
    duration: '4 Hours',
    price: 850,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/ghandi-settlement/ghandi-settlement.jpg',
    description: 'Embark 20km out of Durban and change your outlook on life. You will enter the Landmark Inanda Settlement, birthplace of Gandhi’s Non-Violent Philosophy. This being the Gandhi family home for 23 years, witness the Legacy left behind by the Mahatma.',
  },
  {
    id: 'hd-3',
    title: 'City Tour',
    type: 'Half Day',
    location: 'Durban Central',
    duration: '4-5 Hours',
    price: 650,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/durban-city-tour/durban-city.jpg',
    description: 'This is the most comprehensive Durban City Tour with the Discovery of Durban at its core. Highlights include:- The Golden Mile, Wilson’s Wharf, Victoria Street Market, Moses Mabhida Stadium and a walking Tour from the Iconic Durban Workshop to the Durban City Hall and Natal Museum.',
  },
  {
    id: 'hd-4',
    title: 'Phezulu Village - 1000 Hills',
    type: 'Half Day',
    location: 'Valley of 1000 Hills',
    duration: '4 Hours',
    price: 1150,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/valley-1000-hills/1000-hills.jpg',
    description: 'Leave the City behind and in 45 minutes we enter Majestic Valley of a Thousand Hills. You will be immersed in a fully guided Zulu Cultural experience not to be forgotten. The village also has a Reptile Park with options of a Game Drive that showcases Local Fauna.',
  },
  {
    id: 'hd-5',
    title: 'LSM 1-10 Experience',
    type: 'Half Day',
    location: 'Durban Suburbs',
    duration: '4 Hours',
    price: 750,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/lsm-tour/lsm-trip.jpg',
    description: 'The LSM 1 – 10 allows the tourist to experience Durban from a Socio-Economic, Cultural, Religious and racial viewpoint. Based upon a statistical sample you will gain huge insight into the people of Durban.',
  },
  // Full Day Tours
  {
    id: 'fd-1',
    title: 'Anglo-Zulu Battlefields',
    type: 'Full Day',
    location: 'Isandlwana & Rorke\'s Drift',
    duration: '10-12 Hours',
    price: 2450,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/anglo-zulu/anglo-zulu.jpg',
    description: 'Just outside the quiet town of Greytown lies Isandlwana and Rorke’s Drift. These sites date back to 1879 and are the first major encounters between the British and Zulu nations. Hear and relive the battle... Light lunch will be included.',
  },
  {
    id: 'fd-2',
    title: 'Shakaland Zulu Culture',
    type: 'Full Day',
    location: 'Eshowe, Zululand',
    duration: '8-9 Hours',
    price: 2250,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/shakaland/shakaland.jpg',
    description: 'Participate in the ultimate Zulu experience by visiting a living monument to the vibrant Zulu Culture. Set in the heart of Zululand, this traditional Zulu homestead will transport you to a bygone era. You will have a total immersive experience.',
  },
  {
    id: 'fd-3',
    title: 'St Lucia Wetlands Estuary',
    type: 'Full Day',
    location: 'iSimangaliso Wetland Park',
    duration: '9-10 Hours',
    price: 2750,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/st-lucia/st-lucia.jpg',
    description: 'Full day tour to a World Heritage Site, iSimangaliso Wetland Park. It spans 280km of protected coastline and 3280 sq km of natural ecosystems. Includes a boat ride into the estuary. Can be done as a day tour with Hluhluwe Umfolozi.',
  },
  {
    id: 'fd-4',
    title: 'Hluhluwe Big 5 Safari',
    type: 'Full Day',
    location: 'Hluhluwe-Imfolozi Park',
    duration: '10-12 Hours',
    price: 2950,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/thebig5/thebig5.jpg',
    description: 'A chance to see the Big 5 in the oldest proclaimed reserve in Africa. With the highest population of White Rhino in the world, this is an occasion not to be missed. A game drive and light lunch is included.',
  },
  {
    id: 'fd-5',
    title: 'Giants Castle Drakensberg',
    type: 'Full Day',
    location: 'uKhahlamba-Drakensberg Park',
    duration: '9-10 Hours',
    price: 2150,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/giants-castle/giants-castle.jpg',
    description: 'Found in the World Heritage Site of UKhahlamba-Drakensberg Park, Giants Castle has amazing vistas and is famed for its prehistoric San Rock painting. A Mecca for Hiking, Mountain Climbing, Biking, Trout Fishing and adventure sport.',
  },
  {
    id: 'fd-6',
    title: 'Sani Pass 4x4 Mountain Tour',
    type: 'Full Day',
    location: 'Sani Pass / Lesotho Border',
    duration: '11-12 Hours',
    price: 3250,
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/sani-pass/sani-pass.jpg',
    description: 'Out of this World off-road experience that takes you to the Highest Pub in Africa at 2873m above sea level. This pass joins the Mountain Kingdom of Lesotho and South Africa. This is a must especially for off-road fanatics.',
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Accommodation Booking',
    description: 'Wide array from luxury 5-star lodges to scenic backpackers available.',
    iconName: 'BedDouble'
  },
  {
    id: 's2',
    title: 'Seamless Transfers',
    description: 'We will beat any transfer rate. Private chauffeur services available.',
    iconName: 'Car'
  },
  {
    id: 's3',
    title: 'Escorted Tours',
    description: 'From overland safaris to day and half-day outings, escorted by certified local guides.',
    iconName: 'Map'
  },
  {
    id: 's4',
    title: 'Discover Attractions',
    description: 'Special access to uShaka Marine World, 1930s Art Deco tours, and hidden wilderness reserves.',
    iconName: 'Compass'
  },
  {
    id: 's5',
    title: 'Island Cruises',
    description: 'Luxury cruises departing from Durban to the Portuguese Islands and Maputo.',
    iconName: 'Ship'
  },
  {
    id: 's6',
    title: 'Tailored Flights',
    description: 'Provide your details and we will secure the best domestic and international airfares.',
    iconName: 'Plane'
  }
];

export const DEALS: Deal[] = [
  {
    id: 'd1',
    title: 'Durban Summer Special',
    destination: 'Durban, South Africa',
    originalPrice: 8500,
    discountedPrice: 6990,
    deadline: 'Book by Dec 15',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experience the peak season in Durban with 320 days of sunshine. Includes 4-star accommodation, daily breakfast, and a City Tour.',
    tags: ['Summer Break', 'Save 17%']
  },
  {
    id: 'd2',
    title: 'Winter Safari Escape',
    destination: 'Hluhluwe, South Africa',
    originalPrice: 12000,
    discountedPrice: 9990,
    deadline: 'Book by Jun 01',
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/thebig5/thebig5.jpg',
    description: 'A mild winter getaway to track the Big 5. Includes a guided game drive, luxury lodge stay, and transfers from King Shaka Airport.',
    tags: ['Wildlife', 'Best Value']
  },
  {
    id: 'd3',
    title: 'Drakensberg Adventure',
    destination: 'Giants Castle, South Africa',
    originalPrice: 9500,
    discountedPrice: 7990,
    deadline: 'Book by Aug 31',
    imageUrl: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/giants-castle/giants-castle.jpg',
    description: 'Explore the World Heritage Site. Includes hiking trails, viewing prehistoric San Rock paintings, and light lunches.',
    tags: ['Adventure', 'Save R1510']
  }
];
