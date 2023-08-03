class Converter {
    content: string | object;

    constructor(content: string | object) {
        this.content = content;
    }

    // TODO: Component ID
    htmlToJson(): object {
        if (typeof this.content !== 'string') {
            throw new Error('Content must be an HTML string');
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(this.content, 'text/html');
        const rootElement = doc.body.firstChild;

        if(rootElement) {
            return this.parseElement(rootElement as HTMLElement);
        }
        return {}
    }

    jsonToHtml(): string {
        if (typeof this.content !== 'object' || this.content === null) {
            throw new Error('Content must be a valid JSON object');
        }
    
        return this.buildElement(this.content);
    }

    private buildElement(json: any): string {
        if (!json || typeof json !== 'object' || !json.tag) {
          throw new Error('Invalid JSON format. Missing "tag" property.');
        }
    
        const { tag, attributes, children, text } = json;
        let html = `<${tag}`;
    
        if (attributes && typeof attributes === 'object') {
          for (const [attrName, attrValue] of Object.entries(attributes)) {
            html += ` ${attrName}="${attrValue}"`;
          }
        }
    
        if (children && Array.isArray(children) && children.length > 0) {
          html += '>';
          for (const child of children) {
            html += this.buildElement(child);
          }
          html += `</${tag}>`;
        } else if (text !== undefined) {
          html += `>${text}</${tag}>`;
        } else {
          html += '/>';
        }
    
        return html;
      }

    private parseElement(element: HTMLElement): object {
        const json: any = {};
        json.tag = element.tagName.toLowerCase();

        if (element.hasAttributes()) {
            const attributes: { [key: string]: string } = {};
            for (const attr of element.attributes) {
                attributes[attr.name] = attr.value;
            }
            json.attributes = attributes;
        }

        if (element.hasChildNodes()) {
            json.children = [];
            for (const childNode of element.childNodes) {
                if (childNode.nodeType === Node.ELEMENT_NODE) {
                    json.children.push(this.parseElement(childNode as HTMLElement));
                } else if (childNode.nodeType === Node.TEXT_NODE) {
                    json.text = childNode.textContent?.trim();
                }
            }
        }

        return json;
    }
}

export default Converter;
