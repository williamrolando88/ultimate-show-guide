(()=>{"use strict";var t={625:(t,e,n)=>{t.exports=n.p+"97be26bc16795b881b8b.png"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{n(625);const t=[{name:"Squid game",url:"https://api.tvmaze.com/lookup/shows?imdb=tt10919420"},{name:"Game of Thrones",url:"https://api.tvmaze.com/lookup/shows?imdb=tt0944947"},{name:"Dexter",url:"https://api.tvmaze.com/lookup/shows?imdb=tt0773262"},{name:"Grey’s Anatomy",url:"https://api.tvmaze.com/lookup/shows?imdb=tt0413573"},{name:"The Office",url:"https://api.tvmaze.com/lookup/shows?imdb=tt0386676"},{name:"Succession",url:"https://api.tvmaze.com/lookup/shows?imdb=tt7660850"},{name:"Rick & Morty",url:"https://api.tvmaze.com/lookup/shows?imdb=tt2861424"},{name:"The Walking Dead",url:"https://api.tvmaze.com/lookup/shows?imdb=tt1520211"}],e=t=>{const n=document.createElement(t.tag);return t.id&&(n.id=t.id),t.class.length>0&&n.classList.add(...t.class),t.textContent&&(n.textContent=t.textContent),t.attribute&&Object.keys(t.attribute).forEach((e=>{n.setAttribute(e,t.attribute[e])})),t.children&&t.children.forEach((t=>{n.appendChild(e(t))})),n};const a=async t=>{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${t}`),n=await e.json();return e.ok?n:[{username:"Jane",creation_date:"2021-12-22",comment:"Hello!"}]},o=t=>t.map((t=>{const{username:e,comment:n,creation_date:a}=t,o=document.createElement("span");return o.textContent=`${a} ${e}: ${n}`,o}));function i(t,e){const n=t.querySelector(".commentCont");e.forEach((t=>{n.appendChild(t)}))}const r=document.querySelector("main"),s=async(t,e)=>{const n=await(async t=>{const e=await(async t=>{const e=await fetch(t),n=await e.json(),{name:a,language:o,officialSite:i,rating:{average:r},image:{medium:s},premiered:c}=n;return{name:a,language:o,officialSite:i,average:r,medium:s,premiered:c}})(t),n=(t=>{const e=document.createElement("section");return Object.assign(e,{className:"flex flex-col overflow-y-scroll items-center rounded-md px-[20%] py-6 my-[50px]"}),e.setAttribute("style","position : absolute; top: 65px; left: 20%; background-color: white"),e.innerHTML=t,r.appendChild(e),e})((({name:t,language:e,officialSite:n,average:a,medium:o,premiered:i})=>`\n    <i class="fas fa-times self-end py-6 text-4xl"></i>\n    <img src=${o} alt="cover Image">\n    <h2 class='font-rockwell text-4xl font-bold py-6'>${t}</h2>\n    <ul>\n      <li>Language: ${e}</li>\n      <li>Official Site: <a class='underline' href="${n}">${n}</a></li>\n      <li>Rating: ${a}</li>\n      <li>Premiered: ${i}</li>\n    </ul>\n    <h3 class='font-rockwell text-2xl font-bold py-6'>Comments</h3>\n    <div class='commentCont self-start flex flex-col'>\n    </div>\n    <h3 class='font-rockwell text-2xl font-bold py-6'>Add new comment</h3>\n    <form class='flex flex-col self-start items-start'>\n      <input id='username' class='mb-4' placeholder='Your name here' required>\n      <textarea id='message' placeholder ='Your insights here' required></textarea>\n      <input class='bg-gray-300 commentBtn hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded mt-4' type='button' value='Comment'>\n    </form>\n    `)(e));return n})(t);!function(t){t.querySelector("i").addEventListener("click",(()=>{t.classList.add("hidden")}))}(n);const s=await a(e),c=o(s);i(n,c);const l=n.querySelector("#username"),m=n.querySelector("#message");n.querySelector(".commentBtn").addEventListener("click",(async()=>{await(async(t,e,n)=>{try{const a={item_id:`${t}`,username:e.value,comment:n.value},o=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/comments?item_id=${t}`,i=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});return await i.json()}catch(t){console.error("Error happened here!")}return null})(e,l,m),l.value="",m.value="";const t=await a(e),r=o(t.splice(-1));i(n,r)}))};!async function n(){const a=await async function(t){const n=await Promise.all(t.map((async t=>async function(t){const e=await fetch(t.url,{method:"GET"}),n=await e.json(),{name:a,image:{medium:o}}=n,i=a.toLowerCase().split(/[^A-Za-z0-9]/).join("-");return{name:a,cover:o,id:i}}(t))));return function(t,e){t.forEach((t=>{const n=e.find((e=>e.item_id===t.id));t.likes=n.likes}))}(n,await async function(){const t=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes",{method:"GET"});return await t.json()}()),function(t){const n=document.querySelector("#tv-series-container");for(;n.firstChild;)n.removeChild(n.firstChild);return t.forEach((t=>{var a;n.appendChild(e({tag:"article",id:(a=t).id,class:["serie","flex","flex-col"],children:[{tag:"img",class:[],attribute:{src:a.cover,alt:a.name}},{tag:"div",class:[],children:[{tag:"h2",class:[],textContent:a.name},{tag:"div",class:["flex","justify-between","items-baseline"],children:[{tag:"i",class:["fas","fa-heart","text-red-600","cursor-pointer","text-xl"]},{tag:"p",class:[],textContent:`${a.likes} likes`}]}]},{tag:"button",class:["bg-stone-300"],textContent:"Comment"}]}))})),n}(n)}(t);!function(e){e.querySelectorAll("button").forEach(((e,n)=>{e.addEventListener("click",(()=>{s(t[n].url,t[n].name.toLowerCase().split(/[^A-Za-z0-9]/).join("-"))}))}))}(a);const o=a.querySelectorAll("article");a.querySelectorAll("i").forEach(((t,e)=>{t.addEventListener("click",(async()=>{await async function(t){try{const e=JSON.stringify({item_id:t}),n="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DUygu2IA853rbrNq5k3K/likes",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await a.json()}catch(t){console.error(t)}return null}(o[e].id),n()}))}))}()})()})();
//# sourceMappingURL=main.js.map