import{j as _,r as l,u as b,L as x,R as g,a as P,B as L,b as j,c as y,d as T}from"./vendor.bb36e279.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};q();const e=_.exports.jsx,c=_.exports.jsxs,M=()=>{const[t,n]=l.exports.useState(null),[r,s]=l.exports.useState(!1),[a,i]=l.exports.useState("mor_2314"),[o,d]=l.exports.useState("83r5^_");l.exports.useState("");const h=b();async function v(){fetch("http://localhost:3001/login",{method:"POST",body:JSON.stringify({username:"mor_2314",password:"83r5^_"})}).then(u=>u.json()).then(u=>{console.log(u),window.localStorage.setItem("token",JSON.stringify(u.token)),u.token!=""&&h("/dashboard")})}return e("div",{children:c("div",{className:"login-form",children:[e("h2",{children:"Login"}),c("div",{className:"login-field",children:["Email:",e("br",{}),e("input",{type:"email",value:a,onChange:u=>i(u.target.value)})]}),c("div",{className:"login-field",children:["Password:",e("br",{}),e("input",{type:"password",value:o,onChange:u=>d(u.target.value)})]}),e("br",{}),t&&e("p",{className:"error",children:t}),e("input",{className:"login-button",type:"button",value:r?"Loading...":"Login",disabled:r,onClick:v})]})})},N=()=>{const[t,n]=l.exports.useState([]),s=(l.exports.useContext(f)||[]).cartitems||[];return l.exports.useEffect(()=>{async function a(){try{const d=await(await fetch("https://fakestoreapi.com/products/categories")).json();console.log(d),n(d)}catch{}}a()},[]),c("div",{className:"dashboard_header",children:[e("div",{children:c("ul",{className:"dashboard_nav",children:[e(x,{to:"/dashboard",children:e("li",{children:"All Products"})}),t.map(a=>e("li",{children:a},a)),e(x,{to:"/mycart",children:c("li",{children:["My Cart",e("span",{className:"cartNo",children:s.length})]})})]})}),c("div",{className:"searchbox",children:[" ",e("input",{type:"text",placeholder:"Product Name..."}),e("button",{className:"search_button",children:"Search"})," "]})]})},R=t=>{let n=0;return t.items.forEach(r=>n=Math.round((n+r.quantity*r.price)*100)/100),c("div",{className:"checkout",children:[e("h1",{className:"heading",children:"Checkout"}),c("table",{className:"checkoutTable",children:[c("tr",{children:[e("th",{className:"checkout_item_title",children:" Items"}),e("th",{className:"checkout_item_quantity",children:" Quantity"}),e("th",{className:"checkout_item_price",children:" Price"}),e("th",{className:"checkout_item_price",children:" Total Price"})]}),t.items.map(r=>c("tr",{children:[c("td",{className:"checkout_item_title",children:[" ",r.title]}),c("td",{className:"checkout_item_quantity",children:[" ",r.quantity]}),c("td",{className:"checkout_item_price",children:[" $",r.price]}),c("td",{className:"checkout_item_price",children:[" ","$",Math.round(r.quantity*r.price*100)/100]})]},r.id)),c("tr",{children:[e("td",{colSpan:"3",children:"Total Price"}),c("td",{children:["$",n]})]})]}),e("input",{type:"button",value:"Pay",className:"checkout_button"})]})};var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=g.createContext&&g.createContext(C),p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(t,n){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)n.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(r[s[a]]=t[s[a]]);return r};function S(t){return t&&t.map(function(n,r){return g.createElement(n.tag,p({key:r},n.attr),S(n.child))})}function w(t){return function(n){return g.createElement(A,p({attr:p({},t.attr)},n),S(t.child))}}function A(t){var n=function(r){var s=t.attr,a=t.size,i=t.title,o=z(t,["attr","size","title"]),d=a||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),g.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,o,{className:h,style:p(p({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&g.createElement("title",null,i),t.children)};return k!==void 0?g.createElement(k.Consumer,null,function(r){return n(r)}):n(C)}function $(t){return w({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"}}]})(t)}const B=()=>{const t=l.exports.useContext(f),n=[];function r(s,a){let i=0;for(let o=0;o<s.length;o++)s[o].id===a.id&&i++;return i}return t.cartitems.forEach((s,a,i)=>{let o=!1;for(let d=a-1;d>=0;d--)i[d].id===s.id&&(o=!0);if(!o){let d=r(i,s);s.quantity=d,n.push(s)}}),t.cartitems.length===0?c("div",{children:[e(N,{}),e("h1",{className:"heading",children:"My Cart"}),"Your Cart is Empty"]}):c("div",{children:[e(N,{}),c("div",{className:"mycart",children:[e("h1",{className:"heading",children:"My Cart"}),e("div",{className:"allItems",children:n.map(s=>c("div",{className:"item",children:[e("div",{className:"image_frame",children:e("img",{className:"item_image",src:s.image})}),c("div",{className:"item_title",children:[" ",s.title]}),c("div",{className:"item_quantity",children:["quantity: ",s.quantity]}),c("div",{className:"item_price",children:[" $",s.price]}),e("button",{className:"buttonicon removeFromCart",onClick:()=>t.removeFromCart(s),children:e($,{style:{color:"#ed1b2e"}})})]},s.id))})]}),e(R,{items:n})]})};function I(t){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}}]})(t)}const J=()=>{const t=b(),n=l.exports.useContext(f);function r(){window.localStorage.removeItem("token"),t("/login")}function s(m){t("/itemdetails",{state:{item:m,id:m.id}})}const[a,i]=l.exports.useState(null),[o,d]=l.exports.useState(null),[h,v]=l.exports.useState(!1),[u,K]=l.exports.useState(JSON.parse(localStorage.getItem("mycart"))||[]);return l.exports.useEffect(()=>{async function m(){try{const E=await(await fetch("https://fakestoreapi.com/products")).json();d(E),v(!0)}catch{i(!0),v(!0)}}m()},[]),a?c("div",{children:["Error: ",a.message]}):h?c("div",{className:"dashboard",children:[e(N,{item:u}),e("h1",{className:"heading",children:"All Products"}),e("div",{className:"allItems",children:o.map(m=>c("div",{className:"item",children:[e("div",{className:"image_frame",onClick:()=>s(m),children:e("img",{className:"item_image",src:m.image})}),c("div",{className:"item_title",children:[" ",m.title]}),c("div",{className:"item_price",children:[" $",m.price]}),e("button",{className:"buttonicon addToCart",onClick:()=>n.addToCart(m),children:e("h2",{children:e(I,{})})})]},m.id))}),e("input",{className:"logout",type:"button",value:"logout",onClick:r})]}):e("div",{children:"Loading..."})},F=()=>{const t=l.exports.useContext(f),{state:n}=P(),{item:r,id:s}=n;return c("div",{children:[e(N,{}),c("div",{className:"descriptionPage",children:[e("div",{className:"description_left",children:e("img",{className:"item_image_description",src:r.image})}),c("div",{className:"description_right",children:[e("h2",{children:r.title}),e("br",{}),e("div",{children:r.description}),c("div",{className:"item_price",children:["$",r.price]}),c("div",{children:["Ratings: ",r.rating.rate]}),e("button",{className:"buttonicon addToCart",onClick:()=>t.addToCart(r),children:e("h2",{children:e(I,{})})})]})]})]})};function D(){return e(H,{children:c(L,{children:[e(G,{}),c("div",{className:"App",children:[e("div",{children:e("nav",{})}),c(j,{children:[e(y,{path:"/login",element:e(M,{})}),e(y,{path:"/dashboard",element:e(J,{})}),e(y,{path:"/mycart",element:e(B,{})}),e(y,{path:"/itemdetails",element:e(F,{})})]})]})]})})}function G(){const t=b();return l.exports.useEffect(()=>{const n=localStorage.getItem("token");t(n?"/dashboard":"/login")},[]),""}const f=l.exports.createContext({cartitems:[]});function H({children:t}){const[n,r]=l.exports.useState(JSON.parse(localStorage.getItem("mycart"))||[]);l.exports.useEffect(()=>{r(JSON.parse(localStorage.getItem("mycart"))||[])},[]),l.exports.useEffect(()=>{window.localStorage.setItem("mycart",JSON.stringify(n))},[n]);const s=i=>{r(o=>o.concat(i))},a=i=>{r(o=>o.filter(d=>d.id!=i.id))};return e(f.Provider,{value:{cartitems:n,addToCart:s,removeFromCart:a},children:t})}T.render(e(g.StrictMode,{children:e(D,{})}),document.getElementById("root"));
