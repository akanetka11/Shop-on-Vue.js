(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0f0b":function(t,e,a){"use strict";a("d2f9")},1056:function(t,e,a){},"1f77":function(t,e,a){"use strict";a("28f5")},"1fb1":function(t,e,a){},2768:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABnElEQVRIieXVPWhUQRTF8efGj6gELVJImoCVX4U2FqJJY2FcBBFS2KTSWrCzEcVGRCy00KC2opVItLKwsQyCRaqIaDYQ7YwEYqH+LPYuDsPb3YmoCJ7mcWfm/M/M5b15VfWvC3vQXKtpS4+5AYzhOua1tYRGP+heXMIsnmZzm3EC0wGr08Fe8F3Z4lUMxdx01Kne4yaWk7HL/U7wArfxOgyTMX4rg08lnofJ+GzPgMR0PgwPop7IAq5gCJN4mYx/x0hJwM4wfMJGDGIlAS3XtKyjM6Wn6LTpWNRPugBzPc5Z3V6tzsKT8XxWtLOqGsf6khPsjx19QAMj0eM6rWAGU9heuJGqwtsAHIr6VQJ9p/12HcWGxDOAI9hdEnAjYNeiPouLOJCt24Qm7uJjeO6UBIzF4vmauW04jUf4nLXsDS6UBDT8vBb2YTj6PIMvGXQOV3EY6/rCk5B7AVjEtwT4VfvLP4fRYmBNQDOBruJ5QHf8MjQLGMR9nMLW3wLtEnQ82tTCxJ8IaCWtWliLt/df6G9J+8puYUFcgP+PfgA/f+InVX1jpgAAAABJRU5ErkJggg=="},"28f5":function(t,e,a){},2911:function(t,e,a){"use strict";a("e364")},"37b8":function(t,e,a){"use strict";a("739e")},"3e6a":function(t,e,a){"use strict";a("739b")},"3f11":function(t,e,a){},4838:function(t,e,a){"use strict";a("d1c0")},"4c4b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEXElEQVRoge2YzW8bVRTFzx33H2ADdEdYeYEECxZILL0EVGIQBaUySZOafDiJ0zSUBDVRWmha+jETOw1+SbAVRbWTFNe0DkJsUnUBiA0gwYYdW5w/oZk5LBKnqeMZv5k4kZB8JG888+49v/d53wAttdRSS/8rra8/bFu9txElKc2KSVIK6+X2QuGHl/y2Nfy8nM+Xw9uO8bNjo1hY+/7rZkCQlPz6hkVH7tPY/nV1deMVP+21DeTz5bAjeATgxaetRXWcfqtPROgnaVUk5e7qhgVgaN/fFUckEvvw7b90YmgB5PLlcMjhI8g+89UAhDrT8Y5vCJKyki/Xmq+qAtuIxGKNIRoC5PLlsNjOsz1fawaiOs/oQ5CU5btlC2Q981VVDIYaQngC5HLlMA3b0/w+qa7YqYYQJCW38sAC6/Z8rSqOOJGeWNQVwhUgmy2+TMP4hcDzGol2g0nq7Menkm4QJCW7/MAiPHu+Vv+GiDe6utr/qffwhFurbeJVONQ2v2txaClXAskDECRlKVeyWH/Oe+kFW+Q1AHUBXEeApKhvSibAYZ8JIYCKd0f3phNJyWSLllD8mj8Qq85zd5GUzGLRJOAbghDVfy7aBwDzS0VL9OZ83Rhe66rhLkRS7ix867bdeUrA73aNvOu3LYDUQPx91/X0NIeGSEoqc8+UACMRTFSDvR9obcvaJzFJsebXTIEcNYQa7tczD/gAAHYgzLk1E0c0EiJQyYHTvk5138UYSbmVKpiQ5o4EIerCoD/zQAAAYAfihlUwIU0bCTU2/FGgojBwOUxSrpv5w08nobqY7Ahc0R6qnicpM7fy9wEG2SZBQWnifMd7Qc0DHqWEtgnHRuBrTRMudYeaQle+WrHgrzA7GEegJsdixzuFSMr0teVAp7NLQDU13nlMi5iUqZmcxQCFWQOpyxOdfTjSbZSUS1/mgpTEum7UFxNdviD0AUgZv5K15KjM7+URdXVSH0IPgJTPprOHXrC6EkDNTHVrQYQah6N8iiWL5BAJ+PmBKNHh3wTCPtu+/ubj35776fHDH4HpRrDe5i9cWgrW8wJ18/K5PgAYm1w0yQAn9l6MQBcayvnPF4JtlYS6fTW+LzFlZEKZEqQAPBDrWbkCJMczUQBFv/kETJkzvcmDCSkj4xmLCHAvJqPmtb5SvWeu30a3n4R+p8OK4xC6P9LN/I4Nc6Y3STLlK6bDypPtE3+4wnmRJ8ZVGLa9CeCk13sAQFLdudHvOV9335TExYwJan3t2ILYkbnrg3+6vdBwG02MpsOOGI0g1PxNHfNVUfrH5k14L+wtw3Yic6a7eUDzHIiPpsMGsQlIPQiVuT3gw3xVlN6ReRNSdyS2HDKy0MA84OMkjo+mw7BRMxKiFqwg5quifJKcq/3utAWBlnnAZy0UT6TDToibAE4KoBZnBw9hvipKdzJlCmUYwJZhiLb5QOpJpNvODs22N+U2sifK2aHZ9p5Euq15MVtqqaWWjkP/ARSqggh26lftAAAAAElFTkSuQmCC"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s={name:"App",components:{}},c=s,o=(a("034f"),a("2877")),u=Object(o["a"])(c,i,n,!1,null,null,null),l=u.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-homepage"},[r("div",{staticClass:"menu",attrs:{id:"menu"}},[r("toHomepage",{style:{background:t.activeBackgroundColor,borderRadius:t.activeBorderRadiusOfHomepage}}),r("toCart")],1),r("div",{staticClass:"main",attrs:{id:"main"}},[r("h1",[t._v("Shop")]),r("div",{staticClass:"main__wrapper"},[r("div",[r("h2",[t._v("Filters")]),r("filterCategories")],1),r("div",{staticClass:"main__wrapper__products"},[r("div",[r("h1",[t._v("results found")]),r("div",{staticClass:"searchProduct"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"searchField",attrs:{type:"text",placeholder:"Search Product"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),r("button",{staticClass:"searchButton",attrs:{type:"button"},on:{click:function(e){return t.searchProduct(t.search)}}},[r("img",{attrs:{src:a("5e62")}})])]),r("products"),r("div",{staticClass:"toNextPage"},[r("button",{staticClass:"back",attrs:{type:"button"}}),r("div",{staticClass:"nextPage"},[r("button",{staticClass:"toPage",style:{color:t.activeColor,background:t.activeBackground,borderRadius:t.activeBorderRadius,border:t.activeBorder},attrs:{type:"button"},on:{click:function(e){return t.switchView("firstProducts")}}},[t._v(" 1 ")]),r("button",{staticClass:"toPage",attrs:{type:"button"},on:{click:function(e){return t.switchView("secondProducts")}}},[t._v(" 2 ")]),r("button",{staticClass:"toPage",attrs:{type:"button"},on:{click:function(e){return t.switchView("thirdProducts")}}},[t._v(" 3 ")])]),r("button",{staticClass:"next",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/wishlist")}}})])],1)])])])])},f=[],m=a("5530"),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toHomepage"},[r("div",{staticClass:"toHomepage-bg"},[r("button",{attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[r("img",{attrs:{src:a("e1c8")}})])])])},C=[],v={name:"toHomepage",components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},g=v,h=(a("0f0b"),Object(o["a"])(g,A,C,!1,null,"e72e5f58",null)),b=h.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toWishlist"},[r("div",{staticClass:"toWishlist-bg"},[r("button",{attrs:{type:"button"},on:{click:function(e){return t.$router.push("/cart")}}},[r("img",{attrs:{src:a("e8d4")}})])])])},T=[],y={name:"toWishlist",components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},O=y,R=(a("aa8d"),Object(o["a"])(O,E,T,!1,null,"b842951e",null)),P=R.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filterCategories"},[a("VCategories",{attrs:{categories:t.categories}}),t._m(0),a("div",{staticClass:"price"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minPrice,expression:"minPrice",modifiers:{number:!0}}],staticClass:"minPrice",attrs:{type:"range",min:"0",max:"1000",step:"10"},domProps:{value:t.minPrice},on:{__r:function(e){t.minPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.maxPrice,expression:"maxPrice",modifiers:{number:!0}}],staticClass:"maxPrice",attrs:{type:"range",min:"0",max:"1000",step:"10"},domProps:{value:t.maxPrice},on:{__r:function(e){t.maxPrice=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v("Price")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("h1",[t._v("Brands")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_7",name:"brands"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_7"}},[t._v("Insignia™")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_8",name:"brands"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_8"}},[t._v("Samsung")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_9",name:"brands"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_9"}},[t._v("HP")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_10",name:"brands"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_10"}},[t._v("Apple")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_11",name:"brands"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_11"}},[t._v("Sony")])])}],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-categiries"},[a("h1",[t._v("Categories")]),a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_1",name:"categories"},on:{click:t.check}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_1"}},[t._v("Cell phones")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_2",name:"categories"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_2"}},[t._v("Computer")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_3",name:"categories"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_3"}},[t._v("Health and Fitness")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_4",name:"categories"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_4"}},[t._v("Office")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_5",name:"categories"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_5"}},[t._v("TV")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"radio"},[a("input",{staticClass:"radio_input",attrs:{type:"radio",id:"radio_6",name:"categories"}}),a("label",{staticClass:"radio_label",attrs:{for:"radio_6"}},[t._v("Video Games")])])}],S={name:"v-categories",components:{},props:{categories:{type:Array,default:function(){return[]}},methods:{check:function(){}}}},U=S,B=Object(o["a"])(U,x,Q,!1,null,null,null),D=B.exports,j={name:"v-filterCategories",components:{VCategories:D},props:{},data:function(){return{categories:[{name:"Cell phones",value:"cp"},{name:"Computer",value:"c"},{name:"Health and Fitness",value:"haf"},{name:"Office",value:"o"},{name:"TV",value:"tv"},{name:"Video Games",value:"vg"}],minPrice:0,maxPrice:1e3}}},J=j,V=(a("4838"),Object(o["a"])(J,w,k,!1,null,null,null)),I=V.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main__wrapper__catalog"},[a("div",{staticClass:"v-catalog-list"},t._l(t.PRODUCTS,(function(e){return a("vCatalogItem",{key:e.id,staticClass:"main__wrapper__catalog__product",attrs:{product_data:e},on:{addProductToCart:t.addProductToCart}})})),1)])},H=[],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-catalog-item"},[r("button",{staticClass:"product__info",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/product/:id")}}},[r("img",{attrs:{src:t.product_data.image}}),r("p",{staticClass:"price",staticStyle:{"font-size":"15px"}},[t._v("$"+t._s(t.product_data.price))]),r("p",{staticClass:"title",staticStyle:{"font-size":"13px"}},[t._v(t._s(t.product_data.title))])]),r("button",{attrs:{type:"button",id:"cart"},on:{click:t.addProductToCart}},[r("img",{attrs:{src:a("2768")}}),r("h2",[t._v(" Add to Cart ")])])])},F=[],N={name:"v-catalog-item",props:{product_data:{type:Object,default:function(){return{}}}},methods:{addProductToCart:function(){this.$emit("addProductToCart",this.product_data)}},mounted:function(){this.$set(this.product_data,"quantity",1)}},G=N,z=(a("6648"),Object(o["a"])(G,M,F,!1,null,null,null)),W=z.exports,L=a("2f62"),Z={name:"products",components:{vCatalogItem:W},data:function(){return{}},computed:Object(m["a"])(Object(m["a"])({},Object(L["c"])(["PRODUCTS","SEARCH"])),{},{filteredProducts:function(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}}),methods:Object(m["a"])(Object(m["a"])({},Object(L["b"])(["GET_PRODUCTS_FROM_API","ADD_TO_CART"])),{},{addProductToCart:function(t){this.ADD_TO_CART(t)}}),watch:{}},K=Z,q=(a("1f77"),Object(o["a"])(K,Y,H,!1,null,null,null)),X=q.exports,$={name:"v-homepage",components:{toHomepage:b,toCart:P,filterCategories:I,products:X},props:{},data:function(){return{categories:[{type:"Cell phones",value:"cp"},{type:"Computer",value:"c"},{type:"Health and Fitness",value:"haf"},{type:"Office",value:"o"},{type:"TV",value:"tv"},{type:"Video Games",value:"vg"}],url:"http://localhost:8081/public/static/data.json",activeBackground:"#7367f0",activeColor:"#fff",activeBorderRadius:"25px",activeBorder:"1px solid #7367f0",activeBackgroundColor:"#f5f5f5",activeBorderRadiusOfHomepage:"10px",searchValue:"",currentView:"firstProducts",isActive:!0,search:""}},computed:Object(m["a"])({},Object(L["c"])(["SEARCH"])),methods:Object(m["a"])(Object(m["a"])({},Object(L["b"])(["GET_SEARCH"])),{},{searchProduct:function(t){this.GET_SEARCH(t)}})},tt=$,et=(a("608a"),Object(o["a"])(tt,p,f,!1,null,null,null)),at=et.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart"},[a("div",{staticClass:"menu"},[a("toHomepage",{staticClass:"toHomepage"}),a("toCart",{staticClass:"toCart",style:{background:t.activeBackgroundColor,borderRadius:t.activeBorderRadiusOfHomepage}})],1),a("div",{staticClass:"main"},[a("h1",[t._v("Checkout")]),a("div",{staticClass:"main__wrapper"},[a("VCartCatalog",{attrs:{cart_data:t.CART}})],1),a("div",{staticClass:"main__catalog"},[a("div",{staticClass:"toNextPage"},[a("button",{staticClass:"back",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}}),a("div",{staticClass:"nextPage"},[a("button",{staticClass:"toPage",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[t._v(" 1 ")]),a("button",{staticClass:"toPage",style:{color:t.activeColor,background:t.activeBackground,borderRadius:t.activeBorderRadius,border:t.activeBorder},attrs:{type:"button"},on:{click:function(e){return t.$router.push("/wishlist")}}},[t._v(" 2 ")]),a("button",{staticClass:"toPage",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/checkout")}}},[t._v(" 3 ")])]),a("button",{staticClass:"next",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/checkout")}}})])])])])},it=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-cart-catalog"},[a("div",t._l(t.cart_data,(function(e,r){return a("VCart",{key:e.id,attrs:{cart_item_data:e},on:{deleteFromCart:function(e){return t.deleteFromCart(r)},increment:function(e){return t.increment(r)},decrement:function(e){return t.decrement(r)}}})})),1),a("div",{staticClass:"priceDetails"},[a("h1",[t._v("Price Details")]),t._l(t.cart_data,(function(t){return a("VCartDetails",{key:t.id,staticClass:"cart__details",attrs:{cart_details:t}})})),a("div",{staticClass:"v-total-price"},[a("h1",[t._v("Total")]),a("p",[t._v("$"+t._s(t.cartTotalCost))])]),t._m(0)],2)])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{attrs:{type:"button",id:"order"}},[a("h2",[t._v("Place Order")])])}],ct=a("b85c"),ot=(a("13d5"),a("b680"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-cart-item"},[r("div",{staticClass:"product__cart__info"},[r("div",{staticClass:"product__cart__info__first"},[r("img",{attrs:{src:t.cart_item_data.image}})]),r("div",{staticClass:"product__cart__info__second"},[r("p",{staticClass:"title"},[t._v(t._s(t.cart_item_data.title))]),r("p",{staticClass:"company"},[t._v(" by "),r("span",{staticClass:"company-name"},[t._v(t._s(t.cart_item_data.company))])]),r("div",{staticClass:"quantity"},[t._v(" Qty: "),r("div",{staticClass:"quantity__button"},[r("span",{staticClass:"quantity__btn",on:{click:t.decrementItem}},[t._v(" - ")]),t._v(" "+t._s(t.cart_item_data.quantity)+" "),r("span",{staticClass:"quantity__btn",on:{click:t.incrementItem}},[t._v(" + ")])])])]),r("div",{staticClass:"product__cart__info__third"},[r("p",{staticClass:"price"},[t._v("$"+t._s(t.cart_item_data.price))]),r("button",{attrs:{type:"button",id:"remove"},on:{click:t.deleteFromCart}},[r("img",{attrs:{src:a("4c4b")}}),r("h2",[t._v(" Remove ")])])])])])}),ut=[],lt={name:"v-cart-item",props:{cart_item_data:{type:Object,default:function(){return{}}}},components:{},data:function(){return{}},methods:{deleteFromCart:function(){this.$emit("deleteFromCart")},decrementItem:function(){this.$emit("decrement")},incrementItem:function(){this.$emit("increment")}},computed:{}},dt=lt,pt=(a("a8f3"),Object(o["a"])(dt,ot,ut,!1,null,null,null)),ft=pt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-cart-details"},[a("p",{staticClass:"title"},[t._v(t._s(t.cart_details.title))]),a("p",{staticClass:"price"},[t._v("$"+t._s(t.cart_details.price))])])},At=[],Ct={name:"v-cart-details",props:{cart_details:{type:Object,default:function(){return{}}}},components:{},data:function(){return{}},computed:{}},vt=Ct,_t=(a("3e6a"),Object(o["a"])(vt,mt,At,!1,null,null,null)),gt=_t.exports,ht={name:"v-cart",components:{VCart:ft,VCartDetails:gt},props:{cart_data:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:Object(m["a"])(Object(m["a"])({},Object(L["b"])(["DELETE_FROM_CART","INCREMENT","DECREMENT"])),{},{increment:function(t){this.INCREMENT(t)},decrement:function(t){this.DECREMENT(t)},deleteFromCart:function(t){this.DELETE_FROM_CART(t)}}),computed:{cartTotalCost:function(){var t=[];if(this.cart_data.length){var e,a=Object(ct["a"])(this.cart_data);try{for(a.s();!(e=a.n()).done;){var r=e.value;t.push(r.price*r.quantity)}}catch(i){a.e(i)}finally{a.f()}return t=t.reduce((function(t,e){return t+e})),t.toFixed()}return 0}}},bt=ht,Et=(a("d7d4"),Object(o["a"])(bt,nt,st,!1,null,null,null)),Tt=Et.exports,yt={name:"wishlist",components:{toHomepage:b,toCart:P,VCartCatalog:Tt},props:{},data:function(){return{activeBackground:"#7367f0",activeColor:"#fff",activeBorderRadius:"25px",activeBorder:"1px solid #7367f0",activeBackgroundColor:"#f5f5f5",activeBorderRadiusOfHomepage:"10px"}},computed:Object(m["a"])({},Object(L["c"])(["CART"])),watch:{}},Ot=yt,Rt=(a("37b8"),Object(o["a"])(Ot,rt,it,!1,null,"d8a42d40",null)),Pt=Rt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"productDetails"},[a("div",{staticClass:"menu"},[a("toHomepage"),a("toCart"),a("toCheckout")],1),a("div",{staticClass:"main"},[a("h1",[t._v("Product details")]),a("h1",[t._v(t._s(t.product.id))])])])},kt=[],xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toCheckout"},[r("div",{staticClass:"toCheckout-bg"},[r("button",{attrs:{type:"button"},on:{click:function(e){return t.$router.push("/checkout")}}},[r("img",{attrs:{src:a("8b93")}})])])])},Qt=[],St={name:"toCheckout",components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},Ut=St,Bt=(a("9025"),Object(o["a"])(Ut,xt,Qt,!1,null,"20345a53",null)),Dt=Bt.exports,jt={name:"checkout",components:{toCheckout:Dt,toHomepage:b,toCart:P},props:{},data:function(){return{product:{image:"",description:""}}},computed:{productId:function(){return+this.$route.params.id}}},Jt=jt,Vt=(a("2911"),Object(o["a"])(Jt,wt,kt,!1,null,"05f95ab3",null)),It=Vt.exports;r["a"].use(d["a"]);var Yt=new d["a"]({mode:"history",routes:[{path:"/",name:"homepage",component:at},{path:"/cart",name:"cart",component:Pt},{path:"/product/:id",name:"productDetails",component:It}]}),Ht=a("bc3a"),Mt=a.n(Ht);a("ac1f"),a("841c"),a("d81d"),a("a434"),a("4de4"),a("7db0");r["a"].use(L["a"]);var Ft=new L["a"].Store({state:{products:[],wishlist:[],cart:[],search:""},mutations:{SET_SEARCH:function(t,e){t.search=e},SET_PRODUCTS_TO_STATE:function(t,e){t.products=e},SET_CART:function(t,e){var a=!1;t.cart.length?(t.cart.map((function(t){t.id===e.id&&(a=!0,t.quantity++)})),a||t.cart.push(e)):t.cart.push(e)},INCREMENT:function(t,e){t.cart[e].quantity++},DECREMENT:function(t,e){t.cart[e].quantity>1&&t.cart[e].quantity--},REMOVE_PRODUCT_FROM_CART:function(t,e){t.cart.splice(e,1)}},actions:{GET_SEARCH:function(t,e){var a=t.commit;a("SET_SEARCH",e)},GET_PRODUCTS_FROM_API:function(t){var e=t.commit;Mt.a.get("http://localhost:3000/products").then((function(t){e("SET_PRODUCTS_TO_STATE",t.data)})).catch((function(t){return console.log(t),t}))},ADD_TO_CART:function(t,e){var a=t.commit;a("SET_CART",e)},DELETE_FROM_CART:function(t,e){var a=t.commit;a("REMOVE_PRODUCT_FROM_CART",e)},INCREMENT:function(t,e){var a=t.commit;a("INCREMENT",e)},DECREMENT:function(t,e){var a=t.commit;a("DECREMENT",e)}},getters:{PRODUCTS:function(t){return t.products.filter((function(t,e){if(e<9)return t}))},GETPRODUCT:function(t){return function(e){return _.find(t.all,{id:e})}},CART:function(t){return t.cart},SEARCH:function(t){return t.search}}});r["a"].config.productionTip=!1,r["a"].prototype.$axios=Mt.a,new r["a"]({render:function(t){return t(l)},router:Yt,store:Ft}).$mount("#app")},"5e62":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+0lEQVRoge2Zz08TQRTHP/UH3tSLhQjEIN7k5kEhil7VgyYWww8T/wQTf0Rignqj/gOevZiQhoO0xsSb4K8Yr+qdkxG8KBEstNbDvHFWWaSzM7Ot0k+yeZu2833vdffNzL6FFi2CkHEc3wGcAU4CfcABYLd89wWYB94Dz4AnwCdHf94ZBErAGlCr81gDisCJBsS7jl7UP6uDqwCzwFXgKJAFdsqRBY4B14A5+a0e9xg4mHLsvxgDliSQb8AksM9ifBbIA8ui8RUY8RzjptzG/JtTQKeDVhdQiOhNOEdXJ3fF4Q85d50gNFeAKiklMyaOqkAugP4QJpnhAPqAKmxdEzdDOQHGMTXTE8KBnp2mQohHyGBqpuRbfFCEl4Fu3+IxdKJmwhpw3KdwSUQnfYpuQl58zvgS7ECtwhXs1glXsuJzVc6t2Bbz2VlgB/ACWHQKzY4F4DVqV3DadnBcIoNiiw5BJUXfVqdsB8Yl0if2ZeJwkvNK7GEfYp9RRZdmfWjaxfeCD7GyiLX5ELNkl/j+bjsw7tZqBlZtB8QlsiR2j1ssidgr1vrWiktkXmxv4nCSc0jsR9uBcYm8EzuQOJzk9Iv9YDswLpFZsecTh5Mc7fOpD7F2zBbFeqvggN6irGFqxZkiahrM+xKsg3vis+BTtF9EV0h/G3/Et7jeyhfw95weRwaYFl+PQjjoQT1+1lCPo6G4JT4Wgf2hnIxgmg9DAfQvYpoP5wLo/8YEJplx/NxmGdSV0ElUUR2b4OhkdM10OWh1Y2oielSAUbcw62MYUzPLqKnZZp3JoqbYFUz7J9oP1smk0kbtwcxm2vEccB21pWlHbf/b5HwAuAE8/yPoKVRhjzYyGVAtmxnsXiuUgYeoDn2UjZIJ1nmMIwtcBh4Ab1FTaBm1uM0Db4D7EtTfnjhHaIJkfDHE+itcAS41MqikbJRMKlOzb/6rZHJsgWRSWTR9k0N1VLZOMs3a14oyjaqNSuSz7ZiOyz/HBcyVudPgWJzJkeLr7BYtgJ/57P8kvPwRcAAAAABJRU5ErkJggg=="},"608a":function(t,e,a){"use strict";a("1056")},6648:function(t,e,a){"use strict";a("b03d")},"739b":function(t,e,a){},"739e":function(t,e,a){},"85ec":function(t,e,a){},"8b93":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAADaklEQVRoge2ZSWgUQRSGvyxkMy4xZCEeDKi4BBEk4slA8KLmoBC8C6JeJOJdxUvIxeWgRNSTHj0YFUVUEBUTQUWIa6KigiRiXIJJPEQk46FrdOb1m5nq7ppopD8omJ6u97//dXdVT9VATExMTMwMoiBkXDFQY9ps4CvwCvgZQW8JMB8YBz6ZFlbPigpgJ3ABGAMSoo0DZ4HWAJqtJmZC0fsG9ADbgVInFRgKgQ7gg5I0U7sJrMii2WT62Oq9x7uYYZ+o31QBVwIkTm2TwG5FczfwI6TmOaAybDGVQH8W8Y/m/H1gNEu/03h3uch8ztRv1Gj1G+1M/fqAsqDFFOA9v1JsDOjE/zgVApuAOxlMdAMnMpy7DWw0Gqk0mVzaeD0TtKCtikgv0JAjrgDYhj7IZZswfXONiwa8uyLjN9gWUwg8FcEPgHJbAWAlMKyYSLZh08eWCuCh0HiI5STRIgJ/AIsDJE+yFBjCX8yQOReUxfgnk7U2gZ0iKPDzmsJy0ieMUWBZBL0zwttBm6C7Iqg9ggGANXjjr9d8jkI76d5u2QS9EUELI5pwSSPp3l7bBH0XQRX5cheCCvwzZRpy7gf/zJFw7ys0OWc1raDP4rjWjRcnSC9fZAetoHfiuNmZnehIL29lB62gPnHc5sxOdKQX6VVlPf6BV+XWVyiq8U9YVmuvArzpMDXwUH48BuII6Z7eoD9hKntF8CSw2r1Ha5rx/+zpCCJQijfgUgUGgLlObdoxDxjEf3cCL8vbhEgCuAaUuHJqQQlwQ3iYwlt7heIk/qIuMj1FlQKXlPzdUUTLgHuK6FVCLIMDUIJ34WTePhzsANUDLxXx68CcqOIKc4y2zDcI1LlKUgc8U5I8we2v8QXAIyXPILmX/4Gpw780Ty6no65zAFbh7b9J/QHyUEySevQrOAFsiaC7GX1j5ZHJmVdm4W0Hy+RTWC6JBXvw9rC1iScfY1SlCDiqmEgAx815G41jGTQOW2o4Zxf6tm4P2be9yoHzStwksCOPfq1oAUbQ3xnVSv9q9I3DEWDdNPi1ohF9H7wf7z+kJDVZ+jVOo18rKoHL+M2+wJt2a4HHyvl8vaCdUIz+D8Nz0+T3p0zMP89+9Nkrte37a+5CcoD/qJgkcp88+Y6Z0XTxp5iuv+zFGYtMi4mJiZlefgGUCsngVW4g1AAAAABJRU5ErkJggg=="},9025:function(t,e,a){"use strict";a("3f11")},a8f3:function(t,e,a){"use strict";a("d532")},aa8d:function(t,e,a){"use strict";a("ef08")},b03d:function(t,e,a){},d1c0:function(t,e,a){},d2f9:function(t,e,a){},d532:function(t,e,a){},d7d4:function(t,e,a){"use strict";a("1fb1")},e1c8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC4UlEQVRoge3XS4gVRxQG4G80PsBRQTEiQowafCAYjQqiYCBZxYUY0GXMzq1LERFcZht0Y1aSpZIEN6ILFXEETUhgyEKIgg8k6kRwJPH9mCy6mmnb7rp95947txf9w7/pOn3O+au66q+mQSVswB+BG/rcy4TwAfbjBcYCX+E7TO9jX21hOYaMC8jzV6zqW3cVMIC9+E+5iJTPJCs2pS+dRvARzmktIM8hyQrWAt9iVHmzdwPLxkdDjr5hAX4Wn/ETmI+5ONYi9jQWTaoCfIW/I02N4puC93bjYeS9EXzd496RzOzxSCNjOIvFIX4QPwQOhmeLcaZFjuOhVk+wFTcixZ969yTajL8y4zexLYylJ9y/kXy38UU3BcyUGNmbSNGrWBnip+EwXhfEvcH3mBFil+FSJO9byd6a1amITbgWKZS69bQQvwa/R+JT/ol14Z2iW0CeNyRfRNuokvwaNob4AezD8woiUj4PNaaGHGsxXGHSKl9xVuO3SML8ci/BhTYE5HkZn4RcVT7jYXwaE5BuwCeRJPewPfPObjzqQETKx6F2ii9xJxJfesVZgvMtip3AvBD/IX7pgoA8s6Y4R2sTza4mLdQ/DDOfYice9EBEyvvYkam3S9xE72SFlAVlza3KDHWTP2J2qL0QpyKxpUKeSk6hgTC+BdcnUUTKW/g80+cexSZaKOQKVoTn6SlSZG6TxbfeNdGPcbFMyAhe4qDxc32dxLj6JSDPYYnXCD0ekPjcSFbIUsl1IUUa1O/m80xNNNv3Usb3QB5jJc/rgvf6rt0/80TRCGmBERzCeskP1SA+C8/+6VHNQnSyIU8aN7IizMFPHdbouZCTyg+QLKZ0KKanQh6Ir0QecyWfYFeEdHOPHJFcH6riMY52sX4hJjJL0Z+dEqyfYK2eChkszBTH7G4J6aazV9nkPavVGGLd0AipGxohdUMjpG5ohNQNjZC6oUzIUJt5LnXQw2TWatCgXfwPFMHI73uYEJYAAAAASUVORK5CYII="},e364:function(t,e,a){},e8d4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACXklEQVRoge2ZPWsUQRjHf5cYFMU6Cdw1gho1TQjWiZVKyFdIE/0Ifgw7SQqLO1CISAikyAtpgi9glVRCwMIiJkTFIAcWhiS3Fs8su97LHrvzzMyd+IOBu7l5+f93n2dnZg/+03vMAAdAlFF+Am+AOaAURmZ3vpBtornU6FEzaSP7HdoMA/PAL9Nuzo+0fDxEzOwDD7q0fYQY2XUtyjUXgR+ImTuBtfzFQM72J8Cm+XxPWYsVeY2APL0ApjSFhOAGElrf6dGnVx4OETO3QwuJKRJakITXtJYQW2yN9H2ejCGh9Y1/KE/GQgux5RX59mguynYspmiOQJInIanEH/rdyAuNQUrAV8KFVQO4FouxuSMR8M6ivy3bwOf4i40RCBteNc3BxgkTVnXgsqaRErIo+jbyvFmIbWhFwHvLMYpQba6wNQL+8+QT8KG5sh+NVJFIUKdEco53Xc5JreZpNO6Iz/VkC3nj04KGEfAXXi1Jrs0E7sPqGLjk2siAmcilkWeuTcSsOjYymTW5Vo6A2zz5COxkNegXI86TPM0g8j+KdkidAiPdJte8I+fo77siYAE5wHnliZl80ffE2txFjOyFFmLLBeTQ0wBGfU6smSMAZ8BbZCN5X3ls7zxGwqsXXhdZcZVkW/8UuIWHPZIrZoHf6K0lIV87MdtBVJFyBpT9yk94aUSsGRFlYN3ULXXos1Sgj3OOjID0layQnC3aER8F2vWpZ02m/fhNcyXjt8EO9UMZfSILLVasmMnXkataATZM3bJiH+fcpP2p8Ri4rtjHC2XgNRLfdeSqdhNUpA9/AGQ0p4DwfgjaAAAAAElFTkSuQmCC"},ef08:function(t,e,a){}});
//# sourceMappingURL=app.5f60c332.js.map