import React, { useEffect, useState } from 'react'; 
import { useFrame } from 'react-frame-component';


// Get the UUID and find the object inside JSON
// Store selected UUID in Redux 
// Highlight the element on the page
// Find and update using the UUID in JSON - this should automatically update the HTML using some sort of algorithm
// - Find a way to update the HTML in chunks, React uses "diffing algorithm"
// function findValue(obj, targetValue) {
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             const result = findValue(obj[key], targetValue);
//             if (result !== undefined) {
//                 return result;
//             }
//         } else if (obj[key] === targetValue) {
//             return obj;
//         }
//     }
// }

function findParentObjectWithValue(obj, targetValue, parent = null, parentKey = null) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        const result = findParentObjectWithValue(obj[key], targetValue, obj, key);
        if (result !== undefined) {
          return result;
        }
      } else if (obj[key] === targetValue) {
        return parent;
      }
    }
  }

const jsonFromRedux = [
    {
        "tag": "header",
        "attributes": {
            "data-uuid": "kCuROtNcpaZY5DH2-pwZS",
            "class": "text-gray-600 body-font"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "wgbxPwl9Pnozy4Dbeo3P2",
                    "class": "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
                },
                "children": [
                    {
                        "tag": "a",
                        "attributes": {
                            "data-uuid": "ZNuMf2R3Z5YqkerOrLaxp",
                            "href": "javascript:void(0)",
                            "class": "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                        },
                        "children": [
                            {
                                "tag": "svg",
                                "attributes": {
                                    "data-uuid": "9eE1FolaX5o1yIbTUP5vB",
                                    "class": "w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full",
                                    "xmlns": "http://www.w3.org/2000/svg",
                                    "viewBox": "0 0 448 512"
                                },
                                "children": [
                                    {
                                        "tag": "path",
                                        "attributes": {
                                            "data-uuid": "Rf__zt8X6Tg7DprtfWjDh",
                                            "d": "M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
                                        }
                                    }
                                ]
                            },
                            {
                                "tag": "span",
                                "attributes": {
                                    "data-uuid": "NkWQju-orJFagMo8SBRR1",
                                    "class": "ml-3 text-xl"
                                },
                                "children": [],
                                "text": "TailBuilder"
                            }
                        ]
                    },
                    {
                        "tag": "nav",
                        "attributes": {
                            "data-uuid": "VHh7IAoAUC_cu2aPHr77S",
                            "class": "md:ml-auto flex flex-wrap items-center text-base justify-center"
                        },
                        "children": [
                            {
                                "tag": "a",
                                "attributes": {
                                    "data-uuid": "tWNx1M9oJ6-u-xNkRB_DO",
                                    "href": "javascript:void(0)",
                                    "class": "mr-5 hover:text-gray-900"
                                },
                                "children": [],
                                "text": "First Link"
                            },
                            {
                                "tag": "a",
                                "attributes": {
                                    "data-uuid": "bPqYl8xn5jcxvJ8TFiiip",
                                    "href": "javascript:void(0)",
                                    "class": "mr-5 hover:text-gray-900"
                                },
                                "children": [],
                                "text": "Second Link"
                            },
                            {
                                "tag": "a",
                                "attributes": {
                                    "data-uuid": "erNFk4N6PBHsxAVZqlU3g",
                                    "href": "javascript:void(0)",
                                    "class": "mr-5 hover:text-gray-900"
                                },
                                "children": [],
                                "text": "Third Link"
                            },
                            {
                                "tag": "a",
                                "attributes": {
                                    "data-uuid": "Io_ozfEdGItHvkdOZbfnw",
                                    "href": "javascript:void(0)",
                                    "class": "mr-5 hover:text-gray-900"
                                },
                                "children": [],
                                "text": "Fourth Link"
                            }
                        ]
                    },
                    {
                        "tag": "button",
                        "attributes": {
                            "data-uuid": "NMB4iVSBesNU4ghSBBOYe",
                            "class": "inline-flex items-center bg-brand-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-white mt-4 md:mt-0"
                        },
                        "children": [],
                        "text": "Button"
                    }
                ]
            }
        ]
    },
    {
        "tag": "section",
        "attributes": {
            "data-uuid": "nY_ms_FjLFCP8KQc3mgQ4",
            "class": "text-gray-600 body-font"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "eBR6EW9W-EJ2fxRUXPOsf",
                    "class": "container mx-auto flex px-5 py-24 items-center justify-center flex-col"
                },
                "children": [
                    {
                        "tag": "img",
                        "attributes": {
                            "data-uuid": "FXUxfGImOTq05OQaOpyKH",
                            "class": "lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded",
                            "alt": "hero",
                            "src": "https://dummyimage.com/720x600"
                        }
                    },
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "VK54kZxbf9ZF_xvvZMihw",
                            "class": "text-center lg:w-2/3 w-full"
                        },
                        "children": [
                            {
                                "tag": "h1",
                                "attributes": {
                                    "data-uuid": "jjRAnT6Ux_3MZ9LO30jL4",
                                    "class": "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                                },
                                "children": [],
                                "text": "Microdosing synth tattooed vexillologist"
                            },
                            {
                                "tag": "p",
                                "attributes": {
                                    "data-uuid": "9ThuhP2tgrNEV7FGNxdua",
                                    "class": "mb-8 leading-relaxed"
                                },
                                "children": [],
                                "text": "Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "RyXMLVLOqjktOexofxQfB",
                                    "class": "flex justify-center"
                                },
                                "children": [
                                    {
                                        "tag": "button",
                                        "attributes": {
                                            "data-uuid": "uzqUVqhAxvCHfDikWjlqX",
                                            "class": "inline-flex text-white bg-brand-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                        },
                                        "children": [],
                                        "text": "Button"
                                    },
                                    {
                                        "tag": "button",
                                        "attributes": {
                                            "data-uuid": "mWz59K00sBscSJMZcdfzf",
                                            "class": "ml-4 inline-flex text-brand-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                                        },
                                        "children": [],
                                        "text": "Button"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "tag": "section",
        "attributes": {
            "data-uuid": "V62lnPzLkdrNVxuBmxumV",
            "class": "text-gray-600 body-font"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "e2N5Pw7whQKlbtoml1lcy",
                    "class": "container px-5 py-24 mx-auto"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "u2IThJk-drAdTRCbjAgkj",
                            "class": "flex flex-wrap -m-4 text-center"
                        },
                        "children": [
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "uyEkjaZH30DfclEOMOA_P",
                                    "class": "p-4 sm:w-1/4 w-1/2"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "eiQec4YEaUWSb8t_9vEpB",
                                            "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                        },
                                        "children": [],
                                        "text": "2.7K"
                                    },
                                    {
                                        "tag": "p",
                                        "attributes": {
                                            "data-uuid": "UPYLmlYDpboiiN1MdVCpT",
                                            "class": "leading-relaxed"
                                        },
                                        "children": [],
                                        "text": "Users"
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "8jlLZVmYalau7m1ScIcw9",
                                    "class": "p-4 sm:w-1/4 w-1/2"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "bG_1Kc_77LYVbq45XX-aL",
                                            "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                        },
                                        "children": [],
                                        "text": "1.8K"
                                    },
                                    {
                                        "tag": "p",
                                        "attributes": {
                                            "data-uuid": "EKQMpmEiVji8NxPs5psjM",
                                            "class": "leading-relaxed"
                                        },
                                        "children": [],
                                        "text": "Subscribes"
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "OCtEmErK7eHsSghfzLSaB",
                                    "class": "p-4 sm:w-1/4 w-1/2"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "g3WH6sV3vPQ1esARpyWN6",
                                            "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                        },
                                        "children": [],
                                        "text": "35"
                                    },
                                    {
                                        "tag": "p",
                                        "attributes": {
                                            "data-uuid": "op5Urv6TEjPk_yFIKjqA2",
                                            "class": "leading-relaxed"
                                        },
                                        "children": [],
                                        "text": "Downloads"
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "6UQw1j3vQVFfZZKotTa_3",
                                    "class": "p-4 sm:w-1/4 w-1/2"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "GfCPo1T-oWmTLkC4ULc2a",
                                            "class": "title-font font-medium sm:text-4xl text-3xl text-gray-900"
                                        },
                                        "children": [],
                                        "text": "4"
                                    },
                                    {
                                        "tag": "p",
                                        "attributes": {
                                            "data-uuid": "9ZVKqAXeMVvvXYbSyw82l",
                                            "class": "leading-relaxed"
                                        },
                                        "children": [],
                                        "text": "Products"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "tag": "section",
        "attributes": {
            "data-uuid": "GRzEoK2kksEk92OFpHWoA",
            "class": "text-gray-600 body-font"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "GErVxNeEIF3BmClMhbjCo",
                    "class": "container px-5 py-24 mx-auto flex flex-wrap"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "Pf4BdQYnGupoUaB36zQ41",
                            "class": "lg:w-2/3 mx-auto"
                        },
                        "children": [
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "gtCF73ItqGGwKfGzvSvdA",
                                    "class": "flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"
                                },
                                "children": [
                                    {
                                        "tag": "img",
                                        "attributes": {
                                            "data-uuid": "L7ROPAv69mW0ixZYULNSX",
                                            "alt": "gallery",
                                            "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                            "src": "https://dummyimage.com/820x340"
                                        }
                                    },
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "wichEt0istAWWp_7LQ4_x",
                                            "class": "text-center relative z-10 w-full"
                                        },
                                        "children": [
                                            {
                                                "tag": "h2",
                                                "attributes": {
                                                    "data-uuid": "CkZr6l3_sH1rljrT2MJqP",
                                                    "class": "text-2xl text-gray-900 font-medium title-font mb-2"
                                                },
                                                "children": [],
                                                "text": "Shooting Stars"
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "9_1Cb9UbbmZnX-_mWD3vk",
                                                    "class": "leading-relaxed"
                                                },
                                                "children": [],
                                                "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                            },
                                            {
                                                "tag": "a",
                                                "attributes": {
                                                    "data-uuid": "a5V6atqfqN-aSCOmryShV",
                                                    "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "svg",
                                                        "attributes": {
                                                            "data-uuid": "QzdtGjmAfiL1RU9ZMDNKA",
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
                                                                    "data-uuid": "oqW8j40iEOtGCPPFmmZ3Z",
                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "Purac7-ekTWbS-z9WuL65",
                                    "class": "flex flex-wrap -mx-2"
                                },
                                "children": [
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "ePUtl9t3uOekh4R2he_xQ",
                                            "class": "px-2 w-1/2"
                                        },
                                        "children": [
                                            {
                                                "tag": "div",
                                                "attributes": {
                                                    "data-uuid": "pnG4BOk7hXmQ-S-rkSjDO",
                                                    "class": "flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "img",
                                                        "attributes": {
                                                            "data-uuid": "P1QX7oR5ryRtiBxwSYW-E",
                                                            "alt": "gallery",
                                                            "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                                            "src": "https://dummyimage.com/542x460"
                                                        }
                                                    },
                                                    {
                                                        "tag": "div",
                                                        "attributes": {
                                                            "data-uuid": "Jrq01ZMlEsj7uiYGY2ZUf",
                                                            "class": "text-center relative z-10 w-full"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "h2",
                                                                "attributes": {
                                                                    "data-uuid": "JVWw_TTG3EvaYvzEeVjg6",
                                                                    "class": "text-xl text-gray-900 font-medium title-font mb-2"
                                                                },
                                                                "children": [],
                                                                "text": "Shooting Stars"
                                                            },
                                                            {
                                                                "tag": "p",
                                                                "attributes": {
                                                                    "data-uuid": "I8m7CALWfhUGjcbQaJ96v",
                                                                    "class": "leading-relaxed"
                                                                },
                                                                "children": [],
                                                                "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                                            },
                                                            {
                                                                "tag": "a",
                                                                "attributes": {
                                                                    "data-uuid": "WnZiroODRMzCnLqesP26_",
                                                                    "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "tag": "svg",
                                                                        "attributes": {
                                                                            "data-uuid": "jHFu-Tkm_6ZNuwnW5j2R9",
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
                                                                                    "data-uuid": "J7BPacoKzodn332_7K-HM",
                                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "XPyRL5fZ9g0iYpxwCdkVp",
                                            "class": "px-2 w-1/2"
                                        },
                                        "children": [
                                            {
                                                "tag": "div",
                                                "attributes": {
                                                    "data-uuid": "s2cO7vFMTLPL1EVqfgYa5",
                                                    "class": "flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "img",
                                                        "attributes": {
                                                            "data-uuid": "R6NOfN0WPvul8T3a6-byn",
                                                            "alt": "gallery",
                                                            "class": "w-full object-cover h-full object-center block opacity-25 absolute inset-0",
                                                            "src": "https://dummyimage.com/542x420"
                                                        }
                                                    },
                                                    {
                                                        "tag": "div",
                                                        "attributes": {
                                                            "data-uuid": "hNv6Vh60ZASxPbE_squ33",
                                                            "class": "text-center relative z-10 w-full"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "h2",
                                                                "attributes": {
                                                                    "data-uuid": "Yt0Wk5r85kTGwVBl5ASlJ",
                                                                    "class": "text-xl text-gray-900 font-medium title-font mb-2"
                                                                },
                                                                "children": [],
                                                                "text": "Shooting Stars"
                                                            },
                                                            {
                                                                "tag": "p",
                                                                "attributes": {
                                                                    "data-uuid": "2uWKwCu5m4fJ1h6YXp0F2",
                                                                    "class": "leading-relaxed"
                                                                },
                                                                "children": [],
                                                                "text": "Skateboard +1 mustache fixie paleo lumbersexual."
                                                            },
                                                            {
                                                                "tag": "a",
                                                                "attributes": {
                                                                    "data-uuid": "nIN0lRzN3cJHhjAUHQwPD",
                                                                    "class": "mt-3 text-indigo-500 inline-flex items-center"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "tag": "svg",
                                                                        "attributes": {
                                                                            "data-uuid": "ZBffkJBWwszUJ8YxAhsUF",
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
                                                                                    "data-uuid": "CKPP_zBWBmL_2tgmZsU21",
                                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "tag": "section",
        "attributes": {
            "data-uuid": "zxqIxna31ejopP75I2KE4",
            "class": "text-gray-600 body-font overflow-hidden"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "dO21ySW6FDUNDUlboYG7s",
                    "class": "container px-5 py-24 mx-auto"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "nzjrpxbqflzCXBU6DbZtP",
                            "class": "flex flex-col text-center w-full mb-20"
                        },
                        "children": [
                            {
                                "tag": "h1",
                                "attributes": {
                                    "data-uuid": "M-b6vfr2VQJi_8tPX0GQN",
                                    "class": "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
                                },
                                "children": [],
                                "text": "Pricing"
                            },
                            {
                                "tag": "p",
                                "attributes": {
                                    "data-uuid": "mpTItACo-_0u5WK2m-SWd",
                                    "class": "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
                                },
                                "children": [],
                                "text": "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "8i4pF2lE5lFex21EjzedZ",
                                    "class": "flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6"
                                },
                                "children": [
                                    {
                                        "tag": "button",
                                        "attributes": {
                                            "data-uuid": "urDgZ5-IpibD7grJFR4gA",
                                            "class": "py-1 px-4 bg-brand-500  text-white focus:outline-none"
                                        },
                                        "children": [],
                                        "text": "Monthly"
                                    },
                                    {
                                        "tag": "button",
                                        "attributes": {
                                            "data-uuid": "mg1u58zrjH9gFHEwp5oxj",
                                            "class": "py-1 px-4 focus:outline-none"
                                        },
                                        "children": [],
                                        "text": "Annually"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "77s6rVgQDE-pNMvPWjg1B",
                            "class": "flex flex-wrap -m-4"
                        },
                        "children": [
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "WDmkP9y_5pCZfzWylMzpg",
                                    "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                },
                                "children": [
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "CxDAmWcQJVi-yDZ3Xdf1x",
                                            "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                        },
                                        "children": [
                                            {
                                                "tag": "h2",
                                                "attributes": {
                                                    "data-uuid": "e9qtVnQ1U5txGiGvUlVU2",
                                                    "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                },
                                                "children": [],
                                                "text": "START"
                                            },
                                            {
                                                "tag": "h1",
                                                "attributes": {
                                                    "data-uuid": "DwaKUd7sKNi3lRlg6rxjF",
                                                    "class": "text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none"
                                                },
                                                "children": [],
                                                "text": "Free"
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "iqGr4g_VWc6Ewq-xbiBtV",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "8HrHQDD-iibEcelJv9w11",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "ip0eXS40tcEllDGB_3c8u",
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
                                                                            "data-uuid": "JnhfBCP-ttFoiGE-iH1T_",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "jEKowgIIq9_dHxjPzsLGL",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "i30cX-pgapIZbulHTnvNr",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "ZEr7u3yUMw2k57dpzFDyL",
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
                                                                            "data-uuid": "87OkcNkUrlG6orRVavjbO",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "c9_b2a_2yVQjmCPM9tOc_",
                                                    "class": "flex items-center text-gray-600 mb-6"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "YAifgSa8K3wHomUelIBet",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "9RnIn2UyDWOhV5NrEF4Wj",
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
                                                                            "data-uuid": "2NPPC6PIKV7TLdWrDREG3",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "button",
                                                "attributes": {
                                                    "data-uuid": "hkXEMhbUwovUAnRgQKsCa",
                                                    "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "svg",
                                                        "attributes": {
                                                            "data-uuid": "1WZ4RSz8wA-XHgVm0IasY",
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
                                                                    "data-uuid": "mwcL8VaYTP52xExI80Ozh",
                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "VkPhU31yILtwmdqkBu7OJ",
                                                    "class": "text-xs text-gray-500 mt-3"
                                                },
                                                "children": [],
                                                "text": "Literally you probably haven't heard of them jean shorts."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "0h9SdW4sHhghbGBUUT7ZH",
                                    "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                },
                                "children": [
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "HrfyKYmBjYROYs2xFlQr-",
                                            "class": "h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden"
                                        },
                                        "children": [
                                            {
                                                "tag": "span",
                                                "attributes": {
                                                    "data-uuid": "lX5XYaJPDHIypUSrHSkuI",
                                                    "class": "bg-brand-500  text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"
                                                },
                                                "children": [],
                                                "text": "POPULAR"
                                            },
                                            {
                                                "tag": "h2",
                                                "attributes": {
                                                    "data-uuid": "Zp52mSTtlAutgtPEzTGuC",
                                                    "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                },
                                                "children": [],
                                                "text": "PRO"
                                            },
                                            {
                                                "tag": "h1",
                                                "attributes": {
                                                    "data-uuid": "1X3u6SzSCBDQB-xVzHzV_",
                                                    "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "s5VrArucMJaClFLryB3Ih"
                                                        },
                                                        "children": [],
                                                        "text": "$38"
                                                    },
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "z0m5GsD9iCH_oXCargCIM",
                                                            "class": "text-lg ml-1 font-normal text-gray-500"
                                                        },
                                                        "children": [],
                                                        "text": "/mo"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "tuGOmygJZA3EycHklQ8Uj",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "_S2bVK7SCvY8nwUNhNyTL",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "nDaPksM-t3efxJX2I92KN",
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
                                                                            "data-uuid": "5SDTFmN2A8r6jQ-sWe2A7",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "9WjKFgU7Z8hlk-4Z_snjg",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "pmp4jni0EIXrBe-8c7KQh",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "XQ5XgjjI_v1yJBT1U1M6J",
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
                                                                            "data-uuid": "AMauCe6LPjRKzG6rGsJ3C",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "2loUPkKogj1HChPQqjrf6",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "DyohfiG60yaMCSeixRVnK",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "3NuFoBK7NDChD9dS5iZxl",
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
                                                                            "data-uuid": "qBS2cOH05PYYfkI_iqffX",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "71gH-N5H4lYvQJ-BxjwnT",
                                                    "class": "flex items-center text-gray-600 mb-6"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "bqxIuAxrD5Ghl_iW0LoO4",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "tm59MYMB18vIJbffkMDXw",
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
                                                                            "data-uuid": "1AwgbFRrupNtxaNh8TUmF",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "button",
                                                "attributes": {
                                                    "data-uuid": "mghNIr_Hp-pVNi0hsa1Rf",
                                                    "class": "flex items-center mt-auto text-white bg-brand-500  border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "svg",
                                                        "attributes": {
                                                            "data-uuid": "h8K4bJiHcP2LpoQJJIRZW",
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
                                                                    "data-uuid": "f3EiuCKn3aZdA2G3lGbd9",
                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "WRAOYaH6A8aNQ0aoAn005",
                                                    "class": "text-xs text-gray-500 mt-3"
                                                },
                                                "children": [],
                                                "text": "Literally you probably haven't heard of them jean shorts."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "RgQQ5QHMR2nD8qb6U3-Yo",
                                    "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                },
                                "children": [
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "q6v2SXIw6RfR5XDC16dS3",
                                            "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                        },
                                        "children": [
                                            {
                                                "tag": "h2",
                                                "attributes": {
                                                    "data-uuid": "hqUHQiAZEG3K3_DSBZddp",
                                                    "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                },
                                                "children": [],
                                                "text": "BUSINESS"
                                            },
                                            {
                                                "tag": "h1",
                                                "attributes": {
                                                    "data-uuid": "mtkRiqmxpl2_1SQ47p5kk",
                                                    "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "fn8eVYVWN11HgwNPskr8a"
                                                        },
                                                        "children": [],
                                                        "text": "$56"
                                                    },
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "DUGhbkIkVKTvOT-0P8F79",
                                                            "class": "text-lg ml-1 font-normal text-gray-500"
                                                        },
                                                        "children": [],
                                                        "text": "/mo"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "Z9nYu4srty9aLBXxoqKmL",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "HsflvqXfcoKOTVfMVzH7x",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "eLw7zgsC7Njv5_H4y-A8i",
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
                                                                            "data-uuid": "1PcMfbZjgGfJTuxIsF3gz",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "22iiF4hweNG9hblS4JV_I",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "aglQI5HNy7B_Nl0Fmh-O8",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "vCoSIWAM4Zhiru_vM1rL5",
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
                                                                            "data-uuid": "77o7b1bEjsklqVlH5wDSz",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "AV3cpGjh5j1hZhRvYTZeg",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "SLGuSfjr3DsEBtK-CsT_Y",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "j1vq6tqQCOBgKkfN5ub2M",
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
                                                                            "data-uuid": "s0lM7qJK15glPfEvg-Py4",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "DM9Ahv4XJGbrCcJrN2n7_",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "D2NubWGhAIDTot1qofFf4",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "YYpFqZpX80Ty1tZ4SkNxE",
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
                                                                            "data-uuid": "xuKyF-yAwes1930sRPC6E",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "2h1cMoXlxHGG5VFrBOkXg",
                                                    "class": "flex items-center text-gray-600 mb-6"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "ejLkuWyfnT2ojXAGCyMsW",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "Cb6y8OX-Lm1Z1mXIE3HET",
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
                                                                            "data-uuid": "Ui71-gJ2sxTWjLFNB-9m-",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "button",
                                                "attributes": {
                                                    "data-uuid": "t9g-aTQOpwQu6XMX0vzdX",
                                                    "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "svg",
                                                        "attributes": {
                                                            "data-uuid": "_CmaeV-TU6nIZ-vfnBIPQ",
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
                                                                    "data-uuid": "qFpLlbXQ7m4ILTgMvJ7ub",
                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "g0_2GkS6ebv_zVA1BYBHs",
                                                    "class": "text-xs text-gray-500 mt-3"
                                                },
                                                "children": [],
                                                "text": "Literally you probably haven't heard of them jean shorts."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "XWj1CwCbdnSTd2T0kJzH2",
                                    "class": "p-4 xl:w-1/4 md:w-1/2 w-full"
                                },
                                "children": [
                                    {
                                        "tag": "div",
                                        "attributes": {
                                            "data-uuid": "YZR-VxZ7KhmL2nMNMxgTW",
                                            "class": "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"
                                        },
                                        "children": [
                                            {
                                                "tag": "h2",
                                                "attributes": {
                                                    "data-uuid": "Tk9FAPzz-h0syGwOFts6P",
                                                    "class": "text-sm tracking-widest title-font mb-1 font-medium"
                                                },
                                                "children": [],
                                                "text": "SPECIAL"
                                            },
                                            {
                                                "tag": "h1",
                                                "attributes": {
                                                    "data-uuid": "Ax5Fc3m6D-bkRP6q-sN9Y",
                                                    "class": "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "84k3Pi0VsmeyGR9YMa8cK"
                                                        },
                                                        "children": [],
                                                        "text": "$72"
                                                    },
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "oVWLObDvowS42E8P9PAuj",
                                                            "class": "text-lg ml-1 font-normal text-gray-500"
                                                        },
                                                        "children": [],
                                                        "text": "/mo"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "62dTkoMhLXngDZUBfn749",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "QwkIHkgGGcQdnVOnDs7xe",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "ghCUGtXPXia6U_QnNycn_",
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
                                                                            "data-uuid": "FHOGxszNgxUvK98tbtYSZ",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "sErbqtVS6dEv5UlnNpZ06",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "08r_JDWpabEGTJhDUudvB",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "WIGXKF59ZYkyv17-yC6Xb",
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
                                                                            "data-uuid": "YDGHQaDZeeiw-BfJj5-l3",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "P3YQvXRAesWxYVlleeDK3",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "rN4mN2JhMMXiqryjohmhY",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "xrirY9G6Wq7bPqDgXdApw",
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
                                                                            "data-uuid": "f36a2OcuWWba-LlkTzKZZ",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "-axowqUOjc0In0p7B5BcA",
                                                    "class": "flex items-center text-gray-600 mb-2"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "sZLw23KYHge9FoCkyMYIO",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "dT8DqiXY0JM-HpGvWYmDF",
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
                                                                            "data-uuid": "B5pCGXpzV6PJ_ik62hASN",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "fwLfksL7hoi7aVNGvFuSl",
                                                    "class": "flex items-center text-gray-600 mb-6"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "span",
                                                        "attributes": {
                                                            "data-uuid": "wdhSrEUIPjeFkXJ91Z_Nh",
                                                            "class": "w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"
                                                        },
                                                        "children": [
                                                            {
                                                                "tag": "svg",
                                                                "attributes": {
                                                                    "data-uuid": "CT_jyfIRSKIt8FXBewDSp",
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
                                                                            "data-uuid": "kNw0EQ6PPyOkgTCbx4ocn",
                                                                            "d": "M20 6L9 17l-5-5"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "button",
                                                "attributes": {
                                                    "data-uuid": "1AJRVFflmvAjFNQO-vOdu",
                                                    "class": "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "svg",
                                                        "attributes": {
                                                            "data-uuid": "E95OFPqpS2koa99wOOtxe",
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
                                                                    "data-uuid": "Eb0Cx-mgEASKVVRJ_CdiI",
                                                                    "d": "M5 12h14M12 5l7 7-7 7"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "p",
                                                "attributes": {
                                                    "data-uuid": "PTK14tMQyTg0PpLJ3pGCo",
                                                    "class": "text-xs text-gray-500 mt-3"
                                                },
                                                "children": [],
                                                "text": "Literally you probably haven't heard of them jean shorts."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "tag": "section",
        "attributes": {
            "data-uuid": "gCOrZgXN0iJTe2kZ_qlr6",
            "class": "text-gray-600 body-font"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "RGvxCleFaoAtxFfB36AoQ",
                    "class": "container px-5 py-24 mx-auto flex items-center md:flex-row flex-col"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "OtKZrEsn0y3VB3wACQBzr",
                            "class": "flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
                        },
                        "children": [
                            {
                                "tag": "h2",
                                "attributes": {
                                    "data-uuid": "9ikV1rtesubT7WTafQg9q",
                                    "class": "text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
                                },
                                "children": [],
                                "text": "ROOF PARTY POLAROID"
                            },
                            {
                                "tag": "h1",
                                "attributes": {
                                    "data-uuid": "Wx5CE-Xz_Hp0UL0qIuopt",
                                    "class": "md:text-3xl text-2xl font-medium title-font text-gray-900"
                                },
                                "children": [],
                                "text": "Master Cleanse Reliac Heirloom"
                            }
                        ]
                    },
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "1aYMvr1LFUh-V3RDT4akY",
                            "class": "flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"
                        },
                        "children": [
                            {
                                "tag": "button",
                                "attributes": {
                                    "data-uuid": "hjkp1ht4ABh0N_0D5XhBP",
                                    "class": "bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                                },
                                "children": [
                                    {
                                        "tag": "svg",
                                        "attributes": {
                                            "data-uuid": "65_-aMxrGlcIIhb9_ANKl",
                                            "xmlns": "http://www.w3.org/2000/svg",
                                            "fill": "currentColor",
                                            "class": "w-6 h-6",
                                            "viewBox": "0 0 512 512"
                                        },
                                        "children": [
                                            {
                                                "tag": "path",
                                                "attributes": {
                                                    "data-uuid": "INBNn8V7--ddTgSpWWx1V",
                                                    "d": "M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "span",
                                        "attributes": {
                                            "data-uuid": "LBtb7_WiTkv-Hgu1khIJ4",
                                            "class": "ml-4 flex items-start flex-col leading-none"
                                        },
                                        "children": [
                                            {
                                                "tag": "span",
                                                "attributes": {
                                                    "data-uuid": "B7T2KTzrYqypCLfnwAr6s",
                                                    "class": "text-xs text-gray-600 mb-1"
                                                },
                                                "children": [],
                                                "text": "GET IT ON"
                                            },
                                            {
                                                "tag": "span",
                                                "attributes": {
                                                    "data-uuid": "HjtbOK28jH22F0sY7gJ9u",
                                                    "class": "title-font font-medium"
                                                },
                                                "children": [],
                                                "text": "Google Play"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "button",
                                "attributes": {
                                    "data-uuid": "7eHD1Q2WUS9i6_AZk1zQa",
                                    "class": "bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                                },
                                "children": [
                                    {
                                        "tag": "svg",
                                        "attributes": {
                                            "data-uuid": "8-vYD9Sae9jQ3gqqevqIR",
                                            "xmlns": "http://www.w3.org/2000/svg",
                                            "fill": "currentColor",
                                            "class": "w-6 h-6",
                                            "viewBox": "0 0 305 305"
                                        },
                                        "children": [
                                            {
                                                "tag": "path",
                                                "attributes": {
                                                    "data-uuid": "9N4hTE9nEOrR8IovinAAx",
                                                    "d": "M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"
                                                }
                                            },
                                            {
                                                "tag": "path",
                                                "attributes": {
                                                    "data-uuid": "7jMSOr8jwzqeNdcEmC6DX",
                                                    "d": "M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "span",
                                        "attributes": {
                                            "data-uuid": "WqTxmqqK0XCj8aauM0dCK",
                                            "class": "ml-4 flex items-start flex-col leading-none"
                                        },
                                        "children": [
                                            {
                                                "tag": "span",
                                                "attributes": {
                                                    "data-uuid": "xrk5aqG0R7rnsXXWJl54k",
                                                    "class": "text-xs text-gray-600 mb-1"
                                                },
                                                "children": [],
                                                "text": "Download on the"
                                            },
                                            {
                                                "tag": "span",
                                                "attributes": {
                                                    "data-uuid": "CvGPrepEaZV2Ld0_m_Nb5",
                                                    "class": "title-font font-medium"
                                                },
                                                "children": [],
                                                "text": "App Store"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "tag": "footer",
        "attributes": {
            "data-uuid": "WZq2ljwcHSUAJjmA1DJGu",
            "class": "text-gray-600 body-font",
            "contenteditable": "true"
        },
        "children": [
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "I8ujF0mQYF41f2B_uK2KG",
                    "class": "container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
                    "contenteditable": "true"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "fgLG9RLKqtSYYGdCTkK_A",
                            "class": "w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
                        },
                        "children": [
                            {
                                "tag": "a",
                                "attributes": {
                                    "data-uuid": "U3EDHe8hLm4gCAF-AQKxL",
                                    "href": "javascript:void(0)",
                                    "class": "flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                                },
                                "children": [
                                    {
                                        "tag": "svg",
                                        "attributes": {
                                            "data-uuid": "Wbd3bsknb4diT8l16Wp2I",
                                            "class": "w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full",
                                            "xmlns": "http://www.w3.org/2000/svg",
                                            "viewBox": "0 0 448 512"
                                        },
                                        "children": [
                                            {
                                                "tag": "path",
                                                "attributes": {
                                                    "data-uuid": "oNAzXqw2DF-2dCP5e_vKT",
                                                    "d": "M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "span",
                                        "attributes": {
                                            "data-uuid": "lz3-Tb4PsJyZibdXNzxwi",
                                            "class": "ml-3 text-xl"
                                        },
                                        "children": [],
                                        "text": "TailBuilder"
                                    }
                                ]
                            },
                            {
                                "tag": "p",
                                "attributes": {
                                    "data-uuid": "xEbCd9448ZzSSy4H-mbHL",
                                    "class": "mt-2 text-sm text-gray-500"
                                },
                                "children": [],
                                "text": "Best drag and drop tailwindcss builder no code required"
                            }
                        ]
                    },
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "Bng-c9SA8In6crBLTelSi",
                            "class": "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
                        },
                        "children": [
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "6Yz9sIEVvzwtAE_lFWxVI",
                                    "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "4-1vNw1GkY_RGm3V5Nd7m",
                                            "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                        },
                                        "children": [],
                                        "text": "CATEGORIES"
                                    },
                                    {
                                        "tag": "nav",
                                        "attributes": {
                                            "data-uuid": "gpF_L3fIhV4ZEGnwCGHnW",
                                            "class": "list-none mb-10"
                                        },
                                        "children": [
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "zikL3KVjFsC15P1_AvKB_"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "nwxcvto4fttNDzEqPEKnN",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "First Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "zpP3EGY5LiEj-nN1kVwux"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "Esat_8bEAbG7xpd6N1l2B",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Second Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "yFAXjytuje4RpqxQZZNym"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "2DF3KkJwiEG9I9XgvoNjT",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Third Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "SJsZlw1nsE_GCeH9a-5vp"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "ZyRyhZqknvW4smM3800RG",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Fourth Link"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "uV8tpJhR-WsXwG2W3VFNe",
                                    "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "V25lGaT9jtYP2FAx7UuhK",
                                            "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                        },
                                        "children": [],
                                        "text": "CATEGORIES"
                                    },
                                    {
                                        "tag": "nav",
                                        "attributes": {
                                            "data-uuid": "tVhK-4KK-qselzMP2t4lM",
                                            "class": "list-none mb-10"
                                        },
                                        "children": [
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "pFpIuzYYN6iWS9x4qWmUX"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "SmX0nsmX89Nik1S_EJR-A",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "First Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "Ip-zejl6U4v6DUMAjm_3M"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "lsnGEmjaB-aYbFGaVRVaw",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Second Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "VVm5V9BPoB_7My0V1KWmM"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "aLgtYr2q_QsPaYmTYiqb6",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Third Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "6ub7Wu0cDsnddlxeZ2mfs"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "a4Xd_G4LwF9fClw1h6wHI",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Fourth Link"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "GfM44_d2IwqetHIRr7eXP",
                                    "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "ZssM2m462lvRT8PvJQKt8",
                                            "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                        },
                                        "children": [],
                                        "text": "CATEGORIES"
                                    },
                                    {
                                        "tag": "nav",
                                        "attributes": {
                                            "data-uuid": "Ztm3VsqF6etGEzbjDzgaF",
                                            "class": "list-none mb-10"
                                        },
                                        "children": [
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "rVf_SvVBzAqCHRzvrrbjr"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "UslbyAuIIthXaa-AJudNB",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "First Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "PHWSHjzMw_WKpWy6mAJma"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "CQYQwXA4MLz4kYlBl0cAb",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Second Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "-E_nS00kf735mC-Rxi0o6"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "D4Vl9ifO00qi5az-UXR6p",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Third Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "an6K_70BHdfDTDV_jUst9"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "SFbZo22kuAPO0EUY2E9vy",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Fourth Link"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "tag": "div",
                                "attributes": {
                                    "data-uuid": "7uWmZnntvRfU40xK02F6i",
                                    "class": "lg:w-1/4 md:w-1/2 w-full px-4"
                                },
                                "children": [
                                    {
                                        "tag": "h2",
                                        "attributes": {
                                            "data-uuid": "x0tBZpw8FRoiASEtvsvmB",
                                            "class": "title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                                        },
                                        "children": [],
                                        "text": "CATEGORIES"
                                    },
                                    {
                                        "tag": "nav",
                                        "attributes": {
                                            "data-uuid": "e-KP5nt6rl03w-gmMGXnH",
                                            "class": "list-none mb-10"
                                        },
                                        "children": [
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "Y7aJ4nfuIQsM5d6kAX6HX"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "RLw6ArQa8_rhDjTdSacw4",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "First Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "yIZ-S9Q3kc-pUph9mFAV7"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "EiOQ__kxCq9b-wVg4GIma",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Second Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "7x8zsWrTtroqiZVAHSDoA"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "KzKWNOhzB0pdg7znRWr4C",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Third Link"
                                                    }
                                                ]
                                            },
                                            {
                                                "tag": "li",
                                                "attributes": {
                                                    "data-uuid": "Hdb64D2Fq1QzLqoSfy1Pc"
                                                },
                                                "children": [
                                                    {
                                                        "tag": "a",
                                                        "attributes": {
                                                            "data-uuid": "_GBMDn4ZOMhmuLY-TDXAO",
                                                            "href": "javascript:void(0)",
                                                            "class": "text-gray-600 hover:text-gray-800"
                                                        },
                                                        "children": [],
                                                        "text": "Fourth Link"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "tag": "div",
                "attributes": {
                    "data-uuid": "4MeS_JbxvaA7ku031mdFM",
                    "class": "bg-gray-100"
                },
                "children": [
                    {
                        "tag": "div",
                        "attributes": {
                            "data-uuid": "UimnletZmWzhpn7ZMFiO2",
                            "class": "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
                        },
                        "children": [
                            {
                                "tag": "p",
                                "attributes": {
                                    "data-uuid": "0UWFic6pQ2-k-GlSgot-X",
                                    "class": "text-brand-500 text-sm text-center sm:text-left"
                                },
                                "children": [],
                                "text": "© 2020 TailBuilder"
                            },
                            {
                                "tag": "span",
                                "attributes": {
                                    "data-uuid": "FeeTr3JV7P1jK_C_rgEHB",
                                    "class": "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
                                },
                                "children": [
                                    {
                                        "tag": "a",
                                        "attributes": {
                                            "data-uuid": "W2gbpoat86_eUYyDRP91H",
                                            "href": "javascript:void(0)",
                                            "class": "text-gray-500"
                                        },
                                        "children": [
                                            {
                                                "tag": "svg",
                                                "attributes": {
                                                    "data-uuid": "iWH68iHZtlCnw6dJ_GRTq",
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
                                                            "data-uuid": "MUAESpUa60V_4OBSkhwSF",
                                                            "d": "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "a",
                                        "attributes": {
                                            "data-uuid": "l2_ORAhoopBvPBlwqAjvO",
                                            "href": "javascript:void(0)",
                                            "class": "ml-3 text-gray-500"
                                        },
                                        "children": [
                                            {
                                                "tag": "svg",
                                                "attributes": {
                                                    "data-uuid": "p8gEq7BncnKjjxkTHjN47",
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
                                                            "data-uuid": "EikE4sYnpT2HjY847x1DN",
                                                            "d": "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "a",
                                        "attributes": {
                                            "data-uuid": "teG7AsRcvosbQNxvaveoH",
                                            "href": "javascript:void(0)",
                                            "class": "ml-3 text-gray-500"
                                        },
                                        "children": [
                                            {
                                                "tag": "svg",
                                                "attributes": {
                                                    "data-uuid": "Luja9lp4esH0VIJ1zun-R",
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
                                                            "data-uuid": "Ar67X_SDfYsZKxBr6L_mN",
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
                                                            "data-uuid": "HChe6e7M14kOoMLt5rCy5",
                                                            "d": "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "tag": "a",
                                        "attributes": {
                                            "data-uuid": "uPX80kFYX6g8J7jAgAXsu",
                                            "href": "javascript:void(0)",
                                            "class": "ml-3 text-gray-500"
                                        },
                                        "children": [
                                            {
                                                "tag": "svg",
                                                "attributes": {
                                                    "data-uuid": "p3HyylFzt4OZdMAr8VZjk",
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
                                                            "data-uuid": "SfaMfUonOy239yAghJPVf",
                                                            "stroke": "none",
                                                            "d": "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                        }
                                                    },
                                                    {
                                                        "tag": "circle",
                                                        "attributes": {
                                                            "data-uuid": "J_2L2r8KNcrCzDFevaKAx",
                                                            "cx": "4",
                                                            "cy": "4",
                                                            "r": "2",
                                                            "stroke": "none"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const FrameContent = () => {
    const { document: frameDocument, window: frameWindow }:FrameContextProps = useFrame();

    function handleSetSelectedElement(event: MouseEvent | null) {
        console.log(event)
        if(event) {
            const uuid = (event.target as HTMLElement).getAttribute('data-uuid');
            console.log(uuid)
            // Search for the Object
            const a = findParentObjectWithValue(jsonFromRedux, uuid)
            console.log(a)

        }
    }
    // console.log(event.target.getBoundingClientRect())

    function onLoad() {
        if(!frameDocument) return;

        frameDocument.addEventListener("click", handleSetSelectedElement);
        return () => {
            frameDocument.removeEventListener("click", handleSetSelectedElement);
        }
    }

    useEffect(() => {
        onLoad()
    }, [])

};

export default FrameContent;

interface FrameContextProps {
    document?: Document | undefined;
    window?: Window | undefined;
}
