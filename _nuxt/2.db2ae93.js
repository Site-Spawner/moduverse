(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(e,t,r){"use strict";r.r(t);r(44),r(21),r(20),r(7),r(40),r(236);var o=r(15),l=(r(237),r(238)),n=r(239);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _=38,y=40,m=36,I=35,v=13,M=32,h=9,T={name:"VideoHighlights",components:{PsSection:n.e,PsEyebrow:n.d,PsDescription:n.c,PsTitle:n.g},props:l.a,data:function(){return{videoTabIndex:"-1",dataItems:this.slice.items.map((function(e,i){return{src:e.video_src,title:e.video_title,selected:0===i}}))}},computed:{currId:function(){return"ps__video-player-".concat(Math.floor(999*Math.random()))}},methods:{selectItem:function(e){e!==this.dataItems.findIndex((function(e){return e.selected}))&&(this.dataItems=this.dataItems.map((function(t,i){return c(c({},t),{},{selected:i===e})})))},onVideoContainerBlur:function(){this.videoTabIndex="-1"},keyEvent:function(e){var t=e.keyCode||e.which,r=Number(event.target.getAttribute("data-index"));switch(t!==h&&e.preventDefault(),t){case _:var o=this.dataItems[r-1]?r-1:this.dataItems.length-1;this.$refs.links[o].focus();break;case y:var l=this.dataItems[r+1]?r+1:0;this.$refs.links[l].focus();break;case v:case M:this.selectItem(r);break;case h:"tab"===event.target.getAttribute("role")&&(this.videoTabIndex="0");break;case m:this.$refs.links[0].focus();break;case I:this.$refs.links[this.items.length-1].focus()}}}},f=(r(294),r(19)),component=Object(f.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ps-section",e._b({attrs:{darkMode:e.darkMode,classAttr:"ps-video-player"}},"ps-section",e.theme.wrapper,!1),[r("div",{staticClass:"ps__wrap"},[r("div",{staticClass:"ps__head",style:e.theme.align?"text-align: "+e.theme.align:""},[r("header",{staticClass:"ps__header"},[r("ps-eyebrow",{attrs:{theme:e.theme.eyebrow,align:e.theme.align,color:e.theme.color}},[e._v("\n\t\t\t\t\t"+e._s(e.$prismic.asText(e.slice.primary.eyebrow_headline))+"\n\t\t\t\t")]),e._v(" "),r("ps-title",{attrs:{field:e.slice.primary.title,theme:e.theme.title,align:e.theme.align,color:e.theme.color}})],1),e._v(" "),r("ps-description",{attrs:{field:e.slice.primary.description,theme:e.theme.description,align:e.theme.align,color:e.theme.color}})],1),e._v(" "),e.dataItems.length?r("div",{staticClass:"ps__main"},[r("div",{staticClass:"ps__video-player",attrs:{id:e.currId,"data-video-player":""}},[r("div",{staticClass:"ps__video-player__playlist span-9-12",attrs:{"data-playlist":""}},[r("ul",{staticClass:"ps__video-player__playlist__list",attrs:{role:"list","aria-label":"Video Playlist","aria-orientation":"vertical"},on:{keydown:e.keyEvent}},e._l(e.dataItems.filter((function(e){return e.src})),(function(t,o){return r("li",{key:"ps__video-player__playlist__item-"+(o+1),staticClass:"ps__video-player__playlist__item",attrs:{role:"presentation"}},[r("a",{ref:"links",refInFor:!0,staticClass:"ps__video-player__playlist__link",style:e.theme.color?"color: "+e.theme.color:"",attrs:{id:e.currId+"__tab-"+(o+1),tabindex:t.selected?"0":"-1","aria-selected":t.selected||!1,"data-href":t.src.embed_url,"data-index":o,role:"tab"},on:{click:function(t){return e.selectItem(o)}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.video_title)+"\n\t\t\t\t\t\t\t\t"+e._s(e.$prismic.asText(t.title))+"\n\t\t\t\t\t\t\t")])])})),0)]),e._v(" "),r("prismic-embed",{staticClass:"ps__video-container span-1-8",attrs:{"aria-labelledby":e.currId+"__tab-"+e.dataItems.findIndex((function(e){return e.selected})),tabindex:e.videoTabIndex,field:e.dataItems.find((function(e){return e.selected})).src},on:{blur:e.onVideoContainerBlur}})],1)]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},259:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},263:function(e,t,r){var content=r(295);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(30).default)("b1e5f59a",content,!0,{sourceMap:!1})},294:function(e,t,r){"use strict";var o=r(263);r.n(o).a},295:function(e,t,r){var o=r(29),l=r(259),n=r(296),d=r(297),c=r(298),_=r(299);t=o(!1);var y=l(n),m=l(d),I=l(c),v=l(_);t.push([e.i,".ps-video-player--dark{background-color:#000;color:#fff}.ps__video-player{display:flex;flex-direction:column-reverse}@media (min-width:50em){.ps__video-player{display:grid;grid-template-columns:repeat(12,1fr);grid-column-gap:var(--h-padding)}}.ps__video-player__playlist__list{margin:0;padding:0;list-style:none}.ps__video-container{height:0;width:100%;padding-top:56.2%;position:relative;margin-bottom:var(--c-margin);grid-row:1}@media (min-width:50em){.ps__video-container{margin-bottom:0}}.ps__video-container:focus{outline-color:var(--color-text-grey)}.ps__video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.ps__video-container iframe:focus{outline-color:var(--color-text-grey)}.ps__video-player__playlist__item{border-top:1px solid #e5e5e5}.ps__video-player__playlist__item:last-of-type{border-bottom:1px solid #e5e5e5}@media (max-width:50em){.ps__video-player__playlist__item:first-of-type{border-top:none}}.ps-video-player--dark .ps__video-player__playlist__item{border-color:var(--color-grey-20)}.ps__video-player__playlist__link{position:relative;z-index:1;display:block;cursor:pointer;font-weight:400;color:inherit;text-align:left;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:.75em 3em .75em .5em;background-size:1em 1em;background-repeat:no-repeat;background-position:100%;background-image:url("+y+")}.ps__video-player__playlist__link:hover{color:inherit}.ps-video-player--dark .ps__video-player__playlist__link{color:var(--color-text-grey);background-image:url("+m+")}.ps-video-player--dark .ps__video-player__playlist__link:visited{color:var(--color-text-grey)}.ps__video-player__playlist__link[aria-selected=true]{background-image:url("+I+");font-weight:700}.ps-video-player--dark .ps__video-player__playlist__link[aria-selected=true]{background-image:url("+v+");color:#fff;font-weight:400}.ps__video-player__playlist__link[href]:focus{background-repeat:no-repeat;outline-color:var(--color-text-grey);outline-offset:5px}.ps__video-player__playlist__link:visited{color:inherit}",""]),e.exports=t},296:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNLTItMmgyNHYyNGgtMjR6Ii8+PHBhdGggZD0iTTggMTQuNWw2LTQuNS02LTQuNXY5em0yLTE0LjVjLTUuNTIgMC0xMCA0LjQ4LTEwIDEwczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMC00LjQ4LTEwLTEwLTEwem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNjY2NjY2MiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="},297:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNLTItMmgyNHYyNGgtMjR6Ii8+PHBhdGggZD0iTTggMTQuNWw2LTQuNS02LTQuNXY5em0yLTE0LjVjLTUuNTIgMC0xMCA0LjQ4LTEwIDEwczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMC00LjQ4LTEwLTEwLTEwem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiM4ODgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="},298:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNLTItMmgyNHYyNGgtMjR6Ii8+PHBhdGggZD0iTTggMTQuNWw2LTQuNS02LTQuNXY5em0yLTE0LjVjLTUuNTIgMC0xMCA0LjQ4LTEwIDEwczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMC00LjQ4LTEwLTEwLTEwem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="},299:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIxIiBmaWxsPSJub25lIj48cGF0aCBkPSJNLTItMmgyNHYyNGgtMjR6Ii8+PHBhdGggZD0iTTggMTQuNWw2LTQuNS02LTQuNXY5em0yLTE0LjVjLTUuNTIgMC0xMCA0LjQ4LTEwIDEwczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMC00LjQ4LTEwLTEwLTEwem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="}}]);