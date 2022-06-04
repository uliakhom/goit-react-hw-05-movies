"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[307],{3307:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(1413),a=n(5861),u=n(885),c=n(7757),i=n.n(c),s=n(2791),o=n(501),f=n(8611),p=n(4942),m="movieSearchForm_form__D-hgV",v="movieSearchForm_input__1kdFO",l="movieSearchForm_btn__q83gA",d=n(184),h=function(t){var e=t.onSubmit,n=(0,s.useState)({query:""}),a=(0,u.Z)(n,2),c=a[0],i=a[1],o=function(t){t.preventDefault(),e((0,r.Z)({},c)),i({query:""})};return(0,d.jsxs)("form",{action:"",onSubmit:o,className:m,children:[(0,d.jsx)("input",{value:c.query,name:"query",onChange:function(t){var e=t.target,n=e.name,a=e.value;i((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,p.Z)({},n,a))}))},type:"text",className:v}),(0,d.jsx)("button",{type:"button",onClick:o,className:l,children:"Search"})]})},x=n(6188),_=function(){var t=(0,s.useState)({items:[],loading:!1,error:null}),e=(0,u.Z)(t,2),n=e[0],c=e[1],p=(0,o.lr)(),m=(0,u.Z)(p,2),v=m[0],l=m[1],_=v.get("query");(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c((function(t){return(0,r.Z)((0,r.Z)({},t),{},{loading:!0})})),t.prev=1,t.next=4,(0,x.UN)(_);case 4:e=t.sent,c((function(t){return(0,r.Z)((0,r.Z)({},t),{},{loading:!1,items:e})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,error:t.t0.message})}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();_&&t()}),[_]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{onSubmit:function(t){var e=t.query;return l({query:e})}}),(0,d.jsx)(f.Z,{items:n.items})]})}},8611:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(501),a="moviesList_list__2kWPB",u="moviesList_item__XvK8-",c="moviesList_link__p6Zt+",i=n(184),s=function(t){var e=t.items.map((function(t){var e=t.id,n=t.title,a=t.name;return(0,i.jsx)("li",{className:u,children:(0,i.jsx)(r.rU,{to:"/movies/".concat(e),className:c,children:null!==n&&void 0!==n?n:a})},e)}));return(0,i.jsx)("ul",{className:a,children:e})},o=s;s.defaultProps={items:[]}},6188:function(t,e,n){n.d(e,{Pg:function(){return o},UN:function(){return m},XT:function(){return s},tx:function(){return p},zv:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e074371f26d85cdd5e4539421aae2fa2"}}),s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("search/movie?query=".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=307.c1116038.chunk.js.map