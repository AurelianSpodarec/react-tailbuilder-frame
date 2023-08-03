type ValidHTMLTagName = keyof HTMLElementTagNameMap;
type ValidHTMLTagNames = ValidHTMLTagName | Uppercase<ValidHTMLTagName>;

export const htmlTagNames: { 
    id: ValidHTMLTagNames; 
    name: string 
}[] = [
    {
        id: "BODY",
        name: "Body",
    },
    {
        id: "DIV",
        name: "Block",
    },
    {
        id: "A",
        name: "Link",
    },
    {
        id: "IMG",
        name: "Image",
    }
];
