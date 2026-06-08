import { Tour, Service, Deal } from './types';

export const TOURS: Tour[] = [
  // Half Day Tours
  {
    id: 'hd-1',
    title: 'Mandela Capture Site',
    type: 'Half Day',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7bc2caa7d173?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'We head inland to the Historic Nelson Mandela Capture site where you will re-live the "Long Walk to Freedom" and view the Unique Sculpture dedicated to Nelson Mandela. This will leave you with new insights. Lunch and maybe a swim at 95 meter Howick Falls.',
  },
  {
    id: 'hd-2',
    title: 'The Ghandi Tour',
    type: 'Half Day',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Embark 20km out of Durban and change your outlook on life. You will enter the Landmark Inanda Settlement, birthplace of Ghandi’s Non-Violent Philosophy. This being the Ghandi family home for 23 years, witness the Legacy left behind by the Mahatama.',
  },
  {
    id: 'hd-3',
    title: 'City Tour',
    type: 'Half Day',
    imageUrl: 'https://images.unsplash.com/photo-1576487248805-fcb11aae7030?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'This is the most comprehensive Durban City Tour with the Discovery of Durban at its core. Highlights include:- The Golden Mile, Wilson’s Wharf, Victoria Street Market, Moses Mabhida Stadium and a walking Tour from the Iconic Durban Workshop to the Durban City Hall and Natal Museum.',
  },
  {
    id: 'hd-4',
    title: 'Phezulu Village - 1000 hills',
    type: 'Half Day',
    imageUrl: 'https://images.unsplash.com/photo-1516422213484-26ec2dff3a00?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Leave the City behind and in 45 minutes we enter Majestic Valley of a Thousand Hills. You will be immersed in a fully guided Zulu Cultural experience not to be forgotten. The village also has a Reptile Park with options of a Game Drive that show cases Local Fauna.',
  },
  {
    id: 'hd-5',
    title: 'LSM 1-10',
    type: 'Half Day',
    imageUrl: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'The LSM 1 – 10 allows the tourist the experience Durban from a Socio-Economic, Cultural Religious and racial viewpoint. Based upon a statistical sample you will gain huge insight into the people of Durban.',
  },
  // Full Day Tours
  {
    id: 'fd-1',
    title: 'Anglo-Zulu Battlefields',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1534143048590-0932267fbcdd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Just outside the quite town of Greytown lies Isandlwana and Rorke’s Drift. These sites date back to 1879 and are the first major encounters between the British and Zulu nations. Hear and relive the battle... Light lunch will be included.',
  },
  {
    id: 'fd-2',
    title: 'Shaka Land',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Participate in the ultimate Zulu experience by visiting a living monument to the vibrant Zulu Culture. Set in the heart of Zululand, this traditional Zulu homestead will transport you to a bygone era. You will have a total immersive experience.',
  },
  {
    id: 'fd-3',
    title: 'St Lucia',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1552599728-ce0fa00021c1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Full day tour to a World Heritage Site, iSimangaliso Wetland Park. It spans 280km of protected coastline and 3280 km sq of natural ecosystems. Includes a boat ride into the estuary. Can be done as a day tour with Hluhluwe Umfolozi.',
  },
  {
    id: 'fd-4',
    title: 'Hluhluwe',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1601666614486-e7e01b7aef14?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'A chance to see the Big 5 in the oldest proclaimed reserve in Africa. With the highest population of White Rhino in the world, this is an occasion not to be missed. A game drive and light lunch is included.',
  },
  {
    id: 'fd-5',
    title: 'Giants Castle',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1565554120302-60144d8cce4c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Found in the World Heritage Site of UKhahlamba-Drakensberg Park, Giants Castle has amazing vistas and is famed for its prehistoric San Rock painting. A Mecca for Hiking, Mountain Climbing, Biking, Trout Fishing and adventure sport.',
  },
  {
    id: 'fd-6',
    title: 'Sani Pass',
    type: 'Full Day',
    imageUrl: 'https://images.unsplash.com/photo-1506015391300-84c4f981dd9d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Out of this World off-road experience that takes you to the Highest Pub in Africa at 2873m above sea level. This pass joins the Mountain Kingdom of Lesotho and South Africa. This is a must especially for off-road fanatics.',
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Accommodation',
    description: 'Wide array from 5 Star to Backpackers available.',
    iconName: 'BedDouble'
  },
  {
    id: 's2',
    title: 'Transfer',
    description: 'We will beat any Transfer Rate. Chauffeur Service available.',
    iconName: 'Car'
  },
  {
    id: 's3',
    title: 'Tours',
    description: 'From Overland, Day & Half-Day tours. Escorted by qualified guides.',
    iconName: 'Map'
  },
  {
    id: 's4',
    title: 'Discover',
    description: "Attractions like Ushaka Marine World, 1930's Art Deco, Nature...",
    iconName: 'Compass'
  },
  {
    id: 's5',
    title: 'Cruises',
    description: 'Durban to Portuguese Islands.',
    iconName: 'Ship'
  },
  {
    id: 's6',
    title: 'Flights',
    description: 'Contact us with your itinerary for the Best Deals.',
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
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7bc2caa7d173?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1601666614486-e7e01b7aef14?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1565554120302-60144d8cce4c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
    description: 'Explore the World Heritage Site. Includes hiking trails, viewing prehistoric San Rock paintings, and light lunches.',
    tags: ['Adventure', 'Save R1510']
  }
];
