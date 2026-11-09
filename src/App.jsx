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
    "rvshare": "https://rvshare.com/rvs/details/1778363",
    "cover": "/images/units/solitude-391dl/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2024"
          ],
          [
            "Make and Model",
            "Grand Design Solitude 391DL"
          ],
          [
            "Type",
            "Fifth Wheel"
          ],
          [
            "Sleeps",
            "8"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "42 ft 5 in"
          ],
          [
            "Width",
            "101 in (8 ft 5 in)"
          ],
          [
            "Height",
            "153 in (12 ft 9 in)"
          ],
          [
            "Slideouts",
            "5"
          ]
        ]
      },
      {
        "title": "Weight",
        "rows": [
          [
            "Dry Weight",
            "15,300 lbs"
          ],
          [
            "GVWR",
            "18,000 lbs"
          ],
          [
            "Hitch Weight",
            "3,050 lbs"
          ],
          [
            "Axles",
            "7,000 lb heavy duty (some production runs use 8,000 lb axles)"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "81 gal"
          ],
          [
            "Grey Water",
            "106 gal"
          ],
          [
            "Black Water",
            "106 gal"
          ],
          [
            "Propane Tanks",
            "2, 14.2 gal total"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Front king bed, rear private bedroom, Sky Suite loft, super sofa with trifold bed"
          ]
        ]
      }
    ]
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
      "Rear Kitchen"
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
    "rvshare": "https://rvshare.com/rvs/details/1778362",
    "cover": "/images/units/solitude-390rk/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2023"
          ],
          [
            "Make and Model",
            "Grand Design Solitude 390RK"
          ],
          [
            "Type",
            "Fifth Wheel"
          ],
          [
            "Sleeps",
            "6"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "42 ft 5 in"
          ],
          [
            "Width",
            "101 in (8 ft 5 in)"
          ],
          [
            "Height",
            "13 ft 5 in"
          ],
          [
            "Slideouts",
            "5"
          ]
        ]
      },
      {
        "title": "Weight",
        "rows": [
          [
            "Dry Weight",
            "15,800 lbs"
          ],
          [
            "GVWR",
            "19,000 lbs"
          ],
          [
            "Hitch Weight",
            "2,794 lbs"
          ],
          [
            "Axles",
            "8,000 lb heavy duty"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "83 gal"
          ],
          [
            "Grey Water",
            "106 gal"
          ],
          [
            "Black Water",
            "53 gal"
          ],
          [
            "Propane Tanks",
            "2"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Queen bed on slideout, 2 tri-fold sofas"
          ]
        ]
      }
    ]
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
      "Diesel Pusher"
    ],
    "motorized": true,
    "images": [
      "/images/units/discovery-lxe-38k/01.jpg",
      "/images/units/discovery-lxe-38k/02.jpg",
      "/images/units/discovery-lxe-38k/03.jpg",
      "/images/units/discovery-lxe-38k/04.jpg",
      "/images/units/discovery-lxe-38k/05.jpg",
      "/images/units/discovery-lxe-38k/06.jpg"
    ],
    "floorplan": "/images/floorplans/discovery-lxe-38k-floorplan.jpg",
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
    "rvshare": null,
    "cover": "/images/units/discovery-lxe-38k/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2018"
          ],
          [
            "Make and Model",
            "Fleetwood Discovery LXE 38K"
          ],
          [
            "Type",
            "Class A Diesel Motorhome"
          ],
          [
            "Sleeps",
            "4-5"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "38 ft 8 in"
          ],
          [
            "Height",
            "12 ft 10 in"
          ],
          [
            "Width",
            "102 in"
          ],
          [
            "Interior Height",
            "84 in"
          ],
          [
            "Slideouts",
            "3"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Freightliner XCM Series (Power Bridge)"
          ],
          [
            "Engine",
            "Cummins ISB 6.7L I6 diesel, 360 hp, turbocharged"
          ],
          [
            "Transmission",
            "Allison 3000 MH 6-speed automatic"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Generator",
            "Onan diesel generator, standard"
          ],
          [
            "Suspension",
            "Air bag suspension"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "King bed"
          ],
          [
            "Bathrooms",
            "Bath and a half"
          ]
        ]
      }
    ]
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
      "Rear Garage"
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
    "rvshare": "https://rvshare.com/rvs/details/1758130",
    "cover": "/images/units/momentum-29g/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2021"
          ],
          [
            "Make and Model",
            "Grand Design Momentum 29G"
          ],
          [
            "Type",
            "Toy Hauler Travel Trailer"
          ],
          [
            "Sleeps",
            "8"
          ]
        ]
      },
      {
        "title": "Dimensions and Weight",
        "rows": [
          [
            "Length",
            "34 ft"
          ],
          [
            "Height",
            "12 ft 5 in"
          ],
          [
            "Dry Weight",
            "8,300 lbs"
          ],
          [
            "GVWR",
            "11,000 lbs"
          ],
          [
            "Hitch Weight",
            "1,350 lbs"
          ],
          [
            "Slideouts",
            "2"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "100 gal"
          ],
          [
            "Grey Water",
            "78 gal"
          ],
          [
            "Black Water",
            "39 gal"
          ],
          [
            "Propane",
            "18 gal"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Front queen bedroom, rear garage with power bunks"
          ]
        ]
      }
    ]
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
      "/images/units/sequence-20j/06.jpg"
    ],
    "floorplan": "/images/floorplans/sequence-20j-floorplan.jpg",
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
    "rvshare": "https://rvshare.com/rvs/details/1765771",
    "cover": "/images/units/sequence-20j/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2022"
          ],
          [
            "Make and Model",
            "Thor Sequence 20J"
          ],
          [
            "Type",
            "Class B Camper Van"
          ],
          [
            "Sleeps",
            "3-4"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "21 ft 1 in"
          ],
          [
            "Slideouts",
            "0"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Ram ProMaster 3500"
          ],
          [
            "Engine",
            "Pentastar VVT V6, 3.6L gas, 280 hp"
          ],
          [
            "Transmission",
            "Automatic"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Rear sofa bed system"
          ]
        ]
      }
    ]
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
      "/images/units/cougar-22rbs/02.jpg",
      "/images/units/cougar-22rbs/01.jpg",
      "/images/units/cougar-22rbs/03.jpg",
      "/images/units/cougar-22rbs/04.jpg",
      "/images/units/cougar-22rbs/05.jpg",
      "/images/units/cougar-22rbs/06.jpg"
    ],
    "floorplan": "/images/floorplans/cougar-22rbs-floorplan.jpg",
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
    "rvshare": "https://rvshare.com/rvs/details/1778327",
    "cover": "/images/units/cougar-22rbs/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2021"
          ],
          [
            "Make and Model",
            "Keystone Cougar 22RBS"
          ],
          [
            "Type",
            "Travel Trailer"
          ],
          [
            "Sleeps",
            "4"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "25 ft 11 in"
          ],
          [
            "Width",
            "8 ft"
          ],
          [
            "Height",
            "11 ft 4 in"
          ],
          [
            "Slideouts",
            "1"
          ]
        ]
      },
      {
        "title": "Weight",
        "rows": [
          [
            "Dry Weight",
            "5,607 lbs"
          ],
          [
            "GVWR",
            "7,200 lbs"
          ],
          [
            "Hitch Weight",
            "630 lbs"
          ],
          [
            "Payload Capacity",
            "1,593 lbs"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "60 gal"
          ],
          [
            "Grey Water",
            "30 gal"
          ],
          [
            "Black Water",
            "30 gal"
          ],
          [
            "Propane Tanks",
            "2"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "King bed, U-shaped dinette"
          ]
        ]
      }
    ]
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
    "rvshare": null,
    "cover": "/images/units/ibex-20bhs/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2021"
          ],
          [
            "Make and Model",
            "Forest River Ibex 20BHS"
          ],
          [
            "Type",
            "Travel Trailer"
          ],
          [
            "Sleeps",
            "6"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "25 ft"
          ],
          [
            "Width",
            "8 ft"
          ],
          [
            "Height",
            "11 ft 3 in"
          ],
          [
            "Slideouts",
            "1"
          ]
        ]
      },
      {
        "title": "Weight",
        "rows": [
          [
            "Dry Weight",
            "4,613 lbs"
          ],
          [
            "GVWR",
            "7,510 lbs"
          ],
          [
            "Hitch Weight",
            "510 lbs"
          ],
          [
            "Payload Capacity",
            "2,897 lbs"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "40 gal"
          ],
          [
            "Grey Water",
            "40 gal"
          ],
          [
            "Black Water",
            "30 gal"
          ],
          [
            "Propane Tanks",
            "2"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Front queen bed, bunk beds, convertible dinette"
          ]
        ]
      }
    ]
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
      "Bunkhouse"
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
    "rvshare": null,
    "cover": "/images/units/freelander-31bh/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2019"
          ],
          [
            "Make and Model",
            "Coachmen Freelander 31BH"
          ],
          [
            "Type",
            "Class C Motorhome"
          ],
          [
            "Sleeps",
            "10"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "32 ft 11 in"
          ],
          [
            "Slideouts",
            "2"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Ford E450"
          ],
          [
            "Engine",
            "Ford Triton V10, 6.8L gas, 305 hp"
          ],
          [
            "Transmission",
            "TorqShift automatic"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Generator",
            "Onboard, standard"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Overhead cab bunk (57in x 95in), twin bunk beds, convertible dinette and sofa bed"
          ]
        ]
      }
    ]
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
    "floorplan": "/images/floorplans/chateau-31e-floorplan.jpg",
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
    "rvshare": null,
    "cover": "/images/units/chateau-31e/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2018"
          ],
          [
            "Make and Model",
            "Thor Chateau 31E"
          ],
          [
            "Type",
            "Class C Motorhome"
          ],
          [
            "Sleeps",
            "8"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "32 ft 7 in"
          ],
          [
            "Slideouts",
            "1 (3TRAX wall slide system)"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Ford E450"
          ],
          [
            "Engine",
            "Ford Triton V10, 6.8L gas, 305 hp"
          ],
          [
            "Transmission",
            "TorqShift automatic"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "GVWR",
            "14,500 lbs"
          ],
          [
            "Trailer Hitch",
            "8,000 lbs"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "Queen bed, cab-over bunk, convertible dinette"
          ]
        ]
      }
    ]
  },
  {
    "slug": "redhawk-26xd",
    "name": "2019 Jayco Redhawk 26XD",
    "type": "Class C",
    "sleeps": 6,
    "sleepsLabel": "6",
    "length": "28' 8\"",
    "slides": 2,
    "price": 205,
    "badges": [
      "Compact"
    ],
    "motorized": true,
    "images": [
      "/images/units/redhawk-26xd/01.jpg",
      "/images/units/redhawk-26xd/02.jpg",
      "/images/units/redhawk-26xd/03.jpg",
      "/images/units/redhawk-26xd/04.jpg",
      "/images/units/redhawk-26xd/05.jpg",
      "/images/units/redhawk-26xd/06.jpg",
      "/images/units/redhawk-26xd/07.jpg",
      "/images/units/redhawk-26xd/08.jpg",
      "/images/units/redhawk-26xd/09.jpg",
      "/images/units/redhawk-26xd/10.jpg",
      "/images/units/redhawk-26xd/11.jpg",
      "/images/units/redhawk-26xd/12.jpg"
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
    "rvshare": null,
    "cover": "/images/units/redhawk-26xd/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2019"
          ],
          [
            "Make and Model",
            "Jayco Redhawk 26XD"
          ],
          [
            "Type",
            "Class C Motorhome"
          ],
          [
            "Sleeps",
            "6"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "28 ft 8 in"
          ],
          [
            "Exterior Height",
            "11 ft 6 in"
          ],
          [
            "Interior Height",
            "7 ft 0 in"
          ],
          [
            "Width",
            "8 ft 4 in"
          ],
          [
            "Slideouts",
            "2"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Ford E-450"
          ],
          [
            "Engine",
            "Ford Triton V10, 6.8L gas"
          ],
          [
            "Axles",
            "2"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "43 gal"
          ],
          [
            "Grey Water",
            "41 gal"
          ],
          [
            "Black Water",
            "32 gal"
          ],
          [
            "Propane",
            "12 gal"
          ],
          [
            "Fuel",
            "55 gal"
          ],
          [
            "Refrigerator",
            "8 cu ft"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "3 (cab-over bunk, queen slideout bed, convertible dinette/sofa)"
          ]
        ]
      }
    ]
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
      "Compact"
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
    "rvshare": "https://rvshare.com/rvs/details/1765774",
    "cover": "/images/units/outlook-25j/cover.jpg",
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2019"
          ],
          [
            "Make and Model",
            "Winnebago Outlook 25J"
          ],
          [
            "Type",
            "Class C Motorhome"
          ],
          [
            "Sleeps",
            "6"
          ]
        ]
      },
      {
        "title": "Dimensions",
        "rows": [
          [
            "Length",
            "26 ft 2 in"
          ],
          [
            "Exterior Height",
            "10 ft 9 in"
          ],
          [
            "Interior Height",
            "6 ft 10 in"
          ],
          [
            "Width",
            "8 ft 5 in"
          ],
          [
            "Slideouts",
            "0 (no slideout on this floorplan)"
          ],
          [
            "Axles",
            "1"
          ]
        ]
      },
      {
        "title": "Chassis and Engine",
        "rows": [
          [
            "Chassis",
            "Ford E350"
          ],
          [
            "Engine",
            "Ford Triton V8, 5.4L gas, 255 hp"
          ],
          [
            "Transmission",
            "TorqShift 6-speed automatic with overdrive"
          ]
        ]
      },
      {
        "title": "Capacities",
        "rows": [
          [
            "Fresh Water",
            "37 gal"
          ],
          [
            "Grey Water",
            "41 gal"
          ],
          [
            "Black Water",
            "41 gal"
          ],
          [
            "Propane",
            "18 gal"
          ],
          [
            "Fuel",
            "40 gal"
          ],
          [
            "GVWR",
            "11,500 lbs"
          ],
          [
            "Towing Capacity",
            "7,500 lbs"
          ]
        ]
      },
      {
        "title": "Sleeping",
        "rows": [
          [
            "Beds",
            "2 double beds, 2 convertible sofa/dinette beds"
          ]
        ]
      }
    ]
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

const DARK = '#3A0E47'
const ACCENT = '#A23BC0'

const TYPE_GROUPS = [
  { key: 'motorhome', label: 'Motorhomes', match: t => /^Class/.test(t) },
  { key: 'trailer', label: 'Travel Trailers', match: t => t === 'Travel Trailer' },
  { key: 'fifth', label: 'Fifth Wheels', match: t => t === 'Fifth Wheel' },
  { key: 'toy', label: 'Toy Haulers', match: t => t === 'Toy Hauler' }
]

const fmtDate = d => d ? new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
)

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" /></svg>
)

const NavItem = ({ label, items, onClick }) => {
  const [open, setOpen] = useState(false)
  if (!items) {
    return <button className="nav-link" onClick={onClick}>{label}</button>
  }
  return (
    <div className="nav-item" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="nav-link" onClick={() => setOpen(!open)}>{label} <Chevron /></button>
      {open && (
        <div className="nav-menu">
          {items.map(it => (
            <button key={it.label} className="nav-menu-item" onClick={() => { setOpen(false); it.onClick() }}>{it.label}</button>
          ))}
        </div>
      )}
    </div>
  )
}

const Header = ({ go }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = fn => () => { setMobileOpen(false); fn() }
  const nav = [
    { label: 'RV Rentals', items: TYPE_GROUPS.map(g => ({ label: g.label, onClick: close(() => go.filter(g.key)) })) },
    { label: 'Fleet', items: [{ label: 'View All RVs', onClick: close(() => go.filter('')) }, ...rvs.map(r => ({ label: r.name.replace(/^\d{4} /, ''), onClick: close(() => go.unit(r.slug)) }))] },
    { label: 'Locations', items: [
      { label: 'Pickup at Sycuan Casino Resort', onClick: close(() => go.section('location')) },
      { label: 'Delivery and Setup', onClick: close(() => go.section('location')) }
    ] },
    { label: 'About', items: [
      { label: 'Our Promise', onClick: close(() => go.section('promise')) },
      { label: 'Add-Ons and Pricing', onClick: close(() => go.section('addons')) },
      { label: 'A Note From Katya', onClick: close(() => go.section('note')) }
    ] },
    { label: 'Contact', onClick: close(() => go.section('contact')) }
  ]
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-box" onClick={close(() => go.home())}>
          <img src="/images/logo.png" alt="Always Honest RV Rentals" />
        </div>
        <nav className={`main-nav${mobileOpen ? ' open' : ''}`}>
          {nav.map(n => <NavItem key={n.label} {...n} />)}
        </nav>
        <div className="header-right">
          <span className="header-divider" />
          <a className="phone-pill" href={`tel:${PHONE}`}><PhoneIcon /> {PHONE}</a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}

const Footer = () => (
  <footer id="contact" style={{ background: DARK, color: 'white', padding: '48px 20px', textAlign: 'center' }}>
    <img src="/images/logo.png" alt="Always Honest RV Rentals" style={{ height: '70px', marginBottom: '18px', borderRadius: '8px', background: 'white', padding: '4px' }} />
    <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px' }}>Always Honest RV Rentals</p>
    <p style={{ fontSize: '1rem', marginBottom: '8px' }}>
      <a href={`tel:${PHONE}`} style={{ fontWeight: 700 }}>{PHONE}</a> | <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </p>
    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginBottom: '16px' }}>Pickup and return: {PICKUP}</p>
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
      : <li>Unlimited mileage. Tow it yourself or add local delivery, setup and pickup</li>}
  </ul>
)

const Hero = ({ dates, setDates, onSearch }) => {
  const today = new Date().toISOString().slice(0, 10)
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Always Honest RVs</h1>
        <p className="hero-sub">San Diego RV Rentals, Straightforward</p>
        <div className="hero-rule" />
        <form className="search-card" onSubmit={e => { e.preventDefault(); onSearch() }}>
          <label className="search-field">
            <span className="search-label">Trip Start</span>
            <input type="date" min={today} value={dates.start}
              onChange={e => setDates(d => ({ start: e.target.value, end: d.end && d.end <= e.target.value ? '' : d.end }))} />
          </label>
          <label className="search-field">
            <span className="search-label">Trip End</span>
            <input type="date" min={dates.start || today} value={dates.end}
              onChange={e => setDates(d => ({ ...d, end: e.target.value }))} />
          </label>
          <button type="submit" className="search-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            Find My RV
          </button>
        </form>
      </div>
    </section>
  )
}

const nightsBetween = (a, b) => a && b ? Math.round((new Date(b) - new Date(a)) / 86400000) : 0

const RVCard = ({ rv, onOpen, nights }) => {
  const [showFp, setShowFp] = useState(false)
  return (
    <div className="rv-card" onClick={onOpen}>
      <div className="rv-card-img">
        <img src={showFp && rv.floorplan ? rv.floorplan : (rv.cover || rv.images[0])} alt={rv.name} loading="lazy"
          style={{ objectFit: showFp ? 'contain' : 'cover', background: showFp ? 'white' : '#f0f0f0', padding: showFp ? '10px' : 0 }} />
        {rv.badges.length > 0 && (
          <div className="rv-tags rv-tags-left">
            {rv.badges.map((b, i) => <span key={i} className="tag tag-dark">{b}</span>)}
          </div>
        )}
        <div className="rv-tags rv-tags-right">
          <span className="tag tag-light">{rv.type}</span>
        </div>
        {rv.floorplan && (
          <div className="fp-toggle" onClick={e => e.stopPropagation()}>
            <button className={!showFp ? 'on' : ''} onClick={() => setShowFp(false)}>Photo</button>
            <button className={showFp ? 'on' : ''} onClick={() => setShowFp(true)}>Floorplan</button>
          </div>
        )}
      </div>
      <div style={{ padding: '18px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3 }}>{rv.name}</h3>
        <p className="rv-desc">{rv.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '10px' }}>
          <span style={{ color: '#555', fontSize: '0.9rem' }}>Sleeps {rv.sleepsLabel} | {rv.length}</span>
          <span style={{ textAlign: 'right' }}>
            <span style={{ color: PURPLE, fontWeight: 800, fontSize: '1.3rem' }}>${rv.price}</span>
            <span style={{ color: PURPLE, fontSize: '0.85rem' }}>/night</span>
            {nights > 0 && <span style={{ display: 'block', color: '#555', fontSize: '0.8rem' }}>{nights} nights from ${(rv.price * nights).toLocaleString()}</span>}
          </span>
        </div>
      </div>
    </div>
  )
}

const HomePage = ({ go, dates, setDates, group, setGroup }) => {
  const [sleepsFilter, setSleepsFilter] = useState('')
  const g = TYPE_GROUPS.find(x => x.key === group)
  const filteredRVs = rvs.filter(rv => {
    if (g && !g.match(rv.type)) return false
    if (sleepsFilter && rv.sleeps < parseInt(sleepsFilter)) return false
    return true
  })
  const nights = nightsBetween(dates.start, dates.end)

  return (
    <>
      <Hero dates={dates} setDates={setDates} onSearch={() => go.section('fleet')} />

      <section style={{ background: 'white', padding: '22px 20px', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Also Listed On</p>
        <PlatformLogos />
      </section>

      <main id="fleet" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', scrollMarginTop: '90px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: DARK }}>Our Fleet</h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {[{ key: '', label: 'All' }, ...TYPE_GROUPS.filter(t => rvs.some(r => t.match(r.type)))].map(t => (
              <button key={t.key} className={`pill${group === t.key ? ' on' : ''}`} onClick={() => setGroup(t.key)}>{t.label}</button>
            ))}
            <select value={sleepsFilter} onChange={e => setSleepsFilter(e.target.value)} className="pill-select">
              <option value="">Any Sleeps</option>
              <option value="4">Sleeps 4+</option>
              <option value="6">Sleeps 6+</option>
              <option value="8">Sleeps 8+</option>
            </select>
          </div>
        </div>
        {dates.start && dates.end && (
          <p style={{ background: '#F4ECF7', color: DARK, borderRadius: '10px', padding: '12px 16px', fontSize: '0.95rem', marginBottom: '12px' }}>
            Your dates: <strong>{fmtDate(dates.start)} to {fmtDate(dates.end)}</strong> ({nights} nights). Pick an RV to request these dates. Katya confirms availability, usually the same day.
          </p>
        )}
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '24px' }}>
          Standard nightly rates shown, before 8.75% sales tax and optional add-ons. Holiday and event dates are priced higher. {filteredRVs.length} of {rvs.length} RVs shown.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '22px' }}>
          {filteredRVs.map(rv => <RVCard key={rv.slug} rv={rv} nights={nights} onOpen={() => go.unit(rv.slug)} />)}
        </div>
      </main>

      <section id="location" style={{ background: '#F7F3F9', padding: '44px 20px', scrollMarginTop: '90px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: DARK, marginBottom: '10px' }}>Pickup and Return</h3>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>{PICKUP}<br />Pickup 2:00 PM, return by 12:00 PM.</p>
          </div>
          <div style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: DARK, marginBottom: '10px' }}>Delivery and Setup</h3>
            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>Trailers can be delivered, set up and picked up at your campsite in the San Diego area for $399. Ask about other locations.</p>
          </div>
        </div>
      </section>

      <section id="addons" style={{ background: 'white', padding: '44px 20px', scrollMarginTop: '90px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', color: DARK, textAlign: 'center' }}>Optional Add-Ons</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '8px 24px' }}>
            {addOns.map(a => (
              <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '0.9rem' }}>
                <span style={{ color: '#444' }}>{a.name}</span>
                <span style={{ color: PURPLE, fontWeight: 600, whiteSpace: 'nowrap' }}>{a.price}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '14px', textAlign: 'center' }}>
            Every rental includes an upgraded smart LED TV for streaming. A $199 trip preparation fee applies to every booking.
          </p>
        </div>
      </section>

      <section id="promise" style={{ background: '#f5f5f5', padding: '44px 20px', scrollMarginTop: '90px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>Professional Cleaning by</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 700, color: PURPLE }}>CHAMPION CLEANING</span>
              <span style={{ color: '#E0A800', fontSize: '1.1rem' }}>★★★★★</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '6px' }}>Licensed & Certified 3rd Party Cleaning</p>
          </div>
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', fontSize: '0.95rem', lineHeight: 1.8, color: '#444' }}>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> All units provided clean inside and out</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> Complete walkthrough tutorial with every reservation</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> These are rental units — some wear and tear over time is expected</p>
            <p style={{ marginBottom: '10px' }}><strong style={{ color: PURPLE }}>✓</strong> We are straight forward with you and ask you be the same with us</p>
            <p><strong style={{ color: PURPLE }}>✓</strong> If something's wrong, let us know and we'll do our best to make it right</p>
          </div>
        </div>
      </section>

      <section id="note" style={{ background: 'white', padding: '44px 20px', scrollMarginTop: '90px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', color: DARK }}>A Note From Me</h3>
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

const RVDetailPage = ({ slug, onNavigate, dates = {} }) => {
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
  const body = encodeURIComponent(`Hi Katya,\n\nI'd like to check availability for the ${rv.name}.\n\nDates: ${dates.start && dates.end ? fmtDate(dates.start) + ' to ' + fmtDate(dates.end) : ''}\nNumber of guests:\nPickup or delivery:\n\nThanks!`)
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
        <div className="viewer">
          {!showFloorplan && <div className="viewer-bg" style={{ backgroundImage: `url(${mainSrc})` }} />}
          <img src={mainSrc} alt={rv.name} className="viewer-img" style={{ background: showFloorplan ? 'white' : 'transparent' }} />
        </div>
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

      {rv.fullSpecs && (
        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: DARK, marginBottom: '16px' }}>Full Specifications</h2>
          <div className="spec-grid">
            {rv.fullSpecs.map(sec => (
              <div key={sec.title} className="spec-card">
                <h3>{sec.title}</h3>
                <table>
                  <tbody>
                    {sec.rows.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: '40px', padding: '30px', background: '#f9f9f9', borderRadius: '12px', textAlign: 'center' }}>
        <p style={{ color: '#777', fontSize: '0.8rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Also listed on</p>
        <PlatformLogos />
      </div>
    </main>
  )
}

function App() {
  const [route, setRoute] = useState('')
  const [dates, setDates] = useState({ start: '', end: '' })
  const [group, setGroup] = useState('')

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

  const scrollTo = (id) => {
    const run = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (route.startsWith('rv/')) { window.location.hash = ''; setTimeout(run, 120) } else run()
  }

  const go = {
    home: () => navigate(''),
    unit: slug => navigate(`rv/${slug}`),
    section: scrollTo,
    filter: key => { setGroup(key); scrollTo('fleet') }
  }

  const content = route.startsWith('rv/')
    ? <RVDetailPage key={route} slug={route.replace('rv/', '')} onNavigate={navigate} dates={dates} />
    : <HomePage go={go} dates={dates} setDates={setDates} group={group} setGroup={setGroup} />

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; color: #333; }
        a { text-decoration: none; color: inherit; }
        button { font-family: inherit; }
        img { max-width: 100%; }

        .site-header { position: sticky; top: 0; z-index: 100; background: ${DARK}; box-shadow: 0 2px 14px rgba(0,0,0,0.18); }
        .header-inner { max-width: 1240px; margin: 0 auto; padding: 10px 24px; display: flex; align-items: center; gap: 24px; }
        .logo-box { background: white; border-radius: 12px; padding: 4px 8px; cursor: pointer; flex-shrink: 0; box-shadow: 0 4px 14px rgba(0,0,0,0.2); }
        .logo-box img { height: 64px; display: block; }
        .main-nav { display: flex; align-items: center; gap: 6px; margin-left: auto; }
        .nav-item { position: relative; }
        .nav-link { background: none; border: none; color: white; font-size: 1.02rem; font-weight: 700; padding: 10px 14px; cursor: pointer; display: flex; align-items: center; gap: 6px; border-radius: 8px; }
        .nav-link:hover { background: rgba(255,255,255,0.1); }
        .nav-menu { position: absolute; top: 100%; left: 0; min-width: 250px; background: white; border-radius: 12px; box-shadow: 0 12px 34px rgba(0,0,0,0.22); padding: 8px; max-height: 70vh; overflow-y: auto; }
        .nav-menu-item { display: block; width: 100%; text-align: left; background: none; border: none; padding: 10px 12px; font-size: 0.95rem; color: #333; border-radius: 8px; cursor: pointer; }
        .nav-menu-item:hover { background: #F4ECF7; color: ${PURPLE}; }
        .header-right { display: flex; align-items: center; gap: 18px; }
        .header-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.3); }
        .phone-pill { display: inline-flex; align-items: center; gap: 8px; background: white; color: ${PURPLE}; padding: 10px 18px; border-radius: 12px; font-weight: 800; font-size: 1.1rem; white-space: nowrap; }
        .menu-btn { display: none; background: none; border: none; color: white; cursor: pointer; }

        .hero { position: relative; color: white; background: ${DARK}; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: 0; right: 0; bottom: 0; width: 64%; background: url('/images/hero-rv.jpg') right center / cover no-repeat;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 14%); mask-image: linear-gradient(90deg, transparent 0%, #000 14%); }
        .hero-inner { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: 70px 24px 80px; min-height: 520px; display: flex; flex-direction: column; justify-content: center; }
        .hero-title { font-size: clamp(2.4rem, 5.2vw, 4.1rem); font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; text-shadow: 0 2px 16px rgba(0,0,0,0.3); }
        .hero-sub { font-size: clamp(1.25rem, 2.6vw, 2.1rem); font-weight: 400; margin-top: 10px; text-shadow: 0 2px 12px rgba(0,0,0,0.3); }
        .hero-rule { width: min(560px, 80%); height: 4px; border-radius: 2px; background: ${ACCENT}; margin: 18px 0 30px; }
        .search-card { display: flex; gap: 12px; background: white; padding: 12px; border-radius: 16px; box-shadow: 0 14px 40px rgba(0,0,0,0.3); max-width: 760px; }
        .search-field { flex: 1; display: flex; flex-direction: column; justify-content: center; border: 1px solid #ddd; border-radius: 12px; padding: 8px 14px; cursor: pointer; }
        .search-label { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: ${PURPLE}; }
        .search-field input { border: none; outline: none; font-size: 1.05rem; color: #333; font-family: inherit; padding: 2px 0; background: transparent; cursor: pointer; }
        .search-btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: ${PURPLE}; color: white; border: none; border-radius: 12px; padding: 0 28px; font-size: 1.15rem; font-weight: 800; cursor: pointer; white-space: nowrap; }
        .search-btn:hover { background: #5E1A70; }

        .pill { background: white; border: 1px solid #ddd; color: #444; padding: 8px 16px; border-radius: 999px; font-size: 0.9rem; font-weight: 600; cursor: pointer; }
        .pill.on { background: ${PURPLE}; border-color: ${PURPLE}; color: white; }
        .pill-select { border: 1px solid #ddd; border-radius: 999px; padding: 8px 14px; font-size: 0.9rem; font-family: inherit; background: white; }

        .rv-card { background: white; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
        .rv-card:hover { transform: translateY(-4px); box-shadow: 0 10px 26px rgba(0,0,0,0.13); }
        .rv-card-img { position: relative; height: 215px; }
        .rv-card-img img { width: 100%; height: 100%; display: block; }
        .rv-tags { position: absolute; top: 10px; display: flex; gap: 6px; }
        .rv-tags-left { left: 10px; }
        .rv-tags-right { right: 10px; }
        .tag { padding: 5px 11px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
        .tag-dark { background: ${PURPLE}; color: white; }
        .tag-light { background: white; color: ${PURPLE}; }
        .fp-toggle { position: absolute; bottom: 10px; right: 10px; display: flex; background: rgba(255,255,255,0.95); border-radius: 8px; padding: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
        .fp-toggle button { border: none; background: none; padding: 6px 12px; font-size: 0.8rem; font-weight: 700; color: ${PURPLE}; border-radius: 6px; cursor: pointer; }
        .fp-toggle button.on { background: ${PURPLE}; color: white; }
        .viewer { position: relative; height: 460px; border-radius: 14px; overflow: hidden; background: #ECE6EF; }
        .viewer-bg { position: absolute; inset: -20px; background-size: cover; background-position: center; filter: blur(22px) brightness(0.85); }
        .viewer-img { position: relative; width: 100%; height: 100%; object-fit: contain; display: block; }
        .spec-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .spec-card { background: white; border-radius: 14px; padding: 20px 22px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .spec-card h3 { font-size: 1.05rem; font-weight: 800; color: ${PURPLE}; margin-bottom: 10px; }
        .spec-card table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
        .spec-card th { text-align: left; font-weight: 600; color: #555; padding: 8px 12px 8px 0; vertical-align: top; width: 42%; border-bottom: 1px solid #eee; }
        .spec-card td { color: #222; padding: 8px 0; border-bottom: 1px solid #eee; }
        .spec-card tr:last-child th, .spec-card tr:last-child td { border-bottom: none; }
        .rv-desc { color: #555; font-size: 0.88rem; margin-bottom: 14px; line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

        @media (max-width: 1020px) {
          .menu-btn { display: block; }
          .header-divider { display: none; }
          .main-nav { display: none; position: absolute; top: 100%; left: 0; right: 0; background: ${DARK}; flex-direction: column; align-items: stretch; padding: 10px 16px 18px; gap: 0; max-height: 80vh; overflow-y: auto; }
          .main-nav.open { display: flex; }
          .nav-menu { position: static; box-shadow: none; margin: 4px 0 8px; }
          .header-right { margin-left: auto; }
        }
        @media (max-width: 768px) {
          main > div { grid-template-columns: 1fr !important; }
          .logo-box img { height: 48px; }
          .phone-pill { font-size: 0.95rem; padding: 8px 12px; }
          .hero::before { width: 100%; height: 300px; bottom: auto; background-position: 70% center; -webkit-mask-image: linear-gradient(180deg, #000 45%, transparent 100%); mask-image: linear-gradient(180deg, #000 45%, transparent 100%); }
          .hero-inner { padding: 190px 20px 40px; min-height: 0; }
          .viewer { height: 300px; }
          .search-card { flex-direction: column; }
          .search-btn { padding: 14px; }
        }
        @media (max-width: 480px) {
          .phone-pill span, .phone-pill { font-size: 0.85rem; }
        }
      `}</style>
      <Header go={go} />
      {content}
      <Footer />
    </>
  )
}

export default App
