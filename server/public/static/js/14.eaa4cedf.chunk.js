(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[14],{352:function(e,t,a){"use strict";var n=a(4),c=a(3),r=a(11),l=a(0),i=a(7),o=a.n(i),s=function(e){var t=e.prefixCls,a=e.className,n=e.width,r=e.style;return l.createElement("h3",{className:o()(t,a),style:Object(c.a)({width:n},r)})},d=a(5),u=function(e){var t=function(t){var a=e.width,n=e.rows,c=void 0===n?2:n;return Array.isArray(a)?a[t]:c-1===t?a:void 0},a=e.prefixCls,n=e.className,c=e.style,r=e.rows,i=Object(d.a)(Array(r)).map((function(e,a){return l.createElement("li",{key:a,style:{width:t(a)}})}));return l.createElement("ul",{className:o()(a,n),style:c},i)},m=a(33),b=function(e){var t,a,r=e.prefixCls,i=e.className,s=e.style,d=e.size,u=e.shape,m=o()((t={},Object(n.a)(t,"".concat(r,"-lg"),"large"===d),Object(n.a)(t,"".concat(r,"-sm"),"small"===d),t)),b=o()((a={},Object(n.a)(a,"".concat(r,"-circle"),"circle"===u),Object(n.a)(a,"".concat(r,"-square"),"square"===u),Object(n.a)(a,"".concat(r,"-round"),"round"===u),a)),v="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{};return l.createElement("span",{className:o()(r,m,b,i),style:Object(c.a)(Object(c.a)({},v),s)})},v=a(88),j=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,i=e.className,s=e.active,d=a("skeleton",r),u=Object(v.a)(e,["prefixCls"]),m=o()(d,"".concat(d,"-element"),Object(n.a)({},"".concat(d,"-active"),s),i);return l.createElement("div",{className:m},l.createElement(b,Object(c.a)({prefixCls:"".concat(d,"-avatar")},u)))};return l.createElement(m.a,null,t)};j.defaultProps={size:"default",shape:"circle"};var p=j,f=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,i=e.className,s=e.active,d=a("skeleton",r),u=Object(v.a)(e,["prefixCls"]),m=o()(d,"".concat(d,"-element"),Object(n.a)({},"".concat(d,"-active"),s),i);return l.createElement("div",{className:m},l.createElement(b,Object(c.a)({prefixCls:"".concat(d,"-button")},u)))};return l.createElement(m.a,null,t)};f.defaultProps={size:"default"};var h=f,O=function(e){var t=function(t){var a=t.getPrefixCls,r=e.prefixCls,i=e.className,s=e.active,d=a("skeleton",r),u=Object(v.a)(e,["prefixCls"]),m=o()(d,"".concat(d,"-element"),Object(n.a)({},"".concat(d,"-active"),s),i);return l.createElement("div",{className:m},l.createElement(b,Object(c.a)({prefixCls:"".concat(d,"-input")},u)))};return l.createElement(m.a,null,t)};O.defaultProps={size:"default"};var x=O,y=function(e){var t=function(t){var a=t.getPrefixCls,n=e.prefixCls,c=e.className,r=e.style,i=a("skeleton",n),s=o()(i,"".concat(i,"-element"),c);return l.createElement("div",{className:s},l.createElement("div",{className:o()("".concat(i,"-image"),c),style:r},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(i,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(i,"-image-path")}))))};return l.createElement(m.a,null,t)};function g(e){return e&&"object"===Object(r.a)(e)?e:{}}var w=function(e){var t=function(t){var a=t.getPrefixCls,r=t.direction,i=e.prefixCls,d=e.loading,m=e.className,v=e.children,j=e.avatar,p=e.title,f=e.paragraph,h=e.active,O=e.round,x=a("skeleton",i);if(d||!("loading"in e)){var y,w,E,N=!!j,C=!!p,S=!!f;if(N){var k=Object(c.a)(Object(c.a)({prefixCls:"".concat(x,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(C,S)),g(j));w=l.createElement("div",{className:"".concat(x,"-header")},l.createElement(b,k))}if(C||S){var P,z;if(C){var I=Object(c.a)(Object(c.a)({prefixCls:"".concat(x,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(N,S)),g(p));P=l.createElement(s,I)}if(S){var q=Object(c.a)(Object(c.a)({prefixCls:"".concat(x,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(N,C)),g(f));z=l.createElement(u,q)}E=l.createElement("div",{className:"".concat(x,"-content")},P,z)}var D=o()(x,(y={},Object(n.a)(y,"".concat(x,"-with-avatar"),N),Object(n.a)(y,"".concat(x,"-active"),h),Object(n.a)(y,"".concat(x,"-rtl"),"rtl"===r),Object(n.a)(y,"".concat(x,"-round"),O),y),m);return l.createElement("div",{className:D},w,E)}return v};return l.createElement(m.a,null,t)};w.defaultProps={avatar:!1,title:!0,paragraph:!0},w.Button=h,w.Avatar=p,w.Input=x,w.Image=y;var E=w;t.a=E},796:function(e,t,a){"use strict";a.r(t);var n=a(814),c=a(806),r=a(793),l=a(136),i=a(137),o=a(231),s=a(230),d=a(821),u=a(352),m=a(4),b=a(6),v=a(11),j=a(0),p=a(7),f=a.n(p),h=a(92),O=a(304),x=a(90),y=a(33),g=a(3);function w(e){return void 0!==e&&null!==e}var E=function(e){var t,a=e.itemPrefixCls,n=e.component,c=e.span,r=e.className,l=e.style,i=e.labelStyle,o=e.contentStyle,s=e.bordered,d=e.label,u=e.content,b=e.colon,v=n;return s?j.createElement(v,{className:f()((t={},Object(m.a)(t,"".concat(a,"-item-label"),w(d)),Object(m.a)(t,"".concat(a,"-item-content"),w(u)),t),r),style:l,colSpan:c},w(d)&&j.createElement("span",{style:i},d),w(u)&&j.createElement("span",{style:o},u)):j.createElement(v,{className:f()("".concat(a,"-item"),r),style:l,colSpan:c},j.createElement("div",{className:"".concat(a,"-item-container")},d&&j.createElement("span",{className:f()("".concat(a,"-item-label"),Object(m.a)({},"".concat(a,"-item-no-colon"),!b)),style:i},d),u&&j.createElement("span",{className:f()("".concat(a,"-item-content")),style:o},u)))};function N(e,t,a){var n=t.colon,c=t.prefixCls,r=t.bordered,l=a.component,i=a.type,o=a.showLabel,s=a.showContent,d=a.labelStyle,u=a.contentStyle;return e.map((function(e,t){var a=e.props,m=a.label,b=a.children,v=a.prefixCls,p=void 0===v?c:v,f=a.className,h=a.style,O=a.labelStyle,x=a.contentStyle,y=a.span,w=void 0===y?1:y,N=e.key;return"string"===typeof l?j.createElement(E,{key:"".concat(i,"-").concat(N||t),className:f,style:h,labelStyle:Object(g.a)(Object(g.a)({},d),O),contentStyle:Object(g.a)(Object(g.a)({},u),x),span:w,colon:n,component:l,itemPrefixCls:p,bordered:r,label:o?m:null,content:s?b:null}):[j.createElement(E,{key:"label-".concat(N||t),className:f,style:Object(g.a)(Object(g.a)(Object(g.a)({},d),h),O),span:1,colon:n,component:l[0],itemPrefixCls:p,bordered:r,label:m}),j.createElement(E,{key:"content-".concat(N||t),className:f,style:Object(g.a)(Object(g.a)(Object(g.a)({},u),h),x),span:2*w-1,component:l[1],itemPrefixCls:p,bordered:r,content:b})]}))}var C=function(e){var t=j.useContext(P),a=e.prefixCls,n=e.vertical,c=e.row,r=e.index,l=e.bordered;return n?j.createElement(j.Fragment,null,j.createElement("tr",{key:"label-".concat(r),className:"".concat(a,"-row")},N(c,e,Object(g.a)({component:"th",type:"label",showLabel:!0},t))),j.createElement("tr",{key:"content-".concat(r),className:"".concat(a,"-row")},N(c,e,Object(g.a)({component:"td",type:"content",showContent:!0},t)))):j.createElement("tr",{key:r,className:"".concat(a,"-row")},N(c,e,Object(g.a)({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},S=function(e){return e.children},k=a(41),P=j.createContext({}),z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function I(e,t,a){var n=e;return(void 0===t||t>a)&&(n=Object(k.a)(e,{span:a}),Object(x.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),n}function q(e){var t,a=e.prefixCls,n=e.title,c=e.extra,r=e.column,l=void 0===r?z:r,i=e.colon,o=void 0===i||i,s=e.bordered,d=e.layout,u=e.children,p=e.className,x=e.style,g=e.size,w=e.labelStyle,E=e.contentStyle,N=j.useContext(y.b),S=N.getPrefixCls,k=N.direction,q=S("descriptions",a),D=j.useState({}),H=Object(b.a)(D,2),L=H[0],M=H[1],T=function(e,t){if("number"===typeof e)return e;if("object"===Object(v.a)(e))for(var a=0;a<O.b.length;a++){var n=O.b[a];if(t[n]&&void 0!==e[n])return e[n]||z[n]}return 3}(l,L);j.useEffect((function(){var e=O.a.subscribe((function(e){"object"===Object(v.a)(l)&&M(e)}));return function(){O.a.unsubscribe(e)}}),[]);var R=function(e,t){var a=Object(h.a)(e).filter((function(e){return e})),n=[],c=[],r=t;return a.forEach((function(e,l){var i,o=null===(i=e.props)||void 0===i?void 0:i.span,s=o||1;if(l===a.length-1)return c.push(I(e,o,r)),void n.push(c);s<r?(r-=s,c.push(e)):(c.push(I(e,s,r)),n.push(c),r=t,c=[])})),n}(u,T);return j.createElement(P.Provider,{value:{labelStyle:w,contentStyle:E}},j.createElement("div",{className:f()(q,(t={},Object(m.a)(t,"".concat(q,"-").concat(g),g&&"default"!==g),Object(m.a)(t,"".concat(q,"-bordered"),!!s),Object(m.a)(t,"".concat(q,"-rtl"),"rtl"===k),t),p),style:x},(n||c)&&j.createElement("div",{className:"".concat(q,"-header")},n&&j.createElement("div",{className:"".concat(q,"-title")},n),c&&j.createElement("div",{className:"".concat(q,"-extra")},c)),j.createElement("div",{className:"".concat(q,"-view")},j.createElement("table",null,j.createElement("tbody",null,R.map((function(e,t){return j.createElement(C,{key:t,index:t,colon:o,prefixCls:q,vertical:"vertical"===d,bordered:s,row:e})})))))))}q.Item=S;var D,H=q,L=a(799),M=a(40),T=a(804),R=a(61),V=a(141),A=a(51),B=a(248),K=a(227),U=a(89);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function G(e,t){var a=e.title,n=e.titleId,c=F(e,["title","titleId"]);return j.createElement("svg",J({viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200,ref:t,"aria-labelledby":n},c),a?j.createElement("title",{id:n},a):null,D||(D=j.createElement("path",{d:"M0 512v512h1024V0H0z m825.216-40.789333c26.026667 6.485333 45.824 18.048 64.042667 36.906666 9.429333 10.069333 23.424 28.416 24.533333 32.853334 0.341333 1.28-44.202667 31.146667-71.168 47.914666-0.981333 0.64-4.906667-3.584-9.258667-10.069333-13.226667-19.2-27.008-27.477333-48.128-28.928-31.061333-2.133333-51.029333 14.122667-50.858666 41.258667a37.546667 37.546667 0 0 0 4.352 19.2c6.826667 14.122667 19.541333 22.613333 59.306666 39.808 73.344 31.573333 104.704 52.352 124.202667 81.92 21.76 32.981333 26.666667 85.674667 11.861333 124.842666-16.213333 42.581333-56.533333 71.509333-113.28 81.066667-17.536 3.114667-59.136 2.645333-77.994666-0.768-41.130667-7.338667-80.128-27.648-104.192-54.314667-9.429333-10.368-27.818667-37.546667-26.666667-39.466666a67.413333 67.413333 0 0 1 9.386667-6.016c4.608-2.602667 21.802667-12.544 38.058666-21.973334l29.44-17.066666 6.186667 9.130666c8.618667 13.141333 27.434667 31.189333 38.826667 37.205334 32.682667 17.237333 77.525333 14.805333 99.626666-5.034667a37.674667 37.674667 0 0 0 13.354667-30.72c0-11.861333-1.493333-17.066667-7.68-26.026667-7.936-11.349333-24.192-20.906667-70.357333-40.96-52.821333-22.741333-75.562667-36.864-96.384-59.306666a135.04 135.04 0 0 1-28.117334-51.2c-3.882667-14.464-4.864-50.730667-1.792-65.322667 10.88-51.072 49.408-86.613333 105.002667-97.194667 18.048-3.413333 59.989333-2.133333 77.696 2.261334z m-240.384 42.752l0.341333 41.941333H451.84v378.709333H357.546667v-378.709333H224.341333v-41.130667c0-22.784 0.469333-41.813333 1.109334-42.24 0.512-0.682667 81.621333-1.024 179.925333-0.853333l178.986667 0.512z",fill:"currentColor"})))}var W,_=j.forwardRef(G);a.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function Y(e,t){var a=e.title,n=e.titleId,c=X(e,["title","titleId"]);return j.createElement("svg",Q({viewBox:"0 0 1152 1024",xmlns:"http://www.w3.org/2000/svg",width:200,height:200,ref:t,"aria-labelledby":n},c),a?j.createElement("title",{id:n},a):null,W||(W=j.createElement("path",{fill:"currentColor",d:"M576 576h-64v-128h64v128z m576-256v384H576v64H320v-64H0V320h1152z m-832 64H64v256h128v-192h64v192h64V384z m320 0H384v320h128v-64h128V384z m448 0H704v256h128v-192h64v192h64v-192h64v192h64V384z"})))}var Z=j.forwardRef(Y),$=(a.p,a(10)),ee={default:{},types:{color:"rgba(119, 136, 153, 0.5)"}},te=function(e){var t=e.data,a=e.active,n=t.name.startsWith("@types/"),c=n?"types":"default";return Object($.jsx)(d.a,{className:f()(a&&"ant-card--active"),title:t.name,headStyle:ee[c],bodyStyle:ee[c],hoverable:!0,extra:n&&Object($.jsx)(R.a,{component:_,style:ee[c]}),children:t.version})},ae=function(e){var t,a,c=e.data,r=U.b.useRequest((function(){return B.c.getPackage(c.name)}),c.name),l=(null===(t=r.data)||void 0===t?void 0:t.collected)||{},i=l.metadata,o=l.npm,m=null===i||void 0===i?void 0:i.readme,b=null===i||void 0===i?void 0:i.links.repository,v=b?b.replace("https://github.com","").slice(1):void 0;return Object($.jsxs)(d.a,{title:Object($.jsxs)("span",{children:[Object($.jsx)(n.a.Text,{children:c.name})," ",Object($.jsxs)(n.a.Text,{type:"secondary",children:["(",c.version,")"]})]}),extra:r.data&&Object($.jsx)(ne,Object(s.a)({},r.data)),children:[Object($.jsx)(d.a,{type:"inner",title:"General",children:Object($.jsxs)(u.a,{loading:r.debouncedLoading,active:!0,paragraph:{rows:20},children:[Object($.jsx)("article",{className:"border border--accent",children:v&&Object($.jsx)("img",{src:(a=v,"".concat("https://opengraph.githubassets.com/pseudo-hash","/").concat(a)),alt:"repo-preview",width:"100%"})}),Object($.jsxs)(H,{bordered:!0,column:1,children:[Object($.jsx)(H.Item,{label:"Description",children:null===i||void 0===i?void 0:i.description}),Object($.jsx)(H.Item,{label:"Version",children:null===i||void 0===i?void 0:i.version}),Object($.jsx)(H.Item,{label:"License",children:null===i||void 0===i?void 0:i.license}),Object($.jsxs)(H.Item,{label:"Downloads",children:[null===o||void 0===o?void 0:o.downloads[1].count," (last week)"]}),Object($.jsx)(H.Item,{label:"Keywords",children:((null===i||void 0===i?void 0:i.keywords)||[]).map((function(e){return Object($.jsx)(n.a.Text,{code:!0,children:e},e)}))})]})]})}),Object($.jsx)(d.a,{type:"inner",title:"README",className:"mt-20",bodyStyle:{minHeight:500,overflow:"hidden"},children:Object($.jsxs)(u.a,{loading:r.debouncedLoading,active:!0,paragraph:{rows:12},children:[m&&Object($.jsx)(K.a,{text:m,repoUri:v}),!m&&Object($.jsx)(L.a,{align:"middle",justify:"center",style:{minHeight:500},children:Object($.jsx)(M.a,{description:"No readme"})})]})})]})},ne=function(e){var t=(e.collected.metadata||{}).links,a=[{href:t.repository,icon:Object($.jsx)(V.a,{style:{fontSize:28}})},{href:t.npm,icon:Object($.jsx)(R.a,{component:Z,style:{fontSize:40}})}];return Object($.jsx)(L.a,{align:"middle",gutter:[20,20],children:a.map((function(e){var t=e.icon,a=e.href;return Object($.jsx)(n.a.Link,{href:a,target:"_blank",disabled:!a,style:{marginLeft:10},children:t},a)}))})},ce=function(e){var t=e.items,a=e.activeKey;return Object($.jsx)(L.a,{gutter:[10,10],className:"mt-20",children:t.map((function(e){return Object($.jsx)(T.a,{span:8,children:Object($.jsx)(A.b,{to:"/tech/".concat(encodeURIComponent(e.name)),children:Object($.jsx)(te,{data:e,active:a===e.name})})},e.name)}))})},re=a(237);t.default=function(e){U.a.useProjectTitle("Issues");var t=((null===e||void 0===e?void 0:e.match)||{}).params,a=(null===t||void 0===t?void 0:t.dependencyName)?decodeURIComponent(null===t||void 0===t?void 0:t.dependencyName):void 0,s=a?B.d.getDependency(a):void 0,d=B.d.getDependencies(),u=B.d.getDevDependencies();return Object($.jsxs)(K.d,{header:Object($.jsx)(o.a,{}),children:[Object($.jsxs)(K.d.Main,{children:[Object($.jsx)(re.a,{}),Object($.jsx)(n.a.Title,{className:"mt-40",level:2,children:"Tech Stack"}),Object($.jsx)(c.a,{className:"mt-40",children:Object($.jsxs)(r.a,{children:[Object($.jsx)(r.a.TabPane,{tab:Object($.jsxs)("span",{children:[Object($.jsx)(l.a,{})," Dependencies"]}),children:Object($.jsx)(ce,{items:d,activeKey:a})},"deps"),Object($.jsx)(r.a.TabPane,{tab:Object($.jsxs)("span",{children:[Object($.jsx)(i.a,{})," Dev Dependencies"]}),children:Object($.jsx)(ce,{items:u,activeKey:a})},"devDeps")]})})]}),Object($.jsxs)(K.d.Sider,{children:[s&&Object($.jsx)(ae,{data:s}),!s&&Object($.jsx)(K.d.Placeholder,{title:"Select package for continue"})]})]})}}}]);
//# sourceMappingURL=14.eaa4cedf.chunk.js.map