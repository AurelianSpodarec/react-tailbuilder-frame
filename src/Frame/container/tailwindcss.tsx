
function tailwindcss() {
    
    const initialContent = /*html*/`
        <!DOCTYPE html>
        <html class="h-full site-scrollbar">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="styles.css">
            </head>

            <body id="frame-body" class="bg-white h-full min-h-full w-full min-w-full">
                <div class="h-full"></div>

                <div id="drop-placeholder" class="block my-2  rounded border-dashed border-cyan-700 h-10" style="background-color: #f8f9fa; border-width: 2px; pointer-events: none; display: none;">
                <div class="h-full w-full justify-between flex items-center">
                    <p class="m-auto text-xs font-semibold">Your section will go here</p>
                </div>
                </div>
            </body>

            <script id="js-tailwindcss-cdn" src="https://cdn.tailwindcss.com"></script>
          
            <style>
                .frame-content {
                    height: 100%;
                }
            </style>
        </html>
    `;

    return initialContent;
}

export default tailwindcss;