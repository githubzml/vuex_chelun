webpackJsonp([2],{G90B:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("4YfN"),i=r.n(n),a=r("9rMa"),o={data:function(){return{data:[1,2,3],current:1}},computed:i()({},Object(a.e)({currentYear:function(t){return t.app.currentYear},info:function(t){return t.app.info}}),Object(a.c)({years:"app/years",list:"app/list"})),methods:i()({},Object(a.b)({goPic:"pic/goPic"}),Object(a.d)({changeYear:"app/changeYear",detail:"app/detail"}),{oClick:function(t){this.current=t},_price:function(){this.$router.history.push("/price")}}),mounted:function(){this.goPic(this.$router.currentRoute.query.id)}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"banner"},[r("router-link",{attrs:{to:"/pic"}},[r("img",{attrs:{src:t.info.CoverPhoto,alt:""}}),t._v(" "),r("p",[t._v(t._s(t.info.pic_group_count)+"张照片")])])],1),t._v(" "),r("div",{staticClass:"msg"},[r("div",[r("p",[t._v(t._s(t.info.market_attribute&&t.info.market_attribute.dealer_price))]),t._v(" "),r("p",[t._v("指导价"+t._s(t.info.market_attribute&&t.info.market_attribute.official_refer_price))])]),t._v(" "),r("div",[r("button",{on:{click:t._price}},[t._v(t._s(t.info.bottom_button&&t.info.bottom_button.right_button.name))])])]),t._v(" "),r("li",{staticClass:"year"},t._l(t.years,function(e,n){return r("span",{key:n,class:t.currentYear==e?"active":"",on:{click:function(r){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),r("section",t._l(t.list,function(e,n){return r("ul",{key:n},[r("p",[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return r("li",{key:n},[r("p",[t._v(t._s(e.market_attribute.year+"款 "+e.car_name))]),t._v(" "),r("p",[t._v(t._s(e.max_power+"马力"+e.gear_num+"档"+e.trans_type))]),t._v(" "),r("p",[r("span",[t._v(t._s("指导价"+e.market_attribute.dealer_price_min))]),t._v(" "),r("span",[t._v(t._s(e.market_attribute.official_refer_price))])]),t._v(" "),r("button",{on:{click:t._price}},[t._v(t._s(t.info.bottom_button&&t.info.bottom_button.right_button.name))])])})],2)})),t._v(" "),r("footer",{on:{click:t._price}},[r("p",[t._v(t._s(t.info.BottomEntranceSubTitle))]),t._v(" "),r("p",[t._v(t._s(t.info.BottomEntranceTitle))])])])},staticRenderFns:[]};var c=r("C7Lr")(o,_,!1,function(t){r("TqEt")},"data-v-ee2248ea",null);e.default=c.exports},TqEt:function(t,e){}});
//# sourceMappingURL=2.3a78dedeb494d6fdb022.js.map