import L from"./DocumentDrivenEmpty.bcab4f6f.js";import h from"./ContentRenderer.5b4af155.js";import C from"./DocumentDrivenNotFound.099d5208.js";import{r as b,a as m,e as R,L as k,f as x,u as a,M as f,N,O as i,P as B,Q as E,h as g,j,E as D,R as p,B as l,o as c,c as _}from"./entry.068078bd.js";import{u as $}from"./head.c23ceddd.js";import"./ContentRendererMarkdown.26351e36.js";import"./index.a6ef77ff.js";import"./composables.5466cd32.js";const w=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await f[s.name]().then(e=>e.default||e);return()=>g(n,t.attrs,t.slots)}}),A=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=B("_route"),e=n===R()?k():n,o=x(()=>a(s.name)??e.meta.layout??"default");return()=>{const u=o.value&&o.value in f,r=e.meta.layoutTransition??N;return i(E,u&&r,{default:()=>i(w,u&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}}),T={class:"document-driven-page"},Q=m({__name:"document-driven",setup(s){const{page:t,layout:n}=j();return t.value,$(t),(e,o)=>{const u=L,r=h,d=C,y=A;return c(),D("div",T,[p(y,{name:a(n)||"default"},{default:l(()=>[a(t)?(c(),_(r,{key:a(t)._id,value:a(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(d,{key:1}))]),_:1},8,["name"])])}}});export{Q as default};
