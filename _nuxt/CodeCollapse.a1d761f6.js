import{d as n,r as d,b as c,c as r,a0 as i,e as a,t as u,N as t,a1 as _,p as f,i as h,k as v}from"./entry.9ec40151.js";const g=e=>(f("data-v-b3e21410"),e=e(),h(),e),m=g(()=>a("div",{class:"gradient-backdrop"},null,-1)),C=n({__name:"CodeCollapse",props:{height:{type:String,default:"220px"},open:{type:Boolean,default:!1}},emits:["update:open"],setup(e,{emit:s}){const o=d(e.open),p=()=>{o.value=!o.value,s("update:open",o.value)};return(l,S)=>(c(),r("div",{class:"code-collapse",style:_({height:t(o)?"auto":e.height})},[i(l.$slots,"default",{},void 0,!0),m,a("button",{onClick:p},u(t(o)?"Collapse code":"Expand code"),1)],4))}});const k=v(C,[["__scopeId","data-v-b3e21410"]]);export{k as default};
