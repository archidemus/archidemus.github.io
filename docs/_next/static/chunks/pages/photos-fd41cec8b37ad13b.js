(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{3164:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return r(4172)}])},3594:function(n,t,r){"use strict";r.d(t,{Z:function(){return k}});var e=r(7297),i=r(5893),o=r(1606),c=r(1163),u=(r(7294),r(2125));function a(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: "," 0;\n  max-width: ",";\n  margin: 0 auto;\n\n  * {\n    font-size: 1em;\n    color: ",";\n  }\n"]);return a=function(){return n},n}function s(){var n=(0,e.Z)(["\n  font-weight: 400;\n  font-family: Bitter;\n  font-size: 1.3em;\n  cursor: pointer;\n  text-underline-offset: ",";\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,e.Z)(["\n  border: 0;\n  background: transparent;\n  font-weight: 300;\n  padding: 0;\n  margin: 0;\n  text-transform: capitalize;\n  letter-spacing: 0;\n  color: ",";\n  text-decoration: ",";\n  text-decoration-thickness: 1px;\n  cursor: pointer;\n  text-underline-offset: ",";\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return d=function(){return n},n}var f=[],l=u.ZP.div.withConfig({componentId:"sc-7531ac22-0"})(a(),o.J.m,o.J.menuWidth,(function(n){return n.color})),h=u.ZP.div.withConfig({componentId:"sc-7531ac22-1"})(s(),o.J.xxs),p=u.ZP.button.withConfig({componentId:"sc-7531ac22-2"})(d(),(function(n){return n.color}),(function(n){return n.active?"underline":"inherit"}),o.J.xs),g=function(n){var t=n.color,r=void 0===t?"black":t,e=(0,c.useRouter)(),o=function(n){return e.pathname.includes(n)};return(0,i.jsxs)(l,{color:r,children:[(0,i.jsx)(h,{color:r,onClick:function(){return e.push("/")},children:"Archidemus."}),f.map((function(n){var t=n.label,c=n.key,u=n.link;return(0,i.jsx)(p,{active:o(c),color:r,onClick:function(){return function(n){var t=n.key,r=n.link;r?window.location.replace(r):e.push("/".concat(t))}({link:u,key:c})},children:t},c)}))]})};function m(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  padding: "," 0;\n  font-size: 12px;\n  font-weight: 200;\n"]);return m=function(){return n},n}var v=u.ZP.div.withConfig({componentId:"sc-fb380646-0"})(m(),o.J.l),x=function(){return(0,i.jsx)(v,{children:"Archidemus. All rights reserved."})};function w(){var n=(0,e.Z)(["\n  display: grid;\n  grid: min-content auto min-content / 100%;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 1.2em;\n  min-height: 100vh;\n  overflow-y: auto;\n"]);return w=function(){return n},n}function b(){var n=(0,e.Z)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n"]);return b=function(){return n},n}var Z=u.ZP.div.withConfig({componentId:"sc-2685720d-0"})(w()),j=u.ZP.div.withConfig({componentId:"sc-2685720d-1"})(b(),o.J.contentWidth),k=function(n){var t=n.children,r=n.className;return(0,i.jsxs)(Z,{children:[(0,i.jsx)(g,{color:"black"}),(0,i.jsx)(j,{className:r,children:t}),(0,i.jsx)(x,{})]})}},1257:function(n,t,r){"use strict";t.Z=function(n){var t=n.src;return"".concat(t)}},4172:function(n,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return A},default:function(){return N}});var e=r(1799),i=r(7297),o=r(5893),c=r(1606),u=r(3594),a=r(1436),s=r(2814),d=r(7294),f=r(2125);function l(){var n=(0,i.Z)(["\n  display: grid;\n  grid: 100% / min-content 1fr min-content;\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  justify-items: center;\n  align-items: center;\n  top: 0px;\n  left: 0px;\n"]);return l=function(){return n},n}function h(){var n=(0,i.Z)(["\n  object-fit: contain;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n"]);return h=function(){return n},n}function p(){var n=(0,i.Z)(["\n  background-color: black;\n  border: none;\n  cursor: pointer;\n  color: white;\n  padding: "," ",";\n"]);return p=function(){return n},n}function g(){var n=(0,i.Z)(["\n  background-color: black;\n  border: none;\n  cursor: pointer;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  padding: ",";\n"]);return g=function(){return n},n}var m=f.ZP.div.withConfig({componentId:"sc-47055a9b-0"})(l()),v=f.ZP.img.withConfig({componentId:"sc-47055a9b-1"})(h()),x=f.ZP.button.withConfig({componentId:"sc-47055a9b-2"})(p(),c.J.xxl,c.J.s),w=f.ZP.button.withConfig({componentId:"sc-47055a9b-3"})(g(),c.J.s),b=function(n){var t=n.base,r=n.doAction,e=function(n){var t={Escape:"close",ArrowRight:"next",ArrowLeft:"prev"}[n.key];t&&r(t)};return(0,d.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),(0,o.jsxs)(m,{children:[(0,o.jsx)(w,{onClick:function(){return r("close")},children:(0,o.jsx)(s.G,{icon:a.YIN})}),(0,o.jsx)(x,{onClick:function(){return r("prev")},children:(0,o.jsx)(s.G,{icon:a.EyR})}),(0,o.jsx)(v,{src:t.path,alt:t.path}),(0,o.jsx)(x,{onClick:function(){return r("next")},children:(0,o.jsx)(s.G,{icon:a.yOZ})})]})},Z=r(1257),j=r(9008),k=r.n(j),y=r(5675),C=r.n(y);function P(){var n=(0,i.Z)(["\n  display: grid;\n  gap: ",";\n  grid: 1fr / auto auto auto;\n  height: min-content;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n"]);return P=function(){return n},n}function _(){var n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return _=function(){return n},n}var I=c.J.s,E=(0,f.ZP)(u.Z).withConfig({componentId:"sc-fe4c8bf-0"})(P(),I),J=f.ZP.div.withConfig({componentId:"sc-fe4c8bf-1"})(_()),A=!0,N=function(n){var t=n.photos,r=(0,d.useState)(-1),i=r[0],c=r[1],u=i>-1&&i<t.length;return(0,o.jsxs)(E,{children:[(0,o.jsxs)(k(),{children:[(0,o.jsx)("title",{children:"Photos | Archidemus"}),(0,o.jsx)("meta",{name:"description",content:"All my photographs."})]}),t.map((function(n,t){var r=n.small;return(0,o.jsx)(J,{onClick:function(){return c(t)},children:(0,o.jsx)(C(),{src:r.path,width:r.width,height:r.height,loader:Z.Z,unoptimized:!0,alt:r.path})},r.path)})),u&&(0,o.jsx)(b,(0,e.Z)({doAction:function(n){({next:function(){return i<t.length-1&&c(i+1)},prev:function(){return i>0&&c(i-1)},close:function(){return c(-1)}})[n]()}},t[i]))]})}}},function(n){n.O(0,[523,873,1,774,888,179],(function(){return t=3164,n(n.s=t);var t}));var t=n.O();_N_E=t}]);