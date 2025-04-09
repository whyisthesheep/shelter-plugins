(function(exports) {

"use strict";

//#region plugins/debloater/index.jsx
function onLoad() {
	const customCSS = `
        button[aria-label="Open sticker picker"],
        button[aria-label="Open GIF picker"],
        button[aria-label="Send a gift"],
        div[aria-label="Help"],
        div[aria-label="Inbox"],
        div[aria-label="Add Friends to DM"],
        #channel-attach-SLASH_COMMAND,
        div[aria-label="Explore Discoverable Servers"],
        li.channel__0aef5:nth-child(3),
        li.channel__0aef5:nth-child(4),
        div[aria-label="Family Centre"],
        div[aria-label="Clips"] {
            display: none !important;
        }
    `;
	const styleElement = document.createElement("style");
	styleElement.textContent = customCSS;
	document.head.appendChild(styleElement);
	console.log("Debloated CSS applied successfully!");
}

//#endregion
exports.onLoad = onLoad
return exports;
})({});