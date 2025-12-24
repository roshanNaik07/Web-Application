import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://tse4.mm.bing.net/th/id/OIP.xFsfS9DLR3uSusNqNiKBBQHaGQ?pid=Api&P=0&h=180" style={{ width: 90 }} />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )
}

const cardApiData = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "30529",
                    "name": "Karama",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/29/82e02a5e-934c-402f-9f1c-f0e8a2d3aeb2_cd75c95d-b105-4b66-b64d-ab10403ff075.png",
                    "locality": "Frazer Town",
                    "areaName": "Frazer Town",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Arabian",
                        "Biryani",
                        "Desserts",
                        "Mughlai",
                        "North Indian"
                    ],
                    "avgRating": 4.5,
                    "parentId": "9722",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "16K+",
                    "promoted": true,
                    "adTrackingId": "cid=6de70486-318c-4394-8b37-f47dc7061daa~p=0~adgrpid=6de70486-318c-4394-8b37-f47dc7061daa#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30529~plpr=COLLECTION~eid=2594660a-49b1-45a3-aa99-ae4d977d5acd~srvts=1766550503122~collid=83639",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 5.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "5.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-24 11:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
                            "ratingCount": "22K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "6de70486-318c-4394-8b37-f47dc7061daa"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=30529&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "17118",
                    "name": "Social",
                    "cloudinaryImageId": "uvdkvtb6ibzjn1aol15k",
                    "locality": "Church Street",
                    "areaName": "Church Street",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Chinese",
                        "Fast Food",
                        "Biryani",
                        "Pizzas",
                        "Salads",
                        "Kebabs",
                        "Juices",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "parentId": "616464",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "9.3K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-24 23:30:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "16K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=17118&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "130367",
                    "name": "New Alameen Restaurant",
                    "cloudinaryImageId": "b99ac6591adf4d0d83cf705a4ffad4da",
                    "locality": "Ulsoor",
                    "areaName": "Central Bangalore",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Kerala",
                        "briyani",
                        "Kebabs",
                        "Indian",
                        "South Indian",
                        "rolls"
                    ],
                    "avgRating": 3.9,
                    "parentId": "14686",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "4.8K+",
                    "promoted": true,
                    "adTrackingId": "cid=04e9b936-d5eb-42f6-92b0-a4f0b0234051~p=1~adgrpid=04e9b936-d5eb-42f6-92b0-a4f0b0234051#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=130367~plpr=COLLECTION~eid=301a66aa-c180-411e-98fa-72fd0c574fe7~srvts=1766550503122~collid=83639",
                    "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "5.0 km",
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
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.1",
                            "ratingCount": "62"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "04e9b936-d5eb-42f6-92b0-a4f0b0234051"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=130367&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "696230",
                    "name": "ITC Master Chef Creations",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/6/14baf724-99f4-4733-aa96-6d300bf2036d_696230.JPG",
                    "locality": "Shivaji Nagar",
                    "areaName": "Dispensary Rd",
                    "costForTwo": "₹650 for two",
                    "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Kebabs",
                        "rolls",
                        "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "11992",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "1.5K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-25 02:00:00",
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
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=696230&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "998305",
                    "name": "Canteen Central",
                    "cloudinaryImageId": "9a6941b3319d3d7a2b874aae646b9784",
                    "locality": "VASANTHA NAGAR",
                    "areaName": "Central Bangalore",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Snacks",
                        "Indian",
                        "Chaat",
                        "Biryani"
                    ],
                    "avgRating": 4,
                    "parentId": "582290",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "96",
                    "promoted": true,
                    "adTrackingId": "cid=d65bf003-f705-4716-a93d-d94401780867~p=3~adgrpid=d65bf003-f705-4716-a93d-d94401780867#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=998305~plpr=COLLECTION~eid=52a25568-1c68-4d08-b602-51ae3402758e~srvts=1766550503122~collid=83639",
                    "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-25 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                            "description": "OnlyOnSwiggy"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "d65bf003-f705-4716-a93d-d94401780867"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=998305&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "748103",
                    "name": "Thenga Manga by Chef Pillai",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/1/abff0cf5-f9b5-4c98-aadb-c3f27ce6a127_0cdf20b1-aabc-409e-be45-23c1797a028c.jpeg",
                    "locality": "Brigade Road",
                    "areaName": "Central Bangalore",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Chinese",
                        "Biryani"
                    ],
                    "avgRating": 4.2,
                    "parentId": "447109",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "978",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-24 23:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "2.9",
                            "ratingCount": "158"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=748103&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "263601",
                    "name": "Veg Meals By LunchBox",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/7330e9e3-98bb-41b2-b9c2-e2aa8f93fff9_263601.JPG",
                    "locality": "14th Main Road",
                    "areaName": "Subramanya Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Thalis",
                        "North Indian",
                        "Biryani",
                        "South Indian",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4,
                    "veg": true,
                    "parentId": "21938",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "356",
                    "promoted": true,
                    "adTrackingId": "cid=d5e5f184-8465-4881-9247-271a33e6706f~p=4~adgrpid=d5e5f184-8465-4881-9247-271a33e6706f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=263601~plpr=COLLECTION~eid=03280bfd-e6db-4b29-b423-f40d8201788c~srvts=1766550503122~collid=83639",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "7.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-12-24 23:59:00",
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
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
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
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "d5e5f184-8465-4881-9247-271a33e6706f"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=263601&source=collection&query=Biryani",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
];

const Card = ({ cardData }) => {
    const { info } = cardData.card.card
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
                info.cloudinaryImageId
            } alt="Resto-images"></img>
            <h3>{info.name}</h3>

            <div className="rating-time">
                <span className="rating">{info.avgRatingString}</span>
                <span className="time">{info.sla.slaString}</span>
            </div>

            <p className="flavors">{info.cuisines.join(", ")}</p>
            <p className="location">{info.locality}</p>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <h1 style={{ marginLeft: 180, fontSize: 50 }}>Ice Cream</h1>
            <p style={{ marginLeft: 180, fontSize: 20, paddingBottom: 10 }}>Where every scoop tells a story</p>
            <div className="resto-card">
                <Card cardData={cardApiData[0]}></Card>
                <Card cardData={cardApiData[1]}></Card>
                <Card cardData={cardApiData[2]}></Card>
                <Card cardData={cardApiData[3]}></Card>
                <Card cardData={cardApiData[4]}></Card>
                <Card cardData={cardApiData[5]}></Card>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

const AppStructure = function () {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppStructure />)