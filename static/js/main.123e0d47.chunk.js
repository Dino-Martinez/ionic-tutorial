(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{39:function(e,n,t){e.exports=t(60)},46:function(e,n,t){var r={"./ion-action-sheet.entry.js":[62,5],"./ion-alert.entry.js":[63,6],"./ion-app_8.entry.js":[64,7],"./ion-avatar_3.entry.js":[65,17],"./ion-back-button.entry.js":[66,18],"./ion-backdrop.entry.js":[67,44],"./ion-button_2.entry.js":[68,19],"./ion-card_5.entry.js":[69,20],"./ion-checkbox.entry.js":[70,21],"./ion-chip.entry.js":[71,22],"./ion-col_3.entry.js":[72,45],"./ion-datetime_3.entry.js":[73,10],"./ion-fab_3.entry.js":[74,23],"./ion-img.entry.js":[75,46],"./ion-infinite-scroll_2.entry.js":[76,47],"./ion-input.entry.js":[77,24],"./ion-item-option_3.entry.js":[78,25],"./ion-item_8.entry.js":[79,26],"./ion-loading.entry.js":[80,27],"./ion-menu_3.entry.js":[81,28],"./ion-modal.entry.js":[82,8],"./ion-nav_2.entry.js":[83,14],"./ion-popover.entry.js":[84,9],"./ion-progress-bar.entry.js":[85,29],"./ion-radio_2.entry.js":[86,30],"./ion-range.entry.js":[87,31],"./ion-refresher_2.entry.js":[88,11],"./ion-reorder_2.entry.js":[89,16],"./ion-ripple-effect.entry.js":[90,48],"./ion-route_4.entry.js":[91,32],"./ion-searchbar.entry.js":[92,33],"./ion-segment_2.entry.js":[93,34],"./ion-select_3.entry.js":[94,35],"./ion-slide_2.entry.js":[95,49],"./ion-spinner.entry.js":[96,13],"./ion-split-pane.entry.js":[97,50],"./ion-tab-bar_2.entry.js":[98,36],"./ion-tab_2.entry.js":[99,15],"./ion-text.entry.js":[100,37],"./ion-textarea.entry.js":[101,38],"./ion-toast.entry.js":[102,39],"./ion-toggle.entry.js":[103,12],"./ion-virtual-scroll.entry.js":[104,51]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=46,e.exports=a},48:function(e,n,t){var r={"./ion-icon.entry.js":[106,57]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(r)},a.id=48,e.exports=a},59:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(24),l=t.n(o),i=t(27),c=t(3),s=t(11),u=function(e){return a.a.createElement(c.n,{className:"ion-padding"},a.a.createElement(c.f,null,a.a.createElement(c.c,{onClick:e.onCalculate},a.a.createElement(c.j,{slot:"start",icon:s.b}),"Calculate")),a.a.createElement(c.f,{className:"ion-text-right"},a.a.createElement(c.c,{onClick:e.onReset},"Reset",a.a.createElement(c.j,{slot:"end",icon:s.k}))))},m=function(e){return a.a.createElement(c.n,null,a.a.createElement(c.f,null,a.a.createElement(c.d,null,a.a.createElement(c.e,{className:"ion-text-center"},a.a.createElement("h2",null,"Your Body-Mass-Index"),a.a.createElement("h3",null,e.bmi.toFixed(2))))))},j=function(e){return a.a.createElement(c.o,{value:e.selected,onIonChange:function(n){e.unitsCallback(n.detail.value)}},a.a.createElement(c.p,{value:"mkg"},a.a.createElement(c.m,null,"m/kg")),a.a.createElement(c.p,{value:"flb"},a.a.createElement(c.m,null,"ft/lbs")))},y=(t(49),t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),function(){var e=Object(r.useState)(-999),n=Object(i.a)(e,2),t=n[0],o=n[1],l=Object(r.useState)(),s=Object(i.a)(l,2),y=s[0],f=s[1],E=Object(r.useState)("mkg"),d=Object(i.a)(E,2),b=d[0],p=d[1],g=Object(r.useRef)(null),h=Object(r.useRef)(null);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{isOpen:!!y,message:y,buttons:[{text:"Okay.",handler:function(){f("")}}]}),a.a.createElement(c.b,null,a.a.createElement(c.i,null,a.a.createElement(c.r,null,a.a.createElement(c.q,null,"BMI Calculator"))),a.a.createElement(c.g,null,a.a.createElement(c.h,null,a.a.createElement(c.n,{className:"ion-padding"},a.a.createElement(j,{selected:b,unitsCallback:function(e){p(e)}})),a.a.createElement(c.n,{className:"ion-padding"},a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Height (","mkg"===b?"Meters":"Feet",")"),a.a.createElement(c.k,{type:"number",min:"1",ref:g})))),a.a.createElement(c.n,{className:"ion-padding"},a.a.createElement(c.f,null,a.a.createElement(c.l,null,a.a.createElement(c.m,{position:"floating"},"Weight (","mkg"===b?"Kilograms":"Pounds",")"),a.a.createElement(c.k,{type:"number",min:"1",ref:h})))),a.a.createElement(u,{onCalculate:function(){var e=g.current.value,n=h.current.value;if(!n||!e||+e>+n)f("You may have mistaken height for weight!");else{var t=+e/("mkg"===b?1:3.28);o(+n/("mkg"===b?1:2.2)/(t*t))}},onReset:function(){g.current.value="",h.current.value="",o(-999)}}),t>0&&a.a.createElement(m,{bmi:t})))))});l.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[39,3,4]]]);
//# sourceMappingURL=main.123e0d47.chunk.js.map