(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(4),o=n.n(i),u=(n(9),n(3)),a=(n(10),n(0)),s=function(t){return t.toString().padStart(2,"0")};var l=function(){var t=Object(c.useState)("Let the count down begin !"),e=Object(u.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(10),o=Object(u.a)(i,2),l=o[0],j=o[1],b=s(Math.floor(l/60)),d=s(l-60*b),h=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsxs)("div",{className:"timer",children:[Object(a.jsx)("span",{children:b}),Object(a.jsx)("span",{children:":"}),Object(a.jsx)("span",{children:d})]}),Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("button",{onClick:function(){r("You are doing well"),!0!==h.current&&(h.current=setInterval((function(){j((function(t){return t>=1?t-1:0}))}),1e3))},children:"Start"}),Object(a.jsx)("button",{onClick:function(){null!==h.current&&(clearInterval(h.current),r("Keep it up"))},children:"Stop"}),Object(a.jsx)("button",{onClick:function(){clearInterval(h.current),r("Ready to go another round"),j(1500)},children:"Reset"})]})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.819fd853.chunk.js.map