(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8jRI":function(e,t,a){"use strict";var r=new RegExp("(%[a-f0-9]{2})|([^%]+?)","gi"),n=new RegExp("(%[a-f0-9]{2})+","gi");function s(e,t){try{return[decodeURIComponent(e.join(""))]}catch(n){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],s(a),s(r))}function l(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(r)||[],a=1;a<t.length;a++)t=(e=s(t,a).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var a={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{a[r[0]]=decodeURIComponent(r[0])}catch(t){var s=l(r[0]);s!==r[0]&&(a[r[0]]=s)}r=n.exec(e)}a["%C2"]="�";for(var c=Object.keys(a),i=0;i<c.length;i++){var o=c[i];e=e.replace(new RegExp(o,"g"),a[o])}return e}(e)}}},"8k0H":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("q1tI"),n=a.n(r),s=a("7vrA"),l=a("3Z9Z"),c=a("JI6e"),i=a("Eg6Q"),o=a("fItr"),p=a("qhky");function m(e){return n.a.createElement(s.a,{fluid:!0},n.a.createElement(p.a,{bodyAttributes:{"data-spy":"scroll","data-target":"#toc"}},n.a.createElement("script",{type:"text/javascript",src:"/js/jquery-3.5.1.min.js"}),n.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/css/bootstrap.min.css"}),n.a.createElement("script",{type:"text/javascript",src:"/js/bootstrap.min.js"}),e.showTOC&&n.a.createElement("link",{rel:"stylesheet",href:"https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css"}),e.showTOC&&n.a.createElement("script",{type:"text/javascript",src:"https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.js"}),n.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/css/theme.css"}),n.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/css/style.css"}),n.a.createElement("link",{rel:"stylesheet",type:"text/css",media:"all",href:"/css/menu.css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",rel:"stylesheet"}),n.a.createElement("script",{type:"text/javascript",src:"/js/base.js"})),n.a.createElement(l.a,null,n.a.createElement(i.a,null)),n.a.createElement(l.a,null,n.a.createElement(s.a,null,n.a.createElement(l.a,{style:{paddingTop:20,paddingBottom:20}},n.a.createElement(c.a,null,e.children),e.showTOC&&n.a.createElement(c.a,{lg:2},e.headerText,n.a.createElement("nav",{id:"toc","data-toggle":"toc",class:"sticky-top"}))))),n.a.createElement(l.a,null,n.a.createElement(o.a,null)))}},"8yz6":function(e,t,a){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const a=e.indexOf(t);return-1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]}},FJi0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var r=a("q1tI"),n=a.n(r),s=a("8k0H"),l=a("Wbzz"),c=a("cr+I"),i=a.n(c);function o(e){var t=e.location.search?i.a.parse(e.location.search):{};var a=Math.ceil(e.data.news.totalCount/30),r=t.page;isNaN(r)&&(r=1);const c=[],o={};return e.data.news.group.map((t,a)=>{const r=e.data.news.group[a].news[0].news_entry.frontmatter.year;o[r]=t,c.push(r)}),c.sort((e,t)=>e-t),n.a.createElement(s.a,null,e.data.news.totalCount>0&&n.a.createElement("div",null,c.map((e,t)=>{return a=o[e],n.a.createElement("div",null,n.a.createElement("div",{class:"span6 post"},n.a.createElement("h4",null,n.a.createElement("span",{class:"date"},a.news[0].news_entry.frontmatter.year))),n.a.createElement("div",null,a.news.map((e,t)=>"seminar"==e.news_entry.frontmatter.type?n.a.createElement("div",{class:"col"},n.a.createElement("div",{class:"text"},n.a.createElement("h5",{className:"p-0 ml-0"}," Research Seminar"),n.a.createElement("p",{className:"p-0 ml-0"}," On: ",a.news[t].news_entry.frontmatter.date),n.a.createElement("p",{className:"p-0 ml-0"}," Presented by: ",a.news[t].news_entry.frontmatter.presented_by),n.a.createElement("h5",null,n.a.createElement(l.a,{to:e.news_entry.fields.slug},e.news_entry.frontmatter.title),n.a.createElement("br",null)),n.a.createElement("hr",null))):"conference"==e.news_entry.frontmatter.type?n.a.createElement("div",{class:"col"},n.a.createElement("div",{class:"text"},n.a.createElement("h5",{className:"p-0 ml-0"}," Conference"),n.a.createElement("p",{className:"p-0 ml-0"}," On: ",a.news[t].news_entry.frontmatter.date),n.a.createElement("h5",null,n.a.createElement(l.a,{to:e.news_entry.fields.slug},e.news_entry.frontmatter.title),n.a.createElement("br",null)),n.a.createElement("hr",null))):"defence"==e.news_entry.frontmatter.type?n.a.createElement("div",{class:"col"},n.a.createElement("div",{class:"text"},n.a.createElement("h5",{className:"p-0 ml-0"}," PhD defence"),n.a.createElement("p",{className:"p-0 ml-0"}," On: ",a.news[t].news_entry.frontmatter.date),n.a.createElement("p",{className:"p-0 ml-0"}," Presented by: ",a.news[t].news_entry.frontmatter.presented_by),n.a.createElement("h5",null,n.a.createElement(l.a,{to:e.news_entry.fields.slug},e.news_entry.frontmatter.title),n.a.createElement("br",null)),n.a.createElement("hr",null))):n.a.createElement("div",{class:"col"},n.a.createElement("div",{class:"text"},n.a.createElement("p",{className:"p-0 ml-0"}," On: ",a.news[t].news_entry.frontmatter.date),n.a.createElement("h5",null,n.a.createElement(l.a,{to:e.news_entry.fields.slug},e.news_entry.frontmatter.title),n.a.createElement("br",null)),n.a.createElement("hr",null))))));var a}),function(e,t,a){if(a=parseInt(a),(t=parseInt(t))<=3)return n.a.createElement("ul",{class:"pagination",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",listStyle:"none",padding:0}},1==a?n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link pagination-prev",href:e+"&page="+(a-1),"aria-label":"Previous"},n.a.createElement("span",{"aria-hidden":"true"},"«"),n.a.createElement("span",{class:"sr-only"},"Previous"))):n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link pagination-next",href:e+"&page="+(a-1),"aria-label":"Previous"},n.a.createElement("span",{"aria-hidden":"true"},"«"),n.a.createElement("span",{class:"sr-only"},"Previous"))),Array.apply(0,Array(t)).map((function(t,r){var s=e+"&page="+(r+1);return a==r+1?n.a.createElement("li",{class:"page-item active"},n.a.createElement("a",{class:"page-link",href:s},r+1)):n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link",href:s},r+1))})),a==t?n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link pagination-next",href:e+"&page="+(a+1),"aria-label":"Next"},n.a.createElement("span",{"aria-hidden":"true"},"»"),n.a.createElement("span",{class:"sr-only"},"Next"))):n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link pagination-next",href:e+"&page="+(a+1),"aria-label":"Next"},n.a.createElement("span",{"aria-hidden":"true"},"»"),n.a.createElement("span",{class:"sr-only"},"Next"))));var r=[];if(1==a?(r.push(n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link pagination-prev",href:e+"&page="+(a-1),"aria-label":"Previous"},n.a.createElement("span",{"aria-hidden":"true"},"«"),n.a.createElement("span",{class:"sr-only"},"Previous")))),r.push(n.a.createElement("li",{class:"page-item active"},n.a.createElement("a",{class:"page-link",href:e+"&page=1"},"1")))):(r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link pagination-prev",href:e+"&page="+(a-1),"aria-label":"Previous"},n.a.createElement("span",{"aria-hidden":"true"},"«"),n.a.createElement("span",{class:"sr-only"},"Previous")))),r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link",href:e+"&page=1"},"1")))),a>4){r.push(n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link",href:"#"},"...")));for(var s=a-1;s<=a+1;s++)s>=t||(a==s?r.push(n.a.createElement("li",{class:"page-item active"},n.a.createElement("a",{class:"page-link",href:e+"&page="+s},s))):r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link",href:e+"&page="+s},s))))}else for(s=2;s<=a+1;s++)a==s?r.push(n.a.createElement("li",{class:"page-item active"},n.a.createElement("a",{class:"page-link",href:e+"&page="+s},s))):r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link",href:e+"&page="+s},s)));return a<=t-3&&r.push(n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link",href:"#"},"..."))),a==t?(r.push(n.a.createElement("li",{class:"page-item active"},n.a.createElement("a",{class:"page-link",href:e+"&page="+t},t))),r.push(n.a.createElement("li",{class:"page-item disabled"},n.a.createElement("a",{class:"page-link pagination-next",href:e+"&page="+(a+1),"aria-label":"Next"},n.a.createElement("span",{"aria-hidden":"true"},"»"),n.a.createElement("span",{class:"sr-only"},"Next"))))):(r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link",href:e+"&page="+t},t))),r.push(n.a.createElement("li",{class:"page-item"},n.a.createElement("a",{class:"page-link pagination-next",href:e+"&page="+(a+1),"aria-label":"Next"},n.a.createElement("span",{"aria-hidden":"true"},"»"),n.a.createElement("span",{class:"sr-only"},"Next"))))),n.a.createElement("ul",{class:"pagination",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",listStyle:"none",padding:0}},r)}("/news?type=news",a,r)))}},ZFOp:function(e,t,a){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},c0go:function(e,t,a){"use strict";e.exports=function(e,t){for(var a={},r=Object.keys(e),n=Array.isArray(t),s=0;s<r.length;s++){var l=r[s],c=e[l];(n?-1!==t.indexOf(l):t(l,c,e))&&(a[l]=c)}return a}},"cr+I":function(e,t,a){"use strict";const r=a("ZFOp"),n=a("8jRI"),s=a("8yz6"),l=a("c0go");function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function o(e,t){return t.decode?n(e):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const a=function(e){let t;switch(e.arrayFormat){case"index":return(e,a,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=a):r[e]=a};case"bracket":return(e,a,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],a):r[e]=[a]:r[e]=a};case"comma":case"separator":return(t,a,r)=>{const n="string"==typeof a&&a.includes(e.arrayFormatSeparator),s="string"==typeof a&&!n&&o(a,e).includes(e.arrayFormatSeparator);a=s?o(a,e):a;const l=n||s?a.split(e.arrayFormatSeparator).map(t=>o(t,e)):null===a?a:o(a,e);r[t]=l};default:return(e,t,a)=>{void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const n of e.split("&")){if(""===n)continue;let[e,l]=s(t.decode?n.replace(/\+/g," "):n,"=");l=void 0===l?null:["comma","separator"].includes(t.arrayFormat)?l:o(l,t),a(o(e,t),l,r)}for(const n of Object.keys(r)){const e=r[n];if("object"==typeof e&&null!==e)for(const a of Object.keys(e))e[a]=u(e[a],t);else r[n]=u(e,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const a=r[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(a):e[t]=a,e},Object.create(null))}t.extract=m,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const a=a=>t.skipNull&&null==e[a]||t.skipEmptyString&&""===e[a],r=function(e){switch(e.arrayFormat){case"index":return t=>(a,r)=>{const n=a.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,[i(t,e),"[",n,"]"].join("")]:[...a,[i(t,e),"[",i(n,e),"]=",i(r,e)].join("")]};case"bracket":return t=>(a,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,[i(t,e),"[]"].join("")]:[...a,[i(t,e),"[]=",i(r,e)].join("")];case"comma":case"separator":return t=>(a,r)=>null==r||0===r.length?a:0===a.length?[[i(t,e),"=",i(r,e)].join("")]:[[a,i(r,e)].join(e.arrayFormatSeparator)];default:return t=>(a,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?a:null===r?[...a,i(t,e)]:[...a,[i(t,e),"=",i(r,e)].join("")]}}(t),n={};for(const l of Object.keys(e))a(l)||(n[l]=e[l]);const s=Object.keys(n);return!1!==t.sort&&s.sort(t.sort),s.map(a=>{const n=e[a];return void 0===n?"":null===n?i(a,t):Array.isArray(n)?n.reduce(r(a),[]).join("&"):i(a,t)+"="+i(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[a,r]=s(e,"#");return Object.assign({url:a.split("?")[0]||"",query:f(m(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:o(r,t)}:{})},t.stringifyUrl=(e,a)=>{a=Object.assign({encode:!0,strict:!0},a);const r=p(e.url).split("?")[0]||"",n=t.extract(e.url),s=t.parse(n,{sort:!1}),l=Object.assign(s,e.query);let c=t.stringify(l,a);c&&(c="?"+c);let o=function(e){let t="";const a=e.indexOf("#");return-1!==a&&(t=e.slice(a)),t}(e.url);return e.fragmentIdentifier&&(o="#"+i(e.fragmentIdentifier,a)),`${r}${c}${o}`},t.pick=(e,a,r)=>{r=Object.assign({parseFragmentIdentifier:!0},r);const{url:n,query:s,fragmentIdentifier:c}=t.parseUrl(e,r);return t.stringifyUrl({url:n,query:l(s,a),fragmentIdentifier:c},r)},t.exclude=(e,a,r)=>{const n=Array.isArray(a)?e=>!a.includes(e):(e,t)=>!a(e,t);return t.pick(e,n,r)}}}]);
//# sourceMappingURL=component---src-pages-news-js-70e704f108f5a91254f0.js.map