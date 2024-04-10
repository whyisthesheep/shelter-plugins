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

  // plugins/debloater/index.jsx
  var debloater_exports = {};
  __export(debloater_exports, {
    onLoad: () => onLoad
  });
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
  return __toCommonJS(debloater_exports);
})();
