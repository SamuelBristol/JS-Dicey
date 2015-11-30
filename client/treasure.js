// Treasure list, obtained from scraping the D20 SRD
// Data aggregated by Sam Bristol
// Utilizes Node.js (server), Cheerio (jQuery core), Request (http calls)
// Last Modified: 11/24/15

/* 
http://www.d20srd.org/
The Hypertext d20 SRDTM is owned and created by Jans Carton.

‘d20 System’ and the ‘d20 System’ logo are trademarks of Wizards of the Coast, Inc.
and are used according to the terms of the d20 System License version 6.0.
A copy of this License can be found at www.wizards.com/d20.
*/
var treasure = {
    "coins": {
        "1": [
            {
                "roll": "01-14",
                "reward": "No coins."
            },
            {
                "roll": "15-29",
                "reward": "1d6 x 1,000 cp"
            },
            {
                "roll": "30-52",
                "reward": "1d8 x 100 sp"
            },
            {
                "roll": "53-95",
                "reward": "2d8 x 10 gp"
            },
            {
                "roll": "96-100",
                "reward": "1d4 x 10 pp"
            }
        ],
        "2": [
            {
                "roll": "01-13",
                "reward": "No coins."
            },
            {
                "roll": "14-23",
                "reward": "1d10 x 1,000 cp"
            },
            {
                "roll": "24-43",
                "reward": "2d10 x 100 sp"
            },
            {
                "roll": "44-95",
                "reward": "4d10 x 10 gp"
            },
            {
                "roll": "96-100",
                "reward": "2d8 x 10 pp"
            }
        ],
        "3": [
            {
                "roll": "01-11",
                "reward": "No coins."
            },
            {
                "roll": "12-21",
                "reward": "2d10 x 1,000 cp"
            },
            {
                "roll": "22-41",
                "reward": "4d8 x 100 sp"
            },
            {
                "roll": "42-95",
                "reward": "1d4 x 100 gp"
            },
            {
                "roll": "96-100",
                "reward": "1d10 x 10 pp"
            }
        ],
        "4": [
            {
                "roll": "01-11",
                "reward": "No coins."
            },
            {
                "roll": "12-21",
                "reward": "3d10 x 1,000 cp"
            },
            {
                "roll": "22-41",
                "reward": "4d12 x 1,000 sp"
            },
            {
                "roll": "42-95",
                "reward": "1d6 x 100 gp"
            },
            {
                "roll": "96-100",
                "reward": "1d8 x 10 pp"
            }
        ],
        "5": [
            {
                "roll": "01-10",
                "reward": "No coins."
            },
            {
                "roll": "11-19",
                "reward": "1d4 x 10,000 cp"
            },
            {
                "roll": "20-38",
                "reward": "1d6 x 1,000 sp"
            },
            {
                "roll": "39-95",
                "reward": "1d8 x 100 gp"
            },
            {
                "roll": "96-100",
                "reward": "1d10 x 10 pp"
            }
        ],
        "6": [
            {
                "roll": "01-10",
                "reward": "No coins."
            },
            {
                "roll": "11-18",
                "reward": "1d6 x 10,000 cp"
            },
            {
                "roll": "19-37",
                "reward": "1d8 x 1,000 sp"
            },
            {
                "roll": "38-95",
                "reward": "1d10 x 100 gp"
            },
            {
                "roll": "96-100",
                "reward": "1d12 x 10 pp"
            }
        ],
        "7": [
            {
                "roll": "01-11",
                "reward": "No coins."
            },
            {
                "roll": "12-18",
                "reward": "1d10 x 10,000 cp"
            },
            {
                "roll": "19-35",
                "reward": "1d12 x 1,000 sp"
            },
            {
                "roll": "36-93",
                "reward": "2d6 x 100 gp"
            },
            {
                "roll": "94-100",
                "reward": "3d4 x 10 pp"
            }
        ],
        "8": [
            {
                "roll": "01-10",
                "reward": "No coins."
            },
            {
                "roll": "11-15",
                "reward": "1d12 x 10,000 cp"
            },
            {
                "roll": "16-29",
                "reward": "2d6 x 1,000 sp"
            },
            {
                "roll": "30-87",
                "reward": "2d8 x 100 gp"
            },
            {
                "roll": "88-100",
                "reward": "3d6 x 10 pp"
            }
        ],
        "9": [
            {
                "roll": "01-10",
                "reward": "No coins."
            },
            {
                "roll": "11-15",
                "reward": "2d6 x 10,000 cp"
            },
            {
                "roll": "16-29",
                "reward": "2d8 x 1,000 sp"
            },
            {
                "roll": "30-85",
                "reward": "5d4 x 100 gp"
            },
            {
                "roll": "86-100",
                "reward": "2d12 x 10 pp"
            }
        ],
        "10": [
            {
                "roll": "01-10",
                "reward": "No coins."
            },
            {
                "roll": "11-24",
                "reward": "2d10 x 1,000 sp"
            },
            {
                "roll": "25-79",
                "reward": "6d4 x 100 gp"
            },
            {
                "roll": "80-100",
                "reward": "5d6 x 10 pp"
            }
        ],
        "11": [
            {
                "roll": "01-08",
                "reward": "No coins."
            },
            {
                "roll": "09-14",
                "reward": "3d10 x 1,000 sp"
            },
            {
                "roll": "15-75",
                "reward": "4d8 x 100 gp"
            },
            {
                "roll": "76-100",
                "reward": "4d10 x 10 pp"
            }
        ],
        "12": [
            {
                "roll": "01-08",
                "reward": "No coins."
            },
            {
                "roll": "09-14",
                "reward": "3d12 x 1,000 sp"
            },
            {
                "roll": "15-75",
                "reward": "1d4 x 1,000 gp"
            },
            {
                "roll": "76-100",
                "reward": "1d4 x 100 pp"
            }
        ],
        "13": [
            {
                "roll": "01-08",
                "reward": "No coins."
            },
            {
                "roll": "09-75",
                "reward": "1d4 x 1,000 gp"
            },
            {
                "roll": "76-100",
                "reward": "1d10 x 100 pp"
            }
        ],
        "14": [
            {
                "roll": "01-08",
                "reward": "No coins."
            },
            {
                "roll": "09-75",
                "reward": "1d6 x 1,000 gp"
            },
            {
                "roll": "76-100",
                "reward": "1d12 x 100 pp"
            }
        ],
        "15": [
            {
                "roll": "01-03",
                "reward": "No coins."
            },
            {
                "roll": "04-74",
                "reward": "1d8 x 1,000 gp"
            },
            {
                "roll": "75-100",
                "reward": "3d4 x 100 pp"
            }
        ],
        "16": [
            {
                "roll": "01-03",
                "reward": "No coins."
            },
            {
                "roll": "04-74",
                "reward": "1d12 x 1,000 gp"
            },
            {
                "roll": "75-100",
                "reward": "3d4 x 100 pp"
            }
        ],
        "17": [
            {
                "roll": "01-03",
                "reward": "No coins."
            },
            {
                "roll": "04-68",
                "reward": "3d4 x 1,000 gp"
            },
            {
                "roll": "69-100",
                "reward": "2d10 x 100 pp"
            }
        ],
        "18": [
            {
                "roll": "01-02",
                "reward": "No coins."
            },
            {
                "roll": "03-65",
                "reward": "3d6 x 1,000 gp"
            },
            {
                "roll": "66-100",
                "reward": "5d4 x 100 pp"
            }
        ],
        "19": [
            {
                "roll": "01-02",
                "reward": "No coins."
            },
            {
                "roll": "03-65",
                "reward": "3d8 x 1,000 gp"
            },
            {
                "roll": "66-100",
                "reward": "3d10 x 100 pp"
            }
        ],
        "20": [
            {
                "roll": "01-02",
                "reward": "No coins."
            },
            {
                "roll": "03-65",
                "reward": "4d8 x 1,000 gp"
            },
            {
                "roll": "66-100",
                "reward": "4d10 x 100 pp"
            }
        ]
    },
    "goods": {
        "1": [
            {
                "roll": "01-90",
                "reward": "No goods."
            },
            {
                "roll": "91-95",
                "reward": "1 gem."
            },
            {
                "roll": "96-100",
                "reward": "1 art."
            }
        ],
        "2": [
            {
                "roll": "01-81",
                "reward": "No goods."
            },
            {
                "roll": "82-95",
                "reward": "1d3 gems"
            },
            {
                "roll": "96-100",
                "reward": "1d3 art"
            }
        ],
        "3": [
            {
                "roll": "01-77",
                "reward": "No goods."
            },
            {
                "roll": "78-95",
                "reward": "1d3 gems"
            },
            {
                "roll": "96-100",
                "reward": "1d3 art"
            }
        ],
        "4": [
            {
                "roll": "01-70",
                "reward": "No goods."
            },
            {
                "roll": "71-95",
                "reward": "1d4 gems"
            },
            {
                "roll": "96-100",
                "reward": "1d3 art"
            }
        ],
        "5": [
            {
                "roll": "01-60",
                "reward": "No goods."
            },
            {
                "roll": "61-95",
                "reward": "1d4 gems"
            },
            {
                "roll": "96-100",
                "reward": "1d4 art"
            }
        ],
        "6": [
            {
                "roll": "01-56",
                "reward": "No goods."
            },
            {
                "roll": "57-92",
                "reward": "1d4 gems"
            },
            {
                "roll": "93-100",
                "reward": "1d4 art"
            }
        ],
        "7": [
            {
                "roll": "01-48",
                "reward": "No goods."
            },
            {
                "roll": "49-88",
                "reward": "1d4 gems"
            },
            {
                "roll": "89-100",
                "reward": "1d4 art"
            }
        ],
        "8": [
            {
                "roll": "01-45",
                "reward": "No goods."
            },
            {
                "roll": "46-85",
                "reward": "1d6 gems"
            },
            {
                "roll": "86-100",
                "reward": "1d4 art"
            }
        ],
        "9": [
            {
                "roll": "01-40",
                "reward": "No goods."
            },
            {
                "roll": "41-80",
                "reward": "1d8 gems"
            },
            {
                "roll": "81-100",
                "reward": "1d4 art"
            }
        ],
        "10": [
            {
                "roll": "01-35",
                "reward": "No goods."
            },
            {
                "roll": "36-79",
                "reward": "1d8 gems"
            },
            {
                "roll": "80-100",
                "reward": "1d6 art"
            }
        ],
        "11": [
            {
                "roll": "01-24",
                "reward": "No goods."
            },
            {
                "roll": "25-74",
                "reward": "1d10 gems"
            },
            {
                "roll": "75-100",
                "reward": "1d6 art"
            }
        ],
        "12": [
            {
                "roll": "01-17",
                "reward": "No goods."
            },
            {
                "roll": "18-70",
                "reward": "1d10 gems"
            },
            {
                "roll": "71-100",
                "reward": "1d8 art"
            }
        ],
        "13": [
            {
                "roll": "01-11",
                "reward": "No goods."
            },
            {
                "roll": "12-66",
                "reward": "1d12 gems"
            },
            {
                "roll": "67-100",
                "reward": "1d10 art"
            }
        ],
        "14": [
            {
                "roll": "01-11",
                "reward": "No goods."
            },
            {
                "roll": "12-66",
                "reward": "2d8 gems"
            },
            {
                "roll": "67-100",
                "reward": "2d6 art"
            }
        ],
        "15": [
            {
                "roll": "01-09",
                "reward": "No goods."
            },
            {
                "roll": "10-65",
                "reward": "2d10 gems"
            },
            {
                "roll": "66-100",
                "reward": "2d8 art"
            }
        ],
        "16": [
            {
                "roll": "01-07",
                "reward": "No goods."
            },
            {
                "roll": "08-64",
                "reward": "4d6 gems"
            },
            {
                "roll": "65-100",
                "reward": "2d10 art"
            }
        ],
        "17": [
            {
                "roll": "01-04",
                "reward": "No goods."
            },
            {
                "roll": "05-63",
                "reward": "4d8 gems"
            },
            {
                "roll": "64-100",
                "reward": "3d8 art"
            }
        ],
        "18": [
            {
                "roll": "01-04",
                "reward": "No goods."
            },
            {
                "roll": "05-54",
                "reward": "3d12 gems"
            },
            {
                "roll": "55-100",
                "reward": "3d10 art"
            }
        ],
        "19": [
            {
                "roll": "01-03",
                "reward": "No goods."
            },
            {
                "roll": "04-50",
                "reward": "6d6 gems"
            },
            {
                "roll": "51-100",
                "reward": "6d6 art"
            }
        ],
        "20": [
            {
                "roll": "01-02",
                "reward": "No goods."
            },
            {
                "roll": "03-38",
                "reward": "4d10 gems"
            },
            {
                "roll": "39-100",
                "reward": "7d6 art"
            }
        ]
    },
    "items": {
        "1": [
            {
                "roll": "01-71",
                "reward": "No items."
            },
            {
                "roll": "72-95",
                "reward": "1 mundane"
            },
            {
                "roll": "96-100",
                "reward": "1 minor"
            }
        ],
        "2": [
            {
                "roll": "01-49",
                "reward": "No items."
            },
            {
                "roll": "50-85",
                "reward": "1 mundane"
            },
            {
                "roll": "86-100",
                "reward": "1 minor"
            }
        ],
        "3": [
            {
                "roll": "01-49",
                "reward": "No items."
            },
            {
                "roll": "50-79",
                "reward": "1d3 mundane"
            },
            {
                "roll": "80-100",
                "reward": "1 minor"
            }
        ],
        "4": [
            {
                "roll": "01-42",
                "reward": "No items."
            },
            {
                "roll": "43-62",
                "reward": "1d4 mundane"
            },
            {
                "roll": "63-100",
                "reward": "1 minor"
            }
        ],
        "5": [
            {
                "roll": "01-57",
                "reward": "No items."
            },
            {
                "roll": "58-67",
                "reward": "1d4 mundane"
            },
            {
                "roll": "68-100",
                "reward": "1d3 minor"
            }
        ],
        "6": [
            {
                "roll": "01-54",
                "reward": "No items."
            },
            {
                "roll": "55-59",
                "reward": "1d4 mundane"
            },
            {
                "roll": "60-99",
                "reward": "1d3 minor"
            },
            {
                "roll": "100",
                "reward": "1 medium"
            }
        ],
        "7": [
            {
                "roll": "01-51",
                "reward": "No items."
            },
            {
                "roll": "52-97",
                "reward": "1d3 minor"
            },
            {
                "roll": "98-100",
                "reward": "1 medium"
            }
        ],
        "8": [
            {
                "roll": "01-48",
                "reward": "No items."
            },
            {
                "roll": "49-96",
                "reward": "1d4 minor"
            },
            {
                "roll": "97-100",
                "reward": "1 medium"
            }
        ],
        "9": [
            {
                "roll": "01-43",
                "reward": "No items."
            },
            {
                "roll": "44-91",
                "reward": "1d4 minor"
            },
            {
                "roll": "92-100",
                "reward": "1 medium"
            }
        ],
        "10": [
            {
                "roll": "01-40",
                "reward": "No items."
            },
            {
                "roll": "41-88",
                "reward": "1d4 minor"
            },
            {
                "roll": "89-99",
                "reward": "1 medium"
            },
            {
                "roll": "100",
                "reward": "1 major"
            }
        ],
        "11": [
            {
                "roll": "01-31",
                "reward": "No items."
            },
            {
                "roll": "32-84",
                "reward": "1d4 minor"
            },
            {
                "roll": "85-98",
                "reward": "1 medium"
            },
            {
                "roll": "99-100",
                "reward": "1 major"
            }
        ],
        "12": [
            {
                "roll": "01-27",
                "reward": "No items."
            },
            {
                "roll": "28-82",
                "reward": "1d6 minor"
            },
            {
                "roll": "83-97",
                "reward": "1 medium"
            },
            {
                "roll": "98-100",
                "reward": "1 major"
            }
        ],
        "13": [
            {
                "roll": "01-19",
                "reward": "No items."
            },
            {
                "roll": "20-73",
                "reward": "1d6 minor"
            },
            {
                "roll": "74-95",
                "reward": "1 medium"
            },
            {
                "roll": "96-100",
                "reward": "1 major"
            }
        ],
        "14": [
            {
                "roll": "01-19",
                "reward": "No items."
            },
            {
                "roll": "20-58",
                "reward": "1d6 minor"
            },
            {
                "roll": "59-92",
                "reward": "1 medium"
            },
            {
                "roll": "93-100",
                "reward": "1 major"
            }
        ],
        "15": [
            {
                "roll": "01-11",
                "reward": "No items."
            },
            {
                "roll": "12-46",
                "reward": "1d10 minor"
            },
            {
                "roll": "47-90",
                "reward": "1 medium"
            },
            {
                "roll": "91-100",
                "reward": "1 major"
            }
        ],
        "16": [
            {
                "roll": "01-40",
                "reward": "No items."
            },
            {
                "roll": "41-46",
                "reward": "1d10 minor"
            },
            {
                "roll": "47-90",
                "reward": "1d3 medium"
            },
            {
                "roll": "91-100",
                "reward": "1 major"
            }
        ],
        "17": [
            {
                "roll": "01-33",
                "reward": "No items."
            },
            {
                "roll": "34-83",
                "reward": "1d3 medium"
            },
            {
                "roll": "84-100",
                "reward": "1 major"
            }
        ],
        "18": [
            {
                "roll": "01-24",
                "reward": "No items."
            },
            {
                "roll": "25-80",
                "reward": "1d4 medium"
            },
            {
                "roll": "81-100",
                "reward": "1 major"
            }
        ],
        "19": [
            {
                "roll": "01-04",
                "reward": "No items."
            },
            {
                "roll": "05-70",
                "reward": "1d4 medium"
            },
            {
                "roll": "71-100",
                "reward": "1 major"
            }
        ],
        "20": [
            {
                "roll": "01-25",
                "reward": "No items."
            },
            {
                "roll": "26-65",
                "reward": "1d4 medium"
            },
            {
                "roll": "66-100",
                "reward": "1d3 major"
            }
        ]
    },
    "gems": [
        {
            "roll": "01-25",
            "reward": "4d4 gp",
            "examples": [
                "Banded, eye, or moss agate",
                "azurite",
                "blue quartz",
                "hematite",
                "lapis lazuli",
                "malachite",
                "obsidian",
                "rhodochrosite",
                "tiger eye turquoise",
                "freshwater (irregular) pearl"
            ]
        },
        {
            "roll": "26-50",
            "reward": "2d4 x 10 gp",
            "examples": [
                "Bloodstone",
                "carnelian",
                "chalcedony",
                "chrysoprase",
                "citrine",
                "iolite, jasper",
                "moonstone",
                "onyx",
                "peridot",
                "rock crystal (clear quartz)",
                "sard",
                "sardonyx",
                "rose, smoky, or star rose quartz",
                "zircon"
            ]
        },
        {
            "roll": "51-70",
            "reward": "4d4 x 10 gp",
            "examples": [
                "Amber",
                "amethyst",
                "chrysoberyl",
                "coral",
                "red or brown-green garnet",
                "jade",
                "jet",
                "white, golden, pink, or silver pearl",
                "red spinel, red-brown or deep green spinel",
                "tourmaline"
            ]
        },
        {
            "roll": "71-90",
            "reward": "2d4 x 100 gp",
            "examples": [
                "Alexandrite",
                "aquamarine",
                "violet garnet",
                "black pearl",
                "deep blue spinel",
                "golden yellow topaz"
            ]
        },
        {
            "roll": "91-99",
            "reward": "4d4 x 100 gp",
            "examples": [
                "Emerald",
                "white, black, or fire opal",
                "blue sapphire",
                "fiery yellow or rich purple corundum",
                "blue or black star sapphire",
                "star ruby"
            ]
        },
        {
            "roll": "100",
            "reward": "2d4 x 1,000 gp",
            "examples": [
                "Clearest bright green emerald",
                "blue-white, canary, pink, brown, or blue diamond",
                "jacinth"
            ]
        }
    ],
    "art": [
        {
            "roll": "01-10",
            "reward": "1d10 x 10 gp",
            "examples": [
                "Silver ewer",
                "carved bone or ivory statuette",
                "finely wrought small gold bracelet"
            ]
        },
        {
            "roll": "11-25",
            "reward": "3d6 x 10 gp",
            "examples": [
                "Cloth of gold vestments",
                "black velvet mask with numerous citrines",
                "silver chalice with lapis lazuli gems"
            ]
        },
        {
            "roll": "26-40",
            "reward": "1d6 x 100 gp",
            "examples": [
                "Large well-done wool tapestry",
                "brass mug with jade inlays"
            ]
        },
        {
            "roll": "41-50",
            "reward": "1d10 x 100 gp",
            "examples": [
                "Silver comb with moonstones",
                "silver-plated steel longsword with jet jewel in hilt"
            ]
        },
        {
            "roll": "51-60",
            "reward": "2d6 x 100 gp",
            "examples": [
                "Carved harp of exotic wood with ivory inlay and zircon gems",
                "solid gold idol (10 lb.)"
            ]
        },
        {
            "roll": "61-70",
            "reward": "3d6 x 100 gp",
            "examples": [
                "Gold dragon comb with red garnet eye",
                "gold and topaz bottle stopper cork",
                "ceremonial electrum dagger with a star ruby in the pommel"
            ]
        },
        {
            "roll": "71-80",
            "reward": "4d6 x 100 gp",
            "examples": [
                "Eyepatch with mock eye of sapphire and moonstone",
                "fire opal pendant on a fine gold chain",
                "old masterpiece painting"
            ]
        },
        {
            "roll": "81-85",
            "reward": "5d6 x 100 gp",
            "examples": [
                "Embroidered silk and velvet mantle with numerous moonstones",
                "sapphire pendant on gold chain"
            ]
        },
        {
            "roll": "86-90",
            "reward": "1d4 x 1,000 gp",
            "examples": [
                "Embroidered and bejeweled glove",
                "jeweled anklet",
                "gold music box"
            ]
        },
        {
            "roll": "91-95",
            "reward": "1d6 x 1,000 gp",
            "examples": [
                "Golden circlet with four aquamarines",
                "a string of small pink pearls (necklace)"
            ]
        },
        {
            "roll": "96-99",
            "reward": "2d4 x 1,000 gp",
            "examples": [
                "Jeweled gold crown",
                "jeweled electrum ring"
            ]
        },
        {
            "roll": "100",
            "reward": "2d6 x 1,000 gp",
            "examples": [
                "Gold and ruby ring",
                "gold cup set with emeralds"
            ]
        }
    ],
    "minorWondrousItems": [
        {
            "roll": "01",
            "reward": "Feather token, anchor",
            "marketPrice": "50 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#anchor"
        },
        {
            "roll": "02",
            "reward": "Universal solvent",
            "marketPrice": "50 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#universalSolvent"
        },
        {
            "roll": "03",
            "reward": "Elixir of love",
            "marketPrice": "150 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofLove"
        },
        {
            "roll": "04",
            "reward": "Unguent of timelessness",
            "marketPrice": "150 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#unguentofTimelessness"
        },
        {
            "roll": "05",
            "reward": "Feather token, fan",
            "marketPrice": "200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#fan"
        },
        {
            "roll": "06",
            "reward": "Dust of tracelessness",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dustofTracelessness"
        },
        {
            "roll": "07",
            "reward": "Elixir of hiding",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofHiding"
        },
        {
            "roll": "08",
            "reward": "Elixir of sneaking",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofSneaking"
        },
        {
            "roll": "09",
            "reward": "Elixir of swimming",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofSwimming"
        },
        {
            "roll": "10",
            "reward": "Elixir of vision",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofVision"
        },
        {
            "roll": "11",
            "reward": "Silversheen",
            "marketPrice": "250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#silversheen"
        },
        {
            "roll": "12",
            "reward": "Feather token, bird",
            "marketPrice": "300 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bird"
        },
        {
            "roll": "13",
            "reward": "Feather token, tree",
            "marketPrice": "400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tree"
        },
        {
            "roll": "14",
            "reward": "Feather token, swan boat",
            "marketPrice": "450 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#swanBoat"
        },
        {
            "roll": "15",
            "reward": "Elixir of truth",
            "marketPrice": "500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofTruth"
        },
        {
            "roll": "16",
            "reward": "Feather token, whip",
            "marketPrice": "500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#whip"
        },
        {
            "roll": "17",
            "reward": "Dust of dryness",
            "marketPrice": "850 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dustofDryness"
        },
        {
            "roll": "18",
            "reward": "Bag of tricks, gray",
            "marketPrice": "900 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofTricks"
        },
        {
            "roll": "19",
            "reward": "Hand of the mage",
            "marketPrice": "900 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#handoftheMage"
        },
        {
            "roll": "20",
            "reward": "Bracers of armor +1",
            "marketPrice": "1,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "21",
            "reward": "Cloak of resistance +1",
            "marketPrice": "1,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofResistance"
        },
        {
            "roll": "22",
            "reward": "Pearl of power, 1st-level spell",
            "marketPrice": "1,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "23",
            "reward": "Phylactery of faithfulness",
            "marketPrice": "1,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#phylacteryofFaithfulness"
        },
        {
            "roll": "24",
            "reward": "Salve of slipperiness",
            "marketPrice": "1,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#salveofSlipperiness"
        },
        {
            "roll": "25",
            "reward": "Elixir of fire breath",
            "marketPrice": "1,100 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elixirofFireBreath"
        },
        {
            "roll": "26",
            "reward": "Pipes of the sewers",
            "marketPrice": "1,150 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pipesoftheSewers"
        },
        {
            "roll": "27",
            "reward": "Dust of illusion",
            "marketPrice": "1,200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dustofIllusion"
        },
        {
            "roll": "28",
            "reward": "Goggles of minute seeing",
            "marketPrice": "1,250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gogglesofMinuteSeeing"
        },
        {
            "roll": "29",
            "reward": "Brooch of shielding",
            "marketPrice": "1,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#broochofShielding"
        },
        {
            "roll": "30",
            "reward": "Necklace of fireballs type I",
            "marketPrice": "1,650 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "31",
            "reward": "Dust of appearance",
            "marketPrice": "1,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dustofAppearance"
        },
        {
            "roll": "32",
            "reward": "Hat of disguise",
            "marketPrice": "1,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hatofDisguise"
        },
        {
            "roll": "33",
            "reward": "Pipes of sounding",
            "marketPrice": "1,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pipesofSounding"
        },
        {
            "roll": "34",
            "reward": "Efficient quiver",
            "marketPrice": "1,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#efficientQuiver"
        },
        {
            "roll": "35",
            "reward": "Amulet of natural armor +1",
            "marketPrice": "2,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofNaturalArmor"
        },
        {
            "roll": "36",
            "reward": "Handy haversack",
            "marketPrice": "2,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#handyHaversack"
        },
        {
            "roll": "37",
            "reward": "Horn of fog",
            "marketPrice": "2,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornofFog"
        },
        {
            "roll": "38",
            "reward": "Elemental gem",
            "marketPrice": "2,250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#elementalGem"
        },
        {
            "roll": "39",
            "reward": "Robe of bones",
            "marketPrice": "2,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofBones"
        },
        {
            "roll": "40",
            "reward": "Sovereign glue",
            "marketPrice": "2,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#sovereignGlue"
        },
        {
            "roll": "41",
            "reward": "Bag of holding type I",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofHolding"
        },
        {
            "roll": "42",
            "reward": "Boots of elvenkind",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsofElvenkind"
        },
        {
            "roll": "43",
            "reward": "Boots of the winterlands",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsoftheWinterlands"
        },
        {
            "roll": "44",
            "reward": "Candle of truth",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#candleofTruth"
        },
        {
            "roll": "45",
            "reward": "Cloak of elvenkind",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofElvenkind"
        },
        {
            "roll": "46",
            "reward": "Eyes of the eagle",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#eyesoftheEagle"
        },
        {
            "roll": "47",
            "reward": "Scarab, golembane",
            "marketPrice": "2,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#scarabGolembane"
        },
        {
            "roll": "48",
            "reward": "Necklace of fireballs type II",
            "marketPrice": "2,700 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "49",
            "reward": "Stone of alarm",
            "marketPrice": "2,700 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneofAlarm"
        },
        {
            "roll": "50",
            "reward": "Bag of tricks, rust",
            "marketPrice": "3,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofTricks"
        },
        {
            "roll": "51",
            "reward": "Bead of force",
            "marketPrice": "3,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#beadofForce"
        },
        {
            "roll": "52",
            "reward": "Chime of opening",
            "marketPrice": "3,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#chimeofOpening"
        },
        {
            "roll": "53",
            "reward": "Horseshoes of speed",
            "marketPrice": "3,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#horseshoesofSpeed"
        },
        {
            "roll": "54",
            "reward": "Rope of climbing",
            "marketPrice": "3,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ropeofClimbing"
        },
        {
            "roll": "55",
            "reward": "Dust of disappearance",
            "marketPrice": "3,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dustofDisappearance"
        },
        {
            "roll": "56",
            "reward": "Lens of detection",
            "marketPrice": "3,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#lensofDetection"
        },
        {
            "roll": "57",
            "reward": "Figurine of wondrous power, silver raven",
            "marketPrice": "3,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#silverRaven"
        },
        {
            "roll": "58",
            "reward": "Amulet of health +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofHealth"
        },
        {
            "roll": "59",
            "reward": "Bracers of armor +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "60",
            "reward": "Cloak of Charisma +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofCharisma"
        },
        {
            "roll": "61",
            "reward": "Cloak of resistance +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofResistance"
        },
        {
            "roll": "62",
            "reward": "Gauntlets of ogre power",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gauntletsofOgrePower"
        },
        {
            "roll": "63",
            "reward": "Gloves of arrow snaring",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#glovesofArrowSnaring"
        },
        {
            "roll": "64",
            "reward": "Gloves of Dexterity +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#glovesofDexterity"
        },
        {
            "roll": "65",
            "reward": "Headband of intellect +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#headbandofIntellect"
        },
        {
            "roll": "66",
            "reward": "Ioun stone, clear spindle",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "67",
            "reward": "Restorative ointment",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#restorativeOintment"
        },
        {
            "roll": "68",
            "reward": "Marvelous pigments",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#marvelousPigments"
        },
        {
            "roll": "69",
            "reward": "Pearl of power, 2nd-level spell",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "70",
            "reward": "Periapt of Wisdom +2",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofWisdom"
        },
        {
            "roll": "71",
            "reward": "Stone salve",
            "marketPrice": "4,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneSalve"
        },
        {
            "roll": "72",
            "reward": "Necklace of fireballs type III",
            "marketPrice": "4,350 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "73",
            "reward": "Circlet of persuasion",
            "marketPrice": "4,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#circletofPersuasion"
        },
        {
            "roll": "74",
            "reward": "Slippers of spider climbing",
            "marketPrice": "4,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#slippersofSpiderClimbing"
        },
        {
            "roll": "75",
            "reward": "Incense of meditation",
            "marketPrice": "4,900 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#incenseofMeditation"
        },
        {
            "roll": "76",
            "reward": "Bag of holding type II",
            "marketPrice": "5,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofHolding"
        },
        {
            "roll": "77",
            "reward": "Bracers of archery, lesser",
            "marketPrice": "5,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArcheryLesser"
        },
        {
            "roll": "78",
            "reward": "Ioun stone, dusty rose prism",
            "marketPrice": "5,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "79",
            "reward": "Helm of comprehend languages and read magic",
            "marketPrice": "5,200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#helmofComprehendLanguagesandReadMagic"
        },
        {
            "roll": "80",
            "reward": "Vest of escape",
            "marketPrice": "5,200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#vestofEscape"
        },
        {
            "roll": "81",
            "reward": "Eversmoking bottle",
            "marketPrice": "5,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#eversmokingBottle"
        },
        {
            "roll": "82",
            "reward": "Sustaining spoon",
            "marketPrice": "5,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#sustainingSpoon"
        },
        {
            "roll": "83",
            "reward": "Necklace of fireballs type IV",
            "marketPrice": "5,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "84",
            "reward": "Boots of striding and springing",
            "marketPrice": "5,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsofStridingandSpringing"
        },
        {
            "roll": "85",
            "reward": "Wind fan",
            "marketPrice": "5,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#windFan"
        },
        {
            "roll": "86",
            "reward": "Necklace of fireballs type V",
            "marketPrice": "5,850 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "87",
            "reward": "Amulet of mighty fists +1",
            "marketPrice": "6,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofMightyFists"
        },
        {
            "roll": "88",
            "reward": "Horseshoes of a zephyr",
            "marketPrice": "6,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#horseshoesofaZephyr"
        },
        {
            "roll": "89",
            "reward": "Pipes of haunting",
            "marketPrice": "6,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pipesofHaunting"
        },
        {
            "roll": "90",
            "reward": "Gloves of swimming and climbing",
            "marketPrice": "6,250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#glovesofSwimmingandClimbing"
        },
        {
            "roll": "91",
            "reward": "Bag of tricks, tan",
            "marketPrice": "6,300 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofTricks"
        },
        {
            "roll": "92",
            "reward": "Circlet of blasting, minor",
            "marketPrice": "6,480 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#circletofBlastingMinor"
        },
        {
            "roll": "93",
            "reward": "Horn of goodness/evil",
            "marketPrice": "6,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornofGoodnessEvil"
        },
        {
            "roll": "94",
            "reward": "Shrouds of disintegration",
            "marketPrice": "6,600 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#shroudsofDisintegration"
        },
        {
            "roll": "95",
            "reward": "Robe of useful items",
            "marketPrice": "7,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofUsefulItems"
        },
        {
            "roll": "96",
            "reward": "Boat, folding",
            "marketPrice": "7,200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#boatFolding"
        },
        {
            "roll": "97",
            "reward": "Cloak of the manta ray",
            "marketPrice": "7,200 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakoftheMantaRay"
        },
        {
            "roll": "98",
            "reward": "Bottle of air",
            "marketPrice": "7,250 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bottleofAir"
        },
        {
            "roll": "99",
            "reward": "Bag of holding type III",
            "marketPrice": "7,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofHolding"
        },
        {
            "roll": "100",
            "reward": "Periapt of health",
            "marketPrice": "7,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofHealth"
        }
    ],
    "mediumWondrousItems": [
        {
            "roll": "01",
            "reward": "Boots of levitation",
            "marketPrice": "7,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsofLevitation"
        },
        {
            "roll": "02",
            "reward": "Harp of charming",
            "marketPrice": "7,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#harpofCharming"
        },
        {
            "roll": "03",
            "reward": "Amulet of natural armor +2",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofNaturalArmor"
        },
        {
            "roll": "04",
            "reward": "Golem manual, flesh",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#fleshGolemManual"
        },
        {
            "roll": "05",
            "reward": "Hand of glory",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#handofGlory"
        },
        {
            "roll": "06",
            "reward": "Ioun stone, deep red sphere",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "07",
            "reward": "Ioun stone, incandescent blue sphere",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "08",
            "reward": "Ioun stone, pale blue rhomboid",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "09",
            "reward": "Ioun stone, pink and green sphere",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "10",
            "reward": "Ioun stone, pink rhomboid",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "11",
            "reward": "Ioun stone, scarlet and blue sphere",
            "marketPrice": "8,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "12",
            "reward": "Deck of illusions",
            "marketPrice": "8,100 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#deckofIllusions"
        },
        {
            "roll": "13",
            "reward": "Necklace of fireballs type VI",
            "marketPrice": "8,100 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "14",
            "reward": "Candle of invocation",
            "marketPrice": "8,400 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#candleofInvocation"
        },
        {
            "roll": "15",
            "reward": "Necklace of fireballs type VII",
            "marketPrice": "8,700 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofFireballs"
        },
        {
            "roll": "16",
            "reward": "Bracers of armor +3",
            "marketPrice": "9,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "17",
            "reward": "Cloak of resistance +3",
            "marketPrice": "9,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofResistance"
        },
        {
            "roll": "18",
            "reward": "Decanter of endless water",
            "marketPrice": "9,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#decanterofEndlessWater"
        },
        {
            "roll": "19",
            "reward": "Necklace of adaptation",
            "marketPrice": "9,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#necklaceofAdaptation"
        },
        {
            "roll": "20",
            "reward": "Pearl of power, 3rd-level spell",
            "marketPrice": "9,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "21",
            "reward": "Figurine of wondrous power, serpentine owl",
            "marketPrice": "9,100 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#serpentineOwl"
        },
        {
            "roll": "22",
            "reward": "Strand of prayer beads, lesser",
            "marketPrice": "9,600 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#strandofPrayerBeads"
        },
        {
            "roll": "23",
            "reward": "Bag of holding type IV",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bagofHolding"
        },
        {
            "roll": "24",
            "reward": "Figurine of wondrous power, bronze griffon",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bronzeGriffon"
        },
        {
            "roll": "25",
            "reward": "Figurine of wondrous power, ebony fly",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ebonyFly"
        },
        {
            "roll": "26",
            "reward": "Glove of storing",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gloveofStoring"
        },
        {
            "roll": "27",
            "reward": "Ioun stone, dark blue rhomboid",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "28",
            "reward": "Stone horse, courser",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneHorse"
        },
        {
            "roll": "29",
            "reward": "Vestment, druid’s",
            "marketPrice": "10,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#vestmentDruids"
        },
        {
            "roll": "30",
            "reward": "Cape of the mountebank",
            "marketPrice": "10,080 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#capeoftheMountebank"
        },
        {
            "roll": "31",
            "reward": "Phylactery of undead turning",
            "marketPrice": "11,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#phylacteryofUndeadTurning"
        },
        {
            "roll": "32",
            "reward": "Gauntlet of rust",
            "marketPrice": "11,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gauntletofRust"
        },
        {
            "roll": "33",
            "reward": "Boots of speed",
            "marketPrice": "12,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsofSpeed"
        },
        {
            "roll": "34",
            "reward": "Goggles of night",
            "marketPrice": "12,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gogglesofNight"
        },
        {
            "roll": "35",
            "reward": "Golem manual, clay",
            "marketPrice": "12,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#clayGolemManual"
        },
        {
            "roll": "36",
            "reward": "Medallion of thoughts",
            "marketPrice": "12,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#medallionofThoughts"
        },
        {
            "roll": "37",
            "reward": "Pipes of pain",
            "marketPrice": "12,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pipesofPain"
        },
        {
            "roll": "38",
            "reward": "Blessed book",
            "marketPrice": "12,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#blessedBook"
        },
        {
            "roll": "39",
            "reward": "Belt, monk’s",
            "marketPrice": "13,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#beltMonks"
        },
        {
            "roll": "40",
            "reward": "Gem of brightness",
            "marketPrice": "13,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gemofBrightness"
        },
        {
            "roll": "41",
            "reward": "Lyre of building",
            "marketPrice": "13,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#lyreofBuilding"
        },
        {
            "roll": "42",
            "reward": "Cloak of arachnida",
            "marketPrice": "14,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofArachnida"
        },
        {
            "roll": "43",
            "reward": "Stone horse, destrier",
            "marketPrice": "14,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneHorse"
        },
        {
            "roll": "44",
            "reward": "Belt of dwarvenkind",
            "marketPrice": "14,900 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#beltofDwarvenkind"
        },
        {
            "roll": "45",
            "reward": "Periapt of wound closure",
            "marketPrice": "15,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofWoundClosure"
        },
        {
            "roll": "46",
            "reward": "Horn of the tritons",
            "marketPrice": "15,100 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornoftheTritons"
        },
        {
            "roll": "47",
            "reward": "Pearl of the sirines",
            "marketPrice": "15,300 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearloftheSirines"
        },
        {
            "roll": "48",
            "reward": "Figurine of wondrous power, onyx dog",
            "marketPrice": "15,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#onyxDog"
        },
        {
            "roll": "49",
            "reward": "Amulet of health +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofHealth"
        },
        {
            "roll": "50",
            "reward": "Belt of giant Strength +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#beltofGiantStrength"
        },
        {
            "roll": "51",
            "reward": "Boots, winged",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsWinged"
        },
        {
            "roll": "52",
            "reward": "Bracers of armor +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "53",
            "reward": "Cloak of Charisma +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofCharisma"
        },
        {
            "roll": "54",
            "reward": "Cloak of resistance +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofResistance"
        },
        {
            "roll": "55",
            "reward": "Gloves of Dexterity +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#glovesofDexterity"
        },
        {
            "roll": "56",
            "reward": "Headband of intellect +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#headbandofIntellect"
        },
        {
            "roll": "57",
            "reward": "Pearl of power, 4th-level spell",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "58",
            "reward": "Periapt of Wisdom +4",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofWisdom"
        },
        {
            "roll": "59",
            "reward": "Scabbard of keen edges",
            "marketPrice": "16,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#scabbardofKeenEdges"
        },
        {
            "roll": "60",
            "reward": "Figurine of wondrous power, golden lions",
            "marketPrice": "16,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#goldenLions"
        },
        {
            "roll": "61",
            "reward": "Chime of interruption",
            "marketPrice": "16,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#chimeofInterruption"
        },
        {
            "roll": "62",
            "reward": "Broom of flying",
            "marketPrice": "17,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#broomofFlying"
        },
        {
            "roll": "63",
            "reward": "Figurine of wondrous power, marble elephant",
            "marketPrice": "17,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#marbleElephant"
        },
        {
            "roll": "64",
            "reward": "Amulet of natural armor +3",
            "marketPrice": "18,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofNaturalArmor"
        },
        {
            "roll": "65",
            "reward": "Ioun stone, iridescent spindle",
            "marketPrice": "18,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "66",
            "reward": "Bracelet of friends",
            "marketPrice": "19,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#braceletofFriends"
        },
        {
            "roll": "67",
            "reward": "Carpet of flying, 5 ft. by 5 ft.",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#carpetofFlying"
        },
        {
            "roll": "68",
            "reward": "Horn of blasting",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornofBlasting"
        },
        {
            "roll": "69",
            "reward": "Ioun stone, pale lavender ellipsoid",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "70",
            "reward": "Ioun stone, pearly white spindle",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "71",
            "reward": "Portable hole",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#portableHole"
        },
        {
            "roll": "72",
            "reward": "Stone of good luck (luckstone)",
            "marketPrice": "20,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneofGoodLuckLuckstone"
        },
        {
            "roll": "73",
            "reward": "Figurine of wondrous power, ivory goats",
            "marketPrice": "21,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ivoryGoats"
        },
        {
            "roll": "74",
            "reward": "Rope of entanglement",
            "marketPrice": "21,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ropeofEntanglement"
        },
        {
            "roll": "75",
            "reward": "Golem manual, stone",
            "marketPrice": "22,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneGolemManual"
        },
        {
            "roll": "76",
            "reward": "Mask of the skull",
            "marketPrice": "22,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#maskoftheSkull"
        },
        {
            "roll": "77",
            "reward": "Mattock of the titans",
            "marketPrice": "23,348 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mattockoftheTitans"
        },
        {
            "roll": "78",
            "reward": "Circlet of blasting, major",
            "marketPrice": "23,760 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#circletofBlastingMajor"
        },
        {
            "roll": "79",
            "reward": "Amulet of mighty fists +2",
            "marketPrice": "24,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofMightyFists"
        },
        {
            "roll": "80",
            "reward": "Cloak of displacement, minor",
            "marketPrice": "24,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofDisplacementMinor"
        },
        {
            "roll": "81",
            "reward": "Helm of underwater action",
            "marketPrice": "24,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#helmofUnderwaterAction"
        },
        {
            "roll": "82",
            "reward": "Bracers of archery, greater",
            "marketPrice": "25,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArcheryGreater"
        },
        {
            "roll": "83",
            "reward": "Bracers of armor +5",
            "marketPrice": "25,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "84",
            "reward": "Cloak of resistance +5",
            "marketPrice": "25,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofResistance"
        },
        {
            "roll": "85",
            "reward": "Eyes of doom",
            "marketPrice": "25,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#eyesofDoom"
        },
        {
            "roll": "86",
            "reward": "Pearl of power, 5th-level spell",
            "marketPrice": "25,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "87",
            "reward": "Maul of the titans",
            "marketPrice": "25,305 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mauloftheTitans"
        },
        {
            "roll": "88",
            "reward": "Strand of prayer beads",
            "marketPrice": "45,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#strandofPrayerBeads"
        },
        {
            "roll": "89",
            "reward": "Cloak of the bat",
            "marketPrice": "26,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakoftheBat"
        },
        {
            "roll": "90",
            "reward": "Iron bands of binding",
            "marketPrice": "26,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ironBandsofBinding"
        },
        {
            "roll": "91",
            "reward": "Cube of frost resistance",
            "marketPrice": "27,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cubeofFrostResistance"
        },
        {
            "roll": "92",
            "reward": "Helm of telepathy",
            "marketPrice": "27,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#helmofTelepathy"
        },
        {
            "roll": "93",
            "reward": "Periapt of proof against poison",
            "marketPrice": "27,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofProofagainstPoison"
        },
        {
            "roll": "94",
            "reward": "Robe of scintillating colors",
            "marketPrice": "27,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofScintillatingColors"
        },
        {
            "roll": "95",
            "reward": "Manual of bodily health +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofBodilyHealth"
        },
        {
            "roll": "96",
            "reward": "Manual of gainful exercise +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofGainfulExercise"
        },
        {
            "roll": "97",
            "reward": "Manual of quickness of action +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofQuicknessofAction"
        },
        {
            "roll": "98",
            "reward": "Tome of clear thought +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofClearThought"
        },
        {
            "roll": "99",
            "reward": "Tome of leadership and influence +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofLeadershipandInfluence"
        },
        {
            "roll": "100",
            "reward": "Tome of understanding +1",
            "marketPrice": "27,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofUnderstanding"
        }
    ],
    "majorWondrousItems": [
        {
            "roll": "01",
            "reward": "Dimensional shackles",
            "marketPrice": "28,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#dimensionalShackles"
        },
        {
            "roll": "02",
            "reward": "Figurine of wondrous power, obsidian steed",
            "marketPrice": "28,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#obsidianSteed"
        },
        {
            "roll": "03",
            "reward": "Drums of panic",
            "marketPrice": "30,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#drumsofPanic"
        },
        {
            "roll": "04",
            "reward": "Ioun stone, orange",
            "marketPrice": "30,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "05",
            "reward": "Ioun stone, pale green prism",
            "marketPrice": "30,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "06",
            "reward": "Lantern of revealing",
            "marketPrice": "30,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#lanternofRevealing"
        },
        {
            "roll": "07",
            "reward": "Robe of blending",
            "marketPrice": "30,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofBlending"
        },
        {
            "roll": "08",
            "reward": "Amulet of natural armor +4",
            "marketPrice": "32,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofNaturalArmor"
        },
        {
            "roll": "09",
            "reward": "Amulet of proof against detection and location",
            "marketPrice": "35,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofProofagainstDetectionandLocation"
        },
        {
            "roll": "10",
            "reward": "Carpet of flying, 5 ft. by 10 ft.",
            "marketPrice": "35,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#carpetofFlying"
        },
        {
            "roll": "11",
            "reward": "Golem manual, iron",
            "marketPrice": "35,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ironGolemManual"
        },
        {
            "roll": "12",
            "reward": "Amulet of health +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofHealth"
        },
        {
            "roll": "13",
            "reward": "Belt of giant Strength +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#beltofGiantStrength"
        },
        {
            "roll": "14",
            "reward": "Bracers of armor +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "15",
            "reward": "Cloak of Charisma +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofCharisma"
        },
        {
            "roll": "16",
            "reward": "Gloves of Dexterity +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#glovesofDexterity"
        },
        {
            "roll": "17",
            "reward": "Headband of intellect +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#headbandofIntellect"
        },
        {
            "roll": "18",
            "reward": "Ioun stone, vibrant purple prism",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "19",
            "reward": "Pearl of power, 6th-level spell",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "20",
            "reward": "Periapt of Wisdom +6",
            "marketPrice": "36,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#periaptofWisdom"
        },
        {
            "roll": "21",
            "reward": "Scarab of protection",
            "marketPrice": "38,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#scarabofProtection"
        },
        {
            "roll": "22",
            "reward": "Ioun stone, lavender and green ellipsoid",
            "marketPrice": "40,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#iounStones"
        },
        {
            "roll": "23",
            "reward": "Ring gates",
            "marketPrice": "40,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ringGates"
        },
        {
            "roll": "24",
            "reward": "Crystal ball",
            "marketPrice": "42,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#crystalBall"
        },
        {
            "roll": "25",
            "reward": "Golem manual, greater stone",
            "marketPrice": "44,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneGolemManualGreater"
        },
        {
            "roll": "26",
            "reward": "Orb of storms",
            "marketPrice": "48,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#orbofStorms"
        },
        {
            "roll": "27",
            "reward": "Boots of teleportation",
            "marketPrice": "49,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bootsofTeleportation"
        },
        {
            "roll": "28",
            "reward": "Bracers of armor +7",
            "marketPrice": "49,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "29",
            "reward": "Pearl of power, 7th-level spell",
            "marketPrice": "49,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "30",
            "reward": "Amulet of natural armor +5",
            "marketPrice": "50,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofNaturalArmor"
        },
        {
            "roll": "31",
            "reward": "Cloak of displacement, major",
            "marketPrice": "50,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofDisplacementMajor"
        },
        {
            "roll": "32",
            "reward": "Crystal ball with see invisibility",
            "marketPrice": "50,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#crystalBall"
        },
        {
            "roll": "33",
            "reward": "Horn of Valhalla",
            "marketPrice": "50,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornofValhalla"
        },
        {
            "roll": "34",
            "reward": "Crystal ball with detect thoughts",
            "marketPrice": "51,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#crystalBall"
        },
        {
            "roll": "35",
            "reward": "Carpet of flying, 6 ft. by 9 ft.",
            "marketPrice": "53,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#carpetofFlying"
        },
        {
            "roll": "36",
            "reward": "Amulet of mighty fists +3",
            "marketPrice": "54,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofMightyFists"
        },
        {
            "roll": "37",
            "reward": "Wings of flying",
            "marketPrice": "54,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#wingsofFlying"
        },
        {
            "roll": "38",
            "reward": "Cloak of etherealness",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cloakofEtherealness"
        },
        {
            "roll": "39",
            "reward": "Instant fortress",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#instantFortress"
        },
        {
            "roll": "40",
            "reward": "Manual of bodily health +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofBodilyHealth"
        },
        {
            "roll": "41",
            "reward": "Manual of gainful exercise +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofGainfulExercise"
        },
        {
            "roll": "42",
            "reward": "Manual of quickness of action +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofQuicknessofAction"
        },
        {
            "roll": "43",
            "reward": "Tome of clear thought +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofClearThought"
        },
        {
            "roll": "44",
            "reward": "Tome of leadership and influence +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofLeadershipandInfluence"
        },
        {
            "roll": "45",
            "reward": "Tome of understanding +2",
            "marketPrice": "55,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofUnderstanding"
        },
        {
            "roll": "46",
            "reward": "Eyes of charming",
            "marketPrice": "56,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#eyesofCharming"
        },
        {
            "roll": "47",
            "reward": "Robe of stars",
            "marketPrice": "58,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofStars"
        },
        {
            "roll": "48",
            "reward": "Carpet of flying, 10 ft. by 10 ft.",
            "marketPrice": "60,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#carpetofFlying"
        },
        {
            "roll": "49",
            "reward": "Darkskull",
            "marketPrice": "60,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#darkskull"
        },
        {
            "roll": "50",
            "reward": "Cube of force",
            "marketPrice": "62,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cubeofForce"
        },
        {
            "roll": "51",
            "reward": "Bracers of armor +8",
            "marketPrice": "64,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bracersofArmor"
        },
        {
            "roll": "52",
            "reward": "Pearl of power, 8th-level spell",
            "marketPrice": "64,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "53",
            "reward": "Crystal ball with telepathy",
            "marketPrice": "70,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#crystalBall"
        },
        {
            "roll": "54",
            "reward": "Horn of blasting, greater",
            "marketPrice": "70,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#hornofBlastingGreater"
        },
        {
            "roll": "55",
            "reward": "Pearl of power, two spells",
            "marketPrice": "70,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "56",
            "reward": "Helm of teleportation",
            "marketPrice": "73,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#helmofTeleportation"
        },
        {
            "roll": "57",
            "reward": "Gem of seeing",
            "marketPrice": "75,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#gemofSeeing"
        },
        {
            "roll": "58",
            "reward": "Robe of the archmagi",
            "marketPrice": "75,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeoftheArchmagi"
        },
        {
            "roll": "59",
            "reward": "Mantle of faith",
            "marketPrice": "76,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mantleofFaith"
        },
        {
            "roll": "60",
            "reward": "Crystal ball with true seeing",
            "marketPrice": "80,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#crystalBall"
        },
        {
            "roll": "61",
            "reward": "Pearl of power, 9th-level spell",
            "marketPrice": "81,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#pearlofPower"
        },
        {
            "roll": "62",
            "reward": "Well of many worlds",
            "marketPrice": "82,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#wellofManyWorlds"
        },
        {
            "roll": "63",
            "reward": "Manual of bodily health +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofBodilyHealth"
        },
        {
            "roll": "64",
            "reward": "Manual of gainful exercise +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofGainfulExercise"
        },
        {
            "roll": "65",
            "reward": "Manual of quickness of action +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofQuicknessofAction"
        },
        {
            "roll": "66",
            "reward": "Tome of clear thought +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofClearThought"
        },
        {
            "roll": "67",
            "reward": "Tome of leadership and influence +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofLeadershipandInfluence"
        },
        {
            "roll": "68",
            "reward": "Tome of understanding +3",
            "marketPrice": "82,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofUnderstanding"
        },
        {
            "roll": "69",
            "reward": "Apparatus of the crab",
            "marketPrice": "90,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#apparatusoftheCrab"
        },
        {
            "roll": "70",
            "reward": "Mantle of spell resistance",
            "marketPrice": "90,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mantleofSpellResistance"
        },
        {
            "roll": "71",
            "reward": "Mirror of opposition",
            "marketPrice": "92,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mirrorofOpposition"
        },
        {
            "roll": "72",
            "reward": "Strand of prayer beads, greater",
            "marketPrice": "95,800 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#strandofPrayerBeads"
        },
        {
            "roll": "73",
            "reward": "Amulet of mighty fists +4",
            "marketPrice": "96,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofMightyFists"
        },
        {
            "roll": "74",
            "reward": "Eyes of petrification",
            "marketPrice": "98,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#eyesofPetrification"
        },
        {
            "roll": "75",
            "reward": "Bowl of commanding water elementals",
            "marketPrice": "100,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#bowlofCommandingWaterElementals"
        },
        {
            "roll": "76",
            "reward": "Brazier of commanding fire elementals",
            "marketPrice": "100,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#brazierofCommandingFireElementals"
        },
        {
            "roll": "77",
            "reward": "Censer of controlling air elementals",
            "marketPrice": "100,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#censerofControllingAirElementals"
        },
        {
            "roll": "78",
            "reward": "Stone of controlling earth elementals",
            "marketPrice": "100,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#stoneofControllingEarthElementals"
        },
        {
            "roll": "79",
            "reward": "Manual of bodily health +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofBodilyHealth"
        },
        {
            "roll": "80",
            "reward": "Manual of gainful exercise +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofGainfulExercise"
        },
        {
            "roll": "81",
            "reward": "Manual of quickness of action +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofQuicknessofAction"
        },
        {
            "roll": "82",
            "reward": "Tome of clear thought +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofClearThought"
        },
        {
            "roll": "83",
            "reward": "Tome of leadership and influence +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofLeadershipandInfluence"
        },
        {
            "roll": "84",
            "reward": "Tome of understanding +4",
            "marketPrice": "110,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofUnderstanding"
        },
        {
            "roll": "85",
            "reward": "Amulet of the planes",
            "marketPrice": "120,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofthePlanes"
        },
        {
            "roll": "86",
            "reward": "Robe of eyes",
            "marketPrice": "120,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#robeofEyes"
        },
        {
            "roll": "87",
            "reward": "Helm of brilliance",
            "marketPrice": "125,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#helmofBrilliance"
        },
        {
            "roll": "88",
            "reward": "Manual of bodily health +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofBodilyHealth"
        },
        {
            "roll": "89",
            "reward": "Manual of gainful exercise +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofGainfulExercise"
        },
        {
            "roll": "90",
            "reward": "Manual of quickness of action +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#manualofQuicknessofAction"
        },
        {
            "roll": "91",
            "reward": "Tome of clear thought +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofClearThought"
        },
        {
            "roll": "92",
            "reward": "Tome of leadership and influence +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofLeadershipandInfluence"
        },
        {
            "roll": "93",
            "reward": "Tome of understanding +5",
            "marketPrice": "137,500 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#tomeofUnderstanding"
        },
        {
            "roll": "94",
            "reward": "Efreeti bottle",
            "marketPrice": "145,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#efreetiBottle"
        },
        {
            "roll": "95",
            "reward": "Amulet of mighty fists +5",
            "marketPrice": "150,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#amuletofMightyFists"
        },
        {
            "roll": "96",
            "reward": "Chaos diamond",
            "marketPrice": "160,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#chaosDiamond"
        },
        {
            "roll": "97",
            "reward": "Cubic gate",
            "marketPrice": "164,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#cubicGate"
        },
        {
            "roll": "98",
            "reward": "Iron flask",
            "marketPrice": "170,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#ironFlask"
        },
        {
            "roll": "99",
            "reward": "Mirror of mental prowess",
            "marketPrice": "175,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mirrorofMentalProwess"
        },
        {
            "roll": "100",
            "reward": "Mirror of life trapping",
            "marketPrice": "200,000 gp",
            "link": "http://www.d20srd.org/srd/magicItems/wondrousItems.htm#mirrorofLifeTrapping"
        }
    ],
    "mundaneWondrousItems": [
        {
            "roll": "01-17",
            "reward": "Alchemical item"
        },
        {
            "roll": "18-50",
            "reward": "Armor (roll d%: 01-10 = Small, 11-100 = Medium)"
        },
        {
            "roll": "51-83",
            "reward": "Weapons"
        },
        {
            "roll": "84-100",
            "reward": "Tools and gear"
        }
    ],
    "alchemyItems": [
        {
            "roll": "01-12",
            "reward": "Alchemist’s fire (1d4 flasks, 20 gp each)"
        },
        {
            "roll": "13-24",
            "reward": "Acid (2d4 flasks, 10 gp each)"
        },
        {
            "roll": "25-36",
            "reward": "Smokesticks (1d4 sticks, 20 gp each)"
        },
        {
            "roll": "37-48",
            "reward": "Holy water (1d4 flasks, 25 gp each)"
        },
        {
            "roll": "49-62",
            "reward": "Antitoxin (1d4 doses, 50 gp each)"
        },
        {
            "roll": "63-74",
            "reward": "Everburning torch"
        },
        {
            "roll": "75-88",
            "reward": "Tanglefoot bags (1d4 bags, 50 gp each)"
        },
        {
            "roll": "89-100",
            "reward": "Thunderstones (1d4 stones, 30 gp each)"
        }
    ],
    "armorItems": [
        {
            "roll": "01-12",
            "reward": "Chain shirt (100 gp)"
        },
        {
            "roll": "13-18",
            "reward": "Masterwork studded leather (175 gp)"
        },
        {
            "roll": "19-26",
            "reward": "Breastplate (200 gp)"
        },
        {
            "roll": "27-34",
            "reward": "Banded mail (250 gp)"
        },
        {
            "roll": "35-54",
            "reward": "Half-plate (600 gp)"
        },
        {
            "roll": "55-80",
            "reward": "Full plate (1,500 gp)"
        },
        {
            "roll": "81-90",
            "reward": "Darkwood"
        },
        {
            "roll": "91-100",
            "reward": "Masterwork shield"
        }
    ],
    "weaponItems": [
        {
            "roll": "01-50",
            "reward": "Masterwork common melee weapon"
        },
        {
            "roll": "51-70",
            "reward": "Masterwork uncommon weapon"
        },
        {
            "roll": "71-100",
            "reward": "Masterwork common ranged weapon"
        }
    ],
    "toolItems": [
        {
            "roll": "01-03",
            "reward": "Backpack, empty (2 gp)"
        },
        {
            "roll": "04-06",
            "reward": "Crowbar (2 gp)"
        },
        {
            "roll": "07-11",
            "reward": "Lantern, bullseye (12 gp)"
        },
        {
            "roll": "12-16",
            "reward": "Lock, simple (20 gp)"
        },
        {
            "roll": "17-21",
            "reward": "Lock, average (40 gp)"
        },
        {
            "roll": "22-28",
            "reward": "Lock, good (80 gp)"
        },
        {
            "roll": "29-35",
            "reward": "Lock, superior (150 gp)"
        },
        {
            "roll": "36-40",
            "reward": "Manacles, masterwork (50 gp)"
        },
        {
            "roll": "41-43",
            "reward": "Mirror, small steel (10 gp)"
        },
        {
            "roll": "44-46",
            "reward": "Rope, silk (50 ft.) (10 gp)"
        },
        {
            "roll": "47-53",
            "reward": "Spyglass (1,000 gp)"
        },
        {
            "roll": "54-58",
            "reward": "Artisan’s tools, masterwork (55 gp)"
        },
        {
            "roll": "59-63",
            "reward": "Climber’s kit (80 gp)"
        },
        {
            "roll": "64-68",
            "reward": "Disguise kit (50 gp)"
        },
        {
            "roll": "69-73",
            "reward": "Healer’s kit (50 gp)"
        },
        {
            "roll": "74-77",
            "reward": "Holy symbol, silver (25 gp)"
        },
        {
            "roll": "78-81",
            "reward": "Hourglass (25 gp)"
        },
        {
            "roll": "82-88",
            "reward": "Magnifying glass (100 gp)"
        },
        {
            "roll": "89-95",
            "reward": "Musical instrument, masterwork (100 gp)"
        },
        {
            "roll": "96-100",
            "reward": "Thieves’ tools, masterwork (50 gp)"
        }
    ],
    "darkwoodArmorItems": [
        {
            "roll": "01-50",
            "reward": "Buckler (205 gp)"
        },
        {
            "roll": "51-100",
            "reward": "Shield (257 gp)"
        }
    ],
    "masterworkShieldItems": [
        {
            "roll": "01-17",
            "reward": "Buckler (165 gp)"
        },
        {
            "roll": "18-40",
            "reward": "Light wooden shield (153 gp)"
        },
        {
            "roll": "41-60",
            "reward": "Light steel shield (159 gp)"
        },
        {
            "roll": "61-83",
            "reward": "Heavy wooden shield (157 gp)"
        },
        {
            "roll": "84-100",
            "reward": "Heavy steel shield (170 gp)"
        }
    ]
}