import{j as C,r as l,u as b,L as x,R as h,a as P,B as L,b as j,c as y,d as q}from"./vendor.bb36e279.js";const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};T();const e=C.exports.jsx,s=C.exports.jsxs,M=()=>{const[t,n]=l.exports.useState(null),[r,c]=l.exports.useState(!1),[a,i]=l.exports.useState("mor_2314"),[o,d]=l.exports.useState("83r5^_");l.exports.useState("");const m=b();async function v(){window.localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"),localStorage.getItem("token")!=""&&m("/dashboard")}return e("div",{children:s("div",{className:"login-form",children:[e("h2",{children:"Login"}),s("div",{className:"login-field",children:["Email:",e("br",{}),e("input",{type:"email",value:a,onChange:g=>i(g.target.value)})]}),s("div",{className:"login-field",children:["Password:",e("br",{}),e("input",{type:"password",value:o,onChange:g=>d(g.target.value)})]}),e("br",{}),t&&e("p",{className:"error",children:t}),e("input",{className:"login-button",type:"button",value:r?"Loading...":"Login",disabled:r,onClick:v})]})})},N=()=>{const[t,n]=l.exports.useState([]),c=(l.exports.useContext(f)||[]).cartitems||[];return l.exports.useEffect(()=>{async function a(){try{const d=await(await fetch("https://fakestoreapi.com/products/categories")).json();n(d)}catch{}}a()},[]),s("div",{className:"dashboard_header",children:[e("div",{children:s("ul",{className:"dashboard_nav",children:[e(x,{to:"/dashboard",children:e("li",{children:"All Products"})}),t.map(a=>e("li",{children:a},a)),e(x,{to:"/mycart",children:s("li",{children:["My Cart",e("span",{className:"cartNo",children:c.length})]})})]})}),s("div",{className:"searchbox",children:[" ",e("input",{type:"text",placeholder:"Product Name..."}),e("button",{className:"search_button",children:"Search"})," "]})]})},R=t=>{let n=0;return t.items.forEach(r=>n=Math.round((n+r.quantity*r.price)*100)/100),s("div",{className:"checkout",children:[e("h1",{className:"heading",children:"Checkout"}),s("table",{className:"checkoutTable",children:[s("tr",{children:[e("th",{className:"checkout_item_title",children:" Items"}),e("th",{className:"checkout_item_quantity",children:" Quantity"}),e("th",{className:"checkout_item_price",children:" Price"}),e("th",{className:"checkout_item_price",children:" Total Price"})]}),t.items.map(r=>s("tr",{children:[s("td",{className:"checkout_item_title",children:[" ",r.title]}),s("td",{className:"checkout_item_quantity",children:[" ",r.quantity]}),s("td",{className:"checkout_item_price",children:[" $",r.price]}),s("td",{className:"checkout_item_price",children:[" ","$",Math.round(r.quantity*r.price*100)/100]})]},r.id)),s("tr",{children:[e("td",{colSpan:"3",children:"Total Price"}),s("td",{children:["$",n]})]})]}),e("input",{type:"button",value:"Pay",className:"checkout_button"})]})};var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=h.createContext&&h.createContext(_),p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(t,n){var r={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&n.indexOf(c)<0&&(r[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,c=Object.getOwnPropertySymbols(t);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(t,c[a])&&(r[c[a]]=t[c[a]]);return r};function I(t){return t&&t.map(function(n,r){return h.createElement(n.tag,p({key:r},n.attr),I(n.child))})}function S(t){return function(n){return h.createElement(A,p({attr:p({},t.attr)},n),I(t.child))}}function A(t){var n=function(r){var c=t.attr,a=t.size,i=t.title,o=z(t,["attr","size","title"]),d=a||r.size||"1em",m;return r.className&&(m=r.className),t.className&&(m=(m?m+" ":"")+t.className),h.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,c,o,{className:m,style:p(p({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&h.createElement("title",null,i),t.children)};return k!==void 0?h.createElement(k.Consumer,null,function(r){return n(r)}):n(_)}function J(t){return S({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"}}]})(t)}const $=()=>{const t=l.exports.useContext(f),n=[];function r(c,a){let i=0;for(let o=0;o<c.length;o++)c[o].id===a.id&&i++;return i}return t.cartitems.forEach((c,a,i)=>{let o=!1;for(let d=a-1;d>=0;d--)i[d].id===c.id&&(o=!0);if(!o){let d=r(i,c);c.quantity=d,n.push(c)}}),t.cartitems.length===0?s("div",{children:[e(N,{}),e("h1",{className:"heading",children:"My Cart"}),"Your Cart is Empty"]}):s("div",{children:[e(N,{}),s("div",{className:"mycart",children:[e("h1",{className:"heading",children:"My Cart"}),e("div",{className:"allItems",children:n.map(c=>s("div",{className:"item",children:[e("div",{className:"image_frame",children:e("img",{className:"item_image",src:c.image})}),s("div",{className:"item_title",children:[" ",c.title]}),s("div",{className:"item_quantity",children:["quantity: ",c.quantity]}),s("div",{className:"item_price",children:[" $",c.price]}),e("button",{className:"buttonicon removeFromCart",onClick:()=>t.removeFromCart(c),children:e(J,{style:{color:"#ed1b2e"}})})]},c.id))})]}),e(R,{items:n})]})};function w(t){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"}}]})(t)}const B=()=>{const t=b(),n=l.exports.useContext(f);function r(){window.localStorage.removeItem("token"),t("/login")}function c(u){t("/itemdetails",{state:{item:u,id:u.id}})}const[a,i]=l.exports.useState(null),[o,d]=l.exports.useState(null),[m,v]=l.exports.useState(!1),[g,H]=l.exports.useState(JSON.parse(localStorage.getItem("mycart"))||[]);return l.exports.useEffect(()=>{async function u(){try{const O=await(await fetch("https://fakestoreapi.com/products")).json();d(O),v(!0)}catch{i(!0),v(!0)}}u()},[]),a?s("div",{children:["Error: ",a.message]}):m?s("div",{className:"dashboard",children:[e(N,{item:g}),e("h1",{className:"heading",children:"All Products"}),e("div",{className:"allItems",children:o.map(u=>s("div",{className:"item",children:[e("div",{className:"image_frame",onClick:()=>c(u),children:e("img",{className:"item_image",src:u.image})}),s("div",{className:"item_title",children:[" ",u.title]}),s("div",{className:"item_price",children:[" $",u.price]}),e("button",{className:"buttonicon addToCart",onClick:()=>n.addToCart(u),children:e("h2",{children:e(w,{})})})]},u.id))}),e("input",{className:"logout",type:"button",value:"logout",onClick:r})]}):e("div",{children:"Loading..."})},F=()=>{const t=l.exports.useContext(f),{state:n}=P(),{item:r,id:c}=n;return s("div",{children:[e(N,{}),s("div",{className:"descriptionPage",children:[e("div",{className:"description_left",children:e("img",{className:"item_image_description",src:r.image})}),s("div",{className:"description_right",children:[e("h2",{children:r.title}),e("br",{}),e("div",{children:r.description}),s("div",{className:"item_price",children:["$",r.price]}),s("div",{children:["Ratings: ",r.rating.rate]}),e("button",{className:"buttonicon addToCart",onClick:()=>t.addToCart(r),children:e("h2",{children:e(w,{})})})]})]})]})};function D(){return e(U,{children:s(L,{children:[e(G,{}),s("div",{className:"App",children:[e("div",{children:e("nav",{})}),s(j,{children:[e(y,{path:"/login",element:e(M,{})}),e(y,{path:"/dashboard",element:e(B,{})}),e(y,{path:"/mycart",element:e($,{})}),e(y,{path:"/itemdetails",element:e(F,{})})]})]})]})})}function G(){const t=b();return l.exports.useEffect(()=>{const n=localStorage.getItem("token");t(n?"/dashboard":"/login")},[]),""}const f=l.exports.createContext({cartitems:[]});function U({children:t}){const[n,r]=l.exports.useState(JSON.parse(localStorage.getItem("mycart"))||[]);l.exports.useEffect(()=>{r(JSON.parse(localStorage.getItem("mycart"))||[])},[]),l.exports.useEffect(()=>{window.localStorage.setItem("mycart",JSON.stringify(n))},[n]);const c=i=>{r(o=>o.concat(i))},a=i=>{r(o=>o.filter(d=>d.id!=i.id))};return e(f.Provider,{value:{cartitems:n,addToCart:c,removeFromCart:a},children:t})}q.render(e(h.StrictMode,{children:e(D,{})}),document.getElementById("root"));