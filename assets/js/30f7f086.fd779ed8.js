(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(92)),i={id:"coin_lifecycle",title:"6 - Lifecycle of a Coin"},c={unversionedId:"coin_lifecycle",id:"coin_lifecycle",isDocsHomePage:!1,title:"6 - Lifecycle of a Coin",description:"You should now understand how to create Chialisp puzzles that lock up coins with a particular set of rules.  You may be wondering how a coin gets locked up, where it is stored, how and when it gets spent, and who can spend it.  Let's take a look at the steps a coin goes through from its creation to its destruction.",source:"@site/docs/coin_lifecycle.md",slug:"/coin_lifecycle",permalink:"/docs/coin_lifecycle",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/master/docs/coin_lifecycle.md",version:"current"},s=[{value:"Farming Rewards",id:"farming-rewards",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"You should now understand how to create Chialisp puzzles that lock up coins with a particular set of rules.  You may be wondering how a coin gets locked up, where it is stored, how and when it gets spent, and who can spend it.  Let's take a look at the steps a coin goes through from its creation to its destruction."),Object(a.a)("h2",{id:"farming-rewards"},"Farming Rewards"),Object(a.a)("p",null,"As you probably know, farmers create the entirety of new value in Chia.  Every 30 seconds or so, a new block pops into existence that allows for a farmer to create 2 trillion mojos out of thin air, in two amounts of a very specific ratio: 1 to 7.  Here are two actual coin records for farming rewards that were generated in block 100 of the blockchain:"))}u.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,w=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(w,c(c({ref:t},l),{},{components:r})):o.a.createElement(w,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);