"use strict";exports.id=9506,exports.ids=[9506],exports.modules={83688:(e,r)=>{function normalizeLocalePath(e,r){let t;let o=e.split("/");return(r||[]).some(r=>!!o[1]&&o[1].toLowerCase()===r.toLowerCase()&&(t=r,o.splice(1,1),e=o.join("/")||"/",!0)),{pathname:e,detectedLocale:t}}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}})},2664:(e,r)=>{function removeTrailingSlash(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"removeTrailingSlash",{enumerable:!0,get:function(){return removeTrailingSlash}})}};