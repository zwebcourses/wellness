(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,13],{289:function(t,e,n){"use strict";n.r(e);var l={props:{textColor:{type:String,default:"text-black"}}},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-24 bg-bottun bg-contain bg-center bg-no-repeat"},[e("div",{staticClass:"h-full w-full flex justify-center items-center",class:t.textColor},[e("a",{staticClass:"md:text-3xl text-lg font-extrabold",attrs:{href:"#form"}},[t._v("أعرف المزيد")])])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);n(43);var l={props:{parentClass:{Type:String,default:function(){return"justify-center"}},classes:{Type:String,default:function(){return""}},radius:{Type:String,default:function(){return"md:rounded-[50px]"}}}},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-auto flex items-center mb-8",class:t.parentClass},[e("div",{staticClass:"p-1",class:"".concat(t.classes," ").concat(t.radius)},[e("div",{staticClass:"h-full w-full bg-darkGold flex justify-center items-center",class:t.radius},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("462845b8",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(293)},300:function(t,e,n){var l=n(92)((function(i){return i[1]}));l.push([t.i,"#best-of-energy .carousel-3d-container{height:550px!important;overflow:visible!important}#best-of-energy .carousel-3d-slide img{width:100%!important;height:100%!important}#best-of-energy .carousel-3d-container .next span,#best-of-energy .carousel-3d-container .prev span,#best-of-energy .Next slide span{font-size:180px;color:#fff}#best-of-energy .carousel-3d-container a.prev{width:50px!important}#best-of-energy .carousel-3d-slide{width:100%!important;height:unset!important;overflow:visible!important}.carousel-3d-slide:not(.current){filter:grayscale(1)!important}.carousel-3d-slide{border-radius:50px 0!important;background-color:unset!important}#best-of-energy .carousel-3d-slider{display:flex!important;justify-content:center!important}@media only screen and (min-width:320px) and (max-width:480px){#best-of-energy .carousel-3d-container{height:500px!important}#best-of-energy .carousel-3d-slide{width:300px!important}#best-of-energy .carousel-3d-slide img{width:100%!important;height:100%!important}}",""]),l.locals={},t.exports=l},307:function(t,e,n){"use strict";n.r(e);n(31),n(11),n(37),n(38);var l={components:{Title:function(){return Promise.resolve().then(n.bind(null,290))},CTAButton:function(){return Promise.resolve().then(n.bind(null,289))}},data:function(){return{energies:[{name:"bull power.png",title:"bull power",text:"للحصول علي حجم اكبر !!"},{name:"golden chew.png",title:"golden chew",text:"أقوي محفز للرجال"},{name:"golden spray.png",title:"golden spray",text:"golden spray"},{name:"long night.png",title:"long night",text:"للحصول علي علاقة عاطفية اطول"},{name:"volt drops.png",title:"volt drops",text:"يعطيك الطاقة و الانتعاش اللازمتين قبل أي نشاط بدني"}]}}},r=(n(299),n(36)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"block bg-green bg-pattern-products bg-pattern bg-blend-overlay bg-cover object object-cover bg-center py-24 relative overflow-hidden",attrs:{id:"best-of-energy"}},[e("Title",{attrs:{classes:"h-20 md:h-[150px] w-full md:w-3/5",radius:"rounded-full"}},[e("h2",{staticClass:"text-white md:text-5xl text-2xl text-center font-extrabold lg:scale-x-125"},[t._v("\n      المنتجات الأكثر مبيعا للشركة\n    ")])]),t._v(" "),e("div",{staticClass:"text-right mt-24"},[e("Title",{attrs:{parentClass:"text-right",classes:"h-16 md:h-24 w-3/5 md:w-1/3",radius:"rounded-[10px]"}},[e("h2",{staticClass:"text-white md:text-4xl text-xl text-center font-extrabold lg:scale-x-125"},[t._v("\n        منتجات الطاقة\n      ")])])],1),t._v(" "),e("div",{staticClass:"mx-auto mt-24"},[e("no-ssr",{attrs:{placeholder:"Loading..."}},[e("carousel-3d",{attrs:{autoplay:!1,"autoplay-timeout":3e3,"controls-visible":!0,"controls-prev-html":"&#x203A; ","controls-next-html":"&#x2039; ","controls-width":10,"controls-height":30,clickable:!0}},t._l(t.energies,(function(n,i){return e("slide",{key:i,staticClass:"rounded-full",attrs:{index:i}},[e("div",{staticClass:"relative bg-frame bg-contain bg-center bg-no-repeat rounded-tl-[50px] rounded-br-[50px]"},[e("div",{staticClass:"mx-auto w-full"},[e("nuxt-img",{staticClass:"relative top-[-35px]",staticStyle:{"pointer-events":"none"},attrs:{format:"webp",src:"img/bestOf/energy/".concat(n.name),alt:n.alt,onContextMenu:"return false;"}}),t._v(" "),e("div",{staticClass:"h-40 relative top-[-15px]"},[e("div",{staticClass:"p-2 text-center"},[e("h2",{staticClass:"md:text-5xl text-3xl font-extrabold text-black"},[t._v("\n                    "+t._s(n.title)+"\n                  ")])]),t._v(" "),e("div",{staticClass:"px-4 text-center"},[e("p",{staticClass:"font-bold md:text-xl text-lg text-gray-800"},[t._v("\n                    "+t._s(n.text)+"\n                  ")])])]),t._v(" "),e("div",{staticClass:"w-2/3 mx-auto relative md:bottom-[15px] bottom-[25px]"},[e("CTAButton")],1)],1)])])})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(290).default,CTAButton:n(289).default})}}]);