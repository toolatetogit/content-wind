import s from"./CodeGroupTabs.3e726622.js";import{d as u,M as t,k as b}from"./entry.9ec40151.js";const c=(a,r)=>a.type&&a.type.tag&&a.type.tag===r,v=u({data(){return{activeTabIndex:0,counter:0}},render(){var n,p;const a=((p=(n=this.$slots)==null?void 0:n.default)==null?void 0:p.call(n))||[],r=a.map((e,d)=>{var i,o,_;return{label:((i=e==null?void 0:e.props)==null?void 0:i.filename)||((o=e==null?void 0:e.props)==null?void 0:o.label)||`${d}`,active:((_=e==null?void 0:e.props)==null?void 0:_.active)||!1,component:e}});return t("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[t(s,{ref:"code-group-tabs",activeTabIndex:this.activeTabIndex,tabs:r,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),t("div",{class:"code-group-content",text:this.activeTabIndex},a.map((e,d)=>t("div",{style:{display:d===this.activeTabIndex?"block":"none"},class:{"":!c(e,"code")&&!c(e,"pre")}},[c(e,"code")||c(e,"pre")?e:t(e)])))])}});const m=b(v,[["__scopeId","data-v-4b66c781"]]);export{m as default};
