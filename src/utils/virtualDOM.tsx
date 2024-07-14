// {
//   "tag": "Button",
//   "name": "Button",
//   "properties": {
//     "size": {
//       "current": "lg",
//       "options": [
//         { "value": "sm", "label": "Small", "className": "text-sm" },
//         { "value": "md", "label": "Medium", "className": "button-small" },
//         { "value": "lg", "label": "Large", "className": "button-lg" }
//       ]
//     },
//     "block": {
//       "current": true
//     },
//     "isLoading": {
//       "current": false
//     },
//     "iconPosition": {
//       "current": "right",
//       "options": ["left", "right"]
//     }
//   }
// }


interface IVComponent {
  name: string
  properties: IVComponentProperties
}

interface IVComponentProperties {
  url?: string
  customProperties?: {
    [key: string]: {
      label: string; // Label for the custom property
      className: string; // CSS class associated with the custom property
    };
  };
}




interface IVButtonProps {
  component: string; // To specify the component type, in this case, "Button"
  properties: IVComponentProperties & {
    size: {
      current: string; // Current selected size, e.g., "lg"
      options: {
        value: string; // Size option value, e.g., "sm", "md", "lg"
        label: string; // Optional label for display purposes, e.g., "Small", "Medium", "Large"
        className: string; // CSS class associated with this size option, e.g., "text-sm", "button-small", "button-lg"
      }[];
    };
    block: {
      current: boolean; // Boolean indicating if the button should be block level
    };
    isLoading: {
      current: boolean; // Boolean indicating if the button is in loading state
    };
    iconPosition: {
      current: string; // Current icon position, e.g., "left", "right"
      options: string[]; // Available icon position options
    };
  };
}






const componentObj = {
  // custom attr
  type: "button",
  name: "Button Component",
  props: {
    "kind": "solid",
    "variant": "primary",
    "disabled": true

  }
}

{/* <Button 
  kind="solid"
  variant="primary"
  disabled
/> */}


// Representation
const elementObj = {
  type: "div",
  key: null,
  ref: null,
  props: {
    children: {
      type: "h1",
      key: null,
      ref: null,
      props: {
        id: "title",
        children: "Hello World!"
      }
    }
  }
}




class VirtualDOM {
  // Tag, Props, Children
  // creates node
  createElement(tagName, { attrs = {}, children = [] } = {}) {
    return {
      tagName,
      attrs,
      children,
    };
  }


  //mount, unmount, patch


}


// Diffing algorithm/Reconciliation




// class VirtualDOM {
//   createElement(tagName, { attrs = {}, children = [] } = {}) {
//       return {
//           tagName,
//           attrs,
//           children,
//       };
//   }

//   findParentObjectWithValue(obj, targetValue) {
//       if (obj.attrs && obj.attrs['data-uuid'] === targetValue) {
//           return obj;
//       }

//       if (obj.children && obj.children.length > 0) {
//           for (const child of obj.children) {
//               const result = this.findParentObjectWithValue(child, targetValue);
//               if (result) {
//                   return result;
//               }
//           }
//       }
//       return null;
//   }

//   updateJsonObject(oldVTree, updatedObject) {
//       const objectID = updatedObject.attrs['data-uuid'];

//       const findAndUpdateObject = (objects) => {
//           return objects.map(obj => {
//               if (obj.attrs && obj.attrs['data-uuid'] === objectID) {
//                   return {
//                       ...updatedObject,
//                       children: obj.children,
//                   };
//               } else if (obj.children) {
//                   const updatedChildren = findAndUpdateObject(obj.children);
//                   return {
//                       ...obj,
//                       children: updatedChildren
//                   };
//               } else {
//                   return obj;
//               }
//           });
//       };

//       return findAndUpdateObject([oldVTree])[0];
//   }

//   diff(oldVTree, newVTree) {
//       const render = this.render.bind(this);

//       const zip = (xs, ys) => {
//           const zipped = [];
//           for (let i = 0; i < Math.min(xs.length, ys.length); i++) {
//               zipped.push([xs[i], ys[i]]);
//           }
//           return zipped;
//       };

//       const diffAttrs = (oldAttrs, newAttrs) => {
//           const patches = [];

//           for (const [k, v] of Object.entries(newAttrs)) {
//               patches.push($node => {
//                   $node.setAttribute(k, v);
//                   return $node;
//               });
//           }

//           for (const k in oldAttrs) {
//               if (!(k in newAttrs)) {
//                   patches.push($node => {
//                       $node.removeAttribute(k);
//                       return $node;
//                   });
//               }
//           }

//           return $node => {
//               for (const patch of patches) {
//                   patch($node);
//               }
//               return $node;
//           };
//       };

//       const diffChildren = (oldVChildren, newVChildren) => {
//           const childPatches = [];
//           oldVChildren.forEach((oldVChild, i) => {
//               childPatches.push(this.diff(oldVChild, newVChildren[i]));
//           });

//           const additionalPatches = [];
//           for (const additionalVChild of newVChildren.slice(oldVChildren.length)) {
//               additionalPatches.push($node => {
//                   $node.appendChild(render(additionalVChild));
//                   return $node;
//               });
//           }

//           return $parent => {
//               for (const [patch, $child] of zip(childPatches, $parent.childNodes)) {
//                   patch($child);
//               }

//               for (const patch of additionalPatches) {
//                   patch($parent);
//               }
//               return $parent;
//           };
//       };

//       if (newVTree === undefined) {
//           return $node => {
//               $node.remove();
//               return undefined;
//           };
//       }

//       if (typeof oldVTree === 'string' || typeof newVTree === 'string') {
//           if (oldVTree !== newVTree) {
//               return $node => {
//                   const $newNode = render(newVTree);
//                   $node.replaceWith($newNode);
//                   return $newNode;
//               };
//           } else {
//               return $node => $node;
//           }
//       }

//       if (oldVTree.tagName !== newVTree.tagName) {
//           return $node => {
//               const $newNode = render(newVTree);
//               $node.replaceWith($newNode);
//               return $newNode;
//           };
//       }

//       const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
//       const patchChildren = diffChildren(oldVTree.children, newVTree.children);

//       return $node => {
//           patchAttrs($node);
//           patchChildren($node);
//           return $node;
//       };
//   }

//   render(vNode) {
//       const renderElem = ({ tagName, attrs, children }) => {
//           const $el = document.createElement(tagName);

//           for (const [k, v] of Object.entries(attrs)) {
//               $el.setAttribute(k, v);
//           }

//           for (const child of children) {
//               $el.appendChild(this.render(child));
//           }

//           return $el;
//       };

//       if (typeof vNode === 'string') {
//           return document.createTextNode(vNode);
//       }
//       return renderElem(vNode);
//   }

//   mount($node, $target) {
//       $target.replaceWith($node);
//       return $node;
//   }
// }

// export default VirtualDOM;
