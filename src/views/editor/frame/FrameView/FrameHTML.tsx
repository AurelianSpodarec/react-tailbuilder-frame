import { useState, useRef } from 'react';
import Frame from 'react-frame-component';
 
import tailwindcss from '../container/tailwindcss';
import FrameContent from '../FrameContent/FrameContent';
import Converter from '../../../../utils/converter';

// const randomHTML = `
//     <div>
//         <h1 class="text-2xl text-red-500">Heading H1</h1>
//         <div class="bg-green-500 h-10 w-10">
//         </div>
//     </div>
// `



// What is a component? Made of Elements and it can have custom properties
// Use can create random properties and then assign something
// It has PROPERTIES: Variant, Boolean, Instance Swap, Text

// Example properties one can add: 
// Size: Small, Medium, large
// State: Default, Hover

// What is the property going to affect? Padding, state, color, background color... ?
// If user creates a new property called "SIZE", what will this change? padding, font

// Component: Button
// --------------------------------------------------
// Property = Size
// Size = small:: padding: 3px, fontSize: 5px
// Size = medium:: paddingg: 5px, fontSize: 7px
// Property = Type
// Type = primary:: bgColor: red, text: black
// Type = secondary:: bgColor: green, text: black

// User can create a component and give it a name
// User can set custom properties
// - Properties will have custom names that will affect certain CSS/class properties

// const components = [
//     {
//         id: "xxx",
//         name: "Button",
//         slug: "button", //unique
//         // tag?
//         properties: { // custom properties
//             // size: {
//             //     // default
//             //     padding: "py-2 px-2",
//             //     fontSize: "text-2xl",
//             //     small: {
//             //         padding: "py-4 px-4",
//             //         fontSize: "text-2xl",
//             //     },
//             //     medium: {
//             //         padding: "py-10 px-10",
//             //         fontSize: "text-5xl",
//             //     }
//             // }
//         }
//     }
// ]



const components = [
    {
        id: "xxx",
        name: "Button",
        slug: "button", //unique
        html: `<button data-componentID="xxx" type="button" className="py-2 px-2 text-2xl>{buttonText}</button>`
    },
    {
        id: "xxx-xxx",
        name: "Card",
        slug: "card",
        html: `<div class="border p-4">{text}</div>`
    }
]

// Above will result in:
// If we select: Button, Size = small, we get:
const dummyComponent = `
    <button data-componentID="xxx" type="button" className="py-2 px-2 text-2xl>Button</button>
`

// const randomHTML = `
// <div>
//   <h2 class="text-sm font-medium text-gray-500">Pinned Projects</h2>
//   <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
//     <li class="col-span-1 flex rounded-md shadow-sm">
//       <div class="flex w-16 flex-shrink-0 items-center justify-center bg-pink-600 rounded-l-md text-sm font-medium text-white">GA</div>
//       <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
//         <div class="flex-1 truncate px-4 py-2 text-sm">
//           <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
//           <p class="text-gray-500">16 Members</p>
//         </div>
//         <div class="flex-shrink-0 pr-2">
//           <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//             <span class="sr-only">Open options</span>
//             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//     <li class="col-span-1 flex rounded-md shadow-sm">
//       <div class="flex w-16 flex-shrink-0 items-center justify-center bg-purple-600 rounded-l-md text-sm font-medium text-white">CD</div>
//       <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
//         <div class="flex-1 truncate px-4 py-2 text-sm">
//           <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Component Design</a>
//           <p class="text-gray-500">12 Members</p>
//         </div>
//         <div class="flex-shrink-0 pr-2">
//           <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//             <span class="sr-only">Open options</span>
//             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//     <li class="col-span-1 flex rounded-md shadow-sm">
//       <div class="flex w-16 flex-shrink-0 items-center justify-center bg-yellow-500 rounded-l-md text-sm font-medium text-white">T</div>
//       <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
//         <div class="flex-1 truncate px-4 py-2 text-sm">
//           <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Templates</a>
//           <p class="text-gray-500">16 Members</p>
//         </div>
//         <div class="flex-shrink-0 pr-2">
//           <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//             <span class="sr-only">Open options</span>
//             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//     <li class="col-span-1 flex rounded-md shadow-sm">
//       <div class="flex w-16 flex-shrink-0 items-center justify-center bg-green-500 rounded-l-md text-sm font-medium text-white">RC</div>
//       <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
//         <div class="flex-1 truncate px-4 py-2 text-sm">
//           <a href="#" class="font-medium text-gray-900 hover:text-gray-600">React Components</a>
//           <p class="text-gray-500">8 Members</p>
//         </div>
//         <div class="flex-shrink-0 pr-2">
//           <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//             <span class="sr-only">Open options</span>
//             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>`

const HTMLcanvas = `<header data-uuid="kCuROtNcpaZY5DH2-pwZS" class="text-gray-600 body-font"><div data-uuid="wgbxPwl9Pnozy4Dbeo3P2" class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"><a data-uuid="ZNuMf2R3Z5YqkerOrLaxp" href="javascript:void(0)" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"><svg data-uuid="9eE1FolaX5o1yIbTUP5vB" class="w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path data-uuid="Rf__zt8X6Tg7DprtfWjDh" d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/></svg><span data-uuid="NkWQju-orJFagMo8SBRR1" class="ml-3 text-xl">TailBuilder</span></a><nav data-uuid="VHh7IAoAUC_cu2aPHr77S" class="md:ml-auto flex flex-wrap items-center text-base justify-center"><a data-uuid="tWNx1M9oJ6-u-xNkRB_DO" href="javascript:void(0)" class="mr-5 hover:text-gray-900">First Link</a><a data-uuid="bPqYl8xn5jcxvJ8TFiiip" href="javascript:void(0)" class="mr-5 hover:text-gray-900">Second Link</a><a data-uuid="erNFk4N6PBHsxAVZqlU3g" href="javascript:void(0)" class="mr-5 hover:text-gray-900">Third Link</a><a data-uuid="Io_ozfEdGItHvkdOZbfnw" href="javascript:void(0)" class="mr-5 hover:text-gray-900">Fourth Link</a></nav><button data-uuid="NMB4iVSBesNU4ghSBBOYe" class="inline-flex items-center bg-brand-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-white mt-4 md:mt-0">Button</button></div></header><section data-uuid="nY_ms_FjLFCP8KQc3mgQ4" class="text-gray-600 body-font"><div data-uuid="eBR6EW9W-EJ2fxRUXPOsf" class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"><img data-uuid="FXUxfGImOTq05OQaOpyKH" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/><div data-uuid="VK54kZxbf9ZF_xvvZMihw" class="text-center lg:w-2/3 w-full"><h1 data-uuid="jjRAnT6Ux_3MZ9LO30jL4" class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1><p data-uuid="9ThuhP2tgrNEV7FGNxdua" class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p><div data-uuid="RyXMLVLOqjktOexofxQfB" class="flex justify-center"><button data-uuid="uzqUVqhAxvCHfDikWjlqX" class="inline-flex text-white bg-brand-500  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button><button data-uuid="mWz59K00sBscSJMZcdfzf" class="ml-4 inline-flex text-brand-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button></div></div></div></section><section data-uuid="V62lnPzLkdrNVxuBmxumV" class="text-gray-600 body-font"><div data-uuid="e2N5Pw7whQKlbtoml1lcy" class="container px-5 py-24 mx-auto"><div data-uuid="u2IThJk-drAdTRCbjAgkj" class="flex flex-wrap -m-4 text-center"><div data-uuid="uyEkjaZH30DfclEOMOA_P" class="p-4 sm:w-1/4 w-1/2"><h2 data-uuid="eiQec4YEaUWSb8t_9vEpB" class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2><p data-uuid="UPYLmlYDpboiiN1MdVCpT" class="leading-relaxed">Users</p></div><div data-uuid="8jlLZVmYalau7m1ScIcw9" class="p-4 sm:w-1/4 w-1/2"><h2 data-uuid="bG_1Kc_77LYVbq45XX-aL" class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2><p data-uuid="EKQMpmEiVji8NxPs5psjM" class="leading-relaxed">Subscribes</p></div><div data-uuid="OCtEmErK7eHsSghfzLSaB" class="p-4 sm:w-1/4 w-1/2"><h2 data-uuid="g3WH6sV3vPQ1esARpyWN6" class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2><p data-uuid="op5Urv6TEjPk_yFIKjqA2" class="leading-relaxed">Downloads</p></div><div data-uuid="6UQw1j3vQVFfZZKotTa_3" class="p-4 sm:w-1/4 w-1/2"><h2 data-uuid="GfCPo1T-oWmTLkC4ULc2a" class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2><p data-uuid="9ZVKqAXeMVvvXYbSyw82l" class="leading-relaxed">Products</p></div></div></div></section><section data-uuid="GRzEoK2kksEk92OFpHWoA" class="text-gray-600 body-font"><div data-uuid="GErVxNeEIF3BmClMhbjCo" class="container px-5 py-24 mx-auto flex flex-wrap"><div data-uuid="Pf4BdQYnGupoUaB36zQ41" class="lg:w-2/3 mx-auto"><div data-uuid="gtCF73ItqGGwKfGzvSvdA" class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"><img data-uuid="L7ROPAv69mW0ixZYULNSX" alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340"/><div data-uuid="wichEt0istAWWp_7LQ4_x" class="text-center relative z-10 w-full"><h2 data-uuid="CkZr6l3_sH1rljrT2MJqP" class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2><p data-uuid="9_1Cb9UbbmZnX-_mWD3vk" class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p><a data-uuid="a5V6atqfqN-aSCOmryShV" class="mt-3 text-indigo-500 inline-flex items-center"><svg data-uuid="QzdtGjmAfiL1RU9ZMDNKA" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path data-uuid="oqW8j40iEOtGCPPFmmZ3Z" d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div><div data-uuid="Purac7-ekTWbS-z9WuL65" class="flex flex-wrap -mx-2"><div data-uuid="ePUtl9t3uOekh4R2he_xQ" class="px-2 w-1/2"><div data-uuid="pnG4BOk7hXmQ-S-rkSjDO" class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"><img data-uuid="P1QX7oR5ryRtiBxwSYW-E" alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460"/><div data-uuid="Jrq01ZMlEsj7uiYGY2ZUf" class="text-center relative z-10 w-full"><h2 data-uuid="JVWw_TTG3EvaYvzEeVjg6" class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2><p data-uuid="I8m7CALWfhUGjcbQaJ96v" class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p><a data-uuid="WnZiroODRMzCnLqesP26_" class="mt-3 text-indigo-500 inline-flex items-center"><svg data-uuid="jHFu-Tkm_6ZNuwnW5j2R9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path data-uuid="J7BPacoKzodn332_7K-HM" d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div></div><div data-uuid="XPyRL5fZ9g0iYpxwCdkVp" class="px-2 w-1/2"><div data-uuid="s2cO7vFMTLPL1EVqfgYa5" class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"><img data-uuid="R6NOfN0WPvul8T3a6-byn" alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420"/><div data-uuid="hNv6Vh60ZASxPbE_squ33" class="text-center relative z-10 w-full"><h2 data-uuid="Yt0Wk5r85kTGwVBl5ASlJ" class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2><p data-uuid="2uWKwCu5m4fJ1h6YXp0F2" class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p><a data-uuid="nIN0lRzN3cJHhjAUHQwPD" class="mt-3 text-indigo-500 inline-flex items-center"><svg data-uuid="ZBffkJBWwszUJ8YxAhsUF" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path data-uuid="CKPP_zBWBmL_2tgmZsU21" d="M5 12h14M12 5l7 7-7 7"/></svg></a></div></div></div></div></div></div></section><section data-uuid="zxqIxna31ejopP75I2KE4" class="text-gray-600 body-font overflow-hidden"><div data-uuid="dO21ySW6FDUNDUlboYG7s" class="container px-5 py-24 mx-auto"><div data-uuid="nzjrpxbqflzCXBU6DbZtP" class="flex flex-col text-center w-full mb-20"><h1 data-uuid="M-b6vfr2VQJi_8tPX0GQN" class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1><p data-uuid="mpTItACo-_0u5WK2m-SWd" class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p><div data-uuid="8i4pF2lE5lFex21EjzedZ" class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6"><button data-uuid="urDgZ5-IpibD7grJFR4gA" class="py-1 px-4 bg-brand-500  text-white focus:outline-none">Monthly</button><button data-uuid="mg1u58zrjH9gFHEwp5oxj" class="py-1 px-4 focus:outline-none">Annually</button></div></div><div data-uuid="77s6rVgQDE-pNMvPWjg1B" class="flex flex-wrap -m-4"><div data-uuid="WDmkP9y_5pCZfzWylMzpg" class="p-4 xl:w-1/4 md:w-1/2 w-full"><div data-uuid="CxDAmWcQJVi-yDZ3Xdf1x" class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"><h2 data-uuid="e9qtVnQ1U5txGiGvUlVU2" class="text-sm tracking-widest title-font mb-1 font-medium">START</h2><h1 data-uuid="DwaKUd7sKNi3lRlg6rxjF" class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1><p data-uuid="iqGr4g_VWc6Ewq-xbiBtV" class="flex items-center text-gray-600 mb-2"><span data-uuid="8HrHQDD-iibEcelJv9w11" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="ip0eXS40tcEllDGB_3c8u" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="JnhfBCP-ttFoiGE-iH1T_" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="jEKowgIIq9_dHxjPzsLGL" class="flex items-center text-gray-600 mb-2"><span data-uuid="i30cX-pgapIZbulHTnvNr" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="ZEr7u3yUMw2k57dpzFDyL" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="87OkcNkUrlG6orRVavjbO" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="c9_b2a_2yVQjmCPM9tOc_" class="flex items-center text-gray-600 mb-6"><span data-uuid="YAifgSa8K3wHomUelIBet" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="9RnIn2UyDWOhV5NrEF4Wj" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="2NPPC6PIKV7TLdWrDREG3" d="M20 6L9 17l-5-5"/></svg></span></p><button data-uuid="hkXEMhbUwovUAnRgQKsCa" class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"><svg data-uuid="1WZ4RSz8wA-XHgVm0IasY" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path data-uuid="mwcL8VaYTP52xExI80Ozh" d="M5 12h14M12 5l7 7-7 7"/></svg></button><p data-uuid="VkPhU31yILtwmdqkBu7OJ" class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p></div></div><div data-uuid="0h9SdW4sHhghbGBUUT7ZH" class="p-4 xl:w-1/4 md:w-1/2 w-full"><div data-uuid="HrfyKYmBjYROYs2xFlQr-" class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden"><span data-uuid="lX5XYaJPDHIypUSrHSkuI" class="bg-brand-500  text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span><h2 data-uuid="Zp52mSTtlAutgtPEzTGuC" class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2><h1 data-uuid="1X3u6SzSCBDQB-xVzHzV_" class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"><span data-uuid="s5VrArucMJaClFLryB3Ih">$38</span><span data-uuid="z0m5GsD9iCH_oXCargCIM" class="text-lg ml-1 font-normal text-gray-500">/mo</span></h1><p data-uuid="tuGOmygJZA3EycHklQ8Uj" class="flex items-center text-gray-600 mb-2"><span data-uuid="_S2bVK7SCvY8nwUNhNyTL" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="nDaPksM-t3efxJX2I92KN" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="5SDTFmN2A8r6jQ-sWe2A7" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="9WjKFgU7Z8hlk-4Z_snjg" class="flex items-center text-gray-600 mb-2"><span data-uuid="pmp4jni0EIXrBe-8c7KQh" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="XQ5XgjjI_v1yJBT1U1M6J" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="AMauCe6LPjRKzG6rGsJ3C" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="2loUPkKogj1HChPQqjrf6" class="flex items-center text-gray-600 mb-2"><span data-uuid="DyohfiG60yaMCSeixRVnK" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="3NuFoBK7NDChD9dS5iZxl" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="qBS2cOH05PYYfkI_iqffX" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="71gH-N5H4lYvQJ-BxjwnT" class="flex items-center text-gray-600 mb-6"><span data-uuid="bqxIuAxrD5Ghl_iW0LoO4" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="tm59MYMB18vIJbffkMDXw" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="1AwgbFRrupNtxaNh8TUmF" d="M20 6L9 17l-5-5"/></svg></span></p><button data-uuid="mghNIr_Hp-pVNi0hsa1Rf" class="flex items-center mt-auto text-white bg-brand-500  border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"><svg data-uuid="h8K4bJiHcP2LpoQJJIRZW" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path data-uuid="f3EiuCKn3aZdA2G3lGbd9" d="M5 12h14M12 5l7 7-7 7"/></svg></button><p data-uuid="WRAOYaH6A8aNQ0aoAn005" class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p></div></div><div data-uuid="RgQQ5QHMR2nD8qb6U3-Yo" class="p-4 xl:w-1/4 md:w-1/2 w-full"><div data-uuid="q6v2SXIw6RfR5XDC16dS3" class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"><h2 data-uuid="hqUHQiAZEG3K3_DSBZddp" class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2><h1 data-uuid="mtkRiqmxpl2_1SQ47p5kk" class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"><span data-uuid="fn8eVYVWN11HgwNPskr8a">$56</span><span data-uuid="DUGhbkIkVKTvOT-0P8F79" class="text-lg ml-1 font-normal text-gray-500">/mo</span></h1><p data-uuid="Z9nYu4srty9aLBXxoqKmL" class="flex items-center text-gray-600 mb-2"><span data-uuid="HsflvqXfcoKOTVfMVzH7x" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="eLw7zgsC7Njv5_H4y-A8i" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="1PcMfbZjgGfJTuxIsF3gz" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="22iiF4hweNG9hblS4JV_I" class="flex items-center text-gray-600 mb-2"><span data-uuid="aglQI5HNy7B_Nl0Fmh-O8" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="vCoSIWAM4Zhiru_vM1rL5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="77o7b1bEjsklqVlH5wDSz" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="AV3cpGjh5j1hZhRvYTZeg" class="flex items-center text-gray-600 mb-2"><span data-uuid="SLGuSfjr3DsEBtK-CsT_Y" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="j1vq6tqQCOBgKkfN5ub2M" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="s0lM7qJK15glPfEvg-Py4" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="DM9Ahv4XJGbrCcJrN2n7_" class="flex items-center text-gray-600 mb-2"><span data-uuid="D2NubWGhAIDTot1qofFf4" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="YYpFqZpX80Ty1tZ4SkNxE" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="xuKyF-yAwes1930sRPC6E" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="2h1cMoXlxHGG5VFrBOkXg" class="flex items-center text-gray-600 mb-6"><span data-uuid="ejLkuWyfnT2ojXAGCyMsW" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="Cb6y8OX-Lm1Z1mXIE3HET" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="Ui71-gJ2sxTWjLFNB-9m-" d="M20 6L9 17l-5-5"/></svg></span></p><button data-uuid="t9g-aTQOpwQu6XMX0vzdX" class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"><svg data-uuid="_CmaeV-TU6nIZ-vfnBIPQ" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path data-uuid="qFpLlbXQ7m4ILTgMvJ7ub" d="M5 12h14M12 5l7 7-7 7"/></svg></button><p data-uuid="g0_2GkS6ebv_zVA1BYBHs" class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p></div></div><div data-uuid="XWj1CwCbdnSTd2T0kJzH2" class="p-4 xl:w-1/4 md:w-1/2 w-full"><div data-uuid="YZR-VxZ7KhmL2nMNMxgTW" class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"><h2 data-uuid="Tk9FAPzz-h0syGwOFts6P" class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2><h1 data-uuid="Ax5Fc3m6D-bkRP6q-sN9Y" class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200"><span data-uuid="84k3Pi0VsmeyGR9YMa8cK">$72</span><span data-uuid="oVWLObDvowS42E8P9PAuj" class="text-lg ml-1 font-normal text-gray-500">/mo</span></h1><p data-uuid="62dTkoMhLXngDZUBfn749" class="flex items-center text-gray-600 mb-2"><span data-uuid="QwkIHkgGGcQdnVOnDs7xe" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="ghCUGtXPXia6U_QnNycn_" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="FHOGxszNgxUvK98tbtYSZ" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="sErbqtVS6dEv5UlnNpZ06" class="flex items-center text-gray-600 mb-2"><span data-uuid="08r_JDWpabEGTJhDUudvB" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="WIGXKF59ZYkyv17-yC6Xb" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="YDGHQaDZeeiw-BfJj5-l3" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="P3YQvXRAesWxYVlleeDK3" class="flex items-center text-gray-600 mb-2"><span data-uuid="rN4mN2JhMMXiqryjohmhY" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="xrirY9G6Wq7bPqDgXdApw" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="f36a2OcuWWba-LlkTzKZZ" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="-axowqUOjc0In0p7B5BcA" class="flex items-center text-gray-600 mb-2"><span data-uuid="sZLw23KYHge9FoCkyMYIO" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="dT8DqiXY0JM-HpGvWYmDF" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="B5pCGXpzV6PJ_ik62hASN" d="M20 6L9 17l-5-5"/></svg></span></p><p data-uuid="fwLfksL7hoi7aVNGvFuSl" class="flex items-center text-gray-600 mb-6"><span data-uuid="wdhSrEUIPjeFkXJ91Z_Nh" class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"><svg data-uuid="CT_jyfIRSKIt8FXBewDSp" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24"><path data-uuid="kNw0EQ6PPyOkgTCbx4ocn" d="M20 6L9 17l-5-5"/></svg></span></p><button data-uuid="1AJRVFflmvAjFNQO-vOdu" class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-brand-500 rounded"><svg data-uuid="E95OFPqpS2koa99wOOtxe" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24"><path data-uuid="Eb0Cx-mgEASKVVRJ_CdiI" d="M5 12h14M12 5l7 7-7 7"/></svg></button><p data-uuid="PTK14tMQyTg0PpLJ3pGCo" class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p></div></div></div></div></section><section data-uuid="gCOrZgXN0iJTe2kZ_qlr6" class="text-gray-600 body-font"><div data-uuid="RGvxCleFaoAtxFfB36AoQ" class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col"><div data-uuid="OtKZrEsn0y3VB3wACQBzr" class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"><h2 data-uuid="9ikV1rtesubT7WTafQg9q" class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2><h1 data-uuid="Wx5CE-Xz_Hp0UL0qIuopt" class="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1></div><div data-uuid="1aYMvr1LFUh-V3RDT4akY" class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"><button data-uuid="hjkp1ht4ABh0N_0D5XhBP" class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"><svg data-uuid="65_-aMxrGlcIIhb9_ANKl" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512"><path data-uuid="INBNn8V7--ddTgSpWWx1V" d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"/></svg><span data-uuid="LBtb7_WiTkv-Hgu1khIJ4" class="ml-4 flex items-start flex-col leading-none"><span data-uuid="B7T2KTzrYqypCLfnwAr6s" class="text-xs text-gray-600 mb-1">GET IT ON</span><span data-uuid="HjtbOK28jH22F0sY7gJ9u" class="title-font font-medium">Google Play</span></span></button><button data-uuid="7eHD1Q2WUS9i6_AZk1zQa" class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"><svg data-uuid="8-vYD9Sae9jQ3gqqevqIR" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305"><path data-uuid="9N4hTE9nEOrR8IovinAAx" d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"/><path data-uuid="7jMSOr8jwzqeNdcEmC6DX" d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"/></svg><span data-uuid="WqTxmqqK0XCj8aauM0dCK" class="ml-4 flex items-start flex-col leading-none"><span data-uuid="xrk5aqG0R7rnsXXWJl54k" class="text-xs text-gray-600 mb-1">Download on the</span><span data-uuid="CvGPrepEaZV2Ld0_m_Nb5" class="title-font font-medium">App Store</span></span></button></div></div></section><footer data-uuid="WZq2ljwcHSUAJjmA1DJGu" class="text-gray-600 body-font" contenteditable="true"><div data-uuid="I8ujF0mQYF41f2B_uK2KG" class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" contenteditable="true"><div data-uuid="fgLG9RLKqtSYYGdCTkK_A" class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"><a data-uuid="U3EDHe8hLm4gCAF-AQKxL" href="javascript:void(0)" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"><svg data-uuid="Wbd3bsknb4diT8l16Wp2I" class="w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path data-uuid="oNAzXqw2DF-2dCP5e_vKT" d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"/></svg><span data-uuid="lz3-Tb4PsJyZibdXNzxwi" class="ml-3 text-xl">TailBuilder</span></a><p data-uuid="xEbCd9448ZzSSy4H-mbHL" class="mt-2 text-sm text-gray-500">Best drag and drop tailwindcss builder no code required</p></div><div data-uuid="Bng-c9SA8In6crBLTelSi" class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"><div data-uuid="6Yz9sIEVvzwtAE_lFWxVI" class="lg:w-1/4 md:w-1/2 w-full px-4"><h2 data-uuid="4-1vNw1GkY_RGm3V5Nd7m" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2><nav data-uuid="gpF_L3fIhV4ZEGnwCGHnW" class="list-none mb-10"><li data-uuid="zikL3KVjFsC15P1_AvKB_"><a data-uuid="nwxcvto4fttNDzEqPEKnN" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">First Link</a></li><li data-uuid="zpP3EGY5LiEj-nN1kVwux"><a data-uuid="Esat_8bEAbG7xpd6N1l2B" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Second Link</a></li><li data-uuid="yFAXjytuje4RpqxQZZNym"><a data-uuid="2DF3KkJwiEG9I9XgvoNjT" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Third Link</a></li><li data-uuid="SJsZlw1nsE_GCeH9a-5vp"><a data-uuid="ZyRyhZqknvW4smM3800RG" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Fourth Link</a></li></nav></div><div data-uuid="uV8tpJhR-WsXwG2W3VFNe" class="lg:w-1/4 md:w-1/2 w-full px-4"><h2 data-uuid="V25lGaT9jtYP2FAx7UuhK" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2><nav data-uuid="tVhK-4KK-qselzMP2t4lM" class="list-none mb-10"><li data-uuid="pFpIuzYYN6iWS9x4qWmUX"><a data-uuid="SmX0nsmX89Nik1S_EJR-A" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">First Link</a></li><li data-uuid="Ip-zejl6U4v6DUMAjm_3M"><a data-uuid="lsnGEmjaB-aYbFGaVRVaw" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Second Link</a></li><li data-uuid="VVm5V9BPoB_7My0V1KWmM"><a data-uuid="aLgtYr2q_QsPaYmTYiqb6" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Third Link</a></li><li data-uuid="6ub7Wu0cDsnddlxeZ2mfs"><a data-uuid="a4Xd_G4LwF9fClw1h6wHI" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Fourth Link</a></li></nav></div><div data-uuid="GfM44_d2IwqetHIRr7eXP" class="lg:w-1/4 md:w-1/2 w-full px-4"><h2 data-uuid="ZssM2m462lvRT8PvJQKt8" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2><nav data-uuid="Ztm3VsqF6etGEzbjDzgaF" class="list-none mb-10"><li data-uuid="rVf_SvVBzAqCHRzvrrbjr"><a data-uuid="UslbyAuIIthXaa-AJudNB" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">First Link</a></li><li data-uuid="PHWSHjzMw_WKpWy6mAJma"><a data-uuid="CQYQwXA4MLz4kYlBl0cAb" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Second Link</a></li><li data-uuid="-E_nS00kf735mC-Rxi0o6"><a data-uuid="D4Vl9ifO00qi5az-UXR6p" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Third Link</a></li><li data-uuid="an6K_70BHdfDTDV_jUst9"><a data-uuid="SFbZo22kuAPO0EUY2E9vy" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Fourth Link</a></li></nav></div><div data-uuid="7uWmZnntvRfU40xK02F6i" class="lg:w-1/4 md:w-1/2 w-full px-4"><h2 data-uuid="x0tBZpw8FRoiASEtvsvmB" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2><nav data-uuid="e-KP5nt6rl03w-gmMGXnH" class="list-none mb-10"><li data-uuid="Y7aJ4nfuIQsM5d6kAX6HX"><a data-uuid="RLw6ArQa8_rhDjTdSacw4" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">First Link</a></li><li data-uuid="yIZ-S9Q3kc-pUph9mFAV7"><a data-uuid="EiOQ__kxCq9b-wVg4GIma" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Second Link</a></li><li data-uuid="7x8zsWrTtroqiZVAHSDoA"><a data-uuid="KzKWNOhzB0pdg7znRWr4C" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Third Link</a></li><li data-uuid="Hdb64D2Fq1QzLqoSfy1Pc"><a data-uuid="_GBMDn4ZOMhmuLY-TDXAO" href="javascript:void(0)" class="text-gray-600 hover:text-gray-800">Fourth Link</a></li></nav></div></div></div><div data-uuid="4MeS_JbxvaA7ku031mdFM" class="bg-gray-100"><div data-uuid="UimnletZmWzhpn7ZMFiO2" class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"><p data-uuid="0UWFic6pQ2-k-GlSgot-X" class="text-brand-500 text-sm text-center sm:text-left">© 2020 TailBuilder</p><span data-uuid="FeeTr3JV7P1jK_C_rgEHB" class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"><a data-uuid="W2gbpoat86_eUYyDRP91H" href="javascript:void(0)" class="text-gray-500"><svg data-uuid="iWH68iHZtlCnw6dJ_GRTq" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path data-uuid="MUAESpUa60V_4OBSkhwSF" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a><a data-uuid="l2_ORAhoopBvPBlwqAjvO" href="javascript:void(0)" class="ml-3 text-gray-500"><svg data-uuid="p8gEq7BncnKjjxkTHjN47" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><path data-uuid="EikE4sYnpT2HjY847x1DN" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a><a data-uuid="teG7AsRcvosbQNxvaveoH" href="javascript:void(0)" class="ml-3 text-gray-500"><svg data-uuid="Luja9lp4esH0VIJ1zun-R" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24"><rect data-uuid="Ar67X_SDfYsZKxBr6L_mN" width="20" height="20" x="2" y="2" rx="5" ry="5"/><path data-uuid="HChe6e7M14kOoMLt5rCy5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/></svg></a><a data-uuid="uPX80kFYX6g8J7jAgAXsu" href="javascript:void(0)" class="ml-3 text-gray-500"><svg data-uuid="p3HyylFzt4OZdMAr8VZjk" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"><path data-uuid="SfaMfUonOy239yAghJPVf" stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle data-uuid="J_2L2r8KNcrCzDFevaKAx" cx="4" cy="4" r="2" stroke="none"/></svg></a></span></div></div></footer>`

function FrameHTML() {
    const iFrameRef:Ref<HTMLIFrameElement> | undefined = useRef();
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});

    const htmlConverter = new Converter(HTMLcanvas)
    const pageJSON = htmlConverter.htmlToJson()
    console.log("HTMl to JSON", pageJSON)
    
    const jsonConverter = new Converter(pageJSON)
    const convertedJson = jsonConverter.jsonToHtml()

    // console.log("JSON to HTML", convertedJson)
    // console.log("Check HTML", HTMLcanvas === convertedJson)

    const activePageDOM = convertedJson // translate from JSON from database
    // const activePageDOM = "<div>hi</div>"
    if(!frameState.initialContent) return <></>
    return (
        <>
            <Frame
                id="frame"
                ref={iFrameRef}
                initialContent={frameState.initialContent}
                onLoad={event => event.stopPropagation()}
                className="min-h-full bg-white h-full w-full pointer-events-auto"
                loading="lazy"
            >
                <div className="h-full w-full frame-div" dangerouslySetInnerHTML={{__html: activePageDOM }} /> 
                <FrameContent />
            </Frame>
        </>
    );
}

export default FrameHTML;


// 1. Drag HTMl to Canvas
// 2. ADD IDs to HTMl Tags
// 3. Build JSON out of HTML on each change
// 3.x - Save to localstorage/redux persist
// 3.x - Save to database
// 4. Update JSON when user wants to change text and re-render that part of the HTML DOM

// [1, 2, 3] // currently working on
// [1, 2, ...] // save to database; connection interupted - partially saved data
// [1,2,3] // save to localstorage
// [1,1,2,2,3] // save to databse

// [1,2,3] // currently working on
// [1,2,3] // save to user 1 localstorage
// [mult-user] [3,4,5,6] // save to user 2 localstorage
// [mult-user] Uniqunes of [1,2,3,3,4,5,6] when both or any of the user saves to the database
// [1,2,3,4,5,6] - save to the dababase

// Concerns: 
