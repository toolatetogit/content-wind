import{d as l,ai as _,x as d,I as a,b as f,c as m,af as x,k as S}from"./entry.cdde6235.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){_(e=>({"1a91a1c6":u.value}));const n=d(),s=r,p=a(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[s.name]||s.name).replace(/^i-/,"")}),u=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),o=a(()=>{var t,c,i;if(!s.size&&typeof((t=n.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=s.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(f(),m("span",{style:x({width:o.value,height:o.value})},null,4))}});const z=S(g,[["__scopeId","data-v-50fd8c43"]]);export{z as default};
