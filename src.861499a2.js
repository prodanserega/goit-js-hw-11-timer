parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"Focm":[function(require,module,exports) {
"use strict";function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}require("./sass/main.scss");class e{constructor({selector:e,targetDate:s}){t(this,"setDate",()=>{const t=Date.now(),e=this.targetDate-t,{days:s,hours:a,mins:r,secs:i}=this.getTimeComponents(e);this.updateTimeFields({days:s,hours:a,mins:r,secs:i})}),this.time=this.getFieldsBySelector(e),this.targetDate=s,this.start()}start(){this.setDate(),this.timer=setInterval(()=>this.setDate(),1e3)}getFieldsBySelector(t){return{days:document.querySelector(`${t} [data-value="days"]`),hours:document.querySelector(`${t} [data-value="hours"]`),mins:document.querySelector(`${t} [data-value="mins"]`),secs:document.querySelector(`${t} [data-value="secs"]`)}}updateTimeFields({days:t,hours:e,mins:s,secs:a}){this.time.days.textContent=t,this.time.hours.textContent=e,this.time.mins.textContent=s,this.time.secs.textContent=a}getTimeComponents(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}}new e({selector:"#timer-1",targetDate:new Date("Aug 31, 2021")});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.861499a2.js.map