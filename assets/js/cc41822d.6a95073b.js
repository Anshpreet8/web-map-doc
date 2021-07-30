(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),o=(a(0),a(115)),i={id:"web-map",title:'<map is="web-map">',slug:"/maps/web-map"},s={unversionedId:"maps/web-map",id:"maps/web-map",isDocsHomePage:!1,title:'<map is="web-map">',description:'The HTML `` element has been deployed and in use in browsers since the mid-90\'s. It was used to provide visually appealing yet accessible home pages, by giving the Web developer the ability to design links as invisible yet interactive polygonal areas on top of one or more images.  Use of this facility became known as "client side image maps", and was often used to provide site navigation links.',source:"@site/docs/maps/web-map.md",slug:"/maps/web-map",permalink:"/web-map-doc/docs/maps/web-map",version:"current",sidebar:"someSidebar",previous:{title:"<mapml-viewer>",permalink:"/web-map-doc/docs/maps/mapml-viewer"},next:{title:"Static Tiles Layer",permalink:"/web-map-doc/docs/layers/static-tiles"}},p=[],l={toc:p};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The HTML ",Object(o.b)("inlineCode",{parentName:"p"},"<map>"),' element has been deployed and in use in browsers since the mid-90\'s. It was used to provide visually appealing yet accessible home pages, by giving the Web developer the ability to design links as invisible yet interactive polygonal areas on top of one or more images.  Use of this facility became known as "client side image maps", and was often used to provide site navigation links.'),Object(o.b)("p",null,"In recent years, client side image maps have fallen out of wide use, due to improvements in other areas of the Web platform.  However, some sites still use image maps to provide a simple, accessible, but simultaneously visual user experience."),Object(o.b)("p",null,'The web-map custom element suite provides a set of proof-of-concept "',Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"customized built-in"),'" elements based on ',Object(o.b)("inlineCode",{parentName:"p"},"<map>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<area>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<img>"),' that will "fall back" to a client side image map in older browsers, or in the absence of JavaScript (scripting disabled).'),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note that because ",Object(o.b)("a",{parentName:"p",href:"https://caniuse.com/mdn-api_customelementregistry_builtin"},"not all modern Web browsers implement HTML's customized built-in elements"),", it is not recommended to use this proof-of-concept on a public Web site, as end-user confusion may be the result."),Object(o.b)("p",{parentName:"div"},"Additionally, customized built-in elements are not accessible to screen reader users in some browsers due to a ",Object(o.b)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1208405"},"Chromium bug"),"."))),Object(o.b)("p",null,"The following markup may work on Chrome and Firefox, although it may take some fine tuning:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<img usemap="#mymap" src="../map1.png" width="700" height="400" alt="Map area">\n<map name="mymap" is="web-map" zoom="17" lat="45.398043" lon="-75.70683" controls>\n  <layer- id="osm" src="https://geogratis.gc.ca/mapml/osmtile/osm/" label="Open Street Map" checked></layer->\n  <layer- id="marker" label="Marker layer" src="../marker.mapml"></layer->\n  <area is="map-area" href=\'http://example.com/marker/\' alt="rectangle" coords="255,145,275,190" shape="rect">\n  <area is="map-area" id="donut" alt="Circle" href=\'http://example.com/circle/\' coords="250,250,25" shape="circle">\n  <area is="map-area" id="hole" coords="250,250,7" shape="circle">\n  <area is="map-area" id="rect" href=\'http://example.com/rectangle/\' alt="Rectangle" coords="345,290,415,320" shape="rect">\n  <area is="map-area" id="poly" href=\'http://example.com/polygon/\' alt="Polygon" coords="392,116,430,100,441,128,405,145" shape="poly">\n</map>\n')),Object(o.b)("p",null,"To experiment with the ",Object(o.b)("inlineCode",{parentName:"p"},"web-map")," and ",Object(o.b)("inlineCode",{parentName:"p"},"map-area")," custom elements, you should link your ",Object(o.b)("inlineCode",{parentName:"p"},'<script type="module" src="web-map.js"><\/script>')," to the ",Object(o.b)("inlineCode",{parentName:"p"},"web-map.js")," file that is built by the web-map custom element suite build process."),Object(o.b)("p",null,'In theory, if you take steps to provde the fallback markup, a normal (progressive) Web map experience will be had by most users, while those using an older browser or perhaps even Safari may get the "fallback" client side image map experience.  '),Object(o.b)("p",null,"An older example of such a Web map may be found in the ",Object(o.b)("a",{parentName:"p",href:"https://maps4html.org/Web-Map-Custom-Element/blog/progressive-web-maps.html"},"blog post on Progressive Web Maps"),".  Please raise an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Maps4HTML/Web-Map-Custom-Element/issues"},"issue")," if you have comments about how that example works for you."))}m.isMDXComponent=!0},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,d=c["".concat(i,".").concat(u)]||c[u]||b[u]||o;return a?r.a.createElement(d,s(s({ref:t},l),{},{components:a})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);