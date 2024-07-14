import React, { useEffect } from 'react';
import WorkspaceView from './editor/workspace/WorkspaceView';
import { useDispatch } from 'react-redux';
import { getActiveContentJSON } from '../store/features/frameInfo/frameInfoSelectors';
import { setContent } from '../store/features/frameInfo/frameInfoSlice';



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




// Default Components
// Button, Inputs

// Component Selected

//Components bucket
// const components = [

// ]


const componentTest = {
  name: "Button", // To specify the component type, in this case, "Button"
  properties: {
    block: {
      current: true
    },
    size: {
      current: "lg",
      options: [
        { value: "sm", label: "Small", className: "text-sm" },
        { value: "md", label: "Medium", className: "button-small" },
        { value: "lg", label: "Large", className: "button-lg" }
      ]
    },
  }
}

function GUICOmponentSelect({ currentValue, values }) {
  return (
    <div className="flex align-center">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={values.current} />
        </SelectTrigger>
        <SelectContent>
          {values.options.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function GUIComponentBoolean() {
  return (
    <div className="flex align-center">

    </div>
  )
}

function GUIComponentProperty({ property }) {
  return Object.keys(property).map(propertyName => {
    const propertyValues = property[propertyName];

    const isSelect = propertyValues.options;
    const isBoolean = typeof propertyValues.current === 'boolean';

    return (
      <div key={propertyName}>

        {isSelect && (
          <div className="flex">
            <p className="w-[100px]">{propertyName}</p>
            <GUICOmponentSelect values={propertyValues} />
          </div>
        )}

        {isBoolean && (
          <div className="flex">
            <p className="w-[100px]">{propertyName}</p>
            <input type="checkbox" checked={propertyValues.current} />
          </div>
        )}

      </div>
    );
  });
}

function GUIComponent({ component }) {
  return (
    <div>
      <span className="font-bold text-lg">{component.name}</span>
      <GUIComponentProperty property={component.properties} />
    </div>
  )
}




function App() {
  const activeContent = getActiveContentJSON()
  console.log("activeContent", activeContent)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setContent())
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex h-full">

        <main className="border-4 border-red-500 w-full flex grow flex-col overflow-hidden relative h-full">
          <div className="flex flex-col grow">
            <div className="flex flex-col grow h-full">
              <WorkspaceView />
            </div>
          </div>
        </main>

        {/* TODO: When you click show componentn here */}
        <aside className="w-[400px] p-8">
          <GUIComponent component={componentTest} />
        </aside>

      </div>
    </div>
  )
}

export default App
