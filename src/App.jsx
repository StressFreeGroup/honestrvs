import { useState, useEffect } from 'react'

// ============================================================
// FLEET DATA
// Rates are the standard nightly rate before tax and fees.
// Holiday and event dates are priced higher on the booking platforms.
// ============================================================
const rvs = [
  {
    "slug": "solitude-391dl",
    "name": "2024 Grand Design Solitude 391DL",
    "type": "Fifth Wheel",
    "sleeps": 8,
    "sleepsLabel": "8",
    "length": "42' 5\"",
    "slides": 5,
    "price": 249,
    "badges": [
      "Two Bedroom"
    ],
    "motorized": false,
    "images": [
      "/images/units/solitude-391dl/01.jpg",
      "/images/units/solitude-391dl/02.jpg",
      "/images/units/solitude-391dl/03.jpg",
      "/images/units/solitude-391dl/04.jpg",
      "/images/units/solitude-391dl/05.jpg",
      "/images/units/solitude-391dl/06.jpg",
      "/images/units/solitude-391dl/07.jpg",
      "/images/units/solitude-391dl/08.jpg",
      "/images/units/solitude-391dl/09.jpg",
      "/images/units/solitude-391dl/10.jpg"
    ],
    "floorplan": "/images/floorplans/solitude-391dl-floorplan.jpg",
    "description": "Two bedrooms and two full bathrooms, each with real privacy. A king suite up front and a rear guest room with its own bath and outside door, plus a loft above it. Ideal when two couples or several generations travel together.",
    "sleeping": [
      "Front king bedroom with large closets",
      "Rear private bedroom with its own full bath and exterior door",
      "Loft above the rear bedroom",
      "Sofa with tri-fold bed"
    ],
    "inside": [
      "Island kitchen with residential oven, 20 cu ft refrigerator and dishwasher prep",
      "Two full bathrooms",
      "Theater seating, free-standing dinette and electric fireplace with TV"
    ],
    "outside": [
      "330W roof solar",
      "Dual entry doors",
      "Heated and enclosed underbelly with heated tanks"
    ],
    "specs": [
      "Length: 42 ft 5 in | Height: 12 ft 9 in | Width: 101 in",
      "Dry weight: 15,300 lbs | Hitch weight: 3,050 lbs",
      "Fresh / Grey / Black: 81 / 106 / 106 gal | Two propane tanks"
    ],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 18,000 lbs, a brake controller, and a fifth-wheel hitch in a heavy-duty truck bed. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": "https://rvshare.com/rvs/details/1778363"
  },
  {
    "slug": "solitude-390rk",
    "name": "2023 Grand Design Solitude 390RK",
    "type": "Fifth Wheel",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "42' 5\"",
    "slides": 5,
    "price": 249,
    "badges": [
      "Luxury"
    ],
    "motorized": false,
    "images": [
      "/images/units/solitude-390rk/01.jpg",
      "/images/units/solitude-390rk/02.jpg",
      "/images/units/solitude-390rk/03.jpg",
      "/images/units/solitude-390rk/04.jpg",
      "/images/units/solitude-390rk/05.jpg",
      "/images/units/solitude-390rk/06.jpg",
      "/images/units/solitude-390rk/07.jpg",
      "/images/units/solitude-390rk/08.jpg",
      "/images/units/solitude-390rk/09.jpg",
      "/images/units/solitude-390rk/10.jpg"
    ],
    "floorplan": "/images/floorplans/solitude-390rk-floorplan.png",
    "description": "A raised rear kitchen made for real cooking, with a residential oven, a four-door refrigerator and a big pantry. Five slideouts, a fireplace and theater seating create a living room that feels like a house.",
    "sleeping": [
      "Queen bed on a slideout in the front bedroom",
      "Two tri-fold sofas for extra guests"
    ],
    "inside": [
      "Raised rear kitchen with island, residential oven and four-door refrigerator",
      "Full bathroom with dual sinks and a shower seat",
      "Electric fireplace, theater seating and LED Smart TV",
      "Premium stereo"
    ],
    "outside": [
      "Six-point hydraulic auto-leveling",
      "Heated and enclosed underbelly",
      "Power awning"
    ],
    "specs": [
      "Length: 42 ft 5 in | Height: 13 ft 5 in | Width: 101 in",
      "Dry weight: 15,800 lbs | GVWR: 19,000 lbs | Hitch weight: 2,794 lbs",
      "Fresh / Grey / Black: 83 / 106 / 53 gal | Two propane tanks"
    ],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 19,000 lbs, a brake controller, and a fifth-wheel hitch in a heavy-duty truck bed. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": "https://rvshare.com/rvs/details/1778362"
  },
  {
    "slug": "momentum-29g",
    "name": "2021 Grand Design Momentum 29G",
    "type": "Toy Hauler",
    "sleeps": 8,
    "sleepsLabel": "8",
    "length": "34'",
    "slides": 2,
    "price": 255,
    "badges": [
      "Toy Hauler"
    ],
    "motorized": false,
    "images": [
      "/images/units/momentum-29g/01.jpg",
      "/images/units/momentum-29g/02.jpg",
      "/images/units/momentum-29g/03.jpg",
      "/images/units/momentum-29g/04.jpg",
      "/images/units/momentum-29g/05.jpg",
      "/images/units/momentum-29g/06.jpg",
      "/images/units/momentum-29g/07.jpg",
      "/images/units/momentum-29g/08.jpg",
      "/images/units/momentum-29g/09.jpg",
      "/images/units/momentum-29g/10.jpg"
    ],
    "floorplan": "/images/floorplans/momentum-29g-floorplan.jpg",
    "description": "Bring the toys. An 11 ft rear garage with a ramp door holds dirt bikes, e-bikes or gear, then turns into a second bedroom with two drop-down power bunks. Huge 100 gal fresh tank and factory solar for longer stays away from hookups.",
    "sleeping": [
      "Private front bedroom with queen bed",
      "Two drop-down power bunks in the garage",
      "Additional sleeping on the living-area furniture"
    ],
    "inside": [
      "Kitchen with range, oven, microwave and 12V refrigerator",
      "One and a half baths, including a half bath by the garage",
      "Theater seating and dual entry doors"
    ],
    "outside": [
      "Ramp door with patio deck setup",
      "220W roof solar with charge controller",
      "Heavy-duty frame and insulated garage floor"
    ],
    "specs": [
      "Length: 34 ft | Height: 12 ft 5 in",
      "Dry weight: 8,300 lbs | GVWR: 11,000 lbs | Hitch weight: 1,350 lbs",
      "Fresh / Grey / Black: 100 / 78 / 39 gal | Propane: 18 gal"
    ],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 11,000 lbs, a brake controller, and a 2-5/16 in ball hitch rated for the trailer weight. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": "https://rvshare.com/rvs/details/1758130"
  },
  {
    "slug": "discovery-lxe-38k",
    "name": "2018 Fleetwood Discovery LXE 38K",
    "type": "Class A",
    "sleeps": 5,
    "sleepsLabel": "4-5",
    "length": "38' 8\"",
    "slides": 3,
    "price": 255,
    "badges": [
      "Luxury"
    ],
    "motorized": true,
    "images": [
      "/images/units/discovery-lxe-38k/01.jpg",
      "/images/units/discovery-lxe-38k/02.jpg",
      "/images/units/discovery-lxe-38k/03.jpg",
      "/images/units/discovery-lxe-38k/04.jpg",
      "/images/units/discovery-lxe-38k/05.jpg",
      "/images/units/discovery-lxe-38k/06.jpg",
      "/images/units/discovery-lxe-38k/07.jpg"
    ],
    "floorplan": null,
    "description": "A full-size diesel coach that lives like a small apartment: king bedroom, a bath and a half, washer and dryer, and a residential fridge with an ice maker. Built for groups who want real space and a quiet, smooth ride on long highway days.",
    "sleeping": [
      "King bed in a private rear bedroom",
      "Living-area sofa and dinette convert for extra guests"
    ],
    "inside": [
      "Bath and a half, so the bedroom has its own private bath",
      "Residential refrigerator with ice maker, induction cooktop, dishwasher and microwave",
      "Onboard washer and dryer",
      "Multiple TVs, soundbar and Blu-ray player"
    ],
    "outside": [
      "Automatic awnings with wind sensor",
      "Outdoor TV, satellite dish and backup camera",
      "Diesel generator, air ride suspension and automatic leveling"
    ],
    "specs": [
      "Length: 38 ft 8 in | Height: 12 ft 10 in | Width: 102 in",
      "Chassis: Freightliner XCM with Cummins 6.7L diesel, 360 hp",
      "Transmission: Allison 6-speed automatic",
      "Generator: Onan diesel"
    ],
    "towing": null,
    "rvshare": null
  },
  {
    "slug": "freelander-31bh",
    "name": "2019 Coachmen Freelander 31BH",
    "type": "Class C",
    "sleeps": 10,
    "sleepsLabel": "10",
    "length": "32' 11\"",
    "slides": 2,
    "price": 225,
    "badges": [
      "Large Group"
    ],
    "motorized": true,
    "images": [
      "/images/units/freelander-31bh/01.jpg",
      "/images/units/freelander-31bh/02.jpg",
      "/images/units/freelander-31bh/03.jpg",
      "/images/units/freelander-31bh/04.jpg",
      "/images/units/freelander-31bh/05.jpg",
      "/images/units/freelander-31bh/06.jpg",
      "/images/units/freelander-31bh/07.jpg",
      "/images/units/freelander-31bh/08.jpg",
      "/images/units/freelander-31bh/09.jpg",
      "/images/units/freelander-31bh/10.jpg"
    ],
    "floorplan": "/images/floorplans/freelander-31bh-floorplan.jpg",
    "description": "Our biggest-capacity motorhome. Two slideouts, a real bunk room with its own TVs and room for ten make this the one for big families, reunions and group trips where everyone rides together.",
    "sleeping": [
      "Rear queen bedroom",
      "Bunk room with two bunks, each with its own TV",
      "Large over-cab bed (57 x 95 in)",
      "Dinette and sofa convert for extra guests"
    ],
    "inside": [
      "Kitchen with 3-burner range, oven, microwave and double-door refrigerator",
      "Full bathroom with a roomy shower",
      "Ducted heating and air conditioning"
    ],
    "outside": [
      "Power awning with LED lighting",
      "Backup camera and side-view cameras",
      "Onboard generator"
    ],
    "specs": [
      "Length: 32 ft 11 in",
      "Chassis: Ford E-450, 6.8L V10 gas, 305 hp"
    ],
    "towing": null,
    "rvshare": null
  },
  {
    "slug": "chateau-31e",
    "name": "2018 Thor Chateau 31E",
    "type": "Class C",
    "sleeps": 8,
    "sleepsLabel": "8",
    "length": "32' 7\"",
    "slides": 1,
    "price": 185,
    "badges": [
      "Bunkhouse"
    ],
    "motorized": true,
    "images": [
      "/images/units/chateau-31e/01.jpg",
      "/images/units/chateau-31e/02.jpg",
      "/images/units/chateau-31e/03.jpg",
      "/images/units/chateau-31e/04.jpg",
      "/images/units/chateau-31e/05.jpg",
      "/images/units/chateau-31e/06.jpg",
      "/images/units/chateau-31e/07.jpg",
      "/images/units/chateau-31e/08.jpg",
      "/images/units/chateau-31e/09.jpg",
      "/images/units/chateau-31e/10.jpg"
    ],
    "floorplan": null,
    "description": "A bunkhouse motorhome that gives every kind of traveler a spot: a queen for the adults, two bunks for the kids, and an over-cab bed for whoever gets there first. Automatic leveling and one-touch controls make setup quick when you pull in.",
    "sleeping": [
      "Rear queen bed",
      "Two bunk beds",
      "Over-cab bed",
      "Dinette and jack-knife sofa convert for extra guests"
    ],
    "inside": [
      "Full kitchen with range, oven, microwave and refrigerator",
      "Full bathroom with shower",
      "Interior TV plus a separate outdoor TV"
    ],
    "outside": [
      "Power awning with LED lighting",
      "Automatic leveling jacks",
      "Touchscreen control panel for the slideout, generator, awning and lights",
      "Onboard generator"
    ],
    "specs": [
      "Length: 32 ft 7 in",
      "Chassis: Ford E-450, 6.8L V10 gas, 305 hp",
      "GVWR: 14,500 lbs | Hitch rating: 8,000 lbs"
    ],
    "towing": null,
    "rvshare": null
  },
  {
    "slug": "redhawk-26m",
    "name": "2021 Jayco Redhawk 26M",
    "type": "Class C",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "28' 8\"",
    "slides": 1,
    "price": 215,
    "badges": [
      "Murphy Bed"
    ],
    "motorized": true,
    "images": [
      "/images/units/redhawk-26m/01.jpg",
      "/images/units/redhawk-26m/02.jpg",
      "/images/units/redhawk-26m/03.jpg",
      "/images/units/redhawk-26m/04.jpg",
      "/images/units/redhawk-26m/05.jpg",
      "/images/units/redhawk-26m/06.jpg",
      "/images/units/redhawk-26m/07.jpg",
      "/images/units/redhawk-26m/08.jpg",
      "/images/units/redhawk-26m/09.jpg",
      "/images/units/redhawk-26m/10.jpg"
    ],
    "floorplan": null,
    "description": "A newer Jayco with the stronger 7.3L V8 and Jayco's smoother ride suspension. The queen bed folds away into the wall during the day, opening up a living room with an electric fireplace and TV.",
    "sleeping": [
      "Queen Murphy bed that folds away by day",
      "Over-cab bed rated for 750 lbs",
      "Dinette and sofa convert for extra guests"
    ],
    "inside": [
      "Kitchen with range, oven, microwave and double sink",
      "Full bathroom with shower",
      "Electric fireplace with TV",
      "Hardwood cabinetry and LED lighting"
    ],
    "outside": [
      "Power awning",
      "Backup camera",
      "Onboard generator",
      "Solar prep and freeze-resistant insulation"
    ],
    "specs": [
      "Length: 28 ft 8 in",
      "Chassis: Ford E-450, 7.3L V8 gas, 350 hp",
      "Fresh / Black: 43.5 / 31 gal | Fuel: 55 gal",
      "A/C: 15,000 BTU | Furnace: 30,000 BTU"
    ],
    "towing": null,
    "rvshare": null
  },
  {
    "slug": "redhawk-26xd",
    "name": "2019 Jayco Redhawk 26XD",
    "type": "Class C",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "29'",
    "slides": 2,
    "price": 205,
    "badges": [
      "Family"
    ],
    "motorized": true,
    "images": [
      "/images/units/redhawk-26xd/01.jpg"
    ],
    "floorplan": "/images/floorplans/redhawk-26xd-floorplan.jpg",
    "description": "A compact Class C with two slideouts, so it drives like a smaller rig and opens up wide once you park. Good for families, couples or a small group heading to national parks, the desert or a relaxed weekend away.",
    "sleeping": [
      "Private rear queen bed",
      "Full-size over-cab loft bed",
      "Dinette and sofa convert for extra guests"
    ],
    "inside": [
      "Kitchen with 3-burner cooktop, dual-fuel refrigerator and freezer, sink and generous storage",
      "Full bathroom with shower, toilet, sink and medicine cabinet",
      "Touchscreen Bluetooth stereo",
      "Air conditioning, furnace and hot water"
    ],
    "outside": [
      "Two slideouts",
      "Backup camera",
      "Onboard generator",
      "Rear receiver hitch"
    ],
    "specs": [
      "Length: 29 ft | Height: 10 ft | Width: 8.5 ft",
      "Seat belts: 6 | Towing capacity: 7,500 lbs",
      "Fresh / Grey / Black: 42 / 41 / 32 gal | Propane: 10 gal"
    ],
    "towing": null,
    "rvshare": null
  },
  {
    "slug": "outlook-25j",
    "name": "2019 Winnebago Outlook 25J",
    "type": "Class C",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "26' 2\"",
    "slides": 0,
    "price": 205,
    "badges": [
      "Family"
    ],
    "motorized": true,
    "images": [
      "/images/units/outlook-25j/01.jpg",
      "/images/units/outlook-25j/02.jpg",
      "/images/units/outlook-25j/03.jpg",
      "/images/units/outlook-25j/04.jpg",
      "/images/units/outlook-25j/05.jpg",
      "/images/units/outlook-25j/06.jpg",
      "/images/units/outlook-25j/07.jpg",
      "/images/units/outlook-25j/08.jpg",
      "/images/units/outlook-25j/09.jpg",
      "/images/units/outlook-25j/10.jpg"
    ],
    "floorplan": "/images/floorplans/outlook-25j-floorplan.jpg",
    "description": "A straightforward, easy-to-drive Winnebago with no slideout to manage. Park it, plug in and you are set up. A smart pick for first-time RVers who want room for a family without the size of a big coach.",
    "sleeping": [
      "Rear bed (54 x 80 in)",
      "Over-cab bed (54 x 95 in)",
      "Dinette and sofa convert for extra guests"
    ],
    "inside": [
      "Galley kitchen with 3-burner range, microwave and gas/electric refrigerator",
      "Bathroom with shower, toilet and sink",
      "TVs in the living area and over-cab",
      "Touchscreen stereo with Bluetooth"
    ],
    "outside": [
      "17 ft power awning",
      "Backup camera and cruise control",
      "Onboard generator and inverter"
    ],
    "specs": [
      "Length: 26 ft 2 in | Height: 10 ft 9 in",
      "Chassis: Ford E-350, 5.4L V8 gas",
      "Fresh / Grey / Black: 37 / 41 / 41 gal",
      "Propane: 18 gal | Fuel: 40 gal",
      "Towing capacity: 7,500 lbs"
    ],
    "towing": null,
    "rvshare": "https://rvshare.com/rvs/details/1765774"
  },
  {
    "slug": "sequence-20j",
    "name": "2022 Thor Sequence 20J",
    "type": "Class B",
    "sleeps": 4,
    "sleepsLabel": "3-4",
    "length": "21'",
    "slides": 0,
    "price": 195,
    "badges": [
      "Camper Van"
    ],
    "motorized": true,
    "images": [
      "/images/units/sequence-20j/01.jpg",
      "/images/units/sequence-20j/02.jpg",
      "/images/units/sequence-20j/03.jpg",
      "/images/units/sequence-20j/04.jpg",
      "/images/units/sequence-20j/05.jpg",
      "/images/units/sequence-20j/06.jpg",
      "/images/units/sequence-20j/07.jpg"
    ],
    "floorplan": null,
    "description": "A Ram ProMaster camper van that handles like a large van, not a motorhome, and fits where bigger rigs cannot. Swivel cab seats, a center galley and a rear sofa that folds into a bed make it an easy base for two.",
    "sleeping": [
      "Rear sofa that folds into a bed"
    ],
    "inside": [
      "Center galley with portable cooktop, microwave and compact refrigerator",
      "Wet bath with toilet and shower",
      "Swivel cab seats and removable table",
      "Touchscreen control panel"
    ],
    "outside": [
      "Ram ProMaster 3500 chassis",
      "Rear bike rack"
    ],
    "specs": [
      "Length: 21 ft 1 in",
      "Chassis: Ram ProMaster 3500, 3.6L V6 gas, 280 hp"
    ],
    "towing": null,
    "rvshare": "https://rvshare.com/rvs/details/1765771"
  },
  {
    "slug": "cougar-22rbs",
    "name": "2021 Keystone Cougar 22RBS",
    "type": "Travel Trailer",
    "sleeps": 4,
    "sleepsLabel": "4",
    "length": "25' 11\"",
    "slides": 1,
    "price": 135,
    "badges": [
      "Couples"
    ],
    "motorized": false,
    "images": [
      "/images/units/cougar-22rbs/01.jpg",
      "/images/units/cougar-22rbs/02.jpg",
      "/images/units/cougar-22rbs/03.jpg",
      "/images/units/cougar-22rbs/04.jpg",
      "/images/units/cougar-22rbs/05.jpg",
      "/images/units/cougar-22rbs/06.jpg",
      "/images/units/cougar-22rbs/07.jpg"
    ],
    "floorplan": null,
    "description": "A half-ton towable built for two, with a king bed up front and a rear bath with a radius shower. Heated tanks and a 60 gal fresh tank make it comfortable for longer stays and cooler seasons.",
    "sleeping": [
      "Front king bed (72 x 80 in)",
      "U-shaped dinette converts for extra guests"
    ],
    "inside": [
      "Kitchen with range, oven, microwave and a large pantry",
      "Rear bathroom with radius shower",
      "Bar-top seating and TV"
    ],
    "outside": [
      "16 ft power awning",
      "Smartphone control for lights, slide, awning and climate",
      "Heated holding tanks"
    ],
    "specs": [
      "Length: 25 ft 11 in | Height: 11 ft 4 in | Width: 8 ft",
      "Dry weight: 5,607 lbs | GVWR: 7,200 lbs | Hitch weight: 630 lbs",
      "Fresh / Grey / Black: 60 / 30 / 30 gal | Two propane tanks"
    ],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 7,200 lbs, a brake controller, and a 2-inch ball hitch. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": "https://rvshare.com/rvs/details/1778327"
  },
  {
    "slug": "ibex-20bhs",
    "name": "2021 Forest River Ibex 20BHS",
    "type": "Travel Trailer",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "25'",
    "slides": 1,
    "price": 125,
    "badges": [
      "Bunkhouse"
    ],
    "motorized": false,
    "images": [
      "/images/units/ibex-20bhs/01.jpg",
      "/images/units/ibex-20bhs/02.jpg",
      "/images/units/ibex-20bhs/03.jpg",
      "/images/units/ibex-20bhs/04.jpg",
      "/images/units/ibex-20bhs/05.jpg",
      "/images/units/ibex-20bhs/06.jpg",
      "/images/units/ibex-20bhs/07.jpg",
      "/images/units/ibex-20bhs/08.jpg",
      "/images/units/ibex-20bhs/09.jpg",
      "/images/units/ibex-20bhs/10.jpg"
    ],
    "floorplan": "/images/floorplans/ibex-20bhs-floorplan.jpg",
    "description": "A light, rugged bunkhouse trailer that tows behind a wide range of trucks and SUVs. Queen up front, bunks for the kids, and an enclosed underbelly so it handles cool nights as well as summer weekends.",
    "sleeping": [
      "Front queen bed with under-bed storage",
      "Two bunk beds (30 x 74 in)",
      "Slide-out dinette converts for an extra guest"
    ],
    "inside": [
      "Kitchen with range, oven, sink and refrigerator",
      "Rear corner bathroom with shower",
      "TV"
    ],
    "outside": [
      "16 ft power awning",
      "Power tongue jack",
      "Pass-through storage",
      "Enclosed underbelly"
    ],
    "specs": [
      "Length: 25 ft | Height: 11 ft 3 in | Width: 8 ft",
      "Dry weight: 4,613 lbs | GVWR: 7,510 lbs | Hitch weight: 510 lbs",
      "Fresh / Grey / Black: 40 / 40 / 30 gal | Two propane tanks"
    ],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 7,510 lbs, a brake controller, and a 2-inch ball hitch. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": null
  }
]


const PHONE = '619-992-0289'
const EMAIL = 'honestrvrentals@gmail.com'
const PICKUP = 'Sycuan Casino Resort, 5469 Casino Way, El Cajon, CA 92019'

// Optional add-ons (same list and prices on every platform)
const addOns = [
  { name: 'Pre-Trip Fresh Water Fill', price: '$75' },
  { name: 'Post-Trip Tank Dump and Flush', price: '$199' },
  { name: 'Portable Generator', price: '$50 / night' },
  { name: 'Starlink Internet', price: '$199' },
  { name: 'Half Day Start - 10:00 AM Pickup', price: '$99' },
  { name: 'Half Day End - 4:00 PM Return', price: '$99' },
  { name: 'Electric Bike (lights and lock, up to 10)', price: '$50 / bike / night' },
  { name: 'Dog Fee (max 2 dogs, service animals free)', price: '$100 / dog' },
  { name: 'Camp Kit', price: '$150' },
  { name: 'Bedding and Towels', price: '$50 / bed' },
  { name: 'Golf Cart Rental via 3rd Party Partner', price: '$199 / night' },
  { name: 'Golf Cart Delivery and Pickup via 3rd Party Partner', price: '$199' },
  { name: 'Local Delivery, Setup and Pickup (trailers)', price: '$399' }
]

const PURPLE = '#4A1259'

// "Also listed on" - only platforms the fleet is actually listed on
const PlatformLogos = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B8860B' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Outdoorsy</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#5A5A5A' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 17h2v-6h-2v6zm-4 0h2V7h-2v10zm-4 0h2v-4h-2v4zm-4 0h2v-2H7v2zM5 3v18h14V3H5z"/></svg>
      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>RVshare</span>
    </div>
  </div>
)

const Header = ({ onNavigate }) => (
  <header style={{ background: PURPLE, padding: '10px 20px', position: 'sticky', top: 0, zIndex: 100 }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div onClick={() => onNavigate('')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '50px', borderRadius: '4px' }} />
      </div>
      <a href={`tel:${PHONE}`} style={{ background: 'white', color: PURPLE, padding: '8px 16px', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem' }}>
        {PHONE}
      </a>
    </div>
  </header>
)

const Footer = () => (
  <footer style={{ background: PURPLE, color: 'white', padding: '40px 20px', textAlign: 'center' }}>
    <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '60px', marginBottom: '16px', borderRadius: '4px' }} />
    <p style={{ fontSize: '0.95rem', marginBottom: '8px' }}>Always Honest RV Rentals</p>
    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginBottom: '8px' }}>
      {PHONE} | {EMAIL}
    </p>
    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '16px' }}>
      Pickup and return: {PICKUP}
    </p>
    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>San Diego, CA | 2026 Always Honest RV Rentals</p>
  </footer>
)

const Included = ({ rv }) => (
  <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: '#444', lineHeight: 1.8 }}>
    <li>Upgraded smart LED flat-panel TV for streaming, included with every rental</li>
    <li>Full walkthrough at pickup, cleaned and checked before every trip</li>
    <li>Pickup 2:00 PM, return by 12:00 PM</li>
    {rv.motorized
      ? <li>150 miles per night included, $0.35 per mile after. Onboard generator: 6 hours per night included, $5 per hour after</li>
      : <li>Tow it yourself or add local delivery, setup and pickup</li>}
  </ul>
)

const HomePage = ({ onNavigate }) => {
  const [typeFilter, setTypeFilter] = useState('')
  const [sleepsFilter, setSleepsFilter] = useState('')

  const filteredRVs = rvs.filter(rv => {
    if (typeFilter && rv.type !== typeFilter) return false
    if (sleepsFilter && rv.sleeps < parseInt(sleepsFilter)) return false
    return true
  })
  const types = [...new Set(rvs.map(r => r.type))]

  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${PURPLE} 0%, #6B2D7B 100%)`, padding: '50px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '120px', marginBottom: '16px', borderRadius: '8px' }} />
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '24px' }}>
            San Diego RV rentals with clear pricing and no surprise fees
          </p>
          <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}>
                <option value="">All Types</option>
                {types.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select value={sleepsFilter} onChange={e => setSleepsFilter(e.target.value)}
                style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem' }}>
                <option value="">Any Sleeps</option>
                <option value="2">2+ guests</option>
                <option value="4">4+ guests</option>
                <option value="6">6+ guests</option>
                <option value="8">8+ guests</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'white', padding: '28px 20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <p style={{ color: '#777', fontSize: '0.8rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Also Listed On</p>
        <PlatformLogos />
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Our Fleet</h2>
          <span style={{ color: '#777', fontSize: '0.9rem' }}>{filteredRVs.length} available</span>
        </div>
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '24px' }}>
          Standard nightly rates shown, before 8.75% sales tax and optional add-ons. Holiday and event dates are priced higher.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredRVs.map(rv => (
            <div key={rv.slug} onClick={() => onNavigate(`rv/${rv.slug}`)}
              style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ position: 'relative', height: '200px' }}>
                <img src={rv.images[0]} alt={rv.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#f0f0f0' }} />
                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                  {rv.badges.map((b, i) => (
                    <span key={i} style={{ background: PURPLE, color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{b}</span>
                  ))}
                  <span style={{ background: 'white', color: PURPLE, padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{rv.type}</span>
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px', lineHeight: 1.3 }}>{rv.name}</h3>
                <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '12px', lineHeight: 1.5 }}>{rv.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#666', fontSize: '0.85rem' }}>Sleeps {rv.sleepsLabel} | {rv.length}</span>
                  <span style={{ color: PURPLE, fontWeight: 700, fontSize: '1.2rem' }}>
                    ${rv.price}<span style={{ fontSize: '0.8rem', fontWeight: 400 }}>/night</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section style={{ background: 'white', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: PURPLE, textAlign: 'center' }}>Optional Add-Ons</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '8px 24px' }}>
            {addOns.map(a => (
              <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '0.9rem' }}>
                <span style={{ color: '#444' }}>{a.name}</span>
                <span style={{ color: PURPLE, fontWeight: 600, whiteSpace: 'nowrap' }}>{a.price}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '14px', textAlign: 'center' }}>
            Every rental includes an upgraded smart LED TV for streaming. Pickup and return at {PICKUP}.
          </p>
        </div>
      </section>

      <section style={{ background: '#f5f5f5', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>Professional Cleaning by</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 700, color: PURPLE }}>CHAMPION CLEANING</span>
              <span style={{ color: '#E0A800', fontSize: '1.1rem' }}>★★★★★</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '6px' }}>Licensed & Certified 3rd Party Cleaning</p>
          </div>
          <div style={{ background: 'white', borderRadius: '10px', padding: '24px', fontSize: '0.95rem', lineHeight: 1.8, color: '#444' }}>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> All units provided clean inside and out</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> Complete walkthrough tutorial with every reservation</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> These are rental units — some wear and tear over time is expected</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> We are straight forward with you and ask you be the same with us</p>
            <p><strong style={{ color: PURPLE }}>✓</strong> If something's wrong, let us know and we'll do our best to make it right</p>
          </div>
        </div>
      </section>

      <section style={{ background: 'white', padding: '40px 20px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: PURPLE }}>A Note From Me</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            This is a 2nd job for me — I have a full-time day job, am a mom of an infant, and am not super experienced with RVs.
            I hire independent contractors and vendors to help with showings, hand-offs, inspections, and maintenance.
            If they aren't 5-star status, please let me know so I can address it.
          </p>
        </div>
      </section>
    </>
  )
}

const ListBlock = ({ title, items }) => items && items.length ? (
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px', color: PURPLE }}>{title}</h3>
    <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: '#444', lineHeight: 1.8 }}>
      {items.map((x, i) => <li key={i}>{x}</li>)}
    </ul>
  </div>
) : null

const RVDetailPage = ({ slug, onNavigate }) => {
  const rv = rvs.find(r => r.slug === slug)
  const [idx, setIdx] = useState(0)
  const [showFloorplan, setShowFloorplan] = useState(false)

  if (!rv) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>RV Not Found</h1>
        <button onClick={() => onNavigate('')} style={{ background: PURPLE, color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Back to Fleet</button>
      </div>
    )
  }

  const subject = encodeURIComponent(`Rental request: ${rv.name}`)
  const body = encodeURIComponent(`Hi Katya,\n\nI'd like to check availability for the ${rv.name}.\n\nDates:\nNumber of guests:\nPickup or delivery:\n\nThanks!`)
  const mainSrc = showFloorplan && rv.floorplan ? rv.floorplan : rv.images[idx]

  const btn = (filled) => ({
    display: 'block', width: '100%', padding: '14px', borderRadius: '10px', fontSize: '1rem', fontWeight: 600,
    textAlign: 'center', textDecoration: 'none', marginBottom: '12px',
    background: filled ? PURPLE : 'white', color: filled ? 'white' : PURPLE, border: `2px solid ${PURPLE}`
  })

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px 20px' }}>
      <button onClick={() => onNavigate('')}
        style={{ background: 'none', border: 'none', color: PURPLE, fontSize: '0.95rem', cursor: 'pointer', marginBottom: '20px', fontWeight: 500 }}>
        ← Back to Fleet
      </button>

      <div style={{ position: 'relative' }}>
        <img src={mainSrc} alt={rv.name}
          style={{ width: '100%', height: '420px', objectFit: showFloorplan ? 'contain' : 'cover', borderRadius: '12px', background: '#f0f0f0' }} />
        {rv.floorplan && (
          <button onClick={() => setShowFloorplan(!showFloorplan)}
            style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '0.9rem', cursor: 'pointer', fontWeight: 500, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            {showFloorplan ? 'View Photos' : 'View Floorplan'}
          </button>
        )}
      </div>
      {rv.images.length > 1 && (
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0' }}>
          {rv.images.map((src, i) => (
            <img key={src} src={src} alt={`${rv.name} photo ${i + 1}`} loading="lazy"
              onClick={() => { setIdx(i); setShowFloorplan(false) }}
              style={{ width: '96px', height: '68px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer', flexShrink: 0, opacity: i === idx && !showFloorplan ? 1 : 0.6 }} />
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '16px' }}>
        <div>
          <span style={{ background: '#f0f0f0', color: '#555', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', display: 'inline-block', marginBottom: '12px' }}>{rv.type}</span>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>{rv.name}</h1>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>{rv.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {[[rv.sleepsLabel, 'Sleeps'], [rv.length, 'Length'], [rv.slides, 'Slides']].map(([v, l]) => (
              <div key={l} style={{ background: '#f9f9f9', padding: '16px', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: PURPLE }}>{v}</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>{l}</div>
              </div>
            ))}
          </div>

          <ListBlock title="Sleeping" items={rv.sleeping} />
          <ListBlock title="Inside" items={rv.inside} />
          <ListBlock title="Outside and Systems" items={rv.outside} />
          <ListBlock title="Key Specs" items={rv.specs} />
          {rv.towing && <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.7 }}>{rv.towing}</p>}
        </div>

        <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '28px', alignSelf: 'start', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: PURPLE }}>${rv.price}</span>
            <span style={{ color: '#666', fontSize: '1rem' }}>/ night</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px' }}>Standard rate before 8.75% sales tax and add-ons. Holiday and event dates are priced higher.</p>

          {rv.rvshare && <a href={rv.rvshare} target="_blank" rel="noopener noreferrer" style={btn(true)}>Book on RVshare</a>}
          <a href={`mailto:${EMAIL}?subject=${subject}&body=${body}`} style={btn(!rv.rvshare)}>Request Dates by Email</a>
          <a href={`tel:${PHONE}`} style={btn(false)}>Call or Text {PHONE}</a>

          <div style={{ marginTop: '8px', padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, marginBottom: '10px' }}>
              <strong>Pickup Location:</strong><br />{PICKUP}
            </p>
            <Included rv={rv} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '30px', background: '#f9f9f9', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ color: '#777', fontSize: '0.8rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Also listed on</p>
        <PlatformLogos />
      </div>
    </main>
  )
}

function App() {
  const [route, setRoute] = useState('')

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.slice(1))
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
    window.scrollTo(0, 0)
  }

  const content = route.startsWith('rv/')
    ? <RVDetailPage key={route} slug={route.replace('rv/', '')} onNavigate={navigate} />
    : <HomePage onNavigate={navigate} />

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #333; }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; }
        @media (max-width: 768px) {
          main > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Header onNavigate={navigate} />
      {content}
      <Footer />
    </>
  )
}

export default App
