!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.querySelector("#titleContainer");t.id="aboutContainer";const o=document.createElement("h1");o.innerHTML="ABOUT US",o.id="aboutHeading",t.appendChild(o);for(let e=0;e<3;e++){const n=document.createElement("div");n.classList.add("card");const o=document.createElement("div");o.classList.add("row");const a=document.createElement("div");a.classList.add("avatar-column");const s=document.createElement("div");s.classList.add("photo");const d=document.createElement("img");d.classList.add("img");const c=document.createElement("div");c.classList.add("details-column");const r=document.createElement("div");r.classList.add("cardContent");const i=document.createElement("h2");i.classList.add("aboutH2");const l=document.createElement("p");l.classList.add("aboutP"),0==e?(d.src="../img/meat.jpg",i.innerHTML="GO WHERE THE LOCALS GO",l.innerHTML="New Yorkers know great BBQ. And since it opened in 2020, Coals & Slabs has been ranked as the number one spot for BBQ in NYC. The secrets to Coals & Slabs' success?"):1==e?(d.src="../img/slab.jpg",i.innerHTML="GOOD TIMES",l.innerHTML="We take our BBQ seriously— but that’s where the seriousness stops around here. At Coals & Slabs, we encourage our guests to unwind, get messy, and most importantly, savor their time with us."):(d.src="../img/slab2.jpg",i.innerHTML="AWARD WINNING",l.innerHTML="Our founders Sam Baik and Jon Jones met on the barbecue circuit in the mid-80s and after competing in Memphis' May’s World Championship Barbecue Cooking Contest and many other local and regional BBQ competitions."),t.appendChild(n),n.appendChild(o),o.appendChild(a),a.appendChild(s),s.appendChild(d),o.appendChild(c),c.appendChild(r),r.appendChild(i),r.appendChild(l)}e.insertBefore(t,n)};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="homeContainer";const n=document.createElement("h1");n.id="bannerHeader",n.innerHTML="COALS & SLABS";const o=document.createElement("img");o.classList.add("banner"),o.src="../img/coals.png",t.appendChild(n),t.appendChild(o);const a=document.createElement("div");a.id="tabsContainer";const s=document.createElement("div");s.id="titleContainer",["home","about","menu","contact"].forEach((e,t)=>{const n=document.createElement("div");n.innerHTML=e,n.classList.add("tabTitle","tab"),n.id="title"+t,s.appendChild(n);const o=document.createElement("div");o.classList.add("tab"),o.classList.add(e),a.appendChild(o),o.addEventListener("mouseover",e=>{o.classList.contains("scale-down-ver-bottom")&&o.classList.remove("scale-down-ver-bottom"),o.classList.add("scale-up-ver-bottom"),n.classList.contains("fade-out")&&n.classList.remove("fade-out"),n.classList.add("fade-in")}),o.addEventListener("mouseout",e=>{o.classList.add("scale-down-ver-bottom"),o.classList.remove("scale-up-ver-bottom"),n.classList.contains("fade-in")&&n.classList.remove("fade-in"),n.classList.add("fade-out")})}),e.appendChild(t),e.appendChild(s),e.appendChild(a)})(),o();const a=document.querySelector(".home"),s=document.querySelector(".about"),d=(document.querySelector(".menu"),document.querySelector(".contact"),document.querySelector("#homeContainer")),c=document.querySelector("#aboutContainer");document.querySelector("#menuContainer"),document.querySelector("#contactContainer");a.addEventListener("click",()=>{d.style.display="block",c.style.display="none"}),s.addEventListener("click",()=>{c.style.display="flex",d.style.display="none"})}]);