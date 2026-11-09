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
    "slug": "salem-veranda-32",
    "name": "2026 Forest River Salem Veranda 32",
    "type": "Travel Trailer",
    "sleeps": 4,
    "sleepsLabel": "4",
    "length": "37' 10\"",
    "slides": 1,
    "price": 165,
    "badges": [
      "Patio Deck"
    ],
    "motorized": false,
    "images": [
      "/images/units/salem-veranda-32/01.jpg",
      "/images/units/salem-veranda-32/02.jpg",
      "/images/units/salem-veranda-32/03.jpg",
      "/images/units/salem-veranda-32/04.jpg",
      "/images/units/salem-veranda-32/05.jpg",
      "/images/units/salem-veranda-32/06.jpg",
      "/images/units/salem-veranda-32/07.jpg",
      "/images/units/salem-veranda-32/08.jpg",
      "/images/units/salem-veranda-32/09.jpg",
      "/images/units/salem-veranda-32/10.jpg",
      "/images/units/salem-veranda-32/11.jpg",
      "/images/units/salem-veranda-32/12.jpg",
      "/images/units/salem-veranda-32/13.jpg",
      "/images/units/salem-veranda-32/14.jpg",
      "/images/units/salem-veranda-32/15.jpg"
    ],
    "cover": "/images/units/salem-veranda-32/cover.jpg",
    "floorplan": "/images/floorplans/salem-veranda-32-floorplan.jpg",
    "description": "A brand-new trailer built around its rear patio: a railed deck with an outdoor kitchen and patio doors that open straight into the living room. Inside there is a kitchen island with seating, a fireplace and a private king bedroom up front. Made for a relaxed stay at a campground or event.",
    "sleeping": [
      "Private front bedroom with king bed",
      "Sofa in the main living area"
    ],
    "inside": [
      "Upgraded smart LED flat-panel TV for streaming, included with every rental",
      "Kitchen island with seating, full-size refrigerator and pantry",
      "Electric fireplace",
      "Full bathroom with shower",
      "Tankless on-demand water heater"
    ],
    "outside": [
      "Rear veranda patio deck with railings",
      "Outdoor kitchen on the patio",
      "Patio doors plus a second entry door",
      "20 ft power awning with LED lighting",
      "Heated and enclosed underbelly"
    ],
    "specs": [],
    "towing": "Towing it yourself? Your vehicle needs a rating of at least 11,220 lbs, a brake controller, and a weight-distribution hitch. Not sure? Ask Katya before you book, or request delivery and setup.",
    "rvshare": null,
    "fullSpecs": [
      {
        "title": "Vehicle",
        "rows": [
          [
            "Year",
            "2026"
          ],
          [
            "Make and Model",
            "Forest River Salem Veranda 32"
          ],
          [
            "Type",
            "Travel Trailer with rear patio"
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
            "37 ft 10 in"
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
            "8,993 lbs"
          ],
          [
            "GVWR",
            "11,220 lbs"
          ],
          [
            "Hitch Weight",
            "1,020 lbs"
          ],
          [
            "Payload Capacity",
            "2,227 lbs"
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
            "60 gal"
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
            "King bed in private front bedroom"
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
  { id: 'water', icon: 'drop', name: 'Trip Start - Fill Fresh Water', desc: 'Start your trip with a full fresh water tank.', amount: 75, per: 'trip' },
  { id: 'dump', icon: 'waste', name: 'Trip End - Empty Waste', desc: "We'll empty the waste tanks after your trip.", amount: 199, per: 'trip' },
  { id: 'early', icon: 'clock', name: 'Trip Start - Early Request', desc: 'Get an early pickup (before standard time).', amount: 99, per: 'trip' },
  { id: 'late', icon: 'clockBack', name: 'Trip End - Late Request', desc: 'Return after the standard time.', amount: 75, per: 'trip' },
  { id: 'bike', icon: 'bike', name: 'Bike Rental - Regular', desc: 'Standard bike rental.', amount: 25, per: 'unitNight', unit: 'bike', max: 10, unitLabel: 'day' },
  { id: 'ebike', icon: 'ebike', name: 'Bike Rental - Electric', desc: 'Electric bike rental for an easier ride.', amount: 75, per: 'unitNight', unit: 'bike', max: 10, unitLabel: 'day' },
  { id: 'bedding', icon: 'bed', name: 'Bedding Kit', desc: 'Includes linens, pillows, and towels.', amount: 50, per: 'unit', unit: 'kit', max: 6 },
  { id: 'campkit', icon: 'tent', name: 'Camping Kit', desc: 'Essential camping gear for a comfortable stay.', amount: 150, per: 'trip' },
  { id: 'starlink', icon: 'wifi', name: 'Unlimited Wifi - Starlink', desc: 'High-speed, unlimited internet for your trip.', amount: 199, per: 'trip' },
  { id: 'gen', icon: 'battery', name: 'Unlimited Generator', desc: 'On-demand power for your entire trip.', amount: 199, per: 'trip' },
  { id: 'dog', icon: 'paw', name: 'Dog Fee', desc: 'Per dog (service animals free).', amount: 100, per: 'unit', unit: 'dog', max: 2 },
  { id: 'delivery', icon: 'trailer', name: 'Trailer Delivery', desc: 'Local delivery, setup, and pickup (trailers).', amount: 399, per: 'trip', towableOnly: true },
  { id: 'cart', icon: 'cart', name: 'Golf Cart Rental', desc: 'Golf cart rental via 3rd party partner.', amount: 199, per: 'night' },
  { id: 'cartdel', icon: 'cartMove', name: 'Golf Cart Delivery', desc: 'Delivery and pickup for your rented golf cart.', amount: 199, per: 'trip' }
]

const AddOnIcon = ({ name }) => {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const wheel = (cx, cy, r = 3.2) => <circle cx={cx} cy={cy} r={r} {...p} />
  const icons = {
    drop: <path {...p} d="M12 3.5c3 4 5.5 7 5.5 10a5.5 5.5 0 01-11 0c0-3 2.5-6 5.5-10z" />,
    waste: <g {...p}><path d="M2.5 15V8h11v7M13.5 10h4l3 3v2h-2" /><path d="M2.5 15h1.5M10 15h3.5M8 15h0" />{wheel(6.5, 16, 2)}{wheel(16.5, 16, 2)}<path d="M5 11h5" /></g>,
    clock: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
    clockBack: <g {...p}><path d="M4.5 12a7.5 7.5 0 102.2-5.3" /><path d="M4 4v4h4" /><path d="M12 8v4l3 2" /></g>,
    bike: <g {...p}>{wheel(5.5, 15.5, 3.5)}{wheel(18.5, 15.5, 3.5)}<path d="M5.5 15.5l4-7h5l4 7M9.5 8.5L12 15.5h-1M13 6h3" /></g>,
    ebike: <g {...p}>{wheel(5.5, 16, 3.5)}{wheel(17.5, 16, 3.5)}<path d="M5.5 16l4-7h5l3 7M9.5 9L12 16" /><path d="M19.5 2.5L17.5 6h3l-2 3.5" /></g>,
    bed: <g {...p}><path d="M3 18V8M3 14h18v4M21 14v-3a2 2 0 00-2-2H11v5" /><rect x="5" y="9.5" width="4.5" height="3" rx="1" /></g>,
    tent: <g {...p}><path d="M12 4L3 19h18L12 4zM12 4v15M8.5 19L12 12l3.5 7M2 19h20" /></g>,
    wifi: <g {...p}><path d="M3 9.5a13 13 0 0118 0M6 12.8a8.5 8.5 0 0112 0M9 16a4 4 0 016 0" /><circle cx="12" cy="19" r="0.8" fill="currentColor" /></g>,
    battery: <g {...p}><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 10.5v3M11.5 9l-2.5 3.5h3.5L10 15" /></g>,
    paw: <g fill="currentColor"><ellipse cx="7" cy="9.5" rx="1.8" ry="2.3" /><ellipse cx="10.5" cy="6.5" rx="1.8" ry="2.3" /><ellipse cx="14.5" cy="6.5" rx="1.8" ry="2.3" /><ellipse cx="18" cy="9.5" rx="1.8" ry="2.3" /><path d="M12.5 11.5c-3 0-5.5 3.5-5.5 5.7 0 1.6 1.3 2.3 2.8 2 1-.2 1.8-.6 2.7-.6s1.7.4 2.7.6c1.5.3 2.8-.4 2.8-2 0-2.2-2.5-5.7-5.5-5.7z" /></g>,
    trailer: <g {...p}><rect x="2.5" y="6" width="14" height="9" rx="1.5" /><path d="M16.5 13h5M5.5 9h4" />{wheel(9, 16.5, 2)}</g>,
    cart: <g {...p}><path d="M5 6h12M7 6v6M17 6l1 6M4 12h16v3H4z" />{wheel(7.5, 17, 2)}{wheel(16.5, 17, 2)}</g>,
    cartMove: <g {...p}><path d="M9 6h11M11 6v6M20 6l1 6M8 12h14v3H8z" />{wheel(11.5, 17, 2)}{wheel(19, 17, 2)}<path d="M1.5 9h4M2.5 12h3.5M1.5 15h4" /></g>
  }
  return <svg width="36" height="36" viewBox="0 0 24 24" style={{ color: PURPLE }}>{icons[name]}</svg>
}

const AddOnsSection = () => (
  <section id="addons" style={{ background: '#FAF8FB', paddingBottom: '48px', scrollMarginTop: '90px' }}>
    <div className="addons-banner">
      <svg className="addons-mtn" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120V70l120-35 110 30 140-55 150 50 120-30 160 45 130-40 150 35 140-45 120 30 100-15V120z" fill="rgba(255,255,255,0.08)" />
        <path d="M0 120V95l160-30 140 25 170-35 160 30 150-20 170 28 160-30 170 25 160-15V120z" fill="rgba(255,255,255,0.06)" />
      </svg>
      <p className="addons-eyebrow"><span />RV RENTAL<span /></p>
      <h2 className="addons-title">Optional Add-Ons</h2>
      <p className="addons-sub">Enhance your trip with convenient upgrades, gear, and services.</p>
    </div>
    <div className="addons-grid">
      {addOns.map(a => (
        <div key={a.id} className="addon-card">
          <div className="addon-icon"><AddOnIcon name={a.icon} /></div>
          <div className="addon-text">
            <h3>{a.name.replace(' - ', ' – ')}</h3>
            <p>{a.desc}</p>
          </div>
          <div className="addon-pill">{addOnLabel(a)}</div>
        </div>
      ))}
    </div>
    <div className="addons-note">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="1.8"><circle cx="12" cy="12" r="9.5" /><path d="M12 11v6M12 7.5v.5" strokeLinecap="round" /></svg>
      <span className="addons-note-bar" />
      <p>Every rental includes an upgraded smart LED TV for streaming. Trip preparation and Interior Essentials are included in every BASE STANDARD package. Add-on prices shown before 10% system processing and 8.75% taxes.</p>
    </div>
  </section>
)

const addOnLabel = a => ({
  trip: `$${a.amount}`,
  night: `$${a.amount} / night`,
  unit: a.unit === 'kit' ? `$${a.amount}` : `$${a.amount}`,
  unitNight: `$${a.amount} / ${a.unitLabel || 'night'}`
}[a.per])

const addOnCost = (a, qty, nights) => ({
  trip: a.amount, night: a.amount * nights, unit: a.amount * qty, unitNight: a.amount * qty * nights
}[a.per])

// Fees on every trip, folded into the all-in price
const TRIP_PREP = 199
const ESSENTIALS = 99
const PER_TRIP = TRIP_PREP + ESSENTIALS
const TAX = 0.0875
const PROCESSING = 0.10
const FEES = 1 + TAX + PROCESSING
const packageTotal = (rate, n) => Math.round((rate * n + PER_TRIP) * FEES)
const allInNight = (rate, n) => Math.round(packageTotal(rate, n) / n)
const money = v => '$' + Math.round(v).toLocaleString()

const PACKAGE_INCLUDES = [
  'Nightly rental rate',
  'Smart TV upgrade with streaming (Wi-Fi or hotspot required)',
  'Essential supplies with every rental (listed below)',
  'Tutorial orientation walkthrough',
  'Trip start and trip end inspections',
  'Commercial coverage insurance / insurance waiver (for deliveries)',
  'Interior damage protection liability waiver (for common occurrences)',
  'System processing, 10% (waived when you pay direct with Zelle)',
  'Taxes, 8.75% (county, city, state, federal and sales tax)'
]

const ESSENTIALS_OUTDOOR = ['Power cable', 'Fresh water hose', 'Septic hose']
const ESSENTIALS_INDOOR = [
  'Septic-safe toilet paper', 'Hand soap', 'Dish soap', 'Sponge', 'Paper towel roll', 'Surface wipes',
  'A pot and a pan', '4 camping sets of plates, bowls, cups and silverware', 'Small trash can with garbage bag', 'Broom and mop'
]

const PackageIncludes = ({ compact }) => {
  const h = { fontWeight: 800, color: DARK, margin: '14px 0 8px', fontSize: compact ? '0.9rem' : '1.05rem' }
  const note = { fontSize: compact ? '0.8rem' : '0.88rem', color: '#555', marginTop: '6px', lineHeight: 1.5 }
  return (
    <div className={compact ? '' : 'pkg-box'}>
      <p style={{ ...h, marginTop: 0 }}>Every BASE STANDARD package includes:</p>
      <ul className="pkg-list">{PACKAGE_INCLUDES.map(i => <li key={i}>{i}</li>)}</ul>
      <p style={h}>Essential supplies, outdoor:</p>
      <ul className="pkg-list pkg-cols">{ESSENTIALS_OUTDOOR.map(i => <li key={i}>{i}</li>)}</ul>
      <p style={note}>Blocks and chocks can be added on request the day of pickup.</p>
      <p style={h}>Essential supplies, indoor:</p>
      <ul className="pkg-list pkg-cols">{ESSENTIALS_INDOOR.map(i => <li key={i}>{i}</li>)}</ul>
      <p style={note}>Need more camping sets? Let us know the day of pickup. Extras are no extra charge.</p>
      <p style={h}>Every trip also comes with:</p>
      <ul className="pkg-list">
        <li>Interior professionally cleaned and exterior washed between each rental</li>
        <li>Full propane and full fuel at the start of each trip. Please return it the same way.</li>
      </ul>
    </div>
  )
}

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

const Header = ({ go, overHero }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
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
      { label: 'Pricing and Savings', onClick: close(() => go.section('pricing')) },
      { label: "What's Included", onClick: close(() => go.section('included')) },
      { label: 'Cancellation Policy', onClick: close(() => go.section('cancellation')) },
      { label: 'Add to Your Trip', onClick: close(() => go.section('addons')) },
      { label: 'A Note From Katya', onClick: close(() => go.section('note')) }
    ] },
    { label: 'Contact', onClick: close(() => go.section('contact')) }
  ]
  return (
    <header className={`site-header${overHero && !scrolled && !mobileOpen ? ' over' : ''}`}>
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
          {rv.price ? (
            <span style={{ textAlign: 'right' }}>
              <span style={{ color: PURPLE, fontWeight: 800, fontSize: '1.3rem' }}>${rv.price}</span>
              <span style={{ color: PURPLE, fontSize: '0.85rem' }}>/night</span>
              {nights > 0 && <span style={{ display: 'block', color: '#555', fontSize: '0.8rem' }}>{nights} nights from ${(rv.price * nights).toLocaleString()}</span>}
            </span>
          ) : <span style={{ color: PURPLE, fontWeight: 800, fontSize: '1rem' }}>Call for rate</span>}
        </div>
      </div>
    </div>
  )
}

const PRICE_GROUPS = [
  { label: 'Travel Trailers', match: t => t === 'Travel Trailer' },
  { label: 'Toy Hauler and Fifth Wheels', match: t => t === 'Toy Hauler' || t === 'Fifth Wheel' },
  { label: 'Class C', match: t => t === 'Class C' },
  { label: 'Class B', match: t => t === 'Class B' },
  { label: 'Class A', match: t => t === 'Class A' }
]

const SavingsTable = () => {
  const cols = PRICE_GROUPS.map(g => {
    const rates = rvs.filter(r => g.match(r.type) && r.price).map(r => r.price)
    return { ...g, min: Math.min(...rates), max: Math.max(...rates), has: rates.length > 0 }
  }).filter(c => c.has)
  const rows = [1, 2, 3, 4, 5, 6, 7]
  const span = (lo, hi) => lo === hi ? money(lo) : `${money(lo)} to ${money(hi)}`
  const saveNight = n => PER_TRIP * FEES * (1 - 1 / n)
  return (
    <section id="pricing" style={{ background: '#F7F3F9', padding: '48px 20px', scrollMarginTop: '90px' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <p className="eyebrow-dark"><span />CLEAR AND TRANSPARENT PRICING<span /></p>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.2rem)', fontWeight: 800, color: DARK, textAlign: 'center' }}>SAVE by Adding Nights to Your Trip!</h2>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.18em', color: PURPLE, marginTop: '6px' }}>BROUGHT TO YOU BY ALWAYS HONEST RV RENTALS</p>
        <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center', margin: '8px auto 24px', maxWidth: '760px', lineHeight: 1.6 }}>
          TOTAL price for the BASE STANDARD package, system processing and taxes included. The per-trip costs are spread over every night you stay, so the longer the trip, the lower your nightly cost.
        </p>
        <div className="save-wrap">
          <table className="save-table">
            <thead>
              <tr>
                <th>Trip Length</th>
                {cols.map(c => <th key={c.label}>{c.label}<span className="th-sub">TOTAL</span></th>)}
                <th>You Save<span className="th-sub">per night</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(n => (
                <tr key={n}>
                  <td className="len">{n === 1 ? '1 Night' : n === 7 ? '7 Nights (1 Week)' : `${n} Nights`}</td>
                  {cols.map(c => (
                    <td key={c.label}>
                      <span className="tot">{span(packageTotal(c.min, n), packageTotal(c.max, n))}</span>
                      {n > 1 && <span className="per">{span(allInNight(c.min, n), allInNight(c.max, n))} per night</span>}
                    </td>
                  ))}
                  <td className="save">{n === 1 ? '-' : money(saveNight(n))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fine-print">
          <div className="fp-item fp-wide">
            <strong>Excludes holidays and special events.</strong>
            <span>Please <a href="#" onClick={e => { e.preventDefault(); document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' }) }}>start a quote</a> or <a href={`tel:${PHONE}`}>contact us</a> for special event rates.</span>
          </div>
          <div className="fp-item">
            <strong>Everything in one TOTAL</strong>
            <span>Includes 10% system processing and 8.75% taxes.</span>
          </div>
          <div className="fp-item">
            <strong>Pay direct with Zelle</strong>
            <span>The 10% system processing is waived.</span>
          </div>
          <div className="fp-item">
            <strong>How "You Save" works</strong>
            <span>Compared to the nightly cost of a 1-night trip.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const WI = ({ n }) => {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const I = {
    rv: <g {...p}><path d="M2.5 16V7.5A1.5 1.5 0 014 6h12.5l3 4.5H21.5V16H2.5z" /><path d="M5 9h3M10 9h3v4h-3z" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" /></g>,
    mtn: <g {...p}><path d="M2 19l6.5-11 4 6.5 2.5-3.5 7 8z" /><path d="M5 19v-2.5M4 17l1-2.5 1 2.5M19.5 19v-2.5M18.5 17l1-2.5 1 2.5" /></g>,
    plug: <g {...p}><path d="M8.5 3v5M15.5 3v5M6.5 8h11v3a5.5 5.5 0 01-11 0V8zM12 16.5V21" /></g>,
    hose: <g {...p}><ellipse cx="12" cy="9" rx="8.5" ry="3.5" /><path d="M3.5 9v6c0 1.9 3.8 3.5 8.5 3.5s8.5-1.6 8.5-3.5V9M3.5 12c0 1.9 3.8 3.5 8.5 3.5s8.5-1.6 8.5-3.5" /><ellipse cx="12" cy="9" rx="4" ry="1.5" /></g>,
    tap: <g {...p}><path d="M4 9h7a3 3 0 013 3v2M4 6.5v5M11 9V6h7a2 2 0 012 2v1h-6" /><path d="M14 17.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1 2-3 2-3s2 2 2 3z" /></g>,
    house: <g {...p}><path d="M3 11l9-7 9 7M5.5 9.5V20h13V9.5M10 20v-5.5h4V20" /></g>,
    tp: <g {...p}><ellipse cx="8" cy="9.5" rx="4.5" ry="5.5" /><ellipse cx="8" cy="9.5" rx="1.5" ry="1.8" /><path d="M8 4h9a4.5 5.5 0 010 11v5H8" /></g>,
    soap: <g {...p}><path d="M9 3h4M11 3v3M8 6h6v3H8zM7 9h8a1 1 0 011 1v9.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 016 19.5V10a1 1 0 011-1z" /></g>,
    dish: <g {...p}><path d="M10 2.5h4M10.5 2.5V6h3V2.5M9 6h6l1.5 3v10.5A1.5 1.5 0 0115 21H9a1.5 1.5 0 01-1.5-1.5V9z" /><path d="M12 12l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3z" /></g>,
    sponge: <g {...p}><path d="M4 10c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3v4c0 2-1.5 3-3.5 3h-9C5.5 17 4 16 4 14z" /><circle cx="8" cy="11" r=".8" /><circle cx="12" cy="10" r=".8" /><circle cx="15.5" cy="12" r=".8" /><circle cx="10" cy="14" r=".8" /></g>,
    wipes: <g {...p}><rect x="4" y="8" width="16" height="11" rx="2" /><path d="M9 8c0-2 1.3-4 3-4s3 2 3 4M8 13h8" /></g>,
    towel: <g {...p}><path d="M6 4.5h7a3 3 0 013 3V19.5H9a3 3 0 01-3-3z" /><ellipse cx="6" cy="7.5" rx="2.5" ry="3" /><path d="M16 7.5h2.5V18" /></g>,
    plates: <g {...p}><ellipse cx="12" cy="8" rx="8.5" ry="3" /><path d="M3.5 8v2.5c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V8M3.5 13v2.5c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V13" /></g>,
    pot: <g {...p}><path d="M5 10h14v7a2 2 0 01-2 2H7a2 2 0 01-2-2zM3 10h18M9.5 7h5M12 7V5.5" /></g>,
    trash: <g {...p}><path d="M4.5 6.5h15M9.5 6.5V4.5h5v2M6.5 6.5l1 13h9l1-13M10 10v6M14 10v6" /></g>,
    broom: <g {...p}><path d="M19.5 3.5l-7 9M9.5 11l4.5 3.5-4 6.5c-2-1-5-3.5-6.5-5.5z" /><path d="M7.5 17.5L10 14M5.5 15.5l2.5-3" /></g>,
    spray: <g {...p}><path d="M8 7h6v3.5l1.5 2V20a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7.5L8 10.5zM8 7V4.5h4l2 1.5M14 5h2" /><path d="M18 3v2M20 5h-2M19.5 8.5l1 1M17.5 9.5l1 1" /></g>,
    check: <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
  }
  return <svg viewBox="0 0 24 24" width="100%" height="100%">{I[n]}</svg>
}

const INCLUDE_ROWS = [
  ['Nightly rental rate'],
  ['Smart TV upgrade with streaming', 'Wi-Fi or hotspot required'],
  ['Essential supplies with every rental'],
  ['Tutorial orientation walkthrough'],
  ['Trip start and trip end inspections'],
  ['Commercial coverage insurance / insurance waiver', 'for deliveries'],
  ['Interior damage protection liability waiver', 'for common occurrences'],
  ['System processing fee, 10%', 'waived when you pay direct with Zelle'],
  ['Taxes, 8.75%', 'county, city, state, federal and sales tax']
]
const OUTDOOR = [['plug', 'Power cable'], ['hose', 'Fresh water hose'], ['tap', 'Septic hose']]
const INDOOR = [
  ['tp', 'Septic-safe toilet paper'], ['soap', 'Hand soap'], ['dish', 'Dish soap'], ['sponge', 'Sponge'], ['wipes', 'Surface wipes'],
  ['towel', 'Paper towel roll'], ['plates', 'Plates, bowls, cups and silverware'], ['pot', 'A pot and a pan'], ['trash', 'Small trash can with garbage bag'], ['broom', 'Broom and mop']
]

const WhatsIncluded = () => (
  <section id="included" style={{ background: '#FAF8FB', paddingBottom: '48px', scrollMarginTop: '90px' }}>
    <div className="addons-banner">
      <svg className="addons-mtn" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120V70l120-35 110 30 140-55 150 50 120-30 160 45 130-40 150 35 140-45 120 30 100-15V120z" fill="rgba(255,255,255,0.08)" />
        <path d="M0 120V95l160-30 140 25 170-35 160 30 150-20 170 28 160-30 170 25 160-15V120z" fill="rgba(255,255,255,0.06)" />
      </svg>
      <p className="addons-eyebrow"><span />ALWAYS HONEST RV RENTALS<span /></p>
      <h2 className="addons-title">What's Included</h2>
      <p className="addons-sub">Our standard package has the essentials included for you to have a great trip!</p>
    </div>
    <div className="wi-grid">
      <div className="wi-card">
        <div className="wi-head"><span className="wi-head-icon"><WI n="rv" /></span>Every Base Standard Package Includes</div>
        <ul className="wi-checks">
          {INCLUDE_ROWS.map(([t, sub]) => (
            <li key={t}><span className="wi-check"><WI n="check" /></span><span><strong>{t}</strong>{sub && <small>({sub})</small>}</span></li>
          ))}
        </ul>
      </div>
      <div className="wi-right">
        <div className="wi-card">
          <div className="wi-head"><span className="wi-head-icon"><WI n="mtn" /></span>Essential Supplies, Outdoor</div>
          <div className="wi-items wi-out">
            {OUTDOOR.map(([i, t]) => <div key={t} className="wi-item"><span className="wi-ico"><WI n={i} /></span>{t}</div>)}
          </div>
          <p className="wi-note">Blocks and chocks can be added on request the day of pickup.</p>
        </div>
        <div className="wi-card">
          <div className="wi-head"><span className="wi-head-icon"><WI n="house" /></span>Essential Supplies, Indoor</div>
          <div className="wi-items wi-in">
            {INDOOR.map(([i, t]) => <div key={t} className="wi-item"><span className="wi-ico"><WI n={i} /></span>{t}</div>)}
          </div>
          <p className="wi-note">4 camping sets included. Need more plates, cups, bowls or silverware? Just let us know the day of pickup.<br />Extras are at no additional charge.</p>
        </div>
      </div>
    </div>
    <div className="wi-bar">
      <span className="wi-bar-badge"><WI n="spray" /></span>
      <p className="wi-bar-title">Every Trip Also<br />Comes With:</p>
      <div className="wi-bar-item"><span className="wi-bar-check"><WI n="check" /></span>Interior professionally cleaned and exterior washed between each rental.</div>
      <div className="wi-bar-item"><span className="wi-bar-check"><WI n="check" /></span>Full propane and full fuel at the start of each trip. Please return with the same levels.</div>
    </div>
    <p style={{ textAlign: 'center', marginTop: '26px', fontSize: '1.1rem', color: DARK, fontWeight: 700, padding: '0 20px' }}>
      Want to enhance your experience? <a href="#" onClick={e => { e.preventDefault(); document.getElementById('addons')?.scrollIntoView({ behavior: 'smooth' }) }} style={{ color: ACCENT, textDecoration: 'underline' }}>Please select from our available add-on options.</a>
    </p>
  </section>
)

const CancellationPolicy = () => (
  <section id="cancellation" style={{ background: 'white', padding: '52px 20px', scrollMarginTop: '90px' }}>
    <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
      <p className="eyebrow-dark"><span />BOOK WITH CONFIDENCE<span /></p>
      <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.2rem)', fontWeight: 800, color: DARK, textAlign: 'center', marginBottom: '26px' }}>Cancellation Policy</h2>
      <div className="cx-grid">
        <div className="cx-card">
          <p className="cx-when">Same Day Cancellation</p>
          <p className="cx-what">FREE Full Refund</p>
          <p className="cx-tag">Courtesy</p>
          <p className="cx-desc">Cancel the same day you book and get every dollar back. Things happen, and we're here for you when you're ready.</p>
        </div>
        <div className="cx-card">
          <p className="cx-when">30 or More Days Before Your Trip</p>
          <p className="cx-what">Future Trip Credit</p>
          <p className="cx-tag">Less the 10% system processing</p>
          <p className="cx-desc">Your payment becomes a credit toward a future trip. The 10% processing is not returned, because the booking and payment systems charge us fees for taking and refunding payments.</p>
        </div>
        <div className="cx-card">
          <p className="cx-when">Within 30 Days of Your Trip</p>
          <p className="cx-what">Non-Refundable</p>
          <p className="cx-tag">The RV is held for you</p>
          <p className="cx-desc">Inside 30 days your dates are reserved and turned away from other renters, so we are not able to offer a refund or credit.</p>
        </div>
      </div>
      <div className="cx-human">
        <strong>We're human too.</strong>
        <span>Extenuating circumstances and emergencies are reviewed case by case. Reach out to Katya and we'll be as compassionate as we possibly can.</span>
      </div>
    </div>
  </section>
)

const TripBuilder = ({ rv, dates, onChange }) => {
  const fromDates = nightsBetween(dates.start, dates.end)
  const [nights, setNights] = useState(fromDates > 0 ? fromDates : 3)
  const [sel, setSel] = useState({})
  const options = addOns.filter(a => !(a.towableOnly && rv.motorized))
  const toggle = (a) => setSel(s => { const n = { ...s }; if (n[a.id]) delete n[a.id]; else n[a.id] = 1; return n })
  const setQty = (a, q) => setSel(s => ({ ...s, [a.id]: q }))
  const chosen = options.filter(a => sel[a.id])
  const addTotal = chosen.reduce((t, a) => t + addOnCost(a, sel[a.id], nights), 0)
  const items = rv.price * nights + PER_TRIP + addTotal
  const proc = items * PROCESSING
  const tax = items * TAX
  const total = Math.round(items + proc + tax)
  const subtotal = total
  useEffect(() => {
    onChange && onChange({ nights, chosen: chosen.map(a => `${a.name}${a.unit ? ' x' + sel[a.id] : ''}`), subtotal })
  }, [nights, JSON.stringify(sel)])
  const row = (label, val, strong) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', padding: '5px 0', fontSize: strong ? '1rem' : '0.9rem', fontWeight: strong ? 800 : 400, color: strong ? DARK : '#444' }}>
      <span>{label}</span><span>{val}</span>
    </div>
  )
  return (
    <div className="trip-builder">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '12px' }}>
        <span style={{ fontWeight: 700, color: DARK }}>Nights</span>
        <div className="stepper">
          <button onClick={() => setNights(n => Math.max(1, n - 1))} aria-label="Fewer nights">-</button>
          <span>{nights}</span>
          <button onClick={() => setNights(n => Math.min(30, n + 1))} aria-label="More nights">+</button>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: ACCENT, fontWeight: 700, marginBottom: '12px' }}>
        {money(allInNight(rv.price, nights))} per night for {nights} night{nights > 1 ? 's' : ''}, processing and taxes included{nights < 7 ? `. Add a night and it drops to ${money(allInNight(rv.price, nights + 1))}.` : '.'}
      </p>
      <details className="addon-picker">
        <summary>Want to enhance your experience? Select add-ons{chosen.length ? ` (${chosen.length})` : ''}</summary>
        {options.map(a => (
          <label key={a.id} className="addon-row">
            <input type="checkbox" checked={!!sel[a.id]} onChange={() => toggle(a)} />
            <span className="addon-name">{a.name}</span>
            {a.unit && sel[a.id] ? (
              <select value={sel[a.id]} onClick={e => e.preventDefault()} onChange={e => setQty(a, +e.target.value)}>
                {Array.from({ length: a.max }, (_, i) => i + 1).map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            ) : null}
            <span className="addon-price">{addOnLabel(a)}{a.per === 'unit' ? ` / ${a.unit}` : a.per === 'unitNight' ? ' per bike' : ''}</span>
          </label>
        ))}
      </details>
      <div style={{ borderTop: '1px solid #eee', marginTop: '12px', paddingTop: '10px' }}>
        {row(`BASE STANDARD package, ${nights} night${nights > 1 ? 's' : ''}`, money(rv.price * nights + PER_TRIP))}
        {chosen.map(a => row(`${a.name}${a.unit ? ` x ${sel[a.id]}` : ''}`, money(addOnCost(a, sel[a.id], nights))))}
        {row('System processing (10%)', money(proc))}
        {row('Taxes (8.75%)', money(tax))}
        {row('TOTAL', money(total), true)}
        {row('Pay direct with Zelle (processing waived)', money(items + tax))}
      </div>
      <details style={{ marginTop: '10px' }}>
        <summary style={{ cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700, color: PURPLE }}>What's included in the BASE STANDARD package</summary>
        <div style={{ marginTop: '8px' }}><PackageIncludes compact /></div>
      </details>
      <p style={{ fontSize: '0.78rem', color: '#777', marginTop: '8px' }}>Standard dates. Holiday and event dates are priced higher. Katya confirms the final price with you.</p>
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

      <SavingsTable />

      <WhatsIncluded />

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

      <AddOnsSection />

      <CancellationPolicy />

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
  const [trip, setTrip] = useState(null)

  if (!rv) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>RV Not Found</h1>
        <button onClick={() => onNavigate('')} style={{ background: PURPLE, color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Back to Fleet</button>
      </div>
    )
  }

  const subject = encodeURIComponent(`Rental request: ${rv.name}`)
  const body = encodeURIComponent(`Hi Katya,\n\nI'd like to check availability for the ${rv.name}.\n\nDates: ${dates.start && dates.end ? fmtDate(dates.start) + ' to ' + fmtDate(dates.end) : ''}\nNights: ${trip ? trip.nights : ''}\nAdd-ons: ${trip && trip.chosen.length ? trip.chosen.join(', ') : 'none'}\nEstimated TOTAL: ${trip && rv.price ? '$' + trip.subtotal.toLocaleString() : ''}\nNumber of guests:\nPickup or delivery:\n\nThanks!`)
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
            {rv.price ? <>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: PURPLE }}>${rv.price}</span>
              <span style={{ color: '#666', fontSize: '1rem' }}>/ night</span>
            </> : <span style={{ fontSize: '1.6rem', fontWeight: 700, color: PURPLE }}>Call for rate</span>}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>Standard nightly rate. Your TOTAL below is the BASE STANDARD package with system processing and taxes included.</p>
          {rv.price && <TripBuilder rv={rv} dates={dates} onChange={setTrip} />}

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

        .site-header { position: sticky; top: 0; z-index: 100; background: ${DARK}; box-shadow: 0 2px 14px rgba(0,0,0,0.18); transition: background 0.25s, box-shadow 0.25s; }
        .site-header.over { background: rgba(40,10,50,0.45); box-shadow: none; }
        .header-inner { max-width: 1240px; margin: 0 auto; padding: 10px 24px; min-height: 116px; display: flex; align-items: center; gap: 24px; }
        .logo-box { background: white; border-radius: 12px; padding: 4px 8px; cursor: pointer; flex-shrink: 0; box-shadow: 0 4px 14px rgba(0,0,0,0.2); }
        .logo-box img { height: 88px; display: block; }
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

        .hero { position: relative; color: white; margin-top: -116px; padding-top: 116px; background: ${DARK} url('/images/hero-scene.jpg') right bottom / cover no-repeat; }
        .hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(58,14,71,0.55) 0%, rgba(58,14,71,0.25) 40%, rgba(58,14,71,0) 60%); pointer-events: none; }
        .hero-inner { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: 36px 24px 56px; min-height: clamp(340px, calc(100vw / 3.6 - 116px), 720px); display: flex; flex-direction: column; justify-content: center; }
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
        .save-wrap { overflow-x: auto; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .save-table { width: 100%; border-collapse: collapse; min-width: 760px; font-size: 0.95rem; }
        .save-table th { background: ${PURPLE}; color: white; font-weight: 700; padding: 14px 12px; text-align: center; font-size: 0.9rem; }
        .save-table th:first-child { text-align: left; padding-left: 20px; }
        .save-table td { padding: 12px; text-align: center; border-bottom: 1px solid #eee; color: #333; font-weight: 600; white-space: nowrap; }
        .save-table tr:last-child td { border-bottom: none; }
        .save-table tr:nth-child(even) td { background: #FBF8FC; }
        .save-table td.len { text-align: left; padding-left: 20px; color: ${DARK}; font-weight: 800; }
        .save-table th:first-child { position: sticky; left: 0; z-index: 1; }
        .save-table td.len { position: sticky; left: 0; background: white; z-index: 1; }
        .save-table tr:nth-child(even) td.len { background: #FBF8FC; }
        .save-table td.save { color: #1E7B45; font-weight: 800; }
        .save-table .per { display: block; color: #777; font-weight: 400; font-size: 0.78rem; margin-top: 2px; }
        .save-table .tot { display: block; font-weight: 800; color: #222; font-size: 0.98rem; }
        .save-table .th-sub { display: block; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; opacity: 0.85; margin-top: 2px; }
        .pkg-box { background: white; border-radius: 16px; padding: 24px 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); max-width: 900px; margin: 0 auto; }
        .pkg-list { list-style: none; display: grid; gap: 6px; }
        .pkg-list li { position: relative; padding-left: 22px; font-size: 0.92rem; color: #333; line-height: 1.5; }
        .pkg-list li::before { content: ''; position: absolute; left: 2px; top: 6px; width: 10px; height: 6px; border-left: 2.5px solid ${ACCENT}; border-bottom: 2.5px solid ${ACCENT}; transform: rotate(-45deg); }
        .pkg-cols { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
        .trip-builder { border: 1px solid #eee; border-radius: 12px; padding: 16px; margin-bottom: 16px; background: #FCFAFD; }
        .stepper { display: flex; align-items: center; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; background: white; }
        .stepper button { width: 38px; height: 36px; border: none; background: white; font-size: 1.2rem; font-weight: 700; color: ${PURPLE}; cursor: pointer; }
        .stepper span { min-width: 36px; text-align: center; font-weight: 800; }
        .addon-picker summary { cursor: pointer; font-weight: 700; color: ${PURPLE}; padding: 10px 12px; background: white; border: 1px solid #ddd; border-radius: 10px; list-style: none; }
        .addon-picker summary::after { content: ' +'; }
        .addon-picker[open] summary::after { content: ' -'; }
        .addon-row { display: flex; align-items: center; gap: 8px; padding: 8px 4px; border-bottom: 1px solid #f0f0f0; font-size: 0.85rem; cursor: pointer; }
        .addon-row input { accent-color: ${PURPLE}; width: 16px; height: 16px; flex-shrink: 0; }
        .addon-name { flex: 1; color: #333; }
        .addon-price { color: ${PURPLE}; font-weight: 700; white-space: nowrap; font-size: 0.8rem; }
        .addon-row select { border: 1px solid #ddd; border-radius: 6px; padding: 2px 4px; font-size: 0.85rem; }
        .addons-banner { position: relative; overflow: hidden; text-align: center; color: white; padding: 46px 20px 64px;
          background: linear-gradient(135deg, #3A0E47 0%, #5B1E70 55%, #7A3A92 100%); border-radius: 0 0 50% 50% / 0 0 34px 34px; }
        .addons-mtn { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: 110px; }
        .addons-eyebrow { position: relative; display: flex; align-items: center; justify-content: center; gap: 18px; font-size: 1.05rem; font-weight: 700; letter-spacing: 0.35em; }
        .addons-eyebrow span { width: 80px; height: 2px; background: rgba(255,255,255,0.8); }
        .addons-title { position: relative; font-size: clamp(2.4rem, 5.5vw, 4rem); font-weight: 800; letter-spacing: -0.02em; margin: 6px 0 8px; }
        .addons-sub { position: relative; font-size: clamp(1rem, 1.8vw, 1.25rem); opacity: 0.95; }
        .addons-grid { max-width: 1240px; margin: 28px auto 0; padding: 0 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 18px; }
        .addon-card { display: flex; align-items: center; gap: 18px; background: white; border-radius: 14px; padding: 14px 18px 14px 14px; box-shadow: 0 3px 14px rgba(58,14,71,0.08); border: 1px solid #EFEAF2; }
        .addon-icon { flex-shrink: 0; width: 74px; height: 62px; border-radius: 12px; background: #F1EAF4; display: flex; align-items: center; justify-content: center; }
        .addon-text { flex: 1; min-width: 0; padding-right: 14px; border-right: 1px solid #E3DCE7; }
        .addon-text h3 { font-size: 1.15rem; font-weight: 800; color: ${DARK}; line-height: 1.25; }
        .addon-text p { font-size: 0.92rem; color: #333; margin-top: 3px; line-height: 1.4; }
        .addon-pill { flex-shrink: 0; min-width: 100px; text-align: center; background: ${PURPLE}; color: white; font-weight: 800; font-size: 1.2rem; padding: 10px 16px; border-radius: 10px; white-space: nowrap; box-shadow: 0 3px 8px rgba(74,18,89,0.25); }
        .addons-note { max-width: 1192px; margin: 26px auto 0; display: flex; align-items: center; gap: 18px; background: #EDE3F1; border-radius: 12px; padding: 16px 28px; }
        .addons-note-bar { width: 1px; align-self: stretch; background: rgba(74,18,89,0.35); }
        .addons-note p { font-size: 0.98rem; color: ${DARK}; line-height: 1.5; }
        @media (max-width: 900px) { .addons-grid { grid-template-columns: 1fr; } .addons-note { margin: 22px 24px 0; } }
        @media (max-width: 480px) {
          .addon-card { gap: 12px; padding: 12px; }
          .addon-icon { width: 54px; height: 50px; }
          .addon-text h3 { font-size: 1rem; } .addon-text p { font-size: 0.85rem; }
          .addon-pill { min-width: 0; font-size: 1rem; padding: 8px 10px; }
          .addons-eyebrow span { width: 40px; }
        }
        .eyebrow-dark { display: flex; align-items: center; justify-content: center; gap: 16px; color: ${PURPLE}; font-weight: 800; letter-spacing: 0.28em; font-size: 0.85rem; margin-bottom: 10px; text-align: center; }
        .eyebrow-dark span { width: 56px; height: 2px; background: ${ACCENT}; flex-shrink: 0; }
        .fine-print { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 18px 0 0; }
        .fp-item { background: white; border-radius: 12px; padding: 14px 18px; box-shadow: 0 2px 10px rgba(58,14,71,0.06); display: flex; flex-direction: column; gap: 4px; }
        .fp-item strong { color: ${DARK}; font-size: 0.95rem; }
        .fp-item span { color: #555; font-size: 0.88rem; line-height: 1.5; }
        .fp-item a { color: ${ACCENT}; font-weight: 700; text-decoration: underline; }
        .fp-wide { grid-column: 1 / -1; flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 6px 10px; justify-content: center; background: #EDE3F1; }
        .wi-grid { max-width: 1240px; margin: 28px auto 0; padding: 0 24px; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 20px; }
        .wi-right { display: flex; flex-direction: column; gap: 20px; }
        .wi-card { background: white; border-radius: 16px; padding: 12px 18px 18px; box-shadow: 0 3px 14px rgba(58,14,71,0.08); border: 1px solid #EFEAF2; }
        .wi-head { display: flex; align-items: center; gap: 14px; background: #F1EAF4; border-radius: 10px; padding: 10px 16px; font-size: 1.25rem; font-weight: 800; color: ${DARK}; }
        .wi-head-icon { width: 40px; height: 40px; color: ${PURPLE}; flex-shrink: 0; }
        .wi-checks { list-style: none; margin-top: 14px; display: grid; gap: 12px; }
        .wi-checks li { display: flex; gap: 12px; align-items: flex-start; }
        .wi-check { width: 22px; height: 22px; color: ${PURPLE}; flex-shrink: 0; margin-top: 2px; }
        .wi-checks strong { display: block; font-size: 1.02rem; color: #222; font-weight: 600; line-height: 1.35; }
        .wi-checks small { display: block; font-size: 0.88rem; color: #555; margin-top: 1px; }
        .wi-items { display: grid; margin-top: 14px; }
        .wi-out { grid-template-columns: repeat(3, 1fr); }
        .wi-in { grid-template-columns: repeat(5, 1fr); row-gap: 6px; }
        .wi-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; font-size: 0.95rem; font-weight: 600; color: #222; line-height: 1.3; border-right: 1px solid #EAE3EE; }
        .wi-out .wi-item:last-child, .wi-in .wi-item:nth-child(5n) { border-right: none; }
        .wi-in .wi-item { flex-direction: column; text-align: center; gap: 6px; font-size: 0.88rem; }
        .wi-ico { width: 38px; height: 38px; color: ${PURPLE}; flex-shrink: 0; }
        .wi-note { margin-top: 12px; background: #F1EAF4; border-radius: 10px; padding: 10px 14px; text-align: center; font-style: italic; color: ${DARK}; font-size: 0.92rem; line-height: 1.5; }
        .wi-bar { max-width: 1192px; margin: 26px auto 0; display: flex; align-items: center; gap: 22px; background: linear-gradient(90deg, #4A1259, #6E2A86); color: white; border-radius: 16px; padding: 20px 30px; }
        .wi-bar-badge { width: 70px; height: 70px; border-radius: 50%; background: white; color: ${PURPLE}; padding: 15px; flex-shrink: 0; }
        .wi-bar-title { font-size: 1.5rem; font-weight: 800; line-height: 1.2; padding: 0 22px; border-left: 1px solid rgba(255,255,255,0.4); border-right: 1px solid rgba(255,255,255,0.4); }
        .wi-bar-item { flex: 1; display: flex; align-items: center; gap: 14px; font-size: 1.05rem; line-height: 1.45; }
        .wi-bar-item + .wi-bar-item { border-left: 1px solid rgba(255,255,255,0.4); padding-left: 22px; }
        .wi-bar-check { width: 30px; height: 30px; flex-shrink: 0; }
        .cx-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cx-card { background: #FAF8FB; border: 1px solid #EFEAF2; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 3px 14px rgba(58,14,71,0.06); }
        .cx-when { font-size: 0.85rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #555; }
        .cx-what { font-size: 1.5rem; font-weight: 800; color: ${DARK}; margin-top: 8px; }
        .cx-tag { display: inline-block; margin-top: 8px; background: ${PURPLE}; color: white; font-weight: 700; font-size: 0.82rem; padding: 4px 12px; border-radius: 999px; }
        .cx-desc { margin-top: 12px; font-size: 0.92rem; color: #444; line-height: 1.6; }
        .cx-human { margin-top: 18px; background: #EDE3F1; border-radius: 12px; padding: 16px 22px; text-align: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 10px; }
        .cx-human strong { color: ${DARK}; }
        .cx-human span { color: #444; line-height: 1.5; }
        @media (max-width: 1000px) {
          .wi-grid { grid-template-columns: 1fr; }
          .wi-in { grid-template-columns: repeat(3, 1fr); }
          .wi-in .wi-item:nth-child(5n) { border-right: 1px solid #EAE3EE; }
          .wi-in .wi-item:nth-child(3n) { border-right: none; }
          .wi-bar { flex-wrap: wrap; margin: 22px 24px 0; }
          .wi-bar-title { border: none; padding: 0; }
          .wi-bar-item { flex-basis: 100%; }
          .wi-bar-item + .wi-bar-item { border-left: none; padding-left: 0; }
          .cx-grid, .fine-print { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .wi-in { grid-template-columns: repeat(2, 1fr); }
          .wi-out { grid-template-columns: repeat(3, 1fr); }
          .wi-out .wi-item { font-size: 0.82rem; padding: 8px 4px; }
          .addons-eyebrow { letter-spacing: 0.2em; font-size: 0.85rem; gap: 10px; }
          .addons-eyebrow span { width: 22px; }
          .eyebrow-dark { letter-spacing: 0.16em; font-size: 0.75rem; gap: 10px; }
          .eyebrow-dark span { width: 22px; }
          .wi-out .wi-item, .wi-in .wi-item { border-right: none !important; }
          .wi-out .wi-item { flex-direction: column; text-align: center; }
          .wi-head { font-size: 1.05rem; }
        }
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
          .hero { background-position: 78% top; background-size: auto 340px; margin-top: -76px; padding-top: 76px; }
          .hero::before { background: linear-gradient(180deg, rgba(58,14,71,0) 0%, rgba(58,14,71,0.2) 200px, ${DARK} 330px); }
          .header-inner { min-height: 76px; }
          .hero-inner { padding: 190px 20px 40px; min-height: 0; }
          .viewer { height: 300px; }
          .search-card { flex-direction: column; }
          .search-btn { padding: 14px; }
        }
        @media (max-width: 480px) {
          .phone-pill span, .phone-pill { font-size: 0.85rem; }
        }
      `}</style>
      <Header go={go} overHero={!route.startsWith('rv/')} />
      {content}
      <Footer />
    </>
  )
}

export default App
