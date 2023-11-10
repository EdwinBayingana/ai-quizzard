"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{622:function(e,t,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=o(2265),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,o){var i,a={},d=null,u=null;for(i in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},7437:function(e,t,o){e.exports=o(622)},7042:function(e,t,o){o.d(t,{W:function(){return clsx}});function clsx(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=function r(e){var t,o,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t)}return i}(e))&&(i&&(i+=" "),i+=t);return i}},3986:function(e,t,o){o.d(t,{m:function(){return b}});var i=/^\[(.+)\]$/;function getPart(e,t){var o=e;return t.split("-").forEach(function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}var n=/\s+/;function twJoin(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=function toValue(e){if("string"==typeof e)return e;for(var t,o="",i=0;i<e.length;i++)e[i]&&(t=toValue(e[i]))&&(o&&(o+=" "),o+=t);return o}(e))&&(i&&(i+=" "),i+=t);return i}function fromTheme(e){var themeGetter=function(t){return t[e]||[]};return themeGetter.isThemeGetter=!0,themeGetter}var a=/^\[(?:([a-z-]+):)?(.+)\]$/i,s=/^\d+\/\d+$/,l=new Set(["px","full","screen"]),c=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,d=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,u=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function isLength(e){return isNumber(e)||l.has(e)||s.test(e)||isArbitraryLength(e)}function isArbitraryLength(e){return getIsArbitraryValue(e,"length",isLengthOnly)}function isArbitrarySize(e){return getIsArbitraryValue(e,"size",isNever)}function isArbitraryPosition(e){return getIsArbitraryValue(e,"position",isNever)}function isArbitraryUrl(e){return getIsArbitraryValue(e,"url",isUrl)}function isArbitraryNumber(e){return getIsArbitraryValue(e,"number",isNumber)}function isNumber(e){return!Number.isNaN(Number(e))}function isPercent(e){return e.endsWith("%")&&isNumber(e.slice(0,-1))}function isInteger(e){return isIntegerOnly(e)||getIsArbitraryValue(e,"number",isIntegerOnly)}function isArbitraryValue(e){return a.test(e)}function isAny(){return!0}function isTshirtSize(e){return c.test(e)}function isArbitraryShadow(e){return getIsArbitraryValue(e,"",isShadow)}function getIsArbitraryValue(e,t,o){var i=a.exec(e);return!!i&&(i[1]?i[1]===t:o(i[2]))}function isLengthOnly(e){return d.test(e)}function isNever(){return!1}function isUrl(e){return e.startsWith("url(")}function isIntegerOnly(e){return Number.isInteger(Number(e))}function isShadow(e){return u.test(e)}var b=function(){for(var e,t,o,a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];var functionToCall=function(n){var a=s[0];return t=(e=function(e){var t,o,n,a,s,l,c,d,u,b,p;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,o=new Map,i=new Map;function update(n,a){o.set(n,a),++t>e&&(t=0,i=o,o=new Map)}return{get:function(e){var t=o.get(e);return void 0!==t?t:void 0!==(t=i.get(e))?(update(e,t),t):void 0},set:function(e,t){o.has(e)?o.set(e,t):update(e,t)}}}(e.cacheSize),splitModifiers:(o=1===(t=e.separator||":").length,n=t[0],a=t.length,function(e){for(var i,s=[],l=0,c=0,d=0;d<e.length;d++){var u=e[d];if(0===l){if(u===n&&(o||e.slice(d,d+a)===t)){s.push(e.slice(c,d)),c=d+a;continue}if("/"===u){i=d;continue}}"["===u?l++:"]"===u&&l--}var b=0===s.length?e:e.substring(c),p=b.startsWith("!"),g=p?b.substring(1):b;return{modifiers:s,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:i&&i>c?i-c:void 0}}),...(d=e.theme,u=e.prefix,b={nextPart:new Map,validators:[]},(p=Object.entries(e.classGroups),u?p.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):p).forEach(function(e){var t=e[0];(function processClassesRecursively(e,t,o,i){e.forEach(function(e){if("string"==typeof e){(""===e?t:getPart(t,e)).classGroupId=o;return}if("function"==typeof e){if(e.isThemeGetter){processClassesRecursively(e(i),t,o,i);return}t.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(function(e){var n=e[0];processClassesRecursively(e[1],getPart(t,n),o,i)})})})(e[1],b,t,d)}),s=e.conflictingClassGroups,c=void 0===(l=e.conflictingClassGroupModifiers)?{}:l,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function getGroupRecursive(e,t){if(0===e.length)return t.classGroupId;var o=e[0],i=t.nextPart.get(o),n=i?getGroupRecursive(e.slice(1),i):void 0;if(n)return n;if(0!==t.validators.length){var a=e.join("-");return t.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,b)||function(e){if(i.test(e)){var t=i.exec(e)[1],o=t?.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,t){var o=s[e]||[];return t&&c[e]?[].concat(o,c[e]):o}})}}(s.slice(1).reduce(function(e,t){return t(e)},a()))).cache.get,o=e.cache.set,functionToCall=tailwindMerge,tailwindMerge(n)};function tailwindMerge(i){var a,s,l,c,d,u=t(i);if(u)return u;var b=(s=(a=e).splitModifiers,l=a.getClassGroupId,c=a.getConflictingClassGroupIds,d=new Set,i.trim().split(n).map(function(e){var t=s(e),o=t.modifiers,i=t.hasImportantModifier,n=t.baseClassName,a=t.maybePostfixModifierPosition,c=l(a?n.substring(0,a):n),d=!!a;if(!c){if(!a||!(c=l(n)))return{isTailwindClass:!1,originalClassName:e};d=!1}var u=(function(e){if(e.length<=1)return e;var t=[],o=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,o.sort().concat([e])),o=[]):o.push(e)}),t.push.apply(t,o.sort()),t})(o).join(":");return{isTailwindClass:!0,modifierId:i?u+"!":u,classGroupId:c,originalClassName:e,hasPostfixModifier:d}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,o=e.classGroupId,i=e.hasPostfixModifier,n=t+o;return!d.has(n)&&(d.add(n),c(o,i).forEach(function(e){return d.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return o(i,b),b}return function(){return functionToCall(twJoin.apply(null,arguments))}}(function(){var e=fromTheme("colors"),t=fromTheme("spacing"),o=fromTheme("blur"),i=fromTheme("brightness"),n=fromTheme("borderColor"),a=fromTheme("borderRadius"),s=fromTheme("borderSpacing"),l=fromTheme("borderWidth"),c=fromTheme("contrast"),d=fromTheme("grayscale"),u=fromTheme("hueRotate"),b=fromTheme("invert"),p=fromTheme("gap"),g=fromTheme("gradientColorStops"),f=fromTheme("gradientColorStopPositions"),m=fromTheme("inset"),y=fromTheme("margin"),h=fromTheme("opacity"),v=fromTheme("padding"),A=fromTheme("saturate"),x=fromTheme("scale"),w=fromTheme("sepia"),S=fromTheme("skew"),k=fromTheme("space"),N=fromTheme("translate"),getOverscroll=function(){return["auto","contain","none"]},getOverflow=function(){return["auto","hidden","clip","visible","scroll"]},getSpacingWithAutoAndArbitrary=function(){return["auto",isArbitraryValue,t]},getSpacingWithArbitrary=function(){return[isArbitraryValue,t]},getLengthWithEmpty=function(){return["",isLength]},getNumberWithAutoAndArbitrary=function(){return["auto",isNumber,isArbitraryValue]},getPositions=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},getLineStyles=function(){return["solid","dashed","dotted","double","none"]},getBlendModes=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},getAlign=function(){return["start","end","center","between","around","evenly","stretch"]},getZeroAndEmpty=function(){return["","0",isArbitraryValue]},getBreaks=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},getNumber=function(){return[isNumber,isArbitraryNumber]},getNumberAndArbitrary=function(){return[isNumber,isArbitraryValue]};return{cacheSize:500,theme:{colors:[isAny],spacing:[isLength],blur:["none","",isTshirtSize,isArbitraryValue],brightness:getNumber(),borderColor:[e],borderRadius:["none","","full",isTshirtSize,isArbitraryValue],borderSpacing:getSpacingWithArbitrary(),borderWidth:getLengthWithEmpty(),contrast:getNumber(),grayscale:getZeroAndEmpty(),hueRotate:getNumberAndArbitrary(),invert:getZeroAndEmpty(),gap:getSpacingWithArbitrary(),gradientColorStops:[e],gradientColorStopPositions:[isPercent,isArbitraryLength],inset:getSpacingWithAutoAndArbitrary(),margin:getSpacingWithAutoAndArbitrary(),opacity:getNumber(),padding:getSpacingWithArbitrary(),saturate:getNumber(),scale:getNumber(),sepia:getZeroAndEmpty(),skew:getNumberAndArbitrary(),space:getSpacingWithArbitrary(),translate:getSpacingWithArbitrary()},classGroups:{aspect:[{aspect:["auto","square","video",isArbitraryValue]}],container:["container"],columns:[{columns:[isTshirtSize]}],"break-after":[{"break-after":getBreaks()}],"break-before":[{"break-before":getBreaks()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(getPositions(),[isArbitraryValue])}],overflow:[{overflow:getOverflow()}],"overflow-x":[{"overflow-x":getOverflow()}],"overflow-y":[{"overflow-y":getOverflow()}],overscroll:[{overscroll:getOverscroll()}],"overscroll-x":[{"overscroll-x":getOverscroll()}],"overscroll-y":[{"overscroll-y":getOverscroll()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",isInteger]}],basis:[{basis:getSpacingWithAutoAndArbitrary()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",isArbitraryValue]}],grow:[{grow:getZeroAndEmpty()}],shrink:[{shrink:getZeroAndEmpty()}],order:[{order:["first","last","none",isInteger]}],"grid-cols":[{"grid-cols":[isAny]}],"col-start-end":[{col:["auto",{span:["full",isInteger]},isArbitraryValue]}],"col-start":[{"col-start":getNumberWithAutoAndArbitrary()}],"col-end":[{"col-end":getNumberWithAutoAndArbitrary()}],"grid-rows":[{"grid-rows":[isAny]}],"row-start-end":[{row:["auto",{span:[isInteger]},isArbitraryValue]}],"row-start":[{"row-start":getNumberWithAutoAndArbitrary()}],"row-end":[{"row-end":getNumberWithAutoAndArbitrary()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",isArbitraryValue]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",isArbitraryValue]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(getAlign())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(getAlign(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(getAlign(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[k]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[k]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",isArbitraryValue,t]}],"min-w":[{"min-w":["min","max","fit",isArbitraryValue,isLength]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[isTshirtSize]},isTshirtSize,isArbitraryValue]}],h:[{h:[isArbitraryValue,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",isArbitraryValue,isLength]}],"max-h":[{"max-h":[isArbitraryValue,t,"min","max","fit"]}],"font-size":[{text:["base",isTshirtSize,isArbitraryLength]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",isArbitraryNumber]}],"font-family":[{font:[isAny]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",isArbitraryValue]}],"line-clamp":[{"line-clamp":["none",isNumber,isArbitraryNumber]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",isArbitraryValue,isLength]}],"list-image":[{"list-image":["none",isArbitraryValue]}],"list-style-type":[{list:["none","disc","decimal",isArbitraryValue]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(getLineStyles(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",isLength]}],"underline-offset":[{"underline-offset":["auto",isArbitraryValue,isLength]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:getSpacingWithArbitrary()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",isArbitraryValue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",isArbitraryValue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(getPositions(),[isArbitraryPosition])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",isArbitrarySize]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},isArbitraryUrl]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[].concat(getLineStyles(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:getLineStyles()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(getLineStyles())}],"outline-offset":[{"outline-offset":[isArbitraryValue,isLength]}],"outline-w":[{outline:[isLength]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:getLengthWithEmpty()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[isLength]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",isTshirtSize,isArbitraryShadow]}],"shadow-color":[{shadow:[isAny]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":getBlendModes()}],"bg-blend":[{"bg-blend":getBlendModes()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",isTshirtSize,isArbitraryValue]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[b]}],saturate:[{saturate:[A]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",isArbitraryValue]}],duration:[{duration:getNumberAndArbitrary()}],ease:[{ease:["linear","in","out","in-out",isArbitraryValue]}],delay:[{delay:getNumberAndArbitrary()}],animate:[{animate:["none","spin","ping","pulse","bounce",isArbitraryValue]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[isInteger,isArbitraryValue]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",isArbitraryValue]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",isArbitraryValue]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":getSpacingWithArbitrary()}],"scroll-mx":[{"scroll-mx":getSpacingWithArbitrary()}],"scroll-my":[{"scroll-my":getSpacingWithArbitrary()}],"scroll-ms":[{"scroll-ms":getSpacingWithArbitrary()}],"scroll-me":[{"scroll-me":getSpacingWithArbitrary()}],"scroll-mt":[{"scroll-mt":getSpacingWithArbitrary()}],"scroll-mr":[{"scroll-mr":getSpacingWithArbitrary()}],"scroll-mb":[{"scroll-mb":getSpacingWithArbitrary()}],"scroll-ml":[{"scroll-ml":getSpacingWithArbitrary()}],"scroll-p":[{"scroll-p":getSpacingWithArbitrary()}],"scroll-px":[{"scroll-px":getSpacingWithArbitrary()}],"scroll-py":[{"scroll-py":getSpacingWithArbitrary()}],"scroll-ps":[{"scroll-ps":getSpacingWithArbitrary()}],"scroll-pe":[{"scroll-pe":getSpacingWithArbitrary()}],"scroll-pt":[{"scroll-pt":getSpacingWithArbitrary()}],"scroll-pr":[{"scroll-pr":getSpacingWithArbitrary()}],"scroll-pb":[{"scroll-pb":getSpacingWithArbitrary()}],"scroll-pl":[{"scroll-pl":getSpacingWithArbitrary()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",isArbitraryValue]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[isLength,isArbitraryNumber]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);