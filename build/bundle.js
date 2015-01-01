(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.2 - 2014-09-26
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C,D=function(a){C=d(function(){B(a)},o)},E=function(){C&&d.cancel(C)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(E(),D(a)):B(a):(q(i,!1),E(),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var F=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",F),i.$on("$destroy",function(){e.unbind("click",F)});var G=a(y)(w);t?e.find("body").append(G):j.after(G)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
},{}],2:[function(require,module,exports){
/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
},{}],3:[function(require,module,exports){
/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,u){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.28/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Sa(b){if(null==b||Ja(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||Sa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function ib(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Zb(b,a);return b}function U(b){return parseInt(b,
10)}function $b(b,a){return E(new (E(function(){},{prototype:b})),a)}function v(){}function ga(b){return b}function aa(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function jb(b){return"number"===typeof b}function va(b){return"[object Date]"===Ba.call(b)}function N(b){return"function"===typeof b}function kb(b){return"[object RegExp]"===Ba.call(b)}
function Ja(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ta(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=Ta(b,a);0<=c&&b.splice(c,1);return a}function Ka(b,a,c,d){if(Ja(b)||b&&b.$evalAsync&&b.$watch)throw Va("cpws");if(a){if(b===a)throw Va("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ta(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else if(a=b)L(b)?a=Ka(b,[],c,d):va(b)?a=new Date(b.getTime()):kb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ka(b,{},c,d));
return a}function ha(b,a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!lb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ca(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ca(b[d],a[d]))return!1;return!0}}else{if(va(b))return va(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(kb(b)&&kb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ja(b)||Ja(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!Ca(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!N(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?wa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(wa.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=u:Ja(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return G(b)?JSON.parse(b):b}function Wa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=bc(c[0]),D(d)&&(b=D(c[1])?bc(c[1]):!0,lb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function mb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function dc(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function nb(b,a){a=
a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Va("areq",a||"?",c||"required");return b}function Ya(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(N(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ea(b,a){if("hasOwnProperty"===b)throw Va("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Yc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function Zc(b){E(b,{bootstrap:dc,copy:Ka,extend:E,equals:Ca,element:A,forEach:r,injector:ec,noop:v,bind:Bb,toJson:oa,fromJson:ac,identity:ga,isUndefined:F,isDefined:D,isString:G,isFunction:N,isObject:T,isNumber:jb,isElement:Tc,isArray:L,version:$c,isDate:va,lowercase:x,uppercase:La,callbacks:{counter:0},$$minErr:z,$$csp:Za});$a=Yc(W);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",ad)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",
gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Fb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function ab(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],k=a,m,l,n,q,p,s;if(!d||null!=b)for(;e.length;)for(m=e.shift(),l=0,n=m.length;l<n;l++)for(q=A(m[l]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Fa(s[p]));return f.apply(this,arguments)}var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function S(b){if(b instanceof S)return b;G(b)&&(b=$(b));if(!(this instanceof S)){if(G(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(G(b)){var a=b;b=X;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);A(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ma(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ma(b[a])}function lc(b,a,c,d){if(D(d))throw Hb("offargs");var e=pa(b,"events");pa(b,"handle")&&(F(a)?r(e,function(a,c){bb(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(bb(b,a,e[a]),delete e[a]):Ua(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=cb[c];d&&(a?delete cb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete cb[c],b.ng339=u))}function pa(b,a,c){var d=
b.ng339,d=cb[d||-1];if(D(c))d||(b.ng339=d=++me,d=cb[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=pa(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function ob(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+$(a)+" "," ")))})}function pb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Ja(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function mc(b,a){return qb(b,"$"+(a||"ngController")+"Controller")}function qb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function nc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ma(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function oc(b,a){var c=rb[a.toLowerCase()];return c&&pc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=R?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Na(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===u&&(d=b.$$hashKey=(a||ib)()):d=b;return c+":"+d}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function qc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),r(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Ya(b[c],"fn"),a=b.slice(0,c)):Ya(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(T(b))r(b,
Yb(a));else return a(b,c)}}function c(a,b){Ea(a,"service");if(N(b)||L(b))b=n.instantiate(b);if(!b.$get)throw eb("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!m.get(a)){m.put(a,!0);try{if(G(a))for(c=$a(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else N(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Ya(a,"module")}catch(p){throw L(a)&&(a=
a[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\n"+p.stack),eb("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw eb("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=qc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw eb("itkn",p);f.push(e&&e.hasOwnProperty(p)?
e[p]:c(p))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||N(e)?e:c},get:c,annotate:qc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],m=new db([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,
b){Ea(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw eb("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||v)});return p}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,
wa.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});t=b(ea,a)})()}function g(){y!=h.url()&&(y=h.url(),r(ba,function(a){a(h.url())}))}var h=this,k=a[0],m=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():J.push(a)};
var w=[],t;h.addPollFn=function(a){F(t)&&f(100,n);w.push(a);return a};var y=m.href,K=a.find("base"),B=null;h.url=function(a,c){m!==b.location&&(m=b.location);l!==b.history&&(l=b.history);if(a){if(y!=a){var e=y&&Ga(y)===Ga(a);y=a;!e&&d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(e||(B=a),c?m.replace(a):m.href=a);return h}}else return B||m.href.replace(/%27/g,"'")};var ba=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)A(b).on("popstate",g);if(d.hashchange)A(b).on("hashchange",
g);else h.addPollFn(g);O=!0}ba.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},ca="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===u?k.cookie=escape(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+P).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==
ca)for(ca=k.cookie,d=ca.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===u&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(v),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),k={},m=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>m&&this.remove(q.key),b},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete k[a];g--},removeAll:function(){k={};g=0;l={};n=q=null},destroy:function(){l=h=k=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ea(a,"directive");G(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Yb(k));
return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,q,p,s,J,w,t,y,K){function B(a,b,c,d,e){a instanceof
A||(a=A(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);ba(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?Oa.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ba(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,p,l,m,q,
n,w;f=c.length;var s=Array(f);for(m=0;m<f;m++)s[m]=c[m];n=m=0;for(q=k.length;m<q;n++)p=s[n],c=k[m++],f=k[m++],c?(c.scope?(l=a.$new(),A.data(p,"$scope",l)):l=a,w=c.transcludeOnThisElement?M(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,p,d,w)):f&&f(a,p.childNodes,u,e)}for(var k=[],p,l,m,q,n=0;n<a.length;n++)p=new Ob,l=ca(a[n],[],p,0===n?d:u,e),(f=l.length?I(l,a[n],p,b,c,null,[],[],f):null)&&f.scope&&ba(p.$$element,"ng-scope"),p=f&&f.terminal||!(m=a[n].childNodes)||!m.length?
null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function M(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:ea(b,qa(Pa(a).toLowerCase()),"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,J=!1;l=n[w];if(!R||8<=R||l.specified){p=l.name;m=
$(l.value);l=qa(p);if(q=U.test(l))p=nb(l.substr(6),"-");var y=l.replace(/(Start|End)$/,"");l===y+"Start"&&(t=p,J=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,oc(a,l)&&(c[l]=!0);S(a,b,m,l);ea(b,l,"A",d,g,t,J)}}a=a.className;if(G(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),ea(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+p[0].length);break;case 3:x(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),ea(b,l,"M",d,
g)&&(c[l]=$(p[2]))}catch(B){}}b.sort(F);return b}function P(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function C(a,b,c){return function(d,e,f,g,k){e=P(e[0],b,c);return a(d,e,f,g,k)}}function I(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=z;if(K===H||H.$$isolateScope)a=rc(a,
{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=z;if(K===H||H.$$isolateScope)b=rc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function J(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&
(b=a,a=u);Ia&&(c=ca);return n(a,b,c)}var y,Q,B,M,C,P,ca={},ra;y=c===f?d:ha(d,new Ob(A(f),d.$attr));Q=y.$$element;if(K){var ue=/^\s*([@=&])(\??)\s*(\w*)\s*$/;P=e.$new(!0);!I||I!==K&&I!==K.$$originalDirective?Q.data("$isolateScopeNoTemplate",P):Q.data("$isolateScope",P);ba(Q,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(ue)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,l,n,q;P.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){P[c]=a});y.$$observers[f].$$scope=e;y[f]&&(P[c]=b(y[f])(e));
break;case "=":if(g&&!y[f])break;l=p(y[f]);q=l.literal?Ca:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){k=P[c]=l(e);throw ja("nonassign",y[f],K.name);};k=P[c]=l(e);P.$watch(function(){var a=l(e);q(a,P[c])||(q(a,k)?n(e,a=P[c]):P[c]=a);return k=a},null,l.literal);break;case "&":l=p(y[f]);P[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}ra=n&&w;O&&r(O,function(a){var b={$scope:a===K||a.$$isolateScope?P:e,$element:Q,$attrs:y,$transclude:ra},c;C=a.controller;
"@"==C&&(C=y[a.name]);c=s(C,b);ca[a.name]=c;Ia||Q.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(B=k.length;g<B;g++)try{M=k[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(H){l(H,ia(Q))}g=e;K&&(K.template||null===K.templateUrl)&&(g=P);a&&a(g,f.childNodes,u,n);for(g=q.length-1;0<=g;g--)try{M=q[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(D){l(D,ia(Q))}}n=n||{};for(var y=-Number.MAX_VALUE,
M,O=n.controllerDirectives,K=n.newIsolateScopeDirective,I=n.templateDirective,ea=n.nonTlbTranscludeDirective,F=!1,E=!1,Ia=n.hasElementTranscludeDirective,x=d.$$element=A(c),H,z,V,S=e,R,Ha=0,sa=a.length;Ha<sa;Ha++){H=a[Ha];var U=H.$$start,Y=H.$$end;U&&(x=P(c,U,Y));V=u;if(y>H.priority)break;if(V=H.scope)M=M||H,H.templateUrl||(fb("new/isolated scope",K,H,x),T(V)&&(K=H));z=H.name;!H.templateUrl&&H.controller&&(V=H.controller,O=O||{},fb("'"+z+"' controller",O[z],H,x),O[z]=H);if(V=H.transclude)F=!0,H.$$tlb||
(fb("transclusion",ea,H,x),ea=H),"element"==V?(Ia=!0,y=H.priority,V=x,x=d.$$element=A(X.createComment(" "+z+": "+d[z]+" ")),c=x[0],ra(f,wa.call(V,0),c),S=B(V,e,y,g&&g.name,{nonTlbTranscludeDirective:ea})):(V=A(Kb(c)).contents(),x.empty(),S=B(V,e));if(H.template)if(E=!0,fb("template",I,H,x),I=H,V=N(H.template)?H.template(x,d):H.template,V=W(V),H.replace){g=H;V=Ib.test(V)?A($(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,x,c);sa={$attr:{}};V=ca(c,[],sa);var Z=a.splice(Ha+
1,a.length-(Ha+1));K&&D(V);a=a.concat(V).concat(Z);v(d,sa);sa=a.length}else x.html(V);if(H.templateUrl)E=!0,fb("template",I,H,x),I=H,H.replace&&(g=H),J=te(a.splice(Ha,a.length-Ha),x,d,f,F&&S,k,q,{controllerDirectives:O,newIsolateScopeDirective:K,templateDirective:I,nonTlbTranscludeDirective:ea}),sa=a.length;else if(H.compile)try{R=H.compile(x,d,S),N(R)?w(null,R,U,Y):R&&w(R.pre,R.post,U,Y)}catch(ve){l(ve,ia(x))}H.terminal&&(J.terminal=!0,y=Math.max(y,H.priority))}J.scope=M&&!0===M.scope;J.transcludeOnThisElement=
F;J.templateOnThisElement=E;J.transclude=S;n.hasElementTranscludeDirective=Ia;return J}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ea(b,e,f,g,p,m,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(m&&(q=$b(q,{$$start:m,$$end:n})),b.push(q),p=q)}catch(y){l(y)}}return p}function v(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function te(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),y=E({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=N(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;
b.empty();n.get(t.getTrustedResourceUrl(J),{cache:q}).success(function(q){var n,t;q=W(q);if(s.replace){q=Ib.test(q)?A($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,J);q={$attr:{}};ra(d,b,n);var B=ca(n,[],q);T(s.scope)&&D(B);a=B.concat(a);v(c,q)}else n=w,b.html(q);a.unshift(y);l=I(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=O(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var K=p.shift(),C=p.shift(),B=b[0];if(t!==w){var P=t.className;k.hasElementTranscludeDirective&&
s.replace||(B=Kb(n));ra(K,A(t),B);ba(A(B),P)}t=l.transcludeOnThisElement?M(q,l.transclude,C):C;l(m,q,B,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),p.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(m,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function fb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function x(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ba(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ba(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Pa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Pa(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<
p;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function rc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&y.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&y.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sc(a,b),d=sc(b,a);0===c.length?y.removeClass(this.$$element,d):0===d.length?y.addClass(this.$$element,c):y.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=oc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=nb(a,"-"));e=Pa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===u?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var sa=b.startSymbol(),Ia=b.endSymbol(),W="{{"==sa||"}}"==Ia?ga:function(a){return a.replace(/\{\{/g,sa).replace(/}}/g,Ia)},U=/^ngAttr[A-Z]/;return B}]}function qa(b){return ab(b.replace(we,""))}function sc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Ea(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;G(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Ya(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",
h||e.name,k);f.$scope[k]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return A(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function tc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=x($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function uc(b){var a=T(b)?b:u;return function(c){a||(a=tc(b));return c?a[x(c)]||null:a}}function vc(b,a,c){if(N(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=E({},a,{data:vc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[x(a.method)]);
a:for(d in b){a=x(d);for(f in c)if(x(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){N(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=La(c.method);var f=[function(a){d=a.headers;var c=vc(a.data,uc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===x(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function m(a,b,c,e){C&&(200<=a&&300>a?C.put(A,[a,b,tc(c),e]):C.remove(A));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:uc(d),config:c,statusText:e})}function s(){var a=Ta(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,I,A=J(c.url,c.params);p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(I=C.get(A),D(I)){if(I&&N(I.then))return I.then(s,s),I;L(I)?q(I[1],I[0],ha(I[2]),I[3]):q(I,200,{},"OK")}else C.put(A,r);F(I)&&
((I=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=I),a(c.method,A,f,m,g,c.timeout,c.withCredentials,c.responseType));return r}function J(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(a=va(a)?a.toISOString():oa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(G(a)?q.get(a):q.invoke(a))});r(g,
function(a,b){var c=G(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function xe(b){if(8>=R&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){bb(f,"load",g);bb(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);8>=R&&(f.onreadystatechange=function(){G(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,m,l,n,q,p,s){function J(){t=g;K&&K();B&&B.abort()}function w(a,d,e,f,g){O&&c.cancel(O);K=B=null;0===d&&(d=e?200:"file"==xa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}
var t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==x(e)){var y="_"+(d.counter++).toString(36);d[y]=function(a){d[y].data=a;d[y].called=!0};var K=f(k.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(a,b){w(l,a,d[y].data,"",b);d[y]=v})}else{var B=a(e);B.open(e,k,!0);r(n,function(a,b){D(a)&&B.setRequestHeader(b,a)});B.onreadystatechange=function(){if(B&&4==B.readyState){var a=null,b=null,c="";t!==g&&(a=B.getAllResponseHeaders(),b="response"in B?B.response:B.responseText);t===g&&
10>R||(c=B.statusText);w(l,t||B.status,b,a,c)}};p&&(B.withCredentials=!0);if(s)try{B.responseType=s}catch(ba){if("json"!==s)throw ba;}B.send(m||null)}if(0<q)var O=c(J,q);else q&&N(q.then)&&q.then(J)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,m,l){for(var n,q,p=0,s=[],J=f.length,w=!1,t=[];p<J;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,
n+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=J&&s.push(f.substring(p)),p=J);(J=s.length)||(s.push(""),J=1);if(l&&1<s.length)throw wc("noconcat",f);if(!m||w)return t.length=J,p=function(a){try{for(var b=0,c=J,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=wc("interr",f,h.toString()),
d(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,k){var m=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=D(k)&&!k;h=D(h)?h:0;q.then(null,null,d);q.$$intervalId=m(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
mb(b[a]);return b.join("/")}function xc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);xc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!G(e))throw Sb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,
e){var f,g;(f=ta(b,d))!==u?(g=f,g=(f=ta(a,f))!==u?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,a){var c=Rb(b);xc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!G(e))throw Sb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),
e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Ga(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+
(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),m=d.url();
a?(k=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Ga(m),e=Tb);h=new e(k,"#"+b);h.$$parseLinkUrl(m,m);var l=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);l.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||
!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?
function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&
b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ya(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===u&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);ma(b[f],d);return b[f]=c}function Qa(b){return"constructor"==
b}function Cc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,m=k||Qa(b)?h:ga,l=k||Qa(a)?h:ga,n=k||Qa(c)?h:ga,q=k||Qa(d)?h:ga,p=k||Qa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=m(k[b]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=m(a)})),k=m(k.$$v));if(!a)return k;if(null==k)return u;(k=l(k[a]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=
l(a)})),k=l(k.$$v));if(!c)return k;if(null==k)return u;(k=n(k[c]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return u;(k=q(k[d]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return u;(k=p(k[e]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=m(h[b]);
if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=q(h[d]);return e?null==h?u:h=p(h[e]):h}}function Ae(b,a){return function(c,d){return b(c,d,ya,ma,a)}}function Dc(b,a,c){var d=a.expensiveChecks,e=d?Be:Ce;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Cc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Cc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=u,b=h;while(e<g);return h};
else{var k="var p;\n";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var m=d;r(f,function(b,e){ka(b,c);var f=(e?"s":'((l&&l.hasOwnProperty("'+b+'"))?l:s)')+'["'+b+'"]',g=d||Qa(b);g&&(f="eso("+f+", fe)",m=!0);k+="if(s == null) return undefined;\ns="+f+";\n";a.unwrapPromises&&(k+='if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v='+(g?"eso(v)":"v")+";});\n}\n s="+(g?"eso(s.$$v)":"s.$$v")+"\n}\n")});k+="return s;";
h=new Function("s","l","pw","eso","fe",k);h.toString=aa(k);if(m||a.unwrapPromises)h=Ae(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Xd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return D(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return D(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,
unwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};ya=function(a){c.logPromiseWarnings&&!Ec.hasOwnProperty(a)&&(Ec[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var m;switch(typeof e){case "string":var l=f?a:b;if(l.hasOwnProperty(e))return l[e];m=f?g:c;var n=new Ub(m);m=(new gb(n,d,m)).parse(e);"hasOwnProperty"!==e&&(l[e]=m);return m;case "function":return e;
default:return v}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return De(function(a){b.$evalAsync(a)},a)}]}function De(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],m,l;return l={resolve:function(a){if(g){var c=g;g=u;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=
c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},w=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,w,t]):m.then(J,w,t);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,
!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,
when:function(h,m,l,n){var q=e(),p,s=function(b){try{return(N(m)?m:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(N(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,J,w)))},function(a){p||(p=!0,q.resolve(J(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,
--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=
e;return f}]}function Yd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ib();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=
{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b){var c=f(a);Ya(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=ib();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=m(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=m(b||v,"listener");g.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ua(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ua(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Sa(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,
k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Sa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)lb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,
K,B,u=b,O,M=[],A,P,C;k("$digest");g.$$checkUrlChange();c=null;do{B=!1;for(O=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(I){q.$$phase=null,e(I)}c=null}a:do{if(l=O.$$watchers)for(K=l.length;K--;)try{if(d=l[K])if((f=d.get(O))!==(h=d.last)&&!(d.eq?Ca(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))B=!0,c=d,d.last=d.eq?Ka(f,null):f,d.fn(f,h===n?f:h,O),5>u&&(A=4-u,M[A]||(M[A]=[]),P=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,P+="; newVal: "+oa(f)+"; oldVal: "+
oa(h),M[A].push(P));else if(d===c){B=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(l=O.$$nextSibling);)O=O.$parent}while(O=l);if((B||m.length)&&!u--)throw q.$$phase=null,a("infdig",b,oa(M));}while(B||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=v,this.$on=this.$watch=function(){return v})}},
$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Ta(c,b);-1!==d&&(c[d]=null,l(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(wa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;
f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(wa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;
return q}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!R||8<=R)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ee(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(kb(b))return RegExp("^"+b.source+"$");throw za("imatcher");}function Fc(b){var a=[];D(b)&&r(b,function(b){a.push(Ee(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Fc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Fc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw za("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw za("icontext",
a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===u||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw za("insecurl",
d.toString());}if(c===fa.HTML)return e(d);throw za("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw za("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=x(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,b)};e[ab("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,l=!1,n=!1;if(m){for(var q in m)if(l=k.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in m&&"webkit");l=!!("transition"in m||h+"Transition"in m);n=!!("animation"in m||h+"Animation"in m);!d||l&&n||(l=G(f.body.style.webkitTransition),n=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==R)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:R,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var m=c.defer(),l=m.promise,n=D(k)&&!k;h=a.defer(function(){try{m.resolve(e())}catch(a){m.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=m;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;R&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=G(b)?xa(b):b;return b.protocol===Gc.protocol&&b.host===Gc.host}function ee(){this.$get=aa(W)}function kc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Hc);a("date",Ic);a("filter",Fe);a("json",Ge);a("limitTo",He);a("lowercase",Ie);a("number",Jc);a("orderBy",Kc);a("uppercase",Je)}function Fe(){return function(b,
a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Xa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&lb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Hc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Lc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Lc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Lc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],m=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(h=g,m=!0)}if(m)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Mc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Mc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,m=0;m<l;m++)0===(l-m)%q&&0!==m&&(h+=c),h+=g.charAt(m);for(m=l;m<g.length;m++)0===(g.length-m)%n&&0!==m&&(h+=c),h+=g.charAt(m);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,
e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Vb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=La(a?"SHORT"+b:b);return d[f][e]}}function Ic(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?
a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=Ke.test(c)?U(c):a(c));jb(c)&&(c=new Date(c));
if(!va(c))return c;for(;e;)(k=Le.exec(e))?(g=g.concat(wa.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Me[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ge(){return function(b){return oa(b,!0)}}function He(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Kc(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(va(a)&&va(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=Uc(c,function(a){var c=!1,d=a||ga;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var m=d();return e(function(a,b){return f(a[m],b[m])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Aa(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Nc(b,a,c,d){function e(a,c){c=c?"-"+nb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||
yb,h=0,k=f.$error={},m=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$addControl=function(a){Ea(a.$name,"input");m.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ua(m,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ua(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Ta(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Ra);f.$dirty=!1;f.$pristine=!0;r(m,function(a){a.$setPristine()})}}function ua(b,a,c,d){b.$setValidity(a,c);return c?d:u}function Oc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ne(b,
a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Oc(e,d)||!Oc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Oe),h=a[0].placeholder,k={},m=x(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(R&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==m&&Wa(c.ngTrim||"T")&&
(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?
(s=RegExp(e[1],e[2]),e=function(a){return ua(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,e,ia(a));return ua(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ua(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ua(d,"maxlength",d.$isEmpty(a)||
a.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<
b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!l){var p=k(m,1);h.$addClass(p)}else if(!Ca(b,l)){var s=e(l),p=d(m,s),m=d(s,m),m=k(m,-1),p=k(p,1);0===p.length?c.removeClass(g,m):0===m.length?c.addClass(g,p):c.setClass(g,p,m)}}l=ha(b)}var l;f.$watch(h[b],m,!0);h.$observe("class",function(a){m(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));
g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Oe="validity",x=function(b){return G(b)?b.toLowerCase():b},lb=Object.prototype.hasOwnProperty,La=function(b){return G(b)?b.toUpperCase():b},R,A,Fa,wa=[].slice,Pe=[].push,Ba=Object.prototype.toString,Va=z("ng"),Xa=W.angular||(W.angular={}),$a,Pa,na=["0","0","0"];R=U((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(R)&&(R=U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));v.$inject=[];ga.$inject=[];var L=
function(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Ba.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Pa=9>R?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?La(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Za=function(){if(D(Za.isActive_))return Za.isActive_;var b=!(!X.querySelector("[ng-csp]")&&
!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},Xc=/[A-Z]/g,$c={full:"1.2.28",major:1,minor:2,dot:28,codeName:"finnish-disembarkation"};S.expando="ng339";var cb=S.cache={},me=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},bb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||
{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Hb=z("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=
da.caption=da.thead;da.th=da.td;var Oa=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Pe,sort:[].sort,splice:[].splice},rb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){rb[x(b)]=b});
var pc={};r("input select option textarea button form details".split(" "),function(b){pc[La(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:qb,scope:function(b){return A.data(b,"$scope")||qb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:mc,injector:function(b){return qb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,
a,c){a=ab(a);if(D(c))b.style[a]=c;else{var d;8>=R&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=R&&(d=""===d?u:d);return d}},attr:function(b,a,c){var d=x(a);if(rb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,
d){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>R?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Pa(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ma(d[c]);b.innerHTML=a},empty:nc},function(b,a){S.prototype[a]=function(a,d){var e,
f,g=this.length;if(b!==nc&&(2==b.length&&b!==Nb&&b!==mc?a:d)===u){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ma,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=ne(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==
d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},
off:lc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ma(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,
c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ma(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:pb,removeClass:ob,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?pb:ob)(a,c)})},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:v,type:e,target:a},
c.type&&(e=E(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)F(g)?(g=a(this[h],c,e,f),D(g)&&(g=A(g))):Jb(g,a(this[h],c,e,f));return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var pe=
/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,eb=z("$injector"),Qe=z("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",
function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){pb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){pb(a,c);ob(a,g)});h&&d(h)},enabled:v}}]}],ja=z("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];
var we=/^(x[\:\-_]|data[\:\-_])/i,wc=z("$interpolate"),Re=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ze={http:80,https:443,ftp:21},Sb=z("$location");Ac.prototype=Tb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=Re.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||jb(a))a=a.toString(),this.$$search=cc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=z("$parse"),Ec=
{},ya,Se=Function.prototype.call,Te=Function.prototype.apply,Pc=Function.prototype.bind,hb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^
e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ue={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=u;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=hb[this.ch],e=hb[a],f=hb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;
else break}d={index:d,text:c};if(hb.hasOwnProperty(c))d.fn=hb[c],d.literal=!0,d.constant=!0;else{var k=Dc(c,this.options,this.text);d.fn=E(function(a,c){return k(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ue[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=E(function(){return 0},{constant:!0});gb.prototype={constructor:gb,
parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=
!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===
a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),k;ka(h,c.text);if(!g)return u;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&
(k=g,"$$v"in g||(k.$$v=u,k.then(function(a){k.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ka(d(e,g),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,m=0;m<d.length;m++)h.push(ma(d[m](f,g),e.text));m=a(f,g,k)||v;ma(k,e.text);var l=e.text;if(m){if(m.constructor===m)throw la("isecfn",
l);if(m===Se||m===Te||Pc&&m===Pc)throw la("isecff",l);}h=m.apply?m.apply(k,h):m(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},k=0;k<a.length;k++){var m=a[k];e[m.key]=m.value(c,d)}return e},{literal:!0,constant:c})}};var Ce={},Be={},za=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Gc=xa(W.location.href,!0);kc.$inject=["$provide"];Hc.$inject=["$locale"];Jc.$inject=["$locale"];
var Mc=".",Me={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Vb(Math[0<
a?"floor":"ceil"](a/60),2)+Vb(Math.abs(a%60),2))}},Le=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ke=/^\-?\d+$/;Ic.$inject=["$locale"];var Ie=aa(x),Je=aa(La);Kc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=R&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(rb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),R&&g&&e.prop(g,f[h])):"href"===
a&&f.$set(h,null)})}}}});var yb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Nc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Nc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){bb(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),
m=f.name||f.ngForm;m&&ub(a,m,g,m);if(k)e.on("$destroy",function(){k.$removeControl(g);m&&ub(a,m,u,m);E(g,yb)})}}}}}]},dd=Qc(),qd=Qc(!0),Ve=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,We=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xe.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return u});Ne(e,"number",Ye,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ua(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ua(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ua(e,"number",e.$isEmpty(a)||
jb(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"url",e.$isEmpty(a)||Ve.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"email",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",ib());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;G(f)||(f=!0);G(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:v,button:v,submit:v,reset:v,file:v},Ye=["badInput"],hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Rc[x(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Ra="ng-pristine",zb="ng-dirty",Ze=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+nb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var k=f(d.ngModel),m=k.assign;if(!m)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,q=this.$error={};e.addClass(Ra);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Ra)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=
c,p.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Ze,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):u});e.$isEmpty=function(a){return!a||!a.length}}}},$e=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return $e.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=Aa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==u?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],ld=Wb("",!0),nd=Wb("Odd",0),md=Wb("Even",1),od=Aa({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={},af={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=qa("ng-"+a);jc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};af[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,m;c.$watch(e.ngIf,function(f){Wa(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.remove(),m=null),k&&(k.$destroy(),k=null),h&&(m=Eb(h.clone),a.leave(m,function(){m=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Xa.noop,compile:function(g,h){var k=h.ngInclude||h.src,m=h.onload||"",l=h.autoscroll;return function(g,h,p,r,J){var w=0,t,y,u,B=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);
u&&(e.leave(u,function(){y=null}),y=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!D(l)||l&&!g.$eval(l)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=J(c,function(a){B();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(m)}}).error(function(){p===w&&B()}),g.$emit("$includeContentRequested")):(B(),r.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=Aa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=Aa({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),m=g.offset||0,l=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+m+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-m));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var m=g.ngRepeat,l=m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,u,w,t={$id:Na};if(!l)throw d("iexp",
m);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(t[w]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return Na(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);u=l[3]||l[1];w=l[2];var y={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},D,C,I,x,G,v,z,F=[];if(Sa(a))v=a,G=q||p;else{G=q||s;v=[];for(I in a)a.hasOwnProperty(I)&&"$"!=I.charAt(0)&&v.push(I);v.sort()}D=v.length;h=F.length=v.length;for(g=0;g<h;g++)if(I=a===
v?g:v[g],x=a[I],n=G(I,x,g),Ea(n,"`track by` id"),y.hasOwnProperty(n))z=y[n],delete y[n],t[n]=z,F[g]=z;else{if(t.hasOwnProperty(n))throw r(F,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",m,n,oa(x));F[g]={id:n};t[n]=!1}for(I in y)y.hasOwnProperty(I)&&(z=y[I],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=v.length;g<h;g++){I=a===v?g:v[g];x=a[I];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){C=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
z.clone[0]!=n&&c.move(Eb(z.clone),null,A(l));l=z.clone[z.clone.length-1]}else C=e.$new();C[u]=x;w&&(C[w]=I);C.$index=g;C.$first=0===g;C.$last=g===D-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+m+" ");c.enter(a,null,A(l));l=a;z.scope=C;z.clone=a;t[z.id]=z})}y=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Wa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Wa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=Aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],m=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=
m.length;n<q;++n){var p=h[n];m[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;m.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=
Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ed=Aa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bf=z("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,m={},l=e,n;k.databound=d.ngModel;k.init=function(a,c,d){l=a;n=d};k.addOption=function(c){Ea(c,'"option value"');m[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
k.removeOption=function(a){this.hasOption(a)&&(delete m[a],l.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return m.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,g,h,k){function m(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){Ca(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,v;s=g.$modelValue;u=A(e)||[];var F=n?Xb(u):u,G,Q,C;Q={};C=!1;if(p)if(k=g.$modelValue,w&&L(k))for(C=new db([]),d={},v=0;v<k.length;v++)d[m]=k[v],C.put(w(e,d),k[v]);else C=new db(k);v=C;var E,K;for(C=0;G=F.length,C<G;C++){k=C;if(n){k=F[C];if("$"===k.charAt(0))continue;Q[n]=k}Q[m]=u[k];d=r(e,Q)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=D(v.remove(w?w(e,Q):x(e,Q))):(w?(d={},d[m]=s,d=w(e,d)===w(e,Q)):d=s===x(e,Q),v=v||d);E=l(e,Q);E=D(E)?E:"";k.push({id:w?w(e,Q):n?F[C]:C,label:E,selected:d})}p||(z||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));Q=0;for(F=c.length;Q<F;Q++){d=c[Q];k=a[d];B.length<=Q?(s={element:y.clone().attr("label",d),label:k.label},u=[s],B.push(u),f.append(s.element)):(u=B[Q],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;C=0;for(G=k.length;C<G;C++)d=k[C],(v=u[C+1])?(E=v.element,v.label!==d.label&&(E.text(v.label=d.label),E.prop("label",v.label)),v.id!==d.id&&E.val(v.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",
v.selected=d.selected),R&&E.prop("selected",v.selected))):(""===d.id&&z?K=z:(K=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push({element:K,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,K),E?E.after(K):s.element.append(K),E=K);for(C++;u.length>C;)d=u.pop(),q.removeOption(d.label),d.element.remove()}for(;B.length>Q;)B.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw bf("iexp",s,ia(f));var l=c(k[2]||k[1]),
m=k[4]||k[6],n=k[5],r=c(k[3]||""),x=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},k,l,q,r,s,t,v;if(p)for(l=[],r=0,t=B.length;r<t;r++)for(a=B[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=k);v++);else d[m]=c[k];l.push(x(e,d))}}else if(k=f.val(),"?"==k)l=u;else if(""===
k)l=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==k){l=x(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=x(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(A,h);e.$watchCollection(function(){var a={},c=A(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,w,t=A(X.createElement("option")),y=A(X.createElement("optgroup")),
x=t.clone();h=0;for(var B=g.children(),v=B.length;h<v;h++)if(""===B[h].value){w=z=B.eq(h);break}q.init(k,z,x);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?l(e,g,k):m(e,g,k,q)}}}}],hd=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var m=d.parent(),l=m.data("$selectController")||m.parent().data("$selectController");l&&l.databound?
d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=W.jQuery)&&Fa.fn.on?(A=Fa,E(Fa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",
!1,!1,!1),Gb("html",!1,!1,!0)):A=S,Xa.element=A,Zc(Xa),A(X).ready(function(){Wc(X,dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

},{}],4:[function(require,module,exports){
(function (Buffer){
var _ = require('underscore');
var crypto = require('crypto');

var KeenRequests = require('./lib/requests');
var KeenQuery = require('./lib/query');

function KeenApi(config) {
	if (!config) {
		throw new Error("The 'config' parameter must be specified and must be a JS object.");
	}
	if (!config.projectId) {
		throw new Error("The 'config' object must contain a 'projectId'.");
	}

	this.projectId = config.projectId;
	this.writeKey = config.writeKey;
	this.readKey = config.readKey;
	this.masterKey = config.masterKey;
	this.baseUrl = config.baseUrl || 'https://api.keen.io/';
	this.apiVersion = config.apiVersion || '3.0';

	var baseUrl = this.baseUrl;
	var apiVersion = this.apiVersion;
	var self = this;

	// Public Methods

	this.projects = {
		list: function(callback) {
			KeenRequests.get.call(self, self.masterKey, '/projects', null, callback);
		},
		view: function(projectId, callback) {
			KeenRequests.get.call(self, self.masterKey, '/projects/' + projectId, null, callback);
		}
	};

	this.events = {
		list: function(projectId, callback) {
			KeenRequests.get.call(self, self.masterKey, '/projects/' + projectId + '/events', null, callback);
		},
		insert: function(projectId, events, callback) {
			events = events || [];
			var data = {};
			events.forEach(function(event) {
				var collection = event.collection;
				if (typeof data[collection] == 'undefined') {
					data[collection] = [];
				}
				var item = (event.data || {});
				if (typeof event.keen == 'object') {
					item.keen = event.keen;
				}
				data[collection].push(item);
			});
			KeenRequests.post.call(self, self.writeKey, '/projects/' + projectId + '/events', data, callback);
		}
	};

	this.properties = {
		view: function(projectId, collection, property, callback) {
			KeenRequests.get.call(self, self.masterKey, '/projects/' + projectId + '/events/' + collection + '/properties/' + property, null, callback);
		},
		remove: function(projectId, collection, property, callback) {
			KeenRequests.del.call(self, self.masterKey, '/projects/' + projectId + '/events/' + collection + '/properties/' + property, callback);
		}
	};

	this.collections = {
		view: function(projectId, collection, callback) {
			KeenRequests.get.call(self, self.masterKey, '/projects/' + projectId + '/events/' + collection, null, callback);
		},
		remove: function(projectId, collection, callback) {
			KeenRequests.del.call(self, self.masterKey, '/projects/' + projectId + '/events/' + collection, callback);
		}
	};

	this.addEvent = function(eventCollection, event, callback) {
		if (!this.writeKey) {
			var errorMessage = "You must specify a non-null, non-empty 'writeKey' in your 'config' object when calling keen.configure()!";
			var error = new Error(errorMessage);
			if (callback) {
				callback(error);
			} else {
				throw error;
			}
			return;
		}

		KeenRequests.post.call(self, this.writeKey, "/projects/" + this.projectId + "/events/" + eventCollection, event, callback);
	};

	this.request = function(method, keyType, path, params, callback) {
		method = typeof method === 'string' && method.toLowerCase();
		keyType += 'Key';
		callback = callback || (typeof params === 'function') && params;

		if (typeof path === 'string') {
			path = '/projects/' + this.projectId + '/' + path.replace(/^\//,'');
		} else {
			throw new Error('\'path\' must be a string.');
		}

		if ( ! KeenRequests.hasOwnProperty(method)) {
			throw new Error('Method must be of type: GET/POST/DEL');
		}

		if (!this.hasOwnProperty(keyType)) {
			throw new Error('Key must be of type: master/write/read');
		}

		if (!this[keyType]) {
			throw new Error('You must specify a nun-null, non-empty \'' + keyType + '\' in your config object.');
		}

		if(method === 'post' || method === 'get') {
			return KeenRequests[method].call(self, this[keyType], path, params, callback);
		}

		KeenRequests[method].call(self, this[keyType], path, callback);
	};

	this.addEvents = function(events, callback) {
		if (!this.writeKey) {
			var errorMessage = "You must specify a non-null, non-empty 'writeKey' in your 'config' object when calling keen.configure()!";
			var error = new Error(errorMessage);
			if (callback) {
				callback(error);
			} else {
				throw error;
			}
			return;
		}

		KeenRequests.post.call(self, this.writeKey, "/projects/" + this.projectId + "/events", events, callback);
	};

	this.queries = {
		extraction: function(projectId, collection, params, callback){
			var requestParams = _.extend({}, params, { 'event_collection': collection });
			var path = '/projects/' + projectId + '/queries/extraction';
			KeenRequests.get.call(self, self.readKey, path, requestParams, callback);
		}
	};

	this.run = KeenQuery.client.run;
}

function configure(config) {
	return new KeenApi(config);
}

function encryptScopedKey(apiKey, options) {
	var iv = crypto.randomBytes(16);
	var cipher = crypto.createCipheriv("aes-256-cbc", apiKey, iv);
	var jsonOptions = JSON.stringify(options);
	var encryptOutput1 = cipher.update(jsonOptions, "utf8", "hex");
	var encryptOutput2 = cipher.final("hex");
	var ivPlusEncrypted = iv.toString("hex") + encryptOutput1 + encryptOutput2;
	return ivPlusEncrypted;
}

function decryptScopedKey(apiKey, scopedKey) {
	var hexedIv = scopedKey.substring(0, 32);
	var hexedCipherText = scopedKey.substring(32, scopedKey.length);
	var iv = new Buffer(hexedIv, "hex");
	var cipherText = new Buffer(hexedCipherText, "hex");
	var decipher = crypto.createDecipheriv("aes-256-cbc", apiKey, iv);
	var decryptOutput1 = decipher.update(cipherText);
	var decryptOutput2 = decipher.final();
	var decrypted = decryptOutput1 + decryptOutput2;
	return JSON.parse(decrypted);
}

module.exports = {
	configure: configure,
	encryptScopedKey: encryptScopedKey,
	decryptScopedKey: decryptScopedKey,
	Query: KeenQuery.Query
};

}).call(this,require("buffer").Buffer)
},{"./lib/query":5,"./lib/requests":6,"buffer":11,"crypto":18,"underscore":10}],5:[function(require,module,exports){
var _ = require('underscore');
var KeenRequests = require('./requests');

/*!
* -----------------
* Keen IO Query JS
* -----------------
*/

var Keen = {};

// ------------------------------
// Keen.Request
// ------------------------------

Keen.Request = function(){
  this.data = {};
  this.configure.apply(this, arguments);
}

Keen.Request.prototype.configure = function(client, queries, callback){
  this.client = client;
  this.queries = queries;
  this.callback = callback;
  this.run();
  return this;
};

Keen.Request.prototype.run = function(){
  var self = this,
      completions = 0,
      response = [];

  var handleResponse = function(err, res){
    if (err && self.callback) {
      return self.callback(err, null);
    }
    response[arguments[2]] = res, completions++;
    if (completions == self.queries.length) {
      self.data = (self.queries.length == 1) ? response[0] : response;
      if (self.callback) self.callback(null, self.data);
    }
  };

  _.each(self.queries, function(query, index){
    var data, path = '/projects/' + self.client.projectId;
    var callbackSequencer = function(err, res){
      handleResponse(err, res, index);
    };

    if (query instanceof Keen.Query) {
      path += query.path;
      data = query.params || {};
    }
    /* TODO: Test and deploy this
    else if (_.isString(query)) {
      path += '/saved_queries/' + query + '/result';
      data = { api_key: self.client.readKey };
    }*/
    else {
      throw new Error('Query #' + (index+1)  +' is not valid');

    }

    KeenRequests.get.call(self.client, self.client.readKey, path, data, callbackSequencer);
  });

  return self;
};


// ------------------------------
// Keen.Query
// ------------------------------

Keen.Query = function(){
  this.configure.apply(this, arguments);
};

Keen.Query.prototype.configure = function(analysisType, params){
  //if (!collection) throw new Error('Event Collection name is required');
  var self = this;
  self.path = '/queries/' + analysisType;
  self.params = {};
  self.set(params);
  return self;
};

Keen.Query.prototype.get = function(attribute) {
  if (this.params) {
    return this.params[attribute] || null;
  }
};

Keen.Query.prototype.set = function(attributes) {
  var self = this;
  _.each(attributes, function(v, k){
    var key = k, value = v;
    if (k.match(new RegExp("[A-Z]"))) {
      key = k.replace(/([A-Z])/g, function($1) { return "_"+$1.toLowerCase(); });
    }
    self.params[key] = value;

    if (_.isArray(value)) {
      _.each(value, function(dv, index){
        if (_.isObject(dv)) {
          _.each(dv, function(deepValue, deepKey){
            if (deepKey.match(new RegExp("[A-Z]"))) {
              var _deepKey = deepKey.replace(/([A-Z])/g, function($1) { return "_"+$1.toLowerCase(); });
              delete self.params[key][index][deepKey];
              self.params[key][index][_deepKey] = deepValue;
            }
          });
        }
      });
    }

  });
  return self;
};


// Export Methods
// ------------------------------
module.exports = {
  client: {
    run: function(query, callback){
      if (!query) throw new Error('At least one query is required');
      var queries = (_.isArray(query)) ? query : [query];
      return new Keen.Request(this, queries, callback);
    }
  },
  Query: Keen.Query
};

},{"./requests":6,"underscore":10}],6:[function(require,module,exports){
var rest = require('superagent');
var crypto = require('crypto');

// Handle logic of processing response, including error messages
// The error handling should be strengthened over time to be more
// meaningful and robust
// ---------------------------------------------------------------

function processResponse(err, res, callback) {
  callback = callback || function() {};

  if (res && !res.ok && !err) {
    var is_err = res.body && res.body.error_code;
    err = new Error(is_err ? res.body.message : 'Unknown error occurred');
    err.code = is_err ? res.body.error_code : 'UnknownError';
  }

  if (err) return callback(err);
  return callback(null, res.body);
}

function buildQueryString(params){
  var query = [];
  for (var key in params) {
    if (params[key]) {
      var value = params[key];
      if (Object.prototype.toString.call(value) !== '[object String]') {
        value = JSON.stringify(value);
      }
      value = encodeURIComponent(value);
      query.push(key + '=' + value);
    }
  }
  return "?" + query.join('&');
}

module.exports = {
  get: function(apiKey, path, data, callback) {
    rest
    .get(this.baseUrl + this.apiVersion + path + buildQueryString(data))
    .set('Authorization', apiKey)
    .end(function(err, res) {
      processResponse(err, res, callback);
    });
  },
  post: function(apiKey, path, data, callback) {
    rest
    .post(this.baseUrl + this.apiVersion + path)
    .set('Authorization', apiKey)
    .set('Content-Type', 'application/json')
    .send(data || {})
    .end(function(err, res) {
      processResponse(err, res, callback);
    });
  },
  del: function(apiKey, path, callback) {
    rest
    .del(this.baseUrl + this.apiVersion + path)
    .set('Authorization', apiKey)
    .set('Content-Length', 0)
    .end(function(err, res) {
      processResponse(err, res, callback);
    });
  }
};

},{"crypto":18,"superagent":7}],7:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

function getXHR() {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
}

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  this.text = this.req.method !='HEAD' 
     ? this.xhr.responseText 
     : null;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && str.length
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self); 
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    self.callback(err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  if (2 == fn.length) return fn(err, res);
  if (err) return this.emit('error', err);
  fn(res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;
    if (0 == xhr.status) {
      if (self.aborted) return self.timeoutError();
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  if (xhr.upload) {
    xhr.upload.onprogress = function(e){
      e.percent = e.loaded / e.total * 100;
      self.emit('progress', e);
    };
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":8,"reduce":9}],8:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],9:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],10:[function(require,module,exports){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.5.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed > result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array, using the modern version of the 
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from an array.
  // If **n** is not specified, returns a single random element from the array.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (arguments.length < 2 || guard) {
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, value, context) {
      var result = {};
      var iterator = value == null ? _.identity : lookupIterator(value);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) {
      return array[array.length - 1];
    } else {
      return slice.call(array, Math.max(array.length - n, 0));
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, "length").concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}],11:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":12,"ieee754":13,"is-array":14}],12:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],13:[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],14:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],15:[function(require,module,exports){
(function (Buffer){
var createHash = require('sha.js')

var md5 = toConstructor(require('./md5'))
var rmd160 = toConstructor(require('ripemd160'))

function toConstructor (fn) {
  return function () {
    var buffers = []
    var m= {
      update: function (data, enc) {
        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
        buffers.push(data)
        return this
      },
      digest: function (enc) {
        var buf = Buffer.concat(buffers)
        var r = fn(buf)
        buffers = null
        return enc ? r.toString(enc) : r
      }
    }
    return m
  }
}

module.exports = function (alg) {
  if('md5' === alg) return new md5()
  if('rmd160' === alg) return new rmd160()
  return createHash(alg)
}

}).call(this,require("buffer").Buffer)
},{"./md5":19,"buffer":11,"ripemd160":20,"sha.js":22}],16:[function(require,module,exports){
(function (Buffer){
var createHash = require('./create-hash')

var blocksize = 64
var zeroBuffer = new Buffer(blocksize); zeroBuffer.fill(0)

module.exports = Hmac

function Hmac (alg, key) {
  if(!(this instanceof Hmac)) return new Hmac(alg, key)
  this._opad = opad
  this._alg = alg

  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

  if(key.length > blocksize) {
    key = createHash(alg).update(key).digest()
  } else if(key.length < blocksize) {
    key = Buffer.concat([key, zeroBuffer], blocksize)
  }

  var ipad = this._ipad = new Buffer(blocksize)
  var opad = this._opad = new Buffer(blocksize)

  for(var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  this._hash = createHash(alg).update(ipad)
}

Hmac.prototype.update = function (data, enc) {
  this._hash.update(data, enc)
  return this
}

Hmac.prototype.digest = function (enc) {
  var h = this._hash.digest()
  return createHash(this._alg).update(this._opad).update(h).digest(enc)
}


}).call(this,require("buffer").Buffer)
},{"./create-hash":15,"buffer":11}],17:[function(require,module,exports){
(function (Buffer){
var intSize = 4;
var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
var chrsz = 8;

function toArray(buf, bigEndian) {
  if ((buf.length % intSize) !== 0) {
    var len = buf.length + (intSize - (buf.length % intSize));
    buf = Buffer.concat([buf, zeroBuffer], len);
  }

  var arr = [];
  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
  for (var i = 0; i < buf.length; i += intSize) {
    arr.push(fn.call(buf, i));
  }
  return arr;
}

function toBuffer(arr, size, bigEndian) {
  var buf = new Buffer(size);
  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
  for (var i = 0; i < arr.length; i++) {
    fn.call(buf, arr[i], i * 4, true);
  }
  return buf;
}

function hash(buf, fn, hashSize, bigEndian) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
  return toBuffer(arr, hashSize, bigEndian);
}

module.exports = { hash: hash };

}).call(this,require("buffer").Buffer)
},{"buffer":11}],18:[function(require,module,exports){
(function (Buffer){
var rng = require('./rng')

function error () {
  var m = [].slice.call(arguments).join(' ')
  throw new Error([
    m,
    'we accept pull requests',
    'http://github.com/dominictarr/crypto-browserify'
    ].join('\n'))
}

exports.createHash = require('./create-hash')

exports.createHmac = require('./create-hmac')

exports.randomBytes = function(size, callback) {
  if (callback && callback.call) {
    try {
      callback.call(this, undefined, new Buffer(rng(size)))
    } catch (err) { callback(err) }
  } else {
    return new Buffer(rng(size))
  }
}

function each(a, f) {
  for(var i in a)
    f(a[i], i)
}

exports.getHashes = function () {
  return ['sha1', 'sha256', 'md5', 'rmd160']

}

var p = require('./pbkdf2')(exports.createHmac)
exports.pbkdf2 = p.pbkdf2
exports.pbkdf2Sync = p.pbkdf2Sync


// the least I can do is make error messages for the rest of the node.js/crypto api.
each(['createCredentials'
, 'createCipher'
, 'createCipheriv'
, 'createDecipher'
, 'createDecipheriv'
, 'createSign'
, 'createVerify'
, 'createDiffieHellman'
], function (name) {
  exports[name] = function () {
    error('sorry,', name, 'is not implemented yet')
  }
})

}).call(this,require("buffer").Buffer)
},{"./create-hash":15,"./create-hmac":16,"./pbkdf2":26,"./rng":27,"buffer":11}],19:[function(require,module,exports){
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

var helpers = require('./helpers');

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function md5(buf) {
  return helpers.hash(buf, core_md5, 16);
};

},{"./helpers":17}],20:[function(require,module,exports){
(function (Buffer){

module.exports = ripemd160



/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// Constants table
var zl = [
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
var zr = [
    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
var sl = [
     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
var sr = [
    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

var bytesToWords = function (bytes) {
  var words = [];
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32);
  }
  return words;
};

var wordsToBytes = function (words) {
  var bytes = [];
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
  }
  return bytes;
};

var processBlock = function (H, M, offset) {

  // Swap endian
  for (var i = 0; i < 16; i++) {
    var offset_i = offset + i;
    var M_offset_i = M[offset_i];

    // Swap
    M[offset_i] = (
        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    );
  }

  // Working variables
  var al, bl, cl, dl, el;
  var ar, br, cr, dr, er;

  ar = al = H[0];
  br = bl = H[1];
  cr = cl = H[2];
  dr = dl = H[3];
  er = el = H[4];
  // Computation
  var t;
  for (var i = 0; i < 80; i += 1) {
    t = (al +  M[offset+zl[i]])|0;
    if (i<16){
        t +=  f1(bl,cl,dl) + hl[0];
    } else if (i<32) {
        t +=  f2(bl,cl,dl) + hl[1];
    } else if (i<48) {
        t +=  f3(bl,cl,dl) + hl[2];
    } else if (i<64) {
        t +=  f4(bl,cl,dl) + hl[3];
    } else {// if (i<80) {
        t +=  f5(bl,cl,dl) + hl[4];
    }
    t = t|0;
    t =  rotl(t,sl[i]);
    t = (t+el)|0;
    al = el;
    el = dl;
    dl = rotl(cl, 10);
    cl = bl;
    bl = t;

    t = (ar + M[offset+zr[i]])|0;
    if (i<16){
        t +=  f5(br,cr,dr) + hr[0];
    } else if (i<32) {
        t +=  f4(br,cr,dr) + hr[1];
    } else if (i<48) {
        t +=  f3(br,cr,dr) + hr[2];
    } else if (i<64) {
        t +=  f2(br,cr,dr) + hr[3];
    } else {// if (i<80) {
        t +=  f1(br,cr,dr) + hr[4];
    }
    t = t|0;
    t =  rotl(t,sr[i]) ;
    t = (t+er)|0;
    ar = er;
    er = dr;
    dr = rotl(cr, 10);
    cr = br;
    br = t;
  }
  // Intermediate hash value
  t    = (H[1] + cl + dr)|0;
  H[1] = (H[2] + dl + er)|0;
  H[2] = (H[3] + el + ar)|0;
  H[3] = (H[4] + al + br)|0;
  H[4] = (H[0] + bl + cr)|0;
  H[0] =  t;
};

function f1(x, y, z) {
  return ((x) ^ (y) ^ (z));
}

function f2(x, y, z) {
  return (((x)&(y)) | ((~x)&(z)));
}

function f3(x, y, z) {
  return (((x) | (~(y))) ^ (z));
}

function f4(x, y, z) {
  return (((x) & (z)) | ((y)&(~(z))));
}

function f5(x, y, z) {
  return ((x) ^ ((y) |(~(z))));
}

function rotl(x,n) {
  return (x<<n) | (x>>>(32-n));
}

function ripemd160(message) {
  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

  if (typeof message == 'string')
    message = new Buffer(message, 'utf8');

  var m = bytesToWords(message);

  var nBitsLeft = message.length * 8;
  var nBitsTotal = message.length * 8;

  // Add padding
  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
  );

  for (var i=0 ; i<m.length; i += 16) {
    processBlock(H, m, i);
  }

  // Swap endian
  for (var i = 0; i < 5; i++) {
      // Shortcut
    var H_i = H[i];

    // Swap
    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
  }

  var digestbytes = wordsToBytes(H);
  return new Buffer(digestbytes);
}



}).call(this,require("buffer").Buffer)
},{"buffer":11}],21:[function(require,module,exports){
var u = require('./util')
var write = u.write
var fill = u.zeroFill

module.exports = function (Buffer) {

  //prototype class for hash functions
  function Hash (blockSize, finalSize) {
    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
    this._finalSize = finalSize
    this._blockSize = blockSize
    this._len = 0
    this._s = 0
  }

  Hash.prototype.init = function () {
    this._s = 0
    this._len = 0
  }

  function lengthOf(data, enc) {
    if(enc == null)     return data.byteLength || data.length
    if(enc == 'ascii' || enc == 'binary')  return data.length
    if(enc == 'hex')    return data.length/2
    if(enc == 'base64') return data.length/3
  }

  Hash.prototype.update = function (data, enc) {
    var bl = this._blockSize

    //I'd rather do this with a streaming encoder, like the opposite of
    //http://nodejs.org/api/string_decoder.html
    var length
      if(!enc && 'string' === typeof data)
        enc = 'utf8'

    if(enc) {
      if(enc === 'utf-8')
        enc = 'utf8'

      if(enc === 'base64' || enc === 'utf8')
        data = new Buffer(data, enc), enc = null

      length = lengthOf(data, enc)
    } else
      length = data.byteLength || data.length

    var l = this._len += length
    var s = this._s = (this._s || 0)
    var f = 0
    var buffer = this._block
    while(s < l) {
      var t = Math.min(length, f + bl)
      write(buffer, data, enc, s%bl, f, t)
      var ch = (t - f);
      s += ch; f += ch

      if(!(s%bl))
        this._update(buffer)
    }
    this._s = s

    return this

  }

  Hash.prototype.digest = function (enc) {
    var bl = this._blockSize
    var fl = this._finalSize
    var len = this._len*8

    var x = this._block

    var bits = len % (bl*8)

    //add end marker, so that appending 0's creats a different hash.
    x[this._len % bl] = 0x80
    fill(this._block, this._len % bl + 1)

    if(bits >= fl*8) {
      this._update(this._block)
      u.zeroFill(this._block, 0)
    }

    //TODO: handle case where the bit length is > Math.pow(2, 29)
    x.writeInt32BE(len, fl + 4) //big endian

    var hash = this._update(this._block) || this._hash()
    if(enc == null) return hash
    return hash.toString(enc)
  }

  Hash.prototype._update = function () {
    throw new Error('_update must be implemented by subclass')
  }

  return Hash
}

},{"./util":25}],22:[function(require,module,exports){
var exports = module.exports = function (alg) {
  var Alg = exports[alg]
  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
  return new Alg()
}

var Buffer = require('buffer').Buffer
var Hash   = require('./hash')(Buffer)

exports.sha =
exports.sha1 = require('./sha1')(Buffer, Hash)
exports.sha256 = require('./sha256')(Buffer, Hash)

},{"./hash":21,"./sha1":23,"./sha256":24,"buffer":11}],23:[function(require,module,exports){
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */
module.exports = function (Buffer, Hash) {

  var inherits = require('util').inherits

  inherits(Sha1, Hash)

  var A = 0|0
  var B = 4|0
  var C = 8|0
  var D = 12|0
  var E = 16|0

  var BE = false
  var LE = true

  var W = new Int32Array(80)

  var POOL = []

  function Sha1 () {
    if(POOL.length)
      return POOL.pop().init()

    if(!(this instanceof Sha1)) return new Sha1()
    this._w = W
    Hash.call(this, 16*4, 14*4)
  
    this._h = null
    this.init()
  }

  Sha1.prototype.init = function () {
    this._a = 0x67452301
    this._b = 0xefcdab89
    this._c = 0x98badcfe
    this._d = 0x10325476
    this._e = 0xc3d2e1f0

    Hash.prototype.init.call(this)
    return this
  }

  Sha1.prototype._POOL = POOL

  // assume that array is a Uint32Array with length=16,
  // and that if it is the last block, it already has the length and the 1 bit appended.


  var isDV = new Buffer(1) instanceof DataView
  function readInt32BE (X, i) {
    return isDV
      ? X.getInt32(i, false)
      : X.readInt32BE(i)
  }

  Sha1.prototype._update = function (array) {

    var X = this._block
    var h = this._h
    var a, b, c, d, e, _a, _b, _c, _d, _e

    a = _a = this._a
    b = _b = this._b
    c = _c = this._c
    d = _d = this._d
    e = _e = this._e

    var w = this._w

    for(var j = 0; j < 80; j++) {
      var W = w[j]
        = j < 16
        //? X.getInt32(j*4, false)
        //? readInt32BE(X, j*4) //*/ X.readInt32BE(j*4) //*/
        ? X.readInt32BE(j*4)
        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

      var t =
        add(
          add(rol(a, 5), sha1_ft(j, b, c, d)),
          add(add(e, W), sha1_kt(j))
        );

      e = d
      d = c
      c = rol(b, 30)
      b = a
      a = t
    }

    this._a = add(a, _a)
    this._b = add(b, _b)
    this._c = add(c, _c)
    this._d = add(d, _d)
    this._e = add(e, _e)
  }

  Sha1.prototype._hash = function () {
    if(POOL.length < 100) POOL.push(this)
    var H = new Buffer(20)
    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
    H.writeInt32BE(this._a|0, A)
    H.writeInt32BE(this._b|0, B)
    H.writeInt32BE(this._c|0, C)
    H.writeInt32BE(this._d|0, D)
    H.writeInt32BE(this._e|0, E)
    return H
  }

  /*
   * Perform the appropriate triplet combination function for the current
   * iteration
   */
  function sha1_ft(t, b, c, d) {
    if(t < 20) return (b & c) | ((~b) & d);
    if(t < 40) return b ^ c ^ d;
    if(t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }

  /*
   * Determine the appropriate additive constant for the current iteration
   */
  function sha1_kt(t) {
    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
           (t < 60) ? -1894007588 : -899497514;
  }

  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
   *
   */
  function add(x, y) {
    return (x + y ) | 0
  //lets see how this goes on testling.
  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  //  return (msw << 16) | (lsw & 0xFFFF);
  }

  /*
   * Bitwise rotate a 32-bit number to the left.
   */
  function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  return Sha1
}

},{"util":31}],24:[function(require,module,exports){

/**
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
 * in FIPS 180-2
 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 *
 */

var inherits = require('util').inherits
var BE       = false
var LE       = true
var u        = require('./util')

module.exports = function (Buffer, Hash) {

  var K = [
      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
    ]

  inherits(Sha256, Hash)
  var W = new Array(64)
  var POOL = []
  function Sha256() {
    if(POOL.length) {
      //return POOL.shift().init()
    }
    //this._data = new Buffer(32)

    this.init()

    this._w = W //new Array(64)

    Hash.call(this, 16*4, 14*4)
  };

  Sha256.prototype.init = function () {

    this._a = 0x6a09e667|0
    this._b = 0xbb67ae85|0
    this._c = 0x3c6ef372|0
    this._d = 0xa54ff53a|0
    this._e = 0x510e527f|0
    this._f = 0x9b05688c|0
    this._g = 0x1f83d9ab|0
    this._h = 0x5be0cd19|0

    this._len = this._s = 0

    return this
  }

  var safe_add = function(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  function S (X, n) {
    return (X >>> n) | (X << (32 - n));
  }

  function R (X, n) {
    return (X >>> n);
  }

  function Ch (x, y, z) {
    return ((x & y) ^ ((~x) & z));
  }

  function Maj (x, y, z) {
    return ((x & y) ^ (x & z) ^ (y & z));
  }

  function Sigma0256 (x) {
    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
  }

  function Sigma1256 (x) {
    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
  }

  function Gamma0256 (x) {
    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
  }

  function Gamma1256 (x) {
    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
  }

  Sha256.prototype._update = function(m) {
    var M = this._block
    var W = this._w
    var a, b, c, d, e, f, g, h
    var T1, T2

    a = this._a | 0
    b = this._b | 0
    c = this._c | 0
    d = this._d | 0
    e = this._e | 0
    f = this._f | 0
    g = this._g | 0
    h = this._h | 0

    for (var j = 0; j < 64; j++) {
      var w = W[j] = j < 16
        ? M.readInt32BE(j * 4)
        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

      T2 = Sigma0256(a) + Maj(a, b, c);
      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
    }

    this._a = (a + this._a) | 0
    this._b = (b + this._b) | 0
    this._c = (c + this._c) | 0
    this._d = (d + this._d) | 0
    this._e = (e + this._e) | 0
    this._f = (f + this._f) | 0
    this._g = (g + this._g) | 0
    this._h = (h + this._h) | 0

  };

  Sha256.prototype._hash = function () {
    if(POOL.length < 10)
      POOL.push(this)

    var H = new Buffer(32)

    H.writeInt32BE(this._a,  0)
    H.writeInt32BE(this._b,  4)
    H.writeInt32BE(this._c,  8)
    H.writeInt32BE(this._d, 12)
    H.writeInt32BE(this._e, 16)
    H.writeInt32BE(this._f, 20)
    H.writeInt32BE(this._g, 24)
    H.writeInt32BE(this._h, 28)

    return H
  }

  return Sha256

}

},{"./util":25,"util":31}],25:[function(require,module,exports){
exports.write = write
exports.zeroFill = zeroFill

exports.toString = toString

function write (buffer, string, enc, start, from, to, LE) {
  var l = (to - from)
  if(enc === 'ascii' || enc === 'binary') {
    for( var i = 0; i < l; i++) {
      buffer[start + i] = string.charCodeAt(i + from)
    }
  }
  else if(enc == null) {
    for( var i = 0; i < l; i++) {
      buffer[start + i] = string[i + from]
    }
  }
  else if(enc === 'hex') {
    for(var i = 0; i < l; i++) {
      var j = from + i
      buffer[start + i] = parseInt(string[j*2] + string[(j*2)+1], 16)
    }
  }
  else if(enc === 'base64') {
    throw new Error('base64 encoding not yet supported')
  }
  else
    throw new Error(enc +' encoding not yet supported')
}

//always fill to the end!
function zeroFill(buf, from) {
  for(var i = from; i < buf.length; i++)
    buf[i] = 0
}


},{}],26:[function(require,module,exports){
(function (Buffer){
// JavaScript PBKDF2 Implementation
// Based on http://git.io/qsv2zw
// Licensed under LGPL v3
// Copyright (c) 2013 jduncanator

var blocksize = 64
var zeroBuffer = new Buffer(blocksize); zeroBuffer.fill(0)

module.exports = function (createHmac, exports) {
  exports = exports || {}

  exports.pbkdf2 = function(password, salt, iterations, keylen, cb) {
    if('function' !== typeof cb)
      throw new Error('No callback provided to pbkdf2');
    setTimeout(function () {
      cb(null, exports.pbkdf2Sync(password, salt, iterations, keylen))
    })
  }

  exports.pbkdf2Sync = function(key, salt, iterations, keylen) {
    if('number' !== typeof iterations)
      throw new TypeError('Iterations not a number')
    if(iterations < 0)
      throw new TypeError('Bad iterations')
    if('number' !== typeof keylen)
      throw new TypeError('Key length not a number')
    if(keylen < 0)
      throw new TypeError('Bad key length')

    //stretch key to the correct length that hmac wants it,
    //otherwise this will happen every time hmac is called
    //twice per iteration.
    var key = !Buffer.isBuffer(key) ? new Buffer(key) : key

    if(key.length > blocksize) {
      key = createHash(alg).update(key).digest()
    } else if(key.length < blocksize) {
      key = Buffer.concat([key, zeroBuffer], blocksize)
    }

    var HMAC;
    var cplen, p = 0, i = 1, itmp = new Buffer(4), digtmp;
    var out = new Buffer(keylen);
    out.fill(0);
    while(keylen) {
      if(keylen > 20)
        cplen = 20;
      else
        cplen = keylen;

      /* We are unlikely to ever use more than 256 blocks (5120 bits!)
         * but just in case...
         */
        itmp[0] = (i >> 24) & 0xff;
        itmp[1] = (i >> 16) & 0xff;
          itmp[2] = (i >> 8) & 0xff;
          itmp[3] = i & 0xff;

          HMAC = createHmac('sha1', key);
          HMAC.update(salt)
          HMAC.update(itmp);
        digtmp = HMAC.digest();
        digtmp.copy(out, p, 0, cplen);

        for(var j = 1; j < iterations; j++) {
          HMAC = createHmac('sha1', key);
          HMAC.update(digtmp);
          digtmp = HMAC.digest();
          for(var k = 0; k < cplen; k++) {
            out[k] ^= digtmp[k];
          }
        }
      keylen -= cplen;
      i++;
      p += cplen;
    }

    return out;
  }

  return exports
}

}).call(this,require("buffer").Buffer)
},{"buffer":11}],27:[function(require,module,exports){
(function (Buffer){
// Original code adapted from Robert Kieffer.
// details at https://github.com/broofa/node-uuid


(function() {
  var _global = this;

  var mathRNG, whatwgRNG;

  // NOTE: Math.random() does not guarantee "cryptographic quality"
  mathRNG = function(size) {
    var bytes = new Buffer(size);
    var r;

    for (var i = 0, r; i < size; i++) {
      if ((i & 0x03) == 0) r = Math.random() * 0x100000000;
      bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return bytes;
  }

  if (_global.crypto && crypto.getRandomValues) {
    whatwgRNG = function(size) {
      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
      crypto.getRandomValues(bytes);
      return bytes;
    }
  }

  module.exports = whatwgRNG || mathRNG;

}())

}).call(this,require("buffer").Buffer)
},{"buffer":11}],28:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],29:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],30:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],31:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require("qvMYcC"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":30,"inherits":28,"qvMYcC":29}],32:[function(require,module,exports){
'use strict';

module.exports = /*@ngInject*/
  function fooController($scope, $state, $timeout) {
    $scope.navigateToRate = function(){
      angular.element('.big-section').addClass('animated fadeOutDown');
      $timeout(function(){
        $state.go('rate');
      }, 600);
    };
  };

},{}],33:[function(require,module,exports){
'use strict';

module.exports =
  angular.module('zuluapp.foo', [])
  .config(function ($stateProvider) {
    $stateProvider
    .state('rate', {
      url: '/rate',
      templateUrl: 'app/foo/layout.html',
      controller: 'rateController'
    })
    .state('home', {
      url: '',
      templateUrl: 'app/foo/home.html',
      controller: 'homeController'
    });
  })
  .controller('rateController', require('./rateController'))
  .controller('homeController', require('./homeController'));

},{"./homeController":32,"./rateController":34}],34:[function(require,module,exports){
'use strict';
var Keen = require('keen.io');

module.exports = /*@ngInject*/
  function fooController($scope, $http, $timeout) {
  	var professionals = null;
    var ratedProfessionals = {count:0};
  	// todo : move this in a service
  	var keenClient = Keen.configure({
  		projectId : '549f3c95d2eaaa02da157052',
  		writeKey : '4aafd774120ea18ea0b8522458b590384916fa73a164f41d7bcc4496ad48965fceff0c7e331f7af3cf059f9341df2566a07acd4a804ebc612c13cda8ef8b7681fe87db390a6a05e3ef0e8655dd83a810b2bfea073681cff011c18f805a63548b9da0b5c8b821b11020de6aa1a93eee0c',
  		readKey : '9222548f081068ff4fdc103eb1be1279ca4cd679093f92db2ffabe5daf9d93ece5e0ca8f82bdba5a3d75dcd74cb3c7944724e954d31dd3bd4930aa932011c2d2fd11e749f44d71456f4b68ea36316b90f0a07137a4dded3ee83136cb161538d9d87baaa4aaab21be7b50e952bb73857b'
  	});
    
    $scope.currentStats = {
      average: 0,
      visible: false
    };
    $scope.currentAverage = 0;
    $scope.NUMBER_IN_CURRENT_STATS = 10;
    $scope.currentRatedProfessional = null;

  	function getNextProfesionnal(){
  		var professionnalIndex = Math.floor(Math.random() * professionals.length);
        var professional = professionals[professionnalIndex];
        while(ratedProfessionals[professional.ID] && ratedProfessionals.count < professional.length){
            if(professionnalIndex == professionals.length){
                professionnalIndex = 0;
            } else{
                professionnalIndex++
            }
            professional = professionals[professionnalIndex];
        }
        $scope.currentRatedProfessional = professionals[professionnalIndex];
  	}

    function updateCurrentAverage(rating){
      var numberOfCurrentRated = ratedProfessionals.count % $scope.NUMBER_IN_CURRENT_STATS; 
      $scope.currentStats.average = (($scope.currentStats.average * numberOfCurrentRated) + rating) / (numberOfCurrentRated + 1);
    }

    function addToRated(ID, rating){
      updateCurrentAverage(rating);
      ratedProfessionals[ID] = rating;
      ratedProfessionals.count++;
    }

    function displayStats(){
      $scope.currentStats.visible = true;
      angular.element('#stats').removeClass('fadeOutDown');
      angular.element('#stats').addClass('animated fadeInDown');
    }

    function displayNextProfessional(delay){
      $timeout(function(){
        getNextProfesionnal();
        angular.element('#professional').addClass('animated fadeInDown'); 
        angular.element('#professional').removeClass('fadeOutDown');
      }, delay || 1000);
    }

    function getNextView(){
      if (ratedProfessionals.count > 0 && ratedProfessionals.count % $scope.NUMBER_IN_CURRENT_STATS == 0) {
        displayStats();
      } else{
        displayNextProfessional();
      }
    }

    $scope.continue = function(){
      angular.element('#stats').removeClass('fadeInDown');
      angular.element('#stats').addClass('fadeOutDown');
      $timeout(function(){
        $scope.currentStats.visible = false;
        $scope.currentStats.average = 0;
      }, 1000);
      displayNextProfessional();
    };

  	$scope.rate = function(rating, event){
  		event.currentTarget.blur();
  		angular.element('#professional').addClass('animated fadeOutDown');
  		// keenClient.addEvent('rating', {professionalID: $scope.currentRatedProfessional.ID, rating:rating});
      addToRated($scope.currentRatedProfessional.ID, rating);
      getNextView()
  	};

  	$http.get('assets/data/professionals.json')
  	.success(function(data){
		professionals = data;
    // getNextProfesionnal()
    displayNextProfessional(1);
	});
  };

},{"keen.io":4}],35:[function(require,module,exports){
'use strict';

module.exports =
  angular.module('zuluapp', [
    'ui.bootstrap',
    'ui.router',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    //html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    //useful directives, filters, services shared across the app
    //example app module:
    require('./foo').name,
  ]);

},{"../../../tmp/templates":37,"./foo":33}],36:[function(require,module,exports){
'use strict';

//browserify-shim dependencies (can be edited in package.json)
require('angular');

  require('angular-ui-bootstrap');
  require('angular-ui-router');
//app entry point
require('./app');

},{"./app":35,"angular":3,"angular-ui-bootstrap":1,"angular-ui-router":2}],37:[function(require,module,exports){
module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/foo/home.html","<div class=\"big-section\" class=\"text-center\">\n	<img src=\"assets/images/gentlemen.png\" height=\"250\" class=\"hidden-xs\">\n	<img src=\"assets/images/gentlemen.png\" height=\"100\" class=\"visible-xs-block\">\n	<h1>The Zuluapp</h1>\n	<h2>Gentlemen\'s best time killer</h2>\n	<button class=\"rounded-button\" ng-click=\"navigateToRate()\">Start now</button>\n</div>");
$templateCache.put("app/foo/layout.html","<div id=\"stats\" class=\"big-section\" ng-show=\"currentStats.visible\">\n	<div class=\"average-title\" >Last {{NUMBER_IN_CURRENT_STATS}} average is</div>\n	<div class=\"average\">{{currentStats.average}}</div>\n	<button class=\"rounded-button\" ng-click=\"continue()\">Continue</button>\n</div>\n<div id=\"professional\" class=\"text-center\" ng-hide=\"currentStats.visible || !currentRatedProfessional\">\n	<img class=\"img-circle\" ng-src=\"{{currentRatedProfessional.pictureUrl}}\">\n	<h1>{{currentRatedProfessional.name}}</h1>\n	<p class=\"profession\">{{currentRatedProfessional.profession}}</p>\n	<div class=\"row text-center rating-box\">\n		<h4>What\'s her gentleman rate ?</h4>\n		<div class=\"col-sm-6 col-sm-offset-3\">\n			<img src=\"assets/images/bored.svg\">\n			<div class=\"btn-group visible-xs-inline-block visible-sm-inline-block\" role=\"group\">\n				<button class=\"btn btn-sm btn-default\" ng-repeat=\"rating in [1,2,3,4,5]\" ng-click=\"rate(rating, $event)\">&nbsp;{{rating}}&nbsp;</button>\n			</div>\n			<div class=\"btn-group hidden-sm hidden-xs\" role=\"group\">\n				<button class=\"btn btn-lg btn-default\" ng-repeat=\"rating in [1,2,3,4,5]\" ng-click=\"rate(rating, $event)\">&nbsp;{{rating}}&nbsp;</button>\n			</div>\n			<img src=\"assets/images/excited.svg\">\n		</div>\n	</div>\n</div>\n");}]);
},{}]},{},[36])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYm9vdHN0cmFwL3VpLWJvb3RzdHJhcC10cGxzLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktcm91dGVyL3JlbGVhc2UvYW5ndWxhci11aS1yb3V0ZXIubWluLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci9hbmd1bGFyLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9saWIvcXVlcnkuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbGliL3JlcXVlc3RzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L25vZGVfbW9kdWxlcy9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pcy1hcnJheS9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2NyeXB0by1icm93c2VyaWZ5L2NyZWF0ZS1oYXNoLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvY3JlYXRlLWhtYWMuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9oZWxwZXJzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9tZDUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcmlwZW1kMTYwL2xpYi9yaXBlbWQxNjAuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2hhc2guanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGExLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGEyNTYuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL3V0aWwuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9wYmtkZjIuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ybmcuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvZm9vL2hvbWVDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL3NyYy9tb2R1bGVzL2FwcC9mb28vaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvYXBwL2Zvby9yYXRlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvdG1wL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIGFuZ3VsYXItdWktYm9vdHN0cmFwXG4gKiBodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwL1xuXG4gKiBWZXJzaW9uOiAwLjExLjIgLSAyMDE0LTA5LTI2XG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXBcIixbXCJ1aS5ib290c3RyYXAudHBsc1wiLFwidWkuYm9vdHN0cmFwLnRyYW5zaXRpb25cIixcInVpLmJvb3RzdHJhcC5jb2xsYXBzZVwiLFwidWkuYm9vdHN0cmFwLmFjY29yZGlvblwiLFwidWkuYm9vdHN0cmFwLmFsZXJ0XCIsXCJ1aS5ib290c3RyYXAuYmluZEh0bWxcIixcInVpLmJvb3RzdHJhcC5idXR0b25zXCIsXCJ1aS5ib290c3RyYXAuY2Fyb3VzZWxcIixcInVpLmJvb3RzdHJhcC5kYXRlcGFyc2VyXCIsXCJ1aS5ib290c3RyYXAucG9zaXRpb25cIixcInVpLmJvb3RzdHJhcC5kYXRlcGlja2VyXCIsXCJ1aS5ib290c3RyYXAuZHJvcGRvd25cIixcInVpLmJvb3RzdHJhcC5tb2RhbFwiLFwidWkuYm9vdHN0cmFwLnBhZ2luYXRpb25cIixcInVpLmJvb3RzdHJhcC50b29sdGlwXCIsXCJ1aS5ib290c3RyYXAucG9wb3ZlclwiLFwidWkuYm9vdHN0cmFwLnByb2dyZXNzYmFyXCIsXCJ1aS5ib290c3RyYXAucmF0aW5nXCIsXCJ1aS5ib290c3RyYXAudGFic1wiLFwidWkuYm9vdHN0cmFwLnRpbWVwaWNrZXJcIixcInVpLmJvb3RzdHJhcC50eXBlYWhlYWRcIl0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRwbHNcIixbXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWxcIixcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLFwidGVtcGxhdGUvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbFwiLFwidGVtcGxhdGUvY2Fyb3VzZWwvc2xpZGUuaHRtbFwiLFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWxcIixcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIixcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLFwidGVtcGxhdGUvZGF0ZXBpY2tlci9wb3B1cC5odG1sXCIsXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3llYXIuaHRtbFwiLFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIixcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnZXIuaHRtbFwiLFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmh0bWxcIixcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXVuc2FmZS1wb3B1cC5odG1sXCIsXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtcG9wdXAuaHRtbFwiLFwidGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIixcInRlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sXCIsXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCIsXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sXCIsXCJ0ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWxcIixcInRlbXBsYXRlL3RhYnMvdGFiLmh0bWxcIixcInRlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWxcIixcInRlbXBsYXRlL3RpbWVwaWNrZXIvdGltZXBpY2tlci5odG1sXCIsXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLW1hdGNoLmh0bWxcIixcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiXSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudHJhbnNpdGlvblwiLFtdKS5mYWN0b3J5KFwiJHRyYW5zaXRpb25cIixbXCIkcVwiLFwiJHRpbWVvdXRcIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtmb3IodmFyIGIgaW4gYSlpZih2b2lkIDAhPT1mLnN0eWxlW2JdKXJldHVybiBhW2JdfXZhciBlPWZ1bmN0aW9uKGQsZixnKXtnPWd8fHt9O3ZhciBoPWEuZGVmZXIoKSxpPWVbZy5hbmltYXRpb24/XCJhbmltYXRpb25FbmRFdmVudE5hbWVcIjpcInRyYW5zaXRpb25FbmRFdmVudE5hbWVcIl0saj1mdW5jdGlvbigpe2MuJGFwcGx5KGZ1bmN0aW9uKCl7ZC51bmJpbmQoaSxqKSxoLnJlc29sdmUoZCl9KX07cmV0dXJuIGkmJmQuYmluZChpLGopLGIoZnVuY3Rpb24oKXthbmd1bGFyLmlzU3RyaW5nKGYpP2QuYWRkQ2xhc3MoZik6YW5ndWxhci5pc0Z1bmN0aW9uKGYpP2YoZCk6YW5ndWxhci5pc09iamVjdChmKSYmZC5jc3MoZiksaXx8aC5yZXNvbHZlKGQpfSksaC5wcm9taXNlLmNhbmNlbD1mdW5jdGlvbigpe2kmJmQudW5iaW5kKGksaiksaC5yZWplY3QoXCJUcmFuc2l0aW9uIGNhbmNlbGxlZFwiKX0saC5wcm9taXNlfSxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0cmFuc1wiKSxnPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9LGg9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRBbmltYXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwiYW5pbWF0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvQW5pbWF0aW9uRW5kXCIsdHJhbnNpdGlvbjpcImFuaW1hdGlvbmVuZFwifTtyZXR1cm4gZS50cmFuc2l0aW9uRW5kRXZlbnROYW1lPWQoZyksZS5hbmltYXRpb25FbmRFdmVudE5hbWU9ZChoKSxlfV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmNvbGxhcHNlXCIsW1widWkuYm9vdHN0cmFwLnRyYW5zaXRpb25cIl0pLmRpcmVjdGl2ZShcImNvbGxhcHNlXCIsW1wiJHRyYW5zaXRpb25cIixmdW5jdGlvbihhKXtyZXR1cm57bGluazpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZShiKXtmdW5jdGlvbiBkKCl7aj09PWUmJihqPXZvaWQgMCl9dmFyIGU9YShjLGIpO3JldHVybiBqJiZqLmNhbmNlbCgpLGo9ZSxlLnRoZW4oZCxkKSxlfWZ1bmN0aW9uIGYoKXtrPyhrPSExLGcoKSk6KGMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKS5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIiksZSh7aGVpZ2h0OmNbMF0uc2Nyb2xsSGVpZ2h0K1wicHhcIn0pLnRoZW4oZykpfWZ1bmN0aW9uIGcoKXtjLnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKSxjLmFkZENsYXNzKFwiY29sbGFwc2UgaW5cIiksYy5jc3Moe2hlaWdodDpcImF1dG9cIn0pfWZ1bmN0aW9uIGgoKXtpZihrKWs9ITEsaSgpLGMuY3NzKHtoZWlnaHQ6MH0pO2Vsc2V7Yy5jc3Moe2hlaWdodDpjWzBdLnNjcm9sbEhlaWdodCtcInB4XCJ9KTt7Y1swXS5vZmZzZXRXaWR0aH1jLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLGUoe2hlaWdodDowfSkudGhlbihpKX19ZnVuY3Rpb24gaSgpe2MucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLGMuYWRkQ2xhc3MoXCJjb2xsYXBzZVwiKX12YXIgaixrPSEwO2IuJHdhdGNoKGQuY29sbGFwc2UsZnVuY3Rpb24oYSl7YT9oKCk6ZigpfSl9fX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5hY2NvcmRpb25cIixbXCJ1aS5ib290c3RyYXAuY29sbGFwc2VcIl0pLmNvbnN0YW50KFwiYWNjb3JkaW9uQ29uZmlnXCIse2Nsb3NlT3RoZXJzOiEwfSkuY29udHJvbGxlcihcIkFjY29yZGlvbkNvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwiYWNjb3JkaW9uQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMpe3RoaXMuZ3JvdXBzPVtdLHRoaXMuY2xvc2VPdGhlcnM9ZnVuY3Rpb24oZCl7dmFyIGU9YW5ndWxhci5pc0RlZmluZWQoYi5jbG9zZU90aGVycyk/YS4kZXZhbChiLmNsb3NlT3RoZXJzKTpjLmNsb3NlT3RoZXJzO2UmJmFuZ3VsYXIuZm9yRWFjaCh0aGlzLmdyb3VwcyxmdW5jdGlvbihhKXthIT09ZCYmKGEuaXNPcGVuPSExKX0pfSx0aGlzLmFkZEdyb3VwPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5ncm91cHMucHVzaChhKSxhLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtiLnJlbW92ZUdyb3VwKGEpfSl9LHRoaXMucmVtb3ZlR3JvdXA9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5ncm91cHMuaW5kZXhPZihhKTstMSE9PWImJnRoaXMuZ3JvdXBzLnNwbGljZShiLDEpfX1dKS5kaXJlY3RpdmUoXCJhY2NvcmRpb25cIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsY29udHJvbGxlcjpcIkFjY29yZGlvbkNvbnRyb2xsZXJcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITEsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIn19KS5kaXJlY3RpdmUoXCJhY2NvcmRpb25Hcm91cFwiLGZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJeYWNjb3JkaW9uXCIscmVzdHJpY3Q6XCJFQVwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLHNjb3BlOntoZWFkaW5nOlwiQFwiLGlzT3BlbjpcIj0/XCIsaXNEaXNhYmxlZDpcIj0/XCJ9LGNvbnRyb2xsZXI6ZnVuY3Rpb24oKXt0aGlzLnNldEhlYWRpbmc9ZnVuY3Rpb24oYSl7dGhpcy5oZWFkaW5nPWF9fSxsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2QuYWRkR3JvdXAoYSksYS4kd2F0Y2goXCJpc09wZW5cIixmdW5jdGlvbihiKXtiJiZkLmNsb3NlT3RoZXJzKGEpfSksYS50b2dnbGVPcGVuPWZ1bmN0aW9uKCl7YS5pc0Rpc2FibGVkfHwoYS5pc09wZW49IWEuaXNPcGVuKX19fX0pLmRpcmVjdGl2ZShcImFjY29yZGlvbkhlYWRpbmdcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsdHJhbnNjbHVkZTohMCx0ZW1wbGF0ZTpcIlwiLHJlcGxhY2U6ITAscmVxdWlyZTpcIl5hY2NvcmRpb25Hcm91cFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCxlKXtkLnNldEhlYWRpbmcoZShhLGZ1bmN0aW9uKCl7fSkpfX19KS5kaXJlY3RpdmUoXCJhY2NvcmRpb25UcmFuc2NsdWRlXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIl5hY2NvcmRpb25Hcm91cFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7YS4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gZFtjLmFjY29yZGlvblRyYW5zY2x1ZGVdfSxmdW5jdGlvbihhKXthJiYoYi5odG1sKFwiXCIpLGIuYXBwZW5kKGEpKX0pfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5hbGVydFwiLFtdKS5jb250cm9sbGVyKFwiQWxlcnRDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixmdW5jdGlvbihhLGIpe2EuY2xvc2VhYmxlPVwiY2xvc2VcImluIGJ9XSkuZGlyZWN0aXZlKFwiYWxlcnRcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsY29udHJvbGxlcjpcIkFsZXJ0Q29udHJvbGxlclwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMCxzY29wZTp7dHlwZTpcIkBcIixjbG9zZTpcIiZcIn19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuYmluZEh0bWxcIixbXSkuZGlyZWN0aXZlKFwiYmluZEh0bWxVbnNhZmVcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihhLGIsYyl7Yi5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsYy5iaW5kSHRtbFVuc2FmZSksYS4kd2F0Y2goYy5iaW5kSHRtbFVuc2FmZSxmdW5jdGlvbihhKXtiLmh0bWwoYXx8XCJcIil9KX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5idXR0b25zXCIsW10pLmNvbnN0YW50KFwiYnV0dG9uQ29uZmlnXCIse2FjdGl2ZUNsYXNzOlwiYWN0aXZlXCIsdG9nZ2xlRXZlbnQ6XCJjbGlja1wifSkuY29udHJvbGxlcihcIkJ1dHRvbnNDb250cm9sbGVyXCIsW1wiYnV0dG9uQ29uZmlnXCIsZnVuY3Rpb24oYSl7dGhpcy5hY3RpdmVDbGFzcz1hLmFjdGl2ZUNsYXNzfHxcImFjdGl2ZVwiLHRoaXMudG9nZ2xlRXZlbnQ9YS50b2dnbGVFdmVudHx8XCJjbGlja1wifV0pLmRpcmVjdGl2ZShcImJ0blJhZGlvXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpbXCJidG5SYWRpb1wiLFwibmdNb2RlbFwiXSxjb250cm9sbGVyOlwiQnV0dG9uc0NvbnRyb2xsZXJcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWRbMF0sZj1kWzFdO2YuJHJlbmRlcj1mdW5jdGlvbigpe2IudG9nZ2xlQ2xhc3MoZS5hY3RpdmVDbGFzcyxhbmd1bGFyLmVxdWFscyhmLiRtb2RlbFZhbHVlLGEuJGV2YWwoYy5idG5SYWRpbykpKX0sYi5iaW5kKGUudG9nZ2xlRXZlbnQsZnVuY3Rpb24oKXt2YXIgZD1iLmhhc0NsYXNzKGUuYWN0aXZlQ2xhc3MpOyghZHx8YW5ndWxhci5pc0RlZmluZWQoYy51bmNoZWNrYWJsZSkpJiZhLiRhcHBseShmdW5jdGlvbigpe2YuJHNldFZpZXdWYWx1ZShkP251bGw6YS4kZXZhbChjLmJ0blJhZGlvKSksZi4kcmVuZGVyKCl9KX0pfX19KS5kaXJlY3RpdmUoXCJidG5DaGVja2JveFwiLGZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6W1wiYnRuQ2hlY2tib3hcIixcIm5nTW9kZWxcIl0sY29udHJvbGxlcjpcIkJ1dHRvbnNDb250cm9sbGVyXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKCl7cmV0dXJuIGcoYy5idG5DaGVja2JveFRydWUsITApfWZ1bmN0aW9uIGYoKXtyZXR1cm4gZyhjLmJ0bkNoZWNrYm94RmFsc2UsITEpfWZ1bmN0aW9uIGcoYixjKXt2YXIgZD1hLiRldmFsKGIpO3JldHVybiBhbmd1bGFyLmlzRGVmaW5lZChkKT9kOmN9dmFyIGg9ZFswXSxpPWRbMV07aS4kcmVuZGVyPWZ1bmN0aW9uKCl7Yi50b2dnbGVDbGFzcyhoLmFjdGl2ZUNsYXNzLGFuZ3VsYXIuZXF1YWxzKGkuJG1vZGVsVmFsdWUsZSgpKSl9LGIuYmluZChoLnRvZ2dsZUV2ZW50LGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtpLiRzZXRWaWV3VmFsdWUoYi5oYXNDbGFzcyhoLmFjdGl2ZUNsYXNzKT9mKCk6ZSgpKSxpLiRyZW5kZXIoKX0pfSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmNhcm91c2VsXCIsW1widWkuYm9vdHN0cmFwLnRyYW5zaXRpb25cIl0pLmNvbnRyb2xsZXIoXCJDYXJvdXNlbENvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiR0aW1lb3V0XCIsXCIkdHJhbnNpdGlvblwiLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKCl7ZSgpO3ZhciBjPSthLmludGVydmFsOyFpc05hTihjKSYmYz49MCYmKGc9YihmLGMpKX1mdW5jdGlvbiBlKCl7ZyYmKGIuY2FuY2VsKGcpLGc9bnVsbCl9ZnVuY3Rpb24gZigpe2g/KGEubmV4dCgpLGQoKSk6YS5wYXVzZSgpfXZhciBnLGgsaT10aGlzLGo9aS5zbGlkZXM9YS5zbGlkZXM9W10saz0tMTtpLmN1cnJlbnRTbGlkZT1udWxsO3ZhciBsPSExO2kuc2VsZWN0PWEuc2VsZWN0PWZ1bmN0aW9uKGUsZil7ZnVuY3Rpb24gZygpe2lmKCFsKXtpZihpLmN1cnJlbnRTbGlkZSYmYW5ndWxhci5pc1N0cmluZyhmKSYmIWEubm9UcmFuc2l0aW9uJiZlLiRlbGVtZW50KXtlLiRlbGVtZW50LmFkZENsYXNzKGYpO3tlLiRlbGVtZW50WzBdLm9mZnNldFdpZHRofWFuZ3VsYXIuZm9yRWFjaChqLGZ1bmN0aW9uKGEpe2FuZ3VsYXIuZXh0ZW5kKGEse2RpcmVjdGlvbjpcIlwiLGVudGVyaW5nOiExLGxlYXZpbmc6ITEsYWN0aXZlOiExfSl9KSxhbmd1bGFyLmV4dGVuZChlLHtkaXJlY3Rpb246ZixhY3RpdmU6ITAsZW50ZXJpbmc6ITB9KSxhbmd1bGFyLmV4dGVuZChpLmN1cnJlbnRTbGlkZXx8e30se2RpcmVjdGlvbjpmLGxlYXZpbmc6ITB9KSxhLiRjdXJyZW50VHJhbnNpdGlvbj1jKGUuJGVsZW1lbnQse30pLGZ1bmN0aW9uKGIsYyl7YS4kY3VycmVudFRyYW5zaXRpb24udGhlbihmdW5jdGlvbigpe2goYixjKX0sZnVuY3Rpb24oKXtoKGIsYyl9KX0oZSxpLmN1cnJlbnRTbGlkZSl9ZWxzZSBoKGUsaS5jdXJyZW50U2xpZGUpO2kuY3VycmVudFNsaWRlPWUsaz1tLGQoKX19ZnVuY3Rpb24gaChiLGMpe2FuZ3VsYXIuZXh0ZW5kKGIse2RpcmVjdGlvbjpcIlwiLGFjdGl2ZTohMCxsZWF2aW5nOiExLGVudGVyaW5nOiExfSksYW5ndWxhci5leHRlbmQoY3x8e30se2RpcmVjdGlvbjpcIlwiLGFjdGl2ZTohMSxsZWF2aW5nOiExLGVudGVyaW5nOiExfSksYS4kY3VycmVudFRyYW5zaXRpb249bnVsbH12YXIgbT1qLmluZGV4T2YoZSk7dm9pZCAwPT09ZiYmKGY9bT5rP1wibmV4dFwiOlwicHJldlwiKSxlJiZlIT09aS5jdXJyZW50U2xpZGUmJihhLiRjdXJyZW50VHJhbnNpdGlvbj8oYS4kY3VycmVudFRyYW5zaXRpb24uY2FuY2VsKCksYihnKSk6ZygpKX0sYS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bD0hMH0pLGkuaW5kZXhPZlNsaWRlPWZ1bmN0aW9uKGEpe3JldHVybiBqLmluZGV4T2YoYSl9LGEubmV4dD1mdW5jdGlvbigpe3ZhciBiPShrKzEpJWoubGVuZ3RoO3JldHVybiBhLiRjdXJyZW50VHJhbnNpdGlvbj92b2lkIDA6aS5zZWxlY3QoaltiXSxcIm5leHRcIil9LGEucHJldj1mdW5jdGlvbigpe3ZhciBiPTA+ay0xP2oubGVuZ3RoLTE6ay0xO3JldHVybiBhLiRjdXJyZW50VHJhbnNpdGlvbj92b2lkIDA6aS5zZWxlY3QoaltiXSxcInByZXZcIil9LGEuaXNBY3RpdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIGkuY3VycmVudFNsaWRlPT09YX0sYS4kd2F0Y2goXCJpbnRlcnZhbFwiLGQpLGEuJG9uKFwiJGRlc3Ryb3lcIixlKSxhLnBsYXk9ZnVuY3Rpb24oKXtofHwoaD0hMCxkKCkpfSxhLnBhdXNlPWZ1bmN0aW9uKCl7YS5ub1BhdXNlfHwoaD0hMSxlKCkpfSxpLmFkZFNsaWRlPWZ1bmN0aW9uKGIsYyl7Yi4kZWxlbWVudD1jLGoucHVzaChiKSwxPT09ai5sZW5ndGh8fGIuYWN0aXZlPyhpLnNlbGVjdChqW2oubGVuZ3RoLTFdKSwxPT1qLmxlbmd0aCYmYS5wbGF5KCkpOmIuYWN0aXZlPSExfSxpLnJlbW92ZVNsaWRlPWZ1bmN0aW9uKGEpe3ZhciBiPWouaW5kZXhPZihhKTtqLnNwbGljZShiLDEpLGoubGVuZ3RoPjAmJmEuYWN0aXZlP2kuc2VsZWN0KGI+PWoubGVuZ3RoP2pbYi0xXTpqW2JdKTprPmImJmstLX19XSkuZGlyZWN0aXZlKFwiY2Fyb3VzZWxcIixbZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMCxjb250cm9sbGVyOlwiQ2Fyb3VzZWxDb250cm9sbGVyXCIscmVxdWlyZTpcImNhcm91c2VsXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsc2NvcGU6e2ludGVydmFsOlwiPVwiLG5vVHJhbnNpdGlvbjpcIj1cIixub1BhdXNlOlwiPVwifX19XSkuZGlyZWN0aXZlKFwic2xpZGVcIixmdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiXmNhcm91c2VsXCIscmVzdHJpY3Q6XCJFQVwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2Nhcm91c2VsL3NsaWRlLmh0bWxcIixzY29wZTp7YWN0aXZlOlwiPT9cIn0sbGluazpmdW5jdGlvbihhLGIsYyxkKXtkLmFkZFNsaWRlKGEsYiksYS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7ZC5yZW1vdmVTbGlkZShhKX0pLGEuJHdhdGNoKFwiYWN0aXZlXCIsZnVuY3Rpb24oYil7YiYmZC5zZWxlY3QoYSl9KX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuZGF0ZXBhcnNlclwiLFtdKS5zZXJ2aWNlKFwiZGF0ZVBhcnNlclwiLFtcIiRsb2NhbGVcIixcIm9yZGVyQnlGaWx0ZXJcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7dmFyIGM9W10sZD1hLnNwbGl0KFwiXCIpO3JldHVybiBhbmd1bGFyLmZvckVhY2goZSxmdW5jdGlvbihiLGUpe3ZhciBmPWEuaW5kZXhPZihlKTtpZihmPi0xKXthPWEuc3BsaXQoXCJcIiksZFtmXT1cIihcIitiLnJlZ2V4K1wiKVwiLGFbZl09XCIkXCI7Zm9yKHZhciBnPWYrMSxoPWYrZS5sZW5ndGg7aD5nO2crKylkW2ddPVwiXCIsYVtnXT1cIiRcIjthPWEuam9pbihcIlwiKSxjLnB1c2goe2luZGV4OmYsYXBwbHk6Yi5hcHBseX0pfX0pLHtyZWdleDpuZXcgUmVnRXhwKFwiXlwiK2Quam9pbihcIlwiKStcIiRcIiksbWFwOmIoYyxcImluZGV4XCIpfX1mdW5jdGlvbiBkKGEsYixjKXtyZXR1cm4gMT09PWImJmM+Mjg/Mjk9PT1jJiYoYSU0PT09MCYmYSUxMDAhPT0wfHxhJTQwMD09PTApOjM9PT1ifHw1PT09Ynx8OD09PWJ8fDEwPT09Yj8zMT5jOiEwfXRoaXMucGFyc2Vycz17fTt2YXIgZT17eXl5eTp7cmVnZXg6XCJcXFxcZHs0fVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMueWVhcj0rYX19LHl5OntyZWdleDpcIlxcXFxkezJ9XCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy55ZWFyPSthKzJlM319LHk6e3JlZ2V4OlwiXFxcXGR7MSw0fVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMueWVhcj0rYX19LE1NTU06e3JlZ2V4OmEuREFURVRJTUVfRk9STUFUUy5NT05USC5qb2luKFwifFwiKSxhcHBseTpmdW5jdGlvbihiKXt0aGlzLm1vbnRoPWEuREFURVRJTUVfRk9STUFUUy5NT05USC5pbmRleE9mKGIpfX0sTU1NOntyZWdleDphLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5qb2luKFwifFwiKSxhcHBseTpmdW5jdGlvbihiKXt0aGlzLm1vbnRoPWEuREFURVRJTUVfRk9STUFUUy5TSE9SVE1PTlRILmluZGV4T2YoYil9fSxNTTp7cmVnZXg6XCIwWzEtOV18MVswLTJdXCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy5tb250aD1hLTF9fSxNOntyZWdleDpcIlsxLTldfDFbMC0yXVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMubW9udGg9YS0xfX0sZGQ6e3JlZ2V4OlwiWzAtMl1bMC05XXsxfXwzWzAtMV17MX1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLmRhdGU9K2F9fSxkOntyZWdleDpcIlsxLTJdP1swLTldezF9fDNbMC0xXXsxfVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMuZGF0ZT0rYX19LEVFRUU6e3JlZ2V4OmEuREFURVRJTUVfRk9STUFUUy5EQVkuam9pbihcInxcIil9LEVFRTp7cmVnZXg6YS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUREFZLmpvaW4oXCJ8XCIpfX07dGhpcy5wYXJzZT1mdW5jdGlvbihiLGUpe2lmKCFhbmd1bGFyLmlzU3RyaW5nKGIpfHwhZSlyZXR1cm4gYjtlPWEuREFURVRJTUVfRk9STUFUU1tlXXx8ZSx0aGlzLnBhcnNlcnNbZV18fCh0aGlzLnBhcnNlcnNbZV09YyhlKSk7dmFyIGY9dGhpcy5wYXJzZXJzW2VdLGc9Zi5yZWdleCxoPWYubWFwLGk9Yi5tYXRjaChnKTtpZihpJiZpLmxlbmd0aCl7Zm9yKHZhciBqLGs9e3llYXI6MTkwMCxtb250aDowLGRhdGU6MSxob3VyczowfSxsPTEsbT1pLmxlbmd0aDttPmw7bCsrKXt2YXIgbj1oW2wtMV07bi5hcHBseSYmbi5hcHBseS5jYWxsKGssaVtsXSl9cmV0dXJuIGQoay55ZWFyLGsubW9udGgsay5kYXRlKSYmKGo9bmV3IERhdGUoay55ZWFyLGsubW9udGgsay5kYXRlLGsuaG91cnMpKSxqfX19XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAucG9zaXRpb25cIixbXSkuZmFjdG9yeShcIiRwb3NpdGlvblwiLFtcIiRkb2N1bWVudFwiLFwiJHdpbmRvd1wiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGMpe3JldHVybiBhLmN1cnJlbnRTdHlsZT9hLmN1cnJlbnRTdHlsZVtjXTpiLmdldENvbXB1dGVkU3R5bGU/Yi5nZXRDb21wdXRlZFN0eWxlKGEpW2NdOmEuc3R5bGVbY119ZnVuY3Rpb24gZChhKXtyZXR1cm5cInN0YXRpY1wiPT09KGMoYSxcInBvc2l0aW9uXCIpfHxcInN0YXRpY1wiKX12YXIgZT1mdW5jdGlvbihiKXtmb3IodmFyIGM9YVswXSxlPWIub2Zmc2V0UGFyZW50fHxjO2UmJmUhPT1jJiZkKGUpOyllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxjfTtyZXR1cm57cG9zaXRpb246ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5vZmZzZXQoYiksZD17dG9wOjAsbGVmdDowfSxmPWUoYlswXSk7ZiE9YVswXSYmKGQ9dGhpcy5vZmZzZXQoYW5ndWxhci5lbGVtZW50KGYpKSxkLnRvcCs9Zi5jbGllbnRUb3AtZi5zY3JvbGxUb3AsZC5sZWZ0Kz1mLmNsaWVudExlZnQtZi5zY3JvbGxMZWZ0KTt2YXIgZz1iWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybnt3aWR0aDpnLndpZHRofHxiLnByb3AoXCJvZmZzZXRXaWR0aFwiKSxoZWlnaHQ6Zy5oZWlnaHR8fGIucHJvcChcIm9mZnNldEhlaWdodFwiKSx0b3A6Yy50b3AtZC50b3AsbGVmdDpjLmxlZnQtZC5sZWZ0fX0sb2Zmc2V0OmZ1bmN0aW9uKGMpe3ZhciBkPWNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue3dpZHRoOmQud2lkdGh8fGMucHJvcChcIm9mZnNldFdpZHRoXCIpLGhlaWdodDpkLmhlaWdodHx8Yy5wcm9wKFwib2Zmc2V0SGVpZ2h0XCIpLHRvcDpkLnRvcCsoYi5wYWdlWU9mZnNldHx8YVswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSxsZWZ0OmQubGVmdCsoYi5wYWdlWE9mZnNldHx8YVswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCl9fSxwb3NpdGlvbkVsZW1lbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoLGk9Yy5zcGxpdChcIi1cIiksaj1pWzBdLGs9aVsxXXx8XCJjZW50ZXJcIjtlPWQ/dGhpcy5vZmZzZXQoYSk6dGhpcy5wb3NpdGlvbihhKSxmPWIucHJvcChcIm9mZnNldFdpZHRoXCIpLGc9Yi5wcm9wKFwib2Zmc2V0SGVpZ2h0XCIpO3ZhciBsPXtjZW50ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gZS5sZWZ0K2Uud2lkdGgvMi1mLzJ9LGxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5sZWZ0fSxyaWdodDpmdW5jdGlvbigpe3JldHVybiBlLmxlZnQrZS53aWR0aH19LG09e2NlbnRlcjpmdW5jdGlvbigpe3JldHVybiBlLnRvcCtlLmhlaWdodC8yLWcvMn0sdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIGUudG9wfSxib3R0b206ZnVuY3Rpb24oKXtyZXR1cm4gZS50b3ArZS5oZWlnaHR9fTtzd2l0Y2goail7Y2FzZVwicmlnaHRcIjpoPXt0b3A6bVtrXSgpLGxlZnQ6bFtqXSgpfTticmVhaztjYXNlXCJsZWZ0XCI6aD17dG9wOm1ba10oKSxsZWZ0OmUubGVmdC1mfTticmVhaztjYXNlXCJib3R0b21cIjpoPXt0b3A6bVtqXSgpLGxlZnQ6bFtrXSgpfTticmVhaztkZWZhdWx0Omg9e3RvcDplLnRvcC1nLGxlZnQ6bFtrXSgpfX1yZXR1cm4gaH19fV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmRhdGVwaWNrZXJcIixbXCJ1aS5ib290c3RyYXAuZGF0ZXBhcnNlclwiLFwidWkuYm9vdHN0cmFwLnBvc2l0aW9uXCJdKS5jb25zdGFudChcImRhdGVwaWNrZXJDb25maWdcIix7Zm9ybWF0RGF5OlwiZGRcIixmb3JtYXRNb250aDpcIk1NTU1cIixmb3JtYXRZZWFyOlwieXl5eVwiLGZvcm1hdERheUhlYWRlcjpcIkVFRVwiLGZvcm1hdERheVRpdGxlOlwiTU1NTSB5eXl5XCIsZm9ybWF0TW9udGhUaXRsZTpcInl5eXlcIixkYXRlcGlja2VyTW9kZTpcImRheVwiLG1pbk1vZGU6XCJkYXlcIixtYXhNb2RlOlwieWVhclwiLHNob3dXZWVrczohMCxzdGFydGluZ0RheTowLHllYXJSYW5nZToyMCxtaW5EYXRlOm51bGwsbWF4RGF0ZTpudWxsfSkuY29udHJvbGxlcihcIkRhdGVwaWNrZXJDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcIiRwYXJzZVwiLFwiJGludGVycG9sYXRlXCIsXCIkdGltZW91dFwiLFwiJGxvZ1wiLFwiZGF0ZUZpbHRlclwiLFwiZGF0ZXBpY2tlckNvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjLGQsZSxmLGcsaCl7dmFyIGk9dGhpcyxqPXskc2V0Vmlld1ZhbHVlOmFuZ3VsYXIubm9vcH07dGhpcy5tb2Rlcz1bXCJkYXlcIixcIm1vbnRoXCIsXCJ5ZWFyXCJdLGFuZ3VsYXIuZm9yRWFjaChbXCJmb3JtYXREYXlcIixcImZvcm1hdE1vbnRoXCIsXCJmb3JtYXRZZWFyXCIsXCJmb3JtYXREYXlIZWFkZXJcIixcImZvcm1hdERheVRpdGxlXCIsXCJmb3JtYXRNb250aFRpdGxlXCIsXCJtaW5Nb2RlXCIsXCJtYXhNb2RlXCIsXCJzaG93V2Vla3NcIixcInN0YXJ0aW5nRGF5XCIsXCJ5ZWFyUmFuZ2VcIl0sZnVuY3Rpb24oYyxlKXtpW2NdPWFuZ3VsYXIuaXNEZWZpbmVkKGJbY10pPzg+ZT9kKGJbY10pKGEuJHBhcmVudCk6YS4kcGFyZW50LiRldmFsKGJbY10pOmhbY119KSxhbmd1bGFyLmZvckVhY2goW1wibWluRGF0ZVwiLFwibWF4RGF0ZVwiXSxmdW5jdGlvbihkKXtiW2RdP2EuJHBhcmVudC4kd2F0Y2goYyhiW2RdKSxmdW5jdGlvbihhKXtpW2RdPWE/bmV3IERhdGUoYSk6bnVsbCxpLnJlZnJlc2hWaWV3KCl9KTppW2RdPWhbZF0/bmV3IERhdGUoaFtkXSk6bnVsbH0pLGEuZGF0ZXBpY2tlck1vZGU9YS5kYXRlcGlja2VyTW9kZXx8aC5kYXRlcGlja2VyTW9kZSxhLnVuaXF1ZUlkPVwiZGF0ZXBpY2tlci1cIithLiRpZCtcIi1cIitNYXRoLmZsb29yKDFlNCpNYXRoLnJhbmRvbSgpKSx0aGlzLmFjdGl2ZURhdGU9YW5ndWxhci5pc0RlZmluZWQoYi5pbml0RGF0ZSk/YS4kcGFyZW50LiRldmFsKGIuaW5pdERhdGUpOm5ldyBEYXRlLGEuaXNBY3RpdmU9ZnVuY3Rpb24oYil7cmV0dXJuIDA9PT1pLmNvbXBhcmUoYi5kYXRlLGkuYWN0aXZlRGF0ZSk/KGEuYWN0aXZlRGF0ZUlkPWIudWlkLCEwKTohMX0sdGhpcy5pbml0PWZ1bmN0aW9uKGEpe2o9YSxqLiRyZW5kZXI9ZnVuY3Rpb24oKXtpLnJlbmRlcigpfX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24oKXtpZihqLiRtb2RlbFZhbHVlKXt2YXIgYT1uZXcgRGF0ZShqLiRtb2RlbFZhbHVlKSxiPSFpc05hTihhKTtiP3RoaXMuYWN0aXZlRGF0ZT1hOmYuZXJyb3IoJ0RhdGVwaWNrZXIgZGlyZWN0aXZlOiBcIm5nLW1vZGVsXCIgdmFsdWUgbXVzdCBiZSBhIERhdGUgb2JqZWN0LCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMDEuMDEuMTk3MCBvciBhIHN0cmluZyByZXByZXNlbnRpbmcgYW4gUkZDMjgyMiBvciBJU08gODYwMSBkYXRlLicpLGouJHNldFZhbGlkaXR5KFwiZGF0ZVwiLGIpfXRoaXMucmVmcmVzaFZpZXcoKX0sdGhpcy5yZWZyZXNoVmlldz1mdW5jdGlvbigpe2lmKHRoaXMuZWxlbWVudCl7dGhpcy5fcmVmcmVzaFZpZXcoKTt2YXIgYT1qLiRtb2RlbFZhbHVlP25ldyBEYXRlKGouJG1vZGVsVmFsdWUpOm51bGw7ai4kc2V0VmFsaWRpdHkoXCJkYXRlLWRpc2FibGVkXCIsIWF8fHRoaXMuZWxlbWVudCYmIXRoaXMuaXNEaXNhYmxlZChhKSl9fSx0aGlzLmNyZWF0ZURhdGVPYmplY3Q9ZnVuY3Rpb24oYSxiKXt2YXIgYz1qLiRtb2RlbFZhbHVlP25ldyBEYXRlKGouJG1vZGVsVmFsdWUpOm51bGw7cmV0dXJue2RhdGU6YSxsYWJlbDpnKGEsYiksc2VsZWN0ZWQ6YyYmMD09PXRoaXMuY29tcGFyZShhLGMpLGRpc2FibGVkOnRoaXMuaXNEaXNhYmxlZChhKSxjdXJyZW50OjA9PT10aGlzLmNvbXBhcmUoYSxuZXcgRGF0ZSl9fSx0aGlzLmlzRGlzYWJsZWQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXMubWluRGF0ZSYmdGhpcy5jb21wYXJlKGMsdGhpcy5taW5EYXRlKTwwfHx0aGlzLm1heERhdGUmJnRoaXMuY29tcGFyZShjLHRoaXMubWF4RGF0ZSk+MHx8Yi5kYXRlRGlzYWJsZWQmJmEuZGF0ZURpc2FibGVkKHtkYXRlOmMsbW9kZTphLmRhdGVwaWNrZXJNb2RlfSl9LHRoaXMuc3BsaXQ9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YS5sZW5ndGg+MDspYy5wdXNoKGEuc3BsaWNlKDAsYikpO3JldHVybiBjfSxhLnNlbGVjdD1mdW5jdGlvbihiKXtpZihhLmRhdGVwaWNrZXJNb2RlPT09aS5taW5Nb2RlKXt2YXIgYz1qLiRtb2RlbFZhbHVlP25ldyBEYXRlKGouJG1vZGVsVmFsdWUpOm5ldyBEYXRlKDAsMCwwLDAsMCwwLDApO2Muc2V0RnVsbFllYXIoYi5nZXRGdWxsWWVhcigpLGIuZ2V0TW9udGgoKSxiLmdldERhdGUoKSksai4kc2V0Vmlld1ZhbHVlKGMpLGouJHJlbmRlcigpfWVsc2UgaS5hY3RpdmVEYXRlPWIsYS5kYXRlcGlja2VyTW9kZT1pLm1vZGVzW2kubW9kZXMuaW5kZXhPZihhLmRhdGVwaWNrZXJNb2RlKS0xXX0sYS5tb3ZlPWZ1bmN0aW9uKGEpe3ZhciBiPWkuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpK2EqKGkuc3RlcC55ZWFyc3x8MCksYz1pLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSthKihpLnN0ZXAubW9udGhzfHwwKTtpLmFjdGl2ZURhdGUuc2V0RnVsbFllYXIoYixjLDEpLGkucmVmcmVzaFZpZXcoKX0sYS50b2dnbGVNb2RlPWZ1bmN0aW9uKGIpe2I9Ynx8MSxhLmRhdGVwaWNrZXJNb2RlPT09aS5tYXhNb2RlJiYxPT09Ynx8YS5kYXRlcGlja2VyTW9kZT09PWkubWluTW9kZSYmLTE9PT1ifHwoYS5kYXRlcGlja2VyTW9kZT1pLm1vZGVzW2kubW9kZXMuaW5kZXhPZihhLmRhdGVwaWNrZXJNb2RlKStiXSl9LGEua2V5cz17MTM6XCJlbnRlclwiLDMyOlwic3BhY2VcIiwzMzpcInBhZ2V1cFwiLDM0OlwicGFnZWRvd25cIiwzNTpcImVuZFwiLDM2OlwiaG9tZVwiLDM3OlwibGVmdFwiLDM4OlwidXBcIiwzOTpcInJpZ2h0XCIsNDA6XCJkb3duXCJ9O3ZhciBrPWZ1bmN0aW9uKCl7ZShmdW5jdGlvbigpe2kuZWxlbWVudFswXS5mb2N1cygpfSwwLCExKX07YS4kb24oXCJkYXRlcGlja2VyLmZvY3VzXCIsayksYS5rZXlkb3duPWZ1bmN0aW9uKGIpe3ZhciBjPWEua2V5c1tiLndoaWNoXTtpZihjJiYhYi5zaGlmdEtleSYmIWIuYWx0S2V5KWlmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLFwiZW50ZXJcIj09PWN8fFwic3BhY2VcIj09PWMpe2lmKGkuaXNEaXNhYmxlZChpLmFjdGl2ZURhdGUpKXJldHVybjthLnNlbGVjdChpLmFjdGl2ZURhdGUpLGsoKX1lbHNlIWIuY3RybEtleXx8XCJ1cFwiIT09YyYmXCJkb3duXCIhPT1jPyhpLmhhbmRsZUtleURvd24oYyxiKSxpLnJlZnJlc2hWaWV3KCkpOihhLnRvZ2dsZU1vZGUoXCJ1cFwiPT09Yz8xOi0xKSxrKCkpfX1dKS5kaXJlY3RpdmUoXCJkYXRlcGlja2VyXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLHNjb3BlOntkYXRlcGlja2VyTW9kZTpcIj0/XCIsZGF0ZURpc2FibGVkOlwiJlwifSxyZXF1aXJlOltcImRhdGVwaWNrZXJcIixcIj9ebmdNb2RlbFwiXSxjb250cm9sbGVyOlwiRGF0ZXBpY2tlckNvbnRyb2xsZXJcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWRbMF0sZj1kWzFdO2YmJmUuaW5pdChmKX19fSkuZGlyZWN0aXZlKFwiZGF5cGlja2VyXCIsW1wiZGF0ZUZpbHRlclwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIixyZXF1aXJlOlwiXmRhdGVwaWNrZXJcIixsaW5rOmZ1bmN0aW9uKGIsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiKXtyZXR1cm4gMSE9PWJ8fGElNCE9PTB8fGElMTAwPT09MCYmYSU0MDAhPT0wP2lbYl06Mjl9ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPW5ldyBBcnJheShiKSxkPW5ldyBEYXRlKGEpLGU9MDtmb3IoZC5zZXRIb3VycygxMik7Yj5lOyljW2UrK109bmV3IERhdGUoZCksZC5zZXREYXRlKGQuZ2V0RGF0ZSgpKzEpO3JldHVybiBjfWZ1bmN0aW9uIGgoYSl7dmFyIGI9bmV3IERhdGUoYSk7Yi5zZXREYXRlKGIuZ2V0RGF0ZSgpKzQtKGIuZ2V0RGF5KCl8fDcpKTt2YXIgYz1iLmdldFRpbWUoKTtyZXR1cm4gYi5zZXRNb250aCgwKSxiLnNldERhdGUoMSksTWF0aC5mbG9vcihNYXRoLnJvdW5kKChjLWIpLzg2NGU1KS83KSsxfWIuc2hvd1dlZWtzPWUuc2hvd1dlZWtzLGUuc3RlcD17bW9udGhzOjF9LGUuZWxlbWVudD1jO3ZhciBpPVszMSwyOCwzMSwzMCwzMSwzMCwzMSwzMSwzMCwzMSwzMCwzMV07ZS5fcmVmcmVzaFZpZXc9ZnVuY3Rpb24oKXt2YXIgYz1lLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxkPWUuYWN0aXZlRGF0ZS5nZXRNb250aCgpLGY9bmV3IERhdGUoYyxkLDEpLGk9ZS5zdGFydGluZ0RheS1mLmdldERheSgpLGo9aT4wPzctaTotaSxrPW5ldyBEYXRlKGYpO2o+MCYmay5zZXREYXRlKC1qKzEpO2Zvcih2YXIgbD1nKGssNDIpLG09MDs0Mj5tO20rKylsW21dPWFuZ3VsYXIuZXh0ZW5kKGUuY3JlYXRlRGF0ZU9iamVjdChsW21dLGUuZm9ybWF0RGF5KSx7c2Vjb25kYXJ5OmxbbV0uZ2V0TW9udGgoKSE9PWQsdWlkOmIudW5pcXVlSWQrXCItXCIrbX0pO2IubGFiZWxzPW5ldyBBcnJheSg3KTtmb3IodmFyIG49MDs3Pm47bisrKWIubGFiZWxzW25dPXthYmJyOmEobFtuXS5kYXRlLGUuZm9ybWF0RGF5SGVhZGVyKSxmdWxsOmEobFtuXS5kYXRlLFwiRUVFRVwiKX07aWYoYi50aXRsZT1hKGUuYWN0aXZlRGF0ZSxlLmZvcm1hdERheVRpdGxlKSxiLnJvd3M9ZS5zcGxpdChsLDcpLGIuc2hvd1dlZWtzKXtiLndlZWtOdW1iZXJzPVtdO2Zvcih2YXIgbz1oKGIucm93c1swXVswXS5kYXRlKSxwPWIucm93cy5sZW5ndGg7Yi53ZWVrTnVtYmVycy5wdXNoKG8rKyk8cDspO319LGUuY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKS1uZXcgRGF0ZShiLmdldEZ1bGxZZWFyKCksYi5nZXRNb250aCgpLGIuZ2V0RGF0ZSgpKX0sZS5oYW5kbGVLZXlEb3duPWZ1bmN0aW9uKGEpe3ZhciBiPWUuYWN0aXZlRGF0ZS5nZXREYXRlKCk7aWYoXCJsZWZ0XCI9PT1hKWItPTE7ZWxzZSBpZihcInVwXCI9PT1hKWItPTc7ZWxzZSBpZihcInJpZ2h0XCI9PT1hKWIrPTE7ZWxzZSBpZihcImRvd25cIj09PWEpYis9NztlbHNlIGlmKFwicGFnZXVwXCI9PT1hfHxcInBhZ2Vkb3duXCI9PT1hKXt2YXIgYz1lLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSsoXCJwYWdldXBcIj09PWE/LTE6MSk7ZS5hY3RpdmVEYXRlLnNldE1vbnRoKGMsMSksYj1NYXRoLm1pbihmKGUuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLGUuYWN0aXZlRGF0ZS5nZXRNb250aCgpKSxiKX1lbHNlXCJob21lXCI9PT1hP2I9MTpcImVuZFwiPT09YSYmKGI9ZihlLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxlLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSkpO2UuYWN0aXZlRGF0ZS5zZXREYXRlKGIpfSxlLnJlZnJlc2hWaWV3KCl9fX1dKS5kaXJlY3RpdmUoXCJtb250aHBpY2tlclwiLFtcImRhdGVGaWx0ZXJcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL21vbnRoLmh0bWxcIixyZXF1aXJlOlwiXmRhdGVwaWNrZXJcIixsaW5rOmZ1bmN0aW9uKGIsYyxkLGUpe2Uuc3RlcD17eWVhcnM6MX0sZS5lbGVtZW50PWMsZS5fcmVmcmVzaFZpZXc9ZnVuY3Rpb24oKXtmb3IodmFyIGM9bmV3IEFycmF5KDEyKSxkPWUuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLGY9MDsxMj5mO2YrKyljW2ZdPWFuZ3VsYXIuZXh0ZW5kKGUuY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZShkLGYsMSksZS5mb3JtYXRNb250aCkse3VpZDpiLnVuaXF1ZUlkK1wiLVwiK2Z9KTtiLnRpdGxlPWEoZS5hY3RpdmVEYXRlLGUuZm9ybWF0TW9udGhUaXRsZSksYi5yb3dzPWUuc3BsaXQoYywzKX0sZS5jb21wYXJlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCkpLW5ldyBEYXRlKGIuZ2V0RnVsbFllYXIoKSxiLmdldE1vbnRoKCkpfSxlLmhhbmRsZUtleURvd249ZnVuY3Rpb24oYSl7dmFyIGI9ZS5hY3RpdmVEYXRlLmdldE1vbnRoKCk7aWYoXCJsZWZ0XCI9PT1hKWItPTE7ZWxzZSBpZihcInVwXCI9PT1hKWItPTM7ZWxzZSBpZihcInJpZ2h0XCI9PT1hKWIrPTE7ZWxzZSBpZihcImRvd25cIj09PWEpYis9MztlbHNlIGlmKFwicGFnZXVwXCI9PT1hfHxcInBhZ2Vkb3duXCI9PT1hKXt2YXIgYz1lLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSsoXCJwYWdldXBcIj09PWE/LTE6MSk7ZS5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGMpfWVsc2VcImhvbWVcIj09PWE/Yj0wOlwiZW5kXCI9PT1hJiYoYj0xMSk7ZS5hY3RpdmVEYXRlLnNldE1vbnRoKGIpfSxlLnJlZnJlc2hWaWV3KCl9fX1dKS5kaXJlY3RpdmUoXCJ5ZWFycGlja2VyXCIsW1wiZGF0ZUZpbHRlclwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWxcIixyZXF1aXJlOlwiXmRhdGVwaWNrZXJcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSl7cmV0dXJuIHBhcnNlSW50KChhLTEpL2YsMTApKmYrMX12YXIgZj1kLnllYXJSYW5nZTtkLnN0ZXA9e3llYXJzOmZ9LGQuZWxlbWVudD1iLGQuX3JlZnJlc2hWaWV3PWZ1bmN0aW9uKCl7Zm9yKHZhciBiPW5ldyBBcnJheShmKSxjPTAsZz1lKGQuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtmPmM7YysrKWJbY109YW5ndWxhci5leHRlbmQoZC5jcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKGcrYywwLDEpLGQuZm9ybWF0WWVhcikse3VpZDphLnVuaXF1ZUlkK1wiLVwiK2N9KTthLnRpdGxlPVtiWzBdLmxhYmVsLGJbZi0xXS5sYWJlbF0uam9pbihcIiAtIFwiKSxhLnJvd3M9ZC5zcGxpdChiLDUpfSxkLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5nZXRGdWxsWWVhcigpLWIuZ2V0RnVsbFllYXIoKX0sZC5oYW5kbGVLZXlEb3duPWZ1bmN0aW9uKGEpe3ZhciBiPWQuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1wibGVmdFwiPT09YT9iLT0xOlwidXBcIj09PWE/Yi09NTpcInJpZ2h0XCI9PT1hP2IrPTE6XCJkb3duXCI9PT1hP2IrPTU6XCJwYWdldXBcIj09PWF8fFwicGFnZWRvd25cIj09PWE/Yis9KFwicGFnZXVwXCI9PT1hPy0xOjEpKmQuc3RlcC55ZWFyczpcImhvbWVcIj09PWE/Yj1lKGQuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTpcImVuZFwiPT09YSYmKGI9ZShkLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSkrZi0xKSxkLmFjdGl2ZURhdGUuc2V0RnVsbFllYXIoYil9LGQucmVmcmVzaFZpZXcoKX19fV0pLmNvbnN0YW50KFwiZGF0ZXBpY2tlclBvcHVwQ29uZmlnXCIse2RhdGVwaWNrZXJQb3B1cDpcInl5eXktTU0tZGRcIixjdXJyZW50VGV4dDpcIlRvZGF5XCIsY2xlYXJUZXh0OlwiQ2xlYXJcIixjbG9zZVRleHQ6XCJEb25lXCIsY2xvc2VPbkRhdGVTZWxlY3Rpb246ITAsYXBwZW5kVG9Cb2R5OiExLHNob3dCdXR0b25CYXI6ITB9KS5kaXJlY3RpdmUoXCJkYXRlcGlja2VyUG9wdXBcIixbXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsXCIkZG9jdW1lbnRcIixcIiRwb3NpdGlvblwiLFwiZGF0ZUZpbHRlclwiLFwiZGF0ZVBhcnNlclwiLFwiZGF0ZXBpY2tlclBvcHVwQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOlwibmdNb2RlbFwiLHNjb3BlOntpc09wZW46XCI9P1wiLGN1cnJlbnRUZXh0OlwiQFwiLGNsZWFyVGV4dDpcIkBcIixjbG9zZVRleHQ6XCJAXCIsZGF0ZURpc2FibGVkOlwiJlwifSxsaW5rOmZ1bmN0aW9uKGgsaSxqLGspe2Z1bmN0aW9uIGwoYSl7cmV0dXJuIGEucmVwbGFjZSgvKFtBLVpdKS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiLVwiK2EudG9Mb3dlckNhc2UoKX0pfWZ1bmN0aW9uIG0oYSl7aWYoYSl7aWYoYW5ndWxhci5pc0RhdGUoYSkmJiFpc05hTihhKSlyZXR1cm4gay4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsITApLGE7aWYoYW5ndWxhci5pc1N0cmluZyhhKSl7dmFyIGI9Zi5wYXJzZShhLG4pfHxuZXcgRGF0ZShhKTtyZXR1cm4gaXNOYU4oYik/dm9pZCBrLiRzZXRWYWxpZGl0eShcImRhdGVcIiwhMSk6KGsuJHNldFZhbGlkaXR5KFwiZGF0ZVwiLCEwKSxiKX1yZXR1cm4gdm9pZCBrLiRzZXRWYWxpZGl0eShcImRhdGVcIiwhMSl9cmV0dXJuIGsuJHNldFZhbGlkaXR5KFwiZGF0ZVwiLCEwKSxudWxsfXZhciBuLG89YW5ndWxhci5pc0RlZmluZWQoai5jbG9zZU9uRGF0ZVNlbGVjdGlvbik/aC4kcGFyZW50LiRldmFsKGouY2xvc2VPbkRhdGVTZWxlY3Rpb24pOmcuY2xvc2VPbkRhdGVTZWxlY3Rpb24scD1hbmd1bGFyLmlzRGVmaW5lZChqLmRhdGVwaWNrZXJBcHBlbmRUb0JvZHkpP2guJHBhcmVudC4kZXZhbChqLmRhdGVwaWNrZXJBcHBlbmRUb0JvZHkpOmcuYXBwZW5kVG9Cb2R5O2guc2hvd0J1dHRvbkJhcj1hbmd1bGFyLmlzRGVmaW5lZChqLnNob3dCdXR0b25CYXIpP2guJHBhcmVudC4kZXZhbChqLnNob3dCdXR0b25CYXIpOmcuc2hvd0J1dHRvbkJhcixoLmdldFRleHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGhbYStcIlRleHRcIl18fGdbYStcIlRleHRcIl19LGouJG9ic2VydmUoXCJkYXRlcGlja2VyUG9wdXBcIixmdW5jdGlvbihhKXtuPWF8fGcuZGF0ZXBpY2tlclBvcHVwLGsuJHJlbmRlcigpfSk7dmFyIHE9YW5ndWxhci5lbGVtZW50KFwiPGRpdiBkYXRlcGlja2VyLXBvcHVwLXdyYXA+PGRpdiBkYXRlcGlja2VyPjwvZGl2PjwvZGl2PlwiKTtxLmF0dHIoe1wibmctbW9kZWxcIjpcImRhdGVcIixcIm5nLWNoYW5nZVwiOlwiZGF0ZVNlbGVjdGlvbigpXCJ9KTt2YXIgcj1hbmd1bGFyLmVsZW1lbnQocS5jaGlsZHJlbigpWzBdKTtqLmRhdGVwaWNrZXJPcHRpb25zJiZhbmd1bGFyLmZvckVhY2goaC4kcGFyZW50LiRldmFsKGouZGF0ZXBpY2tlck9wdGlvbnMpLGZ1bmN0aW9uKGEsYil7ci5hdHRyKGwoYiksYSl9KSxoLndhdGNoRGF0YT17fSxhbmd1bGFyLmZvckVhY2goW1wibWluRGF0ZVwiLFwibWF4RGF0ZVwiLFwiZGF0ZXBpY2tlck1vZGVcIl0sZnVuY3Rpb24oYSl7aWYoalthXSl7dmFyIGM9YihqW2FdKTtpZihoLiRwYXJlbnQuJHdhdGNoKGMsZnVuY3Rpb24oYil7aC53YXRjaERhdGFbYV09Yn0pLHIuYXR0cihsKGEpLFwid2F0Y2hEYXRhLlwiK2EpLFwiZGF0ZXBpY2tlck1vZGVcIj09PWEpe3ZhciBkPWMuYXNzaWduO2guJHdhdGNoKFwid2F0Y2hEYXRhLlwiK2EsZnVuY3Rpb24oYSxiKXthIT09YiYmZChoLiRwYXJlbnQsYSl9KX19fSksai5kYXRlRGlzYWJsZWQmJnIuYXR0cihcImRhdGUtZGlzYWJsZWRcIixcImRhdGVEaXNhYmxlZCh7IGRhdGU6IGRhdGUsIG1vZGU6IG1vZGUgfSlcIiksay4kcGFyc2Vycy51bnNoaWZ0KG0pLGguZGF0ZVNlbGVjdGlvbj1mdW5jdGlvbihhKXthbmd1bGFyLmlzRGVmaW5lZChhKSYmKGguZGF0ZT1hKSxrLiRzZXRWaWV3VmFsdWUoaC5kYXRlKSxrLiRyZW5kZXIoKSxvJiYoaC5pc09wZW49ITEsaVswXS5mb2N1cygpKX0saS5iaW5kKFwiaW5wdXQgY2hhbmdlIGtleXVwXCIsZnVuY3Rpb24oKXtoLiRhcHBseShmdW5jdGlvbigpe2guZGF0ZT1rLiRtb2RlbFZhbHVlfSl9KSxrLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1rLiR2aWV3VmFsdWU/ZShrLiR2aWV3VmFsdWUsbik6XCJcIjtpLnZhbChhKSxoLmRhdGU9bShrLiRtb2RlbFZhbHVlKX07dmFyIHM9ZnVuY3Rpb24oYSl7aC5pc09wZW4mJmEudGFyZ2V0IT09aVswXSYmaC4kYXBwbHkoZnVuY3Rpb24oKXtoLmlzT3Blbj0hMX0pfSx0PWZ1bmN0aW9uKGEpe2gua2V5ZG93bihhKX07aS5iaW5kKFwia2V5ZG93blwiLHQpLGgua2V5ZG93bj1mdW5jdGlvbihhKXsyNz09PWEud2hpY2g/KGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpLGguY2xvc2UoKSk6NDAhPT1hLndoaWNofHxoLmlzT3Blbnx8KGguaXNPcGVuPSEwKX0saC4kd2F0Y2goXCJpc09wZW5cIixmdW5jdGlvbihhKXthPyhoLiRicm9hZGNhc3QoXCJkYXRlcGlja2VyLmZvY3VzXCIpLGgucG9zaXRpb249cD9kLm9mZnNldChpKTpkLnBvc2l0aW9uKGkpLGgucG9zaXRpb24udG9wPWgucG9zaXRpb24udG9wK2kucHJvcChcIm9mZnNldEhlaWdodFwiKSxjLmJpbmQoXCJjbGlja1wiLHMpKTpjLnVuYmluZChcImNsaWNrXCIscyl9KSxoLnNlbGVjdD1mdW5jdGlvbihhKXtpZihcInRvZGF5XCI9PT1hKXt2YXIgYj1uZXcgRGF0ZTthbmd1bGFyLmlzRGF0ZShrLiRtb2RlbFZhbHVlKT8oYT1uZXcgRGF0ZShrLiRtb2RlbFZhbHVlKSxhLnNldEZ1bGxZZWFyKGIuZ2V0RnVsbFllYXIoKSxiLmdldE1vbnRoKCksYi5nZXREYXRlKCkpKTphPW5ldyBEYXRlKGIuc2V0SG91cnMoMCwwLDAsMCkpfWguZGF0ZVNlbGVjdGlvbihhKX0saC5jbG9zZT1mdW5jdGlvbigpe2guaXNPcGVuPSExLGlbMF0uZm9jdXMoKX07dmFyIHU9YShxKShoKTtxLnJlbW92ZSgpLHA/Yy5maW5kKFwiYm9keVwiKS5hcHBlbmQodSk6aS5hZnRlcih1KSxoLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXt1LnJlbW92ZSgpLGkudW5iaW5kKFwia2V5ZG93blwiLHQpLGMudW5iaW5kKFwiY2xpY2tcIixzKX0pfX19XSkuZGlyZWN0aXZlKFwiZGF0ZXBpY2tlclBvcHVwV3JhcFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRyYW5zY2x1ZGU6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3BvcHVwLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYil7Yi5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKX0pfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5kcm9wZG93blwiLFtdKS5jb25zdGFudChcImRyb3Bkb3duQ29uZmlnXCIse29wZW5DbGFzczpcIm9wZW5cIn0pLnNlcnZpY2UoXCJkcm9wZG93blNlcnZpY2VcIixbXCIkZG9jdW1lbnRcIixmdW5jdGlvbihhKXt2YXIgYj1udWxsO3RoaXMub3Blbj1mdW5jdGlvbihlKXtifHwoYS5iaW5kKFwiY2xpY2tcIixjKSxhLmJpbmQoXCJrZXlkb3duXCIsZCkpLGImJmIhPT1lJiYoYi5pc09wZW49ITEpLGI9ZX0sdGhpcy5jbG9zZT1mdW5jdGlvbihlKXtiPT09ZSYmKGI9bnVsbCxhLnVuYmluZChcImNsaWNrXCIsYyksYS51bmJpbmQoXCJrZXlkb3duXCIsZCkpfTt2YXIgYz1mdW5jdGlvbihhKXt2YXIgYz1iLmdldFRvZ2dsZUVsZW1lbnQoKTthJiZjJiZjWzBdLmNvbnRhaW5zKGEudGFyZ2V0KXx8Yi4kYXBwbHkoZnVuY3Rpb24oKXtiLmlzT3Blbj0hMX0pfSxkPWZ1bmN0aW9uKGEpezI3PT09YS53aGljaCYmKGIuZm9jdXNUb2dnbGVFbGVtZW50KCksYygpKX19XSkuY29udHJvbGxlcihcIkRyb3Bkb3duQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCIkcGFyc2VcIixcImRyb3Bkb3duQ29uZmlnXCIsXCJkcm9wZG93blNlcnZpY2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnLGg9dGhpcyxpPWEuJG5ldygpLGo9ZC5vcGVuQ2xhc3Msaz1hbmd1bGFyLm5vb3AsbD1iLm9uVG9nZ2xlP2MoYi5vblRvZ2dsZSk6YW5ndWxhci5ub29wO3RoaXMuaW5pdD1mdW5jdGlvbihkKXtoLiRlbGVtZW50PWQsYi5pc09wZW4mJihnPWMoYi5pc09wZW4pLGs9Zy5hc3NpZ24sYS4kd2F0Y2goZyxmdW5jdGlvbihhKXtpLmlzT3Blbj0hIWF9KSl9LHRoaXMudG9nZ2xlPWZ1bmN0aW9uKGEpe3JldHVybiBpLmlzT3Blbj1hcmd1bWVudHMubGVuZ3RoPyEhYTohaS5pc09wZW59LHRoaXMuaXNPcGVuPWZ1bmN0aW9uKCl7cmV0dXJuIGkuaXNPcGVufSxpLmdldFRvZ2dsZUVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gaC50b2dnbGVFbGVtZW50fSxpLmZvY3VzVG9nZ2xlRWxlbWVudD1mdW5jdGlvbigpe2gudG9nZ2xlRWxlbWVudCYmaC50b2dnbGVFbGVtZW50WzBdLmZvY3VzKCl9LGkuJHdhdGNoKFwiaXNPcGVuXCIsZnVuY3Rpb24oYixjKXtmW2I/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oaC4kZWxlbWVudCxqKSxiPyhpLmZvY3VzVG9nZ2xlRWxlbWVudCgpLGUub3BlbihpKSk6ZS5jbG9zZShpKSxrKGEsYiksYW5ndWxhci5pc0RlZmluZWQoYikmJmIhPT1jJiZsKGEse29wZW46ISFifSl9KSxhLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixmdW5jdGlvbigpe2kuaXNPcGVuPSExfSksYS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7aS4kZGVzdHJveSgpfSl9XSkuZGlyZWN0aXZlKFwiZHJvcGRvd25cIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkNBXCIsY29udHJvbGxlcjpcIkRyb3Bkb3duQ29udHJvbGxlclwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZC5pbml0KGIpfX19KS5kaXJlY3RpdmUoXCJkcm9wZG93blRvZ2dsZVwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQ0FcIixyZXF1aXJlOlwiP15kcm9wZG93blwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoZCl7ZC50b2dnbGVFbGVtZW50PWI7dmFyIGU9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGIuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8Yy5kaXNhYmxlZHx8YS4kYXBwbHkoZnVuY3Rpb24oKXtkLnRvZ2dsZSgpfSl9O2IuYmluZChcImNsaWNrXCIsZSksYi5hdHRyKHtcImFyaWEtaGFzcG9wdXBcIjohMCxcImFyaWEtZXhwYW5kZWRcIjohMX0pLGEuJHdhdGNoKGQuaXNPcGVuLGZ1bmN0aW9uKGEpe2IuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhIWEpfSksYS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Yi51bmJpbmQoXCJjbGlja1wiLGUpfSl9fX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5tb2RhbFwiLFtcInVpLmJvb3RzdHJhcC50cmFuc2l0aW9uXCJdKS5mYWN0b3J5KFwiJCRzdGFja2VkTWFwXCIsZnVuY3Rpb24oKXtyZXR1cm57Y3JlYXRlTmV3OmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJue2FkZDpmdW5jdGlvbihiLGMpe2EucHVzaCh7a2V5OmIsdmFsdWU6Y30pfSxnZXQ6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYj09YVtjXS5rZXkpcmV0dXJuIGFbY119LGtleXM6ZnVuY3Rpb24oKXtmb3IodmFyIGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKWIucHVzaChhW2NdLmtleSk7cmV0dXJuIGJ9LHRvcDpmdW5jdGlvbigpe3JldHVybiBhW2EubGVuZ3RoLTFdfSxyZW1vdmU6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPS0xLGQ9MDtkPGEubGVuZ3RoO2QrKylpZihiPT1hW2RdLmtleSl7Yz1kO2JyZWFrfXJldHVybiBhLnNwbGljZShjLDEpWzBdfSxyZW1vdmVUb3A6ZnVuY3Rpb24oKXtyZXR1cm4gYS5zcGxpY2UoYS5sZW5ndGgtMSwxKVswXX0sbGVuZ3RoOmZ1bmN0aW9uKCl7cmV0dXJuIGEubGVuZ3RofX19fX0pLmRpcmVjdGl2ZShcIm1vZGFsQmFja2Ryb3BcIixbXCIkdGltZW91dFwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL21vZGFsL2JhY2tkcm9wLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGIsYyxkKXtiLmJhY2tkcm9wQ2xhc3M9ZC5iYWNrZHJvcENsYXNzfHxcIlwiLGIuYW5pbWF0ZT0hMSxhKGZ1bmN0aW9uKCl7Yi5hbmltYXRlPSEwfSl9fX1dKS5kaXJlY3RpdmUoXCJtb2RhbFdpbmRvd1wiLFtcIiRtb2RhbFN0YWNrXCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGEsYil7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTp7aW5kZXg6XCJAXCIsYW5pbWF0ZTpcIj1cIn0scmVwbGFjZTohMCx0cmFuc2NsdWRlOiEwLHRlbXBsYXRlVXJsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudGVtcGxhdGVVcmx8fFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIn0sbGluazpmdW5jdGlvbihjLGQsZSl7ZC5hZGRDbGFzcyhlLndpbmRvd0NsYXNzfHxcIlwiKSxjLnNpemU9ZS5zaXplLGIoZnVuY3Rpb24oKXtjLmFuaW1hdGU9ITAsZFswXS5xdWVyeVNlbGVjdG9yQWxsKFwiW2F1dG9mb2N1c11cIikubGVuZ3RofHxkWzBdLmZvY3VzKCl9KSxjLmNsb3NlPWZ1bmN0aW9uKGIpe3ZhciBjPWEuZ2V0VG9wKCk7YyYmYy52YWx1ZS5iYWNrZHJvcCYmXCJzdGF0aWNcIiE9Yy52YWx1ZS5iYWNrZHJvcCYmYi50YXJnZXQ9PT1iLmN1cnJlbnRUYXJnZXQmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSxhLmRpc21pc3MoYy5rZXksXCJiYWNrZHJvcCBjbGlja1wiKSl9fX19XSkuZGlyZWN0aXZlKFwibW9kYWxUcmFuc2NsdWRlXCIsZnVuY3Rpb24oKXtyZXR1cm57bGluazpmdW5jdGlvbihhLGIsYyxkLGUpe2UoYS4kcGFyZW50LGZ1bmN0aW9uKGEpe2IuZW1wdHkoKSxiLmFwcGVuZChhKX0pfX19KS5mYWN0b3J5KFwiJG1vZGFsU3RhY2tcIixbXCIkdHJhbnNpdGlvblwiLFwiJHRpbWVvdXRcIixcIiRkb2N1bWVudFwiLFwiJGNvbXBpbGVcIixcIiRyb290U2NvcGVcIixcIiQkc3RhY2tlZE1hcFwiLGZ1bmN0aW9uKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKCl7Zm9yKHZhciBhPS0xLGI9bi5rZXlzKCksYz0wO2M8Yi5sZW5ndGg7YysrKW4uZ2V0KGJbY10pLnZhbHVlLmJhY2tkcm9wJiYoYT1jKTtyZXR1cm4gYX1mdW5jdGlvbiBoKGEpe3ZhciBiPWMuZmluZChcImJvZHlcIikuZXEoMCksZD1uLmdldChhKS52YWx1ZTtuLnJlbW92ZShhKSxqKGQubW9kYWxEb21FbCxkLm1vZGFsU2NvcGUsMzAwLGZ1bmN0aW9uKCl7ZC5tb2RhbFNjb3BlLiRkZXN0cm95KCksYi50b2dnbGVDbGFzcyhtLG4ubGVuZ3RoKCk+MCksaSgpfSl9ZnVuY3Rpb24gaSgpe2lmKGsmJi0xPT1nKCkpe3ZhciBhPWw7aihrLGwsMTUwLGZ1bmN0aW9uKCl7YS4kZGVzdHJveSgpLGE9bnVsbH0pLGs9dm9pZCAwLGw9dm9pZCAwfX1mdW5jdGlvbiBqKGMsZCxlLGYpe2Z1bmN0aW9uIGcoKXtnLmRvbmV8fChnLmRvbmU9ITAsYy5yZW1vdmUoKSxmJiZmKCkpfWQuYW5pbWF0ZT0hMTt2YXIgaD1hLnRyYW5zaXRpb25FbmRFdmVudE5hbWU7aWYoaCl7dmFyIGk9YihnLGUpO2MuYmluZChoLGZ1bmN0aW9uKCl7Yi5jYW5jZWwoaSksZygpLGQuJGFwcGx5KCl9KX1lbHNlIGIoZyl9dmFyIGssbCxtPVwibW9kYWwtb3BlblwiLG49Zi5jcmVhdGVOZXcoKSxvPXt9O3JldHVybiBlLiR3YXRjaChnLGZ1bmN0aW9uKGEpe2wmJihsLmluZGV4PWEpfSksYy5iaW5kKFwia2V5ZG93blwiLGZ1bmN0aW9uKGEpe3ZhciBiOzI3PT09YS53aGljaCYmKGI9bi50b3AoKSxiJiZiLnZhbHVlLmtleWJvYXJkJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGUuJGFwcGx5KGZ1bmN0aW9uKCl7by5kaXNtaXNzKGIua2V5LFwiZXNjYXBlIGtleSBwcmVzc1wiKX0pKSl9KSxvLm9wZW49ZnVuY3Rpb24oYSxiKXtuLmFkZChhLHtkZWZlcnJlZDpiLmRlZmVycmVkLG1vZGFsU2NvcGU6Yi5zY29wZSxiYWNrZHJvcDpiLmJhY2tkcm9wLGtleWJvYXJkOmIua2V5Ym9hcmR9KTt2YXIgZj1jLmZpbmQoXCJib2R5XCIpLmVxKDApLGg9ZygpO2lmKGg+PTAmJiFrKXtsPWUuJG5ldyghMCksbC5pbmRleD1oO3ZhciBpPWFuZ3VsYXIuZWxlbWVudChcIjxkaXYgbW9kYWwtYmFja2Ryb3A+PC9kaXY+XCIpO2kuYXR0cihcImJhY2tkcm9wLWNsYXNzXCIsYi5iYWNrZHJvcENsYXNzKSxrPWQoaSkobCksZi5hcHBlbmQoayl9dmFyIGo9YW5ndWxhci5lbGVtZW50KFwiPGRpdiBtb2RhbC13aW5kb3c+PC9kaXY+XCIpO2ouYXR0cih7XCJ0ZW1wbGF0ZS11cmxcIjpiLndpbmRvd1RlbXBsYXRlVXJsLFwid2luZG93LWNsYXNzXCI6Yi53aW5kb3dDbGFzcyxzaXplOmIuc2l6ZSxpbmRleDpuLmxlbmd0aCgpLTEsYW5pbWF0ZTpcImFuaW1hdGVcIn0pLmh0bWwoYi5jb250ZW50KTt2YXIgbz1kKGopKGIuc2NvcGUpO24udG9wKCkudmFsdWUubW9kYWxEb21FbD1vLGYuYXBwZW5kKG8pLGYuYWRkQ2xhc3MobSl9LG8uY2xvc2U9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmdldChhKTtjJiYoYy52YWx1ZS5kZWZlcnJlZC5yZXNvbHZlKGIpLGgoYSkpfSxvLmRpc21pc3M9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmdldChhKTtjJiYoYy52YWx1ZS5kZWZlcnJlZC5yZWplY3QoYiksaChhKSl9LG8uZGlzbWlzc0FsbD1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy5nZXRUb3AoKTtiOyl0aGlzLmRpc21pc3MoYi5rZXksYSksYj10aGlzLmdldFRvcCgpfSxvLmdldFRvcD1mdW5jdGlvbigpe3JldHVybiBuLnRvcCgpfSxvfV0pLnByb3ZpZGVyKFwiJG1vZGFsXCIsZnVuY3Rpb24oKXt2YXIgYT17b3B0aW9uczp7YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITB9LCRnZXQ6W1wiJGluamVjdG9yXCIsXCIkcm9vdFNjb3BlXCIsXCIkcVwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkY29udHJvbGxlclwiLFwiJG1vZGFsU3RhY2tcIixmdW5jdGlvbihiLGMsZCxlLGYsZyxoKXtmdW5jdGlvbiBpKGEpe3JldHVybiBhLnRlbXBsYXRlP2Qud2hlbihhLnRlbXBsYXRlKTplLmdldChhbmd1bGFyLmlzRnVuY3Rpb24oYS50ZW1wbGF0ZVVybCk/YS50ZW1wbGF0ZVVybCgpOmEudGVtcGxhdGVVcmwse2NhY2hlOmZ9KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGF9KX1mdW5jdGlvbiBqKGEpe3ZhciBjPVtdO3JldHVybiBhbmd1bGFyLmZvckVhY2goYSxmdW5jdGlvbihhKXsoYW5ndWxhci5pc0Z1bmN0aW9uKGEpfHxhbmd1bGFyLmlzQXJyYXkoYSkpJiZjLnB1c2goZC53aGVuKGIuaW52b2tlKGEpKSl9KSxjfXZhciBrPXt9O3JldHVybiBrLm9wZW49ZnVuY3Rpb24oYil7dmFyIGU9ZC5kZWZlcigpLGY9ZC5kZWZlcigpLGs9e3Jlc3VsdDplLnByb21pc2Usb3BlbmVkOmYucHJvbWlzZSxjbG9zZTpmdW5jdGlvbihhKXtoLmNsb3NlKGssYSl9LGRpc21pc3M6ZnVuY3Rpb24oYSl7aC5kaXNtaXNzKGssYSl9fTtpZihiPWFuZ3VsYXIuZXh0ZW5kKHt9LGEub3B0aW9ucyxiKSxiLnJlc29sdmU9Yi5yZXNvbHZlfHx7fSwhYi50ZW1wbGF0ZSYmIWIudGVtcGxhdGVVcmwpdGhyb3cgbmV3IEVycm9yKFwiT25lIG9mIHRlbXBsYXRlIG9yIHRlbXBsYXRlVXJsIG9wdGlvbnMgaXMgcmVxdWlyZWQuXCIpO3ZhciBsPWQuYWxsKFtpKGIpXS5jb25jYXQoaihiLnJlc29sdmUpKSk7cmV0dXJuIGwudGhlbihmdW5jdGlvbihhKXt2YXIgZD0oYi5zY29wZXx8YykuJG5ldygpO2QuJGNsb3NlPWsuY2xvc2UsZC4kZGlzbWlzcz1rLmRpc21pc3M7dmFyIGYsaT17fSxqPTE7Yi5jb250cm9sbGVyJiYoaS4kc2NvcGU9ZCxpLiRtb2RhbEluc3RhbmNlPWssYW5ndWxhci5mb3JFYWNoKGIucmVzb2x2ZSxmdW5jdGlvbihiLGMpe2lbY109YVtqKytdfSksZj1nKGIuY29udHJvbGxlcixpKSxiLmNvbnRyb2xsZXJBcyYmKGRbYi5jb250cm9sbGVyQXNdPWYpKSxoLm9wZW4oayx7c2NvcGU6ZCxkZWZlcnJlZDplLGNvbnRlbnQ6YVswXSxiYWNrZHJvcDpiLmJhY2tkcm9wLGtleWJvYXJkOmIua2V5Ym9hcmQsYmFja2Ryb3BDbGFzczpiLmJhY2tkcm9wQ2xhc3Msd2luZG93Q2xhc3M6Yi53aW5kb3dDbGFzcyx3aW5kb3dUZW1wbGF0ZVVybDpiLndpbmRvd1RlbXBsYXRlVXJsLHNpemU6Yi5zaXplfSl9LGZ1bmN0aW9uKGEpe2UucmVqZWN0KGEpfSksbC50aGVuKGZ1bmN0aW9uKCl7Zi5yZXNvbHZlKCEwKX0sZnVuY3Rpb24oKXtmLnJlamVjdCghMSl9KSxrfSxrfV19O3JldHVybiBhfSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAucGFnaW5hdGlvblwiLFtdKS5jb250cm9sbGVyKFwiUGFnaW5hdGlvbkNvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT17JHNldFZpZXdWYWx1ZTphbmd1bGFyLm5vb3B9LGY9Yi5udW1QYWdlcz9jKGIubnVtUGFnZXMpLmFzc2lnbjphbmd1bGFyLm5vb3A7dGhpcy5pbml0PWZ1bmN0aW9uKGYsZyl7ZT1mLHRoaXMuY29uZmlnPWcsZS4kcmVuZGVyPWZ1bmN0aW9uKCl7ZC5yZW5kZXIoKX0sYi5pdGVtc1BlclBhZ2U/YS4kcGFyZW50LiR3YXRjaChjKGIuaXRlbXNQZXJQYWdlKSxmdW5jdGlvbihiKXtkLml0ZW1zUGVyUGFnZT1wYXJzZUludChiLDEwKSxhLnRvdGFsUGFnZXM9ZC5jYWxjdWxhdGVUb3RhbFBhZ2VzKCl9KTp0aGlzLml0ZW1zUGVyUGFnZT1nLml0ZW1zUGVyUGFnZX0sdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5pdGVtc1BlclBhZ2U8MT8xOk1hdGguY2VpbChhLnRvdGFsSXRlbXMvdGhpcy5pdGVtc1BlclBhZ2UpO3JldHVybiBNYXRoLm1heChifHwwLDEpfSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe2EucGFnZT1wYXJzZUludChlLiR2aWV3VmFsdWUsMTApfHwxfSxhLnNlbGVjdFBhZ2U9ZnVuY3Rpb24oYil7YS5wYWdlIT09YiYmYj4wJiZiPD1hLnRvdGFsUGFnZXMmJihlLiRzZXRWaWV3VmFsdWUoYiksZS4kcmVuZGVyKCkpfSxhLmdldFRleHQ9ZnVuY3Rpb24oYil7cmV0dXJuIGFbYitcIlRleHRcIl18fGQuY29uZmlnW2IrXCJUZXh0XCJdfSxhLm5vUHJldmlvdXM9ZnVuY3Rpb24oKXtyZXR1cm4gMT09PWEucGFnZX0sYS5ub05leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gYS5wYWdlPT09YS50b3RhbFBhZ2VzfSxhLiR3YXRjaChcInRvdGFsSXRlbXNcIixmdW5jdGlvbigpe2EudG90YWxQYWdlcz1kLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKX0pLGEuJHdhdGNoKFwidG90YWxQYWdlc1wiLGZ1bmN0aW9uKGIpe2YoYS4kcGFyZW50LGIpLGEucGFnZT5iP2Euc2VsZWN0UGFnZShiKTplLiRyZW5kZXIoKX0pfV0pLmNvbnN0YW50KFwicGFnaW5hdGlvbkNvbmZpZ1wiLHtpdGVtc1BlclBhZ2U6MTAsYm91bmRhcnlMaW5rczohMSxkaXJlY3Rpb25MaW5rczohMCxmaXJzdFRleHQ6XCJGaXJzdFwiLHByZXZpb3VzVGV4dDpcIlByZXZpb3VzXCIsbmV4dFRleHQ6XCJOZXh0XCIsbGFzdFRleHQ6XCJMYXN0XCIscm90YXRlOiEwfSkuZGlyZWN0aXZlKFwicGFnaW5hdGlvblwiLFtcIiRwYXJzZVwiLFwicGFnaW5hdGlvbkNvbmZpZ1wiLGZ1bmN0aW9uKGEsYil7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTp7dG90YWxJdGVtczpcIj1cIixmaXJzdFRleHQ6XCJAXCIscHJldmlvdXNUZXh0OlwiQFwiLG5leHRUZXh0OlwiQFwiLGxhc3RUZXh0OlwiQFwifSxyZXF1aXJlOltcInBhZ2luYXRpb25cIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJQYWdpbmF0aW9uQ29udHJvbGxlclwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmh0bWxcIixyZXBsYWNlOiEwLGxpbms6ZnVuY3Rpb24oYyxkLGUsZil7ZnVuY3Rpb24gZyhhLGIsYyl7cmV0dXJue251bWJlcjphLHRleHQ6YixhY3RpdmU6Y319ZnVuY3Rpb24gaChhLGIpe3ZhciBjPVtdLGQ9MSxlPWIsZj1hbmd1bGFyLmlzRGVmaW5lZChrKSYmYj5rO2YmJihsPyhkPU1hdGgubWF4KGEtTWF0aC5mbG9vcihrLzIpLDEpLGU9ZCtrLTEsZT5iJiYoZT1iLGQ9ZS1rKzEpKTooZD0oTWF0aC5jZWlsKGEvayktMSkqaysxLGU9TWF0aC5taW4oZCtrLTEsYikpKTtmb3IodmFyIGg9ZDtlPj1oO2grKyl7dmFyIGk9ZyhoLGgsaD09PWEpO2MucHVzaChpKX1pZihmJiYhbCl7aWYoZD4xKXt2YXIgaj1nKGQtMSxcIi4uLlwiLCExKTtjLnVuc2hpZnQoail9aWYoYj5lKXt2YXIgbT1nKGUrMSxcIi4uLlwiLCExKTtjLnB1c2gobSl9fXJldHVybiBjfXZhciBpPWZbMF0saj1mWzFdO2lmKGope3ZhciBrPWFuZ3VsYXIuaXNEZWZpbmVkKGUubWF4U2l6ZSk/Yy4kcGFyZW50LiRldmFsKGUubWF4U2l6ZSk6Yi5tYXhTaXplLGw9YW5ndWxhci5pc0RlZmluZWQoZS5yb3RhdGUpP2MuJHBhcmVudC4kZXZhbChlLnJvdGF0ZSk6Yi5yb3RhdGU7Yy5ib3VuZGFyeUxpbmtzPWFuZ3VsYXIuaXNEZWZpbmVkKGUuYm91bmRhcnlMaW5rcyk/Yy4kcGFyZW50LiRldmFsKGUuYm91bmRhcnlMaW5rcyk6Yi5ib3VuZGFyeUxpbmtzLGMuZGlyZWN0aW9uTGlua3M9YW5ndWxhci5pc0RlZmluZWQoZS5kaXJlY3Rpb25MaW5rcyk/Yy4kcGFyZW50LiRldmFsKGUuZGlyZWN0aW9uTGlua3MpOmIuZGlyZWN0aW9uTGlua3MsaS5pbml0KGosYiksZS5tYXhTaXplJiZjLiRwYXJlbnQuJHdhdGNoKGEoZS5tYXhTaXplKSxmdW5jdGlvbihhKXtrPXBhcnNlSW50KGEsMTApLGkucmVuZGVyKClcbn0pO3ZhciBtPWkucmVuZGVyO2kucmVuZGVyPWZ1bmN0aW9uKCl7bSgpLGMucGFnZT4wJiZjLnBhZ2U8PWMudG90YWxQYWdlcyYmKGMucGFnZXM9aChjLnBhZ2UsYy50b3RhbFBhZ2VzKSl9fX19fV0pLmNvbnN0YW50KFwicGFnZXJDb25maWdcIix7aXRlbXNQZXJQYWdlOjEwLHByZXZpb3VzVGV4dDpcIsKrIFByZXZpb3VzXCIsbmV4dFRleHQ6XCJOZXh0IMK7XCIsYWxpZ246ITB9KS5kaXJlY3RpdmUoXCJwYWdlclwiLFtcInBhZ2VyQ29uZmlnXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTp7dG90YWxJdGVtczpcIj1cIixwcmV2aW91c1RleHQ6XCJAXCIsbmV4dFRleHQ6XCJAXCJ9LHJlcXVpcmU6W1wicGFnZXJcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJQYWdpbmF0aW9uQ29udHJvbGxlclwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdlci5odG1sXCIscmVwbGFjZTohMCxsaW5rOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmPWVbMF0sZz1lWzFdO2cmJihiLmFsaWduPWFuZ3VsYXIuaXNEZWZpbmVkKGQuYWxpZ24pP2IuJHBhcmVudC4kZXZhbChkLmFsaWduKTphLmFsaWduLGYuaW5pdChnLGEpKX19fV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRvb2x0aXBcIixbXCJ1aS5ib290c3RyYXAucG9zaXRpb25cIixcInVpLmJvb3RzdHJhcC5iaW5kSHRtbFwiXSkucHJvdmlkZXIoXCIkdG9vbHRpcFwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt2YXIgYj0vW0EtWl0vZyxjPVwiLVwiO3JldHVybiBhLnJlcGxhY2UoYixmdW5jdGlvbihhLGIpe3JldHVybihiP2M6XCJcIikrYS50b0xvd2VyQ2FzZSgpfSl9dmFyIGI9e3BsYWNlbWVudDpcInRvcFwiLGFuaW1hdGlvbjohMCxwb3B1cERlbGF5OjB9LGM9e21vdXNlZW50ZXI6XCJtb3VzZWxlYXZlXCIsY2xpY2s6XCJjbGlja1wiLGZvY3VzOlwiYmx1clwifSxkPXt9O3RoaXMub3B0aW9ucz1mdW5jdGlvbihhKXthbmd1bGFyLmV4dGVuZChkLGEpfSx0aGlzLnNldFRyaWdnZXJzPWZ1bmN0aW9uKGEpe2FuZ3VsYXIuZXh0ZW5kKGMsYSl9LHRoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkY29tcGlsZVwiLFwiJHRpbWVvdXRcIixcIiRwYXJzZVwiLFwiJGRvY3VtZW50XCIsXCIkcG9zaXRpb25cIixcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGUsZixnLGgsaSxqLGspe3JldHVybiBmdW5jdGlvbihlLGwsbSl7ZnVuY3Rpb24gbihhKXt2YXIgYj1hfHxvLnRyaWdnZXJ8fG0sZD1jW2JdfHxiO3JldHVybntzaG93OmIsaGlkZTpkfX12YXIgbz1hbmd1bGFyLmV4dGVuZCh7fSxiLGQpLHA9YShlKSxxPWsuc3RhcnRTeW1ib2woKSxyPWsuZW5kU3ltYm9sKCkscz1cIjxkaXYgXCIrcCsnLXBvcHVwIHRpdGxlPVwiJytxK1widHRfdGl0bGVcIityKydcIiBjb250ZW50PVwiJytxK1widHRfY29udGVudFwiK3IrJ1wiIHBsYWNlbWVudD1cIicrcStcInR0X3BsYWNlbWVudFwiK3IrJ1wiIGFuaW1hdGlvbj1cInR0X2FuaW1hdGlvblwiIGlzLW9wZW49XCJ0dF9pc09wZW5cIj48L2Rpdj4nO3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6ITAsY29tcGlsZTpmdW5jdGlvbigpe3ZhciBhPWYocyk7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBmKCl7Yi50dF9pc09wZW4/bSgpOmsoKX1mdW5jdGlvbiBrKCl7KCF5fHxiLiRldmFsKGRbbCtcIkVuYWJsZVwiXSkpJiYoYi50dF9wb3B1cERlbGF5P3Z8fCh2PWcocCxiLnR0X3BvcHVwRGVsYXksITEpLHYudGhlbihmdW5jdGlvbihhKXthKCl9KSk6cCgpKCkpfWZ1bmN0aW9uIG0oKXtiLiRhcHBseShmdW5jdGlvbigpe3EoKX0pfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdj1udWxsLHUmJihnLmNhbmNlbCh1KSx1PW51bGwpLGIudHRfY29udGVudD8ocigpLHQuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KSx3P2kuZmluZChcImJvZHlcIikuYXBwZW5kKHQpOmMuYWZ0ZXIodCkseigpLGIudHRfaXNPcGVuPSEwLGIuJGRpZ2VzdCgpLHopOmFuZ3VsYXIubm9vcH1mdW5jdGlvbiBxKCl7Yi50dF9pc09wZW49ITEsZy5jYW5jZWwodiksdj1udWxsLGIudHRfYW5pbWF0aW9uP3V8fCh1PWcocyw1MDApKTpzKCl9ZnVuY3Rpb24gcigpe3QmJnMoKSx0PWEoYixmdW5jdGlvbigpe30pLGIuJGRpZ2VzdCgpfWZ1bmN0aW9uIHMoKXt1PW51bGwsdCYmKHQucmVtb3ZlKCksdD1udWxsKX12YXIgdCx1LHYsdz1hbmd1bGFyLmlzRGVmaW5lZChvLmFwcGVuZFRvQm9keSk/by5hcHBlbmRUb0JvZHk6ITEseD1uKHZvaWQgMCkseT1hbmd1bGFyLmlzRGVmaW5lZChkW2wrXCJFbmFibGVcIl0pLHo9ZnVuY3Rpb24oKXt2YXIgYT1qLnBvc2l0aW9uRWxlbWVudHMoYyx0LGIudHRfcGxhY2VtZW50LHcpO2EudG9wKz1cInB4XCIsYS5sZWZ0Kz1cInB4XCIsdC5jc3MoYSl9O2IudHRfaXNPcGVuPSExLGQuJG9ic2VydmUoZSxmdW5jdGlvbihhKXtiLnR0X2NvbnRlbnQ9YSwhYSYmYi50dF9pc09wZW4mJnEoKX0pLGQuJG9ic2VydmUobCtcIlRpdGxlXCIsZnVuY3Rpb24oYSl7Yi50dF90aXRsZT1hfSksZC4kb2JzZXJ2ZShsK1wiUGxhY2VtZW50XCIsZnVuY3Rpb24oYSl7Yi50dF9wbGFjZW1lbnQ9YW5ndWxhci5pc0RlZmluZWQoYSk/YTpvLnBsYWNlbWVudH0pLGQuJG9ic2VydmUobCtcIlBvcHVwRGVsYXlcIixmdW5jdGlvbihhKXt2YXIgYz1wYXJzZUludChhLDEwKTtiLnR0X3BvcHVwRGVsYXk9aXNOYU4oYyk/by5wb3B1cERlbGF5OmN9KTt2YXIgQT1mdW5jdGlvbigpe2MudW5iaW5kKHguc2hvdyxrKSxjLnVuYmluZCh4LmhpZGUsbSl9O2QuJG9ic2VydmUobCtcIlRyaWdnZXJcIixmdW5jdGlvbihhKXtBKCkseD1uKGEpLHguc2hvdz09PXguaGlkZT9jLmJpbmQoeC5zaG93LGYpOihjLmJpbmQoeC5zaG93LGspLGMuYmluZCh4LmhpZGUsbSkpfSk7dmFyIEI9Yi4kZXZhbChkW2wrXCJBbmltYXRpb25cIl0pO2IudHRfYW5pbWF0aW9uPWFuZ3VsYXIuaXNEZWZpbmVkKEIpPyEhQjpvLmFuaW1hdGlvbixkLiRvYnNlcnZlKGwrXCJBcHBlbmRUb0JvZHlcIixmdW5jdGlvbihhKXt3PWFuZ3VsYXIuaXNEZWZpbmVkKGEpP2goYSkoYik6d30pLHcmJmIuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGZ1bmN0aW9uKCl7Yi50dF9pc09wZW4mJnEoKX0pLGIuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2cuY2FuY2VsKHUpLGcuY2FuY2VsKHYpLEEoKSxzKCl9KX19fX19XX0pLmRpcmVjdGl2ZShcInRvb2x0aXBQb3B1cFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHNjb3BlOntjb250ZW50OlwiQFwiLHBsYWNlbWVudDpcIkBcIixhbmltYXRpb246XCImXCIsaXNPcGVuOlwiJlwifSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1wb3B1cC5odG1sXCJ9fSkuZGlyZWN0aXZlKFwidG9vbHRpcFwiLFtcIiR0b29sdGlwXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEoXCJ0b29sdGlwXCIsXCJ0b29sdGlwXCIsXCJtb3VzZWVudGVyXCIpfV0pLmRpcmVjdGl2ZShcInRvb2x0aXBIdG1sVW5zYWZlUG9wdXBcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCxzY29wZTp7Y29udGVudDpcIkBcIixwbGFjZW1lbnQ6XCJAXCIsYW5pbWF0aW9uOlwiJlwiLGlzT3BlbjpcIiZcIn0sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtaHRtbC11bnNhZmUtcG9wdXAuaHRtbFwifX0pLmRpcmVjdGl2ZShcInRvb2x0aXBIdG1sVW5zYWZlXCIsW1wiJHRvb2x0aXBcIixmdW5jdGlvbihhKXtyZXR1cm4gYShcInRvb2x0aXBIdG1sVW5zYWZlXCIsXCJ0b29sdGlwXCIsXCJtb3VzZWVudGVyXCIpfV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnBvcG92ZXJcIixbXCJ1aS5ib290c3RyYXAudG9vbHRpcFwiXSkuZGlyZWN0aXZlKFwicG9wb3ZlclBvcHVwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsc2NvcGU6e3RpdGxlOlwiQFwiLGNvbnRlbnQ6XCJAXCIscGxhY2VtZW50OlwiQFwiLGFuaW1hdGlvbjpcIiZcIixpc09wZW46XCImXCJ9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIn19KS5kaXJlY3RpdmUoXCJwb3BvdmVyXCIsW1wiJHRvb2x0aXBcIixmdW5jdGlvbihhKXtyZXR1cm4gYShcInBvcG92ZXJcIixcInBvcG92ZXJcIixcImNsaWNrXCIpfV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnByb2dyZXNzYmFyXCIsW10pLmNvbnN0YW50KFwicHJvZ3Jlc3NDb25maWdcIix7YW5pbWF0ZTohMCxtYXg6MTAwfSkuY29udHJvbGxlcihcIlByb2dyZXNzQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCJwcm9ncmVzc0NvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9YW5ndWxhci5pc0RlZmluZWQoYi5hbmltYXRlKT9hLiRwYXJlbnQuJGV2YWwoYi5hbmltYXRlKTpjLmFuaW1hdGU7dGhpcy5iYXJzPVtdLGEubWF4PWFuZ3VsYXIuaXNEZWZpbmVkKGIubWF4KT9hLiRwYXJlbnQuJGV2YWwoYi5tYXgpOmMubWF4LHRoaXMuYWRkQmFyPWZ1bmN0aW9uKGIsYyl7ZXx8Yy5jc3Moe3RyYW5zaXRpb246XCJub25lXCJ9KSx0aGlzLmJhcnMucHVzaChiKSxiLiR3YXRjaChcInZhbHVlXCIsZnVuY3Rpb24oYyl7Yi5wZXJjZW50PSsoMTAwKmMvYS5tYXgpLnRvRml4ZWQoMil9KSxiLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtjPW51bGwsZC5yZW1vdmVCYXIoYil9KX0sdGhpcy5yZW1vdmVCYXI9ZnVuY3Rpb24oYSl7dGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihhKSwxKX19XSkuZGlyZWN0aXZlKFwicHJvZ3Jlc3NcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0cmFuc2NsdWRlOiEwLGNvbnRyb2xsZXI6XCJQcm9ncmVzc0NvbnRyb2xsZXJcIixyZXF1aXJlOlwicHJvZ3Jlc3NcIixzY29wZTp7fSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIn19KS5kaXJlY3RpdmUoXCJiYXJcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0cmFuc2NsdWRlOiEwLHJlcXVpcmU6XCJecHJvZ3Jlc3NcIixzY29wZTp7dmFsdWU6XCI9XCIsdHlwZTpcIkBcIn0sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZC5hZGRCYXIoYSxiKX19fSkuZGlyZWN0aXZlKFwicHJvZ3Jlc3NiYXJcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0cmFuc2NsdWRlOiEwLGNvbnRyb2xsZXI6XCJQcm9ncmVzc0NvbnRyb2xsZXJcIixzY29wZTp7dmFsdWU6XCI9XCIsdHlwZTpcIkBcIn0sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtkLmFkZEJhcihhLGFuZ3VsYXIuZWxlbWVudChiLmNoaWxkcmVuKClbMF0pKX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAucmF0aW5nXCIsW10pLmNvbnN0YW50KFwicmF0aW5nQ29uZmlnXCIse21heDo1LHN0YXRlT246bnVsbCxzdGF0ZU9mZjpudWxsfSkuY29udHJvbGxlcihcIlJhdGluZ0NvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwicmF0aW5nQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXskc2V0Vmlld1ZhbHVlOmFuZ3VsYXIubm9vcH07dGhpcy5pbml0PWZ1bmN0aW9uKGUpe2Q9ZSxkLiRyZW5kZXI9dGhpcy5yZW5kZXIsdGhpcy5zdGF0ZU9uPWFuZ3VsYXIuaXNEZWZpbmVkKGIuc3RhdGVPbik/YS4kcGFyZW50LiRldmFsKGIuc3RhdGVPbik6Yy5zdGF0ZU9uLHRoaXMuc3RhdGVPZmY9YW5ndWxhci5pc0RlZmluZWQoYi5zdGF0ZU9mZik/YS4kcGFyZW50LiRldmFsKGIuc3RhdGVPZmYpOmMuc3RhdGVPZmY7dmFyIGY9YW5ndWxhci5pc0RlZmluZWQoYi5yYXRpbmdTdGF0ZXMpP2EuJHBhcmVudC4kZXZhbChiLnJhdGluZ1N0YXRlcyk6bmV3IEFycmF5KGFuZ3VsYXIuaXNEZWZpbmVkKGIubWF4KT9hLiRwYXJlbnQuJGV2YWwoYi5tYXgpOmMubWF4KTthLnJhbmdlPXRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHMoZil9LHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtjPmI7YisrKWFbYl09YW5ndWxhci5leHRlbmQoe2luZGV4OmJ9LHtzdGF0ZU9uOnRoaXMuc3RhdGVPbixzdGF0ZU9mZjp0aGlzLnN0YXRlT2ZmfSxhW2JdKTtyZXR1cm4gYX0sYS5yYXRlPWZ1bmN0aW9uKGIpeyFhLnJlYWRvbmx5JiZiPj0wJiZiPD1hLnJhbmdlLmxlbmd0aCYmKGQuJHNldFZpZXdWYWx1ZShiKSxkLiRyZW5kZXIoKSl9LGEuZW50ZXI9ZnVuY3Rpb24oYil7YS5yZWFkb25seXx8KGEudmFsdWU9YiksYS5vbkhvdmVyKHt2YWx1ZTpifSl9LGEucmVzZXQ9ZnVuY3Rpb24oKXthLnZhbHVlPWQuJHZpZXdWYWx1ZSxhLm9uTGVhdmUoKX0sYS5vbktleWRvd249ZnVuY3Rpb24oYil7LygzN3wzOHwzOXw0MCkvLnRlc3QoYi53aGljaCkmJihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSxhLnJhdGUoYS52YWx1ZSsoMzg9PT1iLndoaWNofHwzOT09PWIud2hpY2g/MTotMSkpKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24oKXthLnZhbHVlPWQuJHZpZXdWYWx1ZX19XSkuZGlyZWN0aXZlKFwicmF0aW5nXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6W1wicmF0aW5nXCIsXCJuZ01vZGVsXCJdLHNjb3BlOntyZWFkb25seTpcIj0/XCIsb25Ib3ZlcjpcIiZcIixvbkxlYXZlOlwiJlwifSxjb250cm9sbGVyOlwiUmF0aW5nQ29udHJvbGxlclwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIscmVwbGFjZTohMCxsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWRbMF0sZj1kWzFdO2YmJmUuaW5pdChmKX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudGFic1wiLFtdKS5jb250cm9sbGVyKFwiVGFic2V0Q29udHJvbGxlclwiLFtcIiRzY29wZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLnRhYnM9YS50YWJzPVtdO2Iuc2VsZWN0PWZ1bmN0aW9uKGEpe2FuZ3VsYXIuZm9yRWFjaChjLGZ1bmN0aW9uKGIpe2IuYWN0aXZlJiZiIT09YSYmKGIuYWN0aXZlPSExLGIub25EZXNlbGVjdCgpKX0pLGEuYWN0aXZlPSEwLGEub25TZWxlY3QoKX0sYi5hZGRUYWI9ZnVuY3Rpb24oYSl7Yy5wdXNoKGEpLDE9PT1jLmxlbmd0aD9hLmFjdGl2ZT0hMDphLmFjdGl2ZSYmYi5zZWxlY3QoYSl9LGIucmVtb3ZlVGFiPWZ1bmN0aW9uKGEpe3ZhciBkPWMuaW5kZXhPZihhKTtpZihhLmFjdGl2ZSYmYy5sZW5ndGg+MSl7dmFyIGU9ZD09Yy5sZW5ndGgtMT9kLTE6ZCsxO2Iuc2VsZWN0KGNbZV0pfWMuc3BsaWNlKGQsMSl9fV0pLmRpcmVjdGl2ZShcInRhYnNldFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITAsc2NvcGU6e3R5cGU6XCJAXCJ9LGNvbnRyb2xsZXI6XCJUYWJzZXRDb250cm9sbGVyXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsbGluazpmdW5jdGlvbihhLGIsYyl7YS52ZXJ0aWNhbD1hbmd1bGFyLmlzRGVmaW5lZChjLnZlcnRpY2FsKT9hLiRwYXJlbnQuJGV2YWwoYy52ZXJ0aWNhbCk6ITEsYS5qdXN0aWZpZWQ9YW5ndWxhci5pc0RlZmluZWQoYy5qdXN0aWZpZWQpP2EuJHBhcmVudC4kZXZhbChjLmp1c3RpZmllZCk6ITF9fX0pLmRpcmVjdGl2ZShcInRhYlwiLFtcIiRwYXJzZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXF1aXJlOlwiXnRhYnNldFwiLHJlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLHRyYW5zY2x1ZGU6ITAsc2NvcGU6e2FjdGl2ZTpcIj0/XCIsaGVhZGluZzpcIkBcIixvblNlbGVjdDpcIiZzZWxlY3RcIixvbkRlc2VsZWN0OlwiJmRlc2VsZWN0XCJ9LGNvbnRyb2xsZXI6ZnVuY3Rpb24oKXt9LGNvbXBpbGU6ZnVuY3Rpb24oYixjLGQpe3JldHVybiBmdW5jdGlvbihiLGMsZSxmKXtiLiR3YXRjaChcImFjdGl2ZVwiLGZ1bmN0aW9uKGEpe2EmJmYuc2VsZWN0KGIpfSksYi5kaXNhYmxlZD0hMSxlLmRpc2FibGVkJiZiLiRwYXJlbnQuJHdhdGNoKGEoZS5kaXNhYmxlZCksZnVuY3Rpb24oYSl7Yi5kaXNhYmxlZD0hIWF9KSxiLnNlbGVjdD1mdW5jdGlvbigpe2IuZGlzYWJsZWR8fChiLmFjdGl2ZT0hMCl9LGYuYWRkVGFiKGIpLGIuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2YucmVtb3ZlVGFiKGIpfSksYi4kdHJhbnNjbHVkZUZuPWR9fX19XSkuZGlyZWN0aXZlKFwidGFiSGVhZGluZ1RyYW5zY2x1ZGVcIixbZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJBXCIscmVxdWlyZTpcIl50YWJcIixsaW5rOmZ1bmN0aW9uKGEsYil7YS4kd2F0Y2goXCJoZWFkaW5nRWxlbWVudFwiLGZ1bmN0aW9uKGEpe2EmJihiLmh0bWwoXCJcIiksYi5hcHBlbmQoYSkpfSl9fX1dKS5kaXJlY3RpdmUoXCJ0YWJDb250ZW50VHJhbnNjbHVkZVwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gYS50YWdOYW1lJiYoYS5oYXNBdHRyaWJ1dGUoXCJ0YWItaGVhZGluZ1wiKXx8YS5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRhYi1oZWFkaW5nXCIpfHxcInRhYi1oZWFkaW5nXCI9PT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKXx8XCJkYXRhLXRhYi1oZWFkaW5nXCI9PT1hLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl9cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCJedGFic2V0XCIsbGluazpmdW5jdGlvbihiLGMsZCl7dmFyIGU9Yi4kZXZhbChkLnRhYkNvbnRlbnRUcmFuc2NsdWRlKTtlLiR0cmFuc2NsdWRlRm4oZS4kcGFyZW50LGZ1bmN0aW9uKGIpe2FuZ3VsYXIuZm9yRWFjaChiLGZ1bmN0aW9uKGIpe2EoYik/ZS5oZWFkaW5nRWxlbWVudD1iOmMuYXBwZW5kKGIpfSl9KX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudGltZXBpY2tlclwiLFtdKS5jb25zdGFudChcInRpbWVwaWNrZXJDb25maWdcIix7aG91clN0ZXA6MSxtaW51dGVTdGVwOjEsc2hvd01lcmlkaWFuOiEwLG1lcmlkaWFuczpudWxsLHJlYWRvbmx5SW5wdXQ6ITEsbW91c2V3aGVlbDohMH0pLmNvbnRyb2xsZXIoXCJUaW1lcGlja2VyQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCIkcGFyc2VcIixcIiRsb2dcIixcIiRsb2NhbGVcIixcInRpbWVwaWNrZXJDb25maWdcIixmdW5jdGlvbihhLGIsYyxkLGUsZil7ZnVuY3Rpb24gZygpe3ZhciBiPXBhcnNlSW50KGEuaG91cnMsMTApLGM9YS5zaG93TWVyaWRpYW4/Yj4wJiYxMz5iOmI+PTAmJjI0PmI7cmV0dXJuIGM/KGEuc2hvd01lcmlkaWFuJiYoMTI9PT1iJiYoYj0wKSxhLm1lcmlkaWFuPT09cFsxXSYmKGIrPTEyKSksYik6dm9pZCAwfWZ1bmN0aW9uIGgoKXt2YXIgYj1wYXJzZUludChhLm1pbnV0ZXMsMTApO3JldHVybiBiPj0wJiY2MD5iP2I6dm9pZCAwfWZ1bmN0aW9uIGkoYSl7cmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKGEpJiZhLnRvU3RyaW5nKCkubGVuZ3RoPDI/XCIwXCIrYTphfWZ1bmN0aW9uIGooYSl7aygpLG8uJHNldFZpZXdWYWx1ZShuZXcgRGF0ZShuKSksbChhKX1mdW5jdGlvbiBrKCl7by4kc2V0VmFsaWRpdHkoXCJ0aW1lXCIsITApLGEuaW52YWxpZEhvdXJzPSExLGEuaW52YWxpZE1pbnV0ZXM9ITF9ZnVuY3Rpb24gbChiKXt2YXIgYz1uLmdldEhvdXJzKCksZD1uLmdldE1pbnV0ZXMoKTthLnNob3dNZXJpZGlhbiYmKGM9MD09PWN8fDEyPT09Yz8xMjpjJTEyKSxhLmhvdXJzPVwiaFwiPT09Yj9jOmkoYyksYS5taW51dGVzPVwibVwiPT09Yj9kOmkoZCksYS5tZXJpZGlhbj1uLmdldEhvdXJzKCk8MTI/cFswXTpwWzFdfWZ1bmN0aW9uIG0oYSl7dmFyIGI9bmV3IERhdGUobi5nZXRUaW1lKCkrNmU0KmEpO24uc2V0SG91cnMoYi5nZXRIb3VycygpLGIuZ2V0TWludXRlcygpKSxqKCl9dmFyIG49bmV3IERhdGUsbz17JHNldFZpZXdWYWx1ZTphbmd1bGFyLm5vb3B9LHA9YW5ndWxhci5pc0RlZmluZWQoYi5tZXJpZGlhbnMpP2EuJHBhcmVudC4kZXZhbChiLm1lcmlkaWFucyk6Zi5tZXJpZGlhbnN8fGUuREFURVRJTUVfRk9STUFUUy5BTVBNUzt0aGlzLmluaXQ9ZnVuY3Rpb24oYyxkKXtvPWMsby4kcmVuZGVyPXRoaXMucmVuZGVyO3ZhciBlPWQuZXEoMCksZz1kLmVxKDEpLGg9YW5ndWxhci5pc0RlZmluZWQoYi5tb3VzZXdoZWVsKT9hLiRwYXJlbnQuJGV2YWwoYi5tb3VzZXdoZWVsKTpmLm1vdXNld2hlZWw7aCYmdGhpcy5zZXR1cE1vdXNld2hlZWxFdmVudHMoZSxnKSxhLnJlYWRvbmx5SW5wdXQ9YW5ndWxhci5pc0RlZmluZWQoYi5yZWFkb25seUlucHV0KT9hLiRwYXJlbnQuJGV2YWwoYi5yZWFkb25seUlucHV0KTpmLnJlYWRvbmx5SW5wdXQsdGhpcy5zZXR1cElucHV0RXZlbnRzKGUsZyl9O3ZhciBxPWYuaG91clN0ZXA7Yi5ob3VyU3RlcCYmYS4kcGFyZW50LiR3YXRjaChjKGIuaG91clN0ZXApLGZ1bmN0aW9uKGEpe3E9cGFyc2VJbnQoYSwxMCl9KTt2YXIgcj1mLm1pbnV0ZVN0ZXA7Yi5taW51dGVTdGVwJiZhLiRwYXJlbnQuJHdhdGNoKGMoYi5taW51dGVTdGVwKSxmdW5jdGlvbihhKXtyPXBhcnNlSW50KGEsMTApfSksYS5zaG93TWVyaWRpYW49Zi5zaG93TWVyaWRpYW4sYi5zaG93TWVyaWRpYW4mJmEuJHBhcmVudC4kd2F0Y2goYyhiLnNob3dNZXJpZGlhbiksZnVuY3Rpb24oYil7aWYoYS5zaG93TWVyaWRpYW49ISFiLG8uJGVycm9yLnRpbWUpe3ZhciBjPWcoKSxkPWgoKTthbmd1bGFyLmlzRGVmaW5lZChjKSYmYW5ndWxhci5pc0RlZmluZWQoZCkmJihuLnNldEhvdXJzKGMpLGooKSl9ZWxzZSBsKCl9KSx0aGlzLnNldHVwTW91c2V3aGVlbEV2ZW50cz1mdW5jdGlvbihiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe2Eub3JpZ2luYWxFdmVudCYmKGE9YS5vcmlnaW5hbEV2ZW50KTt2YXIgYj1hLndoZWVsRGVsdGE/YS53aGVlbERlbHRhOi1hLmRlbHRhWTtyZXR1cm4gYS5kZXRhaWx8fGI+MH07Yi5iaW5kKFwibW91c2V3aGVlbCB3aGVlbFwiLGZ1bmN0aW9uKGIpe2EuJGFwcGx5KGQoYik/YS5pbmNyZW1lbnRIb3VycygpOmEuZGVjcmVtZW50SG91cnMoKSksYi5wcmV2ZW50RGVmYXVsdCgpfSksYy5iaW5kKFwibW91c2V3aGVlbCB3aGVlbFwiLGZ1bmN0aW9uKGIpe2EuJGFwcGx5KGQoYik/YS5pbmNyZW1lbnRNaW51dGVzKCk6YS5kZWNyZW1lbnRNaW51dGVzKCkpLGIucHJldmVudERlZmF1bHQoKX0pfSx0aGlzLnNldHVwSW5wdXRFdmVudHM9ZnVuY3Rpb24oYixjKXtpZihhLnJlYWRvbmx5SW5wdXQpcmV0dXJuIGEudXBkYXRlSG91cnM9YW5ndWxhci5ub29wLHZvaWQoYS51cGRhdGVNaW51dGVzPWFuZ3VsYXIubm9vcCk7dmFyIGQ9ZnVuY3Rpb24oYixjKXtvLiRzZXRWaWV3VmFsdWUobnVsbCksby4kc2V0VmFsaWRpdHkoXCJ0aW1lXCIsITEpLGFuZ3VsYXIuaXNEZWZpbmVkKGIpJiYoYS5pbnZhbGlkSG91cnM9YiksYW5ndWxhci5pc0RlZmluZWQoYykmJihhLmludmFsaWRNaW51dGVzPWMpfTthLnVwZGF0ZUhvdXJzPWZ1bmN0aW9uKCl7dmFyIGE9ZygpO2FuZ3VsYXIuaXNEZWZpbmVkKGEpPyhuLnNldEhvdXJzKGEpLGooXCJoXCIpKTpkKCEwKX0sYi5iaW5kKFwiYmx1clwiLGZ1bmN0aW9uKCl7IWEuaW52YWxpZEhvdXJzJiZhLmhvdXJzPDEwJiZhLiRhcHBseShmdW5jdGlvbigpe2EuaG91cnM9aShhLmhvdXJzKX0pfSksYS51cGRhdGVNaW51dGVzPWZ1bmN0aW9uKCl7dmFyIGE9aCgpO2FuZ3VsYXIuaXNEZWZpbmVkKGEpPyhuLnNldE1pbnV0ZXMoYSksaihcIm1cIikpOmQodm9pZCAwLCEwKX0sYy5iaW5kKFwiYmx1clwiLGZ1bmN0aW9uKCl7IWEuaW52YWxpZE1pbnV0ZXMmJmEubWludXRlczwxMCYmYS4kYXBwbHkoZnVuY3Rpb24oKXthLm1pbnV0ZXM9aShhLm1pbnV0ZXMpfSl9KX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1vLiRtb2RlbFZhbHVlP25ldyBEYXRlKG8uJG1vZGVsVmFsdWUpOm51bGw7aXNOYU4oYSk/KG8uJHNldFZhbGlkaXR5KFwidGltZVwiLCExKSxkLmVycm9yKCdUaW1lcGlja2VyIGRpcmVjdGl2ZTogXCJuZy1tb2RlbFwiIHZhbHVlIG11c3QgYmUgYSBEYXRlIG9iamVjdCwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDAxLjAxLjE5NzAgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIFJGQzI4MjIgb3IgSVNPIDg2MDEgZGF0ZS4nKSk6KGEmJihuPWEpLGsoKSxsKCkpfSxhLmluY3JlbWVudEhvdXJzPWZ1bmN0aW9uKCl7bSg2MCpxKX0sYS5kZWNyZW1lbnRIb3Vycz1mdW5jdGlvbigpe20oNjAqLXEpfSxhLmluY3JlbWVudE1pbnV0ZXM9ZnVuY3Rpb24oKXttKHIpfSxhLmRlY3JlbWVudE1pbnV0ZXM9ZnVuY3Rpb24oKXttKC1yKX0sYS50b2dnbGVNZXJpZGlhbj1mdW5jdGlvbigpe20oNzIwKihuLmdldEhvdXJzKCk8MTI/MTotMSkpfX1dKS5kaXJlY3RpdmUoXCJ0aW1lcGlja2VyXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6W1widGltZXBpY2tlclwiLFwiP15uZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJUaW1lcGlja2VyQ29udHJvbGxlclwiLHJlcGxhY2U6ITAsc2NvcGU6e30sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZFswXSxmPWRbMV07ZiYmZS5pbml0KGYsYi5maW5kKFwiaW5wdXRcIikpfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50eXBlYWhlYWRcIixbXCJ1aS5ib290c3RyYXAucG9zaXRpb25cIixcInVpLmJvb3RzdHJhcC5iaW5kSHRtbFwiXSkuZmFjdG9yeShcInR5cGVhaGVhZFBhcnNlclwiLFtcIiRwYXJzZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPS9eXFxzKihbXFxzXFxTXSs/KSg/Olxccythc1xccysoW1xcc1xcU10rPykpP1xccytmb3JcXHMrKD86KFtcXCRcXHddW1xcJFxcd1xcZF0qKSlcXHMraW5cXHMrKFtcXHNcXFNdKz8pJC87cmV0dXJue3BhcnNlOmZ1bmN0aW9uKGMpe3ZhciBkPWMubWF0Y2goYik7aWYoIWQpdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0eXBlYWhlYWQgc3BlY2lmaWNhdGlvbiBpbiBmb3JtIG9mIFwiX21vZGVsVmFsdWVfIChhcyBfbGFiZWxfKT8gZm9yIF9pdGVtXyBpbiBfY29sbGVjdGlvbl9cIiBidXQgZ290IFwiJytjKydcIi4nKTtyZXR1cm57aXRlbU5hbWU6ZFszXSxzb3VyY2U6YShkWzRdKSx2aWV3TWFwcGVyOmEoZFsyXXx8ZFsxXSksbW9kZWxNYXBwZXI6YShkWzFdKX19fX1dKS5kaXJlY3RpdmUoXCJ0eXBlYWhlYWRcIixbXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsXCIkcVwiLFwiJHRpbWVvdXRcIixcIiRkb2N1bWVudFwiLFwiJHBvc2l0aW9uXCIsXCJ0eXBlYWhlYWRQYXJzZXJcIixmdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD1bOSwxMywyNywzOCw0MF07cmV0dXJue3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihpLGosayxsKXt2YXIgbSxuPWkuJGV2YWwoay50eXBlYWhlYWRNaW5MZW5ndGgpfHwxLG89aS4kZXZhbChrLnR5cGVhaGVhZFdhaXRNcyl8fDAscD1pLiRldmFsKGsudHlwZWFoZWFkRWRpdGFibGUpIT09ITEscT1iKGsudHlwZWFoZWFkTG9hZGluZykuYXNzaWdufHxhbmd1bGFyLm5vb3Ascj1iKGsudHlwZWFoZWFkT25TZWxlY3QpLHM9ay50eXBlYWhlYWRJbnB1dEZvcm1hdHRlcj9iKGsudHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXIpOnZvaWQgMCx0PWsudHlwZWFoZWFkQXBwZW5kVG9Cb2R5P2kuJGV2YWwoay50eXBlYWhlYWRBcHBlbmRUb0JvZHkpOiExLHU9YihrLm5nTW9kZWwpLmFzc2lnbix2PWcucGFyc2Uoay50eXBlYWhlYWQpLHc9aS4kbmV3KCk7aS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7dy4kZGVzdHJveSgpfSk7dmFyIHg9XCJ0eXBlYWhlYWQtXCIrdy4kaWQrXCItXCIrTWF0aC5mbG9vcigxZTQqTWF0aC5yYW5kb20oKSk7ai5hdHRyKHtcImFyaWEtYXV0b2NvbXBsZXRlXCI6XCJsaXN0XCIsXCJhcmlhLWV4cGFuZGVkXCI6ITEsXCJhcmlhLW93bnNcIjp4fSk7dmFyIHk9YW5ndWxhci5lbGVtZW50KFwiPGRpdiB0eXBlYWhlYWQtcG9wdXA+PC9kaXY+XCIpO3kuYXR0cih7aWQ6eCxtYXRjaGVzOlwibWF0Y2hlc1wiLGFjdGl2ZTpcImFjdGl2ZUlkeFwiLHNlbGVjdDpcInNlbGVjdChhY3RpdmVJZHgpXCIscXVlcnk6XCJxdWVyeVwiLHBvc2l0aW9uOlwicG9zaXRpb25cIn0pLGFuZ3VsYXIuaXNEZWZpbmVkKGsudHlwZWFoZWFkVGVtcGxhdGVVcmwpJiZ5LmF0dHIoXCJ0ZW1wbGF0ZS11cmxcIixrLnR5cGVhaGVhZFRlbXBsYXRlVXJsKTt2YXIgej1mdW5jdGlvbigpe3cubWF0Y2hlcz1bXSx3LmFjdGl2ZUlkeD0tMSxqLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpfSxBPWZ1bmN0aW9uKGEpe3JldHVybiB4K1wiLW9wdGlvbi1cIithfTt3LiR3YXRjaChcImFjdGl2ZUlkeFwiLGZ1bmN0aW9uKGEpezA+YT9qLnJlbW92ZUF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIik6ai5hdHRyKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsQShhKSl9KTt2YXIgQj1mdW5jdGlvbihhKXt2YXIgYj17JHZpZXdWYWx1ZTphfTtxKGksITApLGMud2hlbih2LnNvdXJjZShpLGIpKS50aGVuKGZ1bmN0aW9uKGMpe3ZhciBkPWE9PT1sLiR2aWV3VmFsdWU7aWYoZCYmbSlpZihjLmxlbmd0aD4wKXt3LmFjdGl2ZUlkeD0wLHcubWF0Y2hlcy5sZW5ndGg9MDtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW3YuaXRlbU5hbWVdPWNbZV0sdy5tYXRjaGVzLnB1c2goe2lkOkEoZSksbGFiZWw6di52aWV3TWFwcGVyKHcsYiksbW9kZWw6Y1tlXX0pO3cucXVlcnk9YSx3LnBvc2l0aW9uPXQ/Zi5vZmZzZXQoaik6Zi5wb3NpdGlvbihqKSx3LnBvc2l0aW9uLnRvcD13LnBvc2l0aW9uLnRvcCtqLnByb3AoXCJvZmZzZXRIZWlnaHRcIiksai5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKX1lbHNlIHooKTtkJiZxKGksITEpfSxmdW5jdGlvbigpe3ooKSxxKGksITEpfSl9O3ooKSx3LnF1ZXJ5PXZvaWQgMDt2YXIgQyxEPWZ1bmN0aW9uKGEpe0M9ZChmdW5jdGlvbigpe0IoYSl9LG8pfSxFPWZ1bmN0aW9uKCl7QyYmZC5jYW5jZWwoQyl9O2wuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbihhKXtyZXR1cm4gbT0hMCxhJiZhLmxlbmd0aD49bj9vPjA/KEUoKSxEKGEpKTpCKGEpOihxKGksITEpLEUoKSx6KCkpLHA/YTphP3ZvaWQgbC4kc2V0VmFsaWRpdHkoXCJlZGl0YWJsZVwiLCExKToobC4kc2V0VmFsaWRpdHkoXCJlZGl0YWJsZVwiLCEwKSxhKX0pLGwuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXt2YXIgYixjLGQ9e307cmV0dXJuIHM/KGQuJG1vZGVsPWEscyhpLGQpKTooZFt2Lml0ZW1OYW1lXT1hLGI9di52aWV3TWFwcGVyKGksZCksZFt2Lml0ZW1OYW1lXT12b2lkIDAsYz12LnZpZXdNYXBwZXIoaSxkKSxiIT09Yz9iOmEpfSksdy5zZWxlY3Q9ZnVuY3Rpb24oYSl7dmFyIGIsYyxlPXt9O2Vbdi5pdGVtTmFtZV09Yz13Lm1hdGNoZXNbYV0ubW9kZWwsYj12Lm1vZGVsTWFwcGVyKGksZSksdShpLGIpLGwuJHNldFZhbGlkaXR5KFwiZWRpdGFibGVcIiwhMCkscihpLHskaXRlbTpjLCRtb2RlbDpiLCRsYWJlbDp2LnZpZXdNYXBwZXIoaSxlKX0pLHooKSxkKGZ1bmN0aW9uKCl7alswXS5mb2N1cygpfSwwLCExKX0sai5iaW5kKFwia2V5ZG93blwiLGZ1bmN0aW9uKGEpezAhPT13Lm1hdGNoZXMubGVuZ3RoJiYtMSE9PWguaW5kZXhPZihhLndoaWNoKSYmKGEucHJldmVudERlZmF1bHQoKSw0MD09PWEud2hpY2g/KHcuYWN0aXZlSWR4PSh3LmFjdGl2ZUlkeCsxKSV3Lm1hdGNoZXMubGVuZ3RoLHcuJGRpZ2VzdCgpKTozOD09PWEud2hpY2g/KHcuYWN0aXZlSWR4PSh3LmFjdGl2ZUlkeD93LmFjdGl2ZUlkeDp3Lm1hdGNoZXMubGVuZ3RoKS0xLHcuJGRpZ2VzdCgpKToxMz09PWEud2hpY2h8fDk9PT1hLndoaWNoP3cuJGFwcGx5KGZ1bmN0aW9uKCl7dy5zZWxlY3Qody5hY3RpdmVJZHgpfSk6Mjc9PT1hLndoaWNoJiYoYS5zdG9wUHJvcGFnYXRpb24oKSx6KCksdy4kZGlnZXN0KCkpKX0pLGouYmluZChcImJsdXJcIixmdW5jdGlvbigpe209ITF9KTt2YXIgRj1mdW5jdGlvbihhKXtqWzBdIT09YS50YXJnZXQmJih6KCksdy4kZGlnZXN0KCkpfTtlLmJpbmQoXCJjbGlja1wiLEYpLGkuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2UudW5iaW5kKFwiY2xpY2tcIixGKX0pO3ZhciBHPWEoeSkodyk7dD9lLmZpbmQoXCJib2R5XCIpLmFwcGVuZChHKTpqLmFmdGVyKEcpfX19XSkuZGlyZWN0aXZlKFwidHlwZWFoZWFkUG9wdXBcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6e21hdGNoZXM6XCI9XCIscXVlcnk6XCI9XCIsYWN0aXZlOlwiPVwiLHBvc2l0aW9uOlwiPVwiLHNlbGVjdDpcIiZcIn0scmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMpe2EudGVtcGxhdGVVcmw9Yy50ZW1wbGF0ZVVybCxhLmlzT3Blbj1mdW5jdGlvbigpe3JldHVybiBhLm1hdGNoZXMubGVuZ3RoPjB9LGEuaXNBY3RpdmU9ZnVuY3Rpb24oYil7cmV0dXJuIGEuYWN0aXZlPT1ifSxhLnNlbGVjdEFjdGl2ZT1mdW5jdGlvbihiKXthLmFjdGl2ZT1ifSxhLnNlbGVjdE1hdGNoPWZ1bmN0aW9uKGIpe2Euc2VsZWN0KHthY3RpdmVJZHg6Yn0pfX19fSkuZGlyZWN0aXZlKFwidHlwZWFoZWFkTWF0Y2hcIixbXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRjb21waWxlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOntpbmRleDpcIj1cIixtYXRjaDpcIj1cIixxdWVyeTpcIj1cIn0sbGluazpmdW5jdGlvbihlLGYsZyl7dmFyIGg9ZChnLnRlbXBsYXRlVXJsKShlLiRwYXJlbnQpfHxcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guaHRtbFwiO2EuZ2V0KGgse2NhY2hlOmJ9KS5zdWNjZXNzKGZ1bmN0aW9uKGEpe2YucmVwbGFjZVdpdGgoYyhhLnRyaW0oKSkoZSkpfSl9fX1dKS5maWx0ZXIoXCJ0eXBlYWhlYWRIaWdobGlnaHRcIixmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGEucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csXCJcXFxcJDFcIil9cmV0dXJuIGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGM/KFwiXCIrYikucmVwbGFjZShuZXcgUmVnRXhwKGEoYyksXCJnaVwiKSxcIjxzdHJvbmc+JCY8L3N0cm9uZz5cIik6Yn19KSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cXG4gICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cXG4gICAgICA8YSBjbGFzcz1cImFjY29yZGlvbi10b2dnbGVcIiBuZy1jbGljaz1cInRvZ2dsZU9wZW4oKVwiIGFjY29yZGlvbi10cmFuc2NsdWRlPVwiaGVhZGluZ1wiPjxzcGFuIG5nLWNsYXNzPVwie1xcJ3RleHQtbXV0ZWRcXCc6IGlzRGlzYWJsZWR9XCI+e3toZWFkaW5nfX08L3NwYW4+PC9hPlxcbiAgICA8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwicGFuZWwtY29sbGFwc2VcIiBjb2xsYXBzZT1cIiFpc09wZW5cIj5cXG5cdCAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIiwnPGRpdiBjbGFzcz1cInBhbmVsLWdyb3VwXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsJzxkaXYgY2xhc3M9XCJhbGVydFwiIG5nLWNsYXNzPVwiW1xcJ2FsZXJ0LVxcJyArICh0eXBlIHx8IFxcJ3dhcm5pbmdcXCcpLCBjbG9zZWFibGUgPyBcXCdhbGVydC1kaXNtaXNzYWJsZVxcJyA6IG51bGxdXCIgcm9sZT1cImFsZXJ0XCI+XFxuICAgIDxidXR0b24gbmctc2hvdz1cImNsb3NlYWJsZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgbmctY2xpY2s9XCJjbG9zZSgpXCI+XFxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8ZGl2IG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbFwiLCc8ZGl2IG5nLW1vdXNlZW50ZXI9XCJwYXVzZSgpXCIgbmctbW91c2VsZWF2ZT1cInBsYXkoKVwiIGNsYXNzPVwiY2Fyb3VzZWxcIiBuZy1zd2lwZS1yaWdodD1cInByZXYoKVwiIG5nLXN3aXBlLWxlZnQ9XCJuZXh0KClcIj5cXG4gICAgPG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiIG5nLXNob3c9XCJzbGlkZXMubGVuZ3RoID4gMVwiPlxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cInNsaWRlIGluIHNsaWRlcyB0cmFjayBieSAkaW5kZXhcIiBuZy1jbGFzcz1cInthY3RpdmU6IGlzQWN0aXZlKHNsaWRlKX1cIiBuZy1jbGljaz1cInNlbGVjdChzbGlkZSlcIj48L2xpPlxcbiAgICA8L29sPlxcbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbiAgICA8YSBjbGFzcz1cImxlZnQgY2Fyb3VzZWwtY29udHJvbFwiIG5nLWNsaWNrPVwicHJldigpXCIgbmctc2hvdz1cInNsaWRlcy5sZW5ndGggPiAxXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvc3Bhbj48L2E+XFxuICAgIDxhIGNsYXNzPVwicmlnaHQgY2Fyb3VzZWwtY29udHJvbFwiIG5nLWNsaWNrPVwibmV4dCgpXCIgbmctc2hvdz1cInNsaWRlcy5sZW5ndGggPiAxXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+PC9hPlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvY2Fyb3VzZWwvc2xpZGUuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2Nhcm91c2VsL3NsaWRlLmh0bWxcIixcIjxkaXYgbmctY2xhc3M9XFxcIntcXG4gICAgJ2FjdGl2ZSc6IGxlYXZpbmcgfHwgKGFjdGl2ZSAmJiAhZW50ZXJpbmcpLFxcbiAgICAncHJldic6IChuZXh0IHx8IGFjdGl2ZSkgJiYgZGlyZWN0aW9uPT0ncHJldicsXFxuICAgICduZXh0JzogKG5leHQgfHwgYWN0aXZlKSAmJiBkaXJlY3Rpb249PSduZXh0JyxcXG4gICAgJ3JpZ2h0JzogZGlyZWN0aW9uPT0ncHJldicsXFxuICAgICdsZWZ0JzogZGlyZWN0aW9uPT0nbmV4dCdcXG4gIH1cXFwiIGNsYXNzPVxcXCJpdGVtIHRleHQtY2VudGVyXFxcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcblwiKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWxcIiwnPGRpdiBuZy1zd2l0Y2g9XCJkYXRlcGlja2VyTW9kZVwiIHJvbGU9XCJhcHBsaWNhdGlvblwiIG5nLWtleWRvd249XCJrZXlkb3duKCRldmVudClcIj5cXG4gIDxkYXlwaWNrZXIgbmctc3dpdGNoLXdoZW49XCJkYXlcIiB0YWJpbmRleD1cIjBcIj48L2RheXBpY2tlcj5cXG4gIDxtb250aHBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cIm1vbnRoXCIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cXG4gIDx5ZWFycGlja2VyIG5nLXN3aXRjaC13aGVuPVwieWVhclwiIHRhYmluZGV4PVwiMFwiPjwveWVhcnBpY2tlcj5cXG48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIsJzx0YWJsZSByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWxsZWRieT1cInt7dW5pcXVlSWR9fS10aXRsZVwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInt7YWN0aXZlRGF0ZUlkfX1cIj5cXG4gIDx0aGVhZD5cXG4gICAgPHRyPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0XCIgbmctY2xpY2s9XCJtb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XCJ7ezUgKyBzaG93V2Vla3N9fVwiPjxidXR0b24gaWQ9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBuZy1jbGljaz1cInRvZ2dsZU1vZGUoKVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFwiIG5nLWNsaWNrPVwibW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgICA8dHI+XFxuICAgICAgPHRoIG5nLXNob3c9XCJzaG93V2Vla3NcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+PC90aD5cXG4gICAgICA8dGggbmctcmVwZWF0PVwibGFiZWwgaW4gbGFiZWxzIHRyYWNrIGJ5ICRpbmRleFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48c21hbGwgYXJpYS1sYWJlbD1cInt7bGFiZWwuZnVsbH19XCI+e3tsYWJlbC5hYmJyfX08L3NtYWxsPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XCI+XFxuICAgICAgPHRkIG5nLXNob3c9XCJzaG93V2Vla3NcIiBjbGFzcz1cInRleHQtY2VudGVyIGg2XCI+PGVtPnt7IHdlZWtOdW1iZXJzWyRpbmRleF0gfX08L2VtPjwvdGQ+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIGlkPVwie3tkdC51aWR9fVwiIGFyaWEtZGlzYWJsZWQ9XCJ7eyEhZHQuZGlzYWJsZWR9fVwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG5nLWNsYXNzPVwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XCIgbmctY2xpY2s9XCJzZWxlY3QoZHQuZGF0ZSlcIiBuZy1kaXNhYmxlZD1cImR0LmRpc2FibGVkXCIgdGFiaW5kZXg9XCItMVwiPjxzcGFuIG5nLWNsYXNzPVwie1xcJ3RleHQtbXV0ZWRcXCc6IGR0LnNlY29uZGFyeSwgXFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIsJzx0YWJsZSByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWxsZWRieT1cInt7dW5pcXVlSWR9fS10aXRsZVwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInt7YWN0aXZlRGF0ZUlkfX1cIj5cXG4gIDx0aGVhZD5cXG4gICAgPHRyPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0XCIgbmctY2xpY2s9XCJtb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gaWQ9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBuZy1jbGljaz1cInRvZ2dsZU1vZGUoKVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFwiIG5nLWNsaWNrPVwibW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBpZD1cInt7ZHQudWlkfX1cIiBhcmlhLWRpc2FibGVkPVwie3shIWR0LmRpc2FibGVkfX1cIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIG5nLWNsYXNzPVwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XCIgbmctY2xpY2s9XCJzZWxlY3QoZHQuZGF0ZSlcIiBuZy1kaXNhYmxlZD1cImR0LmRpc2FibGVkXCIgdGFiaW5kZXg9XCItMVwiPjxzcGFuIG5nLWNsYXNzPVwie1xcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cIj57e2R0LmxhYmVsfX08L3NwYW4+PC9idXR0b24+XFxuICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG4gIDwvdGJvZHk+XFxuPC90YWJsZT5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLCc8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctc3R5bGU9XCJ7ZGlzcGxheTogKGlzT3BlbiAmJiBcXCdibG9ja1xcJykgfHwgXFwnbm9uZVxcJywgdG9wOiBwb3NpdGlvbi50b3ArXFwncHhcXCcsIGxlZnQ6IHBvc2l0aW9uLmxlZnQrXFwncHhcXCd9XCIgbmcta2V5ZG93bj1cImtleWRvd24oJGV2ZW50KVwiPlxcblx0PGxpIG5nLXRyYW5zY2x1ZGU+PC9saT5cXG5cdDxsaSBuZy1pZj1cInNob3dCdXR0b25CYXJcIiBzdHlsZT1cInBhZGRpbmc6MTBweCA5cHggMnB4XCI+XFxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuLWdyb3VwXCI+XFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIgbmctY2xpY2s9XCJzZWxlY3QoXFwndG9kYXlcXCcpXCI+e3sgZ2V0VGV4dChcXCdjdXJyZW50XFwnKSB9fTwvYnV0dG9uPlxcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgbmctY2xpY2s9XCJzZWxlY3QobnVsbClcIj57eyBnZXRUZXh0KFxcJ2NsZWFyXFwnKSB9fTwvYnV0dG9uPlxcblx0XHQ8L3NwYW4+XFxuXHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2VzcyBwdWxsLXJpZ2h0XCIgbmctY2xpY2s9XCJjbG9zZSgpXCI+e3sgZ2V0VGV4dChcXCdjbG9zZVxcJykgfX08L2J1dHRvbj5cXG5cdDwvbGk+XFxuPC91bD5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWxcIiwnPHRhYmxlIHJvbGU9XCJncmlkXCIgYXJpYS1sYWJlbGxlZGJ5PVwie3t1bmlxdWVJZH19LXRpdGxlXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwie3thY3RpdmVEYXRlSWR9fVwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcIiBuZy1jbGljaz1cIm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGggY29sc3Bhbj1cIjNcIj48YnV0dG9uIGlkPVwie3t1bmlxdWVJZH19LXRpdGxlXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgbmctY2xpY2s9XCJ0b2dnbGVNb2RlKClcIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcIiBuZy1jbGljaz1cIm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcIj5cXG4gICAgICA8dGQgbmctcmVwZWF0PVwiZHQgaW4gcm93IHRyYWNrIGJ5IGR0LmRhdGVcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgaWQ9XCJ7e2R0LnVpZH19XCIgYXJpYS1kaXNhYmxlZD1cInt7ISFkdC5kaXNhYmxlZH19XCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIndpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBuZy1jbGFzcz1cIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVwiIG5nLWNsaWNrPVwic2VsZWN0KGR0LmRhdGUpXCIgbmctZGlzYWJsZWQ9XCJkdC5kaXNhYmxlZFwiIHRhYmluZGV4PVwiLTFcIj48c3BhbiBuZy1jbGFzcz1cIntcXCd0ZXh0LWluZm9cXCc6IGR0LmN1cnJlbnR9XCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLCc8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgZmFkZSB7eyBiYWNrZHJvcENsYXNzIH19XCJcXG4gICAgIG5nLWNsYXNzPVwie2luOiBhbmltYXRlfVwiXFxuICAgICBuZy1zdHlsZT1cIntcXCd6LWluZGV4XFwnOiAxMDQwICsgKGluZGV4ICYmIDEgfHwgMCkgKyBpbmRleCoxMH1cIlxcbj48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIiwnPGRpdiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGNsYXNzPVwibW9kYWwgZmFkZVwiIG5nLWNsYXNzPVwie2luOiBhbmltYXRlfVwiIG5nLXN0eWxlPVwie1xcJ3otaW5kZXhcXCc6IDEwNTAgKyBpbmRleCoxMCwgZGlzcGxheTogXFwnYmxvY2tcXCd9XCIgbmctY2xpY2s9XCJjbG9zZSgkZXZlbnQpXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiBuZy1jbGFzcz1cIntcXCdtb2RhbC1zbVxcJzogc2l6ZSA9PSBcXCdzbVxcJywgXFwnbW9kYWwtbGdcXCc6IHNpemUgPT0gXFwnbGdcXCd9XCI+PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBtb2RhbC10cmFuc2NsdWRlPjwvZGl2PjwvZGl2PlxcbjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdlci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdlci5odG1sXCIsJzx1bCBjbGFzcz1cInBhZ2VyXCI+XFxuICA8bGkgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vUHJldmlvdXMoKSwgcHJldmlvdXM6IGFsaWdufVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxKVwiPnt7Z2V0VGV4dChcXCdwcmV2aW91c1xcJyl9fTwvYT48L2xpPlxcbiAgPGxpIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub05leHQoKSwgbmV4dDogYWxpZ259XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UocGFnZSArIDEpXCI+e3tnZXRUZXh0KFxcJ25leHRcXCcpfX08L2E+PC9saT5cXG48L3VsPicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLCc8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XFxuICA8bGkgbmctaWY9XCJib3VuZGFyeUxpbmtzXCIgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vUHJldmlvdXMoKX1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZSgxKVwiPnt7Z2V0VGV4dChcXCdmaXJzdFxcJyl9fTwvYT48L2xpPlxcbiAgPGxpIG5nLWlmPVwiZGlyZWN0aW9uTGlua3NcIiBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9QcmV2aW91cygpfVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxKVwiPnt7Z2V0VGV4dChcXCdwcmV2aW91c1xcJyl9fTwvYT48L2xpPlxcbiAgPGxpIG5nLXJlcGVhdD1cInBhZ2UgaW4gcGFnZXMgdHJhY2sgYnkgJGluZGV4XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBwYWdlLmFjdGl2ZX1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZShwYWdlLm51bWJlcilcIj57e3BhZ2UudGV4dH19PC9hPjwvbGk+XFxuICA8bGkgbmctaWY9XCJkaXJlY3Rpb25MaW5rc1wiIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub05leHQoKX1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZShwYWdlICsgMSlcIj57e2dldFRleHQoXFwnbmV4dFxcJyl9fTwvYT48L2xpPlxcbiAgPGxpIG5nLWlmPVwiYm91bmRhcnlMaW5rc1wiIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub05leHQoKX1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZSh0b3RhbFBhZ2VzKVwiPnt7Z2V0VGV4dChcXCdsYXN0XFwnKX19PC9hPjwvbGk+XFxuPC91bD4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXVuc2FmZS1wb3B1cC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtdW5zYWZlLXBvcHVwLmh0bWxcIiwnPGRpdiBjbGFzcz1cInRvb2x0aXAge3twbGFjZW1lbnR9fVwiIG5nLWNsYXNzPVwieyBpbjogaXNPcGVuKCksIGZhZGU6IGFuaW1hdGlvbigpIH1cIj5cXG4gIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiIGJpbmQtaHRtbC11bnNhZmU9XCJjb250ZW50XCI+PC9kaXY+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtcG9wdXAuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1wb3B1cC5odG1sXCIsJzxkaXYgY2xhc3M9XCJ0b29sdGlwIHt7cGxhY2VtZW50fX1cIiBuZy1jbGFzcz1cInsgaW46IGlzT3BlbigpLCBmYWRlOiBhbmltYXRpb24oKSB9XCI+XFxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIiBuZy1iaW5kPVwiY29udGVudFwiPjwvZGl2PlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicG9wb3ZlciB7e3BsYWNlbWVudH19XCIgbmctY2xhc3M9XCJ7IGluOiBpc09wZW4oKSwgZmFkZTogYW5pbWF0aW9uKCkgfVwiPlxcbiAgPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1pbm5lclwiPlxcbiAgICAgIDxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIiBuZy1iaW5kPVwidGl0bGVcIiBuZy1zaG93PVwidGl0bGVcIj48L2gzPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIiBuZy1iaW5kPVwiY29udGVudFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sXCIsJzxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBuZy1jbGFzcz1cInR5cGUgJiYgXFwncHJvZ3Jlc3MtYmFyLVxcJyArIHR5cGVcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwie3t2YWx1ZX19XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwie3ttYXh9fVwiIG5nLXN0eWxlPVwie3dpZHRoOiBwZXJjZW50ICsgXFwnJVxcJ31cIiBhcmlhLXZhbHVldGV4dD1cInt7cGVyY2VudCB8IG51bWJlcjowfX0lXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCIsJzxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiBuZy1jbGFzcz1cInR5cGUgJiYgXFwncHJvZ3Jlc3MtYmFyLVxcJyArIHR5cGVcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwie3t2YWx1ZX19XCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwie3ttYXh9fVwiIG5nLXN0eWxlPVwie3dpZHRoOiBwZXJjZW50ICsgXFwnJVxcJ31cIiBhcmlhLXZhbHVldGV4dD1cInt7cGVyY2VudCB8IG51bWJlcjowfX0lXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLCc8c3BhbiBuZy1tb3VzZWxlYXZlPVwicmVzZXQoKVwiIG5nLWtleWRvd249XCJvbktleWRvd24oJGV2ZW50KVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJzbGlkZXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCJ7e3JhbmdlLmxlbmd0aH19XCIgYXJpYS12YWx1ZW5vdz1cInt7dmFsdWV9fVwiPlxcbiAgICA8aSBuZy1yZXBlYXQ9XCJyIGluIHJhbmdlIHRyYWNrIGJ5ICRpbmRleFwiIG5nLW1vdXNlZW50ZXI9XCJlbnRlcigkaW5kZXggKyAxKVwiIG5nLWNsaWNrPVwicmF0ZSgkaW5kZXggKyAxKVwiIGNsYXNzPVwiZ2x5cGhpY29uXCIgbmctY2xhc3M9XCIkaW5kZXggPCB2YWx1ZSAmJiAoci5zdGF0ZU9uIHx8IFxcJ2dseXBoaWNvbi1zdGFyXFwnKSB8fCAoci5zdGF0ZU9mZiB8fCBcXCdnbHlwaGljb24tc3Rhci1lbXB0eVxcJylcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPih7eyAkaW5kZXggPCB2YWx1ZSA/IFxcJypcXCcgOiBcXCcgXFwnIH19KTwvc3Bhbj5cXG4gICAgPC9pPlxcbjwvc3Bhbj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3RhYnMvdGFiLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsJzxsaSBuZy1jbGFzcz1cInthY3RpdmU6IGFjdGl2ZSwgZGlzYWJsZWQ6IGRpc2FibGVkfVwiPlxcbiAgPGEgbmctY2xpY2s9XCJzZWxlY3QoKVwiIHRhYi1oZWFkaW5nLXRyYW5zY2x1ZGU+e3toZWFkaW5nfX08L2E+XFxuPC9saT5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsJzxkaXY+XFxuICA8dWwgY2xhc3M9XCJuYXYgbmF2LXt7dHlwZSB8fCBcXCd0YWJzXFwnfX1cIiBuZy1jbGFzcz1cIntcXCduYXYtc3RhY2tlZFxcJzogdmVydGljYWwsIFxcJ25hdi1qdXN0aWZpZWRcXCc6IGp1c3RpZmllZH1cIiBuZy10cmFuc2NsdWRlPjwvdWw+XFxuICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cXG4gICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lXCIgXFxuICAgICAgICAgbmctcmVwZWF0PVwidGFiIGluIHRhYnNcIiBcXG4gICAgICAgICBuZy1jbGFzcz1cInthY3RpdmU6IHRhYi5hY3RpdmV9XCJcXG4gICAgICAgICB0YWItY29udGVudC10cmFuc2NsdWRlPVwidGFiXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3RpbWVwaWNrZXIvdGltZXBpY2tlci5odG1sXCIsJzx0YWJsZT5cXG5cdDx0Ym9keT5cXG5cdFx0PHRyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cXG5cdFx0XHQ8dGQ+PGEgbmctY2xpY2s9XCJpbmNyZW1lbnRIb3VycygpXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQ+Jm5ic3A7PC90ZD5cXG5cdFx0XHQ8dGQ+PGEgbmctY2xpY2s9XCJpbmNyZW1lbnRNaW51dGVzKClcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVwic2hvd01lcmlkaWFuXCI+PC90ZD5cXG5cdFx0PC90cj5cXG5cdFx0PHRyPlxcblx0XHRcdDx0ZCBzdHlsZT1cIndpZHRoOjUwcHg7XCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgbmctY2xhc3M9XCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkSG91cnN9XCI+XFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cImhvdXJzXCIgbmctY2hhbmdlPVwidXBkYXRlSG91cnMoKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgbmctbW91c2V3aGVlbD1cImluY3JlbWVudEhvdXJzKClcIiBuZy1yZWFkb25seT1cInJlYWRvbmx5SW5wdXRcIiBtYXhsZW5ndGg9XCIyXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQ+OjwvdGQ+XFxuXHRcdFx0PHRkIHN0eWxlPVwid2lkdGg6NTBweDtcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBuZy1jbGFzcz1cIntcXCdoYXMtZXJyb3JcXCc6IGludmFsaWRNaW51dGVzfVwiPlxcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJtaW51dGVzXCIgbmctY2hhbmdlPVwidXBkYXRlTWludXRlcygpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiBuZy1yZWFkb25seT1cInJlYWRvbmx5SW5wdXRcIiBtYXhsZW5ndGg9XCIyXCI+XFxuXHRcdFx0PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cInNob3dNZXJpZGlhblwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHRleHQtY2VudGVyXCIgbmctY2xpY2s9XCJ0b2dnbGVNZXJpZGlhbigpXCI+e3ttZXJpZGlhbn19PC9idXR0b24+PC90ZD5cXG5cdFx0PC90cj5cXG5cdFx0PHRyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cXG5cdFx0XHQ8dGQ+PGEgbmctY2xpY2s9XCJkZWNyZW1lbnRIb3VycygpXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZD4mbmJzcDs8L3RkPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cImRlY3JlbWVudE1pbnV0ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cInNob3dNZXJpZGlhblwiPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHQ8L3Rib2R5PlxcbjwvdGFibGU+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLW1hdGNoLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLW1hdGNoLmh0bWxcIiwnPGEgdGFiaW5kZXg9XCItMVwiIGJpbmQtaHRtbC11bnNhZmU9XCJtYXRjaC5sYWJlbCB8IHR5cGVhaGVhZEhpZ2hsaWdodDpxdWVyeVwiPjwvYT4nKVxufV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1wb3B1cC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1wb3B1cC5odG1sXCIsJzx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1zaG93PVwiaXNPcGVuKClcIiBuZy1zdHlsZT1cInt0b3A6IHBvc2l0aW9uLnRvcCtcXCdweFxcJywgbGVmdDogcG9zaXRpb24ubGVmdCtcXCdweFxcJ31cIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiIHJvbGU9XCJsaXN0Ym94XCIgYXJpYS1oaWRkZW49XCJ7eyFpc09wZW4oKX19XCI+XFxuICAgIDxsaSBuZy1yZXBlYXQ9XCJtYXRjaCBpbiBtYXRjaGVzIHRyYWNrIGJ5ICRpbmRleFwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXNBY3RpdmUoJGluZGV4KSB9XCIgbmctbW91c2VlbnRlcj1cInNlbGVjdEFjdGl2ZSgkaW5kZXgpXCIgbmctY2xpY2s9XCJzZWxlY3RNYXRjaCgkaW5kZXgpXCIgcm9sZT1cIm9wdGlvblwiIGlkPVwie3ttYXRjaC5pZH19XCI+XFxuICAgICAgICA8ZGl2IHR5cGVhaGVhZC1tYXRjaCBpbmRleD1cIiRpbmRleFwiIG1hdGNoPVwibWF0Y2hcIiBxdWVyeT1cInF1ZXJ5XCIgdGVtcGxhdGUtdXJsPVwidGVtcGxhdGVVcmxcIj48L2Rpdj5cXG4gICAgPC9saT5cXG48L3VsPlxcbicpfV0pOyIsIi8qKlxuICogU3RhdGUtYmFzZWQgcm91dGluZyBmb3IgQW5ndWxhckpTXG4gKiBAdmVyc2lvbiB2MC4yLjEzXG4gKiBAbGluayBodHRwOi8vYW5ndWxhci11aS5naXRodWIuY29tL1xuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UsIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzJiZtb2R1bGUuZXhwb3J0cz09PWV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1cInVpLnJvdXRlclwiKSxmdW5jdGlvbihhLGIsYyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZChhLGIpe3JldHVybiBNKG5ldyhNKGZ1bmN0aW9uKCl7fSx7cHJvdG90eXBlOmF9KSksYil9ZnVuY3Rpb24gZShhKXtyZXR1cm4gTChhcmd1bWVudHMsZnVuY3Rpb24oYil7YiE9PWEmJkwoYixmdW5jdGlvbihiLGMpe2EuaGFzT3duUHJvcGVydHkoYyl8fChhW2NdPWIpfSl9KSxhfWZ1bmN0aW9uIGYoYSxiKXt2YXIgYz1bXTtmb3IodmFyIGQgaW4gYS5wYXRoKXtpZihhLnBhdGhbZF0hPT1iLnBhdGhbZF0pYnJlYWs7Yy5wdXNoKGEucGF0aFtkXSl9cmV0dXJuIGN9ZnVuY3Rpb24gZyhhKXtpZihPYmplY3Qua2V5cylyZXR1cm4gT2JqZWN0LmtleXMoYSk7dmFyIGM9W107cmV0dXJuIGIuZm9yRWFjaChhLGZ1bmN0aW9uKGEsYil7Yy5wdXNoKGIpfSksY31mdW5jdGlvbiBoKGEsYil7aWYoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIGEuaW5kZXhPZihiLE51bWJlcihhcmd1bWVudHNbMl0pfHwwKTt2YXIgYz1hLmxlbmd0aD4+PjAsZD1OdW1iZXIoYXJndW1lbnRzWzJdKXx8MDtmb3IoZD0wPmQ/TWF0aC5jZWlsKGQpOk1hdGguZmxvb3IoZCksMD5kJiYoZCs9Yyk7Yz5kO2QrKylpZihkIGluIGEmJmFbZF09PT1iKXJldHVybiBkO3JldHVybi0xfWZ1bmN0aW9uIGkoYSxiLGMsZCl7dmFyIGUsaT1mKGMsZCksaj17fSxrPVtdO2Zvcih2YXIgbCBpbiBpKWlmKGlbbF0ucGFyYW1zJiYoZT1nKGlbbF0ucGFyYW1zKSxlLmxlbmd0aCkpZm9yKHZhciBtIGluIGUpaChrLGVbbV0pPj0wfHwoay5wdXNoKGVbbV0pLGpbZVttXV09YVtlW21dXSk7cmV0dXJuIE0oe30saixiKX1mdW5jdGlvbiBqKGEsYixjKXtpZighYyl7Yz1bXTtmb3IodmFyIGQgaW4gYSljLnB1c2goZCl9Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspe3ZhciBmPWNbZV07aWYoYVtmXSE9YltmXSlyZXR1cm4hMX1yZXR1cm4hMH1mdW5jdGlvbiBrKGEsYil7dmFyIGM9e307cmV0dXJuIEwoYSxmdW5jdGlvbihhKXtjW2FdPWJbYV19KSxjfWZ1bmN0aW9uIGwoYSl7dmFyIGI9e30sYz1BcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KEFycmF5LnByb3RvdHlwZSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpO2Zvcih2YXIgZCBpbiBhKS0xPT1oKGMsZCkmJihiW2RdPWFbZF0pO3JldHVybiBifWZ1bmN0aW9uIG0oYSxiKXt2YXIgYz1LKGEpLGQ9Yz9bXTp7fTtyZXR1cm4gTChhLGZ1bmN0aW9uKGEsZSl7YihhLGUpJiYoZFtjP2QubGVuZ3RoOmVdPWEpfSksZH1mdW5jdGlvbiBuKGEsYil7dmFyIGM9SyhhKT9bXTp7fTtyZXR1cm4gTChhLGZ1bmN0aW9uKGEsZCl7Y1tkXT1iKGEsZCl9KSxjfWZ1bmN0aW9uIG8oYSxiKXt2YXIgZD0xLGY9MixpPXt9LGo9W10saz1pLG09TShhLndoZW4oaSkseyQkcHJvbWlzZXM6aSwkJHZhbHVlczppfSk7dGhpcy5zdHVkeT1mdW5jdGlvbihpKXtmdW5jdGlvbiBuKGEsYyl7aWYoc1tjXSE9PWYpe2lmKHIucHVzaChjKSxzW2NdPT09ZCl0aHJvdyByLnNwbGljZSgwLGgocixjKSksbmV3IEVycm9yKFwiQ3ljbGljIGRlcGVuZGVuY3k6IFwiK3Iuam9pbihcIiAtPiBcIikpO2lmKHNbY109ZCxJKGEpKXEucHVzaChjLFtmdW5jdGlvbigpe3JldHVybiBiLmdldChhKX1dLGopO2Vsc2V7dmFyIGU9Yi5hbm5vdGF0ZShhKTtMKGUsZnVuY3Rpb24oYSl7YSE9PWMmJmkuaGFzT3duUHJvcGVydHkoYSkmJm4oaVthXSxhKX0pLHEucHVzaChjLGEsZSl9ci5wb3AoKSxzW2NdPWZ9fWZ1bmN0aW9uIG8oYSl7cmV0dXJuIEooYSkmJmEudGhlbiYmYS4kJHByb21pc2VzfWlmKCFKKGkpKXRocm93IG5ldyBFcnJvcihcIidpbnZvY2FibGVzJyBtdXN0IGJlIGFuIG9iamVjdFwiKTt2YXIgcD1nKGl8fHt9KSxxPVtdLHI9W10scz17fTtyZXR1cm4gTChpLG4pLGk9cj1zPW51bGwsZnVuY3Rpb24oZCxmLGcpe2Z1bmN0aW9uIGgoKXstLXV8fCh2fHxlKHQsZi4kJHZhbHVlcyksci4kJHZhbHVlcz10LHIuJCRwcm9taXNlcz1yLiQkcHJvbWlzZXN8fCEwLGRlbGV0ZSByLiQkaW5oZXJpdGVkVmFsdWVzLG4ucmVzb2x2ZSh0KSl9ZnVuY3Rpb24gaShhKXtyLiQkZmFpbHVyZT1hLG4ucmVqZWN0KGEpfWZ1bmN0aW9uIGooYyxlLGYpe2Z1bmN0aW9uIGooYSl7bC5yZWplY3QoYSksaShhKX1mdW5jdGlvbiBrKCl7aWYoIUcoci4kJGZhaWx1cmUpKXRyeXtsLnJlc29sdmUoYi5pbnZva2UoZSxnLHQpKSxsLnByb21pc2UudGhlbihmdW5jdGlvbihhKXt0W2NdPWEsaCgpfSxqKX1jYXRjaChhKXtqKGEpfX12YXIgbD1hLmRlZmVyKCksbT0wO0woZixmdW5jdGlvbihhKXtzLmhhc093blByb3BlcnR5KGEpJiYhZC5oYXNPd25Qcm9wZXJ0eShhKSYmKG0rKyxzW2FdLnRoZW4oZnVuY3Rpb24oYil7dFthXT1iLC0tbXx8aygpfSxqKSl9KSxtfHxrKCksc1tjXT1sLnByb21pc2V9aWYobyhkKSYmZz09PWMmJihnPWYsZj1kLGQ9bnVsbCksZCl7aWYoIUooZCkpdGhyb3cgbmV3IEVycm9yKFwiJ2xvY2FscycgbXVzdCBiZSBhbiBvYmplY3RcIil9ZWxzZSBkPWs7aWYoZil7aWYoIW8oZikpdGhyb3cgbmV3IEVycm9yKFwiJ3BhcmVudCcgbXVzdCBiZSBhIHByb21pc2UgcmV0dXJuZWQgYnkgJHJlc29sdmUucmVzb2x2ZSgpXCIpfWVsc2UgZj1tO3ZhciBuPWEuZGVmZXIoKSxyPW4ucHJvbWlzZSxzPXIuJCRwcm9taXNlcz17fSx0PU0oe30sZCksdT0xK3EubGVuZ3RoLzMsdj0hMTtpZihHKGYuJCRmYWlsdXJlKSlyZXR1cm4gaShmLiQkZmFpbHVyZSkscjtmLiQkaW5oZXJpdGVkVmFsdWVzJiZlKHQsbChmLiQkaW5oZXJpdGVkVmFsdWVzLHApKSxNKHMsZi4kJHByb21pc2VzKSxmLiQkdmFsdWVzPyh2PWUodCxsKGYuJCR2YWx1ZXMscCkpLHIuJCRpbmhlcml0ZWRWYWx1ZXM9bChmLiQkdmFsdWVzLHApLGgoKSk6KGYuJCRpbmhlcml0ZWRWYWx1ZXMmJihyLiQkaW5oZXJpdGVkVmFsdWVzPWwoZi4kJGluaGVyaXRlZFZhbHVlcyxwKSksZi50aGVuKGgsaSkpO2Zvcih2YXIgdz0wLHg9cS5sZW5ndGg7eD53O3crPTMpZC5oYXNPd25Qcm9wZXJ0eShxW3ddKT9oKCk6aihxW3ddLHFbdysxXSxxW3crMl0pO3JldHVybiByfX0sdGhpcy5yZXNvbHZlPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLnN0dWR5KGEpKGIsYyxkKX19ZnVuY3Rpb24gcChhLGIsYyl7dGhpcy5mcm9tQ29uZmlnPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gRyhhLnRlbXBsYXRlKT90aGlzLmZyb21TdHJpbmcoYS50ZW1wbGF0ZSxiKTpHKGEudGVtcGxhdGVVcmwpP3RoaXMuZnJvbVVybChhLnRlbXBsYXRlVXJsLGIpOkcoYS50ZW1wbGF0ZVByb3ZpZGVyKT90aGlzLmZyb21Qcm92aWRlcihhLnRlbXBsYXRlUHJvdmlkZXIsYixjKTpudWxsfSx0aGlzLmZyb21TdHJpbmc9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSChhKT9hKGIpOmF9LHRoaXMuZnJvbVVybD1mdW5jdGlvbihjLGQpe3JldHVybiBIKGMpJiYoYz1jKGQpKSxudWxsPT1jP251bGw6YS5nZXQoYyx7Y2FjaGU6YixoZWFkZXJzOntBY2NlcHQ6XCJ0ZXh0L2h0bWxcIn19KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRhdGF9KX0sdGhpcy5mcm9tUHJvdmlkZXI9ZnVuY3Rpb24oYSxiLGQpe3JldHVybiBjLmludm9rZShhLG51bGwsZHx8e3BhcmFtczpifSl9fWZ1bmN0aW9uIHEoYSxiLGUpe2Z1bmN0aW9uIGYoYixjLGQsZSl7aWYocS5wdXNoKGIpLG9bYl0pcmV0dXJuIG9bYl07aWYoIS9eXFx3KygtK1xcdyspKig/OlxcW1xcXSk/JC8udGVzdChiKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlciBuYW1lICdcIitiK1wiJyBpbiBwYXR0ZXJuICdcIithK1wiJ1wiKTtpZihwW2JdKXRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSBwYXJhbWV0ZXIgbmFtZSAnXCIrYitcIicgaW4gcGF0dGVybiAnXCIrYStcIidcIik7cmV0dXJuIHBbYl09bmV3IE8uUGFyYW0oYixjLGQsZSkscFtiXX1mdW5jdGlvbiBnKGEsYixjKXt2YXIgZD1bXCJcIixcIlwiXSxlPWEucmVwbGFjZSgvW1xcXFxcXFtcXF1cXF4kKis/LigpfHt9XS9nLFwiXFxcXCQmXCIpO2lmKCFiKXJldHVybiBlO3N3aXRjaChjKXtjYXNlITE6ZD1bXCIoXCIsXCIpXCJdO2JyZWFrO2Nhc2UhMDpkPVtcIj8oXCIsXCIpP1wiXTticmVhaztkZWZhdWx0OmQ9W1wiKFwiK2MrXCJ8XCIsXCIpP1wiXX1yZXR1cm4gZStkWzBdK2IrZFsxXX1mdW5jdGlvbiBoKGMsZSl7dmFyIGYsZyxoLGksajtyZXR1cm4gZj1jWzJdfHxjWzNdLGo9Yi5wYXJhbXNbZl0saD1hLnN1YnN0cmluZyhtLGMuaW5kZXgpLGc9ZT9jWzRdOmNbNF18fChcIipcIj09Y1sxXT9cIi4qXCI6bnVsbCksaT1PLnR5cGUoZ3x8XCJzdHJpbmdcIil8fGQoTy50eXBlKFwic3RyaW5nXCIpLHtwYXR0ZXJuOm5ldyBSZWdFeHAoZyl9KSx7aWQ6ZixyZWdleHA6ZyxzZWdtZW50OmgsdHlwZTppLGNmZzpqfX1iPU0oe3BhcmFtczp7fX0sSihiKT9iOnt9KTt2YXIgaSxqPS8oWzoqXSkoW1xcd1xcW1xcXV0rKXxcXHsoW1xcd1xcW1xcXV0rKSg/OlxcOigoPzpbXnt9XFxcXF0rfFxcXFwufFxceyg/Oltee31cXFxcXSt8XFxcXC4pKlxcfSkrKSk/XFx9L2csaz0vKFs6XT8pKFtcXHdcXFtcXF0tXSspfFxceyhbXFx3XFxbXFxdLV0rKSg/OlxcOigoPzpbXnt9XFxcXF0rfFxcXFwufFxceyg/Oltee31cXFxcXSt8XFxcXC4pKlxcfSkrKSk/XFx9L2csbD1cIl5cIixtPTAsbj10aGlzLnNlZ21lbnRzPVtdLG89ZT9lLnBhcmFtczp7fSxwPXRoaXMucGFyYW1zPWU/ZS5wYXJhbXMuJCRuZXcoKTpuZXcgTy5QYXJhbVNldCxxPVtdO3RoaXMuc291cmNlPWE7Zm9yKHZhciByLHMsdDsoaT1qLmV4ZWMoYSkpJiYocj1oKGksITEpLCEoci5zZWdtZW50LmluZGV4T2YoXCI/XCIpPj0wKSk7KXM9ZihyLmlkLHIudHlwZSxyLmNmZyxcInBhdGhcIiksbCs9ZyhyLnNlZ21lbnQscy50eXBlLnBhdHRlcm4uc291cmNlLHMuc3F1YXNoKSxuLnB1c2goci5zZWdtZW50KSxtPWoubGFzdEluZGV4O3Q9YS5zdWJzdHJpbmcobSk7dmFyIHU9dC5pbmRleE9mKFwiP1wiKTtpZih1Pj0wKXt2YXIgdj10aGlzLnNvdXJjZVNlYXJjaD10LnN1YnN0cmluZyh1KTtpZih0PXQuc3Vic3RyaW5nKDAsdSksdGhpcy5zb3VyY2VQYXRoPWEuc3Vic3RyaW5nKDAsbSt1KSx2Lmxlbmd0aD4wKWZvcihtPTA7aT1rLmV4ZWModik7KXI9aChpLCEwKSxzPWYoci5pZCxyLnR5cGUsci5jZmcsXCJzZWFyY2hcIiksbT1qLmxhc3RJbmRleH1lbHNlIHRoaXMuc291cmNlUGF0aD1hLHRoaXMuc291cmNlU2VhcmNoPVwiXCI7bCs9Zyh0KSsoYi5zdHJpY3Q9PT0hMT9cIi8/XCI6XCJcIikrXCIkXCIsbi5wdXNoKHQpLHRoaXMucmVnZXhwPW5ldyBSZWdFeHAobCxiLmNhc2VJbnNlbnNpdGl2ZT9cImlcIjpjKSx0aGlzLnByZWZpeD1uWzBdLHRoaXMuJCRwYXJhbU5hbWVzPXF9ZnVuY3Rpb24gcihhKXtNKHRoaXMsYSl9ZnVuY3Rpb24gcygpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIG51bGwhPWE/YS50b1N0cmluZygpLnJlcGxhY2UoL1xcLy9nLFwiJTJGXCIpOmF9ZnVuY3Rpb24gZShhKXtyZXR1cm4gbnVsbCE9YT9hLnRvU3RyaW5nKCkucmVwbGFjZSgvJTJGL2csXCIvXCIpOmF9ZnVuY3Rpb24gZihhKXtyZXR1cm4gdGhpcy5wYXR0ZXJuLnRlc3QoYSl9ZnVuY3Rpb24gaSgpe3JldHVybntzdHJpY3Q6dCxjYXNlSW5zZW5zaXRpdmU6cH19ZnVuY3Rpb24gaihhKXtyZXR1cm4gSChhKXx8SyhhKSYmSChhW2EubGVuZ3RoLTFdKX1mdW5jdGlvbiBrKCl7Zm9yKDt4Lmxlbmd0aDspe3ZhciBhPXguc2hpZnQoKTtpZihhLnBhdHRlcm4pdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBvdmVycmlkZSBhIHR5cGUncyAucGF0dGVybiBhdCBydW50aW1lLlwiKTtiLmV4dGVuZCh2W2EubmFtZV0sby5pbnZva2UoYS5kZWYpKX19ZnVuY3Rpb24gbChhKXtNKHRoaXMsYXx8e30pfU89dGhpczt2YXIgbyxwPSExLHQ9ITAsdT0hMSx2PXt9LHc9ITAseD1bXSx5PXtzdHJpbmc6e2VuY29kZTphLGRlY29kZTplLGlzOmYscGF0dGVybjovW14vXSovfSxcImludFwiOntlbmNvZGU6YSxkZWNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHBhcnNlSW50KGEsMTApfSxpczpmdW5jdGlvbihhKXtyZXR1cm4gRyhhKSYmdGhpcy5kZWNvZGUoYS50b1N0cmluZygpKT09PWF9LHBhdHRlcm46L1xcZCsvfSxib29sOntlbmNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/MTowfSxkZWNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuIDAhPT1wYXJzZUludChhLDEwKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT0hMHx8YT09PSExfSxwYXR0ZXJuOi8wfDEvfSxkYXRlOntlbmNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaXMoYSk/W2EuZ2V0RnVsbFllYXIoKSwoXCIwXCIrKGEuZ2V0TW9udGgoKSsxKSkuc2xpY2UoLTIpLChcIjBcIithLmdldERhdGUoKSkuc2xpY2UoLTIpXS5qb2luKFwiLVwiKTpjfSxkZWNvZGU6ZnVuY3Rpb24oYSl7aWYodGhpcy5pcyhhKSlyZXR1cm4gYTt2YXIgYj10aGlzLmNhcHR1cmUuZXhlYyhhKTtyZXR1cm4gYj9uZXcgRGF0ZShiWzFdLGJbMl0tMSxiWzNdKTpjfSxpczpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIERhdGUmJiFpc05hTihhLnZhbHVlT2YoKSl9LGVxdWFsczpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmlzKGEpJiZ0aGlzLmlzKGIpJiZhLnRvSVNPU3RyaW5nKCk9PT1iLnRvSVNPU3RyaW5nKCl9LHBhdHRlcm46L1swLTldezR9LSg/OjBbMS05XXwxWzAtMl0pLSg/OjBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkvLGNhcHR1cmU6LyhbMC05XXs0fSktKDBbMS05XXwxWzAtMl0pLSgwWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pL30sanNvbjp7ZW5jb2RlOmIudG9Kc29uLGRlY29kZTpiLmZyb21Kc29uLGlzOmIuaXNPYmplY3QsZXF1YWxzOmIuZXF1YWxzLHBhdHRlcm46L1teL10qL30sYW55OntlbmNvZGU6Yi5pZGVudGl0eSxkZWNvZGU6Yi5pZGVudGl0eSxpczpiLmlkZW50aXR5LGVxdWFsczpiLmVxdWFscyxwYXR0ZXJuOi8uKi99fTtzLiQkZ2V0RGVmYXVsdFZhbHVlPWZ1bmN0aW9uKGEpe2lmKCFqKGEudmFsdWUpKXJldHVybiBhLnZhbHVlO2lmKCFvKXRocm93IG5ldyBFcnJvcihcIkluamVjdGFibGUgZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYXQgY29uZmlndXJhdGlvbiB0aW1lXCIpO3JldHVybiBvLmludm9rZShhLnZhbHVlKX0sdGhpcy5jYXNlSW5zZW5zaXRpdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSkmJihwPWEpLHB9LHRoaXMuc3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gRyhhKSYmKHQ9YSksdH0sdGhpcy5kZWZhdWx0U3F1YXNoUG9saWN5PWZ1bmN0aW9uKGEpe2lmKCFHKGEpKXJldHVybiB1O2lmKGEhPT0hMCYmYSE9PSExJiYhSShhKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNxdWFzaCBwb2xpY3k6IFwiK2ErXCIuIFZhbGlkIHBvbGljaWVzOiBmYWxzZSwgdHJ1ZSwgYXJiaXRyYXJ5LXN0cmluZ1wiKTtyZXR1cm4gdT1hLGF9LHRoaXMuY29tcGlsZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgcShhLE0oaSgpLGIpKX0sdGhpcy5pc01hdGNoZXI9ZnVuY3Rpb24oYSl7aWYoIUooYSkpcmV0dXJuITE7dmFyIGI9ITA7cmV0dXJuIEwocS5wcm90b3R5cGUsZnVuY3Rpb24oYyxkKXtIKGMpJiYoYj1iJiZHKGFbZF0pJiZIKGFbZF0pKX0pLGJ9LHRoaXMudHlwZT1mdW5jdGlvbihhLGIsYyl7aWYoIUcoYikpcmV0dXJuIHZbYV07aWYodi5oYXNPd25Qcm9wZXJ0eShhKSl0aHJvdyBuZXcgRXJyb3IoXCJBIHR5cGUgbmFtZWQgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7cmV0dXJuIHZbYV09bmV3IHIoTSh7bmFtZTphfSxiKSksYyYmKHgucHVzaCh7bmFtZTphLGRlZjpjfSksd3x8aygpKSx0aGlzfSxMKHksZnVuY3Rpb24oYSxiKXt2W2JdPW5ldyByKE0oe25hbWU6Yn0sYSkpfSksdj1kKHYse30pLHRoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gbz1hLHc9ITEsaygpLEwoeSxmdW5jdGlvbihhLGIpe3ZbYl18fCh2W2JdPW5ldyByKGEpKX0pLHRoaXN9XSx0aGlzLlBhcmFtPWZ1bmN0aW9uKGEsYixkLGUpe2Z1bmN0aW9uIGYoYSl7dmFyIGI9SihhKT9nKGEpOltdLGM9LTE9PT1oKGIsXCJ2YWx1ZVwiKSYmLTE9PT1oKGIsXCJ0eXBlXCIpJiYtMT09PWgoYixcInNxdWFzaFwiKSYmLTE9PT1oKGIsXCJhcnJheVwiKTtyZXR1cm4gYyYmKGE9e3ZhbHVlOmF9KSxhLiQkZm49aihhLnZhbHVlKT9hLnZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGEudmFsdWV9LGF9ZnVuY3Rpb24gaShiLGMsZCl7aWYoYi50eXBlJiZjKXRocm93IG5ldyBFcnJvcihcIlBhcmFtICdcIithK1wiJyBoYXMgdHdvIHR5cGUgY29uZmlndXJhdGlvbnMuXCIpO3JldHVybiBjP2M6Yi50eXBlP2IudHlwZSBpbnN0YW5jZW9mIHI/Yi50eXBlOm5ldyByKGIudHlwZSk6XCJjb25maWdcIj09PWQ/di5hbnk6di5zdHJpbmd9ZnVuY3Rpb24gaygpe3ZhciBiPXthcnJheTpcInNlYXJjaFwiPT09ZT9cImF1dG9cIjohMX0sYz1hLm1hdGNoKC9cXFtcXF0kLyk/e2FycmF5OiEwfTp7fTtyZXR1cm4gTShiLGMsZCkuYXJyYXl9ZnVuY3Rpb24gbChhLGIpe3ZhciBjPWEuc3F1YXNoO2lmKCFifHxjPT09ITEpcmV0dXJuITE7aWYoIUcoYyl8fG51bGw9PWMpcmV0dXJuIHU7aWYoYz09PSEwfHxJKGMpKXJldHVybiBjO3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3F1YXNoIHBvbGljeTogJ1wiK2MrXCInLiBWYWxpZCBwb2xpY2llczogZmFsc2UsIHRydWUsIG9yIGFyYml0cmFyeSBzdHJpbmdcIil9ZnVuY3Rpb24gcChhLGIsZCxlKXt2YXIgZixnLGk9W3tmcm9tOlwiXCIsdG86ZHx8Yj9jOlwiXCJ9LHtmcm9tOm51bGwsdG86ZHx8Yj9jOlwiXCJ9XTtyZXR1cm4gZj1LKGEucmVwbGFjZSk/YS5yZXBsYWNlOltdLEkoZSkmJmYucHVzaCh7ZnJvbTplLHRvOmN9KSxnPW4oZixmdW5jdGlvbihhKXtyZXR1cm4gYS5mcm9tfSksbShpLGZ1bmN0aW9uKGEpe3JldHVybi0xPT09aChnLGEuZnJvbSl9KS5jb25jYXQoZil9ZnVuY3Rpb24gcSgpe2lmKCFvKXRocm93IG5ldyBFcnJvcihcIkluamVjdGFibGUgZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYXQgY29uZmlndXJhdGlvbiB0aW1lXCIpO3JldHVybiBvLmludm9rZShkLiQkZm4pfWZ1bmN0aW9uIHMoYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGIuZnJvbT09PWF9fWZ1bmN0aW9uIGMoYSl7dmFyIGM9bihtKHcucmVwbGFjZSxiKGEpKSxmdW5jdGlvbihhKXtyZXR1cm4gYS50b30pO3JldHVybiBjLmxlbmd0aD9jWzBdOmF9cmV0dXJuIGE9YyhhKSxHKGEpP3cudHlwZS5kZWNvZGUoYSk6cSgpfWZ1bmN0aW9uIHQoKXtyZXR1cm5cIntQYXJhbTpcIithK1wiIFwiK2IrXCIgc3F1YXNoOiAnXCIreitcIicgb3B0aW9uYWw6IFwiK3krXCJ9XCJ9dmFyIHc9dGhpcztkPWYoZCksYj1pKGQsYixlKTt2YXIgeD1rKCk7Yj14P2IuJGFzQXJyYXkoeCxcInNlYXJjaFwiPT09ZSk6YixcInN0cmluZ1wiIT09Yi5uYW1lfHx4fHxcInBhdGhcIiE9PWV8fGQudmFsdWUhPT1jfHwoZC52YWx1ZT1cIlwiKTt2YXIgeT1kLnZhbHVlIT09Yyx6PWwoZCx5KSxBPXAoZCx4LHkseik7TSh0aGlzLHtpZDphLHR5cGU6Yixsb2NhdGlvbjplLGFycmF5Ongsc3F1YXNoOnoscmVwbGFjZTpBLGlzT3B0aW9uYWw6eSx2YWx1ZTpzLGR5bmFtaWM6Yyxjb25maWc6ZCx0b1N0cmluZzp0fSl9LGwucHJvdG90eXBlPXskJG5ldzpmdW5jdGlvbigpe3JldHVybiBkKHRoaXMsTShuZXcgbCx7JCRwYXJlbnQ6dGhpc30pKX0sJCRrZXlzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGI9W10sYz10aGlzLGQ9ZyhsLnByb3RvdHlwZSk7YzspYi5wdXNoKGMpLGM9Yy4kJHBhcmVudDtyZXR1cm4gYi5yZXZlcnNlKCksTChiLGZ1bmN0aW9uKGIpe0woZyhiKSxmdW5jdGlvbihiKXstMT09PWgoYSxiKSYmLTE9PT1oKGQsYikmJmEucHVzaChiKX0pfSksYX0sJCR2YWx1ZXM6ZnVuY3Rpb24oYSl7dmFyIGI9e30sYz10aGlzO3JldHVybiBMKGMuJCRrZXlzKCksZnVuY3Rpb24oZCl7YltkXT1jW2RdLnZhbHVlKGEmJmFbZF0pfSksYn0sJCRlcXVhbHM6ZnVuY3Rpb24oYSxiKXt2YXIgYz0hMCxkPXRoaXM7cmV0dXJuIEwoZC4kJGtleXMoKSxmdW5jdGlvbihlKXt2YXIgZj1hJiZhW2VdLGc9YiYmYltlXTtkW2VdLnR5cGUuZXF1YWxzKGYsZyl8fChjPSExKX0pLGN9LCQkdmFsaWRhdGVzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPSEwLGY9dGhpcztyZXR1cm4gTCh0aGlzLiQka2V5cygpLGZ1bmN0aW9uKGcpe2Q9ZltnXSxjPWFbZ10sYj0hYyYmZC5pc09wdGlvbmFsLGU9ZSYmKGJ8fCEhZC50eXBlLmlzKGMpKX0pLGV9LCQkcGFyZW50OmN9LHRoaXMuUGFyYW1TZXQ9bH1mdW5jdGlvbiB0KGEsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj0vXlxcXigoPzpcXFxcW15hLXpBLVowLTldfFteXFxcXFxcW1xcXVxcXiQqKz8uKCl8e31dKykqKS8uZXhlYyhhLnNvdXJjZSk7cmV0dXJuIG51bGwhPWI/YlsxXS5yZXBsYWNlKC9cXFxcKC4pL2csXCIkMVwiKTpcIlwifWZ1bmN0aW9uIGYoYSxiKXtyZXR1cm4gYS5yZXBsYWNlKC9cXCQoXFwkfFxcZHsxLDJ9KS8sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYltcIiRcIj09PWM/MDpOdW1iZXIoYyldfSl9ZnVuY3Rpb24gZyhhLGIsYyl7aWYoIWMpcmV0dXJuITE7dmFyIGQ9YS5pbnZva2UoYixiLHskbWF0Y2g6Y30pO3JldHVybiBHKGQpP2Q6ITB9ZnVuY3Rpb24gaChkLGUsZixnKXtmdW5jdGlvbiBoKGEsYixjKXtyZXR1cm5cIi9cIj09PXA/YTpiP3Auc2xpY2UoMCwtMSkrYTpjP3Auc2xpY2UoMSkrYTphfWZ1bmN0aW9uIG0oYSl7ZnVuY3Rpb24gYihhKXt2YXIgYj1hKGYsZCk7cmV0dXJuIGI/KEkoYikmJmQucmVwbGFjZSgpLnVybChiKSwhMCk6ITF9aWYoIWF8fCFhLmRlZmF1bHRQcmV2ZW50ZWQpe3ZhciBlPW8mJmQudXJsKCk9PT1vO2lmKG89YyxlKXJldHVybiEwO3ZhciBnLGg9ai5sZW5ndGg7Zm9yKGc9MDtoPmc7ZysrKWlmKGIoaltnXSkpcmV0dXJuO2smJmIoayl9fWZ1bmN0aW9uIG4oKXtyZXR1cm4gaT1pfHxlLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixtKX12YXIgbyxwPWcuYmFzZUhyZWYoKSxxPWQudXJsKCk7cmV0dXJuIGx8fG4oKSx7c3luYzpmdW5jdGlvbigpe20oKX0sbGlzdGVuOmZ1bmN0aW9uKCl7cmV0dXJuIG4oKX0sdXBkYXRlOmZ1bmN0aW9uKGEpe3JldHVybiBhP3ZvaWQocT1kLnVybCgpKTp2b2lkKGQudXJsKCkhPT1xJiYoZC51cmwocSksZC5yZXBsYWNlKCkpKX0scHVzaDpmdW5jdGlvbihhLGIsZSl7ZC51cmwoYS5mb3JtYXQoYnx8e30pKSxvPWUmJmUuJCRhdm9pZFJlc3luYz9kLnVybCgpOmMsZSYmZS5yZXBsYWNlJiZkLnJlcGxhY2UoKX0saHJlZjpmdW5jdGlvbihjLGUsZil7aWYoIWMudmFsaWRhdGVzKGUpKXJldHVybiBudWxsO3ZhciBnPWEuaHRtbDVNb2RlKCk7Yi5pc09iamVjdChnKSYmKGc9Zy5lbmFibGVkKTt2YXIgaT1jLmZvcm1hdChlKTtpZihmPWZ8fHt9LGd8fG51bGw9PT1pfHwoaT1cIiNcIithLmhhc2hQcmVmaXgoKStpKSxpPWgoaSxnLGYuYWJzb2x1dGUpLCFmLmFic29sdXRlfHwhaSlyZXR1cm4gaTt2YXIgaj0hZyYmaT9cIi9cIjpcIlwiLGs9ZC5wb3J0KCk7cmV0dXJuIGs9ODA9PT1rfHw0NDM9PT1rP1wiXCI6XCI6XCIrayxbZC5wcm90b2NvbCgpLFwiOi8vXCIsZC5ob3N0KCksayxqLGldLmpvaW4oXCJcIil9fX12YXIgaSxqPVtdLGs9bnVsbCxsPSExO3RoaXMucnVsZT1mdW5jdGlvbihhKXtpZighSChhKSl0aHJvdyBuZXcgRXJyb3IoXCIncnVsZScgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3JldHVybiBqLnB1c2goYSksdGhpc30sdGhpcy5vdGhlcndpc2U9ZnVuY3Rpb24oYSl7aWYoSShhKSl7dmFyIGI9YTthPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9fWVsc2UgaWYoIUgoYSkpdGhyb3cgbmV3IEVycm9yKFwiJ3J1bGUnIG11c3QgYmUgYSBmdW5jdGlvblwiKTtyZXR1cm4gaz1hLHRoaXN9LHRoaXMud2hlbj1mdW5jdGlvbihhLGIpe3ZhciBjLGg9SShiKTtpZihJKGEpJiYoYT1kLmNvbXBpbGUoYSkpLCFoJiYhSChiKSYmIUsoYikpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCAnaGFuZGxlcicgaW4gd2hlbigpXCIpO3ZhciBpPXttYXRjaGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGgmJihjPWQuY29tcGlsZShiKSxiPVtcIiRtYXRjaFwiLGZ1bmN0aW9uKGEpe3JldHVybiBjLmZvcm1hdChhKX1dKSxNKGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGcoYyxiLGEuZXhlYyhkLnBhdGgoKSxkLnNlYXJjaCgpKSl9LHtwcmVmaXg6SShhLnByZWZpeCk/YS5wcmVmaXg6XCJcIn0pfSxyZWdleDpmdW5jdGlvbihhLGIpe2lmKGEuZ2xvYmFsfHxhLnN0aWNreSl0aHJvdyBuZXcgRXJyb3IoXCJ3aGVuKCkgUmVnRXhwIG11c3Qgbm90IGJlIGdsb2JhbCBvciBzdGlja3lcIik7cmV0dXJuIGgmJihjPWIsYj1bXCIkbWF0Y2hcIixmdW5jdGlvbihhKXtyZXR1cm4gZihjLGEpfV0pLE0oZnVuY3Rpb24oYyxkKXtyZXR1cm4gZyhjLGIsYS5leGVjKGQucGF0aCgpKSl9LHtwcmVmaXg6ZShhKX0pfX0saj17bWF0Y2hlcjpkLmlzTWF0Y2hlcihhKSxyZWdleDphIGluc3RhbmNlb2YgUmVnRXhwfTtmb3IodmFyIGsgaW4gailpZihqW2tdKXJldHVybiB0aGlzLnJ1bGUoaVtrXShhLGIpKTt0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkICd3aGF0JyBpbiB3aGVuKClcIil9LHRoaXMuZGVmZXJJbnRlcmNlcHQ9ZnVuY3Rpb24oYSl7YT09PWMmJihhPSEwKSxsPWF9LHRoaXMuJGdldD1oLGguJGluamVjdD1bXCIkbG9jYXRpb25cIixcIiRyb290U2NvcGVcIixcIiRpbmplY3RvclwiLFwiJGJyb3dzZXJcIl19ZnVuY3Rpb24gdShhLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuIDA9PT1hLmluZGV4T2YoXCIuXCIpfHwwPT09YS5pbmRleE9mKFwiXlwiKX1mdW5jdGlvbiBsKGEsYil7aWYoIWEpcmV0dXJuIGM7dmFyIGQ9SShhKSxlPWQ/YTphLm5hbWUsZz1mKGUpO2lmKGcpe2lmKCFiKXRocm93IG5ldyBFcnJvcihcIk5vIHJlZmVyZW5jZSBwb2ludCBnaXZlbiBmb3IgcGF0aCAnXCIrZStcIidcIik7Yj1sKGIpO2Zvcih2YXIgaD1lLnNwbGl0KFwiLlwiKSxpPTAsaj1oLmxlbmd0aCxrPWI7aj5pO2krKylpZihcIlwiIT09aFtpXXx8MCE9PWkpe2lmKFwiXlwiIT09aFtpXSlicmVhaztpZighay5wYXJlbnQpdGhyb3cgbmV3IEVycm9yKFwiUGF0aCAnXCIrZStcIicgbm90IHZhbGlkIGZvciBzdGF0ZSAnXCIrYi5uYW1lK1wiJ1wiKTtrPWsucGFyZW50fWVsc2Ugaz1iO2g9aC5zbGljZShpKS5qb2luKFwiLlwiKSxlPWsubmFtZSsoay5uYW1lJiZoP1wiLlwiOlwiXCIpK2h9dmFyIG09eVtlXTtyZXR1cm4hbXx8IWQmJihkfHxtIT09YSYmbS5zZWxmIT09YSk/YzptfWZ1bmN0aW9uIG0oYSxiKXt6W2FdfHwoelthXT1bXSkselthXS5wdXNoKGIpfWZ1bmN0aW9uIG8oYSl7Zm9yKHZhciBiPXpbYV18fFtdO2IubGVuZ3RoOylwKGIuc2hpZnQoKSl9ZnVuY3Rpb24gcChiKXtiPWQoYix7c2VsZjpiLHJlc29sdmU6Yi5yZXNvbHZlfHx7fSx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5hbWV9fSk7dmFyIGM9Yi5uYW1lO2lmKCFJKGMpfHxjLmluZGV4T2YoXCJAXCIpPj0wKXRocm93IG5ldyBFcnJvcihcIlN0YXRlIG11c3QgaGF2ZSBhIHZhbGlkIG5hbWVcIik7aWYoeS5oYXNPd25Qcm9wZXJ0eShjKSl0aHJvdyBuZXcgRXJyb3IoXCJTdGF0ZSAnXCIrYytcIicnIGlzIGFscmVhZHkgZGVmaW5lZFwiKTt2YXIgZT0tMSE9PWMuaW5kZXhPZihcIi5cIik/Yy5zdWJzdHJpbmcoMCxjLmxhc3RJbmRleE9mKFwiLlwiKSk6SShiLnBhcmVudCk/Yi5wYXJlbnQ6SihiLnBhcmVudCkmJkkoYi5wYXJlbnQubmFtZSk/Yi5wYXJlbnQubmFtZTpcIlwiO2lmKGUmJiF5W2VdKXJldHVybiBtKGUsYi5zZWxmKTtmb3IodmFyIGYgaW4gQilIKEJbZl0pJiYoYltmXT1CW2ZdKGIsQi4kZGVsZWdhdGVzW2ZdKSk7cmV0dXJuIHlbY109YiwhYltBXSYmYi51cmwmJmEud2hlbihiLnVybCxbXCIkbWF0Y2hcIixcIiRzdGF0ZVBhcmFtc1wiLGZ1bmN0aW9uKGEsYyl7eC4kY3VycmVudC5uYXZpZ2FibGU9PWImJmooYSxjKXx8eC50cmFuc2l0aW9uVG8oYixhLHtpbmhlcml0OiEwLGxvY2F0aW9uOiExfSl9XSksbyhjKSxifWZ1bmN0aW9uIHEoYSl7cmV0dXJuIGEuaW5kZXhPZihcIipcIik+LTF9ZnVuY3Rpb24gcihhKXt2YXIgYj1hLnNwbGl0KFwiLlwiKSxjPXguJGN1cnJlbnQubmFtZS5zcGxpdChcIi5cIik7aWYoXCIqKlwiPT09YlswXSYmKGM9Yy5zbGljZShoKGMsYlsxXSkpLGMudW5zaGlmdChcIioqXCIpKSxcIioqXCI9PT1iW2IubGVuZ3RoLTFdJiYoYy5zcGxpY2UoaChjLGJbYi5sZW5ndGgtMl0pKzEsTnVtYmVyLk1BWF9WQUxVRSksYy5wdXNoKFwiKipcIikpLGIubGVuZ3RoIT1jLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspXCIqXCI9PT1iW2RdJiYoY1tkXT1cIipcIik7cmV0dXJuIGMuam9pbihcIlwiKT09PWIuam9pbihcIlwiKX1mdW5jdGlvbiBzKGEsYil7cmV0dXJuIEkoYSkmJiFHKGIpP0JbYV06SChiKSYmSShhKT8oQlthXSYmIUIuJGRlbGVnYXRlc1thXSYmKEIuJGRlbGVnYXRlc1thXT1CW2FdKSxCW2FdPWIsdGhpcyk6dGhpc31mdW5jdGlvbiB0KGEsYil7cmV0dXJuIEooYSk/Yj1hOmIubmFtZT1hLHAoYiksdGhpc31mdW5jdGlvbiB1KGEsZSxmLGgsbSxvLHApe2Z1bmN0aW9uIHMoYixjLGQsZil7dmFyIGc9YS4kYnJvYWRjYXN0KFwiJHN0YXRlTm90Rm91bmRcIixiLGMsZCk7aWYoZy5kZWZhdWx0UHJldmVudGVkKXJldHVybiBwLnVwZGF0ZSgpLEI7aWYoIWcucmV0cnkpcmV0dXJuIG51bGw7aWYoZi4kcmV0cnkpcmV0dXJuIHAudXBkYXRlKCksQzt2YXIgaD14LnRyYW5zaXRpb249ZS53aGVuKGcucmV0cnkpO3JldHVybiBoLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gaCE9PXgudHJhbnNpdGlvbj91OihiLm9wdGlvbnMuJHJldHJ5PSEwLHgudHJhbnNpdGlvblRvKGIudG8sYi50b1BhcmFtcyxiLm9wdGlvbnMpKX0sZnVuY3Rpb24oKXtyZXR1cm4gQn0pLHAudXBkYXRlKCksaH1mdW5jdGlvbiB0KGEsYyxkLGcsaSxqKXt2YXIgbD1kP2M6ayhhLnBhcmFtcy4kJGtleXMoKSxjKSxuPXskc3RhdGVQYXJhbXM6bH07aS5yZXNvbHZlPW0ucmVzb2x2ZShhLnJlc29sdmUsbixpLnJlc29sdmUsYSk7dmFyIG89W2kucmVzb2x2ZS50aGVuKGZ1bmN0aW9uKGEpe2kuZ2xvYmFscz1hfSldO3JldHVybiBnJiZvLnB1c2goZyksTChhLnZpZXdzLGZ1bmN0aW9uKGMsZCl7dmFyIGU9Yy5yZXNvbHZlJiZjLnJlc29sdmUhPT1hLnJlc29sdmU/Yy5yZXNvbHZlOnt9O2UuJHRlbXBsYXRlPVtmdW5jdGlvbigpe3JldHVybiBmLmxvYWQoZCx7dmlldzpjLGxvY2FsczpuLHBhcmFtczpsLG5vdGlmeTpqLm5vdGlmeX0pfHxcIlwifV0sby5wdXNoKG0ucmVzb2x2ZShlLG4saS5yZXNvbHZlLGEpLnRoZW4oZnVuY3Rpb24oZil7aWYoSChjLmNvbnRyb2xsZXJQcm92aWRlcil8fEsoYy5jb250cm9sbGVyUHJvdmlkZXIpKXt2YXIgZz1iLmV4dGVuZCh7fSxlLG4pO2YuJCRjb250cm9sbGVyPWguaW52b2tlKGMuY29udHJvbGxlclByb3ZpZGVyLG51bGwsZyl9ZWxzZSBmLiQkY29udHJvbGxlcj1jLmNvbnRyb2xsZXI7Zi4kJHN0YXRlPWEsZi4kJGNvbnRyb2xsZXJBcz1jLmNvbnRyb2xsZXJBcyxpW2RdPWZ9KSl9KSxlLmFsbChvKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KX12YXIgdT1lLnJlamVjdChuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIHN1cGVyc2VkZWRcIikpLHo9ZS5yZWplY3QobmV3IEVycm9yKFwidHJhbnNpdGlvbiBwcmV2ZW50ZWRcIikpLEI9ZS5yZWplY3QobmV3IEVycm9yKFwidHJhbnNpdGlvbiBhYm9ydGVkXCIpKSxDPWUucmVqZWN0KG5ldyBFcnJvcihcInRyYW5zaXRpb24gZmFpbGVkXCIpKTtyZXR1cm4gdy5sb2NhbHM9e3Jlc29sdmU6bnVsbCxnbG9iYWxzOnskc3RhdGVQYXJhbXM6e319fSx4PXtwYXJhbXM6e30sY3VycmVudDp3LnNlbGYsJGN1cnJlbnQ6dyx0cmFuc2l0aW9uOm51bGx9LHgucmVsb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIHgudHJhbnNpdGlvblRvKHguY3VycmVudCxvLHtyZWxvYWQ6ITAsaW5oZXJpdDohMSxub3RpZnk6ITB9KX0seC5nbz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHgudHJhbnNpdGlvblRvKGEsYixNKHtpbmhlcml0OiEwLHJlbGF0aXZlOnguJGN1cnJlbnR9LGMpKX0seC50cmFuc2l0aW9uVG89ZnVuY3Rpb24oYixjLGYpe2M9Y3x8e30sZj1NKHtsb2NhdGlvbjohMCxpbmhlcml0OiExLHJlbGF0aXZlOm51bGwsbm90aWZ5OiEwLHJlbG9hZDohMSwkcmV0cnk6ITF9LGZ8fHt9KTt2YXIgZyxqPXguJGN1cnJlbnQsbT14LnBhcmFtcyxuPWoucGF0aCxxPWwoYixmLnJlbGF0aXZlKTtpZighRyhxKSl7dmFyIHI9e3RvOmIsdG9QYXJhbXM6YyxvcHRpb25zOmZ9LHk9cyhyLGouc2VsZixtLGYpO2lmKHkpcmV0dXJuIHk7aWYoYj1yLnRvLGM9ci50b1BhcmFtcyxmPXIub3B0aW9ucyxxPWwoYixmLnJlbGF0aXZlKSwhRyhxKSl7aWYoIWYucmVsYXRpdmUpdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBzdGF0ZSAnXCIrYitcIidcIik7dGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgJ1wiK2IrXCInIGZyb20gc3RhdGUgJ1wiK2YucmVsYXRpdmUrXCInXCIpfX1pZihxW0FdKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0cmFuc2l0aW9uIHRvIGFic3RyYWN0IHN0YXRlICdcIitiK1wiJ1wiKTtpZihmLmluaGVyaXQmJihjPWkobyxjfHx7fSx4LiRjdXJyZW50LHEpKSwhcS5wYXJhbXMuJCR2YWxpZGF0ZXMoYykpcmV0dXJuIEM7Yz1xLnBhcmFtcy4kJHZhbHVlcyhjKSxiPXE7dmFyIEI9Yi5wYXRoLEQ9MCxFPUJbRF0sRj13LmxvY2FscyxIPVtdO2lmKCFmLnJlbG9hZClmb3IoO0UmJkU9PT1uW0RdJiZFLm93blBhcmFtcy4kJGVxdWFscyhjLG0pOylGPUhbRF09RS5sb2NhbHMsRCsrLEU9QltEXTtpZih2KGIsaixGLGYpKXJldHVybiBiLnNlbGYucmVsb2FkT25TZWFyY2ghPT0hMSYmcC51cGRhdGUoKSx4LnRyYW5zaXRpb249bnVsbCxlLndoZW4oeC5jdXJyZW50KTtpZihjPWsoYi5wYXJhbXMuJCRrZXlzKCksY3x8e30pLGYubm90aWZ5JiZhLiRicm9hZGNhc3QoXCIkc3RhdGVDaGFuZ2VTdGFydFwiLGIuc2VsZixjLGouc2VsZixtKS5kZWZhdWx0UHJldmVudGVkKXJldHVybiBwLnVwZGF0ZSgpLHo7Zm9yKHZhciBJPWUud2hlbihGKSxKPUQ7SjxCLmxlbmd0aDtKKyssRT1CW0pdKUY9SFtKXT1kKEYpLEk9dChFLGMsRT09PWIsSSxGLGYpO3ZhciBLPXgudHJhbnNpdGlvbj1JLnRoZW4oZnVuY3Rpb24oKXt2YXIgZCxlLGc7aWYoeC50cmFuc2l0aW9uIT09SylyZXR1cm4gdTtmb3IoZD1uLmxlbmd0aC0xO2Q+PUQ7ZC0tKWc9bltkXSxnLnNlbGYub25FeGl0JiZoLmludm9rZShnLnNlbGYub25FeGl0LGcuc2VsZixnLmxvY2Fscy5nbG9iYWxzKSxnLmxvY2Fscz1udWxsO2ZvcihkPUQ7ZDxCLmxlbmd0aDtkKyspZT1CW2RdLGUubG9jYWxzPUhbZF0sZS5zZWxmLm9uRW50ZXImJmguaW52b2tlKGUuc2VsZi5vbkVudGVyLGUuc2VsZixlLmxvY2Fscy5nbG9iYWxzKTtyZXR1cm4geC50cmFuc2l0aW9uIT09Sz91Oih4LiRjdXJyZW50PWIseC5jdXJyZW50PWIuc2VsZix4LnBhcmFtcz1jLE4oeC5wYXJhbXMsbykseC50cmFuc2l0aW9uPW51bGwsZi5sb2NhdGlvbiYmYi5uYXZpZ2FibGUmJnAucHVzaChiLm5hdmlnYWJsZS51cmwsYi5uYXZpZ2FibGUubG9jYWxzLmdsb2JhbHMuJHN0YXRlUGFyYW1zLHskJGF2b2lkUmVzeW5jOiEwLHJlcGxhY2U6XCJyZXBsYWNlXCI9PT1mLmxvY2F0aW9ufSksZi5ub3RpZnkmJmEuJGJyb2FkY2FzdChcIiRzdGF0ZUNoYW5nZVN1Y2Nlc3NcIixiLnNlbGYsYyxqLnNlbGYsbSkscC51cGRhdGUoITApLHguY3VycmVudCl9LGZ1bmN0aW9uKGQpe3JldHVybiB4LnRyYW5zaXRpb24hPT1LP3U6KHgudHJhbnNpdGlvbj1udWxsLGc9YS4kYnJvYWRjYXN0KFwiJHN0YXRlQ2hhbmdlRXJyb3JcIixiLnNlbGYsYyxqLnNlbGYsbSxkKSxnLmRlZmF1bHRQcmV2ZW50ZWR8fHAudXBkYXRlKCksZS5yZWplY3QoZCkpfSk7cmV0dXJuIEt9LHguaXM9ZnVuY3Rpb24oYSxiLGQpe2Q9TSh7cmVsYXRpdmU6eC4kY3VycmVudH0sZHx8e30pO3ZhciBlPWwoYSxkLnJlbGF0aXZlKTtyZXR1cm4gRyhlKT94LiRjdXJyZW50IT09ZT8hMTpiP2ooZS5wYXJhbXMuJCR2YWx1ZXMoYiksbyk6ITA6Y30seC5pbmNsdWRlcz1mdW5jdGlvbihhLGIsZCl7aWYoZD1NKHtyZWxhdGl2ZTp4LiRjdXJyZW50fSxkfHx7fSksSShhKSYmcShhKSl7aWYoIXIoYSkpcmV0dXJuITE7YT14LiRjdXJyZW50Lm5hbWV9dmFyIGU9bChhLGQucmVsYXRpdmUpO3JldHVybiBHKGUpP0coeC4kY3VycmVudC5pbmNsdWRlc1tlLm5hbWVdKT9iP2ooZS5wYXJhbXMuJCR2YWx1ZXMoYiksbyxnKGIpKTohMDohMTpjfSx4LmhyZWY9ZnVuY3Rpb24oYSxiLGQpe2Q9TSh7bG9zc3k6ITAsaW5oZXJpdDohMCxhYnNvbHV0ZTohMSxyZWxhdGl2ZTp4LiRjdXJyZW50fSxkfHx7fSk7dmFyIGU9bChhLGQucmVsYXRpdmUpO2lmKCFHKGUpKXJldHVybiBudWxsO2QuaW5oZXJpdCYmKGI9aShvLGJ8fHt9LHguJGN1cnJlbnQsZSkpO3ZhciBmPWUmJmQubG9zc3k/ZS5uYXZpZ2FibGU6ZTtyZXR1cm4gZiYmZi51cmwhPT1jJiZudWxsIT09Zi51cmw/cC5ocmVmKGYudXJsLGsoZS5wYXJhbXMuJCRrZXlzKCksYnx8e30pLHthYnNvbHV0ZTpkLmFic29sdXRlfSk6bnVsbH0seC5nZXQ9ZnVuY3Rpb24oYSxiKXtpZigwPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbihnKHkpLGZ1bmN0aW9uKGEpe3JldHVybiB5W2FdLnNlbGZ9KTt2YXIgYz1sKGEsYnx8eC4kY3VycmVudCk7cmV0dXJuIGMmJmMuc2VsZj9jLnNlbGY6bnVsbH0seH1mdW5jdGlvbiB2KGEsYixjLGQpe3JldHVybiBhIT09Ynx8KGMhPT1iLmxvY2Fsc3x8ZC5yZWxvYWQpJiZhLnNlbGYucmVsb2FkT25TZWFyY2ghPT0hMT92b2lkIDA6ITB9dmFyIHcseCx5PXt9LHo9e30sQT1cImFic3RyYWN0XCIsQj17cGFyZW50OmZ1bmN0aW9uKGEpe2lmKEcoYS5wYXJlbnQpJiZhLnBhcmVudClyZXR1cm4gbChhLnBhcmVudCk7dmFyIGI9L14oLispXFwuW14uXSskLy5leGVjKGEubmFtZSk7cmV0dXJuIGI/bChiWzFdKTp3fSxkYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudCYmYS5wYXJlbnQuZGF0YSYmKGEuZGF0YT1hLnNlbGYuZGF0YT1NKHt9LGEucGFyZW50LmRhdGEsYS5kYXRhKSksYS5kYXRhfSx1cmw6ZnVuY3Rpb24oYSl7dmFyIGI9YS51cmwsYz17cGFyYW1zOmEucGFyYW1zfHx7fX07aWYoSShiKSlyZXR1cm5cIl5cIj09Yi5jaGFyQXQoMCk/ZS5jb21waWxlKGIuc3Vic3RyaW5nKDEpLGMpOihhLnBhcmVudC5uYXZpZ2FibGV8fHcpLnVybC5jb25jYXQoYixjKTtpZighYnx8ZS5pc01hdGNoZXIoYikpcmV0dXJuIGI7dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiK2IrXCInIGluIHN0YXRlICdcIithK1wiJ1wiKX0sbmF2aWdhYmxlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnVybD9hOmEucGFyZW50P2EucGFyZW50Lm5hdmlnYWJsZTpudWxsfSxvd25QYXJhbXM6ZnVuY3Rpb24oYSl7dmFyIGI9YS51cmwmJmEudXJsLnBhcmFtc3x8bmV3IE8uUGFyYW1TZXQ7cmV0dXJuIEwoYS5wYXJhbXN8fHt9LGZ1bmN0aW9uKGEsYyl7YltjXXx8KGJbY109bmV3IE8uUGFyYW0oYyxudWxsLGEsXCJjb25maWdcIikpfSksYn0scGFyYW1zOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudCYmYS5wYXJlbnQucGFyYW1zP00oYS5wYXJlbnQucGFyYW1zLiQkbmV3KCksYS5vd25QYXJhbXMpOm5ldyBPLlBhcmFtU2V0fSx2aWV3czpmdW5jdGlvbihhKXt2YXIgYj17fTtyZXR1cm4gTChHKGEudmlld3MpP2Eudmlld3M6e1wiXCI6YX0sZnVuY3Rpb24oYyxkKXtkLmluZGV4T2YoXCJAXCIpPDAmJihkKz1cIkBcIithLnBhcmVudC5uYW1lKSxiW2RdPWN9KSxifSxwYXRoOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudD9hLnBhcmVudC5wYXRoLmNvbmNhdChhKTpbXX0saW5jbHVkZXM6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnQ/TSh7fSxhLnBhcmVudC5pbmNsdWRlcyk6e307cmV0dXJuIGJbYS5uYW1lXT0hMCxifSwkZGVsZWdhdGVzOnt9fTt3PXAoe25hbWU6XCJcIix1cmw6XCJeXCIsdmlld3M6bnVsbCxcImFic3RyYWN0XCI6ITB9KSx3Lm5hdmlnYWJsZT1udWxsLHRoaXMuZGVjb3JhdG9yPXMsdGhpcy5zdGF0ZT10LHRoaXMuJGdldD11LHUuJGluamVjdD1bXCIkcm9vdFNjb3BlXCIsXCIkcVwiLFwiJHZpZXdcIixcIiRpbmplY3RvclwiLFwiJHJlc29sdmVcIixcIiRzdGF0ZVBhcmFtc1wiLFwiJHVybFJvdXRlclwiLFwiJGxvY2F0aW9uXCIsXCIkdXJsTWF0Y2hlckZhY3RvcnlcIl19ZnVuY3Rpb24gdigpe2Z1bmN0aW9uIGEoYSxiKXtyZXR1cm57bG9hZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9e3RlbXBsYXRlOm51bGwsY29udHJvbGxlcjpudWxsLHZpZXc6bnVsbCxsb2NhbHM6bnVsbCxub3RpZnk6ITAsYXN5bmM6ITAscGFyYW1zOnt9fTtyZXR1cm4gZD1NKGYsZCksZC52aWV3JiYoZT1iLmZyb21Db25maWcoZC52aWV3LGQucGFyYW1zLGQubG9jYWxzKSksZSYmZC5ub3RpZnkmJmEuJGJyb2FkY2FzdChcIiR2aWV3Q29udGVudExvYWRpbmdcIixkKSxlfX19dGhpcy4kZ2V0PWEsYS4kaW5qZWN0PVtcIiRyb290U2NvcGVcIixcIiR0ZW1wbGF0ZUZhY3RvcnlcIl19ZnVuY3Rpb24gdygpe3ZhciBhPSExO3RoaXMudXNlQW5jaG9yU2Nyb2xsPWZ1bmN0aW9uKCl7YT0hMH0sdGhpcy4kZ2V0PVtcIiRhbmNob3JTY3JvbGxcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYixjKXtyZXR1cm4gYT9iOmZ1bmN0aW9uKGEpe2MoZnVuY3Rpb24oKXthWzBdLnNjcm9sbEludG9WaWV3KCl9LDAsITEpfX1dfWZ1bmN0aW9uIHgoYSxjLGQsZSl7ZnVuY3Rpb24gZigpe3JldHVybiBjLmhhcz9mdW5jdGlvbihhKXtyZXR1cm4gYy5oYXMoYSk/Yy5nZXQoYSk6bnVsbH06ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiBjLmdldChhKX1jYXRjaChiKXtyZXR1cm4gbnVsbH19fWZ1bmN0aW9uIGcoYSxiKXt2YXIgYz1mdW5jdGlvbigpe3JldHVybntlbnRlcjpmdW5jdGlvbihhLGIsYyl7Yi5hZnRlcihhKSxjKCl9LGxlYXZlOmZ1bmN0aW9uKGEsYil7YS5yZW1vdmUoKSxiKCl9fX07aWYoailyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWouZW50ZXIoYSxudWxsLGIsYyk7ZCYmZC50aGVuJiZkLnRoZW4oYyl9LGxlYXZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9ai5sZWF2ZShhLGIpO2MmJmMudGhlbiYmYy50aGVuKGIpfX07aWYoaSl7dmFyIGQ9aSYmaShiLGEpO3JldHVybntlbnRlcjpmdW5jdGlvbihhLGIsYyl7ZC5lbnRlcihhLG51bGwsYiksYygpfSxsZWF2ZTpmdW5jdGlvbihhLGIpe2QubGVhdmUoYSksYigpfX19cmV0dXJuIGMoKX12YXIgaD1mKCksaT1oKFwiJGFuaW1hdG9yXCIpLGo9aChcIiRhbmltYXRlXCIpLGs9e3Jlc3RyaWN0OlwiRUNBXCIsdGVybWluYWw6ITAscHJpb3JpdHk6NDAwLHRyYW5zY2x1ZGU6XCJlbGVtZW50XCIsY29tcGlsZTpmdW5jdGlvbihjLGYsaCl7cmV0dXJuIGZ1bmN0aW9uKGMsZixpKXtmdW5jdGlvbiBqKCl7bCYmKGwucmVtb3ZlKCksbD1udWxsKSxuJiYobi4kZGVzdHJveSgpLG49bnVsbCksbSYmKHIubGVhdmUobSxmdW5jdGlvbigpe2w9bnVsbH0pLGw9bSxtPW51bGwpfWZ1bmN0aW9uIGsoZyl7dmFyIGssbD16KGMsaSxmLGUpLHM9bCYmYS4kY3VycmVudCYmYS4kY3VycmVudC5sb2NhbHNbbF07aWYoZ3x8cyE9PW8pe2s9Yy4kbmV3KCksbz1hLiRjdXJyZW50LmxvY2Fsc1tsXTt2YXIgdD1oKGssZnVuY3Rpb24oYSl7ci5lbnRlcihhLGYsZnVuY3Rpb24oKXtuJiZuLiRlbWl0KFwiJHZpZXdDb250ZW50QW5pbWF0aW9uRW5kZWRcIiksKGIuaXNEZWZpbmVkKHEpJiYhcXx8Yy4kZXZhbChxKSkmJmQoYSl9KSxqKCl9KTttPXQsbj1rLG4uJGVtaXQoXCIkdmlld0NvbnRlbnRMb2FkZWRcIiksbi4kZXZhbChwKX19dmFyIGwsbSxuLG8scD1pLm9ubG9hZHx8XCJcIixxPWkuYXV0b3Njcm9sbCxyPWcoaSxjKTtjLiRvbihcIiRzdGF0ZUNoYW5nZVN1Y2Nlc3NcIixmdW5jdGlvbigpe2soITEpfSksYy4kb24oXCIkdmlld0NvbnRlbnRMb2FkaW5nXCIsZnVuY3Rpb24oKXtrKCExKX0pLGsoITApfX19O3JldHVybiBrfWZ1bmN0aW9uIHkoYSxiLGMsZCl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxjb21waWxlOmZ1bmN0aW9uKGUpe3ZhciBmPWUuaHRtbCgpO3JldHVybiBmdW5jdGlvbihlLGcsaCl7dmFyIGk9Yy4kY3VycmVudCxqPXooZSxoLGcsZCksaz1pJiZpLmxvY2Fsc1tqXTtpZihrKXtnLmRhdGEoXCIkdWlWaWV3XCIse25hbWU6aixzdGF0ZTprLiQkc3RhdGV9KSxnLmh0bWwoay4kdGVtcGxhdGU/ay4kdGVtcGxhdGU6Zik7dmFyIGw9YShnLmNvbnRlbnRzKCkpO2lmKGsuJCRjb250cm9sbGVyKXtrLiRzY29wZT1lO3ZhciBtPWIoay4kJGNvbnRyb2xsZXIsayk7ay4kJGNvbnRyb2xsZXJBcyYmKGVbay4kJGNvbnRyb2xsZXJBc109bSksZy5kYXRhKFwiJG5nQ29udHJvbGxlckNvbnRyb2xsZXJcIixtKSxnLmNoaWxkcmVuKCkuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsbSl9bChlKX19fX19ZnVuY3Rpb24geihhLGIsYyxkKXt2YXIgZT1kKGIudWlWaWV3fHxiLm5hbWV8fFwiXCIpKGEpLGY9Yy5pbmhlcml0ZWREYXRhKFwiJHVpVmlld1wiKTtyZXR1cm4gZS5pbmRleE9mKFwiQFwiKT49MD9lOmUrXCJAXCIrKGY/Zi5zdGF0ZS5uYW1lOlwiXCIpfWZ1bmN0aW9uIEEoYSxiKXt2YXIgYyxkPWEubWF0Y2goL15cXHMqKHtbXn1dKn0pXFxzKiQvKTtpZihkJiYoYT1iK1wiKFwiK2RbMV0rXCIpXCIpLGM9YS5yZXBsYWNlKC9cXG4vZyxcIiBcIikubWF0Y2goL14oW14oXSs/KVxccyooXFwoKC4qKVxcKSk/JC8pLCFjfHw0IT09Yy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdGF0ZSByZWYgJ1wiK2ErXCInXCIpO3JldHVybntzdGF0ZTpjWzFdLHBhcmFtRXhwcjpjWzNdfHxudWxsfX1mdW5jdGlvbiBCKGEpe3ZhciBiPWEucGFyZW50KCkuaW5oZXJpdGVkRGF0YShcIiR1aVZpZXdcIik7cmV0dXJuIGImJmIuc3RhdGUmJmIuc3RhdGUubmFtZT9iLnN0YXRlOnZvaWQgMH1mdW5jdGlvbiBDKGEsYyl7dmFyIGQ9W1wibG9jYXRpb25cIixcImluaGVyaXRcIixcInJlbG9hZFwiXTtyZXR1cm57cmVzdHJpY3Q6XCJBXCIscmVxdWlyZTpbXCI/XnVpU3JlZkFjdGl2ZVwiLFwiP151aVNyZWZBY3RpdmVFcVwiXSxsaW5rOmZ1bmN0aW9uKGUsZixnLGgpe3ZhciBpPUEoZy51aVNyZWYsYS5jdXJyZW50Lm5hbWUpLGo9bnVsbCxrPUIoZil8fGEuJGN1cnJlbnQsbD1udWxsLG09XCJBXCI9PT1mLnByb3AoXCJ0YWdOYW1lXCIpLG49XCJGT1JNXCI9PT1mWzBdLm5vZGVOYW1lLG89bj9cImFjdGlvblwiOlwiaHJlZlwiLHA9ITAscT17cmVsYXRpdmU6ayxpbmhlcml0OiEwfSxyPWUuJGV2YWwoZy51aVNyZWZPcHRzKXx8e307Yi5mb3JFYWNoKGQsZnVuY3Rpb24oYSl7YSBpbiByJiYocVthXT1yW2FdKX0pO3ZhciBzPWZ1bmN0aW9uKGMpe2lmKGMmJihqPWIuY29weShjKSkscCl7bD1hLmhyZWYoaS5zdGF0ZSxqLHEpO3ZhciBkPWhbMV18fGhbMF07cmV0dXJuIGQmJmQuJCRzZXRTdGF0ZUluZm8oaS5zdGF0ZSxqKSxudWxsPT09bD8ocD0hMSwhMSk6dm9pZCBnLiRzZXQobyxsKX19O2kucGFyYW1FeHByJiYoZS4kd2F0Y2goaS5wYXJhbUV4cHIsZnVuY3Rpb24oYSl7YSE9PWomJnMoYSl9LCEwKSxqPWIuY29weShlLiRldmFsKGkucGFyYW1FeHByKSkpLHMoKSxufHxmLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGIpe3ZhciBkPWIud2hpY2h8fGIuYnV0dG9uO2lmKCEoZD4xfHxiLmN0cmxLZXl8fGIubWV0YUtleXx8Yi5zaGlmdEtleXx8Zi5hdHRyKFwidGFyZ2V0XCIpKSl7dmFyIGU9YyhmdW5jdGlvbigpe2EuZ28oaS5zdGF0ZSxqLHEpfSk7Yi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBnPW0mJiFsPzE6MDtiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Zy0tPD0wJiZjLmNhbmNlbChlKX19fSl9fX1mdW5jdGlvbiBEKGEsYixjKXtyZXR1cm57cmVzdHJpY3Q6XCJBXCIsY29udHJvbGxlcjpbXCIkc2NvcGVcIixcIiRlbGVtZW50XCIsXCIkYXR0cnNcIixmdW5jdGlvbihiLGQsZSl7ZnVuY3Rpb24gZigpe2coKT9kLmFkZENsYXNzKGopOmQucmVtb3ZlQ2xhc3Moail9ZnVuY3Rpb24gZygpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnVpU3JlZkFjdGl2ZUVxP2gmJmEuaXMoaC5uYW1lLGkpOmgmJmEuaW5jbHVkZXMoaC5uYW1lLGkpfXZhciBoLGksajtqPWMoZS51aVNyZWZBY3RpdmVFcXx8ZS51aVNyZWZBY3RpdmV8fFwiXCIsITEpKGIpLHRoaXMuJCRzZXRTdGF0ZUluZm89ZnVuY3Rpb24oYixjKXtoPWEuZ2V0KGIsQihkKSksaT1jLGYoKX0sYi4kb24oXCIkc3RhdGVDaGFuZ2VTdWNjZXNzXCIsZil9XX19ZnVuY3Rpb24gRShhKXt2YXIgYj1mdW5jdGlvbihiKXtyZXR1cm4gYS5pcyhiKX07cmV0dXJuIGIuJHN0YXRlZnVsPSEwLGJ9ZnVuY3Rpb24gRihhKXt2YXIgYj1mdW5jdGlvbihiKXtyZXR1cm4gYS5pbmNsdWRlcyhiKX07cmV0dXJuIGIuJHN0YXRlZnVsPSEwLGJ9dmFyIEc9Yi5pc0RlZmluZWQsSD1iLmlzRnVuY3Rpb24sST1iLmlzU3RyaW5nLEo9Yi5pc09iamVjdCxLPWIuaXNBcnJheSxMPWIuZm9yRWFjaCxNPWIuZXh0ZW5kLE49Yi5jb3B5O2IubW9kdWxlKFwidWkucm91dGVyLnV0aWxcIixbXCJuZ1wiXSksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIucm91dGVyXCIsW1widWkucm91dGVyLnV0aWxcIl0pLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIsW1widWkucm91dGVyLnJvdXRlclwiLFwidWkucm91dGVyLnV0aWxcIl0pLGIubW9kdWxlKFwidWkucm91dGVyXCIsW1widWkucm91dGVyLnN0YXRlXCJdKSxiLm1vZHVsZShcInVpLnJvdXRlci5jb21wYXRcIixbXCJ1aS5yb3V0ZXJcIl0pLG8uJGluamVjdD1bXCIkcVwiLFwiJGluamVjdG9yXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnV0aWxcIikuc2VydmljZShcIiRyZXNvbHZlXCIsbykscC4kaW5qZWN0PVtcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGluamVjdG9yXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnV0aWxcIikuc2VydmljZShcIiR0ZW1wbGF0ZUZhY3RvcnlcIixwKTt2YXIgTztxLnByb3RvdHlwZS5jb25jYXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz17Y2FzZUluc2Vuc2l0aXZlOk8uY2FzZUluc2Vuc2l0aXZlKCksc3RyaWN0Ok8uc3RyaWN0TW9kZSgpLHNxdWFzaDpPLmRlZmF1bHRTcXVhc2hQb2xpY3koKX07cmV0dXJuIG5ldyBxKHRoaXMuc291cmNlUGF0aCthK3RoaXMuc291cmNlU2VhcmNoLE0oYyxiKSx0aGlzKX0scS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zb3VyY2V9LHEucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGEuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIil9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcLS8sXCItXCIpfXZhciBkPWIoYSkuc3BsaXQoLy0oPyFcXFxcKS8pLGU9bihkLGIpO3JldHVybiBuKGUsYykucmV2ZXJzZSgpfXZhciBkPXRoaXMucmVnZXhwLmV4ZWMoYSk7aWYoIWQpcmV0dXJuIG51bGw7Yj1ifHx7fTt2YXIgZSxmLGcsaD10aGlzLnBhcmFtZXRlcnMoKSxpPWgubGVuZ3RoLGo9dGhpcy5zZWdtZW50cy5sZW5ndGgtMSxrPXt9O2lmKGohPT1kLmxlbmd0aC0xKXRocm93IG5ldyBFcnJvcihcIlVuYmFsYW5jZWQgY2FwdHVyZSBncm91cCBpbiByb3V0ZSAnXCIrdGhpcy5zb3VyY2UrXCInXCIpO2ZvcihlPTA7aj5lO2UrKyl7Zz1oW2VdO3ZhciBsPXRoaXMucGFyYW1zW2ddLG09ZFtlKzFdO2ZvcihmPTA7ZjxsLnJlcGxhY2U7ZisrKWwucmVwbGFjZVtmXS5mcm9tPT09bSYmKG09bC5yZXBsYWNlW2ZdLnRvKTttJiZsLmFycmF5PT09ITAmJihtPWMobSkpLGtbZ109bC52YWx1ZShtKX1mb3IoO2k+ZTtlKyspZz1oW2VdLGtbZ109dGhpcy5wYXJhbXNbZ10udmFsdWUoYltnXSk7cmV0dXJuIGt9LHEucHJvdG90eXBlLnBhcmFtZXRlcnM9ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSk/dGhpcy5wYXJhbXNbYV18fG51bGw6dGhpcy4kJHBhcmFtTmFtZXN9LHEucHJvdG90eXBlLnZhbGlkYXRlcz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJhbXMuJCR2YWxpZGF0ZXMoYSl9LHEucHJvdG90eXBlLmZvcm1hdD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoYSkucmVwbGFjZSgvLS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiJTVDJVwiK2EuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX0pfWE9YXx8e307dmFyIGM9dGhpcy5zZWdtZW50cyxkPXRoaXMucGFyYW1ldGVycygpLGU9dGhpcy5wYXJhbXM7aWYoIXRoaXMudmFsaWRhdGVzKGEpKXJldHVybiBudWxsO3ZhciBmLGc9ITEsaD1jLmxlbmd0aC0xLGk9ZC5sZW5ndGgsaj1jWzBdO2ZvcihmPTA7aT5mO2YrKyl7dmFyIGs9aD5mLGw9ZFtmXSxtPWVbbF0sbz1tLnZhbHVlKGFbbF0pLHA9bS5pc09wdGlvbmFsJiZtLnR5cGUuZXF1YWxzKG0udmFsdWUoKSxvKSxxPXA/bS5zcXVhc2g6ITEscj1tLnR5cGUuZW5jb2RlKG8pO2lmKGspe3ZhciBzPWNbZisxXTtpZihxPT09ITEpbnVsbCE9ciYmKGorPUsocik/bihyLGIpLmpvaW4oXCItXCIpOmVuY29kZVVSSUNvbXBvbmVudChyKSksais9cztlbHNlIGlmKHE9PT0hMCl7dmFyIHQ9ai5tYXRjaCgvXFwvJC8pPy9cXC8/KC4qKS86LyguKikvO2orPXMubWF0Y2godClbMV19ZWxzZSBJKHEpJiYoais9cStzKX1lbHNle2lmKG51bGw9PXJ8fHAmJnEhPT0hMSljb250aW51ZTtLKHIpfHwocj1bcl0pLHI9bihyLGVuY29kZVVSSUNvbXBvbmVudCkuam9pbihcIiZcIitsK1wiPVwiKSxqKz0oZz9cIiZcIjpcIj9cIikrKGwrXCI9XCIrciksZz0hMH19cmV0dXJuIGp9LHIucHJvdG90eXBlLmlzPWZ1bmN0aW9uKCl7cmV0dXJuITB9LHIucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbihhKXtyZXR1cm4gYX0sci5wcm90b3R5cGUuZGVjb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBhfSxyLnByb3RvdHlwZS5lcXVhbHM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09Yn0sci5wcm90b3R5cGUuJHN1YlBhdHRlcm49ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnBhdHRlcm4udG9TdHJpbmcoKTtyZXR1cm4gYS5zdWJzdHIoMSxhLmxlbmd0aC0yKX0sci5wcm90b3R5cGUucGF0dGVybj0vLiovLHIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJ7VHlwZTpcIit0aGlzLm5hbWUrXCJ9XCJ9LHIucHJvdG90eXBlLiRhc0FycmF5PWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gZChhLGIpe2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIEsoYSk/YTpHKGEpP1thXTpbXX1mdW5jdGlvbiBmKGEpe3N3aXRjaChhLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBjO2Nhc2UgMTpyZXR1cm5cImF1dG9cIj09PWI/YVswXTphO2RlZmF1bHQ6cmV0dXJuIGF9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIWF9ZnVuY3Rpb24gaChhLGIpe3JldHVybiBmdW5jdGlvbihjKXtjPWUoYyk7dmFyIGQ9bihjLGEpO3JldHVybiBiPT09ITA/MD09PW0oZCxnKS5sZW5ndGg6ZihkKX19ZnVuY3Rpb24gaShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXt2YXIgZD1lKGIpLGY9ZShjKTtpZihkLmxlbmd0aCE9PWYubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgZz0wO2c8ZC5sZW5ndGg7ZysrKWlmKCFhKGRbZ10sZltnXSkpcmV0dXJuITE7cmV0dXJuITB9fXRoaXMuZW5jb2RlPWgoZChhLFwiZW5jb2RlXCIpKSx0aGlzLmRlY29kZT1oKGQoYSxcImRlY29kZVwiKSksdGhpcy5pcz1oKGQoYSxcImlzXCIpLCEwKSx0aGlzLmVxdWFscz1pKGQoYSxcImVxdWFsc1wiKSksdGhpcy5wYXR0ZXJuPWEucGF0dGVybix0aGlzLiRhcnJheU1vZGU9Yn1pZighYSlyZXR1cm4gdGhpcztpZihcImF1dG9cIj09PWEmJiFiKXRocm93IG5ldyBFcnJvcihcIidhdXRvJyBhcnJheSBtb2RlIGlzIGZvciBxdWVyeSBwYXJhbWV0ZXJzIG9ubHlcIik7cmV0dXJuIG5ldyBkKHRoaXMsYSl9LGIubW9kdWxlKFwidWkucm91dGVyLnV0aWxcIikucHJvdmlkZXIoXCIkdXJsTWF0Y2hlckZhY3RvcnlcIixzKSxiLm1vZHVsZShcInVpLnJvdXRlci51dGlsXCIpLnJ1bihbXCIkdXJsTWF0Y2hlckZhY3RvcnlcIixmdW5jdGlvbigpe31dKSx0LiRpbmplY3Q9W1wiJGxvY2F0aW9uUHJvdmlkZXJcIixcIiR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnJvdXRlclwiKS5wcm92aWRlcihcIiR1cmxSb3V0ZXJcIix0KSx1LiRpbmplY3Q9W1wiJHVybFJvdXRlclByb3ZpZGVyXCIsXCIkdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlclwiXSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS52YWx1ZShcIiRzdGF0ZVBhcmFtc1wiLHt9KS5wcm92aWRlcihcIiRzdGF0ZVwiLHUpLHYuJGluamVjdD1bXSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5wcm92aWRlcihcIiR2aWV3XCIsdiksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikucHJvdmlkZXIoXCIkdWlWaWV3U2Nyb2xsXCIsdykseC4kaW5qZWN0PVtcIiRzdGF0ZVwiLFwiJGluamVjdG9yXCIsXCIkdWlWaWV3U2Nyb2xsXCIsXCIkaW50ZXJwb2xhdGVcIl0seS4kaW5qZWN0PVtcIiRjb21waWxlXCIsXCIkY29udHJvbGxlclwiLFwiJHN0YXRlXCIsXCIkaW50ZXJwb2xhdGVcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikuZGlyZWN0aXZlKFwidWlWaWV3XCIseCksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikuZGlyZWN0aXZlKFwidWlWaWV3XCIseSksQy4kaW5qZWN0PVtcIiRzdGF0ZVwiLFwiJHRpbWVvdXRcIl0sRC4kaW5qZWN0PVtcIiRzdGF0ZVwiLFwiJHN0YXRlUGFyYW1zXCIsXCIkaW50ZXJwb2xhdGVcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikuZGlyZWN0aXZlKFwidWlTcmVmXCIsQykuZGlyZWN0aXZlKFwidWlTcmVmQWN0aXZlXCIsRCkuZGlyZWN0aXZlKFwidWlTcmVmQWN0aXZlRXFcIixEKSxFLiRpbmplY3Q9W1wiJHN0YXRlXCJdLEYuJGluamVjdD1bXCIkc3RhdGVcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikuZmlsdGVyKFwiaXNTdGF0ZVwiLEUpLmZpbHRlcihcImluY2x1ZGVkQnlTdGF0ZVwiLEYpfSh3aW5kb3csd2luZG93LmFuZ3VsYXIpOyIsIi8qXG4gQW5ndWxhckpTIHYxLjIuMjhcbiAoYykgMjAxMC0yMDE0IEdvb2dsZSwgSW5jLiBodHRwOi8vYW5ndWxhcmpzLm9yZ1xuIExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihXLFgsdSl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIHooYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdLGMsYT1cIltcIisoYj9iK1wiOlwiOlwiXCIpK2ErXCJdIGh0dHA6Ly9lcnJvcnMuYW5ndWxhcmpzLm9yZy8xLjIuMjgvXCIrKGI/YitcIi9cIjpcIlwiKSthO2ZvcihjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKylhPWErKDE9PWM/XCI/XCI6XCImXCIpK1wicFwiKyhjLTEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChcImZ1bmN0aW9uXCI9PXR5cGVvZiBhcmd1bWVudHNbY10/YXJndW1lbnRzW2NdLnRvU3RyaW5nKCkucmVwbGFjZSgvIFxce1tcXHNcXFNdKiQvLFwiXCIpOlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhcmd1bWVudHNbY10/XCJ1bmRlZmluZWRcIjpcInN0cmluZ1wiIT10eXBlb2YgYXJndW1lbnRzW2NdP0pTT04uc3RyaW5naWZ5KGFyZ3VtZW50c1tjXSk6YXJndW1lbnRzW2NdKTtyZXR1cm4gRXJyb3IoYSl9fWZ1bmN0aW9uIFNhKGIpe2lmKG51bGw9PWJ8fEphKGIpKXJldHVybiExO1xudmFyIGE9Yi5sZW5ndGg7cmV0dXJuIDE9PT1iLm5vZGVUeXBlJiZhPyEwOkcoYil8fEwoYil8fDA9PT1hfHxcIm51bWJlclwiPT09dHlwZW9mIGEmJjA8YSYmYS0xIGluIGJ9ZnVuY3Rpb24gcihiLGEsYyl7dmFyIGQ7aWYoYilpZihOKGIpKWZvcihkIGluIGIpXCJwcm90b3R5cGVcIj09ZHx8KFwibGVuZ3RoXCI9PWR8fFwibmFtZVwiPT1kfHxiLmhhc093blByb3BlcnR5JiYhYi5oYXNPd25Qcm9wZXJ0eShkKSl8fGEuY2FsbChjLGJbZF0sZCk7ZWxzZSBpZihMKGIpfHxTYShiKSlmb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKWEuY2FsbChjLGJbZF0sZCk7ZWxzZSBpZihiLmZvckVhY2gmJmIuZm9yRWFjaCE9PXIpYi5mb3JFYWNoKGEsYyk7ZWxzZSBmb3IoZCBpbiBiKWIuaGFzT3duUHJvcGVydHkoZCkmJmEuY2FsbChjLGJbZF0sZCk7cmV0dXJuIGJ9ZnVuY3Rpb24gWGIoYil7dmFyIGE9W10sYztmb3IoYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJmEucHVzaChjKTtyZXR1cm4gYS5zb3J0KCl9ZnVuY3Rpb24gU2MoYixcbmEsYyl7Zm9yKHZhciBkPVhiKGIpLGU9MDtlPGQubGVuZ3RoO2UrKylhLmNhbGwoYyxiW2RbZV1dLGRbZV0pO3JldHVybiBkfWZ1bmN0aW9uIFliKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IoYyxhKX19ZnVuY3Rpb24gaWIoKXtmb3IodmFyIGI9bmEubGVuZ3RoLGE7Yjspe2ItLTthPW5hW2JdLmNoYXJDb2RlQXQoMCk7aWYoNTc9PWEpcmV0dXJuIG5hW2JdPVwiQVwiLG5hLmpvaW4oXCJcIik7aWYoOTA9PWEpbmFbYl09XCIwXCI7ZWxzZSByZXR1cm4gbmFbYl09U3RyaW5nLmZyb21DaGFyQ29kZShhKzEpLG5hLmpvaW4oXCJcIil9bmEudW5zaGlmdChcIjBcIik7cmV0dXJuIG5hLmpvaW4oXCJcIil9ZnVuY3Rpb24gWmIoYixhKXthP2IuJCRoYXNoS2V5PWE6ZGVsZXRlIGIuJCRoYXNoS2V5fWZ1bmN0aW9uIEUoYil7dmFyIGE9Yi4kJGhhc2hLZXk7cihhcmd1bWVudHMsZnVuY3Rpb24oYSl7YSE9PWImJnIoYSxmdW5jdGlvbihhLGMpe2JbY109YX0pfSk7WmIoYixhKTtyZXR1cm4gYn1mdW5jdGlvbiBVKGIpe3JldHVybiBwYXJzZUludChiLFxuMTApfWZ1bmN0aW9uICRiKGIsYSl7cmV0dXJuIEUobmV3IChFKGZ1bmN0aW9uKCl7fSx7cHJvdG90eXBlOmJ9KSksYSl9ZnVuY3Rpb24gdigpe31mdW5jdGlvbiBnYShiKXtyZXR1cm4gYn1mdW5jdGlvbiBhYShiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYn19ZnVuY3Rpb24gRihiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gRChiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGJ9ZnVuY3Rpb24gVChiKXtyZXR1cm4gbnVsbCE9YiYmXCJvYmplY3RcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEcoYil7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBifWZ1bmN0aW9uIGpiKGIpe3JldHVyblwibnVtYmVyXCI9PT10eXBlb2YgYn1mdW5jdGlvbiB2YShiKXtyZXR1cm5cIltvYmplY3QgRGF0ZV1cIj09PUJhLmNhbGwoYil9ZnVuY3Rpb24gTihiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBrYihiKXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09QmEuY2FsbChiKX1cbmZ1bmN0aW9uIEphKGIpe3JldHVybiBiJiZiLmRvY3VtZW50JiZiLmxvY2F0aW9uJiZiLmFsZXJ0JiZiLnNldEludGVydmFsfWZ1bmN0aW9uIFRjKGIpe3JldHVybiEoIWJ8fCEoYi5ub2RlTmFtZXx8Yi5wcm9wJiZiLmF0dHImJmIuZmluZCkpfWZ1bmN0aW9uIFVjKGIsYSxjKXt2YXIgZD1bXTtyKGIsZnVuY3Rpb24oYixmLGcpe2QucHVzaChhLmNhbGwoYyxiLGYsZykpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gVGEoYixhKXtpZihiLmluZGV4T2YpcmV0dXJuIGIuaW5kZXhPZihhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKylpZihhPT09YltjXSlyZXR1cm4gYztyZXR1cm4tMX1mdW5jdGlvbiBVYShiLGEpe3ZhciBjPVRhKGIsYSk7MDw9YyYmYi5zcGxpY2UoYywxKTtyZXR1cm4gYX1mdW5jdGlvbiBLYShiLGEsYyxkKXtpZihKYShiKXx8YiYmYi4kZXZhbEFzeW5jJiZiLiR3YXRjaCl0aHJvdyBWYShcImNwd3NcIik7aWYoYSl7aWYoYj09PWEpdGhyb3cgVmEoXCJjcGlcIik7Yz1jfHxbXTtcbmQ9ZHx8W107aWYoVChiKSl7dmFyIGU9VGEoYyxiKTtpZigtMSE9PWUpcmV0dXJuIGRbZV07Yy5wdXNoKGIpO2QucHVzaChhKX1pZihMKGIpKWZvcih2YXIgZj1hLmxlbmd0aD0wO2Y8Yi5sZW5ndGg7ZisrKWU9S2EoYltmXSxudWxsLGMsZCksVChiW2ZdKSYmKGMucHVzaChiW2ZdKSxkLnB1c2goZSkpLGEucHVzaChlKTtlbHNle3ZhciBnPWEuJCRoYXNoS2V5O0woYSk/YS5sZW5ndGg9MDpyKGEsZnVuY3Rpb24oYixjKXtkZWxldGUgYVtjXX0pO2ZvcihmIGluIGIpZT1LYShiW2ZdLG51bGwsYyxkKSxUKGJbZl0pJiYoYy5wdXNoKGJbZl0pLGQucHVzaChlKSksYVtmXT1lO1piKGEsZyl9fWVsc2UgaWYoYT1iKUwoYik/YT1LYShiLFtdLGMsZCk6dmEoYik/YT1uZXcgRGF0ZShiLmdldFRpbWUoKSk6a2IoYik/KGE9UmVnRXhwKGIuc291cmNlLGIudG9TdHJpbmcoKS5tYXRjaCgvW15cXC9dKiQvKVswXSksYS5sYXN0SW5kZXg9Yi5sYXN0SW5kZXgpOlQoYikmJihhPUthKGIse30sYyxkKSk7XG5yZXR1cm4gYX1mdW5jdGlvbiBoYShiLGEpe2lmKEwoYikpe2E9YXx8W107Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspYVtjXT1iW2NdfWVsc2UgaWYoVChiKSlmb3IoYyBpbiBhPWF8fHt9LGIpIWxiLmNhbGwoYixjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGFbY109YltjXSk7cmV0dXJuIGF8fGJ9ZnVuY3Rpb24gQ2EoYixhKXtpZihiPT09YSlyZXR1cm4hMDtpZihudWxsPT09Ynx8bnVsbD09PWEpcmV0dXJuITE7aWYoYiE9PWImJmEhPT1hKXJldHVybiEwO3ZhciBjPXR5cGVvZiBiLGQ7aWYoYz09dHlwZW9mIGEmJlwib2JqZWN0XCI9PWMpaWYoTChiKSl7aWYoIUwoYSkpcmV0dXJuITE7aWYoKGM9Yi5sZW5ndGgpPT1hLmxlbmd0aCl7Zm9yKGQ9MDtkPGM7ZCsrKWlmKCFDYShiW2RdLGFbZF0pKXJldHVybiExO3JldHVybiEwfX1lbHNle2lmKHZhKGIpKXJldHVybiB2YShhKT9pc05hTihiLmdldFRpbWUoKSkmJmlzTmFOKGEuZ2V0VGltZSgpKXx8Yi5nZXRUaW1lKCk9PT1cbmEuZ2V0VGltZSgpOiExO2lmKGtiKGIpJiZrYihhKSlyZXR1cm4gYi50b1N0cmluZygpPT1hLnRvU3RyaW5nKCk7aWYoYiYmYi4kZXZhbEFzeW5jJiZiLiR3YXRjaHx8YSYmYS4kZXZhbEFzeW5jJiZhLiR3YXRjaHx8SmEoYil8fEphKGEpfHxMKGEpKXJldHVybiExO2M9e307Zm9yKGQgaW4gYilpZihcIiRcIiE9PWQuY2hhckF0KDApJiYhTihiW2RdKSl7aWYoIUNhKGJbZF0sYVtkXSkpcmV0dXJuITE7Y1tkXT0hMH1mb3IoZCBpbiBhKWlmKCFjLmhhc093blByb3BlcnR5KGQpJiZcIiRcIiE9PWQuY2hhckF0KDApJiZhW2RdIT09dSYmIU4oYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gQmIoYixhKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGg/d2EuY2FsbChhcmd1bWVudHMsMik6W107cmV0dXJuIU4oYSl8fGEgaW5zdGFuY2VvZiBSZWdFeHA/YTpjLmxlbmd0aD9mdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixjLmNvbmNhdCh3YS5jYWxsKGFyZ3VtZW50cyxcbjApKSk6YS5hcHBseShiLGMpfTpmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixhcmd1bWVudHMpOmEuY2FsbChiKX19ZnVuY3Rpb24gVmMoYixhKXt2YXIgYz1hO1wic3RyaW5nXCI9PT10eXBlb2YgYiYmXCIkXCI9PT1iLmNoYXJBdCgwKT9jPXU6SmEoYSk/Yz1cIiRXSU5ET1dcIjphJiZYPT09YT9jPVwiJERPQ1VNRU5UXCI6YSYmKGEuJGV2YWxBc3luYyYmYS4kd2F0Y2gpJiYoYz1cIiRTQ09QRVwiKTtyZXR1cm4gY31mdW5jdGlvbiBvYShiLGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYj91OkpTT04uc3RyaW5naWZ5KGIsVmMsYT9cIiAgXCI6bnVsbCl9ZnVuY3Rpb24gYWMoYil7cmV0dXJuIEcoYik/SlNPTi5wYXJzZShiKTpifWZ1bmN0aW9uIFdhKGIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2I9ITA6YiYmMCE9PWIubGVuZ3RoPyhiPXgoXCJcIitiKSxiPSEoXCJmXCI9PWJ8fFwiMFwiPT1ifHxcImZhbHNlXCI9PWJ8fFwibm9cIj09Ynx8XCJuXCI9PWJ8fFwiW11cIj09YikpOmI9ITE7XG5yZXR1cm4gYn1mdW5jdGlvbiBpYShiKXtiPUEoYikuY2xvbmUoKTt0cnl7Yi5lbXB0eSgpfWNhdGNoKGEpe312YXIgYz1BKFwiPGRpdj5cIikuYXBwZW5kKGIpLmh0bWwoKTt0cnl7cmV0dXJuIDM9PT1iWzBdLm5vZGVUeXBlP3goYyk6Yy5tYXRjaCgvXig8W14+XSs+KS8pWzFdLnJlcGxhY2UoL148KFtcXHdcXC1dKykvLGZ1bmN0aW9uKGEsYil7cmV0dXJuXCI8XCIreChiKX0pfWNhdGNoKGQpe3JldHVybiB4KGMpfX1mdW5jdGlvbiBiYyhiKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChiKX1jYXRjaChhKXt9fWZ1bmN0aW9uIGNjKGIpe3ZhciBhPXt9LGMsZDtyKChifHxcIlwiKS5zcGxpdChcIiZcIiksZnVuY3Rpb24oYil7YiYmKGM9Yi5yZXBsYWNlKC9cXCsvZyxcIiUyMFwiKS5zcGxpdChcIj1cIiksZD1iYyhjWzBdKSxEKGQpJiYoYj1EKGNbMV0pP2JjKGNbMV0pOiEwLGxiLmNhbGwoYSxkKT9MKGFbZF0pP2FbZF0ucHVzaChiKTphW2RdPVthW2RdLGJdOmFbZF09YikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2IoYil7dmFyIGE9XG5bXTtyKGIsZnVuY3Rpb24oYixkKXtMKGIpP3IoYixmdW5jdGlvbihiKXthLnB1c2goRGEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK0RhKGIsITApKSl9KTphLnB1c2goRGEoZCwhMCkrKCEwPT09Yj9cIlwiOlwiPVwiK0RhKGIsITApKSl9KTtyZXR1cm4gYS5sZW5ndGg/YS5qb2luKFwiJlwiKTpcIlwifWZ1bmN0aW9uIG1iKGIpe3JldHVybiBEYShiLCEwKS5yZXBsYWNlKC8lMjYvZ2ksXCImXCIpLnJlcGxhY2UoLyUzRC9naSxcIj1cIikucmVwbGFjZSgvJTJCL2dpLFwiK1wiKX1mdW5jdGlvbiBEYShiLGEpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoYikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLGE/XCIlMjBcIjpcIitcIil9ZnVuY3Rpb24gV2MoYixhKXtmdW5jdGlvbiBjKGEpe2EmJmQucHVzaChhKX12YXIgZD1bYl0sZSxmLGc9W1wibmc6YXBwXCIsXCJuZy1hcHBcIixcIngtbmctYXBwXCIsXG5cImRhdGEtbmctYXBwXCJdLGg9L1xcc25nWzpcXC1dYXBwKDpcXHMqKFtcXHdcXGRfXSspOz8pP1xccy87cihnLGZ1bmN0aW9uKGEpe2dbYV09ITA7YyhYLmdldEVsZW1lbnRCeUlkKGEpKTthPWEucmVwbGFjZShcIjpcIixcIlxcXFw6XCIpO2IucXVlcnlTZWxlY3RvckFsbCYmKHIoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2EpLGMpLHIoYi5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2ErXCJcXFxcOlwiKSxjKSxyKGIucXVlcnlTZWxlY3RvckFsbChcIltcIithK1wiXVwiKSxjKSl9KTtyKGQsZnVuY3Rpb24oYSl7aWYoIWUpe3ZhciBiPWguZXhlYyhcIiBcIithLmNsYXNzTmFtZStcIiBcIik7Yj8oZT1hLGY9KGJbMl18fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIixcIikpOnIoYS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGIpeyFlJiZnW2IubmFtZV0mJihlPWEsZj1iLnZhbHVlKX0pfX0pO2UmJmEoZSxmP1tmXTpbXSl9ZnVuY3Rpb24gZGMoYixhKXt2YXIgYz1mdW5jdGlvbigpe2I9QShiKTtpZihiLmluamVjdG9yKCkpe3ZhciBjPWJbMF09PT1YP1xuXCJkb2N1bWVudFwiOmlhKGIpO3Rocm93IFZhKFwiYnRzdHJwZFwiLGMucmVwbGFjZSgvPC8sXCImbHQ7XCIpLnJlcGxhY2UoLz4vLFwiJmd0O1wiKSk7fWE9YXx8W107YS51bnNoaWZ0KFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS52YWx1ZShcIiRyb290RWxlbWVudFwiLGIpfV0pO2EudW5zaGlmdChcIm5nXCIpO2M9ZWMoYSk7Yy5pbnZva2UoW1wiJHJvb3RTY29wZVwiLFwiJHJvb3RFbGVtZW50XCIsXCIkY29tcGlsZVwiLFwiJGluamVjdG9yXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYixjLGQsZSl7YS4kYXBwbHkoZnVuY3Rpb24oKXtiLmRhdGEoXCIkaW5qZWN0b3JcIixkKTtjKGIpKGEpfSl9XSk7cmV0dXJuIGN9LGQ9L15OR19ERUZFUl9CT09UU1RSQVAhLztpZihXJiYhZC50ZXN0KFcubmFtZSkpcmV0dXJuIGMoKTtXLm5hbWU9Vy5uYW1lLnJlcGxhY2UoZCxcIlwiKTtYYS5yZXN1bWVCb290c3RyYXA9ZnVuY3Rpb24oYil7cihiLGZ1bmN0aW9uKGIpe2EucHVzaChiKX0pO2MoKX19ZnVuY3Rpb24gbmIoYixhKXthPVxuYXx8XCJfXCI7cmV0dXJuIGIucmVwbGFjZShYYyxmdW5jdGlvbihiLGQpe3JldHVybihkP2E6XCJcIikrYi50b0xvd2VyQ2FzZSgpfSl9ZnVuY3Rpb24gRGIoYixhLGMpe2lmKCFiKXRocm93IFZhKFwiYXJlcVwiLGF8fFwiP1wiLGN8fFwicmVxdWlyZWRcIik7cmV0dXJuIGJ9ZnVuY3Rpb24gWWEoYixhLGMpe2MmJkwoYikmJihiPWJbYi5sZW5ndGgtMV0pO0RiKE4oYiksYSxcIm5vdCBhIGZ1bmN0aW9uLCBnb3QgXCIrKGImJlwib2JqZWN0XCI9PT10eXBlb2YgYj9iLmNvbnN0cnVjdG9yLm5hbWV8fFwiT2JqZWN0XCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiBFYShiLGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWIpdGhyb3cgVmEoXCJiYWRuYW1lXCIsYSk7fWZ1bmN0aW9uIGZjKGIsYSxjKXtpZighYSlyZXR1cm4gYjthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZCxlPWIsZj1hLmxlbmd0aCxnPTA7ZzxmO2crKylkPWFbZ10sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZOKGIpP0JiKGUsYik6Yn1mdW5jdGlvbiBFYihiKXt2YXIgYT1cbmJbMF07Yj1iW2IubGVuZ3RoLTFdO2lmKGE9PT1iKXJldHVybiBBKGEpO3ZhciBjPVthXTtkb3thPWEubmV4dFNpYmxpbmc7aWYoIWEpYnJlYWs7Yy5wdXNoKGEpfXdoaWxlKGEhPT1iKTtyZXR1cm4gQShjKX1mdW5jdGlvbiBZYyhiKXt2YXIgYT16KFwiJGluamVjdG9yXCIpLGM9eihcIm5nXCIpO2I9Yi5hbmd1bGFyfHwoYi5hbmd1bGFyPXt9KTtiLiQkbWluRXJyPWIuJCRtaW5FcnJ8fHo7cmV0dXJuIGIubW9kdWxlfHwoYi5tb2R1bGU9ZnVuY3Rpb24oKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oZSxmLGcpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWUpdGhyb3cgYyhcImJhZG5hbWVcIixcIm1vZHVsZVwiKTtmJiZiLmhhc093blByb3BlcnR5KGUpJiYoYltlXT1udWxsKTtyZXR1cm4gYltlXXx8KGJbZV09ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtjW2V8fFwicHVzaFwiXShbYSxkLGFyZ3VtZW50c10pO3JldHVybiBufX1pZighZil0aHJvdyBhKFwibm9tb2RcIixcbmUpO3ZhciBjPVtdLGQ9W10sbD1iKFwiJGluamVjdG9yXCIsXCJpbnZva2VcIiksbj17X2ludm9rZVF1ZXVlOmMsX3J1bkJsb2NrczpkLHJlcXVpcmVzOmYsbmFtZTplLHByb3ZpZGVyOmIoXCIkcHJvdmlkZVwiLFwicHJvdmlkZXJcIiksZmFjdG9yeTpiKFwiJHByb3ZpZGVcIixcImZhY3RvcnlcIiksc2VydmljZTpiKFwiJHByb3ZpZGVcIixcInNlcnZpY2VcIiksdmFsdWU6YihcIiRwcm92aWRlXCIsXCJ2YWx1ZVwiKSxjb25zdGFudDpiKFwiJHByb3ZpZGVcIixcImNvbnN0YW50XCIsXCJ1bnNoaWZ0XCIpLGFuaW1hdGlvbjpiKFwiJGFuaW1hdGVQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZmlsdGVyOmIoXCIkZmlsdGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGNvbnRyb2xsZXI6YihcIiRjb250cm9sbGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGRpcmVjdGl2ZTpiKFwiJGNvbXBpbGVQcm92aWRlclwiLFwiZGlyZWN0aXZlXCIpLGNvbmZpZzpsLHJ1bjpmdW5jdGlvbihhKXtkLnB1c2goYSk7cmV0dXJuIHRoaXN9fTtnJiZsKGcpO3JldHVybiBufSgpKX19KCkpfVxuZnVuY3Rpb24gWmMoYil7RShiLHtib290c3RyYXA6ZGMsY29weTpLYSxleHRlbmQ6RSxlcXVhbHM6Q2EsZWxlbWVudDpBLGZvckVhY2g6cixpbmplY3RvcjplYyxub29wOnYsYmluZDpCYix0b0pzb246b2EsZnJvbUpzb246YWMsaWRlbnRpdHk6Z2EsaXNVbmRlZmluZWQ6Rixpc0RlZmluZWQ6RCxpc1N0cmluZzpHLGlzRnVuY3Rpb246Tixpc09iamVjdDpULGlzTnVtYmVyOmpiLGlzRWxlbWVudDpUYyxpc0FycmF5OkwsdmVyc2lvbjokYyxpc0RhdGU6dmEsbG93ZXJjYXNlOngsdXBwZXJjYXNlOkxhLGNhbGxiYWNrczp7Y291bnRlcjowfSwkJG1pbkVycjp6LCQkY3NwOlphfSk7JGE9WWMoVyk7dHJ5eyRhKFwibmdMb2NhbGVcIil9Y2F0Y2goYSl7JGEoXCJuZ0xvY2FsZVwiLFtdKS5wcm92aWRlcihcIiRsb2NhbGVcIixhZCl9JGEoXCJuZ1wiLFtcIm5nTG9jYWxlXCJdLFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpiZH0pO2EucHJvdmlkZXIoXCIkY29tcGlsZVwiLFxuZ2MpLmRpcmVjdGl2ZSh7YTpjZCxpbnB1dDpoYyx0ZXh0YXJlYTpoYyxmb3JtOmRkLHNjcmlwdDplZCxzZWxlY3Q6ZmQsc3R5bGU6Z2Qsb3B0aW9uOmhkLG5nQmluZDppZCxuZ0JpbmRIdG1sOmpkLG5nQmluZFRlbXBsYXRlOmtkLG5nQ2xhc3M6bGQsbmdDbGFzc0V2ZW46bWQsbmdDbGFzc09kZDpuZCxuZ0Nsb2FrOm9kLG5nQ29udHJvbGxlcjpwZCxuZ0Zvcm06cWQsbmdIaWRlOnJkLG5nSWY6c2QsbmdJbmNsdWRlOnRkLG5nSW5pdDp1ZCxuZ05vbkJpbmRhYmxlOnZkLG5nUGx1cmFsaXplOndkLG5nUmVwZWF0OnhkLG5nU2hvdzp5ZCxuZ1N0eWxlOnpkLG5nU3dpdGNoOkFkLG5nU3dpdGNoV2hlbjpCZCxuZ1N3aXRjaERlZmF1bHQ6Q2QsbmdPcHRpb25zOkRkLG5nVHJhbnNjbHVkZTpFZCxuZ01vZGVsOkZkLG5nTGlzdDpHZCxuZ0NoYW5nZTpIZCxyZXF1aXJlZDppYyxuZ1JlcXVpcmVkOmljLG5nVmFsdWU6SWR9KS5kaXJlY3RpdmUoe25nSW5jbHVkZTpKZH0pLmRpcmVjdGl2ZShGYikuZGlyZWN0aXZlKGpjKTtcbmEucHJvdmlkZXIoeyRhbmNob3JTY3JvbGw6S2QsJGFuaW1hdGU6TGQsJGJyb3dzZXI6TWQsJGNhY2hlRmFjdG9yeTpOZCwkY29udHJvbGxlcjpPZCwkZG9jdW1lbnQ6UGQsJGV4Y2VwdGlvbkhhbmRsZXI6UWQsJGZpbHRlcjprYywkaW50ZXJwb2xhdGU6UmQsJGludGVydmFsOlNkLCRodHRwOlRkLCRodHRwQmFja2VuZDpVZCwkbG9jYXRpb246VmQsJGxvZzpXZCwkcGFyc2U6WGQsJHJvb3RTY29wZTpZZCwkcTpaZCwkc2NlOiRkLCRzY2VEZWxlZ2F0ZTphZSwkc25pZmZlcjpiZSwkdGVtcGxhdGVDYWNoZTpjZSwkdGltZW91dDpkZSwkd2luZG93OmVlLCQkckFGOmZlLCQkYXN5bmNDYWxsYmFjazpnZX0pfV0pfWZ1bmN0aW9uIGFiKGIpe3JldHVybiBiLnJlcGxhY2UoaGUsZnVuY3Rpb24oYSxiLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKGllLFwiTW96JDFcIil9ZnVuY3Rpb24gR2IoYixhLGMsZCl7ZnVuY3Rpb24gZShiKXt2YXIgZT1jJiZiP1t0aGlzLmZpbHRlcihiKV06XG5bdGhpc10saz1hLG0sbCxuLHEscCxzO2lmKCFkfHxudWxsIT1iKWZvcig7ZS5sZW5ndGg7KWZvcihtPWUuc2hpZnQoKSxsPTAsbj1tLmxlbmd0aDtsPG47bCsrKWZvcihxPUEobVtsXSksaz9xLnRyaWdnZXJIYW5kbGVyKFwiJGRlc3Ryb3lcIik6az0hayxwPTAscT0ocz1xLmNoaWxkcmVuKCkpLmxlbmd0aDtwPHE7cCsrKWUucHVzaChGYShzW3BdKSk7cmV0dXJuIGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBmPUZhLmZuW2JdLGY9Zi4kb3JpZ2luYWx8fGY7ZS4kb3JpZ2luYWw9ZjtGYS5mbltiXT1lfWZ1bmN0aW9uIFMoYil7aWYoYiBpbnN0YW5jZW9mIFMpcmV0dXJuIGI7RyhiKSYmKGI9JChiKSk7aWYoISh0aGlzIGluc3RhbmNlb2YgUykpe2lmKEcoYikmJlwiPFwiIT1iLmNoYXJBdCgwKSl0aHJvdyBIYihcIm5vc2VsXCIpO3JldHVybiBuZXcgUyhiKX1pZihHKGIpKXt2YXIgYT1iO2I9WDt2YXIgYztpZihjPWplLmV4ZWMoYSkpYj1bYi5jcmVhdGVFbGVtZW50KGNbMV0pXTtlbHNle3ZhciBkPVxuYixlO2I9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yz1bXTtpZihJYi50ZXN0KGEpKXtkPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtlPShrZS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKTtlPWRhW2VdfHxkYS5fZGVmYXVsdDtkLmlubmVySFRNTD1cIjxkaXY+JiMxNjA7PC9kaXY+XCIrZVsxXSthLnJlcGxhY2UobGUsXCI8JDE+PC8kMj5cIikrZVsyXTtkLnJlbW92ZUNoaWxkKGQuZmlyc3RDaGlsZCk7Zm9yKGE9ZVswXTthLS07KWQ9ZC5sYXN0Q2hpbGQ7YT0wO2ZvcihlPWQuY2hpbGROb2Rlcy5sZW5ndGg7YTxlOysrYSljLnB1c2goZC5jaGlsZE5vZGVzW2FdKTtkPWIuZmlyc3RDaGlsZDtkLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBjLnB1c2goZC5jcmVhdGVUZXh0Tm9kZShhKSk7Yi50ZXh0Q29udGVudD1cIlwiO2IuaW5uZXJIVE1MPVwiXCI7Yj1jfUpiKHRoaXMsYik7QShYLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSkuYXBwZW5kKHRoaXMpfWVsc2UgSmIodGhpcyxcbmIpfWZ1bmN0aW9uIEtiKGIpe3JldHVybiBiLmNsb25lTm9kZSghMCl9ZnVuY3Rpb24gTWEoYil7TGIoYik7dmFyIGE9MDtmb3IoYj1iLmNoaWxkTm9kZXN8fFtdO2E8Yi5sZW5ndGg7YSsrKU1hKGJbYV0pfWZ1bmN0aW9uIGxjKGIsYSxjLGQpe2lmKEQoZCkpdGhyb3cgSGIoXCJvZmZhcmdzXCIpO3ZhciBlPXBhKGIsXCJldmVudHNcIik7cGEoYixcImhhbmRsZVwiKSYmKEYoYSk/cihlLGZ1bmN0aW9uKGEsYyl7YmIoYixjLGEpO2RlbGV0ZSBlW2NdfSk6cihhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXtGKGMpPyhiYihiLGEsZVthXSksZGVsZXRlIGVbYV0pOlVhKGVbYV18fFtdLGMpfSkpfWZ1bmN0aW9uIExiKGIsYSl7dmFyIGM9Yi5uZzMzOSxkPWNiW2NdO2QmJihhP2RlbGV0ZSBjYltjXS5kYXRhW2FdOihkLmhhbmRsZSYmKGQuZXZlbnRzLiRkZXN0cm95JiZkLmhhbmRsZSh7fSxcIiRkZXN0cm95XCIpLGxjKGIpKSxkZWxldGUgY2JbY10sYi5uZzMzOT11KSl9ZnVuY3Rpb24gcGEoYixhLGMpe3ZhciBkPVxuYi5uZzMzOSxkPWNiW2R8fC0xXTtpZihEKGMpKWR8fChiLm5nMzM5PWQ9KyttZSxkPWNiW2RdPXt9KSxkW2FdPWM7ZWxzZSByZXR1cm4gZCYmZFthXX1mdW5jdGlvbiBNYihiLGEsYyl7dmFyIGQ9cGEoYixcImRhdGFcIiksZT1EKGMpLGY9IWUmJkQoYSksZz1mJiYhVChhKTtkfHxnfHxwYShiLFwiZGF0YVwiLGQ9e30pO2lmKGUpZFthXT1jO2Vsc2UgaWYoZil7aWYoZylyZXR1cm4gZCYmZFthXTtFKGQsYSl9ZWxzZSByZXR1cm4gZH1mdW5jdGlvbiBOYihiLGEpe3JldHVybiBiLmdldEF0dHJpYnV0ZT8tMTwoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKS5pbmRleE9mKFwiIFwiK2ErXCIgXCIpOiExfWZ1bmN0aW9uIG9iKGIsYSl7YSYmYi5zZXRBdHRyaWJ1dGUmJnIoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCQoKFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcblwiIFwiKS5yZXBsYWNlKFwiIFwiKyQoYSkrXCIgXCIsXCIgXCIpKSl9KX1mdW5jdGlvbiBwYihiLGEpe2lmKGEmJmIuc2V0QXR0cmlidXRlKXt2YXIgYz0oXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFwiIFwiKTtyKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2E9JChhKTstMT09PWMuaW5kZXhPZihcIiBcIithK1wiIFwiKSYmKGMrPWErXCIgXCIpfSk7Yi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCQoYykpfX1mdW5jdGlvbiBKYihiLGEpe2lmKGEpe2E9YS5ub2RlTmFtZXx8IUQoYS5sZW5ndGgpfHxKYShhKT9bYV06YTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliLnB1c2goYVtjXSl9fWZ1bmN0aW9uIG1jKGIsYSl7cmV0dXJuIHFiKGIsXCIkXCIrKGF8fFwibmdDb250cm9sbGVyXCIpK1wiQ29udHJvbGxlclwiKX1mdW5jdGlvbiBxYihiLGEsYyl7OT09Yi5ub2RlVHlwZSYmKGI9Yi5kb2N1bWVudEVsZW1lbnQpO2ZvcihhPUwoYSk/YTpbYV07Yjspe2Zvcih2YXIgZD1cbjAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKChjPUEuZGF0YShiLGFbZF0pKSE9PXUpcmV0dXJuIGM7Yj1iLnBhcmVudE5vZGV8fDExPT09Yi5ub2RlVHlwZSYmYi5ob3N0fX1mdW5jdGlvbiBuYyhiKXtmb3IodmFyIGE9MCxjPWIuY2hpbGROb2RlczthPGMubGVuZ3RoO2ErKylNYShjW2FdKTtmb3IoO2IuZmlyc3RDaGlsZDspYi5yZW1vdmVDaGlsZChiLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIG9jKGIsYSl7dmFyIGM9cmJbYS50b0xvd2VyQ2FzZSgpXTtyZXR1cm4gYyYmcGNbYi5ub2RlTmFtZV0mJmN9ZnVuY3Rpb24gbmUoYixhKXt2YXIgYz1mdW5jdGlvbihjLGUpe2MucHJldmVudERlZmF1bHR8fChjLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yy5yZXR1cm5WYWx1ZT0hMX0pO2Muc3RvcFByb3BhZ2F0aW9ufHwoYy5zdG9wUHJvcGFnYXRpb249ZnVuY3Rpb24oKXtjLmNhbmNlbEJ1YmJsZT0hMH0pO2MudGFyZ2V0fHwoYy50YXJnZXQ9Yy5zcmNFbGVtZW50fHxYKTtpZihGKGMuZGVmYXVsdFByZXZlbnRlZCkpe3ZhciBmPVxuYy5wcmV2ZW50RGVmYXVsdDtjLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yy5kZWZhdWx0UHJldmVudGVkPSEwO2YuY2FsbChjKX07Yy5kZWZhdWx0UHJldmVudGVkPSExfWMuaXNEZWZhdWx0UHJldmVudGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGMuZGVmYXVsdFByZXZlbnRlZHx8ITE9PT1jLnJldHVyblZhbHVlfTt2YXIgZz1oYShhW2V8fGMudHlwZV18fFtdKTtyKGcsZnVuY3Rpb24oYSl7YS5jYWxsKGIsYyl9KTs4Pj1SPyhjLnByZXZlbnREZWZhdWx0PW51bGwsYy5zdG9wUHJvcGFnYXRpb249bnVsbCxjLmlzRGVmYXVsdFByZXZlbnRlZD1udWxsKTooZGVsZXRlIGMucHJldmVudERlZmF1bHQsZGVsZXRlIGMuc3RvcFByb3BhZ2F0aW9uLGRlbGV0ZSBjLmlzRGVmYXVsdFByZXZlbnRlZCl9O2MuZWxlbT1iO3JldHVybiBjfWZ1bmN0aW9uIE5hKGIsYSl7dmFyIGM9dHlwZW9mIGIsZDtcImZ1bmN0aW9uXCI9PWN8fFwib2JqZWN0XCI9PWMmJm51bGwhPT1iP1wiZnVuY3Rpb25cIj09dHlwZW9mKGQ9XG5iLiQkaGFzaEtleSk/ZD1iLiQkaGFzaEtleSgpOmQ9PT11JiYoZD1iLiQkaGFzaEtleT0oYXx8aWIpKCkpOmQ9YjtyZXR1cm4gYytcIjpcIitkfWZ1bmN0aW9uIGRiKGIsYSl7aWYoYSl7dmFyIGM9MDt0aGlzLm5leHRVaWQ9ZnVuY3Rpb24oKXtyZXR1cm4rK2N9fXIoYix0aGlzLnB1dCx0aGlzKX1mdW5jdGlvbiBxYyhiKXt2YXIgYSxjO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiPyhhPWIuJGluamVjdCl8fChhPVtdLGIubGVuZ3RoJiYoYz1iLnRvU3RyaW5nKCkucmVwbGFjZShvZSxcIlwiKSxjPWMubWF0Y2gocGUpLHIoY1sxXS5zcGxpdChxZSksZnVuY3Rpb24oYil7Yi5yZXBsYWNlKHJlLGZ1bmN0aW9uKGIsYyxkKXthLnB1c2goZCl9KX0pKSxiLiRpbmplY3Q9YSk6TChiKT8oYz1iLmxlbmd0aC0xLFlhKGJbY10sXCJmblwiKSxhPWIuc2xpY2UoMCxjKSk6WWEoYixcImZuXCIsITApO3JldHVybiBhfWZ1bmN0aW9uIGVjKGIpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7aWYoVChiKSlyKGIsXG5ZYihhKSk7ZWxzZSByZXR1cm4gYShiLGMpfX1mdW5jdGlvbiBjKGEsYil7RWEoYSxcInNlcnZpY2VcIik7aWYoTihiKXx8TChiKSliPW4uaW5zdGFudGlhdGUoYik7aWYoIWIuJGdldCl0aHJvdyBlYihcInBnZXRcIixhKTtyZXR1cm4gbFthK2hdPWJ9ZnVuY3Rpb24gZChhLGIpe3JldHVybiBjKGEseyRnZXQ6Yn0pfWZ1bmN0aW9uIGUoYSl7dmFyIGI9W10sYyxkLGYsaDtyKGEsZnVuY3Rpb24oYSl7aWYoIW0uZ2V0KGEpKXttLnB1dChhLCEwKTt0cnl7aWYoRyhhKSlmb3IoYz0kYShhKSxiPWIuY29uY2F0KGUoYy5yZXF1aXJlcykpLmNvbmNhdChjLl9ydW5CbG9ja3MpLGQ9Yy5faW52b2tlUXVldWUsZj0wLGg9ZC5sZW5ndGg7ZjxoO2YrKyl7dmFyIGc9ZFtmXSxrPW4uZ2V0KGdbMF0pO2tbZ1sxXV0uYXBwbHkoayxnWzJdKX1lbHNlIE4oYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpMKGEpP2IucHVzaChuLmludm9rZShhKSk6WWEoYSxcIm1vZHVsZVwiKX1jYXRjaChwKXt0aHJvdyBMKGEpJiYoYT1cbmFbYS5sZW5ndGgtMV0pLHAubWVzc2FnZSYmKHAuc3RhY2smJi0xPT1wLnN0YWNrLmluZGV4T2YocC5tZXNzYWdlKSkmJihwPXAubWVzc2FnZStcIlxcblwiK3Auc3RhY2spLGViKFwibW9kdWxlcnJcIixhLHAuc3RhY2t8fHAubWVzc2FnZXx8cCk7fX19KTtyZXR1cm4gYn1mdW5jdGlvbiBmKGEsYil7ZnVuY3Rpb24gYyhkKXtpZihhLmhhc093blByb3BlcnR5KGQpKXtpZihhW2RdPT09Zyl0aHJvdyBlYihcImNkZXBcIixkK1wiIDwtIFwiK2suam9pbihcIiA8LSBcIikpO3JldHVybiBhW2RdfXRyeXtyZXR1cm4gay51bnNoaWZ0KGQpLGFbZF09ZyxhW2RdPWIoZCl9Y2F0Y2goZSl7dGhyb3cgYVtkXT09PWcmJmRlbGV0ZSBhW2RdLGU7fWZpbmFsbHl7ay5zaGlmdCgpfX1mdW5jdGlvbiBkKGEsYixlKXt2YXIgZj1bXSxoPXFjKGEpLGcsayxwO2s9MDtmb3IoZz1oLmxlbmd0aDtrPGc7aysrKXtwPWhba107aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBwKXRocm93IGViKFwiaXRrblwiLHApO2YucHVzaChlJiZlLmhhc093blByb3BlcnR5KHApP1xuZVtwXTpjKHApKX1MKGEpJiYoYT1hW2ddKTtyZXR1cm4gYS5hcHBseShiLGYpfXJldHVybntpbnZva2U6ZCxpbnN0YW50aWF0ZTpmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKCl7fSxlO2MucHJvdG90eXBlPShMKGEpP2FbYS5sZW5ndGgtMV06YSkucHJvdG90eXBlO2M9bmV3IGM7ZT1kKGEsYyxiKTtyZXR1cm4gVChlKXx8TihlKT9lOmN9LGdldDpjLGFubm90YXRlOnFjLGhhczpmdW5jdGlvbihiKXtyZXR1cm4gbC5oYXNPd25Qcm9wZXJ0eShiK2gpfHxhLmhhc093blByb3BlcnR5KGIpfX19dmFyIGc9e30saD1cIlByb3ZpZGVyXCIsaz1bXSxtPW5ldyBkYihbXSwhMCksbD17JHByb3ZpZGU6e3Byb3ZpZGVyOmEoYyksZmFjdG9yeTphKGQpLHNlcnZpY2U6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsW1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5zdGFudGlhdGUoYil9XSl9KSx2YWx1ZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxhYShiKSl9KSxjb25zdGFudDphKGZ1bmN0aW9uKGEsXG5iKXtFYShhLFwiY29uc3RhbnRcIik7bFthXT1iO3FbYV09Yn0pLGRlY29yYXRvcjpmdW5jdGlvbihhLGIpe3ZhciBjPW4uZ2V0KGEraCksZD1jLiRnZXQ7Yy4kZ2V0PWZ1bmN0aW9uKCl7dmFyIGE9cC5pbnZva2UoZCxjKTtyZXR1cm4gcC5pbnZva2UoYixudWxsLHskZGVsZWdhdGU6YX0pfX19fSxuPWwuJGluamVjdG9yPWYobCxmdW5jdGlvbigpe3Rocm93IGViKFwidW5wclwiLGsuam9pbihcIiA8LSBcIikpO30pLHE9e30scD1xLiRpbmplY3Rvcj1mKHEsZnVuY3Rpb24oYSl7YT1uLmdldChhK2gpO3JldHVybiBwLmludm9rZShhLiRnZXQsYSl9KTtyKGUoYiksZnVuY3Rpb24oYSl7cC5pbnZva2UoYXx8dil9KTtyZXR1cm4gcH1mdW5jdGlvbiBLZCgpe3ZhciBiPSEwO3RoaXMuZGlzYWJsZUF1dG9TY3JvbGxpbmc9ZnVuY3Rpb24oKXtiPSExfTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvY2F0aW9uXCIsXCIkcm9vdFNjb3BlXCIsZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSl7dmFyIGI9bnVsbDtcbnIoYSxmdW5jdGlvbihhKXtifHxcImFcIiE9PXgoYS5ub2RlTmFtZSl8fChiPWEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZigpe3ZhciBiPWMuaGFzaCgpLGQ7Yj8oZD1nLmdldEVsZW1lbnRCeUlkKGIpKT9kLnNjcm9sbEludG9WaWV3KCk6KGQ9ZShnLmdldEVsZW1lbnRzQnlOYW1lKGIpKSk/ZC5zY3JvbGxJbnRvVmlldygpOlwidG9wXCI9PT1iJiZhLnNjcm9sbFRvKDAsMCk6YS5zY3JvbGxUbygwLDApfXZhciBnPWEuZG9jdW1lbnQ7YiYmZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gYy5oYXNoKCl9LGZ1bmN0aW9uKCl7ZC4kZXZhbEFzeW5jKGYpfSk7cmV0dXJuIGZ9XX1mdW5jdGlvbiBnZSgpe3RoaXMuJGdldD1bXCIkJHJBRlwiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihiLGEpe3JldHVybiBiLnN1cHBvcnRlZD9mdW5jdGlvbihhKXtyZXR1cm4gYihhKX06ZnVuY3Rpb24oYil7cmV0dXJuIGEoYiwwLCExKX19XX1mdW5jdGlvbiBzZShiLGEsYyxkKXtmdW5jdGlvbiBlKGEpe3RyeXthLmFwcGx5KG51bGwsXG53YS5jYWxsKGFyZ3VtZW50cywxKSl9ZmluYWxseXtpZihzLS0sMD09PXMpZm9yKDtKLmxlbmd0aDspdHJ5e0oucG9wKCkoKX1jYXRjaChiKXtjLmVycm9yKGIpfX19ZnVuY3Rpb24gZihhLGIpeyhmdW5jdGlvbiBlYSgpe3IodyxmdW5jdGlvbihhKXthKCl9KTt0PWIoZWEsYSl9KSgpfWZ1bmN0aW9uIGcoKXt5IT1oLnVybCgpJiYoeT1oLnVybCgpLHIoYmEsZnVuY3Rpb24oYSl7YShoLnVybCgpKX0pKX12YXIgaD10aGlzLGs9YVswXSxtPWIubG9jYXRpb24sbD1iLmhpc3Rvcnksbj1iLnNldFRpbWVvdXQscT1iLmNsZWFyVGltZW91dCxwPXt9O2guaXNNb2NrPSExO3ZhciBzPTAsSj1bXTtoLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Q9ZTtoLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQ9ZnVuY3Rpb24oKXtzKyt9O2gubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cz1mdW5jdGlvbihhKXtyKHcsZnVuY3Rpb24oYSl7YSgpfSk7MD09PXM/YSgpOkoucHVzaChhKX07XG52YXIgdz1bXSx0O2guYWRkUG9sbEZuPWZ1bmN0aW9uKGEpe0YodCkmJmYoMTAwLG4pO3cucHVzaChhKTtyZXR1cm4gYX07dmFyIHk9bS5ocmVmLEs9YS5maW5kKFwiYmFzZVwiKSxCPW51bGw7aC51cmw9ZnVuY3Rpb24oYSxjKXttIT09Yi5sb2NhdGlvbiYmKG09Yi5sb2NhdGlvbik7bCE9PWIuaGlzdG9yeSYmKGw9Yi5oaXN0b3J5KTtpZihhKXtpZih5IT1hKXt2YXIgZT15JiZHYSh5KT09PUdhKGEpO3k9YTshZSYmZC5oaXN0b3J5P2M/bC5yZXBsYWNlU3RhdGUobnVsbCxcIlwiLGEpOihsLnB1c2hTdGF0ZShudWxsLFwiXCIsYSksSy5hdHRyKFwiaHJlZlwiLEsuYXR0cihcImhyZWZcIikpKTooZXx8KEI9YSksYz9tLnJlcGxhY2UoYSk6bS5ocmVmPWEpO3JldHVybiBofX1lbHNlIHJldHVybiBCfHxtLmhyZWYucmVwbGFjZSgvJTI3L2csXCInXCIpfTt2YXIgYmE9W10sTz0hMTtoLm9uVXJsQ2hhbmdlPWZ1bmN0aW9uKGEpe2lmKCFPKXtpZihkLmhpc3RvcnkpQShiKS5vbihcInBvcHN0YXRlXCIsZyk7aWYoZC5oYXNoY2hhbmdlKUEoYikub24oXCJoYXNoY2hhbmdlXCIsXG5nKTtlbHNlIGguYWRkUG9sbEZuKGcpO089ITB9YmEucHVzaChhKTtyZXR1cm4gYX07aC4kJGNoZWNrVXJsQ2hhbmdlPWc7aC5iYXNlSHJlZj1mdW5jdGlvbigpe3ZhciBhPUsuYXR0cihcImhyZWZcIik7cmV0dXJuIGE/YS5yZXBsYWNlKC9eKGh0dHBzP1xcOik/XFwvXFwvW15cXC9dKi8sXCJcIik6XCJcIn07dmFyIE09e30sY2E9XCJcIixQPWguYmFzZUhyZWYoKTtoLmNvb2tpZXM9ZnVuY3Rpb24oYSxiKXt2YXIgZCxlLGYsaDtpZihhKWI9PT11P2suY29va2llPWVzY2FwZShhKStcIj07cGF0aD1cIitQK1wiO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjpHKGIpJiYoZD0oay5jb29raWU9ZXNjYXBlKGEpK1wiPVwiK2VzY2FwZShiKStcIjtwYXRoPVwiK1ApLmxlbmd0aCsxLDQwOTY8ZCYmYy53YXJuKFwiQ29va2llICdcIithK1wiJyBwb3NzaWJseSBub3Qgc2V0IG9yIG92ZXJmbG93ZWQgYmVjYXVzZSBpdCB3YXMgdG9vIGxhcmdlIChcIitkK1wiID4gNDA5NiBieXRlcykhXCIpKTtlbHNle2lmKGsuY29va2llIT09XG5jYSlmb3IoY2E9ay5jb29raWUsZD1jYS5zcGxpdChcIjsgXCIpLE09e30sZj0wO2Y8ZC5sZW5ndGg7ZisrKWU9ZFtmXSxoPWUuaW5kZXhPZihcIj1cIiksMDxoJiYoYT11bmVzY2FwZShlLnN1YnN0cmluZygwLGgpKSxNW2FdPT09dSYmKE1bYV09dW5lc2NhcGUoZS5zdWJzdHJpbmcoaCsxKSkpKTtyZXR1cm4gTX19O2guZGVmZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYztzKys7Yz1uKGZ1bmN0aW9uKCl7ZGVsZXRlIHBbY107ZShhKX0sYnx8MCk7cFtjXT0hMDtyZXR1cm4gY307aC5kZWZlci5jYW5jZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHBbYV0/KGRlbGV0ZSBwW2FdLHEoYSksZSh2KSwhMCk6ITF9fWZ1bmN0aW9uIE1kKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2dcIixcIiRzbmlmZmVyXCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyxkKXtyZXR1cm4gbmV3IHNlKGIsZCxhLGMpfV19ZnVuY3Rpb24gTmQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCl7ZnVuY3Rpb24gZShhKXthIT1cbm4mJihxP3E9PWEmJihxPWEubik6cT1hLGYoYS5uLGEucCksZihhLG4pLG49YSxuLm49bnVsbCl9ZnVuY3Rpb24gZihhLGIpe2EhPWImJihhJiYoYS5wPWIpLGImJihiLm49YSkpfWlmKGIgaW4gYSl0aHJvdyB6KFwiJGNhY2hlRmFjdG9yeVwiKShcImlpZFwiLGIpO3ZhciBnPTAsaD1FKHt9LGQse2lkOmJ9KSxrPXt9LG09ZCYmZC5jYXBhY2l0eXx8TnVtYmVyLk1BWF9WQUxVRSxsPXt9LG49bnVsbCxxPW51bGw7cmV0dXJuIGFbYl09e3B1dDpmdW5jdGlvbihhLGIpe2lmKG08TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGM9bFthXXx8KGxbYV09e2tleTphfSk7ZShjKX1pZighRihiKSlyZXR1cm4gYSBpbiBrfHxnKyssa1thXT1iLGc+bSYmdGhpcy5yZW1vdmUocS5rZXkpLGJ9LGdldDpmdW5jdGlvbihhKXtpZihtPE51bWJlci5NQVhfVkFMVUUpe3ZhciBiPWxbYV07aWYoIWIpcmV0dXJuO2UoYil9cmV0dXJuIGtbYV19LHJlbW92ZTpmdW5jdGlvbihhKXtpZihtPE51bWJlci5NQVhfVkFMVUUpe3ZhciBiPVxubFthXTtpZighYilyZXR1cm47Yj09biYmKG49Yi5wKTtiPT1xJiYocT1iLm4pO2YoYi5uLGIucCk7ZGVsZXRlIGxbYV19ZGVsZXRlIGtbYV07Zy0tfSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXtrPXt9O2c9MDtsPXt9O249cT1udWxsfSxkZXN0cm95OmZ1bmN0aW9uKCl7bD1oPWs9bnVsbDtkZWxldGUgYVtiXX0saW5mbzpmdW5jdGlvbigpe3JldHVybiBFKHt9LGgse3NpemU6Z30pfX19dmFyIGE9e307Yi5pbmZvPWZ1bmN0aW9uKCl7dmFyIGI9e307cihhLGZ1bmN0aW9uKGEsZSl7YltlXT1hLmluZm8oKX0pO3JldHVybiBifTtiLmdldD1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07cmV0dXJuIGJ9fWZ1bmN0aW9uIGNlKCl7dGhpcy4kZ2V0PVtcIiRjYWNoZUZhY3RvcnlcIixmdW5jdGlvbihiKXtyZXR1cm4gYihcInRlbXBsYXRlc1wiKX1dfWZ1bmN0aW9uIGdjKGIsYSl7dmFyIGM9e30sZD1cIkRpcmVjdGl2ZVwiLGU9L15cXHMqZGlyZWN0aXZlXFw6XFxzKihbXFxkXFx3X1xcLV0rKVxccysoLiopJC8sZj0vKChbXFxkXFx3X1xcLV0rKSg/OlxcOihbXjtdKykpPzs/KS8sXG5nPS9eKG9uW2Etel0rfGZvcm1hY3Rpb24pJC87dGhpcy5kaXJlY3RpdmU9ZnVuY3Rpb24gayhhLGUpe0VhKGEsXCJkaXJlY3RpdmVcIik7RyhhKT8oRGIoZSxcImRpcmVjdGl2ZUZhY3RvcnlcIiksYy5oYXNPd25Qcm9wZXJ0eShhKXx8KGNbYV09W10sYi5mYWN0b3J5KGErZCxbXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixkKXt2YXIgZT1bXTtyKGNbYV0sZnVuY3Rpb24oYyxmKXt0cnl7dmFyIGc9Yi5pbnZva2UoYyk7TihnKT9nPXtjb21waWxlOmFhKGcpfTohZy5jb21waWxlJiZnLmxpbmsmJihnLmNvbXBpbGU9YWEoZy5saW5rKSk7Zy5wcmlvcml0eT1nLnByaW9yaXR5fHwwO2cuaW5kZXg9ZjtnLm5hbWU9Zy5uYW1lfHxhO2cucmVxdWlyZT1nLnJlcXVpcmV8fGcuY29udHJvbGxlciYmZy5uYW1lO2cucmVzdHJpY3Q9Zy5yZXN0cmljdHx8XCJBXCI7ZS5wdXNoKGcpfWNhdGNoKGspe2Qoayl9fSk7cmV0dXJuIGV9XSkpLGNbYV0ucHVzaChlKSk6cihhLFliKGspKTtcbnJldHVybiB0aGlzfTt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRpbnRlcnBvbGF0ZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJHBhcnNlXCIsXCIkY29udHJvbGxlclwiLFwiJHJvb3RTY29wZVwiLFwiJGRvY3VtZW50XCIsXCIkc2NlXCIsXCIkYW5pbWF0ZVwiLFwiJCRzYW5pdGl6ZVVyaVwiLGZ1bmN0aW9uKGEsYixsLG4scSxwLHMsSix3LHQseSxLKXtmdW5jdGlvbiBCKGEsYixjLGQsZSl7YSBpbnN0YW5jZW9mXG5BfHwoYT1BKGEpKTtyKGEsZnVuY3Rpb24oYixjKXszPT1iLm5vZGVUeXBlJiZiLm5vZGVWYWx1ZS5tYXRjaCgvXFxTKy8pJiYoYVtjXT1BKGIpLndyYXAoXCI8c3Bhbj48L3NwYW4+XCIpLnBhcmVudCgpWzBdKX0pO3ZhciBmPU8oYSxiLGEsYyxkLGUpO2JhKGEsXCJuZy1zY29wZVwiKTtyZXR1cm4gZnVuY3Rpb24oYixjLGQsZSl7RGIoYixcInNjb3BlXCIpO3ZhciBnPWM/T2EuY2xvbmUuY2FsbChhKTphO3IoZCxmdW5jdGlvbihhLGIpe2cuZGF0YShcIiRcIitiK1wiQ29udHJvbGxlclwiLGEpfSk7ZD0wO2Zvcih2YXIgaz1nLmxlbmd0aDtkPGs7ZCsrKXt2YXIgcD1nW2RdLm5vZGVUeXBlOzEhPT1wJiY5IT09cHx8Zy5lcShkKS5kYXRhKFwiJHNjb3BlXCIsYil9YyYmYyhnLGIpO2YmJmYoYixnLGcsZSk7cmV0dXJuIGd9fWZ1bmN0aW9uIGJhKGEsYil7dHJ5e2EuYWRkQ2xhc3MoYil9Y2F0Y2goYyl7fX1mdW5jdGlvbiBPKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKGEsYyxkLGUpe3ZhciBmLHAsbCxtLHEsXG5uLHc7Zj1jLmxlbmd0aDt2YXIgcz1BcnJheShmKTtmb3IobT0wO208ZjttKyspc1ttXT1jW21dO249bT0wO2ZvcihxPWsubGVuZ3RoO208cTtuKyspcD1zW25dLGM9a1ttKytdLGY9a1ttKytdLGM/KGMuc2NvcGU/KGw9YS4kbmV3KCksQS5kYXRhKHAsXCIkc2NvcGVcIixsKSk6bD1hLHc9Yy50cmFuc2NsdWRlT25UaGlzRWxlbWVudD9NKGEsYy50cmFuc2NsdWRlLGUpOiFjLnRlbXBsYXRlT25UaGlzRWxlbWVudCYmZT9lOiFlJiZiP00oYSxiKTpudWxsLGMoZixsLHAsZCx3KSk6ZiYmZihhLHAuY2hpbGROb2Rlcyx1LGUpfWZvcih2YXIgaz1bXSxwLGwsbSxxLG49MDtuPGEubGVuZ3RoO24rKylwPW5ldyBPYixsPWNhKGFbbl0sW10scCwwPT09bj9kOnUsZSksKGY9bC5sZW5ndGg/SShsLGFbbl0scCxiLGMsbnVsbCxbXSxbXSxmKTpudWxsKSYmZi5zY29wZSYmYmEocC4kJGVsZW1lbnQsXCJuZy1zY29wZVwiKSxwPWYmJmYudGVybWluYWx8fCEobT1hW25dLmNoaWxkTm9kZXMpfHwhbS5sZW5ndGg/XG5udWxsOk8obSxmPyhmLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50fHwhZi50ZW1wbGF0ZU9uVGhpc0VsZW1lbnQpJiZmLnRyYW5zY2x1ZGU6Yiksay5wdXNoKGYscCkscT1xfHxmfHxwLGY9bnVsbDtyZXR1cm4gcT9nOm51bGx9ZnVuY3Rpb24gTShhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxmKXt2YXIgZz0hMTtkfHwoZD1hLiRuZXcoKSxnPWQuJCR0cmFuc2NsdWRlZD0hMCk7ZT1iKGQsZSxmLGMpO2lmKGcpZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtkLiRkZXN0cm95KCl9KTtyZXR1cm4gZX19ZnVuY3Rpb24gY2EoYSxiLGMsZCxnKXt2YXIgaz1jLiRhdHRyLHA7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgMTplYShiLHFhKFBhKGEpLnRvTG93ZXJDYXNlKCkpLFwiRVwiLGQsZyk7Zm9yKHZhciBsLG0scSxuPWEuYXR0cmlidXRlcyx3PTAscz1uJiZuLmxlbmd0aDt3PHM7dysrKXt2YXIgdD0hMSxKPSExO2w9blt3XTtpZighUnx8ODw9Unx8bC5zcGVjaWZpZWQpe3A9bC5uYW1lO209XG4kKGwudmFsdWUpO2w9cWEocCk7aWYocT1VLnRlc3QobCkpcD1uYihsLnN1YnN0cig2KSxcIi1cIik7dmFyIHk9bC5yZXBsYWNlKC8oU3RhcnR8RW5kKSQvLFwiXCIpO2w9PT15K1wiU3RhcnRcIiYmKHQ9cCxKPXAuc3Vic3RyKDAscC5sZW5ndGgtNSkrXCJlbmRcIixwPXAuc3Vic3RyKDAscC5sZW5ndGgtNikpO2w9cWEocC50b0xvd2VyQ2FzZSgpKTtrW2xdPXA7aWYocXx8IWMuaGFzT3duUHJvcGVydHkobCkpY1tsXT1tLG9jKGEsbCkmJihjW2xdPSEwKTtTKGEsYixtLGwpO2VhKGIsbCxcIkFcIixkLGcsdCxKKX19YT1hLmNsYXNzTmFtZTtpZihHKGEpJiZcIlwiIT09YSlmb3IoO3A9Zi5leGVjKGEpOylsPXFhKHBbMl0pLGVhKGIsbCxcIkNcIixkLGcpJiYoY1tsXT0kKHBbM10pKSxhPWEuc3Vic3RyKHAuaW5kZXgrcFswXS5sZW5ndGgpO2JyZWFrO2Nhc2UgMzp4KGIsYS5ub2RlVmFsdWUpO2JyZWFrO2Nhc2UgODp0cnl7aWYocD1lLmV4ZWMoYS5ub2RlVmFsdWUpKWw9cWEocFsxXSksZWEoYixsLFwiTVwiLGQsXG5nKSYmKGNbbF09JChwWzJdKSl9Y2F0Y2goQil7fX1iLnNvcnQoRik7cmV0dXJuIGJ9ZnVuY3Rpb24gUChhLGIsYyl7dmFyIGQ9W10sZT0wO2lmKGImJmEuaGFzQXR0cmlidXRlJiZhLmhhc0F0dHJpYnV0ZShiKSl7ZG97aWYoIWEpdGhyb3cgamEoXCJ1dGVyZGlyXCIsYixjKTsxPT1hLm5vZGVUeXBlJiYoYS5oYXNBdHRyaWJ1dGUoYikmJmUrKyxhLmhhc0F0dHJpYnV0ZShjKSYmZS0tKTtkLnB1c2goYSk7YT1hLm5leHRTaWJsaW5nfXdoaWxlKDA8ZSl9ZWxzZSBkLnB1c2goYSk7cmV0dXJuIEEoZCl9ZnVuY3Rpb24gQyhhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxmLGcsayl7ZT1QKGVbMF0sYixjKTtyZXR1cm4gYShkLGUsZixnLGspfX1mdW5jdGlvbiBJKGEsYyxkLGUsZixnLGsscSxuKXtmdW5jdGlvbiB3KGEsYixjLGQpe2lmKGEpe2MmJihhPUMoYSxjLGQpKTthLnJlcXVpcmU9SC5yZXF1aXJlO2EuZGlyZWN0aXZlTmFtZT16O2lmKEs9PT1IfHxILiQkaXNvbGF0ZVNjb3BlKWE9cmMoYSxcbntpc29sYXRlU2NvcGU6ITB9KTtrLnB1c2goYSl9aWYoYil7YyYmKGI9QyhiLGMsZCkpO2IucmVxdWlyZT1ILnJlcXVpcmU7Yi5kaXJlY3RpdmVOYW1lPXo7aWYoSz09PUh8fEguJCRpc29sYXRlU2NvcGUpYj1yYyhiLHtpc29sYXRlU2NvcGU6ITB9KTtxLnB1c2goYil9fWZ1bmN0aW9uIHQoYSxiLGMsZCl7dmFyIGUsZj1cImRhdGFcIixnPSExO2lmKEcoYikpe2Zvcig7XCJeXCI9PShlPWIuY2hhckF0KDApKXx8XCI/XCI9PWU7KWI9Yi5zdWJzdHIoMSksXCJeXCI9PWUmJihmPVwiaW5oZXJpdGVkRGF0YVwiKSxnPWd8fFwiP1wiPT1lO2U9bnVsbDtkJiZcImRhdGFcIj09PWYmJihlPWRbYl0pO2U9ZXx8Y1tmXShcIiRcIitiK1wiQ29udHJvbGxlclwiKTtpZighZSYmIWcpdGhyb3cgamEoXCJjdHJlcVwiLGIsYSk7fWVsc2UgTChiKSYmKGU9W10scihiLGZ1bmN0aW9uKGIpe2UucHVzaCh0KGEsYixjLGQpKX0pKTtyZXR1cm4gZX1mdW5jdGlvbiBKKGEsZSxmLGcsbil7ZnVuY3Rpb24gdyhhLGIpe3ZhciBjOzI+YXJndW1lbnRzLmxlbmd0aCYmXG4oYj1hLGE9dSk7SWEmJihjPWNhKTtyZXR1cm4gbihhLGIsYyl9dmFyIHksUSxCLE0sQyxQLGNhPXt9LHJhO3k9Yz09PWY/ZDpoYShkLG5ldyBPYihBKGYpLGQuJGF0dHIpKTtRPXkuJCRlbGVtZW50O2lmKEspe3ZhciB1ZT0vXlxccyooW0A9Jl0pKFxcPz8pXFxzKihcXHcqKVxccyokLztQPWUuJG5ldyghMCk7IUl8fEkhPT1LJiZJIT09Sy4kJG9yaWdpbmFsRGlyZWN0aXZlP1EuZGF0YShcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIsUCk6US5kYXRhKFwiJGlzb2xhdGVTY29wZVwiLFApO2JhKFEsXCJuZy1pc29sYXRlLXNjb3BlXCIpO3IoSy5zY29wZSxmdW5jdGlvbihhLGMpe3ZhciBkPWEubWF0Y2godWUpfHxbXSxmPWRbM118fGMsZz1cIj9cIj09ZFsyXSxkPWRbMV0sayxsLG4scTtQLiQkaXNvbGF0ZUJpbmRpbmdzW2NdPWQrZjtzd2l0Y2goZCl7Y2FzZSBcIkBcIjp5LiRvYnNlcnZlKGYsZnVuY3Rpb24oYSl7UFtjXT1hfSk7eS4kJG9ic2VydmVyc1tmXS4kJHNjb3BlPWU7eVtmXSYmKFBbY109Yih5W2ZdKShlKSk7XG5icmVhaztjYXNlIFwiPVwiOmlmKGcmJiF5W2ZdKWJyZWFrO2w9cCh5W2ZdKTtxPWwubGl0ZXJhbD9DYTpmdW5jdGlvbihhLGIpe3JldHVybiBhPT09Ynx8YSE9PWEmJmIhPT1ifTtuPWwuYXNzaWdufHxmdW5jdGlvbigpe2s9UFtjXT1sKGUpO3Rocm93IGphKFwibm9uYXNzaWduXCIseVtmXSxLLm5hbWUpO307az1QW2NdPWwoZSk7UC4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1sKGUpO3EoYSxQW2NdKXx8KHEoYSxrKT9uKGUsYT1QW2NdKTpQW2NdPWEpO3JldHVybiBrPWF9LG51bGwsbC5saXRlcmFsKTticmVhaztjYXNlIFwiJlwiOmw9cCh5W2ZdKTtQW2NdPWZ1bmN0aW9uKGEpe3JldHVybiBsKGUsYSl9O2JyZWFrO2RlZmF1bHQ6dGhyb3cgamEoXCJpc2NwXCIsSy5uYW1lLGMsYSk7fX0pfXJhPW4mJnc7TyYmcihPLGZ1bmN0aW9uKGEpe3ZhciBiPXskc2NvcGU6YT09PUt8fGEuJCRpc29sYXRlU2NvcGU/UDplLCRlbGVtZW50OlEsJGF0dHJzOnksJHRyYW5zY2x1ZGU6cmF9LGM7Qz1hLmNvbnRyb2xsZXI7XG5cIkBcIj09QyYmKEM9eVthLm5hbWVdKTtjPXMoQyxiKTtjYVthLm5hbWVdPWM7SWF8fFEuZGF0YShcIiRcIithLm5hbWUrXCJDb250cm9sbGVyXCIsYyk7YS5jb250cm9sbGVyQXMmJihiLiRzY29wZVthLmNvbnRyb2xsZXJBc109Yyl9KTtnPTA7Zm9yKEI9ay5sZW5ndGg7ZzxCO2crKyl0cnl7TT1rW2ddLE0oTS5pc29sYXRlU2NvcGU/UDplLFEseSxNLnJlcXVpcmUmJnQoTS5kaXJlY3RpdmVOYW1lLE0ucmVxdWlyZSxRLGNhKSxyYSl9Y2F0Y2goSCl7bChILGlhKFEpKX1nPWU7SyYmKEsudGVtcGxhdGV8fG51bGw9PT1LLnRlbXBsYXRlVXJsKSYmKGc9UCk7YSYmYShnLGYuY2hpbGROb2Rlcyx1LG4pO2ZvcihnPXEubGVuZ3RoLTE7MDw9ZztnLS0pdHJ5e009cVtnXSxNKE0uaXNvbGF0ZVNjb3BlP1A6ZSxRLHksTS5yZXF1aXJlJiZ0KE0uZGlyZWN0aXZlTmFtZSxNLnJlcXVpcmUsUSxjYSkscmEpfWNhdGNoKEQpe2woRCxpYShRKSl9fW49bnx8e307Zm9yKHZhciB5PS1OdW1iZXIuTUFYX1ZBTFVFLFxuTSxPPW4uY29udHJvbGxlckRpcmVjdGl2ZXMsSz1uLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxJPW4udGVtcGxhdGVEaXJlY3RpdmUsZWE9bi5ub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlLEY9ITEsRT0hMSxJYT1uLmhhc0VsZW1lbnRUcmFuc2NsdWRlRGlyZWN0aXZlLHg9ZC4kJGVsZW1lbnQ9QShjKSxILHosVixTPWUsUixIYT0wLHNhPWEubGVuZ3RoO0hhPHNhO0hhKyspe0g9YVtIYV07dmFyIFU9SC4kJHN0YXJ0LFk9SC4kJGVuZDtVJiYoeD1QKGMsVSxZKSk7Vj11O2lmKHk+SC5wcmlvcml0eSlicmVhaztpZihWPUguc2NvcGUpTT1NfHxILEgudGVtcGxhdGVVcmx8fChmYihcIm5ldy9pc29sYXRlZCBzY29wZVwiLEssSCx4KSxUKFYpJiYoSz1IKSk7ej1ILm5hbWU7IUgudGVtcGxhdGVVcmwmJkguY29udHJvbGxlciYmKFY9SC5jb250cm9sbGVyLE89T3x8e30sZmIoXCInXCIreitcIicgY29udHJvbGxlclwiLE9bel0sSCx4KSxPW3pdPUgpO2lmKFY9SC50cmFuc2NsdWRlKUY9ITAsSC4kJHRsYnx8XG4oZmIoXCJ0cmFuc2NsdXNpb25cIixlYSxILHgpLGVhPUgpLFwiZWxlbWVudFwiPT1WPyhJYT0hMCx5PUgucHJpb3JpdHksVj14LHg9ZC4kJGVsZW1lbnQ9QShYLmNyZWF0ZUNvbW1lbnQoXCIgXCIreitcIjogXCIrZFt6XStcIiBcIikpLGM9eFswXSxyYShmLHdhLmNhbGwoViwwKSxjKSxTPUIoVixlLHksZyYmZy5uYW1lLHtub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOmVhfSkpOihWPUEoS2IoYykpLmNvbnRlbnRzKCkseC5lbXB0eSgpLFM9QihWLGUpKTtpZihILnRlbXBsYXRlKWlmKEU9ITAsZmIoXCJ0ZW1wbGF0ZVwiLEksSCx4KSxJPUgsVj1OKEgudGVtcGxhdGUpP0gudGVtcGxhdGUoeCxkKTpILnRlbXBsYXRlLFY9VyhWKSxILnJlcGxhY2Upe2c9SDtWPUliLnRlc3QoVik/QSgkKFYpKTpbXTtjPVZbMF07aWYoMSE9Vi5sZW5ndGh8fDEhPT1jLm5vZGVUeXBlKXRocm93IGphKFwidHBscnRcIix6LFwiXCIpO3JhKGYseCxjKTtzYT17JGF0dHI6e319O1Y9Y2EoYyxbXSxzYSk7dmFyIFo9YS5zcGxpY2UoSGErXG4xLGEubGVuZ3RoLShIYSsxKSk7SyYmRChWKTthPWEuY29uY2F0KFYpLmNvbmNhdChaKTt2KGQsc2EpO3NhPWEubGVuZ3RofWVsc2UgeC5odG1sKFYpO2lmKEgudGVtcGxhdGVVcmwpRT0hMCxmYihcInRlbXBsYXRlXCIsSSxILHgpLEk9SCxILnJlcGxhY2UmJihnPUgpLEo9dGUoYS5zcGxpY2UoSGEsYS5sZW5ndGgtSGEpLHgsZCxmLEYmJlMsayxxLHtjb250cm9sbGVyRGlyZWN0aXZlczpPLG5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZTpLLHRlbXBsYXRlRGlyZWN0aXZlOkksbm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTplYX0pLHNhPWEubGVuZ3RoO2Vsc2UgaWYoSC5jb21waWxlKXRyeXtSPUguY29tcGlsZSh4LGQsUyksTihSKT93KG51bGwsUixVLFkpOlImJncoUi5wcmUsUi5wb3N0LFUsWSl9Y2F0Y2godmUpe2wodmUsaWEoeCkpfUgudGVybWluYWwmJihKLnRlcm1pbmFsPSEwLHk9TWF0aC5tYXgoeSxILnByaW9yaXR5KSl9Si5zY29wZT1NJiYhMD09PU0uc2NvcGU7Si50cmFuc2NsdWRlT25UaGlzRWxlbWVudD1cbkY7Si50ZW1wbGF0ZU9uVGhpc0VsZW1lbnQ9RTtKLnRyYW5zY2x1ZGU9UztuLmhhc0VsZW1lbnRUcmFuc2NsdWRlRGlyZWN0aXZlPUlhO3JldHVybiBKfWZ1bmN0aW9uIEQoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtiPGM7YisrKWFbYl09JGIoYVtiXSx7JCRpc29sYXRlU2NvcGU6ITB9KX1mdW5jdGlvbiBlYShiLGUsZixnLHAsbSxuKXtpZihlPT09cClyZXR1cm4gbnVsbDtwPW51bGw7aWYoYy5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHE7ZT1hLmdldChlK2QpO2Zvcih2YXIgdz0wLHM9ZS5sZW5ndGg7dzxzO3crKyl0cnl7cT1lW3ddLChnPT09dXx8Zz5xLnByaW9yaXR5KSYmLTEhPXEucmVzdHJpY3QuaW5kZXhPZihmKSYmKG0mJihxPSRiKHEseyQkc3RhcnQ6bSwkJGVuZDpufSkpLGIucHVzaChxKSxwPXEpfWNhdGNoKHkpe2woeSl9fXJldHVybiBwfWZ1bmN0aW9uIHYoYSxiKXt2YXIgYz1iLiRhdHRyLGQ9YS4kYXR0cixlPWEuJCRlbGVtZW50O3IoYSxmdW5jdGlvbihkLGUpe1wiJFwiIT1cbmUuY2hhckF0KDApJiYoYltlXSYmYltlXSE9PWQmJihkKz0oXCJzdHlsZVwiPT09ZT9cIjtcIjpcIiBcIikrYltlXSksYS4kc2V0KGUsZCwhMCxjW2VdKSl9KTtyKGIsZnVuY3Rpb24oYixmKXtcImNsYXNzXCI9PWY/KGJhKGUsYiksYVtcImNsYXNzXCJdPShhW1wiY2xhc3NcIl0/YVtcImNsYXNzXCJdK1wiIFwiOlwiXCIpK2IpOlwic3R5bGVcIj09Zj8oZS5hdHRyKFwic3R5bGVcIixlLmF0dHIoXCJzdHlsZVwiKStcIjtcIitiKSxhLnN0eWxlPShhLnN0eWxlP2Euc3R5bGUrXCI7XCI6XCJcIikrYik6XCIkXCI9PWYuY2hhckF0KDApfHxhLmhhc093blByb3BlcnR5KGYpfHwoYVtmXT1iLGRbZl09Y1tmXSl9KX1mdW5jdGlvbiB0ZShhLGIsYyxkLGUsZixnLGspe3ZhciBwPVtdLGwsbSx3PWJbMF0scz1hLnNoaWZ0KCkseT1FKHt9LHMse3RlbXBsYXRlVXJsOm51bGwsdHJhbnNjbHVkZTpudWxsLHJlcGxhY2U6bnVsbCwkJG9yaWdpbmFsRGlyZWN0aXZlOnN9KSxKPU4ocy50ZW1wbGF0ZVVybCk/cy50ZW1wbGF0ZVVybChiLGMpOnMudGVtcGxhdGVVcmw7XG5iLmVtcHR5KCk7bi5nZXQodC5nZXRUcnVzdGVkUmVzb3VyY2VVcmwoSikse2NhY2hlOnF9KS5zdWNjZXNzKGZ1bmN0aW9uKHEpe3ZhciBuLHQ7cT1XKHEpO2lmKHMucmVwbGFjZSl7cT1JYi50ZXN0KHEpP0EoJChxKSk6W107bj1xWzBdO2lmKDEhPXEubGVuZ3RofHwxIT09bi5ub2RlVHlwZSl0aHJvdyBqYShcInRwbHJ0XCIscy5uYW1lLEopO3E9eyRhdHRyOnt9fTtyYShkLGIsbik7dmFyIEI9Y2EobixbXSxxKTtUKHMuc2NvcGUpJiZEKEIpO2E9Qi5jb25jYXQoYSk7dihjLHEpfWVsc2Ugbj13LGIuaHRtbChxKTthLnVuc2hpZnQoeSk7bD1JKGEsbixjLGUsYixzLGYsZyxrKTtyKGQsZnVuY3Rpb24oYSxjKXthPT1uJiYoZFtjXT1iWzBdKX0pO2ZvcihtPU8oYlswXS5jaGlsZE5vZGVzLGUpO3AubGVuZ3RoOyl7cT1wLnNoaWZ0KCk7dD1wLnNoaWZ0KCk7dmFyIEs9cC5zaGlmdCgpLEM9cC5zaGlmdCgpLEI9YlswXTtpZih0IT09dyl7dmFyIFA9dC5jbGFzc05hbWU7ay5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZSYmXG5zLnJlcGxhY2V8fChCPUtiKG4pKTtyYShLLEEodCksQik7YmEoQShCKSxQKX10PWwudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ/TShxLGwudHJhbnNjbHVkZSxDKTpDO2wobSxxLEIsZCx0KX1wPW51bGx9KS5lcnJvcihmdW5jdGlvbihhLGIsYyxkKXt0aHJvdyBqYShcInRwbG9hZFwiLGQudXJsKTt9KTtyZXR1cm4gZnVuY3Rpb24oYSxiLGMsZCxlKXthPWU7cD8ocC5wdXNoKGIpLHAucHVzaChjKSxwLnB1c2goZCkscC5wdXNoKGEpKToobC50cmFuc2NsdWRlT25UaGlzRWxlbWVudCYmKGE9TShiLGwudHJhbnNjbHVkZSxlKSksbChtLGIsYyxkLGEpKX19ZnVuY3Rpb24gRihhLGIpe3ZhciBjPWIucHJpb3JpdHktYS5wcmlvcml0eTtyZXR1cm4gMCE9PWM/YzphLm5hbWUhPT1iLm5hbWU/YS5uYW1lPGIubmFtZT8tMToxOmEuaW5kZXgtYi5pbmRleH1mdW5jdGlvbiBmYihhLGIsYyxkKXtpZihiKXRocm93IGphKFwibXVsdGlkaXJcIixiLm5hbWUsYy5uYW1lLGEsaWEoZCkpO31mdW5jdGlvbiB4KGEsXG5jKXt2YXIgZD1iKGMsITApO2QmJmEucHVzaCh7cHJpb3JpdHk6MCxjb21waWxlOmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50KCkubGVuZ3RoO2ImJmJhKGEucGFyZW50KCksXCJuZy1iaW5kaW5nXCIpO3JldHVybiBmdW5jdGlvbihhLGMpe3ZhciBlPWMucGFyZW50KCksZj1lLmRhdGEoXCIkYmluZGluZ1wiKXx8W107Zi5wdXNoKGQpO2UuZGF0YShcIiRiaW5kaW5nXCIsZik7Ynx8YmEoZSxcIm5nLWJpbmRpbmdcIik7YS4kd2F0Y2goZCxmdW5jdGlvbihhKXtjWzBdLm5vZGVWYWx1ZT1hfSl9fX0pfWZ1bmN0aW9uIHooYSxiKXtpZihcInNyY2RvY1wiPT1iKXJldHVybiB0LkhUTUw7dmFyIGM9UGEoYSk7aWYoXCJ4bGlua0hyZWZcIj09Ynx8XCJGT1JNXCI9PWMmJlwiYWN0aW9uXCI9PWJ8fFwiSU1HXCIhPWMmJihcInNyY1wiPT1ifHxcIm5nU3JjXCI9PWIpKXJldHVybiB0LlJFU09VUkNFX1VSTH1mdW5jdGlvbiBTKGEsYyxkLGUpe3ZhciBmPWIoZCwhMCk7aWYoZil7aWYoXCJtdWx0aXBsZVwiPT09ZSYmXCJTRUxFQ1RcIj09PVxuUGEoYSkpdGhyb3cgamEoXCJzZWxtdWx0aVwiLGlhKGEpKTtjLnB1c2goe3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihjLGQsayl7ZD1rLiQkb2JzZXJ2ZXJzfHwoay4kJG9ic2VydmVycz17fSk7aWYoZy50ZXN0KGUpKXRocm93IGphKFwibm9kb21ldmVudHNcIik7aWYoZj1iKGtbZV0sITAseihhLGUpKSlrW2VdPWYoYyksKGRbZV18fChkW2VdPVtdKSkuJCRpbnRlcj0hMCwoay4kJG9ic2VydmVycyYmay4kJG9ic2VydmVyc1tlXS4kJHNjb3BlfHxjKS4kd2F0Y2goZixmdW5jdGlvbihhLGIpe1wiY2xhc3NcIj09PWUmJmEhPWI/ay4kdXBkYXRlQ2xhc3MoYSxiKTprLiRzZXQoZSxhKX0pfX19fSl9fWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iWzBdLGU9Yi5sZW5ndGgsZj1kLnBhcmVudE5vZGUsZyxrO2lmKGEpZm9yKGc9MCxrPWEubGVuZ3RoO2c8aztnKyspaWYoYVtnXT09ZCl7YVtnKytdPWM7az1nK2UtMTtmb3IodmFyIHA9YS5sZW5ndGg7ZzxcbnA7ZysrLGsrKylrPHA/YVtnXT1hW2tdOmRlbGV0ZSBhW2ddO2EubGVuZ3RoLT1lLTE7YnJlYWt9ZiYmZi5yZXBsYWNlQ2hpbGQoYyxkKTthPVguY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuYXBwZW5kQ2hpbGQoZCk7Y1tBLmV4cGFuZG9dPWRbQS5leHBhbmRvXTtkPTE7Zm9yKGU9Yi5sZW5ndGg7ZDxlO2QrKylmPWJbZF0sQShmKS5yZW1vdmUoKSxhLmFwcGVuZENoaWxkKGYpLGRlbGV0ZSBiW2RdO2JbMF09YztiLmxlbmd0aD0xfWZ1bmN0aW9uIHJjKGEsYil7cmV0dXJuIEUoZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShudWxsLGFyZ3VtZW50cyl9LGEsYil9dmFyIE9iPWZ1bmN0aW9uKGEsYil7dGhpcy4kJGVsZW1lbnQ9YTt0aGlzLiRhdHRyPWJ8fHt9fTtPYi5wcm90b3R5cGU9eyRub3JtYWxpemU6cWEsJGFkZENsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8YS5sZW5ndGgmJnkuYWRkQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCRyZW1vdmVDbGFzczpmdW5jdGlvbihhKXthJiYwPFxuYS5sZW5ndGgmJnkucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsYSl9LCR1cGRhdGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXNjKGEsYiksZD1zYyhiLGEpOzA9PT1jLmxlbmd0aD95LnJlbW92ZUNsYXNzKHRoaXMuJCRlbGVtZW50LGQpOjA9PT1kLmxlbmd0aD95LmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGMpOnkuc2V0Q2xhc3ModGhpcy4kJGVsZW1lbnQsYyxkKX0sJHNldDpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1vYyh0aGlzLiQkZWxlbWVudFswXSxhKTtlJiYodGhpcy4kJGVsZW1lbnQucHJvcChhLGIpLGQ9ZSk7dGhpc1thXT1iO2Q/dGhpcy4kYXR0clthXT1kOihkPXRoaXMuJGF0dHJbYV0pfHwodGhpcy4kYXR0clthXT1kPW5iKGEsXCItXCIpKTtlPVBhKHRoaXMuJCRlbGVtZW50KTtpZihcIkFcIj09PWUmJlwiaHJlZlwiPT09YXx8XCJJTUdcIj09PWUmJlwic3JjXCI9PT1hKXRoaXNbYV09Yj1LKGIsXCJzcmNcIj09PWEpOyExIT09YyYmKG51bGw9PT1ifHxiPT09dT90aGlzLiQkZWxlbWVudC5yZW1vdmVBdHRyKGQpOlxudGhpcy4kJGVsZW1lbnQuYXR0cihkLGIpKTsoYz10aGlzLiQkb2JzZXJ2ZXJzKSYmcihjW2FdLGZ1bmN0aW9uKGEpe3RyeXthKGIpfWNhdGNoKGMpe2woYyl9fSl9LCRvYnNlcnZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuJCRvYnNlcnZlcnN8fChjLiQkb2JzZXJ2ZXJzPXt9KSxlPWRbYV18fChkW2FdPVtdKTtlLnB1c2goYik7Si4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7ZS4kJGludGVyfHxiKGNbYV0pfSk7cmV0dXJuIGJ9fTt2YXIgc2E9Yi5zdGFydFN5bWJvbCgpLElhPWIuZW5kU3ltYm9sKCksVz1cInt7XCI9PXNhfHxcIn19XCI9PUlhP2dhOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL1xce1xcey9nLHNhKS5yZXBsYWNlKC99fS9nLElhKX0sVT0vXm5nQXR0cltBLVpdLztyZXR1cm4gQn1dfWZ1bmN0aW9uIHFhKGIpe3JldHVybiBhYihiLnJlcGxhY2Uod2UsXCJcIikpfWZ1bmN0aW9uIHNjKGIsYSl7dmFyIGM9XCJcIixkPWIuc3BsaXQoL1xccysvKSxlPWEuc3BsaXQoL1xccysvKSxcbmY9MDthOmZvcig7ZjxkLmxlbmd0aDtmKyspe2Zvcih2YXIgZz1kW2ZdLGg9MDtoPGUubGVuZ3RoO2grKylpZihnPT1lW2hdKWNvbnRpbnVlIGE7Yys9KDA8Yy5sZW5ndGg/XCIgXCI6XCJcIikrZ31yZXR1cm4gY31mdW5jdGlvbiBPZCgpe3ZhciBiPXt9LGE9L14oXFxTKykoXFxzK2FzXFxzKyhcXHcrKSk/JC87dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihhLGQpe0VhKGEsXCJjb250cm9sbGVyXCIpO1QoYSk/RShiLGEpOmJbYV09ZH07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJHdpbmRvd1wiLGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGUsZil7dmFyIGcsaCxrO0coZSkmJihnPWUubWF0Y2goYSksaD1nWzFdLGs9Z1szXSxlPWIuaGFzT3duUHJvcGVydHkoaCk/YltoXTpmYyhmLiRzY29wZSxoLCEwKXx8ZmMoZCxoLCEwKSxZYShlLGgsITApKTtnPWMuaW5zdGFudGlhdGUoZSxmKTtpZihrKXtpZighZnx8XCJvYmplY3RcIiE9PXR5cGVvZiBmLiRzY29wZSl0aHJvdyB6KFwiJGNvbnRyb2xsZXJcIikoXCJub3NjcFwiLFxuaHx8ZS5uYW1lLGspO2YuJHNjb3BlW2tdPWd9cmV0dXJuIGd9fV19ZnVuY3Rpb24gUGQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGIpe3JldHVybiBBKGIuZG9jdW1lbnQpfV19ZnVuY3Rpb24gUWQoKXt0aGlzLiRnZXQ9W1wiJGxvZ1wiLGZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbihhLGMpe2IuZXJyb3IuYXBwbHkoYixhcmd1bWVudHMpfX1dfWZ1bmN0aW9uIHRjKGIpe3ZhciBhPXt9LGMsZCxlO2lmKCFiKXJldHVybiBhO3IoYi5zcGxpdChcIlxcblwiKSxmdW5jdGlvbihiKXtlPWIuaW5kZXhPZihcIjpcIik7Yz14KCQoYi5zdWJzdHIoMCxlKSkpO2Q9JChiLnN1YnN0cihlKzEpKTtjJiYoYVtjXT1hW2NdP2FbY10rXCIsIFwiK2Q6ZCl9KTtyZXR1cm4gYX1mdW5jdGlvbiB1YyhiKXt2YXIgYT1UKGIpP2I6dTtyZXR1cm4gZnVuY3Rpb24oYyl7YXx8KGE9dGMoYikpO3JldHVybiBjP2FbeChjKV18fG51bGw6YX19ZnVuY3Rpb24gdmMoYixhLGMpe2lmKE4oYykpcmV0dXJuIGMoYixcbmEpO3IoYyxmdW5jdGlvbihjKXtiPWMoYixhKX0pO3JldHVybiBifWZ1bmN0aW9uIFRkKCl7dmFyIGI9L15cXHMqKFxcW3xcXHtbXlxce10pLyxhPS9bXFx9XFxdXVxccyokLyxjPS9eXFwpXFxdXFx9Jyw/XFxuLyxkPXtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCJ9LGU9dGhpcy5kZWZhdWx0cz17dHJhbnNmb3JtUmVzcG9uc2U6W2Z1bmN0aW9uKGQpe0coZCkmJihkPWQucmVwbGFjZShjLFwiXCIpLGIudGVzdChkKSYmYS50ZXN0KGQpJiYoZD1hYyhkKSkpO3JldHVybiBkfV0sdHJhbnNmb3JtUmVxdWVzdDpbZnVuY3Rpb24oYSl7cmV0dXJuIFQoYSkmJlwiW29iamVjdCBGaWxlXVwiIT09QmEuY2FsbChhKSYmXCJbb2JqZWN0IEJsb2JdXCIhPT1CYS5jYWxsKGEpP29hKGEpOmF9XSxoZWFkZXJzOntjb21tb246e0FjY2VwdDpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwifSxwb3N0OmhhKGQpLHB1dDpoYShkKSxwYXRjaDpoYShkKX0seHNyZkNvb2tpZU5hbWU6XCJYU1JGLVRPS0VOXCIsXG54c3JmSGVhZGVyTmFtZTpcIlgtWFNSRi1UT0tFTlwifSxmPXRoaXMuaW50ZXJjZXB0b3JzPVtdLGc9dGhpcy5yZXNwb25zZUludGVyY2VwdG9ycz1bXTt0aGlzLiRnZXQ9W1wiJGh0dHBCYWNrZW5kXCIsXCIkYnJvd3NlclwiLFwiJGNhY2hlRmFjdG9yeVwiLFwiJHJvb3RTY29wZVwiLFwiJHFcIixcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEsYixjLGQsbixxKXtmdW5jdGlvbiBwKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGQ9RSh7fSxhLHtkYXRhOnZjKGEuZGF0YSxhLmhlYWRlcnMsYy50cmFuc2Zvcm1SZXNwb25zZSl9KTtyZXR1cm4gMjAwPD1hLnN0YXR1cyYmMzAwPmEuc3RhdHVzP2Q6bi5yZWplY3QoZCl9dmFyIGM9e21ldGhvZDpcImdldFwiLHRyYW5zZm9ybVJlcXVlc3Q6ZS50cmFuc2Zvcm1SZXF1ZXN0LHRyYW5zZm9ybVJlc3BvbnNlOmUudHJhbnNmb3JtUmVzcG9uc2V9LGQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZS5oZWFkZXJzLGM9RSh7fSxhLmhlYWRlcnMpLGQsZixiPUUoe30sYi5jb21tb24sYlt4KGEubWV0aG9kKV0pO1xuYTpmb3IoZCBpbiBiKXthPXgoZCk7Zm9yKGYgaW4gYylpZih4KGYpPT09YSljb250aW51ZSBhO2NbZF09YltkXX0oZnVuY3Rpb24oYSl7dmFyIGI7cihhLGZ1bmN0aW9uKGMsZCl7TihjKSYmKGI9YygpLG51bGwhPWI/YVtkXT1iOmRlbGV0ZSBhW2RdKX0pfSkoYyk7cmV0dXJuIGN9KGEpO0UoYyxhKTtjLmhlYWRlcnM9ZDtjLm1ldGhvZD1MYShjLm1ldGhvZCk7dmFyIGY9W2Z1bmN0aW9uKGEpe2Q9YS5oZWFkZXJzO3ZhciBjPXZjKGEuZGF0YSx1YyhkKSxhLnRyYW5zZm9ybVJlcXVlc3QpO0YoYykmJnIoZCxmdW5jdGlvbihhLGIpe1wiY29udGVudC10eXBlXCI9PT14KGIpJiZkZWxldGUgZFtiXX0pO0YoYS53aXRoQ3JlZGVudGlhbHMpJiYhRihlLndpdGhDcmVkZW50aWFscykmJihhLndpdGhDcmVkZW50aWFscz1lLndpdGhDcmVkZW50aWFscyk7cmV0dXJuIHMoYSxjLGQpLnRoZW4oYixiKX0sdV0sZz1uLndoZW4oYyk7Zm9yKHIodCxmdW5jdGlvbihhKXsoYS5yZXF1ZXN0fHxhLnJlcXVlc3RFcnJvcikmJlxuZi51bnNoaWZ0KGEucmVxdWVzdCxhLnJlcXVlc3RFcnJvcik7KGEucmVzcG9uc2V8fGEucmVzcG9uc2VFcnJvcikmJmYucHVzaChhLnJlc3BvbnNlLGEucmVzcG9uc2VFcnJvcil9KTtmLmxlbmd0aDspe2E9Zi5zaGlmdCgpO3ZhciBoPWYuc2hpZnQoKSxnPWcudGhlbihhLGgpfWcuc3VjY2Vzcz1mdW5jdGlvbihhKXtnLnRoZW4oZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGMpfSk7cmV0dXJuIGd9O2cuZXJyb3I9ZnVuY3Rpb24oYSl7Zy50aGVuKG51bGwsZnVuY3Rpb24oYil7YShiLmRhdGEsYi5zdGF0dXMsYi5oZWFkZXJzLGMpfSk7cmV0dXJuIGd9O3JldHVybiBnfWZ1bmN0aW9uIHMoYyxmLGcpe2Z1bmN0aW9uIG0oYSxiLGMsZSl7QyYmKDIwMDw9YSYmMzAwPmE/Qy5wdXQoQSxbYSxiLHRjKGMpLGVdKTpDLnJlbW92ZShBKSk7cShiLGEsYyxlKTtkLiQkcGhhc2V8fGQuJGFwcGx5KCl9ZnVuY3Rpb24gcShhLGIsZCxlKXtiPU1hdGgubWF4KGIsMCk7KDIwMDw9XG5iJiYzMDA+Yj90LnJlc29sdmU6dC5yZWplY3QpKHtkYXRhOmEsc3RhdHVzOmIsaGVhZGVyczp1YyhkKSxjb25maWc6YyxzdGF0dXNUZXh0OmV9KX1mdW5jdGlvbiBzKCl7dmFyIGE9VGEocC5wZW5kaW5nUmVxdWVzdHMsYyk7LTEhPT1hJiZwLnBlbmRpbmdSZXF1ZXN0cy5zcGxpY2UoYSwxKX12YXIgdD1uLmRlZmVyKCkscj10LnByb21pc2UsQyxJLEE9SihjLnVybCxjLnBhcmFtcyk7cC5wZW5kaW5nUmVxdWVzdHMucHVzaChjKTtyLnRoZW4ocyxzKTshYy5jYWNoZSYmIWUuY2FjaGV8fCghMT09PWMuY2FjaGV8fFwiR0VUXCIhPT1jLm1ldGhvZCYmXCJKU09OUFwiIT09Yy5tZXRob2QpfHwoQz1UKGMuY2FjaGUpP2MuY2FjaGU6VChlLmNhY2hlKT9lLmNhY2hlOncpO2lmKEMpaWYoST1DLmdldChBKSxEKEkpKXtpZihJJiZOKEkudGhlbikpcmV0dXJuIEkudGhlbihzLHMpLEk7TChJKT9xKElbMV0sSVswXSxoYShJWzJdKSxJWzNdKTpxKEksMjAwLHt9LFwiT0tcIil9ZWxzZSBDLnB1dChBLHIpO0YoSSkmJlxuKChJPVBiKGMudXJsKT9iLmNvb2tpZXMoKVtjLnhzcmZDb29raWVOYW1lfHxlLnhzcmZDb29raWVOYW1lXTp1KSYmKGdbYy54c3JmSGVhZGVyTmFtZXx8ZS54c3JmSGVhZGVyTmFtZV09SSksYShjLm1ldGhvZCxBLGYsbSxnLGMudGltZW91dCxjLndpdGhDcmVkZW50aWFscyxjLnJlc3BvbnNlVHlwZSkpO3JldHVybiByfWZ1bmN0aW9uIEooYSxiKXtpZighYilyZXR1cm4gYTt2YXIgYz1bXTtTYyhiLGZ1bmN0aW9uKGEsYil7bnVsbD09PWF8fEYoYSl8fChMKGEpfHwoYT1bYV0pLHIoYSxmdW5jdGlvbihhKXtUKGEpJiYoYT12YShhKT9hLnRvSVNPU3RyaW5nKCk6b2EoYSkpO2MucHVzaChEYShiKStcIj1cIitEYShhKSl9KSl9KTswPGMubGVuZ3RoJiYoYSs9KC0xPT1hLmluZGV4T2YoXCI/XCIpP1wiP1wiOlwiJlwiKStjLmpvaW4oXCImXCIpKTtyZXR1cm4gYX12YXIgdz1jKFwiJGh0dHBcIiksdD1bXTtyKGYsZnVuY3Rpb24oYSl7dC51bnNoaWZ0KEcoYSk/cS5nZXQoYSk6cS5pbnZva2UoYSkpfSk7cihnLFxuZnVuY3Rpb24oYSxiKXt2YXIgYz1HKGEpP3EuZ2V0KGEpOnEuaW52b2tlKGEpO3Quc3BsaWNlKGIsMCx7cmVzcG9uc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi53aGVuKGEpKX0scmVzcG9uc2VFcnJvcjpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLnJlamVjdChhKSl9fSl9KTtwLnBlbmRpbmdSZXF1ZXN0cz1bXTsoZnVuY3Rpb24oYSl7cihhcmd1bWVudHMsZnVuY3Rpb24oYSl7cFthXT1mdW5jdGlvbihiLGMpe3JldHVybiBwKEUoY3x8e30se21ldGhvZDphLHVybDpifSkpfX0pfSkoXCJnZXRcIixcImRlbGV0ZVwiLFwiaGVhZFwiLFwianNvbnBcIik7KGZ1bmN0aW9uKGEpe3IoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3BbYV09ZnVuY3Rpb24oYixjLGQpe3JldHVybiBwKEUoZHx8e30se21ldGhvZDphLHVybDpiLGRhdGE6Y30pKX19KX0pKFwicG9zdFwiLFwicHV0XCIsXCJwYXRjaFwiKTtwLmRlZmF1bHRzPWU7cmV0dXJuIHB9XX1mdW5jdGlvbiB4ZShiKXtpZig4Pj1SJiYoIWIubWF0Y2goL14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pKXx8XG4hVy5YTUxIdHRwUmVxdWVzdCkpcmV0dXJuIG5ldyBXLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtpZihXLlhNTEh0dHBSZXF1ZXN0KXJldHVybiBuZXcgVy5YTUxIdHRwUmVxdWVzdDt0aHJvdyB6KFwiJGh0dHBCYWNrZW5kXCIpKFwibm94aHJcIik7fWZ1bmN0aW9uIFVkKCl7dGhpcy4kZ2V0PVtcIiRicm93c2VyXCIsXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEsYyl7cmV0dXJuIHllKGIseGUsYi5kZWZlcixhLmFuZ3VsYXIuY2FsbGJhY2tzLGNbMF0pfV19ZnVuY3Rpb24geWUoYixhLGMsZCxlKXtmdW5jdGlvbiBmKGEsYixjKXt2YXIgZj1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksZz1udWxsO2YudHlwZT1cInRleHQvamF2YXNjcmlwdFwiO2Yuc3JjPWE7Zi5hc3luYz0hMDtnPWZ1bmN0aW9uKGEpe2JiKGYsXCJsb2FkXCIsZyk7YmIoZixcImVycm9yXCIsZyk7ZS5ib2R5LnJlbW92ZUNoaWxkKGYpO2Y9bnVsbDt2YXIgaD0tMSxzPVwidW5rbm93blwiO2EmJihcImxvYWRcIiE9PVxuYS50eXBlfHxkW2JdLmNhbGxlZHx8KGE9e3R5cGU6XCJlcnJvclwifSkscz1hLnR5cGUsaD1cImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCk7YyYmYyhoLHMpfTtzYihmLFwibG9hZFwiLGcpO3NiKGYsXCJlcnJvclwiLGcpOzg+PVImJihmLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe0coZi5yZWFkeVN0YXRlKSYmL2xvYWRlZHxjb21wbGV0ZS8udGVzdChmLnJlYWR5U3RhdGUpJiYoZi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxnKHt0eXBlOlwibG9hZFwifSkpfSk7ZS5ib2R5LmFwcGVuZENoaWxkKGYpO3JldHVybiBnfXZhciBnPS0xO3JldHVybiBmdW5jdGlvbihlLGssbSxsLG4scSxwLHMpe2Z1bmN0aW9uIEooKXt0PWc7SyYmSygpO0ImJkIuYWJvcnQoKX1mdW5jdGlvbiB3KGEsZCxlLGYsZyl7TyYmYy5jYW5jZWwoTyk7Sz1CPW51bGw7MD09PWQmJihkPWU/MjAwOlwiZmlsZVwiPT14YShrKS5wcm90b2NvbD80MDQ6MCk7YSgxMjIzPT09ZD8yMDQ6ZCxlLGYsZ3x8XCJcIik7Yi4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0KHYpfVxudmFyIHQ7Yi4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50KCk7az1rfHxiLnVybCgpO2lmKFwianNvbnBcIj09eChlKSl7dmFyIHk9XCJfXCIrKGQuY291bnRlcisrKS50b1N0cmluZygzNik7ZFt5XT1mdW5jdGlvbihhKXtkW3ldLmRhdGE9YTtkW3ldLmNhbGxlZD0hMH07dmFyIEs9ZihrLnJlcGxhY2UoXCJKU09OX0NBTExCQUNLXCIsXCJhbmd1bGFyLmNhbGxiYWNrcy5cIit5KSx5LGZ1bmN0aW9uKGEsYil7dyhsLGEsZFt5XS5kYXRhLFwiXCIsYik7ZFt5XT12fSl9ZWxzZXt2YXIgQj1hKGUpO0Iub3BlbihlLGssITApO3IobixmdW5jdGlvbihhLGIpe0QoYSkmJkIuc2V0UmVxdWVzdEhlYWRlcihiLGEpfSk7Qi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihCJiY0PT1CLnJlYWR5U3RhdGUpe3ZhciBhPW51bGwsYj1udWxsLGM9XCJcIjt0IT09ZyYmKGE9Qi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxiPVwicmVzcG9uc2VcImluIEI/Qi5yZXNwb25zZTpCLnJlc3BvbnNlVGV4dCk7dD09PWcmJlxuMTA+Unx8KGM9Qi5zdGF0dXNUZXh0KTt3KGwsdHx8Qi5zdGF0dXMsYixhLGMpfX07cCYmKEIud2l0aENyZWRlbnRpYWxzPSEwKTtpZihzKXRyeXtCLnJlc3BvbnNlVHlwZT1zfWNhdGNoKGJhKXtpZihcImpzb25cIiE9PXMpdGhyb3cgYmE7fUIuc2VuZChtfHxudWxsKX1pZigwPHEpdmFyIE89YyhKLHEpO2Vsc2UgcSYmTihxLnRoZW4pJiZxLnRoZW4oSil9fWZ1bmN0aW9uIFJkKCl7dmFyIGI9XCJ7e1wiLGE9XCJ9fVwiO3RoaXMuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KGI9YSx0aGlzKTpifTt0aGlzLmVuZFN5bWJvbD1mdW5jdGlvbihiKXtyZXR1cm4gYj8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkc2NlXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGYoZixtLGwpe2Zvcih2YXIgbixxLHA9MCxzPVtdLEo9Zi5sZW5ndGgsdz0hMSx0PVtdO3A8SjspLTEhPShuPWYuaW5kZXhPZihiLHApKSYmLTEhPShxPWYuaW5kZXhPZihhLFxubitnKSk/KHAhPW4mJnMucHVzaChmLnN1YnN0cmluZyhwLG4pKSxzLnB1c2gocD1jKHc9Zi5zdWJzdHJpbmcobitnLHEpKSkscC5leHA9dyxwPXEraCx3PSEwKToocCE9SiYmcy5wdXNoKGYuc3Vic3RyaW5nKHApKSxwPUopOyhKPXMubGVuZ3RoKXx8KHMucHVzaChcIlwiKSxKPTEpO2lmKGwmJjE8cy5sZW5ndGgpdGhyb3cgd2MoXCJub2NvbmNhdFwiLGYpO2lmKCFtfHx3KXJldHVybiB0Lmxlbmd0aD1KLHA9ZnVuY3Rpb24oYSl7dHJ5e2Zvcih2YXIgYj0wLGM9SixnO2I8YztiKyspe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGc9c1tiXSkpaWYoZz1nKGEpLGc9bD9lLmdldFRydXN0ZWQobCxnKTplLnZhbHVlT2YoZyksbnVsbD09ZylnPVwiXCI7ZWxzZSBzd2l0Y2godHlwZW9mIGcpe2Nhc2UgXCJzdHJpbmdcIjpicmVhaztjYXNlIFwibnVtYmVyXCI6Zz1cIlwiK2c7YnJlYWs7ZGVmYXVsdDpnPW9hKGcpfXRbYl09Z31yZXR1cm4gdC5qb2luKFwiXCIpfWNhdGNoKGgpe2E9d2MoXCJpbnRlcnJcIixmLGgudG9TdHJpbmcoKSksXG5kKGEpfX0scC5leHA9ZixwLnBhcnRzPXMscH12YXIgZz1iLmxlbmd0aCxoPWEubGVuZ3RoO2Yuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYn07Zi5lbmRTeW1ib2w9ZnVuY3Rpb24oKXtyZXR1cm4gYX07cmV0dXJuIGZ9XX1mdW5jdGlvbiBTZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkd2luZG93XCIsXCIkcVwiLGZ1bmN0aW9uKGIsYSxjKXtmdW5jdGlvbiBkKGQsZyxoLGspe3ZhciBtPWEuc2V0SW50ZXJ2YWwsbD1hLmNsZWFySW50ZXJ2YWwsbj1jLmRlZmVyKCkscT1uLnByb21pc2UscD0wLHM9RChrKSYmIWs7aD1EKGgpP2g6MDtxLnRoZW4obnVsbCxudWxsLGQpO3EuJCRpbnRlcnZhbElkPW0oZnVuY3Rpb24oKXtuLm5vdGlmeShwKyspOzA8aCYmcD49aCYmKG4ucmVzb2x2ZShwKSxsKHEuJCRpbnRlcnZhbElkKSxkZWxldGUgZVtxLiQkaW50ZXJ2YWxJZF0pO3N8fGIuJGFwcGx5KCl9LGcpO2VbcS4kJGludGVydmFsSWRdPW47cmV0dXJuIHF9dmFyIGU9e307ZC5jYW5jZWw9XG5mdW5jdGlvbihiKXtyZXR1cm4gYiYmYi4kJGludGVydmFsSWQgaW4gZT8oZVtiLiQkaW50ZXJ2YWxJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksYS5jbGVhckludGVydmFsKGIuJCRpbnRlcnZhbElkKSxkZWxldGUgZVtiLiQkaW50ZXJ2YWxJZF0sITApOiExfTtyZXR1cm4gZH1dfWZ1bmN0aW9uIGFkKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJue2lkOlwiZW4tdXNcIixOVU1CRVJfRk9STUFUUzp7REVDSU1BTF9TRVA6XCIuXCIsR1JPVVBfU0VQOlwiLFwiLFBBVFRFUk5TOlt7bWluSW50OjEsbWluRnJhYzowLG1heEZyYWM6Myxwb3NQcmU6XCJcIixwb3NTdWY6XCJcIixuZWdQcmU6XCItXCIsbmVnU3VmOlwiXCIsZ1NpemU6MyxsZ1NpemU6M30se21pbkludDoxLG1pbkZyYWM6MixtYXhGcmFjOjIscG9zUHJlOlwiXFx1MDBhNFwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIihcXHUwMGE0XCIsbmVnU3VmOlwiKVwiLGdTaXplOjMsbGdTaXplOjN9XSxDVVJSRU5DWV9TWU06XCIkXCJ9LERBVEVUSU1FX0ZPUk1BVFM6e01PTlRIOlwiSmFudWFyeSBGZWJydWFyeSBNYXJjaCBBcHJpbCBNYXkgSnVuZSBKdWx5IEF1Z3VzdCBTZXB0ZW1iZXIgT2N0b2JlciBOb3ZlbWJlciBEZWNlbWJlclwiLnNwbGl0KFwiIFwiKSxcblNIT1JUTU9OVEg6XCJKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlY1wiLnNwbGl0KFwiIFwiKSxEQVk6XCJTdW5kYXkgTW9uZGF5IFR1ZXNkYXkgV2VkbmVzZGF5IFRodXJzZGF5IEZyaWRheSBTYXR1cmRheVwiLnNwbGl0KFwiIFwiKSxTSE9SVERBWTpcIlN1biBNb24gVHVlIFdlZCBUaHUgRnJpIFNhdFwiLnNwbGl0KFwiIFwiKSxBTVBNUzpbXCJBTVwiLFwiUE1cIl0sbWVkaXVtOlwiTU1NIGQsIHkgaDptbTpzcyBhXCIsXCJzaG9ydFwiOlwiTS9kL3l5IGg6bW0gYVwiLGZ1bGxEYXRlOlwiRUVFRSwgTU1NTSBkLCB5XCIsbG9uZ0RhdGU6XCJNTU1NIGQsIHlcIixtZWRpdW1EYXRlOlwiTU1NIGQsIHlcIixzaG9ydERhdGU6XCJNL2QveXlcIixtZWRpdW1UaW1lOlwiaDptbTpzcyBhXCIsc2hvcnRUaW1lOlwiaDptbSBhXCJ9LHBsdXJhbENhdDpmdW5jdGlvbihiKXtyZXR1cm4gMT09PWI/XCJvbmVcIjpcIm90aGVyXCJ9fX19ZnVuY3Rpb24gUWIoYil7Yj1iLnNwbGl0KFwiL1wiKTtmb3IodmFyIGE9Yi5sZW5ndGg7YS0tOyliW2FdPVxubWIoYlthXSk7cmV0dXJuIGIuam9pbihcIi9cIil9ZnVuY3Rpb24geGMoYixhLGMpe2I9eGEoYixjKTthLiQkcHJvdG9jb2w9Yi5wcm90b2NvbDthLiQkaG9zdD1iLmhvc3RuYW1lO2EuJCRwb3J0PVUoYi5wb3J0KXx8emVbYi5wcm90b2NvbF18fG51bGx9ZnVuY3Rpb24geWMoYixhLGMpe3ZhciBkPVwiL1wiIT09Yi5jaGFyQXQoMCk7ZCYmKGI9XCIvXCIrYik7Yj14YShiLGMpO2EuJCRwYXRoPWRlY29kZVVSSUNvbXBvbmVudChkJiZcIi9cIj09PWIucGF0aG5hbWUuY2hhckF0KDApP2IucGF0aG5hbWUuc3Vic3RyaW5nKDEpOmIucGF0aG5hbWUpO2EuJCRzZWFyY2g9Y2MoYi5zZWFyY2gpO2EuJCRoYXNoPWRlY29kZVVSSUNvbXBvbmVudChiLmhhc2gpO2EuJCRwYXRoJiZcIi9cIiE9YS4kJHBhdGguY2hhckF0KDApJiYoYS4kJHBhdGg9XCIvXCIrYS4kJHBhdGgpfWZ1bmN0aW9uIHRhKGIsYSl7aWYoMD09PWEuaW5kZXhPZihiKSlyZXR1cm4gYS5zdWJzdHIoYi5sZW5ndGgpfWZ1bmN0aW9uIEdhKGIpe3ZhciBhPVxuYi5pbmRleE9mKFwiI1wiKTtyZXR1cm4tMT09YT9iOmIuc3Vic3RyKDAsYSl9ZnVuY3Rpb24gUmIoYil7cmV0dXJuIGIuc3Vic3RyKDAsR2EoYikubGFzdEluZGV4T2YoXCIvXCIpKzEpfWZ1bmN0aW9uIHpjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO2E9YXx8XCJcIjt2YXIgYz1SYihiKTt4YyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGEpe3ZhciBlPXRhKGMsYSk7aWYoIUcoZSkpdGhyb3cgU2IoXCJpcHRocHJmeFwiLGEsYyk7eWMoZSx0aGlzLGIpO3RoaXMuJCRwYXRofHwodGhpcy4kJHBhdGg9XCIvXCIpO3RoaXMuJCRjb21wb3NlKCl9O3RoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGE9Q2IodGhpcy4kJHNlYXJjaCksYj10aGlzLiQkaGFzaD9cIiNcIittYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPVFiKHRoaXMuJCRwYXRoKSsoYT9cIj9cIithOlwiXCIpK2I7dGhpcy4kJGFic1VybD1jK3RoaXMuJCR1cmwuc3Vic3RyKDEpfTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGQsXG5lKXt2YXIgZixnOyhmPXRhKGIsZCkpIT09dT8oZz1mLGc9KGY9dGEoYSxmKSkhPT11P2MrKHRhKFwiL1wiLGYpfHxmKTpiK2cpOihmPXRhKGMsZCkpIT09dT9nPWMrZjpjPT1kK1wiL1wiJiYoZz1jKTtnJiZ0aGlzLiQkcGFyc2UoZyk7cmV0dXJuISFnfX1mdW5jdGlvbiBUYihiLGEpe3ZhciBjPVJiKGIpO3hjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oZCl7dmFyIGU9dGEoYixkKXx8dGEoYyxkKSxlPVwiI1wiPT1lLmNoYXJBdCgwKT90YShhLGUpOnRoaXMuJCRodG1sNT9lOlwiXCI7aWYoIUcoZSkpdGhyb3cgU2IoXCJpaHNocHJmeFwiLGQsYSk7eWMoZSx0aGlzLGIpO2Q9dGhpcy4kJHBhdGg7dmFyIGY9L15cXC9bQS1aXTooXFwvLiopLzswPT09ZS5pbmRleE9mKGIpJiYoZT1lLnJlcGxhY2UoYixcIlwiKSk7Zi5leGVjKGUpfHwoZD0oZT1mLmV4ZWMoZCkpP2VbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPUNiKHRoaXMuJCRzZWFyY2gpLFxuZT10aGlzLiQkaGFzaD9cIiNcIittYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPVFiKHRoaXMuJCRwYXRoKSsoYz9cIj9cIitjOlwiXCIpK2U7dGhpcy4kJGFic1VybD1iKyh0aGlzLiQkdXJsP2ErdGhpcy4kJHVybDpcIlwiKX07dGhpcy4kJHBhcnNlTGlua1VybD1mdW5jdGlvbihhLGMpe3JldHVybiBHYShiKT09R2EoYSk/KHRoaXMuJCRwYXJzZShhKSwhMCk6ITF9fWZ1bmN0aW9uIEFjKGIsYSl7dGhpcy4kJGh0bWw1PSEwO1RiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYz1SYihiKTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGQsZSl7dmFyIGYsZztiPT1HYShkKT9mPWQ6KGc9dGEoYyxkKSk/Zj1iK2ErZzpjPT09ZCtcIi9cIiYmKGY9Yyk7ZiYmdGhpcy4kJHBhcnNlKGYpO3JldHVybiEhZn07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYz1DYih0aGlzLiQkc2VhcmNoKSxlPXRoaXMuJCRoYXNoP1wiI1wiK21iKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9UWIodGhpcy4kJHBhdGgpK1xuKGM/XCI/XCIrYzpcIlwiKStlO3RoaXMuJCRhYnNVcmw9YithK3RoaXMuJCR1cmx9fWZ1bmN0aW9uIHRiKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzW2JdfX1mdW5jdGlvbiBCYyhiLGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihGKGMpKXJldHVybiB0aGlzW2JdO3RoaXNbYl09YShjKTt0aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfX1mdW5jdGlvbiBWZCgpe3ZhciBiPVwiXCIsYT0hMTt0aGlzLmhhc2hQcmVmaXg9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLmh0bWw1TW9kZT1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLGZ1bmN0aW9uKGMsZCxlLGYpe2Z1bmN0aW9uIGcoYSl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGguYWJzVXJsKCksYSl9dmFyIGgsaz1kLmJhc2VIcmVmKCksbT1kLnVybCgpO1xuYT8oaz1tLnN1YnN0cmluZygwLG0uaW5kZXhPZihcIi9cIixtLmluZGV4T2YoXCIvL1wiKSsyKSkrKGt8fFwiL1wiKSxlPWUuaGlzdG9yeT96YzpBYyk6KGs9R2EobSksZT1UYik7aD1uZXcgZShrLFwiI1wiK2IpO2guJCRwYXJzZUxpbmtVcmwobSxtKTt2YXIgbD0vXlxccyooamF2YXNjcmlwdHxtYWlsdG8pOi9pO2Yub24oXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2lmKCFhLmN0cmxLZXkmJiFhLm1ldGFLZXkmJjIhPWEud2hpY2gpe2Zvcih2YXIgYj1BKGEudGFyZ2V0KTtcImFcIiE9PXgoYlswXS5ub2RlTmFtZSk7KWlmKGJbMF09PT1mWzBdfHwhKGI9Yi5wYXJlbnQoKSlbMF0pcmV0dXJuO3ZhciBlPWIucHJvcChcImhyZWZcIiksZz1iLmF0dHIoXCJocmVmXCIpfHxiLmF0dHIoXCJ4bGluazpocmVmXCIpO1QoZSkmJlwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PWUudG9TdHJpbmcoKSYmKGU9eGEoZS5hbmltVmFsKS5ocmVmKTtsLnRlc3QoZSl8fCghZXx8KGIuYXR0cihcInRhcmdldFwiKXx8YS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl8fFxuIWguJCRwYXJzZUxpbmtVcmwoZSxnKSl8fChhLnByZXZlbnREZWZhdWx0KCksaC5hYnNVcmwoKSE9ZC51cmwoKSYmKGMuJGFwcGx5KCksVy5hbmd1bGFyW1wiZmYtNjg0MjA4LXByZXZlbnREZWZhdWx0XCJdPSEwKSl9fSk7aC5hYnNVcmwoKSE9bSYmZC51cmwoaC5hYnNVcmwoKSwhMCk7ZC5vblVybENoYW5nZShmdW5jdGlvbihhKXtoLmFic1VybCgpIT1hJiYoYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7dmFyIGI9aC5hYnNVcmwoKTtoLiQkcGFyc2UoYSk7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixhLGIpLmRlZmF1bHRQcmV2ZW50ZWQ/KGguJCRwYXJzZShiKSxkLnVybChiKSk6ZyhiKX0pLGMuJCRwaGFzZXx8Yy4kZGlnZXN0KCkpfSk7dmFyIG49MDtjLiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPWQudXJsKCksYj1oLiQkcmVwbGFjZTtuJiZhPT1oLmFic1VybCgpfHwobisrLGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsXG5oLmFic1VybCgpLGEpLmRlZmF1bHRQcmV2ZW50ZWQ/aC4kJHBhcnNlKGEpOihkLnVybChoLmFic1VybCgpLGIpLGcoYSkpfSkpO2guJCRyZXBsYWNlPSExO3JldHVybiBufSk7cmV0dXJuIGh9XX1mdW5jdGlvbiBXZCgpe3ZhciBiPSEwLGE9dGhpczt0aGlzLmRlYnVnRW5hYmxlZD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXthIGluc3RhbmNlb2YgRXJyb3ImJihhLnN0YWNrP2E9YS5tZXNzYWdlJiYtMT09PWEuc3RhY2suaW5kZXhPZihhLm1lc3NhZ2UpP1wiRXJyb3I6IFwiK2EubWVzc2FnZStcIlxcblwiK2Euc3RhY2s6YS5zdGFjazphLnNvdXJjZVVSTCYmKGE9YS5tZXNzYWdlK1wiXFxuXCIrYS5zb3VyY2VVUkwrXCI6XCIrYS5saW5lKSk7cmV0dXJuIGF9ZnVuY3Rpb24gZShhKXt2YXIgYj1jLmNvbnNvbGV8fHt9LGU9YlthXXx8Yi5sb2d8fHY7YT0hMTt0cnl7YT0hIWUuYXBwbHl9Y2F0Y2goayl7fXJldHVybiBhP1xuZnVuY3Rpb24oKXt2YXIgYT1bXTtyKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthLnB1c2goZChiKSl9KTtyZXR1cm4gZS5hcHBseShiLGEpfTpmdW5jdGlvbihhLGIpe2UoYSxudWxsPT1iP1wiXCI6Yil9fXJldHVybntsb2c6ZShcImxvZ1wiKSxpbmZvOmUoXCJpbmZvXCIpLHdhcm46ZShcIndhcm5cIiksZXJyb3I6ZShcImVycm9yXCIpLGRlYnVnOmZ1bmN0aW9uKCl7dmFyIGM9ZShcImRlYnVnXCIpO3JldHVybiBmdW5jdGlvbigpe2ImJmMuYXBwbHkoYSxhcmd1bWVudHMpfX0oKX19XX1mdW5jdGlvbiBrYShiLGEpe2lmKFwiX19kZWZpbmVHZXR0ZXJfX1wiPT09Ynx8XCJfX2RlZmluZVNldHRlcl9fXCI9PT1ifHxcIl9fbG9va3VwR2V0dGVyX19cIj09PWJ8fFwiX19sb29rdXBTZXR0ZXJfX1wiPT09Ynx8XCJfX3Byb3RvX19cIj09PWIpdGhyb3cgbGEoXCJpc2VjZmxkXCIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbWEoYixhKXtpZihiKXtpZihiLmNvbnN0cnVjdG9yPT09Yil0aHJvdyBsYShcImlzZWNmblwiLGEpO2lmKGIuZG9jdW1lbnQmJlxuYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbCl0aHJvdyBsYShcImlzZWN3aW5kb3dcIixhKTtpZihiLmNoaWxkcmVuJiYoYi5ub2RlTmFtZXx8Yi5wcm9wJiZiLmF0dHImJmIuZmluZCkpdGhyb3cgbGEoXCJpc2VjZG9tXCIsYSk7aWYoYj09PU9iamVjdCl0aHJvdyBsYShcImlzZWNvYmpcIixhKTt9cmV0dXJuIGJ9ZnVuY3Rpb24gdWIoYixhLGMsZCxlKXttYShiLGQpO2U9ZXx8e307YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGYsZz0wOzE8YS5sZW5ndGg7ZysrKXtmPWthKGEuc2hpZnQoKSxkKTt2YXIgaD1tYShiW2ZdLGQpO2h8fChoPXt9LGJbZl09aCk7Yj1oO2IudGhlbiYmZS51bndyYXBQcm9taXNlcyYmKHlhKGQpLFwiJCR2XCJpbiBifHxmdW5jdGlvbihhKXthLnRoZW4oZnVuY3Rpb24oYil7YS4kJHY9Yn0pfShiKSxiLiQkdj09PXUmJihiLiQkdj17fSksYj1iLiQkdil9Zj1rYShhLnNoaWZ0KCksZCk7bWEoYltmXSxkKTtyZXR1cm4gYltmXT1jfWZ1bmN0aW9uIFFhKGIpe3JldHVyblwiY29uc3RydWN0b3JcIj09XG5ifWZ1bmN0aW9uIENjKGIsYSxjLGQsZSxmLGcpe2thKGIsZik7a2EoYSxmKTtrYShjLGYpO2thKGQsZik7a2EoZSxmKTt2YXIgaD1mdW5jdGlvbihhKXtyZXR1cm4gbWEoYSxmKX0saz1nLmV4cGVuc2l2ZUNoZWNrcyxtPWt8fFFhKGIpP2g6Z2EsbD1rfHxRYShhKT9oOmdhLG49a3x8UWEoYyk/aDpnYSxxPWt8fFFhKGQpP2g6Z2EscD1rfHxRYShlKT9oOmdhO3JldHVybiBnLnVud3JhcFByb21pc2VzP2Z1bmN0aW9uKGcsaCl7dmFyIGs9aCYmaC5oYXNPd25Qcm9wZXJ0eShiKT9oOmcsdDtpZihudWxsPT1rKXJldHVybiBrOyhrPW0oa1tiXSkpJiZrLnRoZW4mJih5YShmKSxcIiQkdlwiaW4ga3x8KHQ9ayx0LiQkdj11LHQudGhlbihmdW5jdGlvbihhKXt0LiQkdj1tKGEpfSkpLGs9bShrLiQkdikpO2lmKCFhKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHU7KGs9bChrW2FdKSkmJmsudGhlbiYmKHlhKGYpLFwiJCR2XCJpbiBrfHwodD1rLHQuJCR2PXUsdC50aGVuKGZ1bmN0aW9uKGEpe3QuJCR2PVxubChhKX0pKSxrPWwoay4kJHYpKTtpZighYylyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiB1OyhrPW4oa1tjXSkpJiZrLnRoZW4mJih5YShmKSxcIiQkdlwiaW4ga3x8KHQ9ayx0LiQkdj11LHQudGhlbihmdW5jdGlvbihhKXt0LiQkdj1uKGEpfSkpLGs9bihrLiQkdikpO2lmKCFkKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHU7KGs9cShrW2RdKSkmJmsudGhlbiYmKHlhKGYpLFwiJCR2XCJpbiBrfHwodD1rLHQuJCR2PXUsdC50aGVuKGZ1bmN0aW9uKGEpe3QuJCR2PXEoYSl9KSksaz1xKGsuJCR2KSk7aWYoIWUpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gdTsoaz1wKGtbZV0pKSYmay50aGVuJiYoeWEoZiksXCIkJHZcImluIGt8fCh0PWssdC4kJHY9dSx0LnRoZW4oZnVuY3Rpb24oYSl7dC4kJHY9cChhKX0pKSxrPXAoay4kJHYpKTtyZXR1cm4ga306ZnVuY3Rpb24oZixnKXt2YXIgaD1nJiZnLmhhc093blByb3BlcnR5KGIpP2c6ZjtpZihudWxsPT1oKXJldHVybiBoO2g9bShoW2JdKTtcbmlmKCFhKXJldHVybiBoO2lmKG51bGw9PWgpcmV0dXJuIHU7aD1sKGhbYV0pO2lmKCFjKXJldHVybiBoO2lmKG51bGw9PWgpcmV0dXJuIHU7aD1uKGhbY10pO2lmKCFkKXJldHVybiBoO2lmKG51bGw9PWgpcmV0dXJuIHU7aD1xKGhbZF0pO3JldHVybiBlP251bGw9PWg/dTpoPXAoaFtlXSk6aH19ZnVuY3Rpb24gQWUoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXtyZXR1cm4gYihjLGQseWEsbWEsYSl9fWZ1bmN0aW9uIERjKGIsYSxjKXt2YXIgZD1hLmV4cGVuc2l2ZUNoZWNrcyxlPWQ/QmU6Q2U7aWYoZS5oYXNPd25Qcm9wZXJ0eShiKSlyZXR1cm4gZVtiXTt2YXIgZj1iLnNwbGl0KFwiLlwiKSxnPWYubGVuZ3RoLGg7aWYoYS5jc3ApaD02Pmc/Q2MoZlswXSxmWzFdLGZbMl0sZlszXSxmWzRdLGMsYSk6ZnVuY3Rpb24oYixkKXt2YXIgZT0wLGg7ZG8gaD1DYyhmW2UrK10sZltlKytdLGZbZSsrXSxmW2UrK10sZltlKytdLGMsYSkoYixkKSxkPXUsYj1oO3doaWxlKGU8Zyk7cmV0dXJuIGh9O1xuZWxzZXt2YXIgaz1cInZhciBwO1xcblwiO2QmJihrKz1cInMgPSBlc28ocywgZmUpO1xcbmwgPSBlc28obCwgZmUpO1xcblwiKTt2YXIgbT1kO3IoZixmdW5jdGlvbihiLGUpe2thKGIsYyk7dmFyIGY9KGU/XCJzXCI6JygobCYmbC5oYXNPd25Qcm9wZXJ0eShcIicrYisnXCIpKT9sOnMpJykrJ1tcIicrYisnXCJdJyxnPWR8fFFhKGIpO2cmJihmPVwiZXNvKFwiK2YrXCIsIGZlKVwiLG09ITApO2srPVwiaWYocyA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xcbnM9XCIrZitcIjtcXG5cIjthLnVud3JhcFByb21pc2VzJiYoays9J2lmIChzICYmIHMudGhlbikge1xcbiBwdyhcIicrYy5yZXBsYWNlKC8oW1wiXFxyXFxuXSkvZyxcIlxcXFwkMVwiKSsnXCIpO1xcbiBpZiAoIShcIiQkdlwiIGluIHMpKSB7XFxuIHA9cztcXG4gcC4kJHYgPSB1bmRlZmluZWQ7XFxuIHAudGhlbihmdW5jdGlvbih2KSB7cC4kJHY9JysoZz9cImVzbyh2KVwiOlwidlwiKStcIjt9KTtcXG59XFxuIHM9XCIrKGc/XCJlc28ocy4kJHYpXCI6XCJzLiQkdlwiKStcIlxcbn1cXG5cIil9KTtrKz1cInJldHVybiBzO1wiO1xuaD1uZXcgRnVuY3Rpb24oXCJzXCIsXCJsXCIsXCJwd1wiLFwiZXNvXCIsXCJmZVwiLGspO2gudG9TdHJpbmc9YWEoayk7aWYobXx8YS51bndyYXBQcm9taXNlcyloPUFlKGgsYyl9XCJoYXNPd25Qcm9wZXJ0eVwiIT09YiYmKGVbYl09aCk7cmV0dXJuIGh9ZnVuY3Rpb24gWGQoKXt2YXIgYj17fSxhPXt9LGM9e2NzcDohMSx1bndyYXBQcm9taXNlczohMSxsb2dQcm9taXNlV2FybmluZ3M6ITAsZXhwZW5zaXZlQ2hlY2tzOiExfTt0aGlzLnVud3JhcFByb21pc2VzPWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhjLnVud3JhcFByb21pc2VzPSEhYSx0aGlzKTpjLnVud3JhcFByb21pc2VzfTt0aGlzLmxvZ1Byb21pc2VXYXJuaW5ncz1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYy5sb2dQcm9taXNlV2FybmluZ3M9YSx0aGlzKTpjLmxvZ1Byb21pc2VXYXJuaW5nc307dGhpcy4kZ2V0PVtcIiRmaWx0ZXJcIixcIiRzbmlmZmVyXCIsXCIkbG9nXCIsZnVuY3Rpb24oZCxlLGYpe2MuY3NwPWUuY3NwO3ZhciBnPXtjc3A6Yy5jc3AsXG51bndyYXBQcm9taXNlczpjLnVud3JhcFByb21pc2VzLGxvZ1Byb21pc2VXYXJuaW5nczpjLmxvZ1Byb21pc2VXYXJuaW5ncyxleHBlbnNpdmVDaGVja3M6ITB9O3lhPWZ1bmN0aW9uKGEpe2MubG9nUHJvbWlzZVdhcm5pbmdzJiYhRWMuaGFzT3duUHJvcGVydHkoYSkmJihFY1thXT0hMCxmLndhcm4oXCJbJHBhcnNlXSBQcm9taXNlIGZvdW5kIGluIHRoZSBleHByZXNzaW9uIGBcIithK1wiYC4gQXV0b21hdGljIHVud3JhcHBpbmcgb2YgcHJvbWlzZXMgaW4gQW5ndWxhciBleHByZXNzaW9ucyBpcyBkZXByZWNhdGVkLlwiKSl9O3JldHVybiBmdW5jdGlvbihlLGYpe3ZhciBtO3N3aXRjaCh0eXBlb2YgZSl7Y2FzZSBcInN0cmluZ1wiOnZhciBsPWY/YTpiO2lmKGwuaGFzT3duUHJvcGVydHkoZSkpcmV0dXJuIGxbZV07bT1mP2c6Yzt2YXIgbj1uZXcgVWIobSk7bT0obmV3IGdiKG4sZCxtKSkucGFyc2UoZSk7XCJoYXNPd25Qcm9wZXJ0eVwiIT09ZSYmKGxbZV09bSk7cmV0dXJuIG07Y2FzZSBcImZ1bmN0aW9uXCI6cmV0dXJuIGU7XG5kZWZhdWx0OnJldHVybiB2fX19XX1mdW5jdGlvbiBaZCgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsYSl7cmV0dXJuIERlKGZ1bmN0aW9uKGEpe2IuJGV2YWxBc3luYyhhKX0sYSl9XX1mdW5jdGlvbiBEZShiLGEpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGF9ZnVuY3Rpb24gZChhKXtyZXR1cm4gZyhhKX12YXIgZT1mdW5jdGlvbigpe3ZhciBnPVtdLG0sbDtyZXR1cm4gbD17cmVzb2x2ZTpmdW5jdGlvbihhKXtpZihnKXt2YXIgYz1nO2c9dTttPWYoYSk7Yy5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wLGQ9Yy5sZW5ndGg7YjxkO2IrKylhPWNbYl0sbS50aGVuKGFbMF0sYVsxXSxhWzJdKX0pfX0scmVqZWN0OmZ1bmN0aW9uKGEpe2wucmVzb2x2ZShoKGEpKX0sbm90aWZ5OmZ1bmN0aW9uKGEpe2lmKGcpe3ZhciBjPWc7Zy5sZW5ndGgmJmIoZnVuY3Rpb24oKXtmb3IodmFyIGIsZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliPVxuY1tkXSxiWzJdKGEpfSl9fSxwcm9taXNlOnt0aGVuOmZ1bmN0aW9uKGIsZixoKXt2YXIgbD1lKCksSj1mdW5jdGlvbihkKXt0cnl7bC5yZXNvbHZlKChOKGIpP2I6YykoZCkpfWNhdGNoKGUpe2wucmVqZWN0KGUpLGEoZSl9fSx3PWZ1bmN0aW9uKGIpe3RyeXtsLnJlc29sdmUoKE4oZik/ZjpkKShiKSl9Y2F0Y2goYyl7bC5yZWplY3QoYyksYShjKX19LHQ9ZnVuY3Rpb24oYil7dHJ5e2wubm90aWZ5KChOKGgpP2g6YykoYikpfWNhdGNoKGQpe2EoZCl9fTtnP2cucHVzaChbSix3LHRdKTptLnRoZW4oSix3LHQpO3JldHVybiBsLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsYSl9LFwiZmluYWxseVwiOmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxjKXt2YXIgZD1lKCk7Yz9kLnJlc29sdmUoYSk6ZC5yZWplY3QoYSk7cmV0dXJuIGQucHJvbWlzZX1mdW5jdGlvbiBkKGUsZil7dmFyIGc9bnVsbDt0cnl7Zz0oYXx8YykoKX1jYXRjaChoKXtyZXR1cm4gYihoLFxuITEpfXJldHVybiBnJiZOKGcudGhlbik/Zy50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIoZSxmKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSwhMSl9KTpiKGUsZil9cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gZChhLCEwKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMSl9KX19fX0sZj1mdW5jdGlvbihhKXtyZXR1cm4gYSYmTihhLnRoZW4pP2E6e3RoZW46ZnVuY3Rpb24oYyl7dmFyIGQ9ZSgpO2IoZnVuY3Rpb24oKXtkLnJlc29sdmUoYyhhKSl9KTtyZXR1cm4gZC5wcm9taXNlfX19LGc9ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpO2IucmVqZWN0KGEpO3JldHVybiBiLnByb21pc2V9LGg9ZnVuY3Rpb24oYyl7cmV0dXJue3RoZW46ZnVuY3Rpb24oZixnKXt2YXIgaD1lKCk7YihmdW5jdGlvbigpe3RyeXtoLnJlc29sdmUoKE4oZyk/ZzpkKShjKSl9Y2F0Y2goYil7aC5yZWplY3QoYiksYShiKX19KTtyZXR1cm4gaC5wcm9taXNlfX19O3JldHVybntkZWZlcjplLHJlamVjdDpnLFxud2hlbjpmdW5jdGlvbihoLG0sbCxuKXt2YXIgcT1lKCkscCxzPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTihtKT9tOmMpKGIpfWNhdGNoKGQpe3JldHVybiBhKGQpLGcoZCl9fSxKPWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTihsKT9sOmQpKGIpfWNhdGNoKGMpe3JldHVybiBhKGMpLGcoYyl9fSx3PWZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4oTihuKT9uOmMpKGIpfWNhdGNoKGQpe2EoZCl9fTtiKGZ1bmN0aW9uKCl7ZihoKS50aGVuKGZ1bmN0aW9uKGEpe3B8fChwPSEwLHEucmVzb2x2ZShmKGEpLnRoZW4ocyxKLHcpKSl9LGZ1bmN0aW9uKGEpe3B8fChwPSEwLHEucmVzb2x2ZShKKGEpKSl9LGZ1bmN0aW9uKGEpe3B8fHEubm90aWZ5KHcoYSkpfSl9KTtyZXR1cm4gcS5wcm9taXNlfSxhbGw6ZnVuY3Rpb24oYSl7dmFyIGI9ZSgpLGM9MCxkPUwoYSk/W106e307cihhLGZ1bmN0aW9uKGEsZSl7YysrO2YoYSkudGhlbihmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHwoZFtlXT1hLFxuLS1jfHxiLnJlc29sdmUoZCkpfSxmdW5jdGlvbihhKXtkLmhhc093blByb3BlcnR5KGUpfHxiLnJlamVjdChhKX0pfSk7MD09PWMmJmIucmVzb2x2ZShkKTtyZXR1cm4gYi5wcm9taXNlfX19ZnVuY3Rpb24gZmUoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihiLGEpe3ZhciBjPWIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZD1iLmNhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHxiLndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSxlPSEhYyxmPWU/ZnVuY3Rpb24oYSl7dmFyIGI9YyhhKTtyZXR1cm4gZnVuY3Rpb24oKXtkKGIpfX06ZnVuY3Rpb24oYil7dmFyIGM9YShiLDE2LjY2LCExKTtyZXR1cm4gZnVuY3Rpb24oKXthLmNhbmNlbChjKX19O2Yuc3VwcG9ydGVkPVxuZTtyZXR1cm4gZn1dfWZ1bmN0aW9uIFlkKCl7dmFyIGI9MTAsYT16KFwiJHJvb3RTY29wZVwiKSxjPW51bGw7dGhpcy5kaWdlc3RUdGw9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9YSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkcGFyc2VcIixcIiRicm93c2VyXCIsZnVuY3Rpb24oZCxlLGYsZyl7ZnVuY3Rpb24gaCgpe3RoaXMuJGlkPWliKCk7dGhpcy4kJHBoYXNlPXRoaXMuJHBhcmVudD10aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzW1widGhpc1wiXT10aGlzLiRyb290PXRoaXM7dGhpcy4kJGRlc3Ryb3llZD0hMTt0aGlzLiQkYXN5bmNRdWV1ZT1bXTt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlPVtdO3RoaXMuJCRsaXN0ZW5lcnM9e307dGhpcy4kJGxpc3RlbmVyQ291bnQ9e307dGhpcy4kJGlzb2xhdGVCaW5kaW5ncz1cbnt9fWZ1bmN0aW9uIGsoYil7aWYocS4kJHBoYXNlKXRocm93IGEoXCJpbnByb2dcIixxLiQkcGhhc2UpO3EuJCRwaGFzZT1ifWZ1bmN0aW9uIG0oYSxiKXt2YXIgYz1mKGEpO1lhKGMsYik7cmV0dXJuIGN9ZnVuY3Rpb24gbChhLGIsYyl7ZG8gYS4kJGxpc3RlbmVyQ291bnRbY10tPWIsMD09PWEuJCRsaXN0ZW5lckNvdW50W2NdJiZkZWxldGUgYS4kJGxpc3RlbmVyQ291bnRbY107d2hpbGUoYT1hLiRwYXJlbnQpfWZ1bmN0aW9uIG4oKXt9aC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmgsJG5ldzpmdW5jdGlvbihhKXthPyhhPW5ldyBoLGEuJHJvb3Q9dGhpcy4kcm9vdCxhLiQkYXN5bmNRdWV1ZT10aGlzLiQkYXN5bmNRdWV1ZSxhLiQkcG9zdERpZ2VzdFF1ZXVlPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUpOih0aGlzLiQkY2hpbGRTY29wZUNsYXNzfHwodGhpcy4kJGNoaWxkU2NvcGVDbGFzcz1mdW5jdGlvbigpe3RoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD1cbnRoaXMuJCRjaGlsZFRhaWw9bnVsbDt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJGlkPWliKCk7dGhpcy4kJGNoaWxkU2NvcGVDbGFzcz1udWxsfSx0aGlzLiQkY2hpbGRTY29wZUNsYXNzLnByb3RvdHlwZT10aGlzKSxhPW5ldyB0aGlzLiQkY2hpbGRTY29wZUNsYXNzKTthW1widGhpc1wiXT1hO2EuJHBhcmVudD10aGlzO2EuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRUYWlsO3RoaXMuJCRjaGlsZEhlYWQ/dGhpcy4kJGNoaWxkVGFpbD10aGlzLiQkY2hpbGRUYWlsLiQkbmV4dFNpYmxpbmc9YTp0aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9YTtyZXR1cm4gYX0sJHdhdGNoOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT1tKGEsXCJ3YXRjaFwiKSxmPXRoaXMuJCR3YXRjaGVycyxnPXtmbjpiLGxhc3Q6bixnZXQ6ZSxleHA6YSxlcTohIWR9O2M9bnVsbDtpZighTihiKSl7dmFyIGg9bShifHx2LFwibGlzdGVuZXJcIik7Zy5mbj1mdW5jdGlvbihhLFxuYixjKXtoKGMpfX1pZihcInN0cmluZ1wiPT10eXBlb2YgYSYmZS5jb25zdGFudCl7dmFyIGs9Zy5mbjtnLmZuPWZ1bmN0aW9uKGEsYixjKXtrLmNhbGwodGhpcyxhLGIsYyk7VWEoZixnKX19Znx8KGY9dGhpcy4kJHdhdGNoZXJzPVtdKTtmLnVuc2hpZnQoZyk7cmV0dXJuIGZ1bmN0aW9uKCl7VWEoZixnKTtjPW51bGx9fSwkd2F0Y2hDb2xsZWN0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkLGUsZyxoPTE8Yi5sZW5ndGgsaz0wLGw9ZihhKSxtPVtdLG49e30scT0hMCxyPTA7cmV0dXJuIHRoaXMuJHdhdGNoKGZ1bmN0aW9uKCl7ZD1sKGMpO3ZhciBhLGIsZjtpZihUKGQpKWlmKFNhKGQpKWZvcihlIT09bSYmKGU9bSxyPWUubGVuZ3RoPTAsaysrKSxhPWQubGVuZ3RoLHIhPT1hJiYoaysrLGUubGVuZ3RoPXI9YSksYj0wO2I8YTtiKyspZj1lW2JdIT09ZVtiXSYmZFtiXSE9PWRbYl0sZnx8ZVtiXT09PWRbYl18fChrKyssZVtiXT1kW2JdKTtlbHNle2UhPT1uJiYoZT1uPXt9LHI9MCxcbmsrKyk7YT0wO2ZvcihiIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShiKSYmKGErKyxlLmhhc093blByb3BlcnR5KGIpPyhmPWVbYl0hPT1lW2JdJiZkW2JdIT09ZFtiXSxmfHxlW2JdPT09ZFtiXXx8KGsrKyxlW2JdPWRbYl0pKToocisrLGVbYl09ZFtiXSxrKyspKTtpZihyPmEpZm9yKGIgaW4gaysrLGUpZS5oYXNPd25Qcm9wZXJ0eShiKSYmIWQuaGFzT3duUHJvcGVydHkoYikmJihyLS0sZGVsZXRlIGVbYl0pfWVsc2UgZSE9PWQmJihlPWQsaysrKTtyZXR1cm4ga30sZnVuY3Rpb24oKXtxPyhxPSExLGIoZCxkLGMpKTpiKGQsZyxjKTtpZihoKWlmKFQoZCkpaWYoU2EoZCkpe2c9QXJyYXkoZC5sZW5ndGgpO2Zvcih2YXIgYT0wO2E8ZC5sZW5ndGg7YSsrKWdbYV09ZFthXX1lbHNlIGZvcihhIGluIGc9e30sZClsYi5jYWxsKGQsYSkmJihnW2FdPWRbYV0pO2Vsc2UgZz1kfSl9LCRkaWdlc3Q6ZnVuY3Rpb24oKXt2YXIgZCxmLGgsbCxtPXRoaXMuJCRhc3luY1F1ZXVlLHI9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZSxcbkssQix1PWIsTyxNPVtdLEEsUCxDO2soXCIkZGlnZXN0XCIpO2cuJCRjaGVja1VybENoYW5nZSgpO2M9bnVsbDtkb3tCPSExO2ZvcihPPXRoaXM7bS5sZW5ndGg7KXt0cnl7Qz1tLnNoaWZ0KCksQy5zY29wZS4kZXZhbChDLmV4cHJlc3Npb24pfWNhdGNoKEkpe3EuJCRwaGFzZT1udWxsLGUoSSl9Yz1udWxsfWE6ZG97aWYobD1PLiQkd2F0Y2hlcnMpZm9yKEs9bC5sZW5ndGg7Sy0tOyl0cnl7aWYoZD1sW0tdKWlmKChmPWQuZ2V0KE8pKSE9PShoPWQubGFzdCkmJiEoZC5lcT9DYShmLGgpOlwibnVtYmVyXCI9PT10eXBlb2YgZiYmXCJudW1iZXJcIj09PXR5cGVvZiBoJiZpc05hTihmKSYmaXNOYU4oaCkpKUI9ITAsYz1kLGQubGFzdD1kLmVxP0thKGYsbnVsbCk6ZixkLmZuKGYsaD09PW4/ZjpoLE8pLDU+dSYmKEE9NC11LE1bQV18fChNW0FdPVtdKSxQPU4oZC5leHApP1wiZm46IFwiKyhkLmV4cC5uYW1lfHxkLmV4cC50b1N0cmluZygpKTpkLmV4cCxQKz1cIjsgbmV3VmFsOiBcIitvYShmKStcIjsgb2xkVmFsOiBcIitcbm9hKGgpLE1bQV0ucHVzaChQKSk7ZWxzZSBpZihkPT09Yyl7Qj0hMTticmVhayBhfX1jYXRjaChEKXtxLiQkcGhhc2U9bnVsbCxlKEQpfWlmKCEobD1PLiQkY2hpbGRIZWFkfHxPIT09dGhpcyYmTy4kJG5leHRTaWJsaW5nKSlmb3IoO08hPT10aGlzJiYhKGw9Ty4kJG5leHRTaWJsaW5nKTspTz1PLiRwYXJlbnR9d2hpbGUoTz1sKTtpZigoQnx8bS5sZW5ndGgpJiYhdS0tKXRocm93IHEuJCRwaGFzZT1udWxsLGEoXCJpbmZkaWdcIixiLG9hKE0pKTt9d2hpbGUoQnx8bS5sZW5ndGgpO2ZvcihxLiQkcGhhc2U9bnVsbDtyLmxlbmd0aDspdHJ5e3Iuc2hpZnQoKSgpfWNhdGNoKHgpe2UoeCl9fSwkZGVzdHJveTpmdW5jdGlvbigpe2lmKCF0aGlzLiQkZGVzdHJveWVkKXt2YXIgYT10aGlzLiRwYXJlbnQ7dGhpcy4kYnJvYWRjYXN0KFwiJGRlc3Ryb3lcIik7dGhpcy4kJGRlc3Ryb3llZD0hMDt0aGlzIT09cSYmKHIodGhpcy4kJGxpc3RlbmVyQ291bnQsQmIobnVsbCxsLHRoaXMpKSxhLiQkY2hpbGRIZWFkPT1cbnRoaXMmJihhLiQkY2hpbGRIZWFkPXRoaXMuJCRuZXh0U2libGluZyksYS4kJGNoaWxkVGFpbD09dGhpcyYmKGEuJCRjaGlsZFRhaWw9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiQkcHJldlNpYmxpbmcmJih0aGlzLiQkcHJldlNpYmxpbmcuJCRuZXh0U2libGluZz10aGlzLiQkbmV4dFNpYmxpbmcpLHRoaXMuJCRuZXh0U2libGluZyYmKHRoaXMuJCRuZXh0U2libGluZy4kJHByZXZTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kcGFyZW50PXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPXRoaXMuJHJvb3Q9bnVsbCx0aGlzLiQkbGlzdGVuZXJzPXt9LHRoaXMuJCR3YXRjaGVycz10aGlzLiQkYXN5bmNRdWV1ZT10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlPVtdLHRoaXMuJGRlc3Ryb3k9dGhpcy4kZGlnZXN0PXRoaXMuJGFwcGx5PXYsdGhpcy4kb249dGhpcy4kd2F0Y2g9ZnVuY3Rpb24oKXtyZXR1cm4gdn0pfX0sXG4kZXZhbDpmdW5jdGlvbihhLGIpe3JldHVybiBmKGEpKHRoaXMsYil9LCRldmFsQXN5bmM6ZnVuY3Rpb24oYSl7cS4kJHBoYXNlfHxxLiQkYXN5bmNRdWV1ZS5sZW5ndGh8fGcuZGVmZXIoZnVuY3Rpb24oKXtxLiQkYXN5bmNRdWV1ZS5sZW5ndGgmJnEuJGRpZ2VzdCgpfSk7dGhpcy4kJGFzeW5jUXVldWUucHVzaCh7c2NvcGU6dGhpcyxleHByZXNzaW9uOmF9KX0sJCRwb3N0RGlnZXN0OmZ1bmN0aW9uKGEpe3RoaXMuJCRwb3N0RGlnZXN0UXVldWUucHVzaChhKX0sJGFwcGx5OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gayhcIiRhcHBseVwiKSx0aGlzLiRldmFsKGEpfWNhdGNoKGIpe2UoYil9ZmluYWxseXtxLiQkcGhhc2U9bnVsbDt0cnl7cS4kZGlnZXN0KCl9Y2F0Y2goYyl7dGhyb3cgZShjKSxjO319fSwkb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLiQkbGlzdGVuZXJzW2FdO2N8fCh0aGlzLiQkbGlzdGVuZXJzW2FdPWM9W10pO2MucHVzaChiKTt2YXIgZD10aGlzO2RvIGQuJCRsaXN0ZW5lckNvdW50W2FdfHxcbihkLiQkbGlzdGVuZXJDb3VudFthXT0wKSxkLiQkbGlzdGVuZXJDb3VudFthXSsrO3doaWxlKGQ9ZC4kcGFyZW50KTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbigpe3ZhciBkPVRhKGMsYik7LTEhPT1kJiYoY1tkXT1udWxsLGwoZSwxLGEpKX19LCRlbWl0OmZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZCxmPXRoaXMsZz0hMSxoPXtuYW1lOmEsdGFyZ2V0U2NvcGU6ZixzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtnPSEwfSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2guZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0saz1baF0uY29uY2F0KHdhLmNhbGwoYXJndW1lbnRzLDEpKSxsLG07ZG97ZD1mLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWY7bD0wO2ZvcihtPWQubGVuZ3RoO2w8bTtsKyspaWYoZFtsXSl0cnl7ZFtsXS5hcHBseShudWxsLGspfWNhdGNoKG4pe2Uobil9ZWxzZSBkLnNwbGljZShsLDEpLGwtLSxtLS07aWYoZylicmVhaztcbmY9Zi4kcGFyZW50fXdoaWxlKGYpO3JldHVybiBofSwkYnJvYWRjYXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXRoaXMsZD10aGlzLGY9e25hbWU6YSx0YXJnZXRTY29wZTp0aGlzLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7Zi5kZWZhdWx0UHJldmVudGVkPSEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxnPVtmXS5jb25jYXQod2EuY2FsbChhcmd1bWVudHMsMSkpLGgsaztjPWQ7KXtmLmN1cnJlbnRTY29wZT1jO2Q9Yy4kJGxpc3RlbmVyc1thXXx8W107aD0wO2ZvcihrPWQubGVuZ3RoO2g8aztoKyspaWYoZFtoXSl0cnl7ZFtoXS5hcHBseShudWxsLGcpfWNhdGNoKGwpe2UobCl9ZWxzZSBkLnNwbGljZShoLDEpLGgtLSxrLS07aWYoIShkPWMuJCRsaXN0ZW5lckNvdW50W2FdJiZjLiQkY2hpbGRIZWFkfHxjIT09dGhpcyYmYy4kJG5leHRTaWJsaW5nKSlmb3IoO2MhPT10aGlzJiYhKGQ9Yy4kJG5leHRTaWJsaW5nKTspYz1jLiRwYXJlbnR9cmV0dXJuIGZ9fTt2YXIgcT1uZXcgaDtcbnJldHVybiBxfV19ZnVuY3Rpb24gYmQoKXt2YXIgYj0vXlxccyooaHR0cHM/fGZ0cHxtYWlsdG98dGVsfGZpbGUpOi8sYT0vXlxccyooKGh0dHBzP3xmdHB8ZmlsZSk6fGRhdGE6aW1hZ2VcXC8pLzt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1kP2E6YixmO2lmKCFSfHw4PD1SKWlmKGY9eGEoYykuaHJlZixcIlwiIT09ZiYmIWYubWF0Y2goZSkpcmV0dXJuXCJ1bnNhZmU6XCIrZjtyZXR1cm4gY319fWZ1bmN0aW9uIEVlKGIpe2lmKFwic2VsZlwiPT09YilyZXR1cm4gYjtpZihHKGIpKXtpZigtMTxiLmluZGV4T2YoXCIqKipcIikpdGhyb3cgemEoXCJpd2NhcmRcIixiKTtiPWIucmVwbGFjZSgvKFstKClcXFtcXF17fSs/Ki4kXFxefCw6IzwhXFxcXF0pL2csXG5cIlxcXFwkMVwiKS5yZXBsYWNlKC9cXHgwOC9nLFwiXFxcXHgwOFwiKS5yZXBsYWNlKFwiXFxcXCpcXFxcKlwiLFwiLipcIikucmVwbGFjZShcIlxcXFwqXCIsXCJbXjovLj8mO10qXCIpO3JldHVybiBSZWdFeHAoXCJeXCIrYitcIiRcIil9aWYoa2IoYikpcmV0dXJuIFJlZ0V4cChcIl5cIitiLnNvdXJjZStcIiRcIik7dGhyb3cgemEoXCJpbWF0Y2hlclwiKTt9ZnVuY3Rpb24gRmMoYil7dmFyIGE9W107RChiKSYmcihiLGZ1bmN0aW9uKGIpe2EucHVzaChFZShiKSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBhZSgpe3RoaXMuU0NFX0NPTlRFWFRTPWZhO3ZhciBiPVtcInNlbGZcIl0sYT1bXTt0aGlzLnJlc291cmNlVXJsV2hpdGVsaXN0PWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPUZjKGEpKTtyZXR1cm4gYn07dGhpcy5yZXNvdXJjZVVybEJsYWNrbGlzdD1mdW5jdGlvbihiKXthcmd1bWVudHMubGVuZ3RoJiYoYT1GYyhiKSk7cmV0dXJuIGF9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe3ZhciBiPVxuZnVuY3Rpb24oYSl7dGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBhfX07YSYmKGIucHJvdG90eXBlPW5ldyBhKTtiLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKX07Yi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpLnRvU3RyaW5nKCl9O3JldHVybiBifXZhciBlPWZ1bmN0aW9uKGEpe3Rocm93IHphKFwidW5zYWZlXCIpO307Yy5oYXMoXCIkc2FuaXRpemVcIikmJihlPWMuZ2V0KFwiJHNhbml0aXplXCIpKTt2YXIgZj1kKCksZz17fTtnW2ZhLkhUTUxdPWQoZik7Z1tmYS5DU1NdPWQoZik7Z1tmYS5VUkxdPWQoZik7Z1tmYS5KU109ZChmKTtnW2ZhLlJFU09VUkNFX1VSTF09ZChnW2ZhLlVSTF0pO3JldHVybnt0cnVzdEFzOmZ1bmN0aW9uKGEsYil7dmFyIGM9Zy5oYXNPd25Qcm9wZXJ0eShhKT9nW2FdOm51bGw7aWYoIWMpdGhyb3cgemEoXCJpY29udGV4dFwiLFxuYSxiKTtpZihudWxsPT09Ynx8Yj09PXV8fFwiXCI9PT1iKXJldHVybiBiO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgYil0aHJvdyB6YShcIml0eXBlXCIsYSk7cmV0dXJuIG5ldyBjKGIpfSxnZXRUcnVzdGVkOmZ1bmN0aW9uKGMsZCl7aWYobnVsbD09PWR8fGQ9PT11fHxcIlwiPT09ZClyZXR1cm4gZDt2YXIgZj1nLmhhc093blByb3BlcnR5KGMpP2dbY106bnVsbDtpZihmJiZkIGluc3RhbmNlb2YgZilyZXR1cm4gZC4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpO2lmKGM9PT1mYS5SRVNPVVJDRV9VUkwpe3ZhciBmPXhhKGQudG9TdHJpbmcoKSksbCxuLHE9ITE7bD0wO2ZvcihuPWIubGVuZ3RoO2w8bjtsKyspaWYoXCJzZWxmXCI9PT1iW2xdP1BiKGYpOmJbbF0uZXhlYyhmLmhyZWYpKXtxPSEwO2JyZWFrfWlmKHEpZm9yKGw9MCxuPWEubGVuZ3RoO2w8bjtsKyspaWYoXCJzZWxmXCI9PT1hW2xdP1BiKGYpOmFbbF0uZXhlYyhmLmhyZWYpKXtxPSExO2JyZWFrfWlmKHEpcmV0dXJuIGQ7dGhyb3cgemEoXCJpbnNlY3VybFwiLFxuZC50b1N0cmluZygpKTt9aWYoYz09PWZhLkhUTUwpcmV0dXJuIGUoZCk7dGhyb3cgemEoXCJ1bnNhZmVcIik7fSx2YWx1ZU9mOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgZj9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19ZnVuY3Rpb24gJGQoKXt2YXIgYj0hMDt0aGlzLmVuYWJsZWQ9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9ISFhKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJHNuaWZmZXJcIixcIiRzY2VEZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEsYyxkKXtpZihiJiZjLm1zaWUmJjg+Yy5tc2llRG9jdW1lbnRNb2RlKXRocm93IHphKFwiaWVxdWlya3NcIik7dmFyIGU9aGEoZmEpO2UuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2UudHJ1c3RBcz1kLnRydXN0QXM7ZS5nZXRUcnVzdGVkPWQuZ2V0VHJ1c3RlZDtlLnZhbHVlT2Y9ZC52YWx1ZU9mO2J8fChlLnRydXN0QXM9ZS5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LFxuZS52YWx1ZU9mPWdhKTtlLnBhcnNlQXM9ZnVuY3Rpb24oYixjKXt2YXIgZD1hKGMpO3JldHVybiBkLmxpdGVyYWwmJmQuY29uc3RhbnQ/ZDpmdW5jdGlvbihhLGMpe3JldHVybiBlLmdldFRydXN0ZWQoYixkKGEsYykpfX07dmFyIGY9ZS5wYXJzZUFzLGc9ZS5nZXRUcnVzdGVkLGg9ZS50cnVzdEFzO3IoZmEsZnVuY3Rpb24oYSxiKXt2YXIgYz14KGIpO2VbYWIoXCJwYXJzZV9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGYoYSxiKX07ZVthYihcImdldF90cnVzdGVkX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZyhhLGIpfTtlW2FiKFwidHJ1c3RfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBoKGEsYil9fSk7cmV0dXJuIGV9XX1mdW5jdGlvbiBiZSgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEpe3ZhciBjPXt9LGQ9VSgoL2FuZHJvaWQgKFxcZCspLy5leGVjKHgoKGIubmF2aWdhdG9yfHx7fSkudXNlckFnZW50KSl8fFtdKVsxXSksZT0vQm94ZWUvaS50ZXN0KChiLm5hdmlnYXRvcnx8XG57fSkudXNlckFnZW50KSxmPWFbMF18fHt9LGc9Zi5kb2N1bWVudE1vZGUsaCxrPS9eKE1venx3ZWJraXR8T3xtcykoPz1bQS1aXSkvLG09Zi5ib2R5JiZmLmJvZHkuc3R5bGUsbD0hMSxuPSExO2lmKG0pe2Zvcih2YXIgcSBpbiBtKWlmKGw9ay5leGVjKHEpKXtoPWxbMF07aD1oLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkraC5zdWJzdHIoMSk7YnJlYWt9aHx8KGg9XCJXZWJraXRPcGFjaXR5XCJpbiBtJiZcIndlYmtpdFwiKTtsPSEhKFwidHJhbnNpdGlvblwiaW4gbXx8aCtcIlRyYW5zaXRpb25cImluIG0pO249ISEoXCJhbmltYXRpb25cImluIG18fGgrXCJBbmltYXRpb25cImluIG0pOyFkfHxsJiZufHwobD1HKGYuYm9keS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uKSxuPUcoZi5ib2R5LnN0eWxlLndlYmtpdEFuaW1hdGlvbikpfXJldHVybntoaXN0b3J5OiEoIWIuaGlzdG9yeXx8IWIuaGlzdG9yeS5wdXNoU3RhdGV8fDQ+ZHx8ZSksaGFzaGNoYW5nZTpcIm9uaGFzaGNoYW5nZVwiaW4gYiYmKCFnfHw3PFxuZyksaGFzRXZlbnQ6ZnVuY3Rpb24oYSl7aWYoXCJpbnB1dFwiPT1hJiY5PT1SKXJldHVybiExO2lmKEYoY1thXSkpe3ZhciBiPWYuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjW2FdPVwib25cIithIGluIGJ9cmV0dXJuIGNbYV19LGNzcDpaYSgpLHZlbmRvclByZWZpeDpoLHRyYW5zaXRpb25zOmwsYW5pbWF0aW9uczpuLGFuZHJvaWQ6ZCxtc2llOlIsbXNpZURvY3VtZW50TW9kZTpnfX1dfWZ1bmN0aW9uIGRlKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkcVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEsYyxkKXtmdW5jdGlvbiBlKGUsaCxrKXt2YXIgbT1jLmRlZmVyKCksbD1tLnByb21pc2Usbj1EKGspJiYhaztoPWEuZGVmZXIoZnVuY3Rpb24oKXt0cnl7bS5yZXNvbHZlKGUoKSl9Y2F0Y2goYSl7bS5yZWplY3QoYSksZChhKX1maW5hbGx5e2RlbGV0ZSBmW2wuJCR0aW1lb3V0SWRdfW58fGIuJGFwcGx5KCl9LGgpO2wuJCR0aW1lb3V0SWQ9aDtmW2hdPW07XG5yZXR1cm4gbH12YXIgZj17fTtlLmNhbmNlbD1mdW5jdGlvbihiKXtyZXR1cm4gYiYmYi4kJHRpbWVvdXRJZCBpbiBmPyhmW2IuJCR0aW1lb3V0SWRdLnJlamVjdChcImNhbmNlbGVkXCIpLGRlbGV0ZSBmW2IuJCR0aW1lb3V0SWRdLGEuZGVmZXIuY2FuY2VsKGIuJCR0aW1lb3V0SWQpKTohMX07cmV0dXJuIGV9XX1mdW5jdGlvbiB4YShiLGEpe3ZhciBjPWI7UiYmKFkuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpLGM9WS5ocmVmKTtZLnNldEF0dHJpYnV0ZShcImhyZWZcIixjKTtyZXR1cm57aHJlZjpZLmhyZWYscHJvdG9jb2w6WS5wcm90b2NvbD9ZLnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6WS5ob3N0LHNlYXJjaDpZLnNlYXJjaD9ZLnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6WS5oYXNoP1kuaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpZLmhvc3RuYW1lLHBvcnQ6WS5wb3J0LHBhdGhuYW1lOlwiL1wiPT09WS5wYXRobmFtZS5jaGFyQXQoMCk/WS5wYXRobmFtZTpcblwiL1wiK1kucGF0aG5hbWV9fWZ1bmN0aW9uIFBiKGIpe2I9RyhiKT94YShiKTpiO3JldHVybiBiLnByb3RvY29sPT09R2MucHJvdG9jb2wmJmIuaG9zdD09PUdjLmhvc3R9ZnVuY3Rpb24gZWUoKXt0aGlzLiRnZXQ9YWEoVyl9ZnVuY3Rpb24ga2MoYil7ZnVuY3Rpb24gYShkLGUpe2lmKFQoZCkpe3ZhciBmPXt9O3IoZCxmdW5jdGlvbihiLGMpe2ZbY109YShjLGIpfSk7cmV0dXJuIGZ9cmV0dXJuIGIuZmFjdG9yeShkK2MsZSl9dmFyIGM9XCJGaWx0ZXJcIjt0aGlzLnJlZ2lzdGVyPWE7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitjKX19XTthKFwiY3VycmVuY3lcIixIYyk7YShcImRhdGVcIixJYyk7YShcImZpbHRlclwiLEZlKTthKFwianNvblwiLEdlKTthKFwibGltaXRUb1wiLEhlKTthKFwibG93ZXJjYXNlXCIsSWUpO2EoXCJudW1iZXJcIixKYyk7YShcIm9yZGVyQnlcIixLYyk7YShcInVwcGVyY2FzZVwiLEplKX1mdW5jdGlvbiBGZSgpe3JldHVybiBmdW5jdGlvbihiLFxuYSxjKXtpZighTChiKSlyZXR1cm4gYjt2YXIgZD10eXBlb2YgYyxlPVtdO2UuY2hlY2s9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxlLmxlbmd0aDtiKyspaWYoIWVbYl0oYSkpcmV0dXJuITE7cmV0dXJuITB9O1wiZnVuY3Rpb25cIiE9PWQmJihjPVwiYm9vbGVhblwiPT09ZCYmYz9mdW5jdGlvbihhLGIpe3JldHVybiBYYS5lcXVhbHMoYSxiKX06ZnVuY3Rpb24oYSxiKXtpZihhJiZiJiZcIm9iamVjdFwiPT09dHlwZW9mIGEmJlwib2JqZWN0XCI9PT10eXBlb2YgYil7Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmbGIuY2FsbChhLGQpJiZjKGFbZF0sYltkXSkpcmV0dXJuITA7cmV0dXJuITF9Yj0oXCJcIitiKS50b0xvd2VyQ2FzZSgpO3JldHVybi0xPChcIlwiK2EpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiKX0pO3ZhciBmPWZ1bmN0aW9uKGEsYil7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBiJiZcIiFcIj09PWIuY2hhckF0KDApKXJldHVybiFmKGEsYi5zdWJzdHIoMSkpO3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOnJldHVybiBjKGEsXG5iKTtjYXNlIFwib2JqZWN0XCI6c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwib2JqZWN0XCI6cmV0dXJuIGMoYSxiKTtkZWZhdWx0OmZvcih2YXIgZCBpbiBhKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJmYoYVtkXSxiKSlyZXR1cm4hMH1yZXR1cm4hMTtjYXNlIFwiYXJyYXlcIjpmb3IoZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKGYoYVtkXSxiKSlyZXR1cm4hMDtyZXR1cm4hMTtkZWZhdWx0OnJldHVybiExfX07c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6YT17JDphfTtjYXNlIFwib2JqZWN0XCI6Zm9yKHZhciBnIGluIGEpKGZ1bmN0aW9uKGIpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgYVtiXSYmZS5wdXNoKGZ1bmN0aW9uKGMpe3JldHVybiBmKFwiJFwiPT1iP2M6YyYmY1tiXSxhW2JdKX0pfSkoZyk7YnJlYWs7Y2FzZSBcImZ1bmN0aW9uXCI6ZS5wdXNoKGEpO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIGJ9ZD1bXTtmb3IoZz0wO2c8Yi5sZW5ndGg7ZysrKXt2YXIgaD1cbmJbZ107ZS5jaGVjayhoKSYmZC5wdXNoKGgpfXJldHVybiBkfX1mdW5jdGlvbiBIYyhiKXt2YXIgYT1iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe0YoZCkmJihkPWEuQ1VSUkVOQ1lfU1lNKTtyZXR1cm4gTGMoYixhLlBBVFRFUk5TWzFdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsMikucmVwbGFjZSgvXFx1MDBBNC9nLGQpfX1mdW5jdGlvbiBKYyhiKXt2YXIgYT1iLk5VTUJFUl9GT1JNQVRTO3JldHVybiBmdW5jdGlvbihiLGQpe3JldHVybiBMYyhiLGEuUEFUVEVSTlNbMF0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCxkKX19ZnVuY3Rpb24gTGMoYixhLGMsZCxlKXtpZihudWxsPT1ifHwhaXNGaW5pdGUoYil8fFQoYikpcmV0dXJuXCJcIjt2YXIgZj0wPmI7Yj1NYXRoLmFicyhiKTt2YXIgZz1iK1wiXCIsaD1cIlwiLGs9W10sbT0hMTtpZigtMSE9PWcuaW5kZXhPZihcImVcIikpe3ZhciBsPWcubWF0Y2goLyhbXFxkXFwuXSspZSgtPykoXFxkKykvKTtsJiZcIi1cIj09bFsyXSYmXG5sWzNdPmUrMT8oZz1cIjBcIixiPTApOihoPWcsbT0hMCl9aWYobSkwPGUmJigtMTxiJiYxPmIpJiYoaD1iLnRvRml4ZWQoZSkpO2Vsc2V7Zz0oZy5zcGxpdChNYylbMV18fFwiXCIpLmxlbmd0aDtGKGUpJiYoZT1NYXRoLm1pbihNYXRoLm1heChhLm1pbkZyYWMsZyksYS5tYXhGcmFjKSk7Yj0rKE1hdGgucm91bmQoKyhiLnRvU3RyaW5nKCkrXCJlXCIrZSkpLnRvU3RyaW5nKCkrXCJlXCIrLWUpOzA9PT1iJiYoZj0hMSk7Yj0oXCJcIitiKS5zcGxpdChNYyk7Zz1iWzBdO2I9YlsxXXx8XCJcIjt2YXIgbD0wLG49YS5sZ1NpemUscT1hLmdTaXplO2lmKGcubGVuZ3RoPj1uK3EpZm9yKGw9Zy5sZW5ndGgtbixtPTA7bTxsO20rKykwPT09KGwtbSklcSYmMCE9PW0mJihoKz1jKSxoKz1nLmNoYXJBdChtKTtmb3IobT1sO208Zy5sZW5ndGg7bSsrKTA9PT0oZy5sZW5ndGgtbSklbiYmMCE9PW0mJihoKz1jKSxoKz1nLmNoYXJBdChtKTtmb3IoO2IubGVuZ3RoPGU7KWIrPVwiMFwiO2UmJlwiMFwiIT09ZSYmKGgrPWQrYi5zdWJzdHIoMCxcbmUpKX1rLnB1c2goZj9hLm5lZ1ByZTphLnBvc1ByZSk7ay5wdXNoKGgpO2sucHVzaChmP2EubmVnU3VmOmEucG9zU3VmKTtyZXR1cm4gay5qb2luKFwiXCIpfWZ1bmN0aW9uIFZiKGIsYSxjKXt2YXIgZD1cIlwiOzA+YiYmKGQ9XCItXCIsYj0tYik7Zm9yKGI9XCJcIitiO2IubGVuZ3RoPGE7KWI9XCIwXCIrYjtjJiYoYj1iLnN1YnN0cihiLmxlbmd0aC1hKSk7cmV0dXJuIGQrYn1mdW5jdGlvbiBaKGIsYSxjLGQpe2M9Y3x8MDtyZXR1cm4gZnVuY3Rpb24oZSl7ZT1lW1wiZ2V0XCIrYl0oKTtpZigwPGN8fGU+LWMpZSs9YzswPT09ZSYmLTEyPT1jJiYoZT0xMik7cmV0dXJuIFZiKGUsYSxkKX19ZnVuY3Rpb24gdmIoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXt2YXIgZT1jW1wiZ2V0XCIrYl0oKSxmPUxhKGE/XCJTSE9SVFwiK2I6Yik7cmV0dXJuIGRbZl1bZV19fWZ1bmN0aW9uIEljKGIpe2Z1bmN0aW9uIGEoYSl7dmFyIGI7aWYoYj1hLm1hdGNoKGMpKXthPW5ldyBEYXRlKDApO3ZhciBmPTAsZz0wLGg9Yls4XT9cbmEuc2V0VVRDRnVsbFllYXI6YS5zZXRGdWxsWWVhcixrPWJbOF0/YS5zZXRVVENIb3VyczphLnNldEhvdXJzO2JbOV0mJihmPVUoYls5XStiWzEwXSksZz1VKGJbOV0rYlsxMV0pKTtoLmNhbGwoYSxVKGJbMV0pLFUoYlsyXSktMSxVKGJbM10pKTtmPVUoYls0XXx8MCktZjtnPVUoYls1XXx8MCktZztoPVUoYls2XXx8MCk7Yj1NYXRoLnJvdW5kKDFFMypwYXJzZUZsb2F0KFwiMC5cIisoYls3XXx8MCkpKTtrLmNhbGwoYSxmLGcsaCxiKX1yZXR1cm4gYX12YXIgYz0vXihcXGR7NH0pLT8oXFxkXFxkKS0/KFxcZFxcZCkoPzpUKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlxcLihcXGQrKSk/KT8pPyhafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/KT8kLztyZXR1cm4gZnVuY3Rpb24oYyxlKXt2YXIgZj1cIlwiLGc9W10saCxrO2U9ZXx8XCJtZWRpdW1EYXRlXCI7ZT1iLkRBVEVUSU1FX0ZPUk1BVFNbZV18fGU7RyhjKSYmKGM9S2UudGVzdChjKT9VKGMpOmEoYykpO2piKGMpJiYoYz1uZXcgRGF0ZShjKSk7XG5pZighdmEoYykpcmV0dXJuIGM7Zm9yKDtlOykoaz1MZS5leGVjKGUpKT8oZz1nLmNvbmNhdCh3YS5jYWxsKGssMSkpLGU9Zy5wb3AoKSk6KGcucHVzaChlKSxlPW51bGwpO3IoZyxmdW5jdGlvbihhKXtoPU1lW2FdO2YrPWg/aChjLGIuREFURVRJTUVfRk9STUFUUyk6YS5yZXBsYWNlKC8oXid8JyQpL2csXCJcIikucmVwbGFjZSgvJycvZyxcIidcIil9KTtyZXR1cm4gZn19ZnVuY3Rpb24gR2UoKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIG9hKGIsITApfX1mdW5jdGlvbiBIZSgpe3JldHVybiBmdW5jdGlvbihiLGEpe2lmKCFMKGIpJiYhRyhiKSlyZXR1cm4gYjthPUluZmluaXR5PT09TWF0aC5hYnMoTnVtYmVyKGEpKT9OdW1iZXIoYSk6VShhKTtpZihHKGIpKXJldHVybiBhPzA8PWE/Yi5zbGljZSgwLGEpOmIuc2xpY2UoYSxiLmxlbmd0aCk6XCJcIjt2YXIgYz1bXSxkLGU7YT5iLmxlbmd0aD9hPWIubGVuZ3RoOmE8LWIubGVuZ3RoJiYoYT0tYi5sZW5ndGgpOzA8YT8oZD0wLGU9YSk6KGQ9XG5iLmxlbmd0aCthLGU9Yi5sZW5ndGgpO2Zvcig7ZDxlO2QrKyljLnB1c2goYltkXSk7cmV0dXJuIGN9fWZ1bmN0aW9uIEtjKGIpe3JldHVybiBmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhLGIpe3JldHVybiBXYShiKT9mdW5jdGlvbihiLGMpe3JldHVybiBhKGMsYil9OmF9ZnVuY3Rpb24gZihhLGIpe3ZhciBjPXR5cGVvZiBhLGQ9dHlwZW9mIGI7cmV0dXJuIGM9PWQ/KHZhKGEpJiZ2YShiKSYmKGE9YS52YWx1ZU9mKCksYj1iLnZhbHVlT2YoKSksXCJzdHJpbmdcIj09YyYmKGE9YS50b0xvd2VyQ2FzZSgpLGI9Yi50b0xvd2VyQ2FzZSgpKSxhPT09Yj8wOmE8Yj8tMToxKTpjPGQ/LTE6MX1pZighU2EoYSkpcmV0dXJuIGE7Yz1MKGMpP2M6W2NdOzA9PT1jLmxlbmd0aCYmKGM9W1wiK1wiXSk7Yz1VYyhjLGZ1bmN0aW9uKGEpe3ZhciBjPSExLGQ9YXx8Z2E7aWYoRyhhKSl7aWYoXCIrXCI9PWEuY2hhckF0KDApfHxcIi1cIj09YS5jaGFyQXQoMCkpYz1cIi1cIj09YS5jaGFyQXQoMCksYT1hLnN1YnN0cmluZygxKTtcbmlmKFwiXCI9PT1hKXJldHVybiBlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGYoYSxiKX0sYyk7ZD1iKGEpO2lmKGQuY29uc3RhbnQpe3ZhciBtPWQoKTtyZXR1cm4gZShmdW5jdGlvbihhLGIpe3JldHVybiBmKGFbbV0sYlttXSl9LGMpfX1yZXR1cm4gZShmdW5jdGlvbihhLGIpe3JldHVybiBmKGQoYSksZChiKSl9LGMpfSk7cmV0dXJuIHdhLmNhbGwoYSkuc29ydChlKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0oYSxiKTtpZigwIT09ZSlyZXR1cm4gZX1yZXR1cm4gMH0sZCkpfX1mdW5jdGlvbiBBYShiKXtOKGIpJiYoYj17bGluazpifSk7Yi5yZXN0cmljdD1iLnJlc3RyaWN0fHxcIkFDXCI7cmV0dXJuIGFhKGIpfWZ1bmN0aW9uIE5jKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYSxjKXtjPWM/XCItXCIrbmIoYyxcIi1cIik6XCJcIjtkLnNldENsYXNzKGIsKGE/d2I6eGIpK2MsKGE/eGI6d2IpK2MpfXZhciBmPXRoaXMsZz1iLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpfHxcbnliLGg9MCxrPWYuJGVycm9yPXt9LG09W107Zi4kbmFtZT1hLm5hbWV8fGEubmdGb3JtO2YuJGRpcnR5PSExO2YuJHByaXN0aW5lPSEwO2YuJHZhbGlkPSEwO2YuJGludmFsaWQ9ITE7Zy4kYWRkQ29udHJvbChmKTtiLmFkZENsYXNzKFJhKTtlKCEwKTtmLiRhZGRDb250cm9sPWZ1bmN0aW9uKGEpe0VhKGEuJG5hbWUsXCJpbnB1dFwiKTttLnB1c2goYSk7YS4kbmFtZSYmKGZbYS4kbmFtZV09YSl9O2YuJHJlbW92ZUNvbnRyb2w9ZnVuY3Rpb24oYSl7YS4kbmFtZSYmZlthLiRuYW1lXT09PWEmJmRlbGV0ZSBmW2EuJG5hbWVdO3IoayxmdW5jdGlvbihiLGMpe2YuJHNldFZhbGlkaXR5KGMsITAsYSl9KTtVYShtLGEpfTtmLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9a1thXTtpZihiKWQmJihVYShkLGMpLGQubGVuZ3RofHwoaC0tLGh8fChlKGIpLGYuJHZhbGlkPSEwLGYuJGludmFsaWQ9ITEpLGtbYV09ITEsZSghMCxhKSxnLiRzZXRWYWxpZGl0eShhLCEwLGYpKSk7ZWxzZXtofHxcbmUoYik7aWYoZCl7aWYoLTEhPVRhKGQsYykpcmV0dXJufWVsc2Uga1thXT1kPVtdLGgrKyxlKCExLGEpLGcuJHNldFZhbGlkaXR5KGEsITEsZik7ZC5wdXNoKGMpO2YuJHZhbGlkPSExO2YuJGludmFsaWQ9ITB9fTtmLiRzZXREaXJ0eT1mdW5jdGlvbigpe2QucmVtb3ZlQ2xhc3MoYixSYSk7ZC5hZGRDbGFzcyhiLHpiKTtmLiRkaXJ0eT0hMDtmLiRwcmlzdGluZT0hMTtnLiRzZXREaXJ0eSgpfTtmLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe2QucmVtb3ZlQ2xhc3MoYix6Yik7ZC5hZGRDbGFzcyhiLFJhKTtmLiRkaXJ0eT0hMTtmLiRwcmlzdGluZT0hMDtyKG0sZnVuY3Rpb24oYSl7YS4kc2V0UHJpc3RpbmUoKX0pfX1mdW5jdGlvbiB1YShiLGEsYyxkKXtiLiRzZXRWYWxpZGl0eShhLGMpO3JldHVybiBjP2Q6dX1mdW5jdGlvbiBPYyhiLGEpe3ZhciBjLGQ7aWYoYSlmb3IoYz0wO2M8YS5sZW5ndGg7KytjKWlmKGQ9YVtjXSxiW2RdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIE5lKGIsXG5hLGMsZCxlKXtUKGUpJiYoYi4kJGhhc05hdGl2ZVZhbGlkYXRvcnM9ITAsYi4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGYpe2lmKGIuJGVycm9yW2FdfHxPYyhlLGQpfHwhT2MoZSxjKSlyZXR1cm4gZjtiLiRzZXRWYWxpZGl0eShhLCExKX0pKX1mdW5jdGlvbiBBYihiLGEsYyxkLGUsZil7dmFyIGc9YS5wcm9wKE9lKSxoPWFbMF0ucGxhY2Vob2xkZXIsaz17fSxtPXgoYVswXS50eXBlKTtkLiQkdmFsaWRpdHlTdGF0ZT1nO2lmKCFlLmFuZHJvaWQpe3ZhciBsPSExO2Eub24oXCJjb21wb3NpdGlvbnN0YXJ0XCIsZnVuY3Rpb24oYSl7bD0hMH0pO2Eub24oXCJjb21wb3NpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7bD0hMTtuKCl9KX12YXIgbj1mdW5jdGlvbihlKXtpZighbCl7dmFyIGY9YS52YWwoKTtpZihSJiZcImlucHV0XCI9PT0oZXx8aykudHlwZSYmYVswXS5wbGFjZWhvbGRlciE9PWgpaD1hWzBdLnBsYWNlaG9sZGVyO2Vsc2UgaWYoXCJwYXNzd29yZFwiIT09bSYmV2EoYy5uZ1RyaW18fFwiVFwiKSYmXG4oZj0kKGYpKSxlPWcmJmQuJCRoYXNOYXRpdmVWYWxpZGF0b3JzLGQuJHZpZXdWYWx1ZSE9PWZ8fFwiXCI9PT1mJiZlKWIuJHJvb3QuJCRwaGFzZT9kLiRzZXRWaWV3VmFsdWUoZik6Yi4kYXBwbHkoZnVuY3Rpb24oKXtkLiRzZXRWaWV3VmFsdWUoZil9KX19O2lmKGUuaGFzRXZlbnQoXCJpbnB1dFwiKSlhLm9uKFwiaW5wdXRcIixuKTtlbHNle3ZhciBxLHA9ZnVuY3Rpb24oKXtxfHwocT1mLmRlZmVyKGZ1bmN0aW9uKCl7bigpO3E9bnVsbH0pKX07YS5vbihcImtleWRvd25cIixmdW5jdGlvbihhKXthPWEua2V5Q29kZTs5MT09PWF8fCgxNTxhJiYxOT5hfHwzNzw9YSYmNDA+PWEpfHxwKCl9KTtpZihlLmhhc0V2ZW50KFwicGFzdGVcIikpYS5vbihcInBhc3RlIGN1dFwiLHApfWEub24oXCJjaGFuZ2VcIixuKTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXthLnZhbChkLiRpc0VtcHR5KGQuJHZpZXdWYWx1ZSk/XCJcIjpkLiR2aWV3VmFsdWUpfTt2YXIgcz1jLm5nUGF0dGVybjtzJiYoKGU9cy5tYXRjaCgvXlxcLyguKilcXC8oW2dpbV0qKSQvKSk/XG4ocz1SZWdFeHAoZVsxXSxlWzJdKSxlPWZ1bmN0aW9uKGEpe3JldHVybiB1YShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYSl8fHMudGVzdChhKSxhKX0pOmU9ZnVuY3Rpb24oYyl7dmFyIGU9Yi4kZXZhbChzKTtpZighZXx8IWUudGVzdCl0aHJvdyB6KFwibmdQYXR0ZXJuXCIpKFwibm9yZWdleHBcIixzLGUsaWEoYSkpO3JldHVybiB1YShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYyl8fGUudGVzdChjKSxjKX0sZC4kZm9ybWF0dGVycy5wdXNoKGUpLGQuJHBhcnNlcnMucHVzaChlKSk7aWYoYy5uZ01pbmxlbmd0aCl7dmFyIHI9VShjLm5nTWlubGVuZ3RoKTtlPWZ1bmN0aW9uKGEpe3JldHVybiB1YShkLFwibWlubGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg+PXIsYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9aWYoYy5uZ01heGxlbmd0aCl7dmFyIHc9VShjLm5nTWF4bGVuZ3RoKTtlPWZ1bmN0aW9uKGEpe3JldHVybiB1YShkLFwibWF4bGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8XG5hLmxlbmd0aDw9dyxhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX19ZnVuY3Rpb24gV2IoYixhKXtiPVwibmdDbGFzc1wiK2I7cmV0dXJuW1wiJGFuaW1hdGVcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEsYil7dmFyIGM9W10sZD0wO2E6Zm9yKDtkPGEubGVuZ3RoO2QrKyl7Zm9yKHZhciBlPWFbZF0sbD0wO2w8Yi5sZW5ndGg7bCsrKWlmKGU9PWJbbF0pY29udGludWUgYTtjLnB1c2goZSl9cmV0dXJuIGN9ZnVuY3Rpb24gZShhKXtpZighTChhKSl7aWYoRyhhKSlyZXR1cm4gYS5zcGxpdChcIiBcIik7aWYoVChhKSl7dmFyIGI9W107cihhLGZ1bmN0aW9uKGEsYyl7YSYmKGI9Yi5jb25jYXQoYy5zcGxpdChcIiBcIikpKX0pO3JldHVybiBifX1yZXR1cm4gYX1yZXR1cm57cmVzdHJpY3Q6XCJBQ1wiLGxpbms6ZnVuY3Rpb24oZixnLGgpe2Z1bmN0aW9uIGsoYSxiKXt2YXIgYz1nLmRhdGEoXCIkY2xhc3NDb3VudHNcIil8fHt9LGQ9W107cihhLGZ1bmN0aW9uKGEpe2lmKDA8XG5ifHxjW2FdKWNbYV09KGNbYV18fDApK2IsY1thXT09PSsoMDxiKSYmZC5wdXNoKGEpfSk7Zy5kYXRhKFwiJGNsYXNzQ291bnRzXCIsYyk7cmV0dXJuIGQuam9pbihcIiBcIil9ZnVuY3Rpb24gbShiKXtpZighMD09PWF8fGYuJGluZGV4JTI9PT1hKXt2YXIgbT1lKGJ8fFtdKTtpZighbCl7dmFyIHA9ayhtLDEpO2guJGFkZENsYXNzKHApfWVsc2UgaWYoIUNhKGIsbCkpe3ZhciBzPWUobCkscD1kKG0scyksbT1kKHMsbSksbT1rKG0sLTEpLHA9ayhwLDEpOzA9PT1wLmxlbmd0aD9jLnJlbW92ZUNsYXNzKGcsbSk6MD09PW0ubGVuZ3RoP2MuYWRkQ2xhc3MoZyxwKTpjLnNldENsYXNzKGcscCxtKX19bD1oYShiKX12YXIgbDtmLiR3YXRjaChoW2JdLG0sITApO2guJG9ic2VydmUoXCJjbGFzc1wiLGZ1bmN0aW9uKGEpe20oZi4kZXZhbChoW2JdKSl9KTtcIm5nQ2xhc3NcIiE9PWImJmYuJHdhdGNoKFwiJGluZGV4XCIsZnVuY3Rpb24oYyxkKXt2YXIgZz1jJjE7aWYoZyE9PShkJjEpKXt2YXIgbD1lKGYuJGV2YWwoaFtiXSkpO1xuZz09PWE/KGc9ayhsLDEpLGguJGFkZENsYXNzKGcpKTooZz1rKGwsLTEpLGguJHJlbW92ZUNsYXNzKGcpKX19KX19fV19dmFyIE9lPVwidmFsaWRpdHlcIix4PWZ1bmN0aW9uKGIpe3JldHVybiBHKGIpP2IudG9Mb3dlckNhc2UoKTpifSxsYj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LExhPWZ1bmN0aW9uKGIpe3JldHVybiBHKGIpP2IudG9VcHBlckNhc2UoKTpifSxSLEEsRmEsd2E9W10uc2xpY2UsUGU9W10ucHVzaCxCYT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFZhPXooXCJuZ1wiKSxYYT1XLmFuZ3VsYXJ8fChXLmFuZ3VsYXI9e30pLCRhLFBhLG5hPVtcIjBcIixcIjBcIixcIjBcIl07Uj1VKCgvbXNpZSAoXFxkKykvLmV4ZWMoeChuYXZpZ2F0b3IudXNlckFnZW50KSl8fFtdKVsxXSk7aXNOYU4oUikmJihSPVUoKC90cmlkZW50XFwvLio7IHJ2OihcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKSk7di4kaW5qZWN0PVtdO2dhLiRpbmplY3Q9W107dmFyIEw9XG5mdW5jdGlvbigpe3JldHVybiBOKEFycmF5LmlzQXJyYXkpP0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24oYil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09QmEuY2FsbChiKX19KCksJD1mdW5jdGlvbigpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi50cmltKCk6Yn06ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi5yZXBsYWNlKC9eXFxzXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzXFxzKiQvLFwiXCIpOmJ9fSgpO1BhPTk+Uj9mdW5jdGlvbihiKXtiPWIubm9kZU5hbWU/YjpiWzBdO3JldHVybiBiLnNjb3BlTmFtZSYmXCJIVE1MXCIhPWIuc2NvcGVOYW1lP0xhKGIuc2NvcGVOYW1lK1wiOlwiK2Iubm9kZU5hbWUpOmIubm9kZU5hbWV9OmZ1bmN0aW9uKGIpe3JldHVybiBiLm5vZGVOYW1lP2Iubm9kZU5hbWU6YlswXS5ub2RlTmFtZX07dmFyIFphPWZ1bmN0aW9uKCl7aWYoRChaYS5pc0FjdGl2ZV8pKXJldHVybiBaYS5pc0FjdGl2ZV87dmFyIGI9ISghWC5xdWVyeVNlbGVjdG9yKFwiW25nLWNzcF1cIikmJlxuIVgucXVlcnlTZWxlY3RvcihcIltkYXRhLW5nLWNzcF1cIikpO2lmKCFiKXRyeXtuZXcgRnVuY3Rpb24oXCJcIil9Y2F0Y2goYSl7Yj0hMH1yZXR1cm4gWmEuaXNBY3RpdmVfPWJ9LFhjPS9bQS1aXS9nLCRjPXtmdWxsOlwiMS4yLjI4XCIsbWFqb3I6MSxtaW5vcjoyLGRvdDoyOCxjb2RlTmFtZTpcImZpbm5pc2gtZGlzZW1iYXJrYXRpb25cIn07Uy5leHBhbmRvPVwibmczMzlcIjt2YXIgY2I9Uy5jYWNoZT17fSxtZT0xLHNiPVcuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmF0dGFjaEV2ZW50KFwib25cIithLGMpfSxiYj1XLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5kZXRhY2hFdmVudChcIm9uXCIrYSxjKX07Uy5fZGF0YT1mdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5jYWNoZVtiW3RoaXMuZXhwYW5kb11dfHxcbnt9fTt2YXIgaGU9LyhbXFw6XFwtXFxfXSsoLikpL2csaWU9L15tb3ooW0EtWl0pLyxIYj16KFwianFMaXRlXCIpLGplPS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxJYj0vPHwmIz9cXHcrOy8sa2U9LzwoW1xcdzpdKykvLGxlPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxkYT17b3B0aW9uOlsxLCc8c2VsZWN0IG11bHRpcGxlPVwibXVsdGlwbGVcIj4nLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2RhLm9wdGdyb3VwPWRhLm9wdGlvbjtkYS50Ym9keT1kYS50Zm9vdD1kYS5jb2xncm91cD1cbmRhLmNhcHRpb249ZGEudGhlYWQ7ZGEudGg9ZGEudGQ7dmFyIE9hPVMucHJvdG90eXBlPXtyZWFkeTpmdW5jdGlvbihiKXtmdW5jdGlvbiBhKCl7Y3x8KGM9ITAsYigpKX12YXIgYz0hMTtcImNvbXBsZXRlXCI9PT1YLnJlYWR5U3RhdGU/c2V0VGltZW91dChhKToodGhpcy5vbihcIkRPTUNvbnRlbnRMb2FkZWRcIixhKSxTKFcpLm9uKFwibG9hZFwiLGEpKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgYj1bXTtyKHRoaXMsZnVuY3Rpb24oYSl7Yi5wdXNoKFwiXCIrYSl9KTtyZXR1cm5cIltcIitiLmpvaW4oXCIsIFwiKStcIl1cIn0sZXE6ZnVuY3Rpb24oYil7cmV0dXJuIDA8PWI/QSh0aGlzW2JdKTpBKHRoaXNbdGhpcy5sZW5ndGgrYl0pfSxsZW5ndGg6MCxwdXNoOlBlLHNvcnQ6W10uc29ydCxzcGxpY2U6W10uc3BsaWNlfSxyYj17fTtyKFwibXVsdGlwbGUgc2VsZWN0ZWQgY2hlY2tlZCBkaXNhYmxlZCByZWFkT25seSByZXF1aXJlZCBvcGVuXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe3JiW3goYildPWJ9KTtcbnZhciBwYz17fTtyKFwiaW5wdXQgc2VsZWN0IG9wdGlvbiB0ZXh0YXJlYSBidXR0b24gZm9ybSBkZXRhaWxzXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe3BjW0xhKGIpXT0hMH0pO3Ioe2RhdGE6TWIscmVtb3ZlRGF0YTpMYn0sZnVuY3Rpb24oYixhKXtTW2FdPWJ9KTtyKHtkYXRhOk1iLGluaGVyaXRlZERhdGE6cWIsc2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIEEuZGF0YShiLFwiJHNjb3BlXCIpfHxxYihiLnBhcmVudE5vZGV8fGIsW1wiJGlzb2xhdGVTY29wZVwiLFwiJHNjb3BlXCJdKX0saXNvbGF0ZVNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiBBLmRhdGEoYixcIiRpc29sYXRlU2NvcGVcIil8fEEuZGF0YShiLFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIil9LGNvbnRyb2xsZXI6bWMsaW5qZWN0b3I6ZnVuY3Rpb24oYil7cmV0dXJuIHFiKGIsXCIkaW5qZWN0b3JcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6TmIsY3NzOmZ1bmN0aW9uKGIsXG5hLGMpe2E9YWIoYSk7aWYoRChjKSliLnN0eWxlW2FdPWM7ZWxzZXt2YXIgZDs4Pj1SJiYoZD1iLmN1cnJlbnRTdHlsZSYmYi5jdXJyZW50U3R5bGVbYV0sXCJcIj09PWQmJihkPVwiYXV0b1wiKSk7ZD1kfHxiLnN0eWxlW2FdOzg+PVImJihkPVwiXCI9PT1kP3U6ZCk7cmV0dXJuIGR9fSxhdHRyOmZ1bmN0aW9uKGIsYSxjKXt2YXIgZD14KGEpO2lmKHJiW2RdKWlmKEQoYykpYz8oYlthXT0hMCxiLnNldEF0dHJpYnV0ZShhLGQpKTooYlthXT0hMSxiLnJlbW92ZUF0dHJpYnV0ZShkKSk7ZWxzZSByZXR1cm4gYlthXXx8KGIuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oYSl8fHYpLnNwZWNpZmllZD9kOnU7ZWxzZSBpZihEKGMpKWIuc2V0QXR0cmlidXRlKGEsYyk7ZWxzZSBpZihiLmdldEF0dHJpYnV0ZSlyZXR1cm4gYj1iLmdldEF0dHJpYnV0ZShhLDIpLG51bGw9PT1iP3U6Yn0scHJvcDpmdW5jdGlvbihiLGEsYyl7aWYoRChjKSliW2FdPWM7ZWxzZSByZXR1cm4gYlthXX0sdGV4dDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixcbmQpe3ZhciBlPWFbYi5ub2RlVHlwZV07aWYoRihkKSlyZXR1cm4gZT9iW2VdOlwiXCI7YltlXT1kfXZhciBhPVtdOzk+Uj8oYVsxXT1cImlubmVyVGV4dFwiLGFbM109XCJub2RlVmFsdWVcIik6YVsxXT1hWzNdPVwidGV4dENvbnRlbnRcIjtiLiRkdj1cIlwiO3JldHVybiBifSgpLHZhbDpmdW5jdGlvbihiLGEpe2lmKEYoYSkpe2lmKFwiU0VMRUNUXCI9PT1QYShiKSYmYi5tdWx0aXBsZSl7dmFyIGM9W107cihiLm9wdGlvbnMsZnVuY3Rpb24oYSl7YS5zZWxlY3RlZCYmYy5wdXNoKGEudmFsdWV8fGEudGV4dCl9KTtyZXR1cm4gMD09PWMubGVuZ3RoP251bGw6Y31yZXR1cm4gYi52YWx1ZX1iLnZhbHVlPWF9LGh0bWw6ZnVuY3Rpb24oYixhKXtpZihGKGEpKXJldHVybiBiLmlubmVySFRNTDtmb3IodmFyIGM9MCxkPWIuY2hpbGROb2RlcztjPGQubGVuZ3RoO2MrKylNYShkW2NdKTtiLmlubmVySFRNTD1hfSxlbXB0eTpuY30sZnVuY3Rpb24oYixhKXtTLnByb3RvdHlwZVthXT1mdW5jdGlvbihhLGQpe3ZhciBlLFxuZixnPXRoaXMubGVuZ3RoO2lmKGIhPT1uYyYmKDI9PWIubGVuZ3RoJiZiIT09TmImJmIhPT1tYz9hOmQpPT09dSl7aWYoVChhKSl7Zm9yKGU9MDtlPGc7ZSsrKWlmKGI9PT1NYiliKHRoaXNbZV0sYSk7ZWxzZSBmb3IoZiBpbiBhKWIodGhpc1tlXSxmLGFbZl0pO3JldHVybiB0aGlzfWU9Yi4kZHY7Zz1lPT09dT9NYXRoLm1pbihnLDEpOmc7Zm9yKGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPWU/ZStoOmh9cmV0dXJuIGV9Zm9yKGU9MDtlPGc7ZSsrKWIodGhpc1tlXSxhLGQpO3JldHVybiB0aGlzfX0pO3Ioe3JlbW92ZURhdGE6TGIsZGVhbG9jOk1hLG9uOmZ1bmN0aW9uIGEoYyxkLGUsZil7aWYoRChmKSl0aHJvdyBIYihcIm9uYXJnc1wiKTt2YXIgZz1wYShjLFwiZXZlbnRzXCIpLGg9cGEoYyxcImhhbmRsZVwiKTtnfHxwYShjLFwiZXZlbnRzXCIsZz17fSk7aHx8cGEoYyxcImhhbmRsZVwiLGg9bmUoYyxnKSk7cihkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihkKXt2YXIgZj1nW2RdO2lmKCFmKXtpZihcIm1vdXNlZW50ZXJcIj09XG5kfHxcIm1vdXNlbGVhdmVcIj09ZCl7dmFyIGw9WC5ib2R5LmNvbnRhaW5zfHxYLmJvZHkuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ZnVuY3Rpb24oYSxjKXt2YXIgZD05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGU9YyYmYy5wYXJlbnROb2RlO3JldHVybiBhPT09ZXx8ISEoZSYmMT09PWUubm9kZVR5cGUmJihkLmNvbnRhaW5zP2QuY29udGFpbnMoZSk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSYxNikpfTpmdW5jdGlvbihhLGMpe2lmKGMpZm9yKDtjPWMucGFyZW50Tm9kZTspaWYoYz09PWEpcmV0dXJuITA7cmV0dXJuITF9O2dbZF09W107YShjLHttb3VzZWxlYXZlOlwibW91c2VvdXRcIixtb3VzZWVudGVyOlwibW91c2VvdmVyXCJ9W2RdLGZ1bmN0aW9uKGEpe3ZhciBjPWEucmVsYXRlZFRhcmdldDtjJiYoYz09PXRoaXN8fGwodGhpcyxjKSl8fGgoYSxkKX0pfWVsc2Ugc2IoYyxkLGgpLGdbZF09W107Zj1nW2RdfWYucHVzaChlKX0pfSxcbm9mZjpsYyxvbmU6ZnVuY3Rpb24oYSxjLGQpe2E9QShhKTthLm9uKGMsZnVuY3Rpb24gZigpe2Eub2ZmKGMsZCk7YS5vZmYoYyxmKX0pO2Eub24oYyxkKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oYSxjKXt2YXIgZCxlPWEucGFyZW50Tm9kZTtNYShhKTtyKG5ldyBTKGMpLGZ1bmN0aW9uKGMpe2Q/ZS5pbnNlcnRCZWZvcmUoYyxkLm5leHRTaWJsaW5nKTplLnJlcGxhY2VDaGlsZChjLGEpO2Q9Y30pfSxjaGlsZHJlbjpmdW5jdGlvbihhKXt2YXIgYz1bXTtyKGEuY2hpbGROb2RlcyxmdW5jdGlvbihhKXsxPT09YS5ub2RlVHlwZSYmYy5wdXNoKGEpfSk7cmV0dXJuIGN9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8YS5jaGlsZE5vZGVzfHxbXX0sYXBwZW5kOmZ1bmN0aW9uKGEsYyl7cihuZXcgUyhjKSxmdW5jdGlvbihjKXsxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxhLmFwcGVuZENoaWxkKGMpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oYSxcbmMpe2lmKDE9PT1hLm5vZGVUeXBlKXt2YXIgZD1hLmZpcnN0Q2hpbGQ7cihuZXcgUyhjKSxmdW5jdGlvbihjKXthLmluc2VydEJlZm9yZShjLGQpfSl9fSx3cmFwOmZ1bmN0aW9uKGEsYyl7Yz1BKGMpWzBdO3ZhciBkPWEucGFyZW50Tm9kZTtkJiZkLnJlcGxhY2VDaGlsZChjLGEpO2MuYXBwZW5kQ2hpbGQoYSl9LHJlbW92ZTpmdW5jdGlvbihhKXtNYShhKTt2YXIgYz1hLnBhcmVudE5vZGU7YyYmYy5yZW1vdmVDaGlsZChhKX0sYWZ0ZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hLGU9YS5wYXJlbnROb2RlO3IobmV3IFMoYyksZnVuY3Rpb24oYSl7ZS5pbnNlcnRCZWZvcmUoYSxkLm5leHRTaWJsaW5nKTtkPWF9KX0sYWRkQ2xhc3M6cGIscmVtb3ZlQ2xhc3M6b2IsdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe2MmJnIoYy5zcGxpdChcIiBcIiksZnVuY3Rpb24oYyl7dmFyIGY9ZDtGKGYpJiYoZj0hTmIoYSxjKSk7KGY/cGI6b2IpKGEsYyl9KX0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybihhPVxuYS5wYXJlbnROb2RlKSYmMTEhPT1hLm5vZGVUeXBlP2E6bnVsbH0sbmV4dDpmdW5jdGlvbihhKXtpZihhLm5leHRFbGVtZW50U2libGluZylyZXR1cm4gYS5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKGE9YS5uZXh0U2libGluZztudWxsIT1hJiYxIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfSxmaW5kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShjKTpbXX0sY2xvbmU6S2IsdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY7ZT1jLnR5cGV8fGM7dmFyIGc9KHBhKGEsXCJldmVudHNcIil8fHt9KVtlXTtnJiYoZT17cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGlzRGVmYXVsdFByZXZlbnRlZDpmdW5jdGlvbigpe3JldHVybiEwPT09dGhpcy5kZWZhdWx0UHJldmVudGVkfSxzdG9wUHJvcGFnYXRpb246dix0eXBlOmUsdGFyZ2V0OmF9LFxuYy50eXBlJiYoZT1FKGUsYykpLGM9aGEoZyksZj1kP1tlXS5jb25jYXQoZCk6W2VdLHIoYyxmdW5jdGlvbihjKXtjLmFwcGx5KGEsZil9KSl9fSxmdW5jdGlvbihhLGMpe1MucHJvdG90eXBlW2NdPWZ1bmN0aW9uKGMsZSxmKXtmb3IodmFyIGcsaD0wO2g8dGhpcy5sZW5ndGg7aCsrKUYoZyk/KGc9YSh0aGlzW2hdLGMsZSxmKSxEKGcpJiYoZz1BKGcpKSk6SmIoZyxhKHRoaXNbaF0sYyxlLGYpKTtyZXR1cm4gRChnKT9nOnRoaXN9O1MucHJvdG90eXBlLmJpbmQ9Uy5wcm90b3R5cGUub247Uy5wcm90b3R5cGUudW5iaW5kPVMucHJvdG90eXBlLm9mZn0pO2RiLnByb3RvdHlwZT17cHV0OmZ1bmN0aW9uKGEsYyl7dGhpc1tOYShhLHRoaXMubmV4dFVpZCldPWN9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpc1tOYShhLHRoaXMubmV4dFVpZCldfSxyZW1vdmU6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpc1thPU5hKGEsdGhpcy5uZXh0VWlkKV07ZGVsZXRlIHRoaXNbYV07cmV0dXJuIGN9fTt2YXIgcGU9XG4vXmZ1bmN0aW9uXFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL20scWU9LywvLHJlPS9eXFxzKihfPykoXFxTKz8pXFwxXFxzKiQvLG9lPS8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZyxlYj16KFwiJGluamVjdG9yXCIpLFFlPXooXCIkYW5pbWF0ZVwiKSxMZD1bXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe3RoaXMuJCRzZWxlY3RvcnM9e307dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihjLGQpe3ZhciBlPWMrXCItYW5pbWF0aW9uXCI7aWYoYyYmXCIuXCIhPWMuY2hhckF0KDApKXRocm93IFFlKFwibm90Y3NlbFwiLGMpO3RoaXMuJCRzZWxlY3RvcnNbYy5zdWJzdHIoMSldPWU7YS5mYWN0b3J5KGUsZCl9O3RoaXMuY2xhc3NOYW1lRmlsdGVyPWZ1bmN0aW9uKGEpezE9PT1hcmd1bWVudHMubGVuZ3RoJiYodGhpcy4kJGNsYXNzTmFtZUZpbHRlcj1hIGluc3RhbmNlb2YgUmVnRXhwP2E6bnVsbCk7cmV0dXJuIHRoaXMuJCRjbGFzc05hbWVGaWx0ZXJ9O3RoaXMuJGdldD1bXCIkdGltZW91dFwiLFwiJCRhc3luY0NhbGxiYWNrXCIsXG5mdW5jdGlvbihhLGQpe3JldHVybntlbnRlcjpmdW5jdGlvbihhLGMsZyxoKXtnP2cuYWZ0ZXIoYSk6KGMmJmNbMF18fChjPWcucGFyZW50KCkpLGMuYXBwZW5kKGEpKTtoJiZkKGgpfSxsZWF2ZTpmdW5jdGlvbihhLGMpe2EucmVtb3ZlKCk7YyYmZChjKX0sbW92ZTpmdW5jdGlvbihhLGMsZCxoKXt0aGlzLmVudGVyKGEsYyxkLGgpfSxhZGRDbGFzczpmdW5jdGlvbihhLGMsZyl7Yz1HKGMpP2M6TChjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cihhLGZ1bmN0aW9uKGEpe3BiKGEsYyl9KTtnJiZkKGcpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGMsZyl7Yz1HKGMpP2M6TChjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cihhLGZ1bmN0aW9uKGEpe29iKGEsYyl9KTtnJiZkKGcpfSxzZXRDbGFzczpmdW5jdGlvbihhLGMsZyxoKXtyKGEsZnVuY3Rpb24oYSl7cGIoYSxjKTtvYihhLGcpfSk7aCYmZChoKX0sZW5hYmxlZDp2fX1dfV0samE9eihcIiRjb21waWxlXCIpO2djLiRpbmplY3Q9W1wiJHByb3ZpZGVcIixcIiQkc2FuaXRpemVVcmlQcm92aWRlclwiXTtcbnZhciB3ZT0vXih4W1xcOlxcLV9dfGRhdGFbXFw6XFwtX10pL2ksd2M9eihcIiRpbnRlcnBvbGF0ZVwiKSxSZT0vXihbXlxcPyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyx6ZT17aHR0cDo4MCxodHRwczo0NDMsZnRwOjIxfSxTYj16KFwiJGxvY2F0aW9uXCIpO0FjLnByb3RvdHlwZT1UYi5wcm90b3R5cGU9emMucHJvdG90eXBlPXskJGh0bWw1OiExLCQkcmVwbGFjZTohMSxhYnNVcmw6dGIoXCIkJGFic1VybFwiKSx1cmw6ZnVuY3Rpb24oYSl7aWYoRihhKSlyZXR1cm4gdGhpcy4kJHVybDthPVJlLmV4ZWMoYSk7YVsxXSYmdGhpcy5wYXRoKGRlY29kZVVSSUNvbXBvbmVudChhWzFdKSk7KGFbMl18fGFbMV0pJiZ0aGlzLnNlYXJjaChhWzNdfHxcIlwiKTt0aGlzLmhhc2goYVs1XXx8XCJcIik7cmV0dXJuIHRoaXN9LHByb3RvY29sOnRiKFwiJCRwcm90b2NvbFwiKSxob3N0OnRiKFwiJCRob3N0XCIpLHBvcnQ6dGIoXCIkJHBvcnRcIikscGF0aDpCYyhcIiQkcGF0aFwiLGZ1bmN0aW9uKGEpe2E9bnVsbCE9PWE/YS50b1N0cmluZygpOlxuXCJcIjtyZXR1cm5cIi9cIj09YS5jaGFyQXQoMCk/YTpcIi9cIithfSksc2VhcmNoOmZ1bmN0aW9uKGEsYyl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdGhpcy4kJHNlYXJjaDtjYXNlIDE6aWYoRyhhKXx8amIoYSkpYT1hLnRvU3RyaW5nKCksdGhpcy4kJHNlYXJjaD1jYyhhKTtlbHNlIGlmKFQoYSkpcihhLGZ1bmN0aW9uKGMsZSl7bnVsbD09YyYmZGVsZXRlIGFbZV19KSx0aGlzLiQkc2VhcmNoPWE7ZWxzZSB0aHJvdyBTYihcImlzcmNoYXJnXCIpO2JyZWFrO2RlZmF1bHQ6RihjKXx8bnVsbD09PWM/ZGVsZXRlIHRoaXMuJCRzZWFyY2hbYV06dGhpcy4kJHNlYXJjaFthXT1jfXRoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9LGhhc2g6QmMoXCIkJGhhc2hcIixmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWE/YS50b1N0cmluZygpOlwiXCJ9KSxyZXBsYWNlOmZ1bmN0aW9uKCl7dGhpcy4kJHJlcGxhY2U9ITA7cmV0dXJuIHRoaXN9fTt2YXIgbGE9eihcIiRwYXJzZVwiKSxFYz1cbnt9LHlhLFNlPUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLFRlPUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSxQYz1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCxoYj17XCJudWxsXCI6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sXCJ0cnVlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sXCJmYWxzZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITF9LHVuZGVmaW5lZDp2LFwiK1wiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybiBEKGQpP0QoZSk/ZCtlOmQ6RChlKT9lOnV9LFwiLVwiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybihEKGQpP2Q6MCktKEQoZSk/ZTowKX0sXCIqXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSplKGEsYyl9LFwiL1wiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykvZShhLGMpfSxcIiVcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJWUoYSxjKX0sXCJeXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKV5cbmUoYSxjKX0sXCI9XCI6dixcIj09PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PT1lKGEsYyl9LFwiIT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9PWUoYSxjKX0sXCI9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk9PWUoYSxjKX0sXCIhPVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPWUoYSxjKX0sXCI8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTxlKGEsYyl9LFwiPlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk+ZShhLGMpfSxcIjw9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTw9ZShhLGMpfSxcIj49XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT49ZShhLGMpfSxcIiYmXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSYmZShhLGMpfSxcInx8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKXx8ZShhLGMpfSxcIiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLFxuYykmZShhLGMpfSxcInxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZShhLGMpKGEsYyxkKGEsYykpfSxcIiFcIjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIWQoYSxjKX19LFVlPXtuOlwiXFxuXCIsZjpcIlxcZlwiLHI6XCJcXHJcIix0OlwiXFx0XCIsdjpcIlxcdlwiLFwiJ1wiOlwiJ1wiLCdcIic6J1wiJ30sVWI9ZnVuY3Rpb24oYSl7dGhpcy5vcHRpb25zPWF9O1ViLnByb3RvdHlwZT17Y29uc3RydWN0b3I6VWIsbGV4OmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMuaW5kZXg9MDt0aGlzLmNoPXU7dGhpcy5sYXN0Q2g9XCI6XCI7Zm9yKHRoaXMudG9rZW5zPVtdO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3RoaXMuY2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtpZih0aGlzLmlzKFwiXFxcIidcIikpdGhpcy5yZWFkU3RyaW5nKHRoaXMuY2gpO2Vsc2UgaWYodGhpcy5pc051bWJlcih0aGlzLmNoKXx8dGhpcy5pcyhcIi5cIikmJnRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKXRoaXMucmVhZE51bWJlcigpO2Vsc2UgaWYodGhpcy5pc0lkZW50KHRoaXMuY2gpKXRoaXMucmVhZElkZW50KCk7XG5lbHNlIGlmKHRoaXMuaXMoXCIoKXt9W10uLDs6P1wiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaH0pLHRoaXMuaW5kZXgrKztlbHNlIGlmKHRoaXMuaXNXaGl0ZXNwYWNlKHRoaXMuY2gpKXt0aGlzLmluZGV4Kys7Y29udGludWV9ZWxzZXthPXRoaXMuY2grdGhpcy5wZWVrKCk7dmFyIGM9YSt0aGlzLnBlZWsoMiksZD1oYlt0aGlzLmNoXSxlPWhiW2FdLGY9aGJbY107Zj8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmMsZm46Zn0pLHRoaXMuaW5kZXgrPTMpOmU/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDphLGZuOmV9KSx0aGlzLmluZGV4Kz0yKTpkPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaCxmbjpkfSksdGhpcy5pbmRleCs9MSk6dGhpcy50aHJvd0Vycm9yKFwiVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciBcIix0aGlzLmluZGV4LHRoaXMuaW5kZXgrXG4xKX10aGlzLmxhc3RDaD10aGlzLmNofXJldHVybiB0aGlzLnRva2Vuc30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5jaCl9LHdhczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PWEuaW5kZXhPZih0aGlzLmxhc3RDaCl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LGlzTnVtYmVyOmZ1bmN0aW9uKGEpe3JldHVyblwiMFwiPD1hJiZcIjlcIj49YX0saXNXaGl0ZXNwYWNlOmZ1bmN0aW9uKGEpe3JldHVyblwiIFwiPT09YXx8XCJcXHJcIj09PWF8fFwiXFx0XCI9PT1hfHxcIlxcblwiPT09YXx8XCJcXHZcIj09PWF8fFwiXFx1MDBhMFwiPT09YX0saXNJZGVudDpmdW5jdGlvbihhKXtyZXR1cm5cImFcIjw9YSYmXCJ6XCI+PWF8fFwiQVwiPD1hJiZcIlpcIj49YXx8XCJfXCI9PT1hfHxcIiRcIj09PWF9LGlzRXhwT3BlcmF0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuXCItXCI9PT1hfHxcIitcIj09PWF8fHRoaXMuaXNOdW1iZXIoYSl9LFxudGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9RChjKT9cInMgXCIrYytcIi1cIit0aGlzLmluZGV4K1wiIFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXCJdXCI6XCIgXCIrZDt0aHJvdyBsYShcImxleGVyclwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGM9dGhpcy5pbmRleDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZD14KHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO2lmKFwiLlwiPT1kfHx0aGlzLmlzTnVtYmVyKGQpKWErPWQ7ZWxzZXt2YXIgZT10aGlzLnBlZWsoKTtpZihcImVcIj09ZCYmdGhpcy5pc0V4cE9wZXJhdG9yKGUpKWErPWQ7ZWxzZSBpZih0aGlzLmlzRXhwT3BlcmF0b3IoZCkmJmUmJnRoaXMuaXNOdW1iZXIoZSkmJlwiZVwiPT1hLmNoYXJBdChhLmxlbmd0aC0xKSlhKz1kO2Vsc2UgaWYoIXRoaXMuaXNFeHBPcGVyYXRvcihkKXx8ZSYmdGhpcy5pc051bWJlcihlKXx8XCJlXCIhPWEuY2hhckF0KGEubGVuZ3RoLVxuMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIpfXRoaXMuaW5kZXgrK31hKj0xO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDphLGxpdGVyYWw6ITAsY29uc3RhbnQ6ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gYX19KX0scmVhZElkZW50OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMsYz1cIlwiLGQ9dGhpcy5pbmRleCxlLGYsZyxoO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtpZihcIi5cIj09PWh8fHRoaXMuaXNJZGVudChoKXx8dGhpcy5pc051bWJlcihoKSlcIi5cIj09PWgmJihlPXRoaXMuaW5kZXgpLGMrPWg7ZWxzZSBicmVhazt0aGlzLmluZGV4Kyt9aWYoZSlmb3IoZj10aGlzLmluZGV4O2Y8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdChmKTtpZihcIihcIj09PWgpe2c9Yy5zdWJzdHIoZS1kKzEpO2M9Yy5zdWJzdHIoMCxlLWQpO3RoaXMuaW5kZXg9ZjticmVha31pZih0aGlzLmlzV2hpdGVzcGFjZShoKSlmKys7XG5lbHNlIGJyZWFrfWQ9e2luZGV4OmQsdGV4dDpjfTtpZihoYi5oYXNPd25Qcm9wZXJ0eShjKSlkLmZuPWhiW2NdLGQubGl0ZXJhbD0hMCxkLmNvbnN0YW50PSEwO2Vsc2V7dmFyIGs9RGMoYyx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtkLmZuPUUoZnVuY3Rpb24oYSxjKXtyZXR1cm4gayhhLGMpfSx7YXNzaWduOmZ1bmN0aW9uKGQsZSl7cmV0dXJuIHViKGQsYyxlLGEudGV4dCxhLm9wdGlvbnMpfX0pfXRoaXMudG9rZW5zLnB1c2goZCk7ZyYmKHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUsdGV4dDpcIi5cIn0pLHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUrMSx0ZXh0Omd9KSl9LHJlYWRTdHJpbmc6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5pbmRleDt0aGlzLmluZGV4Kys7Zm9yKHZhciBkPVwiXCIsZT1hLGY9ITE7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dmFyIGc9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSxlPWUrZztpZihmKVwidVwiPT09Zz8oZj10aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXgrXG4xLHRoaXMuaW5kZXgrNSksZi5tYXRjaCgvW1xcZGEtZl17NH0vaSl8fHRoaXMudGhyb3dFcnJvcihcIkludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1XCIrZitcIl1cIiksdGhpcy5pbmRleCs9NCxkKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGYsMTYpKSk6ZCs9VWVbZ118fGcsZj0hMTtlbHNlIGlmKFwiXFxcXFwiPT09ZylmPSEwO2Vsc2V7aWYoZz09PWEpe3RoaXMuaW5kZXgrKzt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLHRleHQ6ZSxzdHJpbmc6ZCxsaXRlcmFsOiEwLGNvbnN0YW50OiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGR9fSk7cmV0dXJufWQrPWd9dGhpcy5pbmRleCsrfXRoaXMudGhyb3dFcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLGMpfX07dmFyIGdiPWZ1bmN0aW9uKGEsYyxkKXt0aGlzLmxleGVyPWE7dGhpcy4kZmlsdGVyPWM7dGhpcy5vcHRpb25zPWR9O2diLlpFUk89RShmdW5jdGlvbigpe3JldHVybiAwfSx7Y29uc3RhbnQ6ITB9KTtnYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmdiLFxucGFyc2U6ZnVuY3Rpb24oYSl7dGhpcy50ZXh0PWE7dGhpcy50b2tlbnM9dGhpcy5sZXhlci5sZXgoYSk7YT10aGlzLnN0YXRlbWVudHMoKTswIT09dGhpcy50b2tlbnMubGVuZ3RoJiZ0aGlzLnRocm93RXJyb3IoXCJpcyBhbiB1bmV4cGVjdGVkIHRva2VuXCIsdGhpcy50b2tlbnNbMF0pO2EubGl0ZXJhbD0hIWEubGl0ZXJhbDthLmNvbnN0YW50PSEhYS5jb25zdGFudDtyZXR1cm4gYX0scHJpbWFyeTpmdW5jdGlvbigpe3ZhciBhO2lmKHRoaXMuZXhwZWN0KFwiKFwiKSlhPXRoaXMuZmlsdGVyQ2hhaW4oKSx0aGlzLmNvbnN1bWUoXCIpXCIpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJbXCIpKWE9dGhpcy5hcnJheURlY2xhcmF0aW9uKCk7ZWxzZSBpZih0aGlzLmV4cGVjdChcIntcIikpYT10aGlzLm9iamVjdCgpO2Vsc2V7dmFyIGM9dGhpcy5leHBlY3QoKTsoYT1jLmZuKXx8dGhpcy50aHJvd0Vycm9yKFwibm90IGEgcHJpbWFyeSBleHByZXNzaW9uXCIsYyk7YS5saXRlcmFsPSEhYy5saXRlcmFsO2EuY29uc3RhbnQ9XG4hIWMuY29uc3RhbnR9Zm9yKHZhciBkO2M9dGhpcy5leHBlY3QoXCIoXCIsXCJbXCIsXCIuXCIpOylcIihcIj09PWMudGV4dD8oYT10aGlzLmZ1bmN0aW9uQ2FsbChhLGQpLGQ9bnVsbCk6XCJbXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMub2JqZWN0SW5kZXgoYSkpOlwiLlwiPT09Yy50ZXh0PyhkPWEsYT10aGlzLmZpZWxkQWNjZXNzKGEpKTp0aGlzLnRocm93RXJyb3IoXCJJTVBPU1NJQkxFXCIpO3JldHVybiBhfSx0aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyl7dGhyb3cgbGEoXCJzeW50YXhcIixjLnRleHQsYSxjLmluZGV4KzEsdGhpcy50ZXh0LHRoaXMudGV4dC5zdWJzdHJpbmcoYy5pbmRleCkpO30scGVla1Rva2VuOmZ1bmN0aW9uKCl7aWYoMD09PXRoaXMudG9rZW5zLmxlbmd0aCl0aHJvdyBsYShcInVlb2VcIix0aGlzLnRleHQpO3JldHVybiB0aGlzLnRva2Vuc1swXX0scGVlazpmdW5jdGlvbihhLGMsZCxlKXtpZigwPHRoaXMudG9rZW5zLmxlbmd0aCl7dmFyIGY9dGhpcy50b2tlbnNbMF0sZz1mLnRleHQ7aWYoZz09PVxuYXx8Zz09PWN8fGc9PT1kfHxnPT09ZXx8IShhfHxjfHxkfHxlKSlyZXR1cm4gZn1yZXR1cm4hMX0sZXhwZWN0OmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybihhPXRoaXMucGVlayhhLGMsZCxlKSk/KHRoaXMudG9rZW5zLnNoaWZ0KCksYSk6ITF9LGNvbnN1bWU6ZnVuY3Rpb24oYSl7dGhpcy5leHBlY3QoYSl8fHRoaXMudGhyb3dFcnJvcihcImlzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbXCIrYStcIl1cIix0aGlzLnBlZWsoKSl9LHVuYXJ5Rm46ZnVuY3Rpb24oYSxjKXtyZXR1cm4gRShmdW5jdGlvbihkLGUpe3JldHVybiBhKGQsZSxjKX0se2NvbnN0YW50OmMuY29uc3RhbnR9KX0sdGVybmFyeUZuOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gRShmdW5jdGlvbihlLGYpe3JldHVybiBhKGUsZik/YyhlLGYpOmQoZSxmKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmMuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sYmluYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBFKGZ1bmN0aW9uKGUsZil7cmV0dXJuIGMoZSxcbmYsYSxkKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sc3RhdGVtZW50czpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXTs7KWlmKDA8dGhpcy50b2tlbnMubGVuZ3RoJiYhdGhpcy5wZWVrKFwifVwiLFwiKVwiLFwiO1wiLFwiXVwiKSYmYS5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSksIXRoaXMuZXhwZWN0KFwiO1wiKSlyZXR1cm4gMT09PWEubGVuZ3RoP2FbMF06ZnVuY3Rpb24oYyxkKXtmb3IodmFyIGUsZj0wO2Y8YS5sZW5ndGg7ZisrKXt2YXIgZz1hW2ZdO2cmJihlPWcoYyxkKSl9cmV0dXJuIGV9fSxmaWx0ZXJDaGFpbjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cHJlc3Npb24oKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInxcIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmZpbHRlcigpKTtlbHNlIHJldHVybiBhfSxmaWx0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHBlY3QoKSxjPXRoaXMuJGZpbHRlcihhLnRleHQpLGQ9W107OylpZihhPXRoaXMuZXhwZWN0KFwiOlwiKSlkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuZWxzZXt2YXIgZT1mdW5jdGlvbihhLGUsaCl7aD1baF07Zm9yKHZhciBrPTA7azxkLmxlbmd0aDtrKyspaC5wdXNoKGRba10oYSxlKSk7cmV0dXJuIGMuYXBwbHkoYSxoKX07cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGV9fX0sZXhwcmVzc2lvbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFzc2lnbm1lbnQoKX0sYXNzaWdubWVudDpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGVybmFyeSgpLGMsZDtyZXR1cm4oZD10aGlzLmV4cGVjdChcIj1cIikpPyhhLmFzc2lnbnx8dGhpcy50aHJvd0Vycm9yKFwiaW1wbGllcyBhc3NpZ25tZW50IGJ1dCBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZygwLGQuaW5kZXgpK1wiXSBjYW4gbm90IGJlIGFzc2lnbmVkIHRvXCIsZCksYz10aGlzLnRlcm5hcnkoKSxmdW5jdGlvbihkLGYpe3JldHVybiBhLmFzc2lnbihkLGMoZCxmKSxmKX0pOmF9LHRlcm5hcnk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmxvZ2ljYWxPUigpLGMsZDtpZih0aGlzLmV4cGVjdChcIj9cIikpe2M9dGhpcy5hc3NpZ25tZW50KCk7XG5pZihkPXRoaXMuZXhwZWN0KFwiOlwiKSlyZXR1cm4gdGhpcy50ZXJuYXJ5Rm4oYSxjLHRoaXMuYXNzaWdubWVudCgpKTt0aGlzLnRocm93RXJyb3IoXCJleHBlY3RlZCA6XCIsZCl9ZWxzZSByZXR1cm4gYX0sbG9naWNhbE9SOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubG9naWNhbEFORCgpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifHxcIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmxvZ2ljYWxBTkQoKSk7ZWxzZSByZXR1cm4gYX0sbG9naWNhbEFORDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZXF1YWxpdHkoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCImJlwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpKTtyZXR1cm4gYX0sZXF1YWxpdHk6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnJlbGF0aW9uYWwoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI9PVwiLFwiIT1cIixcIj09PVwiLFwiIT09XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5lcXVhbGl0eSgpKTtyZXR1cm4gYX0sXG5yZWxhdGlvbmFsOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5hZGRpdGl2ZSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIjxcIixcIj5cIixcIjw9XCIsXCI+PVwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMucmVsYXRpb25hbCgpKTtyZXR1cm4gYX0sYWRkaXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5tdWx0aXBsaWNhdGl2ZSgpLGM7Yz10aGlzLmV4cGVjdChcIitcIixcIi1cIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtyZXR1cm4gYX0sbXVsdGlwbGljYXRpdmU6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy51bmFyeSgpLGM7Yz10aGlzLmV4cGVjdChcIipcIixcIi9cIixcIiVcIik7KWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy51bmFyeSgpKTtyZXR1cm4gYX0sdW5hcnk6ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gdGhpcy5leHBlY3QoXCIrXCIpP3RoaXMucHJpbWFyeSgpOihhPXRoaXMuZXhwZWN0KFwiLVwiKSk/dGhpcy5iaW5hcnlGbihnYi5aRVJPLGEuZm4sXG50aGlzLnVuYXJ5KCkpOihhPXRoaXMuZXhwZWN0KFwiIVwiKSk/dGhpcy51bmFyeUZuKGEuZm4sdGhpcy51bmFyeSgpKTp0aGlzLnByaW1hcnkoKX0sZmllbGRBY2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwZWN0KCkudGV4dCxlPURjKGQsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7cmV0dXJuIEUoZnVuY3Rpb24oYyxkLGgpe3JldHVybiBlKGh8fGEoYyxkKSl9LHthc3NpZ246ZnVuY3Rpb24oZSxnLGgpeyhoPWEoZSxoKSl8fGEuYXNzaWduKGUsaD17fSk7cmV0dXJuIHViKGgsZCxnLGMudGV4dCxjLm9wdGlvbnMpfX0pfSxvYmplY3RJbmRleDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHByZXNzaW9uKCk7dGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4gRShmdW5jdGlvbihlLGYpe3ZhciBnPWEoZSxmKSxoPWQoZSxmKSxrO2thKGgsYy50ZXh0KTtpZighZylyZXR1cm4gdTsoZz1tYShnW2hdLGMudGV4dCkpJiYoZy50aGVuJiZjLm9wdGlvbnMudW53cmFwUHJvbWlzZXMpJiZcbihrPWcsXCIkJHZcImluIGd8fChrLiQkdj11LGsudGhlbihmdW5jdGlvbihhKXtrLiQkdj1hfSkpLGc9Zy4kJHYpO3JldHVybiBnfSx7YXNzaWduOmZ1bmN0aW9uKGUsZixnKXt2YXIgaD1rYShkKGUsZyksYy50ZXh0KTsoZz1tYShhKGUsZyksYy50ZXh0KSl8fGEuYXNzaWduKGUsZz17fSk7cmV0dXJuIGdbaF09Zn19KX0sZnVuY3Rpb25DYWxsOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9W107aWYoXCIpXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2RvIGQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCIpXCIpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKGYsZyl7Zm9yKHZhciBoPVtdLGs9Yz9jKGYsZyk6ZixtPTA7bTxkLmxlbmd0aDttKyspaC5wdXNoKG1hKGRbbV0oZixnKSxlLnRleHQpKTttPWEoZixnLGspfHx2O21hKGssZS50ZXh0KTt2YXIgbD1lLnRleHQ7aWYobSl7aWYobS5jb25zdHJ1Y3Rvcj09PW0pdGhyb3cgbGEoXCJpc2VjZm5cIixcbmwpO2lmKG09PT1TZXx8bT09PVRlfHxQYyYmbT09PVBjKXRocm93IGxhKFwiaXNlY2ZmXCIsbCk7fWg9bS5hcHBseT9tLmFwcGx5KGssaCk6bShoWzBdLGhbMV0saFsyXSxoWzNdLGhbNF0pO3JldHVybiBtYShoLGUudGV4dCl9fSxhcnJheURlY2xhcmF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIl1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97aWYodGhpcy5wZWVrKFwiXVwiKSlicmVhazt2YXIgZD10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goZCk7ZC5jb25zdGFudHx8KGM9ITEpfXdoaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiXVwiKTtyZXR1cm4gRShmdW5jdGlvbihjLGQpe2Zvcih2YXIgZz1bXSxoPTA7aDxhLmxlbmd0aDtoKyspZy5wdXNoKGFbaF0oYyxkKSk7cmV0dXJuIGd9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX0sb2JqZWN0OmZ1bmN0aW9uKCl7dmFyIGE9W10sYz0hMDtpZihcIn1cIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG97aWYodGhpcy5wZWVrKFwifVwiKSlicmVhaztcbnZhciBkPXRoaXMuZXhwZWN0KCksZD1kLnN0cmluZ3x8ZC50ZXh0O3RoaXMuY29uc3VtZShcIjpcIik7dmFyIGU9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKHtrZXk6ZCx2YWx1ZTplfSk7ZS5jb25zdGFudHx8KGM9ITEpfXdoaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwifVwiKTtyZXR1cm4gRShmdW5jdGlvbihjLGQpe2Zvcih2YXIgZT17fSxrPTA7azxhLmxlbmd0aDtrKyspe3ZhciBtPWFba107ZVttLmtleV09bS52YWx1ZShjLGQpfXJldHVybiBlfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9fTt2YXIgQ2U9e30sQmU9e30semE9eihcIiRzY2VcIiksZmE9e0hUTUw6XCJodG1sXCIsQ1NTOlwiY3NzXCIsVVJMOlwidXJsXCIsUkVTT1VSQ0VfVVJMOlwicmVzb3VyY2VVcmxcIixKUzpcImpzXCJ9LFk9WC5jcmVhdGVFbGVtZW50KFwiYVwiKSxHYz14YShXLmxvY2F0aW9uLmhyZWYsITApO2tjLiRpbmplY3Q9W1wiJHByb3ZpZGVcIl07SGMuJGluamVjdD1bXCIkbG9jYWxlXCJdO0pjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTtcbnZhciBNYz1cIi5cIixNZT17eXl5eTpaKFwiRnVsbFllYXJcIiw0KSx5eTpaKFwiRnVsbFllYXJcIiwyLDAsITApLHk6WihcIkZ1bGxZZWFyXCIsMSksTU1NTTp2YihcIk1vbnRoXCIpLE1NTTp2YihcIk1vbnRoXCIsITApLE1NOlooXCJNb250aFwiLDIsMSksTTpaKFwiTW9udGhcIiwxLDEpLGRkOlooXCJEYXRlXCIsMiksZDpaKFwiRGF0ZVwiLDEpLEhIOlooXCJIb3Vyc1wiLDIpLEg6WihcIkhvdXJzXCIsMSksaGg6WihcIkhvdXJzXCIsMiwtMTIpLGg6WihcIkhvdXJzXCIsMSwtMTIpLG1tOlooXCJNaW51dGVzXCIsMiksbTpaKFwiTWludXRlc1wiLDEpLHNzOlooXCJTZWNvbmRzXCIsMiksczpaKFwiU2Vjb25kc1wiLDEpLHNzczpaKFwiTWlsbGlzZWNvbmRzXCIsMyksRUVFRTp2YihcIkRheVwiKSxFRUU6dmIoXCJEYXlcIiwhMCksYTpmdW5jdGlvbihhLGMpe3JldHVybiAxMj5hLmdldEhvdXJzKCk/Yy5BTVBNU1swXTpjLkFNUE1TWzFdfSxaOmZ1bmN0aW9uKGEpe2E9LTEqYS5nZXRUaW1lem9uZU9mZnNldCgpO3JldHVybiBhPSgwPD1hP1wiK1wiOlwiXCIpKyhWYihNYXRoWzA8XG5hP1wiZmxvb3JcIjpcImNlaWxcIl0oYS82MCksMikrVmIoTWF0aC5hYnMoYSU2MCksMikpfX0sTGU9LygoPzpbXnlNZEhobXNhWkUnXSspfCg/OicoPzpbXiddfCcnKSonKXwoPzpFK3x5K3xNK3xkK3xIK3xoK3xtK3xzK3xhfFopKSguKikvLEtlPS9eXFwtP1xcZCskLztJYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07dmFyIEllPWFhKHgpLEplPWFhKExhKTtLYy4kaW5qZWN0PVtcIiRwYXJzZVwiXTt2YXIgY2Q9YWEoe3Jlc3RyaWN0OlwiRVwiLGNvbXBpbGU6ZnVuY3Rpb24oYSxjKXs4Pj1SJiYoYy5ocmVmfHxjLm5hbWV8fGMuJHNldChcImhyZWZcIixcIlwiKSxhLmFwcGVuZChYLmNyZWF0ZUNvbW1lbnQoXCJJRSBmaXhcIikpKTtpZighYy5ocmVmJiYhYy54bGlua0hyZWYmJiFjLm5hbWUpcmV0dXJuIGZ1bmN0aW9uKGEsYyl7dmFyIGY9XCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09QmEuY2FsbChjLnByb3AoXCJocmVmXCIpKT9cInhsaW5rOmhyZWZcIjpcImhyZWZcIjtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtjLmF0dHIoZil8fFxuYS5wcmV2ZW50RGVmYXVsdCgpfSl9fX0pLEZiPXt9O3IocmIsZnVuY3Rpb24oYSxjKXtpZihcIm11bHRpcGxlXCIhPWEpe3ZhciBkPXFhKFwibmctXCIrYyk7RmJbZF09ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6MTAwLGxpbms6ZnVuY3Rpb24oYSxmLGcpe2EuJHdhdGNoKGdbZF0sZnVuY3Rpb24oYSl7Zy4kc2V0KGMsISFhKX0pfX19fX0pO3IoW1wic3JjXCIsXCJzcmNzZXRcIixcImhyZWZcIl0sZnVuY3Rpb24oYSl7dmFyIGM9cWEoXCJuZy1cIithKTtGYltjXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eTo5OSxsaW5rOmZ1bmN0aW9uKGQsZSxmKXt2YXIgZz1hLGg9YTtcImhyZWZcIj09PWEmJlwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PUJhLmNhbGwoZS5wcm9wKFwiaHJlZlwiKSkmJihoPVwieGxpbmtIcmVmXCIsZi4kYXR0cltoXT1cInhsaW5rOmhyZWZcIixnPW51bGwpO2YuJG9ic2VydmUoYyxmdW5jdGlvbihjKXtjPyhmLiRzZXQoaCxjKSxSJiZnJiZlLnByb3AoZyxmW2hdKSk6XCJocmVmXCI9PT1cbmEmJmYuJHNldChoLG51bGwpfSl9fX19KTt2YXIgeWI9eyRhZGRDb250cm9sOnYsJHJlbW92ZUNvbnRyb2w6diwkc2V0VmFsaWRpdHk6diwkc2V0RGlydHk6diwkc2V0UHJpc3RpbmU6dn07TmMuJGluamVjdD1bXCIkZWxlbWVudFwiLFwiJGF0dHJzXCIsXCIkc2NvcGVcIixcIiRhbmltYXRlXCJdO3ZhciBRYz1mdW5jdGlvbihhKXtyZXR1cm5bXCIkdGltZW91dFwiLGZ1bmN0aW9uKGMpe3JldHVybntuYW1lOlwiZm9ybVwiLHJlc3RyaWN0OmE/XCJFQUNcIjpcIkVcIixjb250cm9sbGVyOk5jLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsZSxmLGcpe2lmKCFmLmFjdGlvbil7dmFyIGg9ZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMX07c2IoZVswXSxcInN1Ym1pdFwiLGgpO2Uub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7YyhmdW5jdGlvbigpe2JiKGVbMF0sXCJzdWJtaXRcIixoKX0sMCwhMSl9KX12YXIgaz1lLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpLFxubT1mLm5hbWV8fGYubmdGb3JtO20mJnViKGEsbSxnLG0pO2lmKGspZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtrLiRyZW1vdmVDb250cm9sKGcpO20mJnViKGEsbSx1LG0pO0UoZyx5Yil9KX19fX19XX0sZGQ9UWMoKSxxZD1RYyghMCksVmU9L14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/JC8sV2U9L15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2ksWGU9L15cXHMqKFxcLXxcXCspPyhcXGQrfChcXGQqKFxcLlxcZCopKSlcXHMqJC8sUmM9e3RleHQ6QWIsbnVtYmVyOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtBYihhLGMsZCxlLGYsZyk7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3ZhciBjPWUuJGlzRW1wdHkoYSk7aWYoY3x8WGUudGVzdChhKSlyZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJudW1iZXJcIixcbiEwKSxcIlwiPT09YT9udWxsOmM/YTpwYXJzZUZsb2F0KGEpO2UuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsITEpO3JldHVybiB1fSk7TmUoZSxcIm51bWJlclwiLFllLG51bGwsZS4kJHZhbGlkaXR5U3RhdGUpO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKT9cIlwiOlwiXCIrYX0pO2QubWluJiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWluKTtyZXR1cm4gdWEoZSxcIm1pblwiLGUuJGlzRW1wdHkoYSl8fGE+PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxlLiRmb3JtYXR0ZXJzLnB1c2goYSkpO2QubWF4JiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWF4KTtyZXR1cm4gdWEoZSxcIm1heFwiLGUuJGlzRW1wdHkoYSl8fGE8PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxlLiRmb3JtYXR0ZXJzLnB1c2goYSkpO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gdWEoZSxcIm51bWJlclwiLGUuJGlzRW1wdHkoYSl8fFxuamIoYSksYSl9KX0sdXJsOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtBYihhLGMsZCxlLGYsZyk7YT1mdW5jdGlvbihhKXtyZXR1cm4gdWEoZSxcInVybFwiLGUuJGlzRW1wdHkoYSl8fFZlLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LGVtYWlsOmZ1bmN0aW9uKGEsYyxkLGUsZixnKXtBYihhLGMsZCxlLGYsZyk7YT1mdW5jdGlvbihhKXtyZXR1cm4gdWEoZSxcImVtYWlsXCIsZS4kaXNFbXB0eShhKXx8V2UudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0scmFkaW86ZnVuY3Rpb24oYSxjLGQsZSl7RihkLm5hbWUpJiZjLmF0dHIoXCJuYW1lXCIsaWIoKSk7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQmJmEuJGFwcGx5KGZ1bmN0aW9uKCl7ZS4kc2V0Vmlld1ZhbHVlKGQudmFsdWUpfSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZC52YWx1ZT09ZS4kdmlld1ZhbHVlfTtcbmQuJG9ic2VydmUoXCJ2YWx1ZVwiLGUuJHJlbmRlcil9LGNoZWNrYm94OmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmPWQubmdUcnVlVmFsdWUsZz1kLm5nRmFsc2VWYWx1ZTtHKGYpfHwoZj0hMCk7RyhnKXx8KGc9ITEpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoY1swXS5jaGVja2VkKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWUuJHZpZXdWYWx1ZX07ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9PWZ9O2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT09PWZ9KTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGE/ZjpnfSl9LGhpZGRlbjp2LGJ1dHRvbjp2LHN1Ym1pdDp2LHJlc2V0OnYsZmlsZTp2fSxZZT1bXCJiYWRJbnB1dFwiXSxoYz1bXCIkYnJvd3NlclwiLFwiJHNuaWZmZXJcIixmdW5jdGlvbihhLGMpe3JldHVybntyZXN0cmljdDpcIkVcIixyZXF1aXJlOlwiP25nTW9kZWxcIixcbmxpbms6ZnVuY3Rpb24oZCxlLGYsZyl7ZyYmKFJjW3goZi50eXBlKV18fFJjLnRleHQpKGQsZSxmLGcsYyxhKX19fV0sd2I9XCJuZy12YWxpZFwiLHhiPVwibmctaW52YWxpZFwiLFJhPVwibmctcHJpc3RpbmVcIix6Yj1cIm5nLWRpcnR5XCIsWmU9W1wiJHNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGF0dHJzXCIsXCIkZWxlbWVudFwiLFwiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZixnKXtmdW5jdGlvbiBoKGEsYyl7Yz1jP1wiLVwiK25iKGMsXCItXCIpOlwiXCI7Zy5yZW1vdmVDbGFzcyhlLChhP3hiOndiKStjKTtnLmFkZENsYXNzKGUsKGE/d2I6eGIpK2MpfXRoaXMuJG1vZGVsVmFsdWU9dGhpcy4kdmlld1ZhbHVlPU51bWJlci5OYU47dGhpcy4kcGFyc2Vycz1bXTt0aGlzLiRmb3JtYXR0ZXJzPVtdO3RoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnM9W107dGhpcy4kcHJpc3RpbmU9ITA7dGhpcy4kZGlydHk9ITE7dGhpcy4kdmFsaWQ9ITA7dGhpcy4kaW52YWxpZD0hMTt0aGlzLiRuYW1lPVxuZC5uYW1lO3ZhciBrPWYoZC5uZ01vZGVsKSxtPWsuYXNzaWduO2lmKCFtKXRocm93IHooXCJuZ01vZGVsXCIpKFwibm9uYXNzaWduXCIsZC5uZ01vZGVsLGlhKGUpKTt0aGlzLiRyZW5kZXI9djt0aGlzLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBGKGEpfHxcIlwiPT09YXx8bnVsbD09PWF8fGEhPT1hfTt2YXIgbD1lLmluaGVyaXRlZERhdGEoXCIkZm9ybUNvbnRyb2xsZXJcIil8fHliLG49MCxxPXRoaXMuJGVycm9yPXt9O2UuYWRkQ2xhc3MoUmEpO2goITApO3RoaXMuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYyl7cVthXSE9PSFjJiYoYz8ocVthXSYmbi0tLG58fChoKCEwKSx0aGlzLiR2YWxpZD0hMCx0aGlzLiRpbnZhbGlkPSExKSk6KGgoITEpLHRoaXMuJGludmFsaWQ9ITAsdGhpcy4kdmFsaWQ9ITEsbisrKSxxW2FdPSFjLGgoYyxhKSxsLiRzZXRWYWxpZGl0eShhLGMsdGhpcykpfTt0aGlzLiRzZXRQcmlzdGluZT1mdW5jdGlvbigpe3RoaXMuJGRpcnR5PSExO3RoaXMuJHByaXN0aW5lPVxuITA7Zy5yZW1vdmVDbGFzcyhlLHpiKTtnLmFkZENsYXNzKGUsUmEpfTt0aGlzLiRzZXRWaWV3VmFsdWU9ZnVuY3Rpb24oZCl7dGhpcy4kdmlld1ZhbHVlPWQ7dGhpcy4kcHJpc3RpbmUmJih0aGlzLiRkaXJ0eT0hMCx0aGlzLiRwcmlzdGluZT0hMSxnLnJlbW92ZUNsYXNzKGUsUmEpLGcuYWRkQ2xhc3MoZSx6YiksbC4kc2V0RGlydHkoKSk7cih0aGlzLiRwYXJzZXJzLGZ1bmN0aW9uKGEpe2Q9YShkKX0pO3RoaXMuJG1vZGVsVmFsdWUhPT1kJiYodGhpcy4kbW9kZWxWYWx1ZT1kLG0oYSxkKSxyKHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMsZnVuY3Rpb24oYSl7dHJ5e2EoKX1jYXRjaChkKXtjKGQpfX0pKX07dmFyIHA9dGhpczthLiR3YXRjaChmdW5jdGlvbigpe3ZhciBjPWsoYSk7aWYocC4kbW9kZWxWYWx1ZSE9PWMpe3ZhciBkPXAuJGZvcm1hdHRlcnMsZT1kLmxlbmd0aDtmb3IocC4kbW9kZWxWYWx1ZT1jO2UtLTspYz1kW2VdKGMpO3AuJHZpZXdWYWx1ZSE9PWMmJihwLiR2aWV3VmFsdWU9XG5jLHAuJHJlbmRlcigpKX1yZXR1cm4gY30pfV0sRmQ9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpbXCJuZ01vZGVsXCIsXCJeP2Zvcm1cIl0sY29udHJvbGxlcjpaZSxsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmPWVbMF0sZz1lWzFdfHx5YjtnLiRhZGRDb250cm9sKGYpO2EuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2cuJHJlbW92ZUNvbnRyb2woZil9KX19fSxIZD1hYSh7cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2UuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMucHVzaChmdW5jdGlvbigpe2EuJGV2YWwoZC5uZ0NoYW5nZSl9KX19KSxpYz1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiP25nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2lmKGUpe2QucmVxdWlyZWQ9ITA7dmFyIGY9ZnVuY3Rpb24oYSl7aWYoZC5yZXF1aXJlZCYmZS4kaXNFbXB0eShhKSllLiRzZXRWYWxpZGl0eShcInJlcXVpcmVkXCIsITEpO2Vsc2UgcmV0dXJuIGUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIixcbiEwKSxhfTtlLiRmb3JtYXR0ZXJzLnB1c2goZik7ZS4kcGFyc2Vycy51bnNoaWZ0KGYpO2QuJG9ic2VydmUoXCJyZXF1aXJlZFwiLGZ1bmN0aW9uKCl7ZihlLiR2aWV3VmFsdWUpfSl9fX19LEdkPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj0oYT0vXFwvKC4qKVxcLy8uZXhlYyhkLm5nTGlzdCkpJiZSZWdFeHAoYVsxXSl8fGQubmdMaXN0fHxcIixcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7aWYoIUYoYSkpe3ZhciBjPVtdO2EmJnIoYS5zcGxpdChmKSxmdW5jdGlvbihhKXthJiZjLnB1c2goJChhKSl9KTtyZXR1cm4gY319KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIEwoYSk/YS5qb2luKFwiLCBcIik6dX0pO2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCFhLmxlbmd0aH19fX0sJGU9L14odHJ1ZXxmYWxzZXxcXGQrKSQvLElkPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxcbmNvbXBpbGU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gJGUudGVzdChjLm5nVmFsdWUpP2Z1bmN0aW9uKGEsYyxmKXtmLiRzZXQoXCJ2YWx1ZVwiLGEuJGV2YWwoZi5uZ1ZhbHVlKSl9OmZ1bmN0aW9uKGEsYyxmKXthLiR3YXRjaChmLm5nVmFsdWUsZnVuY3Rpb24oYSl7Zi4kc2V0KFwidmFsdWVcIixhKX0pfX19fSxpZD1BYSh7Y29tcGlsZTpmdW5jdGlvbihhKXthLmFkZENsYXNzKFwibmctYmluZGluZ1wiKTtyZXR1cm4gZnVuY3Rpb24oYSxkLGUpe2QuZGF0YShcIiRiaW5kaW5nXCIsZS5uZ0JpbmQpO2EuJHdhdGNoKGUubmdCaW5kLGZ1bmN0aW9uKGEpe2QudGV4dChhPT11P1wiXCI6YSl9KX19fSksa2Q9W1wiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjPWEoZC5hdHRyKGUuJGF0dHIubmdCaW5kVGVtcGxhdGUpKTtkLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixjKTtlLiRvYnNlcnZlKFwibmdCaW5kVGVtcGxhdGVcIixmdW5jdGlvbihhKXtkLnRleHQoYSl9KX19XSxcbmpkPVtcIiRzY2VcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZCl7ZC5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIik7cmV0dXJuIGZ1bmN0aW9uKGQsZixnKXtmLmRhdGEoXCIkYmluZGluZ1wiLGcubmdCaW5kSHRtbCk7dmFyIGg9YyhnLm5nQmluZEh0bWwpO2QuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuKGgoZCl8fFwiXCIpLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKGMpe2YuaHRtbChhLmdldFRydXN0ZWRIdG1sKGgoZCkpfHxcIlwiKX0pfX19fV0sbGQ9V2IoXCJcIiwhMCksbmQ9V2IoXCJPZGRcIiwwKSxtZD1XYihcIkV2ZW5cIiwxKSxvZD1BYSh7Y29tcGlsZTpmdW5jdGlvbihhLGMpe2MuJHNldChcIm5nQ2xvYWtcIix1KTthLnJlbW92ZUNsYXNzKFwibmctY2xvYWtcIil9fSkscGQ9W2Z1bmN0aW9uKCl7cmV0dXJue3Njb3BlOiEwLGNvbnRyb2xsZXI6XCJAXCIscHJpb3JpdHk6NTAwfX1dLGpjPXt9LGFmPXtibHVyOiEwLGZvY3VzOiEwfTtyKFwiY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBtb3VzZWVudGVyIG1vdXNlbGVhdmUga2V5ZG93biBrZXl1cCBrZXlwcmVzcyBzdWJtaXQgZm9jdXMgYmx1ciBjb3B5IGN1dCBwYXN0ZVwiLnNwbGl0KFwiIFwiKSxcbmZ1bmN0aW9uKGEpe3ZhciBjPXFhKFwibmctXCIrYSk7amNbY109W1wiJHBhcnNlXCIsXCIkcm9vdFNjb3BlXCIsZnVuY3Rpb24oZCxlKXtyZXR1cm57Y29tcGlsZTpmdW5jdGlvbihmLGcpe3ZhciBoPWQoZ1tjXSwhMCk7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7ZC5vbihhLGZ1bmN0aW9uKGQpe3ZhciBmPWZ1bmN0aW9uKCl7aChjLHskZXZlbnQ6ZH0pfTthZlthXSYmZS4kJHBoYXNlP2MuJGV2YWxBc3luYyhmKTpjLiRhcHBseShmKX0pfX19fV19KTt2YXIgc2Q9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo2MDAsdGVybWluYWw6ITAscmVzdHJpY3Q6XCJBXCIsJCR0bGI6ITAsbGluazpmdW5jdGlvbihjLGQsZSxmLGcpe3ZhciBoLGssbTtjLiR3YXRjaChlLm5nSWYsZnVuY3Rpb24oZil7V2EoZik/a3x8KGs9Yy4kbmV3KCksZyhrLGZ1bmN0aW9uKGMpe2NbYy5sZW5ndGgrK109WC5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ0lmOiBcIitlLm5nSWYrXG5cIiBcIik7aD17Y2xvbmU6Y307YS5lbnRlcihjLGQucGFyZW50KCksZCl9KSk6KG0mJihtLnJlbW92ZSgpLG09bnVsbCksayYmKGsuJGRlc3Ryb3koKSxrPW51bGwpLGgmJihtPUViKGguY2xvbmUpLGEubGVhdmUobSxmdW5jdGlvbigpe209bnVsbH0pLGg9bnVsbCkpfSl9fX1dLHRkPVtcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGFuY2hvclNjcm9sbFwiLFwiJGFuaW1hdGVcIixcIiRzY2VcIixmdW5jdGlvbihhLGMsZCxlLGYpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5OjQwMCx0ZXJtaW5hbDohMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGNvbnRyb2xsZXI6WGEubm9vcCxjb21waWxlOmZ1bmN0aW9uKGcsaCl7dmFyIGs9aC5uZ0luY2x1ZGV8fGguc3JjLG09aC5vbmxvYWR8fFwiXCIsbD1oLmF1dG9zY3JvbGw7cmV0dXJuIGZ1bmN0aW9uKGcsaCxwLHIsSil7dmFyIHc9MCx0LHksdSxCPWZ1bmN0aW9uKCl7eSYmKHkucmVtb3ZlKCkseT1udWxsKTt0JiYodC4kZGVzdHJveSgpLHQ9bnVsbCk7XG51JiYoZS5sZWF2ZSh1LGZ1bmN0aW9uKCl7eT1udWxsfSkseT11LHU9bnVsbCl9O2cuJHdhdGNoKGYucGFyc2VBc1Jlc291cmNlVXJsKGspLGZ1bmN0aW9uKGYpe3ZhciBrPWZ1bmN0aW9uKCl7IUQobCl8fGwmJiFnLiRldmFsKGwpfHxkKCl9LHA9Kyt3O2Y/KGEuZ2V0KGYse2NhY2hlOmN9KS5zdWNjZXNzKGZ1bmN0aW9uKGEpe2lmKHA9PT13KXt2YXIgYz1nLiRuZXcoKTtyLnRlbXBsYXRlPWE7YT1KKGMsZnVuY3Rpb24oYSl7QigpO2UuZW50ZXIoYSxudWxsLGgsayl9KTt0PWM7dT1hO3QuJGVtaXQoXCIkaW5jbHVkZUNvbnRlbnRMb2FkZWRcIik7Zy4kZXZhbChtKX19KS5lcnJvcihmdW5jdGlvbigpe3A9PT13JiZCKCl9KSxnLiRlbWl0KFwiJGluY2x1ZGVDb250ZW50UmVxdWVzdGVkXCIpKTooQigpLHIudGVtcGxhdGU9bnVsbCl9KX19fX1dLEpkPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxyZXF1aXJlOlwibmdJbmNsdWRlXCIsXG5saW5rOmZ1bmN0aW9uKGMsZCxlLGYpe2QuaHRtbChmLnRlbXBsYXRlKTthKGQuY29udGVudHMoKSkoYyl9fX1dLHVkPUFhKHtwcmlvcml0eTo0NTAsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYSxjLGQpe2EuJGV2YWwoZC5uZ0luaXQpfX19fSksdmQ9QWEoe3Rlcm1pbmFsOiEwLHByaW9yaXR5OjFFM30pLHdkPVtcIiRsb2NhbGVcIixcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9L3t9L2c7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixsaW5rOmZ1bmN0aW9uKGUsZixnKXt2YXIgaD1nLmNvdW50LGs9Zy4kYXR0ci53aGVuJiZmLmF0dHIoZy4kYXR0ci53aGVuKSxtPWcub2Zmc2V0fHwwLGw9ZS4kZXZhbChrKXx8e30sbj17fSxxPWMuc3RhcnRTeW1ib2woKSxwPWMuZW5kU3ltYm9sKCkscz0vXndoZW4oTWludXMpPyguKykkLztyKGcsZnVuY3Rpb24oYSxjKXtzLnRlc3QoYykmJihsW3goYy5yZXBsYWNlKFwid2hlblwiLFwiXCIpLnJlcGxhY2UoXCJNaW51c1wiLFwiLVwiKSldPVxuZi5hdHRyKGcuJGF0dHJbY10pKX0pO3IobCxmdW5jdGlvbihhLGUpe25bZV09YyhhLnJlcGxhY2UoZCxxK2grXCItXCIrbStwKSl9KTtlLiR3YXRjaChmdW5jdGlvbigpe3ZhciBjPXBhcnNlRmxvYXQoZS4kZXZhbChoKSk7aWYoaXNOYU4oYykpcmV0dXJuXCJcIjtjIGluIGx8fChjPWEucGx1cmFsQ2F0KGMtbSkpO3JldHVybiBuW2NdKGUsZiwhMCl9LGZ1bmN0aW9uKGEpe2YudGV4dChhKX0pfX19XSx4ZD1bXCIkcGFyc2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD16KFwibmdSZXBlYXRcIik7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6MUUzLHRlcm1pbmFsOiEwLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oZSxmLGcsaCxrKXt2YXIgbT1nLm5nUmVwZWF0LGw9bS5tYXRjaCgvXlxccyooW1xcc1xcU10rPylcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzKiQvKSxuLHEscCxzLHUsdyx0PXskaWQ6TmF9O2lmKCFsKXRocm93IGQoXCJpZXhwXCIsXG5tKTtnPWxbMV07aD1sWzJdOyhsPWxbM10pPyhuPWEobCkscT1mdW5jdGlvbihhLGMsZCl7dyYmKHRbd109YSk7dFt1XT1jO3QuJGluZGV4PWQ7cmV0dXJuIG4oZSx0KX0pOihwPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIE5hKGMpfSxzPWZ1bmN0aW9uKGEpe3JldHVybiBhfSk7bD1nLm1hdGNoKC9eKD86KFtcXCRcXHddKyl8XFwoKFtcXCRcXHddKylcXHMqLFxccyooW1xcJFxcd10rKVxcKSkkLyk7aWYoIWwpdGhyb3cgZChcImlpZGV4cFwiLGcpO3U9bFszXXx8bFsxXTt3PWxbMl07dmFyIHk9e307ZS4kd2F0Y2hDb2xsZWN0aW9uKGgsZnVuY3Rpb24oYSl7dmFyIGcsaCxsPWZbMF0sbix0PXt9LEQsQyxJLHgsRyx2LHosRj1bXTtpZihTYShhKSl2PWEsRz1xfHxwO2Vsc2V7Rz1xfHxzO3Y9W107Zm9yKEkgaW4gYSlhLmhhc093blByb3BlcnR5KEkpJiZcIiRcIiE9SS5jaGFyQXQoMCkmJnYucHVzaChJKTt2LnNvcnQoKX1EPXYubGVuZ3RoO2g9Ri5sZW5ndGg9di5sZW5ndGg7Zm9yKGc9MDtnPGg7ZysrKWlmKEk9YT09PVxudj9nOnZbZ10seD1hW0ldLG49RyhJLHgsZyksRWEobixcImB0cmFjayBieWAgaWRcIikseS5oYXNPd25Qcm9wZXJ0eShuKSl6PXlbbl0sZGVsZXRlIHlbbl0sdFtuXT16LEZbZ109ejtlbHNle2lmKHQuaGFzT3duUHJvcGVydHkobikpdGhyb3cgcihGLGZ1bmN0aW9uKGEpe2EmJmEuc2NvcGUmJih5W2EuaWRdPWEpfSksZChcImR1cGVzXCIsbSxuLG9hKHgpKTtGW2ddPXtpZDpufTt0W25dPSExfWZvcihJIGluIHkpeS5oYXNPd25Qcm9wZXJ0eShJKSYmKHo9eVtJXSxnPUViKHouY2xvbmUpLGMubGVhdmUoZykscihnLGZ1bmN0aW9uKGEpe2EuJCROR19SRU1PVkVEPSEwfSksei5zY29wZS4kZGVzdHJveSgpKTtnPTA7Zm9yKGg9di5sZW5ndGg7ZzxoO2crKyl7ST1hPT09dj9nOnZbZ107eD1hW0ldO3o9RltnXTtGW2ctMV0mJihsPUZbZy0xXS5jbG9uZVtGW2ctMV0uY2xvbmUubGVuZ3RoLTFdKTtpZih6LnNjb3BlKXtDPXouc2NvcGU7bj1sO2RvIG49bi5uZXh0U2libGluZzt3aGlsZShuJiZuLiQkTkdfUkVNT1ZFRCk7XG56LmNsb25lWzBdIT1uJiZjLm1vdmUoRWIoei5jbG9uZSksbnVsbCxBKGwpKTtsPXouY2xvbmVbei5jbG9uZS5sZW5ndGgtMV19ZWxzZSBDPWUuJG5ldygpO0NbdV09eDt3JiYoQ1t3XT1JKTtDLiRpbmRleD1nO0MuJGZpcnN0PTA9PT1nO0MuJGxhc3Q9Zz09PUQtMTtDLiRtaWRkbGU9IShDLiRmaXJzdHx8Qy4kbGFzdCk7Qy4kb2RkPSEoQy4kZXZlbj0wPT09KGcmMSkpO3ouc2NvcGV8fGsoQyxmdW5jdGlvbihhKXthW2EubGVuZ3RoKytdPVguY3JlYXRlQ29tbWVudChcIiBlbmQgbmdSZXBlYXQ6IFwiK20rXCIgXCIpO2MuZW50ZXIoYSxudWxsLEEobCkpO2w9YTt6LnNjb3BlPUM7ei5jbG9uZT1hO3Rbei5pZF09en0pfXk9dH0pfX19XSx5ZD1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ1Nob3csZnVuY3Rpb24oYyl7YVtXYShjKT9cInJlbW92ZUNsYXNzXCI6XCJhZGRDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHJkPVtcIiRhbmltYXRlXCIsXG5mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdIaWRlLGZ1bmN0aW9uKGMpe2FbV2EoYyk/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSx6ZD1BYShmdW5jdGlvbihhLGMsZCl7YS4kd2F0Y2goZC5uZ1N0eWxlLGZ1bmN0aW9uKGEsZCl7ZCYmYSE9PWQmJnIoZCxmdW5jdGlvbihhLGQpe2MuY3NzKGQsXCJcIil9KTthJiZjLmNzcyhhKX0sITApfSksQWQ9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6XCJuZ1N3aXRjaFwiLGNvbnRyb2xsZXI6W1wiJHNjb3BlXCIsZnVuY3Rpb24oKXt0aGlzLmNhc2VzPXt9fV0sbGluazpmdW5jdGlvbihjLGQsZSxmKXt2YXIgZz1bXSxoPVtdLGs9W10sbT1bXTtjLiR3YXRjaChlLm5nU3dpdGNofHxlLm9uLGZ1bmN0aW9uKGQpe3ZhciBuLHE7bj0wO2ZvcihxPWsubGVuZ3RoO248cTsrK24pa1tuXS5yZW1vdmUoKTtuPWsubGVuZ3RoPTA7Zm9yKHE9XG5tLmxlbmd0aDtuPHE7KytuKXt2YXIgcD1oW25dO21bbl0uJGRlc3Ryb3koKTtrW25dPXA7YS5sZWF2ZShwLGZ1bmN0aW9uKCl7ay5zcGxpY2UobiwxKX0pfWgubGVuZ3RoPTA7bS5sZW5ndGg9MDtpZihnPWYuY2FzZXNbXCIhXCIrZF18fGYuY2FzZXNbXCI/XCJdKWMuJGV2YWwoZS5jaGFuZ2UpLHIoZyxmdW5jdGlvbihkKXt2YXIgZT1jLiRuZXcoKTttLnB1c2goZSk7ZC50cmFuc2NsdWRlKGUsZnVuY3Rpb24oYyl7dmFyIGU9ZC5lbGVtZW50O2gucHVzaChjKTthLmVudGVyKGMsZS5wYXJlbnQoKSxlKX0pfSl9KX19fV0sQmQ9QWEoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZil7ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl09ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl18fFtdO2UuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dLnB1c2goe3RyYW5zY2x1ZGU6ZixlbGVtZW50OmN9KX19KSxDZD1cbkFhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGYpe2UuY2FzZXNbXCI/XCJdPWUuY2FzZXNbXCI/XCJdfHxbXTtlLmNhc2VzW1wiP1wiXS5wdXNoKHt0cmFuc2NsdWRlOmYsZWxlbWVudDpjfSl9fSksRWQ9QWEoe2xpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtpZighZil0aHJvdyB6KFwibmdUcmFuc2NsdWRlXCIpKFwib3JwaGFuXCIsaWEoYykpO2YoZnVuY3Rpb24oYSl7Yy5lbXB0eSgpO2MuYXBwZW5kKGEpfSl9fSksZWQ9W1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITAsY29tcGlsZTpmdW5jdGlvbihjLGQpe1widGV4dC9uZy10ZW1wbGF0ZVwiPT1kLnR5cGUmJmEucHV0KGQuaWQsY1swXS50ZXh0KX19fV0sYmY9eihcIm5nT3B0aW9uc1wiKSxEZD1hYSh7dGVybWluYWw6ITB9KSxmZD1bXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD1cbi9eXFxzKihbXFxzXFxTXSs/KSg/Olxccythc1xccysoW1xcc1xcU10rPykpPyg/Olxccytncm91cFxccytieVxccysoW1xcc1xcU10rPykpP1xccytmb3JcXHMrKD86KFtcXCRcXHddW1xcJFxcd10qKXwoPzpcXChcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccyosXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqXFwpKSlcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/JC8sZT17JHNldFZpZXdWYWx1ZTp2fTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCJzZWxlY3RcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjLGQpe3ZhciBrPXRoaXMsbT17fSxsPWUsbjtrLmRhdGFib3VuZD1kLm5nTW9kZWw7ay5pbml0PWZ1bmN0aW9uKGEsYyxkKXtsPWE7bj1kfTtrLmFkZE9wdGlvbj1mdW5jdGlvbihjKXtFYShjLCdcIm9wdGlvbiB2YWx1ZVwiJyk7bVtjXT0hMDtsLiR2aWV3VmFsdWU9PWMmJihhLnZhbChjKSxuLnBhcmVudCgpJiZuLnJlbW92ZSgpKX07XG5rLnJlbW92ZU9wdGlvbj1mdW5jdGlvbihhKXt0aGlzLmhhc09wdGlvbihhKSYmKGRlbGV0ZSBtW2FdLGwuJHZpZXdWYWx1ZT09YSYmdGhpcy5yZW5kZXJVbmtub3duT3B0aW9uKGEpKX07ay5yZW5kZXJVbmtub3duT3B0aW9uPWZ1bmN0aW9uKGMpe2M9XCI/IFwiK05hKGMpK1wiID9cIjtuLnZhbChjKTthLnByZXBlbmQobik7YS52YWwoYyk7bi5wcm9wKFwic2VsZWN0ZWRcIiwhMCl9O2suaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBtLmhhc093blByb3BlcnR5KGEpfTtjLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtrLnJlbmRlclVua25vd25PcHRpb249dn0pfV0sbGluazpmdW5jdGlvbihlLGcsaCxrKXtmdW5jdGlvbiBtKGEsYyxkLGUpe2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPWQuJHZpZXdWYWx1ZTtlLmhhc09wdGlvbihhKT8oeC5wYXJlbnQoKSYmeC5yZW1vdmUoKSxjLnZhbChhKSxcIlwiPT09YSYmdy5wcm9wKFwic2VsZWN0ZWRcIiwhMCkpOkYoYSkmJnc/Yy52YWwoXCJcIik6ZS5yZW5kZXJVbmtub3duT3B0aW9uKGEpfTtcbmMub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7eC5wYXJlbnQoKSYmeC5yZW1vdmUoKTtkLiRzZXRWaWV3VmFsdWUoYy52YWwoKSl9KX0pfWZ1bmN0aW9uIGwoYSxjLGQpe3ZhciBlO2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPW5ldyBkYihkLiR2aWV3VmFsdWUpO3IoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQ9RChhLmdldChjLnZhbHVlKSl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXtDYShlLGQuJHZpZXdWYWx1ZSl8fChlPWhhKGQuJHZpZXdWYWx1ZSksZC4kcmVuZGVyKCkpfSk7Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYT1bXTtyKGMuZmluZChcIm9wdGlvblwiKSxmdW5jdGlvbihjKXtjLnNlbGVjdGVkJiZhLnB1c2goYy52YWx1ZSl9KTtkLiRzZXRWaWV3VmFsdWUoYSl9KX0pfWZ1bmN0aW9uIG4oZSxmLGcpe2Z1bmN0aW9uIGgoKXt2YXIgYT17XCJcIjpbXX0sYz1bXCJcIl0sZCxrLFxucyx1LHY7cz1nLiRtb2RlbFZhbHVlO3U9QShlKXx8W107dmFyIEY9bj9YYih1KTp1LEcsUSxDO1E9e307Qz0hMTtpZihwKWlmKGs9Zy4kbW9kZWxWYWx1ZSx3JiZMKGspKWZvcihDPW5ldyBkYihbXSksZD17fSx2PTA7djxrLmxlbmd0aDt2KyspZFttXT1rW3ZdLEMucHV0KHcoZSxkKSxrW3ZdKTtlbHNlIEM9bmV3IGRiKGspO3Y9Qzt2YXIgRSxLO2ZvcihDPTA7Rz1GLmxlbmd0aCxDPEc7QysrKXtrPUM7aWYobil7az1GW0NdO2lmKFwiJFwiPT09ay5jaGFyQXQoMCkpY29udGludWU7UVtuXT1rfVFbbV09dVtrXTtkPXIoZSxRKXx8XCJcIjsoaz1hW2RdKXx8KGs9YVtkXT1bXSxjLnB1c2goZCkpO3A/ZD1EKHYucmVtb3ZlKHc/dyhlLFEpOngoZSxRKSkpOih3PyhkPXt9LGRbbV09cyxkPXcoZSxkKT09PXcoZSxRKSk6ZD1zPT09eChlLFEpLHY9dnx8ZCk7RT1sKGUsUSk7RT1EKEUpP0U6XCJcIjtrLnB1c2goe2lkOnc/dyhlLFEpOm4/RltDXTpDLGxhYmVsOkUsc2VsZWN0ZWQ6ZH0pfXB8fCh6fHxudWxsPT09XG5zP2FbXCJcIl0udW5zaGlmdCh7aWQ6XCJcIixsYWJlbDpcIlwiLHNlbGVjdGVkOiF2fSk6dnx8YVtcIlwiXS51bnNoaWZ0KHtpZDpcIj9cIixsYWJlbDpcIlwiLHNlbGVjdGVkOiEwfSkpO1E9MDtmb3IoRj1jLmxlbmd0aDtRPEY7USsrKXtkPWNbUV07az1hW2RdO0IubGVuZ3RoPD1RPyhzPXtlbGVtZW50OnkuY2xvbmUoKS5hdHRyKFwibGFiZWxcIixkKSxsYWJlbDprLmxhYmVsfSx1PVtzXSxCLnB1c2godSksZi5hcHBlbmQocy5lbGVtZW50KSk6KHU9QltRXSxzPXVbMF0scy5sYWJlbCE9ZCYmcy5lbGVtZW50LmF0dHIoXCJsYWJlbFwiLHMubGFiZWw9ZCkpO0U9bnVsbDtDPTA7Zm9yKEc9ay5sZW5ndGg7QzxHO0MrKylkPWtbQ10sKHY9dVtDKzFdKT8oRT12LmVsZW1lbnQsdi5sYWJlbCE9PWQubGFiZWwmJihFLnRleHQodi5sYWJlbD1kLmxhYmVsKSxFLnByb3AoXCJsYWJlbFwiLHYubGFiZWwpKSx2LmlkIT09ZC5pZCYmRS52YWwodi5pZD1kLmlkKSxFWzBdLnNlbGVjdGVkIT09ZC5zZWxlY3RlZCYmKEUucHJvcChcInNlbGVjdGVkXCIsXG52LnNlbGVjdGVkPWQuc2VsZWN0ZWQpLFImJkUucHJvcChcInNlbGVjdGVkXCIsdi5zZWxlY3RlZCkpKTooXCJcIj09PWQuaWQmJno/Sz16OihLPXQuY2xvbmUoKSkudmFsKGQuaWQpLnByb3AoXCJzZWxlY3RlZFwiLGQuc2VsZWN0ZWQpLmF0dHIoXCJzZWxlY3RlZFwiLGQuc2VsZWN0ZWQpLnByb3AoXCJsYWJlbFwiLGQubGFiZWwpLnRleHQoZC5sYWJlbCksdS5wdXNoKHtlbGVtZW50OkssbGFiZWw6ZC5sYWJlbCxpZDpkLmlkLHNlbGVjdGVkOmQuc2VsZWN0ZWR9KSxxLmFkZE9wdGlvbihkLmxhYmVsLEspLEU/RS5hZnRlcihLKTpzLmVsZW1lbnQuYXBwZW5kKEspLEU9Syk7Zm9yKEMrKzt1Lmxlbmd0aD5DOylkPXUucG9wKCkscS5yZW1vdmVPcHRpb24oZC5sYWJlbCksZC5lbGVtZW50LnJlbW92ZSgpfWZvcig7Qi5sZW5ndGg+UTspQi5wb3AoKVswXS5lbGVtZW50LnJlbW92ZSgpfXZhciBrO2lmKCEoaz1zLm1hdGNoKGQpKSl0aHJvdyBiZihcImlleHBcIixzLGlhKGYpKTt2YXIgbD1jKGtbMl18fGtbMV0pLFxubT1rWzRdfHxrWzZdLG49a1s1XSxyPWMoa1szXXx8XCJcIikseD1jKGtbMl0/a1sxXTptKSxBPWMoa1s3XSksdz1rWzhdP2Moa1s4XSk6bnVsbCxCPVtbe2VsZW1lbnQ6ZixsYWJlbDpcIlwifV1dO3omJihhKHopKGUpLHoucmVtb3ZlQ2xhc3MoXCJuZy1zY29wZVwiKSx6LnJlbW92ZSgpKTtmLmVtcHR5KCk7Zi5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYSxjPUEoZSl8fFtdLGQ9e30sayxsLHEscixzLHQsdjtpZihwKWZvcihsPVtdLHI9MCx0PUIubGVuZ3RoO3I8dDtyKyspZm9yKGE9QltyXSxxPTEscz1hLmxlbmd0aDtxPHM7cSsrKXtpZigoaz1hW3FdLmVsZW1lbnQpWzBdLnNlbGVjdGVkKXtrPWsudmFsKCk7biYmKGRbbl09ayk7aWYodylmb3Iodj0wO3Y8Yy5sZW5ndGgmJihkW21dPWNbdl0sdyhlLGQpIT1rKTt2KyspO2Vsc2UgZFttXT1jW2tdO2wucHVzaCh4KGUsZCkpfX1lbHNlIGlmKGs9Zi52YWwoKSxcIj9cIj09aylsPXU7ZWxzZSBpZihcIlwiPT09XG5rKWw9bnVsbDtlbHNlIGlmKHcpZm9yKHY9MDt2PGMubGVuZ3RoO3YrKyl7aWYoZFttXT1jW3ZdLHcoZSxkKT09ayl7bD14KGUsZCk7YnJlYWt9fWVsc2UgZFttXT1jW2tdLG4mJihkW25dPWspLGw9eChlLGQpO2cuJHNldFZpZXdWYWx1ZShsKTtoKCl9KX0pO2cuJHJlbmRlcj1oO2UuJHdhdGNoQ29sbGVjdGlvbihBLGgpO2UuJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbigpe3ZhciBhPXt9LGM9QShlKTtpZihjKXtmb3IodmFyIGQ9QXJyYXkoYy5sZW5ndGgpLGY9MCxnPWMubGVuZ3RoO2Y8ZztmKyspYVttXT1jW2ZdLGRbZl09bChlLGEpO3JldHVybiBkfX0saCk7cCYmZS4kd2F0Y2hDb2xsZWN0aW9uKGZ1bmN0aW9uKCl7cmV0dXJuIGcuJG1vZGVsVmFsdWV9LGgpfWlmKGtbMV0pe3ZhciBxPWtbMF07az1rWzFdO3ZhciBwPWgubXVsdGlwbGUscz1oLm5nT3B0aW9ucyx6PSExLHcsdD1BKFguY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkseT1BKFguY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKSxcbng9dC5jbG9uZSgpO2g9MDtmb3IodmFyIEI9Zy5jaGlsZHJlbigpLHY9Qi5sZW5ndGg7aDx2O2grKylpZihcIlwiPT09QltoXS52YWx1ZSl7dz16PUIuZXEoaCk7YnJlYWt9cS5pbml0KGsseix4KTtwJiYoay4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8MD09PWEubGVuZ3RofSk7cz9uKGUsZyxrKTpwP2woZSxnLGspOm0oZSxnLGsscSl9fX19XSxoZD1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXt2YXIgYz17YWRkT3B0aW9uOnYscmVtb3ZlT3B0aW9uOnZ9O3JldHVybntyZXN0cmljdDpcIkVcIixwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbihkLGUpe2lmKEYoZS52YWx1ZSkpe3ZhciBmPWEoZC50ZXh0KCksITApO2Z8fGUuJHNldChcInZhbHVlXCIsZC50ZXh0KCkpfXJldHVybiBmdW5jdGlvbihhLGQsZSl7dmFyIG09ZC5wYXJlbnQoKSxsPW0uZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpfHxtLnBhcmVudCgpLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKTtsJiZsLmRhdGFib3VuZD9cbmQucHJvcChcInNlbGVjdGVkXCIsITEpOmw9YztmP2EuJHdhdGNoKGYsZnVuY3Rpb24oYSxjKXtlLiRzZXQoXCJ2YWx1ZVwiLGEpO2EhPT1jJiZsLnJlbW92ZU9wdGlvbihjKTtsLmFkZE9wdGlvbihhKX0pOmwuYWRkT3B0aW9uKGUudmFsdWUpO2Qub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bC5yZW1vdmVPcHRpb24oZS52YWx1ZSl9KX19fX1dLGdkPWFhKHtyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMH0pO1cuYW5ndWxhci5ib290c3RyYXA/Y29uc29sZS5sb2coXCJXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXCIpOigoRmE9Vy5qUXVlcnkpJiZGYS5mbi5vbj8oQT1GYSxFKEZhLmZuLHtzY29wZTpPYS5zY29wZSxpc29sYXRlU2NvcGU6T2EuaXNvbGF0ZVNjb3BlLGNvbnRyb2xsZXI6T2EuY29udHJvbGxlcixpbmplY3RvcjpPYS5pbmplY3Rvcixpbmhlcml0ZWREYXRhOk9hLmluaGVyaXRlZERhdGF9KSxHYihcInJlbW92ZVwiLCEwLCEwLCExKSxHYihcImVtcHR5XCIsXG4hMSwhMSwhMSksR2IoXCJodG1sXCIsITEsITEsITApKTpBPVMsWGEuZWxlbWVudD1BLFpjKFhhKSxBKFgpLnJlYWR5KGZ1bmN0aW9uKCl7V2MoWCxkYyl9KSl9KSh3aW5kb3csZG9jdW1lbnQpOyF3aW5kb3cuYW5ndWxhci4kJGNzcCgpJiZ3aW5kb3cuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5maW5kKFwiaGVhZFwiKS5wcmVwZW5kKCc8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+QGNoYXJzZXQgXCJVVEYtOFwiO1tuZ1xcXFw6Y2xvYWtdLFtuZy1jbG9ha10sW2RhdGEtbmctY2xvYWtdLFt4LW5nLWNsb2FrXSwubmctY2xvYWssLngtbmctY2xvYWssLm5nLWhpZGV7ZGlzcGxheTpub25lICFpbXBvcnRhbnQ7fW5nXFxcXDpmb3Jte2Rpc3BsYXk6YmxvY2s7fS5uZy1hbmltYXRlLWJsb2NrLXRyYW5zaXRpb25ze3RyYW5zaXRpb246MHMgYWxsIWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246MHMgYWxsIWltcG9ydGFudDt9Lm5nLWhpZGUtYWRkLWFjdGl2ZSwubmctaGlkZS1yZW1vdmV7ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7fTwvc3R5bGU+Jyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLm1pbi5qcy5tYXBcbiIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG52YXIgS2VlblJlcXVlc3RzID0gcmVxdWlyZSgnLi9saWIvcmVxdWVzdHMnKTtcbnZhciBLZWVuUXVlcnkgPSByZXF1aXJlKCcuL2xpYi9xdWVyeScpO1xuXG5mdW5jdGlvbiBLZWVuQXBpKGNvbmZpZykge1xuXHRpZiAoIWNvbmZpZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSAnY29uZmlnJyBwYXJhbWV0ZXIgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSBKUyBvYmplY3QuXCIpO1xuXHR9XG5cdGlmICghY29uZmlnLnByb2plY3RJZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSAnY29uZmlnJyBvYmplY3QgbXVzdCBjb250YWluIGEgJ3Byb2plY3RJZCcuXCIpO1xuXHR9XG5cblx0dGhpcy5wcm9qZWN0SWQgPSBjb25maWcucHJvamVjdElkO1xuXHR0aGlzLndyaXRlS2V5ID0gY29uZmlnLndyaXRlS2V5O1xuXHR0aGlzLnJlYWRLZXkgPSBjb25maWcucmVhZEtleTtcblx0dGhpcy5tYXN0ZXJLZXkgPSBjb25maWcubWFzdGVyS2V5O1xuXHR0aGlzLmJhc2VVcmwgPSBjb25maWcuYmFzZVVybCB8fCAnaHR0cHM6Ly9hcGkua2Vlbi5pby8nO1xuXHR0aGlzLmFwaVZlcnNpb24gPSBjb25maWcuYXBpVmVyc2lvbiB8fCAnMy4wJztcblxuXHR2YXIgYmFzZVVybCA9IHRoaXMuYmFzZVVybDtcblx0dmFyIGFwaVZlcnNpb24gPSB0aGlzLmFwaVZlcnNpb247XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHQvLyBQdWJsaWMgTWV0aG9kc1xuXG5cdHRoaXMucHJvamVjdHMgPSB7XG5cdFx0bGlzdDogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cycsIG51bGwsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHZpZXc6IGZ1bmN0aW9uKHByb2plY3RJZCwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkLCBudWxsLCBjYWxsYmFjayk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuZXZlbnRzID0ge1xuXHRcdGxpc3Q6IGZ1bmN0aW9uKHByb2plY3RJZCwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMnLCBudWxsLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRpbnNlcnQ6IGZ1bmN0aW9uKHByb2plY3RJZCwgZXZlbnRzLCBjYWxsYmFjaykge1xuXHRcdFx0ZXZlbnRzID0gZXZlbnRzIHx8IFtdO1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdHZhciBjb2xsZWN0aW9uID0gZXZlbnQuY29sbGVjdGlvbjtcblx0XHRcdFx0aWYgKHR5cGVvZiBkYXRhW2NvbGxlY3Rpb25dID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0ZGF0YVtjb2xsZWN0aW9uXSA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBpdGVtID0gKGV2ZW50LmRhdGEgfHwge30pO1xuXHRcdFx0XHRpZiAodHlwZW9mIGV2ZW50LmtlZW4gPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRpdGVtLmtlZW4gPSBldmVudC5rZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFbY29sbGVjdGlvbl0ucHVzaChpdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0S2VlblJlcXVlc3RzLnBvc3QuY2FsbChzZWxmLCBzZWxmLndyaXRlS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cycsIGRhdGEsIGNhbGxiYWNrKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5wcm9wZXJ0aWVzID0ge1xuXHRcdHZpZXc6IGZ1bmN0aW9uKHByb2plY3RJZCwgY29sbGVjdGlvbiwgcHJvcGVydHksIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzLycgKyBjb2xsZWN0aW9uICsgJy9wcm9wZXJ0aWVzLycgKyBwcm9wZXJ0eSwgbnVsbCwgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbihwcm9qZWN0SWQsIGNvbGxlY3Rpb24sIHByb3BlcnR5LCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmRlbC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cy8nICsgY29sbGVjdGlvbiArICcvcHJvcGVydGllcy8nICsgcHJvcGVydHksIGNhbGxiYWNrKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5jb2xsZWN0aW9ucyA9IHtcblx0XHR2aWV3OiBmdW5jdGlvbihwcm9qZWN0SWQsIGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzLycgKyBjb2xsZWN0aW9uLCBudWxsLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmU6IGZ1bmN0aW9uKHByb2plY3RJZCwgY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5kZWwuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMvJyArIGNvbGxlY3Rpb24sIGNhbGxiYWNrKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5hZGRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50Q29sbGVjdGlvbiwgZXZlbnQsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCF0aGlzLndyaXRlS2V5KSB7XG5cdFx0XHR2YXIgZXJyb3JNZXNzYWdlID0gXCJZb3UgbXVzdCBzcGVjaWZ5IGEgbm9uLW51bGwsIG5vbi1lbXB0eSAnd3JpdGVLZXknIGluIHlvdXIgJ2NvbmZpZycgb2JqZWN0IHdoZW4gY2FsbGluZyBrZWVuLmNvbmZpZ3VyZSgpIVwiO1xuXHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0S2VlblJlcXVlc3RzLnBvc3QuY2FsbChzZWxmLCB0aGlzLndyaXRlS2V5LCBcIi9wcm9qZWN0cy9cIiArIHRoaXMucHJvamVjdElkICsgXCIvZXZlbnRzL1wiICsgZXZlbnRDb2xsZWN0aW9uLCBldmVudCwgY2FsbGJhY2spO1xuXHR9O1xuXG5cdHRoaXMucmVxdWVzdCA9IGZ1bmN0aW9uKG1ldGhvZCwga2V5VHlwZSwgcGF0aCwgcGFyYW1zLCBjYWxsYmFjaykge1xuXHRcdG1ldGhvZCA9IHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnICYmIG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXHRcdGtleVR5cGUgKz0gJ0tleSc7XG5cdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCAodHlwZW9mIHBhcmFtcyA9PT0gJ2Z1bmN0aW9uJykgJiYgcGFyYW1zO1xuXG5cdFx0aWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuXHRcdFx0cGF0aCA9ICcvcHJvamVjdHMvJyArIHRoaXMucHJvamVjdElkICsgJy8nICsgcGF0aC5yZXBsYWNlKC9eXFwvLywnJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignXFwncGF0aFxcJyBtdXN0IGJlIGEgc3RyaW5nLicpO1xuXHRcdH1cblxuXHRcdGlmICggISBLZWVuUmVxdWVzdHMuaGFzT3duUHJvcGVydHkobWV0aG9kKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2QgbXVzdCBiZSBvZiB0eXBlOiBHRVQvUE9TVC9ERUwnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5VHlwZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignS2V5IG11c3QgYmUgb2YgdHlwZTogbWFzdGVyL3dyaXRlL3JlYWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXNba2V5VHlwZV0pIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgc3BlY2lmeSBhIG51bi1udWxsLCBub24tZW1wdHkgXFwnJyArIGtleVR5cGUgKyAnXFwnIGluIHlvdXIgY29uZmlnIG9iamVjdC4nKTtcblx0XHR9XG5cblx0XHRpZihtZXRob2QgPT09ICdwb3N0JyB8fCBtZXRob2QgPT09ICdnZXQnKSB7XG5cdFx0XHRyZXR1cm4gS2VlblJlcXVlc3RzW21ldGhvZF0uY2FsbChzZWxmLCB0aGlzW2tleVR5cGVdLCBwYXRoLCBwYXJhbXMsIGNhbGxiYWNrKTtcblx0XHR9XG5cblx0XHRLZWVuUmVxdWVzdHNbbWV0aG9kXS5jYWxsKHNlbGYsIHRoaXNba2V5VHlwZV0sIHBhdGgsIGNhbGxiYWNrKTtcblx0fTtcblxuXHR0aGlzLmFkZEV2ZW50cyA9IGZ1bmN0aW9uKGV2ZW50cywgY2FsbGJhY2spIHtcblx0XHRpZiAoIXRoaXMud3JpdGVLZXkpIHtcblx0XHRcdHZhciBlcnJvck1lc3NhZ2UgPSBcIllvdSBtdXN0IHNwZWNpZnkgYSBub24tbnVsbCwgbm9uLWVtcHR5ICd3cml0ZUtleScgaW4geW91ciAnY29uZmlnJyBvYmplY3Qgd2hlbiBjYWxsaW5nIGtlZW4uY29uZmlndXJlKCkhXCI7XG5cdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRLZWVuUmVxdWVzdHMucG9zdC5jYWxsKHNlbGYsIHRoaXMud3JpdGVLZXksIFwiL3Byb2plY3RzL1wiICsgdGhpcy5wcm9qZWN0SWQgKyBcIi9ldmVudHNcIiwgZXZlbnRzLCBjYWxsYmFjayk7XG5cdH07XG5cblx0dGhpcy5xdWVyaWVzID0ge1xuXHRcdGV4dHJhY3Rpb246IGZ1bmN0aW9uKHByb2plY3RJZCwgY29sbGVjdGlvbiwgcGFyYW1zLCBjYWxsYmFjayl7XG5cdFx0XHR2YXIgcmVxdWVzdFBhcmFtcyA9IF8uZXh0ZW5kKHt9LCBwYXJhbXMsIHsgJ2V2ZW50X2NvbGxlY3Rpb24nOiBjb2xsZWN0aW9uIH0pO1xuXHRcdFx0dmFyIHBhdGggPSAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL3F1ZXJpZXMvZXh0cmFjdGlvbic7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5yZWFkS2V5LCBwYXRoLCByZXF1ZXN0UGFyYW1zLCBjYWxsYmFjayk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucnVuID0gS2VlblF1ZXJ5LmNsaWVudC5ydW47XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcblx0cmV0dXJuIG5ldyBLZWVuQXBpKGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGVuY3J5cHRTY29wZWRLZXkoYXBpS2V5LCBvcHRpb25zKSB7XG5cdHZhciBpdiA9IGNyeXB0by5yYW5kb21CeXRlcygxNik7XG5cdHZhciBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyaXYoXCJhZXMtMjU2LWNiY1wiLCBhcGlLZXksIGl2KTtcblx0dmFyIGpzb25PcHRpb25zID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG5cdHZhciBlbmNyeXB0T3V0cHV0MSA9IGNpcGhlci51cGRhdGUoanNvbk9wdGlvbnMsIFwidXRmOFwiLCBcImhleFwiKTtcblx0dmFyIGVuY3J5cHRPdXRwdXQyID0gY2lwaGVyLmZpbmFsKFwiaGV4XCIpO1xuXHR2YXIgaXZQbHVzRW5jcnlwdGVkID0gaXYudG9TdHJpbmcoXCJoZXhcIikgKyBlbmNyeXB0T3V0cHV0MSArIGVuY3J5cHRPdXRwdXQyO1xuXHRyZXR1cm4gaXZQbHVzRW5jcnlwdGVkO1xufVxuXG5mdW5jdGlvbiBkZWNyeXB0U2NvcGVkS2V5KGFwaUtleSwgc2NvcGVkS2V5KSB7XG5cdHZhciBoZXhlZEl2ID0gc2NvcGVkS2V5LnN1YnN0cmluZygwLCAzMik7XG5cdHZhciBoZXhlZENpcGhlclRleHQgPSBzY29wZWRLZXkuc3Vic3RyaW5nKDMyLCBzY29wZWRLZXkubGVuZ3RoKTtcblx0dmFyIGl2ID0gbmV3IEJ1ZmZlcihoZXhlZEl2LCBcImhleFwiKTtcblx0dmFyIGNpcGhlclRleHQgPSBuZXcgQnVmZmVyKGhleGVkQ2lwaGVyVGV4dCwgXCJoZXhcIik7XG5cdHZhciBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KFwiYWVzLTI1Ni1jYmNcIiwgYXBpS2V5LCBpdik7XG5cdHZhciBkZWNyeXB0T3V0cHV0MSA9IGRlY2lwaGVyLnVwZGF0ZShjaXBoZXJUZXh0KTtcblx0dmFyIGRlY3J5cHRPdXRwdXQyID0gZGVjaXBoZXIuZmluYWwoKTtcblx0dmFyIGRlY3J5cHRlZCA9IGRlY3J5cHRPdXRwdXQxICsgZGVjcnlwdE91dHB1dDI7XG5cdHJldHVybiBKU09OLnBhcnNlKGRlY3J5cHRlZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjb25maWd1cmU6IGNvbmZpZ3VyZSxcblx0ZW5jcnlwdFNjb3BlZEtleTogZW5jcnlwdFNjb3BlZEtleSxcblx0ZGVjcnlwdFNjb3BlZEtleTogZGVjcnlwdFNjb3BlZEtleSxcblx0UXVlcnk6IEtlZW5RdWVyeS5RdWVyeVxufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsInZhciBfID0gcmVxdWlyZSgndW5kZXJzY29yZScpO1xudmFyIEtlZW5SZXF1ZXN0cyA9IHJlcXVpcmUoJy4vcmVxdWVzdHMnKTtcblxuLyohXG4qIC0tLS0tLS0tLS0tLS0tLS0tXG4qIEtlZW4gSU8gUXVlcnkgSlNcbiogLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbnZhciBLZWVuID0ge307XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gS2Vlbi5SZXF1ZXN0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuS2Vlbi5SZXF1ZXN0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5kYXRhID0ge307XG4gIHRoaXMuY29uZmlndXJlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbktlZW4uUmVxdWVzdC5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24oY2xpZW50LCBxdWVyaWVzLCBjYWxsYmFjayl7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIHRoaXMucnVuKCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuS2Vlbi5SZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBjb21wbGV0aW9ucyA9IDAsXG4gICAgICByZXNwb25zZSA9IFtdO1xuXG4gIHZhciBoYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICBpZiAoZXJyICYmIHNlbGYuY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgbnVsbCk7XG4gICAgfVxuICAgIHJlc3BvbnNlW2FyZ3VtZW50c1syXV0gPSByZXMsIGNvbXBsZXRpb25zKys7XG4gICAgaWYgKGNvbXBsZXRpb25zID09IHNlbGYucXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIHNlbGYuZGF0YSA9IChzZWxmLnF1ZXJpZXMubGVuZ3RoID09IDEpID8gcmVzcG9uc2VbMF0gOiByZXNwb25zZTtcbiAgICAgIGlmIChzZWxmLmNhbGxiYWNrKSBzZWxmLmNhbGxiYWNrKG51bGwsIHNlbGYuZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIF8uZWFjaChzZWxmLnF1ZXJpZXMsIGZ1bmN0aW9uKHF1ZXJ5LCBpbmRleCl7XG4gICAgdmFyIGRhdGEsIHBhdGggPSAnL3Byb2plY3RzLycgKyBzZWxmLmNsaWVudC5wcm9qZWN0SWQ7XG4gICAgdmFyIGNhbGxiYWNrU2VxdWVuY2VyID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgaGFuZGxlUmVzcG9uc2UoZXJyLCByZXMsIGluZGV4KTtcbiAgICB9O1xuXG4gICAgaWYgKHF1ZXJ5IGluc3RhbmNlb2YgS2Vlbi5RdWVyeSkge1xuICAgICAgcGF0aCArPSBxdWVyeS5wYXRoO1xuICAgICAgZGF0YSA9IHF1ZXJ5LnBhcmFtcyB8fCB7fTtcbiAgICB9XG4gICAgLyogVE9ETzogVGVzdCBhbmQgZGVwbG95IHRoaXNcbiAgICBlbHNlIGlmIChfLmlzU3RyaW5nKHF1ZXJ5KSkge1xuICAgICAgcGF0aCArPSAnL3NhdmVkX3F1ZXJpZXMvJyArIHF1ZXJ5ICsgJy9yZXN1bHQnO1xuICAgICAgZGF0YSA9IHsgYXBpX2tleTogc2VsZi5jbGllbnQucmVhZEtleSB9O1xuICAgIH0qL1xuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWVyeSAjJyArIChpbmRleCsxKSAgKycgaXMgbm90IHZhbGlkJyk7XG5cbiAgICB9XG5cbiAgICBLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZi5jbGllbnQsIHNlbGYuY2xpZW50LnJlYWRLZXksIHBhdGgsIGRhdGEsIGNhbGxiYWNrU2VxdWVuY2VyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gS2Vlbi5RdWVyeVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbktlZW4uUXVlcnkgPSBmdW5jdGlvbigpe1xuICB0aGlzLmNvbmZpZ3VyZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuS2Vlbi5RdWVyeS5wcm90b3R5cGUuY29uZmlndXJlID0gZnVuY3Rpb24oYW5hbHlzaXNUeXBlLCBwYXJhbXMpe1xuICAvL2lmICghY29sbGVjdGlvbikgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBDb2xsZWN0aW9uIG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLnBhdGggPSAnL3F1ZXJpZXMvJyArIGFuYWx5c2lzVHlwZTtcbiAgc2VsZi5wYXJhbXMgPSB7fTtcbiAgc2VsZi5zZXQocGFyYW1zKTtcbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5LZWVuLlF1ZXJ5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihhdHRyaWJ1dGUpIHtcbiAgaWYgKHRoaXMucGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zW2F0dHJpYnV0ZV0gfHwgbnVsbDtcbiAgfVxufTtcblxuS2Vlbi5RdWVyeS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oYXR0cmlidXRlcykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIF8uZWFjaChhdHRyaWJ1dGVzLCBmdW5jdGlvbih2LCBrKXtcbiAgICB2YXIga2V5ID0gaywgdmFsdWUgPSB2O1xuICAgIGlmIChrLm1hdGNoKG5ldyBSZWdFeHAoXCJbQS1aXVwiKSkpIHtcbiAgICAgIGtleSA9IGsucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkgeyByZXR1cm4gXCJfXCIrJDEudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgfVxuICAgIHNlbGYucGFyYW1zW2tleV0gPSB2YWx1ZTtcblxuICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBfLmVhY2godmFsdWUsIGZ1bmN0aW9uKGR2LCBpbmRleCl7XG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGR2KSkge1xuICAgICAgICAgIF8uZWFjaChkdiwgZnVuY3Rpb24oZGVlcFZhbHVlLCBkZWVwS2V5KXtcbiAgICAgICAgICAgIGlmIChkZWVwS2V5Lm1hdGNoKG5ldyBSZWdFeHAoXCJbQS1aXVwiKSkpIHtcbiAgICAgICAgICAgICAgdmFyIF9kZWVwS2V5ID0gZGVlcEtleS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7IHJldHVybiBcIl9cIiskMS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICAgICAgICAgICAgZGVsZXRlIHNlbGYucGFyYW1zW2tleV1baW5kZXhdW2RlZXBLZXldO1xuICAgICAgICAgICAgICBzZWxmLnBhcmFtc1trZXldW2luZGV4XVtfZGVlcEtleV0gPSBkZWVwVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcbiAgcmV0dXJuIHNlbGY7XG59O1xuXG5cbi8vIEV4cG9ydCBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGllbnQ6IHtcbiAgICBydW46IGZ1bmN0aW9uKHF1ZXJ5LCBjYWxsYmFjayl7XG4gICAgICBpZiAoIXF1ZXJ5KSB0aHJvdyBuZXcgRXJyb3IoJ0F0IGxlYXN0IG9uZSBxdWVyeSBpcyByZXF1aXJlZCcpO1xuICAgICAgdmFyIHF1ZXJpZXMgPSAoXy5pc0FycmF5KHF1ZXJ5KSkgPyBxdWVyeSA6IFtxdWVyeV07XG4gICAgICByZXR1cm4gbmV3IEtlZW4uUmVxdWVzdCh0aGlzLCBxdWVyaWVzLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuICBRdWVyeTogS2Vlbi5RdWVyeVxufTtcbiIsInZhciByZXN0ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xudmFyIGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG4vLyBIYW5kbGUgbG9naWMgb2YgcHJvY2Vzc2luZyByZXNwb25zZSwgaW5jbHVkaW5nIGVycm9yIG1lc3NhZ2VzXG4vLyBUaGUgZXJyb3IgaGFuZGxpbmcgc2hvdWxkIGJlIHN0cmVuZ3RoZW5lZCBvdmVyIHRpbWUgdG8gYmUgbW9yZVxuLy8gbWVhbmluZ2Z1bCBhbmQgcm9idXN0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKGVyciwgcmVzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgaWYgKHJlcyAmJiAhcmVzLm9rICYmICFlcnIpIHtcbiAgICB2YXIgaXNfZXJyID0gcmVzLmJvZHkgJiYgcmVzLmJvZHkuZXJyb3JfY29kZTtcbiAgICBlcnIgPSBuZXcgRXJyb3IoaXNfZXJyID8gcmVzLmJvZHkubWVzc2FnZSA6ICdVbmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgZXJyLmNvZGUgPSBpc19lcnIgPyByZXMuYm9keS5lcnJvcl9jb2RlIDogJ1Vua25vd25FcnJvcic7XG4gIH1cblxuICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHJlcy5ib2R5KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhwYXJhbXMpe1xuICB2YXIgcXVlcnkgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgIGlmIChwYXJhbXNba2V5XSkge1xuICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICBxdWVyeS5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiP1wiICsgcXVlcnkuam9pbignJicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0OiBmdW5jdGlvbihhcGlLZXksIHBhdGgsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgcmVzdFxuICAgIC5nZXQodGhpcy5iYXNlVXJsICsgdGhpcy5hcGlWZXJzaW9uICsgcGF0aCArIGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSkpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGFwaUtleSlcbiAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICBwcm9jZXNzUmVzcG9uc2UoZXJyLCByZXMsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24oYXBpS2V5LCBwYXRoLCBkYXRhLCBjYWxsYmFjaykge1xuICAgIHJlc3RcbiAgICAucG9zdCh0aGlzLmJhc2VVcmwgKyB0aGlzLmFwaVZlcnNpb24gKyBwYXRoKVxuICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBhcGlLZXkpXG4gICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgIC5zZW5kKGRhdGEgfHwge30pXG4gICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKGVyciwgcmVzLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH0sXG4gIGRlbDogZnVuY3Rpb24oYXBpS2V5LCBwYXRoLCBjYWxsYmFjaykge1xuICAgIHJlc3RcbiAgICAuZGVsKHRoaXMuYmFzZVVybCArIHRoaXMuYXBpVmVyc2lvbiArIHBhdGgpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGFwaUtleSlcbiAgICAuc2V0KCdDb250ZW50LUxlbmd0aCcsIDApXG4gICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKGVyciwgcmVzLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3QgPSAndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93XG4gID8gdGhpc1xuICA6IHdpbmRvdztcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIFRPRE86IGZ1dHVyZSBwcm9vZiwgbW92ZSB0byBjb21wb2VudCBsYW5kXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSG9zdChvYmopIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcblxuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgJ1tvYmplY3QgRmlsZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQmxvYl0nOlxuICAgIGNhc2UgJ1tvYmplY3QgRm9ybURhdGFdJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbmZ1bmN0aW9uIGdldFhIUigpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAmJiAoJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sIHx8ICFyb290LkFjdGl2ZVhPYmplY3QpKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIHtcbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChudWxsICE9IG9ialtrZXldKSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogRXhwb3NlIHNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuIC8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhcnRzO1xuICB2YXIgcGFpcjtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcGFydHMgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzFdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5yZXF1ZXN0LnBhcnNlU3RyaW5nID0gcGFyc2VTdHJpbmc7XG5cbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICdhcHBsaWNhdGlvbi94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHNlcmlhbGl6ZSxcbiAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbiB9O1xuXG4gLyoqXG4gICogRGVmYXVsdCBwYXJzZXJzLlxuICAqXG4gICogICAgIHN1cGVyYWdlbnQucGFyc2VbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24oc3RyKXtcbiAgKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gICogICAgIH07XG4gICpcbiAgKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KC9cXHI/XFxuLyk7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdmFyIGluZGV4O1xuICB2YXIgbGluZTtcbiAgdmFyIGZpZWxkO1xuICB2YXIgdmFsO1xuXG4gIGxpbmVzLnBvcCgpOyAvLyB0cmFpbGluZyBDUkxGXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgZmllbGQgPSBsaW5lLnNsaWNlKDAsIGluZGV4KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHRyaW0obGluZS5zbGljZShpbmRleCArIDEpKTtcbiAgICBmaWVsZHNbZmllbGRdID0gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHR5cGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyYW1zKHN0cil7XG4gIHJldHVybiByZWR1Y2Uoc3RyLnNwbGl0KC8gKjsgKi8pLCBmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pXG4gICAgICAsIGtleSA9IHBhcnRzLnNoaWZ0KClcbiAgICAgICwgdmFsID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsKSBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZShyZXEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgdGhpcy50ZXh0ID0gdGhpcy5yZXEubWV0aG9kICE9J0hFQUQnIFxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dCBcbiAgICAgOiBudWxsO1xuICB0aGlzLnNldFN0YXR1c1Byb3BlcnRpZXModGhpcy54aHIuc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLnNldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgPyB0aGlzLnBhcnNlQm9keSh0aGlzLnRleHQpXG4gICAgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gIC8vIGNvbnRlbnQtdHlwZVxuICB2YXIgY3QgPSB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gIHRoaXMudHlwZSA9IHR5cGUoY3QpO1xuXG4gIC8vIHBhcmFtc1xuICB2YXIgb2JqID0gcGFyYW1zKGN0KTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikgdGhpc1trZXldID0gb2JqW2tleV07XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiBzdHIubGVuZ3RoXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cyB8fCAxMjIzID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTsgXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICB9XG5cbiAgICBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEFsbG93IGZvciBleHRlbnNpb25cbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IHRpbWVvdXQgdG8gYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24obXMpe1xuICB0aGlzLl90aW1lb3V0ID0gbXM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpe1xuICBpZiAodGhpcy5hYm9ydGVkKSByZXR1cm47XG4gIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gIHRoaXMueGhyLmFib3J0KCk7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2V0KCdYLUFQSS1LZXknLCAnZm9vYmFyJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5zZXQoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ1gtQVBJLUtleSc6ICdmb29iYXInIH0pXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWwpe1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICB0aGlzLnNldChrZXksIGZpZWxkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdldCBjYXNlLWluc2Vuc2l0aXZlIGhlYWRlciBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgQ29udGVudC1UeXBlIHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgneG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi94bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKXtcbiAgdGhpcy5zZXQoJ0FjY2VwdCcsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFzc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzKXtcbiAgdmFyIHN0ciA9IGJ0b2EodXNlciArICc6JyArIHBhc3MpO1xuICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgc3RyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiogQWRkIHF1ZXJ5LXN0cmluZyBgdmFsYC5cbipcbiogRXhhbXBsZXM6XG4qXG4qICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4qICAgICAucXVlcnkoJ3NpemU9MTAnKVxuKiAgICAgLnF1ZXJ5KHsgY29sb3I6ICdibHVlJyB9KVxuKlxuKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiogQGFwaSBwdWJsaWNcbiovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXcml0ZSB0aGUgZmllbGQgYG5hbWVgIGFuZCBgdmFsYCBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAqIHJlcXVlc3QgYm9kaWVzLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmZpZWxkKCdmb28nLCAnYmFyJylcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCwgZGVmYXVsdGluZyB0aGUgYC50eXBlKClgIHRvIFwianNvblwiIHdoZW5cbiAqIGFuIG9iamVjdCBpcyBnaXZlbi5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBxdWVyeXN0cmluZ1xuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG11bHRpcGxlIGRhdGEgXCJ3cml0ZXNcIlxuICogICAgICAgcmVxdWVzdC5nZXQoJy9zZWFyY2gnKVxuICogICAgICAgICAuc2VuZCh7IHNlYXJjaDogJ3F1ZXJ5JyB9KVxuICogICAgICAgICAuc2VuZCh7IHJhbmdlOiAnMS4uNScgfSlcbiAqICAgICAgICAgLnNlbmQoeyBvcmRlcjogJ2Rlc2MnIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwgeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCgnbmFtZT10aicpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGRlZmF1bHRzIHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICAqICAgICAgICAuc2VuZCgnc3BlY2llcz1mZXJyZXQnKVxuICAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIG9iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcblxuICAvLyBtZXJnZVxuICBpZiAob2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIW9iaikgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGlmICgyID09IGZuLmxlbmd0aCkgcmV0dXJuIGZuKGVyciwgcmVzKTtcbiAgaWYgKGVycikgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICBmbihyZXMpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcm9zc0RvbWFpbkVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicpO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dEVycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCd0aW1lb3V0IG9mICcgKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpe1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gdGhpcy54aHIgPSBnZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgaWYgKDAgPT0geGhyLnN0YXR1cykge1xuICAgICAgaWYgKHNlbGYuYWJvcnRlZCkgcmV0dXJuIHNlbGYudGltZW91dEVycm9yKCk7XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgaWYgKHhoci51cGxvYWQpIHtcbiAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIGlmIChxdWVyeSkge1xuICAgIHF1ZXJ5ID0gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QocXVlcnkpO1xuICAgIHRoaXMudXJsICs9IH50aGlzLnVybC5pbmRleE9mKCc/JylcbiAgICAgID8gJyYnICsgcXVlcnlcbiAgICAgIDogJz8nICsgcXVlcnk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICgnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIWlzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVt0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyldO1xuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuICB4aHIuc2VuZChkYXRhKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG4iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59OyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuNS4yXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIC8vIEJhc2VsaW5lIHNldHVwXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gRXN0YWJsaXNoIHRoZSByb290IG9iamVjdCwgYHdpbmRvd2AgaW4gdGhlIGJyb3dzZXIsIG9yIGBleHBvcnRzYCBvbiB0aGUgc2VydmVyLlxuICB2YXIgcm9vdCA9IHRoaXM7XG5cbiAgLy8gU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGBfYCB2YXJpYWJsZS5cbiAgdmFyIHByZXZpb3VzVW5kZXJzY29yZSA9IHJvb3QuXztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgdmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSwgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICB2YXJcbiAgICBwdXNoICAgICAgICAgICAgID0gQXJyYXlQcm90by5wdXNoLFxuICAgIHNsaWNlICAgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIGNvbmNhdCAgICAgICAgICAgPSBBcnJheVByb3RvLmNvbmNhdCxcbiAgICB0b1N0cmluZyAgICAgICAgID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgICA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgdmFyXG4gICAgbmF0aXZlRm9yRWFjaCAgICAgID0gQXJyYXlQcm90by5mb3JFYWNoLFxuICAgIG5hdGl2ZU1hcCAgICAgICAgICA9IEFycmF5UHJvdG8ubWFwLFxuICAgIG5hdGl2ZVJlZHVjZSAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlLFxuICAgIG5hdGl2ZVJlZHVjZVJpZ2h0ICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgbmF0aXZlRmlsdGVyICAgICAgID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgbmF0aXZlRXZlcnkgICAgICAgID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lICAgICAgICAgPSBBcnJheVByb3RvLnNvbWUsXG4gICAgbmF0aXZlSW5kZXhPZiAgICAgID0gQXJyYXlQcm90by5pbmRleE9mLFxuICAgIG5hdGl2ZUxhc3RJbmRleE9mICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgbmF0aXZlSXNBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheSxcbiAgICBuYXRpdmVLZXlzICAgICAgICAgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kICAgICAgICAgPSBGdW5jUHJvdG8uYmluZDtcblxuICAvLyBDcmVhdGUgYSBzYWZlIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yIHVzZSBiZWxvdy5cbiAgdmFyIF8gPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgXykgcmV0dXJuIG9iajtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgXykpIHJldHVybiBuZXcgXyhvYmopO1xuICAgIHRoaXMuX3dyYXBwZWQgPSBvYmo7XG4gIH07XG5cbiAgLy8gRXhwb3J0IHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgKipOb2RlLmpzKiosIHdpdGhcbiAgLy8gYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgZm9yIHRoZSBvbGQgYHJlcXVpcmUoKWAgQVBJLiBJZiB3ZSdyZSBpblxuICAvLyB0aGUgYnJvd3NlciwgYWRkIGBfYCBhcyBhIGdsb2JhbCBvYmplY3QgdmlhIGEgc3RyaW5nIGlkZW50aWZpZXIsXG4gIC8vIGZvciBDbG9zdXJlIENvbXBpbGVyIFwiYWR2YW5jZWRcIiBtb2RlLlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfO1xuICAgIH1cbiAgICBleHBvcnRzLl8gPSBfO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuXyA9IF87XG4gIH1cblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjUuMic7XG5cbiAgLy8gQ29sbGVjdGlvbiBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBUaGUgY29ybmVyc3RvbmUsIGFuIGBlYWNoYCBpbXBsZW1lbnRhdGlvbiwgYWthIGBmb3JFYWNoYC5cbiAgLy8gSGFuZGxlcyBvYmplY3RzIHdpdGggdGhlIGJ1aWx0LWluIGBmb3JFYWNoYCwgYXJyYXlzLCBhbmQgcmF3IG9iamVjdHMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmb3JFYWNoYCBpZiBhdmFpbGFibGUuXG4gIHZhciBlYWNoID0gXy5lYWNoID0gXy5mb3JFYWNoID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpbaV0sIGksIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXlzW2ldXSwga2V5c1tpXSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZU1hcCAmJiBvYmoubWFwID09PSBuYXRpdmVNYXApIHJldHVybiBvYmoubWFwKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICB2YXIgcmVkdWNlRXJyb3IgPSAnUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XG5cbiAgLy8gKipSZWR1Y2UqKiBidWlsZHMgdXAgYSBzaW5nbGUgcmVzdWx0IGZyb20gYSBsaXN0IG9mIHZhbHVlcywgYWthIGBpbmplY3RgLFxuICAvLyBvciBgZm9sZGxgLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlYCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlID0gXy5mb2xkbCA9IF8uaW5qZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlICYmIG9iai5yZWR1Y2UgPT09IG5hdGl2ZVJlZHVjZSkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZShpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlKGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSB2YWx1ZTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gVGhlIHJpZ2h0LWFzc29jaWF0aXZlIHZlcnNpb24gb2YgcmVkdWNlLCBhbHNvIGtub3duIGFzIGBmb2xkcmAuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VSaWdodGAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZVJpZ2h0ID0gXy5mb2xkciA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZVJpZ2h0ICYmIG9iai5yZWR1Y2VSaWdodCA9PT0gbmF0aXZlUmVkdWNlUmlnaHQpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvciwgbWVtbykgOiBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSArbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGluZGV4ID0ga2V5cyA/IGtleXNbLS1sZW5ndGhdIDogLS1sZW5ndGg7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IG9ialtpbmRleF07XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgb2JqW2luZGV4XSwgaW5kZXgsIGxpc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW5pdGlhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihyZWR1Y2VFcnJvcik7XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyB0aGF0IHBhc3MgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZmlsdGVyYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYHNlbGVjdGAuXG4gIF8uZmlsdGVyID0gXy5zZWxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVGaWx0ZXIgJiYgb2JqLmZpbHRlciA9PT0gbmF0aXZlRmlsdGVyKSByZXR1cm4gb2JqLmZpbHRlcihpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkgcmVzdWx0cy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBmb3Igd2hpY2ggYSB0cnV0aCB0ZXN0IGZhaWxzLlxuICBfLnJlamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiAhaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpO1xuICAgIH0sIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIGFsbCBvZiB0aGUgZWxlbWVudHMgbWF0Y2ggYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZXZlcnlgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYWxsYC5cbiAgXy5ldmVyeSA9IF8uYWxsID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlRXZlcnkgJiYgb2JqLmV2ZXJ5ID09PSBuYXRpdmVFdmVyeSkgcmV0dXJuIG9iai5ldmVyeShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKCEocmVzdWx0ID0gcmVzdWx0ICYmIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIG9iamVjdCBtYXRjaGVzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHNvbWVgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgYW55YC5cbiAgdmFyIGFueSA9IF8uc29tZSA9IF8uYW55ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yIHx8IChpdGVyYXRvciA9IF8uaWRlbnRpdHkpO1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZVNvbWUgJiYgb2JqLnNvbWUgPT09IG5hdGl2ZVNvbWUpIHJldHVybiBvYmouc29tZShpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gdmFsdWUgKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbihvYmosIHRhcmdldCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIG9iai5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gb2JqLmluZGV4T2YodGFyZ2V0KSAhPSAtMTtcbiAgICByZXR1cm4gYW55KG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEludm9rZSBhIG1ldGhvZCAod2l0aCBhcmd1bWVudHMpIG9uIGV2ZXJ5IGl0ZW0gaW4gYSBjb2xsZWN0aW9uLlxuICBfLmludm9rZSA9IGZ1bmN0aW9uKG9iaiwgbWV0aG9kKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGlzRnVuYyA9IF8uaXNGdW5jdGlvbihtZXRob2QpO1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKGlzRnVuYyA/IG1ldGhvZCA6IHZhbHVlW21ldGhvZF0pLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBtYXBgOiBmZXRjaGluZyBhIHByb3BlcnR5LlxuICBfLnBsdWNrID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiB2YWx1ZVtrZXldOyB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaWx0ZXJgOiBzZWxlY3Rpbmcgb25seSBvYmplY3RzXG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8ud2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzLCBmaXJzdCkge1xuICAgIGlmIChfLmlzRW1wdHkoYXR0cnMpKSByZXR1cm4gZmlyc3QgPyB2b2lkIDAgOiBbXTtcbiAgICByZXR1cm4gX1tmaXJzdCA/ICdmaW5kJyA6ICdmaWx0ZXInXShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgaWYgKGF0dHJzW2tleV0gIT09IHZhbHVlW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbmRgOiBnZXR0aW5nIHRoZSBmaXJzdCBvYmplY3RcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy5maW5kV2hlcmUgPSBmdW5jdGlvbihvYmosIGF0dHJzKSB7XG4gICAgcmV0dXJuIF8ud2hlcmUob2JqLCBhdHRycywgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtYXhpbXVtIGVsZW1lbnQgb3IgKGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICAvLyBDYW4ndCBvcHRpbWl6ZSBhcnJheXMgb2YgaW50ZWdlcnMgbG9uZ2VyIHRoYW4gNjUsNTM1IGVsZW1lbnRzLlxuICAvLyBTZWUgW1dlYktpdCBCdWcgODA3OTddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDc5NylcbiAgXy5tYXggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIC1JbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogLUluZmluaXR5LCB2YWx1ZTogLUluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPiByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1pbmltdW0gZWxlbWVudCAob3IgZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIF8ubWluID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiBJbmZpbml0eTtcbiAgICB2YXIgcmVzdWx0ID0ge2NvbXB1dGVkIDogSW5maW5pdHksIHZhbHVlOiBJbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkIDwgcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gU2h1ZmZsZSBhbiBhcnJheSwgdXNpbmcgdGhlIG1vZGVybiB2ZXJzaW9uIG9mIHRoZSBcbiAgLy8gW0Zpc2hlci1ZYXRlcyBzaHVmZmxlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlcuKAk1lhdGVzX3NodWZmbGUpLlxuICBfLnNodWZmbGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmFuZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzaHVmZmxlZCA9IFtdO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmFuZCA9IF8ucmFuZG9tKGluZGV4KyspO1xuICAgICAgc2h1ZmZsZWRbaW5kZXggLSAxXSA9IHNodWZmbGVkW3JhbmRdO1xuICAgICAgc2h1ZmZsZWRbcmFuZF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gIH07XG5cbiAgLy8gU2FtcGxlICoqbioqIHJhbmRvbSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgLy8gSWYgKipuKiogaXMgbm90IHNwZWNpZmllZCwgcmV0dXJucyBhIHNpbmdsZSByYW5kb20gZWxlbWVudCBmcm9tIHRoZSBhcnJheS5cbiAgLy8gVGhlIGludGVybmFsIGBndWFyZGAgYXJndW1lbnQgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgbWFwYC5cbiAgXy5zYW1wbGUgPSBmdW5jdGlvbihvYmosIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IGd1YXJkKSB7XG4gICAgICByZXR1cm4gb2JqW18ucmFuZG9tKG9iai5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIHJldHVybiBfLnNodWZmbGUob2JqKS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgbG9va3VwIGl0ZXJhdG9ycy5cbiAgdmFyIGxvb2t1cEl0ZXJhdG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlIDogZnVuY3Rpb24ob2JqKXsgcmV0dXJuIG9ialt2YWx1ZV07IH07XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uIHByb2R1Y2VkIGJ5IGFuIGl0ZXJhdG9yLlxuICBfLnNvcnRCeSA9IGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBsb29rdXBJdGVyYXRvcih2YWx1ZSk7XG4gICAgcmV0dXJuIF8ucGx1Y2soXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjcml0ZXJpYTogaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHZhciBhID0gbGVmdC5jcml0ZXJpYTtcbiAgICAgIHZhciBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICBpZiAoYSAhPT0gYikge1xuICAgICAgICBpZiAoYSA+IGIgfHwgYSA9PT0gdm9pZCAwKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEgPCBiIHx8IGIgPT09IHZvaWQgMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQuaW5kZXggLSByaWdodC5pbmRleDtcbiAgICB9KSwgJ3ZhbHVlJyk7XG4gIH07XG5cbiAgLy8gQW4gaW50ZXJuYWwgZnVuY3Rpb24gdXNlZCBmb3IgYWdncmVnYXRlIFwiZ3JvdXAgYnlcIiBvcGVyYXRpb25zLlxuICB2YXIgZ3JvdXAgPSBmdW5jdGlvbihiZWhhdmlvcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWx1ZSA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKHZhbHVlKTtcbiAgICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBvYmopO1xuICAgICAgICBiZWhhdmlvcihyZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gR3JvdXBzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24uIFBhc3MgZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZVxuICAvLyB0byBncm91cCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGNyaXRlcmlvbi5cbiAgXy5ncm91cEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgKF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldIDogKHJlc3VsdFtrZXldID0gW10pKS5wdXNoKHZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gSW5kZXhlcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLCBzaW1pbGFyIHRvIGBncm91cEJ5YCwgYnV0IGZvclxuICAvLyB3aGVuIHlvdSBrbm93IHRoYXQgeW91ciBpbmRleCB2YWx1ZXMgd2lsbCBiZSB1bmlxdWUuXG4gIF8uaW5kZXhCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gIH0pO1xuXG4gIC8vIENvdW50cyBpbnN0YW5jZXMgb2YgYW4gb2JqZWN0IHRoYXQgZ3JvdXAgYnkgYSBjZXJ0YWluIGNyaXRlcmlvbi4gUGFzc1xuICAvLyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlIHRvIGNvdW50IGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgLy8gY3JpdGVyaW9uLlxuICBfLmNvdW50QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgIF8uaGFzKHJlc3VsdCwga2V5KSA/IHJlc3VsdFtrZXldKysgOiByZXN1bHRba2V5XSA9IDE7XG4gIH0pO1xuXG4gIC8vIFVzZSBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gdG8gZmlndXJlIG91dCB0aGUgc21hbGxlc3QgaW5kZXggYXQgd2hpY2hcbiAgLy8gYW4gb2JqZWN0IHNob3VsZCBiZSBpbnNlcnRlZCBzbyBhcyB0byBtYWludGFpbiBvcmRlci4gVXNlcyBiaW5hcnkgc2VhcmNoLlxuICBfLnNvcnRlZEluZGV4ID0gZnVuY3Rpb24oYXJyYXksIG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yID09IG51bGwgPyBfLmlkZW50aXR5IDogbG9va3VwSXRlcmF0b3IoaXRlcmF0b3IpO1xuICAgIHZhciB2YWx1ZSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqKTtcbiAgICB2YXIgbG93ID0gMCwgaGlnaCA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAobG93IDwgaGlnaCkge1xuICAgICAgdmFyIG1pZCA9IChsb3cgKyBoaWdoKSA+Pj4gMTtcbiAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbbWlkXSkgPCB2YWx1ZSA/IGxvdyA9IG1pZCArIDEgOiBoaWdoID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG93O1xuICB9O1xuXG4gIC8vIFNhZmVseSBjcmVhdGUgYSByZWFsLCBsaXZlIGFycmF5IGZyb20gYW55dGhpbmcgaXRlcmFibGUuXG4gIF8udG9BcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gW107XG4gICAgaWYgKF8uaXNBcnJheShvYmopKSByZXR1cm4gc2xpY2UuY2FsbChvYmopO1xuICAgIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgcmV0dXJuIF8ubWFwKG9iaiwgXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iaik7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYW4gb2JqZWN0LlxuICBfLnNpemUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpID8gb2JqLmxlbmd0aCA6IF8ua2V5cyhvYmopLmxlbmd0aDtcbiAgfTtcblxuICAvLyBBcnJheSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYGhlYWRgIGFuZCBgdGFrZWAuIFRoZSAqKmd1YXJkKiogY2hlY2tcbiAgLy8gYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmZpcnN0ID0gXy5oZWFkID0gXy50YWtlID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIChuID09IG51bGwpIHx8IGd1YXJkID8gYXJyYXlbMF0gOiBzbGljZS5jYWxsKGFycmF5LCAwLCBuKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBsYXN0IGVudHJ5IG9mIHRoZSBhcnJheS4gRXNwZWNpYWxseSB1c2VmdWwgb25cbiAgLy8gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gYWxsIHRoZSB2YWx1ZXMgaW5cbiAgLy8gdGhlIGFycmF5LCBleGNsdWRpbmcgdGhlIGxhc3QgTi4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoXG4gIC8vIGBfLm1hcGAuXG4gIF8uaW5pdGlhbCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbikpO1xuICB9O1xuXG4gIC8vIEdldCB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIHRoZSBsYXN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKiBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ubGFzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIGlmICgobiA9PSBudWxsKSB8fCBndWFyZCkge1xuICAgICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZXR1cm5zIGV2ZXJ5dGhpbmcgYnV0IHRoZSBmaXJzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEFsaWFzZWQgYXMgYHRhaWxgIGFuZCBgZHJvcGAuXG4gIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nIGFuICoqbioqIHdpbGwgcmV0dXJuXG4gIC8vIHRoZSByZXN0IE4gdmFsdWVzIGluIHRoZSBhcnJheS4gVGhlICoqZ3VhcmQqKlxuICAvLyBjaGVjayBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8ucmVzdCA9IF8udGFpbCA9IF8uZHJvcCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCAobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKTtcbiAgfTtcblxuICAvLyBUcmltIG91dCBhbGwgZmFsc3kgdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIF8uY29tcGFjdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBfLmlkZW50aXR5KTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiBvZiBhIHJlY3Vyc2l2ZSBgZmxhdHRlbmAgZnVuY3Rpb24uXG4gIHZhciBmbGF0dGVuID0gZnVuY3Rpb24oaW5wdXQsIHNoYWxsb3csIG91dHB1dCkge1xuICAgIGlmIChzaGFsbG93ICYmIF8uZXZlcnkoaW5wdXQsIF8uaXNBcnJheSkpIHtcbiAgICAgIHJldHVybiBjb25jYXQuYXBwbHkob3V0cHV0LCBpbnB1dCk7XG4gICAgfVxuICAgIGVhY2goaW5wdXQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzQXJndW1lbnRzKHZhbHVlKSkge1xuICAgICAgICBzaGFsbG93ID8gcHVzaC5hcHBseShvdXRwdXQsIHZhbHVlKSA6IGZsYXR0ZW4odmFsdWUsIHNoYWxsb3csIG91dHB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICAvLyBGbGF0dGVuIG91dCBhbiBhcnJheSwgZWl0aGVyIHJlY3Vyc2l2ZWx5IChieSBkZWZhdWx0KSwgb3IganVzdCBvbmUgbGV2ZWwuXG4gIF8uZmxhdHRlbiA9IGZ1bmN0aW9uKGFycmF5LCBzaGFsbG93KSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyYXksIHNoYWxsb3csIFtdKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSB2ZXJzaW9uIG9mIHRoZSBhcnJheSB0aGF0IGRvZXMgbm90IGNvbnRhaW4gdGhlIHNwZWNpZmllZCB2YWx1ZShzKS5cbiAgXy53aXRob3V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5kaWZmZXJlbmNlKGFycmF5LCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIHRoZSBhcnJheS4gSWYgdGhlIGFycmF5IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gc29ydGVkLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIHVzaW5nIGEgZmFzdGVyIGFsZ29yaXRobS5cbiAgLy8gQWxpYXNlZCBhcyBgdW5pcXVlYC5cbiAgXy51bmlxID0gXy51bmlxdWUgPSBmdW5jdGlvbihhcnJheSwgaXNTb3J0ZWQsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKF8uaXNGdW5jdGlvbihpc1NvcnRlZCkpIHtcbiAgICAgIGNvbnRleHQgPSBpdGVyYXRvcjtcbiAgICAgIGl0ZXJhdG9yID0gaXNTb3J0ZWQ7XG4gICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbCA9IGl0ZXJhdG9yID8gXy5tYXAoYXJyYXksIGl0ZXJhdG9yLCBjb250ZXh0KSA6IGFycmF5O1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHNlZW4gPSBbXTtcbiAgICBlYWNoKGluaXRpYWwsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgaWYgKGlzU29ydGVkID8gKCFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IHZhbHVlKSA6ICFfLmNvbnRhaW5zKHNlZW4sIHZhbHVlKSkge1xuICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuICAgICAgICByZXN1bHRzLnB1c2goYXJyYXlbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIHVuaW9uOiBlYWNoIGRpc3RpbmN0IGVsZW1lbnQgZnJvbSBhbGwgb2ZcbiAgLy8gdGhlIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8udW5pb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXy51bmlxKF8uZmxhdHRlbihhcmd1bWVudHMsIHRydWUpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGFuIGFycmF5IHRoYXQgY29udGFpbnMgZXZlcnkgaXRlbSBzaGFyZWQgYmV0d2VlbiBhbGwgdGhlXG4gIC8vIHBhc3NlZC1pbiBhcnJheXMuXG4gIF8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoXy51bmlxKGFycmF5KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF8uZXZlcnkocmVzdCwgZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5kZXhPZihvdGhlciwgaXRlbSkgPj0gMDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIFRha2UgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBvbmUgYXJyYXkgYW5kIGEgbnVtYmVyIG9mIG90aGVyIGFycmF5cy5cbiAgLy8gT25seSB0aGUgZWxlbWVudHMgcHJlc2VudCBpbiBqdXN0IHRoZSBmaXJzdCBhcnJheSB3aWxsIHJlbWFpbi5cbiAgXy5kaWZmZXJlbmNlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICB2YXIgcmVzdCA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gIV8uY29udGFpbnMocmVzdCwgdmFsdWUpOyB9KTtcbiAgfTtcblxuICAvLyBaaXAgdG9nZXRoZXIgbXVsdGlwbGUgbGlzdHMgaW50byBhIHNpbmdsZSBhcnJheSAtLSBlbGVtZW50cyB0aGF0IHNoYXJlXG4gIC8vIGFuIGluZGV4IGdvIHRvZ2V0aGVyLlxuICBfLnppcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBfLm1heChfLnBsdWNrKGFyZ3VtZW50cywgXCJsZW5ndGhcIikuY29uY2F0KDApKTtcbiAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdHNbaV0gPSBfLnBsdWNrKGFyZ3VtZW50cywgJycgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgbGlzdHMgaW50byBvYmplY3RzLiBQYXNzIGVpdGhlciBhIHNpbmdsZSBhcnJheSBvZiBgW2tleSwgdmFsdWVdYFxuICAvLyBwYWlycywgb3IgdHdvIHBhcmFsbGVsIGFycmF5cyBvZiB0aGUgc2FtZSBsZW5ndGggLS0gb25lIG9mIGtleXMsIGFuZCBvbmUgb2ZcbiAgLy8gdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICBfLm9iamVjdCA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlcykge1xuICAgIGlmIChsaXN0ID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1dID0gdmFsdWVzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2xpc3RbaV1bMF1dID0gbGlzdFtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBseSB1cyB3aXRoIGluZGV4T2YgKEknbSBsb29raW5nIGF0IHlvdSwgKipNU0lFKiopLFxuICAvLyB3ZSBuZWVkIHRoaXMgZnVuY3Rpb24uIFJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW5cbiAgLy8gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTEgaWYgdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgLy8gSWYgdGhlIGFycmF5IGlzIGxhcmdlIGFuZCBhbHJlYWR5IGluIHNvcnQgb3JkZXIsIHBhc3MgYHRydWVgXG4gIC8vIGZvciAqKmlzU29ydGVkKiogdG8gdXNlIGJpbmFyeSBzZWFyY2guXG4gIF8uaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBpc1NvcnRlZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGlzU29ydGVkKSB7XG4gICAgICBpZiAodHlwZW9mIGlzU29ydGVkID09ICdudW1iZXInKSB7XG4gICAgICAgIGkgPSAoaXNTb3J0ZWQgPCAwID8gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaXNTb3J0ZWQpIDogaXNTb3J0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IF8uc29ydGVkSW5kZXgoYXJyYXksIGl0ZW0pO1xuICAgICAgICByZXR1cm4gYXJyYXlbaV0gPT09IGl0ZW0gPyBpIDogLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0sIGlzU29ydGVkKTtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbGFzdEluZGV4T2ZgIGlmIGF2YWlsYWJsZS5cbiAgXy5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtLCBmcm9tKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaGFzSW5kZXggPSBmcm9tICE9IG51bGw7XG4gICAgaWYgKG5hdGl2ZUxhc3RJbmRleE9mICYmIGFycmF5Lmxhc3RJbmRleE9mID09PSBuYXRpdmVMYXN0SW5kZXhPZikge1xuICAgICAgcmV0dXJuIGhhc0luZGV4ID8gYXJyYXkubGFzdEluZGV4T2YoaXRlbSwgZnJvbSkgOiBhcnJheS5sYXN0SW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgdmFyIGkgPSAoaGFzSW5kZXggPyBmcm9tIDogYXJyYXkubGVuZ3RoKTtcbiAgICB3aGlsZSAoaS0tKSBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIHJldHVybiAtMTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhbiBpbnRlZ2VyIEFycmF5IGNvbnRhaW5pbmcgYW4gYXJpdGhtZXRpYyBwcm9ncmVzc2lvbi4gQSBwb3J0IG9mXG4gIC8vIHRoZSBuYXRpdmUgUHl0aG9uIGByYW5nZSgpYCBmdW5jdGlvbi4gU2VlXG4gIC8vIFt0aGUgUHl0aG9uIGRvY3VtZW50YXRpb25dKGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS9mdW5jdGlvbnMuaHRtbCNyYW5nZSkuXG4gIF8ucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHN0b3AgPSBzdGFydCB8fCAwO1xuICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICBzdGVwID0gYXJndW1lbnRzWzJdIHx8IDE7XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgoTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCksIDApO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciByYW5nZSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUoaWR4IDwgbGVuZ3RoKSB7XG4gICAgICByYW5nZVtpZHgrK10gPSBzdGFydDtcbiAgICAgIHN0YXJ0ICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV1c2FibGUgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIHByb3RvdHlwZSBzZXR0aW5nLlxuICB2YXIgY3RvciA9IGZ1bmN0aW9uKCl7fTtcblxuICAvLyBDcmVhdGUgYSBmdW5jdGlvbiBib3VuZCB0byBhIGdpdmVuIG9iamVjdCAoYXNzaWduaW5nIGB0aGlzYCwgYW5kIGFyZ3VtZW50cyxcbiAgLy8gb3B0aW9uYWxseSkuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBGdW5jdGlvbi5iaW5kYCBpZlxuICAvLyBhdmFpbGFibGUuXG4gIF8uYmluZCA9IGZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncywgYm91bmQ7XG4gICAgaWYgKG5hdGl2ZUJpbmQgJiYgZnVuYy5iaW5kID09PSBuYXRpdmVCaW5kKSByZXR1cm4gbmF0aXZlQmluZC5hcHBseShmdW5jLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGlmICghXy5pc0Z1bmN0aW9uKGZ1bmMpKSB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIGJvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgYm91bmQpKSByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gZnVuYy5wcm90b3R5cGU7XG4gICAgICB2YXIgc2VsZiA9IG5ldyBjdG9yO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUGFydGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gYnkgY3JlYXRpbmcgYSB2ZXJzaW9uIHRoYXQgaGFzIGhhZCBzb21lIG9mIGl0c1xuICAvLyBhcmd1bWVudHMgcHJlLWZpbGxlZCwgd2l0aG91dCBjaGFuZ2luZyBpdHMgZHluYW1pYyBgdGhpc2AgY29udGV4dC5cbiAgXy5wYXJ0aWFsID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gQmluZCBhbGwgb2YgYW4gb2JqZWN0J3MgbWV0aG9kcyB0byB0aGF0IG9iamVjdC4gVXNlZnVsIGZvciBlbnN1cmluZyB0aGF0XG4gIC8vIGFsbCBjYWxsYmFja3MgZGVmaW5lZCBvbiBhbiBvYmplY3QgYmVsb25nIHRvIGl0LlxuICBfLmJpbmRBbGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgZnVuY3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFsbCBtdXN0IGJlIHBhc3NlZCBmdW5jdGlvbiBuYW1lc1wiKTtcbiAgICBlYWNoKGZ1bmNzLCBmdW5jdGlvbihmKSB7IG9ialtmXSA9IF8uYmluZChvYmpbZl0sIG9iaik7IH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gTWVtb2l6ZSBhbiBleHBlbnNpdmUgZnVuY3Rpb24gYnkgc3RvcmluZyBpdHMgcmVzdWx0cy5cbiAgXy5tZW1vaXplID0gZnVuY3Rpb24oZnVuYywgaGFzaGVyKSB7XG4gICAgdmFyIG1lbW8gPSB7fTtcbiAgICBoYXNoZXIgfHwgKGhhc2hlciA9IF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfLmhhcyhtZW1vLCBrZXkpID8gbWVtb1trZXldIDogKG1lbW9ba2V5XSA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpeyByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTsgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIF8uZGVsYXkuYXBwbHkoXywgW2Z1bmMsIDFdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IG5ldyBEYXRlO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxhc3QgPSAobmV3IERhdGUoKSkgLSB0aW1lc3RhbXA7XG4gICAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoY2FsbE5vdykgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGF0IG1vc3Qgb25lIHRpbWUsIG5vIG1hdHRlciBob3dcbiAgLy8gb2Z0ZW4geW91IGNhbGwgaXQuIFVzZWZ1bCBmb3IgbGF6eSBpbml0aWFsaXphdGlvbi5cbiAgXy5vbmNlID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciByYW4gPSBmYWxzZSwgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocmFuKSByZXR1cm4gbWVtbztcbiAgICAgIHJhbiA9IHRydWU7XG4gICAgICBtZW1vID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgZnVuYyA9IG51bGw7XG4gICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIGZpcnN0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgc2Vjb25kLFxuICAvLyBhbGxvd2luZyB5b3UgdG8gYWRqdXN0IGFyZ3VtZW50cywgcnVuIGNvZGUgYmVmb3JlIGFuZCBhZnRlciwgYW5kXG4gIC8vIGNvbmRpdGlvbmFsbHkgZXhlY3V0ZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gIF8ud3JhcCA9IGZ1bmN0aW9uKGZ1bmMsIHdyYXBwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IFtmdW5jXTtcbiAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiB3cmFwcGVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2l0aW9uIG9mIGEgbGlzdCBvZiBmdW5jdGlvbnMsIGVhY2hcbiAgLy8gY29uc3VtaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgZm9sbG93cy5cbiAgXy5jb21wb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZ1bmNzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZm9yICh2YXIgaSA9IGZ1bmNzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbZnVuY3NbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgYWZ0ZXIgYmVpbmcgY2FsbGVkIE4gdGltZXMuXG4gIF8uYWZ0ZXIgPSBmdW5jdGlvbih0aW1lcywgZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgtLXRpbWVzIDwgMSkge1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLy8gT2JqZWN0IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmV0cmlldmUgdGhlIG5hbWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBPYmplY3Qua2V5c2BcbiAgXy5rZXlzID0gbmF0aXZlS2V5cyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqICE9PSBPYmplY3Qob2JqKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvYmplY3QnKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSB2YWx1ZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgXy52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVzW2ldID0gb2JqW2tleXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIC8vIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYSBsaXN0IG9mIGBba2V5LCB2YWx1ZV1gIHBhaXJzLlxuICBfLnBhaXJzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHBhaXJzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcGFpcnNbaV0gPSBba2V5c1tpXSwgb2JqW2tleXNbaV1dXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhaXJzO1xuICB9O1xuXG4gIC8vIEludmVydCB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdC4gVGhlIHZhbHVlcyBtdXN0IGJlIHNlcmlhbGl6YWJsZS5cbiAgXy5pbnZlcnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W29ialtrZXlzW2ldXV0gPSBrZXlzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHNvcnRlZCBsaXN0IG9mIHRoZSBmdW5jdGlvbiBuYW1lcyBhdmFpbGFibGUgb24gdGhlIG9iamVjdC5cbiAgLy8gQWxpYXNlZCBhcyBgbWV0aG9kc2BcbiAgXy5mdW5jdGlvbnMgPSBfLm1ldGhvZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKG9ialtrZXldKSkgbmFtZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXMuc29ydCgpO1xuICB9O1xuXG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBfLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCBvbmx5IGNvbnRhaW5pbmcgdGhlIHdoaXRlbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ucGljayA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBlYWNoKGtleXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBvYmopIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgYmxhY2tsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5vbWl0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghXy5jb250YWlucyhrZXlzLCBrZXkpKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgLy8gRmlsbCBpbiBhIGdpdmVuIG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgXy5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgKHNoYWxsb3ctY2xvbmVkKSBkdXBsaWNhdGUgb2YgYW4gb2JqZWN0LlxuICBfLmNsb25lID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgcmV0dXJuIF8uaXNBcnJheShvYmopID8gb2JqLnNsaWNlKCkgOiBfLmV4dGVuZCh7fSwgb2JqKTtcbiAgfTtcblxuICAvLyBJbnZva2VzIGludGVyY2VwdG9yIHdpdGggdGhlIG9iaiwgYW5kIHRoZW4gcmV0dXJucyBvYmouXG4gIC8vIFRoZSBwcmltYXJ5IHB1cnBvc2Ugb2YgdGhpcyBtZXRob2QgaXMgdG8gXCJ0YXAgaW50b1wiIGEgbWV0aG9kIGNoYWluLCBpblxuICAvLyBvcmRlciB0byBwZXJmb3JtIG9wZXJhdGlvbnMgb24gaW50ZXJtZWRpYXRlIHJlc3VsdHMgd2l0aGluIHRoZSBjaGFpbi5cbiAgXy50YXAgPSBmdW5jdGlvbihvYmosIGludGVyY2VwdG9yKSB7XG4gICAgaW50ZXJjZXB0b3Iob2JqKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG4gIHZhciBlcSA9IGZ1bmN0aW9uKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PSAxIC8gYjtcbiAgICAvLyBBIHN0cmljdCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGBudWxsID09IHVuZGVmaW5lZGAuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGlmIChhIGluc3RhbmNlb2YgXykgYSA9IGEuX3dyYXBwZWQ7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT0gdG9TdHJpbmcuY2FsbChiKSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS4gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvclxuICAgICAgICAvLyBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgcmV0dXJuIGEgIT0gK2EgPyBiICE9ICtiIDogKGEgPT0gMCA/IDEgLyBhID09IDEgLyBiIDogYSA9PSArYik7XG4gICAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG4gICAgICAvLyBSZWdFeHBzIGFyZSBjb21wYXJlZCBieSB0aGVpciBzb3VyY2UgcGF0dGVybnMgYW5kIGZsYWdzLlxuICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgICAgICBhLmdsb2JhbCA9PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT0gYi5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYSAhPSAnb2JqZWN0JyB8fCB0eXBlb2YgYiAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgICAvLyBzdHJ1Y3R1cmVzIGlzIGFkYXB0ZWQgZnJvbSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYC5cbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICAgIH1cbiAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHNcbiAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoXy5pc0Z1bmN0aW9uKGFDdG9yKSAmJiAoYUN0b3IgaW5zdGFuY2VvZiBhQ3RvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0Z1bmN0aW9uKGJDdG9yKSAmJiAoYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICB2YXIgc2l6ZSA9IDAsIHJlc3VsdCA9IHRydWU7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgIHNpemUgPSBhLmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpemUgPT0gYi5sZW5ndGg7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBlcShhW3NpemVdLCBiW3NpemVdLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChfLmhhcyhhLCBrZXkpKSB7XG4gICAgICAgICAgLy8gQ291bnQgdGhlIGV4cGVjdGVkIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXIuXG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gXy5oYXMoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzLlxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgaWYgKF8uaGFzKGIsIGtleSkgJiYgIShzaXplLS0pKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSAhc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnBvcCgpO1xuICAgIGJTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gYSBkZWVwIGNvbXBhcmlzb24gdG8gY2hlY2sgaWYgdHdvIG9iamVjdHMgYXJlIGVxdWFsLlxuICBfLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIsIFtdLCBbXSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiBhcnJheSwgc3RyaW5nLCBvciBvYmplY3QgZW1wdHk/XG4gIC8vIEFuIFwiZW1wdHlcIiBvYmplY3QgaGFzIG5vIGVudW1lcmFibGUgb3duLXByb3BlcnRpZXMuXG4gIF8uaXNFbXB0eSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKF8uaXNBcnJheShvYmopIHx8IF8uaXNTdHJpbmcob2JqKSkgcmV0dXJuIG9iai5sZW5ndGggPT09IDA7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBET00gZWxlbWVudD9cbiAgXy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhbiBhcnJheT9cbiAgLy8gRGVsZWdhdGVzIHRvIEVDTUE1J3MgbmF0aXZlIEFycmF5LmlzQXJyYXlcbiAgXy5pc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcblxuICAvLyBBZGQgc29tZSBpc1R5cGUgbWV0aG9kczogaXNBcmd1bWVudHMsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBpc051bWJlciwgaXNEYXRlLCBpc1JlZ0V4cC5cbiAgZWFjaChbJ0FyZ3VtZW50cycsICdGdW5jdGlvbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBfWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xuICB9KTtcblxuICAvLyBEZWZpbmUgYSBmYWxsYmFjayB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaW4gYnJvd3NlcnMgKGFoZW0sIElFKSwgd2hlcmVcbiAgLy8gdGhlcmUgaXNuJ3QgYW55IGluc3BlY3RhYmxlIFwiQXJndW1lbnRzXCIgdHlwZS5cbiAgaWYgKCFfLmlzQXJndW1lbnRzKGFyZ3VtZW50cykpIHtcbiAgICBfLmlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gISEob2JqICYmIF8uaGFzKG9iaiwgJ2NhbGxlZScpKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gT3B0aW1pemUgYGlzRnVuY3Rpb25gIGlmIGFwcHJvcHJpYXRlLlxuICBpZiAodHlwZW9mICgvLi8pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9O1xuICB9XG5cbiAgLy8gSXMgYSBnaXZlbiBvYmplY3QgYSBmaW5pdGUgbnVtYmVyP1xuICBfLmlzRmluaXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKG9iaikgJiYgIWlzTmFOKHBhcnNlRmxvYXQob2JqKSk7XG4gIH07XG5cbiAgLy8gSXMgdGhlIGdpdmVuIHZhbHVlIGBOYU5gPyAoTmFOIGlzIHRoZSBvbmx5IG51bWJlciB3aGljaCBkb2VzIG5vdCBlcXVhbCBpdHNlbGYpLlxuICBfLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8uaXNOdW1iZXIob2JqKSAmJiBvYmogIT0gK29iajtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgYm9vbGVhbj9cbiAgXy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGVxdWFsIHRvIG51bGw/XG4gIF8uaXNOdWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIHVuZGVmaW5lZD9cbiAgXy5pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHZvaWQgMDtcbiAgfTtcblxuICAvLyBTaG9ydGN1dCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgaWYgYW4gb2JqZWN0IGhhcyBhIGdpdmVuIHByb3BlcnR5IGRpcmVjdGx5XG4gIC8vIG9uIGl0c2VsZiAoaW4gb3RoZXIgd29yZHMsIG5vdCBvbiBhIHByb3RvdHlwZSkuXG4gIF8uaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSdW4gVW5kZXJzY29yZS5qcyBpbiAqbm9Db25mbGljdCogbW9kZSwgcmV0dXJuaW5nIHRoZSBgX2AgdmFyaWFibGUgdG8gaXRzXG4gIC8vIHByZXZpb3VzIG93bmVyLiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcm9vdC5fID0gcHJldmlvdXNVbmRlcnNjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEtlZXAgdGhlIGlkZW50aXR5IGZ1bmN0aW9uIGFyb3VuZCBmb3IgZGVmYXVsdCBpdGVyYXRvcnMuXG4gIF8uaWRlbnRpdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvLyBSdW4gYSBmdW5jdGlvbiAqKm4qKiB0aW1lcy5cbiAgXy50aW1lcyA9IGZ1bmN0aW9uKG4sIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGFjY3VtID0gQXJyYXkoTWF0aC5tYXgoMCwgbikpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSBhY2N1bVtpXSA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgaSk7XG4gICAgcmV0dXJuIGFjY3VtO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGluY2x1c2l2ZSkuXG4gIF8ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09IG51bGwpIHtcbiAgICAgIG1heCA9IG1pbjtcbiAgICAgIG1pbiA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtaW4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xuICB9O1xuXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgZXNjYXBlOiB7XG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnLFxuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICBcIidcIjogJyYjeDI3OydcbiAgICB9XG4gIH07XG4gIGVudGl0eU1hcC51bmVzY2FwZSA9IF8uaW52ZXJ0KGVudGl0eU1hcC5lc2NhcGUpO1xuXG4gIC8vIFJlZ2V4ZXMgY29udGFpbmluZyB0aGUga2V5cyBhbmQgdmFsdWVzIGxpc3RlZCBpbW1lZGlhdGVseSBhYm92ZS5cbiAgdmFyIGVudGl0eVJlZ2V4ZXMgPSB7XG4gICAgZXNjYXBlOiAgIG5ldyBSZWdFeHAoJ1snICsgXy5rZXlzKGVudGl0eU1hcC5lc2NhcGUpLmpvaW4oJycpICsgJ10nLCAnZycpLFxuICAgIHVuZXNjYXBlOiBuZXcgUmVnRXhwKCcoJyArIF8ua2V5cyhlbnRpdHlNYXAudW5lc2NhcGUpLmpvaW4oJ3wnKSArICcpJywgJ2cnKVxuICB9O1xuXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cbiAgXy5lYWNoKFsnZXNjYXBlJywgJ3VuZXNjYXBlJ10sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIF9bbWV0aG9kXSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZyA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICByZXR1cm4gKCcnICsgc3RyaW5nKS5yZXBsYWNlKGVudGl0eVJlZ2V4ZXNbbWV0aG9kXSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eU1hcFttZXRob2RdW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIElmIHRoZSB2YWx1ZSBvZiB0aGUgbmFtZWQgYHByb3BlcnR5YCBpcyBhIGZ1bmN0aW9uIHRoZW4gaW52b2tlIGl0IHdpdGggdGhlXG4gIC8vIGBvYmplY3RgIGFzIGNvbnRleHQ7IG90aGVyd2lzZSwgcmV0dXJuIGl0LlxuICBfLnJlc3VsdCA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgdmFyIHZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwob2JqZWN0KSA6IHZhbHVlO1xuICB9O1xuXG4gIC8vIEFkZCB5b3VyIG93biBjdXN0b20gZnVuY3Rpb25zIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdC5cbiAgXy5taXhpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGVhY2goXy5mdW5jdGlvbnMob2JqKSwgZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGZ1bmMgPSBfW25hbWVdID0gb2JqW25hbWVdO1xuICAgICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy5fd3JhcHBlZF07XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIGZ1bmMuYXBwbHkoXywgYXJncykpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBpbnRlZ2VyIGlkICh1bmlxdWUgd2l0aGluIHRoZSBlbnRpcmUgY2xpZW50IHNlc3Npb24pLlxuICAvLyBVc2VmdWwgZm9yIHRlbXBvcmFyeSBET00gaWRzLlxuICB2YXIgaWRDb3VudGVyID0gMDtcbiAgXy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBpZCA9ICsraWRDb3VudGVyICsgJyc7XG4gICAgcmV0dXJuIHByZWZpeCA/IHByZWZpeCArIGlkIDogaWQ7XG4gIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlICAgIDogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZSA6IC88JT0oW1xcc1xcU10rPyklPi9nLFxuICAgIGVzY2FwZSAgICAgIDogLzwlLShbXFxzXFxTXSs/KSU+L2dcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogICAgICBcIidcIixcbiAgICAnXFxcXCc6ICAgICAnXFxcXCcsXG4gICAgJ1xccic6ICAgICAncicsXG4gICAgJ1xcbic6ICAgICAnbicsXG4gICAgJ1xcdCc6ICAgICAndCcsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5J1xuICB9O1xuXG4gIHZhciBlc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdHxcXHUyMDI4fFxcdTIwMjkvZztcblxuICAvLyBKYXZhU2NyaXB0IG1pY3JvLXRlbXBsYXRpbmcsIHNpbWlsYXIgdG8gSm9obiBSZXNpZydzIGltcGxlbWVudGF0aW9uLlxuICAvLyBVbmRlcnNjb3JlIHRlbXBsYXRpbmcgaGFuZGxlcyBhcmJpdHJhcnkgZGVsaW1pdGVycywgcHJlc2VydmVzIHdoaXRlc3BhY2UsXG4gIC8vIGFuZCBjb3JyZWN0bHkgZXNjYXBlcyBxdW90ZXMgd2l0aGluIGludGVycG9sYXRlZCBjb2RlLlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24odGV4dCwgZGF0YSwgc2V0dGluZ3MpIHtcbiAgICB2YXIgcmVuZGVyO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoW1xuICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuaW50ZXJwb2xhdGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICAgIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuICAgIC8vIENvbXBpbGUgdGhlIHRlbXBsYXRlIHNvdXJjZSwgZXNjYXBpbmcgc3RyaW5nIGxpdGVyYWxzIGFwcHJvcHJpYXRlbHkuXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24obWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgICAgIC5yZXBsYWNlKGVzY2FwZXIsIGZ1bmN0aW9uKG1hdGNoKSB7IHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTsgfSk7XG5cbiAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICAgIH1cbiAgICAgIGlmIChldmFsdWF0ZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgfVxuICAgICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgaWYgKCFzZXR0aW5ncy52YXJpYWJsZSkgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcblxuICAgIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgKyBcInJldHVybiBfX3A7XFxuXCI7XG5cbiAgICB0cnkge1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGlmIChkYXRhKSByZXR1cm4gcmVuZGVyKGRhdGEsIF8pO1xuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgZnVuY3Rpb24gc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonKSArICcpe1xcbicgKyBzb3VyY2UgKyAnfSc7XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgLy8gQWRkIGEgXCJjaGFpblwiIGZ1bmN0aW9uLCB3aGljaCB3aWxsIGRlbGVnYXRlIHRvIHRoZSB3cmFwcGVyLlxuICBfLmNoYWluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIF8ob2JqKS5jaGFpbigpO1xuICB9O1xuXG4gIC8vIE9PUFxuICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgLy8gSWYgVW5kZXJzY29yZSBpcyBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgaXQgcmV0dXJucyBhIHdyYXBwZWQgb2JqZWN0IHRoYXRcbiAgLy8gY2FuIGJlIHVzZWQgT08tc3R5bGUuIFRoaXMgd3JhcHBlciBob2xkcyBhbHRlcmVkIHZlcnNpb25zIG9mIGFsbCB0aGVcbiAgLy8gdW5kZXJzY29yZSBmdW5jdGlvbnMuIFdyYXBwZWQgb2JqZWN0cyBtYXkgYmUgY2hhaW5lZC5cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udGludWUgY2hhaW5pbmcgaW50ZXJtZWRpYXRlIHJlc3VsdHMuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW4gPyBfKG9iaikuY2hhaW4oKSA6IG9iajtcbiAgfTtcblxuICAvLyBBZGQgYWxsIG9mIHRoZSBVbmRlcnNjb3JlIGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlciBvYmplY3QuXG4gIF8ubWl4aW4oXyk7XG5cbiAgLy8gQWRkIGFsbCBtdXRhdG9yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ3BvcCcsICdwdXNoJywgJ3JldmVyc2UnLCAnc2hpZnQnLCAnc29ydCcsICdzcGxpY2UnLCAndW5zaGlmdCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzLl93cmFwcGVkO1xuICAgICAgbWV0aG9kLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgIGlmICgobmFtZSA9PSAnc2hpZnQnIHx8IG5hbWUgPT0gJ3NwbGljZScpICYmIG9iai5sZW5ndGggPT09IDApIGRlbGV0ZSBvYmpbMF07XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgb2JqKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBBZGQgYWxsIGFjY2Vzc29yIEFycmF5IGZ1bmN0aW9ucyB0byB0aGUgd3JhcHBlci5cbiAgZWFjaChbJ2NvbmNhdCcsICdqb2luJywgJ3NsaWNlJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG1ldGhvZC5hcHBseSh0aGlzLl93cmFwcGVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcblxuICBfLmV4dGVuZChfLnByb3RvdHlwZSwge1xuXG4gICAgLy8gU3RhcnQgY2hhaW5pbmcgYSB3cmFwcGVkIFVuZGVyc2NvcmUgb2JqZWN0LlxuICAgIGNoYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2NoYWluID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gYSB3cmFwcGVkIGFuZCBjaGFpbmVkIG9iamVjdC5cbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcHBlZDtcbiAgICB9XG5cbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXMtYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBzdWJqZWN0ID4gMCA/IHN1YmplY3QgPj4+IDAgOiAwXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JylcbiAgICAgIHN1YmplY3QgPSBiYXNlNjRjbGVhbihzdWJqZWN0KVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHN1YmplY3QgIT09IG51bGwpIHsgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKVxuICAgICAgc3ViamVjdCA9IHN1YmplY3QuZGF0YVxuICAgIGxlbmd0aCA9ICtzdWJqZWN0Lmxlbmd0aCA+IDAgPyBNYXRoLmZsb29yKCtzdWJqZWN0Lmxlbmd0aCkgOiAwXG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3RhcnQgd2l0aCBudW1iZXIsIGJ1ZmZlciwgYXJyYXkgb3Igc3RyaW5nJylcblxuICBpZiAodGhpcy5sZW5ndGggPiBrTWF4TGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW4gJiYgYVtpXSA9PT0gYltpXTsgaSsrKSB7fVxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0WywgbGVuZ3RoXSknKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHRvdGFsTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggPj4+IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcbiAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKGVuZCA8PSBzdGFydCkgcmV0dXJuICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBpZighQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heClcbiAgICAgIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKGJ5dGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoLCAyKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSlcbiAgICByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgaWYgKHRhcmdldF9zdGFydCA8IDAgfHwgdGFyZ2V0X3N0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCwgdW5pdFNpemUpIHtcbiAgaWYgKHVuaXRTaXplKSBsZW5ndGggLT0gbGVuZ3RoICUgdW5pdFNpemU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoJ3NoYS5qcycpXG5cbnZhciBtZDUgPSB0b0NvbnN0cnVjdG9yKHJlcXVpcmUoJy4vbWQ1JykpXG52YXIgcm1kMTYwID0gdG9Db25zdHJ1Y3RvcihyZXF1aXJlKCdyaXBlbWQxNjAnKSlcblxuZnVuY3Rpb24gdG9Db25zdHJ1Y3RvciAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnVmZmVycyA9IFtdXG4gICAgdmFyIG09IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGRhdGEsIGVuYykge1xuICAgICAgICBpZighQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSBkYXRhID0gbmV3IEJ1ZmZlcihkYXRhLCBlbmMpXG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfSxcbiAgICAgIGRpZ2VzdDogZnVuY3Rpb24gKGVuYykge1xuICAgICAgICB2YXIgYnVmID0gQnVmZmVyLmNvbmNhdChidWZmZXJzKVxuICAgICAgICB2YXIgciA9IGZuKGJ1ZilcbiAgICAgICAgYnVmZmVycyA9IG51bGxcbiAgICAgICAgcmV0dXJuIGVuYyA/IHIudG9TdHJpbmcoZW5jKSA6IHJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhbGcpIHtcbiAgaWYoJ21kNScgPT09IGFsZykgcmV0dXJuIG5ldyBtZDUoKVxuICBpZigncm1kMTYwJyA9PT0gYWxnKSByZXR1cm4gbmV3IHJtZDE2MCgpXG4gIHJldHVybiBjcmVhdGVIYXNoKGFsZylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBjcmVhdGVIYXNoID0gcmVxdWlyZSgnLi9jcmVhdGUtaGFzaCcpXG5cbnZhciBibG9ja3NpemUgPSA2NFxudmFyIHplcm9CdWZmZXIgPSBuZXcgQnVmZmVyKGJsb2Nrc2l6ZSk7IHplcm9CdWZmZXIuZmlsbCgwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhtYWNcblxuZnVuY3Rpb24gSG1hYyAoYWxnLCBrZXkpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgSG1hYykpIHJldHVybiBuZXcgSG1hYyhhbGcsIGtleSlcbiAgdGhpcy5fb3BhZCA9IG9wYWRcbiAgdGhpcy5fYWxnID0gYWxnXG5cbiAga2V5ID0gdGhpcy5fa2V5ID0gIUJ1ZmZlci5pc0J1ZmZlcihrZXkpID8gbmV3IEJ1ZmZlcihrZXkpIDoga2V5XG5cbiAgaWYoa2V5Lmxlbmd0aCA+IGJsb2Nrc2l6ZSkge1xuICAgIGtleSA9IGNyZWF0ZUhhc2goYWxnKS51cGRhdGUoa2V5KS5kaWdlc3QoKVxuICB9IGVsc2UgaWYoa2V5Lmxlbmd0aCA8IGJsb2Nrc2l6ZSkge1xuICAgIGtleSA9IEJ1ZmZlci5jb25jYXQoW2tleSwgemVyb0J1ZmZlcl0sIGJsb2Nrc2l6ZSlcbiAgfVxuXG4gIHZhciBpcGFkID0gdGhpcy5faXBhZCA9IG5ldyBCdWZmZXIoYmxvY2tzaXplKVxuICB2YXIgb3BhZCA9IHRoaXMuX29wYWQgPSBuZXcgQnVmZmVyKGJsb2Nrc2l6ZSlcblxuICBmb3IodmFyIGkgPSAwOyBpIDwgYmxvY2tzaXplOyBpKyspIHtcbiAgICBpcGFkW2ldID0ga2V5W2ldIF4gMHgzNlxuICAgIG9wYWRbaV0gPSBrZXlbaV0gXiAweDVDXG4gIH1cblxuICB0aGlzLl9oYXNoID0gY3JlYXRlSGFzaChhbGcpLnVwZGF0ZShpcGFkKVxufVxuXG5IbWFjLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jKSB7XG4gIHRoaXMuX2hhc2gudXBkYXRlKGRhdGEsIGVuYylcbiAgcmV0dXJuIHRoaXNcbn1cblxuSG1hYy5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKGVuYykge1xuICB2YXIgaCA9IHRoaXMuX2hhc2guZGlnZXN0KClcbiAgcmV0dXJuIGNyZWF0ZUhhc2godGhpcy5fYWxnKS51cGRhdGUodGhpcy5fb3BhZCkudXBkYXRlKGgpLmRpZ2VzdChlbmMpXG59XG5cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBpbnRTaXplID0gNDtcbnZhciB6ZXJvQnVmZmVyID0gbmV3IEJ1ZmZlcihpbnRTaXplKTsgemVyb0J1ZmZlci5maWxsKDApO1xudmFyIGNocnN6ID0gODtcblxuZnVuY3Rpb24gdG9BcnJheShidWYsIGJpZ0VuZGlhbikge1xuICBpZiAoKGJ1Zi5sZW5ndGggJSBpbnRTaXplKSAhPT0gMCkge1xuICAgIHZhciBsZW4gPSBidWYubGVuZ3RoICsgKGludFNpemUgLSAoYnVmLmxlbmd0aCAlIGludFNpemUpKTtcbiAgICBidWYgPSBCdWZmZXIuY29uY2F0KFtidWYsIHplcm9CdWZmZXJdLCBsZW4pO1xuICB9XG5cbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgZm4gPSBiaWdFbmRpYW4gPyBidWYucmVhZEludDMyQkUgOiBidWYucmVhZEludDMyTEU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSBpbnRTaXplKSB7XG4gICAgYXJyLnB1c2goZm4uY2FsbChidWYsIGkpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB0b0J1ZmZlcihhcnIsIHNpemUsIGJpZ0VuZGlhbikge1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzaXplKTtcbiAgdmFyIGZuID0gYmlnRW5kaWFuID8gYnVmLndyaXRlSW50MzJCRSA6IGJ1Zi53cml0ZUludDMyTEU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4uY2FsbChidWYsIGFycltpXSwgaSAqIDQsIHRydWUpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5cbmZ1bmN0aW9uIGhhc2goYnVmLCBmbiwgaGFzaFNpemUsIGJpZ0VuZGlhbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSBuZXcgQnVmZmVyKGJ1Zik7XG4gIHZhciBhcnIgPSBmbih0b0FycmF5KGJ1ZiwgYmlnRW5kaWFuKSwgYnVmLmxlbmd0aCAqIGNocnN6KTtcbiAgcmV0dXJuIHRvQnVmZmVyKGFyciwgaGFzaFNpemUsIGJpZ0VuZGlhbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBoYXNoOiBoYXNoIH07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgcm5nID0gcmVxdWlyZSgnLi9ybmcnKVxuXG5mdW5jdGlvbiBlcnJvciAoKSB7XG4gIHZhciBtID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLmpvaW4oJyAnKVxuICB0aHJvdyBuZXcgRXJyb3IoW1xuICAgIG0sXG4gICAgJ3dlIGFjY2VwdCBwdWxsIHJlcXVlc3RzJyxcbiAgICAnaHR0cDovL2dpdGh1Yi5jb20vZG9taW5pY3RhcnIvY3J5cHRvLWJyb3dzZXJpZnknXG4gICAgXS5qb2luKCdcXG4nKSlcbn1cblxuZXhwb3J0cy5jcmVhdGVIYXNoID0gcmVxdWlyZSgnLi9jcmVhdGUtaGFzaCcpXG5cbmV4cG9ydHMuY3JlYXRlSG1hYyA9IHJlcXVpcmUoJy4vY3JlYXRlLWhtYWMnKVxuXG5leHBvcnRzLnJhbmRvbUJ5dGVzID0gZnVuY3Rpb24oc2l6ZSwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwpIHtcbiAgICB0cnkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB1bmRlZmluZWQsIG5ldyBCdWZmZXIocm5nKHNpemUpKSlcbiAgICB9IGNhdGNoIChlcnIpIHsgY2FsbGJhY2soZXJyKSB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIocm5nKHNpemUpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYSwgZikge1xuICBmb3IodmFyIGkgaW4gYSlcbiAgICBmKGFbaV0sIGkpXG59XG5cbmV4cG9ydHMuZ2V0SGFzaGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gWydzaGExJywgJ3NoYTI1NicsICdtZDUnLCAncm1kMTYwJ11cblxufVxuXG52YXIgcCA9IHJlcXVpcmUoJy4vcGJrZGYyJykoZXhwb3J0cy5jcmVhdGVIbWFjKVxuZXhwb3J0cy5wYmtkZjIgPSBwLnBia2RmMlxuZXhwb3J0cy5wYmtkZjJTeW5jID0gcC5wYmtkZjJTeW5jXG5cblxuLy8gdGhlIGxlYXN0IEkgY2FuIGRvIGlzIG1ha2UgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSByZXN0IG9mIHRoZSBub2RlLmpzL2NyeXB0byBhcGkuXG5lYWNoKFsnY3JlYXRlQ3JlZGVudGlhbHMnXG4sICdjcmVhdGVDaXBoZXInXG4sICdjcmVhdGVDaXBoZXJpdidcbiwgJ2NyZWF0ZURlY2lwaGVyJ1xuLCAnY3JlYXRlRGVjaXBoZXJpdidcbiwgJ2NyZWF0ZVNpZ24nXG4sICdjcmVhdGVWZXJpZnknXG4sICdjcmVhdGVEaWZmaWVIZWxsbWFuJ1xuXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZXhwb3J0c1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBlcnJvcignc29ycnksJywgbmFtZSwgJ2lzIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKVxuICB9XG59KVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiLypcbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMSBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDIuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cblxudmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gY29yZV9tZDUoeCwgbGVuKVxue1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8ICgobGVuKSAlIDMyKTtcbiAgeFsoKChsZW4gKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbGVuO1xuXG4gIHZhciBhID0gIDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAgMjcxNzMzODc4O1xuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNilcbiAge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcblxuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKyAwXSwgNyAsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDcgLCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDhdLCA3ICwgIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsxMl0sIDcgLCAgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xuXG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDFdLCA1ICwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krIDZdLCA5ICwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKzExXSwgMTQsICA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKyA1XSwgNSAsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpKzEwXSwgOSAsICAzODAxNjA4Myk7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDldLCA1ICwgIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krMTRdLCA5ICwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsxM10sIDUgLCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krIDJdLCA5ICwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE0LCAgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuXG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDVdLCA0ICwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKyAxXSwgNCAsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKzEzXSwgNCAsICA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDldLCA0ICwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krIDJdLCAyMywgLTk5NTMzODY1MSk7XG5cbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDYgLCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krMTJdLCA2ICwgIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKyA4XSwgNiAsICAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krIDRdLCA2ICwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuXG4gICAgYSA9IHNhZmVfYWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlX2FkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZV9hZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVfYWRkKGQsIG9sZGQpO1xuICB9XG4gIHJldHVybiBBcnJheShhLCBiLCBjLCBkKTtcblxufVxuXG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuZnVuY3Rpb24gbWQ1X2NtbihxLCBhLCBiLCB4LCBzLCB0KVxue1xuICByZXR1cm4gc2FmZV9hZGQoYml0X3JvbChzYWZlX2FkZChzYWZlX2FkZChhLCBxKSwgc2FmZV9hZGQoeCwgdCkpLCBzKSxiKTtcbn1cbmZ1bmN0aW9uIG1kNV9mZihhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbigoYiAmIGMpIHwgKCh+YikgJiBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfZ2coYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oKGIgJiBkKSB8IChjICYgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1X2hoKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfaWkoYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oYyBeIChiIHwgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuZnVuY3Rpb24gc2FmZV9hZGQoeCwgeSlcbntcbiAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcbn1cblxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gYml0X3JvbChudW0sIGNudClcbntcbiAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShidWYpIHtcbiAgcmV0dXJuIGhlbHBlcnMuaGFzaChidWYsIGNvcmVfbWQ1LCAxNik7XG59O1xuIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJpcGVtZDE2MFxuXG5cblxuLypcbkNyeXB0b0pTIHYzLjEuMlxuY29kZS5nb29nbGUuY29tL3AvY3J5cHRvLWpzXG4oYykgMjAwOS0yMDEzIGJ5IEplZmYgTW90dC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qcy93aWtpL0xpY2Vuc2VcbiovXG4vKiogQHByZXNlcnZlXG4oYykgMjAxMiBieSBDw6lkcmljIE1lc25pbC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4gICAgLSBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgLSBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cblRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbi8vIENvbnN0YW50cyB0YWJsZVxudmFyIHpsID0gW1xuICAgIDAsICAxLCAgMiwgIDMsICA0LCAgNSwgIDYsICA3LCAgOCwgIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXG4gICAgNywgIDQsIDEzLCAgMSwgMTAsICA2LCAxNSwgIDMsIDEyLCAgMCwgIDksICA1LCAgMiwgMTQsIDExLCAgOCxcbiAgICAzLCAxMCwgMTQsICA0LCAgOSwgMTUsICA4LCAgMSwgIDIsICA3LCAgMCwgIDYsIDEzLCAxMSwgIDUsIDEyLFxuICAgIDEsICA5LCAxMSwgMTAsICAwLCAgOCwgMTIsICA0LCAxMywgIDMsICA3LCAxNSwgMTQsICA1LCAgNiwgIDIsXG4gICAgNCwgIDAsICA1LCAgOSwgIDcsIDEyLCAgMiwgMTAsIDE0LCAgMSwgIDMsICA4LCAxMSwgIDYsIDE1LCAxM107XG52YXIgenIgPSBbXG4gICAgNSwgMTQsICA3LCAgMCwgIDksICAyLCAxMSwgIDQsIDEzLCAgNiwgMTUsICA4LCAgMSwgMTAsICAzLCAxMixcbiAgICA2LCAxMSwgIDMsICA3LCAgMCwgMTMsICA1LCAxMCwgMTQsIDE1LCAgOCwgMTIsICA0LCAgOSwgIDEsICAyLFxuICAgIDE1LCAgNSwgIDEsICAzLCAgNywgMTQsICA2LCAgOSwgMTEsICA4LCAxMiwgIDIsIDEwLCAgMCwgIDQsIDEzLFxuICAgIDgsICA2LCAgNCwgIDEsICAzLCAxMSwgMTUsICAwLCAgNSwgMTIsICAyLCAxMywgIDksICA3LCAxMCwgMTQsXG4gICAgMTIsIDE1LCAxMCwgIDQsICAxLCAgNSwgIDgsICA3LCAgNiwgIDIsIDEzLCAxNCwgIDAsICAzLCAgOSwgMTFdO1xudmFyIHNsID0gW1xuICAgICAxMSwgMTQsIDE1LCAxMiwgIDUsICA4LCAgNywgIDksIDExLCAxMywgMTQsIDE1LCAgNiwgIDcsICA5LCAgOCxcbiAgICA3LCA2LCAgIDgsIDEzLCAxMSwgIDksICA3LCAxNSwgIDcsIDEyLCAxNSwgIDksIDExLCAgNywgMTMsIDEyLFxuICAgIDExLCAxMywgIDYsICA3LCAxNCwgIDksIDEzLCAxNSwgMTQsICA4LCAxMywgIDYsICA1LCAxMiwgIDcsICA1LFxuICAgICAgMTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgIDksICA4LCAgOSwgMTQsICA1LCAgNiwgIDgsICA2LCAgNSwgMTIsXG4gICAgOSwgMTUsICA1LCAxMSwgIDYsICA4LCAxMywgMTIsICA1LCAxMiwgMTMsIDE0LCAxMSwgIDgsICA1LCAgNiBdO1xudmFyIHNyID0gW1xuICAgIDgsICA5LCAgOSwgMTEsIDEzLCAxNSwgMTUsICA1LCAgNywgIDcsICA4LCAxMSwgMTQsIDE0LCAxMiwgIDYsXG4gICAgOSwgMTMsIDE1LCAgNywgMTIsICA4LCAgOSwgMTEsICA3LCAgNywgMTIsICA3LCAgNiwgMTUsIDEzLCAxMSxcbiAgICA5LCAgNywgMTUsIDExLCAgOCwgIDYsICA2LCAxNCwgMTIsIDEzLCAgNSwgMTQsIDEzLCAxMywgIDcsICA1LFxuICAgIDE1LCAgNSwgIDgsIDExLCAxNCwgMTQsICA2LCAxNCwgIDYsICA5LCAxMiwgIDksIDEyLCAgNSwgMTUsICA4LFxuICAgIDgsICA1LCAxMiwgIDksIDEyLCAgNSwgMTQsICA2LCAgOCwgMTMsICA2LCAgNSwgMTUsIDEzLCAxMSwgMTEgXTtcblxudmFyIGhsID0gIFsgMHgwMDAwMDAwMCwgMHg1QTgyNzk5OSwgMHg2RUQ5RUJBMSwgMHg4RjFCQkNEQywgMHhBOTUzRkQ0RV07XG52YXIgaHIgPSAgWyAweDUwQTI4QkU2LCAweDVDNEREMTI0LCAweDZENzAzRUYzLCAweDdBNkQ3NkU5LCAweDAwMDAwMDAwXTtcblxudmFyIGJ5dGVzVG9Xb3JkcyA9IGZ1bmN0aW9uIChieXRlcykge1xuICB2YXIgd29yZHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOCkge1xuICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gIH1cbiAgcmV0dXJuIHdvcmRzO1xufTtcblxudmFyIHdvcmRzVG9CeXRlcyA9IGZ1bmN0aW9uICh3b3Jkcykge1xuICB2YXIgYnl0ZXMgPSBbXTtcbiAgZm9yICh2YXIgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KSB7XG4gICAgYnl0ZXMucHVzaCgod29yZHNbYiA+Pj4gNV0gPj4+ICgyNCAtIGIgJSAzMikpICYgMHhGRik7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufTtcblxudmFyIHByb2Nlc3NCbG9jayA9IGZ1bmN0aW9uIChILCBNLCBvZmZzZXQpIHtcblxuICAvLyBTd2FwIGVuZGlhblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICB2YXIgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuICAgIHZhciBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XG5cbiAgICAvLyBTd2FwXG4gICAgTVtvZmZzZXRfaV0gPSAoXG4gICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG4gICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgMjQpIHwgKE1fb2Zmc2V0X2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuICAgICk7XG4gIH1cblxuICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuICB2YXIgYWwsIGJsLCBjbCwgZGwsIGVsO1xuICB2YXIgYXIsIGJyLCBjciwgZHIsIGVyO1xuXG4gIGFyID0gYWwgPSBIWzBdO1xuICBiciA9IGJsID0gSFsxXTtcbiAgY3IgPSBjbCA9IEhbMl07XG4gIGRyID0gZGwgPSBIWzNdO1xuICBlciA9IGVsID0gSFs0XTtcbiAgLy8gQ29tcHV0YXRpb25cbiAgdmFyIHQ7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkgKz0gMSkge1xuICAgIHQgPSAoYWwgKyAgTVtvZmZzZXQremxbaV1dKXwwO1xuICAgIGlmIChpPDE2KXtcbiAgICAgICAgdCArPSAgZjEoYmwsY2wsZGwpICsgaGxbMF07XG4gICAgfSBlbHNlIGlmIChpPDMyKSB7XG4gICAgICAgIHQgKz0gIGYyKGJsLGNsLGRsKSArIGhsWzFdO1xuICAgIH0gZWxzZSBpZiAoaTw0OCkge1xuICAgICAgICB0ICs9ICBmMyhibCxjbCxkbCkgKyBobFsyXTtcbiAgICB9IGVsc2UgaWYgKGk8NjQpIHtcbiAgICAgICAgdCArPSAgZjQoYmwsY2wsZGwpICsgaGxbM107XG4gICAgfSBlbHNlIHsvLyBpZiAoaTw4MCkge1xuICAgICAgICB0ICs9ICBmNShibCxjbCxkbCkgKyBobFs0XTtcbiAgICB9XG4gICAgdCA9IHR8MDtcbiAgICB0ID0gIHJvdGwodCxzbFtpXSk7XG4gICAgdCA9ICh0K2VsKXwwO1xuICAgIGFsID0gZWw7XG4gICAgZWwgPSBkbDtcbiAgICBkbCA9IHJvdGwoY2wsIDEwKTtcbiAgICBjbCA9IGJsO1xuICAgIGJsID0gdDtcblxuICAgIHQgPSAoYXIgKyBNW29mZnNldCt6cltpXV0pfDA7XG4gICAgaWYgKGk8MTYpe1xuICAgICAgICB0ICs9ICBmNShicixjcixkcikgKyBoclswXTtcbiAgICB9IGVsc2UgaWYgKGk8MzIpIHtcbiAgICAgICAgdCArPSAgZjQoYnIsY3IsZHIpICsgaHJbMV07XG4gICAgfSBlbHNlIGlmIChpPDQ4KSB7XG4gICAgICAgIHQgKz0gIGYzKGJyLGNyLGRyKSArIGhyWzJdO1xuICAgIH0gZWxzZSBpZiAoaTw2NCkge1xuICAgICAgICB0ICs9ICBmMihicixjcixkcikgKyBoclszXTtcbiAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XG4gICAgICAgIHQgKz0gIGYxKGJyLGNyLGRyKSArIGhyWzRdO1xuICAgIH1cbiAgICB0ID0gdHwwO1xuICAgIHQgPSAgcm90bCh0LHNyW2ldKSA7XG4gICAgdCA9ICh0K2VyKXwwO1xuICAgIGFyID0gZXI7XG4gICAgZXIgPSBkcjtcbiAgICBkciA9IHJvdGwoY3IsIDEwKTtcbiAgICBjciA9IGJyO1xuICAgIGJyID0gdDtcbiAgfVxuICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuICB0ICAgID0gKEhbMV0gKyBjbCArIGRyKXwwO1xuICBIWzFdID0gKEhbMl0gKyBkbCArIGVyKXwwO1xuICBIWzJdID0gKEhbM10gKyBlbCArIGFyKXwwO1xuICBIWzNdID0gKEhbNF0gKyBhbCArIGJyKXwwO1xuICBIWzRdID0gKEhbMF0gKyBibCArIGNyKXwwO1xuICBIWzBdID0gIHQ7XG59O1xuXG5mdW5jdGlvbiBmMSh4LCB5LCB6KSB7XG4gIHJldHVybiAoKHgpIF4gKHkpIF4gKHopKTtcbn1cblxuZnVuY3Rpb24gZjIoeCwgeSwgeikge1xuICByZXR1cm4gKCgoeCkmKHkpKSB8ICgofngpJih6KSkpO1xufVxuXG5mdW5jdGlvbiBmMyh4LCB5LCB6KSB7XG4gIHJldHVybiAoKCh4KSB8ICh+KHkpKSkgXiAoeikpO1xufVxuXG5mdW5jdGlvbiBmNCh4LCB5LCB6KSB7XG4gIHJldHVybiAoKCh4KSAmICh6KSkgfCAoKHkpJih+KHopKSkpO1xufVxuXG5mdW5jdGlvbiBmNSh4LCB5LCB6KSB7XG4gIHJldHVybiAoKHgpIF4gKCh5KSB8KH4oeikpKSk7XG59XG5cbmZ1bmN0aW9uIHJvdGwoeCxuKSB7XG4gIHJldHVybiAoeDw8bikgfCAoeD4+PigzMi1uKSk7XG59XG5cbmZ1bmN0aW9uIHJpcGVtZDE2MChtZXNzYWdlKSB7XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4RUZDREFCODksIDB4OThCQURDRkUsIDB4MTAzMjU0NzYsIDB4QzNEMkUxRjBdO1xuXG4gIGlmICh0eXBlb2YgbWVzc2FnZSA9PSAnc3RyaW5nJylcbiAgICBtZXNzYWdlID0gbmV3IEJ1ZmZlcihtZXNzYWdlLCAndXRmOCcpO1xuXG4gIHZhciBtID0gYnl0ZXNUb1dvcmRzKG1lc3NhZ2UpO1xuXG4gIHZhciBuQml0c0xlZnQgPSBtZXNzYWdlLmxlbmd0aCAqIDg7XG4gIHZhciBuQml0c1RvdGFsID0gbWVzc2FnZS5sZW5ndGggKiA4O1xuXG4gIC8vIEFkZCBwYWRkaW5nXG4gIG1bbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcbiAgbVsoKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxuICAgICAgKCgobkJpdHNUb3RhbCA8PCA4KSAgfCAobkJpdHNUb3RhbCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcbiAgICAgICgoKG5CaXRzVG90YWwgPDwgMjQpIHwgKG5CaXRzVG90YWwgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuICApO1xuXG4gIGZvciAodmFyIGk9MCA7IGk8bS5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBwcm9jZXNzQmxvY2soSCwgbSwgaSk7XG4gIH1cblxuICAvLyBTd2FwIGVuZGlhblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgLy8gU2hvcnRjdXRcbiAgICB2YXIgSF9pID0gSFtpXTtcblxuICAgIC8vIFN3YXBcbiAgICBIW2ldID0gKCgoSF9pIDw8IDgpICB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG4gICAgICAgICAgKCgoSF9pIDw8IDI0KSB8IChIX2kgPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcbiAgfVxuXG4gIHZhciBkaWdlc3RieXRlcyA9IHdvcmRzVG9CeXRlcyhIKTtcbiAgcmV0dXJuIG5ldyBCdWZmZXIoZGlnZXN0Ynl0ZXMpO1xufVxuXG5cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsInZhciB1ID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciB3cml0ZSA9IHUud3JpdGVcbnZhciBmaWxsID0gdS56ZXJvRmlsbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIpIHtcblxuICAvL3Byb3RvdHlwZSBjbGFzcyBmb3IgaGFzaCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gSGFzaCAoYmxvY2tTaXplLCBmaW5hbFNpemUpIHtcbiAgICB0aGlzLl9ibG9jayA9IG5ldyBCdWZmZXIoYmxvY2tTaXplKSAvL25ldyBVaW50MzJBcnJheShibG9ja1NpemUvNClcbiAgICB0aGlzLl9maW5hbFNpemUgPSBmaW5hbFNpemVcbiAgICB0aGlzLl9ibG9ja1NpemUgPSBibG9ja1NpemVcbiAgICB0aGlzLl9sZW4gPSAwXG4gICAgdGhpcy5fcyA9IDBcbiAgfVxuXG4gIEhhc2gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcyA9IDBcbiAgICB0aGlzLl9sZW4gPSAwXG4gIH1cblxuICBmdW5jdGlvbiBsZW5ndGhPZihkYXRhLCBlbmMpIHtcbiAgICBpZihlbmMgPT0gbnVsbCkgICAgIHJldHVybiBkYXRhLmJ5dGVMZW5ndGggfHwgZGF0YS5sZW5ndGhcbiAgICBpZihlbmMgPT0gJ2FzY2lpJyB8fCBlbmMgPT0gJ2JpbmFyeScpICByZXR1cm4gZGF0YS5sZW5ndGhcbiAgICBpZihlbmMgPT0gJ2hleCcpICAgIHJldHVybiBkYXRhLmxlbmd0aC8yXG4gICAgaWYoZW5jID09ICdiYXNlNjQnKSByZXR1cm4gZGF0YS5sZW5ndGgvM1xuICB9XG5cbiAgSGFzaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuYykge1xuICAgIHZhciBibCA9IHRoaXMuX2Jsb2NrU2l6ZVxuXG4gICAgLy9JJ2QgcmF0aGVyIGRvIHRoaXMgd2l0aCBhIHN0cmVhbWluZyBlbmNvZGVyLCBsaWtlIHRoZSBvcHBvc2l0ZSBvZlxuICAgIC8vaHR0cDovL25vZGVqcy5vcmcvYXBpL3N0cmluZ19kZWNvZGVyLmh0bWxcbiAgICB2YXIgbGVuZ3RoXG4gICAgICBpZighZW5jICYmICdzdHJpbmcnID09PSB0eXBlb2YgZGF0YSlcbiAgICAgICAgZW5jID0gJ3V0ZjgnXG5cbiAgICBpZihlbmMpIHtcbiAgICAgIGlmKGVuYyA9PT0gJ3V0Zi04JylcbiAgICAgICAgZW5jID0gJ3V0ZjgnXG5cbiAgICAgIGlmKGVuYyA9PT0gJ2Jhc2U2NCcgfHwgZW5jID09PSAndXRmOCcpXG4gICAgICAgIGRhdGEgPSBuZXcgQnVmZmVyKGRhdGEsIGVuYyksIGVuYyA9IG51bGxcblxuICAgICAgbGVuZ3RoID0gbGVuZ3RoT2YoZGF0YSwgZW5jKVxuICAgIH0gZWxzZVxuICAgICAgbGVuZ3RoID0gZGF0YS5ieXRlTGVuZ3RoIHx8IGRhdGEubGVuZ3RoXG5cbiAgICB2YXIgbCA9IHRoaXMuX2xlbiArPSBsZW5ndGhcbiAgICB2YXIgcyA9IHRoaXMuX3MgPSAodGhpcy5fcyB8fCAwKVxuICAgIHZhciBmID0gMFxuICAgIHZhciBidWZmZXIgPSB0aGlzLl9ibG9ja1xuICAgIHdoaWxlKHMgPCBsKSB7XG4gICAgICB2YXIgdCA9IE1hdGgubWluKGxlbmd0aCwgZiArIGJsKVxuICAgICAgd3JpdGUoYnVmZmVyLCBkYXRhLCBlbmMsIHMlYmwsIGYsIHQpXG4gICAgICB2YXIgY2ggPSAodCAtIGYpO1xuICAgICAgcyArPSBjaDsgZiArPSBjaFxuXG4gICAgICBpZighKHMlYmwpKVxuICAgICAgICB0aGlzLl91cGRhdGUoYnVmZmVyKVxuICAgIH1cbiAgICB0aGlzLl9zID0gc1xuXG4gICAgcmV0dXJuIHRoaXNcblxuICB9XG5cbiAgSGFzaC5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKGVuYykge1xuICAgIHZhciBibCA9IHRoaXMuX2Jsb2NrU2l6ZVxuICAgIHZhciBmbCA9IHRoaXMuX2ZpbmFsU2l6ZVxuICAgIHZhciBsZW4gPSB0aGlzLl9sZW4qOFxuXG4gICAgdmFyIHggPSB0aGlzLl9ibG9ja1xuXG4gICAgdmFyIGJpdHMgPSBsZW4gJSAoYmwqOClcblxuICAgIC8vYWRkIGVuZCBtYXJrZXIsIHNvIHRoYXQgYXBwZW5kaW5nIDAncyBjcmVhdHMgYSBkaWZmZXJlbnQgaGFzaC5cbiAgICB4W3RoaXMuX2xlbiAlIGJsXSA9IDB4ODBcbiAgICBmaWxsKHRoaXMuX2Jsb2NrLCB0aGlzLl9sZW4gJSBibCArIDEpXG5cbiAgICBpZihiaXRzID49IGZsKjgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9ibG9jaylcbiAgICAgIHUuemVyb0ZpbGwodGhpcy5fYmxvY2ssIDApXG4gICAgfVxuXG4gICAgLy9UT0RPOiBoYW5kbGUgY2FzZSB3aGVyZSB0aGUgYml0IGxlbmd0aCBpcyA+IE1hdGgucG93KDIsIDI5KVxuICAgIHgud3JpdGVJbnQzMkJFKGxlbiwgZmwgKyA0KSAvL2JpZyBlbmRpYW5cblxuICAgIHZhciBoYXNoID0gdGhpcy5fdXBkYXRlKHRoaXMuX2Jsb2NrKSB8fCB0aGlzLl9oYXNoKClcbiAgICBpZihlbmMgPT0gbnVsbCkgcmV0dXJuIGhhc2hcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZyhlbmMpXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignX3VwZGF0ZSBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IHN1YmNsYXNzJylcbiAgfVxuXG4gIHJldHVybiBIYXNoXG59XG4iLCJ2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFsZykge1xuICB2YXIgQWxnID0gZXhwb3J0c1thbGddXG4gIGlmKCFBbGcpIHRocm93IG5ldyBFcnJvcihhbGcgKyAnIGlzIG5vdCBzdXBwb3J0ZWQgKHdlIGFjY2VwdCBwdWxsIHJlcXVlc3RzKScpXG4gIHJldHVybiBuZXcgQWxnKClcbn1cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclxudmFyIEhhc2ggICA9IHJlcXVpcmUoJy4vaGFzaCcpKEJ1ZmZlcilcblxuZXhwb3J0cy5zaGEgPVxuZXhwb3J0cy5zaGExID0gcmVxdWlyZSgnLi9zaGExJykoQnVmZmVyLCBIYXNoKVxuZXhwb3J0cy5zaGEyNTYgPSByZXF1aXJlKCcuL3NoYTI1NicpKEJ1ZmZlciwgSGFzaClcbiIsIi8qXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFNlY3VyZSBIYXNoIEFsZ29yaXRobSwgU0hBLTEsIGFzIGRlZmluZWRcbiAqIGluIEZJUFMgUFVCIDE4MC0xXG4gKiBWZXJzaW9uIDIuMWEgQ29weXJpZ2h0IFBhdWwgSm9obnN0b24gMjAwMCAtIDIwMDIuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBkZXRhaWxzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIsIEhhc2gpIHtcblxuICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcblxuICBpbmhlcml0cyhTaGExLCBIYXNoKVxuXG4gIHZhciBBID0gMHwwXG4gIHZhciBCID0gNHwwXG4gIHZhciBDID0gOHwwXG4gIHZhciBEID0gMTJ8MFxuICB2YXIgRSA9IDE2fDBcblxuICB2YXIgQkUgPSBmYWxzZVxuICB2YXIgTEUgPSB0cnVlXG5cbiAgdmFyIFcgPSBuZXcgSW50MzJBcnJheSg4MClcblxuICB2YXIgUE9PTCA9IFtdXG5cbiAgZnVuY3Rpb24gU2hhMSAoKSB7XG4gICAgaWYoUE9PTC5sZW5ndGgpXG4gICAgICByZXR1cm4gUE9PTC5wb3AoKS5pbml0KClcblxuICAgIGlmKCEodGhpcyBpbnN0YW5jZW9mIFNoYTEpKSByZXR1cm4gbmV3IFNoYTEoKVxuICAgIHRoaXMuX3cgPSBXXG4gICAgSGFzaC5jYWxsKHRoaXMsIDE2KjQsIDE0KjQpXG4gIFxuICAgIHRoaXMuX2ggPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIFNoYTEucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYSA9IDB4Njc0NTIzMDFcbiAgICB0aGlzLl9iID0gMHhlZmNkYWI4OVxuICAgIHRoaXMuX2MgPSAweDk4YmFkY2ZlXG4gICAgdGhpcy5fZCA9IDB4MTAzMjU0NzZcbiAgICB0aGlzLl9lID0gMHhjM2QyZTFmMFxuXG4gICAgSGFzaC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFNoYTEucHJvdG90eXBlLl9QT09MID0gUE9PTFxuXG4gIC8vIGFzc3VtZSB0aGF0IGFycmF5IGlzIGEgVWludDMyQXJyYXkgd2l0aCBsZW5ndGg9MTYsXG4gIC8vIGFuZCB0aGF0IGlmIGl0IGlzIHRoZSBsYXN0IGJsb2NrLCBpdCBhbHJlYWR5IGhhcyB0aGUgbGVuZ3RoIGFuZCB0aGUgMSBiaXQgYXBwZW5kZWQuXG5cblxuICB2YXIgaXNEViA9IG5ldyBCdWZmZXIoMSkgaW5zdGFuY2VvZiBEYXRhVmlld1xuICBmdW5jdGlvbiByZWFkSW50MzJCRSAoWCwgaSkge1xuICAgIHJldHVybiBpc0RWXG4gICAgICA/IFguZ2V0SW50MzIoaSwgZmFsc2UpXG4gICAgICA6IFgucmVhZEludDMyQkUoaSlcbiAgfVxuXG4gIFNoYTEucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblxuICAgIHZhciBYID0gdGhpcy5fYmxvY2tcbiAgICB2YXIgaCA9IHRoaXMuX2hcbiAgICB2YXIgYSwgYiwgYywgZCwgZSwgX2EsIF9iLCBfYywgX2QsIF9lXG5cbiAgICBhID0gX2EgPSB0aGlzLl9hXG4gICAgYiA9IF9iID0gdGhpcy5fYlxuICAgIGMgPSBfYyA9IHRoaXMuX2NcbiAgICBkID0gX2QgPSB0aGlzLl9kXG4gICAgZSA9IF9lID0gdGhpcy5fZVxuXG4gICAgdmFyIHcgPSB0aGlzLl93XG5cbiAgICBmb3IodmFyIGogPSAwOyBqIDwgODA7IGorKykge1xuICAgICAgdmFyIFcgPSB3W2pdXG4gICAgICAgID0gaiA8IDE2XG4gICAgICAgIC8vPyBYLmdldEludDMyKGoqNCwgZmFsc2UpXG4gICAgICAgIC8vPyByZWFkSW50MzJCRShYLCBqKjQpIC8vKi8gWC5yZWFkSW50MzJCRShqKjQpIC8vKi9cbiAgICAgICAgPyBYLnJlYWRJbnQzMkJFKGoqNClcbiAgICAgICAgOiByb2wod1tqIC0gM10gXiB3W2ogLSAgOF0gXiB3W2ogLSAxNF0gXiB3W2ogLSAxNl0sIDEpXG5cbiAgICAgIHZhciB0ID1cbiAgICAgICAgYWRkKFxuICAgICAgICAgIGFkZChyb2woYSwgNSksIHNoYTFfZnQoaiwgYiwgYywgZCkpLFxuICAgICAgICAgIGFkZChhZGQoZSwgVyksIHNoYTFfa3QoaikpXG4gICAgICAgICk7XG5cbiAgICAgIGUgPSBkXG4gICAgICBkID0gY1xuICAgICAgYyA9IHJvbChiLCAzMClcbiAgICAgIGIgPSBhXG4gICAgICBhID0gdFxuICAgIH1cblxuICAgIHRoaXMuX2EgPSBhZGQoYSwgX2EpXG4gICAgdGhpcy5fYiA9IGFkZChiLCBfYilcbiAgICB0aGlzLl9jID0gYWRkKGMsIF9jKVxuICAgIHRoaXMuX2QgPSBhZGQoZCwgX2QpXG4gICAgdGhpcy5fZSA9IGFkZChlLCBfZSlcbiAgfVxuXG4gIFNoYTEucHJvdG90eXBlLl9oYXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKFBPT0wubGVuZ3RoIDwgMTAwKSBQT09MLnB1c2godGhpcylcbiAgICB2YXIgSCA9IG5ldyBCdWZmZXIoMjApXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLl9hfDAsIHRoaXMuX2J8MCwgdGhpcy5fY3wwLCB0aGlzLl9kfDAsIHRoaXMuX2V8MClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9hfDAsIEEpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYnwwLCBCKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2N8MCwgQylcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9kfDAsIEQpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZXwwLCBFKVxuICAgIHJldHVybiBIXG4gIH1cblxuICAvKlxuICAgKiBQZXJmb3JtIHRoZSBhcHByb3ByaWF0ZSB0cmlwbGV0IGNvbWJpbmF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgY3VycmVudFxuICAgKiBpdGVyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHNoYTFfZnQodCwgYiwgYywgZCkge1xuICAgIGlmKHQgPCAyMCkgcmV0dXJuIChiICYgYykgfCAoKH5iKSAmIGQpO1xuICAgIGlmKHQgPCA0MCkgcmV0dXJuIGIgXiBjIF4gZDtcbiAgICBpZih0IDwgNjApIHJldHVybiAoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCk7XG4gICAgcmV0dXJuIGIgXiBjIF4gZDtcbiAgfVxuXG4gIC8qXG4gICAqIERldGVybWluZSB0aGUgYXBwcm9wcmlhdGUgYWRkaXRpdmUgY29uc3RhbnQgZm9yIHRoZSBjdXJyZW50IGl0ZXJhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gc2hhMV9rdCh0KSB7XG4gICAgcmV0dXJuICh0IDwgMjApID8gIDE1MTg1MDAyNDkgOiAodCA8IDQwKSA/ICAxODU5Nzc1MzkzIDpcbiAgICAgICAgICAgKHQgPCA2MCkgPyAtMTg5NDAwNzU4OCA6IC04OTk0OTc1MTQ7XG4gIH1cblxuICAvKlxuICAgKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gICAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gICAqIC8vZG9taW5pY3RhcnI6IHRoaXMgaXMgMTAgeWVhcnMgb2xkLCBzbyBtYXliZSB0aGlzIGNhbiBiZSBkcm9wcGVkPylcbiAgICpcbiAgICovXG4gIGZ1bmN0aW9uIGFkZCh4LCB5KSB7XG4gICAgcmV0dXJuICh4ICsgeSApIHwgMFxuICAvL2xldHMgc2VlIGhvdyB0aGlzIGdvZXMgb24gdGVzdGxpbmcuXG4gIC8vICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xuICAvLyAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAvLyAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG4gIH1cblxuICAvKlxuICAgKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBmdW5jdGlvbiByb2wobnVtLCBjbnQpIHtcbiAgICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XG4gIH1cblxuICByZXR1cm4gU2hhMVxufVxuIiwiXG4vKipcbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgU2VjdXJlIEhhc2ggQWxnb3JpdGhtLCBTSEEtMjU2LCBhcyBkZWZpbmVkXG4gKiBpbiBGSVBTIDE4MC0yXG4gKiBWZXJzaW9uIDIuMi1iZXRhIENvcHlyaWdodCBBbmdlbCBNYXJpbiwgUGF1bCBKb2huc3RvbiAyMDAwIC0gMjAwOS5cbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqXG4gKi9cblxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG52YXIgQkUgICAgICAgPSBmYWxzZVxudmFyIExFICAgICAgID0gdHJ1ZVxudmFyIHUgICAgICAgID0gcmVxdWlyZSgnLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQnVmZmVyLCBIYXNoKSB7XG5cbiAgdmFyIEsgPSBbXG4gICAgICAweDQyOEEyRjk4LCAweDcxMzc0NDkxLCAweEI1QzBGQkNGLCAweEU5QjVEQkE1LFxuICAgICAgMHgzOTU2QzI1QiwgMHg1OUYxMTFGMSwgMHg5MjNGODJBNCwgMHhBQjFDNUVENSxcbiAgICAgIDB4RDgwN0FBOTgsIDB4MTI4MzVCMDEsIDB4MjQzMTg1QkUsIDB4NTUwQzdEQzMsXG4gICAgICAweDcyQkU1RDc0LCAweDgwREVCMUZFLCAweDlCREMwNkE3LCAweEMxOUJGMTc0LFxuICAgICAgMHhFNDlCNjlDMSwgMHhFRkJFNDc4NiwgMHgwRkMxOURDNiwgMHgyNDBDQTFDQyxcbiAgICAgIDB4MkRFOTJDNkYsIDB4NEE3NDg0QUEsIDB4NUNCMEE5REMsIDB4NzZGOTg4REEsXG4gICAgICAweDk4M0U1MTUyLCAweEE4MzFDNjZELCAweEIwMDMyN0M4LCAweEJGNTk3RkM3LFxuICAgICAgMHhDNkUwMEJGMywgMHhENUE3OTE0NywgMHgwNkNBNjM1MSwgMHgxNDI5Mjk2NyxcbiAgICAgIDB4MjdCNzBBODUsIDB4MkUxQjIxMzgsIDB4NEQyQzZERkMsIDB4NTMzODBEMTMsXG4gICAgICAweDY1MEE3MzU0LCAweDc2NkEwQUJCLCAweDgxQzJDOTJFLCAweDkyNzIyQzg1LFxuICAgICAgMHhBMkJGRThBMSwgMHhBODFBNjY0QiwgMHhDMjRCOEI3MCwgMHhDNzZDNTFBMyxcbiAgICAgIDB4RDE5MkU4MTksIDB4RDY5OTA2MjQsIDB4RjQwRTM1ODUsIDB4MTA2QUEwNzAsXG4gICAgICAweDE5QTRDMTE2LCAweDFFMzc2QzA4LCAweDI3NDg3NzRDLCAweDM0QjBCQ0I1LFxuICAgICAgMHgzOTFDMENCMywgMHg0RUQ4QUE0QSwgMHg1QjlDQ0E0RiwgMHg2ODJFNkZGMyxcbiAgICAgIDB4NzQ4RjgyRUUsIDB4NzhBNTYzNkYsIDB4ODRDODc4MTQsIDB4OENDNzAyMDgsXG4gICAgICAweDkwQkVGRkZBLCAweEE0NTA2Q0VCLCAweEJFRjlBM0Y3LCAweEM2NzE3OEYyXG4gICAgXVxuXG4gIGluaGVyaXRzKFNoYTI1NiwgSGFzaClcbiAgdmFyIFcgPSBuZXcgQXJyYXkoNjQpXG4gIHZhciBQT09MID0gW11cbiAgZnVuY3Rpb24gU2hhMjU2KCkge1xuICAgIGlmKFBPT0wubGVuZ3RoKSB7XG4gICAgICAvL3JldHVybiBQT09MLnNoaWZ0KCkuaW5pdCgpXG4gICAgfVxuICAgIC8vdGhpcy5fZGF0YSA9IG5ldyBCdWZmZXIoMzIpXG5cbiAgICB0aGlzLmluaXQoKVxuXG4gICAgdGhpcy5fdyA9IFcgLy9uZXcgQXJyYXkoNjQpXG5cbiAgICBIYXNoLmNhbGwodGhpcywgMTYqNCwgMTQqNClcbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB0aGlzLl9hID0gMHg2YTA5ZTY2N3wwXG4gICAgdGhpcy5fYiA9IDB4YmI2N2FlODV8MFxuICAgIHRoaXMuX2MgPSAweDNjNmVmMzcyfDBcbiAgICB0aGlzLl9kID0gMHhhNTRmZjUzYXwwXG4gICAgdGhpcy5fZSA9IDB4NTEwZTUyN2Z8MFxuICAgIHRoaXMuX2YgPSAweDliMDU2ODhjfDBcbiAgICB0aGlzLl9nID0gMHgxZjgzZDlhYnwwXG4gICAgdGhpcy5faCA9IDB4NWJlMGNkMTl8MFxuXG4gICAgdGhpcy5fbGVuID0gdGhpcy5fcyA9IDBcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgc2FmZV9hZGQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKTtcbiAgICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gICAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG4gIH1cblxuICBmdW5jdGlvbiBTIChYLCBuKSB7XG4gICAgcmV0dXJuIChYID4+PiBuKSB8IChYIDw8ICgzMiAtIG4pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFIgKFgsIG4pIHtcbiAgICByZXR1cm4gKFggPj4+IG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gQ2ggKHgsIHksIHopIHtcbiAgICByZXR1cm4gKCh4ICYgeSkgXiAoKH54KSAmIHopKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1haiAoeCwgeSwgeikge1xuICAgIHJldHVybiAoKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNpZ21hMDI1NiAoeCkge1xuICAgIHJldHVybiAoUyh4LCAyKSBeIFMoeCwgMTMpIF4gUyh4LCAyMikpO1xuICB9XG5cbiAgZnVuY3Rpb24gU2lnbWExMjU2ICh4KSB7XG4gICAgcmV0dXJuIChTKHgsIDYpIF4gUyh4LCAxMSkgXiBTKHgsIDI1KSk7XG4gIH1cblxuICBmdW5jdGlvbiBHYW1tYTAyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgNykgXiBTKHgsIDE4KSBeIFIoeCwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gR2FtbWExMjU2ICh4KSB7XG4gICAgcmV0dXJuIChTKHgsIDE3KSBeIFMoeCwgMTkpIF4gUih4LCAxMCkpO1xuICB9XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24obSkge1xuICAgIHZhciBNID0gdGhpcy5fYmxvY2tcbiAgICB2YXIgVyA9IHRoaXMuX3dcbiAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZywgaFxuICAgIHZhciBUMSwgVDJcblxuICAgIGEgPSB0aGlzLl9hIHwgMFxuICAgIGIgPSB0aGlzLl9iIHwgMFxuICAgIGMgPSB0aGlzLl9jIHwgMFxuICAgIGQgPSB0aGlzLl9kIHwgMFxuICAgIGUgPSB0aGlzLl9lIHwgMFxuICAgIGYgPSB0aGlzLl9mIHwgMFxuICAgIGcgPSB0aGlzLl9nIHwgMFxuICAgIGggPSB0aGlzLl9oIHwgMFxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XG4gICAgICB2YXIgdyA9IFdbal0gPSBqIDwgMTZcbiAgICAgICAgPyBNLnJlYWRJbnQzMkJFKGogKiA0KVxuICAgICAgICA6IEdhbW1hMTI1NihXW2ogLSAyXSkgKyBXW2ogLSA3XSArIEdhbW1hMDI1NihXW2ogLSAxNV0pICsgV1tqIC0gMTZdXG5cbiAgICAgIFQxID0gaCArIFNpZ21hMTI1NihlKSArIENoKGUsIGYsIGcpICsgS1tqXSArIHdcblxuICAgICAgVDIgPSBTaWdtYTAyNTYoYSkgKyBNYWooYSwgYiwgYyk7XG4gICAgICBoID0gZzsgZyA9IGY7IGYgPSBlOyBlID0gZCArIFQxOyBkID0gYzsgYyA9IGI7IGIgPSBhOyBhID0gVDEgKyBUMjtcbiAgICB9XG5cbiAgICB0aGlzLl9hID0gKGEgKyB0aGlzLl9hKSB8IDBcbiAgICB0aGlzLl9iID0gKGIgKyB0aGlzLl9iKSB8IDBcbiAgICB0aGlzLl9jID0gKGMgKyB0aGlzLl9jKSB8IDBcbiAgICB0aGlzLl9kID0gKGQgKyB0aGlzLl9kKSB8IDBcbiAgICB0aGlzLl9lID0gKGUgKyB0aGlzLl9lKSB8IDBcbiAgICB0aGlzLl9mID0gKGYgKyB0aGlzLl9mKSB8IDBcbiAgICB0aGlzLl9nID0gKGcgKyB0aGlzLl9nKSB8IDBcbiAgICB0aGlzLl9oID0gKGggKyB0aGlzLl9oKSB8IDBcblxuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuX2hhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoUE9PTC5sZW5ndGggPCAxMClcbiAgICAgIFBPT0wucHVzaCh0aGlzKVxuXG4gICAgdmFyIEggPSBuZXcgQnVmZmVyKDMyKVxuXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYSwgIDApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYiwgIDQpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYywgIDgpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZCwgMTIpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZSwgMTYpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZiwgMjApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZywgMjQpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5faCwgMjgpXG5cbiAgICByZXR1cm4gSFxuICB9XG5cbiAgcmV0dXJuIFNoYTI1NlxuXG59XG4iLCJleHBvcnRzLndyaXRlID0gd3JpdGVcbmV4cG9ydHMuemVyb0ZpbGwgPSB6ZXJvRmlsbFxuXG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmdcblxuZnVuY3Rpb24gd3JpdGUgKGJ1ZmZlciwgc3RyaW5nLCBlbmMsIHN0YXJ0LCBmcm9tLCB0bywgTEUpIHtcbiAgdmFyIGwgPSAodG8gLSBmcm9tKVxuICBpZihlbmMgPT09ICdhc2NpaScgfHwgZW5jID09PSAnYmluYXJ5Jykge1xuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBidWZmZXJbc3RhcnQgKyBpXSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyBmcm9tKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmKGVuYyA9PSBudWxsKSB7XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGJ1ZmZlcltzdGFydCArIGldID0gc3RyaW5nW2kgKyBmcm9tXVxuICAgIH1cbiAgfVxuICBlbHNlIGlmKGVuYyA9PT0gJ2hleCcpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgaiA9IGZyb20gKyBpXG4gICAgICBidWZmZXJbc3RhcnQgKyBpXSA9IHBhcnNlSW50KHN0cmluZ1tqKjJdICsgc3RyaW5nWyhqKjIpKzFdLCAxNilcbiAgICB9XG4gIH1cbiAgZWxzZSBpZihlbmMgPT09ICdiYXNlNjQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYXNlNjQgZW5jb2Rpbmcgbm90IHlldCBzdXBwb3J0ZWQnKVxuICB9XG4gIGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoZW5jICsnIGVuY29kaW5nIG5vdCB5ZXQgc3VwcG9ydGVkJylcbn1cblxuLy9hbHdheXMgZmlsbCB0byB0aGUgZW5kIVxuZnVuY3Rpb24gemVyb0ZpbGwoYnVmLCBmcm9tKSB7XG4gIGZvcih2YXIgaSA9IGZyb207IGkgPCBidWYubGVuZ3RoOyBpKyspXG4gICAgYnVmW2ldID0gMFxufVxuXG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG4vLyBKYXZhU2NyaXB0IFBCS0RGMiBJbXBsZW1lbnRhdGlvblxuLy8gQmFzZWQgb24gaHR0cDovL2dpdC5pby9xc3Yyendcbi8vIExpY2Vuc2VkIHVuZGVyIExHUEwgdjNcbi8vIENvcHlyaWdodCAoYykgMjAxMyBqZHVuY2FuYXRvclxuXG52YXIgYmxvY2tzaXplID0gNjRcbnZhciB6ZXJvQnVmZmVyID0gbmV3IEJ1ZmZlcihibG9ja3NpemUpOyB6ZXJvQnVmZmVyLmZpbGwoMClcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3JlYXRlSG1hYywgZXhwb3J0cykge1xuICBleHBvcnRzID0gZXhwb3J0cyB8fCB7fVxuXG4gIGV4cG9ydHMucGJrZGYyID0gZnVuY3Rpb24ocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgY2IpIHtcbiAgICBpZignZnVuY3Rpb24nICE9PSB0eXBlb2YgY2IpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNhbGxiYWNrIHByb3ZpZGVkIHRvIHBia2RmMicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2IobnVsbCwgZXhwb3J0cy5wYmtkZjJTeW5jKHBhc3N3b3JkLCBzYWx0LCBpdGVyYXRpb25zLCBrZXlsZW4pKVxuICAgIH0pXG4gIH1cblxuICBleHBvcnRzLnBia2RmMlN5bmMgPSBmdW5jdGlvbihrZXksIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbikge1xuICAgIGlmKCdudW1iZXInICE9PSB0eXBlb2YgaXRlcmF0aW9ucylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0l0ZXJhdGlvbnMgbm90IGEgbnVtYmVyJylcbiAgICBpZihpdGVyYXRpb25zIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBpdGVyYXRpb25zJylcbiAgICBpZignbnVtYmVyJyAhPT0gdHlwZW9mIGtleWxlbilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0tleSBsZW5ndGggbm90IGEgbnVtYmVyJylcbiAgICBpZihrZXlsZW4gPCAwKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGtleSBsZW5ndGgnKVxuXG4gICAgLy9zdHJldGNoIGtleSB0byB0aGUgY29ycmVjdCBsZW5ndGggdGhhdCBobWFjIHdhbnRzIGl0LFxuICAgIC8vb3RoZXJ3aXNlIHRoaXMgd2lsbCBoYXBwZW4gZXZlcnkgdGltZSBobWFjIGlzIGNhbGxlZFxuICAgIC8vdHdpY2UgcGVyIGl0ZXJhdGlvbi5cbiAgICB2YXIga2V5ID0gIUJ1ZmZlci5pc0J1ZmZlcihrZXkpID8gbmV3IEJ1ZmZlcihrZXkpIDoga2V5XG5cbiAgICBpZihrZXkubGVuZ3RoID4gYmxvY2tzaXplKSB7XG4gICAgICBrZXkgPSBjcmVhdGVIYXNoKGFsZykudXBkYXRlKGtleSkuZGlnZXN0KClcbiAgICB9IGVsc2UgaWYoa2V5Lmxlbmd0aCA8IGJsb2Nrc2l6ZSkge1xuICAgICAga2V5ID0gQnVmZmVyLmNvbmNhdChba2V5LCB6ZXJvQnVmZmVyXSwgYmxvY2tzaXplKVxuICAgIH1cblxuICAgIHZhciBITUFDO1xuICAgIHZhciBjcGxlbiwgcCA9IDAsIGkgPSAxLCBpdG1wID0gbmV3IEJ1ZmZlcig0KSwgZGlndG1wO1xuICAgIHZhciBvdXQgPSBuZXcgQnVmZmVyKGtleWxlbik7XG4gICAgb3V0LmZpbGwoMCk7XG4gICAgd2hpbGUoa2V5bGVuKSB7XG4gICAgICBpZihrZXlsZW4gPiAyMClcbiAgICAgICAgY3BsZW4gPSAyMDtcbiAgICAgIGVsc2VcbiAgICAgICAgY3BsZW4gPSBrZXlsZW47XG5cbiAgICAgIC8qIFdlIGFyZSB1bmxpa2VseSB0byBldmVyIHVzZSBtb3JlIHRoYW4gMjU2IGJsb2NrcyAoNTEyMCBiaXRzISlcbiAgICAgICAgICogYnV0IGp1c3QgaW4gY2FzZS4uLlxuICAgICAgICAgKi9cbiAgICAgICAgaXRtcFswXSA9IChpID4+IDI0KSAmIDB4ZmY7XG4gICAgICAgIGl0bXBbMV0gPSAoaSA+PiAxNikgJiAweGZmO1xuICAgICAgICAgIGl0bXBbMl0gPSAoaSA+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgaXRtcFszXSA9IGkgJiAweGZmO1xuXG4gICAgICAgICAgSE1BQyA9IGNyZWF0ZUhtYWMoJ3NoYTEnLCBrZXkpO1xuICAgICAgICAgIEhNQUMudXBkYXRlKHNhbHQpXG4gICAgICAgICAgSE1BQy51cGRhdGUoaXRtcCk7XG4gICAgICAgIGRpZ3RtcCA9IEhNQUMuZGlnZXN0KCk7XG4gICAgICAgIGRpZ3RtcC5jb3B5KG91dCwgcCwgMCwgY3BsZW4pO1xuXG4gICAgICAgIGZvcih2YXIgaiA9IDE7IGogPCBpdGVyYXRpb25zOyBqKyspIHtcbiAgICAgICAgICBITUFDID0gY3JlYXRlSG1hYygnc2hhMScsIGtleSk7XG4gICAgICAgICAgSE1BQy51cGRhdGUoZGlndG1wKTtcbiAgICAgICAgICBkaWd0bXAgPSBITUFDLmRpZ2VzdCgpO1xuICAgICAgICAgIGZvcih2YXIgayA9IDA7IGsgPCBjcGxlbjsgaysrKSB7XG4gICAgICAgICAgICBvdXRba10gXj0gZGlndG1wW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAga2V5bGVuIC09IGNwbGVuO1xuICAgICAgaSsrO1xuICAgICAgcCArPSBjcGxlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHNcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbi8vIE9yaWdpbmFsIGNvZGUgYWRhcHRlZCBmcm9tIFJvYmVydCBLaWVmZmVyLlxuLy8gZGV0YWlscyBhdCBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZFxuXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIF9nbG9iYWwgPSB0aGlzO1xuXG4gIHZhciBtYXRoUk5HLCB3aGF0d2dSTkc7XG5cbiAgLy8gTk9URTogTWF0aC5yYW5kb20oKSBkb2VzIG5vdCBndWFyYW50ZWUgXCJjcnlwdG9ncmFwaGljIHF1YWxpdHlcIlxuICBtYXRoUk5HID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgIHZhciBieXRlcyA9IG5ldyBCdWZmZXIoc2l6ZSk7XG4gICAgdmFyIHI7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IHNpemU7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIGJ5dGVzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBieXRlcztcbiAgfVxuXG4gIGlmIChfZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgd2hhdHdnUk5HID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IEJ1ZmZlcihzaXplKTsgLy9pbiBicm93c2VyaWZ5LCB0aGlzIGlzIGFuIGV4dGVuZGVkIFVpbnQ4QXJyYXlcbiAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gd2hhdHdnUk5HIHx8IG1hdGhSTkc7XG5cbn0oKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCl7XG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwicXZNWWNDXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBmb29Db250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCAkdGltZW91dCkge1xuICAgICRzY29wZS5uYXZpZ2F0ZVRvUmF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJy5iaWctc2VjdGlvbicpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlT3V0RG93bicpO1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJHN0YXRlLmdvKCdyYXRlJyk7XG4gICAgICB9LCA2MDApO1xuICAgIH07XG4gIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYW5ndWxhci5tb2R1bGUoJ3p1bHVhcHAuZm9vJywgW10pXG4gIC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ3JhdGUnLCB7XG4gICAgICB1cmw6ICcvcmF0ZScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mb28vbGF5b3V0Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ3JhdGVDb250cm9sbGVyJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Zvby9ob21lLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ2hvbWVDb250cm9sbGVyJ1xuICAgIH0pO1xuICB9KVxuICAuY29udHJvbGxlcigncmF0ZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL3JhdGVDb250cm9sbGVyJykpXG4gIC5jb250cm9sbGVyKCdob21lQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vaG9tZUNvbnRyb2xsZXInKSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgS2VlbiA9IHJlcXVpcmUoJ2tlZW4uaW8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIGZvb0NvbnRyb2xsZXIoJHNjb3BlLCAkaHR0cCwgJHRpbWVvdXQpIHtcbiAgXHR2YXIgcHJvZmVzc2lvbmFscyA9IG51bGw7XG4gICAgdmFyIHJhdGVkUHJvZmVzc2lvbmFscyA9IHtjb3VudDowfTtcbiAgXHQvLyB0b2RvIDogbW92ZSB0aGlzIGluIGEgc2VydmljZVxuICBcdHZhciBrZWVuQ2xpZW50ID0gS2Vlbi5jb25maWd1cmUoe1xuICBcdFx0cHJvamVjdElkIDogJzU0OWYzYzk1ZDJlYWFhMDJkYTE1NzA1MicsXG4gIFx0XHR3cml0ZUtleSA6ICc0YWFmZDc3NDEyMGVhMThlYTBiODUyMjQ1OGI1OTAzODQ5MTZmYTczYTE2NGY0MWQ3YmNjNDQ5NmFkNDg5NjVmY2VmZjBjN2UzMzFmN2FmM2NmMDU5ZjkzNDFkZjI1NjZhMDdhY2Q0YTgwNGViYzYxMmMxM2NkYThlZjhiNzY4MWZlODdkYjM5MGE2YTA1ZTNlZjBlODY1NWRkODNhODEwYjJiZmVhMDczNjgxY2ZmMDExYzE4ZjgwNWE2MzU0OGI5ZGEwYjVjOGI4MjFiMTEwMjBkZTZhYTFhOTNlZWUwYycsXG4gIFx0XHRyZWFkS2V5IDogJzkyMjI1NDhmMDgxMDY4ZmY0ZmRjMTAzZWIxYmUxMjc5Y2E0Y2Q2NzkwOTNmOTJkYjJmZmFiZTVkYWY5ZDkzZWNlNWUwY2E4ZjgyYmRiYTVhM2Q3NWRjZDc0Y2IzYzc5NDQ3MjRlOTU0ZDMxZGQzYmQ0OTMwYWE5MzIwMTFjMmQyZmQxMWU3NDlmNDRkNzE0NTZmNGI2OGVhMzYzMTZiOTBmMGEwNzEzN2E0ZGRlZDNlZTgzMTM2Y2IxNjE1MzhkOWQ4N2JhYWE0YWFhYjIxYmU3YjUwZTk1MmJiNzM4NTdiJ1xuICBcdH0pO1xuICAgIFxuICAgICRzY29wZS5jdXJyZW50U3RhdHMgPSB7XG4gICAgICBhdmVyYWdlOiAwLFxuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICAgICRzY29wZS5jdXJyZW50QXZlcmFnZSA9IDA7XG4gICAgJHNjb3BlLk5VTUJFUl9JTl9DVVJSRU5UX1NUQVRTID0gMTA7XG4gICAgJHNjb3BlLmN1cnJlbnRSYXRlZFByb2Zlc3Npb25hbCA9IG51bGw7XG5cbiAgXHRmdW5jdGlvbiBnZXROZXh0UHJvZmVzaW9ubmFsKCl7XG4gIFx0XHR2YXIgcHJvZmVzc2lvbm5hbEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJvZmVzc2lvbmFscy5sZW5ndGgpO1xuICAgICAgICB2YXIgcHJvZmVzc2lvbmFsID0gcHJvZmVzc2lvbmFsc1twcm9mZXNzaW9ubmFsSW5kZXhdO1xuICAgICAgICB3aGlsZShyYXRlZFByb2Zlc3Npb25hbHNbcHJvZmVzc2lvbmFsLklEXSAmJiByYXRlZFByb2Zlc3Npb25hbHMuY291bnQgPCBwcm9mZXNzaW9uYWwubGVuZ3RoKXtcbiAgICAgICAgICAgIGlmKHByb2Zlc3Npb25uYWxJbmRleCA9PSBwcm9mZXNzaW9uYWxzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5hbEluZGV4ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9mZXNzaW9ubmFsSW5kZXgrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZmVzc2lvbmFsID0gcHJvZmVzc2lvbmFsc1twcm9mZXNzaW9ubmFsSW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgICRzY29wZS5jdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwgPSBwcm9mZXNzaW9uYWxzW3Byb2Zlc3Npb25uYWxJbmRleF07XG4gIFx0fVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3VycmVudEF2ZXJhZ2UocmF0aW5nKXtcbiAgICAgIHZhciBudW1iZXJPZkN1cnJlbnRSYXRlZCA9IHJhdGVkUHJvZmVzc2lvbmFscy5jb3VudCAlICRzY29wZS5OVU1CRVJfSU5fQ1VSUkVOVF9TVEFUUzsgXG4gICAgICAkc2NvcGUuY3VycmVudFN0YXRzLmF2ZXJhZ2UgPSAoKCRzY29wZS5jdXJyZW50U3RhdHMuYXZlcmFnZSAqIG51bWJlck9mQ3VycmVudFJhdGVkKSArIHJhdGluZykgLyAobnVtYmVyT2ZDdXJyZW50UmF0ZWQgKyAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb1JhdGVkKElELCByYXRpbmcpe1xuICAgICAgdXBkYXRlQ3VycmVudEF2ZXJhZ2UocmF0aW5nKTtcbiAgICAgIHJhdGVkUHJvZmVzc2lvbmFsc1tJRF0gPSByYXRpbmc7XG4gICAgICByYXRlZFByb2Zlc3Npb25hbHMuY291bnQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5U3RhdHMoKXtcbiAgICAgICRzY29wZS5jdXJyZW50U3RhdHMudmlzaWJsZSA9IHRydWU7XG4gICAgICBhbmd1bGFyLmVsZW1lbnQoJyNzdGF0cycpLnJlbW92ZUNsYXNzKCdmYWRlT3V0RG93bicpO1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3RhdHMnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluRG93bicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlOZXh0UHJvZmVzc2lvbmFsKGRlbGF5KXtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGdldE5leHRQcm9mZXNpb25uYWwoKTtcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KCcjcHJvZmVzc2lvbmFsJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbkRvd24nKTsgXG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI3Byb2Zlc3Npb25hbCcpLnJlbW92ZUNsYXNzKCdmYWRlT3V0RG93bicpO1xuICAgICAgfSwgZGVsYXkgfHzCoDEwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5leHRWaWV3KCl7XG4gICAgICBpZiAocmF0ZWRQcm9mZXNzaW9uYWxzLmNvdW50ID4gMCAmJiByYXRlZFByb2Zlc3Npb25hbHMuY291bnQgJSAkc2NvcGUuTlVNQkVSX0lOX0NVUlJFTlRfU1RBVFMgPT0gMCkge1xuICAgICAgICBkaXNwbGF5U3RhdHMoKTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgZGlzcGxheU5leHRQcm9mZXNzaW9uYWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkc2NvcGUuY29udGludWUgPSBmdW5jdGlvbigpe1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3RhdHMnKS5yZW1vdmVDbGFzcygnZmFkZUluRG93bicpO1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3RhdHMnKS5hZGRDbGFzcygnZmFkZU91dERvd24nKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICRzY29wZS5jdXJyZW50U3RhdHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuY3VycmVudFN0YXRzLmF2ZXJhZ2UgPSAwO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBkaXNwbGF5TmV4dFByb2Zlc3Npb25hbCgpO1xuICAgIH07XG5cbiAgXHQkc2NvcGUucmF0ZSA9IGZ1bmN0aW9uKHJhdGluZywgZXZlbnQpe1xuICBcdFx0ZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gIFx0XHRhbmd1bGFyLmVsZW1lbnQoJyNwcm9mZXNzaW9uYWwnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKTtcbiAgXHRcdC8vIGtlZW5DbGllbnQuYWRkRXZlbnQoJ3JhdGluZycsIHtwcm9mZXNzaW9uYWxJRDogJHNjb3BlLmN1cnJlbnRSYXRlZFByb2Zlc3Npb25hbC5JRCwgcmF0aW5nOnJhdGluZ30pO1xuICAgICAgYWRkVG9SYXRlZCgkc2NvcGUuY3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLklELCByYXRpbmcpO1xuICAgICAgZ2V0TmV4dFZpZXcoKVxuICBcdH07XG5cbiAgXHQkaHR0cC5nZXQoJ2Fzc2V0cy9kYXRhL3Byb2Zlc3Npb25hbHMuanNvbicpXG4gIFx0LnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG5cdFx0cHJvZmVzc2lvbmFscyA9IGRhdGE7XG4gICAgLy8gZ2V0TmV4dFByb2Zlc2lvbm5hbCgpXG4gICAgZGlzcGxheU5leHRQcm9mZXNzaW9uYWwoMSk7XG5cdH0pO1xuICB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFuZ3VsYXIubW9kdWxlKCd6dWx1YXBwJywgW1xuICAgICd1aS5ib290c3RyYXAnLFxuICAgICd1aS5yb3V0ZXInLFxuICAgIC8vbG9hZCBleHRyYSBleHRlcm5hbCBkZXBlbmRlbmNpZXMgaGVyZSwgZS5nLjpcbiAgICAvLyduZ0FuaW1hdGUnLFxuICAgIC8vaHRtbCB0ZW1wbGF0ZXMgaW4gJHRlbXBsYXRlQ2FjaGUgZ2VuZXJhdGVkIGJ5IEd1bHA6XG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vdG1wL3RlbXBsYXRlcycpLm5hbWUsXG4gICAgLy91c2VmdWwgZGlyZWN0aXZlcywgZmlsdGVycywgc2VydmljZXMgc2hhcmVkIGFjcm9zcyB0aGUgYXBwXG4gICAgLy9leGFtcGxlIGFwcCBtb2R1bGU6XG4gICAgcmVxdWlyZSgnLi9mb28nKS5uYW1lLFxuICBdKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9icm93c2VyaWZ5LXNoaW0gZGVwZW5kZW5jaWVzIChjYW4gYmUgZWRpdGVkIGluIHBhY2thZ2UuanNvbilcbnJlcXVpcmUoJ2FuZ3VsYXInKTtcblxuICByZXF1aXJlKCdhbmd1bGFyLXVpLWJvb3RzdHJhcCcpO1xuICByZXF1aXJlKCdhbmd1bGFyLXVpLXJvdXRlcicpO1xuLy9hcHAgZW50cnkgcG9pbnRcbnJlcXVpcmUoJy4vYXBwJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvZm9vL2hvbWUuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiYmlnLXNlY3Rpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuXHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9nZW50bGVtZW4ucG5nXFxcIiBoZWlnaHQ9XFxcIjI1MFxcXCIgY2xhc3M9XFxcImhpZGRlbi14c1xcXCI+XFxuXHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9nZW50bGVtZW4ucG5nXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgY2xhc3M9XFxcInZpc2libGUteHMtYmxvY2tcXFwiPlxcblx0PGgxPlRoZSBadWx1YXBwPC9oMT5cXG5cdDxoMj5HZW50bGVtZW5cXCdzIGJlc3QgdGltZSBraWxsZXI8L2gyPlxcblx0PGJ1dHRvbiBjbGFzcz1cXFwicm91bmRlZC1idXR0b25cXFwiIG5nLWNsaWNrPVxcXCJuYXZpZ2F0ZVRvUmF0ZSgpXFxcIj5TdGFydCBub3c8L2J1dHRvbj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvZm9vL2xheW91dC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdGF0c1xcXCIgY2xhc3M9XFxcImJpZy1zZWN0aW9uXFxcIiBuZy1zaG93PVxcXCJjdXJyZW50U3RhdHMudmlzaWJsZVxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJhdmVyYWdlLXRpdGxlXFxcIiA+TGFzdCB7e05VTUJFUl9JTl9DVVJSRU5UX1NUQVRTfX0gYXZlcmFnZSBpczwvZGl2Plxcblx0PGRpdiBjbGFzcz1cXFwiYXZlcmFnZVxcXCI+e3tjdXJyZW50U3RhdHMuYXZlcmFnZX19PC9kaXY+XFxuXHQ8YnV0dG9uIGNsYXNzPVxcXCJyb3VuZGVkLWJ1dHRvblxcXCIgbmctY2xpY2s9XFxcImNvbnRpbnVlKClcXFwiPkNvbnRpbnVlPC9idXR0b24+XFxuPC9kaXY+XFxuPGRpdiBpZD1cXFwicHJvZmVzc2lvbmFsXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIG5nLWhpZGU9XFxcImN1cnJlbnRTdGF0cy52aXNpYmxlIHx8ICFjdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWxcXFwiPlxcblx0PGltZyBjbGFzcz1cXFwiaW1nLWNpcmNsZVxcXCIgbmctc3JjPVxcXCJ7e2N1cnJlbnRSYXRlZFByb2Zlc3Npb25hbC5waWN0dXJlVXJsfX1cXFwiPlxcblx0PGgxPnt7Y3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLm5hbWV9fTwvaDE+XFxuXHQ8cCBjbGFzcz1cXFwicHJvZmVzc2lvblxcXCI+e3tjdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwucHJvZmVzc2lvbn19PC9wPlxcblx0PGRpdiBjbGFzcz1cXFwicm93IHRleHQtY2VudGVyIHJhdGluZy1ib3hcXFwiPlxcblx0XHQ8aDQ+V2hhdFxcJ3MgaGVyIGdlbnRsZW1hbiByYXRlID88L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNiBjb2wtc20tb2Zmc2V0LTNcXFwiPlxcblx0XHRcdDxpbWcgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2JvcmVkLnN2Z1xcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIHZpc2libGUteHMtaW5saW5lLWJsb2NrIHZpc2libGUtc20taW5saW5lLWJsb2NrXFxcIiByb2xlPVxcXCJncm91cFxcXCI+XFxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XFxcIiBuZy1yZXBlYXQ9XFxcInJhdGluZyBpbiBbMSwyLDMsNCw1XVxcXCIgbmctY2xpY2s9XFxcInJhdGUocmF0aW5nLCAkZXZlbnQpXFxcIj4mbmJzcDt7e3JhdGluZ319Jm5ic3A7PC9idXR0b24+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGhpZGRlbi1zbSBoaWRkZW4teHNcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLWRlZmF1bHRcXFwiIG5nLXJlcGVhdD1cXFwicmF0aW5nIGluIFsxLDIsMyw0LDVdXFxcIiBuZy1jbGljaz1cXFwicmF0ZShyYXRpbmcsICRldmVudClcXFwiPiZuYnNwO3t7cmF0aW5nfX0mbmJzcDs8L2J1dHRvbj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9leGNpdGVkLnN2Z1xcXCI+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuPC9kaXY+XFxuXCIpO31dKTsiXX0=
