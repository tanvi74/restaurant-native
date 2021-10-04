import axios from 'axios';
const apiKey = "Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx-Us";

// to create instance of axios 
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${apiKey}`,
        // "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/x-www-form-urlencoded"
    }
});

export const data = {
    "businesses": [
        {
            "id": "QNzqZtNb_I1mcHAviE5zeQ",
            "alias": "bibos-ny-pizza-san-jose",
            "name": "Bibo's Ny Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VDG3E_MZW3PVEl1TCxWVPQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bibos-ny-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 1156,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.306477955952,
                "longitude": -121.89160958914
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "1431 Bird Ave",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95125",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1431 Bird Ave",
                    "San Jose, CA 95125"
                ]
            },
            "phone": "+14082179084",
            "display_phone": "(408) 217-9084",
            "distance": 1253.647403510163
        },
        {
            "id": "7NOpkoAUAGqMKEZgSu1QmA",
            "alias": "a-slice-of-new-york-san-jose",
            "name": "A Slice of New York",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/WiVreu9mMEbsLaST1jqPSw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/a-slice-of-new-york-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 2949,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.3235243214913,
                "longitude": -121.959063137967
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "3443 Stevens Creek Blvd",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95117",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "3443 Stevens Creek Blvd",
                    "San Jose, CA 95117"
                ]
            },
            "phone": "+14082475423",
            "display_phone": "(408) 247-5423",
            "distance": 6589.770466335467
        },
        {
            "id": "7HBtj81aBo2DEZFTPaaeqg",
            "alias": "slice-of-homage-pizza-san-jose",
            "name": "Slice of Homage Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Pin-QLGXFrVLM88HEu4Pzw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/slice-of-homage-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 107,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "chicken_wings",
                    "title": "Chicken Wings"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.33401377933768,
                "longitude": -121.89231238444917
            },
            "transactions": [],
            "location": {
                "address1": "152 Post St",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "152 Post St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14082867678",
            "display_phone": "(408) 286-7678",
            "distance": 2052.0002489309136
        },
        {
            "id": "OjLI_vq65QCFkJ0ysmkzyA",
            "alias": "got2go-pizza-san-jose-2",
            "name": "Got2go Pizza",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/hB5K-ttY97EK0X9PoWTP7w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/got2go-pizza-san-jose-2?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 115,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 37.3037077032,
                "longitude": -121.913931565
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "1111 Meridian Ave",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95125",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1111 Meridian Ave",
                    "San Jose, CA 95125"
                ]
            },
            "phone": "+14084787500",
            "display_phone": "(408) 478-7500",
            "distance": 2921.034906472045
        },
        {
            "id": "vZ41QYMBQvtHgpAfw1IToQ",
            "alias": "pizza-antica-san-jose",
            "name": "Pizza Antica",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/U0j5uz84SrTZTFGSZo7zRQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/pizza-antica-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 2899,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.3217489749968,
                "longitude": -121.948049744656
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "334 Santana Row",
                "address2": "Ste 1065",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95128",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "334 Santana Row",
                    "Ste 1065",
                    "San Jose, CA 95128"
                ]
            },
            "phone": "+14085578373",
            "display_phone": "(408) 557-8373",
            "distance": 5599.949103104161
        },
        {
            "id": "5hoAAdJ2XUVwFnmX49nyqw",
            "alias": "colosseum-new-york-pizza-milpitas-5",
            "name": "Colosseum New York Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/lya4BuaaKfI6zN1LrmCA8g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/colosseum-new-york-pizza-milpitas-5?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 1219,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "cheesesteaks",
                    "title": "Cheesesteaks"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.4079450776432,
                "longitude": -121.888906549074
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "761 E Capitol Ave",
                "address2": "",
                "address3": "",
                "city": "Milpitas",
                "zip_code": "95035",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "761 E Capitol Ave",
                    "Milpitas, CA 95035"
                ]
            },
            "phone": "+14082628633",
            "display_phone": "(408) 262-8633",
            "distance": 10175.961260518636
        },
        {
            "id": "QKUIvZHMCchqBMN1tdo7bQ",
            "alias": "bossmans-pizza-san-jose",
            "name": "Bossman's Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/aBvPup4JwQSYKIhejsufpg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bossmans-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 408,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.27396,
                "longitude": -121.85032
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "418 W Capitol Expy",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95136",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "418 W Capitol Expy",
                    "San Jose, CA 95136"
                ]
            },
            "phone": "+14082817337",
            "display_phone": "(408) 281-7337",
            "distance": 5632.99740951668
        },
        {
            "id": "k-gGOhL7A-iulynLm5wcUQ",
            "alias": "king-kong-ny-pizza-san-jose-2",
            "name": "King Kong NY Pizza",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CoN4hM72-VvovueQckS_xw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/king-kong-ny-pizza-san-jose-2?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 39,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.2566048,
                "longitude": -121.8990889
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "location": {
                "address1": "4622 Meridian Ave",
                "address2": "Ste B",
                "address3": null,
                "city": "San Jose",
                "zip_code": "95124",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "4622 Meridian Ave",
                    "Ste B",
                    "San Jose, CA 95124"
                ]
            },
            "phone": "+14087287404",
            "display_phone": "(408) 728-7404",
            "distance": 6842.299369040708
        },
        {
            "id": "3Ab38iMfrVHSGJFTfM7B6A",
            "alias": "the-pizza-box-san-jose",
            "name": "The Pizza Box",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/LypBCRg0-A3JXU6d-qmTfw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-pizza-box-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 217,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.35642,
                "longitude": -121.84091
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "148 S Jackson Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95116",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "148 S Jackson Ave",
                    "San Jose, CA 95116"
                ]
            },
            "phone": "+14082729333",
            "display_phone": "(408) 272-9333",
            "distance": 5926.004123022346
        },
        {
            "id": "bCMEyV3vxi0n1kgX5yD80w",
            "alias": "blue-line-pizza-campbell",
            "name": "Blue Line Pizza",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/A_kPzRCe7Q_7kwyOtufaEA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/blue-line-pizza-campbell?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 1252,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "gluten_free",
                    "title": "Gluten-Free"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.28724,
                "longitude": -121.94265
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "415 E Campbell Ave",
                "address2": null,
                "address3": "",
                "city": "Campbell",
                "zip_code": "95008",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "415 E Campbell Ave",
                    "Campbell, CA 95008"
                ]
            },
            "phone": "+14083782800",
            "display_phone": "(408) 378-2800",
            "distance": 6037.36332490285
        },
        {
            "id": "pxFijJNBpDkkNSfJK9NLvg",
            "alias": "the-pizza-press-san-jose-san-jose",
            "name": "The Pizza Press - San Jose",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/lwsgKWAAc_shba3ZqLBT2A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-pizza-press-san-jose-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 117,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.32559,
                "longitude": -121.813905
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "2200 Eastridge Lp",
                "address2": "Ste 1408",
                "address3": null,
                "city": "San Jose",
                "zip_code": "95122",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2200 Eastridge Lp",
                    "Ste 1408",
                    "San Jose, CA 95122"
                ]
            },
            "phone": "+14085318888",
            "display_phone": "(408) 531-8888",
            "distance": 6374.140693725448
        },
        {
            "id": "LsvST35GTtypxKXleL0g7g",
            "alias": "ciceros-pizza-san-jose",
            "name": "Cicero's Pizza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/H_cc0TLbOCViMykGe18mOg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/ciceros-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 1009,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.309147,
                "longitude": -122.01207522877
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "6138 Bollinger Rd",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95129",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "6138 Bollinger Rd",
                    "San Jose, CA 95129"
                ]
            },
            "phone": "+14087770690",
            "display_phone": "(408) 777-0690",
            "distance": 11261.513628949784
        },
        {
            "id": "95tlD3LE0M_vLLwjcmoNjA",
            "alias": "high-five-pizza-san-jose-2",
            "name": "High Five Pizza",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CCBNSC1ookXXyeNwi4q9Yg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/high-five-pizza-san-jose-2?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 828,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "bbq",
                    "title": "Barbeque"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.26715,
                "longitude": -121.83224
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "171 Branham Ln",
                "address2": "Ste 1",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95136",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "171 Branham Ln",
                    "Ste 1",
                    "San Jose, CA 95136"
                ]
            },
            "phone": "+14086296800",
            "display_phone": "(408) 629-6800",
            "distance": 7206.920263151851
        },
        {
            "id": "HDQNWPL2gF4_jayyG--D6A",
            "alias": "jtown-pizza-san-jose",
            "name": "Jtown Pizza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/S6ZXrGfR57qPax-uqh6ysQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jtown-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 131,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "beerbar",
                    "title": "Beer Bar"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.34977,
                "longitude": -121.89392
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "625 N 6th St",
                "address2": "",
                "address3": null,
                "city": "San Jose",
                "zip_code": "95112",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "625 N 6th St",
                    "San Jose, CA 95112"
                ]
            },
            "phone": "+14083262910",
            "display_phone": "(408) 326-2910",
            "distance": 3787.0676059494463
        },
        {
            "id": "4VEKfn_UhMHJCk9MX7vZ_Q",
            "alias": "pizza-chicago-santa-clara",
            "name": "Pizz'A Chicago",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8nx7sxhiY85P8nqyJZkdkg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/pizza-chicago-santa-clara?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 944,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.35333,
                "longitude": -122.00004
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1576 Halford Ave",
                "address2": "",
                "address3": "",
                "city": "Santa Clara",
                "zip_code": "95051",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1576 Halford Ave",
                    "Santa Clara, CA 95051"
                ]
            },
            "phone": "+14082442246",
            "display_phone": "(408) 244-2246",
            "distance": 10978.846532830858
        },
        {
            "id": "dcbeqWz3Jar0OY4L7dfyAw",
            "alias": "pizza-bocca-lupo-san-jose",
            "name": "Pizza Bocca Lupo",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/vl25_uG5f7QJU21TB939Ww/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/pizza-bocca-lupo-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 723,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.33651,
                "longitude": -121.89432
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "87 N San Pedro St",
                "address2": "Ste 133",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "87 N San Pedro St",
                    "Ste 133",
                    "San Jose, CA 95110"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 2375.2434848429484
        },
        {
            "id": "TSOJwiC1eTGkJSsgXCPQlQ",
            "alias": "patxis-pizza-san-jose",
            "name": "Patxi's Pizza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/eNWm1MbEGD7y9D9KyzFDzg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/patxis-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 1024,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.403133124209,
                "longitude": -121.933287966285
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "3350 Zanker Rd",
                "address2": "Ste 30",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95134",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "3350 Zanker Rd",
                    "Ste 30",
                    "San Jose, CA 95134"
                ]
            },
            "phone": "+14085261999",
            "display_phone": "(408) 526-1999",
            "distance": 10535.591929927576
        },
        {
            "id": "iDPJF-epQNoxGe2eC4NY_A",
            "alias": "jakes-of-willow-glen-san-jose",
            "name": "Jake's of Willow Glen",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6Yu6RRPLzY_lQzaE3OMFUg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jakes-of-willow-glen-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 535,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "sportsbars",
                    "title": "Sports Bars"
                },
                {
                    "alias": "bbq",
                    "title": "Barbeque"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.3098640441895,
                "longitude": -121.901565551758
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1074 Lincoln Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95125",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1074 Lincoln Ave",
                    "San Jose, CA 95125"
                ]
            },
            "phone": "+14082877960",
            "display_phone": "(408) 287-7960",
            "distance": 1633.8072685385823
        },
        {
            "id": "OHXPx6P6DKspv2qVjJN9Iw",
            "alias": "tony-di-maggios-pizza-san-jose",
            "name": "Tony Di Maggio's Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/BMmjilj4uepjIykm1GXYZA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/tony-di-maggios-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 701,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.281651,
                "longitude": -121.838404
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "3852 Monterey Hwy",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "3852 Monterey Hwy",
                    "San Jose, CA 95111"
                ]
            },
            "phone": "+14086297775",
            "display_phone": "(408) 629-7775",
            "distance": 5660.276015358083
        },
        {
            "id": "GJHmlphsRaS7SL4nhGGkBA",
            "alias": "curry-pizza-house-san-jose-3",
            "name": "Curry Pizza House",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Yk7yplAyRNven9kgnLPiUA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/curry-pizza-house-san-jose-3?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 254,
            "categories": [
                {
                    "alias": "indpak",
                    "title": "Indian"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "chicken_wings",
                    "title": "Chicken Wings"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.31316,
                "longitude": -121.77396
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "4035 Evergreen Village Square",
                "address2": "Ste 10",
                "address3": null,
                "city": "San Jose",
                "zip_code": "95135",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "4035 Evergreen Village Square",
                    "Ste 10",
                    "San Jose, CA 95135"
                ]
            },
            "phone": "+14082232100",
            "display_phone": "(408) 223-2100",
            "distance": 9845.606631547053
        },
        {
            "id": "A9rkSpmfro-rtO1mH2174g",
            "alias": "cali-pizza-san-jose",
            "name": "Cali Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/s4FI6t0rQcIGBctBx0CVwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cali-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 10,
            "categories": [
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 5.0,
            "coordinates": {
                "latitude": 37.24931453399033,
                "longitude": -121.83170510158851
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "location": {
                "address1": "5665 Snell Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95123",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "5665 Snell Ave",
                    "San Jose, CA 95123"
                ]
            },
            "phone": "+14083652008",
            "display_phone": "(408) 365-2008",
            "distance": 8835.797536075188
        },
        {
            "id": "peMpvUdvX0GNaDXQFRmZfw",
            "alias": "best-desi-pizza-campbell",
            "name": "Best Desi Pizza",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/N0R77k9j2CsQVG9ssJAV8g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/best-desi-pizza-campbell?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 310,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.28065,
                "longitude": -121.93096
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "2360 S Bascom Ave",
                "address2": "SteC",
                "address3": "",
                "city": "Campbell",
                "zip_code": "95008",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2360 S Bascom Ave",
                    "SteC",
                    "Campbell, CA 95008"
                ]
            },
            "phone": "+14089636353",
            "display_phone": "(408) 963-6353",
            "distance": 5664.195608638083
        },
        {
            "id": "lyKvUhp9urUGKBuvQZF3PA",
            "alias": "sammy-gs-san-jose",
            "name": "Sammy G's",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/pDYYX-G6AlQl3f4hyKp4Rw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sammy-gs-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 323,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.3357580757824,
                "longitude": -121.877141328941
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "330 S 10th St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95112",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "330 S 10th St",
                    "San Jose, CA 95112"
                ]
            },
            "phone": "+14086387076",
            "display_phone": "(408) 638-7076",
            "distance": 2255.2514338187984
        },
        {
            "id": "TeBae7JAYIptn37IqzngEw",
            "alias": "luigis-pizza-and-pasta-campbell",
            "name": "Luigi's Pizza & Pasta",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UqBXCjN-fRcAA107nFh-vg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/luigis-pizza-and-pasta-campbell?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 663,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.278512215687,
                "longitude": -121.950654435721
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "2495 Winchester Blvd",
                "address2": "",
                "address3": "",
                "city": "Campbell",
                "zip_code": "95008",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2495 Winchester Blvd",
                    "Campbell, CA 95008"
                ]
            },
            "phone": "+14083786862",
            "display_phone": "(408) 378-6862",
            "distance": 7174.8953301384745
        },
        {
            "id": "aZs4TRP5hUF7Ee_u9k_J6w",
            "alias": "via-mia-pizza-saratoga-san-jose-5",
            "name": "Via Mia Pizza -Saratoga",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yt7kC_plXJfuk1yL3n903w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/via-mia-pizza-saratoga-san-jose-5?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 373,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "halal",
                    "title": "Halal"
                },
                {
                    "alias": "chicken_wings",
                    "title": "Chicken Wings"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.30384,
                "longitude": -121.97884
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1150 Saratoga Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95129",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1150 Saratoga Ave",
                    "San Jose, CA 95129"
                ]
            },
            "phone": "+14082444100",
            "display_phone": "(408) 244-4100",
            "distance": 8408.352534583053
        },
        {
            "id": "T0Ujp4lL_apRxR2dopVVKw",
            "alias": "mas-pizza-san-jose",
            "name": "Mas Pizza",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/C3Osz61MlyLAmRkrYMpqIw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mas-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 19,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "sportsbars",
                    "title": "Sports Bars"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.33363,
                "longitude": -121.88796
            },
            "transactions": [
                "restaurant_reservation",
                "pickup",
                "delivery"
            ],
            "location": {
                "address1": "150 S 1st St",
                "address2": null,
                "address3": null,
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "150 S 1st St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14084597667",
            "display_phone": "(408) 459-7667",
            "distance": 1916.5837420251141
        },
        {
            "id": "XpYoyGNdTOrhJL7tR05MmQ",
            "alias": "stuft-pizza-milpitas-2",
            "name": "Stuft Pizza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Mx0Qsa_SNOl_NeqceIU-dA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/stuft-pizza-milpitas-2?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 510,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "chicken_wings",
                    "title": "Chicken Wings"
                },
                {
                    "alias": "fooddeliveryservices",
                    "title": "Food Delivery Services"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.41619,
                "longitude": -121.87868
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1426 Dempsey Rd",
                "address2": "",
                "address3": "",
                "city": "Milpitas",
                "zip_code": "95035",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1426 Dempsey Rd",
                    "Milpitas, CA 95035"
                ]
            },
            "phone": "+14082624343",
            "display_phone": "(408) 262-4343",
            "distance": 11126.59088013737
        },
        {
            "id": "MEfOIAnLS4dYCdoCuuAhcw",
            "alias": "king-kong-ny-pizza-san-jose-4",
            "name": "King Kong Ny Pizza",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/VBwjIXFElkDeeULtcNsMnw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/king-kong-ny-pizza-san-jose-4?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 327,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.366408,
                "longitude": -121.828356
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "22 N White Rd",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95127",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "22 N White Rd",
                    "San Jose, CA 95127"
                ]
            },
            "phone": "+14082544400",
            "display_phone": "(408) 254-4400",
            "distance": 7480.5430839745495
        },
        {
            "id": "9X1lX41OJkYwMAn89Ossjw",
            "alias": "got2go-pizza-san-jose",
            "name": "Got2go Pizza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/PnYiQc-ugh2JBt6uDpq2Gg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/got2go-pizza-san-jose?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 311,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.3236149,
                "longitude": -121.9240973
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "1761 W San Carlos St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95128",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1761 W San Carlos St",
                    "San Jose, CA 95128"
                ]
            },
            "phone": "+14089759777",
            "display_phone": "(408) 975-9777",
            "distance": 3582.656865059519
        },
        {
            "id": "5JntmgZum2-Gl-zH7JldYg",
            "alias": "five-star-pizza-san-jose-3",
            "name": "Five Star Pizza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/j70_O8DqUh1F7B_KaZ7hXg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/five-star-pizza-san-jose-3?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=W1dNi6Ziy5O0z-dk2LOQow",
            "review_count": 160,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.23241,
                "longitude": -121.774892
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "125 Bernal Rd",
                "address2": "Ste 50",
                "address3": null,
                "city": "San Jose",
                "zip_code": "95119",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "125 Bernal Rd",
                    "Ste 50",
                    "San Jose, CA 95119"
                ]
            },
            "phone": "+14082299900",
            "display_phone": "(408) 229-9900",
            "distance": 13506.713046870282
        }
    ],
    "total": 240,
    "region": {
        "center": {
            "longitude": -121.88507080078125,
            "latitude": 37.31648115417059
        }
    }
}