import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";




/*

by the help of this project we will understand how props work and how we can send the data dynamically from react component
-header
    -left side logo
    -right side some items

-body
    -searchbar
    -cardSection
        -image
        -card content



*/
const resData= [
                                    {
                                        "info": {
                                            "id": "415642",
                                            "name": "Murthal Paranthawala",
                                            "cloudinaryImageId": "deabin3rt4mbtcitgopv",
                                            "locality": "Haridwar Road",
                                            "areaName": "Race Course",
                                            "costForTwo": "₹220 for two",
                                            "cuisines": [
                                                "North Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "282923",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "4.0K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 1.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "1.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹39"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "228222",
                                            "name": "Chetan Puri Delivery",
                                            "cloudinaryImageId": "ocydpqvgaqdcbrqzqc4p",
                                            "locality": "Paltan Bazaar",
                                            "areaName": "Paltan Bazaar",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "North Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "452947",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "3.8K+",
                                            "sla": {
                                                "deliveryTime": 32,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹149"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/chetan-puri-delivery-paltan-bazaar-rest228222",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "69701",
                                            "name": "Ellora's Melting Moments",
                                            "cloudinaryImageId": "3bdf48e50f6b4d0031221401440defbb",
                                            "locality": "Rajpur Road",
                                            "areaName": "Rajpur Road",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Snacks",
                                                "Desserts",
                                                "Italian"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "13689",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "29K+",
                                            "sla": {
                                                "deliveryTime": 33,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-40 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 21:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.4",
                                                    "ratingCount": "9.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/elloras-melting-moments-rajpur-road-rest69701",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "69447",
                                            "name": "Gaylord Express",
                                            "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
                                            "locality": "Paltan Bazar",
                                            "areaName": "Paltan Bazaar",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Chinese",
                                                "Beverages",
                                                "Italian",
                                                "Continental"
                                            ],
                                            "avgRating": 3.9,
                                            "parentId": "13696",
                                            "avgRatingString": "3.9",
                                            "totalRatingsString": "80K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-31 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.2",
                                                    "ratingCount": "2.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/gaylord-express-paltan-bazar-paltan-bazaar-rest69447",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "74796",
                                            "name": "Five Star Janta",
                                            "cloudinaryImageId": "avlujvfa7huclgj7e8z8",
                                            "locality": "Ballupur",
                                            "areaName": "Ballupur",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "Bakery",
                                                "Chinese",
                                                "South Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "15743",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "18K+",
                                            "sla": {
                                                "deliveryTime": 36,
                                                "lastMileTravel": 4.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "4.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹149"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "2.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/five-star-janta-ballupur-rest74796",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "685166",
                                            "name": "IGP Cakes",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/17/748b1260-9bae-4279-9db1-462bd48adb82_685166.JPG",
                                            "locality": "GMS Road",
                                            "areaName": "Deh_Patel Nagar",
                                            "costForTwo": "₹299 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Bakery"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "392350",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.2K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 4.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/igp-cakes-gms-road-deh-patel-nagar-rest685166",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "730266",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/a7a56017-720f-4379-8451-b6c1f34a413c_730266.jpg",
                                            "locality": "Balliwala",
                                            "areaName": "Indira Nagar Dehradun",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "2",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "1.3K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 3.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹150 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/subway-balliwala-indira-nagar-dehradun-rest730266",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "144273",
                                            "name": "Barista Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/963db3f8-6995-401c-972d-f14b2e65ac69_144273.JPG",
                                            "locality": "Chukkuwala",
                                            "areaName": "Chukkuwala",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Snacks",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "416281",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "1.4K+",
                                            "sla": {
                                                "deliveryTime": 39,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "36-41 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 08:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹69"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "963"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/barista-coffee-chukkuwala-rest144273",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "254751",
                                            "name": "Anandam",
                                            "cloudinaryImageId": "311282ca8bb87539502527657bd7bcf0",
                                            "locality": "Niranjanpur",
                                            "areaName": "Patel Nagar",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Sweets",
                                                "Snacks",
                                                "North Indian"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "2649",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "11K+",
                                            "sla": {
                                                "deliveryTime": 37,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "36-41 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 08:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/anandam-niranjanpur-patel-nagar-rest254751",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "253768",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f05426f2-a35c-4c16-b0be-c7a3bb8e7d79_253768.JPG",
                                            "locality": "Rajpur Road",
                                            "areaName": "Karanpur",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "American"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "630",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "23K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 03:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹117"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "9.5K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/mcdonalds-rajpur-road-karanpur-rest253768",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "807972",
                                            "name": "Theobroma",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/3abe11a9-c80e-4e5e-ae51-dabfb6772ce4_807972.JPG",
                                            "locality": "Rajpur Road",
                                            "areaName": "Rajpur Road",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "1040",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "2.2K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 2.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "163"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/theobroma-rajpur-road-rest807972",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "84229",
                                            "name": "Punjabi Dhaba",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/11/7ed33913-93fd-4483-b859-7cff128a691c_84229.jpg",
                                            "locality": "Paltan Bazar",
                                            "areaName": "Paltan Bazaar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Tandoor",
                                                "Chinese"
                                            ],
                                            "avgRating": 3.9,
                                            "parentId": "1476",
                                            "avgRatingString": "3.9",
                                            "totalRatingsString": "43K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹29"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "300"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/punjabi-dhaba-paltan-bazar-paltan-bazaar-rest84229",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "628994",
                                            "name": "Starbucks Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/2aea38ef-f418-404e-8465-2895af1def99_628994.JPG",
                                            "locality": "Malsi",
                                            "areaName": "Malsi",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Snacks",
                                                "Desserts",
                                                "Bakery",
                                                "Ice Cream"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "195515",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "622",
                                            "sla": {
                                                "deliveryTime": 54,
                                                "lastMileTravel": 9.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "9.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.4",
                                                    "ratingCount": "1.2K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/starbucks-coffee-malsi-rest628994",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "487802",
                                            "name": "Oye Hoye Paratha",
                                            "cloudinaryImageId": "ht5olqynpo0r3z3vhnre",
                                            "locality": "Sahastradhara Road",
                                            "areaName": "Nalapani Chowk",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Mughlai"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "153184",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "3.7K+",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 21:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/oye-hoye-paratha-sahastradhara-road-nalapani-chowk-rest487802",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "365573",
                                            "name": "Sweet Truth - Cake and Desserts",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/23/42392d1a-91ce-4938-b718-f3a7e46f0b85_365573.JPG",
                                            "locality": "Back Side Area",
                                            "areaName": "Rajpur Road",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Bakery",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "4444",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1.8K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 4.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹79"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/sweet-truth-cake-and-desserts-back-side-area-rajpur-road-rest365573",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "345384",
                                            "name": "Cafe Coffee Day",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/6f4ca5f3-9363-4480-9a89-a2b1946f570a_345384.JPG",
                                            "locality": "Kaulagarh Road",
                                            "areaName": "Garhi Cantt",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Snacks",
                                                "Desserts",
                                                "Burgers",
                                                "Ice Cream",
                                                "Bakery",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "1",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "510",
                                            "sla": {
                                                "deliveryTime": 37,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹219"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/cafe-coffee-day-kaulagarh-road-garhi-cantt-rest345384",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "804851",
                                            "name": "Bakingo",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/22/5b6b8d27-5242-4d95-a641-557e987b8847_804851.JPG",
                                            "locality": "Chander Nagar Main Road",
                                            "areaName": "Dehradun Nagar",
                                            "costForTwo": "₹299 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "3818",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "3.8K+",
                                            "sla": {
                                                "deliveryTime": 17,
                                                "lastMileTravel": 0.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-25 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹79"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/bakingo-chander-nagar-main-road-dehradun-nagar-rest804851",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "749710",
                                            "name": "Nik Bakers",
                                            "cloudinaryImageId": "9224aa5efa8216354c4cc8a46659efcd",
                                            "locality": "Malsi",
                                            "areaName": "Hathibarkala",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Bakery",
                                                "Fast Food",
                                                "Snacks",
                                                "Italian"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "10551",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "275",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 10.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "10.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:20:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.4",
                                                    "ratingCount": "205"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/nik-bakers-malsi-hathibarkala-rest749710",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "692795",
                                            "name": "Costa Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/08fb79ad-3fd5-4308-9e7a-0536ba7edca9_692795.jpg",
                                            "locality": "Mussoorie Dehradun Road",
                                            "areaName": "Mussoorie Dehradun Road",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Bakery",
                                                "Desserts",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "8427",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "32",
                                            "sla": {
                                                "deliveryTime": 48,
                                                "lastMileTravel": 10.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "10.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.6",
                                                    "ratingCount": "60"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/costa-coffee-mussoorie-dehradun-road-rest692795",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "68773",
                                            "name": "Anandpuri Restaurant",
                                            "cloudinaryImageId": "awzzradtpasigyr0dtwk",
                                            "locality": "Hathibarkala Salwala",
                                            "areaName": "Hathibarkala Salwala",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Sweets",
                                                "South Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.1,
                                            "veg": true,
                                            "parentId": "13702",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "17K+",
                                            "sla": {
                                                "deliveryTime": 59,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "56-61 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-12-24 08:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹109"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "2.3",
                                                    "ratingCount": "28"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5af6a5b2-e30d-411a-a5fa-da202a6e5e26"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/dehradun/anandpuri-restaurant-hathibarkala-salwala-rest68773",
                                            "type": "WEBLINK"
                                        }
                                    }
                ]

const Heading = ()=>{
    return (
    <div className='headerSection'>
        <div className='logoSection'>
            <img src='https://png.pngtree.com/template/20190625/ourmid/pngtree-fresh-food-logo-image_219828.jpg'/>
        </div>
        <div className='itemsSection'>
            <ul className='itemsList'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>

    )
}

// this is a static way that how you make cards
const Foodcard = (props)=>{
    return (
        <div className='mainCont'>
        <div className='foodimg'>
            <img src={props.imgsrc} alt="" />
            <h3 className='imgtext'>{props.discount}</h3>
        </div>
        <div className='foodContent'>
            <h2>{props.foodName}</h2>
            <div className="ratingsection">
              <FontAwesomeIcon icon={faStar} />
              <p>{props.rating}</p>
              <span>.</span>
              <span>{props.delevaryTime}</span>
            </div>
            <div className='subheadingSection'>
                <p>{props.subtext}</p>
                <p>{props.address}</p>
            </div>
        </div>

        </div>
    )
}

//this is the dynamic way of making the card
const DynamicFoodCard = ({resObj})=>{
    console.log('resObj: ', resObj);
    return (
        <div className='mainCont'>
        <div className='foodimg'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resObj?.info?.cloudinaryImageId} alt=""/>
            <h3 className='imgtext'>{resObj?.info?.aggregatedDiscountInfoV3 ? `${resObj?.info?.aggregatedDiscountInfoV3.header} ${resObj?.info?.aggregatedDiscountInfoV3?.subHeader}` : null }</h3>
        </div>
        <div className='foodContent'>
            <h2>{resObj?.info?.name}</h2>
            <div className="ratingsection">
              <FontAwesomeIcon icon={faStar} />
              <p>{resObj?.info?.avgRatingString}</p>
              <span>.</span>
              <span>{resObj?.info?.sla?.deliveryTime} mins</span>
            </div>
            <div className='subheadingSection'>
                <p>{resObj?.info?.cuisines[0]}</p>
                <p>{resObj?.info?.areaName}</p>
            </div>
        </div>

        </div>
    )
}

const BodySection = ()=>{
    return (
        <div className='mainBody'>
            <div className='searchbarSection'>
                <input type="search" className='searchinput' placeholder='Enter your Food'  />
                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faMagnifyingGlass} size="lg" color="gray" />
            </div>
            <div className='cardSection'>
                {/* <Foodcard
                 imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/f0e97f3a-c96a-413f-8c37-6e58d6572c0a_722374.JPG"
                 foodName = "pizza"
                 discount = "50% off"
                 rating = "4.3"
                 delevaryTime = "35-40mins"
                 subtext = "Pizzas"
                 address = "Nehru Nagar"
                /> */}
                <DynamicFoodCard 
                 resObj = {resData[0]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[1]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[2]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[3]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[4]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[5]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[6]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[7]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[8]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[9]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[10]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[11]}
                /> 
                                <DynamicFoodCard 
                 resObj = {resData[12]}
                />                
            </div>
        </div>
        
    )
}

const AppLayout = ()=>{
    return(
        <div>
            <Heading/>
            <BodySection/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)