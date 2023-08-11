import { createSlice } from "@reduxjs/toolkit";

// TODO: Hold one page or have all pages displayed, or X amount of pages

// One page or multiple pages, if multiple pages do we want to exclude some?



// Home, About, Contact


// View: One Page, All Pages (exclude XYZ)

// [JSON] for Page
// Selected Element[JSON]
// Multi device: Show mobile, table, desktop [custom]

// Add UUID to JSON

const initialState = {
    content: `
    [
        {
            "tag": "header",
            "attributes": {
                "class": "text-gray-600 body-font"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
                    },
                    "children": [
                        {
                            "tag": "a",
                            "attributes": {
                                "href": "javascript:void(0)",
                                "class": "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                            },
                            "children": [
                                {
                                    "tag": "svg",
                                    "attributes": {
                                        "class": "w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full",
                                        "xmlns": "http://www.w3.org/2000/svg",
                                        "viewBox": "0 0 448 512"
                                    },
                                    "children": [
                                        {
                                            "tag": "path",
                                            "attributes": {
                                                "d": "M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "span",
                                    "attributes": {
                                        "class": "ml-3 text-xl"
                                    },
                                    "children": [],
                                    "text": "TailBuilder"
                                }
                            ],
                            "text": ""
                        },
                        {
                            "tag": "nav",
                            "attributes": {
                                "class": "md:ml-auto flex flex-wrap items-center text-base justify-center"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "javascript:void(0)",
                                        "class": "mr-5 hover:text-gray-900"
                                    },
                                    "children": [],
                                    "text": "First Link"
                                },
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "javascript:void(0)",
                                        "class": "mr-5 hover:text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Second Link"
                                },
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "javascript:void(0)",
                                        "class": "mr-5 hover:text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Third Link"
                                },
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "javascript:void(0)",
                                        "class": "mr-5 hover:text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Fourth Link"
                                }
                            ],
                            "text": ""
                        },
                        {
                            "tag": "button",
                            "attributes": {
                                "class": "inline-flex items-center bg-brand-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-white mt-4 md:mt-0"
                            },
                            "children": [],
                            "text": "Button"
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "section",
            "attributes": {
                "class": "text-gray-600 body-font"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container mx-auto flex px-5 py-24 items-center justify-center flex-col"
                    },
                    "children": [
                        {
                            "tag": "img",
                            "attributes": {
                                "class": "lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded",
                                "alt": "hero",
                                "src": "https://dummyimage.com/720x600"
                            }
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "text-center lg:w-2/3 w-full"
                            },
                            "children": [
                                {
                                    "tag": "h1",
                                    "attributes": {
                                        "class": "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Microdosing synth tattooed vexillologist"
                                },
                                {
                                    "tag": "p",
                                    "attributes": {
                                        "class": "mb-8 leading-relaxed"
                                    },
                                    "children": [],
                                    "text": "Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "flex justify-center"
                                    },
                                    "children": [
                                        {
                                            "tag": "button",
                                            "attributes": {
                                                "class": "inline-flex text-white bg-brand-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                            },
                                            "children": [],
                                            "text": "Button"
                                        },
                                        {
                                            "tag": "button",
                                            "attributes": {
                                                "class": "ml-4 inline-flex text-brand-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                            },
                                            "children": [],
                                            "text": "Button"
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "section",
            "attributes": {
                "class": "text-gray-600 body-font"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container px-5 py-24 mx-auto"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex flex-wrap -m-4 text-center"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 sm:w-1/4 w-1/2"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                            },
                                            "children": [],
                                            "text": "2.7K"
                                        },
                                        {
                                            "tag": "p",
                                            "attributes": {
                                                "class": "leading-relaxed"
                                            },
                                            "children": [],
                                            "text": "Users"
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 sm:w-1/4 w-1/2"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                            },
                                            "children": [],
                                            "text": "1.8K"
                                        },
                                        {
                                            "tag": "p",
                                            "attributes": {
                                                "class": "leading-relaxed"
                                            },
                                            "children": [],
                                            "text": "Subscribes"
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 sm:w-1/4 w-1/2"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                            },
                                            "children": [],
                                            "text": "35"
                                        },
                                        {
                                            "tag": "p",
                                            "attributes": {
                                                "class": "leading-relaxed"
                                            },
                                            "children": [],
                                            "text": "Downloads"
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 sm:w-1/4 w-1/2"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                            },
                                            "children": [],
                                            "text": "4"
                                        },
                                        {
                                            "tag": "p",
                                            "attributes": {
                                                "class": "leading-relaxed"
                                            },
                                            "children": [],
                                            "text": "Products"
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "section",
            "attributes": {
                "class": "text-gray-600 body-font"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container px-5 py-24 mx-auto flex flex-wrap"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "lg:w-2/3 mx-auto"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"
                                    },
                                    "children": [
                                        {
                                            "tag": "img",
                                            "attributes": {
                                                "alt": "gallery",
                                                "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                                "src": "https://dummyimage.com/820x340"
                                            }
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "text-center relative z-10 w-full"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h2",
                                                    "attributes": {
                                                        "class": "text-2xl text-gray-900 font-medium title-font mb-2"
                                                    },
                                                    "children": [],
                                                    "text": "Shooting Stars"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "leading-relaxed"
                                                    },
                                                    "children": [],
                                                    "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                                },
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "svg",
                                                            "attributes": {
                                                                "fill": "none",
                                                                "stroke": "currentColor",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                "class": "w-4 h-4 ml-2",
                                                                "viewBox": "0 0 24 24"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "path",
                                                                    "attributes": {
                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                    }
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "flex flex-wrap -mx-2"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "px-2 w-1/2"
                                            },
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "img",
                                                            "attributes": {
                                                                "alt": "gallery",
                                                                "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                                                "src": "https://dummyimage.com/542x460"
                                                            }
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "text-center relative z-10 w-full"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "h2",
                                                                    "attributes": {
                                                                        "class": "text-xl text-gray-900 font-medium title-font mb-2"
                                                                    },
                                                                    "children": [],
                                                                    "text": "Shooting Stars"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "leading-relaxed"
                                                                    },
                                                                    "children": [],
                                                                    "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                                                },
                                                                {
                                                                    "tag": "a",
                                                                    "attributes": {
                                                                        "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "svg",
                                                                            "attributes": {
                                                                                "fill": "none",
                                                                                "stroke": "currentColor",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                "stroke-width": "2",
                                                                                "class": "w-4 h-4 ml-2",
                                                                                "viewBox": "0 0 24 24"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "tag": "path",
                                                                                    "attributes": {
                                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                                    }
                                                                                }
                                                                            ],
                                                                            "text": ""
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "px-2 w-1/2"
                                            },
                                            "children": [
                                                {
                                                    "tag": "div",
                                                    "attributes": {
                                                        "class": "flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "img",
                                                            "attributes": {
                                                                "alt": "gallery",
                                                                "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                                                "src": "https://dummyimage.com/542x420"
                                                            }
                                                        },
                                                        {
                                                            "tag": "div",
                                                            "attributes": {
                                                                "class": "text-center relative z-10 w-full"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "h2",
                                                                    "attributes": {
                                                                        "class": "text-xl text-gray-900 font-medium title-font mb-2"
                                                                    },
                                                                    "children": [],
                                                                    "text": "Shooting Stars"
                                                                },
                                                                {
                                                                    "tag": "p",
                                                                    "attributes": {
                                                                        "class": "leading-relaxed"
                                                                    },
                                                                    "children": [],
                                                                    "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                                                },
                                                                {
                                                                    "tag": "a",
                                                                    "attributes": {
                                                                        "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "svg",
                                                                            "attributes": {
                                                                                "fill": "none",
                                                                                "stroke": "currentColor",
                                                                                "stroke-linecap": "round",
                                                                                "stroke-linejoin": "round",
                                                                                "stroke-width": "2",
                                                                                "class": "w-4 h-4 ml-2",
                                                                                "viewBox": "0 0 24 24"
                                                                            },
                                                                            "children": [
                                                                                {
                                                                                    "tag": "path",
                                                                                    "attributes": {
                                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                                    }
                                                                                }
                                                                            ],
                                                                            "text": ""
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "section",
            "attributes": {
                "class": "text-gray-600 body-font overflow-hidden"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container px-5 py-24 mx-auto"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex flex-col text-center w-full mb-20"
                            },
                            "children": [
                                {
                                    "tag": "h1",
                                    "attributes": {
                                        "class": "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Pricing"
                                },
                                {
                                    "tag": "p",
                                    "attributes": {
                                        "class": "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
                                    },
                                    "children": [],
                                    "text": "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6"
                                    },
                                    "children": [
                                        {
                                            "tag": "button",
                                            "attributes": {
                                                "class": "py-1 px-4 bg-brand-500  text-white focus:outline-none"
                                            },
                                            "children": [],
                                            "text": "Monthly"
                                        },
                                        {
                                            "tag": "button",
                                            "attributes": {
                                                "class": "py-1 px-4 focus:outline-none"
                                            },
                                            "children": [],
                                            "text": "Annually"
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex flex-wrap -m-4"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h2",
                                                    "attributes": {
                                                        "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "START"
                                                },
                                                {
                                                    "tag": "h1",
                                                    "attributes": {
                                                        "class": "text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none"
                                                    },
                                                    "children": [],
                                                    "text": "Free"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Tumeric plaid portland"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-6"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Mixtape chillwave tumeric"
                                                },
                                                {
                                                    "tag": "button",
                                                    "attributes": {
                                                        "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "svg",
                                                            "attributes": {
                                                                "fill": "none",
                                                                "stroke": "currentColor",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                "class": "w-4 h-4 ml-auto",
                                                                "viewBox": "0 0 24 24"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "path",
                                                                    "attributes": {
                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                    }
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-500 mt-3"
                                                    },
                                                    "children": [],
                                                    "text": "Literally you probably haven't heard of them jean shorts."
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden"
                                            },
                                            "children": [
                                                {
                                                    "tag": "span",
                                                    "attributes": {
                                                        "class": "bg-brand-500  text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                                                    },
                                                    "children": [],
                                                    "text": "POPULAR"
                                                },
                                                {
                                                    "tag": "h2",
                                                    "attributes": {
                                                        "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "PRO"
                                                },
                                                {
                                                    "tag": "h1",
                                                    "attributes": {
                                                        "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "children": [],
                                                            "text": "$38"
                                                        },
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "text-lg ml-1 font-normal text-gray-500"
                                                            },
                                                            "children": [],
                                                            "text": "/mo"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Tumeric plaid portland"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Hexagon neutra unicorn"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-6"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Mixtape chillwave tumeric"
                                                },
                                                {
                                                    "tag": "button",
                                                    "attributes": {
                                                        "class": "flex items-center mt-auto text-white bg-brand-500  border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "svg",
                                                            "attributes": {
                                                                "fill": "none",
                                                                "stroke": "currentColor",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                "class": "w-4 h-4 ml-auto",
                                                                "viewBox": "0 0 24 24"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "path",
                                                                    "attributes": {
                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                    }
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-500 mt-3"
                                                    },
                                                    "children": [],
                                                    "text": "Literally you probably haven't heard of them jean shorts."
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h2",
                                                    "attributes": {
                                                        "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "BUSINESS"
                                                },
                                                {
                                                    "tag": "h1",
                                                    "attributes": {
                                                        "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "children": [],
                                                            "text": "$56"
                                                        },
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "text-lg ml-1 font-normal text-gray-500"
                                                            },
                                                            "children": [],
                                                            "text": "/mo"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Tumeric plaid portland"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Hexagon neutra unicorn"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-6"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Mixtape chillwave tumeric"
                                                },
                                                {
                                                    "tag": "button",
                                                    "attributes": {
                                                        "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "svg",
                                                            "attributes": {
                                                                "fill": "none",
                                                                "stroke": "currentColor",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                "class": "w-4 h-4 ml-auto",
                                                                "viewBox": "0 0 24 24"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "path",
                                                                    "attributes": {
                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                    }
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-500 mt-3"
                                                    },
                                                    "children": [],
                                                    "text": "Literally you probably haven't heard of them jean shorts."
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                            },
                                            "children": [
                                                {
                                                    "tag": "h2",
                                                    "attributes": {
                                                        "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "SPECIAL"
                                                },
                                                {
                                                    "tag": "h1",
                                                    "attributes": {
                                                        "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "children": [],
                                                            "text": "$72"
                                                        },
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "text-lg ml-1 font-normal text-gray-500"
                                                            },
                                                            "children": [],
                                                            "text": "/mo"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Tumeric plaid portland"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Hexagon neutra unicorn"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-2"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Vexillologist pitchfork"
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "flex items-center text-gray-600 mb-6"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "span",
                                                            "attributes": {
                                                                "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "svg",
                                                                    "attributes": {
                                                                        "fill": "none",
                                                                        "stroke": "currentColor",
                                                                        "stroke-linecap": "round",
                                                                        "stroke-linejoin": "round",
                                                                        "stroke-width": "2.5",
                                                                        "class": "w-3 h-3",
                                                                        "viewBox": "0 0 24 24"
                                                                    },
                                                                    "children": [
                                                                        {
                                                                            "tag": "path",
                                                                            "attributes": {
                                                                                "d": "M20 6L9 17l-5-5"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "text": ""
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": "Mixtape chillwave tumeric"
                                                },
                                                {
                                                    "tag": "button",
                                                    "attributes": {
                                                        "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "svg",
                                                            "attributes": {
                                                                "fill": "none",
                                                                "stroke": "currentColor",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round",
                                                                "stroke-width": "2",
                                                                "class": "w-4 h-4 ml-auto",
                                                                "viewBox": "0 0 24 24"
                                                            },
                                                            "children": [
                                                                {
                                                                    "tag": "path",
                                                                    "attributes": {
                                                                        "d": "M5 12h14M12 5l7 7-7 7"
                                                                    }
                                                                }
                                                            ],
                                                            "text": ""
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "p",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-500 mt-3"
                                                    },
                                                    "children": [],
                                                    "text": "Literally you probably haven't heard of them jean shorts."
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "section",
            "attributes": {
                "class": "text-gray-600 body-font"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container px-5 py-24 mx-auto flex items-center md:flex-row flex-col"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
                            },
                            "children": [
                                {
                                    "tag": "h2",
                                    "attributes": {
                                        "class": "text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
                                    },
                                    "children": [],
                                    "text": "ROOF PARTY POLAROID"
                                },
                                {
                                    "tag": "h1",
                                    "attributes": {
                                        "class": "md:text-3xl text-2xl font-medium title-font text-gray-900"
                                    },
                                    "children": [],
                                    "text": "Master Cleanse Reliac Heirloom"
                                }
                            ],
                            "text": ""
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"
                            },
                            "children": [
                                {
                                    "tag": "button",
                                    "attributes": {
                                        "class": "bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                                    },
                                    "children": [
                                        {
                                            "tag": "svg",
                                            "attributes": {
                                                "xmlns": "http://www.w3.org/2000/svg",
                                                "fill": "currentColor",
                                                "class": "w-6 h-6",
                                                "viewBox": "0 0 512 512"
                                            },
                                            "children": [
                                                {
                                                    "tag": "path",
                                                    "attributes": {
                                                        "d": "M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                                                    }
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "span",
                                            "attributes": {
                                                "class": "ml-4 flex items-start flex-col leading-none"
                                            },
                                            "children": [
                                                {
                                                    "tag": "span",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-600 mb-1"
                                                    },
                                                    "children": [],
                                                    "text": "GET IT ON"
                                                },
                                                {
                                                    "tag": "span",
                                                    "attributes": {
                                                        "class": "title-font font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "Google Play"
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "button",
                                    "attributes": {
                                        "class": "bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                                    },
                                    "children": [
                                        {
                                            "tag": "svg",
                                            "attributes": {
                                                "xmlns": "http://www.w3.org/2000/svg",
                                                "fill": "currentColor",
                                                "class": "w-6 h-6",
                                                "viewBox": "0 0 305 305"
                                            },
                                            "children": [
                                                {
                                                    "tag": "path",
                                                    "attributes": {
                                                        "d": "M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                                                    }
                                                },
                                                {
                                                    "tag": "path",
                                                    "attributes": {
                                                        "d": "M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                                                    }
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "span",
                                            "attributes": {
                                                "class": "ml-4 flex items-start flex-col leading-none"
                                            },
                                            "children": [
                                                {
                                                    "tag": "span",
                                                    "attributes": {
                                                        "class": "text-xs text-gray-600 mb-1"
                                                    },
                                                    "children": [],
                                                    "text": "Download on the"
                                                },
                                                {
                                                    "tag": "span",
                                                    "attributes": {
                                                        "class": "title-font font-medium"
                                                    },
                                                    "children": [],
                                                    "text": "App Store"
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        },
        {
            "tag": "footer",
            "attributes": {
                "class": "text-gray-600 body-font",
                "contenteditable": "true"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
                        "contenteditable": "true"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
                            },
                            "children": [
                                {
                                    "tag": "a",
                                    "attributes": {
                                        "href": "javascript:void(0)",
                                        "class": "flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                                    },
                                    "children": [
                                        {
                                            "tag": "svg",
                                            "attributes": {
                                                "class": "w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full",
                                                "xmlns": "http://www.w3.org/2000/svg",
                                                "viewBox": "0 0 448 512"
                                            },
                                            "children": [
                                                {
                                                    "tag": "path",
                                                    "attributes": {
                                                        "d": "M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "span",
                                            "attributes": {
                                                "class": "ml-3 text-xl"
                                            },
                                            "children": [],
                                            "text": "TailBuilder"
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "p",
                                    "attributes": {
                                        "class": "mt-2 text-sm text-gray-500"
                                    },
                                    "children": [],
                                    "text": "Best drag and drop tailwindcss builder no code required"
                                }
                            ],
                            "text": ""
                        },
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
                            },
                            "children": [
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                            },
                                            "children": [],
                                            "text": "CATEGORIES"
                                        },
                                        {
                                            "tag": "nav",
                                            "attributes": {
                                                "class": "list-none mb-10"
                                            },
                                            "children": [
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "First Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Second Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Third Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Fourth Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                            },
                                            "children": [],
                                            "text": "CATEGORIES"
                                        },
                                        {
                                            "tag": "nav",
                                            "attributes": {
                                                "class": "list-none mb-10"
                                            },
                                            "children": [
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "First Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Second Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Third Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Fourth Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                            },
                                            "children": [],
                                            "text": "CATEGORIES"
                                        },
                                        {
                                            "tag": "nav",
                                            "attributes": {
                                                "class": "list-none mb-10"
                                            },
                                            "children": [
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "First Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Second Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Third Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Fourth Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                },
                                {
                                    "tag": "div",
                                    "attributes": {
                                        "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                    },
                                    "children": [
                                        {
                                            "tag": "h2",
                                            "attributes": {
                                                "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                            },
                                            "children": [],
                                            "text": "CATEGORIES"
                                        },
                                        {
                                            "tag": "nav",
                                            "attributes": {
                                                "class": "list-none mb-10"
                                            },
                                            "children": [
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "First Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Second Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Third Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                },
                                                {
                                                    "tag": "li",
                                                    "children": [
                                                        {
                                                            "tag": "a",
                                                            "attributes": {
                                                                "href": "javascript:void(0)",
                                                                "class": "text-gray-600 hover:text-gray-800"
                                                            },
                                                            "children": [],
                                                            "text": "Fourth Link"
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "bg-gray-100"
                    },
                    "children": [
                        {
                            "tag": "div",
                            "attributes": {
                                "class": "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
                            },
                            "children": [
                                {
                                    "tag": "p",
                                    "attributes": {
                                        "class": "text-brand-500 text-sm text-center sm:text-left"
                                    },
                                    "children": [],
                                    "text": "© 2020 TailBuilder"
                                },
                                {
                                    "tag": "span",
                                    "attributes": {
                                        "class": "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
                                    },
                                    "children": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "javascript:void(0)",
                                                "class": "text-gray-500"
                                            },
                                            "children": [
                                                {
                                                    "tag": "svg",
                                                    "attributes": {
                                                        "fill": "currentColor",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        "class": "w-5 h-5",
                                                        "viewBox": "0 0 24 24"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "path",
                                                            "attributes": {
                                                                "d": "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                                            }
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "javascript:void(0)",
                                                "class": "ml-3 text-gray-500"
                                            },
                                            "children": [
                                                {
                                                    "tag": "svg",
                                                    "attributes": {
                                                        "fill": "currentColor",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        "class": "w-5 h-5",
                                                        "viewBox": "0 0 24 24"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "path",
                                                            "attributes": {
                                                                "d": "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                                            }
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "javascript:void(0)",
                                                "class": "ml-3 text-gray-500"
                                            },
                                            "children": [
                                                {
                                                    "tag": "svg",
                                                    "attributes": {
                                                        "fill": "none",
                                                        "stroke": "currentColor",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "2",
                                                        "class": "w-5 h-5",
                                                        "viewBox": "0 0 24 24"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "rect",
                                                            "attributes": {
                                                                "width": "20",
                                                                "height": "20",
                                                                "x": "2",
                                                                "y": "2",
                                                                "rx": "5",
                                                                "ry": "5"
                                                            }
                                                        },
                                                        {
                                                            "tag": "path",
                                                            "attributes": {
                                                                "d": "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                            }
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        },
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "javascript:void(0)",
                                                "class": "ml-3 text-gray-500"
                                            },
                                            "children": [
                                                {
                                                    "tag": "svg",
                                                    "attributes": {
                                                        "fill": "currentColor",
                                                        "stroke": "currentColor",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        "stroke-width": "0",
                                                        "class": "w-5 h-5",
                                                        "viewBox": "0 0 24 24"
                                                    },
                                                    "children": [
                                                        {
                                                            "tag": "path",
                                                            "attributes": {
                                                                "stroke": "none",
                                                                "d": "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                            }
                                                        },
                                                        {
                                                            "tag": "circle",
                                                            "attributes": {
                                                                "cx": "4",
                                                                "cy": "4",
                                                                "r": "2",
                                                                "stroke": "none"
                                                            }
                                                        }
                                                    ],
                                                    "text": ""
                                                }
                                            ],
                                            "text": ""
                                        }
                                    ],
                                    "text": ""
                                }
                            ],
                            "text": ""
                        }
                    ],
                    "text": ""
                }
            ],
            "text": ""
        }
    ]`
};

// Project {
// 
// }

const frameInfoSlice = createSlice({
    name: "frameInfo",
    initialState,
    reducers: {
        setSelectElement: (state, payload) => {
            // Selected element should highlight with react bound 
        },
    },
});

export const { setSelectElement } = frameInfoSlice.actions;
export default frameInfoSlice.reducer;
