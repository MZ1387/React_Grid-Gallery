(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(n,e,t){n.exports=t(36)},30:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(7),o=t.n(i),c=(t(30),t(2)),l=t(14),u=t(15),d=t(20),p=t(16),m=t(21),s=t(39),f=t(40),h=t(38),g=t(3),v=t(37);function x(){var n=Object(c.a)(["\n        width: 50px;\n        height: 50px;\n        margin: 5px;\n\n        @media (max-width: 990px) {\n            width: 30px;\n            height: 50px;\n            margin: 5px;\n        }\n    "]);return x=function(){return n},n}function b(){var n=Object(c.a)(["\n    width: 200px;\n    height: 200px;\n    background: no-repeat center/170% url(React_Grid-Gallery/img/profile.jpeg);\n    border-radius: 100px;\n    margin: 40px;\n\n    @media (max-width: 990px) {\n        width: 120px;\n        height: 120px;\n        margin: 20px;\n    }\n\n    ","\n"]);return b=function(){return n},n}var w=g.c.div(b(),function(n){return n.mini&&Object(g.b)(x())});function j(){var n=Object(c.a)(["\n    grid-area: description;\n    max-width: 400px;\n\n    @media (max-width: 990px) {\n        padding-left: 25px;\n        grid-column: 1 / 3;\n    }\n"]);return j=function(){return n},n}function y(){var n=Object(c.a)(["\n    grid-area: label; \n    \n    @media (max-width: 990px) {\n        padding-left: 25px;\n    }\n"]);return y=function(){return n},n}function O(){var n=Object(c.a)(["\n    grid-area: name;\n    font-size: 35px;\n    align-self: center;\n"]);return O=function(){return n},n}function E(){var n=Object(c.a)(["\n    grid-area: photo;\n"]);return E=function(){return n},n}function k(){var n=Object(c.a)(["\n    display: grid;\n    justify-content: left;\n    grid-template-columns: auto auto;\n    gap: 10px;\n"]);return k=function(){return n},n}function P(){var n=Object(c.a)(["\n    display: grid;\n    justify-content: center;\n    margin-top: 80px;\n    margin-bottom: 50px;\n    gap: 15px;\n    grid-template-areas: \n        'photo name'\n        'photo label'\n        'photo description';\n    \n    @media (max-width: 990px) {\n        grid-template-areas: \n            'photo name'\n            'label .'\n            'description .';\n    }\n"]);return P=function(){return n},n}var G=g.c.div(P()),L=g.c.div(k()),B=g.c.div(E()),R=g.c.div(O()),C=g.c.div(y()),z=g.c.div(j()),H=function(){return r.a.createElement(G,null,r.a.createElement(B,null,r.a.createElement(w,null)),r.a.createElement(R,null,"Mario Zamora"),r.a.createElement(C,null,r.a.createElement("strong",null,"13,000")," Followers"),r.a.createElement(z,null,"Hoodie artisan wayfarers kitsch gentrify hella deep v. Hella hammock hexagon helvetica leggings, organic jean shorts slow-carb readymade letterpress wolf. Live-edge sartorial freegan kickstarter kombucha. Subway tile whatever wolf sriracha you probably haven't heard of them brooklyn franzen flexitarian keffiyeh gluten-free iPhone roof party. Hashtag pug hot chicken shabby chic crucifix franzen sartorial copper mug drinking vinegar helvetica."))},M=[{id:1,title:"Blue Palms"},{id:2,title:"Purple Palms"},{id:3,title:"Desert Palms"},{id:4,title:"Sunset Palms"},{id:5,title:"Yellow Red Flowers"},{id:6,title:"Mountain Lake"},{id:7,title:"Ocean Resort"},{id:8,title:"Crane"},{id:9,title:"Ocean"},{id:10,title:"Lunch"},{id:11,title:"Card"},{id:12,title:"Valley"},{id:13,title:"Blue Branch"}];function _(){var n=Object(c.a)(["\n    background-size: cover;\n\n    &:nth-of-type(2n) {\n      grid-row-start: span 2;\n    }\n  "]);return _=function(){return n},n}function S(){var n=Object(c.a)(["\n  background: no-repeat center/150% url(React_Grid-Gallery/img/",".jpeg);\n  :hover {\n    opacity: .7;\n  }\n\n  ","\n"]);return S=function(){return n},n}function W(){var n=Object(c.a)(["\n        color: black;\n    "]);return W=function(){return n},n}function F(){var n=Object(c.a)(["\n    text-decoration: none;\n    color: #ccc;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    ","\n"]);return F=function(){return n},n}function I(){var n=Object(c.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: center;\n    gap: 20px;\n    margin-bottom: 20px\n"]);return I=function(){return n},n}function J(){var n=Object(c.a)(["\n        grid-auto-rows: 200px;\n        grid-gap: 5px;\n    "]);return J=function(){return n},n}function U(){var n=Object(c.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 305px);\n    justify-content: center;\n    gap: 20px;\n    grid-auto-rows: 305px;\n    ","\n\n    @media (max-width: 990px) {\n        gap: 5px;\n        grid-template-columns: repeat(3, 1fr);\n        grid-auto-rows: calc(33vw - 10px);\n    }\n"]);return U=function(){return n},n}var Y=g.c.div(U(),function(n){return n.cascade&&Object(g.b)(J())}),q=g.c.div(I()),A=Object(g.c)(v.a)(F(),function(n){return n.selected&&Object(g.b)(W())}),D=Object(g.c)(v.a)(S(),function(n){return n.index},function(n){return n.cascade&&Object(g.b)(_())}),N=function(n){var e=n.match,t="?type=cascade"===n.location.search;return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(q,null,r.a.createElement(A,{selected:!t,to:"".concat(e.url)},"Square"),r.a.createElement(A,{selected:t,to:{pathname:"".concat(e.url),search:"?type=cascade"}},"Cascade")),r.a.createElement(Y,{cascade:t},M.map(function(n){return r.a.createElement(D,{key:n.id,index:n.id,cascade:t,to:{pathname:"/img/ ".concat(n.id),state:{modal:!0}}})})))};function V(){var n=Object(c.a)(["\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 60px auto 40px;\n"]);return V=function(){return n},n}function Z(){var n=Object(c.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    @media (max-width: 990px) {\n        grid-template-columns: 1fr; \n    }   \n"]);return Z=function(){return n},n}var $=g.c.div(Z()),K=g.c.div(V());function Q(){var n=Object(c.a)(["\n  position: absolute;\n  background: #fff;\n  top: ","px;\n  left: 25%;\n  right: 25%;\n  width: 600px;\n  border: 2px solid #444;\n\n  @media(max-width: 990px){\n    left: 0; \n    right: 0; \n    top: ","px; \n    width: auto; \n  }\n"]);return Q=function(){return n},n}function T(){var n=Object(c.a)(["\n    body {\n        overflow: hidden;\n    }\n"]);return T=function(){return n},n}var X=Object(g.a)(T()),nn=g.c.div(Q(),function(n){return n.top},function(n){return n.top}),en=function(n){var e=n.match,t=n.history,a=M[parseInt(e.params.id,10)-1];if(!a)return null;return r.a.createElement("div",{onClick:function(n){n.stopPropagation(),t.goBack()},style:{position:"absolute",top:0,left:0,bottom:0,right:0,height:"5000px",background:"rgba(0, 0, 0, 0.8)"}},r.a.createElement(nn,{top:window.scrollY+window.innerHeight/2-250},r.a.createElement(X,null),r.a.createElement($,null,r.a.createElement(on,{inModal:!0,index:a.id}),r.a.createElement(K,null,r.a.createElement(L,null,r.a.createElement(w,{mini:!0}),r.a.createElement("h3",null,"User Name")),r.a.createElement("div",null,r.a.createElement("h2",null,a.title)),r.a.createElement("div",null,"13 Likes")))))};function tn(){var n=Object(c.a)(["\n    :hover {\n      opacity: .7;\n    }\n  "]);return tn=function(){return n},n}function an(){var n=Object(c.a)(["\n  width: 305px;\n  height: 305px;\n\n  @media (max-width: 990px) {\n    width: 100%;\n  }\n\n  background: no-repeat center/150% url(React_Grid-Gallery/img/",".jpeg);\n  ","\n"]);return an=function(){return n},n}var rn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(r)))).previousLocation=t.props.location,t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"componentWillUpdate",value:function(n){var e=this.props.location;"POP"===n.history.action||e.state&&e.state.modal||(this.previousLocation=this.props.location)}},{key:"render",value:function(){var n=this.props.location,e=!(!n.state||!n.state.modal||this.previousLocation===n);return r.a.createElement("div",null,r.a.createElement(s.a,{location:e?this.previousLocation:n},r.a.createElement(f.a,{exact:!0,path:"/",component:N}),r.a.createElement(f.a,{path:"/img/:id",component:en})),e?r.a.createElement(f.a,{path:"/img/:id",component:en}):null)}}]),e}(r.a.Component),on=g.c.div(an(),function(n){return n.index},function(n){return!n.inModal&&Object(g.b)(tn())});var cn=function(){return r.a.createElement(h.a,{basename:"/React_Grid-Gallery"},r.a.createElement(f.a,{component:rn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(cn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.2e0e1823.chunk.js.map