(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{KpvC:function(e,t,o){"use strict";o.r(t),o.d(t,"IonToggle",function(){return a});var n=o("cBjU"),i=o("y6cb"),s=o("kk3N"),r=o("XGMM"),a=function(){function e(){this.inputId="ion-tg-"+l++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},e.prototype.disabledChanged=function(){this.ionStyle.emit({"interactive-disabled":this.disabled}),this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentWillLoad=function(){this.ionStyle=Object(s.c)(this.ionStyle)},e.prototype.componentDidLoad=function(){return e=this,void 0,n=function(){var e,t,n;return function(e,t){var o,n,i,s,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(6===s[0]&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],n=0}finally{o=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,function(i){switch(i.label){case 0:return(e=this.nativeInput.closest("ion-item"))&&(t=e.querySelector("ion-label"))&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id)),n=this,[4,o.e(49).then(o.bind(null,"uSsP"))];case 1:return n.gesture=i.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged(),[2]}})},new((t=void 0)||(t=Promise))(function(o,i){function s(e){try{a(n.next(e))}catch(e){i(e)}}function r(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new t(function(t){t(e.value)}).then(s,r)}a((n=n.apply(e,[])).next())});var e,t,n},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var t=e.currentX;c(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,Object(i.d)())},e.prototype.onDragEnd=function(e){c(this.checked,e.currentX-this.pivotX,4)&&(this.checked=!this.checked,Object(i.d)()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:Object.assign({},Object(r.a)(this.color),{"in-item":Object(r.d)(".item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){var e=this;return Object(s.d)(this.el,this.name,this.value,this.disabled),[Object(n.b)("div",{class:"toggle-icon"},Object(n.b)("div",{class:"toggle-inner"})),Object(n.b)("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}}),Object(n.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-toggle-ios-h{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--checked-background:var(--ion-color-base);--checked-knob:var(--ion-color-base);-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}.toggle-key.sc-ion-toggle-ios-h   input.sc-ion-toggle-ios{border:2px solid #5e9ed6}.sc-ion-toggle-ios-h:focus{outline:0}input.sc-ion-toggle-ios{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}.toggle-icon.sc-ion-toggle-ios{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-background-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon.sc-ion-toggle-ios::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));content:""}.toggle-inner.sc-ion-toggle-ios{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}.toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios{background-color:var(--checked-knob)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios::before, .toggle-checked.sc-ion-toggle-ios-h   .toggle-icon.sc-ion-toggle-ios::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0)}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.toggle-activated.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{width:34px}.toggle-activated.toggle-checked.sc-ion-toggle-ios-h   .toggle-inner.sc-ion-toggle-ios{left:-4px}.toggle-disabled.sc-ion-toggle-ios-h{opacity:.3;pointer-events:none}.in-item[slot].sc-ion-toggle-ios-h{margin:0;padding:6px 8px 5px 16px}.in-item[slot=start].sc-ion-toggle-ios-h{padding:6px 16px 5px 0}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function c(e,t,o){var n="rtl"===document.dir;return e?!n&&o>t||n&&-o<t:!n&&-o<t||n&&o>t}var l=0}}]);