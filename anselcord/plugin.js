(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/anselcord/index.jsx
  var anselcord_exports = {};
  __export(anselcord_exports, {
    onLoad: () => onLoad
  });
  var {
    util: {
      log
    }
  } = shelter;
  var menuimage = document.querySelector("#app-mount > div.appAsidePanelWrapper__5e6e2 > div.notAppAsidePanel__95814 > div.app_b1f720 > div > div.layers__1c917.layers_a23c37 > div > div > nav > ul > div.scroller_de945b.none_ff9f86.scrollerBase__65223 > div.tutorialContainer_b06ae6 > div > div.listItemWrapper__3d465.selected__501f5 > div > svg > foreignObject > div > div > img");
  var menusvg = document.querySelector("#app-mount > div.appAsidePanelWrapper__5e6e2 > div.notAppAsidePanel__95814 > div.app_b1f720 > div > div.layers__1c917.layers_a23c37 > div > div > nav > ul > div.scroller_de945b.none_ff9f86.scrollerBase__65223 > div.tutorialContainer_b06ae6 > div > div.listItemWrapper__3d465 > div > svg > foreignObject > div > div > svg");
  function onLoad() {
    if (menuimage) {
      log("Menu img");
      const udimagei = document.createElement("img");
      udimagei.src = "https://0x0.st/Xikk.png";
      udimagei.style.width = "48px";
      udimagei.style.height = "48px";
      udimagei.style.objectFit = "contain";
      udimagei.style.display = "block";
      udimagei.style.margin = "auto";
      udimagei.style.position = "absolute";
      udimagei.style.top = "50%";
      udimagei.style.left = "50%";
      udimagei.style.transform = "translate(-50%, -50%)";
      menuimage.replaceWith(udimagei);
    } else if (menusvg) {
      log("Menu svg");
      const udimages = document.createElement("img");
      udimages.src = "https://0x0.st/Xikk.png";
      udimages.style.width = "48px";
      udimages.style.height = "48px";
      udimages.style.objectFit = "contain";
      udimages.style.display = "block";
      udimages.style.margin = "auto";
      udimages.style.position = "absolute";
      udimages.style.top = "50%";
      udimages.style.left = "50%";
      udimages.style.transform = "translate(-50%, -50%)";
      menusvg.replaceWith(udimages);
    }
  }
  return __toCommonJS(anselcord_exports);
})();
