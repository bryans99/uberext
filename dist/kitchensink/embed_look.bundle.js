(self.webpackChunkextension_kitchensink=self.webpackChunkextension_kitchensink||[]).push([["embed_look"],{37029:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var o=t(67294),r=t(4882),l=t(19407),i=t(71272),a=t(16051),d=t(38287),s=t(35409);const u=e=>{var{id:n}=e,[t,u]=o.useState(!0),[c,m]=o.useState(),k=(0,o.useContext)(l.ExtensionContext2),h=e=>{u(e)},b=e=>{m(e)},v=(0,o.useCallback)((e=>{var t,o,l=null==k||null===(t=k.extensionSDK)||void 0===t||null===(o=t.lookerHostData)||void 0===o?void 0:o.hostUrl;e&&l&&(r.LookerEmbedSDK.init(l),r.LookerEmbedSDK.createLookWithId(n).appendTo(e).on("look:loaded",h.bind(null,!1)).on("look:run:start",h.bind(null,!0)).on("look:run:complete",h.bind(null,!1)).build().connect().then(b).catch((e=>{console.error("Connection error",e)})))}),[]);return o.createElement(o.Fragment,null,o.createElement(i.Heading,{mt:"xlarge"},"Embedded Look"),o.createElement(d.p,null),o.createElement(a.z,{m:"medium",onClick:()=>{c&&c.run()},disabled:t},"Run Look"),o.createElement(s.Y,{ref:v}))}},35409:(e,n,t)=>{"use strict";t.d(n,{Y:()=>o});var o=t(71893).ZP.div.withConfig({displayName:"EmbedContainer",componentId:"sc-1ijqaxd-0"})(["width:100%;height:95vh;& > iframe{width:100%;height:100%;}"])},38287:(e,n,t)=>{"use strict";t.d(n,{p:()=>l});var o=t(67294),r=t(71272),l=()=>{var[e,n]=(0,o.useState)("");return(0,o.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,n("NOT")}catch(e){n("")}}),[]),o.createElement(r.Paragraph,{my:"medium"},"This extension is ",o.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=embed_look.bundle.js.map