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

const randomHTML = `
<div>
  <h2 class="text-sm font-medium text-gray-500">Pinned Projects</h2>
  <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div class="flex w-16 flex-shrink-0 items-center justify-center bg-pink-600 rounded-l-md text-sm font-medium text-white">GA</div>
      <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
          <p class="text-gray-500">16 Members</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div class="flex w-16 flex-shrink-0 items-center justify-center bg-purple-600 rounded-l-md text-sm font-medium text-white">CD</div>
      <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Component Design</a>
          <p class="text-gray-500">12 Members</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div class="flex w-16 flex-shrink-0 items-center justify-center bg-yellow-500 rounded-l-md text-sm font-medium text-white">T</div>
      <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="#" class="font-medium text-gray-900 hover:text-gray-600">Templates</a>
          <p class="text-gray-500">16 Members</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
    <li class="col-span-1 flex rounded-md shadow-sm">
      <div class="flex w-16 flex-shrink-0 items-center justify-center bg-green-500 rounded-l-md text-sm font-medium text-white">RC</div>
      <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <a href="#" class="font-medium text-gray-900 hover:text-gray-600">React Components</a>
          <p class="text-gray-500">8 Members</p>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>`


function FrameHTML() {
    const iFrameRef:Ref<HTMLIFrameElement> | undefined = useRef();
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});

    
    const htmlConverter = new Converter(randomHTML)
    const convertedHtml = htmlConverter.htmlToJson()
    console.log("Converted HTML", convertedHtml)
    
    const jsonConverter = new Converter(convertedHtml)
    const convertedJson = jsonConverter.jsonToHtml()

    console.log("JSON", convertedJson)
    console.log("Check HTML", randomHTML === convertedJson)

    const activePageDOM = convertedJson // translate from JSON from database

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
