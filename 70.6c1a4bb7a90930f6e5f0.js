(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"6KIN":function(t,o,e){"use strict";e.r(o),e.d(o,"IonContent",function(){return i}),e.d(o,"IonScroll",function(){return l}),e.d(o,"IonTitle",function(){return c}),e.d(o,"IonToolbar",function(){return s});var r=e("cBjU"),n=e("XGMM"),i=function(){function t(){this.cTop=-1,this.cBottom=-1,this.fullscreen=!1,this.scrollEnabled=!0,this.scrollEvents=!1}return t.prototype.onNavChanged=function(){this.resize()},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.getScrollElement=function(){return this.scrollEl},t.prototype.resize=function(){this.scrollEl&&(this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate()))},t.prototype.readDimensions=function(){var t=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),o=Math.max(this.el.offsetTop,0),e=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||e!==this.cBottom)&&(this.cTop=o,this.cBottom=e,this.el.forceUpdate())},t.prototype.hostData=function(){return{class:Object.assign({},Object(n.a)(this.color),{"content-size":Object(n.d)("ion-popover",this.el),"scroll-disabled":!this.scrollEnabled})}},t.prototype.render=function(){var t=this;return this.resize(),[this.scrollEnabled?Object(r.b)("ion-scroll",{ref:function(o){return t.scrollEl=o},mode:this.mode,scrollEvents:this.scrollEvents,forceOverscroll:this.forceOverscroll,style:{top:-this.cTop+"px",bottom:-this.cBottom+"px","--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},Object(r.b)("slot",null)):Object(r.b)("slot",null),Object(r.b)("slot",{name:"fixed"})]},Object.defineProperty(t,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll"},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollEnabled:{type:Boolean,attr:"scroll-enabled"},scrollEvents:{type:Boolean,attr:"scroll-events"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--ion-color-base:var(--ion-background-color, #fff);--ion-color-contrast:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;background-color:var(--ion-color-base);color:var(--ion-color-contrast);contain:layout size style;font-family:var(--ion-font-family,inherit)}:host(.scroll-disabled),ion-scroll{padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start)}:host(.ion-color-outer),:host(.outer-content){--ion-color-base:var(--ion-background-color-step-50, #f2f2f2)}:host(.content-size) ion-scroll{position:relative;contain:none}::slotted(hr){background-color:var(--ion-background-color-step-50,#f2f2f2)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.scrollEvents=!1}return t.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)},t.prototype.componentDidUnload=function(){this.watchDog&&clearInterval(this.watchDog)},t.prototype.onScroll=function(t){var o=this,e=Date.now(),r=!this.isScrolling;this.lastScroll=e,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(e){o.queued=!1,o.detail.event=t,function(t,o,e,r){var n=t.currentX,i=t.currentY,l=t.timeStamp,c=o.scrollLeft,s=o.scrollTop;r&&(t.startTimeStamp=e,t.startX=c,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=e,t.currentX=t.scrollLeft=c,t.currentY=t.scrollTop=s,t.deltaX=c-t.startX,t.deltaY=s-t.startY;var a=e-l;if(a>0&&a<100){var b=(s-i)/a;t.velocityX=(c-n)/a*.7+.3*t.velocityX,t.velocityY=.7*b+.3*t.velocityY}}(o.detail,o.el,e,r),o.ionScroll.emit(o.detail)}))},t.prototype.scrollToTop=function(t){return this.scrollToPoint(0,0,t)},t.prototype.scrollToBottom=function(t){return this.scrollToPoint(0,this.el.scrollHeight-this.el.clientHeight,t)},t.prototype.scrollByPoint=function(t,o,e){return this.scrollToPoint(t+this.el.scrollLeft,o+this.el.scrollTop,e)},t.prototype.scrollToPoint=function(t,o,e){var r,n=this,i=new Promise(function(t){r=t}),l=this,c=l.el;if(!c)return r(),i;if(e<32)return c.scrollTop=o,c.scrollLeft=t,r(),i;var s,a=c.scrollTop,b=c.scrollLeft,d=e/16+100,u=0,f=!1;function p(n){if(!l.el||f||++u>d)return l.isScrolling=!1,c.style.transform=c.style.webkitTransform="",void r();var i=Math.min(1,(n-s)/e),h=--i*i*i+1;a!==o&&(c.scrollTop=h*(o-a)+a),b!==t&&(c.scrollLeft=Math.floor(h*(t-b)+b)),h<1?l.queue.read(p):(f=!0,l.isScrolling=!1,c.style.transform=c.style.webkitTransform="",r())}return l.isScrolling=!0,this.queue.write(function(){n.queue.write(function(t){s=t,p(t)})}),i},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})},t.prototype.hostData=function(){return{class:Object.assign({},Object(n.b)(this.mode,"scroll"),{overscroll:this.forceOverscroll})}},t.prototype.render=function(){return Object(r.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;contain:size style layout;z-index:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.overscroll)::after,:host(.overscroll)::before{position:absolute;width:1px;height:1px;content:""}:host(.overscroll)::before{bottom:-1px}:host(.overscroll)::after{top:-1px}'},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(n.a)(this.color)}},t.prototype.render=function(){return[Object(r.b)("div",{class:"toolbar-title"},Object(r.b)("slot",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);padding:0 12px;font-size:20px;font-weight:500}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.hostData=function(){return{class:Object(n.a)(this.color)}},t.prototype.render=function(){return[Object(r.b)("div",{class:"toolbar-background"}),Object(r.b)("div",{class:"toolbar-container"},Object(r.b)("slot",{name:"start"}),Object(r.b)("slot",{name:"secondary"}),Object(r.b)("div",{class:"toolbar-content"},Object(r.b)("slot",null)),Object(r.b)("slot",{name:"primary"}),Object(r.b)("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--background:var(--ion-color-base);--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;width:100%;color:var(--ion-color-contrast);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--ion-color-base:var(--ion-toolbar-background-color, #f8f8f8);--ion-color-contrast:var(--ion-toolbar-text-color, #424242);--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, #c1c4cd));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:56px;font-family:var(--ion-font-family,inherit)}.toolbar-container{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;min-width:0;max-width:100%}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}()}}]);