(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-xs-12 col-md-8 q-mt-lg"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-6 q-mt-lg"},[n("q-input",{attrs:{placeholder:"Please enter your ID","input-class":"text-center text-h5"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),n("div",{staticClass:"col-xs-12 col-md-6 q-mt-lg"},[n("q-item",[n("q-item-section",[n("q-item-label",{staticClass:"text-center text-h5 q-pl-lg"},[t._v(" Total: "+t._s(t.total)+"  ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"text-h6",attrs:{color:"green","no-caps":"",label:"Send Order"}})],1)],1)],1)])])]),n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-xs-12 col-md-8 q-mt-lg"},[n("q-scroll-area",{staticClass:"col-10",staticStyle:{height:"80vh"}},[n("q-list",{attrs:{bordered:"",padding:""}},[n("Item",{model:{value:t.items,callback:function(e){t.items=e},expression:"items"}})],1)],1)],1)])])},a=[],i=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54"),n("06db"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.items,(function(e){return n("q-item",{key:e.id},[n("q-item-section",[n("q-item-label",{staticClass:"text-h6"},[t._v(t._s(e.label)+" ")]),n("q-item-label",{staticClass:"text-body1"},[t._v(" Some description can go here")]),n("q-item-label",{staticClass:"text-body1 text-grey10"},[t._v(" £"+t._s(Number(e.cost).toFixed(2)))])],1),n("q-item-section",{attrs:{side:""}},[n("plus-minus",{model:{value:e.quantity,callback:function(n){t.$set(e,"quantity",n)},expression:"item.quantity"}})],1),n("q-item-section",{attrs:{side:""}},[n("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.total(e))+" ")])],1)],1)})),1)}),r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("div",{staticClass:"row justify-center"},[n("q-btn",{attrs:{round:"",color:"primary",size:"sm",icon:"remove"},on:{click:function(e){return t.minusOne()}}})],1)]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"row justify-center"},[n("span",{staticClass:"text-h5 q-mx-md"},[t._v(" "+t._s(t.number)+" ")])])]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"row justify-center"},[n("q-btn",{attrs:{round:"",color:"primary",size:"sm",icon:"add"},on:{click:function(e){return t.plusOne()}}})],1)])])},l=[],c={name:"PlusMinus",props:["number"],model:{prop:"number",event:"update-quantity"},methods:{plusOne:function(){var t=this.number;t<5&&(t++,this.$emit("update-quantity",t))},minusOne:function(){var t=this.number;t>0&&(t--,this.$emit("update-quantity",t))}}},u=c,m=n("2877"),d=n("eebe"),f=n.n(d),p=n("9c40"),b=Object(m["a"])(u,o,l,!1,null,null,null),v=b.exports;f()(b,"components",{QBtn:p["a"]});var y={name:"Item",components:{PlusMinus:v},model:{prop:"items"},props:["items"],methods:{total:function(t){return Number(t.cost*t.quantity).toFixed(2)}}},q=y,h=n("66e5"),x=n("4074"),C=n("0170"),g=Object(m["a"])(q,i,r,!1,null,null,null),w=g.exports;function _(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=I(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a,i=!0,r=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return i=t.done,t},e:function(t){r=!0,a=t},f:function(){try{i||null==s.return||s.return()}finally{if(r)throw a}}}}function I(t,e){if(t){if("string"===typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}f()(g,"components",{QItem:h["a"],QItemSection:x["a"],QItemLabel:C["a"]});var S={name:"PageIndex",components:{Item:w},data:function(){return{id:"",items:[{id:0,label:"Milk",cost:1,quantity:0},{id:1,label:"Cheese",cost:2,quantity:0},{id:2,label:"Carrots",cost:.5,quantity:0},{id:3,label:"Eggs",cost:2,quantity:0}]}},computed:{total:function(){var t,e=0,n=_(this.items);try{for(n.s();!(t=n.n()).done;){var s=t.value;e+=s.cost*s.quantity}}catch(a){n.e(a)}finally{n.f()}return Number(e).toFixed(2)}}},j=S,O=n("9989"),k=n("27f9"),A=n("4983"),$=n("1c1c"),E=Object(m["a"])(j,s,a,!1,null,null,null);e["default"]=E.exports;f()(E,"components",{QPage:O["a"],QInput:k["a"],QItem:h["a"],QItemSection:x["a"],QItemLabel:C["a"],QBtn:p["a"],QScrollArea:A["a"],QList:$["a"]})}}]);