"use strict";exports.id=3563,exports.ids=[3563],exports.modules={15055:(e,l,t)=>{t.d(l,{Z:()=>n});var r=t(6557);let n=(0,r.Z)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]])},43113:(e,l,t)=>{function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(l,{g7:()=>n});var r=t(53830);let n=(0,r.forwardRef)((e,l)=>{let{children:t,...n}=e,o=r.Children.toArray(t),c=o.find($5e63c961fc1ce211$var$isSlottable);if(c){let e=c.props.children,t=o.map(l=>l!==c?l:r.Children.count(e)>1?r.Children.only(null):(0,r.isValidElement)(e)?e.props.children:null);return(0,r.createElement)(i,_extends({},n,{ref:l}),(0,r.isValidElement)(e)?(0,r.cloneElement)(e,void 0,t):null)}return(0,r.createElement)(i,_extends({},n,{ref:l}),t)});n.displayName="Slot";let i=(0,r.forwardRef)((e,l)=>{let{children:t,...n}=e;return(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{...function(e,l){let t={...l};for(let r in l){let n=e[r],i=l[r],o=/^on[A-Z]/.test(r);o?n&&i?t[r]=(...e)=>{i(...e),n(...e)}:n&&(t[r]=n):"style"===r?t[r]={...n,...i}:"className"===r&&(t[r]=[n,i].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:l?function(...e){return l=>e.forEach(e=>{"function"==typeof e?e(l):null!=e&&(e.current=l)})}(l,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});i.displayName="SlotClone";let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:e})=>(0,r.createElement)(r.Fragment,null,e);function $5e63c961fc1ce211$var$isSlottable(e){return(0,r.isValidElement)(e)&&e.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}},39152:(e,l,t)=>{t.d(l,{j:()=>cva});var r=t(89814);let falsyToString=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=r.W,cva=(e,l)=>t=>{var r;if((null==l?void 0:l.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:o}=l,c=Object.keys(i).map(e=>{let l=null==t?void 0:t[e],r=null==o?void 0:o[e];if(null===l)return null;let n=falsyToString(l)||falsyToString(r);return i[e][n]}),a=t&&Object.entries(t).reduce((e,l)=>{let[t,r]=l;return void 0===r||(e[t]=r),e},{}),d=null==l?void 0:null===(r=l.compoundVariants)||void 0===r?void 0:r.reduce((e,l)=>{let{class:t,className:r,...n}=l;return Object.entries(n).every(e=>{let[l,t]=e;return Array.isArray(t)?t.includes({...o,...a}[l]):({...o,...a})[l]===t})?[...e,t,r]:e},[]);return n(e,c,d,null==t?void 0:t.class,null==t?void 0:t.className)}}};