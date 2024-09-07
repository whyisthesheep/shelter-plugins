const {
    util: { log }
} = shelter;

export function onLoad() {
    const svgElement = document.querySelector("#app-mount > div.appAsidePanelWrapper__5e6e2 > div.notAppAsidePanel__95814 > div.app_b1f720 > div > div.layers__1c917.layers_a23c37 > div > div > nav > ul > div.scroller_de945b.none_ff9f86.scrollerBase__65223 > div.tutorialContainer_b06ae6 > div > div.listItemWrapper__3d465.selected__501f5 > div > svg > foreignObject > div > div > svg");

    if (svgElement) {
        log("SVG element found!");
        
        const imgElement = document.createElement("img");
        imgElement.src = "https://api-minecraft.net/mrit63bn.png";
        
        imgElement.style.width = "48px";
        imgElement.style.height = "48px";
        imgElement.style.objectFit = "contain";
        imgElement.style.display = "block";
        imgElement.style.margin = "auto";
        imgElement.style.position = "absolute";
        imgElement.style.top = "50%";
        imgElement.style.left = "50%";
        imgElement.style.transform = "translate(-50%, -50%)";
        
        svgElement.parentNode.replaceChild(imgElement, svgElement);
    } else {
        log("Discord logo not found. Checking again in 1 second...");
    }
}
