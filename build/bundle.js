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

  	function setNextProfessional(){
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

  	$scope.rate = function(rating, event){
  		event.currentTarget.blur();
  		$('#professional').addClass('animated fadeOutDown');
  		keenClient.addEvent('rating', {professionalID: $scope.currentRatedProfessional.ID, rating:rating});
        ratedProfessionals[$scope.currentRatedProfessional.ID] = true;
        ratedProfessionals.count++;
  		$timeout(function(){
  			setNextProfessional();
  			$('#professional').removeClass('fadeOutDown');
  			$('#professional').addClass('animated fadeInDown');	
  		}, 1000);
  	};

  	$http.get('assets/data/professionals.json')
  	.success(function(data){
		professionals = data;
		setNextProfessional();
	});
  };

},{"keen.io":4}],33:[function(require,module,exports){
'use strict';

module.exports =
  angular.module('zuluapp.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('foo', {
      url: '',
      templateUrl: 'app/foo/layout.html',
      controller: 'fooController'
    });
  })
  .controller('fooController', require('./fooController'));

},{"./fooController":32}],34:[function(require,module,exports){
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

},{"../../../tmp/templates":36,"./foo":33}],35:[function(require,module,exports){
'use strict';

//browserify-shim dependencies (can be edited in package.json)
require('angular');

  require('angular-ui-bootstrap');
  require('angular-ui-router');
//app entry point
require('./app');

},{"./app":34,"angular":3,"angular-ui-bootstrap":1,"angular-ui-router":2}],36:[function(require,module,exports){
module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/foo/layout.html","<div id=\"professional\" class=\"text-center\">\n	<img class=\"img-circle\" ng-src=\"{{currentRatedProfessional.pictureUrl}}\">\n	<h1>{{currentRatedProfessional.name}}</h1>\n	<p class=\"profession\">{{currentRatedProfessional.profession}}</p>\n	<div class=\"row text-center rating-box\">\n		<h4>Quelle note lui donnes-tu ?</h4>\n		<div class=\"col-sm-6 col-sm-offset-3\">\n			<img src=\"assets/images/bored.svg\">\n			<div class=\"btn-group\" role=\"group\">\n				<button class=\"btn btn-default\" ng-repeat=\"rating in [1,2,3,4,5]\" ng-click=\"rate(rating, $event)\">&nbsp;{{rating}}&nbsp;</button>\n			</div>\n			<img src=\"assets/images/excited.svg\">\n		</div>\n	</div>\n</div>\n	\n\n");}]);
},{}]},{},[35])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYm9vdHN0cmFwL3VpLWJvb3RzdHJhcC10cGxzLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktcm91dGVyL3JlbGVhc2UvYW5ndWxhci11aS1yb3V0ZXIubWluLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci9hbmd1bGFyLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9saWIvcXVlcnkuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbGliL3JlcXVlc3RzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L25vZGVfbW9kdWxlcy9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pcy1hcnJheS9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2NyeXB0by1icm93c2VyaWZ5L2NyZWF0ZS1oYXNoLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvY3JlYXRlLWhtYWMuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9oZWxwZXJzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9tZDUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcmlwZW1kMTYwL2xpYi9yaXBlbWQxNjAuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2hhc2guanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGExLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGEyNTYuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL3V0aWwuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9wYmtkZjIuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ybmcuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvZm9vL2Zvb0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvYXBwL2Zvby9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvdG1wL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogYW5ndWxhci11aS1ib290c3RyYXBcbiAqIGh0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvXG5cbiAqIFZlcnNpb246IDAuMTEuMiAtIDIwMTQtMDktMjZcbiAqIExpY2Vuc2U6IE1JVFxuICovXG5hbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcFwiLFtcInVpLmJvb3RzdHJhcC50cGxzXCIsXCJ1aS5ib290c3RyYXAudHJhbnNpdGlvblwiLFwidWkuYm9vdHN0cmFwLmNvbGxhcHNlXCIsXCJ1aS5ib290c3RyYXAuYWNjb3JkaW9uXCIsXCJ1aS5ib290c3RyYXAuYWxlcnRcIixcInVpLmJvb3RzdHJhcC5iaW5kSHRtbFwiLFwidWkuYm9vdHN0cmFwLmJ1dHRvbnNcIixcInVpLmJvb3RzdHJhcC5jYXJvdXNlbFwiLFwidWkuYm9vdHN0cmFwLmRhdGVwYXJzZXJcIixcInVpLmJvb3RzdHJhcC5wb3NpdGlvblwiLFwidWkuYm9vdHN0cmFwLmRhdGVwaWNrZXJcIixcInVpLmJvb3RzdHJhcC5kcm9wZG93blwiLFwidWkuYm9vdHN0cmFwLm1vZGFsXCIsXCJ1aS5ib290c3RyYXAucGFnaW5hdGlvblwiLFwidWkuYm9vdHN0cmFwLnRvb2x0aXBcIixcInVpLmJvb3RzdHJhcC5wb3BvdmVyXCIsXCJ1aS5ib290c3RyYXAucHJvZ3Jlc3NiYXJcIixcInVpLmJvb3RzdHJhcC5yYXRpbmdcIixcInVpLmJvb3RzdHJhcC50YWJzXCIsXCJ1aS5ib290c3RyYXAudGltZXBpY2tlclwiLFwidWkuYm9vdHN0cmFwLnR5cGVhaGVhZFwiXSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudHBsc1wiLFtcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuaHRtbFwiLFwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sXCIsXCJ0ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLFwidGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIsXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3BvcHVwLmh0bWxcIixcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsXCJ0ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sXCIsXCJ0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdlci5odG1sXCIsXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtdW5zYWZlLXBvcHVwLmh0bWxcIixcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1wb3B1cC5odG1sXCIsXCJ0ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbFwiLFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIixcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIixcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIixcInRlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLFwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLFwidGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guaHRtbFwiLFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1wb3B1cC5odG1sXCJdKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50cmFuc2l0aW9uXCIsW10pLmZhY3RvcnkoXCIkdHJhbnNpdGlvblwiLFtcIiRxXCIsXCIkdGltZW91dFwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe2Zvcih2YXIgYiBpbiBhKWlmKHZvaWQgMCE9PWYuc3R5bGVbYl0pcmV0dXJuIGFbYl19dmFyIGU9ZnVuY3Rpb24oZCxmLGcpe2c9Z3x8e307dmFyIGg9YS5kZWZlcigpLGk9ZVtnLmFuaW1hdGlvbj9cImFuaW1hdGlvbkVuZEV2ZW50TmFtZVwiOlwidHJhbnNpdGlvbkVuZEV2ZW50TmFtZVwiXSxqPWZ1bmN0aW9uKCl7Yy4kYXBwbHkoZnVuY3Rpb24oKXtkLnVuYmluZChpLGopLGgucmVzb2x2ZShkKX0pfTtyZXR1cm4gaSYmZC5iaW5kKGksaiksYihmdW5jdGlvbigpe2FuZ3VsYXIuaXNTdHJpbmcoZik/ZC5hZGRDbGFzcyhmKTphbmd1bGFyLmlzRnVuY3Rpb24oZik/ZihkKTphbmd1bGFyLmlzT2JqZWN0KGYpJiZkLmNzcyhmKSxpfHxoLnJlc29sdmUoZCl9KSxoLnByb21pc2UuY2FuY2VsPWZ1bmN0aW9uKCl7aSYmZC51bmJpbmQoaSxqKSxoLnJlamVjdChcIlRyYW5zaXRpb24gY2FuY2VsbGVkXCIpfSxoLnByb21pc2V9LGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyYW5zXCIpLGc9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9UcmFuc2l0aW9uRW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn0saD17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJhbmltYXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9BbmltYXRpb25FbmRcIix0cmFuc2l0aW9uOlwiYW5pbWF0aW9uZW5kXCJ9O3JldHVybiBlLnRyYW5zaXRpb25FbmRFdmVudE5hbWU9ZChnKSxlLmFuaW1hdGlvbkVuZEV2ZW50TmFtZT1kKGgpLGV9XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuY29sbGFwc2VcIixbXCJ1aS5ib290c3RyYXAudHJhbnNpdGlvblwiXSkuZGlyZWN0aXZlKFwiY29sbGFwc2VcIixbXCIkdHJhbnNpdGlvblwiLGZ1bmN0aW9uKGEpe3JldHVybntsaW5rOmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKGIpe2Z1bmN0aW9uIGQoKXtqPT09ZSYmKGo9dm9pZCAwKX12YXIgZT1hKGMsYik7cmV0dXJuIGomJmouY2FuY2VsKCksaj1lLGUudGhlbihkLGQpLGV9ZnVuY3Rpb24gZigpe2s/KGs9ITEsZygpKTooYy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKSxlKHtoZWlnaHQ6Y1swXS5zY3JvbGxIZWlnaHQrXCJweFwifSkudGhlbihnKSl9ZnVuY3Rpb24gZygpe2MucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLGMuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKSxjLmNzcyh7aGVpZ2h0OlwiYXV0b1wifSl9ZnVuY3Rpb24gaCgpe2lmKGspaz0hMSxpKCksYy5jc3Moe2hlaWdodDowfSk7ZWxzZXtjLmNzcyh7aGVpZ2h0OmNbMF0uc2Nyb2xsSGVpZ2h0K1wicHhcIn0pO3tjWzBdLm9mZnNldFdpZHRofWMucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZSBpblwiKS5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIiksZSh7aGVpZ2h0OjB9KS50aGVuKGkpfX1mdW5jdGlvbiBpKCl7Yy5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIiksYy5hZGRDbGFzcyhcImNvbGxhcHNlXCIpfXZhciBqLGs9ITA7Yi4kd2F0Y2goZC5jb2xsYXBzZSxmdW5jdGlvbihhKXthP2goKTpmKCl9KX19fV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmFjY29yZGlvblwiLFtcInVpLmJvb3RzdHJhcC5jb2xsYXBzZVwiXSkuY29uc3RhbnQoXCJhY2NvcmRpb25Db25maWdcIix7Y2xvc2VPdGhlcnM6ITB9KS5jb250cm9sbGVyKFwiQWNjb3JkaW9uQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCJhY2NvcmRpb25Db25maWdcIixmdW5jdGlvbihhLGIsYyl7dGhpcy5ncm91cHM9W10sdGhpcy5jbG9zZU90aGVycz1mdW5jdGlvbihkKXt2YXIgZT1hbmd1bGFyLmlzRGVmaW5lZChiLmNsb3NlT3RoZXJzKT9hLiRldmFsKGIuY2xvc2VPdGhlcnMpOmMuY2xvc2VPdGhlcnM7ZSYmYW5ndWxhci5mb3JFYWNoKHRoaXMuZ3JvdXBzLGZ1bmN0aW9uKGEpe2EhPT1kJiYoYS5pc09wZW49ITEpfSl9LHRoaXMuYWRkR3JvdXA9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmdyb3Vwcy5wdXNoKGEpLGEuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2IucmVtb3ZlR3JvdXAoYSl9KX0sdGhpcy5yZW1vdmVHcm91cD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdyb3Vwcy5pbmRleE9mKGEpOy0xIT09YiYmdGhpcy5ncm91cHMuc3BsaWNlKGIsMSl9fV0pLmRpcmVjdGl2ZShcImFjY29yZGlvblwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixjb250cm9sbGVyOlwiQWNjb3JkaW9uQ29udHJvbGxlclwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwifX0pLmRpcmVjdGl2ZShcImFjY29yZGlvbkdyb3VwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIl5hY2NvcmRpb25cIixyZXN0cmljdDpcIkVBXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5odG1sXCIsc2NvcGU6e2hlYWRpbmc6XCJAXCIsaXNPcGVuOlwiPT9cIixpc0Rpc2FibGVkOlwiPT9cIn0sY29udHJvbGxlcjpmdW5jdGlvbigpe3RoaXMuc2V0SGVhZGluZz1mdW5jdGlvbihhKXt0aGlzLmhlYWRpbmc9YX19LGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZC5hZGRHcm91cChhKSxhLiR3YXRjaChcImlzT3BlblwiLGZ1bmN0aW9uKGIpe2ImJmQuY2xvc2VPdGhlcnMoYSl9KSxhLnRvZ2dsZU9wZW49ZnVuY3Rpb24oKXthLmlzRGlzYWJsZWR8fChhLmlzT3Blbj0hYS5pc09wZW4pfX19fSkuZGlyZWN0aXZlKFwiYWNjb3JkaW9uSGVhZGluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIix0cmFuc2NsdWRlOiEwLHRlbXBsYXRlOlwiXCIscmVwbGFjZTohMCxyZXF1aXJlOlwiXmFjY29yZGlvbkdyb3VwXCIsbGluazpmdW5jdGlvbihhLGIsYyxkLGUpe2Quc2V0SGVhZGluZyhlKGEsZnVuY3Rpb24oKXt9KSl9fX0pLmRpcmVjdGl2ZShcImFjY29yZGlvblRyYW5zY2x1ZGVcIixmdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiXmFjY29yZGlvbkdyb3VwXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXthLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiBkW2MuYWNjb3JkaW9uVHJhbnNjbHVkZV19LGZ1bmN0aW9uKGEpe2EmJihiLmh0bWwoXCJcIiksYi5hcHBlbmQoYSkpfSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmFsZXJ0XCIsW10pLmNvbnRyb2xsZXIoXCJBbGVydENvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLGZ1bmN0aW9uKGEsYil7YS5jbG9zZWFibGU9XCJjbG9zZVwiaW4gYn1dKS5kaXJlY3RpdmUoXCJhbGVydFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixjb250cm9sbGVyOlwiQWxlcnRDb250cm9sbGVyXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiEwLHNjb3BlOnt0eXBlOlwiQFwiLGNsb3NlOlwiJlwifX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5iaW5kSHRtbFwiLFtdKS5kaXJlY3RpdmUoXCJiaW5kSHRtbFVuc2FmZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGEsYixjKXtiLmFkZENsYXNzKFwibmctYmluZGluZ1wiKS5kYXRhKFwiJGJpbmRpbmdcIixjLmJpbmRIdG1sVW5zYWZlKSxhLiR3YXRjaChjLmJpbmRIdG1sVW5zYWZlLGZ1bmN0aW9uKGEpe2IuaHRtbChhfHxcIlwiKX0pfX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmJ1dHRvbnNcIixbXSkuY29uc3RhbnQoXCJidXR0b25Db25maWdcIix7YWN0aXZlQ2xhc3M6XCJhY3RpdmVcIix0b2dnbGVFdmVudDpcImNsaWNrXCJ9KS5jb250cm9sbGVyKFwiQnV0dG9uc0NvbnRyb2xsZXJcIixbXCJidXR0b25Db25maWdcIixmdW5jdGlvbihhKXt0aGlzLmFjdGl2ZUNsYXNzPWEuYWN0aXZlQ2xhc3N8fFwiYWN0aXZlXCIsdGhpcy50b2dnbGVFdmVudD1hLnRvZ2dsZUV2ZW50fHxcImNsaWNrXCJ9XSkuZGlyZWN0aXZlKFwiYnRuUmFkaW9cIixmdW5jdGlvbigpe3JldHVybntyZXF1aXJlOltcImJ0blJhZGlvXCIsXCJuZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJCdXR0b25zQ29udHJvbGxlclwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZFswXSxmPWRbMV07Zi4kcmVuZGVyPWZ1bmN0aW9uKCl7Yi50b2dnbGVDbGFzcyhlLmFjdGl2ZUNsYXNzLGFuZ3VsYXIuZXF1YWxzKGYuJG1vZGVsVmFsdWUsYS4kZXZhbChjLmJ0blJhZGlvKSkpfSxiLmJpbmQoZS50b2dnbGVFdmVudCxmdW5jdGlvbigpe3ZhciBkPWIuaGFzQ2xhc3MoZS5hY3RpdmVDbGFzcyk7KCFkfHxhbmd1bGFyLmlzRGVmaW5lZChjLnVuY2hlY2thYmxlKSkmJmEuJGFwcGx5KGZ1bmN0aW9uKCl7Zi4kc2V0Vmlld1ZhbHVlKGQ/bnVsbDphLiRldmFsKGMuYnRuUmFkaW8pKSxmLiRyZW5kZXIoKX0pfSl9fX0pLmRpcmVjdGl2ZShcImJ0bkNoZWNrYm94XCIsZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpbXCJidG5DaGVja2JveFwiLFwibmdNb2RlbFwiXSxjb250cm9sbGVyOlwiQnV0dG9uc0NvbnRyb2xsZXJcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gZyhjLmJ0bkNoZWNrYm94VHJ1ZSwhMCl9ZnVuY3Rpb24gZigpe3JldHVybiBnKGMuYnRuQ2hlY2tib3hGYWxzZSwhMSl9ZnVuY3Rpb24gZyhiLGMpe3ZhciBkPWEuJGV2YWwoYik7cmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKGQpP2Q6Y312YXIgaD1kWzBdLGk9ZFsxXTtpLiRyZW5kZXI9ZnVuY3Rpb24oKXtiLnRvZ2dsZUNsYXNzKGguYWN0aXZlQ2xhc3MsYW5ndWxhci5lcXVhbHMoaS4kbW9kZWxWYWx1ZSxlKCkpKX0sYi5iaW5kKGgudG9nZ2xlRXZlbnQsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe2kuJHNldFZpZXdWYWx1ZShiLmhhc0NsYXNzKGguYWN0aXZlQ2xhc3MpP2YoKTplKCkpLGkuJHJlbmRlcigpfSl9KX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuY2Fyb3VzZWxcIixbXCJ1aS5ib290c3RyYXAudHJhbnNpdGlvblwiXSkuY29udHJvbGxlcihcIkNhcm91c2VsQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJHRpbWVvdXRcIixcIiR0cmFuc2l0aW9uXCIsZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoKXtlKCk7dmFyIGM9K2EuaW50ZXJ2YWw7IWlzTmFOKGMpJiZjPj0wJiYoZz1iKGYsYykpfWZ1bmN0aW9uIGUoKXtnJiYoYi5jYW5jZWwoZyksZz1udWxsKX1mdW5jdGlvbiBmKCl7aD8oYS5uZXh0KCksZCgpKTphLnBhdXNlKCl9dmFyIGcsaCxpPXRoaXMsaj1pLnNsaWRlcz1hLnNsaWRlcz1bXSxrPS0xO2kuY3VycmVudFNsaWRlPW51bGw7dmFyIGw9ITE7aS5zZWxlY3Q9YS5zZWxlY3Q9ZnVuY3Rpb24oZSxmKXtmdW5jdGlvbiBnKCl7aWYoIWwpe2lmKGkuY3VycmVudFNsaWRlJiZhbmd1bGFyLmlzU3RyaW5nKGYpJiYhYS5ub1RyYW5zaXRpb24mJmUuJGVsZW1lbnQpe2UuJGVsZW1lbnQuYWRkQ2xhc3MoZik7e2UuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGh9YW5ndWxhci5mb3JFYWNoKGosZnVuY3Rpb24oYSl7YW5ndWxhci5leHRlbmQoYSx7ZGlyZWN0aW9uOlwiXCIsZW50ZXJpbmc6ITEsbGVhdmluZzohMSxhY3RpdmU6ITF9KX0pLGFuZ3VsYXIuZXh0ZW5kKGUse2RpcmVjdGlvbjpmLGFjdGl2ZTohMCxlbnRlcmluZzohMH0pLGFuZ3VsYXIuZXh0ZW5kKGkuY3VycmVudFNsaWRlfHx7fSx7ZGlyZWN0aW9uOmYsbGVhdmluZzohMH0pLGEuJGN1cnJlbnRUcmFuc2l0aW9uPWMoZS4kZWxlbWVudCx7fSksZnVuY3Rpb24oYixjKXthLiRjdXJyZW50VHJhbnNpdGlvbi50aGVuKGZ1bmN0aW9uKCl7aChiLGMpfSxmdW5jdGlvbigpe2goYixjKX0pfShlLGkuY3VycmVudFNsaWRlKX1lbHNlIGgoZSxpLmN1cnJlbnRTbGlkZSk7aS5jdXJyZW50U2xpZGU9ZSxrPW0sZCgpfX1mdW5jdGlvbiBoKGIsYyl7YW5ndWxhci5leHRlbmQoYix7ZGlyZWN0aW9uOlwiXCIsYWN0aXZlOiEwLGxlYXZpbmc6ITEsZW50ZXJpbmc6ITF9KSxhbmd1bGFyLmV4dGVuZChjfHx7fSx7ZGlyZWN0aW9uOlwiXCIsYWN0aXZlOiExLGxlYXZpbmc6ITEsZW50ZXJpbmc6ITF9KSxhLiRjdXJyZW50VHJhbnNpdGlvbj1udWxsfXZhciBtPWouaW5kZXhPZihlKTt2b2lkIDA9PT1mJiYoZj1tPms/XCJuZXh0XCI6XCJwcmV2XCIpLGUmJmUhPT1pLmN1cnJlbnRTbGlkZSYmKGEuJGN1cnJlbnRUcmFuc2l0aW9uPyhhLiRjdXJyZW50VHJhbnNpdGlvbi5jYW5jZWwoKSxiKGcpKTpnKCkpfSxhLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtsPSEwfSksaS5pbmRleE9mU2xpZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGouaW5kZXhPZihhKX0sYS5uZXh0PWZ1bmN0aW9uKCl7dmFyIGI9KGsrMSklai5sZW5ndGg7cmV0dXJuIGEuJGN1cnJlbnRUcmFuc2l0aW9uP3ZvaWQgMDppLnNlbGVjdChqW2JdLFwibmV4dFwiKX0sYS5wcmV2PWZ1bmN0aW9uKCl7dmFyIGI9MD5rLTE/ai5sZW5ndGgtMTprLTE7cmV0dXJuIGEuJGN1cnJlbnRUcmFuc2l0aW9uP3ZvaWQgMDppLnNlbGVjdChqW2JdLFwicHJldlwiKX0sYS5pc0FjdGl2ZT1mdW5jdGlvbihhKXtyZXR1cm4gaS5jdXJyZW50U2xpZGU9PT1hfSxhLiR3YXRjaChcImludGVydmFsXCIsZCksYS4kb24oXCIkZGVzdHJveVwiLGUpLGEucGxheT1mdW5jdGlvbigpe2h8fChoPSEwLGQoKSl9LGEucGF1c2U9ZnVuY3Rpb24oKXthLm5vUGF1c2V8fChoPSExLGUoKSl9LGkuYWRkU2xpZGU9ZnVuY3Rpb24oYixjKXtiLiRlbGVtZW50PWMsai5wdXNoKGIpLDE9PT1qLmxlbmd0aHx8Yi5hY3RpdmU/KGkuc2VsZWN0KGpbai5sZW5ndGgtMV0pLDE9PWoubGVuZ3RoJiZhLnBsYXkoKSk6Yi5hY3RpdmU9ITF9LGkucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oYSl7dmFyIGI9ai5pbmRleE9mKGEpO2ouc3BsaWNlKGIsMSksai5sZW5ndGg+MCYmYS5hY3RpdmU/aS5zZWxlY3QoYj49ai5sZW5ndGg/altiLTFdOmpbYl0pOms+YiYmay0tfX1dKS5kaXJlY3RpdmUoXCJjYXJvdXNlbFwiLFtmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiEwLGNvbnRyb2xsZXI6XCJDYXJvdXNlbENvbnRyb2xsZXJcIixyZXF1aXJlOlwiY2Fyb3VzZWxcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWxcIixzY29wZTp7aW50ZXJ2YWw6XCI9XCIsbm9UcmFuc2l0aW9uOlwiPVwiLG5vUGF1c2U6XCI9XCJ9fX1dKS5kaXJlY3RpdmUoXCJzbGlkZVwiLGZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJeY2Fyb3VzZWxcIixyZXN0cmljdDpcIkVBXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvY2Fyb3VzZWwvc2xpZGUuaHRtbFwiLHNjb3BlOnthY3RpdmU6XCI9P1wifSxsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2QuYWRkU2xpZGUoYSxiKSxhLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtkLnJlbW92ZVNsaWRlKGEpfSksYS4kd2F0Y2goXCJhY3RpdmVcIixmdW5jdGlvbihiKXtiJiZkLnNlbGVjdChhKX0pfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5kYXRlcGFyc2VyXCIsW10pLnNlcnZpY2UoXCJkYXRlUGFyc2VyXCIsW1wiJGxvY2FsZVwiLFwib3JkZXJCeUZpbHRlclwiLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt2YXIgYz1bXSxkPWEuc3BsaXQoXCJcIik7cmV0dXJuIGFuZ3VsYXIuZm9yRWFjaChlLGZ1bmN0aW9uKGIsZSl7dmFyIGY9YS5pbmRleE9mKGUpO2lmKGY+LTEpe2E9YS5zcGxpdChcIlwiKSxkW2ZdPVwiKFwiK2IucmVnZXgrXCIpXCIsYVtmXT1cIiRcIjtmb3IodmFyIGc9ZisxLGg9ZitlLmxlbmd0aDtoPmc7ZysrKWRbZ109XCJcIixhW2ddPVwiJFwiO2E9YS5qb2luKFwiXCIpLGMucHVzaCh7aW5kZXg6ZixhcHBseTpiLmFwcGx5fSl9fSkse3JlZ2V4Om5ldyBSZWdFeHAoXCJeXCIrZC5qb2luKFwiXCIpK1wiJFwiKSxtYXA6YihjLFwiaW5kZXhcIil9fWZ1bmN0aW9uIGQoYSxiLGMpe3JldHVybiAxPT09YiYmYz4yOD8yOT09PWMmJihhJTQ9PT0wJiZhJTEwMCE9PTB8fGElNDAwPT09MCk6Mz09PWJ8fDU9PT1ifHw4PT09Ynx8MTA9PT1iPzMxPmM6ITB9dGhpcy5wYXJzZXJzPXt9O3ZhciBlPXt5eXl5OntyZWdleDpcIlxcXFxkezR9XCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy55ZWFyPSthfX0seXk6e3JlZ2V4OlwiXFxcXGR7Mn1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLnllYXI9K2ErMmUzfX0seTp7cmVnZXg6XCJcXFxcZHsxLDR9XCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy55ZWFyPSthfX0sTU1NTTp7cmVnZXg6YS5EQVRFVElNRV9GT1JNQVRTLk1PTlRILmpvaW4oXCJ8XCIpLGFwcGx5OmZ1bmN0aW9uKGIpe3RoaXMubW9udGg9YS5EQVRFVElNRV9GT1JNQVRTLk1PTlRILmluZGV4T2YoYil9fSxNTU06e3JlZ2V4OmEuREFURVRJTUVfRk9STUFUUy5TSE9SVE1PTlRILmpvaW4oXCJ8XCIpLGFwcGx5OmZ1bmN0aW9uKGIpe3RoaXMubW9udGg9YS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUTU9OVEguaW5kZXhPZihiKX19LE1NOntyZWdleDpcIjBbMS05XXwxWzAtMl1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLm1vbnRoPWEtMX19LE06e3JlZ2V4OlwiWzEtOV18MVswLTJdXCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy5tb250aD1hLTF9fSxkZDp7cmVnZXg6XCJbMC0yXVswLTldezF9fDNbMC0xXXsxfVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMuZGF0ZT0rYX19LGQ6e3JlZ2V4OlwiWzEtMl0/WzAtOV17MX18M1swLTFdezF9XCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy5kYXRlPSthfX0sRUVFRTp7cmVnZXg6YS5EQVRFVElNRV9GT1JNQVRTLkRBWS5qb2luKFwifFwiKX0sRUVFOntyZWdleDphLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlREQVkuam9pbihcInxcIil9fTt0aGlzLnBhcnNlPWZ1bmN0aW9uKGIsZSl7aWYoIWFuZ3VsYXIuaXNTdHJpbmcoYil8fCFlKXJldHVybiBiO2U9YS5EQVRFVElNRV9GT1JNQVRTW2VdfHxlLHRoaXMucGFyc2Vyc1tlXXx8KHRoaXMucGFyc2Vyc1tlXT1jKGUpKTt2YXIgZj10aGlzLnBhcnNlcnNbZV0sZz1mLnJlZ2V4LGg9Zi5tYXAsaT1iLm1hdGNoKGcpO2lmKGkmJmkubGVuZ3RoKXtmb3IodmFyIGosaz17eWVhcjoxOTAwLG1vbnRoOjAsZGF0ZToxLGhvdXJzOjB9LGw9MSxtPWkubGVuZ3RoO20+bDtsKyspe3ZhciBuPWhbbC0xXTtuLmFwcGx5JiZuLmFwcGx5LmNhbGwoayxpW2xdKX1yZXR1cm4gZChrLnllYXIsay5tb250aCxrLmRhdGUpJiYoaj1uZXcgRGF0ZShrLnllYXIsay5tb250aCxrLmRhdGUsay5ob3VycykpLGp9fX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5wb3NpdGlvblwiLFtdKS5mYWN0b3J5KFwiJHBvc2l0aW9uXCIsW1wiJGRvY3VtZW50XCIsXCIkd2luZG93XCIsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYyl7cmV0dXJuIGEuY3VycmVudFN0eWxlP2EuY3VycmVudFN0eWxlW2NdOmIuZ2V0Q29tcHV0ZWRTdHlsZT9iLmdldENvbXB1dGVkU3R5bGUoYSlbY106YS5zdHlsZVtjXX1mdW5jdGlvbiBkKGEpe3JldHVyblwic3RhdGljXCI9PT0oYyhhLFwicG9zaXRpb25cIil8fFwic3RhdGljXCIpfXZhciBlPWZ1bmN0aW9uKGIpe2Zvcih2YXIgYz1hWzBdLGU9Yi5vZmZzZXRQYXJlbnR8fGM7ZSYmZSE9PWMmJmQoZSk7KWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGN9O3JldHVybntwb3NpdGlvbjpmdW5jdGlvbihiKXt2YXIgYz10aGlzLm9mZnNldChiKSxkPXt0b3A6MCxsZWZ0OjB9LGY9ZShiWzBdKTtmIT1hWzBdJiYoZD10aGlzLm9mZnNldChhbmd1bGFyLmVsZW1lbnQoZikpLGQudG9wKz1mLmNsaWVudFRvcC1mLnNjcm9sbFRvcCxkLmxlZnQrPWYuY2xpZW50TGVmdC1mLnNjcm9sbExlZnQpO3ZhciBnPWJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJue3dpZHRoOmcud2lkdGh8fGIucHJvcChcIm9mZnNldFdpZHRoXCIpLGhlaWdodDpnLmhlaWdodHx8Yi5wcm9wKFwib2Zmc2V0SGVpZ2h0XCIpLHRvcDpjLnRvcC1kLnRvcCxsZWZ0OmMubGVmdC1kLmxlZnR9fSxvZmZzZXQ6ZnVuY3Rpb24oYyl7dmFyIGQ9Y1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57d2lkdGg6ZC53aWR0aHx8Yy5wcm9wKFwib2Zmc2V0V2lkdGhcIiksaGVpZ2h0OmQuaGVpZ2h0fHxjLnByb3AoXCJvZmZzZXRIZWlnaHRcIiksdG9wOmQudG9wKyhiLnBhZ2VZT2Zmc2V0fHxhWzBdLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLGxlZnQ6ZC5sZWZ0KyhiLnBhZ2VYT2Zmc2V0fHxhWzBdLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KX19LHBvc2l0aW9uRWxlbWVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGgsaT1jLnNwbGl0KFwiLVwiKSxqPWlbMF0saz1pWzFdfHxcImNlbnRlclwiO2U9ZD90aGlzLm9mZnNldChhKTp0aGlzLnBvc2l0aW9uKGEpLGY9Yi5wcm9wKFwib2Zmc2V0V2lkdGhcIiksZz1iLnByb3AoXCJvZmZzZXRIZWlnaHRcIik7dmFyIGw9e2NlbnRlcjpmdW5jdGlvbigpe3JldHVybiBlLmxlZnQrZS53aWR0aC8yLWYvMn0sbGVmdDpmdW5jdGlvbigpe3JldHVybiBlLmxlZnR9LHJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIGUubGVmdCtlLndpZHRofX0sbT17Y2VudGVyOmZ1bmN0aW9uKCl7cmV0dXJuIGUudG9wK2UuaGVpZ2h0LzItZy8yfSx0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gZS50b3B9LGJvdHRvbTpmdW5jdGlvbigpe3JldHVybiBlLnRvcCtlLmhlaWdodH19O3N3aXRjaChqKXtjYXNlXCJyaWdodFwiOmg9e3RvcDptW2tdKCksbGVmdDpsW2pdKCl9O2JyZWFrO2Nhc2VcImxlZnRcIjpoPXt0b3A6bVtrXSgpLGxlZnQ6ZS5sZWZ0LWZ9O2JyZWFrO2Nhc2VcImJvdHRvbVwiOmg9e3RvcDptW2pdKCksbGVmdDpsW2tdKCl9O2JyZWFrO2RlZmF1bHQ6aD17dG9wOmUudG9wLWcsbGVmdDpsW2tdKCl9fXJldHVybiBofX19XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuZGF0ZXBpY2tlclwiLFtcInVpLmJvb3RzdHJhcC5kYXRlcGFyc2VyXCIsXCJ1aS5ib290c3RyYXAucG9zaXRpb25cIl0pLmNvbnN0YW50KFwiZGF0ZXBpY2tlckNvbmZpZ1wiLHtmb3JtYXREYXk6XCJkZFwiLGZvcm1hdE1vbnRoOlwiTU1NTVwiLGZvcm1hdFllYXI6XCJ5eXl5XCIsZm9ybWF0RGF5SGVhZGVyOlwiRUVFXCIsZm9ybWF0RGF5VGl0bGU6XCJNTU1NIHl5eXlcIixmb3JtYXRNb250aFRpdGxlOlwieXl5eVwiLGRhdGVwaWNrZXJNb2RlOlwiZGF5XCIsbWluTW9kZTpcImRheVwiLG1heE1vZGU6XCJ5ZWFyXCIsc2hvd1dlZWtzOiEwLHN0YXJ0aW5nRGF5OjAseWVhclJhbmdlOjIwLG1pbkRhdGU6bnVsbCxtYXhEYXRlOm51bGx9KS5jb250cm9sbGVyKFwiRGF0ZXBpY2tlckNvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwiJHBhcnNlXCIsXCIkaW50ZXJwb2xhdGVcIixcIiR0aW1lb3V0XCIsXCIkbG9nXCIsXCJkYXRlRmlsdGVyXCIsXCJkYXRlcGlja2VyQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxoKXt2YXIgaT10aGlzLGo9eyRzZXRWaWV3VmFsdWU6YW5ndWxhci5ub29wfTt0aGlzLm1vZGVzPVtcImRheVwiLFwibW9udGhcIixcInllYXJcIl0sYW5ndWxhci5mb3JFYWNoKFtcImZvcm1hdERheVwiLFwiZm9ybWF0TW9udGhcIixcImZvcm1hdFllYXJcIixcImZvcm1hdERheUhlYWRlclwiLFwiZm9ybWF0RGF5VGl0bGVcIixcImZvcm1hdE1vbnRoVGl0bGVcIixcIm1pbk1vZGVcIixcIm1heE1vZGVcIixcInNob3dXZWVrc1wiLFwic3RhcnRpbmdEYXlcIixcInllYXJSYW5nZVwiXSxmdW5jdGlvbihjLGUpe2lbY109YW5ndWxhci5pc0RlZmluZWQoYltjXSk/OD5lP2QoYltjXSkoYS4kcGFyZW50KTphLiRwYXJlbnQuJGV2YWwoYltjXSk6aFtjXX0pLGFuZ3VsYXIuZm9yRWFjaChbXCJtaW5EYXRlXCIsXCJtYXhEYXRlXCJdLGZ1bmN0aW9uKGQpe2JbZF0/YS4kcGFyZW50LiR3YXRjaChjKGJbZF0pLGZ1bmN0aW9uKGEpe2lbZF09YT9uZXcgRGF0ZShhKTpudWxsLGkucmVmcmVzaFZpZXcoKX0pOmlbZF09aFtkXT9uZXcgRGF0ZShoW2RdKTpudWxsfSksYS5kYXRlcGlja2VyTW9kZT1hLmRhdGVwaWNrZXJNb2RlfHxoLmRhdGVwaWNrZXJNb2RlLGEudW5pcXVlSWQ9XCJkYXRlcGlja2VyLVwiK2EuJGlkK1wiLVwiK01hdGguZmxvb3IoMWU0Kk1hdGgucmFuZG9tKCkpLHRoaXMuYWN0aXZlRGF0ZT1hbmd1bGFyLmlzRGVmaW5lZChiLmluaXREYXRlKT9hLiRwYXJlbnQuJGV2YWwoYi5pbml0RGF0ZSk6bmV3IERhdGUsYS5pc0FjdGl2ZT1mdW5jdGlvbihiKXtyZXR1cm4gMD09PWkuY29tcGFyZShiLmRhdGUsaS5hY3RpdmVEYXRlKT8oYS5hY3RpdmVEYXRlSWQ9Yi51aWQsITApOiExfSx0aGlzLmluaXQ9ZnVuY3Rpb24oYSl7aj1hLGouJHJlbmRlcj1mdW5jdGlvbigpe2kucmVuZGVyKCl9fSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe2lmKGouJG1vZGVsVmFsdWUpe3ZhciBhPW5ldyBEYXRlKGouJG1vZGVsVmFsdWUpLGI9IWlzTmFOKGEpO2I/dGhpcy5hY3RpdmVEYXRlPWE6Zi5lcnJvcignRGF0ZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJyksai4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsYil9dGhpcy5yZWZyZXNoVmlldygpfSx0aGlzLnJlZnJlc2hWaWV3PWZ1bmN0aW9uKCl7aWYodGhpcy5lbGVtZW50KXt0aGlzLl9yZWZyZXNoVmlldygpO3ZhciBhPWouJG1vZGVsVmFsdWU/bmV3IERhdGUoai4kbW9kZWxWYWx1ZSk6bnVsbDtqLiRzZXRWYWxpZGl0eShcImRhdGUtZGlzYWJsZWRcIiwhYXx8dGhpcy5lbGVtZW50JiYhdGhpcy5pc0Rpc2FibGVkKGEpKX19LHRoaXMuY3JlYXRlRGF0ZU9iamVjdD1mdW5jdGlvbihhLGIpe3ZhciBjPWouJG1vZGVsVmFsdWU/bmV3IERhdGUoai4kbW9kZWxWYWx1ZSk6bnVsbDtyZXR1cm57ZGF0ZTphLGxhYmVsOmcoYSxiKSxzZWxlY3RlZDpjJiYwPT09dGhpcy5jb21wYXJlKGEsYyksZGlzYWJsZWQ6dGhpcy5pc0Rpc2FibGVkKGEpLGN1cnJlbnQ6MD09PXRoaXMuY29tcGFyZShhLG5ldyBEYXRlKX19LHRoaXMuaXNEaXNhYmxlZD1mdW5jdGlvbihjKXtyZXR1cm4gdGhpcy5taW5EYXRlJiZ0aGlzLmNvbXBhcmUoYyx0aGlzLm1pbkRhdGUpPDB8fHRoaXMubWF4RGF0ZSYmdGhpcy5jb21wYXJlKGMsdGhpcy5tYXhEYXRlKT4wfHxiLmRhdGVEaXNhYmxlZCYmYS5kYXRlRGlzYWJsZWQoe2RhdGU6Yyxtb2RlOmEuZGF0ZXBpY2tlck1vZGV9KX0sdGhpcy5zcGxpdD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthLmxlbmd0aD4wOyljLnB1c2goYS5zcGxpY2UoMCxiKSk7cmV0dXJuIGN9LGEuc2VsZWN0PWZ1bmN0aW9uKGIpe2lmKGEuZGF0ZXBpY2tlck1vZGU9PT1pLm1pbk1vZGUpe3ZhciBjPWouJG1vZGVsVmFsdWU/bmV3IERhdGUoai4kbW9kZWxWYWx1ZSk6bmV3IERhdGUoMCwwLDAsMCwwLDAsMCk7Yy5zZXRGdWxsWWVhcihiLmdldEZ1bGxZZWFyKCksYi5nZXRNb250aCgpLGIuZ2V0RGF0ZSgpKSxqLiRzZXRWaWV3VmFsdWUoYyksai4kcmVuZGVyKCl9ZWxzZSBpLmFjdGl2ZURhdGU9YixhLmRhdGVwaWNrZXJNb2RlPWkubW9kZXNbaS5tb2Rlcy5pbmRleE9mKGEuZGF0ZXBpY2tlck1vZGUpLTFdfSxhLm1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9aS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkrYSooaS5zdGVwLnllYXJzfHwwKSxjPWkuYWN0aXZlRGF0ZS5nZXRNb250aCgpK2EqKGkuc3RlcC5tb250aHN8fDApO2kuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihiLGMsMSksaS5yZWZyZXNoVmlldygpfSxhLnRvZ2dsZU1vZGU9ZnVuY3Rpb24oYil7Yj1ifHwxLGEuZGF0ZXBpY2tlck1vZGU9PT1pLm1heE1vZGUmJjE9PT1ifHxhLmRhdGVwaWNrZXJNb2RlPT09aS5taW5Nb2RlJiYtMT09PWJ8fChhLmRhdGVwaWNrZXJNb2RlPWkubW9kZXNbaS5tb2Rlcy5pbmRleE9mKGEuZGF0ZXBpY2tlck1vZGUpK2JdKX0sYS5rZXlzPXsxMzpcImVudGVyXCIsMzI6XCJzcGFjZVwiLDMzOlwicGFnZXVwXCIsMzQ6XCJwYWdlZG93blwiLDM1OlwiZW5kXCIsMzY6XCJob21lXCIsMzc6XCJsZWZ0XCIsMzg6XCJ1cFwiLDM5OlwicmlnaHRcIiw0MDpcImRvd25cIn07dmFyIGs9ZnVuY3Rpb24oKXtlKGZ1bmN0aW9uKCl7aS5lbGVtZW50WzBdLmZvY3VzKCl9LDAsITEpfTthLiRvbihcImRhdGVwaWNrZXIuZm9jdXNcIixrKSxhLmtleWRvd249ZnVuY3Rpb24oYil7dmFyIGM9YS5rZXlzW2Iud2hpY2hdO2lmKGMmJiFiLnNoaWZ0S2V5JiYhYi5hbHRLZXkpaWYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCksXCJlbnRlclwiPT09Y3x8XCJzcGFjZVwiPT09Yyl7aWYoaS5pc0Rpc2FibGVkKGkuYWN0aXZlRGF0ZSkpcmV0dXJuO2Euc2VsZWN0KGkuYWN0aXZlRGF0ZSksaygpfWVsc2UhYi5jdHJsS2V5fHxcInVwXCIhPT1jJiZcImRvd25cIiE9PWM/KGkuaGFuZGxlS2V5RG93bihjLGIpLGkucmVmcmVzaFZpZXcoKSk6KGEudG9nZ2xlTW9kZShcInVwXCI9PT1jPzE6LTEpLGsoKSl9fV0pLmRpcmVjdGl2ZShcImRhdGVwaWNrZXJcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsc2NvcGU6e2RhdGVwaWNrZXJNb2RlOlwiPT9cIixkYXRlRGlzYWJsZWQ6XCImXCJ9LHJlcXVpcmU6W1wiZGF0ZXBpY2tlclwiLFwiP15uZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJEYXRlcGlja2VyQ29udHJvbGxlclwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZFswXSxmPWRbMV07ZiYmZS5pbml0KGYpfX19KS5kaXJlY3RpdmUoXCJkYXlwaWNrZXJcIixbXCJkYXRlRmlsdGVyXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLHJlcXVpcmU6XCJeZGF0ZXBpY2tlclwiLGxpbms6ZnVuY3Rpb24oYixjLGQsZSl7ZnVuY3Rpb24gZihhLGIpe3JldHVybiAxIT09Ynx8YSU0IT09MHx8YSUxMDA9PT0wJiZhJTQwMCE9PTA/aVtiXToyOX1mdW5jdGlvbiBnKGEsYil7dmFyIGM9bmV3IEFycmF5KGIpLGQ9bmV3IERhdGUoYSksZT0wO2ZvcihkLnNldEhvdXJzKDEyKTtiPmU7KWNbZSsrXT1uZXcgRGF0ZShkKSxkLnNldERhdGUoZC5nZXREYXRlKCkrMSk7cmV0dXJuIGN9ZnVuY3Rpb24gaChhKXt2YXIgYj1uZXcgRGF0ZShhKTtiLnNldERhdGUoYi5nZXREYXRlKCkrNC0oYi5nZXREYXkoKXx8NykpO3ZhciBjPWIuZ2V0VGltZSgpO3JldHVybiBiLnNldE1vbnRoKDApLGIuc2V0RGF0ZSgxKSxNYXRoLmZsb29yKE1hdGgucm91bmQoKGMtYikvODY0ZTUpLzcpKzF9Yi5zaG93V2Vla3M9ZS5zaG93V2Vla3MsZS5zdGVwPXttb250aHM6MX0sZS5lbGVtZW50PWM7dmFyIGk9WzMxLDI4LDMxLDMwLDMxLDMwLDMxLDMxLDMwLDMxLDMwLDMxXTtlLl9yZWZyZXNoVmlldz1mdW5jdGlvbigpe3ZhciBjPWUuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLGQ9ZS5hY3RpdmVEYXRlLmdldE1vbnRoKCksZj1uZXcgRGF0ZShjLGQsMSksaT1lLnN0YXJ0aW5nRGF5LWYuZ2V0RGF5KCksaj1pPjA/Ny1pOi1pLGs9bmV3IERhdGUoZik7aj4wJiZrLnNldERhdGUoLWorMSk7Zm9yKHZhciBsPWcoayw0MiksbT0wOzQyPm07bSsrKWxbbV09YW5ndWxhci5leHRlbmQoZS5jcmVhdGVEYXRlT2JqZWN0KGxbbV0sZS5mb3JtYXREYXkpLHtzZWNvbmRhcnk6bFttXS5nZXRNb250aCgpIT09ZCx1aWQ6Yi51bmlxdWVJZCtcIi1cIittfSk7Yi5sYWJlbHM9bmV3IEFycmF5KDcpO2Zvcih2YXIgbj0wOzc+bjtuKyspYi5sYWJlbHNbbl09e2FiYnI6YShsW25dLmRhdGUsZS5mb3JtYXREYXlIZWFkZXIpLGZ1bGw6YShsW25dLmRhdGUsXCJFRUVFXCIpfTtpZihiLnRpdGxlPWEoZS5hY3RpdmVEYXRlLGUuZm9ybWF0RGF5VGl0bGUpLGIucm93cz1lLnNwbGl0KGwsNyksYi5zaG93V2Vla3Mpe2Iud2Vla051bWJlcnM9W107Zm9yKHZhciBvPWgoYi5yb3dzWzBdWzBdLmRhdGUpLHA9Yi5yb3dzLmxlbmd0aDtiLndlZWtOdW1iZXJzLnB1c2gobysrKTxwOyk7fX0sZS5jb21wYXJlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpLW5ldyBEYXRlKGIuZ2V0RnVsbFllYXIoKSxiLmdldE1vbnRoKCksYi5nZXREYXRlKCkpfSxlLmhhbmRsZUtleURvd249ZnVuY3Rpb24oYSl7dmFyIGI9ZS5hY3RpdmVEYXRlLmdldERhdGUoKTtpZihcImxlZnRcIj09PWEpYi09MTtlbHNlIGlmKFwidXBcIj09PWEpYi09NztlbHNlIGlmKFwicmlnaHRcIj09PWEpYis9MTtlbHNlIGlmKFwiZG93blwiPT09YSliKz03O2Vsc2UgaWYoXCJwYWdldXBcIj09PWF8fFwicGFnZWRvd25cIj09PWEpe3ZhciBjPWUuYWN0aXZlRGF0ZS5nZXRNb250aCgpKyhcInBhZ2V1cFwiPT09YT8tMToxKTtlLmFjdGl2ZURhdGUuc2V0TW9udGgoYywxKSxiPU1hdGgubWluKGYoZS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksZS5hY3RpdmVEYXRlLmdldE1vbnRoKCkpLGIpfWVsc2VcImhvbWVcIj09PWE/Yj0xOlwiZW5kXCI9PT1hJiYoYj1mKGUuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpLGUuYWN0aXZlRGF0ZS5nZXRNb250aCgpKSk7ZS5hY3RpdmVEYXRlLnNldERhdGUoYil9LGUucmVmcmVzaFZpZXcoKX19fV0pLmRpcmVjdGl2ZShcIm1vbnRocGlja2VyXCIsW1wiZGF0ZUZpbHRlclwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLHJlcXVpcmU6XCJeZGF0ZXBpY2tlclwiLGxpbms6ZnVuY3Rpb24oYixjLGQsZSl7ZS5zdGVwPXt5ZWFyczoxfSxlLmVsZW1lbnQ9YyxlLl9yZWZyZXNoVmlldz1mdW5jdGlvbigpe2Zvcih2YXIgYz1uZXcgQXJyYXkoMTIpLGQ9ZS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksZj0wOzEyPmY7ZisrKWNbZl09YW5ndWxhci5leHRlbmQoZS5jcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKGQsZiwxKSxlLmZvcm1hdE1vbnRoKSx7dWlkOmIudW5pcXVlSWQrXCItXCIrZn0pO2IudGl0bGU9YShlLmFjdGl2ZURhdGUsZS5mb3JtYXRNb250aFRpdGxlKSxiLnJvd3M9ZS5zcGxpdChjLDMpfSxlLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSktbmV3IERhdGUoYi5nZXRGdWxsWWVhcigpLGIuZ2V0TW9udGgoKSl9LGUuaGFuZGxlS2V5RG93bj1mdW5jdGlvbihhKXt2YXIgYj1lLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtpZihcImxlZnRcIj09PWEpYi09MTtlbHNlIGlmKFwidXBcIj09PWEpYi09MztlbHNlIGlmKFwicmlnaHRcIj09PWEpYis9MTtlbHNlIGlmKFwiZG93blwiPT09YSliKz0zO2Vsc2UgaWYoXCJwYWdldXBcIj09PWF8fFwicGFnZWRvd25cIj09PWEpe3ZhciBjPWUuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKyhcInBhZ2V1cFwiPT09YT8tMToxKTtlLmFjdGl2ZURhdGUuc2V0RnVsbFllYXIoYyl9ZWxzZVwiaG9tZVwiPT09YT9iPTA6XCJlbmRcIj09PWEmJihiPTExKTtlLmFjdGl2ZURhdGUuc2V0TW9udGgoYil9LGUucmVmcmVzaFZpZXcoKX19fV0pLmRpcmVjdGl2ZShcInllYXJwaWNrZXJcIixbXCJkYXRlRmlsdGVyXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3llYXIuaHRtbFwiLHJlcXVpcmU6XCJeZGF0ZXBpY2tlclwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZShhKXtyZXR1cm4gcGFyc2VJbnQoKGEtMSkvZiwxMCkqZisxfXZhciBmPWQueWVhclJhbmdlO2Quc3RlcD17eWVhcnM6Zn0sZC5lbGVtZW50PWIsZC5fcmVmcmVzaFZpZXc9ZnVuY3Rpb24oKXtmb3IodmFyIGI9bmV3IEFycmF5KGYpLGM9MCxnPWUoZC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO2Y+YztjKyspYltjXT1hbmd1bGFyLmV4dGVuZChkLmNyZWF0ZURhdGVPYmplY3QobmV3IERhdGUoZytjLDAsMSksZC5mb3JtYXRZZWFyKSx7dWlkOmEudW5pcXVlSWQrXCItXCIrY30pO2EudGl0bGU9W2JbMF0ubGFiZWwsYltmLTFdLmxhYmVsXS5qb2luKFwiIC0gXCIpLGEucm93cz1kLnNwbGl0KGIsNSl9LGQuY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiBhLmdldEZ1bGxZZWFyKCktYi5nZXRGdWxsWWVhcigpfSxkLmhhbmRsZUtleURvd249ZnVuY3Rpb24oYSl7dmFyIGI9ZC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XCJsZWZ0XCI9PT1hP2ItPTE6XCJ1cFwiPT09YT9iLT01OlwicmlnaHRcIj09PWE/Yis9MTpcImRvd25cIj09PWE/Yis9NTpcInBhZ2V1cFwiPT09YXx8XCJwYWdlZG93blwiPT09YT9iKz0oXCJwYWdldXBcIj09PWE/LTE6MSkqZC5zdGVwLnllYXJzOlwiaG9tZVwiPT09YT9iPWUoZC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpOlwiZW5kXCI9PT1hJiYoYj1lKGQuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKStmLTEpLGQuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihiKX0sZC5yZWZyZXNoVmlldygpfX19XSkuY29uc3RhbnQoXCJkYXRlcGlja2VyUG9wdXBDb25maWdcIix7ZGF0ZXBpY2tlclBvcHVwOlwieXl5eS1NTS1kZFwiLGN1cnJlbnRUZXh0OlwiVG9kYXlcIixjbGVhclRleHQ6XCJDbGVhclwiLGNsb3NlVGV4dDpcIkRvbmVcIixjbG9zZU9uRGF0ZVNlbGVjdGlvbjohMCxhcHBlbmRUb0JvZHk6ITEsc2hvd0J1dHRvbkJhcjohMH0pLmRpcmVjdGl2ZShcImRhdGVwaWNrZXJQb3B1cFwiLFtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixcIiRkb2N1bWVudFwiLFwiJHBvc2l0aW9uXCIsXCJkYXRlRmlsdGVyXCIsXCJkYXRlUGFyc2VyXCIsXCJkYXRlcGlja2VyUG9wdXBDb25maWdcIixmdW5jdGlvbihhLGIsYyxkLGUsZixnKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcXVpcmU6XCJuZ01vZGVsXCIsc2NvcGU6e2lzT3BlbjpcIj0/XCIsY3VycmVudFRleHQ6XCJAXCIsY2xlYXJUZXh0OlwiQFwiLGNsb3NlVGV4dDpcIkBcIixkYXRlRGlzYWJsZWQ6XCImXCJ9LGxpbms6ZnVuY3Rpb24oaCxpLGosayl7ZnVuY3Rpb24gbChhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oYSl7cmV0dXJuXCItXCIrYS50b0xvd2VyQ2FzZSgpfSl9ZnVuY3Rpb24gbShhKXtpZihhKXtpZihhbmd1bGFyLmlzRGF0ZShhKSYmIWlzTmFOKGEpKXJldHVybiBrLiRzZXRWYWxpZGl0eShcImRhdGVcIiwhMCksYTtpZihhbmd1bGFyLmlzU3RyaW5nKGEpKXt2YXIgYj1mLnBhcnNlKGEsbil8fG5ldyBEYXRlKGEpO3JldHVybiBpc05hTihiKT92b2lkIGsuJHNldFZhbGlkaXR5KFwiZGF0ZVwiLCExKTooay4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsITApLGIpfXJldHVybiB2b2lkIGsuJHNldFZhbGlkaXR5KFwiZGF0ZVwiLCExKX1yZXR1cm4gay4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsITApLG51bGx9dmFyIG4sbz1hbmd1bGFyLmlzRGVmaW5lZChqLmNsb3NlT25EYXRlU2VsZWN0aW9uKT9oLiRwYXJlbnQuJGV2YWwoai5jbG9zZU9uRGF0ZVNlbGVjdGlvbik6Zy5jbG9zZU9uRGF0ZVNlbGVjdGlvbixwPWFuZ3VsYXIuaXNEZWZpbmVkKGouZGF0ZXBpY2tlckFwcGVuZFRvQm9keSk/aC4kcGFyZW50LiRldmFsKGouZGF0ZXBpY2tlckFwcGVuZFRvQm9keSk6Zy5hcHBlbmRUb0JvZHk7aC5zaG93QnV0dG9uQmFyPWFuZ3VsYXIuaXNEZWZpbmVkKGouc2hvd0J1dHRvbkJhcik/aC4kcGFyZW50LiRldmFsKGouc2hvd0J1dHRvbkJhcik6Zy5zaG93QnV0dG9uQmFyLGguZ2V0VGV4dD1mdW5jdGlvbihhKXtyZXR1cm4gaFthK1wiVGV4dFwiXXx8Z1thK1wiVGV4dFwiXX0sai4kb2JzZXJ2ZShcImRhdGVwaWNrZXJQb3B1cFwiLGZ1bmN0aW9uKGEpe249YXx8Zy5kYXRlcGlja2VyUG9wdXAsay4kcmVuZGVyKCl9KTt2YXIgcT1hbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IGRhdGVwaWNrZXItcG9wdXAtd3JhcD48ZGl2IGRhdGVwaWNrZXI+PC9kaXY+PC9kaXY+XCIpO3EuYXR0cih7XCJuZy1tb2RlbFwiOlwiZGF0ZVwiLFwibmctY2hhbmdlXCI6XCJkYXRlU2VsZWN0aW9uKClcIn0pO3ZhciByPWFuZ3VsYXIuZWxlbWVudChxLmNoaWxkcmVuKClbMF0pO2ouZGF0ZXBpY2tlck9wdGlvbnMmJmFuZ3VsYXIuZm9yRWFjaChoLiRwYXJlbnQuJGV2YWwoai5kYXRlcGlja2VyT3B0aW9ucyksZnVuY3Rpb24oYSxiKXtyLmF0dHIobChiKSxhKX0pLGgud2F0Y2hEYXRhPXt9LGFuZ3VsYXIuZm9yRWFjaChbXCJtaW5EYXRlXCIsXCJtYXhEYXRlXCIsXCJkYXRlcGlja2VyTW9kZVwiXSxmdW5jdGlvbihhKXtpZihqW2FdKXt2YXIgYz1iKGpbYV0pO2lmKGguJHBhcmVudC4kd2F0Y2goYyxmdW5jdGlvbihiKXtoLndhdGNoRGF0YVthXT1ifSksci5hdHRyKGwoYSksXCJ3YXRjaERhdGEuXCIrYSksXCJkYXRlcGlja2VyTW9kZVwiPT09YSl7dmFyIGQ9Yy5hc3NpZ247aC4kd2F0Y2goXCJ3YXRjaERhdGEuXCIrYSxmdW5jdGlvbihhLGIpe2EhPT1iJiZkKGguJHBhcmVudCxhKX0pfX19KSxqLmRhdGVEaXNhYmxlZCYmci5hdHRyKFwiZGF0ZS1kaXNhYmxlZFwiLFwiZGF0ZURpc2FibGVkKHsgZGF0ZTogZGF0ZSwgbW9kZTogbW9kZSB9KVwiKSxrLiRwYXJzZXJzLnVuc2hpZnQobSksaC5kYXRlU2VsZWN0aW9uPWZ1bmN0aW9uKGEpe2FuZ3VsYXIuaXNEZWZpbmVkKGEpJiYoaC5kYXRlPWEpLGsuJHNldFZpZXdWYWx1ZShoLmRhdGUpLGsuJHJlbmRlcigpLG8mJihoLmlzT3Blbj0hMSxpWzBdLmZvY3VzKCkpfSxpLmJpbmQoXCJpbnB1dCBjaGFuZ2Uga2V5dXBcIixmdW5jdGlvbigpe2guJGFwcGx5KGZ1bmN0aW9uKCl7aC5kYXRlPWsuJG1vZGVsVmFsdWV9KX0pLGsuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPWsuJHZpZXdWYWx1ZT9lKGsuJHZpZXdWYWx1ZSxuKTpcIlwiO2kudmFsKGEpLGguZGF0ZT1tKGsuJG1vZGVsVmFsdWUpfTt2YXIgcz1mdW5jdGlvbihhKXtoLmlzT3BlbiYmYS50YXJnZXQhPT1pWzBdJiZoLiRhcHBseShmdW5jdGlvbigpe2guaXNPcGVuPSExfSl9LHQ9ZnVuY3Rpb24oYSl7aC5rZXlkb3duKGEpfTtpLmJpbmQoXCJrZXlkb3duXCIsdCksaC5rZXlkb3duPWZ1bmN0aW9uKGEpezI3PT09YS53aGljaD8oYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksaC5jbG9zZSgpKTo0MCE9PWEud2hpY2h8fGguaXNPcGVufHwoaC5pc09wZW49ITApfSxoLiR3YXRjaChcImlzT3BlblwiLGZ1bmN0aW9uKGEpe2E/KGguJGJyb2FkY2FzdChcImRhdGVwaWNrZXIuZm9jdXNcIiksaC5wb3NpdGlvbj1wP2Qub2Zmc2V0KGkpOmQucG9zaXRpb24oaSksaC5wb3NpdGlvbi50b3A9aC5wb3NpdGlvbi50b3AraS5wcm9wKFwib2Zmc2V0SGVpZ2h0XCIpLGMuYmluZChcImNsaWNrXCIscykpOmMudW5iaW5kKFwiY2xpY2tcIixzKX0pLGguc2VsZWN0PWZ1bmN0aW9uKGEpe2lmKFwidG9kYXlcIj09PWEpe3ZhciBiPW5ldyBEYXRlO2FuZ3VsYXIuaXNEYXRlKGsuJG1vZGVsVmFsdWUpPyhhPW5ldyBEYXRlKGsuJG1vZGVsVmFsdWUpLGEuc2V0RnVsbFllYXIoYi5nZXRGdWxsWWVhcigpLGIuZ2V0TW9udGgoKSxiLmdldERhdGUoKSkpOmE9bmV3IERhdGUoYi5zZXRIb3VycygwLDAsMCwwKSl9aC5kYXRlU2VsZWN0aW9uKGEpfSxoLmNsb3NlPWZ1bmN0aW9uKCl7aC5pc09wZW49ITEsaVswXS5mb2N1cygpfTt2YXIgdT1hKHEpKGgpO3EucmVtb3ZlKCkscD9jLmZpbmQoXCJib2R5XCIpLmFwcGVuZCh1KTppLmFmdGVyKHUpLGguJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe3UucmVtb3ZlKCksaS51bmJpbmQoXCJrZXlkb3duXCIsdCksYy51bmJpbmQoXCJjbGlja1wiLHMpfSl9fX1dKS5kaXJlY3RpdmUoXCJkYXRlcGlja2VyUG9wdXBXcmFwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdHJhbnNjbHVkZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiKXtiLmJpbmQoXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpfSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmRyb3Bkb3duXCIsW10pLmNvbnN0YW50KFwiZHJvcGRvd25Db25maWdcIix7b3BlbkNsYXNzOlwib3BlblwifSkuc2VydmljZShcImRyb3Bkb3duU2VydmljZVwiLFtcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGEpe3ZhciBiPW51bGw7dGhpcy5vcGVuPWZ1bmN0aW9uKGUpe2J8fChhLmJpbmQoXCJjbGlja1wiLGMpLGEuYmluZChcImtleWRvd25cIixkKSksYiYmYiE9PWUmJihiLmlzT3Blbj0hMSksYj1lfSx0aGlzLmNsb3NlPWZ1bmN0aW9uKGUpe2I9PT1lJiYoYj1udWxsLGEudW5iaW5kKFwiY2xpY2tcIixjKSxhLnVuYmluZChcImtleWRvd25cIixkKSl9O3ZhciBjPWZ1bmN0aW9uKGEpe3ZhciBjPWIuZ2V0VG9nZ2xlRWxlbWVudCgpO2EmJmMmJmNbMF0uY29udGFpbnMoYS50YXJnZXQpfHxiLiRhcHBseShmdW5jdGlvbigpe2IuaXNPcGVuPSExfSl9LGQ9ZnVuY3Rpb24oYSl7Mjc9PT1hLndoaWNoJiYoYi5mb2N1c1RvZ2dsZUVsZW1lbnQoKSxjKCkpfX1dKS5jb250cm9sbGVyKFwiRHJvcGRvd25Db250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcIiRwYXJzZVwiLFwiZHJvcGRvd25Db25maWdcIixcImRyb3Bkb3duU2VydmljZVwiLFwiJGFuaW1hdGVcIixmdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGcsaD10aGlzLGk9YS4kbmV3KCksaj1kLm9wZW5DbGFzcyxrPWFuZ3VsYXIubm9vcCxsPWIub25Ub2dnbGU/YyhiLm9uVG9nZ2xlKTphbmd1bGFyLm5vb3A7dGhpcy5pbml0PWZ1bmN0aW9uKGQpe2guJGVsZW1lbnQ9ZCxiLmlzT3BlbiYmKGc9YyhiLmlzT3Blbiksaz1nLmFzc2lnbixhLiR3YXRjaChnLGZ1bmN0aW9uKGEpe2kuaXNPcGVuPSEhYX0pKX0sdGhpcy50b2dnbGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGkuaXNPcGVuPWFyZ3VtZW50cy5sZW5ndGg/ISFhOiFpLmlzT3Blbn0sdGhpcy5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4gaS5pc09wZW59LGkuZ2V0VG9nZ2xlRWxlbWVudD1mdW5jdGlvbigpe3JldHVybiBoLnRvZ2dsZUVsZW1lbnR9LGkuZm9jdXNUb2dnbGVFbGVtZW50PWZ1bmN0aW9uKCl7aC50b2dnbGVFbGVtZW50JiZoLnRvZ2dsZUVsZW1lbnRbMF0uZm9jdXMoKX0saS4kd2F0Y2goXCJpc09wZW5cIixmdW5jdGlvbihiLGMpe2ZbYj9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShoLiRlbGVtZW50LGopLGI/KGkuZm9jdXNUb2dnbGVFbGVtZW50KCksZS5vcGVuKGkpKTplLmNsb3NlKGkpLGsoYSxiKSxhbmd1bGFyLmlzRGVmaW5lZChiKSYmYiE9PWMmJmwoYSx7b3BlbjohIWJ9KX0pLGEuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLGZ1bmN0aW9uKCl7aS5pc09wZW49ITF9KSxhLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtpLiRkZXN0cm95KCl9KX1dKS5kaXJlY3RpdmUoXCJkcm9wZG93blwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQ0FcIixjb250cm9sbGVyOlwiRHJvcGRvd25Db250cm9sbGVyXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtkLmluaXQoYil9fX0pLmRpcmVjdGl2ZShcImRyb3Bkb3duVG9nZ2xlXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJDQVwiLHJlcXVpcmU6XCI/XmRyb3Bkb3duXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtpZihkKXtkLnRvZ2dsZUVsZW1lbnQ9Yjt2YXIgZT1mdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksYi5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHxjLmRpc2FibGVkfHxhLiRhcHBseShmdW5jdGlvbigpe2QudG9nZ2xlKCl9KX07Yi5iaW5kKFwiY2xpY2tcIixlKSxiLmF0dHIoe1wiYXJpYS1oYXNwb3B1cFwiOiEwLFwiYXJpYS1leHBhbmRlZFwiOiExfSksYS4kd2F0Y2goZC5pc09wZW4sZnVuY3Rpb24oYSl7Yi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEhYSl9KSxhLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtiLnVuYmluZChcImNsaWNrXCIsZSl9KX19fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLm1vZGFsXCIsW1widWkuYm9vdHN0cmFwLnRyYW5zaXRpb25cIl0pLmZhY3RvcnkoXCIkJHN0YWNrZWRNYXBcIixmdW5jdGlvbigpe3JldHVybntjcmVhdGVOZXc6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm57YWRkOmZ1bmN0aW9uKGIsYyl7YS5wdXNoKHtrZXk6Yix2YWx1ZTpjfSl9LGdldDpmdW5jdGlvbihiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihiPT1hW2NdLmtleSlyZXR1cm4gYVtjXX0sa2V5czpmdW5jdGlvbigpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspYi5wdXNoKGFbY10ua2V5KTtyZXR1cm4gYn0sdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIGFbYS5sZW5ndGgtMV19LHJlbW92ZTpmdW5jdGlvbihiKXtmb3IodmFyIGM9LTEsZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKGI9PWFbZF0ua2V5KXtjPWQ7YnJlYWt9cmV0dXJuIGEuc3BsaWNlKGMsMSlbMF19LHJlbW92ZVRvcDpmdW5jdGlvbigpe3JldHVybiBhLnNwbGljZShhLmxlbmd0aC0xLDEpWzBdfSxsZW5ndGg6ZnVuY3Rpb24oKXtyZXR1cm4gYS5sZW5ndGh9fX19fSkuZGlyZWN0aXZlKFwibW9kYWxCYWNrZHJvcFwiLFtcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYixjLGQpe2IuYmFja2Ryb3BDbGFzcz1kLmJhY2tkcm9wQ2xhc3N8fFwiXCIsYi5hbmltYXRlPSExLGEoZnVuY3Rpb24oKXtiLmFuaW1hdGU9ITB9KX19fV0pLmRpcmVjdGl2ZShcIm1vZGFsV2luZG93XCIsW1wiJG1vZGFsU3RhY2tcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYSxiKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOntpbmRleDpcIkBcIixhbmltYXRlOlwiPVwifSxyZXBsYWNlOiEwLHRyYW5zY2x1ZGU6ITAsdGVtcGxhdGVVcmw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50ZW1wbGF0ZVVybHx8XCJ0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwifSxsaW5rOmZ1bmN0aW9uKGMsZCxlKXtkLmFkZENsYXNzKGUud2luZG93Q2xhc3N8fFwiXCIpLGMuc2l6ZT1lLnNpemUsYihmdW5jdGlvbigpe2MuYW5pbWF0ZT0hMCxkWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbYXV0b2ZvY3VzXVwiKS5sZW5ndGh8fGRbMF0uZm9jdXMoKX0pLGMuY2xvc2U9ZnVuY3Rpb24oYil7dmFyIGM9YS5nZXRUb3AoKTtjJiZjLnZhbHVlLmJhY2tkcm9wJiZcInN0YXRpY1wiIT1jLnZhbHVlLmJhY2tkcm9wJiZiLnRhcmdldD09PWIuY3VycmVudFRhcmdldCYmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLGEuZGlzbWlzcyhjLmtleSxcImJhY2tkcm9wIGNsaWNrXCIpKX19fX1dKS5kaXJlY3RpdmUoXCJtb2RhbFRyYW5zY2x1ZGVcIixmdW5jdGlvbigpe3JldHVybntsaW5rOmZ1bmN0aW9uKGEsYixjLGQsZSl7ZShhLiRwYXJlbnQsZnVuY3Rpb24oYSl7Yi5lbXB0eSgpLGIuYXBwZW5kKGEpfSl9fX0pLmZhY3RvcnkoXCIkbW9kYWxTdGFja1wiLFtcIiR0cmFuc2l0aW9uXCIsXCIkdGltZW91dFwiLFwiJGRvY3VtZW50XCIsXCIkY29tcGlsZVwiLFwiJHJvb3RTY29wZVwiLFwiJCRzdGFja2VkTWFwXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYpe2Z1bmN0aW9uIGcoKXtmb3IodmFyIGE9LTEsYj1uLmtleXMoKSxjPTA7YzxiLmxlbmd0aDtjKyspbi5nZXQoYltjXSkudmFsdWUuYmFja2Ryb3AmJihhPWMpO3JldHVybiBhfWZ1bmN0aW9uIGgoYSl7dmFyIGI9Yy5maW5kKFwiYm9keVwiKS5lcSgwKSxkPW4uZ2V0KGEpLnZhbHVlO24ucmVtb3ZlKGEpLGooZC5tb2RhbERvbUVsLGQubW9kYWxTY29wZSwzMDAsZnVuY3Rpb24oKXtkLm1vZGFsU2NvcGUuJGRlc3Ryb3koKSxiLnRvZ2dsZUNsYXNzKG0sbi5sZW5ndGgoKT4wKSxpKCl9KX1mdW5jdGlvbiBpKCl7aWYoayYmLTE9PWcoKSl7dmFyIGE9bDtqKGssbCwxNTAsZnVuY3Rpb24oKXthLiRkZXN0cm95KCksYT1udWxsfSksaz12b2lkIDAsbD12b2lkIDB9fWZ1bmN0aW9uIGooYyxkLGUsZil7ZnVuY3Rpb24gZygpe2cuZG9uZXx8KGcuZG9uZT0hMCxjLnJlbW92ZSgpLGYmJmYoKSl9ZC5hbmltYXRlPSExO3ZhciBoPWEudHJhbnNpdGlvbkVuZEV2ZW50TmFtZTtpZihoKXt2YXIgaT1iKGcsZSk7Yy5iaW5kKGgsZnVuY3Rpb24oKXtiLmNhbmNlbChpKSxnKCksZC4kYXBwbHkoKX0pfWVsc2UgYihnKX12YXIgayxsLG09XCJtb2RhbC1vcGVuXCIsbj1mLmNyZWF0ZU5ldygpLG89e307cmV0dXJuIGUuJHdhdGNoKGcsZnVuY3Rpb24oYSl7bCYmKGwuaW5kZXg9YSl9KSxjLmJpbmQoXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7dmFyIGI7Mjc9PT1hLndoaWNoJiYoYj1uLnRvcCgpLGImJmIudmFsdWUua2V5Ym9hcmQmJihhLnByZXZlbnREZWZhdWx0KCksZS4kYXBwbHkoZnVuY3Rpb24oKXtvLmRpc21pc3MoYi5rZXksXCJlc2NhcGUga2V5IHByZXNzXCIpfSkpKX0pLG8ub3Blbj1mdW5jdGlvbihhLGIpe24uYWRkKGEse2RlZmVycmVkOmIuZGVmZXJyZWQsbW9kYWxTY29wZTpiLnNjb3BlLGJhY2tkcm9wOmIuYmFja2Ryb3Asa2V5Ym9hcmQ6Yi5rZXlib2FyZH0pO3ZhciBmPWMuZmluZChcImJvZHlcIikuZXEoMCksaD1nKCk7aWYoaD49MCYmIWspe2w9ZS4kbmV3KCEwKSxsLmluZGV4PWg7dmFyIGk9YW5ndWxhci5lbGVtZW50KFwiPGRpdiBtb2RhbC1iYWNrZHJvcD48L2Rpdj5cIik7aS5hdHRyKFwiYmFja2Ryb3AtY2xhc3NcIixiLmJhY2tkcm9wQ2xhc3MpLGs9ZChpKShsKSxmLmFwcGVuZChrKX12YXIgaj1hbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IG1vZGFsLXdpbmRvdz48L2Rpdj5cIik7ai5hdHRyKHtcInRlbXBsYXRlLXVybFwiOmIud2luZG93VGVtcGxhdGVVcmwsXCJ3aW5kb3ctY2xhc3NcIjpiLndpbmRvd0NsYXNzLHNpemU6Yi5zaXplLGluZGV4Om4ubGVuZ3RoKCktMSxhbmltYXRlOlwiYW5pbWF0ZVwifSkuaHRtbChiLmNvbnRlbnQpO3ZhciBvPWQoaikoYi5zY29wZSk7bi50b3AoKS52YWx1ZS5tb2RhbERvbUVsPW8sZi5hcHBlbmQobyksZi5hZGRDbGFzcyhtKX0sby5jbG9zZT1mdW5jdGlvbihhLGIpe3ZhciBjPW4uZ2V0KGEpO2MmJihjLnZhbHVlLmRlZmVycmVkLnJlc29sdmUoYiksaChhKSl9LG8uZGlzbWlzcz1mdW5jdGlvbihhLGIpe3ZhciBjPW4uZ2V0KGEpO2MmJihjLnZhbHVlLmRlZmVycmVkLnJlamVjdChiKSxoKGEpKX0sby5kaXNtaXNzQWxsPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzLmdldFRvcCgpO2I7KXRoaXMuZGlzbWlzcyhiLmtleSxhKSxiPXRoaXMuZ2V0VG9wKCl9LG8uZ2V0VG9wPWZ1bmN0aW9uKCl7cmV0dXJuIG4udG9wKCl9LG99XSkucHJvdmlkZXIoXCIkbW9kYWxcIixmdW5jdGlvbigpe3ZhciBhPXtvcHRpb25zOntiYWNrZHJvcDohMCxrZXlib2FyZDohMH0sJGdldDpbXCIkaW5qZWN0b3JcIixcIiRyb290U2NvcGVcIixcIiRxXCIsXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRjb250cm9sbGVyXCIsXCIkbW9kYWxTdGFja1wiLGZ1bmN0aW9uKGIsYyxkLGUsZixnLGgpe2Z1bmN0aW9uIGkoYSl7cmV0dXJuIGEudGVtcGxhdGU/ZC53aGVuKGEudGVtcGxhdGUpOmUuZ2V0KGFuZ3VsYXIuaXNGdW5jdGlvbihhLnRlbXBsYXRlVXJsKT9hLnRlbXBsYXRlVXJsKCk6YS50ZW1wbGF0ZVVybCx7Y2FjaGU6Zn0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGF0YX0pfWZ1bmN0aW9uIGooYSl7dmFyIGM9W107cmV0dXJuIGFuZ3VsYXIuZm9yRWFjaChhLGZ1bmN0aW9uKGEpeyhhbmd1bGFyLmlzRnVuY3Rpb24oYSl8fGFuZ3VsYXIuaXNBcnJheShhKSkmJmMucHVzaChkLndoZW4oYi5pbnZva2UoYSkpKX0pLGN9dmFyIGs9e307cmV0dXJuIGsub3Blbj1mdW5jdGlvbihiKXt2YXIgZT1kLmRlZmVyKCksZj1kLmRlZmVyKCksaz17cmVzdWx0OmUucHJvbWlzZSxvcGVuZWQ6Zi5wcm9taXNlLGNsb3NlOmZ1bmN0aW9uKGEpe2guY2xvc2UoayxhKX0sZGlzbWlzczpmdW5jdGlvbihhKXtoLmRpc21pc3MoayxhKX19O2lmKGI9YW5ndWxhci5leHRlbmQoe30sYS5vcHRpb25zLGIpLGIucmVzb2x2ZT1iLnJlc29sdmV8fHt9LCFiLnRlbXBsYXRlJiYhYi50ZW1wbGF0ZVVybCl0aHJvdyBuZXcgRXJyb3IoXCJPbmUgb2YgdGVtcGxhdGUgb3IgdGVtcGxhdGVVcmwgb3B0aW9ucyBpcyByZXF1aXJlZC5cIik7dmFyIGw9ZC5hbGwoW2koYildLmNvbmNhdChqKGIucmVzb2x2ZSkpKTtyZXR1cm4gbC50aGVuKGZ1bmN0aW9uKGEpe3ZhciBkPShiLnNjb3BlfHxjKS4kbmV3KCk7ZC4kY2xvc2U9ay5jbG9zZSxkLiRkaXNtaXNzPWsuZGlzbWlzczt2YXIgZixpPXt9LGo9MTtiLmNvbnRyb2xsZXImJihpLiRzY29wZT1kLGkuJG1vZGFsSW5zdGFuY2U9ayxhbmd1bGFyLmZvckVhY2goYi5yZXNvbHZlLGZ1bmN0aW9uKGIsYyl7aVtjXT1hW2orK119KSxmPWcoYi5jb250cm9sbGVyLGkpLGIuY29udHJvbGxlckFzJiYoZFtiLmNvbnRyb2xsZXJBc109ZikpLGgub3BlbihrLHtzY29wZTpkLGRlZmVycmVkOmUsY29udGVudDphWzBdLGJhY2tkcm9wOmIuYmFja2Ryb3Asa2V5Ym9hcmQ6Yi5rZXlib2FyZCxiYWNrZHJvcENsYXNzOmIuYmFja2Ryb3BDbGFzcyx3aW5kb3dDbGFzczpiLndpbmRvd0NsYXNzLHdpbmRvd1RlbXBsYXRlVXJsOmIud2luZG93VGVtcGxhdGVVcmwsc2l6ZTpiLnNpemV9KX0sZnVuY3Rpb24oYSl7ZS5yZWplY3QoYSl9KSxsLnRoZW4oZnVuY3Rpb24oKXtmLnJlc29sdmUoITApfSxmdW5jdGlvbigpe2YucmVqZWN0KCExKX0pLGt9LGt9XX07cmV0dXJuIGF9KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5wYWdpbmF0aW9uXCIsW10pLmNvbnRyb2xsZXIoXCJQYWdpbmF0aW9uQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPXskc2V0Vmlld1ZhbHVlOmFuZ3VsYXIubm9vcH0sZj1iLm51bVBhZ2VzP2MoYi5udW1QYWdlcykuYXNzaWduOmFuZ3VsYXIubm9vcDt0aGlzLmluaXQ9ZnVuY3Rpb24oZixnKXtlPWYsdGhpcy5jb25maWc9ZyxlLiRyZW5kZXI9ZnVuY3Rpb24oKXtkLnJlbmRlcigpfSxiLml0ZW1zUGVyUGFnZT9hLiRwYXJlbnQuJHdhdGNoKGMoYi5pdGVtc1BlclBhZ2UpLGZ1bmN0aW9uKGIpe2QuaXRlbXNQZXJQYWdlPXBhcnNlSW50KGIsMTApLGEudG90YWxQYWdlcz1kLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKX0pOnRoaXMuaXRlbXNQZXJQYWdlPWcuaXRlbXNQZXJQYWdlfSx0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXM9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLml0ZW1zUGVyUGFnZTwxPzE6TWF0aC5jZWlsKGEudG90YWxJdGVtcy90aGlzLml0ZW1zUGVyUGFnZSk7cmV0dXJuIE1hdGgubWF4KGJ8fDAsMSl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7YS5wYWdlPXBhcnNlSW50KGUuJHZpZXdWYWx1ZSwxMCl8fDF9LGEuc2VsZWN0UGFnZT1mdW5jdGlvbihiKXthLnBhZ2UhPT1iJiZiPjAmJmI8PWEudG90YWxQYWdlcyYmKGUuJHNldFZpZXdWYWx1ZShiKSxlLiRyZW5kZXIoKSl9LGEuZ2V0VGV4dD1mdW5jdGlvbihiKXtyZXR1cm4gYVtiK1wiVGV4dFwiXXx8ZC5jb25maWdbYitcIlRleHRcIl19LGEubm9QcmV2aW91cz1mdW5jdGlvbigpe3JldHVybiAxPT09YS5wYWdlfSxhLm5vTmV4dD1mdW5jdGlvbigpe3JldHVybiBhLnBhZ2U9PT1hLnRvdGFsUGFnZXN9LGEuJHdhdGNoKFwidG90YWxJdGVtc1wiLGZ1bmN0aW9uKCl7YS50b3RhbFBhZ2VzPWQuY2FsY3VsYXRlVG90YWxQYWdlcygpfSksYS4kd2F0Y2goXCJ0b3RhbFBhZ2VzXCIsZnVuY3Rpb24oYil7ZihhLiRwYXJlbnQsYiksYS5wYWdlPmI/YS5zZWxlY3RQYWdlKGIpOmUuJHJlbmRlcigpfSl9XSkuY29uc3RhbnQoXCJwYWdpbmF0aW9uQ29uZmlnXCIse2l0ZW1zUGVyUGFnZToxMCxib3VuZGFyeUxpbmtzOiExLGRpcmVjdGlvbkxpbmtzOiEwLGZpcnN0VGV4dDpcIkZpcnN0XCIscHJldmlvdXNUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixsYXN0VGV4dDpcIkxhc3RcIixyb3RhdGU6ITB9KS5kaXJlY3RpdmUoXCJwYWdpbmF0aW9uXCIsW1wiJHBhcnNlXCIsXCJwYWdpbmF0aW9uQ29uZmlnXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOnt0b3RhbEl0ZW1zOlwiPVwiLGZpcnN0VGV4dDpcIkBcIixwcmV2aW91c1RleHQ6XCJAXCIsbmV4dFRleHQ6XCJAXCIsbGFzdFRleHQ6XCJAXCJ9LHJlcXVpcmU6W1wicGFnaW5hdGlvblwiLFwiP25nTW9kZWxcIl0sY29udHJvbGxlcjpcIlBhZ2luYXRpb25Db250cm9sbGVyXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLHJlcGxhY2U6ITAsbGluazpmdW5jdGlvbihjLGQsZSxmKXtmdW5jdGlvbiBnKGEsYixjKXtyZXR1cm57bnVtYmVyOmEsdGV4dDpiLGFjdGl2ZTpjfX1mdW5jdGlvbiBoKGEsYil7dmFyIGM9W10sZD0xLGU9YixmPWFuZ3VsYXIuaXNEZWZpbmVkKGspJiZiPms7ZiYmKGw/KGQ9TWF0aC5tYXgoYS1NYXRoLmZsb29yKGsvMiksMSksZT1kK2stMSxlPmImJihlPWIsZD1lLWsrMSkpOihkPShNYXRoLmNlaWwoYS9rKS0xKSprKzEsZT1NYXRoLm1pbihkK2stMSxiKSkpO2Zvcih2YXIgaD1kO2U+PWg7aCsrKXt2YXIgaT1nKGgsaCxoPT09YSk7Yy5wdXNoKGkpfWlmKGYmJiFsKXtpZihkPjEpe3ZhciBqPWcoZC0xLFwiLi4uXCIsITEpO2MudW5zaGlmdChqKX1pZihiPmUpe3ZhciBtPWcoZSsxLFwiLi4uXCIsITEpO2MucHVzaChtKX19cmV0dXJuIGN9dmFyIGk9ZlswXSxqPWZbMV07aWYoail7dmFyIGs9YW5ndWxhci5pc0RlZmluZWQoZS5tYXhTaXplKT9jLiRwYXJlbnQuJGV2YWwoZS5tYXhTaXplKTpiLm1heFNpemUsbD1hbmd1bGFyLmlzRGVmaW5lZChlLnJvdGF0ZSk/Yy4kcGFyZW50LiRldmFsKGUucm90YXRlKTpiLnJvdGF0ZTtjLmJvdW5kYXJ5TGlua3M9YW5ndWxhci5pc0RlZmluZWQoZS5ib3VuZGFyeUxpbmtzKT9jLiRwYXJlbnQuJGV2YWwoZS5ib3VuZGFyeUxpbmtzKTpiLmJvdW5kYXJ5TGlua3MsYy5kaXJlY3Rpb25MaW5rcz1hbmd1bGFyLmlzRGVmaW5lZChlLmRpcmVjdGlvbkxpbmtzKT9jLiRwYXJlbnQuJGV2YWwoZS5kaXJlY3Rpb25MaW5rcyk6Yi5kaXJlY3Rpb25MaW5rcyxpLmluaXQoaixiKSxlLm1heFNpemUmJmMuJHBhcmVudC4kd2F0Y2goYShlLm1heFNpemUpLGZ1bmN0aW9uKGEpe2s9cGFyc2VJbnQoYSwxMCksaS5yZW5kZXIoKVxufSk7dmFyIG09aS5yZW5kZXI7aS5yZW5kZXI9ZnVuY3Rpb24oKXttKCksYy5wYWdlPjAmJmMucGFnZTw9Yy50b3RhbFBhZ2VzJiYoYy5wYWdlcz1oKGMucGFnZSxjLnRvdGFsUGFnZXMpKX19fX19XSkuY29uc3RhbnQoXCJwYWdlckNvbmZpZ1wiLHtpdGVtc1BlclBhZ2U6MTAscHJldmlvdXNUZXh0OlwiwqsgUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHQgwrtcIixhbGlnbjohMH0pLmRpcmVjdGl2ZShcInBhZ2VyXCIsW1wicGFnZXJDb25maWdcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOnt0b3RhbEl0ZW1zOlwiPVwiLHByZXZpb3VzVGV4dDpcIkBcIixuZXh0VGV4dDpcIkBcIn0scmVxdWlyZTpbXCJwYWdlclwiLFwiP25nTW9kZWxcIl0sY29udHJvbGxlcjpcIlBhZ2luYXRpb25Db250cm9sbGVyXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2VyLmh0bWxcIixyZXBsYWNlOiEwLGxpbms6ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGY9ZVswXSxnPWVbMV07ZyYmKGIuYWxpZ249YW5ndWxhci5pc0RlZmluZWQoZC5hbGlnbik/Yi4kcGFyZW50LiRldmFsKGQuYWxpZ24pOmEuYWxpZ24sZi5pbml0KGcsYSkpfX19XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudG9vbHRpcFwiLFtcInVpLmJvb3RzdHJhcC5wb3NpdGlvblwiLFwidWkuYm9vdHN0cmFwLmJpbmRIdG1sXCJdKS5wcm92aWRlcihcIiR0b29sdGlwXCIsZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3ZhciBiPS9bQS1aXS9nLGM9XCItXCI7cmV0dXJuIGEucmVwbGFjZShiLGZ1bmN0aW9uKGEsYil7cmV0dXJuKGI/YzpcIlwiKSthLnRvTG93ZXJDYXNlKCl9KX12YXIgYj17cGxhY2VtZW50OlwidG9wXCIsYW5pbWF0aW9uOiEwLHBvcHVwRGVsYXk6MH0sYz17bW91c2VlbnRlcjpcIm1vdXNlbGVhdmVcIixjbGljazpcImNsaWNrXCIsZm9jdXM6XCJibHVyXCJ9LGQ9e307dGhpcy5vcHRpb25zPWZ1bmN0aW9uKGEpe2FuZ3VsYXIuZXh0ZW5kKGQsYSl9LHRoaXMuc2V0VHJpZ2dlcnM9ZnVuY3Rpb24oYSl7YW5ndWxhci5leHRlbmQoYyxhKX0sdGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRjb21waWxlXCIsXCIkdGltZW91dFwiLFwiJHBhcnNlXCIsXCIkZG9jdW1lbnRcIixcIiRwb3NpdGlvblwiLFwiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oZSxmLGcsaCxpLGosayl7cmV0dXJuIGZ1bmN0aW9uKGUsbCxtKXtmdW5jdGlvbiBuKGEpe3ZhciBiPWF8fG8udHJpZ2dlcnx8bSxkPWNbYl18fGI7cmV0dXJue3Nob3c6YixoaWRlOmR9fXZhciBvPWFuZ3VsYXIuZXh0ZW5kKHt9LGIsZCkscD1hKGUpLHE9ay5zdGFydFN5bWJvbCgpLHI9ay5lbmRTeW1ib2woKSxzPVwiPGRpdiBcIitwKyctcG9wdXAgdGl0bGU9XCInK3ErXCJ0dF90aXRsZVwiK3IrJ1wiIGNvbnRlbnQ9XCInK3ErXCJ0dF9jb250ZW50XCIrcisnXCIgcGxhY2VtZW50PVwiJytxK1widHRfcGxhY2VtZW50XCIrcisnXCIgYW5pbWF0aW9uPVwidHRfYW5pbWF0aW9uXCIgaXMtb3Blbj1cInR0X2lzT3BlblwiPjwvZGl2Pic7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTohMCxjb21waWxlOmZ1bmN0aW9uKCl7dmFyIGE9ZihzKTtyZXR1cm4gZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoKXtiLnR0X2lzT3Blbj9tKCk6aygpfWZ1bmN0aW9uIGsoKXsoIXl8fGIuJGV2YWwoZFtsK1wiRW5hYmxlXCJdKSkmJihiLnR0X3BvcHVwRGVsYXk/dnx8KHY9ZyhwLGIudHRfcG9wdXBEZWxheSwhMSksdi50aGVuKGZ1bmN0aW9uKGEpe2EoKX0pKTpwKCkoKSl9ZnVuY3Rpb24gbSgpe2IuJGFwcGx5KGZ1bmN0aW9uKCl7cSgpfSl9ZnVuY3Rpb24gcCgpe3JldHVybiB2PW51bGwsdSYmKGcuY2FuY2VsKHUpLHU9bnVsbCksYi50dF9jb250ZW50PyhyKCksdC5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLHc/aS5maW5kKFwiYm9keVwiKS5hcHBlbmQodCk6Yy5hZnRlcih0KSx6KCksYi50dF9pc09wZW49ITAsYi4kZGlnZXN0KCkseik6YW5ndWxhci5ub29wfWZ1bmN0aW9uIHEoKXtiLnR0X2lzT3Blbj0hMSxnLmNhbmNlbCh2KSx2PW51bGwsYi50dF9hbmltYXRpb24/dXx8KHU9ZyhzLDUwMCkpOnMoKX1mdW5jdGlvbiByKCl7dCYmcygpLHQ9YShiLGZ1bmN0aW9uKCl7fSksYi4kZGlnZXN0KCl9ZnVuY3Rpb24gcygpe3U9bnVsbCx0JiYodC5yZW1vdmUoKSx0PW51bGwpfXZhciB0LHUsdix3PWFuZ3VsYXIuaXNEZWZpbmVkKG8uYXBwZW5kVG9Cb2R5KT9vLmFwcGVuZFRvQm9keTohMSx4PW4odm9pZCAwKSx5PWFuZ3VsYXIuaXNEZWZpbmVkKGRbbCtcIkVuYWJsZVwiXSksej1mdW5jdGlvbigpe3ZhciBhPWoucG9zaXRpb25FbGVtZW50cyhjLHQsYi50dF9wbGFjZW1lbnQsdyk7YS50b3ArPVwicHhcIixhLmxlZnQrPVwicHhcIix0LmNzcyhhKX07Yi50dF9pc09wZW49ITEsZC4kb2JzZXJ2ZShlLGZ1bmN0aW9uKGEpe2IudHRfY29udGVudD1hLCFhJiZiLnR0X2lzT3BlbiYmcSgpfSksZC4kb2JzZXJ2ZShsK1wiVGl0bGVcIixmdW5jdGlvbihhKXtiLnR0X3RpdGxlPWF9KSxkLiRvYnNlcnZlKGwrXCJQbGFjZW1lbnRcIixmdW5jdGlvbihhKXtiLnR0X3BsYWNlbWVudD1hbmd1bGFyLmlzRGVmaW5lZChhKT9hOm8ucGxhY2VtZW50fSksZC4kb2JzZXJ2ZShsK1wiUG9wdXBEZWxheVwiLGZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlSW50KGEsMTApO2IudHRfcG9wdXBEZWxheT1pc05hTihjKT9vLnBvcHVwRGVsYXk6Y30pO3ZhciBBPWZ1bmN0aW9uKCl7Yy51bmJpbmQoeC5zaG93LGspLGMudW5iaW5kKHguaGlkZSxtKX07ZC4kb2JzZXJ2ZShsK1wiVHJpZ2dlclwiLGZ1bmN0aW9uKGEpe0EoKSx4PW4oYSkseC5zaG93PT09eC5oaWRlP2MuYmluZCh4LnNob3csZik6KGMuYmluZCh4LnNob3csayksYy5iaW5kKHguaGlkZSxtKSl9KTt2YXIgQj1iLiRldmFsKGRbbCtcIkFuaW1hdGlvblwiXSk7Yi50dF9hbmltYXRpb249YW5ndWxhci5pc0RlZmluZWQoQik/ISFCOm8uYW5pbWF0aW9uLGQuJG9ic2VydmUobCtcIkFwcGVuZFRvQm9keVwiLGZ1bmN0aW9uKGEpe3c9YW5ndWxhci5pc0RlZmluZWQoYSk/aChhKShiKTp3fSksdyYmYi4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsZnVuY3Rpb24oKXtiLnR0X2lzT3BlbiYmcSgpfSksYi4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Zy5jYW5jZWwodSksZy5jYW5jZWwodiksQSgpLHMoKX0pfX19fX1dfSkuZGlyZWN0aXZlKFwidG9vbHRpcFBvcHVwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsc2NvcGU6e2NvbnRlbnQ6XCJAXCIscGxhY2VtZW50OlwiQFwiLGFuaW1hdGlvbjpcIiZcIixpc09wZW46XCImXCJ9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWxcIn19KS5kaXJlY3RpdmUoXCJ0b29sdGlwXCIsW1wiJHRvb2x0aXBcIixmdW5jdGlvbihhKXtyZXR1cm4gYShcInRvb2x0aXBcIixcInRvb2x0aXBcIixcIm1vdXNlZW50ZXJcIil9XSkuZGlyZWN0aXZlKFwidG9vbHRpcEh0bWxVbnNhZmVQb3B1cFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHNjb3BlOntjb250ZW50OlwiQFwiLHBsYWNlbWVudDpcIkBcIixhbmltYXRpb246XCImXCIsaXNPcGVuOlwiJlwifSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXVuc2FmZS1wb3B1cC5odG1sXCJ9fSkuZGlyZWN0aXZlKFwidG9vbHRpcEh0bWxVbnNhZmVcIixbXCIkdG9vbHRpcFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhKFwidG9vbHRpcEh0bWxVbnNhZmVcIixcInRvb2x0aXBcIixcIm1vdXNlZW50ZXJcIil9XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAucG9wb3ZlclwiLFtcInVpLmJvb3RzdHJhcC50b29sdGlwXCJdKS5kaXJlY3RpdmUoXCJwb3BvdmVyUG9wdXBcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCxzY29wZTp7dGl0bGU6XCJAXCIsY29udGVudDpcIkBcIixwbGFjZW1lbnQ6XCJAXCIsYW5pbWF0aW9uOlwiJlwiLGlzT3BlbjpcIiZcIn0sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbFwifX0pLmRpcmVjdGl2ZShcInBvcG92ZXJcIixbXCIkdG9vbHRpcFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhKFwicG9wb3ZlclwiLFwicG9wb3ZlclwiLFwiY2xpY2tcIil9XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAucHJvZ3Jlc3NiYXJcIixbXSkuY29uc3RhbnQoXCJwcm9ncmVzc0NvbmZpZ1wiLHthbmltYXRlOiEwLG1heDoxMDB9KS5jb250cm9sbGVyKFwiUHJvZ3Jlc3NDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcInByb2dyZXNzQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT1hbmd1bGFyLmlzRGVmaW5lZChiLmFuaW1hdGUpP2EuJHBhcmVudC4kZXZhbChiLmFuaW1hdGUpOmMuYW5pbWF0ZTt0aGlzLmJhcnM9W10sYS5tYXg9YW5ndWxhci5pc0RlZmluZWQoYi5tYXgpP2EuJHBhcmVudC4kZXZhbChiLm1heCk6Yy5tYXgsdGhpcy5hZGRCYXI9ZnVuY3Rpb24oYixjKXtlfHxjLmNzcyh7dHJhbnNpdGlvbjpcIm5vbmVcIn0pLHRoaXMuYmFycy5wdXNoKGIpLGIuJHdhdGNoKFwidmFsdWVcIixmdW5jdGlvbihjKXtiLnBlcmNlbnQ9KygxMDAqYy9hLm1heCkudG9GaXhlZCgyKX0pLGIuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2M9bnVsbCxkLnJlbW92ZUJhcihiKX0pfSx0aGlzLnJlbW92ZUJhcj1mdW5jdGlvbihhKXt0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGEpLDEpfX1dKS5kaXJlY3RpdmUoXCJwcm9ncmVzc1wiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRyYW5zY2x1ZGU6ITAsY29udHJvbGxlcjpcIlByb2dyZXNzQ29udHJvbGxlclwiLHJlcXVpcmU6XCJwcm9ncmVzc1wiLHNjb3BlOnt9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwifX0pLmRpcmVjdGl2ZShcImJhclwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRyYW5zY2x1ZGU6ITAscmVxdWlyZTpcIl5wcm9ncmVzc1wiLHNjb3BlOnt2YWx1ZTpcIj1cIix0eXBlOlwiQFwifSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtkLmFkZEJhcihhLGIpfX19KS5kaXJlY3RpdmUoXCJwcm9ncmVzc2JhclwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRyYW5zY2x1ZGU6ITAsY29udHJvbGxlcjpcIlByb2dyZXNzQ29udHJvbGxlclwiLHNjb3BlOnt2YWx1ZTpcIj1cIix0eXBlOlwiQFwifSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2QuYWRkQmFyKGEsYW5ndWxhci5lbGVtZW50KGIuY2hpbGRyZW4oKVswXSkpfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5yYXRpbmdcIixbXSkuY29uc3RhbnQoXCJyYXRpbmdDb25maWdcIix7bWF4OjUsc3RhdGVPbjpudWxsLHN0YXRlT2ZmOm51bGx9KS5jb250cm9sbGVyKFwiUmF0aW5nQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCJyYXRpbmdDb25maWdcIixmdW5jdGlvbihhLGIsYyl7dmFyIGQ9eyRzZXRWaWV3VmFsdWU6YW5ndWxhci5ub29wfTt0aGlzLmluaXQ9ZnVuY3Rpb24oZSl7ZD1lLGQuJHJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnN0YXRlT249YW5ndWxhci5pc0RlZmluZWQoYi5zdGF0ZU9uKT9hLiRwYXJlbnQuJGV2YWwoYi5zdGF0ZU9uKTpjLnN0YXRlT24sdGhpcy5zdGF0ZU9mZj1hbmd1bGFyLmlzRGVmaW5lZChiLnN0YXRlT2ZmKT9hLiRwYXJlbnQuJGV2YWwoYi5zdGF0ZU9mZik6Yy5zdGF0ZU9mZjt2YXIgZj1hbmd1bGFyLmlzRGVmaW5lZChiLnJhdGluZ1N0YXRlcyk/YS4kcGFyZW50LiRldmFsKGIucmF0aW5nU3RhdGVzKTpuZXcgQXJyYXkoYW5ndWxhci5pc0RlZmluZWQoYi5tYXgpP2EuJHBhcmVudC4kZXZhbChiLm1heCk6Yy5tYXgpO2EucmFuZ2U9dGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyhmKX0sdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cz1mdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2M+YjtiKyspYVtiXT1hbmd1bGFyLmV4dGVuZCh7aW5kZXg6Yn0se3N0YXRlT246dGhpcy5zdGF0ZU9uLHN0YXRlT2ZmOnRoaXMuc3RhdGVPZmZ9LGFbYl0pO3JldHVybiBhfSxhLnJhdGU9ZnVuY3Rpb24oYil7IWEucmVhZG9ubHkmJmI+PTAmJmI8PWEucmFuZ2UubGVuZ3RoJiYoZC4kc2V0Vmlld1ZhbHVlKGIpLGQuJHJlbmRlcigpKX0sYS5lbnRlcj1mdW5jdGlvbihiKXthLnJlYWRvbmx5fHwoYS52YWx1ZT1iKSxhLm9uSG92ZXIoe3ZhbHVlOmJ9KX0sYS5yZXNldD1mdW5jdGlvbigpe2EudmFsdWU9ZC4kdmlld1ZhbHVlLGEub25MZWF2ZSgpfSxhLm9uS2V5ZG93bj1mdW5jdGlvbihiKXsvKDM3fDM4fDM5fDQwKS8udGVzdChiLndoaWNoKSYmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLGEucmF0ZShhLnZhbHVlKygzOD09PWIud2hpY2h8fDM5PT09Yi53aGljaD8xOi0xKSkpfSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe2EudmFsdWU9ZC4kdmlld1ZhbHVlfX1dKS5kaXJlY3RpdmUoXCJyYXRpbmdcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpbXCJyYXRpbmdcIixcIm5nTW9kZWxcIl0sc2NvcGU6e3JlYWRvbmx5OlwiPT9cIixvbkhvdmVyOlwiJlwiLG9uTGVhdmU6XCImXCJ9LGNvbnRyb2xsZXI6XCJSYXRpbmdDb250cm9sbGVyXCIsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWxcIixyZXBsYWNlOiEwLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZFswXSxmPWRbMV07ZiYmZS5pbml0KGYpfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50YWJzXCIsW10pLmNvbnRyb2xsZXIoXCJUYWJzZXRDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIudGFicz1hLnRhYnM9W107Yi5zZWxlY3Q9ZnVuY3Rpb24oYSl7YW5ndWxhci5mb3JFYWNoKGMsZnVuY3Rpb24oYil7Yi5hY3RpdmUmJmIhPT1hJiYoYi5hY3RpdmU9ITEsYi5vbkRlc2VsZWN0KCkpfSksYS5hY3RpdmU9ITAsYS5vblNlbGVjdCgpfSxiLmFkZFRhYj1mdW5jdGlvbihhKXtjLnB1c2goYSksMT09PWMubGVuZ3RoP2EuYWN0aXZlPSEwOmEuYWN0aXZlJiZiLnNlbGVjdChhKX0sYi5yZW1vdmVUYWI9ZnVuY3Rpb24oYSl7dmFyIGQ9Yy5pbmRleE9mKGEpO2lmKGEuYWN0aXZlJiZjLmxlbmd0aD4xKXt2YXIgZT1kPT1jLmxlbmd0aC0xP2QtMTpkKzE7Yi5zZWxlY3QoY1tlXSl9Yy5zcGxpY2UoZCwxKX19XSkuZGlyZWN0aXZlKFwidGFic2V0XCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHRyYW5zY2x1ZGU6ITAscmVwbGFjZTohMCxzY29wZTp7dHlwZTpcIkBcIn0sY29udHJvbGxlcjpcIlRhYnNldENvbnRyb2xsZXJcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYixjKXthLnZlcnRpY2FsPWFuZ3VsYXIuaXNEZWZpbmVkKGMudmVydGljYWwpP2EuJHBhcmVudC4kZXZhbChjLnZlcnRpY2FsKTohMSxhLmp1c3RpZmllZD1hbmd1bGFyLmlzRGVmaW5lZChjLmp1c3RpZmllZCk/YS4kcGFyZW50LiRldmFsKGMuanVzdGlmaWVkKTohMX19fSkuZGlyZWN0aXZlKFwidGFiXCIsW1wiJHBhcnNlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3JlcXVpcmU6XCJedGFic2V0XCIscmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsdHJhbnNjbHVkZTohMCxzY29wZTp7YWN0aXZlOlwiPT9cIixoZWFkaW5nOlwiQFwiLG9uU2VsZWN0OlwiJnNlbGVjdFwiLG9uRGVzZWxlY3Q6XCImZGVzZWxlY3RcIn0sY29udHJvbGxlcjpmdW5jdGlvbigpe30sY29tcGlsZTpmdW5jdGlvbihiLGMsZCl7cmV0dXJuIGZ1bmN0aW9uKGIsYyxlLGYpe2IuJHdhdGNoKFwiYWN0aXZlXCIsZnVuY3Rpb24oYSl7YSYmZi5zZWxlY3QoYil9KSxiLmRpc2FibGVkPSExLGUuZGlzYWJsZWQmJmIuJHBhcmVudC4kd2F0Y2goYShlLmRpc2FibGVkKSxmdW5jdGlvbihhKXtiLmRpc2FibGVkPSEhYX0pLGIuc2VsZWN0PWZ1bmN0aW9uKCl7Yi5kaXNhYmxlZHx8KGIuYWN0aXZlPSEwKX0sZi5hZGRUYWIoYiksYi4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Zi5yZW1vdmVUYWIoYil9KSxiLiR0cmFuc2NsdWRlRm49ZH19fX1dKS5kaXJlY3RpdmUoXCJ0YWJIZWFkaW5nVHJhbnNjbHVkZVwiLFtmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkFcIixyZXF1aXJlOlwiXnRhYlwiLGxpbms6ZnVuY3Rpb24oYSxiKXthLiR3YXRjaChcImhlYWRpbmdFbGVtZW50XCIsZnVuY3Rpb24oYSl7YSYmKGIuaHRtbChcIlwiKSxiLmFwcGVuZChhKSl9KX19fV0pLmRpcmVjdGl2ZShcInRhYkNvbnRlbnRUcmFuc2NsdWRlXCIsZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybiBhLnRhZ05hbWUmJihhLmhhc0F0dHJpYnV0ZShcInRhYi1oZWFkaW5nXCIpfHxhLmhhc0F0dHJpYnV0ZShcImRhdGEtdGFiLWhlYWRpbmdcIil8fFwidGFiLWhlYWRpbmdcIj09PWEudGFnTmFtZS50b0xvd2VyQ2FzZSgpfHxcImRhdGEtdGFiLWhlYWRpbmdcIj09PWEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKX1yZXR1cm57cmVzdHJpY3Q6XCJBXCIscmVxdWlyZTpcIl50YWJzZXRcIixsaW5rOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1iLiRldmFsKGQudGFiQ29udGVudFRyYW5zY2x1ZGUpO2UuJHRyYW5zY2x1ZGVGbihlLiRwYXJlbnQsZnVuY3Rpb24oYil7YW5ndWxhci5mb3JFYWNoKGIsZnVuY3Rpb24oYil7YShiKT9lLmhlYWRpbmdFbGVtZW50PWI6Yy5hcHBlbmQoYil9KX0pfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50aW1lcGlja2VyXCIsW10pLmNvbnN0YW50KFwidGltZXBpY2tlckNvbmZpZ1wiLHtob3VyU3RlcDoxLG1pbnV0ZVN0ZXA6MSxzaG93TWVyaWRpYW46ITAsbWVyaWRpYW5zOm51bGwscmVhZG9ubHlJbnB1dDohMSxtb3VzZXdoZWVsOiEwfSkuY29udHJvbGxlcihcIlRpbWVwaWNrZXJDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcIiRwYXJzZVwiLFwiJGxvZ1wiLFwiJGxvY2FsZVwiLFwidGltZXBpY2tlckNvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKCl7dmFyIGI9cGFyc2VJbnQoYS5ob3VycywxMCksYz1hLnNob3dNZXJpZGlhbj9iPjAmJjEzPmI6Yj49MCYmMjQ+YjtyZXR1cm4gYz8oYS5zaG93TWVyaWRpYW4mJigxMj09PWImJihiPTApLGEubWVyaWRpYW49PT1wWzFdJiYoYis9MTIpKSxiKTp2b2lkIDB9ZnVuY3Rpb24gaCgpe3ZhciBiPXBhcnNlSW50KGEubWludXRlcywxMCk7cmV0dXJuIGI+PTAmJjYwPmI/Yjp2b2lkIDB9ZnVuY3Rpb24gaShhKXtyZXR1cm4gYW5ndWxhci5pc0RlZmluZWQoYSkmJmEudG9TdHJpbmcoKS5sZW5ndGg8Mj9cIjBcIithOmF9ZnVuY3Rpb24gaihhKXtrKCksby4kc2V0Vmlld1ZhbHVlKG5ldyBEYXRlKG4pKSxsKGEpfWZ1bmN0aW9uIGsoKXtvLiRzZXRWYWxpZGl0eShcInRpbWVcIiwhMCksYS5pbnZhbGlkSG91cnM9ITEsYS5pbnZhbGlkTWludXRlcz0hMX1mdW5jdGlvbiBsKGIpe3ZhciBjPW4uZ2V0SG91cnMoKSxkPW4uZ2V0TWludXRlcygpO2Euc2hvd01lcmlkaWFuJiYoYz0wPT09Y3x8MTI9PT1jPzEyOmMlMTIpLGEuaG91cnM9XCJoXCI9PT1iP2M6aShjKSxhLm1pbnV0ZXM9XCJtXCI9PT1iP2Q6aShkKSxhLm1lcmlkaWFuPW4uZ2V0SG91cnMoKTwxMj9wWzBdOnBbMV19ZnVuY3Rpb24gbShhKXt2YXIgYj1uZXcgRGF0ZShuLmdldFRpbWUoKSs2ZTQqYSk7bi5zZXRIb3VycyhiLmdldEhvdXJzKCksYi5nZXRNaW51dGVzKCkpLGooKX12YXIgbj1uZXcgRGF0ZSxvPXskc2V0Vmlld1ZhbHVlOmFuZ3VsYXIubm9vcH0scD1hbmd1bGFyLmlzRGVmaW5lZChiLm1lcmlkaWFucyk/YS4kcGFyZW50LiRldmFsKGIubWVyaWRpYW5zKTpmLm1lcmlkaWFuc3x8ZS5EQVRFVElNRV9GT1JNQVRTLkFNUE1TO3RoaXMuaW5pdD1mdW5jdGlvbihjLGQpe289YyxvLiRyZW5kZXI9dGhpcy5yZW5kZXI7dmFyIGU9ZC5lcSgwKSxnPWQuZXEoMSksaD1hbmd1bGFyLmlzRGVmaW5lZChiLm1vdXNld2hlZWwpP2EuJHBhcmVudC4kZXZhbChiLm1vdXNld2hlZWwpOmYubW91c2V3aGVlbDtoJiZ0aGlzLnNldHVwTW91c2V3aGVlbEV2ZW50cyhlLGcpLGEucmVhZG9ubHlJbnB1dD1hbmd1bGFyLmlzRGVmaW5lZChiLnJlYWRvbmx5SW5wdXQpP2EuJHBhcmVudC4kZXZhbChiLnJlYWRvbmx5SW5wdXQpOmYucmVhZG9ubHlJbnB1dCx0aGlzLnNldHVwSW5wdXRFdmVudHMoZSxnKX07dmFyIHE9Zi5ob3VyU3RlcDtiLmhvdXJTdGVwJiZhLiRwYXJlbnQuJHdhdGNoKGMoYi5ob3VyU3RlcCksZnVuY3Rpb24oYSl7cT1wYXJzZUludChhLDEwKX0pO3ZhciByPWYubWludXRlU3RlcDtiLm1pbnV0ZVN0ZXAmJmEuJHBhcmVudC4kd2F0Y2goYyhiLm1pbnV0ZVN0ZXApLGZ1bmN0aW9uKGEpe3I9cGFyc2VJbnQoYSwxMCl9KSxhLnNob3dNZXJpZGlhbj1mLnNob3dNZXJpZGlhbixiLnNob3dNZXJpZGlhbiYmYS4kcGFyZW50LiR3YXRjaChjKGIuc2hvd01lcmlkaWFuKSxmdW5jdGlvbihiKXtpZihhLnNob3dNZXJpZGlhbj0hIWIsby4kZXJyb3IudGltZSl7dmFyIGM9ZygpLGQ9aCgpO2FuZ3VsYXIuaXNEZWZpbmVkKGMpJiZhbmd1bGFyLmlzRGVmaW5lZChkKSYmKG4uc2V0SG91cnMoYyksaigpKX1lbHNlIGwoKX0pLHRoaXMuc2V0dXBNb3VzZXdoZWVsRXZlbnRzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7YS5vcmlnaW5hbEV2ZW50JiYoYT1hLm9yaWdpbmFsRXZlbnQpO3ZhciBiPWEud2hlZWxEZWx0YT9hLndoZWVsRGVsdGE6LWEuZGVsdGFZO3JldHVybiBhLmRldGFpbHx8Yj4wfTtiLmJpbmQoXCJtb3VzZXdoZWVsIHdoZWVsXCIsZnVuY3Rpb24oYil7YS4kYXBwbHkoZChiKT9hLmluY3JlbWVudEhvdXJzKCk6YS5kZWNyZW1lbnRIb3VycygpKSxiLnByZXZlbnREZWZhdWx0KCl9KSxjLmJpbmQoXCJtb3VzZXdoZWVsIHdoZWVsXCIsZnVuY3Rpb24oYil7YS4kYXBwbHkoZChiKT9hLmluY3JlbWVudE1pbnV0ZXMoKTphLmRlY3JlbWVudE1pbnV0ZXMoKSksYi5wcmV2ZW50RGVmYXVsdCgpfSl9LHRoaXMuc2V0dXBJbnB1dEV2ZW50cz1mdW5jdGlvbihiLGMpe2lmKGEucmVhZG9ubHlJbnB1dClyZXR1cm4gYS51cGRhdGVIb3Vycz1hbmd1bGFyLm5vb3Asdm9pZChhLnVwZGF0ZU1pbnV0ZXM9YW5ndWxhci5ub29wKTt2YXIgZD1mdW5jdGlvbihiLGMpe28uJHNldFZpZXdWYWx1ZShudWxsKSxvLiRzZXRWYWxpZGl0eShcInRpbWVcIiwhMSksYW5ndWxhci5pc0RlZmluZWQoYikmJihhLmludmFsaWRIb3Vycz1iKSxhbmd1bGFyLmlzRGVmaW5lZChjKSYmKGEuaW52YWxpZE1pbnV0ZXM9Yyl9O2EudXBkYXRlSG91cnM9ZnVuY3Rpb24oKXt2YXIgYT1nKCk7YW5ndWxhci5pc0RlZmluZWQoYSk/KG4uc2V0SG91cnMoYSksaihcImhcIikpOmQoITApfSxiLmJpbmQoXCJibHVyXCIsZnVuY3Rpb24oKXshYS5pbnZhbGlkSG91cnMmJmEuaG91cnM8MTAmJmEuJGFwcGx5KGZ1bmN0aW9uKCl7YS5ob3Vycz1pKGEuaG91cnMpfSl9KSxhLnVwZGF0ZU1pbnV0ZXM9ZnVuY3Rpb24oKXt2YXIgYT1oKCk7YW5ndWxhci5pc0RlZmluZWQoYSk/KG4uc2V0TWludXRlcyhhKSxqKFwibVwiKSk6ZCh2b2lkIDAsITApfSxjLmJpbmQoXCJibHVyXCIsZnVuY3Rpb24oKXshYS5pbnZhbGlkTWludXRlcyYmYS5taW51dGVzPDEwJiZhLiRhcHBseShmdW5jdGlvbigpe2EubWludXRlcz1pKGEubWludXRlcyl9KX0pfSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPW8uJG1vZGVsVmFsdWU/bmV3IERhdGUoby4kbW9kZWxWYWx1ZSk6bnVsbDtpc05hTihhKT8oby4kc2V0VmFsaWRpdHkoXCJ0aW1lXCIsITEpLGQuZXJyb3IoJ1RpbWVwaWNrZXIgZGlyZWN0aXZlOiBcIm5nLW1vZGVsXCIgdmFsdWUgbXVzdCBiZSBhIERhdGUgb2JqZWN0LCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMDEuMDEuMTk3MCBvciBhIHN0cmluZyByZXByZXNlbnRpbmcgYW4gUkZDMjgyMiBvciBJU08gODYwMSBkYXRlLicpKTooYSYmKG49YSksaygpLGwoKSl9LGEuaW5jcmVtZW50SG91cnM9ZnVuY3Rpb24oKXttKDYwKnEpfSxhLmRlY3JlbWVudEhvdXJzPWZ1bmN0aW9uKCl7bSg2MCotcSl9LGEuaW5jcmVtZW50TWludXRlcz1mdW5jdGlvbigpe20ocil9LGEuZGVjcmVtZW50TWludXRlcz1mdW5jdGlvbigpe20oLXIpfSxhLnRvZ2dsZU1lcmlkaWFuPWZ1bmN0aW9uKCl7bSg3MjAqKG4uZ2V0SG91cnMoKTwxMj8xOi0xKSl9fV0pLmRpcmVjdGl2ZShcInRpbWVwaWNrZXJcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpbXCJ0aW1lcGlja2VyXCIsXCI/Xm5nTW9kZWxcIl0sY29udHJvbGxlcjpcIlRpbWVwaWNrZXJDb250cm9sbGVyXCIscmVwbGFjZTohMCxzY29wZTp7fSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3RpbWVwaWNrZXIvdGltZXBpY2tlci5odG1sXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kWzBdLGY9ZFsxXTtmJiZlLmluaXQoZixiLmZpbmQoXCJpbnB1dFwiKSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnR5cGVhaGVhZFwiLFtcInVpLmJvb3RzdHJhcC5wb3NpdGlvblwiLFwidWkuYm9vdHN0cmFwLmJpbmRIdG1sXCJdKS5mYWN0b3J5KFwidHlwZWFoZWFkUGFyc2VyXCIsW1wiJHBhcnNlXCIsZnVuY3Rpb24oYSl7dmFyIGI9L15cXHMqKFtcXHNcXFNdKz8pKD86XFxzK2FzXFxzKyhbXFxzXFxTXSs/KSk/XFxzK2ZvclxccysoPzooW1xcJFxcd11bXFwkXFx3XFxkXSopKVxccytpblxccysoW1xcc1xcU10rPykkLztyZXR1cm57cGFyc2U6ZnVuY3Rpb24oYyl7dmFyIGQ9Yy5tYXRjaChiKTtpZighZCl0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHR5cGVhaGVhZCBzcGVjaWZpY2F0aW9uIGluIGZvcm0gb2YgXCJfbW9kZWxWYWx1ZV8gKGFzIF9sYWJlbF8pPyBmb3IgX2l0ZW1fIGluIF9jb2xsZWN0aW9uX1wiIGJ1dCBnb3QgXCInK2MrJ1wiLicpO3JldHVybntpdGVtTmFtZTpkWzNdLHNvdXJjZTphKGRbNF0pLHZpZXdNYXBwZXI6YShkWzJdfHxkWzFdKSxtb2RlbE1hcHBlcjphKGRbMV0pfX19fV0pLmRpcmVjdGl2ZShcInR5cGVhaGVhZFwiLFtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixcIiRxXCIsXCIkdGltZW91dFwiLFwiJGRvY3VtZW50XCIsXCIkcG9zaXRpb25cIixcInR5cGVhaGVhZFBhcnNlclwiLGZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPVs5LDEzLDI3LDM4LDQwXTtyZXR1cm57cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGksaixrLGwpe3ZhciBtLG49aS4kZXZhbChrLnR5cGVhaGVhZE1pbkxlbmd0aCl8fDEsbz1pLiRldmFsKGsudHlwZWFoZWFkV2FpdE1zKXx8MCxwPWkuJGV2YWwoay50eXBlYWhlYWRFZGl0YWJsZSkhPT0hMSxxPWIoay50eXBlYWhlYWRMb2FkaW5nKS5hc3NpZ258fGFuZ3VsYXIubm9vcCxyPWIoay50eXBlYWhlYWRPblNlbGVjdCkscz1rLnR5cGVhaGVhZElucHV0Rm9ybWF0dGVyP2Ioay50eXBlYWhlYWRJbnB1dEZvcm1hdHRlcik6dm9pZCAwLHQ9ay50eXBlYWhlYWRBcHBlbmRUb0JvZHk/aS4kZXZhbChrLnR5cGVhaGVhZEFwcGVuZFRvQm9keSk6ITEsdT1iKGsubmdNb2RlbCkuYXNzaWduLHY9Zy5wYXJzZShrLnR5cGVhaGVhZCksdz1pLiRuZXcoKTtpLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXt3LiRkZXN0cm95KCl9KTt2YXIgeD1cInR5cGVhaGVhZC1cIit3LiRpZCtcIi1cIitNYXRoLmZsb29yKDFlNCpNYXRoLnJhbmRvbSgpKTtqLmF0dHIoe1wiYXJpYS1hdXRvY29tcGxldGVcIjpcImxpc3RcIixcImFyaWEtZXhwYW5kZWRcIjohMSxcImFyaWEtb3duc1wiOnh9KTt2YXIgeT1hbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IHR5cGVhaGVhZC1wb3B1cD48L2Rpdj5cIik7eS5hdHRyKHtpZDp4LG1hdGNoZXM6XCJtYXRjaGVzXCIsYWN0aXZlOlwiYWN0aXZlSWR4XCIsc2VsZWN0Olwic2VsZWN0KGFjdGl2ZUlkeClcIixxdWVyeTpcInF1ZXJ5XCIscG9zaXRpb246XCJwb3NpdGlvblwifSksYW5ndWxhci5pc0RlZmluZWQoay50eXBlYWhlYWRUZW1wbGF0ZVVybCkmJnkuYXR0cihcInRlbXBsYXRlLXVybFwiLGsudHlwZWFoZWFkVGVtcGxhdGVVcmwpO3ZhciB6PWZ1bmN0aW9uKCl7dy5tYXRjaGVzPVtdLHcuYWN0aXZlSWR4PS0xLGouYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSl9LEE9ZnVuY3Rpb24oYSl7cmV0dXJuIHgrXCItb3B0aW9uLVwiK2F9O3cuJHdhdGNoKFwiYWN0aXZlSWR4XCIsZnVuY3Rpb24oYSl7MD5hP2oucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKTpqLmF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixBKGEpKX0pO3ZhciBCPWZ1bmN0aW9uKGEpe3ZhciBiPXskdmlld1ZhbHVlOmF9O3EoaSwhMCksYy53aGVuKHYuc291cmNlKGksYikpLnRoZW4oZnVuY3Rpb24oYyl7dmFyIGQ9YT09PWwuJHZpZXdWYWx1ZTtpZihkJiZtKWlmKGMubGVuZ3RoPjApe3cuYWN0aXZlSWR4PTAsdy5tYXRjaGVzLmxlbmd0aD0wO2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbdi5pdGVtTmFtZV09Y1tlXSx3Lm1hdGNoZXMucHVzaCh7aWQ6QShlKSxsYWJlbDp2LnZpZXdNYXBwZXIodyxiKSxtb2RlbDpjW2VdfSk7dy5xdWVyeT1hLHcucG9zaXRpb249dD9mLm9mZnNldChqKTpmLnBvc2l0aW9uKGopLHcucG9zaXRpb24udG9wPXcucG9zaXRpb24udG9wK2oucHJvcChcIm9mZnNldEhlaWdodFwiKSxqLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApfWVsc2UgeigpO2QmJnEoaSwhMSl9LGZ1bmN0aW9uKCl7eigpLHEoaSwhMSl9KX07eigpLHcucXVlcnk9dm9pZCAwO3ZhciBDLEQ9ZnVuY3Rpb24oYSl7Qz1kKGZ1bmN0aW9uKCl7QihhKX0sbyl9LEU9ZnVuY3Rpb24oKXtDJiZkLmNhbmNlbChDKX07bC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uKGEpe3JldHVybiBtPSEwLGEmJmEubGVuZ3RoPj1uP28+MD8oRSgpLEQoYSkpOkIoYSk6KHEoaSwhMSksRSgpLHooKSkscD9hOmE/dm9pZCBsLiRzZXRWYWxpZGl0eShcImVkaXRhYmxlXCIsITEpOihsLiRzZXRWYWxpZGl0eShcImVkaXRhYmxlXCIsITApLGEpfSksbC4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3ZhciBiLGMsZD17fTtyZXR1cm4gcz8oZC4kbW9kZWw9YSxzKGksZCkpOihkW3YuaXRlbU5hbWVdPWEsYj12LnZpZXdNYXBwZXIoaSxkKSxkW3YuaXRlbU5hbWVdPXZvaWQgMCxjPXYudmlld01hcHBlcihpLGQpLGIhPT1jP2I6YSl9KSx3LnNlbGVjdD1mdW5jdGlvbihhKXt2YXIgYixjLGU9e307ZVt2Lml0ZW1OYW1lXT1jPXcubWF0Y2hlc1thXS5tb2RlbCxiPXYubW9kZWxNYXBwZXIoaSxlKSx1KGksYiksbC4kc2V0VmFsaWRpdHkoXCJlZGl0YWJsZVwiLCEwKSxyKGkseyRpdGVtOmMsJG1vZGVsOmIsJGxhYmVsOnYudmlld01hcHBlcihpLGUpfSkseigpLGQoZnVuY3Rpb24oKXtqWzBdLmZvY3VzKCl9LDAsITEpfSxqLmJpbmQoXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7MCE9PXcubWF0Y2hlcy5sZW5ndGgmJi0xIT09aC5pbmRleE9mKGEud2hpY2gpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLDQwPT09YS53aGljaD8ody5hY3RpdmVJZHg9KHcuYWN0aXZlSWR4KzEpJXcubWF0Y2hlcy5sZW5ndGgsdy4kZGlnZXN0KCkpOjM4PT09YS53aGljaD8ody5hY3RpdmVJZHg9KHcuYWN0aXZlSWR4P3cuYWN0aXZlSWR4OncubWF0Y2hlcy5sZW5ndGgpLTEsdy4kZGlnZXN0KCkpOjEzPT09YS53aGljaHx8OT09PWEud2hpY2g/dy4kYXBwbHkoZnVuY3Rpb24oKXt3LnNlbGVjdCh3LmFjdGl2ZUlkeCl9KToyNz09PWEud2hpY2gmJihhLnN0b3BQcm9wYWdhdGlvbigpLHooKSx3LiRkaWdlc3QoKSkpfSksai5iaW5kKFwiYmx1clwiLGZ1bmN0aW9uKCl7bT0hMX0pO3ZhciBGPWZ1bmN0aW9uKGEpe2pbMF0hPT1hLnRhcmdldCYmKHooKSx3LiRkaWdlc3QoKSl9O2UuYmluZChcImNsaWNrXCIsRiksaS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7ZS51bmJpbmQoXCJjbGlja1wiLEYpfSk7dmFyIEc9YSh5KSh3KTt0P2UuZmluZChcImJvZHlcIikuYXBwZW5kKEcpOmouYWZ0ZXIoRyl9fX1dKS5kaXJlY3RpdmUoXCJ0eXBlYWhlYWRQb3B1cFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTp7bWF0Y2hlczpcIj1cIixxdWVyeTpcIj1cIixhY3RpdmU6XCI9XCIscG9zaXRpb246XCI9XCIsc2VsZWN0OlwiJlwifSxyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1wb3B1cC5odG1sXCIsbGluazpmdW5jdGlvbihhLGIsYyl7YS50ZW1wbGF0ZVVybD1jLnRlbXBsYXRlVXJsLGEuaXNPcGVuPWZ1bmN0aW9uKCl7cmV0dXJuIGEubWF0Y2hlcy5sZW5ndGg+MH0sYS5pc0FjdGl2ZT1mdW5jdGlvbihiKXtyZXR1cm4gYS5hY3RpdmU9PWJ9LGEuc2VsZWN0QWN0aXZlPWZ1bmN0aW9uKGIpe2EuYWN0aXZlPWJ9LGEuc2VsZWN0TWF0Y2g9ZnVuY3Rpb24oYil7YS5zZWxlY3Qoe2FjdGl2ZUlkeDpifSl9fX19KS5kaXJlY3RpdmUoXCJ0eXBlYWhlYWRNYXRjaFwiLFtcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGNvbXBpbGVcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6e2luZGV4OlwiPVwiLG1hdGNoOlwiPVwiLHF1ZXJ5OlwiPVwifSxsaW5rOmZ1bmN0aW9uKGUsZixnKXt2YXIgaD1kKGcudGVtcGxhdGVVcmwpKGUuJHBhcmVudCl8fFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sXCI7YS5nZXQoaCx7Y2FjaGU6Yn0pLnN1Y2Nlc3MoZnVuY3Rpb24oYSl7Zi5yZXBsYWNlV2l0aChjKGEudHJpbSgpKShlKSl9KX19fV0pLmZpbHRlcihcInR5cGVhaGVhZEhpZ2hsaWdodFwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gYS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZyxcIlxcXFwkMVwiKX1yZXR1cm4gZnVuY3Rpb24oYixjKXtyZXR1cm4gYz8oXCJcIitiKS5yZXBsYWNlKG5ldyBSZWdFeHAoYShjKSxcImdpXCIpLFwiPHN0cm9uZz4kJjwvc3Ryb25nPlwiKTpifX0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5odG1sXCIsJzxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XFxuICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxcbiAgICA8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlxcbiAgICAgIDxhIGNsYXNzPVwiYWNjb3JkaW9uLXRvZ2dsZVwiIG5nLWNsaWNrPVwidG9nZ2xlT3BlbigpXCIgYWNjb3JkaW9uLXRyYW5zY2x1ZGU9XCJoZWFkaW5nXCI+PHNwYW4gbmctY2xhc3M9XCJ7XFwndGV4dC1tdXRlZFxcJzogaXNEaXNhYmxlZH1cIj57e2hlYWRpbmd9fTwvc3Bhbj48L2E+XFxuICAgIDwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1jb2xsYXBzZVwiIGNvbGxhcHNlPVwiIWlzT3BlblwiPlxcblx0ICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbFwiLCc8ZGl2IGNsYXNzPVwicGFuZWwtZ3JvdXBcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIiwnPGRpdiBjbGFzcz1cImFsZXJ0XCIgbmctY2xhc3M9XCJbXFwnYWxlcnQtXFwnICsgKHR5cGUgfHwgXFwnd2FybmluZ1xcJyksIGNsb3NlYWJsZSA/IFxcJ2FsZXJ0LWRpc21pc3NhYmxlXFwnIDogbnVsbF1cIiByb2xlPVwiYWxlcnRcIj5cXG4gICAgPGJ1dHRvbiBuZy1zaG93PVwiY2xvc2VhYmxlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBuZy1jbGljaz1cImNsb3NlKClcIj5cXG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5DbG9zZTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxkaXYgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9jYXJvdXNlbC5odG1sXCIsJzxkaXYgbmctbW91c2VlbnRlcj1cInBhdXNlKClcIiBuZy1tb3VzZWxlYXZlPVwicGxheSgpXCIgY2xhc3M9XCJjYXJvdXNlbFwiIG5nLXN3aXBlLXJpZ2h0PVwicHJldigpXCIgbmctc3dpcGUtbGVmdD1cIm5leHQoKVwiPlxcbiAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCIgbmctc2hvdz1cInNsaWRlcy5sZW5ndGggPiAxXCI+XFxuICAgICAgICA8bGkgbmctcmVwZWF0PVwic2xpZGUgaW4gc2xpZGVzIHRyYWNrIGJ5ICRpbmRleFwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXNBY3RpdmUoc2xpZGUpfVwiIG5nLWNsaWNrPVwic2VsZWN0KHNsaWRlKVwiPjwvbGk+XFxuICAgIDwvb2w+XFxuICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuICAgIDxhIGNsYXNzPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgbmctY2xpY2s9XCJwcmV2KClcIiBuZy1zaG93PVwic2xpZGVzLmxlbmd0aCA+IDFcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9zcGFuPjwvYT5cXG4gICAgPGEgY2xhc3M9XCJyaWdodCBjYXJvdXNlbC1jb250cm9sXCIgbmctY2xpY2s9XCJuZXh0KClcIiBuZy1zaG93PVwic2xpZGVzLmxlbmd0aCA+IDFcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvc3Bhbj48L2E+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvY2Fyb3VzZWwvc2xpZGUuaHRtbFwiLFwiPGRpdiBuZy1jbGFzcz1cXFwie1xcbiAgICAnYWN0aXZlJzogbGVhdmluZyB8fCAoYWN0aXZlICYmICFlbnRlcmluZyksXFxuICAgICdwcmV2JzogKG5leHQgfHwgYWN0aXZlKSAmJiBkaXJlY3Rpb249PSdwcmV2JyxcXG4gICAgJ25leHQnOiAobmV4dCB8fCBhY3RpdmUpICYmIGRpcmVjdGlvbj09J25leHQnLFxcbiAgICAncmlnaHQnOiBkaXJlY3Rpb249PSdwcmV2JyxcXG4gICAgJ2xlZnQnOiBkaXJlY3Rpb249PSduZXh0J1xcbiAgfVxcXCIgY2xhc3M9XFxcIml0ZW0gdGV4dC1jZW50ZXJcXFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuXCIpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLCc8ZGl2IG5nLXN3aXRjaD1cImRhdGVwaWNrZXJNb2RlXCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgbmcta2V5ZG93bj1cImtleWRvd24oJGV2ZW50KVwiPlxcbiAgPGRheXBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cImRheVwiIHRhYmluZGV4PVwiMFwiPjwvZGF5cGlja2VyPlxcbiAgPG1vbnRocGlja2VyIG5nLXN3aXRjaC13aGVuPVwibW9udGhcIiB0YWJpbmRleD1cIjBcIj48L21vbnRocGlja2VyPlxcbiAgPHllYXJwaWNrZXIgbmctc3dpdGNoLXdoZW49XCJ5ZWFyXCIgdGFiaW5kZXg9XCIwXCI+PC95ZWFycGlja2VyPlxcbjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF5Lmh0bWxcIiwnPHRhYmxlIHJvbGU9XCJncmlkXCIgYXJpYS1sYWJlbGxlZGJ5PVwie3t1bmlxdWVJZH19LXRpdGxlXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwie3thY3RpdmVEYXRlSWR9fVwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcIiBuZy1jbGljaz1cIm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGggY29sc3Bhbj1cInt7NSArIHNob3dXZWVrc319XCI+PGJ1dHRvbiBpZD1cInt7dW5pcXVlSWR9fS10aXRsZVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG5nLWNsaWNrPVwidG9nZ2xlTW9kZSgpXCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0XCIgbmctY2xpY2s9XCJtb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICAgIDx0cj5cXG4gICAgICA8dGggbmctc2hvdz1cInNob3dXZWVrc1wiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48L3RoPlxcbiAgICAgIDx0aCBuZy1yZXBlYXQ9XCJsYWJlbCBpbiBsYWJlbHMgdHJhY2sgYnkgJGluZGV4XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxzbWFsbCBhcmlhLWxhYmVsPVwie3tsYWJlbC5mdWxsfX1cIj57e2xhYmVsLmFiYnJ9fTwvc21hbGw+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcIj5cXG4gICAgICA8dGQgbmctc2hvdz1cInNob3dXZWVrc1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgaDZcIj48ZW0+e3sgd2Vla051bWJlcnNbJGluZGV4XSB9fTwvZW0+PC90ZD5cXG4gICAgICA8dGQgbmctcmVwZWF0PVwiZHQgaW4gcm93IHRyYWNrIGJ5IGR0LmRhdGVcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgaWQ9XCJ7e2R0LnVpZH19XCIgYXJpYS1kaXNhYmxlZD1cInt7ISFkdC5kaXNhYmxlZH19XCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIndpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgbmctY2xhc3M9XCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cIiBuZy1jbGljaz1cInNlbGVjdChkdC5kYXRlKVwiIG5nLWRpc2FibGVkPVwiZHQuZGlzYWJsZWRcIiB0YWJpbmRleD1cIi0xXCI+PHNwYW4gbmctY2xhc3M9XCJ7XFwndGV4dC1tdXRlZFxcJzogZHQuc2Vjb25kYXJ5LCBcXCd0ZXh0LWluZm9cXCc6IGR0LmN1cnJlbnR9XCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL21vbnRoLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL21vbnRoLmh0bWxcIiwnPHRhYmxlIHJvbGU9XCJncmlkXCIgYXJpYS1sYWJlbGxlZGJ5PVwie3t1bmlxdWVJZH19LXRpdGxlXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwie3thY3RpdmVEYXRlSWR9fVwiPlxcbiAgPHRoZWFkPlxcbiAgICA8dHI+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnRcIiBuZy1jbGljaz1cIm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiBpZD1cInt7dW5pcXVlSWR9fS10aXRsZVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG5nLWNsaWNrPVwidG9nZ2xlTW9kZSgpXCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0XCIgbmctY2xpY2s9XCJtb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIGlkPVwie3tkdC51aWR9fVwiIGFyaWEtZGlzYWJsZWQ9XCJ7eyEhZHQuZGlzYWJsZWR9fVwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgbmctY2xhc3M9XCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cIiBuZy1jbGljaz1cInNlbGVjdChkdC5kYXRlKVwiIG5nLWRpc2FibGVkPVwiZHQuZGlzYWJsZWRcIiB0YWJpbmRleD1cIi0xXCI+PHNwYW4gbmctY2xhc3M9XCJ7XFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvZGF0ZXBpY2tlci9wb3B1cC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9wb3B1cC5odG1sXCIsJzx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBuZy1zdHlsZT1cIntkaXNwbGF5OiAoaXNPcGVuICYmIFxcJ2Jsb2NrXFwnKSB8fCBcXCdub25lXFwnLCB0b3A6IHBvc2l0aW9uLnRvcCtcXCdweFxcJywgbGVmdDogcG9zaXRpb24ubGVmdCtcXCdweFxcJ31cIiBuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCI+XFxuXHQ8bGkgbmctdHJhbnNjbHVkZT48L2xpPlxcblx0PGxpIG5nLWlmPVwic2hvd0J1dHRvbkJhclwiIHN0eWxlPVwicGFkZGluZzoxMHB4IDlweCAycHhcIj5cXG5cdFx0PHNwYW4gY2xhc3M9XCJidG4tZ3JvdXBcIj5cXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIiBuZy1jbGljaz1cInNlbGVjdChcXCd0b2RheVxcJylcIj57eyBnZXRUZXh0KFxcJ2N1cnJlbnRcXCcpIH19PC9idXR0b24+XFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBuZy1jbGljaz1cInNlbGVjdChudWxsKVwiPnt7IGdldFRleHQoXFwnY2xlYXJcXCcpIH19PC9idXR0b24+XFxuXHRcdDwvc3Bhbj5cXG5cdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcIiBuZy1jbGljaz1cImNsb3NlKClcIj57eyBnZXRUZXh0KFxcJ2Nsb3NlXFwnKSB9fTwvYnV0dG9uPlxcblx0PC9saT5cXG48L3VsPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3llYXIuaHRtbFwiLCc8dGFibGUgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJ7e2FjdGl2ZURhdGVJZH19XCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFwiIG5nLWNsaWNrPVwibW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPjxidXR0b24gaWQ9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBuZy1jbGljaz1cInRvZ2dsZU1vZGUoKVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHN0cm9uZz57e3RpdGxlfX08L3N0cm9uZz48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodFwiIG5nLWNsaWNrPVwibW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFwiPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBpZD1cInt7ZHQudWlkfX1cIiBhcmlhLWRpc2FibGVkPVwie3shIWR0LmRpc2FibGVkfX1cIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIG5nLWNsYXNzPVwie1xcJ2J0bi1pbmZvXFwnOiBkdC5zZWxlY3RlZCwgYWN0aXZlOiBpc0FjdGl2ZShkdCl9XCIgbmctY2xpY2s9XCJzZWxlY3QoZHQuZGF0ZSlcIiBuZy1kaXNhYmxlZD1cImR0LmRpc2FibGVkXCIgdGFiaW5kZXg9XCItMVwiPjxzcGFuIG5nLWNsYXNzPVwie1xcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cIj57e2R0LmxhYmVsfX08L3NwYW4+PC9idXR0b24+XFxuICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG4gIDwvdGJvZHk+XFxuPC90YWJsZT5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL21vZGFsL2JhY2tkcm9wLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sXCIsJzxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmYWRlIHt7IGJhY2tkcm9wQ2xhc3MgfX1cIlxcbiAgICAgbmctY2xhc3M9XCJ7aW46IGFuaW1hdGV9XCJcXG4gICAgIG5nLXN0eWxlPVwie1xcJ3otaW5kZXhcXCc6IDEwNDAgKyAoaW5kZXggJiYgMSB8fCAwKSArIGluZGV4KjEwfVwiXFxuPjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvbW9kYWwvd2luZG93Lmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLCc8ZGl2IHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgbmctY2xhc3M9XCJ7aW46IGFuaW1hdGV9XCIgbmctc3R5bGU9XCJ7XFwnei1pbmRleFxcJzogMTA1MCArIGluZGV4KjEwLCBkaXNwbGF5OiBcXCdibG9ja1xcJ31cIiBuZy1jbGljaz1cImNsb3NlKCRldmVudClcIj5cXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIG5nLWNsYXNzPVwie1xcJ21vZGFsLXNtXFwnOiBzaXplID09IFxcJ3NtXFwnLCBcXCdtb2RhbC1sZ1xcJzogc2l6ZSA9PSBcXCdsZ1xcJ31cIj48ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiIG1vZGFsLXRyYW5zY2x1ZGU+PC9kaXY+PC9kaXY+XFxuPC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2VyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2VyLmh0bWxcIiwnPHVsIGNsYXNzPVwicGFnZXJcIj5cXG4gIDxsaSBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9QcmV2aW91cygpLCBwcmV2aW91czogYWxpZ259XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UocGFnZSAtIDEpXCI+e3tnZXRUZXh0KFxcJ3ByZXZpb3VzXFwnKX19PC9hPjwvbGk+XFxuICA8bGkgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vTmV4dCgpLCBuZXh0OiBhbGlnbn1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZShwYWdlICsgMSlcIj57e2dldFRleHQoXFwnbmV4dFxcJyl9fTwvYT48L2xpPlxcbjwvdWw+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sXCIsJzx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cXG4gIDxsaSBuZy1pZj1cImJvdW5kYXJ5TGlua3NcIiBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9QcmV2aW91cygpfVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKDEpXCI+e3tnZXRUZXh0KFxcJ2ZpcnN0XFwnKX19PC9hPjwvbGk+XFxuICA8bGkgbmctaWY9XCJkaXJlY3Rpb25MaW5rc1wiIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCl9XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UocGFnZSAtIDEpXCI+e3tnZXRUZXh0KFxcJ3ByZXZpb3VzXFwnKX19PC9hPjwvbGk+XFxuICA8bGkgbmctcmVwZWF0PVwicGFnZSBpbiBwYWdlcyB0cmFjayBieSAkaW5kZXhcIiBuZy1jbGFzcz1cInthY3RpdmU6IHBhZ2UuYWN0aXZlfVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHBhZ2UubnVtYmVyKVwiPnt7cGFnZS50ZXh0fX08L2E+PC9saT5cXG4gIDxsaSBuZy1pZj1cImRpcmVjdGlvbkxpbmtzXCIgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vTmV4dCgpfVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHBhZ2UgKyAxKVwiPnt7Z2V0VGV4dChcXCduZXh0XFwnKX19PC9hPjwvbGk+XFxuICA8bGkgbmctaWY9XCJib3VuZGFyeUxpbmtzXCIgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vTmV4dCgpfVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHRvdGFsUGFnZXMpXCI+e3tnZXRUZXh0KFxcJ2xhc3RcXCcpfX08L2E+PC9saT5cXG48L3VsPicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtdW5zYWZlLXBvcHVwLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtaHRtbC11bnNhZmUtcG9wdXAuaHRtbFwiLCc8ZGl2IGNsYXNzPVwidG9vbHRpcCB7e3BsYWNlbWVudH19XCIgbmctY2xhc3M9XCJ7IGluOiBpc09wZW4oKSwgZmFkZTogYW5pbWF0aW9uKCkgfVwiPlxcbiAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCIgYmluZC1odG1sLXVuc2FmZT1cImNvbnRlbnRcIj48L2Rpdj5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1wb3B1cC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWxcIiwnPGRpdiBjbGFzcz1cInRvb2x0aXAge3twbGFjZW1lbnR9fVwiIG5nLWNsYXNzPVwieyBpbjogaXNPcGVuKCksIGZhZGU6IGFuaW1hdGlvbigpIH1cIj5cXG4gIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiIG5nLWJpbmQ9XCJjb250ZW50XCI+PC9kaXY+XFxuPC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wb3BvdmVyL3BvcG92ZXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci5odG1sXCIsJzxkaXYgY2xhc3M9XCJwb3BvdmVyIHt7cGxhY2VtZW50fX1cIiBuZy1jbGFzcz1cInsgaW46IGlzT3BlbigpLCBmYWRlOiBhbmltYXRpb24oKSB9XCI+XFxuICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWlubmVyXCI+XFxuICAgICAgPGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiIG5nLWJpbmQ9XCJ0aXRsZVwiIG5nLXNob3c9XCJ0aXRsZVwiPjwvaDM+XFxuICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiIG5nLWJpbmQ9XCJjb250ZW50XCI+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3Byb2dyZXNzYmFyL2Jhci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIiwnPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIG5nLWNsYXNzPVwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCJ7e3ZhbHVlfX1cIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCJ7e21heH19XCIgbmctc3R5bGU9XCJ7d2lkdGg6IHBlcmNlbnQgKyBcXCclXFwnfVwiIGFyaWEtdmFsdWV0ZXh0PVwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmh0bWxcIiwnPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5odG1sXCIsJzxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIG5nLWNsYXNzPVwidHlwZSAmJiBcXCdwcm9ncmVzcy1iYXItXFwnICsgdHlwZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCJ7e3ZhbHVlfX1cIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCJ7e21heH19XCIgbmctc3R5bGU9XCJ7d2lkdGg6IHBlcmNlbnQgKyBcXCclXFwnfVwiIGFyaWEtdmFsdWV0ZXh0PVwie3twZXJjZW50IHwgbnVtYmVyOjB9fSVcIiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsJzxzcGFuIG5nLW1vdXNlbGVhdmU9XCJyZXNldCgpXCIgbmcta2V5ZG93bj1cIm9uS2V5ZG93bigkZXZlbnQpXCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cInNsaWRlclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cInt7cmFuZ2UubGVuZ3RofX1cIiBhcmlhLXZhbHVlbm93PVwie3t2YWx1ZX19XCI+XFxuICAgIDxpIG5nLXJlcGVhdD1cInIgaW4gcmFuZ2UgdHJhY2sgYnkgJGluZGV4XCIgbmctbW91c2VlbnRlcj1cImVudGVyKCRpbmRleCArIDEpXCIgbmctY2xpY2s9XCJyYXRlKCRpbmRleCArIDEpXCIgY2xhc3M9XCJnbHlwaGljb25cIiBuZy1jbGFzcz1cIiRpbmRleCA8IHZhbHVlICYmIChyLnN0YXRlT24gfHwgXFwnZ2x5cGhpY29uLXN0YXJcXCcpIHx8IChyLnN0YXRlT2ZmIHx8IFxcJ2dseXBoaWNvbi1zdGFyLWVtcHR5XFwnKVwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KHt7ICRpbmRleCA8IHZhbHVlID8gXFwnKlxcJyA6IFxcJyBcXCcgfX0pPC9zcGFuPlxcbiAgICA8L2k+XFxuPC9zcGFuPicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3RhYnMvdGFiLmh0bWxcIiwnPGxpIG5nLWNsYXNzPVwie2FjdGl2ZTogYWN0aXZlLCBkaXNhYmxlZDogZGlzYWJsZWR9XCI+XFxuICA8YSBuZy1jbGljaz1cInNlbGVjdCgpXCIgdGFiLWhlYWRpbmctdHJhbnNjbHVkZT57e2hlYWRpbmd9fTwvYT5cXG48L2xpPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3RhYnMvdGFic2V0Lmh0bWxcIiwnPGRpdj5cXG4gIDx1bCBjbGFzcz1cIm5hdiBuYXYte3t0eXBlIHx8IFxcJ3RhYnNcXCd9fVwiIG5nLWNsYXNzPVwie1xcJ25hdi1zdGFja2VkXFwnOiB2ZXJ0aWNhbCwgXFwnbmF2LWp1c3RpZmllZFxcJzoganVzdGlmaWVkfVwiIG5nLXRyYW5zY2x1ZGU+PC91bD5cXG4gIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxcbiAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmVcIiBcXG4gICAgICAgICBuZy1yZXBlYXQ9XCJ0YWIgaW4gdGFic1wiIFxcbiAgICAgICAgIG5nLWNsYXNzPVwie2FjdGl2ZTogdGFiLmFjdGl2ZX1cIlxcbiAgICAgICAgIHRhYi1jb250ZW50LXRyYW5zY2x1ZGU9XCJ0YWJcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3RpbWVwaWNrZXIvdGltZXBpY2tlci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIiwnPHRhYmxlPlxcblx0PHRib2R5Plxcblx0XHQ8dHIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cImluY3JlbWVudEhvdXJzKClcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXVwXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZD4mbmJzcDs8L3RkPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cImluY3JlbWVudE1pbnV0ZXMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkIG5nLXNob3c9XCJzaG93TWVyaWRpYW5cIj48L3RkPlxcblx0XHQ8L3RyPlxcblx0XHQ8dHI+XFxuXHRcdFx0PHRkIHN0eWxlPVwid2lkdGg6NTBweDtcIiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBuZy1jbGFzcz1cIntcXCdoYXMtZXJyb3JcXCc6IGludmFsaWRIb3Vyc31cIj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwiaG91cnNcIiBuZy1jaGFuZ2U9XCJ1cGRhdGVIb3VycygpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiBuZy1tb3VzZXdoZWVsPVwiaW5jcmVtZW50SG91cnMoKVwiIG5nLXJlYWRvbmx5PVwicmVhZG9ubHlJbnB1dFwiIG1heGxlbmd0aD1cIjJcIj5cXG5cdFx0XHQ8L3RkPlxcblx0XHRcdDx0ZD46PC90ZD5cXG5cdFx0XHQ8dGQgc3R5bGU9XCJ3aWR0aDo1MHB4O1wiIGNsYXNzPVwiZm9ybS1ncm91cFwiIG5nLWNsYXNzPVwie1xcJ2hhcy1lcnJvclxcJzogaW52YWxpZE1pbnV0ZXN9XCI+XFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuZy1tb2RlbD1cIm1pbnV0ZXNcIiBuZy1jaGFuZ2U9XCJ1cGRhdGVNaW51dGVzKClcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiIG5nLXJlYWRvbmx5PVwicmVhZG9ubHlJbnB1dFwiIG1heGxlbmd0aD1cIjJcIj5cXG5cdFx0XHQ8L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVwic2hvd01lcmlkaWFuXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgdGV4dC1jZW50ZXJcIiBuZy1jbGljaz1cInRvZ2dsZU1lcmlkaWFuKClcIj57e21lcmlkaWFufX08L2J1dHRvbj48L3RkPlxcblx0XHQ8L3RyPlxcblx0XHQ8dHIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcblx0XHRcdDx0ZD48YSBuZy1jbGljaz1cImRlY3JlbWVudEhvdXJzKClcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVwiZGVjcmVtZW50TWludXRlcygpXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCI+PC9zcGFuPjwvYT48L3RkPlxcblx0XHRcdDx0ZCBuZy1zaG93PVwic2hvd01lcmlkaWFuXCI+PC90ZD5cXG5cdFx0PC90cj5cXG5cdDwvdGJvZHk+XFxuPC90YWJsZT5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guaHRtbFwiLCc8YSB0YWJpbmRleD1cIi0xXCIgYmluZC1odG1sLXVuc2FmZT1cIm1hdGNoLmxhYmVsIHwgdHlwZWFoZWFkSGlnaGxpZ2h0OnF1ZXJ5XCI+PC9hPicpXG59XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLXBvcHVwLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLXBvcHVwLmh0bWxcIiwnPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLXNob3c9XCJpc09wZW4oKVwiIG5nLXN0eWxlPVwie3RvcDogcG9zaXRpb24udG9wK1xcJ3B4XFwnLCBsZWZ0OiBwb3NpdGlvbi5sZWZ0K1xcJ3B4XFwnfVwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCIgcm9sZT1cImxpc3Rib3hcIiBhcmlhLWhpZGRlbj1cInt7IWlzT3BlbigpfX1cIj5cXG4gICAgPGxpIG5nLXJlcGVhdD1cIm1hdGNoIGluIG1hdGNoZXMgdHJhY2sgYnkgJGluZGV4XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpc0FjdGl2ZSgkaW5kZXgpIH1cIiBuZy1tb3VzZWVudGVyPVwic2VsZWN0QWN0aXZlKCRpbmRleClcIiBuZy1jbGljaz1cInNlbGVjdE1hdGNoKCRpbmRleClcIiByb2xlPVwib3B0aW9uXCIgaWQ9XCJ7e21hdGNoLmlkfX1cIj5cXG4gICAgICAgIDxkaXYgdHlwZWFoZWFkLW1hdGNoIGluZGV4PVwiJGluZGV4XCIgbWF0Y2g9XCJtYXRjaFwiIHF1ZXJ5PVwicXVlcnlcIiB0ZW1wbGF0ZS11cmw9XCJ0ZW1wbGF0ZVVybFwiPjwvZGl2PlxcbiAgICA8L2xpPlxcbjwvdWw+XFxuJyl9XSk7IiwiLyoqXG4gKiBTdGF0ZS1iYXNlZCByb3V0aW5nIGZvciBBbmd1bGFySlNcbiAqIEB2ZXJzaW9uIHYwLjIuMTNcbiAqIEBsaW5rIGh0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5jb20vXG4gKiBAbGljZW5zZSBNSVQgTGljZW5zZSwgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMmJm1vZHVsZS5leHBvcnRzPT09ZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPVwidWkucm91dGVyXCIpLGZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEsYil7cmV0dXJuIE0obmV3KE0oZnVuY3Rpb24oKXt9LHtwcm90b3R5cGU6YX0pKSxiKX1mdW5jdGlvbiBlKGEpe3JldHVybiBMKGFyZ3VtZW50cyxmdW5jdGlvbihiKXtiIT09YSYmTChiLGZ1bmN0aW9uKGIsYyl7YS5oYXNPd25Qcm9wZXJ0eShjKXx8KGFbY109Yil9KX0pLGF9ZnVuY3Rpb24gZihhLGIpe3ZhciBjPVtdO2Zvcih2YXIgZCBpbiBhLnBhdGgpe2lmKGEucGF0aFtkXSE9PWIucGF0aFtkXSlicmVhaztjLnB1c2goYS5wYXRoW2RdKX1yZXR1cm4gY31mdW5jdGlvbiBnKGEpe2lmKE9iamVjdC5rZXlzKXJldHVybiBPYmplY3Qua2V5cyhhKTt2YXIgYz1bXTtyZXR1cm4gYi5mb3JFYWNoKGEsZnVuY3Rpb24oYSxiKXtjLnB1c2goYil9KSxjfWZ1bmN0aW9uIGgoYSxiKXtpZihBcnJheS5wcm90b3R5cGUuaW5kZXhPZilyZXR1cm4gYS5pbmRleE9mKGIsTnVtYmVyKGFyZ3VtZW50c1syXSl8fDApO3ZhciBjPWEubGVuZ3RoPj4+MCxkPU51bWJlcihhcmd1bWVudHNbMl0pfHwwO2ZvcihkPTA+ZD9NYXRoLmNlaWwoZCk6TWF0aC5mbG9vcihkKSwwPmQmJihkKz1jKTtjPmQ7ZCsrKWlmKGQgaW4gYSYmYVtkXT09PWIpcmV0dXJuIGQ7cmV0dXJuLTF9ZnVuY3Rpb24gaShhLGIsYyxkKXt2YXIgZSxpPWYoYyxkKSxqPXt9LGs9W107Zm9yKHZhciBsIGluIGkpaWYoaVtsXS5wYXJhbXMmJihlPWcoaVtsXS5wYXJhbXMpLGUubGVuZ3RoKSlmb3IodmFyIG0gaW4gZSloKGssZVttXSk+PTB8fChrLnB1c2goZVttXSksaltlW21dXT1hW2VbbV1dKTtyZXR1cm4gTSh7fSxqLGIpfWZ1bmN0aW9uIGooYSxiLGMpe2lmKCFjKXtjPVtdO2Zvcih2YXIgZCBpbiBhKWMucHVzaChkKX1mb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyl7dmFyIGY9Y1tlXTtpZihhW2ZdIT1iW2ZdKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIGsoYSxiKXt2YXIgYz17fTtyZXR1cm4gTChhLGZ1bmN0aW9uKGEpe2NbYV09YlthXX0pLGN9ZnVuY3Rpb24gbChhKXt2YXIgYj17fSxjPUFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoQXJyYXkucHJvdG90eXBlLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7Zm9yKHZhciBkIGluIGEpLTE9PWgoYyxkKSYmKGJbZF09YVtkXSk7cmV0dXJuIGJ9ZnVuY3Rpb24gbShhLGIpe3ZhciBjPUsoYSksZD1jP1tdOnt9O3JldHVybiBMKGEsZnVuY3Rpb24oYSxlKXtiKGEsZSkmJihkW2M/ZC5sZW5ndGg6ZV09YSl9KSxkfWZ1bmN0aW9uIG4oYSxiKXt2YXIgYz1LKGEpP1tdOnt9O3JldHVybiBMKGEsZnVuY3Rpb24oYSxkKXtjW2RdPWIoYSxkKX0pLGN9ZnVuY3Rpb24gbyhhLGIpe3ZhciBkPTEsZj0yLGk9e30saj1bXSxrPWksbT1NKGEud2hlbihpKSx7JCRwcm9taXNlczppLCQkdmFsdWVzOml9KTt0aGlzLnN0dWR5PWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIG4oYSxjKXtpZihzW2NdIT09Zil7aWYoci5wdXNoKGMpLHNbY109PT1kKXRocm93IHIuc3BsaWNlKDAsaChyLGMpKSxuZXcgRXJyb3IoXCJDeWNsaWMgZGVwZW5kZW5jeTogXCIrci5qb2luKFwiIC0+IFwiKSk7aWYoc1tjXT1kLEkoYSkpcS5wdXNoKGMsW2Z1bmN0aW9uKCl7cmV0dXJuIGIuZ2V0KGEpfV0saik7ZWxzZXt2YXIgZT1iLmFubm90YXRlKGEpO0woZSxmdW5jdGlvbihhKXthIT09YyYmaS5oYXNPd25Qcm9wZXJ0eShhKSYmbihpW2FdLGEpfSkscS5wdXNoKGMsYSxlKX1yLnBvcCgpLHNbY109Zn19ZnVuY3Rpb24gbyhhKXtyZXR1cm4gSihhKSYmYS50aGVuJiZhLiQkcHJvbWlzZXN9aWYoIUooaSkpdGhyb3cgbmV3IEVycm9yKFwiJ2ludm9jYWJsZXMnIG11c3QgYmUgYW4gb2JqZWN0XCIpO3ZhciBwPWcoaXx8e30pLHE9W10scj1bXSxzPXt9O3JldHVybiBMKGksbiksaT1yPXM9bnVsbCxmdW5jdGlvbihkLGYsZyl7ZnVuY3Rpb24gaCgpey0tdXx8KHZ8fGUodCxmLiQkdmFsdWVzKSxyLiQkdmFsdWVzPXQsci4kJHByb21pc2VzPXIuJCRwcm9taXNlc3x8ITAsZGVsZXRlIHIuJCRpbmhlcml0ZWRWYWx1ZXMsbi5yZXNvbHZlKHQpKX1mdW5jdGlvbiBpKGEpe3IuJCRmYWlsdXJlPWEsbi5yZWplY3QoYSl9ZnVuY3Rpb24gaihjLGUsZil7ZnVuY3Rpb24gaihhKXtsLnJlamVjdChhKSxpKGEpfWZ1bmN0aW9uIGsoKXtpZighRyhyLiQkZmFpbHVyZSkpdHJ5e2wucmVzb2x2ZShiLmludm9rZShlLGcsdCkpLGwucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGEpe3RbY109YSxoKCl9LGopfWNhdGNoKGEpe2ooYSl9fXZhciBsPWEuZGVmZXIoKSxtPTA7TChmLGZ1bmN0aW9uKGEpe3MuaGFzT3duUHJvcGVydHkoYSkmJiFkLmhhc093blByb3BlcnR5KGEpJiYobSsrLHNbYV0udGhlbihmdW5jdGlvbihiKXt0W2FdPWIsLS1tfHxrKCl9LGopKX0pLG18fGsoKSxzW2NdPWwucHJvbWlzZX1pZihvKGQpJiZnPT09YyYmKGc9ZixmPWQsZD1udWxsKSxkKXtpZighSihkKSl0aHJvdyBuZXcgRXJyb3IoXCInbG9jYWxzJyBtdXN0IGJlIGFuIG9iamVjdFwiKX1lbHNlIGQ9aztpZihmKXtpZighbyhmKSl0aHJvdyBuZXcgRXJyb3IoXCIncGFyZW50JyBtdXN0IGJlIGEgcHJvbWlzZSByZXR1cm5lZCBieSAkcmVzb2x2ZS5yZXNvbHZlKClcIil9ZWxzZSBmPW07dmFyIG49YS5kZWZlcigpLHI9bi5wcm9taXNlLHM9ci4kJHByb21pc2VzPXt9LHQ9TSh7fSxkKSx1PTErcS5sZW5ndGgvMyx2PSExO2lmKEcoZi4kJGZhaWx1cmUpKXJldHVybiBpKGYuJCRmYWlsdXJlKSxyO2YuJCRpbmhlcml0ZWRWYWx1ZXMmJmUodCxsKGYuJCRpbmhlcml0ZWRWYWx1ZXMscCkpLE0ocyxmLiQkcHJvbWlzZXMpLGYuJCR2YWx1ZXM/KHY9ZSh0LGwoZi4kJHZhbHVlcyxwKSksci4kJGluaGVyaXRlZFZhbHVlcz1sKGYuJCR2YWx1ZXMscCksaCgpKTooZi4kJGluaGVyaXRlZFZhbHVlcyYmKHIuJCRpbmhlcml0ZWRWYWx1ZXM9bChmLiQkaW5oZXJpdGVkVmFsdWVzLHApKSxmLnRoZW4oaCxpKSk7Zm9yKHZhciB3PTAseD1xLmxlbmd0aDt4Pnc7dys9MylkLmhhc093blByb3BlcnR5KHFbd10pP2goKTpqKHFbd10scVt3KzFdLHFbdysyXSk7cmV0dXJuIHJ9fSx0aGlzLnJlc29sdmU9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuc3R1ZHkoYSkoYixjLGQpfX1mdW5jdGlvbiBwKGEsYixjKXt0aGlzLmZyb21Db25maWc9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBHKGEudGVtcGxhdGUpP3RoaXMuZnJvbVN0cmluZyhhLnRlbXBsYXRlLGIpOkcoYS50ZW1wbGF0ZVVybCk/dGhpcy5mcm9tVXJsKGEudGVtcGxhdGVVcmwsYik6RyhhLnRlbXBsYXRlUHJvdmlkZXIpP3RoaXMuZnJvbVByb3ZpZGVyKGEudGVtcGxhdGVQcm92aWRlcixiLGMpOm51bGx9LHRoaXMuZnJvbVN0cmluZz1mdW5jdGlvbihhLGIpe3JldHVybiBIKGEpP2EoYik6YX0sdGhpcy5mcm9tVXJsPWZ1bmN0aW9uKGMsZCl7cmV0dXJuIEgoYykmJihjPWMoZCkpLG51bGw9PWM/bnVsbDphLmdldChjLHtjYWNoZTpiLGhlYWRlcnM6e0FjY2VwdDpcInRleHQvaHRtbFwifX0pLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGF0YX0pfSx0aGlzLmZyb21Qcm92aWRlcj1mdW5jdGlvbihhLGIsZCl7cmV0dXJuIGMuaW52b2tlKGEsbnVsbCxkfHx7cGFyYW1zOmJ9KX19ZnVuY3Rpb24gcShhLGIsZSl7ZnVuY3Rpb24gZihiLGMsZCxlKXtpZihxLnB1c2goYiksb1tiXSlyZXR1cm4gb1tiXTtpZighL15cXHcrKC0rXFx3KykqKD86XFxbXFxdKT8kLy50ZXN0KGIpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVyIG5hbWUgJ1wiK2IrXCInIGluIHBhdHRlcm4gJ1wiK2ErXCInXCIpO2lmKHBbYl0pdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIHBhcmFtZXRlciBuYW1lICdcIitiK1wiJyBpbiBwYXR0ZXJuICdcIithK1wiJ1wiKTtyZXR1cm4gcFtiXT1uZXcgTy5QYXJhbShiLGMsZCxlKSxwW2JdfWZ1bmN0aW9uIGcoYSxiLGMpe3ZhciBkPVtcIlwiLFwiXCJdLGU9YS5yZXBsYWNlKC9bXFxcXFxcW1xcXVxcXiQqKz8uKCl8e31dL2csXCJcXFxcJCZcIik7aWYoIWIpcmV0dXJuIGU7c3dpdGNoKGMpe2Nhc2UhMTpkPVtcIihcIixcIilcIl07YnJlYWs7Y2FzZSEwOmQ9W1wiPyhcIixcIik/XCJdO2JyZWFrO2RlZmF1bHQ6ZD1bXCIoXCIrYytcInxcIixcIik/XCJdfXJldHVybiBlK2RbMF0rYitkWzFdfWZ1bmN0aW9uIGgoYyxlKXt2YXIgZixnLGgsaSxqO3JldHVybiBmPWNbMl18fGNbM10saj1iLnBhcmFtc1tmXSxoPWEuc3Vic3RyaW5nKG0sYy5pbmRleCksZz1lP2NbNF06Y1s0XXx8KFwiKlwiPT1jWzFdP1wiLipcIjpudWxsKSxpPU8udHlwZShnfHxcInN0cmluZ1wiKXx8ZChPLnR5cGUoXCJzdHJpbmdcIikse3BhdHRlcm46bmV3IFJlZ0V4cChnKX0pLHtpZDpmLHJlZ2V4cDpnLHNlZ21lbnQ6aCx0eXBlOmksY2ZnOmp9fWI9TSh7cGFyYW1zOnt9fSxKKGIpP2I6e30pO3ZhciBpLGo9LyhbOipdKShbXFx3XFxbXFxdXSspfFxceyhbXFx3XFxbXFxdXSspKD86XFw6KCg/Oltee31cXFxcXSt8XFxcXC58XFx7KD86W157fVxcXFxdK3xcXFxcLikqXFx9KSspKT9cXH0vZyxrPS8oWzpdPykoW1xcd1xcW1xcXS1dKyl8XFx7KFtcXHdcXFtcXF0tXSspKD86XFw6KCg/Oltee31cXFxcXSt8XFxcXC58XFx7KD86W157fVxcXFxdK3xcXFxcLikqXFx9KSspKT9cXH0vZyxsPVwiXlwiLG09MCxuPXRoaXMuc2VnbWVudHM9W10sbz1lP2UucGFyYW1zOnt9LHA9dGhpcy5wYXJhbXM9ZT9lLnBhcmFtcy4kJG5ldygpOm5ldyBPLlBhcmFtU2V0LHE9W107dGhpcy5zb3VyY2U9YTtmb3IodmFyIHIscyx0OyhpPWouZXhlYyhhKSkmJihyPWgoaSwhMSksIShyLnNlZ21lbnQuaW5kZXhPZihcIj9cIik+PTApKTspcz1mKHIuaWQsci50eXBlLHIuY2ZnLFwicGF0aFwiKSxsKz1nKHIuc2VnbWVudCxzLnR5cGUucGF0dGVybi5zb3VyY2Uscy5zcXVhc2gpLG4ucHVzaChyLnNlZ21lbnQpLG09ai5sYXN0SW5kZXg7dD1hLnN1YnN0cmluZyhtKTt2YXIgdT10LmluZGV4T2YoXCI/XCIpO2lmKHU+PTApe3ZhciB2PXRoaXMuc291cmNlU2VhcmNoPXQuc3Vic3RyaW5nKHUpO2lmKHQ9dC5zdWJzdHJpbmcoMCx1KSx0aGlzLnNvdXJjZVBhdGg9YS5zdWJzdHJpbmcoMCxtK3UpLHYubGVuZ3RoPjApZm9yKG09MDtpPWsuZXhlYyh2KTspcj1oKGksITApLHM9ZihyLmlkLHIudHlwZSxyLmNmZyxcInNlYXJjaFwiKSxtPWoubGFzdEluZGV4fWVsc2UgdGhpcy5zb3VyY2VQYXRoPWEsdGhpcy5zb3VyY2VTZWFyY2g9XCJcIjtsKz1nKHQpKyhiLnN0cmljdD09PSExP1wiLz9cIjpcIlwiKStcIiRcIixuLnB1c2godCksdGhpcy5yZWdleHA9bmV3IFJlZ0V4cChsLGIuY2FzZUluc2Vuc2l0aXZlP1wiaVwiOmMpLHRoaXMucHJlZml4PW5bMF0sdGhpcy4kJHBhcmFtTmFtZXM9cX1mdW5jdGlvbiByKGEpe00odGhpcyxhKX1mdW5jdGlvbiBzKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gbnVsbCE9YT9hLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwvL2csXCIlMkZcIik6YX1mdW5jdGlvbiBlKGEpe3JldHVybiBudWxsIT1hP2EudG9TdHJpbmcoKS5yZXBsYWNlKC8lMkYvZyxcIi9cIik6YX1mdW5jdGlvbiBmKGEpe3JldHVybiB0aGlzLnBhdHRlcm4udGVzdChhKX1mdW5jdGlvbiBpKCl7cmV0dXJue3N0cmljdDp0LGNhc2VJbnNlbnNpdGl2ZTpwfX1mdW5jdGlvbiBqKGEpe3JldHVybiBIKGEpfHxLKGEpJiZIKGFbYS5sZW5ndGgtMV0pfWZ1bmN0aW9uIGsoKXtmb3IoO3gubGVuZ3RoOyl7dmFyIGE9eC5zaGlmdCgpO2lmKGEucGF0dGVybil0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IG92ZXJyaWRlIGEgdHlwZSdzIC5wYXR0ZXJuIGF0IHJ1bnRpbWUuXCIpO2IuZXh0ZW5kKHZbYS5uYW1lXSxvLmludm9rZShhLmRlZikpfX1mdW5jdGlvbiBsKGEpe00odGhpcyxhfHx7fSl9Tz10aGlzO3ZhciBvLHA9ITEsdD0hMCx1PSExLHY9e30sdz0hMCx4PVtdLHk9e3N0cmluZzp7ZW5jb2RlOmEsZGVjb2RlOmUsaXM6ZixwYXR0ZXJuOi9bXi9dKi99LFwiaW50XCI6e2VuY29kZTphLGRlY29kZTpmdW5jdGlvbihhKXtyZXR1cm4gcGFyc2VJbnQoYSwxMCl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiBHKGEpJiZ0aGlzLmRlY29kZShhLnRvU3RyaW5nKCkpPT09YX0scGF0dGVybjovXFxkKy99LGJvb2w6e2VuY29kZTpmdW5jdGlvbihhKXtyZXR1cm4gYT8xOjB9LGRlY29kZTpmdW5jdGlvbihhKXtyZXR1cm4gMCE9PXBhcnNlSW50KGEsMTApfSxpczpmdW5jdGlvbihhKXtyZXR1cm4gYT09PSEwfHxhPT09ITF9LHBhdHRlcm46LzB8MS99LGRhdGU6e2VuY29kZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pcyhhKT9bYS5nZXRGdWxsWWVhcigpLChcIjBcIisoYS5nZXRNb250aCgpKzEpKS5zbGljZSgtMiksKFwiMFwiK2EuZ2V0RGF0ZSgpKS5zbGljZSgtMildLmpvaW4oXCItXCIpOmN9LGRlY29kZTpmdW5jdGlvbihhKXtpZih0aGlzLmlzKGEpKXJldHVybiBhO3ZhciBiPXRoaXMuY2FwdHVyZS5leGVjKGEpO3JldHVybiBiP25ldyBEYXRlKGJbMV0sYlsyXS0xLGJbM10pOmN9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgRGF0ZSYmIWlzTmFOKGEudmFsdWVPZigpKX0sZXF1YWxzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuaXMoYSkmJnRoaXMuaXMoYikmJmEudG9JU09TdHJpbmcoKT09PWIudG9JU09TdHJpbmcoKX0scGF0dGVybjovWzAtOV17NH0tKD86MFsxLTldfDFbMC0yXSktKD86MFsxLTldfFsxLTJdWzAtOV18M1swLTFdKS8sY2FwdHVyZTovKFswLTldezR9KS0oMFsxLTldfDFbMC0yXSktKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkvfSxqc29uOntlbmNvZGU6Yi50b0pzb24sZGVjb2RlOmIuZnJvbUpzb24saXM6Yi5pc09iamVjdCxlcXVhbHM6Yi5lcXVhbHMscGF0dGVybjovW14vXSovfSxhbnk6e2VuY29kZTpiLmlkZW50aXR5LGRlY29kZTpiLmlkZW50aXR5LGlzOmIuaWRlbnRpdHksZXF1YWxzOmIuZXF1YWxzLHBhdHRlcm46Ly4qL319O3MuJCRnZXREZWZhdWx0VmFsdWU9ZnVuY3Rpb24oYSl7aWYoIWooYS52YWx1ZSkpcmV0dXJuIGEudmFsdWU7aWYoIW8pdGhyb3cgbmV3IEVycm9yKFwiSW5qZWN0YWJsZSBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhdCBjb25maWd1cmF0aW9uIHRpbWVcIik7cmV0dXJuIG8uaW52b2tlKGEudmFsdWUpfSx0aGlzLmNhc2VJbnNlbnNpdGl2ZT1mdW5jdGlvbihhKXtyZXR1cm4gRyhhKSYmKHA9YSkscH0sdGhpcy5zdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBHKGEpJiYodD1hKSx0fSx0aGlzLmRlZmF1bHRTcXVhc2hQb2xpY3k9ZnVuY3Rpb24oYSl7aWYoIUcoYSkpcmV0dXJuIHU7aWYoYSE9PSEwJiZhIT09ITEmJiFJKGEpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3F1YXNoIHBvbGljeTogXCIrYStcIi4gVmFsaWQgcG9saWNpZXM6IGZhbHNlLCB0cnVlLCBhcmJpdHJhcnktc3RyaW5nXCIpO3JldHVybiB1PWEsYX0sdGhpcy5jb21waWxlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBxKGEsTShpKCksYikpfSx0aGlzLmlzTWF0Y2hlcj1mdW5jdGlvbihhKXtpZighSihhKSlyZXR1cm4hMTt2YXIgYj0hMDtyZXR1cm4gTChxLnByb3RvdHlwZSxmdW5jdGlvbihjLGQpe0goYykmJihiPWImJkcoYVtkXSkmJkgoYVtkXSkpfSksYn0sdGhpcy50eXBlPWZ1bmN0aW9uKGEsYixjKXtpZighRyhiKSlyZXR1cm4gdlthXTtpZih2Lmhhc093blByb3BlcnR5KGEpKXRocm93IG5ldyBFcnJvcihcIkEgdHlwZSBuYW1lZCAnXCIrYStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtyZXR1cm4gdlthXT1uZXcgcihNKHtuYW1lOmF9LGIpKSxjJiYoeC5wdXNoKHtuYW1lOmEsZGVmOmN9KSx3fHxrKCkpLHRoaXN9LEwoeSxmdW5jdGlvbihhLGIpe3ZbYl09bmV3IHIoTSh7bmFtZTpifSxhKSl9KSx2PWQodix7fSksdGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBvPWEsdz0hMSxrKCksTCh5LGZ1bmN0aW9uKGEsYil7dltiXXx8KHZbYl09bmV3IHIoYSkpfSksdGhpc31dLHRoaXMuUGFyYW09ZnVuY3Rpb24oYSxiLGQsZSl7ZnVuY3Rpb24gZihhKXt2YXIgYj1KKGEpP2coYSk6W10sYz0tMT09PWgoYixcInZhbHVlXCIpJiYtMT09PWgoYixcInR5cGVcIikmJi0xPT09aChiLFwic3F1YXNoXCIpJiYtMT09PWgoYixcImFycmF5XCIpO3JldHVybiBjJiYoYT17dmFsdWU6YX0pLGEuJCRmbj1qKGEudmFsdWUpP2EudmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gYS52YWx1ZX0sYX1mdW5jdGlvbiBpKGIsYyxkKXtpZihiLnR5cGUmJmMpdGhyb3cgbmV3IEVycm9yKFwiUGFyYW0gJ1wiK2ErXCInIGhhcyB0d28gdHlwZSBjb25maWd1cmF0aW9ucy5cIik7cmV0dXJuIGM/YzpiLnR5cGU/Yi50eXBlIGluc3RhbmNlb2Ygcj9iLnR5cGU6bmV3IHIoYi50eXBlKTpcImNvbmZpZ1wiPT09ZD92LmFueTp2LnN0cmluZ31mdW5jdGlvbiBrKCl7dmFyIGI9e2FycmF5Olwic2VhcmNoXCI9PT1lP1wiYXV0b1wiOiExfSxjPWEubWF0Y2goL1xcW1xcXSQvKT97YXJyYXk6ITB9Ont9O3JldHVybiBNKGIsYyxkKS5hcnJheX1mdW5jdGlvbiBsKGEsYil7dmFyIGM9YS5zcXVhc2g7aWYoIWJ8fGM9PT0hMSlyZXR1cm4hMTtpZighRyhjKXx8bnVsbD09YylyZXR1cm4gdTtpZihjPT09ITB8fEkoYykpcmV0dXJuIGM7dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzcXVhc2ggcG9saWN5OiAnXCIrYytcIicuIFZhbGlkIHBvbGljaWVzOiBmYWxzZSwgdHJ1ZSwgb3IgYXJiaXRyYXJ5IHN0cmluZ1wiKX1mdW5jdGlvbiBwKGEsYixkLGUpe3ZhciBmLGcsaT1be2Zyb206XCJcIix0bzpkfHxiP2M6XCJcIn0se2Zyb206bnVsbCx0bzpkfHxiP2M6XCJcIn1dO3JldHVybiBmPUsoYS5yZXBsYWNlKT9hLnJlcGxhY2U6W10sSShlKSYmZi5wdXNoKHtmcm9tOmUsdG86Y30pLGc9bihmLGZ1bmN0aW9uKGEpe3JldHVybiBhLmZyb219KSxtKGksZnVuY3Rpb24oYSl7cmV0dXJuLTE9PT1oKGcsYS5mcm9tKX0pLmNvbmNhdChmKX1mdW5jdGlvbiBxKCl7aWYoIW8pdGhyb3cgbmV3IEVycm9yKFwiSW5qZWN0YWJsZSBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhdCBjb25maWd1cmF0aW9uIHRpbWVcIik7cmV0dXJuIG8uaW52b2tlKGQuJCRmbil9ZnVuY3Rpb24gcyhhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYi5mcm9tPT09YX19ZnVuY3Rpb24gYyhhKXt2YXIgYz1uKG0ody5yZXBsYWNlLGIoYSkpLGZ1bmN0aW9uKGEpe3JldHVybiBhLnRvfSk7cmV0dXJuIGMubGVuZ3RoP2NbMF06YX1yZXR1cm4gYT1jKGEpLEcoYSk/dy50eXBlLmRlY29kZShhKTpxKCl9ZnVuY3Rpb24gdCgpe3JldHVyblwie1BhcmFtOlwiK2ErXCIgXCIrYitcIiBzcXVhc2g6ICdcIit6K1wiJyBvcHRpb25hbDogXCIreStcIn1cIn12YXIgdz10aGlzO2Q9ZihkKSxiPWkoZCxiLGUpO3ZhciB4PWsoKTtiPXg/Yi4kYXNBcnJheSh4LFwic2VhcmNoXCI9PT1lKTpiLFwic3RyaW5nXCIhPT1iLm5hbWV8fHh8fFwicGF0aFwiIT09ZXx8ZC52YWx1ZSE9PWN8fChkLnZhbHVlPVwiXCIpO3ZhciB5PWQudmFsdWUhPT1jLHo9bChkLHkpLEE9cChkLHgseSx6KTtNKHRoaXMse2lkOmEsdHlwZTpiLGxvY2F0aW9uOmUsYXJyYXk6eCxzcXVhc2g6eixyZXBsYWNlOkEsaXNPcHRpb25hbDp5LHZhbHVlOnMsZHluYW1pYzpjLGNvbmZpZzpkLHRvU3RyaW5nOnR9KX0sbC5wcm90b3R5cGU9eyQkbmV3OmZ1bmN0aW9uKCl7cmV0dXJuIGQodGhpcyxNKG5ldyBsLHskJHBhcmVudDp0aGlzfSkpfSwkJGtleXM6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sYj1bXSxjPXRoaXMsZD1nKGwucHJvdG90eXBlKTtjOyliLnB1c2goYyksYz1jLiQkcGFyZW50O3JldHVybiBiLnJldmVyc2UoKSxMKGIsZnVuY3Rpb24oYil7TChnKGIpLGZ1bmN0aW9uKGIpey0xPT09aChhLGIpJiYtMT09PWgoZCxiKSYmYS5wdXNoKGIpfSl9KSxhfSwkJHZhbHVlczpmdW5jdGlvbihhKXt2YXIgYj17fSxjPXRoaXM7cmV0dXJuIEwoYy4kJGtleXMoKSxmdW5jdGlvbihkKXtiW2RdPWNbZF0udmFsdWUoYSYmYVtkXSl9KSxifSwkJGVxdWFsczpmdW5jdGlvbihhLGIpe3ZhciBjPSEwLGQ9dGhpcztyZXR1cm4gTChkLiQka2V5cygpLGZ1bmN0aW9uKGUpe3ZhciBmPWEmJmFbZV0sZz1iJiZiW2VdO2RbZV0udHlwZS5lcXVhbHMoZixnKXx8KGM9ITEpfSksY30sJCR2YWxpZGF0ZXM6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9ITAsZj10aGlzO3JldHVybiBMKHRoaXMuJCRrZXlzKCksZnVuY3Rpb24oZyl7ZD1mW2ddLGM9YVtnXSxiPSFjJiZkLmlzT3B0aW9uYWwsZT1lJiYoYnx8ISFkLnR5cGUuaXMoYykpfSksZX0sJCRwYXJlbnQ6Y30sdGhpcy5QYXJhbVNldD1sfWZ1bmN0aW9uIHQoYSxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPS9eXFxeKCg/OlxcXFxbXmEtekEtWjAtOV18W15cXFxcXFxbXFxdXFxeJCorPy4oKXx7fV0rKSopLy5leGVjKGEuc291cmNlKTtyZXR1cm4gbnVsbCE9Yj9iWzFdLnJlcGxhY2UoL1xcXFwoLikvZyxcIiQxXCIpOlwiXCJ9ZnVuY3Rpb24gZihhLGIpe3JldHVybiBhLnJlcGxhY2UoL1xcJChcXCR8XFxkezEsMn0pLyxmdW5jdGlvbihhLGMpe3JldHVybiBiW1wiJFwiPT09Yz8wOk51bWJlcihjKV19KX1mdW5jdGlvbiBnKGEsYixjKXtpZighYylyZXR1cm4hMTt2YXIgZD1hLmludm9rZShiLGIseyRtYXRjaDpjfSk7cmV0dXJuIEcoZCk/ZDohMH1mdW5jdGlvbiBoKGQsZSxmLGcpe2Z1bmN0aW9uIGgoYSxiLGMpe3JldHVyblwiL1wiPT09cD9hOmI/cC5zbGljZSgwLC0xKSthOmM/cC5zbGljZSgxKSthOmF9ZnVuY3Rpb24gbShhKXtmdW5jdGlvbiBiKGEpe3ZhciBiPWEoZixkKTtyZXR1cm4gYj8oSShiKSYmZC5yZXBsYWNlKCkudXJsKGIpLCEwKTohMX1pZighYXx8IWEuZGVmYXVsdFByZXZlbnRlZCl7dmFyIGU9byYmZC51cmwoKT09PW87aWYobz1jLGUpcmV0dXJuITA7dmFyIGcsaD1qLmxlbmd0aDtmb3IoZz0wO2g+ZztnKyspaWYoYihqW2ddKSlyZXR1cm47ayYmYihrKX19ZnVuY3Rpb24gbigpe3JldHVybiBpPWl8fGUuJG9uKFwiJGxvY2F0aW9uQ2hhbmdlU3VjY2Vzc1wiLG0pfXZhciBvLHA9Zy5iYXNlSHJlZigpLHE9ZC51cmwoKTtyZXR1cm4gbHx8bigpLHtzeW5jOmZ1bmN0aW9uKCl7bSgpfSxsaXN0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gbigpfSx1cGRhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/dm9pZChxPWQudXJsKCkpOnZvaWQoZC51cmwoKSE9PXEmJihkLnVybChxKSxkLnJlcGxhY2UoKSkpfSxwdXNoOmZ1bmN0aW9uKGEsYixlKXtkLnVybChhLmZvcm1hdChifHx7fSkpLG89ZSYmZS4kJGF2b2lkUmVzeW5jP2QudXJsKCk6YyxlJiZlLnJlcGxhY2UmJmQucmVwbGFjZSgpfSxocmVmOmZ1bmN0aW9uKGMsZSxmKXtpZighYy52YWxpZGF0ZXMoZSkpcmV0dXJuIG51bGw7dmFyIGc9YS5odG1sNU1vZGUoKTtiLmlzT2JqZWN0KGcpJiYoZz1nLmVuYWJsZWQpO3ZhciBpPWMuZm9ybWF0KGUpO2lmKGY9Znx8e30sZ3x8bnVsbD09PWl8fChpPVwiI1wiK2EuaGFzaFByZWZpeCgpK2kpLGk9aChpLGcsZi5hYnNvbHV0ZSksIWYuYWJzb2x1dGV8fCFpKXJldHVybiBpO3ZhciBqPSFnJiZpP1wiL1wiOlwiXCIsaz1kLnBvcnQoKTtyZXR1cm4gaz04MD09PWt8fDQ0Mz09PWs/XCJcIjpcIjpcIitrLFtkLnByb3RvY29sKCksXCI6Ly9cIixkLmhvc3QoKSxrLGosaV0uam9pbihcIlwiKX19fXZhciBpLGo9W10saz1udWxsLGw9ITE7dGhpcy5ydWxlPWZ1bmN0aW9uKGEpe2lmKCFIKGEpKXRocm93IG5ldyBFcnJvcihcIidydWxlJyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7cmV0dXJuIGoucHVzaChhKSx0aGlzfSx0aGlzLm90aGVyd2lzZT1mdW5jdGlvbihhKXtpZihJKGEpKXt2YXIgYj1hO2E9ZnVuY3Rpb24oKXtyZXR1cm4gYn19ZWxzZSBpZighSChhKSl0aHJvdyBuZXcgRXJyb3IoXCIncnVsZScgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3JldHVybiBrPWEsdGhpc30sdGhpcy53aGVuPWZ1bmN0aW9uKGEsYil7dmFyIGMsaD1JKGIpO2lmKEkoYSkmJihhPWQuY29tcGlsZShhKSksIWgmJiFIKGIpJiYhSyhiKSl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkICdoYW5kbGVyJyBpbiB3aGVuKClcIik7dmFyIGk9e21hdGNoZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gaCYmKGM9ZC5jb21waWxlKGIpLGI9W1wiJG1hdGNoXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGMuZm9ybWF0KGEpfV0pLE0oZnVuY3Rpb24oYyxkKXtyZXR1cm4gZyhjLGIsYS5leGVjKGQucGF0aCgpLGQuc2VhcmNoKCkpKX0se3ByZWZpeDpJKGEucHJlZml4KT9hLnByZWZpeDpcIlwifSl9LHJlZ2V4OmZ1bmN0aW9uKGEsYil7aWYoYS5nbG9iYWx8fGEuc3RpY2t5KXRocm93IG5ldyBFcnJvcihcIndoZW4oKSBSZWdFeHAgbXVzdCBub3QgYmUgZ2xvYmFsIG9yIHN0aWNreVwiKTtyZXR1cm4gaCYmKGM9YixiPVtcIiRtYXRjaFwiLGZ1bmN0aW9uKGEpe3JldHVybiBmKGMsYSl9XSksTShmdW5jdGlvbihjLGQpe3JldHVybiBnKGMsYixhLmV4ZWMoZC5wYXRoKCkpKX0se3ByZWZpeDplKGEpfSl9fSxqPXttYXRjaGVyOmQuaXNNYXRjaGVyKGEpLHJlZ2V4OmEgaW5zdGFuY2VvZiBSZWdFeHB9O2Zvcih2YXIgayBpbiBqKWlmKGpba10pcmV0dXJuIHRoaXMucnVsZShpW2tdKGEsYikpO3Rocm93IG5ldyBFcnJvcihcImludmFsaWQgJ3doYXQnIGluIHdoZW4oKVwiKX0sdGhpcy5kZWZlckludGVyY2VwdD1mdW5jdGlvbihhKXthPT09YyYmKGE9ITApLGw9YX0sdGhpcy4kZ2V0PWgsaC4kaW5qZWN0PVtcIiRsb2NhdGlvblwiLFwiJHJvb3RTY29wZVwiLFwiJGluamVjdG9yXCIsXCIkYnJvd3NlclwiXX1mdW5jdGlvbiB1KGEsZSl7ZnVuY3Rpb24gZihhKXtyZXR1cm4gMD09PWEuaW5kZXhPZihcIi5cIil8fDA9PT1hLmluZGV4T2YoXCJeXCIpfWZ1bmN0aW9uIGwoYSxiKXtpZighYSlyZXR1cm4gYzt2YXIgZD1JKGEpLGU9ZD9hOmEubmFtZSxnPWYoZSk7aWYoZyl7aWYoIWIpdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVmZXJlbmNlIHBvaW50IGdpdmVuIGZvciBwYXRoICdcIitlK1wiJ1wiKTtiPWwoYik7Zm9yKHZhciBoPWUuc3BsaXQoXCIuXCIpLGk9MCxqPWgubGVuZ3RoLGs9YjtqPmk7aSsrKWlmKFwiXCIhPT1oW2ldfHwwIT09aSl7aWYoXCJeXCIhPT1oW2ldKWJyZWFrO2lmKCFrLnBhcmVudCl0aHJvdyBuZXcgRXJyb3IoXCJQYXRoICdcIitlK1wiJyBub3QgdmFsaWQgZm9yIHN0YXRlICdcIitiLm5hbWUrXCInXCIpO2s9ay5wYXJlbnR9ZWxzZSBrPWI7aD1oLnNsaWNlKGkpLmpvaW4oXCIuXCIpLGU9ay5uYW1lKyhrLm5hbWUmJmg/XCIuXCI6XCJcIikraH12YXIgbT15W2VdO3JldHVybiFtfHwhZCYmKGR8fG0hPT1hJiZtLnNlbGYhPT1hKT9jOm19ZnVuY3Rpb24gbShhLGIpe3pbYV18fCh6W2FdPVtdKSx6W2FdLnB1c2goYil9ZnVuY3Rpb24gbyhhKXtmb3IodmFyIGI9elthXXx8W107Yi5sZW5ndGg7KXAoYi5zaGlmdCgpKX1mdW5jdGlvbiBwKGIpe2I9ZChiLHtzZWxmOmIscmVzb2x2ZTpiLnJlc29sdmV8fHt9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZX19KTt2YXIgYz1iLm5hbWU7aWYoIUkoYyl8fGMuaW5kZXhPZihcIkBcIik+PTApdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgbXVzdCBoYXZlIGEgdmFsaWQgbmFtZVwiKTtpZih5Lmhhc093blByb3BlcnR5KGMpKXRocm93IG5ldyBFcnJvcihcIlN0YXRlICdcIitjK1wiJycgaXMgYWxyZWFkeSBkZWZpbmVkXCIpO3ZhciBlPS0xIT09Yy5pbmRleE9mKFwiLlwiKT9jLnN1YnN0cmluZygwLGMubGFzdEluZGV4T2YoXCIuXCIpKTpJKGIucGFyZW50KT9iLnBhcmVudDpKKGIucGFyZW50KSYmSShiLnBhcmVudC5uYW1lKT9iLnBhcmVudC5uYW1lOlwiXCI7aWYoZSYmIXlbZV0pcmV0dXJuIG0oZSxiLnNlbGYpO2Zvcih2YXIgZiBpbiBCKUgoQltmXSkmJihiW2ZdPUJbZl0oYixCLiRkZWxlZ2F0ZXNbZl0pKTtyZXR1cm4geVtjXT1iLCFiW0FdJiZiLnVybCYmYS53aGVuKGIudXJsLFtcIiRtYXRjaFwiLFwiJHN0YXRlUGFyYW1zXCIsZnVuY3Rpb24oYSxjKXt4LiRjdXJyZW50Lm5hdmlnYWJsZT09YiYmaihhLGMpfHx4LnRyYW5zaXRpb25UbyhiLGEse2luaGVyaXQ6ITAsbG9jYXRpb246ITF9KX1dKSxvKGMpLGJ9ZnVuY3Rpb24gcShhKXtyZXR1cm4gYS5pbmRleE9mKFwiKlwiKT4tMX1mdW5jdGlvbiByKGEpe3ZhciBiPWEuc3BsaXQoXCIuXCIpLGM9eC4kY3VycmVudC5uYW1lLnNwbGl0KFwiLlwiKTtpZihcIioqXCI9PT1iWzBdJiYoYz1jLnNsaWNlKGgoYyxiWzFdKSksYy51bnNoaWZ0KFwiKipcIikpLFwiKipcIj09PWJbYi5sZW5ndGgtMV0mJihjLnNwbGljZShoKGMsYltiLmxlbmd0aC0yXSkrMSxOdW1iZXIuTUFYX1ZBTFVFKSxjLnB1c2goXCIqKlwiKSksYi5sZW5ndGghPWMubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylcIipcIj09PWJbZF0mJihjW2RdPVwiKlwiKTtyZXR1cm4gYy5qb2luKFwiXCIpPT09Yi5qb2luKFwiXCIpfWZ1bmN0aW9uIHMoYSxiKXtyZXR1cm4gSShhKSYmIUcoYik/QlthXTpIKGIpJiZJKGEpPyhCW2FdJiYhQi4kZGVsZWdhdGVzW2FdJiYoQi4kZGVsZWdhdGVzW2FdPUJbYV0pLEJbYV09Yix0aGlzKTp0aGlzfWZ1bmN0aW9uIHQoYSxiKXtyZXR1cm4gSihhKT9iPWE6Yi5uYW1lPWEscChiKSx0aGlzfWZ1bmN0aW9uIHUoYSxlLGYsaCxtLG8scCl7ZnVuY3Rpb24gcyhiLGMsZCxmKXt2YXIgZz1hLiRicm9hZGNhc3QoXCIkc3RhdGVOb3RGb3VuZFwiLGIsYyxkKTtpZihnLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuIHAudXBkYXRlKCksQjtpZighZy5yZXRyeSlyZXR1cm4gbnVsbDtpZihmLiRyZXRyeSlyZXR1cm4gcC51cGRhdGUoKSxDO3ZhciBoPXgudHJhbnNpdGlvbj1lLndoZW4oZy5yZXRyeSk7cmV0dXJuIGgudGhlbihmdW5jdGlvbigpe3JldHVybiBoIT09eC50cmFuc2l0aW9uP3U6KGIub3B0aW9ucy4kcmV0cnk9ITAseC50cmFuc2l0aW9uVG8oYi50byxiLnRvUGFyYW1zLGIub3B0aW9ucykpfSxmdW5jdGlvbigpe3JldHVybiBCfSkscC51cGRhdGUoKSxofWZ1bmN0aW9uIHQoYSxjLGQsZyxpLGope3ZhciBsPWQ/YzprKGEucGFyYW1zLiQka2V5cygpLGMpLG49eyRzdGF0ZVBhcmFtczpsfTtpLnJlc29sdmU9bS5yZXNvbHZlKGEucmVzb2x2ZSxuLGkucmVzb2x2ZSxhKTt2YXIgbz1baS5yZXNvbHZlLnRoZW4oZnVuY3Rpb24oYSl7aS5nbG9iYWxzPWF9KV07cmV0dXJuIGcmJm8ucHVzaChnKSxMKGEudmlld3MsZnVuY3Rpb24oYyxkKXt2YXIgZT1jLnJlc29sdmUmJmMucmVzb2x2ZSE9PWEucmVzb2x2ZT9jLnJlc29sdmU6e307ZS4kdGVtcGxhdGU9W2Z1bmN0aW9uKCl7cmV0dXJuIGYubG9hZChkLHt2aWV3OmMsbG9jYWxzOm4scGFyYW1zOmwsbm90aWZ5Omoubm90aWZ5fSl8fFwiXCJ9XSxvLnB1c2gobS5yZXNvbHZlKGUsbixpLnJlc29sdmUsYSkudGhlbihmdW5jdGlvbihmKXtpZihIKGMuY29udHJvbGxlclByb3ZpZGVyKXx8SyhjLmNvbnRyb2xsZXJQcm92aWRlcikpe3ZhciBnPWIuZXh0ZW5kKHt9LGUsbik7Zi4kJGNvbnRyb2xsZXI9aC5pbnZva2UoYy5jb250cm9sbGVyUHJvdmlkZXIsbnVsbCxnKX1lbHNlIGYuJCRjb250cm9sbGVyPWMuY29udHJvbGxlcjtmLiQkc3RhdGU9YSxmLiQkY29udHJvbGxlckFzPWMuY29udHJvbGxlckFzLGlbZF09Zn0pKX0pLGUuYWxsKG8pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gaX0pfXZhciB1PWUucmVqZWN0KG5ldyBFcnJvcihcInRyYW5zaXRpb24gc3VwZXJzZWRlZFwiKSksej1lLnJlamVjdChuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIHByZXZlbnRlZFwiKSksQj1lLnJlamVjdChuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIGFib3J0ZWRcIikpLEM9ZS5yZWplY3QobmV3IEVycm9yKFwidHJhbnNpdGlvbiBmYWlsZWRcIikpO3JldHVybiB3LmxvY2Fscz17cmVzb2x2ZTpudWxsLGdsb2JhbHM6eyRzdGF0ZVBhcmFtczp7fX19LHg9e3BhcmFtczp7fSxjdXJyZW50Oncuc2VsZiwkY3VycmVudDp3LHRyYW5zaXRpb246bnVsbH0seC5yZWxvYWQ9ZnVuY3Rpb24oKXtyZXR1cm4geC50cmFuc2l0aW9uVG8oeC5jdXJyZW50LG8se3JlbG9hZDohMCxpbmhlcml0OiExLG5vdGlmeTohMH0pfSx4LmdvPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geC50cmFuc2l0aW9uVG8oYSxiLE0oe2luaGVyaXQ6ITAscmVsYXRpdmU6eC4kY3VycmVudH0sYykpfSx4LnRyYW5zaXRpb25Ubz1mdW5jdGlvbihiLGMsZil7Yz1jfHx7fSxmPU0oe2xvY2F0aW9uOiEwLGluaGVyaXQ6ITEscmVsYXRpdmU6bnVsbCxub3RpZnk6ITAscmVsb2FkOiExLCRyZXRyeTohMX0sZnx8e30pO3ZhciBnLGo9eC4kY3VycmVudCxtPXgucGFyYW1zLG49ai5wYXRoLHE9bChiLGYucmVsYXRpdmUpO2lmKCFHKHEpKXt2YXIgcj17dG86Yix0b1BhcmFtczpjLG9wdGlvbnM6Zn0seT1zKHIsai5zZWxmLG0sZik7aWYoeSlyZXR1cm4geTtpZihiPXIudG8sYz1yLnRvUGFyYW1zLGY9ci5vcHRpb25zLHE9bChiLGYucmVsYXRpdmUpLCFHKHEpKXtpZighZi5yZWxhdGl2ZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIHN0YXRlICdcIitiK1wiJ1wiKTt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVzb2x2ZSAnXCIrYitcIicgZnJvbSBzdGF0ZSAnXCIrZi5yZWxhdGl2ZStcIidcIil9fWlmKHFbQV0pdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHRyYW5zaXRpb24gdG8gYWJzdHJhY3Qgc3RhdGUgJ1wiK2IrXCInXCIpO2lmKGYuaW5oZXJpdCYmKGM9aShvLGN8fHt9LHguJGN1cnJlbnQscSkpLCFxLnBhcmFtcy4kJHZhbGlkYXRlcyhjKSlyZXR1cm4gQztjPXEucGFyYW1zLiQkdmFsdWVzKGMpLGI9cTt2YXIgQj1iLnBhdGgsRD0wLEU9QltEXSxGPXcubG9jYWxzLEg9W107aWYoIWYucmVsb2FkKWZvcig7RSYmRT09PW5bRF0mJkUub3duUGFyYW1zLiQkZXF1YWxzKGMsbSk7KUY9SFtEXT1FLmxvY2FscyxEKyssRT1CW0RdO2lmKHYoYixqLEYsZikpcmV0dXJuIGIuc2VsZi5yZWxvYWRPblNlYXJjaCE9PSExJiZwLnVwZGF0ZSgpLHgudHJhbnNpdGlvbj1udWxsLGUud2hlbih4LmN1cnJlbnQpO2lmKGM9ayhiLnBhcmFtcy4kJGtleXMoKSxjfHx7fSksZi5ub3RpZnkmJmEuJGJyb2FkY2FzdChcIiRzdGF0ZUNoYW5nZVN0YXJ0XCIsYi5zZWxmLGMsai5zZWxmLG0pLmRlZmF1bHRQcmV2ZW50ZWQpcmV0dXJuIHAudXBkYXRlKCksejtmb3IodmFyIEk9ZS53aGVuKEYpLEo9RDtKPEIubGVuZ3RoO0orKyxFPUJbSl0pRj1IW0pdPWQoRiksST10KEUsYyxFPT09YixJLEYsZik7dmFyIEs9eC50cmFuc2l0aW9uPUkudGhlbihmdW5jdGlvbigpe3ZhciBkLGUsZztpZih4LnRyYW5zaXRpb24hPT1LKXJldHVybiB1O2ZvcihkPW4ubGVuZ3RoLTE7ZD49RDtkLS0pZz1uW2RdLGcuc2VsZi5vbkV4aXQmJmguaW52b2tlKGcuc2VsZi5vbkV4aXQsZy5zZWxmLGcubG9jYWxzLmdsb2JhbHMpLGcubG9jYWxzPW51bGw7Zm9yKGQ9RDtkPEIubGVuZ3RoO2QrKyllPUJbZF0sZS5sb2NhbHM9SFtkXSxlLnNlbGYub25FbnRlciYmaC5pbnZva2UoZS5zZWxmLm9uRW50ZXIsZS5zZWxmLGUubG9jYWxzLmdsb2JhbHMpO3JldHVybiB4LnRyYW5zaXRpb24hPT1LP3U6KHguJGN1cnJlbnQ9Yix4LmN1cnJlbnQ9Yi5zZWxmLHgucGFyYW1zPWMsTih4LnBhcmFtcyxvKSx4LnRyYW5zaXRpb249bnVsbCxmLmxvY2F0aW9uJiZiLm5hdmlnYWJsZSYmcC5wdXNoKGIubmF2aWdhYmxlLnVybCxiLm5hdmlnYWJsZS5sb2NhbHMuZ2xvYmFscy4kc3RhdGVQYXJhbXMseyQkYXZvaWRSZXN5bmM6ITAscmVwbGFjZTpcInJlcGxhY2VcIj09PWYubG9jYXRpb259KSxmLm5vdGlmeSYmYS4kYnJvYWRjYXN0KFwiJHN0YXRlQ2hhbmdlU3VjY2Vzc1wiLGIuc2VsZixjLGouc2VsZixtKSxwLnVwZGF0ZSghMCkseC5jdXJyZW50KX0sZnVuY3Rpb24oZCl7cmV0dXJuIHgudHJhbnNpdGlvbiE9PUs/dTooeC50cmFuc2l0aW9uPW51bGwsZz1hLiRicm9hZGNhc3QoXCIkc3RhdGVDaGFuZ2VFcnJvclwiLGIuc2VsZixjLGouc2VsZixtLGQpLGcuZGVmYXVsdFByZXZlbnRlZHx8cC51cGRhdGUoKSxlLnJlamVjdChkKSl9KTtyZXR1cm4gS30seC5pcz1mdW5jdGlvbihhLGIsZCl7ZD1NKHtyZWxhdGl2ZTp4LiRjdXJyZW50fSxkfHx7fSk7dmFyIGU9bChhLGQucmVsYXRpdmUpO3JldHVybiBHKGUpP3guJGN1cnJlbnQhPT1lPyExOmI/aihlLnBhcmFtcy4kJHZhbHVlcyhiKSxvKTohMDpjfSx4LmluY2x1ZGVzPWZ1bmN0aW9uKGEsYixkKXtpZihkPU0oe3JlbGF0aXZlOnguJGN1cnJlbnR9LGR8fHt9KSxJKGEpJiZxKGEpKXtpZighcihhKSlyZXR1cm4hMTthPXguJGN1cnJlbnQubmFtZX12YXIgZT1sKGEsZC5yZWxhdGl2ZSk7cmV0dXJuIEcoZSk/Ryh4LiRjdXJyZW50LmluY2x1ZGVzW2UubmFtZV0pP2I/aihlLnBhcmFtcy4kJHZhbHVlcyhiKSxvLGcoYikpOiEwOiExOmN9LHguaHJlZj1mdW5jdGlvbihhLGIsZCl7ZD1NKHtsb3NzeTohMCxpbmhlcml0OiEwLGFic29sdXRlOiExLHJlbGF0aXZlOnguJGN1cnJlbnR9LGR8fHt9KTt2YXIgZT1sKGEsZC5yZWxhdGl2ZSk7aWYoIUcoZSkpcmV0dXJuIG51bGw7ZC5pbmhlcml0JiYoYj1pKG8sYnx8e30seC4kY3VycmVudCxlKSk7dmFyIGY9ZSYmZC5sb3NzeT9lLm5hdmlnYWJsZTplO3JldHVybiBmJiZmLnVybCE9PWMmJm51bGwhPT1mLnVybD9wLmhyZWYoZi51cmwsayhlLnBhcmFtcy4kJGtleXMoKSxifHx7fSkse2Fic29sdXRlOmQuYWJzb2x1dGV9KTpudWxsfSx4LmdldD1mdW5jdGlvbihhLGIpe2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBuKGcoeSksZnVuY3Rpb24oYSl7cmV0dXJuIHlbYV0uc2VsZn0pO3ZhciBjPWwoYSxifHx4LiRjdXJyZW50KTtyZXR1cm4gYyYmYy5zZWxmP2Muc2VsZjpudWxsfSx4fWZ1bmN0aW9uIHYoYSxiLGMsZCl7cmV0dXJuIGEhPT1ifHwoYyE9PWIubG9jYWxzfHxkLnJlbG9hZCkmJmEuc2VsZi5yZWxvYWRPblNlYXJjaCE9PSExP3ZvaWQgMDohMH12YXIgdyx4LHk9e30sej17fSxBPVwiYWJzdHJhY3RcIixCPXtwYXJlbnQ6ZnVuY3Rpb24oYSl7aWYoRyhhLnBhcmVudCkmJmEucGFyZW50KXJldHVybiBsKGEucGFyZW50KTt2YXIgYj0vXiguKylcXC5bXi5dKyQvLmV4ZWMoYS5uYW1lKTtyZXR1cm4gYj9sKGJbMV0pOnd9LGRhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50JiZhLnBhcmVudC5kYXRhJiYoYS5kYXRhPWEuc2VsZi5kYXRhPU0oe30sYS5wYXJlbnQuZGF0YSxhLmRhdGEpKSxhLmRhdGF9LHVybDpmdW5jdGlvbihhKXt2YXIgYj1hLnVybCxjPXtwYXJhbXM6YS5wYXJhbXN8fHt9fTtpZihJKGIpKXJldHVyblwiXlwiPT1iLmNoYXJBdCgwKT9lLmNvbXBpbGUoYi5zdWJzdHJpbmcoMSksYyk6KGEucGFyZW50Lm5hdmlnYWJsZXx8dykudXJsLmNvbmNhdChiLGMpO2lmKCFifHxlLmlzTWF0Y2hlcihiKSlyZXR1cm4gYjt0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHVybCAnXCIrYitcIicgaW4gc3RhdGUgJ1wiK2ErXCInXCIpfSxuYXZpZ2FibGU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudXJsP2E6YS5wYXJlbnQ/YS5wYXJlbnQubmF2aWdhYmxlOm51bGx9LG93blBhcmFtczpmdW5jdGlvbihhKXt2YXIgYj1hLnVybCYmYS51cmwucGFyYW1zfHxuZXcgTy5QYXJhbVNldDtyZXR1cm4gTChhLnBhcmFtc3x8e30sZnVuY3Rpb24oYSxjKXtiW2NdfHwoYltjXT1uZXcgTy5QYXJhbShjLG51bGwsYSxcImNvbmZpZ1wiKSl9KSxifSxwYXJhbXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50JiZhLnBhcmVudC5wYXJhbXM/TShhLnBhcmVudC5wYXJhbXMuJCRuZXcoKSxhLm93blBhcmFtcyk6bmV3IE8uUGFyYW1TZXR9LHZpZXdzOmZ1bmN0aW9uKGEpe3ZhciBiPXt9O3JldHVybiBMKEcoYS52aWV3cyk/YS52aWV3czp7XCJcIjphfSxmdW5jdGlvbihjLGQpe2QuaW5kZXhPZihcIkBcIik8MCYmKGQrPVwiQFwiK2EucGFyZW50Lm5hbWUpLGJbZF09Y30pLGJ9LHBhdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50P2EucGFyZW50LnBhdGguY29uY2F0KGEpOltdfSxpbmNsdWRlczpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudD9NKHt9LGEucGFyZW50LmluY2x1ZGVzKTp7fTtyZXR1cm4gYlthLm5hbWVdPSEwLGJ9LCRkZWxlZ2F0ZXM6e319O3c9cCh7bmFtZTpcIlwiLHVybDpcIl5cIix2aWV3czpudWxsLFwiYWJzdHJhY3RcIjohMH0pLHcubmF2aWdhYmxlPW51bGwsdGhpcy5kZWNvcmF0b3I9cyx0aGlzLnN0YXRlPXQsdGhpcy4kZ2V0PXUsdS4kaW5qZWN0PVtcIiRyb290U2NvcGVcIixcIiRxXCIsXCIkdmlld1wiLFwiJGluamVjdG9yXCIsXCIkcmVzb2x2ZVwiLFwiJHN0YXRlUGFyYW1zXCIsXCIkdXJsUm91dGVyXCIsXCIkbG9jYXRpb25cIixcIiR1cmxNYXRjaGVyRmFjdG9yeVwiXX1mdW5jdGlvbiB2KCl7ZnVuY3Rpb24gYShhLGIpe3JldHVybntsb2FkOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj17dGVtcGxhdGU6bnVsbCxjb250cm9sbGVyOm51bGwsdmlldzpudWxsLGxvY2FsczpudWxsLG5vdGlmeTohMCxhc3luYzohMCxwYXJhbXM6e319O3JldHVybiBkPU0oZixkKSxkLnZpZXcmJihlPWIuZnJvbUNvbmZpZyhkLnZpZXcsZC5wYXJhbXMsZC5sb2NhbHMpKSxlJiZkLm5vdGlmeSYmYS4kYnJvYWRjYXN0KFwiJHZpZXdDb250ZW50TG9hZGluZ1wiLGQpLGV9fX10aGlzLiRnZXQ9YSxhLiRpbmplY3Q9W1wiJHJvb3RTY29wZVwiLFwiJHRlbXBsYXRlRmFjdG9yeVwiXX1mdW5jdGlvbiB3KCl7dmFyIGE9ITE7dGhpcy51c2VBbmNob3JTY3JvbGw9ZnVuY3Rpb24oKXthPSEwfSx0aGlzLiRnZXQ9W1wiJGFuY2hvclNjcm9sbFwiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihiLGMpe3JldHVybiBhP2I6ZnVuY3Rpb24oYSl7YyhmdW5jdGlvbigpe2FbMF0uc2Nyb2xsSW50b1ZpZXcoKX0sMCwhMSl9fV19ZnVuY3Rpb24geChhLGMsZCxlKXtmdW5jdGlvbiBmKCl7cmV0dXJuIGMuaGFzP2Z1bmN0aW9uKGEpe3JldHVybiBjLmhhcyhhKT9jLmdldChhKTpudWxsfTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIGMuZ2V0KGEpfWNhdGNoKGIpe3JldHVybiBudWxsfX19ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWZ1bmN0aW9uKCl7cmV0dXJue2VudGVyOmZ1bmN0aW9uKGEsYixjKXtiLmFmdGVyKGEpLGMoKX0sbGVhdmU6ZnVuY3Rpb24oYSxiKXthLnJlbW92ZSgpLGIoKX19fTtpZihqKXJldHVybntlbnRlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ai5lbnRlcihhLG51bGwsYixjKTtkJiZkLnRoZW4mJmQudGhlbihjKX0sbGVhdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz1qLmxlYXZlKGEsYik7YyYmYy50aGVuJiZjLnRoZW4oYil9fTtpZihpKXt2YXIgZD1pJiZpKGIsYSk7cmV0dXJue2VudGVyOmZ1bmN0aW9uKGEsYixjKXtkLmVudGVyKGEsbnVsbCxiKSxjKCl9LGxlYXZlOmZ1bmN0aW9uKGEsYil7ZC5sZWF2ZShhKSxiKCl9fX1yZXR1cm4gYygpfXZhciBoPWYoKSxpPWgoXCIkYW5pbWF0b3JcIiksaj1oKFwiJGFuaW1hdGVcIiksaz17cmVzdHJpY3Q6XCJFQ0FcIix0ZXJtaW5hbDohMCxwcmlvcml0eTo0MDAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixjb21waWxlOmZ1bmN0aW9uKGMsZixoKXtyZXR1cm4gZnVuY3Rpb24oYyxmLGkpe2Z1bmN0aW9uIGooKXtsJiYobC5yZW1vdmUoKSxsPW51bGwpLG4mJihuLiRkZXN0cm95KCksbj1udWxsKSxtJiYoci5sZWF2ZShtLGZ1bmN0aW9uKCl7bD1udWxsfSksbD1tLG09bnVsbCl9ZnVuY3Rpb24gayhnKXt2YXIgayxsPXooYyxpLGYsZSkscz1sJiZhLiRjdXJyZW50JiZhLiRjdXJyZW50LmxvY2Fsc1tsXTtpZihnfHxzIT09byl7az1jLiRuZXcoKSxvPWEuJGN1cnJlbnQubG9jYWxzW2xdO3ZhciB0PWgoayxmdW5jdGlvbihhKXtyLmVudGVyKGEsZixmdW5jdGlvbigpe24mJm4uJGVtaXQoXCIkdmlld0NvbnRlbnRBbmltYXRpb25FbmRlZFwiKSwoYi5pc0RlZmluZWQocSkmJiFxfHxjLiRldmFsKHEpKSYmZChhKX0pLGooKX0pO209dCxuPWssbi4kZW1pdChcIiR2aWV3Q29udGVudExvYWRlZFwiKSxuLiRldmFsKHApfX12YXIgbCxtLG4sbyxwPWkub25sb2FkfHxcIlwiLHE9aS5hdXRvc2Nyb2xsLHI9ZyhpLGMpO2MuJG9uKFwiJHN0YXRlQ2hhbmdlU3VjY2Vzc1wiLGZ1bmN0aW9uKCl7ayghMSl9KSxjLiRvbihcIiR2aWV3Q29udGVudExvYWRpbmdcIixmdW5jdGlvbigpe2soITEpfSksayghMCl9fX07cmV0dXJuIGt9ZnVuY3Rpb24geShhLGIsYyxkKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTotNDAwLGNvbXBpbGU6ZnVuY3Rpb24oZSl7dmFyIGY9ZS5odG1sKCk7cmV0dXJuIGZ1bmN0aW9uKGUsZyxoKXt2YXIgaT1jLiRjdXJyZW50LGo9eihlLGgsZyxkKSxrPWkmJmkubG9jYWxzW2pdO2lmKGspe2cuZGF0YShcIiR1aVZpZXdcIix7bmFtZTpqLHN0YXRlOmsuJCRzdGF0ZX0pLGcuaHRtbChrLiR0ZW1wbGF0ZT9rLiR0ZW1wbGF0ZTpmKTt2YXIgbD1hKGcuY29udGVudHMoKSk7aWYoay4kJGNvbnRyb2xsZXIpe2suJHNjb3BlPWU7dmFyIG09YihrLiQkY29udHJvbGxlcixrKTtrLiQkY29udHJvbGxlckFzJiYoZVtrLiQkY29udHJvbGxlckFzXT1tKSxnLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLG0pLGcuY2hpbGRyZW4oKS5kYXRhKFwiJG5nQ29udHJvbGxlckNvbnRyb2xsZXJcIixtKX1sKGUpfX19fX1mdW5jdGlvbiB6KGEsYixjLGQpe3ZhciBlPWQoYi51aVZpZXd8fGIubmFtZXx8XCJcIikoYSksZj1jLmluaGVyaXRlZERhdGEoXCIkdWlWaWV3XCIpO3JldHVybiBlLmluZGV4T2YoXCJAXCIpPj0wP2U6ZStcIkBcIisoZj9mLnN0YXRlLm5hbWU6XCJcIil9ZnVuY3Rpb24gQShhLGIpe3ZhciBjLGQ9YS5tYXRjaCgvXlxccyooe1tefV0qfSlcXHMqJC8pO2lmKGQmJihhPWIrXCIoXCIrZFsxXStcIilcIiksYz1hLnJlcGxhY2UoL1xcbi9nLFwiIFwiKS5tYXRjaCgvXihbXihdKz8pXFxzKihcXCgoLiopXFwpKT8kLyksIWN8fDQhPT1jLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXRlIHJlZiAnXCIrYStcIidcIik7cmV0dXJue3N0YXRlOmNbMV0scGFyYW1FeHByOmNbM118fG51bGx9fWZ1bmN0aW9uIEIoYSl7dmFyIGI9YS5wYXJlbnQoKS5pbmhlcml0ZWREYXRhKFwiJHVpVmlld1wiKTtyZXR1cm4gYiYmYi5zdGF0ZSYmYi5zdGF0ZS5uYW1lP2Iuc3RhdGU6dm9pZCAwfWZ1bmN0aW9uIEMoYSxjKXt2YXIgZD1bXCJsb2NhdGlvblwiLFwiaW5oZXJpdFwiLFwicmVsb2FkXCJdO3JldHVybntyZXN0cmljdDpcIkFcIixyZXF1aXJlOltcIj9edWlTcmVmQWN0aXZlXCIsXCI/XnVpU3JlZkFjdGl2ZUVxXCJdLGxpbms6ZnVuY3Rpb24oZSxmLGcsaCl7dmFyIGk9QShnLnVpU3JlZixhLmN1cnJlbnQubmFtZSksaj1udWxsLGs9QihmKXx8YS4kY3VycmVudCxsPW51bGwsbT1cIkFcIj09PWYucHJvcChcInRhZ05hbWVcIiksbj1cIkZPUk1cIj09PWZbMF0ubm9kZU5hbWUsbz1uP1wiYWN0aW9uXCI6XCJocmVmXCIscD0hMCxxPXtyZWxhdGl2ZTprLGluaGVyaXQ6ITB9LHI9ZS4kZXZhbChnLnVpU3JlZk9wdHMpfHx7fTtiLmZvckVhY2goZCxmdW5jdGlvbihhKXthIGluIHImJihxW2FdPXJbYV0pfSk7dmFyIHM9ZnVuY3Rpb24oYyl7aWYoYyYmKGo9Yi5jb3B5KGMpKSxwKXtsPWEuaHJlZihpLnN0YXRlLGoscSk7dmFyIGQ9aFsxXXx8aFswXTtyZXR1cm4gZCYmZC4kJHNldFN0YXRlSW5mbyhpLnN0YXRlLGopLG51bGw9PT1sPyhwPSExLCExKTp2b2lkIGcuJHNldChvLGwpfX07aS5wYXJhbUV4cHImJihlLiR3YXRjaChpLnBhcmFtRXhwcixmdW5jdGlvbihhKXthIT09aiYmcyhhKX0sITApLGo9Yi5jb3B5KGUuJGV2YWwoaS5wYXJhbUV4cHIpKSkscygpLG58fGYuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oYil7dmFyIGQ9Yi53aGljaHx8Yi5idXR0b247aWYoIShkPjF8fGIuY3RybEtleXx8Yi5tZXRhS2V5fHxiLnNoaWZ0S2V5fHxmLmF0dHIoXCJ0YXJnZXRcIikpKXt2YXIgZT1jKGZ1bmN0aW9uKCl7YS5nbyhpLnN0YXRlLGoscSl9KTtiLnByZXZlbnREZWZhdWx0KCk7dmFyIGc9bSYmIWw/MTowO2IucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtnLS08PTAmJmMuY2FuY2VsKGUpfX19KX19fWZ1bmN0aW9uIEQoYSxiLGMpe3JldHVybntyZXN0cmljdDpcIkFcIixjb250cm9sbGVyOltcIiRzY29wZVwiLFwiJGVsZW1lbnRcIixcIiRhdHRyc1wiLGZ1bmN0aW9uKGIsZCxlKXtmdW5jdGlvbiBmKCl7ZygpP2QuYWRkQ2xhc3Moaik6ZC5yZW1vdmVDbGFzcyhqKX1mdW5jdGlvbiBnKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUudWlTcmVmQWN0aXZlRXE/aCYmYS5pcyhoLm5hbWUsaSk6aCYmYS5pbmNsdWRlcyhoLm5hbWUsaSl9dmFyIGgsaSxqO2o9YyhlLnVpU3JlZkFjdGl2ZUVxfHxlLnVpU3JlZkFjdGl2ZXx8XCJcIiwhMSkoYiksdGhpcy4kJHNldFN0YXRlSW5mbz1mdW5jdGlvbihiLGMpe2g9YS5nZXQoYixCKGQpKSxpPWMsZigpfSxiLiRvbihcIiRzdGF0ZUNoYW5nZVN1Y2Nlc3NcIixmKX1dfX1mdW5jdGlvbiBFKGEpe3ZhciBiPWZ1bmN0aW9uKGIpe3JldHVybiBhLmlzKGIpfTtyZXR1cm4gYi4kc3RhdGVmdWw9ITAsYn1mdW5jdGlvbiBGKGEpe3ZhciBiPWZ1bmN0aW9uKGIpe3JldHVybiBhLmluY2x1ZGVzKGIpfTtyZXR1cm4gYi4kc3RhdGVmdWw9ITAsYn12YXIgRz1iLmlzRGVmaW5lZCxIPWIuaXNGdW5jdGlvbixJPWIuaXNTdHJpbmcsSj1iLmlzT2JqZWN0LEs9Yi5pc0FycmF5LEw9Yi5mb3JFYWNoLE09Yi5leHRlbmQsTj1iLmNvcHk7Yi5tb2R1bGUoXCJ1aS5yb3V0ZXIudXRpbFwiLFtcIm5nXCJdKSxiLm1vZHVsZShcInVpLnJvdXRlci5yb3V0ZXJcIixbXCJ1aS5yb3V0ZXIudXRpbFwiXSksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIixbXCJ1aS5yb3V0ZXIucm91dGVyXCIsXCJ1aS5yb3V0ZXIudXRpbFwiXSksYi5tb2R1bGUoXCJ1aS5yb3V0ZXJcIixbXCJ1aS5yb3V0ZXIuc3RhdGVcIl0pLGIubW9kdWxlKFwidWkucm91dGVyLmNvbXBhdFwiLFtcInVpLnJvdXRlclwiXSksby4kaW5qZWN0PVtcIiRxXCIsXCIkaW5qZWN0b3JcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIudXRpbFwiKS5zZXJ2aWNlKFwiJHJlc29sdmVcIixvKSxwLiRpbmplY3Q9W1wiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkaW5qZWN0b3JcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIudXRpbFwiKS5zZXJ2aWNlKFwiJHRlbXBsYXRlRmFjdG9yeVwiLHApO3ZhciBPO3EucHJvdG90eXBlLmNvbmNhdD1mdW5jdGlvbihhLGIpe3ZhciBjPXtjYXNlSW5zZW5zaXRpdmU6Ty5jYXNlSW5zZW5zaXRpdmUoKSxzdHJpY3Q6Ty5zdHJpY3RNb2RlKCksc3F1YXNoOk8uZGVmYXVsdFNxdWFzaFBvbGljeSgpfTtyZXR1cm4gbmV3IHEodGhpcy5zb3VyY2VQYXRoK2ErdGhpcy5zb3VyY2VTZWFyY2gsTShjLGIpLHRoaXMpfSxxLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNvdXJjZX0scS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gYS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKX1mdW5jdGlvbiBjKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcXFwtLyxcIi1cIil9dmFyIGQ9YihhKS5zcGxpdCgvLSg/IVxcXFwpLyksZT1uKGQsYik7cmV0dXJuIG4oZSxjKS5yZXZlcnNlKCl9dmFyIGQ9dGhpcy5yZWdleHAuZXhlYyhhKTtpZighZClyZXR1cm4gbnVsbDtiPWJ8fHt9O3ZhciBlLGYsZyxoPXRoaXMucGFyYW1ldGVycygpLGk9aC5sZW5ndGgsaj10aGlzLnNlZ21lbnRzLmxlbmd0aC0xLGs9e307aWYoaiE9PWQubGVuZ3RoLTEpdGhyb3cgbmV3IEVycm9yKFwiVW5iYWxhbmNlZCBjYXB0dXJlIGdyb3VwIGluIHJvdXRlICdcIit0aGlzLnNvdXJjZStcIidcIik7Zm9yKGU9MDtqPmU7ZSsrKXtnPWhbZV07dmFyIGw9dGhpcy5wYXJhbXNbZ10sbT1kW2UrMV07Zm9yKGY9MDtmPGwucmVwbGFjZTtmKyspbC5yZXBsYWNlW2ZdLmZyb209PT1tJiYobT1sLnJlcGxhY2VbZl0udG8pO20mJmwuYXJyYXk9PT0hMCYmKG09YyhtKSksa1tnXT1sLnZhbHVlKG0pfWZvcig7aT5lO2UrKylnPWhbZV0sa1tnXT10aGlzLnBhcmFtc1tnXS52YWx1ZShiW2ddKTtyZXR1cm4ga30scS5wcm90b3R5cGUucGFyYW1ldGVycz1mdW5jdGlvbihhKXtyZXR1cm4gRyhhKT90aGlzLnBhcmFtc1thXXx8bnVsbDp0aGlzLiQkcGFyYW1OYW1lc30scS5wcm90b3R5cGUudmFsaWRhdGVzPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhcmFtcy4kJHZhbGlkYXRlcyhhKX0scS5wcm90b3R5cGUuZm9ybWF0PWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChhKS5yZXBsYWNlKC8tL2csZnVuY3Rpb24oYSl7cmV0dXJuXCIlNUMlXCIrYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSl9YT1hfHx7fTt2YXIgYz10aGlzLnNlZ21lbnRzLGQ9dGhpcy5wYXJhbWV0ZXJzKCksZT10aGlzLnBhcmFtcztpZighdGhpcy52YWxpZGF0ZXMoYSkpcmV0dXJuIG51bGw7dmFyIGYsZz0hMSxoPWMubGVuZ3RoLTEsaT1kLmxlbmd0aCxqPWNbMF07Zm9yKGY9MDtpPmY7ZisrKXt2YXIgaz1oPmYsbD1kW2ZdLG09ZVtsXSxvPW0udmFsdWUoYVtsXSkscD1tLmlzT3B0aW9uYWwmJm0udHlwZS5lcXVhbHMobS52YWx1ZSgpLG8pLHE9cD9tLnNxdWFzaDohMSxyPW0udHlwZS5lbmNvZGUobyk7aWYoayl7dmFyIHM9Y1tmKzFdO2lmKHE9PT0hMSludWxsIT1yJiYoais9SyhyKT9uKHIsYikuam9pbihcIi1cIik6ZW5jb2RlVVJJQ29tcG9uZW50KHIpKSxqKz1zO2Vsc2UgaWYocT09PSEwKXt2YXIgdD1qLm1hdGNoKC9cXC8kLyk/L1xcLz8oLiopLzovKC4qKS87ais9cy5tYXRjaCh0KVsxXX1lbHNlIEkocSkmJihqKz1xK3MpfWVsc2V7aWYobnVsbD09cnx8cCYmcSE9PSExKWNvbnRpbnVlO0socil8fChyPVtyXSkscj1uKHIsZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKFwiJlwiK2wrXCI9XCIpLGorPShnP1wiJlwiOlwiP1wiKSsobCtcIj1cIityKSxnPSEwfX1yZXR1cm4gan0sci5wcm90b3R5cGUuaXM9ZnVuY3Rpb24oKXtyZXR1cm4hMH0sci5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBhfSxyLnByb3RvdHlwZS5kZWNvZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHIucHJvdG90eXBlLmVxdWFscz1mdW5jdGlvbihhLGIpe3JldHVybiBhPT1ifSxyLnByb3RvdHlwZS4kc3ViUGF0dGVybj1mdW5jdGlvbigpe3ZhciBhPXRoaXMucGF0dGVybi50b1N0cmluZygpO3JldHVybiBhLnN1YnN0cigxLGEubGVuZ3RoLTIpfSxyLnByb3RvdHlwZS5wYXR0ZXJuPS8uKi8sci5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIntUeXBlOlwiK3RoaXMubmFtZStcIn1cIn0sci5wcm90b3R5cGUuJGFzQXJyYXk9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBkKGEsYil7ZnVuY3Rpb24gZChhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhW2JdLmFwcGx5KGEsYXJndW1lbnRzKX19ZnVuY3Rpb24gZShhKXtyZXR1cm4gSyhhKT9hOkcoYSk/W2FdOltdfWZ1bmN0aW9uIGYoYSl7c3dpdGNoKGEubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIGM7Y2FzZSAxOnJldHVyblwiYXV0b1wiPT09Yj9hWzBdOmE7ZGVmYXVsdDpyZXR1cm4gYX19ZnVuY3Rpb24gZyhhKXtyZXR1cm4hYX1mdW5jdGlvbiBoKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2M9ZShjKTt2YXIgZD1uKGMsYSk7cmV0dXJuIGI9PT0hMD8wPT09bShkLGcpLmxlbmd0aDpmKGQpfX1mdW5jdGlvbiBpKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe3ZhciBkPWUoYiksZj1lKGMpO2lmKGQubGVuZ3RoIT09Zi5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBnPTA7ZzxkLmxlbmd0aDtnKyspaWYoIWEoZFtnXSxmW2ddKSlyZXR1cm4hMTtyZXR1cm4hMH19dGhpcy5lbmNvZGU9aChkKGEsXCJlbmNvZGVcIikpLHRoaXMuZGVjb2RlPWgoZChhLFwiZGVjb2RlXCIpKSx0aGlzLmlzPWgoZChhLFwiaXNcIiksITApLHRoaXMuZXF1YWxzPWkoZChhLFwiZXF1YWxzXCIpKSx0aGlzLnBhdHRlcm49YS5wYXR0ZXJuLHRoaXMuJGFycmF5TW9kZT1ifWlmKCFhKXJldHVybiB0aGlzO2lmKFwiYXV0b1wiPT09YSYmIWIpdGhyb3cgbmV3IEVycm9yKFwiJ2F1dG8nIGFycmF5IG1vZGUgaXMgZm9yIHF1ZXJ5IHBhcmFtZXRlcnMgb25seVwiKTtyZXR1cm4gbmV3IGQodGhpcyxhKX0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIudXRpbFwiKS5wcm92aWRlcihcIiR1cmxNYXRjaGVyRmFjdG9yeVwiLHMpLGIubW9kdWxlKFwidWkucm91dGVyLnV0aWxcIikucnVuKFtcIiR1cmxNYXRjaGVyRmFjdG9yeVwiLGZ1bmN0aW9uKCl7fV0pLHQuJGluamVjdD1bXCIkbG9jYXRpb25Qcm92aWRlclwiLFwiJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXJcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIucm91dGVyXCIpLnByb3ZpZGVyKFwiJHVybFJvdXRlclwiLHQpLHUuJGluamVjdD1bXCIkdXJsUm91dGVyUHJvdmlkZXJcIixcIiR1cmxNYXRjaGVyRmFjdG9yeVByb3ZpZGVyXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLnZhbHVlKFwiJHN0YXRlUGFyYW1zXCIse30pLnByb3ZpZGVyKFwiJHN0YXRlXCIsdSksdi4kaW5qZWN0PVtdLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLnByb3ZpZGVyKFwiJHZpZXdcIix2KSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5wcm92aWRlcihcIiR1aVZpZXdTY3JvbGxcIix3KSx4LiRpbmplY3Q9W1wiJHN0YXRlXCIsXCIkaW5qZWN0b3JcIixcIiR1aVZpZXdTY3JvbGxcIixcIiRpbnRlcnBvbGF0ZVwiXSx5LiRpbmplY3Q9W1wiJGNvbXBpbGVcIixcIiRjb250cm9sbGVyXCIsXCIkc3RhdGVcIixcIiRpbnRlcnBvbGF0ZVwiXSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5kaXJlY3RpdmUoXCJ1aVZpZXdcIix4KSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5kaXJlY3RpdmUoXCJ1aVZpZXdcIix5KSxDLiRpbmplY3Q9W1wiJHN0YXRlXCIsXCIkdGltZW91dFwiXSxELiRpbmplY3Q9W1wiJHN0YXRlXCIsXCIkc3RhdGVQYXJhbXNcIixcIiRpbnRlcnBvbGF0ZVwiXSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5kaXJlY3RpdmUoXCJ1aVNyZWZcIixDKS5kaXJlY3RpdmUoXCJ1aVNyZWZBY3RpdmVcIixEKS5kaXJlY3RpdmUoXCJ1aVNyZWZBY3RpdmVFcVwiLEQpLEUuJGluamVjdD1bXCIkc3RhdGVcIl0sRi4kaW5qZWN0PVtcIiRzdGF0ZVwiXSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiKS5maWx0ZXIoXCJpc1N0YXRlXCIsRSkuZmlsdGVyKFwiaW5jbHVkZWRCeVN0YXRlXCIsRil9KHdpbmRvdyx3aW5kb3cuYW5ndWxhcik7IiwiLypcbiBBbmd1bGFySlMgdjEuMi4yOFxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXG4gTGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKFcsWCx1KXsndXNlIHN0cmljdCc7ZnVuY3Rpb24geihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF0sYyxhPVwiW1wiKyhiP2IrXCI6XCI6XCJcIikrYStcIl0gaHR0cDovL2Vycm9ycy5hbmd1bGFyanMub3JnLzEuMi4yOC9cIisoYj9iK1wiL1wiOlwiXCIpK2E7Zm9yKGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWE9YSsoMT09Yz9cIj9cIjpcIiZcIikrXCJwXCIrKGMtMSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFwiZnVuY3Rpb25cIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9hcmd1bWVudHNbY10udG9TdHJpbmcoKS5yZXBsYWNlKC8gXFx7W1xcc1xcU10qJC8sXCJcIik6XCJ1bmRlZmluZWRcIj09dHlwZW9mIGFyZ3VtZW50c1tjXT9cInVuZGVmaW5lZFwiOlwic3RyaW5nXCIhPXR5cGVvZiBhcmd1bWVudHNbY10/SlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzW2NdKTphcmd1bWVudHNbY10pO3JldHVybiBFcnJvcihhKX19ZnVuY3Rpb24gU2EoYil7aWYobnVsbD09Ynx8SmEoYikpcmV0dXJuITE7XG52YXIgYT1iLmxlbmd0aDtyZXR1cm4gMT09PWIubm9kZVR5cGUmJmE/ITA6RyhiKXx8TChiKXx8MD09PWF8fFwibnVtYmVyXCI9PT10eXBlb2YgYSYmMDxhJiZhLTEgaW4gYn1mdW5jdGlvbiByKGIsYSxjKXt2YXIgZDtpZihiKWlmKE4oYikpZm9yKGQgaW4gYilcInByb3RvdHlwZVwiPT1kfHwoXCJsZW5ndGhcIj09ZHx8XCJuYW1lXCI9PWR8fGIuaGFzT3duUHJvcGVydHkmJiFiLmhhc093blByb3BlcnR5KGQpKXx8YS5jYWxsKGMsYltkXSxkKTtlbHNlIGlmKEwoYil8fFNhKGIpKWZvcihkPTA7ZDxiLmxlbmd0aDtkKyspYS5jYWxsKGMsYltkXSxkKTtlbHNlIGlmKGIuZm9yRWFjaCYmYi5mb3JFYWNoIT09ciliLmZvckVhY2goYSxjKTtlbHNlIGZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmYS5jYWxsKGMsYltkXSxkKTtyZXR1cm4gYn1mdW5jdGlvbiBYYihiKXt2YXIgYT1bXSxjO2ZvcihjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmYS5wdXNoKGMpO3JldHVybiBhLnNvcnQoKX1mdW5jdGlvbiBTYyhiLFxuYSxjKXtmb3IodmFyIGQ9WGIoYiksZT0wO2U8ZC5sZW5ndGg7ZSsrKWEuY2FsbChjLGJbZFtlXV0sZFtlXSk7cmV0dXJuIGR9ZnVuY3Rpb24gWWIoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7YihjLGEpfX1mdW5jdGlvbiBpYigpe2Zvcih2YXIgYj1uYS5sZW5ndGgsYTtiOyl7Yi0tO2E9bmFbYl0uY2hhckNvZGVBdCgwKTtpZig1Nz09YSlyZXR1cm4gbmFbYl09XCJBXCIsbmEuam9pbihcIlwiKTtpZig5MD09YSluYVtiXT1cIjBcIjtlbHNlIHJldHVybiBuYVtiXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGErMSksbmEuam9pbihcIlwiKX1uYS51bnNoaWZ0KFwiMFwiKTtyZXR1cm4gbmEuam9pbihcIlwiKX1mdW5jdGlvbiBaYihiLGEpe2E/Yi4kJGhhc2hLZXk9YTpkZWxldGUgYi4kJGhhc2hLZXl9ZnVuY3Rpb24gRShiKXt2YXIgYT1iLiQkaGFzaEtleTtyKGFyZ3VtZW50cyxmdW5jdGlvbihhKXthIT09YiYmcihhLGZ1bmN0aW9uKGEsYyl7YltjXT1hfSl9KTtaYihiLGEpO3JldHVybiBifWZ1bmN0aW9uIFUoYil7cmV0dXJuIHBhcnNlSW50KGIsXG4xMCl9ZnVuY3Rpb24gJGIoYixhKXtyZXR1cm4gRShuZXcgKEUoZnVuY3Rpb24oKXt9LHtwcm90b3R5cGU6Yn0pKSxhKX1mdW5jdGlvbiB2KCl7fWZ1bmN0aW9uIGdhKGIpe3JldHVybiBifWZ1bmN0aW9uIGFhKGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBifX1mdW5jdGlvbiBGKGIpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBEKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgYn1mdW5jdGlvbiBUKGIpe3JldHVybiBudWxsIT1iJiZcIm9iamVjdFwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gRyhiKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gamIoYil7cmV0dXJuXCJudW1iZXJcIj09PXR5cGVvZiBifWZ1bmN0aW9uIHZhKGIpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09QmEuY2FsbChiKX1mdW5jdGlvbiBOKGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBifWZ1bmN0aW9uIGtiKGIpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1CYS5jYWxsKGIpfVxuZnVuY3Rpb24gSmEoYil7cmV0dXJuIGImJmIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWx9ZnVuY3Rpb24gVGMoYil7cmV0dXJuISghYnx8IShiLm5vZGVOYW1lfHxiLnByb3AmJmIuYXR0ciYmYi5maW5kKSl9ZnVuY3Rpb24gVWMoYixhLGMpe3ZhciBkPVtdO3IoYixmdW5jdGlvbihiLGYsZyl7ZC5wdXNoKGEuY2FsbChjLGIsZixnKSl9KTtyZXR1cm4gZH1mdW5jdGlvbiBUYShiLGEpe2lmKGIuaW5kZXhPZilyZXR1cm4gYi5pbmRleE9mKGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGE9PT1iW2NdKXJldHVybiBjO3JldHVybi0xfWZ1bmN0aW9uIFVhKGIsYSl7dmFyIGM9VGEoYixhKTswPD1jJiZiLnNwbGljZShjLDEpO3JldHVybiBhfWZ1bmN0aW9uIEthKGIsYSxjLGQpe2lmKEphKGIpfHxiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNoKXRocm93IFZhKFwiY3B3c1wiKTtpZihhKXtpZihiPT09YSl0aHJvdyBWYShcImNwaVwiKTtjPWN8fFtdO1xuZD1kfHxbXTtpZihUKGIpKXt2YXIgZT1UYShjLGIpO2lmKC0xIT09ZSlyZXR1cm4gZFtlXTtjLnB1c2goYik7ZC5wdXNoKGEpfWlmKEwoYikpZm9yKHZhciBmPWEubGVuZ3RoPTA7ZjxiLmxlbmd0aDtmKyspZT1LYShiW2ZdLG51bGwsYyxkKSxUKGJbZl0pJiYoYy5wdXNoKGJbZl0pLGQucHVzaChlKSksYS5wdXNoKGUpO2Vsc2V7dmFyIGc9YS4kJGhhc2hLZXk7TChhKT9hLmxlbmd0aD0wOnIoYSxmdW5jdGlvbihiLGMpe2RlbGV0ZSBhW2NdfSk7Zm9yKGYgaW4gYillPUthKGJbZl0sbnVsbCxjLGQpLFQoYltmXSkmJihjLnB1c2goYltmXSksZC5wdXNoKGUpKSxhW2ZdPWU7WmIoYSxnKX19ZWxzZSBpZihhPWIpTChiKT9hPUthKGIsW10sYyxkKTp2YShiKT9hPW5ldyBEYXRlKGIuZ2V0VGltZSgpKTprYihiKT8oYT1SZWdFeHAoYi5zb3VyY2UsYi50b1N0cmluZygpLm1hdGNoKC9bXlxcL10qJC8pWzBdKSxhLmxhc3RJbmRleD1iLmxhc3RJbmRleCk6VChiKSYmKGE9S2EoYix7fSxjLGQpKTtcbnJldHVybiBhfWZ1bmN0aW9uIGhhKGIsYSl7aWYoTChiKSl7YT1hfHxbXTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKylhW2NdPWJbY119ZWxzZSBpZihUKGIpKWZvcihjIGluIGE9YXx8e30sYikhbGIuY2FsbChiLGMpfHxcIiRcIj09PWMuY2hhckF0KDApJiZcIiRcIj09PWMuY2hhckF0KDEpfHwoYVtjXT1iW2NdKTtyZXR1cm4gYXx8Yn1mdW5jdGlvbiBDYShiLGEpe2lmKGI9PT1hKXJldHVybiEwO2lmKG51bGw9PT1ifHxudWxsPT09YSlyZXR1cm4hMTtpZihiIT09YiYmYSE9PWEpcmV0dXJuITA7dmFyIGM9dHlwZW9mIGIsZDtpZihjPT10eXBlb2YgYSYmXCJvYmplY3RcIj09YylpZihMKGIpKXtpZighTChhKSlyZXR1cm4hMTtpZigoYz1iLmxlbmd0aCk9PWEubGVuZ3RoKXtmb3IoZD0wO2Q8YztkKyspaWYoIUNhKGJbZF0sYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9fWVsc2V7aWYodmEoYikpcmV0dXJuIHZhKGEpP2lzTmFOKGIuZ2V0VGltZSgpKSYmaXNOYU4oYS5nZXRUaW1lKCkpfHxiLmdldFRpbWUoKT09PVxuYS5nZXRUaW1lKCk6ITE7aWYoa2IoYikmJmtiKGEpKXJldHVybiBiLnRvU3RyaW5nKCk9PWEudG9TdHJpbmcoKTtpZihiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNofHxhJiZhLiRldmFsQXN5bmMmJmEuJHdhdGNofHxKYShiKXx8SmEoYSl8fEwoYSkpcmV0dXJuITE7Yz17fTtmb3IoZCBpbiBiKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJiFOKGJbZF0pKXtpZighQ2EoYltkXSxhW2RdKSlyZXR1cm4hMTtjW2RdPSEwfWZvcihkIGluIGEpaWYoIWMuaGFzT3duUHJvcGVydHkoZCkmJlwiJFwiIT09ZC5jaGFyQXQoMCkmJmFbZF0hPT11JiYhTihhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBCYihiLGEpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aD93YS5jYWxsKGFyZ3VtZW50cywyKTpbXTtyZXR1cm4hTihhKXx8YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOmMubGVuZ3RoP2Z1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGMuY29uY2F0KHdhLmNhbGwoYXJndW1lbnRzLFxuMCkpKTphLmFwcGx5KGIsYyl9OmZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGFyZ3VtZW50cyk6YS5jYWxsKGIpfX1mdW5jdGlvbiBWYyhiLGEpe3ZhciBjPWE7XCJzdHJpbmdcIj09PXR5cGVvZiBiJiZcIiRcIj09PWIuY2hhckF0KDApP2M9dTpKYShhKT9jPVwiJFdJTkRPV1wiOmEmJlg9PT1hP2M9XCIkRE9DVU1FTlRcIjphJiYoYS4kZXZhbEFzeW5jJiZhLiR3YXRjaCkmJihjPVwiJFNDT1BFXCIpO3JldHVybiBjfWZ1bmN0aW9uIG9hKGIsYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiP3U6SlNPTi5zdHJpbmdpZnkoYixWYyxhP1wiICBcIjpudWxsKX1mdW5jdGlvbiBhYyhiKXtyZXR1cm4gRyhiKT9KU09OLnBhcnNlKGIpOmJ9ZnVuY3Rpb24gV2EoYil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/Yj0hMDpiJiYwIT09Yi5sZW5ndGg/KGI9eChcIlwiK2IpLGI9IShcImZcIj09Ynx8XCIwXCI9PWJ8fFwiZmFsc2VcIj09Ynx8XCJub1wiPT1ifHxcIm5cIj09Ynx8XCJbXVwiPT1iKSk6Yj0hMTtcbnJldHVybiBifWZ1bmN0aW9uIGlhKGIpe2I9QShiKS5jbG9uZSgpO3RyeXtiLmVtcHR5KCl9Y2F0Y2goYSl7fXZhciBjPUEoXCI8ZGl2PlwiKS5hcHBlbmQoYikuaHRtbCgpO3RyeXtyZXR1cm4gMz09PWJbMF0ubm9kZVR5cGU/eChjKTpjLm1hdGNoKC9eKDxbXj5dKz4pLylbMV0ucmVwbGFjZSgvXjwoW1xcd1xcLV0rKS8sZnVuY3Rpb24oYSxiKXtyZXR1cm5cIjxcIit4KGIpfSl9Y2F0Y2goZCl7cmV0dXJuIHgoYyl9fWZ1bmN0aW9uIGJjKGIpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGIpfWNhdGNoKGEpe319ZnVuY3Rpb24gY2MoYil7dmFyIGE9e30sYyxkO3IoKGJ8fFwiXCIpLnNwbGl0KFwiJlwiKSxmdW5jdGlvbihiKXtiJiYoYz1iLnJlcGxhY2UoL1xcKy9nLFwiJTIwXCIpLnNwbGl0KFwiPVwiKSxkPWJjKGNbMF0pLEQoZCkmJihiPUQoY1sxXSk/YmMoY1sxXSk6ITAsbGIuY2FsbChhLGQpP0woYVtkXSk/YVtkXS5wdXNoKGIpOmFbZF09W2FbZF0sYl06YVtkXT1iKSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBDYihiKXt2YXIgYT1cbltdO3IoYixmdW5jdGlvbihiLGQpe0woYik/cihiLGZ1bmN0aW9uKGIpe2EucHVzaChEYShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrRGEoYiwhMCkpKX0pOmEucHVzaChEYShkLCEwKSsoITA9PT1iP1wiXCI6XCI9XCIrRGEoYiwhMCkpKX0pO3JldHVybiBhLmxlbmd0aD9hLmpvaW4oXCImXCIpOlwiXCJ9ZnVuY3Rpb24gbWIoYil7cmV0dXJuIERhKGIsITApLnJlcGxhY2UoLyUyNi9naSxcIiZcIikucmVwbGFjZSgvJTNEL2dpLFwiPVwiKS5yZXBsYWNlKC8lMkIvZ2ksXCIrXCIpfWZ1bmN0aW9uIERhKGIsYSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChiKS5yZXBsYWNlKC8lNDAvZ2ksXCJAXCIpLnJlcGxhY2UoLyUzQS9naSxcIjpcIikucmVwbGFjZSgvJTI0L2csXCIkXCIpLnJlcGxhY2UoLyUyQy9naSxcIixcIikucmVwbGFjZSgvJTIwL2csYT9cIiUyMFwiOlwiK1wiKX1mdW5jdGlvbiBXYyhiLGEpe2Z1bmN0aW9uIGMoYSl7YSYmZC5wdXNoKGEpfXZhciBkPVtiXSxlLGYsZz1bXCJuZzphcHBcIixcIm5nLWFwcFwiLFwieC1uZy1hcHBcIixcblwiZGF0YS1uZy1hcHBcIl0saD0vXFxzbmdbOlxcLV1hcHAoOlxccyooW1xcd1xcZF9dKyk7Pyk/XFxzLztyKGcsZnVuY3Rpb24oYSl7Z1thXT0hMDtjKFguZ2V0RWxlbWVudEJ5SWQoYSkpO2E9YS5yZXBsYWNlKFwiOlwiLFwiXFxcXDpcIik7Yi5xdWVyeVNlbGVjdG9yQWxsJiYocihiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYSksYykscihiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYStcIlxcXFw6XCIpLGMpLHIoYi5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2ErXCJdXCIpLGMpKX0pO3IoZCxmdW5jdGlvbihhKXtpZighZSl7dmFyIGI9aC5leGVjKFwiIFwiK2EuY2xhc3NOYW1lK1wiIFwiKTtiPyhlPWEsZj0oYlsyXXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiLFwiKSk6cihhLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYil7IWUmJmdbYi5uYW1lXSYmKGU9YSxmPWIudmFsdWUpfSl9fSk7ZSYmYShlLGY/W2ZdOltdKX1mdW5jdGlvbiBkYyhiLGEpe3ZhciBjPWZ1bmN0aW9uKCl7Yj1BKGIpO2lmKGIuaW5qZWN0b3IoKSl7dmFyIGM9YlswXT09PVg/XG5cImRvY3VtZW50XCI6aWEoYik7dGhyb3cgVmEoXCJidHN0cnBkXCIsYy5yZXBsYWNlKC88LyxcIiZsdDtcIikucmVwbGFjZSgvPi8sXCImZ3Q7XCIpKTt9YT1hfHxbXTthLnVuc2hpZnQoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnZhbHVlKFwiJHJvb3RFbGVtZW50XCIsYil9XSk7YS51bnNoaWZ0KFwibmdcIik7Yz1lYyhhKTtjLmludm9rZShbXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRjb21waWxlXCIsXCIkaW5qZWN0b3JcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxiLGMsZCxlKXthLiRhcHBseShmdW5jdGlvbigpe2IuZGF0YShcIiRpbmplY3RvclwiLGQpO2MoYikoYSl9KX1dKTtyZXR1cm4gY30sZD0vXk5HX0RFRkVSX0JPT1RTVFJBUCEvO2lmKFcmJiFkLnRlc3QoVy5uYW1lKSlyZXR1cm4gYygpO1cubmFtZT1XLm5hbWUucmVwbGFjZShkLFwiXCIpO1hhLnJlc3VtZUJvb3RzdHJhcD1mdW5jdGlvbihiKXtyKGIsZnVuY3Rpb24oYil7YS5wdXNoKGIpfSk7YygpfX1mdW5jdGlvbiBuYihiLGEpe2E9XG5hfHxcIl9cIjtyZXR1cm4gYi5yZXBsYWNlKFhjLGZ1bmN0aW9uKGIsZCl7cmV0dXJuKGQ/YTpcIlwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiBEYihiLGEsYyl7aWYoIWIpdGhyb3cgVmEoXCJhcmVxXCIsYXx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYn1mdW5jdGlvbiBZYShiLGEsYyl7YyYmTChiKSYmKGI9YltiLmxlbmd0aC0xXSk7RGIoTihiKSxhLFwibm90IGEgZnVuY3Rpb24sIGdvdCBcIisoYiYmXCJvYmplY3RcIj09PXR5cGVvZiBiP2IuY29uc3RydWN0b3IubmFtZXx8XCJPYmplY3RcIjp0eXBlb2YgYikpO3JldHVybiBifWZ1bmN0aW9uIEVhKGIsYSl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09Yil0aHJvdyBWYShcImJhZG5hbWVcIixhKTt9ZnVuY3Rpb24gZmMoYixhLGMpe2lmKCFhKXJldHVybiBiO2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBkLGU9YixmPWEubGVuZ3RoLGc9MDtnPGY7ZysrKWQ9YVtnXSxiJiYoYj0oZT1iKVtkXSk7cmV0dXJuIWMmJk4oYik/QmIoZSxiKTpifWZ1bmN0aW9uIEViKGIpe3ZhciBhPVxuYlswXTtiPWJbYi5sZW5ndGgtMV07aWYoYT09PWIpcmV0dXJuIEEoYSk7dmFyIGM9W2FdO2Rve2E9YS5uZXh0U2libGluZztpZighYSlicmVhaztjLnB1c2goYSl9d2hpbGUoYSE9PWIpO3JldHVybiBBKGMpfWZ1bmN0aW9uIFljKGIpe3ZhciBhPXooXCIkaW5qZWN0b3JcIiksYz16KFwibmdcIik7Yj1iLmFuZ3VsYXJ8fChiLmFuZ3VsYXI9e30pO2IuJCRtaW5FcnI9Yi4kJG1pbkVycnx8ejtyZXR1cm4gYi5tb2R1bGV8fChiLm1vZHVsZT1mdW5jdGlvbigpe3ZhciBiPXt9O3JldHVybiBmdW5jdGlvbihlLGYsZyl7aWYoXCJoYXNPd25Qcm9wZXJ0eVwiPT09ZSl0aHJvdyBjKFwiYmFkbmFtZVwiLFwibW9kdWxlXCIpO2YmJmIuaGFzT3duUHJvcGVydHkoZSkmJihiW2VdPW51bGwpO3JldHVybiBiW2VdfHwoYltlXT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxkLGUpe3JldHVybiBmdW5jdGlvbigpe2NbZXx8XCJwdXNoXCJdKFthLGQsYXJndW1lbnRzXSk7cmV0dXJuIG59fWlmKCFmKXRocm93IGEoXCJub21vZFwiLFxuZSk7dmFyIGM9W10sZD1bXSxsPWIoXCIkaW5qZWN0b3JcIixcImludm9rZVwiKSxuPXtfaW52b2tlUXVldWU6YyxfcnVuQmxvY2tzOmQscmVxdWlyZXM6ZixuYW1lOmUscHJvdmlkZXI6YihcIiRwcm92aWRlXCIsXCJwcm92aWRlclwiKSxmYWN0b3J5OmIoXCIkcHJvdmlkZVwiLFwiZmFjdG9yeVwiKSxzZXJ2aWNlOmIoXCIkcHJvdmlkZVwiLFwic2VydmljZVwiKSx2YWx1ZTpiKFwiJHByb3ZpZGVcIixcInZhbHVlXCIpLGNvbnN0YW50OmIoXCIkcHJvdmlkZVwiLFwiY29uc3RhbnRcIixcInVuc2hpZnRcIiksYW5pbWF0aW9uOmIoXCIkYW5pbWF0ZVByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxmaWx0ZXI6YihcIiRmaWx0ZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksY29udHJvbGxlcjpiKFwiJGNvbnRyb2xsZXJQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZGlyZWN0aXZlOmIoXCIkY29tcGlsZVByb3ZpZGVyXCIsXCJkaXJlY3RpdmVcIiksY29uZmlnOmwscnVuOmZ1bmN0aW9uKGEpe2QucHVzaChhKTtyZXR1cm4gdGhpc319O2cmJmwoZyk7cmV0dXJuIG59KCkpfX0oKSl9XG5mdW5jdGlvbiBaYyhiKXtFKGIse2Jvb3RzdHJhcDpkYyxjb3B5OkthLGV4dGVuZDpFLGVxdWFsczpDYSxlbGVtZW50OkEsZm9yRWFjaDpyLGluamVjdG9yOmVjLG5vb3A6dixiaW5kOkJiLHRvSnNvbjpvYSxmcm9tSnNvbjphYyxpZGVudGl0eTpnYSxpc1VuZGVmaW5lZDpGLGlzRGVmaW5lZDpELGlzU3RyaW5nOkcsaXNGdW5jdGlvbjpOLGlzT2JqZWN0OlQsaXNOdW1iZXI6amIsaXNFbGVtZW50OlRjLGlzQXJyYXk6TCx2ZXJzaW9uOiRjLGlzRGF0ZTp2YSxsb3dlcmNhc2U6eCx1cHBlcmNhc2U6TGEsY2FsbGJhY2tzOntjb3VudGVyOjB9LCQkbWluRXJyOnosJCRjc3A6WmF9KTskYT1ZYyhXKTt0cnl7JGEoXCJuZ0xvY2FsZVwiKX1jYXRjaChhKXskYShcIm5nTG9jYWxlXCIsW10pLnByb3ZpZGVyKFwiJGxvY2FsZVwiLGFkKX0kYShcIm5nXCIsW1wibmdMb2NhbGVcIl0sW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnByb3ZpZGVyKHskJHNhbml0aXplVXJpOmJkfSk7YS5wcm92aWRlcihcIiRjb21waWxlXCIsXG5nYykuZGlyZWN0aXZlKHthOmNkLGlucHV0OmhjLHRleHRhcmVhOmhjLGZvcm06ZGQsc2NyaXB0OmVkLHNlbGVjdDpmZCxzdHlsZTpnZCxvcHRpb246aGQsbmdCaW5kOmlkLG5nQmluZEh0bWw6amQsbmdCaW5kVGVtcGxhdGU6a2QsbmdDbGFzczpsZCxuZ0NsYXNzRXZlbjptZCxuZ0NsYXNzT2RkOm5kLG5nQ2xvYWs6b2QsbmdDb250cm9sbGVyOnBkLG5nRm9ybTpxZCxuZ0hpZGU6cmQsbmdJZjpzZCxuZ0luY2x1ZGU6dGQsbmdJbml0OnVkLG5nTm9uQmluZGFibGU6dmQsbmdQbHVyYWxpemU6d2QsbmdSZXBlYXQ6eGQsbmdTaG93OnlkLG5nU3R5bGU6emQsbmdTd2l0Y2g6QWQsbmdTd2l0Y2hXaGVuOkJkLG5nU3dpdGNoRGVmYXVsdDpDZCxuZ09wdGlvbnM6RGQsbmdUcmFuc2NsdWRlOkVkLG5nTW9kZWw6RmQsbmdMaXN0OkdkLG5nQ2hhbmdlOkhkLHJlcXVpcmVkOmljLG5nUmVxdWlyZWQ6aWMsbmdWYWx1ZTpJZH0pLmRpcmVjdGl2ZSh7bmdJbmNsdWRlOkpkfSkuZGlyZWN0aXZlKEZiKS5kaXJlY3RpdmUoamMpO1xuYS5wcm92aWRlcih7JGFuY2hvclNjcm9sbDpLZCwkYW5pbWF0ZTpMZCwkYnJvd3NlcjpNZCwkY2FjaGVGYWN0b3J5Ok5kLCRjb250cm9sbGVyOk9kLCRkb2N1bWVudDpQZCwkZXhjZXB0aW9uSGFuZGxlcjpRZCwkZmlsdGVyOmtjLCRpbnRlcnBvbGF0ZTpSZCwkaW50ZXJ2YWw6U2QsJGh0dHA6VGQsJGh0dHBCYWNrZW5kOlVkLCRsb2NhdGlvbjpWZCwkbG9nOldkLCRwYXJzZTpYZCwkcm9vdFNjb3BlOllkLCRxOlpkLCRzY2U6JGQsJHNjZURlbGVnYXRlOmFlLCRzbmlmZmVyOmJlLCR0ZW1wbGF0ZUNhY2hlOmNlLCR0aW1lb3V0OmRlLCR3aW5kb3c6ZWUsJCRyQUY6ZmUsJCRhc3luY0NhbGxiYWNrOmdlfSl9XSl9ZnVuY3Rpb24gYWIoYil7cmV0dXJuIGIucmVwbGFjZShoZSxmdW5jdGlvbihhLGIsZCxlKXtyZXR1cm4gZT9kLnRvVXBwZXJDYXNlKCk6ZH0pLnJlcGxhY2UoaWUsXCJNb3okMVwiKX1mdW5jdGlvbiBHYihiLGEsYyxkKXtmdW5jdGlvbiBlKGIpe3ZhciBlPWMmJmI/W3RoaXMuZmlsdGVyKGIpXTpcblt0aGlzXSxrPWEsbSxsLG4scSxwLHM7aWYoIWR8fG51bGwhPWIpZm9yKDtlLmxlbmd0aDspZm9yKG09ZS5zaGlmdCgpLGw9MCxuPW0ubGVuZ3RoO2w8bjtsKyspZm9yKHE9QShtW2xdKSxrP3EudHJpZ2dlckhhbmRsZXIoXCIkZGVzdHJveVwiKTprPSFrLHA9MCxxPShzPXEuY2hpbGRyZW4oKSkubGVuZ3RoO3A8cTtwKyspZS5wdXNoKEZhKHNbcF0pKTtyZXR1cm4gZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGY9RmEuZm5bYl0sZj1mLiRvcmlnaW5hbHx8ZjtlLiRvcmlnaW5hbD1mO0ZhLmZuW2JdPWV9ZnVuY3Rpb24gUyhiKXtpZihiIGluc3RhbmNlb2YgUylyZXR1cm4gYjtHKGIpJiYoYj0kKGIpKTtpZighKHRoaXMgaW5zdGFuY2VvZiBTKSl7aWYoRyhiKSYmXCI8XCIhPWIuY2hhckF0KDApKXRocm93IEhiKFwibm9zZWxcIik7cmV0dXJuIG5ldyBTKGIpfWlmKEcoYikpe3ZhciBhPWI7Yj1YO3ZhciBjO2lmKGM9amUuZXhlYyhhKSliPVtiLmNyZWF0ZUVsZW1lbnQoY1sxXSldO2Vsc2V7dmFyIGQ9XG5iLGU7Yj1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjPVtdO2lmKEliLnRlc3QoYSkpe2Q9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2U9KGtlLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpO2U9ZGFbZV18fGRhLl9kZWZhdWx0O2QuaW5uZXJIVE1MPVwiPGRpdj4mIzE2MDs8L2Rpdj5cIitlWzFdK2EucmVwbGFjZShsZSxcIjwkMT48LyQyPlwiKStlWzJdO2QucmVtb3ZlQ2hpbGQoZC5maXJzdENoaWxkKTtmb3IoYT1lWzBdO2EtLTspZD1kLmxhc3RDaGlsZDthPTA7Zm9yKGU9ZC5jaGlsZE5vZGVzLmxlbmd0aDthPGU7KythKWMucHVzaChkLmNoaWxkTm9kZXNbYV0pO2Q9Yi5maXJzdENoaWxkO2QudGV4dENvbnRlbnQ9XCJcIn1lbHNlIGMucHVzaChkLmNyZWF0ZVRleHROb2RlKGEpKTtiLnRleHRDb250ZW50PVwiXCI7Yi5pbm5lckhUTUw9XCJcIjtiPWN9SmIodGhpcyxiKTtBKFguY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKS5hcHBlbmQodGhpcyl9ZWxzZSBKYih0aGlzLFxuYil9ZnVuY3Rpb24gS2IoYil7cmV0dXJuIGIuY2xvbmVOb2RlKCEwKX1mdW5jdGlvbiBNYShiKXtMYihiKTt2YXIgYT0wO2ZvcihiPWIuY2hpbGROb2Rlc3x8W107YTxiLmxlbmd0aDthKyspTWEoYlthXSl9ZnVuY3Rpb24gbGMoYixhLGMsZCl7aWYoRChkKSl0aHJvdyBIYihcIm9mZmFyZ3NcIik7dmFyIGU9cGEoYixcImV2ZW50c1wiKTtwYShiLFwiaGFuZGxlXCIpJiYoRihhKT9yKGUsZnVuY3Rpb24oYSxjKXtiYihiLGMsYSk7ZGVsZXRlIGVbY119KTpyKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe0YoYyk/KGJiKGIsYSxlW2FdKSxkZWxldGUgZVthXSk6VWEoZVthXXx8W10sYyl9KSl9ZnVuY3Rpb24gTGIoYixhKXt2YXIgYz1iLm5nMzM5LGQ9Y2JbY107ZCYmKGE/ZGVsZXRlIGNiW2NdLmRhdGFbYV06KGQuaGFuZGxlJiYoZC5ldmVudHMuJGRlc3Ryb3kmJmQuaGFuZGxlKHt9LFwiJGRlc3Ryb3lcIiksbGMoYikpLGRlbGV0ZSBjYltjXSxiLm5nMzM5PXUpKX1mdW5jdGlvbiBwYShiLGEsYyl7dmFyIGQ9XG5iLm5nMzM5LGQ9Y2JbZHx8LTFdO2lmKEQoYykpZHx8KGIubmczMzk9ZD0rK21lLGQ9Y2JbZF09e30pLGRbYV09YztlbHNlIHJldHVybiBkJiZkW2FdfWZ1bmN0aW9uIE1iKGIsYSxjKXt2YXIgZD1wYShiLFwiZGF0YVwiKSxlPUQoYyksZj0hZSYmRChhKSxnPWYmJiFUKGEpO2R8fGd8fHBhKGIsXCJkYXRhXCIsZD17fSk7aWYoZSlkW2FdPWM7ZWxzZSBpZihmKXtpZihnKXJldHVybiBkJiZkW2FdO0UoZCxhKX1lbHNlIHJldHVybiBkfWZ1bmN0aW9uIE5iKGIsYSl7cmV0dXJuIGIuZ2V0QXR0cmlidXRlPy0xPChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpLmluZGV4T2YoXCIgXCIrYStcIiBcIik6ITF9ZnVuY3Rpb24gb2IoYixhKXthJiZiLnNldEF0dHJpYnV0ZSYmcihhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJCgoXCIgXCIrKGIuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiKS5yZXBsYWNlKC9bXFxuXFx0XS9nLFxuXCIgXCIpLnJlcGxhY2UoXCIgXCIrJChhKStcIiBcIixcIiBcIikpKX0pfWZ1bmN0aW9uIHBiKGIsYSl7aWYoYSYmYi5zZXRBdHRyaWJ1dGUpe3ZhciBjPShcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpO3IoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7YT0kKGEpOy0xPT09Yy5pbmRleE9mKFwiIFwiK2ErXCIgXCIpJiYoYys9YStcIiBcIil9KTtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsJChjKSl9fWZ1bmN0aW9uIEpiKGIsYSl7aWYoYSl7YT1hLm5vZGVOYW1lfHwhRChhLmxlbmd0aCl8fEphKGEpP1thXTphO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIucHVzaChhW2NdKX19ZnVuY3Rpb24gbWMoYixhKXtyZXR1cm4gcWIoYixcIiRcIisoYXx8XCJuZ0NvbnRyb2xsZXJcIikrXCJDb250cm9sbGVyXCIpfWZ1bmN0aW9uIHFiKGIsYSxjKXs5PT1iLm5vZGVUeXBlJiYoYj1iLmRvY3VtZW50RWxlbWVudCk7Zm9yKGE9TChhKT9hOlthXTtiOyl7Zm9yKHZhciBkPVxuMCxlPWEubGVuZ3RoO2Q8ZTtkKyspaWYoKGM9QS5kYXRhKGIsYVtkXSkpIT09dSlyZXR1cm4gYztiPWIucGFyZW50Tm9kZXx8MTE9PT1iLm5vZGVUeXBlJiZiLmhvc3R9fWZ1bmN0aW9uIG5jKGIpe2Zvcih2YXIgYT0wLGM9Yi5jaGlsZE5vZGVzO2E8Yy5sZW5ndGg7YSsrKU1hKGNbYV0pO2Zvcig7Yi5maXJzdENoaWxkOyliLnJlbW92ZUNoaWxkKGIuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gb2MoYixhKXt2YXIgYz1yYlthLnRvTG93ZXJDYXNlKCldO3JldHVybiBjJiZwY1tiLm5vZGVOYW1lXSYmY31mdW5jdGlvbiBuZShiLGEpe3ZhciBjPWZ1bmN0aW9uKGMsZSl7Yy5wcmV2ZW50RGVmYXVsdHx8KGMucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLnJldHVyblZhbHVlPSExfSk7Yy5zdG9wUHJvcGFnYXRpb258fChjLnN0b3BQcm9wYWdhdGlvbj1mdW5jdGlvbigpe2MuY2FuY2VsQnViYmxlPSEwfSk7Yy50YXJnZXR8fChjLnRhcmdldD1jLnNyY0VsZW1lbnR8fFgpO2lmKEYoYy5kZWZhdWx0UHJldmVudGVkKSl7dmFyIGY9XG5jLnByZXZlbnREZWZhdWx0O2MucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7Zi5jYWxsKGMpfTtjLmRlZmF1bHRQcmV2ZW50ZWQ9ITF9Yy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYy5kZWZhdWx0UHJldmVudGVkfHwhMT09PWMucmV0dXJuVmFsdWV9O3ZhciBnPWhhKGFbZXx8Yy50eXBlXXx8W10pO3IoZyxmdW5jdGlvbihhKXthLmNhbGwoYixjKX0pOzg+PVI/KGMucHJldmVudERlZmF1bHQ9bnVsbCxjLnN0b3BQcm9wYWdhdGlvbj1udWxsLGMuaXNEZWZhdWx0UHJldmVudGVkPW51bGwpOihkZWxldGUgYy5wcmV2ZW50RGVmYXVsdCxkZWxldGUgYy5zdG9wUHJvcGFnYXRpb24sZGVsZXRlIGMuaXNEZWZhdWx0UHJldmVudGVkKX07Yy5lbGVtPWI7cmV0dXJuIGN9ZnVuY3Rpb24gTmEoYixhKXt2YXIgYz10eXBlb2YgYixkO1wiZnVuY3Rpb25cIj09Y3x8XCJvYmplY3RcIj09YyYmbnVsbCE9PWI/XCJmdW5jdGlvblwiPT10eXBlb2YoZD1cbmIuJCRoYXNoS2V5KT9kPWIuJCRoYXNoS2V5KCk6ZD09PXUmJihkPWIuJCRoYXNoS2V5PShhfHxpYikoKSk6ZD1iO3JldHVybiBjK1wiOlwiK2R9ZnVuY3Rpb24gZGIoYixhKXtpZihhKXt2YXIgYz0wO3RoaXMubmV4dFVpZD1mdW5jdGlvbigpe3JldHVybisrY319cihiLHRoaXMucHV0LHRoaXMpfWZ1bmN0aW9uIHFjKGIpe3ZhciBhLGM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/KGE9Yi4kaW5qZWN0KXx8KGE9W10sYi5sZW5ndGgmJihjPWIudG9TdHJpbmcoKS5yZXBsYWNlKG9lLFwiXCIpLGM9Yy5tYXRjaChwZSkscihjWzFdLnNwbGl0KHFlKSxmdW5jdGlvbihiKXtiLnJlcGxhY2UocmUsZnVuY3Rpb24oYixjLGQpe2EucHVzaChkKX0pfSkpLGIuJGluamVjdD1hKTpMKGIpPyhjPWIubGVuZ3RoLTEsWWEoYltjXSxcImZuXCIpLGE9Yi5zbGljZSgwLGMpKTpZYShiLFwiZm5cIiwhMCk7cmV0dXJuIGF9ZnVuY3Rpb24gZWMoYil7ZnVuY3Rpb24gYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtpZihUKGIpKXIoYixcblliKGEpKTtlbHNlIHJldHVybiBhKGIsYyl9fWZ1bmN0aW9uIGMoYSxiKXtFYShhLFwic2VydmljZVwiKTtpZihOKGIpfHxMKGIpKWI9bi5pbnN0YW50aWF0ZShiKTtpZighYi4kZ2V0KXRocm93IGViKFwicGdldFwiLGEpO3JldHVybiBsW2EraF09Yn1mdW5jdGlvbiBkKGEsYil7cmV0dXJuIGMoYSx7JGdldDpifSl9ZnVuY3Rpb24gZShhKXt2YXIgYj1bXSxjLGQsZixoO3IoYSxmdW5jdGlvbihhKXtpZighbS5nZXQoYSkpe20ucHV0KGEsITApO3RyeXtpZihHKGEpKWZvcihjPSRhKGEpLGI9Yi5jb25jYXQoZShjLnJlcXVpcmVzKSkuY29uY2F0KGMuX3J1bkJsb2NrcyksZD1jLl9pbnZva2VRdWV1ZSxmPTAsaD1kLmxlbmd0aDtmPGg7ZisrKXt2YXIgZz1kW2ZdLGs9bi5nZXQoZ1swXSk7a1tnWzFdXS5hcHBseShrLGdbMl0pfWVsc2UgTihhKT9iLnB1c2gobi5pbnZva2UoYSkpOkwoYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpZYShhLFwibW9kdWxlXCIpfWNhdGNoKHApe3Rocm93IEwoYSkmJihhPVxuYVthLmxlbmd0aC0xXSkscC5tZXNzYWdlJiYocC5zdGFjayYmLTE9PXAuc3RhY2suaW5kZXhPZihwLm1lc3NhZ2UpKSYmKHA9cC5tZXNzYWdlK1wiXFxuXCIrcC5zdGFjayksZWIoXCJtb2R1bGVyclwiLGEscC5zdGFja3x8cC5tZXNzYWdlfHxwKTt9fX0pO3JldHVybiBifWZ1bmN0aW9uIGYoYSxiKXtmdW5jdGlvbiBjKGQpe2lmKGEuaGFzT3duUHJvcGVydHkoZCkpe2lmKGFbZF09PT1nKXRocm93IGViKFwiY2RlcFwiLGQrXCIgPC0gXCIray5qb2luKFwiIDwtIFwiKSk7cmV0dXJuIGFbZF19dHJ5e3JldHVybiBrLnVuc2hpZnQoZCksYVtkXT1nLGFbZF09YihkKX1jYXRjaChlKXt0aHJvdyBhW2RdPT09ZyYmZGVsZXRlIGFbZF0sZTt9ZmluYWxseXtrLnNoaWZ0KCl9fWZ1bmN0aW9uIGQoYSxiLGUpe3ZhciBmPVtdLGg9cWMoYSksZyxrLHA7az0wO2ZvcihnPWgubGVuZ3RoO2s8ZztrKyspe3A9aFtrXTtpZihcInN0cmluZ1wiIT09dHlwZW9mIHApdGhyb3cgZWIoXCJpdGtuXCIscCk7Zi5wdXNoKGUmJmUuaGFzT3duUHJvcGVydHkocCk/XG5lW3BdOmMocCkpfUwoYSkmJihhPWFbZ10pO3JldHVybiBhLmFwcGx5KGIsZil9cmV0dXJue2ludm9rZTpkLGluc3RhbnRpYXRlOmZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oKXt9LGU7Yy5wcm90b3R5cGU9KEwoYSk/YVthLmxlbmd0aC0xXTphKS5wcm90b3R5cGU7Yz1uZXcgYztlPWQoYSxjLGIpO3JldHVybiBUKGUpfHxOKGUpP2U6Y30sZ2V0OmMsYW5ub3RhdGU6cWMsaGFzOmZ1bmN0aW9uKGIpe3JldHVybiBsLmhhc093blByb3BlcnR5KGIraCl8fGEuaGFzT3duUHJvcGVydHkoYil9fX12YXIgZz17fSxoPVwiUHJvdmlkZXJcIixrPVtdLG09bmV3IGRiKFtdLCEwKSxsPXskcHJvdmlkZTp7cHJvdmlkZXI6YShjKSxmYWN0b3J5OmEoZCksc2VydmljZTphKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYSxbXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gYS5pbnN0YW50aWF0ZShiKX1dKX0pLHZhbHVlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLGFhKGIpKX0pLGNvbnN0YW50OmEoZnVuY3Rpb24oYSxcbmIpe0VhKGEsXCJjb25zdGFudFwiKTtsW2FdPWI7cVthXT1ifSksZGVjb3JhdG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYStoKSxkPWMuJGdldDtjLiRnZXQ9ZnVuY3Rpb24oKXt2YXIgYT1wLmludm9rZShkLGMpO3JldHVybiBwLmludm9rZShiLG51bGwseyRkZWxlZ2F0ZTphfSl9fX19LG49bC4kaW5qZWN0b3I9ZihsLGZ1bmN0aW9uKCl7dGhyb3cgZWIoXCJ1bnByXCIsay5qb2luKFwiIDwtIFwiKSk7fSkscT17fSxwPXEuJGluamVjdG9yPWYocSxmdW5jdGlvbihhKXthPW4uZ2V0KGEraCk7cmV0dXJuIHAuaW52b2tlKGEuJGdldCxhKX0pO3IoZShiKSxmdW5jdGlvbihhKXtwLmludm9rZShhfHx2KX0pO3JldHVybiBwfWZ1bmN0aW9uIEtkKCl7dmFyIGI9ITA7dGhpcy5kaXNhYmxlQXV0b1Njcm9sbGluZz1mdW5jdGlvbigpe2I9ITF9O3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9jYXRpb25cIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihhLGMsZCl7ZnVuY3Rpb24gZShhKXt2YXIgYj1udWxsO1xucihhLGZ1bmN0aW9uKGEpe2J8fFwiYVwiIT09eChhLm5vZGVOYW1lKXx8KGI9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBmKCl7dmFyIGI9Yy5oYXNoKCksZDtiPyhkPWcuZ2V0RWxlbWVudEJ5SWQoYikpP2Quc2Nyb2xsSW50b1ZpZXcoKTooZD1lKGcuZ2V0RWxlbWVudHNCeU5hbWUoYikpKT9kLnNjcm9sbEludG9WaWV3KCk6XCJ0b3BcIj09PWImJmEuc2Nyb2xsVG8oMCwwKTphLnNjcm9sbFRvKDAsMCl9dmFyIGc9YS5kb2N1bWVudDtiJiZkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiBjLmhhc2goKX0sZnVuY3Rpb24oKXtkLiRldmFsQXN5bmMoZil9KTtyZXR1cm4gZn1dfWZ1bmN0aW9uIGdlKCl7dGhpcy4kZ2V0PVtcIiQkckFGXCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGIsYSl7cmV0dXJuIGIuc3VwcG9ydGVkP2Z1bmN0aW9uKGEpe3JldHVybiBiKGEpfTpmdW5jdGlvbihiKXtyZXR1cm4gYShiLDAsITEpfX1dfWZ1bmN0aW9uIHNlKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYSl7dHJ5e2EuYXBwbHkobnVsbCxcbndhLmNhbGwoYXJndW1lbnRzLDEpKX1maW5hbGx5e2lmKHMtLSwwPT09cylmb3IoO0oubGVuZ3RoOyl0cnl7Si5wb3AoKSgpfWNhdGNoKGIpe2MuZXJyb3IoYil9fX1mdW5jdGlvbiBmKGEsYil7KGZ1bmN0aW9uIGVhKCl7cih3LGZ1bmN0aW9uKGEpe2EoKX0pO3Q9YihlYSxhKX0pKCl9ZnVuY3Rpb24gZygpe3khPWgudXJsKCkmJih5PWgudXJsKCkscihiYSxmdW5jdGlvbihhKXthKGgudXJsKCkpfSkpfXZhciBoPXRoaXMsaz1hWzBdLG09Yi5sb2NhdGlvbixsPWIuaGlzdG9yeSxuPWIuc2V0VGltZW91dCxxPWIuY2xlYXJUaW1lb3V0LHA9e307aC5pc01vY2s9ITE7dmFyIHM9MCxKPVtdO2guJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdD1lO2guJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudD1mdW5jdGlvbigpe3MrK307aC5ub3RpZnlXaGVuTm9PdXRzdGFuZGluZ1JlcXVlc3RzPWZ1bmN0aW9uKGEpe3IodyxmdW5jdGlvbihhKXthKCl9KTswPT09cz9hKCk6Si5wdXNoKGEpfTtcbnZhciB3PVtdLHQ7aC5hZGRQb2xsRm49ZnVuY3Rpb24oYSl7Rih0KSYmZigxMDAsbik7dy5wdXNoKGEpO3JldHVybiBhfTt2YXIgeT1tLmhyZWYsSz1hLmZpbmQoXCJiYXNlXCIpLEI9bnVsbDtoLnVybD1mdW5jdGlvbihhLGMpe20hPT1iLmxvY2F0aW9uJiYobT1iLmxvY2F0aW9uKTtsIT09Yi5oaXN0b3J5JiYobD1iLmhpc3RvcnkpO2lmKGEpe2lmKHkhPWEpe3ZhciBlPXkmJkdhKHkpPT09R2EoYSk7eT1hOyFlJiZkLmhpc3Rvcnk/Yz9sLnJlcGxhY2VTdGF0ZShudWxsLFwiXCIsYSk6KGwucHVzaFN0YXRlKG51bGwsXCJcIixhKSxLLmF0dHIoXCJocmVmXCIsSy5hdHRyKFwiaHJlZlwiKSkpOihlfHwoQj1hKSxjP20ucmVwbGFjZShhKTptLmhyZWY9YSk7cmV0dXJuIGh9fWVsc2UgcmV0dXJuIEJ8fG0uaHJlZi5yZXBsYWNlKC8lMjcvZyxcIidcIil9O3ZhciBiYT1bXSxPPSExO2gub25VcmxDaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoIU8pe2lmKGQuaGlzdG9yeSlBKGIpLm9uKFwicG9wc3RhdGVcIixnKTtpZihkLmhhc2hjaGFuZ2UpQShiKS5vbihcImhhc2hjaGFuZ2VcIixcbmcpO2Vsc2UgaC5hZGRQb2xsRm4oZyk7Tz0hMH1iYS5wdXNoKGEpO3JldHVybiBhfTtoLiQkY2hlY2tVcmxDaGFuZ2U9ZztoLmJhc2VIcmVmPWZ1bmN0aW9uKCl7dmFyIGE9Sy5hdHRyKFwiaHJlZlwiKTtyZXR1cm4gYT9hLnJlcGxhY2UoL14oaHR0cHM/XFw6KT9cXC9cXC9bXlxcL10qLyxcIlwiKTpcIlwifTt2YXIgTT17fSxjYT1cIlwiLFA9aC5iYXNlSHJlZigpO2guY29va2llcz1mdW5jdGlvbihhLGIpe3ZhciBkLGUsZixoO2lmKGEpYj09PXU/ay5jb29raWU9ZXNjYXBlKGEpK1wiPTtwYXRoPVwiK1ArXCI7ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiOkcoYikmJihkPShrLmNvb2tpZT1lc2NhcGUoYSkrXCI9XCIrZXNjYXBlKGIpK1wiO3BhdGg9XCIrUCkubGVuZ3RoKzEsNDA5NjxkJiZjLndhcm4oXCJDb29raWUgJ1wiK2ErXCInIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKFwiK2QrXCIgPiA0MDk2IGJ5dGVzKSFcIikpO2Vsc2V7aWYoay5jb29raWUhPT1cbmNhKWZvcihjYT1rLmNvb2tpZSxkPWNhLnNwbGl0KFwiOyBcIiksTT17fSxmPTA7ZjxkLmxlbmd0aDtmKyspZT1kW2ZdLGg9ZS5pbmRleE9mKFwiPVwiKSwwPGgmJihhPXVuZXNjYXBlKGUuc3Vic3RyaW5nKDAsaCkpLE1bYV09PT11JiYoTVthXT11bmVzY2FwZShlLnN1YnN0cmluZyhoKzEpKSkpO3JldHVybiBNfX07aC5kZWZlcj1mdW5jdGlvbihhLGIpe3ZhciBjO3MrKztjPW4oZnVuY3Rpb24oKXtkZWxldGUgcFtjXTtlKGEpfSxifHwwKTtwW2NdPSEwO3JldHVybiBjfTtoLmRlZmVyLmNhbmNlbD1mdW5jdGlvbihhKXtyZXR1cm4gcFthXT8oZGVsZXRlIHBbYV0scShhKSxlKHYpLCEwKTohMX19ZnVuY3Rpb24gTWQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvZ1wiLFwiJHNuaWZmZXJcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjLGQpe3JldHVybiBuZXcgc2UoYixkLGEsYyl9XX1mdW5jdGlvbiBOZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXtmdW5jdGlvbiBlKGEpe2EhPVxubiYmKHE/cT09YSYmKHE9YS5uKTpxPWEsZihhLm4sYS5wKSxmKGEsbiksbj1hLG4ubj1udWxsKX1mdW5jdGlvbiBmKGEsYil7YSE9YiYmKGEmJihhLnA9YiksYiYmKGIubj1hKSl9aWYoYiBpbiBhKXRocm93IHooXCIkY2FjaGVGYWN0b3J5XCIpKFwiaWlkXCIsYik7dmFyIGc9MCxoPUUoe30sZCx7aWQ6Yn0pLGs9e30sbT1kJiZkLmNhcGFjaXR5fHxOdW1iZXIuTUFYX1ZBTFVFLGw9e30sbj1udWxsLHE9bnVsbDtyZXR1cm4gYVtiXT17cHV0OmZ1bmN0aW9uKGEsYil7aWYobTxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYz1sW2FdfHwobFthXT17a2V5OmF9KTtlKGMpfWlmKCFGKGIpKXJldHVybiBhIGluIGt8fGcrKyxrW2FdPWIsZz5tJiZ0aGlzLnJlbW92ZShxLmtleSksYn0sZ2V0OmZ1bmN0aW9uKGEpe2lmKG08TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGI9bFthXTtpZighYilyZXR1cm47ZShiKX1yZXR1cm4ga1thXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKG08TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGI9XG5sW2FdO2lmKCFiKXJldHVybjtiPT1uJiYobj1iLnApO2I9PXEmJihxPWIubik7ZihiLm4sYi5wKTtkZWxldGUgbFthXX1kZWxldGUga1thXTtnLS19LHJlbW92ZUFsbDpmdW5jdGlvbigpe2s9e307Zz0wO2w9e307bj1xPW51bGx9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtsPWg9az1udWxsO2RlbGV0ZSBhW2JdfSxpbmZvOmZ1bmN0aW9uKCl7cmV0dXJuIEUoe30saCx7c2l6ZTpnfSl9fX12YXIgYT17fTtiLmluZm89ZnVuY3Rpb24oKXt2YXIgYj17fTtyKGEsZnVuY3Rpb24oYSxlKXtiW2VdPWEuaW5mbygpfSk7cmV0dXJuIGJ9O2IuZ2V0PWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtyZXR1cm4gYn19ZnVuY3Rpb24gY2UoKXt0aGlzLiRnZXQ9W1wiJGNhY2hlRmFjdG9yeVwiLGZ1bmN0aW9uKGIpe3JldHVybiBiKFwidGVtcGxhdGVzXCIpfV19ZnVuY3Rpb24gZ2MoYixhKXt2YXIgYz17fSxkPVwiRGlyZWN0aXZlXCIsZT0vXlxccypkaXJlY3RpdmVcXDpcXHMqKFtcXGRcXHdfXFwtXSspXFxzKyguKikkLyxmPS8oKFtcXGRcXHdfXFwtXSspKD86XFw6KFteO10rKSk/Oz8pLyxcbmc9L14ob25bYS16XSt8Zm9ybWFjdGlvbikkLzt0aGlzLmRpcmVjdGl2ZT1mdW5jdGlvbiBrKGEsZSl7RWEoYSxcImRpcmVjdGl2ZVwiKTtHKGEpPyhEYihlLFwiZGlyZWN0aXZlRmFjdG9yeVwiKSxjLmhhc093blByb3BlcnR5KGEpfHwoY1thXT1bXSxiLmZhY3RvcnkoYStkLFtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGQpe3ZhciBlPVtdO3IoY1thXSxmdW5jdGlvbihjLGYpe3RyeXt2YXIgZz1iLmludm9rZShjKTtOKGcpP2c9e2NvbXBpbGU6YWEoZyl9OiFnLmNvbXBpbGUmJmcubGluayYmKGcuY29tcGlsZT1hYShnLmxpbmspKTtnLnByaW9yaXR5PWcucHJpb3JpdHl8fDA7Zy5pbmRleD1mO2cubmFtZT1nLm5hbWV8fGE7Zy5yZXF1aXJlPWcucmVxdWlyZXx8Zy5jb250cm9sbGVyJiZnLm5hbWU7Zy5yZXN0cmljdD1nLnJlc3RyaWN0fHxcIkFcIjtlLnB1c2goZyl9Y2F0Y2goayl7ZChrKX19KTtyZXR1cm4gZX1dKSksY1thXS5wdXNoKGUpKTpyKGEsWWIoaykpO1xucmV0dXJuIHRoaXN9O3RoaXMuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoYiksdGhpcyk6YS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdCgpfTt0aGlzLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3QoYiksdGhpcyk6YS5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGludGVycG9sYXRlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkcGFyc2VcIixcIiRjb250cm9sbGVyXCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixcIiRzY2VcIixcIiRhbmltYXRlXCIsXCIkJHNhbml0aXplVXJpXCIsZnVuY3Rpb24oYSxiLGwsbixxLHAscyxKLHcsdCx5LEspe2Z1bmN0aW9uIEIoYSxiLGMsZCxlKXthIGluc3RhbmNlb2ZcbkF8fChhPUEoYSkpO3IoYSxmdW5jdGlvbihiLGMpezM9PWIubm9kZVR5cGUmJmIubm9kZVZhbHVlLm1hdGNoKC9cXFMrLykmJihhW2NdPUEoYikud3JhcChcIjxzcGFuPjwvc3Bhbj5cIikucGFyZW50KClbMF0pfSk7dmFyIGY9TyhhLGIsYSxjLGQsZSk7YmEoYSxcIm5nLXNjb3BlXCIpO3JldHVybiBmdW5jdGlvbihiLGMsZCxlKXtEYihiLFwic2NvcGVcIik7dmFyIGc9Yz9PYS5jbG9uZS5jYWxsKGEpOmE7cihkLGZ1bmN0aW9uKGEsYil7Zy5kYXRhKFwiJFwiK2IrXCJDb250cm9sbGVyXCIsYSl9KTtkPTA7Zm9yKHZhciBrPWcubGVuZ3RoO2Q8aztkKyspe3ZhciBwPWdbZF0ubm9kZVR5cGU7MSE9PXAmJjkhPT1wfHxnLmVxKGQpLmRhdGEoXCIkc2NvcGVcIixiKX1jJiZjKGcsYik7ZiYmZihiLGcsZyxlKTtyZXR1cm4gZ319ZnVuY3Rpb24gYmEoYSxiKXt0cnl7YS5hZGRDbGFzcyhiKX1jYXRjaChjKXt9fWZ1bmN0aW9uIE8oYSxiLGMsZCxlLGYpe2Z1bmN0aW9uIGcoYSxjLGQsZSl7dmFyIGYscCxsLG0scSxcbm4sdztmPWMubGVuZ3RoO3ZhciBzPUFycmF5KGYpO2ZvcihtPTA7bTxmO20rKylzW21dPWNbbV07bj1tPTA7Zm9yKHE9ay5sZW5ndGg7bTxxO24rKylwPXNbbl0sYz1rW20rK10sZj1rW20rK10sYz8oYy5zY29wZT8obD1hLiRuZXcoKSxBLmRhdGEocCxcIiRzY29wZVwiLGwpKTpsPWEsdz1jLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50P00oYSxjLnRyYW5zY2x1ZGUsZSk6IWMudGVtcGxhdGVPblRoaXNFbGVtZW50JiZlP2U6IWUmJmI/TShhLGIpOm51bGwsYyhmLGwscCxkLHcpKTpmJiZmKGEscC5jaGlsZE5vZGVzLHUsZSl9Zm9yKHZhciBrPVtdLHAsbCxtLHEsbj0wO248YS5sZW5ndGg7bisrKXA9bmV3IE9iLGw9Y2EoYVtuXSxbXSxwLDA9PT1uP2Q6dSxlKSwoZj1sLmxlbmd0aD9JKGwsYVtuXSxwLGIsYyxudWxsLFtdLFtdLGYpOm51bGwpJiZmLnNjb3BlJiZiYShwLiQkZWxlbWVudCxcIm5nLXNjb3BlXCIpLHA9ZiYmZi50ZXJtaW5hbHx8IShtPWFbbl0uY2hpbGROb2Rlcyl8fCFtLmxlbmd0aD9cbm51bGw6TyhtLGY/KGYudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnR8fCFmLnRlbXBsYXRlT25UaGlzRWxlbWVudCkmJmYudHJhbnNjbHVkZTpiKSxrLnB1c2goZixwKSxxPXF8fGZ8fHAsZj1udWxsO3JldHVybiBxP2c6bnVsbH1mdW5jdGlvbiBNKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGYpe3ZhciBnPSExO2R8fChkPWEuJG5ldygpLGc9ZC4kJHRyYW5zY2x1ZGVkPSEwKTtlPWIoZCxlLGYsYyk7aWYoZyllLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2QuJGRlc3Ryb3koKX0pO3JldHVybiBlfX1mdW5jdGlvbiBjYShhLGIsYyxkLGcpe3ZhciBrPWMuJGF0dHIscDtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSAxOmVhKGIscWEoUGEoYSkudG9Mb3dlckNhc2UoKSksXCJFXCIsZCxnKTtmb3IodmFyIGwsbSxxLG49YS5hdHRyaWJ1dGVzLHc9MCxzPW4mJm4ubGVuZ3RoO3c8czt3Kyspe3ZhciB0PSExLEo9ITE7bD1uW3ddO2lmKCFSfHw4PD1SfHxsLnNwZWNpZmllZCl7cD1sLm5hbWU7bT1cbiQobC52YWx1ZSk7bD1xYShwKTtpZihxPVUudGVzdChsKSlwPW5iKGwuc3Vic3RyKDYpLFwiLVwiKTt2YXIgeT1sLnJlcGxhY2UoLyhTdGFydHxFbmQpJC8sXCJcIik7bD09PXkrXCJTdGFydFwiJiYodD1wLEo9cC5zdWJzdHIoMCxwLmxlbmd0aC01KStcImVuZFwiLHA9cC5zdWJzdHIoMCxwLmxlbmd0aC02KSk7bD1xYShwLnRvTG93ZXJDYXNlKCkpO2tbbF09cDtpZihxfHwhYy5oYXNPd25Qcm9wZXJ0eShsKSljW2xdPW0sb2MoYSxsKSYmKGNbbF09ITApO1MoYSxiLG0sbCk7ZWEoYixsLFwiQVwiLGQsZyx0LEopfX1hPWEuY2xhc3NOYW1lO2lmKEcoYSkmJlwiXCIhPT1hKWZvcig7cD1mLmV4ZWMoYSk7KWw9cWEocFsyXSksZWEoYixsLFwiQ1wiLGQsZykmJihjW2xdPSQocFszXSkpLGE9YS5zdWJzdHIocC5pbmRleCtwWzBdLmxlbmd0aCk7YnJlYWs7Y2FzZSAzOngoYixhLm5vZGVWYWx1ZSk7YnJlYWs7Y2FzZSA4OnRyeXtpZihwPWUuZXhlYyhhLm5vZGVWYWx1ZSkpbD1xYShwWzFdKSxlYShiLGwsXCJNXCIsZCxcbmcpJiYoY1tsXT0kKHBbMl0pKX1jYXRjaChCKXt9fWIuc29ydChGKTtyZXR1cm4gYn1mdW5jdGlvbiBQKGEsYixjKXt2YXIgZD1bXSxlPTA7aWYoYiYmYS5oYXNBdHRyaWJ1dGUmJmEuaGFzQXR0cmlidXRlKGIpKXtkb3tpZighYSl0aHJvdyBqYShcInV0ZXJkaXJcIixiLGMpOzE9PWEubm9kZVR5cGUmJihhLmhhc0F0dHJpYnV0ZShiKSYmZSsrLGEuaGFzQXR0cmlidXRlKGMpJiZlLS0pO2QucHVzaChhKTthPWEubmV4dFNpYmxpbmd9d2hpbGUoMDxlKX1lbHNlIGQucHVzaChhKTtyZXR1cm4gQShkKX1mdW5jdGlvbiBDKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGYsZyxrKXtlPVAoZVswXSxiLGMpO3JldHVybiBhKGQsZSxmLGcsayl9fWZ1bmN0aW9uIEkoYSxjLGQsZSxmLGcsayxxLG4pe2Z1bmN0aW9uIHcoYSxiLGMsZCl7aWYoYSl7YyYmKGE9QyhhLGMsZCkpO2EucmVxdWlyZT1ILnJlcXVpcmU7YS5kaXJlY3RpdmVOYW1lPXo7aWYoSz09PUh8fEguJCRpc29sYXRlU2NvcGUpYT1yYyhhLFxue2lzb2xhdGVTY29wZTohMH0pO2sucHVzaChhKX1pZihiKXtjJiYoYj1DKGIsYyxkKSk7Yi5yZXF1aXJlPUgucmVxdWlyZTtiLmRpcmVjdGl2ZU5hbWU9ejtpZihLPT09SHx8SC4kJGlzb2xhdGVTY29wZSliPXJjKGIse2lzb2xhdGVTY29wZTohMH0pO3EucHVzaChiKX19ZnVuY3Rpb24gdChhLGIsYyxkKXt2YXIgZSxmPVwiZGF0YVwiLGc9ITE7aWYoRyhiKSl7Zm9yKDtcIl5cIj09KGU9Yi5jaGFyQXQoMCkpfHxcIj9cIj09ZTspYj1iLnN1YnN0cigxKSxcIl5cIj09ZSYmKGY9XCJpbmhlcml0ZWREYXRhXCIpLGc9Z3x8XCI/XCI9PWU7ZT1udWxsO2QmJlwiZGF0YVwiPT09ZiYmKGU9ZFtiXSk7ZT1lfHxjW2ZdKFwiJFwiK2IrXCJDb250cm9sbGVyXCIpO2lmKCFlJiYhZyl0aHJvdyBqYShcImN0cmVxXCIsYixhKTt9ZWxzZSBMKGIpJiYoZT1bXSxyKGIsZnVuY3Rpb24oYil7ZS5wdXNoKHQoYSxiLGMsZCkpfSkpO3JldHVybiBlfWZ1bmN0aW9uIEooYSxlLGYsZyxuKXtmdW5jdGlvbiB3KGEsYil7dmFyIGM7Mj5hcmd1bWVudHMubGVuZ3RoJiZcbihiPWEsYT11KTtJYSYmKGM9Y2EpO3JldHVybiBuKGEsYixjKX12YXIgeSxRLEIsTSxDLFAsY2E9e30scmE7eT1jPT09Zj9kOmhhKGQsbmV3IE9iKEEoZiksZC4kYXR0cikpO1E9eS4kJGVsZW1lbnQ7aWYoSyl7dmFyIHVlPS9eXFxzKihbQD0mXSkoXFw/PylcXHMqKFxcdyopXFxzKiQvO1A9ZS4kbmV3KCEwKTshSXx8SSE9PUsmJkkhPT1LLiQkb3JpZ2luYWxEaXJlY3RpdmU/US5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIixQKTpRLmRhdGEoXCIkaXNvbGF0ZVNjb3BlXCIsUCk7YmEoUSxcIm5nLWlzb2xhdGUtc2NvcGVcIik7cihLLnNjb3BlLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9YS5tYXRjaCh1ZSl8fFtdLGY9ZFszXXx8YyxnPVwiP1wiPT1kWzJdLGQ9ZFsxXSxrLGwsbixxO1AuJCRpc29sYXRlQmluZGluZ3NbY109ZCtmO3N3aXRjaChkKXtjYXNlIFwiQFwiOnkuJG9ic2VydmUoZixmdW5jdGlvbihhKXtQW2NdPWF9KTt5LiQkb2JzZXJ2ZXJzW2ZdLiQkc2NvcGU9ZTt5W2ZdJiYoUFtjXT1iKHlbZl0pKGUpKTtcbmJyZWFrO2Nhc2UgXCI9XCI6aWYoZyYmIXlbZl0pYnJlYWs7bD1wKHlbZl0pO3E9bC5saXRlcmFsP0NhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1ifHxhIT09YSYmYiE9PWJ9O249bC5hc3NpZ258fGZ1bmN0aW9uKCl7az1QW2NdPWwoZSk7dGhyb3cgamEoXCJub25hc3NpZ25cIix5W2ZdLEsubmFtZSk7fTtrPVBbY109bChlKTtQLiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPWwoZSk7cShhLFBbY10pfHwocShhLGspP24oZSxhPVBbY10pOlBbY109YSk7cmV0dXJuIGs9YX0sbnVsbCxsLmxpdGVyYWwpO2JyZWFrO2Nhc2UgXCImXCI6bD1wKHlbZl0pO1BbY109ZnVuY3Rpb24oYSl7cmV0dXJuIGwoZSxhKX07YnJlYWs7ZGVmYXVsdDp0aHJvdyBqYShcImlzY3BcIixLLm5hbWUsYyxhKTt9fSl9cmE9biYmdztPJiZyKE8sZnVuY3Rpb24oYSl7dmFyIGI9eyRzY29wZTphPT09S3x8YS4kJGlzb2xhdGVTY29wZT9QOmUsJGVsZW1lbnQ6USwkYXR0cnM6eSwkdHJhbnNjbHVkZTpyYX0sYztDPWEuY29udHJvbGxlcjtcblwiQFwiPT1DJiYoQz15W2EubmFtZV0pO2M9cyhDLGIpO2NhW2EubmFtZV09YztJYXx8US5kYXRhKFwiJFwiK2EubmFtZStcIkNvbnRyb2xsZXJcIixjKTthLmNvbnRyb2xsZXJBcyYmKGIuJHNjb3BlW2EuY29udHJvbGxlckFzXT1jKX0pO2c9MDtmb3IoQj1rLmxlbmd0aDtnPEI7ZysrKXRyeXtNPWtbZ10sTShNLmlzb2xhdGVTY29wZT9QOmUsUSx5LE0ucmVxdWlyZSYmdChNLmRpcmVjdGl2ZU5hbWUsTS5yZXF1aXJlLFEsY2EpLHJhKX1jYXRjaChIKXtsKEgsaWEoUSkpfWc9ZTtLJiYoSy50ZW1wbGF0ZXx8bnVsbD09PUsudGVtcGxhdGVVcmwpJiYoZz1QKTthJiZhKGcsZi5jaGlsZE5vZGVzLHUsbik7Zm9yKGc9cS5sZW5ndGgtMTswPD1nO2ctLSl0cnl7TT1xW2ddLE0oTS5pc29sYXRlU2NvcGU/UDplLFEseSxNLnJlcXVpcmUmJnQoTS5kaXJlY3RpdmVOYW1lLE0ucmVxdWlyZSxRLGNhKSxyYSl9Y2F0Y2goRCl7bChELGlhKFEpKX19bj1ufHx7fTtmb3IodmFyIHk9LU51bWJlci5NQVhfVkFMVUUsXG5NLE89bi5jb250cm9sbGVyRGlyZWN0aXZlcyxLPW4ubmV3SXNvbGF0ZVNjb3BlRGlyZWN0aXZlLEk9bi50ZW1wbGF0ZURpcmVjdGl2ZSxlYT1uLm5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmUsRj0hMSxFPSExLElhPW4uaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmUseD1kLiQkZWxlbWVudD1BKGMpLEgseixWLFM9ZSxSLEhhPTAsc2E9YS5sZW5ndGg7SGE8c2E7SGErKyl7SD1hW0hhXTt2YXIgVT1ILiQkc3RhcnQsWT1ILiQkZW5kO1UmJih4PVAoYyxVLFkpKTtWPXU7aWYoeT5ILnByaW9yaXR5KWJyZWFrO2lmKFY9SC5zY29wZSlNPU18fEgsSC50ZW1wbGF0ZVVybHx8KGZiKFwibmV3L2lzb2xhdGVkIHNjb3BlXCIsSyxILHgpLFQoVikmJihLPUgpKTt6PUgubmFtZTshSC50ZW1wbGF0ZVVybCYmSC5jb250cm9sbGVyJiYoVj1ILmNvbnRyb2xsZXIsTz1PfHx7fSxmYihcIidcIit6K1wiJyBjb250cm9sbGVyXCIsT1t6XSxILHgpLE9bel09SCk7aWYoVj1ILnRyYW5zY2x1ZGUpRj0hMCxILiQkdGxifHxcbihmYihcInRyYW5zY2x1c2lvblwiLGVhLEgseCksZWE9SCksXCJlbGVtZW50XCI9PVY/KElhPSEwLHk9SC5wcmlvcml0eSxWPXgseD1kLiQkZWxlbWVudD1BKFguY3JlYXRlQ29tbWVudChcIiBcIit6K1wiOiBcIitkW3pdK1wiIFwiKSksYz14WzBdLHJhKGYsd2EuY2FsbChWLDApLGMpLFM9QihWLGUseSxnJiZnLm5hbWUse25vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6ZWF9KSk6KFY9QShLYihjKSkuY29udGVudHMoKSx4LmVtcHR5KCksUz1CKFYsZSkpO2lmKEgudGVtcGxhdGUpaWYoRT0hMCxmYihcInRlbXBsYXRlXCIsSSxILHgpLEk9SCxWPU4oSC50ZW1wbGF0ZSk/SC50ZW1wbGF0ZSh4LGQpOkgudGVtcGxhdGUsVj1XKFYpLEgucmVwbGFjZSl7Zz1IO1Y9SWIudGVzdChWKT9BKCQoVikpOltdO2M9VlswXTtpZigxIT1WLmxlbmd0aHx8MSE9PWMubm9kZVR5cGUpdGhyb3cgamEoXCJ0cGxydFwiLHosXCJcIik7cmEoZix4LGMpO3NhPXskYXR0cjp7fX07Vj1jYShjLFtdLHNhKTt2YXIgWj1hLnNwbGljZShIYStcbjEsYS5sZW5ndGgtKEhhKzEpKTtLJiZEKFYpO2E9YS5jb25jYXQoVikuY29uY2F0KFopO3YoZCxzYSk7c2E9YS5sZW5ndGh9ZWxzZSB4Lmh0bWwoVik7aWYoSC50ZW1wbGF0ZVVybClFPSEwLGZiKFwidGVtcGxhdGVcIixJLEgseCksST1ILEgucmVwbGFjZSYmKGc9SCksSj10ZShhLnNwbGljZShIYSxhLmxlbmd0aC1IYSkseCxkLGYsRiYmUyxrLHEse2NvbnRyb2xsZXJEaXJlY3RpdmVzOk8sbmV3SXNvbGF0ZVNjb3BlRGlyZWN0aXZlOkssdGVtcGxhdGVEaXJlY3RpdmU6SSxub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOmVhfSksc2E9YS5sZW5ndGg7ZWxzZSBpZihILmNvbXBpbGUpdHJ5e1I9SC5jb21waWxlKHgsZCxTKSxOKFIpP3cobnVsbCxSLFUsWSk6UiYmdyhSLnByZSxSLnBvc3QsVSxZKX1jYXRjaCh2ZSl7bCh2ZSxpYSh4KSl9SC50ZXJtaW5hbCYmKEoudGVybWluYWw9ITAseT1NYXRoLm1heCh5LEgucHJpb3JpdHkpKX1KLnNjb3BlPU0mJiEwPT09TS5zY29wZTtKLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50PVxuRjtKLnRlbXBsYXRlT25UaGlzRWxlbWVudD1FO0oudHJhbnNjbHVkZT1TO24uaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmU9SWE7cmV0dXJuIEp9ZnVuY3Rpb24gRChhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2I8YztiKyspYVtiXT0kYihhW2JdLHskJGlzb2xhdGVTY29wZTohMH0pfWZ1bmN0aW9uIGVhKGIsZSxmLGcscCxtLG4pe2lmKGU9PT1wKXJldHVybiBudWxsO3A9bnVsbDtpZihjLmhhc093blByb3BlcnR5KGUpKXt2YXIgcTtlPWEuZ2V0KGUrZCk7Zm9yKHZhciB3PTAscz1lLmxlbmd0aDt3PHM7dysrKXRyeXtxPWVbd10sKGc9PT11fHxnPnEucHJpb3JpdHkpJiYtMSE9cS5yZXN0cmljdC5pbmRleE9mKGYpJiYobSYmKHE9JGIocSx7JCRzdGFydDptLCQkZW5kOm59KSksYi5wdXNoKHEpLHA9cSl9Y2F0Y2goeSl7bCh5KX19cmV0dXJuIHB9ZnVuY3Rpb24gdihhLGIpe3ZhciBjPWIuJGF0dHIsZD1hLiRhdHRyLGU9YS4kJGVsZW1lbnQ7cihhLGZ1bmN0aW9uKGQsZSl7XCIkXCIhPVxuZS5jaGFyQXQoMCkmJihiW2VdJiZiW2VdIT09ZCYmKGQrPShcInN0eWxlXCI9PT1lP1wiO1wiOlwiIFwiKStiW2VdKSxhLiRzZXQoZSxkLCEwLGNbZV0pKX0pO3IoYixmdW5jdGlvbihiLGYpe1wiY2xhc3NcIj09Zj8oYmEoZSxiKSxhW1wiY2xhc3NcIl09KGFbXCJjbGFzc1wiXT9hW1wiY2xhc3NcIl0rXCIgXCI6XCJcIikrYik6XCJzdHlsZVwiPT1mPyhlLmF0dHIoXCJzdHlsZVwiLGUuYXR0cihcInN0eWxlXCIpK1wiO1wiK2IpLGEuc3R5bGU9KGEuc3R5bGU/YS5zdHlsZStcIjtcIjpcIlwiKStiKTpcIiRcIj09Zi5jaGFyQXQoMCl8fGEuaGFzT3duUHJvcGVydHkoZil8fChhW2ZdPWIsZFtmXT1jW2ZdKX0pfWZ1bmN0aW9uIHRlKGEsYixjLGQsZSxmLGcsayl7dmFyIHA9W10sbCxtLHc9YlswXSxzPWEuc2hpZnQoKSx5PUUoe30scyx7dGVtcGxhdGVVcmw6bnVsbCx0cmFuc2NsdWRlOm51bGwscmVwbGFjZTpudWxsLCQkb3JpZ2luYWxEaXJlY3RpdmU6c30pLEo9TihzLnRlbXBsYXRlVXJsKT9zLnRlbXBsYXRlVXJsKGIsYyk6cy50ZW1wbGF0ZVVybDtcbmIuZW1wdHkoKTtuLmdldCh0LmdldFRydXN0ZWRSZXNvdXJjZVVybChKKSx7Y2FjaGU6cX0pLnN1Y2Nlc3MoZnVuY3Rpb24ocSl7dmFyIG4sdDtxPVcocSk7aWYocy5yZXBsYWNlKXtxPUliLnRlc3QocSk/QSgkKHEpKTpbXTtuPXFbMF07aWYoMSE9cS5sZW5ndGh8fDEhPT1uLm5vZGVUeXBlKXRocm93IGphKFwidHBscnRcIixzLm5hbWUsSik7cT17JGF0dHI6e319O3JhKGQsYixuKTt2YXIgQj1jYShuLFtdLHEpO1Qocy5zY29wZSkmJkQoQik7YT1CLmNvbmNhdChhKTt2KGMscSl9ZWxzZSBuPXcsYi5odG1sKHEpO2EudW5zaGlmdCh5KTtsPUkoYSxuLGMsZSxiLHMsZixnLGspO3IoZCxmdW5jdGlvbihhLGMpe2E9PW4mJihkW2NdPWJbMF0pfSk7Zm9yKG09TyhiWzBdLmNoaWxkTm9kZXMsZSk7cC5sZW5ndGg7KXtxPXAuc2hpZnQoKTt0PXAuc2hpZnQoKTt2YXIgSz1wLnNoaWZ0KCksQz1wLnNoaWZ0KCksQj1iWzBdO2lmKHQhPT13KXt2YXIgUD10LmNsYXNzTmFtZTtrLmhhc0VsZW1lbnRUcmFuc2NsdWRlRGlyZWN0aXZlJiZcbnMucmVwbGFjZXx8KEI9S2IobikpO3JhKEssQSh0KSxCKTtiYShBKEIpLFApfXQ9bC50cmFuc2NsdWRlT25UaGlzRWxlbWVudD9NKHEsbC50cmFuc2NsdWRlLEMpOkM7bChtLHEsQixkLHQpfXA9bnVsbH0pLmVycm9yKGZ1bmN0aW9uKGEsYixjLGQpe3Rocm93IGphKFwidHBsb2FkXCIsZC51cmwpO30pO3JldHVybiBmdW5jdGlvbihhLGIsYyxkLGUpe2E9ZTtwPyhwLnB1c2goYikscC5wdXNoKGMpLHAucHVzaChkKSxwLnB1c2goYSkpOihsLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50JiYoYT1NKGIsbC50cmFuc2NsdWRlLGUpKSxsKG0sYixjLGQsYSkpfX1mdW5jdGlvbiBGKGEsYil7dmFyIGM9Yi5wcmlvcml0eS1hLnByaW9yaXR5O3JldHVybiAwIT09Yz9jOmEubmFtZSE9PWIubmFtZT9hLm5hbWU8Yi5uYW1lPy0xOjE6YS5pbmRleC1iLmluZGV4fWZ1bmN0aW9uIGZiKGEsYixjLGQpe2lmKGIpdGhyb3cgamEoXCJtdWx0aWRpclwiLGIubmFtZSxjLm5hbWUsYSxpYShkKSk7fWZ1bmN0aW9uIHgoYSxcbmMpe3ZhciBkPWIoYywhMCk7ZCYmYS5wdXNoKHtwcmlvcml0eTowLGNvbXBpbGU6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnQoKS5sZW5ndGg7YiYmYmEoYS5wYXJlbnQoKSxcIm5nLWJpbmRpbmdcIik7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7dmFyIGU9Yy5wYXJlbnQoKSxmPWUuZGF0YShcIiRiaW5kaW5nXCIpfHxbXTtmLnB1c2goZCk7ZS5kYXRhKFwiJGJpbmRpbmdcIixmKTtifHxiYShlLFwibmctYmluZGluZ1wiKTthLiR3YXRjaChkLGZ1bmN0aW9uKGEpe2NbMF0ubm9kZVZhbHVlPWF9KX19fSl9ZnVuY3Rpb24geihhLGIpe2lmKFwic3JjZG9jXCI9PWIpcmV0dXJuIHQuSFRNTDt2YXIgYz1QYShhKTtpZihcInhsaW5rSHJlZlwiPT1ifHxcIkZPUk1cIj09YyYmXCJhY3Rpb25cIj09Ynx8XCJJTUdcIiE9YyYmKFwic3JjXCI9PWJ8fFwibmdTcmNcIj09YikpcmV0dXJuIHQuUkVTT1VSQ0VfVVJMfWZ1bmN0aW9uIFMoYSxjLGQsZSl7dmFyIGY9YihkLCEwKTtpZihmKXtpZihcIm11bHRpcGxlXCI9PT1lJiZcIlNFTEVDVFwiPT09XG5QYShhKSl0aHJvdyBqYShcInNlbG11bHRpXCIsaWEoYSkpO2MucHVzaCh7cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGMsZCxrKXtkPWsuJCRvYnNlcnZlcnN8fChrLiQkb2JzZXJ2ZXJzPXt9KTtpZihnLnRlc3QoZSkpdGhyb3cgamEoXCJub2RvbWV2ZW50c1wiKTtpZihmPWIoa1tlXSwhMCx6KGEsZSkpKWtbZV09ZihjKSwoZFtlXXx8KGRbZV09W10pKS4kJGludGVyPSEwLChrLiQkb2JzZXJ2ZXJzJiZrLiQkb2JzZXJ2ZXJzW2VdLiQkc2NvcGV8fGMpLiR3YXRjaChmLGZ1bmN0aW9uKGEsYil7XCJjbGFzc1wiPT09ZSYmYSE9Yj9rLiR1cGRhdGVDbGFzcyhhLGIpOmsuJHNldChlLGEpfSl9fX19KX19ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWJbMF0sZT1iLmxlbmd0aCxmPWQucGFyZW50Tm9kZSxnLGs7aWYoYSlmb3IoZz0wLGs9YS5sZW5ndGg7ZzxrO2crKylpZihhW2ddPT1kKXthW2crK109YztrPWcrZS0xO2Zvcih2YXIgcD1hLmxlbmd0aDtnPFxucDtnKyssaysrKWs8cD9hW2ddPWFba106ZGVsZXRlIGFbZ107YS5sZW5ndGgtPWUtMTticmVha31mJiZmLnJlcGxhY2VDaGlsZChjLGQpO2E9WC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5hcHBlbmRDaGlsZChkKTtjW0EuZXhwYW5kb109ZFtBLmV4cGFuZG9dO2Q9MTtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKWY9YltkXSxBKGYpLnJlbW92ZSgpLGEuYXBwZW5kQ2hpbGQoZiksZGVsZXRlIGJbZF07YlswXT1jO2IubGVuZ3RoPTF9ZnVuY3Rpb24gcmMoYSxiKXtyZXR1cm4gRShmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sYSxiKX12YXIgT2I9ZnVuY3Rpb24oYSxiKXt0aGlzLiQkZWxlbWVudD1hO3RoaXMuJGF0dHI9Ynx8e319O09iLnByb3RvdHlwZT17JG5vcm1hbGl6ZTpxYSwkYWRkQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmeS5hZGRDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe2EmJjA8XG5hLmxlbmd0aCYmeS5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHVwZGF0ZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9c2MoYSxiKSxkPXNjKGIsYSk7MD09PWMubGVuZ3RoP3kucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsZCk6MD09PWQubGVuZ3RoP3kuYWRkQ2xhc3ModGhpcy4kJGVsZW1lbnQsYyk6eS5zZXRDbGFzcyh0aGlzLiQkZWxlbWVudCxjLGQpfSwkc2V0OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW9jKHRoaXMuJCRlbGVtZW50WzBdLGEpO2UmJih0aGlzLiQkZWxlbWVudC5wcm9wKGEsYiksZD1lKTt0aGlzW2FdPWI7ZD90aGlzLiRhdHRyW2FdPWQ6KGQ9dGhpcy4kYXR0clthXSl8fCh0aGlzLiRhdHRyW2FdPWQ9bmIoYSxcIi1cIikpO2U9UGEodGhpcy4kJGVsZW1lbnQpO2lmKFwiQVwiPT09ZSYmXCJocmVmXCI9PT1hfHxcIklNR1wiPT09ZSYmXCJzcmNcIj09PWEpdGhpc1thXT1iPUsoYixcInNyY1wiPT09YSk7ITEhPT1jJiYobnVsbD09PWJ8fGI9PT11P3RoaXMuJCRlbGVtZW50LnJlbW92ZUF0dHIoZCk6XG50aGlzLiQkZWxlbWVudC5hdHRyKGQsYikpOyhjPXRoaXMuJCRvYnNlcnZlcnMpJiZyKGNbYV0sZnVuY3Rpb24oYSl7dHJ5e2EoYil9Y2F0Y2goYyl7bChjKX19KX0sJG9ic2VydmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy4kJG9ic2VydmVyc3x8KGMuJCRvYnNlcnZlcnM9e30pLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTtKLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtlLiQkaW50ZXJ8fGIoY1thXSl9KTtyZXR1cm4gYn19O3ZhciBzYT1iLnN0YXJ0U3ltYm9sKCksSWE9Yi5lbmRTeW1ib2woKSxXPVwie3tcIj09c2F8fFwifX1cIj09SWE/Z2E6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXFx7XFx7L2csc2EpLnJlcGxhY2UoL319L2csSWEpfSxVPS9ebmdBdHRyW0EtWl0vO3JldHVybiBCfV19ZnVuY3Rpb24gcWEoYil7cmV0dXJuIGFiKGIucmVwbGFjZSh3ZSxcIlwiKSl9ZnVuY3Rpb24gc2MoYixhKXt2YXIgYz1cIlwiLGQ9Yi5zcGxpdCgvXFxzKy8pLGU9YS5zcGxpdCgvXFxzKy8pLFxuZj0wO2E6Zm9yKDtmPGQubGVuZ3RoO2YrKyl7Zm9yKHZhciBnPWRbZl0saD0wO2g8ZS5sZW5ndGg7aCsrKWlmKGc9PWVbaF0pY29udGludWUgYTtjKz0oMDxjLmxlbmd0aD9cIiBcIjpcIlwiKStnfXJldHVybiBjfWZ1bmN0aW9uIE9kKCl7dmFyIGI9e30sYT0vXihcXFMrKShcXHMrYXNcXHMrKFxcdyspKT8kLzt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGEsZCl7RWEoYSxcImNvbnRyb2xsZXJcIik7VChhKT9FKGIsYSk6YlthXT1kfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkd2luZG93XCIsZnVuY3Rpb24oYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxmKXt2YXIgZyxoLGs7RyhlKSYmKGc9ZS5tYXRjaChhKSxoPWdbMV0saz1nWzNdLGU9Yi5oYXNPd25Qcm9wZXJ0eShoKT9iW2hdOmZjKGYuJHNjb3BlLGgsITApfHxmYyhkLGgsITApLFlhKGUsaCwhMCkpO2c9Yy5pbnN0YW50aWF0ZShlLGYpO2lmKGspe2lmKCFmfHxcIm9iamVjdFwiIT09dHlwZW9mIGYuJHNjb3BlKXRocm93IHooXCIkY29udHJvbGxlclwiKShcIm5vc2NwXCIsXG5ofHxlLm5hbWUsayk7Zi4kc2NvcGVba109Z31yZXR1cm4gZ319XX1mdW5jdGlvbiBQZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsZnVuY3Rpb24oYil7cmV0dXJuIEEoYi5kb2N1bWVudCl9XX1mdW5jdGlvbiBRZCgpe3RoaXMuJGdldD1bXCIkbG9nXCIsZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyl7Yi5lcnJvci5hcHBseShiLGFyZ3VtZW50cyl9fV19ZnVuY3Rpb24gdGMoYil7dmFyIGE9e30sYyxkLGU7aWYoIWIpcmV0dXJuIGE7cihiLnNwbGl0KFwiXFxuXCIpLGZ1bmN0aW9uKGIpe2U9Yi5pbmRleE9mKFwiOlwiKTtjPXgoJChiLnN1YnN0cigwLGUpKSk7ZD0kKGIuc3Vic3RyKGUrMSkpO2MmJihhW2NdPWFbY10/YVtjXStcIiwgXCIrZDpkKX0pO3JldHVybiBhfWZ1bmN0aW9uIHVjKGIpe3ZhciBhPVQoYik/Yjp1O3JldHVybiBmdW5jdGlvbihjKXthfHwoYT10YyhiKSk7cmV0dXJuIGM/YVt4KGMpXXx8bnVsbDphfX1mdW5jdGlvbiB2YyhiLGEsYyl7aWYoTihjKSlyZXR1cm4gYyhiLFxuYSk7cihjLGZ1bmN0aW9uKGMpe2I9YyhiLGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVGQoKXt2YXIgYj0vXlxccyooXFxbfFxce1teXFx7XSkvLGE9L1tcXH1cXF1dXFxzKiQvLGM9L15cXClcXF1cXH0nLD9cXG4vLGQ9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIn0sZT10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24oZCl7RyhkKSYmKGQ9ZC5yZXBsYWNlKGMsXCJcIiksYi50ZXN0KGQpJiZhLnRlc3QoZCkmJihkPWFjKGQpKSk7cmV0dXJuIGR9XSx0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbihhKXtyZXR1cm4gVChhKSYmXCJbb2JqZWN0IEZpbGVdXCIhPT1CYS5jYWxsKGEpJiZcIltvYmplY3QgQmxvYl1cIiE9PUJhLmNhbGwoYSk/b2EoYSk6YX1dLGhlYWRlcnM6e2NvbW1vbjp7QWNjZXB0OlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCJ9LHBvc3Q6aGEoZCkscHV0OmhhKGQpLHBhdGNoOmhhKGQpfSx4c3JmQ29va2llTmFtZTpcIlhTUkYtVE9LRU5cIixcbnhzcmZIZWFkZXJOYW1lOlwiWC1YU1JGLVRPS0VOXCJ9LGY9dGhpcy5pbnRlcmNlcHRvcnM9W10sZz10aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3JzPVtdO3RoaXMuJGdldD1bXCIkaHR0cEJhY2tlbmRcIixcIiRicm93c2VyXCIsXCIkY2FjaGVGYWN0b3J5XCIsXCIkcm9vdFNjb3BlXCIsXCIkcVwiLFwiJGluamVjdG9yXCIsZnVuY3Rpb24oYSxiLGMsZCxuLHEpe2Z1bmN0aW9uIHAoYSl7ZnVuY3Rpb24gYihhKXt2YXIgZD1FKHt9LGEse2RhdGE6dmMoYS5kYXRhLGEuaGVhZGVycyxjLnRyYW5zZm9ybVJlc3BvbnNlKX0pO3JldHVybiAyMDA8PWEuc3RhdHVzJiYzMDA+YS5zdGF0dXM/ZDpuLnJlamVjdChkKX12YXIgYz17bWV0aG9kOlwiZ2V0XCIsdHJhbnNmb3JtUmVxdWVzdDplLnRyYW5zZm9ybVJlcXVlc3QsdHJhbnNmb3JtUmVzcG9uc2U6ZS50cmFuc2Zvcm1SZXNwb25zZX0sZD1mdW5jdGlvbihhKXt2YXIgYj1lLmhlYWRlcnMsYz1FKHt9LGEuaGVhZGVycyksZCxmLGI9RSh7fSxiLmNvbW1vbixiW3goYS5tZXRob2QpXSk7XG5hOmZvcihkIGluIGIpe2E9eChkKTtmb3IoZiBpbiBjKWlmKHgoZik9PT1hKWNvbnRpbnVlIGE7Y1tkXT1iW2RdfShmdW5jdGlvbihhKXt2YXIgYjtyKGEsZnVuY3Rpb24oYyxkKXtOKGMpJiYoYj1jKCksbnVsbCE9Yj9hW2RdPWI6ZGVsZXRlIGFbZF0pfSl9KShjKTtyZXR1cm4gY30oYSk7RShjLGEpO2MuaGVhZGVycz1kO2MubWV0aG9kPUxhKGMubWV0aG9kKTt2YXIgZj1bZnVuY3Rpb24oYSl7ZD1hLmhlYWRlcnM7dmFyIGM9dmMoYS5kYXRhLHVjKGQpLGEudHJhbnNmb3JtUmVxdWVzdCk7RihjKSYmcihkLGZ1bmN0aW9uKGEsYil7XCJjb250ZW50LXR5cGVcIj09PXgoYikmJmRlbGV0ZSBkW2JdfSk7RihhLndpdGhDcmVkZW50aWFscykmJiFGKGUud2l0aENyZWRlbnRpYWxzKSYmKGEud2l0aENyZWRlbnRpYWxzPWUud2l0aENyZWRlbnRpYWxzKTtyZXR1cm4gcyhhLGMsZCkudGhlbihiLGIpfSx1XSxnPW4ud2hlbihjKTtmb3Iocih0LGZ1bmN0aW9uKGEpeyhhLnJlcXVlc3R8fGEucmVxdWVzdEVycm9yKSYmXG5mLnVuc2hpZnQoYS5yZXF1ZXN0LGEucmVxdWVzdEVycm9yKTsoYS5yZXNwb25zZXx8YS5yZXNwb25zZUVycm9yKSYmZi5wdXNoKGEucmVzcG9uc2UsYS5yZXNwb25zZUVycm9yKX0pO2YubGVuZ3RoOyl7YT1mLnNoaWZ0KCk7dmFyIGg9Zi5zaGlmdCgpLGc9Zy50aGVuKGEsaCl9Zy5zdWNjZXNzPWZ1bmN0aW9uKGEpe2cudGhlbihmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsYyl9KTtyZXR1cm4gZ307Zy5lcnJvcj1mdW5jdGlvbihhKXtnLnRoZW4obnVsbCxmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsYyl9KTtyZXR1cm4gZ307cmV0dXJuIGd9ZnVuY3Rpb24gcyhjLGYsZyl7ZnVuY3Rpb24gbShhLGIsYyxlKXtDJiYoMjAwPD1hJiYzMDA+YT9DLnB1dChBLFthLGIsdGMoYyksZV0pOkMucmVtb3ZlKEEpKTtxKGIsYSxjLGUpO2QuJCRwaGFzZXx8ZC4kYXBwbHkoKX1mdW5jdGlvbiBxKGEsYixkLGUpe2I9TWF0aC5tYXgoYiwwKTsoMjAwPD1cbmImJjMwMD5iP3QucmVzb2x2ZTp0LnJlamVjdCkoe2RhdGE6YSxzdGF0dXM6YixoZWFkZXJzOnVjKGQpLGNvbmZpZzpjLHN0YXR1c1RleHQ6ZX0pfWZ1bmN0aW9uIHMoKXt2YXIgYT1UYShwLnBlbmRpbmdSZXF1ZXN0cyxjKTstMSE9PWEmJnAucGVuZGluZ1JlcXVlc3RzLnNwbGljZShhLDEpfXZhciB0PW4uZGVmZXIoKSxyPXQucHJvbWlzZSxDLEksQT1KKGMudXJsLGMucGFyYW1zKTtwLnBlbmRpbmdSZXF1ZXN0cy5wdXNoKGMpO3IudGhlbihzLHMpOyFjLmNhY2hlJiYhZS5jYWNoZXx8KCExPT09Yy5jYWNoZXx8XCJHRVRcIiE9PWMubWV0aG9kJiZcIkpTT05QXCIhPT1jLm1ldGhvZCl8fChDPVQoYy5jYWNoZSk/Yy5jYWNoZTpUKGUuY2FjaGUpP2UuY2FjaGU6dyk7aWYoQylpZihJPUMuZ2V0KEEpLEQoSSkpe2lmKEkmJk4oSS50aGVuKSlyZXR1cm4gSS50aGVuKHMscyksSTtMKEkpP3EoSVsxXSxJWzBdLGhhKElbMl0pLElbM10pOnEoSSwyMDAse30sXCJPS1wiKX1lbHNlIEMucHV0KEEscik7RihJKSYmXG4oKEk9UGIoYy51cmwpP2IuY29va2llcygpW2MueHNyZkNvb2tpZU5hbWV8fGUueHNyZkNvb2tpZU5hbWVdOnUpJiYoZ1tjLnhzcmZIZWFkZXJOYW1lfHxlLnhzcmZIZWFkZXJOYW1lXT1JKSxhKGMubWV0aG9kLEEsZixtLGcsYy50aW1lb3V0LGMud2l0aENyZWRlbnRpYWxzLGMucmVzcG9uc2VUeXBlKSk7cmV0dXJuIHJ9ZnVuY3Rpb24gSihhLGIpe2lmKCFiKXJldHVybiBhO3ZhciBjPVtdO1NjKGIsZnVuY3Rpb24oYSxiKXtudWxsPT09YXx8RihhKXx8KEwoYSl8fChhPVthXSkscihhLGZ1bmN0aW9uKGEpe1QoYSkmJihhPXZhKGEpP2EudG9JU09TdHJpbmcoKTpvYShhKSk7Yy5wdXNoKERhKGIpK1wiPVwiK0RhKGEpKX0pKX0pOzA8Yy5sZW5ndGgmJihhKz0oLTE9PWEuaW5kZXhPZihcIj9cIik/XCI/XCI6XCImXCIpK2Muam9pbihcIiZcIikpO3JldHVybiBhfXZhciB3PWMoXCIkaHR0cFwiKSx0PVtdO3IoZixmdW5jdGlvbihhKXt0LnVuc2hpZnQoRyhhKT9xLmdldChhKTpxLmludm9rZShhKSl9KTtyKGcsXG5mdW5jdGlvbihhLGIpe3ZhciBjPUcoYSk/cS5nZXQoYSk6cS5pbnZva2UoYSk7dC5zcGxpY2UoYiwwLHtyZXNwb25zZTpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLndoZW4oYSkpfSxyZXNwb25zZUVycm9yOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ucmVqZWN0KGEpKX19KX0pO3AucGVuZGluZ1JlcXVlc3RzPVtdOyhmdW5jdGlvbihhKXtyKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtwW2FdPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHAoRShjfHx7fSx7bWV0aG9kOmEsdXJsOmJ9KSl9fSl9KShcImdldFwiLFwiZGVsZXRlXCIsXCJoZWFkXCIsXCJqc29ucFwiKTsoZnVuY3Rpb24oYSl7cihhcmd1bWVudHMsZnVuY3Rpb24oYSl7cFthXT1mdW5jdGlvbihiLGMsZCl7cmV0dXJuIHAoRShkfHx7fSx7bWV0aG9kOmEsdXJsOmIsZGF0YTpjfSkpfX0pfSkoXCJwb3N0XCIsXCJwdXRcIixcInBhdGNoXCIpO3AuZGVmYXVsdHM9ZTtyZXR1cm4gcH1dfWZ1bmN0aW9uIHhlKGIpe2lmKDg+PVImJighYi5tYXRjaCgvXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kpfHxcbiFXLlhNTEh0dHBSZXF1ZXN0KSlyZXR1cm4gbmV3IFcuQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO2lmKFcuWE1MSHR0cFJlcXVlc3QpcmV0dXJuIG5ldyBXLlhNTEh0dHBSZXF1ZXN0O3Rocm93IHooXCIkaHR0cEJhY2tlbmRcIikoXCJub3hoclwiKTt9ZnVuY3Rpb24gVWQoKXt0aGlzLiRnZXQ9W1wiJGJyb3dzZXJcIixcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjKXtyZXR1cm4geWUoYix4ZSxiLmRlZmVyLGEuYW5ndWxhci5jYWxsYmFja3MsY1swXSl9XX1mdW5jdGlvbiB5ZShiLGEsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiLGMpe3ZhciBmPWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxnPW51bGw7Zi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7Zi5zcmM9YTtmLmFzeW5jPSEwO2c9ZnVuY3Rpb24oYSl7YmIoZixcImxvYWRcIixnKTtiYihmLFwiZXJyb3JcIixnKTtlLmJvZHkucmVtb3ZlQ2hpbGQoZik7Zj1udWxsO3ZhciBoPS0xLHM9XCJ1bmtub3duXCI7YSYmKFwibG9hZFwiIT09XG5hLnR5cGV8fGRbYl0uY2FsbGVkfHwoYT17dHlwZTpcImVycm9yXCJ9KSxzPWEudHlwZSxoPVwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwKTtjJiZjKGgscyl9O3NiKGYsXCJsb2FkXCIsZyk7c2IoZixcImVycm9yXCIsZyk7OD49UiYmKGYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7RyhmLnJlYWR5U3RhdGUpJiYvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGYucmVhZHlTdGF0ZSkmJihmLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGcoe3R5cGU6XCJsb2FkXCJ9KSl9KTtlLmJvZHkuYXBwZW5kQ2hpbGQoZik7cmV0dXJuIGd9dmFyIGc9LTE7cmV0dXJuIGZ1bmN0aW9uKGUsayxtLGwsbixxLHAscyl7ZnVuY3Rpb24gSigpe3Q9ZztLJiZLKCk7QiYmQi5hYm9ydCgpfWZ1bmN0aW9uIHcoYSxkLGUsZixnKXtPJiZjLmNhbmNlbChPKTtLPUI9bnVsbDswPT09ZCYmKGQ9ZT8yMDA6XCJmaWxlXCI9PXhhKGspLnByb3RvY29sPzQwNDowKTthKDEyMjM9PT1kPzIwNDpkLGUsZixnfHxcIlwiKTtiLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Qodil9XG52YXIgdDtiLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQoKTtrPWt8fGIudXJsKCk7aWYoXCJqc29ucFwiPT14KGUpKXt2YXIgeT1cIl9cIisoZC5jb3VudGVyKyspLnRvU3RyaW5nKDM2KTtkW3ldPWZ1bmN0aW9uKGEpe2RbeV0uZGF0YT1hO2RbeV0uY2FsbGVkPSEwfTt2YXIgSz1mKGsucmVwbGFjZShcIkpTT05fQ0FMTEJBQ0tcIixcImFuZ3VsYXIuY2FsbGJhY2tzLlwiK3kpLHksZnVuY3Rpb24oYSxiKXt3KGwsYSxkW3ldLmRhdGEsXCJcIixiKTtkW3ldPXZ9KX1lbHNle3ZhciBCPWEoZSk7Qi5vcGVuKGUsaywhMCk7cihuLGZ1bmN0aW9uKGEsYil7RChhKSYmQi5zZXRSZXF1ZXN0SGVhZGVyKGIsYSl9KTtCLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKEImJjQ9PUIucmVhZHlTdGF0ZSl7dmFyIGE9bnVsbCxiPW51bGwsYz1cIlwiO3QhPT1nJiYoYT1CLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLGI9XCJyZXNwb25zZVwiaW4gQj9CLnJlc3BvbnNlOkIucmVzcG9uc2VUZXh0KTt0PT09ZyYmXG4xMD5SfHwoYz1CLnN0YXR1c1RleHQpO3cobCx0fHxCLnN0YXR1cyxiLGEsYyl9fTtwJiYoQi53aXRoQ3JlZGVudGlhbHM9ITApO2lmKHMpdHJ5e0IucmVzcG9uc2VUeXBlPXN9Y2F0Y2goYmEpe2lmKFwianNvblwiIT09cyl0aHJvdyBiYTt9Qi5zZW5kKG18fG51bGwpfWlmKDA8cSl2YXIgTz1jKEoscSk7ZWxzZSBxJiZOKHEudGhlbikmJnEudGhlbihKKX19ZnVuY3Rpb24gUmQoKXt2YXIgYj1cInt7XCIsYT1cIn19XCI7dGhpcy5zdGFydFN5bWJvbD1mdW5jdGlvbihhKXtyZXR1cm4gYT8oYj1hLHRoaXMpOmJ9O3RoaXMuZW5kU3ltYm9sPWZ1bmN0aW9uKGIpe3JldHVybiBiPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRzY2VcIixmdW5jdGlvbihjLGQsZSl7ZnVuY3Rpb24gZihmLG0sbCl7Zm9yKHZhciBuLHEscD0wLHM9W10sSj1mLmxlbmd0aCx3PSExLHQ9W107cDxKOyktMSE9KG49Zi5pbmRleE9mKGIscCkpJiYtMSE9KHE9Zi5pbmRleE9mKGEsXG5uK2cpKT8ocCE9biYmcy5wdXNoKGYuc3Vic3RyaW5nKHAsbikpLHMucHVzaChwPWModz1mLnN1YnN0cmluZyhuK2cscSkpKSxwLmV4cD13LHA9cStoLHc9ITApOihwIT1KJiZzLnB1c2goZi5zdWJzdHJpbmcocCkpLHA9Sik7KEo9cy5sZW5ndGgpfHwocy5wdXNoKFwiXCIpLEo9MSk7aWYobCYmMTxzLmxlbmd0aCl0aHJvdyB3YyhcIm5vY29uY2F0XCIsZik7aWYoIW18fHcpcmV0dXJuIHQubGVuZ3RoPUoscD1mdW5jdGlvbihhKXt0cnl7Zm9yKHZhciBiPTAsYz1KLGc7YjxjO2IrKyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YoZz1zW2JdKSlpZihnPWcoYSksZz1sP2UuZ2V0VHJ1c3RlZChsLGcpOmUudmFsdWVPZihnKSxudWxsPT1nKWc9XCJcIjtlbHNlIHN3aXRjaCh0eXBlb2YgZyl7Y2FzZSBcInN0cmluZ1wiOmJyZWFrO2Nhc2UgXCJudW1iZXJcIjpnPVwiXCIrZzticmVhaztkZWZhdWx0Omc9b2EoZyl9dFtiXT1nfXJldHVybiB0LmpvaW4oXCJcIil9Y2F0Y2goaCl7YT13YyhcImludGVyclwiLGYsaC50b1N0cmluZygpKSxcbmQoYSl9fSxwLmV4cD1mLHAucGFydHM9cyxwfXZhciBnPWIubGVuZ3RoLGg9YS5sZW5ndGg7Zi5zdGFydFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBifTtmLmVuZFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBhfTtyZXR1cm4gZn1dfWZ1bmN0aW9uIFNkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiR3aW5kb3dcIixcIiRxXCIsZnVuY3Rpb24oYixhLGMpe2Z1bmN0aW9uIGQoZCxnLGgsayl7dmFyIG09YS5zZXRJbnRlcnZhbCxsPWEuY2xlYXJJbnRlcnZhbCxuPWMuZGVmZXIoKSxxPW4ucHJvbWlzZSxwPTAscz1EKGspJiYhaztoPUQoaCk/aDowO3EudGhlbihudWxsLG51bGwsZCk7cS4kJGludGVydmFsSWQ9bShmdW5jdGlvbigpe24ubm90aWZ5KHArKyk7MDxoJiZwPj1oJiYobi5yZXNvbHZlKHApLGwocS4kJGludGVydmFsSWQpLGRlbGV0ZSBlW3EuJCRpbnRlcnZhbElkXSk7c3x8Yi4kYXBwbHkoKX0sZyk7ZVtxLiQkaW50ZXJ2YWxJZF09bjtyZXR1cm4gcX12YXIgZT17fTtkLmNhbmNlbD1cbmZ1bmN0aW9uKGIpe3JldHVybiBiJiZiLiQkaW50ZXJ2YWxJZCBpbiBlPyhlW2IuJCRpbnRlcnZhbElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxhLmNsZWFySW50ZXJ2YWwoYi4kJGludGVydmFsSWQpLGRlbGV0ZSBlW2IuJCRpbnRlcnZhbElkXSwhMCk6ITF9O3JldHVybiBkfV19ZnVuY3Rpb24gYWQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6XCJlbi11c1wiLE5VTUJFUl9GT1JNQVRTOntERUNJTUFMX1NFUDpcIi5cIixHUk9VUF9TRVA6XCIsXCIsUEFUVEVSTlM6W3ttaW5JbnQ6MSxtaW5GcmFjOjAsbWF4RnJhYzozLHBvc1ByZTpcIlwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIi1cIixuZWdTdWY6XCJcIixnU2l6ZTozLGxnU2l6ZTozfSx7bWluSW50OjEsbWluRnJhYzoyLG1heEZyYWM6Mixwb3NQcmU6XCJcXHUwMGE0XCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiKFxcdTAwYTRcIixuZWdTdWY6XCIpXCIsZ1NpemU6MyxsZ1NpemU6M31dLENVUlJFTkNZX1NZTTpcIiRcIn0sREFURVRJTUVfRk9STUFUUzp7TU9OVEg6XCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXCIuc3BsaXQoXCIgXCIpLFxuU0hPUlRNT05USDpcIkphbiBGZWIgTWFyIEFwciBNYXkgSnVuIEp1bCBBdWcgU2VwIE9jdCBOb3YgRGVjXCIuc3BsaXQoXCIgXCIpLERBWTpcIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5XCIuc3BsaXQoXCIgXCIpLFNIT1JUREFZOlwiU3VuIE1vbiBUdWUgV2VkIFRodSBGcmkgU2F0XCIuc3BsaXQoXCIgXCIpLEFNUE1TOltcIkFNXCIsXCJQTVwiXSxtZWRpdW06XCJNTU0gZCwgeSBoOm1tOnNzIGFcIixcInNob3J0XCI6XCJNL2QveXkgaDptbSBhXCIsZnVsbERhdGU6XCJFRUVFLCBNTU1NIGQsIHlcIixsb25nRGF0ZTpcIk1NTU0gZCwgeVwiLG1lZGl1bURhdGU6XCJNTU0gZCwgeVwiLHNob3J0RGF0ZTpcIk0vZC95eVwiLG1lZGl1bVRpbWU6XCJoOm1tOnNzIGFcIixzaG9ydFRpbWU6XCJoOm1tIGFcIn0scGx1cmFsQ2F0OmZ1bmN0aW9uKGIpe3JldHVybiAxPT09Yj9cIm9uZVwiOlwib3RoZXJcIn19fX1mdW5jdGlvbiBRYihiKXtiPWIuc3BsaXQoXCIvXCIpO2Zvcih2YXIgYT1iLmxlbmd0aDthLS07KWJbYV09XG5tYihiW2FdKTtyZXR1cm4gYi5qb2luKFwiL1wiKX1mdW5jdGlvbiB4YyhiLGEsYyl7Yj14YShiLGMpO2EuJCRwcm90b2NvbD1iLnByb3RvY29sO2EuJCRob3N0PWIuaG9zdG5hbWU7YS4kJHBvcnQ9VShiLnBvcnQpfHx6ZVtiLnByb3RvY29sXXx8bnVsbH1mdW5jdGlvbiB5YyhiLGEsYyl7dmFyIGQ9XCIvXCIhPT1iLmNoYXJBdCgwKTtkJiYoYj1cIi9cIitiKTtiPXhhKGIsYyk7YS4kJHBhdGg9ZGVjb2RlVVJJQ29tcG9uZW50KGQmJlwiL1wiPT09Yi5wYXRobmFtZS5jaGFyQXQoMCk/Yi5wYXRobmFtZS5zdWJzdHJpbmcoMSk6Yi5wYXRobmFtZSk7YS4kJHNlYXJjaD1jYyhiLnNlYXJjaCk7YS4kJGhhc2g9ZGVjb2RlVVJJQ29tcG9uZW50KGIuaGFzaCk7YS4kJHBhdGgmJlwiL1wiIT1hLiQkcGF0aC5jaGFyQXQoMCkmJihhLiQkcGF0aD1cIi9cIithLiQkcGF0aCl9ZnVuY3Rpb24gdGEoYixhKXtpZigwPT09YS5pbmRleE9mKGIpKXJldHVybiBhLnN1YnN0cihiLmxlbmd0aCl9ZnVuY3Rpb24gR2EoYil7dmFyIGE9XG5iLmluZGV4T2YoXCIjXCIpO3JldHVybi0xPT1hP2I6Yi5zdWJzdHIoMCxhKX1mdW5jdGlvbiBSYihiKXtyZXR1cm4gYi5zdWJzdHIoMCxHYShiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZnVuY3Rpb24gemMoYixhKXt0aGlzLiQkaHRtbDU9ITA7YT1hfHxcIlwiO3ZhciBjPVJiKGIpO3hjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oYSl7dmFyIGU9dGEoYyxhKTtpZighRyhlKSl0aHJvdyBTYihcImlwdGhwcmZ4XCIsYSxjKTt5YyhlLHRoaXMsYik7dGhpcy4kJHBhdGh8fCh0aGlzLiQkcGF0aD1cIi9cIik7dGhpcy4kJGNvbXBvc2UoKX07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYT1DYih0aGlzLiQkc2VhcmNoKSxiPXRoaXMuJCRoYXNoP1wiI1wiK21iKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9UWIodGhpcy4kJHBhdGgpKyhhP1wiP1wiK2E6XCJcIikrYjt0aGlzLiQkYWJzVXJsPWMrdGhpcy4kJHVybC5zdWJzdHIoMSl9O3RoaXMuJCRwYXJzZUxpbmtVcmw9ZnVuY3Rpb24oZCxcbmUpe3ZhciBmLGc7KGY9dGEoYixkKSkhPT11PyhnPWYsZz0oZj10YShhLGYpKSE9PXU/YysodGEoXCIvXCIsZil8fGYpOmIrZyk6KGY9dGEoYyxkKSkhPT11P2c9YytmOmM9PWQrXCIvXCImJihnPWMpO2cmJnRoaXMuJCRwYXJzZShnKTtyZXR1cm4hIWd9fWZ1bmN0aW9uIFRiKGIsYSl7dmFyIGM9UmIoYik7eGMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihkKXt2YXIgZT10YShiLGQpfHx0YShjLGQpLGU9XCIjXCI9PWUuY2hhckF0KDApP3RhKGEsZSk6dGhpcy4kJGh0bWw1P2U6XCJcIjtpZighRyhlKSl0aHJvdyBTYihcImloc2hwcmZ4XCIsZCxhKTt5YyhlLHRoaXMsYik7ZD10aGlzLiQkcGF0aDt2YXIgZj0vXlxcL1tBLVpdOihcXC8uKikvOzA9PT1lLmluZGV4T2YoYikmJihlPWUucmVwbGFjZShiLFwiXCIpKTtmLmV4ZWMoZSl8fChkPShlPWYuZXhlYyhkKSk/ZVsxXTpkKTt0aGlzLiQkcGF0aD1kO3RoaXMuJCRjb21wb3NlKCl9O3RoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGM9Q2IodGhpcy4kJHNlYXJjaCksXG5lPXRoaXMuJCRoYXNoP1wiI1wiK21iKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9UWIodGhpcy4kJHBhdGgpKyhjP1wiP1wiK2M6XCJcIikrZTt0aGlzLiQkYWJzVXJsPWIrKHRoaXMuJCR1cmw/YSt0aGlzLiQkdXJsOlwiXCIpfTt0aGlzLiQkcGFyc2VMaW5rVXJsPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIEdhKGIpPT1HYShhKT8odGhpcy4kJHBhcnNlKGEpLCEwKTohMX19ZnVuY3Rpb24gQWMoYixhKXt0aGlzLiQkaHRtbDU9ITA7VGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBjPVJiKGIpO3RoaXMuJCRwYXJzZUxpbmtVcmw9ZnVuY3Rpb24oZCxlKXt2YXIgZixnO2I9PUdhKGQpP2Y9ZDooZz10YShjLGQpKT9mPWIrYStnOmM9PT1kK1wiL1wiJiYoZj1jKTtmJiZ0aGlzLiQkcGFyc2UoZik7cmV0dXJuISFmfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPUNiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XCIjXCIrbWIodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1RYih0aGlzLiQkcGF0aCkrXG4oYz9cIj9cIitjOlwiXCIpK2U7dGhpcy4kJGFic1VybD1iK2ErdGhpcy4kJHVybH19ZnVuY3Rpb24gdGIoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYl19fWZ1bmN0aW9uIEJjKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKEYoYykpcmV0dXJuIHRoaXNbYl07dGhpc1tiXT1hKGMpO3RoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIFZkKCl7dmFyIGI9XCJcIixhPSExO3RoaXMuaGFzaFByZWZpeD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaHRtbDVNb2RlPWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLFwiJHJvb3RFbGVtZW50XCIsZnVuY3Rpb24oYyxkLGUsZil7ZnVuY3Rpb24gZyhhKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsaC5hYnNVcmwoKSxhKX12YXIgaCxrPWQuYmFzZUhyZWYoKSxtPWQudXJsKCk7XG5hPyhrPW0uc3Vic3RyaW5nKDAsbS5pbmRleE9mKFwiL1wiLG0uaW5kZXhPZihcIi8vXCIpKzIpKSsoa3x8XCIvXCIpLGU9ZS5oaXN0b3J5P3pjOkFjKTooaz1HYShtKSxlPVRiKTtoPW5ldyBlKGssXCIjXCIrYik7aC4kJHBhcnNlTGlua1VybChtLG0pO3ZhciBsPS9eXFxzKihqYXZhc2NyaXB0fG1haWx0byk6L2k7Zi5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7aWYoIWEuY3RybEtleSYmIWEubWV0YUtleSYmMiE9YS53aGljaCl7Zm9yKHZhciBiPUEoYS50YXJnZXQpO1wiYVwiIT09eChiWzBdLm5vZGVOYW1lKTspaWYoYlswXT09PWZbMF18fCEoYj1iLnBhcmVudCgpKVswXSlyZXR1cm47dmFyIGU9Yi5wcm9wKFwiaHJlZlwiKSxnPWIuYXR0cihcImhyZWZcIil8fGIuYXR0cihcInhsaW5rOmhyZWZcIik7VChlKSYmXCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09ZS50b1N0cmluZygpJiYoZT14YShlLmFuaW1WYWwpLmhyZWYpO2wudGVzdChlKXx8KCFlfHwoYi5hdHRyKFwidGFyZ2V0XCIpfHxhLmlzRGVmYXVsdFByZXZlbnRlZCgpKXx8XG4haC4kJHBhcnNlTGlua1VybChlLGcpKXx8KGEucHJldmVudERlZmF1bHQoKSxoLmFic1VybCgpIT1kLnVybCgpJiYoYy4kYXBwbHkoKSxXLmFuZ3VsYXJbXCJmZi02ODQyMDgtcHJldmVudERlZmF1bHRcIl09ITApKX19KTtoLmFic1VybCgpIT1tJiZkLnVybChoLmFic1VybCgpLCEwKTtkLm9uVXJsQ2hhbmdlKGZ1bmN0aW9uKGEpe2guYWJzVXJsKCkhPWEmJihjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXt2YXIgYj1oLmFic1VybCgpO2guJCRwYXJzZShhKTtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLGEsYikuZGVmYXVsdFByZXZlbnRlZD8oaC4kJHBhcnNlKGIpLGQudXJsKGIpKTpnKGIpfSksYy4kJHBoYXNlfHxjLiRkaWdlc3QoKSl9KTt2YXIgbj0wO2MuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9ZC51cmwoKSxiPWguJCRyZXBsYWNlO24mJmE9PWguYWJzVXJsKCl8fChuKyssYy4kZXZhbEFzeW5jKGZ1bmN0aW9uKCl7Yy4kYnJvYWRjYXN0KFwiJGxvY2F0aW9uQ2hhbmdlU3RhcnRcIixcbmguYWJzVXJsKCksYSkuZGVmYXVsdFByZXZlbnRlZD9oLiQkcGFyc2UoYSk6KGQudXJsKGguYWJzVXJsKCksYiksZyhhKSl9KSk7aC4kJHJlcGxhY2U9ITE7cmV0dXJuIG59KTtyZXR1cm4gaH1dfWZ1bmN0aW9uIFdkKCl7dmFyIGI9ITAsYT10aGlzO3RoaXMuZGVidWdFbmFibGVkPWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEpe2EgaW5zdGFuY2VvZiBFcnJvciYmKGEuc3RhY2s/YT1hLm1lc3NhZ2UmJi0xPT09YS5zdGFjay5pbmRleE9mKGEubWVzc2FnZSk/XCJFcnJvcjogXCIrYS5tZXNzYWdlK1wiXFxuXCIrYS5zdGFjazphLnN0YWNrOmEuc291cmNlVVJMJiYoYT1hLm1lc3NhZ2UrXCJcXG5cIithLnNvdXJjZVVSTCtcIjpcIithLmxpbmUpKTtyZXR1cm4gYX1mdW5jdGlvbiBlKGEpe3ZhciBiPWMuY29uc29sZXx8e30sZT1iW2FdfHxiLmxvZ3x8djthPSExO3RyeXthPSEhZS5hcHBseX1jYXRjaChrKXt9cmV0dXJuIGE/XG5mdW5jdGlvbigpe3ZhciBhPVtdO3IoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2EucHVzaChkKGIpKX0pO3JldHVybiBlLmFwcGx5KGIsYSl9OmZ1bmN0aW9uKGEsYil7ZShhLG51bGw9PWI/XCJcIjpiKX19cmV0dXJue2xvZzplKFwibG9nXCIpLGluZm86ZShcImluZm9cIiksd2FybjplKFwid2FyblwiKSxlcnJvcjplKFwiZXJyb3JcIiksZGVidWc6ZnVuY3Rpb24oKXt2YXIgYz1lKFwiZGVidWdcIik7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmYy5hcHBseShhLGFyZ3VtZW50cyl9fSgpfX1dfWZ1bmN0aW9uIGthKGIsYSl7aWYoXCJfX2RlZmluZUdldHRlcl9fXCI9PT1ifHxcIl9fZGVmaW5lU2V0dGVyX19cIj09PWJ8fFwiX19sb29rdXBHZXR0ZXJfX1wiPT09Ynx8XCJfX2xvb2t1cFNldHRlcl9fXCI9PT1ifHxcIl9fcHJvdG9fX1wiPT09Yil0aHJvdyBsYShcImlzZWNmbGRcIixhKTtyZXR1cm4gYn1mdW5jdGlvbiBtYShiLGEpe2lmKGIpe2lmKGIuY29uc3RydWN0b3I9PT1iKXRocm93IGxhKFwiaXNlY2ZuXCIsYSk7aWYoYi5kb2N1bWVudCYmXG5iLmxvY2F0aW9uJiZiLmFsZXJ0JiZiLnNldEludGVydmFsKXRocm93IGxhKFwiaXNlY3dpbmRvd1wiLGEpO2lmKGIuY2hpbGRyZW4mJihiLm5vZGVOYW1lfHxiLnByb3AmJmIuYXR0ciYmYi5maW5kKSl0aHJvdyBsYShcImlzZWNkb21cIixhKTtpZihiPT09T2JqZWN0KXRocm93IGxhKFwiaXNlY29ialwiLGEpO31yZXR1cm4gYn1mdW5jdGlvbiB1YihiLGEsYyxkLGUpe21hKGIsZCk7ZT1lfHx7fTthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZixnPTA7MTxhLmxlbmd0aDtnKyspe2Y9a2EoYS5zaGlmdCgpLGQpO3ZhciBoPW1hKGJbZl0sZCk7aHx8KGg9e30sYltmXT1oKTtiPWg7Yi50aGVuJiZlLnVud3JhcFByb21pc2VzJiYoeWEoZCksXCIkJHZcImluIGJ8fGZ1bmN0aW9uKGEpe2EudGhlbihmdW5jdGlvbihiKXthLiQkdj1ifSl9KGIpLGIuJCR2PT09dSYmKGIuJCR2PXt9KSxiPWIuJCR2KX1mPWthKGEuc2hpZnQoKSxkKTttYShiW2ZdLGQpO3JldHVybiBiW2ZdPWN9ZnVuY3Rpb24gUWEoYil7cmV0dXJuXCJjb25zdHJ1Y3RvclwiPT1cbmJ9ZnVuY3Rpb24gQ2MoYixhLGMsZCxlLGYsZyl7a2EoYixmKTtrYShhLGYpO2thKGMsZik7a2EoZCxmKTtrYShlLGYpO3ZhciBoPWZ1bmN0aW9uKGEpe3JldHVybiBtYShhLGYpfSxrPWcuZXhwZW5zaXZlQ2hlY2tzLG09a3x8UWEoYik/aDpnYSxsPWt8fFFhKGEpP2g6Z2Esbj1rfHxRYShjKT9oOmdhLHE9a3x8UWEoZCk/aDpnYSxwPWt8fFFhKGUpP2g6Z2E7cmV0dXJuIGcudW53cmFwUHJvbWlzZXM/ZnVuY3Rpb24oZyxoKXt2YXIgaz1oJiZoLmhhc093blByb3BlcnR5KGIpP2g6Zyx0O2lmKG51bGw9PWspcmV0dXJuIGs7KGs9bShrW2JdKSkmJmsudGhlbiYmKHlhKGYpLFwiJCR2XCJpbiBrfHwodD1rLHQuJCR2PXUsdC50aGVuKGZ1bmN0aW9uKGEpe3QuJCR2PW0oYSl9KSksaz1tKGsuJCR2KSk7aWYoIWEpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gdTsoaz1sKGtbYV0pKSYmay50aGVuJiYoeWEoZiksXCIkJHZcImluIGt8fCh0PWssdC4kJHY9dSx0LnRoZW4oZnVuY3Rpb24oYSl7dC4kJHY9XG5sKGEpfSkpLGs9bChrLiQkdikpO2lmKCFjKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHU7KGs9bihrW2NdKSkmJmsudGhlbiYmKHlhKGYpLFwiJCR2XCJpbiBrfHwodD1rLHQuJCR2PXUsdC50aGVuKGZ1bmN0aW9uKGEpe3QuJCR2PW4oYSl9KSksaz1uKGsuJCR2KSk7aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gdTsoaz1xKGtbZF0pKSYmay50aGVuJiYoeWEoZiksXCIkJHZcImluIGt8fCh0PWssdC4kJHY9dSx0LnRoZW4oZnVuY3Rpb24oYSl7dC4kJHY9cShhKX0pKSxrPXEoay4kJHYpKTtpZighZSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiB1OyhrPXAoa1tlXSkpJiZrLnRoZW4mJih5YShmKSxcIiQkdlwiaW4ga3x8KHQ9ayx0LiQkdj11LHQudGhlbihmdW5jdGlvbihhKXt0LiQkdj1wKGEpfSkpLGs9cChrLiQkdikpO3JldHVybiBrfTpmdW5jdGlvbihmLGcpe3ZhciBoPWcmJmcuaGFzT3duUHJvcGVydHkoYik/ZzpmO2lmKG51bGw9PWgpcmV0dXJuIGg7aD1tKGhbYl0pO1xuaWYoIWEpcmV0dXJuIGg7aWYobnVsbD09aClyZXR1cm4gdTtoPWwoaFthXSk7aWYoIWMpcmV0dXJuIGg7aWYobnVsbD09aClyZXR1cm4gdTtoPW4oaFtjXSk7aWYoIWQpcmV0dXJuIGg7aWYobnVsbD09aClyZXR1cm4gdTtoPXEoaFtkXSk7cmV0dXJuIGU/bnVsbD09aD91Omg9cChoW2VdKTpofX1mdW5jdGlvbiBBZShiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3JldHVybiBiKGMsZCx5YSxtYSxhKX19ZnVuY3Rpb24gRGMoYixhLGMpe3ZhciBkPWEuZXhwZW5zaXZlQ2hlY2tzLGU9ZD9CZTpDZTtpZihlLmhhc093blByb3BlcnR5KGIpKXJldHVybiBlW2JdO3ZhciBmPWIuc3BsaXQoXCIuXCIpLGc9Zi5sZW5ndGgsaDtpZihhLmNzcCloPTY+Zz9DYyhmWzBdLGZbMV0sZlsyXSxmWzNdLGZbNF0sYyxhKTpmdW5jdGlvbihiLGQpe3ZhciBlPTAsaDtkbyBoPUNjKGZbZSsrXSxmW2UrK10sZltlKytdLGZbZSsrXSxmW2UrK10sYyxhKShiLGQpLGQ9dSxiPWg7d2hpbGUoZTxnKTtyZXR1cm4gaH07XG5lbHNle3ZhciBrPVwidmFyIHA7XFxuXCI7ZCYmKGsrPVwicyA9IGVzbyhzLCBmZSk7XFxubCA9IGVzbyhsLCBmZSk7XFxuXCIpO3ZhciBtPWQ7cihmLGZ1bmN0aW9uKGIsZSl7a2EoYixjKTt2YXIgZj0oZT9cInNcIjonKChsJiZsLmhhc093blByb3BlcnR5KFwiJytiKydcIikpP2w6cyknKSsnW1wiJytiKydcIl0nLGc9ZHx8UWEoYik7ZyYmKGY9XCJlc28oXCIrZitcIiwgZmUpXCIsbT0hMCk7ays9XCJpZihzID09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XFxucz1cIitmK1wiO1xcblwiO2EudW53cmFwUHJvbWlzZXMmJihrKz0naWYgKHMgJiYgcy50aGVuKSB7XFxuIHB3KFwiJytjLnJlcGxhY2UoLyhbXCJcXHJcXG5dKS9nLFwiXFxcXCQxXCIpKydcIik7XFxuIGlmICghKFwiJCR2XCIgaW4gcykpIHtcXG4gcD1zO1xcbiBwLiQkdiA9IHVuZGVmaW5lZDtcXG4gcC50aGVuKGZ1bmN0aW9uKHYpIHtwLiQkdj0nKyhnP1wiZXNvKHYpXCI6XCJ2XCIpK1wiO30pO1xcbn1cXG4gcz1cIisoZz9cImVzbyhzLiQkdilcIjpcInMuJCR2XCIpK1wiXFxufVxcblwiKX0pO2srPVwicmV0dXJuIHM7XCI7XG5oPW5ldyBGdW5jdGlvbihcInNcIixcImxcIixcInB3XCIsXCJlc29cIixcImZlXCIsayk7aC50b1N0cmluZz1hYShrKTtpZihtfHxhLnVud3JhcFByb21pc2VzKWg9QWUoaCxjKX1cImhhc093blByb3BlcnR5XCIhPT1iJiYoZVtiXT1oKTtyZXR1cm4gaH1mdW5jdGlvbiBYZCgpe3ZhciBiPXt9LGE9e30sYz17Y3NwOiExLHVud3JhcFByb21pc2VzOiExLGxvZ1Byb21pc2VXYXJuaW5nczohMCxleHBlbnNpdmVDaGVja3M6ITF9O3RoaXMudW53cmFwUHJvbWlzZXM9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGMudW53cmFwUHJvbWlzZXM9ISFhLHRoaXMpOmMudW53cmFwUHJvbWlzZXN9O3RoaXMubG9nUHJvbWlzZVdhcm5pbmdzPWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhjLmxvZ1Byb21pc2VXYXJuaW5ncz1hLHRoaXMpOmMubG9nUHJvbWlzZVdhcm5pbmdzfTt0aGlzLiRnZXQ9W1wiJGZpbHRlclwiLFwiJHNuaWZmZXJcIixcIiRsb2dcIixmdW5jdGlvbihkLGUsZil7Yy5jc3A9ZS5jc3A7dmFyIGc9e2NzcDpjLmNzcCxcbnVud3JhcFByb21pc2VzOmMudW53cmFwUHJvbWlzZXMsbG9nUHJvbWlzZVdhcm5pbmdzOmMubG9nUHJvbWlzZVdhcm5pbmdzLGV4cGVuc2l2ZUNoZWNrczohMH07eWE9ZnVuY3Rpb24oYSl7Yy5sb2dQcm9taXNlV2FybmluZ3MmJiFFYy5oYXNPd25Qcm9wZXJ0eShhKSYmKEVjW2FdPSEwLGYud2FybihcIlskcGFyc2VdIFByb21pc2UgZm91bmQgaW4gdGhlIGV4cHJlc3Npb24gYFwiK2ErXCJgLiBBdXRvbWF0aWMgdW53cmFwcGluZyBvZiBwcm9taXNlcyBpbiBBbmd1bGFyIGV4cHJlc3Npb25zIGlzIGRlcHJlY2F0ZWQuXCIpKX07cmV0dXJuIGZ1bmN0aW9uKGUsZil7dmFyIG07c3dpdGNoKHR5cGVvZiBlKXtjYXNlIFwic3RyaW5nXCI6dmFyIGw9Zj9hOmI7aWYobC5oYXNPd25Qcm9wZXJ0eShlKSlyZXR1cm4gbFtlXTttPWY/ZzpjO3ZhciBuPW5ldyBVYihtKTttPShuZXcgZ2IobixkLG0pKS5wYXJzZShlKTtcImhhc093blByb3BlcnR5XCIhPT1lJiYobFtlXT1tKTtyZXR1cm4gbTtjYXNlIFwiZnVuY3Rpb25cIjpyZXR1cm4gZTtcbmRlZmF1bHQ6cmV0dXJuIHZ9fX1dfWZ1bmN0aW9uIFpkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixhKXtyZXR1cm4gRGUoZnVuY3Rpb24oYSl7Yi4kZXZhbEFzeW5jKGEpfSxhKX1dfWZ1bmN0aW9uIERlKGIsYSl7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYX1mdW5jdGlvbiBkKGEpe3JldHVybiBnKGEpfXZhciBlPWZ1bmN0aW9uKCl7dmFyIGc9W10sbSxsO3JldHVybiBsPXtyZXNvbHZlOmZ1bmN0aW9uKGEpe2lmKGcpe3ZhciBjPWc7Zz11O209ZihhKTtjLmxlbmd0aCYmYihmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTAsZD1jLmxlbmd0aDtiPGQ7YisrKWE9Y1tiXSxtLnRoZW4oYVswXSxhWzFdLGFbMl0pfSl9fSxyZWplY3Q6ZnVuY3Rpb24oYSl7bC5yZXNvbHZlKGgoYSkpfSxub3RpZnk6ZnVuY3Rpb24oYSl7aWYoZyl7dmFyIGM9ZztnLmxlbmd0aCYmYihmdW5jdGlvbigpe2Zvcih2YXIgYixkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWI9XG5jW2RdLGJbMl0oYSl9KX19LHByb21pc2U6e3RoZW46ZnVuY3Rpb24oYixmLGgpe3ZhciBsPWUoKSxKPWZ1bmN0aW9uKGQpe3RyeXtsLnJlc29sdmUoKE4oYik/YjpjKShkKSl9Y2F0Y2goZSl7bC5yZWplY3QoZSksYShlKX19LHc9ZnVuY3Rpb24oYil7dHJ5e2wucmVzb2x2ZSgoTihmKT9mOmQpKGIpKX1jYXRjaChjKXtsLnJlamVjdChjKSxhKGMpfX0sdD1mdW5jdGlvbihiKXt0cnl7bC5ub3RpZnkoKE4oaCk/aDpjKShiKSl9Y2F0Y2goZCl7YShkKX19O2c/Zy5wdXNoKFtKLHcsdF0pOm0udGhlbihKLHcsdCk7cmV0dXJuIGwucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRoZW4obnVsbCxhKX0sXCJmaW5hbGx5XCI6ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGMpe3ZhciBkPWUoKTtjP2QucmVzb2x2ZShhKTpkLnJlamVjdChhKTtyZXR1cm4gZC5wcm9taXNlfWZ1bmN0aW9uIGQoZSxmKXt2YXIgZz1udWxsO3RyeXtnPShhfHxjKSgpfWNhdGNoKGgpe3JldHVybiBiKGgsXG4hMSl9cmV0dXJuIGcmJk4oZy50aGVuKT9nLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihlLGYpfSxmdW5jdGlvbihhKXtyZXR1cm4gYihhLCExKX0pOmIoZSxmKX1yZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITApfSxmdW5jdGlvbihhKXtyZXR1cm4gZChhLCExKX0pfX19fSxmPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZOKGEudGhlbik/YTp7dGhlbjpmdW5jdGlvbihjKXt2YXIgZD1lKCk7YihmdW5jdGlvbigpe2QucmVzb2x2ZShjKGEpKX0pO3JldHVybiBkLnByb21pc2V9fX0sZz1mdW5jdGlvbihhKXt2YXIgYj1lKCk7Yi5yZWplY3QoYSk7cmV0dXJuIGIucHJvbWlzZX0saD1mdW5jdGlvbihjKXtyZXR1cm57dGhlbjpmdW5jdGlvbihmLGcpe3ZhciBoPWUoKTtiKGZ1bmN0aW9uKCl7dHJ5e2gucmVzb2x2ZSgoTihnKT9nOmQpKGMpKX1jYXRjaChiKXtoLnJlamVjdChiKSxhKGIpfX0pO3JldHVybiBoLnByb21pc2V9fX07cmV0dXJue2RlZmVyOmUscmVqZWN0OmcsXG53aGVuOmZ1bmN0aW9uKGgsbSxsLG4pe3ZhciBxPWUoKSxwLHM9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihOKG0pP206YykoYil9Y2F0Y2goZCl7cmV0dXJuIGEoZCksZyhkKX19LEo9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihOKGwpP2w6ZCkoYil9Y2F0Y2goYyl7cmV0dXJuIGEoYyksZyhjKX19LHc9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihOKG4pP246YykoYil9Y2F0Y2goZCl7YShkKX19O2IoZnVuY3Rpb24oKXtmKGgpLnRoZW4oZnVuY3Rpb24oYSl7cHx8KHA9ITAscS5yZXNvbHZlKGYoYSkudGhlbihzLEosdykpKX0sZnVuY3Rpb24oYSl7cHx8KHA9ITAscS5yZXNvbHZlKEooYSkpKX0sZnVuY3Rpb24oYSl7cHx8cS5ub3RpZnkodyhhKSl9KX0pO3JldHVybiBxLnByb21pc2V9LGFsbDpmdW5jdGlvbihhKXt2YXIgYj1lKCksYz0wLGQ9TChhKT9bXTp7fTtyKGEsZnVuY3Rpb24oYSxlKXtjKys7ZihhKS50aGVuKGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fChkW2VdPWEsXG4tLWN8fGIucmVzb2x2ZShkKSl9LGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fGIucmVqZWN0KGEpfSl9KTswPT09YyYmYi5yZXNvbHZlKGQpO3JldHVybiBiLnByb21pc2V9fX1mdW5jdGlvbiBmZSgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGIsYSl7dmFyIGM9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLm1velJlcXVlc3RBbmltYXRpb25GcmFtZSxkPWIuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLGU9ISFjLGY9ZT9mdW5jdGlvbihhKXt2YXIgYj1jKGEpO3JldHVybiBmdW5jdGlvbigpe2QoYil9fTpmdW5jdGlvbihiKXt2YXIgYz1hKGIsMTYuNjYsITEpO3JldHVybiBmdW5jdGlvbigpe2EuY2FuY2VsKGMpfX07Zi5zdXBwb3J0ZWQ9XG5lO3JldHVybiBmfV19ZnVuY3Rpb24gWWQoKXt2YXIgYj0xMCxhPXooXCIkcm9vdFNjb3BlXCIpLGM9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1hKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRwYXJzZVwiLFwiJGJyb3dzZXJcIixmdW5jdGlvbihkLGUsZixnKXtmdW5jdGlvbiBoKCl7dGhpcy4kaWQ9aWIoKTt0aGlzLiQkcGhhc2U9dGhpcy4kcGFyZW50PXRoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXNbXCJ0aGlzXCJdPXRoaXMuJHJvb3Q9dGhpczt0aGlzLiQkZGVzdHJveWVkPSExO3RoaXMuJCRhc3luY1F1ZXVlPVtdO3RoaXMuJCRwb3N0RGlnZXN0UXVldWU9W107dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiQkbGlzdGVuZXJDb3VudD17fTt0aGlzLiQkaXNvbGF0ZUJpbmRpbmdzPVxue319ZnVuY3Rpb24gayhiKXtpZihxLiQkcGhhc2UpdGhyb3cgYShcImlucHJvZ1wiLHEuJCRwaGFzZSk7cS4kJHBoYXNlPWJ9ZnVuY3Rpb24gbShhLGIpe3ZhciBjPWYoYSk7WWEoYyxiKTtyZXR1cm4gY31mdW5jdGlvbiBsKGEsYixjKXtkbyBhLiQkbGlzdGVuZXJDb3VudFtjXS09YiwwPT09YS4kJGxpc3RlbmVyQ291bnRbY10mJmRlbGV0ZSBhLiQkbGlzdGVuZXJDb3VudFtjXTt3aGlsZShhPWEuJHBhcmVudCl9ZnVuY3Rpb24gbigpe31oLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aCwkbmV3OmZ1bmN0aW9uKGEpe2E/KGE9bmV3IGgsYS4kcm9vdD10aGlzLiRyb290LGEuJCRhc3luY1F1ZXVlPXRoaXMuJCRhc3luY1F1ZXVlLGEuJCRwb3N0RGlnZXN0UXVldWU9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZSk6KHRoaXMuJCRjaGlsZFNjb3BlQ2xhc3N8fCh0aGlzLiQkY2hpbGRTY29wZUNsYXNzPWZ1bmN0aW9uKCl7dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkY2hpbGRIZWFkPVxudGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXMuJCRsaXN0ZW5lcnM9e307dGhpcy4kJGxpc3RlbmVyQ291bnQ9e307dGhpcy4kaWQ9aWIoKTt0aGlzLiQkY2hpbGRTY29wZUNsYXNzPW51bGx9LHRoaXMuJCRjaGlsZFNjb3BlQ2xhc3MucHJvdG90eXBlPXRoaXMpLGE9bmV3IHRoaXMuJCRjaGlsZFNjb3BlQ2xhc3MpO2FbXCJ0aGlzXCJdPWE7YS4kcGFyZW50PXRoaXM7YS4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZFRhaWw7dGhpcy4kJGNoaWxkSGVhZD90aGlzLiQkY2hpbGRUYWlsPXRoaXMuJCRjaGlsZFRhaWwuJCRuZXh0U2libGluZz1hOnRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1hO3JldHVybiBhfSwkd2F0Y2g6ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPW0oYSxcIndhdGNoXCIpLGY9dGhpcy4kJHdhdGNoZXJzLGc9e2ZuOmIsbGFzdDpuLGdldDplLGV4cDphLGVxOiEhZH07Yz1udWxsO2lmKCFOKGIpKXt2YXIgaD1tKGJ8fHYsXCJsaXN0ZW5lclwiKTtnLmZuPWZ1bmN0aW9uKGEsXG5iLGMpe2goYyl9fWlmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZlLmNvbnN0YW50KXt2YXIgaz1nLmZuO2cuZm49ZnVuY3Rpb24oYSxiLGMpe2suY2FsbCh0aGlzLGEsYixjKTtVYShmLGcpfX1mfHwoZj10aGlzLiQkd2F0Y2hlcnM9W10pO2YudW5zaGlmdChnKTtyZXR1cm4gZnVuY3Rpb24oKXtVYShmLGcpO2M9bnVsbH19LCR3YXRjaENvbGxlY3Rpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQsZSxnLGg9MTxiLmxlbmd0aCxrPTAsbD1mKGEpLG09W10sbj17fSxxPSEwLHI9MDtyZXR1cm4gdGhpcy4kd2F0Y2goZnVuY3Rpb24oKXtkPWwoYyk7dmFyIGEsYixmO2lmKFQoZCkpaWYoU2EoZCkpZm9yKGUhPT1tJiYoZT1tLHI9ZS5sZW5ndGg9MCxrKyspLGE9ZC5sZW5ndGgsciE9PWEmJihrKyssZS5sZW5ndGg9cj1hKSxiPTA7YjxhO2IrKylmPWVbYl0hPT1lW2JdJiZkW2JdIT09ZFtiXSxmfHxlW2JdPT09ZFtiXXx8KGsrKyxlW2JdPWRbYl0pO2Vsc2V7ZSE9PW4mJihlPW49e30scj0wLFxuaysrKTthPTA7Zm9yKGIgaW4gZClkLmhhc093blByb3BlcnR5KGIpJiYoYSsrLGUuaGFzT3duUHJvcGVydHkoYik/KGY9ZVtiXSE9PWVbYl0mJmRbYl0hPT1kW2JdLGZ8fGVbYl09PT1kW2JdfHwoaysrLGVbYl09ZFtiXSkpOihyKyssZVtiXT1kW2JdLGsrKykpO2lmKHI+YSlmb3IoYiBpbiBrKyssZSllLmhhc093blByb3BlcnR5KGIpJiYhZC5oYXNPd25Qcm9wZXJ0eShiKSYmKHItLSxkZWxldGUgZVtiXSl9ZWxzZSBlIT09ZCYmKGU9ZCxrKyspO3JldHVybiBrfSxmdW5jdGlvbigpe3E/KHE9ITEsYihkLGQsYykpOmIoZCxnLGMpO2lmKGgpaWYoVChkKSlpZihTYShkKSl7Zz1BcnJheShkLmxlbmd0aCk7Zm9yKHZhciBhPTA7YTxkLmxlbmd0aDthKyspZ1thXT1kW2FdfWVsc2UgZm9yKGEgaW4gZz17fSxkKWxiLmNhbGwoZCxhKSYmKGdbYV09ZFthXSk7ZWxzZSBnPWR9KX0sJGRpZ2VzdDpmdW5jdGlvbigpe3ZhciBkLGYsaCxsLG09dGhpcy4kJGFzeW5jUXVldWUscj10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLFxuSyxCLHU9YixPLE09W10sQSxQLEM7ayhcIiRkaWdlc3RcIik7Zy4kJGNoZWNrVXJsQ2hhbmdlKCk7Yz1udWxsO2Rve0I9ITE7Zm9yKE89dGhpczttLmxlbmd0aDspe3RyeXtDPW0uc2hpZnQoKSxDLnNjb3BlLiRldmFsKEMuZXhwcmVzc2lvbil9Y2F0Y2goSSl7cS4kJHBoYXNlPW51bGwsZShJKX1jPW51bGx9YTpkb3tpZihsPU8uJCR3YXRjaGVycylmb3IoSz1sLmxlbmd0aDtLLS07KXRyeXtpZihkPWxbS10paWYoKGY9ZC5nZXQoTykpIT09KGg9ZC5sYXN0KSYmIShkLmVxP0NhKGYsaCk6XCJudW1iZXJcIj09PXR5cGVvZiBmJiZcIm51bWJlclwiPT09dHlwZW9mIGgmJmlzTmFOKGYpJiZpc05hTihoKSkpQj0hMCxjPWQsZC5sYXN0PWQuZXE/S2EoZixudWxsKTpmLGQuZm4oZixoPT09bj9mOmgsTyksNT51JiYoQT00LXUsTVtBXXx8KE1bQV09W10pLFA9TihkLmV4cCk/XCJmbjogXCIrKGQuZXhwLm5hbWV8fGQuZXhwLnRvU3RyaW5nKCkpOmQuZXhwLFArPVwiOyBuZXdWYWw6IFwiK29hKGYpK1wiOyBvbGRWYWw6IFwiK1xub2EoaCksTVtBXS5wdXNoKFApKTtlbHNlIGlmKGQ9PT1jKXtCPSExO2JyZWFrIGF9fWNhdGNoKEQpe3EuJCRwaGFzZT1udWxsLGUoRCl9aWYoIShsPU8uJCRjaGlsZEhlYWR8fE8hPT10aGlzJiZPLiQkbmV4dFNpYmxpbmcpKWZvcig7TyE9PXRoaXMmJiEobD1PLiQkbmV4dFNpYmxpbmcpOylPPU8uJHBhcmVudH13aGlsZShPPWwpO2lmKChCfHxtLmxlbmd0aCkmJiF1LS0pdGhyb3cgcS4kJHBoYXNlPW51bGwsYShcImluZmRpZ1wiLGIsb2EoTSkpO313aGlsZShCfHxtLmxlbmd0aCk7Zm9yKHEuJCRwaGFzZT1udWxsO3IubGVuZ3RoOyl0cnl7ci5zaGlmdCgpKCl9Y2F0Y2goeCl7ZSh4KX19LCRkZXN0cm95OmZ1bmN0aW9uKCl7aWYoIXRoaXMuJCRkZXN0cm95ZWQpe3ZhciBhPXRoaXMuJHBhcmVudDt0aGlzLiRicm9hZGNhc3QoXCIkZGVzdHJveVwiKTt0aGlzLiQkZGVzdHJveWVkPSEwO3RoaXMhPT1xJiYocih0aGlzLiQkbGlzdGVuZXJDb3VudCxCYihudWxsLGwsdGhpcykpLGEuJCRjaGlsZEhlYWQ9PVxudGhpcyYmKGEuJCRjaGlsZEhlYWQ9dGhpcy4kJG5leHRTaWJsaW5nKSxhLiQkY2hpbGRUYWlsPT10aGlzJiYoYS4kJGNoaWxkVGFpbD10aGlzLiQkcHJldlNpYmxpbmcpLHRoaXMuJCRwcmV2U2libGluZyYmKHRoaXMuJCRwcmV2U2libGluZy4kJG5leHRTaWJsaW5nPXRoaXMuJCRuZXh0U2libGluZyksdGhpcy4kJG5leHRTaWJsaW5nJiYodGhpcy4kJG5leHRTaWJsaW5nLiQkcHJldlNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiRwYXJlbnQ9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9dGhpcy4kcm9vdD1udWxsLHRoaXMuJCRsaXN0ZW5lcnM9e30sdGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRhc3luY1F1ZXVlPXRoaXMuJCRwb3N0RGlnZXN0UXVldWU9W10sdGhpcy4kZGVzdHJveT10aGlzLiRkaWdlc3Q9dGhpcy4kYXBwbHk9dix0aGlzLiRvbj10aGlzLiR3YXRjaD1mdW5jdGlvbigpe3JldHVybiB2fSl9fSxcbiRldmFsOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGYoYSkodGhpcyxiKX0sJGV2YWxBc3luYzpmdW5jdGlvbihhKXtxLiQkcGhhc2V8fHEuJCRhc3luY1F1ZXVlLmxlbmd0aHx8Zy5kZWZlcihmdW5jdGlvbigpe3EuJCRhc3luY1F1ZXVlLmxlbmd0aCYmcS4kZGlnZXN0KCl9KTt0aGlzLiQkYXN5bmNRdWV1ZS5wdXNoKHtzY29wZTp0aGlzLGV4cHJlc3Npb246YX0pfSwkJHBvc3REaWdlc3Q6ZnVuY3Rpb24oYSl7dGhpcy4kJHBvc3REaWdlc3RRdWV1ZS5wdXNoKGEpfSwkYXBwbHk6ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiBrKFwiJGFwcGx5XCIpLHRoaXMuJGV2YWwoYSl9Y2F0Y2goYil7ZShiKX1maW5hbGx5e3EuJCRwaGFzZT1udWxsO3RyeXtxLiRkaWdlc3QoKX1jYXRjaChjKXt0aHJvdyBlKGMpLGM7fX19LCRvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuJCRsaXN0ZW5lcnNbYV07Y3x8KHRoaXMuJCRsaXN0ZW5lcnNbYV09Yz1bXSk7Yy5wdXNoKGIpO3ZhciBkPXRoaXM7ZG8gZC4kJGxpc3RlbmVyQ291bnRbYV18fFxuKGQuJCRsaXN0ZW5lckNvdW50W2FdPTApLGQuJCRsaXN0ZW5lckNvdW50W2FdKys7d2hpbGUoZD1kLiRwYXJlbnQpO3ZhciBlPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGQ9VGEoYyxiKTstMSE9PWQmJihjW2RdPW51bGwsbChlLDEsYSkpfX0sJGVtaXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkLGY9dGhpcyxnPSExLGg9e25hbWU6YSx0YXJnZXRTY29wZTpmLHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe2c9ITB9LHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7aC5kZWZhdWx0UHJldmVudGVkPSEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxrPVtoXS5jb25jYXQod2EuY2FsbChhcmd1bWVudHMsMSkpLGwsbTtkb3tkPWYuJCRsaXN0ZW5lcnNbYV18fGM7aC5jdXJyZW50U2NvcGU9ZjtsPTA7Zm9yKG09ZC5sZW5ndGg7bDxtO2wrKylpZihkW2xdKXRyeXtkW2xdLmFwcGx5KG51bGwsayl9Y2F0Y2gobil7ZShuKX1lbHNlIGQuc3BsaWNlKGwsMSksbC0tLG0tLTtpZihnKWJyZWFrO1xuZj1mLiRwYXJlbnR9d2hpbGUoZik7cmV0dXJuIGh9LCRicm9hZGNhc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9dGhpcyxkPXRoaXMsZj17bmFtZTphLHRhcmdldFNjb3BlOnRoaXMscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtmLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGc9W2ZdLmNvbmNhdCh3YS5jYWxsKGFyZ3VtZW50cywxKSksaCxrO2M9ZDspe2YuY3VycmVudFNjb3BlPWM7ZD1jLiQkbGlzdGVuZXJzW2FdfHxbXTtoPTA7Zm9yKGs9ZC5sZW5ndGg7aDxrO2grKylpZihkW2hdKXRyeXtkW2hdLmFwcGx5KG51bGwsZyl9Y2F0Y2gobCl7ZShsKX1lbHNlIGQuc3BsaWNlKGgsMSksaC0tLGstLTtpZighKGQ9Yy4kJGxpc3RlbmVyQ291bnRbYV0mJmMuJCRjaGlsZEhlYWR8fGMhPT10aGlzJiZjLiQkbmV4dFNpYmxpbmcpKWZvcig7YyE9PXRoaXMmJiEoZD1jLiQkbmV4dFNpYmxpbmcpOyljPWMuJHBhcmVudH1yZXR1cm4gZn19O3ZhciBxPW5ldyBoO1xucmV0dXJuIHF9XX1mdW5jdGlvbiBiZCgpe3ZhciBiPS9eXFxzKihodHRwcz98ZnRwfG1haWx0b3x0ZWx8ZmlsZSk6LyxhPS9eXFxzKigoaHR0cHM/fGZ0cHxmaWxlKTp8ZGF0YTppbWFnZVxcLykvO3RoaXMuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWQ/YTpiLGY7aWYoIVJ8fDg8PVIpaWYoZj14YShjKS5ocmVmLFwiXCIhPT1mJiYhZi5tYXRjaChlKSlyZXR1cm5cInVuc2FmZTpcIitmO3JldHVybiBjfX19ZnVuY3Rpb24gRWUoYil7aWYoXCJzZWxmXCI9PT1iKXJldHVybiBiO2lmKEcoYikpe2lmKC0xPGIuaW5kZXhPZihcIioqKlwiKSl0aHJvdyB6YShcIml3Y2FyZFwiLGIpO2I9Yi5yZXBsYWNlKC8oWy0oKVxcW1xcXXt9Kz8qLiRcXF58LDojPCFcXFxcXSkvZyxcblwiXFxcXCQxXCIpLnJlcGxhY2UoL1xceDA4L2csXCJcXFxceDA4XCIpLnJlcGxhY2UoXCJcXFxcKlxcXFwqXCIsXCIuKlwiKS5yZXBsYWNlKFwiXFxcXCpcIixcIlteOi8uPyY7XSpcIik7cmV0dXJuIFJlZ0V4cChcIl5cIitiK1wiJFwiKX1pZihrYihiKSlyZXR1cm4gUmVnRXhwKFwiXlwiK2Iuc291cmNlK1wiJFwiKTt0aHJvdyB6YShcImltYXRjaGVyXCIpO31mdW5jdGlvbiBGYyhiKXt2YXIgYT1bXTtEKGIpJiZyKGIsZnVuY3Rpb24oYil7YS5wdXNoKEVlKGIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIGFlKCl7dGhpcy5TQ0VfQ09OVEVYVFM9ZmE7dmFyIGI9W1wic2VsZlwiXSxhPVtdO3RoaXMucmVzb3VyY2VVcmxXaGl0ZWxpc3Q9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9RmMoYSkpO3JldHVybiBifTt0aGlzLnJlc291cmNlVXJsQmxhY2tsaXN0PWZ1bmN0aW9uKGIpe2FyZ3VtZW50cy5sZW5ndGgmJihhPUZjKGIpKTtyZXR1cm4gYX07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9XG5mdW5jdGlvbihhKXt0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGF9fTthJiYoYi5wcm90b3R5cGU9bmV3IGEpO2IucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpfTtiLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCkudG9TdHJpbmcoKX07cmV0dXJuIGJ9dmFyIGU9ZnVuY3Rpb24oYSl7dGhyb3cgemEoXCJ1bnNhZmVcIik7fTtjLmhhcyhcIiRzYW5pdGl6ZVwiKSYmKGU9Yy5nZXQoXCIkc2FuaXRpemVcIikpO3ZhciBmPWQoKSxnPXt9O2dbZmEuSFRNTF09ZChmKTtnW2ZhLkNTU109ZChmKTtnW2ZhLlVSTF09ZChmKTtnW2ZhLkpTXT1kKGYpO2dbZmEuUkVTT1VSQ0VfVVJMXT1kKGdbZmEuVVJMXSk7cmV0dXJue3RydXN0QXM6ZnVuY3Rpb24oYSxiKXt2YXIgYz1nLmhhc093blByb3BlcnR5KGEpP2dbYV06bnVsbDtpZighYyl0aHJvdyB6YShcImljb250ZXh0XCIsXG5hLGIpO2lmKG51bGw9PT1ifHxiPT09dXx8XCJcIj09PWIpcmV0dXJuIGI7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBiKXRocm93IHphKFwiaXR5cGVcIixhKTtyZXR1cm4gbmV3IGMoYil9LGdldFRydXN0ZWQ6ZnVuY3Rpb24oYyxkKXtpZihudWxsPT09ZHx8ZD09PXV8fFwiXCI9PT1kKXJldHVybiBkO3ZhciBmPWcuaGFzT3duUHJvcGVydHkoYyk/Z1tjXTpudWxsO2lmKGYmJmQgaW5zdGFuY2VvZiBmKXJldHVybiBkLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk7aWYoYz09PWZhLlJFU09VUkNFX1VSTCl7dmFyIGY9eGEoZC50b1N0cmluZygpKSxsLG4scT0hMTtsPTA7Zm9yKG49Yi5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWJbbF0/UGIoZik6YltsXS5leGVjKGYuaHJlZikpe3E9ITA7YnJlYWt9aWYocSlmb3IobD0wLG49YS5sZW5ndGg7bDxuO2wrKylpZihcInNlbGZcIj09PWFbbF0/UGIoZik6YVtsXS5leGVjKGYuaHJlZikpe3E9ITE7YnJlYWt9aWYocSlyZXR1cm4gZDt0aHJvdyB6YShcImluc2VjdXJsXCIsXG5kLnRvU3RyaW5nKCkpO31pZihjPT09ZmEuSFRNTClyZXR1cm4gZShkKTt0aHJvdyB6YShcInVuc2FmZVwiKTt9LHZhbHVlT2Y6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBmP2EuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTphfX19XX1mdW5jdGlvbiAkZCgpe3ZhciBiPSEwO3RoaXMuZW5hYmxlZD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj0hIWEpO3JldHVybiBifTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkc25pZmZlclwiLFwiJHNjZURlbGVnYXRlXCIsZnVuY3Rpb24oYSxjLGQpe2lmKGImJmMubXNpZSYmOD5jLm1zaWVEb2N1bWVudE1vZGUpdGhyb3cgemEoXCJpZXF1aXJrc1wiKTt2YXIgZT1oYShmYSk7ZS5pc0VuYWJsZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gYn07ZS50cnVzdEFzPWQudHJ1c3RBcztlLmdldFRydXN0ZWQ9ZC5nZXRUcnVzdGVkO2UudmFsdWVPZj1kLnZhbHVlT2Y7Ynx8KGUudHJ1c3RBcz1lLmdldFRydXN0ZWQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYn0sXG5lLnZhbHVlT2Y9Z2EpO2UucGFyc2VBcz1mdW5jdGlvbihiLGMpe3ZhciBkPWEoYyk7cmV0dXJuIGQubGl0ZXJhbCYmZC5jb25zdGFudD9kOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGUuZ2V0VHJ1c3RlZChiLGQoYSxjKSl9fTt2YXIgZj1lLnBhcnNlQXMsZz1lLmdldFRydXN0ZWQsaD1lLnRydXN0QXM7cihmYSxmdW5jdGlvbihhLGIpe3ZhciBjPXgoYik7ZVthYihcInBhcnNlX2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZihhLGIpfTtlW2FiKFwiZ2V0X3RydXN0ZWRfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBnKGEsYil9O2VbYWIoXCJ0cnVzdF9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGgoYSxiKX19KTtyZXR1cm4gZX1dfWZ1bmN0aW9uIGJlKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSl7dmFyIGM9e30sZD1VKCgvYW5kcm9pZCAoXFxkKykvLmV4ZWMoeCgoYi5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnQpKXx8W10pWzFdKSxlPS9Cb3hlZS9pLnRlc3QoKGIubmF2aWdhdG9yfHxcbnt9KS51c2VyQWdlbnQpLGY9YVswXXx8e30sZz1mLmRvY3VtZW50TW9kZSxoLGs9L14oTW96fHdlYmtpdHxPfG1zKSg/PVtBLVpdKS8sbT1mLmJvZHkmJmYuYm9keS5zdHlsZSxsPSExLG49ITE7aWYobSl7Zm9yKHZhciBxIGluIG0paWYobD1rLmV4ZWMocSkpe2g9bFswXTtoPWguc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKStoLnN1YnN0cigxKTticmVha31ofHwoaD1cIldlYmtpdE9wYWNpdHlcImluIG0mJlwid2Via2l0XCIpO2w9ISEoXCJ0cmFuc2l0aW9uXCJpbiBtfHxoK1wiVHJhbnNpdGlvblwiaW4gbSk7bj0hIShcImFuaW1hdGlvblwiaW4gbXx8aCtcIkFuaW1hdGlvblwiaW4gbSk7IWR8fGwmJm58fChsPUcoZi5ib2R5LnN0eWxlLndlYmtpdFRyYW5zaXRpb24pLG49RyhmLmJvZHkuc3R5bGUud2Via2l0QW5pbWF0aW9uKSl9cmV0dXJue2hpc3Rvcnk6ISghYi5oaXN0b3J5fHwhYi5oaXN0b3J5LnB1c2hTdGF0ZXx8ND5kfHxlKSxoYXNoY2hhbmdlOlwib25oYXNoY2hhbmdlXCJpbiBiJiYoIWd8fDc8XG5nKSxoYXNFdmVudDpmdW5jdGlvbihhKXtpZihcImlucHV0XCI9PWEmJjk9PVIpcmV0dXJuITE7aWYoRihjW2FdKSl7dmFyIGI9Zi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2NbYV09XCJvblwiK2EgaW4gYn1yZXR1cm4gY1thXX0sY3NwOlphKCksdmVuZG9yUHJlZml4OmgsdHJhbnNpdGlvbnM6bCxhbmltYXRpb25zOm4sYW5kcm9pZDpkLG1zaWU6Uixtc2llRG9jdW1lbnRNb2RlOmd9fV19ZnVuY3Rpb24gZGUoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGJyb3dzZXJcIixcIiRxXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsYSxjLGQpe2Z1bmN0aW9uIGUoZSxoLGspe3ZhciBtPWMuZGVmZXIoKSxsPW0ucHJvbWlzZSxuPUQoaykmJiFrO2g9YS5kZWZlcihmdW5jdGlvbigpe3RyeXttLnJlc29sdmUoZSgpKX1jYXRjaChhKXttLnJlamVjdChhKSxkKGEpfWZpbmFsbHl7ZGVsZXRlIGZbbC4kJHRpbWVvdXRJZF19bnx8Yi4kYXBwbHkoKX0saCk7bC4kJHRpbWVvdXRJZD1oO2ZbaF09bTtcbnJldHVybiBsfXZhciBmPXt9O2UuY2FuY2VsPWZ1bmN0aW9uKGIpe3JldHVybiBiJiZiLiQkdGltZW91dElkIGluIGY/KGZbYi4kJHRpbWVvdXRJZF0ucmVqZWN0KFwiY2FuY2VsZWRcIiksZGVsZXRlIGZbYi4kJHRpbWVvdXRJZF0sYS5kZWZlci5jYW5jZWwoYi4kJHRpbWVvdXRJZCkpOiExfTtyZXR1cm4gZX1dfWZ1bmN0aW9uIHhhKGIsYSl7dmFyIGM9YjtSJiYoWS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyksYz1ZLmhyZWYpO1kuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpO3JldHVybntocmVmOlkuaHJlZixwcm90b2NvbDpZLnByb3RvY29sP1kucHJvdG9jb2wucmVwbGFjZSgvOiQvLFwiXCIpOlwiXCIsaG9zdDpZLmhvc3Qsc2VhcmNoOlkuc2VhcmNoP1kuc2VhcmNoLnJlcGxhY2UoL15cXD8vLFwiXCIpOlwiXCIsaGFzaDpZLmhhc2g/WS5oYXNoLnJlcGxhY2UoL14jLyxcIlwiKTpcIlwiLGhvc3RuYW1lOlkuaG9zdG5hbWUscG9ydDpZLnBvcnQscGF0aG5hbWU6XCIvXCI9PT1ZLnBhdGhuYW1lLmNoYXJBdCgwKT9ZLnBhdGhuYW1lOlxuXCIvXCIrWS5wYXRobmFtZX19ZnVuY3Rpb24gUGIoYil7Yj1HKGIpP3hhKGIpOmI7cmV0dXJuIGIucHJvdG9jb2w9PT1HYy5wcm90b2NvbCYmYi5ob3N0PT09R2MuaG9zdH1mdW5jdGlvbiBlZSgpe3RoaXMuJGdldD1hYShXKX1mdW5jdGlvbiBrYyhiKXtmdW5jdGlvbiBhKGQsZSl7aWYoVChkKSl7dmFyIGY9e307cihkLGZ1bmN0aW9uKGIsYyl7ZltjXT1hKGMsYil9KTtyZXR1cm4gZn1yZXR1cm4gYi5mYWN0b3J5KGQrYyxlKX12YXIgYz1cIkZpbHRlclwiO3RoaXMucmVnaXN0ZXI9YTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBhLmdldChiK2MpfX1dO2EoXCJjdXJyZW5jeVwiLEhjKTthKFwiZGF0ZVwiLEljKTthKFwiZmlsdGVyXCIsRmUpO2EoXCJqc29uXCIsR2UpO2EoXCJsaW1pdFRvXCIsSGUpO2EoXCJsb3dlcmNhc2VcIixJZSk7YShcIm51bWJlclwiLEpjKTthKFwib3JkZXJCeVwiLEtjKTthKFwidXBwZXJjYXNlXCIsSmUpfWZ1bmN0aW9uIEZlKCl7cmV0dXJuIGZ1bmN0aW9uKGIsXG5hLGMpe2lmKCFMKGIpKXJldHVybiBiO3ZhciBkPXR5cGVvZiBjLGU9W107ZS5jaGVjaz1mdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGUubGVuZ3RoO2IrKylpZighZVtiXShhKSlyZXR1cm4hMTtyZXR1cm4hMH07XCJmdW5jdGlvblwiIT09ZCYmKGM9XCJib29sZWFuXCI9PT1kJiZjP2Z1bmN0aW9uKGEsYil7cmV0dXJuIFhhLmVxdWFscyhhLGIpfTpmdW5jdGlvbihhLGIpe2lmKGEmJmImJlwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJvYmplY3RcIj09PXR5cGVvZiBiKXtmb3IodmFyIGQgaW4gYSlpZihcIiRcIiE9PWQuY2hhckF0KDApJiZsYi5jYWxsKGEsZCkmJmMoYVtkXSxiW2RdKSlyZXR1cm4hMDtyZXR1cm4hMX1iPShcIlwiK2IpLnRvTG93ZXJDYXNlKCk7cmV0dXJuLTE8KFwiXCIrYSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGIpfSk7dmFyIGY9ZnVuY3Rpb24oYSxiKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiIVwiPT09Yi5jaGFyQXQoMCkpcmV0dXJuIWYoYSxiLnN1YnN0cigxKSk7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6cmV0dXJuIGMoYSxcbmIpO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYyhhLGIpO2RlZmF1bHQ6Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmZihhW2RdLGIpKXJldHVybiEwfXJldHVybiExO2Nhc2UgXCJhcnJheVwiOmZvcihkPTA7ZDxhLmxlbmd0aDtkKyspaWYoZihhW2RdLGIpKXJldHVybiEwO3JldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fTtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjphPXskOmF9O2Nhc2UgXCJvYmplY3RcIjpmb3IodmFyIGcgaW4gYSkoZnVuY3Rpb24oYil7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhW2JdJiZlLnB1c2goZnVuY3Rpb24oYyl7cmV0dXJuIGYoXCIkXCI9PWI/YzpjJiZjW2JdLGFbYl0pfSl9KShnKTticmVhaztjYXNlIFwiZnVuY3Rpb25cIjplLnB1c2goYSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gYn1kPVtdO2ZvcihnPTA7ZzxiLmxlbmd0aDtnKyspe3ZhciBoPVxuYltnXTtlLmNoZWNrKGgpJiZkLnB1c2goaCl9cmV0dXJuIGR9fWZ1bmN0aW9uIEhjKGIpe3ZhciBhPWIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7RihkKSYmKGQ9YS5DVVJSRU5DWV9TWU0pO3JldHVybiBMYyhiLGEuUEFUVEVSTlNbMV0sYS5HUk9VUF9TRVAsYS5ERUNJTUFMX1NFUCwyKS5yZXBsYWNlKC9cXHUwMEE0L2csZCl9fWZ1bmN0aW9uIEpjKGIpe3ZhciBhPWIuTlVNQkVSX0ZPUk1BVFM7cmV0dXJuIGZ1bmN0aW9uKGIsZCl7cmV0dXJuIExjKGIsYS5QQVRURVJOU1swXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLGQpfX1mdW5jdGlvbiBMYyhiLGEsYyxkLGUpe2lmKG51bGw9PWJ8fCFpc0Zpbml0ZShiKXx8VChiKSlyZXR1cm5cIlwiO3ZhciBmPTA+YjtiPU1hdGguYWJzKGIpO3ZhciBnPWIrXCJcIixoPVwiXCIsaz1bXSxtPSExO2lmKC0xIT09Zy5pbmRleE9mKFwiZVwiKSl7dmFyIGw9Zy5tYXRjaCgvKFtcXGRcXC5dKyllKC0/KShcXGQrKS8pO2wmJlwiLVwiPT1sWzJdJiZcbmxbM10+ZSsxPyhnPVwiMFwiLGI9MCk6KGg9ZyxtPSEwKX1pZihtKTA8ZSYmKC0xPGImJjE+YikmJihoPWIudG9GaXhlZChlKSk7ZWxzZXtnPShnLnNwbGl0KE1jKVsxXXx8XCJcIikubGVuZ3RoO0YoZSkmJihlPU1hdGgubWluKE1hdGgubWF4KGEubWluRnJhYyxnKSxhLm1heEZyYWMpKTtiPSsoTWF0aC5yb3VuZCgrKGIudG9TdHJpbmcoKStcImVcIitlKSkudG9TdHJpbmcoKStcImVcIistZSk7MD09PWImJihmPSExKTtiPShcIlwiK2IpLnNwbGl0KE1jKTtnPWJbMF07Yj1iWzFdfHxcIlwiO3ZhciBsPTAsbj1hLmxnU2l6ZSxxPWEuZ1NpemU7aWYoZy5sZW5ndGg+PW4rcSlmb3IobD1nLmxlbmd0aC1uLG09MDttPGw7bSsrKTA9PT0obC1tKSVxJiYwIT09bSYmKGgrPWMpLGgrPWcuY2hhckF0KG0pO2ZvcihtPWw7bTxnLmxlbmd0aDttKyspMD09PShnLmxlbmd0aC1tKSVuJiYwIT09bSYmKGgrPWMpLGgrPWcuY2hhckF0KG0pO2Zvcig7Yi5sZW5ndGg8ZTspYis9XCIwXCI7ZSYmXCIwXCIhPT1lJiYoaCs9ZCtiLnN1YnN0cigwLFxuZSkpfWsucHVzaChmP2EubmVnUHJlOmEucG9zUHJlKTtrLnB1c2goaCk7ay5wdXNoKGY/YS5uZWdTdWY6YS5wb3NTdWYpO3JldHVybiBrLmpvaW4oXCJcIil9ZnVuY3Rpb24gVmIoYixhLGMpe3ZhciBkPVwiXCI7MD5iJiYoZD1cIi1cIixiPS1iKTtmb3IoYj1cIlwiK2I7Yi5sZW5ndGg8YTspYj1cIjBcIitiO2MmJihiPWIuc3Vic3RyKGIubGVuZ3RoLWEpKTtyZXR1cm4gZCtifWZ1bmN0aW9uIFooYixhLGMsZCl7Yz1jfHwwO3JldHVybiBmdW5jdGlvbihlKXtlPWVbXCJnZXRcIitiXSgpO2lmKDA8Y3x8ZT4tYyllKz1jOzA9PT1lJiYtMTI9PWMmJihlPTEyKTtyZXR1cm4gVmIoZSxhLGQpfX1mdW5jdGlvbiB2YihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWNbXCJnZXRcIitiXSgpLGY9TGEoYT9cIlNIT1JUXCIrYjpiKTtyZXR1cm4gZFtmXVtlXX19ZnVuY3Rpb24gSWMoYil7ZnVuY3Rpb24gYShhKXt2YXIgYjtpZihiPWEubWF0Y2goYykpe2E9bmV3IERhdGUoMCk7dmFyIGY9MCxnPTAsaD1iWzhdP1xuYS5zZXRVVENGdWxsWWVhcjphLnNldEZ1bGxZZWFyLGs9Yls4XT9hLnNldFVUQ0hvdXJzOmEuc2V0SG91cnM7Yls5XSYmKGY9VShiWzldK2JbMTBdKSxnPVUoYls5XStiWzExXSkpO2guY2FsbChhLFUoYlsxXSksVShiWzJdKS0xLFUoYlszXSkpO2Y9VShiWzRdfHwwKS1mO2c9VShiWzVdfHwwKS1nO2g9VShiWzZdfHwwKTtiPU1hdGgucm91bmQoMUUzKnBhcnNlRmxvYXQoXCIwLlwiKyhiWzddfHwwKSkpO2suY2FsbChhLGYsZyxoLGIpfXJldHVybiBhfXZhciBjPS9eKFxcZHs0fSktPyhcXGRcXGQpLT8oXFxkXFxkKSg/OlQoXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86XFwuKFxcZCspKT8pPyk/KFp8KFsrLV0pKFxcZFxcZCk6PyhcXGRcXGQpKT8pPyQvO3JldHVybiBmdW5jdGlvbihjLGUpe3ZhciBmPVwiXCIsZz1bXSxoLGs7ZT1lfHxcIm1lZGl1bURhdGVcIjtlPWIuREFURVRJTUVfRk9STUFUU1tlXXx8ZTtHKGMpJiYoYz1LZS50ZXN0KGMpP1UoYyk6YShjKSk7amIoYykmJihjPW5ldyBEYXRlKGMpKTtcbmlmKCF2YShjKSlyZXR1cm4gYztmb3IoO2U7KShrPUxlLmV4ZWMoZSkpPyhnPWcuY29uY2F0KHdhLmNhbGwoaywxKSksZT1nLnBvcCgpKTooZy5wdXNoKGUpLGU9bnVsbCk7cihnLGZ1bmN0aW9uKGEpe2g9TWVbYV07Zis9aD9oKGMsYi5EQVRFVElNRV9GT1JNQVRTKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcIlwiKS5yZXBsYWNlKC8nJy9nLFwiJ1wiKX0pO3JldHVybiBmfX1mdW5jdGlvbiBHZSgpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gb2EoYiwhMCl9fWZ1bmN0aW9uIEhlKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSl7aWYoIUwoYikmJiFHKGIpKXJldHVybiBiO2E9SW5maW5pdHk9PT1NYXRoLmFicyhOdW1iZXIoYSkpP051bWJlcihhKTpVKGEpO2lmKEcoYikpcmV0dXJuIGE/MDw9YT9iLnNsaWNlKDAsYSk6Yi5zbGljZShhLGIubGVuZ3RoKTpcIlwiO3ZhciBjPVtdLGQsZTthPmIubGVuZ3RoP2E9Yi5sZW5ndGg6YTwtYi5sZW5ndGgmJihhPS1iLmxlbmd0aCk7MDxhPyhkPTAsZT1hKTooZD1cbmIubGVuZ3RoK2EsZT1iLmxlbmd0aCk7Zm9yKDtkPGU7ZCsrKWMucHVzaChiW2RdKTtyZXR1cm4gY319ZnVuY3Rpb24gS2MoYil7cmV0dXJuIGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEsYil7cmV0dXJuIFdhKGIpP2Z1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYyxiKX06YX1mdW5jdGlvbiBmKGEsYil7dmFyIGM9dHlwZW9mIGEsZD10eXBlb2YgYjtyZXR1cm4gYz09ZD8odmEoYSkmJnZhKGIpJiYoYT1hLnZhbHVlT2YoKSxiPWIudmFsdWVPZigpKSxcInN0cmluZ1wiPT1jJiYoYT1hLnRvTG93ZXJDYXNlKCksYj1iLnRvTG93ZXJDYXNlKCkpLGE9PT1iPzA6YTxiPy0xOjEpOmM8ZD8tMToxfWlmKCFTYShhKSlyZXR1cm4gYTtjPUwoYyk/YzpbY107MD09PWMubGVuZ3RoJiYoYz1bXCIrXCJdKTtjPVVjKGMsZnVuY3Rpb24oYSl7dmFyIGM9ITEsZD1hfHxnYTtpZihHKGEpKXtpZihcIitcIj09YS5jaGFyQXQoMCl8fFwiLVwiPT1hLmNoYXJBdCgwKSljPVwiLVwiPT1hLmNoYXJBdCgwKSxhPWEuc3Vic3RyaW5nKDEpO1xuaWYoXCJcIj09PWEpcmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihhLGIpfSxjKTtkPWIoYSk7aWYoZC5jb25zdGFudCl7dmFyIG09ZCgpO3JldHVybiBlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGYoYVttXSxiW21dKX0sYyl9fXJldHVybiBlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGYoZChhKSxkKGIpKX0sYyl9KTtyZXR1cm4gd2EuY2FsbChhKS5zb3J0KGUoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXShhLGIpO2lmKDAhPT1lKXJldHVybiBlfXJldHVybiAwfSxkKSl9fWZ1bmN0aW9uIEFhKGIpe04oYikmJihiPXtsaW5rOmJ9KTtiLnJlc3RyaWN0PWIucmVzdHJpY3R8fFwiQUNcIjtyZXR1cm4gYWEoYil9ZnVuY3Rpb24gTmMoYixhLGMsZCl7ZnVuY3Rpb24gZShhLGMpe2M9Yz9cIi1cIituYihjLFwiLVwiKTpcIlwiO2Quc2V0Q2xhc3MoYiwoYT93Yjp4YikrYywoYT94Yjp3YikrYyl9dmFyIGY9dGhpcyxnPWIucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIil8fFxueWIsaD0wLGs9Zi4kZXJyb3I9e30sbT1bXTtmLiRuYW1lPWEubmFtZXx8YS5uZ0Zvcm07Zi4kZGlydHk9ITE7Zi4kcHJpc3RpbmU9ITA7Zi4kdmFsaWQ9ITA7Zi4kaW52YWxpZD0hMTtnLiRhZGRDb250cm9sKGYpO2IuYWRkQ2xhc3MoUmEpO2UoITApO2YuJGFkZENvbnRyb2w9ZnVuY3Rpb24oYSl7RWEoYS4kbmFtZSxcImlucHV0XCIpO20ucHVzaChhKTthLiRuYW1lJiYoZlthLiRuYW1lXT1hKX07Zi4kcmVtb3ZlQ29udHJvbD1mdW5jdGlvbihhKXthLiRuYW1lJiZmW2EuJG5hbWVdPT09YSYmZGVsZXRlIGZbYS4kbmFtZV07cihrLGZ1bmN0aW9uKGIsYyl7Zi4kc2V0VmFsaWRpdHkoYywhMCxhKX0pO1VhKG0sYSl9O2YuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1rW2FdO2lmKGIpZCYmKFVhKGQsYyksZC5sZW5ndGh8fChoLS0saHx8KGUoYiksZi4kdmFsaWQ9ITAsZi4kaW52YWxpZD0hMSksa1thXT0hMSxlKCEwLGEpLGcuJHNldFZhbGlkaXR5KGEsITAsZikpKTtlbHNle2h8fFxuZShiKTtpZihkKXtpZigtMSE9VGEoZCxjKSlyZXR1cm59ZWxzZSBrW2FdPWQ9W10saCsrLGUoITEsYSksZy4kc2V0VmFsaWRpdHkoYSwhMSxmKTtkLnB1c2goYyk7Zi4kdmFsaWQ9ITE7Zi4kaW52YWxpZD0hMH19O2YuJHNldERpcnR5PWZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhiLFJhKTtkLmFkZENsYXNzKGIsemIpO2YuJGRpcnR5PSEwO2YuJHByaXN0aW5lPSExO2cuJHNldERpcnR5KCl9O2YuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhiLHpiKTtkLmFkZENsYXNzKGIsUmEpO2YuJGRpcnR5PSExO2YuJHByaXN0aW5lPSEwO3IobSxmdW5jdGlvbihhKXthLiRzZXRQcmlzdGluZSgpfSl9fWZ1bmN0aW9uIHVhKGIsYSxjLGQpe2IuJHNldFZhbGlkaXR5KGEsYyk7cmV0dXJuIGM/ZDp1fWZ1bmN0aW9uIE9jKGIsYSl7dmFyIGMsZDtpZihhKWZvcihjPTA7YzxhLmxlbmd0aDsrK2MpaWYoZD1hW2NdLGJbZF0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gTmUoYixcbmEsYyxkLGUpe1QoZSkmJihiLiQkaGFzTmF0aXZlVmFsaWRhdG9ycz0hMCxiLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oZil7aWYoYi4kZXJyb3JbYV18fE9jKGUsZCl8fCFPYyhlLGMpKXJldHVybiBmO2IuJHNldFZhbGlkaXR5KGEsITEpfSkpfWZ1bmN0aW9uIEFiKGIsYSxjLGQsZSxmKXt2YXIgZz1hLnByb3AoT2UpLGg9YVswXS5wbGFjZWhvbGRlcixrPXt9LG09eChhWzBdLnR5cGUpO2QuJCR2YWxpZGl0eVN0YXRlPWc7aWYoIWUuYW5kcm9pZCl7dmFyIGw9ITE7YS5vbihcImNvbXBvc2l0aW9uc3RhcnRcIixmdW5jdGlvbihhKXtsPSEwfSk7YS5vbihcImNvbXBvc2l0aW9uZW5kXCIsZnVuY3Rpb24oKXtsPSExO24oKX0pfXZhciBuPWZ1bmN0aW9uKGUpe2lmKCFsKXt2YXIgZj1hLnZhbCgpO2lmKFImJlwiaW5wdXRcIj09PShlfHxrKS50eXBlJiZhWzBdLnBsYWNlaG9sZGVyIT09aCloPWFbMF0ucGxhY2Vob2xkZXI7ZWxzZSBpZihcInBhc3N3b3JkXCIhPT1tJiZXYShjLm5nVHJpbXx8XCJUXCIpJiZcbihmPSQoZikpLGU9ZyYmZC4kJGhhc05hdGl2ZVZhbGlkYXRvcnMsZC4kdmlld1ZhbHVlIT09Znx8XCJcIj09PWYmJmUpYi4kcm9vdC4kJHBoYXNlP2QuJHNldFZpZXdWYWx1ZShmKTpiLiRhcHBseShmdW5jdGlvbigpe2QuJHNldFZpZXdWYWx1ZShmKX0pfX07aWYoZS5oYXNFdmVudChcImlucHV0XCIpKWEub24oXCJpbnB1dFwiLG4pO2Vsc2V7dmFyIHEscD1mdW5jdGlvbigpe3F8fChxPWYuZGVmZXIoZnVuY3Rpb24oKXtuKCk7cT1udWxsfSkpfTthLm9uKFwia2V5ZG93blwiLGZ1bmN0aW9uKGEpe2E9YS5rZXlDb2RlOzkxPT09YXx8KDE1PGEmJjE5PmF8fDM3PD1hJiY0MD49YSl8fHAoKX0pO2lmKGUuaGFzRXZlbnQoXCJwYXN0ZVwiKSlhLm9uKFwicGFzdGUgY3V0XCIscCl9YS5vbihcImNoYW5nZVwiLG4pO2QuJHJlbmRlcj1mdW5jdGlvbigpe2EudmFsKGQuJGlzRW1wdHkoZC4kdmlld1ZhbHVlKT9cIlwiOmQuJHZpZXdWYWx1ZSl9O3ZhciBzPWMubmdQYXR0ZXJuO3MmJigoZT1zLm1hdGNoKC9eXFwvKC4qKVxcLyhbZ2ltXSopJC8pKT9cbihzPVJlZ0V4cChlWzFdLGVbMl0pLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGQsXCJwYXR0ZXJuXCIsZC4kaXNFbXB0eShhKXx8cy50ZXN0KGEpLGEpfSk6ZT1mdW5jdGlvbihjKXt2YXIgZT1iLiRldmFsKHMpO2lmKCFlfHwhZS50ZXN0KXRocm93IHooXCJuZ1BhdHRlcm5cIikoXCJub3JlZ2V4cFwiLHMsZSxpYShhKSk7cmV0dXJuIHVhKGQsXCJwYXR0ZXJuXCIsZC4kaXNFbXB0eShjKXx8ZS50ZXN0KGMpLGMpfSxkLiRmb3JtYXR0ZXJzLnB1c2goZSksZC4kcGFyc2Vycy5wdXNoKGUpKTtpZihjLm5nTWlubGVuZ3RoKXt2YXIgcj1VKGMubmdNaW5sZW5ndGgpO2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGQsXCJtaW5sZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxhLmxlbmd0aD49cixhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX1pZihjLm5nTWF4bGVuZ3RoKXt2YXIgdz1VKGMubmdNYXhsZW5ndGgpO2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGQsXCJtYXhsZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxcbmEubGVuZ3RoPD13LGEpfTtkLiRwYXJzZXJzLnB1c2goZSk7ZC4kZm9ybWF0dGVycy5wdXNoKGUpfX1mdW5jdGlvbiBXYihiLGEpe2I9XCJuZ0NsYXNzXCIrYjtyZXR1cm5bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSxiKXt2YXIgYz1bXSxkPTA7YTpmb3IoO2Q8YS5sZW5ndGg7ZCsrKXtmb3IodmFyIGU9YVtkXSxsPTA7bDxiLmxlbmd0aDtsKyspaWYoZT09YltsXSljb250aW51ZSBhO2MucHVzaChlKX1yZXR1cm4gY31mdW5jdGlvbiBlKGEpe2lmKCFMKGEpKXtpZihHKGEpKXJldHVybiBhLnNwbGl0KFwiIFwiKTtpZihUKGEpKXt2YXIgYj1bXTtyKGEsZnVuY3Rpb24oYSxjKXthJiYoYj1iLmNvbmNhdChjLnNwbGl0KFwiIFwiKSkpfSk7cmV0dXJuIGJ9fXJldHVybiBhfXJldHVybntyZXN0cmljdDpcIkFDXCIsbGluazpmdW5jdGlvbihmLGcsaCl7ZnVuY3Rpb24gayhhLGIpe3ZhciBjPWcuZGF0YShcIiRjbGFzc0NvdW50c1wiKXx8e30sZD1bXTtyKGEsZnVuY3Rpb24oYSl7aWYoMDxcbmJ8fGNbYV0pY1thXT0oY1thXXx8MCkrYixjW2FdPT09KygwPGIpJiZkLnB1c2goYSl9KTtnLmRhdGEoXCIkY2xhc3NDb3VudHNcIixjKTtyZXR1cm4gZC5qb2luKFwiIFwiKX1mdW5jdGlvbiBtKGIpe2lmKCEwPT09YXx8Zi4kaW5kZXglMj09PWEpe3ZhciBtPWUoYnx8W10pO2lmKCFsKXt2YXIgcD1rKG0sMSk7aC4kYWRkQ2xhc3MocCl9ZWxzZSBpZighQ2EoYixsKSl7dmFyIHM9ZShsKSxwPWQobSxzKSxtPWQocyxtKSxtPWsobSwtMSkscD1rKHAsMSk7MD09PXAubGVuZ3RoP2MucmVtb3ZlQ2xhc3MoZyxtKTowPT09bS5sZW5ndGg/Yy5hZGRDbGFzcyhnLHApOmMuc2V0Q2xhc3MoZyxwLG0pfX1sPWhhKGIpfXZhciBsO2YuJHdhdGNoKGhbYl0sbSwhMCk7aC4kb2JzZXJ2ZShcImNsYXNzXCIsZnVuY3Rpb24oYSl7bShmLiRldmFsKGhbYl0pKX0pO1wibmdDbGFzc1wiIT09YiYmZi4kd2F0Y2goXCIkaW5kZXhcIixmdW5jdGlvbihjLGQpe3ZhciBnPWMmMTtpZihnIT09KGQmMSkpe3ZhciBsPWUoZi4kZXZhbChoW2JdKSk7XG5nPT09YT8oZz1rKGwsMSksaC4kYWRkQ2xhc3MoZykpOihnPWsobCwtMSksaC4kcmVtb3ZlQ2xhc3MoZykpfX0pfX19XX12YXIgT2U9XCJ2YWxpZGl0eVwiLHg9ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi50b0xvd2VyQ2FzZSgpOmJ9LGxiPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksTGE9ZnVuY3Rpb24oYil7cmV0dXJuIEcoYik/Yi50b1VwcGVyQ2FzZSgpOmJ9LFIsQSxGYSx3YT1bXS5zbGljZSxQZT1bXS5wdXNoLEJhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsVmE9eihcIm5nXCIpLFhhPVcuYW5ndWxhcnx8KFcuYW5ndWxhcj17fSksJGEsUGEsbmE9W1wiMFwiLFwiMFwiLFwiMFwiXTtSPVUoKC9tc2llIChcXGQrKS8uZXhlYyh4KG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKTtpc05hTihSKSYmKFI9VSgoL3RyaWRlbnRcXC8uKjsgcnY6KFxcZCspLy5leGVjKHgobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pKTt2LiRpbmplY3Q9W107Z2EuJGluamVjdD1bXTt2YXIgTD1cbmZ1bmN0aW9uKCl7cmV0dXJuIE4oQXJyYXkuaXNBcnJheSk/QXJyYXkuaXNBcnJheTpmdW5jdGlvbihiKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1CYS5jYWxsKGIpfX0oKSwkPWZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihiKXtyZXR1cm4gRyhiKT9iLnRyaW0oKTpifTpmdW5jdGlvbihiKXtyZXR1cm4gRyhiKT9iLnJlcGxhY2UoL15cXHNcXHMqLyxcIlwiKS5yZXBsYWNlKC9cXHNcXHMqJC8sXCJcIik6Yn19KCk7UGE9OT5SP2Z1bmN0aW9uKGIpe2I9Yi5ub2RlTmFtZT9iOmJbMF07cmV0dXJuIGIuc2NvcGVOYW1lJiZcIkhUTUxcIiE9Yi5zY29wZU5hbWU/TGEoYi5zY29wZU5hbWUrXCI6XCIrYi5ub2RlTmFtZSk6Yi5ub2RlTmFtZX06ZnVuY3Rpb24oYil7cmV0dXJuIGIubm9kZU5hbWU/Yi5ub2RlTmFtZTpiWzBdLm5vZGVOYW1lfTt2YXIgWmE9ZnVuY3Rpb24oKXtpZihEKFphLmlzQWN0aXZlXykpcmV0dXJuIFphLmlzQWN0aXZlXzt2YXIgYj0hKCFYLnF1ZXJ5U2VsZWN0b3IoXCJbbmctY3NwXVwiKSYmXG4hWC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmctY3NwXVwiKSk7aWYoIWIpdHJ5e25ldyBGdW5jdGlvbihcIlwiKX1jYXRjaChhKXtiPSEwfXJldHVybiBaYS5pc0FjdGl2ZV89Yn0sWGM9L1tBLVpdL2csJGM9e2Z1bGw6XCIxLjIuMjhcIixtYWpvcjoxLG1pbm9yOjIsZG90OjI4LGNvZGVOYW1lOlwiZmlubmlzaC1kaXNlbWJhcmthdGlvblwifTtTLmV4cGFuZG89XCJuZzMzOVwiO3ZhciBjYj1TLmNhY2hlPXt9LG1lPTEsc2I9Vy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuYXR0YWNoRXZlbnQoXCJvblwiK2EsYyl9LGJiPVcuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihiLGEsYyl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMSl9OmZ1bmN0aW9uKGIsYSxjKXtiLmRldGFjaEV2ZW50KFwib25cIithLGMpfTtTLl9kYXRhPWZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmNhY2hlW2JbdGhpcy5leHBhbmRvXV18fFxue319O3ZhciBoZT0vKFtcXDpcXC1cXF9dKyguKSkvZyxpZT0vXm1veihbQS1aXSkvLEhiPXooXCJqcUxpdGVcIiksamU9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLEliPS88fCYjP1xcdys7LyxrZT0vPChbXFx3Ol0rKS8sbGU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGRhPXtvcHRpb246WzEsJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07ZGEub3B0Z3JvdXA9ZGEub3B0aW9uO2RhLnRib2R5PWRhLnRmb290PWRhLmNvbGdyb3VwPVxuZGEuY2FwdGlvbj1kYS50aGVhZDtkYS50aD1kYS50ZDt2YXIgT2E9Uy5wcm90b3R5cGU9e3JlYWR5OmZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGEoKXtjfHwoYz0hMCxiKCkpfXZhciBjPSExO1wiY29tcGxldGVcIj09PVgucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFwiRE9NQ29udGVudExvYWRlZFwiLGEpLFMoVykub24oXCJsb2FkXCIsYSkpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPVtdO3IodGhpcyxmdW5jdGlvbihhKXtiLnB1c2goXCJcIithKX0pO3JldHVyblwiW1wiK2Iuam9pbihcIiwgXCIpK1wiXVwifSxlcTpmdW5jdGlvbihiKXtyZXR1cm4gMDw9Yj9BKHRoaXNbYl0pOkEodGhpc1t0aGlzLmxlbmd0aCtiXSl9LGxlbmd0aDowLHB1c2g6UGUsc29ydDpbXS5zb3J0LHNwbGljZTpbXS5zcGxpY2V9LHJiPXt9O3IoXCJtdWx0aXBsZSBzZWxlY3RlZCBjaGVja2VkIGRpc2FibGVkIHJlYWRPbmx5IHJlcXVpcmVkIG9wZW5cIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7cmJbeChiKV09Yn0pO1xudmFyIHBjPXt9O3IoXCJpbnB1dCBzZWxlY3Qgb3B0aW9uIHRleHRhcmVhIGJ1dHRvbiBmb3JtIGRldGFpbHNcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7cGNbTGEoYildPSEwfSk7cih7ZGF0YTpNYixyZW1vdmVEYXRhOkxifSxmdW5jdGlvbihiLGEpe1NbYV09Yn0pO3Ioe2RhdGE6TWIsaW5oZXJpdGVkRGF0YTpxYixzY29wZTpmdW5jdGlvbihiKXtyZXR1cm4gQS5kYXRhKGIsXCIkc2NvcGVcIil8fHFiKGIucGFyZW50Tm9kZXx8YixbXCIkaXNvbGF0ZVNjb3BlXCIsXCIkc2NvcGVcIl0pfSxpc29sYXRlU2NvcGU6ZnVuY3Rpb24oYil7cmV0dXJuIEEuZGF0YShiLFwiJGlzb2xhdGVTY29wZVwiKXx8QS5kYXRhKGIsXCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiKX0sY29udHJvbGxlcjptYyxpbmplY3RvcjpmdW5jdGlvbihiKXtyZXR1cm4gcWIoYixcIiRpbmplY3RvclwiKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihiLGEpe2IucmVtb3ZlQXR0cmlidXRlKGEpfSxoYXNDbGFzczpOYixjc3M6ZnVuY3Rpb24oYixcbmEsYyl7YT1hYihhKTtpZihEKGMpKWIuc3R5bGVbYV09YztlbHNle3ZhciBkOzg+PVImJihkPWIuY3VycmVudFN0eWxlJiZiLmN1cnJlbnRTdHlsZVthXSxcIlwiPT09ZCYmKGQ9XCJhdXRvXCIpKTtkPWR8fGIuc3R5bGVbYV07OD49UiYmKGQ9XCJcIj09PWQ/dTpkKTtyZXR1cm4gZH19LGF0dHI6ZnVuY3Rpb24oYixhLGMpe3ZhciBkPXgoYSk7aWYocmJbZF0paWYoRChjKSljPyhiW2FdPSEwLGIuc2V0QXR0cmlidXRlKGEsZCkpOihiW2FdPSExLGIucmVtb3ZlQXR0cmlidXRlKGQpKTtlbHNlIHJldHVybiBiW2FdfHwoYi5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShhKXx8dikuc3BlY2lmaWVkP2Q6dTtlbHNlIGlmKEQoYykpYi5zZXRBdHRyaWJ1dGUoYSxjKTtlbHNlIGlmKGIuZ2V0QXR0cmlidXRlKXJldHVybiBiPWIuZ2V0QXR0cmlidXRlKGEsMiksbnVsbD09PWI/dTpifSxwcm9wOmZ1bmN0aW9uKGIsYSxjKXtpZihEKGMpKWJbYV09YztlbHNlIHJldHVybiBiW2FdfSx0ZXh0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLFxuZCl7dmFyIGU9YVtiLm5vZGVUeXBlXTtpZihGKGQpKXJldHVybiBlP2JbZV06XCJcIjtiW2VdPWR9dmFyIGE9W107OT5SPyhhWzFdPVwiaW5uZXJUZXh0XCIsYVszXT1cIm5vZGVWYWx1ZVwiKTphWzFdPWFbM109XCJ0ZXh0Q29udGVudFwiO2IuJGR2PVwiXCI7cmV0dXJuIGJ9KCksdmFsOmZ1bmN0aW9uKGIsYSl7aWYoRihhKSl7aWYoXCJTRUxFQ1RcIj09PVBhKGIpJiZiLm11bHRpcGxlKXt2YXIgYz1bXTtyKGIub3B0aW9ucyxmdW5jdGlvbihhKXthLnNlbGVjdGVkJiZjLnB1c2goYS52YWx1ZXx8YS50ZXh0KX0pO3JldHVybiAwPT09Yy5sZW5ndGg/bnVsbDpjfXJldHVybiBiLnZhbHVlfWIudmFsdWU9YX0saHRtbDpmdW5jdGlvbihiLGEpe2lmKEYoYSkpcmV0dXJuIGIuaW5uZXJIVE1MO2Zvcih2YXIgYz0wLGQ9Yi5jaGlsZE5vZGVzO2M8ZC5sZW5ndGg7YysrKU1hKGRbY10pO2IuaW5uZXJIVE1MPWF9LGVtcHR5Om5jfSxmdW5jdGlvbihiLGEpe1MucHJvdG90eXBlW2FdPWZ1bmN0aW9uKGEsZCl7dmFyIGUsXG5mLGc9dGhpcy5sZW5ndGg7aWYoYiE9PW5jJiYoMj09Yi5sZW5ndGgmJmIhPT1OYiYmYiE9PW1jP2E6ZCk9PT11KXtpZihUKGEpKXtmb3IoZT0wO2U8ZztlKyspaWYoYj09PU1iKWIodGhpc1tlXSxhKTtlbHNlIGZvcihmIGluIGEpYih0aGlzW2VdLGYsYVtmXSk7cmV0dXJuIHRoaXN9ZT1iLiRkdjtnPWU9PT11P01hdGgubWluKGcsMSk6Zztmb3IoZj0wO2Y8ZztmKyspe3ZhciBoPWIodGhpc1tmXSxhLGQpO2U9ZT9lK2g6aH1yZXR1cm4gZX1mb3IoZT0wO2U8ZztlKyspYih0aGlzW2VdLGEsZCk7cmV0dXJuIHRoaXN9fSk7cih7cmVtb3ZlRGF0YTpMYixkZWFsb2M6TWEsb246ZnVuY3Rpb24gYShjLGQsZSxmKXtpZihEKGYpKXRocm93IEhiKFwib25hcmdzXCIpO3ZhciBnPXBhKGMsXCJldmVudHNcIiksaD1wYShjLFwiaGFuZGxlXCIpO2d8fHBhKGMsXCJldmVudHNcIixnPXt9KTtofHxwYShjLFwiaGFuZGxlXCIsaD1uZShjLGcpKTtyKGQuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGQpe3ZhciBmPWdbZF07aWYoIWYpe2lmKFwibW91c2VlbnRlclwiPT1cbmR8fFwibW91c2VsZWF2ZVwiPT1kKXt2YXIgbD1YLmJvZHkuY29udGFpbnN8fFguYm9keS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj9mdW5jdGlvbihhLGMpe3ZhciBkPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZT1jJiZjLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1lfHwhIShlJiYxPT09ZS5ub2RlVHlwZSYmKGQuY29udGFpbnM/ZC5jb250YWlucyhlKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpJjE2KSl9OmZ1bmN0aW9uKGEsYyl7aWYoYylmb3IoO2M9Yy5wYXJlbnROb2RlOylpZihjPT09YSlyZXR1cm4hMDtyZXR1cm4hMX07Z1tkXT1bXTthKGMse21vdXNlbGVhdmU6XCJtb3VzZW91dFwiLG1vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIn1bZF0sZnVuY3Rpb24oYSl7dmFyIGM9YS5yZWxhdGVkVGFyZ2V0O2MmJihjPT09dGhpc3x8bCh0aGlzLGMpKXx8aChhLGQpfSl9ZWxzZSBzYihjLGQsaCksZ1tkXT1bXTtmPWdbZF19Zi5wdXNoKGUpfSl9LFxub2ZmOmxjLG9uZTpmdW5jdGlvbihhLGMsZCl7YT1BKGEpO2Eub24oYyxmdW5jdGlvbiBmKCl7YS5vZmYoYyxkKTthLm9mZihjLGYpfSk7YS5vbihjLGQpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbihhLGMpe3ZhciBkLGU9YS5wYXJlbnROb2RlO01hKGEpO3IobmV3IFMoYyksZnVuY3Rpb24oYyl7ZD9lLmluc2VydEJlZm9yZShjLGQubmV4dFNpYmxpbmcpOmUucmVwbGFjZUNoaWxkKGMsYSk7ZD1jfSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3ZhciBjPVtdO3IoYS5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpezE9PT1hLm5vZGVUeXBlJiZjLnB1c2goYSl9KTtyZXR1cm4gY30sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxhLmNoaWxkTm9kZXN8fFtdfSxhcHBlbmQ6ZnVuY3Rpb24oYSxjKXtyKG5ldyBTKGMpLGZ1bmN0aW9uKGMpezEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fGEuYXBwZW5kQ2hpbGQoYyl9KX0scHJlcGVuZDpmdW5jdGlvbihhLFxuYyl7aWYoMT09PWEubm9kZVR5cGUpe3ZhciBkPWEuZmlyc3RDaGlsZDtyKG5ldyBTKGMpLGZ1bmN0aW9uKGMpe2EuaW5zZXJ0QmVmb3JlKGMsZCl9KX19LHdyYXA6ZnVuY3Rpb24oYSxjKXtjPUEoYylbMF07dmFyIGQ9YS5wYXJlbnROb2RlO2QmJmQucmVwbGFjZUNoaWxkKGMsYSk7Yy5hcHBlbmRDaGlsZChhKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe01hKGEpO3ZhciBjPWEucGFyZW50Tm9kZTtjJiZjLnJlbW92ZUNoaWxkKGEpfSxhZnRlcjpmdW5jdGlvbihhLGMpe3ZhciBkPWEsZT1hLnBhcmVudE5vZGU7cihuZXcgUyhjKSxmdW5jdGlvbihhKXtlLmluc2VydEJlZm9yZShhLGQubmV4dFNpYmxpbmcpO2Q9YX0pfSxhZGRDbGFzczpwYixyZW1vdmVDbGFzczpvYix0b2dnbGVDbGFzczpmdW5jdGlvbihhLGMsZCl7YyYmcihjLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihjKXt2YXIgZj1kO0YoZikmJihmPSFOYihhLGMpKTsoZj9wYjpvYikoYSxjKX0pfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9XG5hLnBhcmVudE5vZGUpJiYxMSE9PWEubm9kZVR5cGU/YTpudWxsfSxuZXh0OmZ1bmN0aW9uKGEpe2lmKGEubmV4dEVsZW1lbnRTaWJsaW5nKXJldHVybiBhLm5leHRFbGVtZW50U2libGluZztmb3IoYT1hLm5leHRTaWJsaW5nO251bGwhPWEmJjEhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9LGZpbmQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGMpOltdfSxjbG9uZTpLYix0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZjtlPWMudHlwZXx8Yzt2YXIgZz0ocGEoYSxcImV2ZW50c1wiKXx8e30pW2VdO2cmJihlPXtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMH0saXNEZWZhdWx0UHJldmVudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITA9PT10aGlzLmRlZmF1bHRQcmV2ZW50ZWR9LHN0b3BQcm9wYWdhdGlvbjp2LHR5cGU6ZSx0YXJnZXQ6YX0sXG5jLnR5cGUmJihlPUUoZSxjKSksYz1oYShnKSxmPWQ/W2VdLmNvbmNhdChkKTpbZV0scihjLGZ1bmN0aW9uKGMpe2MuYXBwbHkoYSxmKX0pKX19LGZ1bmN0aW9uKGEsYyl7Uy5wcm90b3R5cGVbY109ZnVuY3Rpb24oYyxlLGYpe2Zvcih2YXIgZyxoPTA7aDx0aGlzLmxlbmd0aDtoKyspRihnKT8oZz1hKHRoaXNbaF0sYyxlLGYpLEQoZykmJihnPUEoZykpKTpKYihnLGEodGhpc1toXSxjLGUsZikpO3JldHVybiBEKGcpP2c6dGhpc307Uy5wcm90b3R5cGUuYmluZD1TLnByb3RvdHlwZS5vbjtTLnByb3RvdHlwZS51bmJpbmQ9Uy5wcm90b3R5cGUub2ZmfSk7ZGIucHJvdG90eXBlPXtwdXQ6ZnVuY3Rpb24oYSxjKXt0aGlzW05hKGEsdGhpcy5uZXh0VWlkKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW05hKGEsdGhpcy5uZXh0VWlkKV19LHJlbW92ZTpmdW5jdGlvbihhKXt2YXIgYz10aGlzW2E9TmEoYSx0aGlzLm5leHRVaWQpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciBwZT1cbi9eZnVuY3Rpb25cXHMqW15cXChdKlxcKFxccyooW15cXCldKilcXCkvbSxxZT0vLC8scmU9L15cXHMqKF8/KShcXFMrPylcXDFcXHMqJC8sb2U9LygoXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLykpL21nLGViPXooXCIkaW5qZWN0b3JcIiksUWU9eihcIiRhbmltYXRlXCIpLExkPVtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7dGhpcy4kJHNlbGVjdG9ycz17fTt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGMsZCl7dmFyIGU9YytcIi1hbmltYXRpb25cIjtpZihjJiZcIi5cIiE9Yy5jaGFyQXQoMCkpdGhyb3cgUWUoXCJub3Rjc2VsXCIsYyk7dGhpcy4kJHNlbGVjdG9yc1tjLnN1YnN0cigxKV09ZTthLmZhY3RvcnkoZSxkKX07dGhpcy5jbGFzc05hbWVGaWx0ZXI9ZnVuY3Rpb24oYSl7MT09PWFyZ3VtZW50cy5sZW5ndGgmJih0aGlzLiQkY2xhc3NOYW1lRmlsdGVyPWEgaW5zdGFuY2VvZiBSZWdFeHA/YTpudWxsKTtyZXR1cm4gdGhpcy4kJGNsYXNzTmFtZUZpbHRlcn07dGhpcy4kZ2V0PVtcIiR0aW1lb3V0XCIsXCIkJGFzeW5jQ2FsbGJhY2tcIixcbmZ1bmN0aW9uKGEsZCl7cmV0dXJue2VudGVyOmZ1bmN0aW9uKGEsYyxnLGgpe2c/Zy5hZnRlcihhKTooYyYmY1swXXx8KGM9Zy5wYXJlbnQoKSksYy5hcHBlbmQoYSkpO2gmJmQoaCl9LGxlYXZlOmZ1bmN0aW9uKGEsYyl7YS5yZW1vdmUoKTtjJiZkKGMpfSxtb3ZlOmZ1bmN0aW9uKGEsYyxkLGgpe3RoaXMuZW50ZXIoYSxjLGQsaCl9LGFkZENsYXNzOmZ1bmN0aW9uKGEsYyxnKXtjPUcoYyk/YzpMKGMpP2Muam9pbihcIiBcIik6XCJcIjtyKGEsZnVuY3Rpb24oYSl7cGIoYSxjKX0pO2cmJmQoZyl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsYyxnKXtjPUcoYyk/YzpMKGMpP2Muam9pbihcIiBcIik6XCJcIjtyKGEsZnVuY3Rpb24oYSl7b2IoYSxjKX0pO2cmJmQoZyl9LHNldENsYXNzOmZ1bmN0aW9uKGEsYyxnLGgpe3IoYSxmdW5jdGlvbihhKXtwYihhLGMpO29iKGEsZyl9KTtoJiZkKGgpfSxlbmFibGVkOnZ9fV19XSxqYT16KFwiJGNvbXBpbGVcIik7Z2MuJGluamVjdD1bXCIkcHJvdmlkZVwiLFwiJCRzYW5pdGl6ZVVyaVByb3ZpZGVyXCJdO1xudmFyIHdlPS9eKHhbXFw6XFwtX118ZGF0YVtcXDpcXC1fXSkvaSx3Yz16KFwiJGludGVycG9sYXRlXCIpLFJlPS9eKFteXFw/I10qKShcXD8oW14jXSopKT8oIyguKikpPyQvLHplPXtodHRwOjgwLGh0dHBzOjQ0MyxmdHA6MjF9LFNiPXooXCIkbG9jYXRpb25cIik7QWMucHJvdG90eXBlPVRiLnByb3RvdHlwZT16Yy5wcm90b3R5cGU9eyQkaHRtbDU6ITEsJCRyZXBsYWNlOiExLGFic1VybDp0YihcIiQkYWJzVXJsXCIpLHVybDpmdW5jdGlvbihhKXtpZihGKGEpKXJldHVybiB0aGlzLiQkdXJsO2E9UmUuZXhlYyhhKTthWzFdJiZ0aGlzLnBhdGgoZGVjb2RlVVJJQ29tcG9uZW50KGFbMV0pKTsoYVsyXXx8YVsxXSkmJnRoaXMuc2VhcmNoKGFbM118fFwiXCIpO3RoaXMuaGFzaChhWzVdfHxcIlwiKTtyZXR1cm4gdGhpc30scHJvdG9jb2w6dGIoXCIkJHByb3RvY29sXCIpLGhvc3Q6dGIoXCIkJGhvc3RcIikscG9ydDp0YihcIiQkcG9ydFwiKSxwYXRoOkJjKFwiJCRwYXRoXCIsZnVuY3Rpb24oYSl7YT1udWxsIT09YT9hLnRvU3RyaW5nKCk6XG5cIlwiO3JldHVyblwiL1wiPT1hLmNoYXJBdCgwKT9hOlwiL1wiK2F9KSxzZWFyY2g6ZnVuY3Rpb24oYSxjKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiB0aGlzLiQkc2VhcmNoO2Nhc2UgMTppZihHKGEpfHxqYihhKSlhPWEudG9TdHJpbmcoKSx0aGlzLiQkc2VhcmNoPWNjKGEpO2Vsc2UgaWYoVChhKSlyKGEsZnVuY3Rpb24oYyxlKXtudWxsPT1jJiZkZWxldGUgYVtlXX0pLHRoaXMuJCRzZWFyY2g9YTtlbHNlIHRocm93IFNiKFwiaXNyY2hhcmdcIik7YnJlYWs7ZGVmYXVsdDpGKGMpfHxudWxsPT09Yz9kZWxldGUgdGhpcy4kJHNlYXJjaFthXTp0aGlzLiQkc2VhcmNoW2FdPWN9dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc30saGFzaDpCYyhcIiQkaGFzaFwiLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YT9hLnRvU3RyaW5nKCk6XCJcIn0pLHJlcGxhY2U6ZnVuY3Rpb24oKXt0aGlzLiQkcmVwbGFjZT0hMDtyZXR1cm4gdGhpc319O3ZhciBsYT16KFwiJHBhcnNlXCIpLEVjPVxue30seWEsU2U9RnVuY3Rpb24ucHJvdG90eXBlLmNhbGwsVGU9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LFBjPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLGhiPXtcIm51bGxcIjpmdW5jdGlvbigpe3JldHVybiBudWxsfSxcInRydWVcIjpmdW5jdGlvbigpe3JldHVybiEwfSxcImZhbHNlXCI6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sdW5kZWZpbmVkOnYsXCIrXCI6ZnVuY3Rpb24oYSxjLGQsZSl7ZD1kKGEsYyk7ZT1lKGEsYyk7cmV0dXJuIEQoZCk/RChlKT9kK2U6ZDpEKGUpP2U6dX0sXCItXCI6ZnVuY3Rpb24oYSxjLGQsZSl7ZD1kKGEsYyk7ZT1lKGEsYyk7cmV0dXJuKEQoZCk/ZDowKS0oRChlKT9lOjApfSxcIipcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpKmUoYSxjKX0sXCIvXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKS9lKGEsYyl9LFwiJVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyklZShhLGMpfSxcIl5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpXlxuZShhLGMpfSxcIj1cIjp2LFwiPT09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT09PWUoYSxjKX0sXCIhPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpIT09ZShhLGMpfSxcIj09XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT09ZShhLGMpfSxcIiE9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSE9ZShhLGMpfSxcIjxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPGUoYSxjKX0sXCI+XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT5lKGEsYyl9LFwiPD1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPD1lKGEsYyl9LFwiPj1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPj1lKGEsYyl9LFwiJiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJiZlKGEsYyl9LFwifHxcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpfHxlKGEsYyl9LFwiJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsXG5jKSZlKGEsYyl9LFwifFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBlKGEsYykoYSxjLGQoYSxjKSl9LFwiIVwiOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4hZChhLGMpfX0sVWU9e246XCJcXG5cIixmOlwiXFxmXCIscjpcIlxcclwiLHQ6XCJcXHRcIix2OlwiXFx2XCIsXCInXCI6XCInXCIsJ1wiJzonXCInfSxVYj1mdW5jdGlvbihhKXt0aGlzLm9wdGlvbnM9YX07VWIucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpVYixsZXg6ZnVuY3Rpb24oYSl7dGhpcy50ZXh0PWE7dGhpcy5pbmRleD0wO3RoaXMuY2g9dTt0aGlzLmxhc3RDaD1cIjpcIjtmb3IodGhpcy50b2tlbnM9W107dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dGhpcy5jaD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKHRoaXMuaXMoXCJcXFwiJ1wiKSl0aGlzLnJlYWRTdHJpbmcodGhpcy5jaCk7ZWxzZSBpZih0aGlzLmlzTnVtYmVyKHRoaXMuY2gpfHx0aGlzLmlzKFwiLlwiKSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQodGhpcy5jaCkpdGhpcy5yZWFkSWRlbnQoKTtcbmVsc2UgaWYodGhpcy5pcyhcIigpe31bXS4sOzo/XCIpKXRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDp0aGlzLmNofSksdGhpcy5pbmRleCsrO2Vsc2UgaWYodGhpcy5pc1doaXRlc3BhY2UodGhpcy5jaCkpe3RoaXMuaW5kZXgrKztjb250aW51ZX1lbHNle2E9dGhpcy5jaCt0aGlzLnBlZWsoKTt2YXIgYz1hK3RoaXMucGVlaygyKSxkPWhiW3RoaXMuY2hdLGU9aGJbYV0sZj1oYltjXTtmPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6YyxmbjpmfSksdGhpcy5pbmRleCs9Myk6ZT8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmEsZm46ZX0pLHRoaXMuaW5kZXgrPTIpOmQ/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDp0aGlzLmNoLGZuOmR9KSx0aGlzLmluZGV4Kz0xKTp0aGlzLnRocm93RXJyb3IoXCJVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyIFwiLHRoaXMuaW5kZXgsdGhpcy5pbmRleCtcbjEpfXRoaXMubGFzdENoPXRoaXMuY2h9cmV0dXJuIHRoaXMudG9rZW5zfSxpczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PWEuaW5kZXhPZih0aGlzLmNoKX0sd2FzOmZ1bmN0aW9uKGEpe3JldHVybi0xIT09YS5pbmRleE9mKHRoaXMubGFzdENoKX0scGVlazpmdW5jdGlvbihhKXthPWF8fDE7cmV0dXJuIHRoaXMuaW5kZXgrYTx0aGlzLnRleHQubGVuZ3RoP3RoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCthKTohMX0saXNOdW1iZXI6ZnVuY3Rpb24oYSl7cmV0dXJuXCIwXCI8PWEmJlwiOVwiPj1hfSxpc1doaXRlc3BhY2U6ZnVuY3Rpb24oYSl7cmV0dXJuXCIgXCI9PT1hfHxcIlxcclwiPT09YXx8XCJcXHRcIj09PWF8fFwiXFxuXCI9PT1hfHxcIlxcdlwiPT09YXx8XCJcXHUwMGEwXCI9PT1hfSxpc0lkZW50OmZ1bmN0aW9uKGEpe3JldHVyblwiYVwiPD1hJiZcInpcIj49YXx8XCJBXCI8PWEmJlwiWlwiPj1hfHxcIl9cIj09PWF8fFwiJFwiPT09YX0saXNFeHBPcGVyYXRvcjpmdW5jdGlvbihhKXtyZXR1cm5cIi1cIj09PWF8fFwiK1wiPT09YXx8dGhpcy5pc051bWJlcihhKX0sXG50aHJvd0Vycm9yOmZ1bmN0aW9uKGEsYyxkKXtkPWR8fHRoaXMuaW5kZXg7Yz1EKGMpP1wicyBcIitjK1wiLVwiK3RoaXMuaW5kZXgrXCIgW1wiK3RoaXMudGV4dC5zdWJzdHJpbmcoYyxkKStcIl1cIjpcIiBcIitkO3Rocm93IGxhKFwibGV4ZXJyXCIsYSxjLHRoaXMudGV4dCk7fSxyZWFkTnVtYmVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVwiXCIsYz10aGlzLmluZGV4O3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBkPXgodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7aWYoXCIuXCI9PWR8fHRoaXMuaXNOdW1iZXIoZCkpYSs9ZDtlbHNle3ZhciBlPXRoaXMucGVlaygpO2lmKFwiZVwiPT1kJiZ0aGlzLmlzRXhwT3BlcmF0b3IoZSkpYSs9ZDtlbHNlIGlmKHRoaXMuaXNFeHBPcGVyYXRvcihkKSYmZSYmdGhpcy5pc051bWJlcihlKSYmXCJlXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpKWErPWQ7ZWxzZSBpZighdGhpcy5pc0V4cE9wZXJhdG9yKGQpfHxlJiZ0aGlzLmlzTnVtYmVyKGUpfHxcImVcIiE9YS5jaGFyQXQoYS5sZW5ndGgtXG4xKSlicmVhaztlbHNlIHRoaXMudGhyb3dFcnJvcihcIkludmFsaWQgZXhwb25lbnRcIil9dGhpcy5pbmRleCsrfWEqPTE7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmEsbGl0ZXJhbDohMCxjb25zdGFudDohMCxmbjpmdW5jdGlvbigpe3JldHVybiBhfX0pfSxyZWFkSWRlbnQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxjPVwiXCIsZD10aGlzLmluZGV4LGUsZixnLGg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKFwiLlwiPT09aHx8dGhpcy5pc0lkZW50KGgpfHx0aGlzLmlzTnVtYmVyKGgpKVwiLlwiPT09aCYmKGU9dGhpcy5pbmRleCksYys9aDtlbHNlIGJyZWFrO3RoaXMuaW5kZXgrK31pZihlKWZvcihmPXRoaXMuaW5kZXg7Zjx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KGYpO2lmKFwiKFwiPT09aCl7Zz1jLnN1YnN0cihlLWQrMSk7Yz1jLnN1YnN0cigwLGUtZCk7dGhpcy5pbmRleD1mO2JyZWFrfWlmKHRoaXMuaXNXaGl0ZXNwYWNlKGgpKWYrKztcbmVsc2UgYnJlYWt9ZD17aW5kZXg6ZCx0ZXh0OmN9O2lmKGhiLmhhc093blByb3BlcnR5KGMpKWQuZm49aGJbY10sZC5saXRlcmFsPSEwLGQuY29uc3RhbnQ9ITA7ZWxzZXt2YXIgaz1EYyhjLHRoaXMub3B0aW9ucyx0aGlzLnRleHQpO2QuZm49RShmdW5jdGlvbihhLGMpe3JldHVybiBrKGEsYyl9LHthc3NpZ246ZnVuY3Rpb24oZCxlKXtyZXR1cm4gdWIoZCxjLGUsYS50ZXh0LGEub3B0aW9ucyl9fSl9dGhpcy50b2tlbnMucHVzaChkKTtnJiYodGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSx0ZXh0OlwiLlwifSksdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6ZSsxLHRleHQ6Z30pKX0scmVhZFN0cmluZzpmdW5jdGlvbihhKXt2YXIgYz10aGlzLmluZGV4O3RoaXMuaW5kZXgrKztmb3IodmFyIGQ9XCJcIixlPWEsZj0hMTt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZz10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpLGU9ZStnO2lmKGYpXCJ1XCI9PT1nPyhmPXRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCtcbjEsdGhpcy5pbmRleCs1KSxmLm1hdGNoKC9bXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHVcIitmK1wiXVwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkKz1VZVtnXXx8ZyxmPSExO2Vsc2UgaWYoXCJcXFxcXCI9PT1nKWY9ITA7ZWxzZXtpZihnPT09YSl7dGhpcy5pbmRleCsrO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDplLHN0cmluZzpkLGxpdGVyYWw6ITAsY29uc3RhbnQ6ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gZH19KTtyZXR1cm59ZCs9Z310aGlzLmluZGV4Kyt9dGhpcy50aHJvd0Vycm9yKFwiVW50ZXJtaW5hdGVkIHF1b3RlXCIsYyl9fTt2YXIgZ2I9ZnVuY3Rpb24oYSxjLGQpe3RoaXMubGV4ZXI9YTt0aGlzLiRmaWx0ZXI9Yzt0aGlzLm9wdGlvbnM9ZH07Z2IuWkVSTz1FKGZ1bmN0aW9uKCl7cmV0dXJuIDB9LHtjb25zdGFudDohMH0pO2diLnByb3RvdHlwZT17Y29uc3RydWN0b3I6Z2IsXG5wYXJzZTpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLnRva2Vucz10aGlzLmxleGVyLmxleChhKTthPXRoaXMuc3RhdGVtZW50cygpOzAhPT10aGlzLnRva2Vucy5sZW5ndGgmJnRoaXMudGhyb3dFcnJvcihcImlzIGFuIHVuZXhwZWN0ZWQgdG9rZW5cIix0aGlzLnRva2Vuc1swXSk7YS5saXRlcmFsPSEhYS5saXRlcmFsO2EuY29uc3RhbnQ9ISFhLmNvbnN0YW50O3JldHVybiBhfSxwcmltYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7aWYodGhpcy5leHBlY3QoXCIoXCIpKWE9dGhpcy5maWx0ZXJDaGFpbigpLHRoaXMuY29uc3VtZShcIilcIik7ZWxzZSBpZih0aGlzLmV4cGVjdChcIltcIikpYT10aGlzLmFycmF5RGVjbGFyYXRpb24oKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwie1wiKSlhPXRoaXMub2JqZWN0KCk7ZWxzZXt2YXIgYz10aGlzLmV4cGVjdCgpOyhhPWMuZm4pfHx0aGlzLnRocm93RXJyb3IoXCJub3QgYSBwcmltYXJ5IGV4cHJlc3Npb25cIixjKTthLmxpdGVyYWw9ISFjLmxpdGVyYWw7YS5jb25zdGFudD1cbiEhYy5jb25zdGFudH1mb3IodmFyIGQ7Yz10aGlzLmV4cGVjdChcIihcIixcIltcIixcIi5cIik7KVwiKFwiPT09Yy50ZXh0PyhhPXRoaXMuZnVuY3Rpb25DYWxsKGEsZCksZD1udWxsKTpcIltcIj09PWMudGV4dD8oZD1hLGE9dGhpcy5vYmplY3RJbmRleChhKSk6XCIuXCI9PT1jLnRleHQ/KGQ9YSxhPXRoaXMuZmllbGRBY2Nlc3MoYSkpOnRoaXMudGhyb3dFcnJvcihcIklNUE9TU0lCTEVcIik7cmV0dXJuIGF9LHRocm93RXJyb3I6ZnVuY3Rpb24oYSxjKXt0aHJvdyBsYShcInN5bnRheFwiLGMudGV4dCxhLGMuaW5kZXgrMSx0aGlzLnRleHQsdGhpcy50ZXh0LnN1YnN0cmluZyhjLmluZGV4KSk7fSxwZWVrVG9rZW46ZnVuY3Rpb24oKXtpZigwPT09dGhpcy50b2tlbnMubGVuZ3RoKXRocm93IGxhKFwidWVvZVwiLHRoaXMudGV4dCk7cmV0dXJuIHRoaXMudG9rZW5zWzBdfSxwZWVrOmZ1bmN0aW9uKGEsYyxkLGUpe2lmKDA8dGhpcy50b2tlbnMubGVuZ3RoKXt2YXIgZj10aGlzLnRva2Vuc1swXSxnPWYudGV4dDtpZihnPT09XG5hfHxnPT09Y3x8Zz09PWR8fGc9PT1lfHwhKGF8fGN8fGR8fGUpKXJldHVybiBmfXJldHVybiExfSxleHBlY3Q6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuKGE9dGhpcy5wZWVrKGEsYyxkLGUpKT8odGhpcy50b2tlbnMuc2hpZnQoKSxhKTohMX0sY29uc3VtZTpmdW5jdGlvbihhKXt0aGlzLmV4cGVjdChhKXx8dGhpcy50aHJvd0Vycm9yKFwiaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFtcIithK1wiXVwiLHRoaXMucGVlaygpKX0sdW5hcnlGbjpmdW5jdGlvbihhLGMpe3JldHVybiBFKGZ1bmN0aW9uKGQsZSl7cmV0dXJuIGEoZCxlLGMpfSx7Y29uc3RhbnQ6Yy5jb25zdGFudH0pfSx0ZXJuYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBFKGZ1bmN0aW9uKGUsZil7cmV0dXJuIGEoZSxmKT9jKGUsZik6ZChlLGYpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmYy5jb25zdGFudCYmZC5jb25zdGFudH0pfSxiaW5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIEUoZnVuY3Rpb24oZSxmKXtyZXR1cm4gYyhlLFxuZixhLGQpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmZC5jb25zdGFudH0pfSxzdGF0ZW1lbnRzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdOzspaWYoMDx0aGlzLnRva2Vucy5sZW5ndGgmJiF0aGlzLnBlZWsoXCJ9XCIsXCIpXCIsXCI7XCIsXCJdXCIpJiZhLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKSwhdGhpcy5leHBlY3QoXCI7XCIpKXJldHVybiAxPT09YS5sZW5ndGg/YVswXTpmdW5jdGlvbihjLGQpe2Zvcih2YXIgZSxmPTA7ZjxhLmxlbmd0aDtmKyspe3ZhciBnPWFbZl07ZyYmKGU9ZyhjLGQpKX1yZXR1cm4gZX19LGZpbHRlckNoYWluOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwcmVzc2lvbigpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifFwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZmlsdGVyKCkpO2Vsc2UgcmV0dXJuIGF9LGZpbHRlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cGVjdCgpLGM9dGhpcy4kZmlsdGVyKGEudGV4dCksZD1bXTs7KWlmKGE9dGhpcy5leHBlY3QoXCI6XCIpKWQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG5lbHNle3ZhciBlPWZ1bmN0aW9uKGEsZSxoKXtoPVtoXTtmb3IodmFyIGs9MDtrPGQubGVuZ3RoO2srKyloLnB1c2goZFtrXShhLGUpKTtyZXR1cm4gYy5hcHBseShhLGgpfTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZX19fSxleHByZXNzaW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXNzaWdubWVudCgpfSxhc3NpZ25tZW50OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50ZXJuYXJ5KCksYyxkO3JldHVybihkPXRoaXMuZXhwZWN0KFwiPVwiKSk/KGEuYXNzaWdufHx0aGlzLnRocm93RXJyb3IoXCJpbXBsaWVzIGFzc2lnbm1lbnQgYnV0IFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKDAsZC5pbmRleCkrXCJdIGNhbiBub3QgYmUgYXNzaWduZWQgdG9cIixkKSxjPXRoaXMudGVybmFyeSgpLGZ1bmN0aW9uKGQsZil7cmV0dXJuIGEuYXNzaWduKGQsYyhkLGYpLGYpfSk6YX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO2lmKHRoaXMuZXhwZWN0KFwiP1wiKSl7Yz10aGlzLmFzc2lnbm1lbnQoKTtcbmlmKGQ9dGhpcy5leHBlY3QoXCI6XCIpKXJldHVybiB0aGlzLnRlcm5hcnlGbihhLGMsdGhpcy5hc3NpZ25tZW50KCkpO3RoaXMudGhyb3dFcnJvcihcImV4cGVjdGVkIDpcIixkKX1lbHNlIHJldHVybiBhfSxsb2dpY2FsT1I6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5sb2dpY2FsQU5EKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8fFwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpKTtlbHNlIHJldHVybiBhfSxsb2dpY2FsQU5EOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lcXVhbGl0eSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIiYmXCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO3JldHVybiBhfSxlcXVhbGl0eTpmdW5jdGlvbigpe3ZhciBhPXRoaXMucmVsYXRpb25hbCgpLGM7aWYoYz10aGlzLmV4cGVjdChcIj09XCIsXCIhPVwiLFwiPT09XCIsXCIhPT1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmVxdWFsaXR5KCkpO3JldHVybiBhfSxcbnJlbGF0aW9uYWw6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmFkZGl0aXZlKCksYztpZihjPXRoaXMuZXhwZWN0KFwiPFwiLFwiPlwiLFwiPD1cIixcIj49XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5yZWxhdGlvbmFsKCkpO3JldHVybiBhfSxhZGRpdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLm11bHRpcGxpY2F0aXZlKCksYztjPXRoaXMuZXhwZWN0KFwiK1wiLFwiLVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLm11bHRpcGxpY2F0aXZlKCkpO3JldHVybiBhfSxtdWx0aXBsaWNhdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnVuYXJ5KCksYztjPXRoaXMuZXhwZWN0KFwiKlwiLFwiL1wiLFwiJVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnVuYXJ5KCkpO3JldHVybiBhfSx1bmFyeTpmdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmV4cGVjdChcIitcIik/dGhpcy5wcmltYXJ5KCk6KGE9dGhpcy5leHBlY3QoXCItXCIpKT90aGlzLmJpbmFyeUZuKGdiLlpFUk8sYS5mbixcbnRoaXMudW5hcnkoKSk6KGE9dGhpcy5leHBlY3QoXCIhXCIpKT90aGlzLnVuYXJ5Rm4oYS5mbix0aGlzLnVuYXJ5KCkpOnRoaXMucHJpbWFyeSgpfSxmaWVsZEFjY2VzczpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHBlY3QoKS50ZXh0LGU9RGMoZCx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtyZXR1cm4gRShmdW5jdGlvbihjLGQsaCl7cmV0dXJuIGUoaHx8YShjLGQpKX0se2Fzc2lnbjpmdW5jdGlvbihlLGcsaCl7KGg9YShlLGgpKXx8YS5hc3NpZ24oZSxoPXt9KTtyZXR1cm4gdWIoaCxkLGcsYy50ZXh0LGMub3B0aW9ucyl9fSl9LG9iamVjdEluZGV4OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cHJlc3Npb24oKTt0aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiBFKGZ1bmN0aW9uKGUsZil7dmFyIGc9YShlLGYpLGg9ZChlLGYpLGs7a2EoaCxjLnRleHQpO2lmKCFnKXJldHVybiB1OyhnPW1hKGdbaF0sYy50ZXh0KSkmJihnLnRoZW4mJmMub3B0aW9ucy51bndyYXBQcm9taXNlcykmJlxuKGs9ZyxcIiQkdlwiaW4gZ3x8KGsuJCR2PXUsay50aGVuKGZ1bmN0aW9uKGEpe2suJCR2PWF9KSksZz1nLiQkdik7cmV0dXJuIGd9LHthc3NpZ246ZnVuY3Rpb24oZSxmLGcpe3ZhciBoPWthKGQoZSxnKSxjLnRleHQpOyhnPW1hKGEoZSxnKSxjLnRleHQpKXx8YS5hc3NpZ24oZSxnPXt9KTtyZXR1cm4gZ1toXT1mfX0pfSxmdW5jdGlvbkNhbGw6ZnVuY3Rpb24oYSxjKXt2YXIgZD1bXTtpZihcIilcIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG8gZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTt3aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIilcIik7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oZixnKXtmb3IodmFyIGg9W10saz1jP2MoZixnKTpmLG09MDttPGQubGVuZ3RoO20rKyloLnB1c2gobWEoZFttXShmLGcpLGUudGV4dCkpO209YShmLGcsayl8fHY7bWEoayxlLnRleHQpO3ZhciBsPWUudGV4dDtpZihtKXtpZihtLmNvbnN0cnVjdG9yPT09bSl0aHJvdyBsYShcImlzZWNmblwiLFxubCk7aWYobT09PVNlfHxtPT09VGV8fFBjJiZtPT09UGMpdGhyb3cgbGEoXCJpc2VjZmZcIixsKTt9aD1tLmFwcGx5P20uYXBwbHkoayxoKTptKGhbMF0saFsxXSxoWzJdLGhbM10saFs0XSk7cmV0dXJuIG1hKGgsZS50ZXh0KX19LGFycmF5RGVjbGFyYXRpb246ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwiXVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3tpZih0aGlzLnBlZWsoXCJdXCIpKWJyZWFrO3ZhciBkPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaChkKTtkLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiBFKGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBnPVtdLGg9MDtoPGEubGVuZ3RoO2grKylnLnB1c2goYVtoXShjLGQpKTtyZXR1cm4gZ30se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfSxvYmplY3Q6ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwifVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3tpZih0aGlzLnBlZWsoXCJ9XCIpKWJyZWFrO1xudmFyIGQ9dGhpcy5leHBlY3QoKSxkPWQuc3RyaW5nfHxkLnRleHQ7dGhpcy5jb25zdW1lKFwiOlwiKTt2YXIgZT10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goe2tleTpkLHZhbHVlOmV9KTtlLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJ9XCIpO3JldHVybiBFKGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlPXt9LGs9MDtrPGEubGVuZ3RoO2srKyl7dmFyIG09YVtrXTtlW20ua2V5XT1tLnZhbHVlKGMsZCl9cmV0dXJuIGV9LHtsaXRlcmFsOiEwLGNvbnN0YW50OmN9KX19O3ZhciBDZT17fSxCZT17fSx6YT16KFwiJHNjZVwiKSxmYT17SFRNTDpcImh0bWxcIixDU1M6XCJjc3NcIixVUkw6XCJ1cmxcIixSRVNPVVJDRV9VUkw6XCJyZXNvdXJjZVVybFwiLEpTOlwianNcIn0sWT1YLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLEdjPXhhKFcubG9jYXRpb24uaHJlZiwhMCk7a2MuJGluamVjdD1bXCIkcHJvdmlkZVwiXTtIYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07SmMuJGluamVjdD1bXCIkbG9jYWxlXCJdO1xudmFyIE1jPVwiLlwiLE1lPXt5eXl5OlooXCJGdWxsWWVhclwiLDQpLHl5OlooXCJGdWxsWWVhclwiLDIsMCwhMCkseTpaKFwiRnVsbFllYXJcIiwxKSxNTU1NOnZiKFwiTW9udGhcIiksTU1NOnZiKFwiTW9udGhcIiwhMCksTU06WihcIk1vbnRoXCIsMiwxKSxNOlooXCJNb250aFwiLDEsMSksZGQ6WihcIkRhdGVcIiwyKSxkOlooXCJEYXRlXCIsMSksSEg6WihcIkhvdXJzXCIsMiksSDpaKFwiSG91cnNcIiwxKSxoaDpaKFwiSG91cnNcIiwyLC0xMiksaDpaKFwiSG91cnNcIiwxLC0xMiksbW06WihcIk1pbnV0ZXNcIiwyKSxtOlooXCJNaW51dGVzXCIsMSksc3M6WihcIlNlY29uZHNcIiwyKSxzOlooXCJTZWNvbmRzXCIsMSksc3NzOlooXCJNaWxsaXNlY29uZHNcIiwzKSxFRUVFOnZiKFwiRGF5XCIpLEVFRTp2YihcIkRheVwiLCEwKSxhOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIDEyPmEuZ2V0SG91cnMoKT9jLkFNUE1TWzBdOmMuQU1QTVNbMV19LFo6ZnVuY3Rpb24oYSl7YT0tMSphLmdldFRpbWV6b25lT2Zmc2V0KCk7cmV0dXJuIGE9KDA8PWE/XCIrXCI6XCJcIikrKFZiKE1hdGhbMDxcbmE/XCJmbG9vclwiOlwiY2VpbFwiXShhLzYwKSwyKStWYihNYXRoLmFicyhhJTYwKSwyKSl9fSxMZT0vKCg/OlteeU1kSGhtc2FaRSddKyl8KD86Jyg/OlteJ118JycpKicpfCg/OkUrfHkrfE0rfGQrfEgrfGgrfG0rfHMrfGF8WikpKC4qKS8sS2U9L15cXC0/XFxkKyQvO0ljLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgSWU9YWEoeCksSmU9YWEoTGEpO0tjLiRpbmplY3Q9W1wiJHBhcnNlXCJdO3ZhciBjZD1hYSh7cmVzdHJpY3Q6XCJFXCIsY29tcGlsZTpmdW5jdGlvbihhLGMpezg+PVImJihjLmhyZWZ8fGMubmFtZXx8Yy4kc2V0KFwiaHJlZlwiLFwiXCIpLGEuYXBwZW5kKFguY3JlYXRlQ29tbWVudChcIklFIGZpeFwiKSkpO2lmKCFjLmhyZWYmJiFjLnhsaW5rSHJlZiYmIWMubmFtZSlyZXR1cm4gZnVuY3Rpb24oYSxjKXt2YXIgZj1cIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1CYS5jYWxsKGMucHJvcChcImhyZWZcIikpP1wieGxpbms6aHJlZlwiOlwiaHJlZlwiO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2MuYXR0cihmKXx8XG5hLnByZXZlbnREZWZhdWx0KCl9KX19fSksRmI9e307cihyYixmdW5jdGlvbihhLGMpe2lmKFwibXVsdGlwbGVcIiE9YSl7dmFyIGQ9cWEoXCJuZy1cIitjKTtGYltkXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGYsZyl7YS4kd2F0Y2goZ1tkXSxmdW5jdGlvbihhKXtnLiRzZXQoYywhIWEpfSl9fX19fSk7cihbXCJzcmNcIixcInNyY3NldFwiLFwiaHJlZlwiXSxmdW5jdGlvbihhKXt2YXIgYz1xYShcIm5nLVwiK2EpO0ZiW2NdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5Ojk5LGxpbms6ZnVuY3Rpb24oZCxlLGYpe3ZhciBnPWEsaD1hO1wiaHJlZlwiPT09YSYmXCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09QmEuY2FsbChlLnByb3AoXCJocmVmXCIpKSYmKGg9XCJ4bGlua0hyZWZcIixmLiRhdHRyW2hdPVwieGxpbms6aHJlZlwiLGc9bnVsbCk7Zi4kb2JzZXJ2ZShjLGZ1bmN0aW9uKGMpe2M/KGYuJHNldChoLGMpLFImJmcmJmUucHJvcChnLGZbaF0pKTpcImhyZWZcIj09PVxuYSYmZi4kc2V0KGgsbnVsbCl9KX19fX0pO3ZhciB5Yj17JGFkZENvbnRyb2w6diwkcmVtb3ZlQ29udHJvbDp2LCRzZXRWYWxpZGl0eTp2LCRzZXREaXJ0eTp2LCRzZXRQcmlzdGluZTp2fTtOYy4kaW5qZWN0PVtcIiRlbGVtZW50XCIsXCIkYXR0cnNcIixcIiRzY29wZVwiLFwiJGFuaW1hdGVcIl07dmFyIFFjPWZ1bmN0aW9uKGEpe3JldHVybltcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYyl7cmV0dXJue25hbWU6XCJmb3JtXCIscmVzdHJpY3Q6YT9cIkVBQ1wiOlwiRVwiLGNvbnRyb2xsZXI6TmMsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYSxlLGYsZyl7aWYoIWYuYWN0aW9uKXt2YXIgaD1mdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExfTtzYihlWzBdLFwic3VibWl0XCIsaCk7ZS5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtjKGZ1bmN0aW9uKCl7YmIoZVswXSxcInN1Ym1pdFwiLGgpfSwwLCExKX0pfXZhciBrPWUucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIiksXG5tPWYubmFtZXx8Zi5uZ0Zvcm07bSYmdWIoYSxtLGcsbSk7aWYoayllLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2suJHJlbW92ZUNvbnRyb2woZyk7bSYmdWIoYSxtLHUsbSk7RShnLHliKX0pfX19fX1dfSxkZD1RYygpLHFkPVFjKCEwKSxWZT0vXihmdHB8aHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8kLyxXZT0vXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaSxYZT0vXlxccyooXFwtfFxcKyk/KFxcZCt8KFxcZCooXFwuXFxkKikpKVxccyokLyxSYz17dGV4dDpBYixudW1iZXI6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe0FiKGEsYyxkLGUsZixnKTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7dmFyIGM9ZS4kaXNFbXB0eShhKTtpZihjfHxYZS50ZXN0KGEpKXJldHVybiBlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLFxuITApLFwiXCI9PT1hP251bGw6Yz9hOnBhcnNlRmxvYXQoYSk7ZS4kc2V0VmFsaWRpdHkoXCJudW1iZXJcIiwhMSk7cmV0dXJuIHV9KTtOZShlLFwibnVtYmVyXCIsWWUsbnVsbCxlLiQkdmFsaWRpdHlTdGF0ZSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBlLiRpc0VtcHR5KGEpP1wiXCI6XCJcIithfSk7ZC5taW4mJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5taW4pO3JldHVybiB1YShlLFwibWluXCIsZS4kaXNFbXB0eShhKXx8YT49YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZC5tYXgmJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5tYXgpO3JldHVybiB1YShlLFwibWF4XCIsZS4kaXNFbXB0eShhKXx8YTw9YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiB1YShlLFwibnVtYmVyXCIsZS4kaXNFbXB0eShhKXx8XG5qYihhKSxhKX0pfSx1cmw6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe0FiKGEsYyxkLGUsZixnKTthPWZ1bmN0aW9uKGEpe3JldHVybiB1YShlLFwidXJsXCIsZS4kaXNFbXB0eShhKXx8VmUudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO2UuJHBhcnNlcnMucHVzaChhKX0sZW1haWw6ZnVuY3Rpb24oYSxjLGQsZSxmLGcpe0FiKGEsYyxkLGUsZixnKTthPWZ1bmN0aW9uKGEpe3JldHVybiB1YShlLFwiZW1haWxcIixlLiRpc0VtcHR5KGEpfHxXZS50ZXN0KGEpLGEpfTtlLiRmb3JtYXR0ZXJzLnB1c2goYSk7ZS4kcGFyc2Vycy5wdXNoKGEpfSxyYWRpbzpmdW5jdGlvbihhLGMsZCxlKXtGKGQubmFtZSkmJmMuYXR0cihcIm5hbWVcIixpYigpKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2NbMF0uY2hlY2tlZCYmYS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoZC52YWx1ZSl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1kLnZhbHVlPT1lLiR2aWV3VmFsdWV9O1xuZC4kb2JzZXJ2ZShcInZhbHVlXCIsZS4kcmVuZGVyKX0sY2hlY2tib3g6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGY9ZC5uZ1RydWVWYWx1ZSxnPWQubmdGYWxzZVZhbHVlO0coZil8fChmPSEwKTtHKGcpfHwoZz0hMSk7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShjWzBdLmNoZWNrZWQpfSl9KTtlLiRyZW5kZXI9ZnVuY3Rpb24oKXtjWzBdLmNoZWNrZWQ9ZS4kdmlld1ZhbHVlfTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBhIT09Zn07ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Zn0pO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT9mOmd9KX0saGlkZGVuOnYsYnV0dG9uOnYsc3VibWl0OnYscmVzZXQ6dixmaWxlOnZ9LFllPVtcImJhZElucHV0XCJdLGhjPVtcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLFxubGluazpmdW5jdGlvbihkLGUsZixnKXtnJiYoUmNbeChmLnR5cGUpXXx8UmMudGV4dCkoZCxlLGYsZyxjLGEpfX19XSx3Yj1cIm5nLXZhbGlkXCIseGI9XCJuZy1pbnZhbGlkXCIsUmE9XCJuZy1wcmlzdGluZVwiLHpiPVwibmctZGlydHlcIixaZT1bXCIkc2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkYXR0cnNcIixcIiRlbGVtZW50XCIsXCIkcGFyc2VcIixcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSxjLGQsZSxmLGcpe2Z1bmN0aW9uIGgoYSxjKXtjPWM/XCItXCIrbmIoYyxcIi1cIik6XCJcIjtnLnJlbW92ZUNsYXNzKGUsKGE/eGI6d2IpK2MpO2cuYWRkQ2xhc3MoZSwoYT93Yjp4YikrYyl9dGhpcy4kbW9kZWxWYWx1ZT10aGlzLiR2aWV3VmFsdWU9TnVtYmVyLk5hTjt0aGlzLiRwYXJzZXJzPVtdO3RoaXMuJGZvcm1hdHRlcnM9W107dGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycz1bXTt0aGlzLiRwcmlzdGluZT0hMDt0aGlzLiRkaXJ0eT0hMTt0aGlzLiR2YWxpZD0hMDt0aGlzLiRpbnZhbGlkPSExO3RoaXMuJG5hbWU9XG5kLm5hbWU7dmFyIGs9ZihkLm5nTW9kZWwpLG09ay5hc3NpZ247aWYoIW0pdGhyb3cgeihcIm5nTW9kZWxcIikoXCJub25hc3NpZ25cIixkLm5nTW9kZWwsaWEoZSkpO3RoaXMuJHJlbmRlcj12O3RoaXMuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSl8fFwiXCI9PT1hfHxudWxsPT09YXx8YSE9PWF9O3ZhciBsPWUuaW5oZXJpdGVkRGF0YShcIiRmb3JtQ29udHJvbGxlclwiKXx8eWIsbj0wLHE9dGhpcy4kZXJyb3I9e307ZS5hZGRDbGFzcyhSYSk7aCghMCk7dGhpcy4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxjKXtxW2FdIT09IWMmJihjPyhxW2FdJiZuLS0sbnx8KGgoITApLHRoaXMuJHZhbGlkPSEwLHRoaXMuJGludmFsaWQ9ITEpKTooaCghMSksdGhpcy4kaW52YWxpZD0hMCx0aGlzLiR2YWxpZD0hMSxuKyspLHFbYV09IWMsaChjLGEpLGwuJHNldFZhbGlkaXR5KGEsYyx0aGlzKSl9O3RoaXMuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7dGhpcy4kZGlydHk9ITE7dGhpcy4kcHJpc3RpbmU9XG4hMDtnLnJlbW92ZUNsYXNzKGUsemIpO2cuYWRkQ2xhc3MoZSxSYSl9O3RoaXMuJHNldFZpZXdWYWx1ZT1mdW5jdGlvbihkKXt0aGlzLiR2aWV3VmFsdWU9ZDt0aGlzLiRwcmlzdGluZSYmKHRoaXMuJGRpcnR5PSEwLHRoaXMuJHByaXN0aW5lPSExLGcucmVtb3ZlQ2xhc3MoZSxSYSksZy5hZGRDbGFzcyhlLHpiKSxsLiRzZXREaXJ0eSgpKTtyKHRoaXMuJHBhcnNlcnMsZnVuY3Rpb24oYSl7ZD1hKGQpfSk7dGhpcy4kbW9kZWxWYWx1ZSE9PWQmJih0aGlzLiRtb2RlbFZhbHVlPWQsbShhLGQpLHIodGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycyxmdW5jdGlvbihhKXt0cnl7YSgpfWNhdGNoKGQpe2MoZCl9fSkpfTt2YXIgcD10aGlzO2EuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9ayhhKTtpZihwLiRtb2RlbFZhbHVlIT09Yyl7dmFyIGQ9cC4kZm9ybWF0dGVycyxlPWQubGVuZ3RoO2ZvcihwLiRtb2RlbFZhbHVlPWM7ZS0tOyljPWRbZV0oYyk7cC4kdmlld1ZhbHVlIT09YyYmKHAuJHZpZXdWYWx1ZT1cbmMscC4kcmVuZGVyKCkpfXJldHVybiBjfSl9XSxGZD1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOltcIm5nTW9kZWxcIixcIl4/Zm9ybVwiXSxjb250cm9sbGVyOlplLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGY9ZVswXSxnPWVbMV18fHliO2cuJGFkZENvbnRyb2woZik7YS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Zy4kcmVtb3ZlQ29udHJvbChmKX0pfX19LEhkPWFhKHtyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7ZS4kdmlld0NoYW5nZUxpc3RlbmVycy5wdXNoKGZ1bmN0aW9uKCl7YS4kZXZhbChkLm5nQ2hhbmdlKX0pfX0pLGljPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7ZC5yZXF1aXJlZD0hMDt2YXIgZj1mdW5jdGlvbihhKXtpZihkLnJlcXVpcmVkJiZlLiRpc0VtcHR5KGEpKWUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMSk7ZWxzZSByZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLFxuITApLGF9O2UuJGZvcm1hdHRlcnMucHVzaChmKTtlLiRwYXJzZXJzLnVuc2hpZnQoZik7ZC4kb2JzZXJ2ZShcInJlcXVpcmVkXCIsZnVuY3Rpb24oKXtmKGUuJHZpZXdWYWx1ZSl9KX19fX0sR2Q9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmPShhPS9cXC8oLiopXFwvLy5leGVjKGQubmdMaXN0KSkmJlJlZ0V4cChhWzFdKXx8ZC5uZ0xpc3R8fFwiLFwiO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtpZighRihhKSl7dmFyIGM9W107YSYmcihhLnNwbGl0KGYpLGZ1bmN0aW9uKGEpe2EmJmMucHVzaCgkKGEpKX0pO3JldHVybiBjfX0pO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gTChhKT9hLmpvaW4oXCIsIFwiKTp1fSk7ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4hYXx8IWEubGVuZ3RofX19fSwkZT0vXih0cnVlfGZhbHNlfFxcZCspJC8sSWQ9ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6MTAwLFxuY29tcGlsZTpmdW5jdGlvbihhLGMpe3JldHVybiAkZS50ZXN0KGMubmdWYWx1ZSk/ZnVuY3Rpb24oYSxjLGYpe2YuJHNldChcInZhbHVlXCIsYS4kZXZhbChmLm5nVmFsdWUpKX06ZnVuY3Rpb24oYSxjLGYpe2EuJHdhdGNoKGYubmdWYWx1ZSxmdW5jdGlvbihhKXtmLiRzZXQoXCJ2YWx1ZVwiLGEpfSl9fX19LGlkPUFhKHtjb21waWxlOmZ1bmN0aW9uKGEpe2EuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpO3JldHVybiBmdW5jdGlvbihhLGQsZSl7ZC5kYXRhKFwiJGJpbmRpbmdcIixlLm5nQmluZCk7YS4kd2F0Y2goZS5uZ0JpbmQsZnVuY3Rpb24oYSl7ZC50ZXh0KGE9PXU/XCJcIjphKX0pfX19KSxrZD1bXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2M9YShkLmF0dHIoZS4kYXR0ci5uZ0JpbmRUZW1wbGF0ZSkpO2QuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGMpO2UuJG9ic2VydmUoXCJuZ0JpbmRUZW1wbGF0ZVwiLGZ1bmN0aW9uKGEpe2QudGV4dChhKX0pfX1dLFxuamQ9W1wiJHNjZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm57Y29tcGlsZTpmdW5jdGlvbihkKXtkLmFkZENsYXNzKFwibmctYmluZGluZ1wiKTtyZXR1cm4gZnVuY3Rpb24oZCxmLGcpe2YuZGF0YShcIiRiaW5kaW5nXCIsZy5uZ0JpbmRIdG1sKTt2YXIgaD1jKGcubmdCaW5kSHRtbCk7ZC4kd2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4oaChkKXx8XCJcIikudG9TdHJpbmcoKX0sZnVuY3Rpb24oYyl7Zi5odG1sKGEuZ2V0VHJ1c3RlZEh0bWwoaChkKSl8fFwiXCIpfSl9fX19XSxsZD1XYihcIlwiLCEwKSxuZD1XYihcIk9kZFwiLDApLG1kPVdiKFwiRXZlblwiLDEpLG9kPUFhKHtjb21waWxlOmZ1bmN0aW9uKGEsYyl7Yy4kc2V0KFwibmdDbG9ha1wiLHUpO2EucmVtb3ZlQ2xhc3MoXCJuZy1jbG9ha1wiKX19KSxwZD1bZnVuY3Rpb24oKXtyZXR1cm57c2NvcGU6ITAsY29udHJvbGxlcjpcIkBcIixwcmlvcml0eTo1MDB9fV0samM9e30sYWY9e2JsdXI6ITAsZm9jdXM6ITB9O3IoXCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBrZXlkb3duIGtleXVwIGtleXByZXNzIHN1Ym1pdCBmb2N1cyBibHVyIGNvcHkgY3V0IHBhc3RlXCIuc3BsaXQoXCIgXCIpLFxuZnVuY3Rpb24oYSl7dmFyIGM9cWEoXCJuZy1cIithKTtqY1tjXT1bXCIkcGFyc2VcIixcIiRyb290U2NvcGVcIixmdW5jdGlvbihkLGUpe3JldHVybntjb21waWxlOmZ1bmN0aW9uKGYsZyl7dmFyIGg9ZChnW2NdLCEwKTtyZXR1cm4gZnVuY3Rpb24oYyxkKXtkLm9uKGEsZnVuY3Rpb24oZCl7dmFyIGY9ZnVuY3Rpb24oKXtoKGMseyRldmVudDpkfSl9O2FmW2FdJiZlLiQkcGhhc2U/Yy4kZXZhbEFzeW5jKGYpOmMuJGFwcGx5KGYpfSl9fX19XX0pO3ZhciBzZD1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjYwMCx0ZXJtaW5hbDohMCxyZXN0cmljdDpcIkFcIiwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlLGYsZyl7dmFyIGgsayxtO2MuJHdhdGNoKGUubmdJZixmdW5jdGlvbihmKXtXYShmKT9rfHwoaz1jLiRuZXcoKSxnKGssZnVuY3Rpb24oYyl7Y1tjLmxlbmd0aCsrXT1YLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nSWY6IFwiK2UubmdJZitcblwiIFwiKTtoPXtjbG9uZTpjfTthLmVudGVyKGMsZC5wYXJlbnQoKSxkKX0pKToobSYmKG0ucmVtb3ZlKCksbT1udWxsKSxrJiYoay4kZGVzdHJveSgpLGs9bnVsbCksaCYmKG09RWIoaC5jbG9uZSksYS5sZWF2ZShtLGZ1bmN0aW9uKCl7bT1udWxsfSksaD1udWxsKSl9KX19fV0sdGQ9W1wiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkYW5jaG9yU2Nyb2xsXCIsXCIkYW5pbWF0ZVwiLFwiJHNjZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZil7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6NDAwLHRlcm1pbmFsOiEwLHRyYW5zY2x1ZGU6XCJlbGVtZW50XCIsY29udHJvbGxlcjpYYS5ub29wLGNvbXBpbGU6ZnVuY3Rpb24oZyxoKXt2YXIgaz1oLm5nSW5jbHVkZXx8aC5zcmMsbT1oLm9ubG9hZHx8XCJcIixsPWguYXV0b3Njcm9sbDtyZXR1cm4gZnVuY3Rpb24oZyxoLHAscixKKXt2YXIgdz0wLHQseSx1LEI9ZnVuY3Rpb24oKXt5JiYoeS5yZW1vdmUoKSx5PW51bGwpO3QmJih0LiRkZXN0cm95KCksdD1udWxsKTtcbnUmJihlLmxlYXZlKHUsZnVuY3Rpb24oKXt5PW51bGx9KSx5PXUsdT1udWxsKX07Zy4kd2F0Y2goZi5wYXJzZUFzUmVzb3VyY2VVcmwoayksZnVuY3Rpb24oZil7dmFyIGs9ZnVuY3Rpb24oKXshRChsKXx8bCYmIWcuJGV2YWwobCl8fGQoKX0scD0rK3c7Zj8oYS5nZXQoZix7Y2FjaGU6Y30pLnN1Y2Nlc3MoZnVuY3Rpb24oYSl7aWYocD09PXcpe3ZhciBjPWcuJG5ldygpO3IudGVtcGxhdGU9YTthPUooYyxmdW5jdGlvbihhKXtCKCk7ZS5lbnRlcihhLG51bGwsaCxrKX0pO3Q9Yzt1PWE7dC4kZW1pdChcIiRpbmNsdWRlQ29udGVudExvYWRlZFwiKTtnLiRldmFsKG0pfX0pLmVycm9yKGZ1bmN0aW9uKCl7cD09PXcmJkIoKX0pLGcuJGVtaXQoXCIkaW5jbHVkZUNvbnRlbnRSZXF1ZXN0ZWRcIikpOihCKCksci50ZW1wbGF0ZT1udWxsKX0pfX19fV0sSmQ9W1wiJGNvbXBpbGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTotNDAwLHJlcXVpcmU6XCJuZ0luY2x1ZGVcIixcbmxpbms6ZnVuY3Rpb24oYyxkLGUsZil7ZC5odG1sKGYudGVtcGxhdGUpO2EoZC5jb250ZW50cygpKShjKX19fV0sdWQ9QWEoe3ByaW9yaXR5OjQ1MCxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGMsZCl7YS4kZXZhbChkLm5nSW5pdCl9fX19KSx2ZD1BYSh7dGVybWluYWw6ITAscHJpb3JpdHk6MUUzfSksd2Q9W1wiJGxvY2FsZVwiLFwiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSxjKXt2YXIgZD0ve30vZztyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLGxpbms6ZnVuY3Rpb24oZSxmLGcpe3ZhciBoPWcuY291bnQsaz1nLiRhdHRyLndoZW4mJmYuYXR0cihnLiRhdHRyLndoZW4pLG09Zy5vZmZzZXR8fDAsbD1lLiRldmFsKGspfHx7fSxuPXt9LHE9Yy5zdGFydFN5bWJvbCgpLHA9Yy5lbmRTeW1ib2woKSxzPS9ed2hlbihNaW51cyk/KC4rKSQvO3IoZyxmdW5jdGlvbihhLGMpe3MudGVzdChjKSYmKGxbeChjLnJlcGxhY2UoXCJ3aGVuXCIsXCJcIikucmVwbGFjZShcIk1pbnVzXCIsXCItXCIpKV09XG5mLmF0dHIoZy4kYXR0cltjXSkpfSk7cihsLGZ1bmN0aW9uKGEsZSl7bltlXT1jKGEucmVwbGFjZShkLHEraCtcIi1cIittK3ApKX0pO2UuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9cGFyc2VGbG9hdChlLiRldmFsKGgpKTtpZihpc05hTihjKSlyZXR1cm5cIlwiO2MgaW4gbHx8KGM9YS5wbHVyYWxDYXQoYy1tKSk7cmV0dXJuIG5bY10oZSxmLCEwKX0sZnVuY3Rpb24oYSl7Zi50ZXh0KGEpfSl9fX1dLHhkPVtcIiRwYXJzZVwiLFwiJGFuaW1hdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPXooXCJuZ1JlcGVhdFwiKTtyZXR1cm57dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eToxRTMsdGVybWluYWw6ITAsJCR0bGI6ITAsbGluazpmdW5jdGlvbihlLGYsZyxoLGspe3ZhciBtPWcubmdSZXBlYXQsbD1tLm1hdGNoKC9eXFxzKihbXFxzXFxTXSs/KVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMqJC8pLG4scSxwLHMsdSx3LHQ9eyRpZDpOYX07aWYoIWwpdGhyb3cgZChcImlleHBcIixcbm0pO2c9bFsxXTtoPWxbMl07KGw9bFszXSk/KG49YShsKSxxPWZ1bmN0aW9uKGEsYyxkKXt3JiYodFt3XT1hKTt0W3VdPWM7dC4kaW5kZXg9ZDtyZXR1cm4gbihlLHQpfSk6KHA9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTmEoYyl9LHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTtsPWcubWF0Y2goL14oPzooW1xcJFxcd10rKXxcXCgoW1xcJFxcd10rKVxccyosXFxzKihbXFwkXFx3XSspXFwpKSQvKTtpZighbCl0aHJvdyBkKFwiaWlkZXhwXCIsZyk7dT1sWzNdfHxsWzFdO3c9bFsyXTt2YXIgeT17fTtlLiR3YXRjaENvbGxlY3Rpb24oaCxmdW5jdGlvbihhKXt2YXIgZyxoLGw9ZlswXSxuLHQ9e30sRCxDLEkseCxHLHYseixGPVtdO2lmKFNhKGEpKXY9YSxHPXF8fHA7ZWxzZXtHPXF8fHM7dj1bXTtmb3IoSSBpbiBhKWEuaGFzT3duUHJvcGVydHkoSSkmJlwiJFwiIT1JLmNoYXJBdCgwKSYmdi5wdXNoKEkpO3Yuc29ydCgpfUQ9di5sZW5ndGg7aD1GLmxlbmd0aD12Lmxlbmd0aDtmb3IoZz0wO2c8aDtnKyspaWYoST1hPT09XG52P2c6dltnXSx4PWFbSV0sbj1HKEkseCxnKSxFYShuLFwiYHRyYWNrIGJ5YCBpZFwiKSx5Lmhhc093blByb3BlcnR5KG4pKXo9eVtuXSxkZWxldGUgeVtuXSx0W25dPXosRltnXT16O2Vsc2V7aWYodC5oYXNPd25Qcm9wZXJ0eShuKSl0aHJvdyByKEYsZnVuY3Rpb24oYSl7YSYmYS5zY29wZSYmKHlbYS5pZF09YSl9KSxkKFwiZHVwZXNcIixtLG4sb2EoeCkpO0ZbZ109e2lkOm59O3Rbbl09ITF9Zm9yKEkgaW4geSl5Lmhhc093blByb3BlcnR5KEkpJiYoej15W0ldLGc9RWIoei5jbG9uZSksYy5sZWF2ZShnKSxyKGcsZnVuY3Rpb24oYSl7YS4kJE5HX1JFTU9WRUQ9ITB9KSx6LnNjb3BlLiRkZXN0cm95KCkpO2c9MDtmb3IoaD12Lmxlbmd0aDtnPGg7ZysrKXtJPWE9PT12P2c6dltnXTt4PWFbSV07ej1GW2ddO0ZbZy0xXSYmKGw9RltnLTFdLmNsb25lW0ZbZy0xXS5jbG9uZS5sZW5ndGgtMV0pO2lmKHouc2NvcGUpe0M9ei5zY29wZTtuPWw7ZG8gbj1uLm5leHRTaWJsaW5nO3doaWxlKG4mJm4uJCROR19SRU1PVkVEKTtcbnouY2xvbmVbMF0hPW4mJmMubW92ZShFYih6LmNsb25lKSxudWxsLEEobCkpO2w9ei5jbG9uZVt6LmNsb25lLmxlbmd0aC0xXX1lbHNlIEM9ZS4kbmV3KCk7Q1t1XT14O3cmJihDW3ddPUkpO0MuJGluZGV4PWc7Qy4kZmlyc3Q9MD09PWc7Qy4kbGFzdD1nPT09RC0xO0MuJG1pZGRsZT0hKEMuJGZpcnN0fHxDLiRsYXN0KTtDLiRvZGQ9IShDLiRldmVuPTA9PT0oZyYxKSk7ei5zY29wZXx8ayhDLGZ1bmN0aW9uKGEpe2FbYS5sZW5ndGgrK109WC5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1JlcGVhdDogXCIrbStcIiBcIik7Yy5lbnRlcihhLG51bGwsQShsKSk7bD1hO3ouc2NvcGU9Qzt6LmNsb25lPWE7dFt6LmlkXT16fSl9eT10fSl9fX1dLHlkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nU2hvdyxmdW5jdGlvbihjKXthW1dhKGMpP1wicmVtb3ZlQ2xhc3NcIjpcImFkZENsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0scmQ9W1wiJGFuaW1hdGVcIixcbmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ0hpZGUsZnVuY3Rpb24oYyl7YVtXYShjKT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHpkPUFhKGZ1bmN0aW9uKGEsYyxkKXthLiR3YXRjaChkLm5nU3R5bGUsZnVuY3Rpb24oYSxkKXtkJiZhIT09ZCYmcihkLGZ1bmN0aW9uKGEsZCl7Yy5jc3MoZCxcIlwiKX0pO2EmJmMuY3NzKGEpfSwhMCl9KSxBZD1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpcIm5nU3dpdGNoXCIsY29udHJvbGxlcjpbXCIkc2NvcGVcIixmdW5jdGlvbigpe3RoaXMuY2FzZXM9e319XSxsaW5rOmZ1bmN0aW9uKGMsZCxlLGYpe3ZhciBnPVtdLGg9W10saz1bXSxtPVtdO2MuJHdhdGNoKGUubmdTd2l0Y2h8fGUub24sZnVuY3Rpb24oZCl7dmFyIG4scTtuPTA7Zm9yKHE9ay5sZW5ndGg7bjxxOysrbilrW25dLnJlbW92ZSgpO249ay5sZW5ndGg9MDtmb3IocT1cbm0ubGVuZ3RoO248cTsrK24pe3ZhciBwPWhbbl07bVtuXS4kZGVzdHJveSgpO2tbbl09cDthLmxlYXZlKHAsZnVuY3Rpb24oKXtrLnNwbGljZShuLDEpfSl9aC5sZW5ndGg9MDttLmxlbmd0aD0wO2lmKGc9Zi5jYXNlc1tcIiFcIitkXXx8Zi5jYXNlc1tcIj9cIl0pYy4kZXZhbChlLmNoYW5nZSkscihnLGZ1bmN0aW9uKGQpe3ZhciBlPWMuJG5ldygpO20ucHVzaChlKTtkLnRyYW5zY2x1ZGUoZSxmdW5jdGlvbihjKXt2YXIgZT1kLmVsZW1lbnQ7aC5wdXNoKGMpO2EuZW50ZXIoYyxlLnBhcmVudCgpLGUpfSl9KX0pfX19XSxCZD1BYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXT1lLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXXx8W107ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl0ucHVzaCh7dHJhbnNjbHVkZTpmLGVsZW1lbnQ6Y30pfX0pLENkPVxuQWEoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZil7ZS5jYXNlc1tcIj9cIl09ZS5jYXNlc1tcIj9cIl18fFtdO2UuY2FzZXNbXCI/XCJdLnB1c2goe3RyYW5zY2x1ZGU6ZixlbGVtZW50OmN9KX19KSxFZD1BYSh7bGluazpmdW5jdGlvbihhLGMsZCxlLGYpe2lmKCFmKXRocm93IHooXCJuZ1RyYW5zY2x1ZGVcIikoXCJvcnBoYW5cIixpYShjKSk7ZihmdW5jdGlvbihhKXtjLmVtcHR5KCk7Yy5hcHBlbmQoYSl9KX19KSxlZD1bXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVcIix0ZXJtaW5hbDohMCxjb21waWxlOmZ1bmN0aW9uKGMsZCl7XCJ0ZXh0L25nLXRlbXBsYXRlXCI9PWQudHlwZSYmYS5wdXQoZC5pZCxjWzBdLnRleHQpfX19XSxiZj16KFwibmdPcHRpb25zXCIpLERkPWFhKHt0ZXJtaW5hbDohMH0pLGZkPVtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3ZhciBkPVxuL15cXHMqKFtcXHNcXFNdKz8pKD86XFxzK2FzXFxzKyhbXFxzXFxTXSs/KSk/KD86XFxzK2dyb3VwXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzK2ZvclxccysoPzooW1xcJFxcd11bXFwkXFx3XSopfCg/OlxcKFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKixcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccypcXCkpKVxccytpblxccysoW1xcc1xcU10rPykoPzpcXHMrdHJhY2tcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT8kLyxlPXskc2V0Vmlld1ZhbHVlOnZ9O3JldHVybntyZXN0cmljdDpcIkVcIixyZXF1aXJlOltcInNlbGVjdFwiLFwiP25nTW9kZWxcIl0sY29udHJvbGxlcjpbXCIkZWxlbWVudFwiLFwiJHNjb3BlXCIsXCIkYXR0cnNcIixmdW5jdGlvbihhLGMsZCl7dmFyIGs9dGhpcyxtPXt9LGw9ZSxuO2suZGF0YWJvdW5kPWQubmdNb2RlbDtrLmluaXQ9ZnVuY3Rpb24oYSxjLGQpe2w9YTtuPWR9O2suYWRkT3B0aW9uPWZ1bmN0aW9uKGMpe0VhKGMsJ1wib3B0aW9uIHZhbHVlXCInKTttW2NdPSEwO2wuJHZpZXdWYWx1ZT09YyYmKGEudmFsKGMpLG4ucGFyZW50KCkmJm4ucmVtb3ZlKCkpfTtcbmsucmVtb3ZlT3B0aW9uPWZ1bmN0aW9uKGEpe3RoaXMuaGFzT3B0aW9uKGEpJiYoZGVsZXRlIG1bYV0sbC4kdmlld1ZhbHVlPT1hJiZ0aGlzLnJlbmRlclVua25vd25PcHRpb24oYSkpfTtrLnJlbmRlclVua25vd25PcHRpb249ZnVuY3Rpb24oYyl7Yz1cIj8gXCIrTmEoYykrXCIgP1wiO24udmFsKGMpO2EucHJlcGVuZChuKTthLnZhbChjKTtuLnByb3AoXCJzZWxlY3RlZFwiLCEwKX07ay5oYXNPcHRpb249ZnVuY3Rpb24oYSl7cmV0dXJuIG0uaGFzT3duUHJvcGVydHkoYSl9O2MuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2sucmVuZGVyVW5rbm93bk9wdGlvbj12fSl9XSxsaW5rOmZ1bmN0aW9uKGUsZyxoLGspe2Z1bmN0aW9uIG0oYSxjLGQsZSl7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9ZC4kdmlld1ZhbHVlO2UuaGFzT3B0aW9uKGEpPyh4LnBhcmVudCgpJiZ4LnJlbW92ZSgpLGMudmFsKGEpLFwiXCI9PT1hJiZ3LnByb3AoXCJzZWxlY3RlZFwiLCEwKSk6RihhKSYmdz9jLnZhbChcIlwiKTplLnJlbmRlclVua25vd25PcHRpb24oYSl9O1xuYy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt4LnBhcmVudCgpJiZ4LnJlbW92ZSgpO2QuJHNldFZpZXdWYWx1ZShjLnZhbCgpKX0pfSl9ZnVuY3Rpb24gbChhLGMsZCl7dmFyIGU7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IGRiKGQuJHZpZXdWYWx1ZSk7cihjLmZpbmQoXCJvcHRpb25cIiksZnVuY3Rpb24oYyl7Yy5zZWxlY3RlZD1EKGEuZ2V0KGMudmFsdWUpKX0pfTthLiR3YXRjaChmdW5jdGlvbigpe0NhKGUsZC4kdmlld1ZhbHVlKXx8KGU9aGEoZC4kdmlld1ZhbHVlKSxkLiRyZW5kZXIoKSl9KTtjLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3ZhciBhPVtdO3IoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO2QuJHNldFZpZXdWYWx1ZShhKX0pfSl9ZnVuY3Rpb24gbihlLGYsZyl7ZnVuY3Rpb24gaCgpe3ZhciBhPXtcIlwiOltdfSxjPVtcIlwiXSxkLGssXG5zLHUsdjtzPWcuJG1vZGVsVmFsdWU7dT1BKGUpfHxbXTt2YXIgRj1uP1hiKHUpOnUsRyxRLEM7UT17fTtDPSExO2lmKHApaWYoaz1nLiRtb2RlbFZhbHVlLHcmJkwoaykpZm9yKEM9bmV3IGRiKFtdKSxkPXt9LHY9MDt2PGsubGVuZ3RoO3YrKylkW21dPWtbdl0sQy5wdXQodyhlLGQpLGtbdl0pO2Vsc2UgQz1uZXcgZGIoayk7dj1DO3ZhciBFLEs7Zm9yKEM9MDtHPUYubGVuZ3RoLEM8RztDKyspe2s9QztpZihuKXtrPUZbQ107aWYoXCIkXCI9PT1rLmNoYXJBdCgwKSljb250aW51ZTtRW25dPWt9UVttXT11W2tdO2Q9cihlLFEpfHxcIlwiOyhrPWFbZF0pfHwoaz1hW2RdPVtdLGMucHVzaChkKSk7cD9kPUQodi5yZW1vdmUodz93KGUsUSk6eChlLFEpKSk6KHc/KGQ9e30sZFttXT1zLGQ9dyhlLGQpPT09dyhlLFEpKTpkPXM9PT14KGUsUSksdj12fHxkKTtFPWwoZSxRKTtFPUQoRSk/RTpcIlwiO2sucHVzaCh7aWQ6dz93KGUsUSk6bj9GW0NdOkMsbGFiZWw6RSxzZWxlY3RlZDpkfSl9cHx8KHp8fG51bGw9PT1cbnM/YVtcIlwiXS51bnNoaWZ0KHtpZDpcIlwiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6IXZ9KTp2fHxhW1wiXCJdLnVuc2hpZnQoe2lkOlwiP1wiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6ITB9KSk7UT0wO2ZvcihGPWMubGVuZ3RoO1E8RjtRKyspe2Q9Y1tRXTtrPWFbZF07Qi5sZW5ndGg8PVE/KHM9e2VsZW1lbnQ6eS5jbG9uZSgpLmF0dHIoXCJsYWJlbFwiLGQpLGxhYmVsOmsubGFiZWx9LHU9W3NdLEIucHVzaCh1KSxmLmFwcGVuZChzLmVsZW1lbnQpKToodT1CW1FdLHM9dVswXSxzLmxhYmVsIT1kJiZzLmVsZW1lbnQuYXR0cihcImxhYmVsXCIscy5sYWJlbD1kKSk7RT1udWxsO0M9MDtmb3IoRz1rLmxlbmd0aDtDPEc7QysrKWQ9a1tDXSwodj11W0MrMV0pPyhFPXYuZWxlbWVudCx2LmxhYmVsIT09ZC5sYWJlbCYmKEUudGV4dCh2LmxhYmVsPWQubGFiZWwpLEUucHJvcChcImxhYmVsXCIsdi5sYWJlbCkpLHYuaWQhPT1kLmlkJiZFLnZhbCh2LmlkPWQuaWQpLEVbMF0uc2VsZWN0ZWQhPT1kLnNlbGVjdGVkJiYoRS5wcm9wKFwic2VsZWN0ZWRcIixcbnYuc2VsZWN0ZWQ9ZC5zZWxlY3RlZCksUiYmRS5wcm9wKFwic2VsZWN0ZWRcIix2LnNlbGVjdGVkKSkpOihcIlwiPT09ZC5pZCYmej9LPXo6KEs9dC5jbG9uZSgpKS52YWwoZC5pZCkucHJvcChcInNlbGVjdGVkXCIsZC5zZWxlY3RlZCkuYXR0cihcInNlbGVjdGVkXCIsZC5zZWxlY3RlZCkucHJvcChcImxhYmVsXCIsZC5sYWJlbCkudGV4dChkLmxhYmVsKSx1LnB1c2goe2VsZW1lbnQ6SyxsYWJlbDpkLmxhYmVsLGlkOmQuaWQsc2VsZWN0ZWQ6ZC5zZWxlY3RlZH0pLHEuYWRkT3B0aW9uKGQubGFiZWwsSyksRT9FLmFmdGVyKEspOnMuZWxlbWVudC5hcHBlbmQoSyksRT1LKTtmb3IoQysrO3UubGVuZ3RoPkM7KWQ9dS5wb3AoKSxxLnJlbW92ZU9wdGlvbihkLmxhYmVsKSxkLmVsZW1lbnQucmVtb3ZlKCl9Zm9yKDtCLmxlbmd0aD5ROylCLnBvcCgpWzBdLmVsZW1lbnQucmVtb3ZlKCl9dmFyIGs7aWYoIShrPXMubWF0Y2goZCkpKXRocm93IGJmKFwiaWV4cFwiLHMsaWEoZikpO3ZhciBsPWMoa1syXXx8a1sxXSksXG5tPWtbNF18fGtbNl0sbj1rWzVdLHI9YyhrWzNdfHxcIlwiKSx4PWMoa1syXT9rWzFdOm0pLEE9YyhrWzddKSx3PWtbOF0/YyhrWzhdKTpudWxsLEI9W1t7ZWxlbWVudDpmLGxhYmVsOlwiXCJ9XV07eiYmKGEoeikoZSksei5yZW1vdmVDbGFzcyhcIm5nLXNjb3BlXCIpLHoucmVtb3ZlKCkpO2YuZW1wdHkoKTtmLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtlLiRhcHBseShmdW5jdGlvbigpe3ZhciBhLGM9QShlKXx8W10sZD17fSxrLGwscSxyLHMsdCx2O2lmKHApZm9yKGw9W10scj0wLHQ9Qi5sZW5ndGg7cjx0O3IrKylmb3IoYT1CW3JdLHE9MSxzPWEubGVuZ3RoO3E8cztxKyspe2lmKChrPWFbcV0uZWxlbWVudClbMF0uc2VsZWN0ZWQpe2s9ay52YWwoKTtuJiYoZFtuXT1rKTtpZih3KWZvcih2PTA7djxjLmxlbmd0aCYmKGRbbV09Y1t2XSx3KGUsZCkhPWspO3YrKyk7ZWxzZSBkW21dPWNba107bC5wdXNoKHgoZSxkKSl9fWVsc2UgaWYoaz1mLnZhbCgpLFwiP1wiPT1rKWw9dTtlbHNlIGlmKFwiXCI9PT1cbmspbD1udWxsO2Vsc2UgaWYodylmb3Iodj0wO3Y8Yy5sZW5ndGg7disrKXtpZihkW21dPWNbdl0sdyhlLGQpPT1rKXtsPXgoZSxkKTticmVha319ZWxzZSBkW21dPWNba10sbiYmKGRbbl09ayksbD14KGUsZCk7Zy4kc2V0Vmlld1ZhbHVlKGwpO2goKX0pfSk7Zy4kcmVuZGVyPWg7ZS4kd2F0Y2hDb2xsZWN0aW9uKEEsaCk7ZS4kd2F0Y2hDb2xsZWN0aW9uKGZ1bmN0aW9uKCl7dmFyIGE9e30sYz1BKGUpO2lmKGMpe2Zvcih2YXIgZD1BcnJheShjLmxlbmd0aCksZj0wLGc9Yy5sZW5ndGg7ZjxnO2YrKylhW21dPWNbZl0sZFtmXT1sKGUsYSk7cmV0dXJuIGR9fSxoKTtwJiZlLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gZy4kbW9kZWxWYWx1ZX0saCl9aWYoa1sxXSl7dmFyIHE9a1swXTtrPWtbMV07dmFyIHA9aC5tdWx0aXBsZSxzPWgubmdPcHRpb25zLHo9ITEsdyx0PUEoWC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSx5PUEoWC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIikpLFxueD10LmNsb25lKCk7aD0wO2Zvcih2YXIgQj1nLmNoaWxkcmVuKCksdj1CLmxlbmd0aDtoPHY7aCsrKWlmKFwiXCI9PT1CW2hdLnZhbHVlKXt3PXo9Qi5lcShoKTticmVha31xLmluaXQoayx6LHgpO3AmJihrLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwwPT09YS5sZW5ndGh9KTtzP24oZSxnLGspOnA/bChlLGcsayk6bShlLGcsayxxKX19fX1dLGhkPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3ZhciBjPXthZGRPcHRpb246dixyZW1vdmVPcHRpb246dn07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGQsZSl7aWYoRihlLnZhbHVlKSl7dmFyIGY9YShkLnRleHQoKSwhMCk7Znx8ZS4kc2V0KFwidmFsdWVcIixkLnRleHQoKSl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXt2YXIgbT1kLnBhcmVudCgpLGw9bS5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIil8fG0ucGFyZW50KCkuZGF0YShcIiRzZWxlY3RDb250cm9sbGVyXCIpO2wmJmwuZGF0YWJvdW5kP1xuZC5wcm9wKFwic2VsZWN0ZWRcIiwhMSk6bD1jO2Y/YS4kd2F0Y2goZixmdW5jdGlvbihhLGMpe2UuJHNldChcInZhbHVlXCIsYSk7YSE9PWMmJmwucmVtb3ZlT3B0aW9uKGMpO2wuYWRkT3B0aW9uKGEpfSk6bC5hZGRPcHRpb24oZS52YWx1ZSk7ZC5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtsLnJlbW92ZU9wdGlvbihlLnZhbHVlKX0pfX19fV0sZ2Q9YWEoe3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwfSk7Vy5hbmd1bGFyLmJvb3RzdHJhcD9jb25zb2xlLmxvZyhcIldBUk5JTkc6IFRyaWVkIHRvIGxvYWQgYW5ndWxhciBtb3JlIHRoYW4gb25jZS5cIik6KChGYT1XLmpRdWVyeSkmJkZhLmZuLm9uPyhBPUZhLEUoRmEuZm4se3Njb3BlOk9hLnNjb3BlLGlzb2xhdGVTY29wZTpPYS5pc29sYXRlU2NvcGUsY29udHJvbGxlcjpPYS5jb250cm9sbGVyLGluamVjdG9yOk9hLmluamVjdG9yLGluaGVyaXRlZERhdGE6T2EuaW5oZXJpdGVkRGF0YX0pLEdiKFwicmVtb3ZlXCIsITAsITAsITEpLEdiKFwiZW1wdHlcIixcbiExLCExLCExKSxHYihcImh0bWxcIiwhMSwhMSwhMCkpOkE9UyxYYS5lbGVtZW50PUEsWmMoWGEpLEEoWCkucmVhZHkoZnVuY3Rpb24oKXtXYyhYLGRjKX0pKX0pKHdpbmRvdyxkb2N1bWVudCk7IXdpbmRvdy5hbmd1bGFyLiQkY3NwKCkmJndpbmRvdy5hbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXCJoZWFkXCIpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5AY2hhcnNldCBcIlVURi04XCI7W25nXFxcXDpjbG9ha10sW25nLWNsb2FrXSxbZGF0YS1uZy1jbG9ha10sW3gtbmctY2xvYWtdLC5uZy1jbG9haywueC1uZy1jbG9haywubmctaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9bmdcXFxcOmZvcm17ZGlzcGxheTpibG9jazt9Lm5nLWFuaW1hdGUtYmxvY2stdHJhbnNpdGlvbnN7dHJhbnNpdGlvbjowcyBhbGwhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjowcyBhbGwhaW1wb3J0YW50O30ubmctaGlkZS1hZGQtYWN0aXZlLC5uZy1oaWRlLXJlbW92ZXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDt9PC9zdHlsZT4nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuZ3VsYXIubWluLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbnZhciBLZWVuUmVxdWVzdHMgPSByZXF1aXJlKCcuL2xpYi9yZXF1ZXN0cycpO1xudmFyIEtlZW5RdWVyeSA9IHJlcXVpcmUoJy4vbGliL3F1ZXJ5Jyk7XG5cbmZ1bmN0aW9uIEtlZW5BcGkoY29uZmlnKSB7XG5cdGlmICghY29uZmlnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlICdjb25maWcnIHBhcmFtZXRlciBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIEpTIG9iamVjdC5cIik7XG5cdH1cblx0aWYgKCFjb25maWcucHJvamVjdElkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlICdjb25maWcnIG9iamVjdCBtdXN0IGNvbnRhaW4gYSAncHJvamVjdElkJy5cIik7XG5cdH1cblxuXHR0aGlzLnByb2plY3RJZCA9IGNvbmZpZy5wcm9qZWN0SWQ7XG5cdHRoaXMud3JpdGVLZXkgPSBjb25maWcud3JpdGVLZXk7XG5cdHRoaXMucmVhZEtleSA9IGNvbmZpZy5yZWFkS2V5O1xuXHR0aGlzLm1hc3RlcktleSA9IGNvbmZpZy5tYXN0ZXJLZXk7XG5cdHRoaXMuYmFzZVVybCA9IGNvbmZpZy5iYXNlVXJsIHx8ICdodHRwczovL2FwaS5rZWVuLmlvLyc7XG5cdHRoaXMuYXBpVmVyc2lvbiA9IGNvbmZpZy5hcGlWZXJzaW9uIHx8ICczLjAnO1xuXG5cdHZhciBiYXNlVXJsID0gdGhpcy5iYXNlVXJsO1xuXHR2YXIgYXBpVmVyc2lvbiA9IHRoaXMuYXBpVmVyc2lvbjtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdC8vIFB1YmxpYyBNZXRob2RzXG5cblx0dGhpcy5wcm9qZWN0cyA9IHtcblx0XHRsaXN0OiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzJywgbnVsbCwgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0dmlldzogZnVuY3Rpb24ocHJvamVjdElkLCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQsIG51bGwsIGNhbGxiYWNrKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5ldmVudHMgPSB7XG5cdFx0bGlzdDogZnVuY3Rpb24ocHJvamVjdElkLCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cycsIG51bGwsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGluc2VydDogZnVuY3Rpb24ocHJvamVjdElkLCBldmVudHMsIGNhbGxiYWNrKSB7XG5cdFx0XHRldmVudHMgPSBldmVudHMgfHwgW107XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0dmFyIGNvbGxlY3Rpb24gPSBldmVudC5jb2xsZWN0aW9uO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGFbY29sbGVjdGlvbl0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRkYXRhW2NvbGxlY3Rpb25dID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGl0ZW0gPSAoZXZlbnQuZGF0YSB8fCB7fSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgZXZlbnQua2VlbiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdGl0ZW0ua2VlbiA9IGV2ZW50LmtlZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVtjb2xsZWN0aW9uXS5wdXNoKGl0ZW0pO1xuXHRcdFx0fSk7XG5cdFx0XHRLZWVuUmVxdWVzdHMucG9zdC5jYWxsKHNlbGYsIHNlbGYud3JpdGVLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzJywgZGF0YSwgY2FsbGJhY2spO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLnByb3BlcnRpZXMgPSB7XG5cdFx0dmlldzogZnVuY3Rpb24ocHJvamVjdElkLCBjb2xsZWN0aW9uLCBwcm9wZXJ0eSwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMvJyArIGNvbGxlY3Rpb24gKyAnL3Byb3BlcnRpZXMvJyArIHByb3BlcnR5LCBudWxsLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmU6IGZ1bmN0aW9uKHByb2plY3RJZCwgY29sbGVjdGlvbiwgcHJvcGVydHksIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZGVsLmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzLycgKyBjb2xsZWN0aW9uICsgJy9wcm9wZXJ0aWVzLycgKyBwcm9wZXJ0eSwgY2FsbGJhY2spO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmNvbGxlY3Rpb25zID0ge1xuXHRcdHZpZXc6IGZ1bmN0aW9uKHByb2plY3RJZCwgY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMvJyArIGNvbGxlY3Rpb24sIG51bGwsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZTogZnVuY3Rpb24ocHJvamVjdElkLCBjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmRlbC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cy8nICsgY29sbGVjdGlvbiwgY2FsbGJhY2spO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmFkZEV2ZW50ID0gZnVuY3Rpb24oZXZlbnRDb2xsZWN0aW9uLCBldmVudCwgY2FsbGJhY2spIHtcblx0XHRpZiAoIXRoaXMud3JpdGVLZXkpIHtcblx0XHRcdHZhciBlcnJvck1lc3NhZ2UgPSBcIllvdSBtdXN0IHNwZWNpZnkgYSBub24tbnVsbCwgbm9uLWVtcHR5ICd3cml0ZUtleScgaW4geW91ciAnY29uZmlnJyBvYmplY3Qgd2hlbiBjYWxsaW5nIGtlZW4uY29uZmlndXJlKCkhXCI7XG5cdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRLZWVuUmVxdWVzdHMucG9zdC5jYWxsKHNlbGYsIHRoaXMud3JpdGVLZXksIFwiL3Byb2plY3RzL1wiICsgdGhpcy5wcm9qZWN0SWQgKyBcIi9ldmVudHMvXCIgKyBldmVudENvbGxlY3Rpb24sIGV2ZW50LCBjYWxsYmFjayk7XG5cdH07XG5cblx0dGhpcy5yZXF1ZXN0ID0gZnVuY3Rpb24obWV0aG9kLCBrZXlUeXBlLCBwYXRoLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG5cdFx0bWV0aG9kID0gdHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycgJiYgbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cdFx0a2V5VHlwZSArPSAnS2V5Jztcblx0XHRjYWxsYmFjayA9IGNhbGxiYWNrIHx8ICh0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nKSAmJiBwYXJhbXM7XG5cblx0XHRpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRwYXRoID0gJy9wcm9qZWN0cy8nICsgdGhpcy5wcm9qZWN0SWQgKyAnLycgKyBwYXRoLnJlcGxhY2UoL15cXC8vLCcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdcXCdwYXRoXFwnIG11c3QgYmUgYSBzdHJpbmcuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhIEtlZW5SZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShtZXRob2QpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBtdXN0IGJlIG9mIHR5cGU6IEdFVC9QT1NUL0RFTCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXlUeXBlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdLZXkgbXVzdCBiZSBvZiB0eXBlOiBtYXN0ZXIvd3JpdGUvcmVhZCcpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpc1trZXlUeXBlXSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBzcGVjaWZ5IGEgbnVuLW51bGwsIG5vbi1lbXB0eSBcXCcnICsga2V5VHlwZSArICdcXCcgaW4geW91ciBjb25maWcgb2JqZWN0LicpO1xuXHRcdH1cblxuXHRcdGlmKG1ldGhvZCA9PT0gJ3Bvc3QnIHx8IG1ldGhvZCA9PT0gJ2dldCcpIHtcblx0XHRcdHJldHVybiBLZWVuUmVxdWVzdHNbbWV0aG9kXS5jYWxsKHNlbGYsIHRoaXNba2V5VHlwZV0sIHBhdGgsIHBhcmFtcywgY2FsbGJhY2spO1xuXHRcdH1cblxuXHRcdEtlZW5SZXF1ZXN0c1ttZXRob2RdLmNhbGwoc2VsZiwgdGhpc1trZXlUeXBlXSwgcGF0aCwgY2FsbGJhY2spO1xuXHR9O1xuXG5cdHRoaXMuYWRkRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzLCBjYWxsYmFjaykge1xuXHRcdGlmICghdGhpcy53cml0ZUtleSkge1xuXHRcdFx0dmFyIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3Qgc3BlY2lmeSBhIG5vbi1udWxsLCBub24tZW1wdHkgJ3dyaXRlS2V5JyBpbiB5b3VyICdjb25maWcnIG9iamVjdCB3aGVuIGNhbGxpbmcga2Vlbi5jb25maWd1cmUoKSFcIjtcblx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdEtlZW5SZXF1ZXN0cy5wb3N0LmNhbGwoc2VsZiwgdGhpcy53cml0ZUtleSwgXCIvcHJvamVjdHMvXCIgKyB0aGlzLnByb2plY3RJZCArIFwiL2V2ZW50c1wiLCBldmVudHMsIGNhbGxiYWNrKTtcblx0fTtcblxuXHR0aGlzLnF1ZXJpZXMgPSB7XG5cdFx0ZXh0cmFjdGlvbjogZnVuY3Rpb24ocHJvamVjdElkLCBjb2xsZWN0aW9uLCBwYXJhbXMsIGNhbGxiYWNrKXtcblx0XHRcdHZhciByZXF1ZXN0UGFyYW1zID0gXy5leHRlbmQoe30sIHBhcmFtcywgeyAnZXZlbnRfY29sbGVjdGlvbic6IGNvbGxlY3Rpb24gfSk7XG5cdFx0XHR2YXIgcGF0aCA9ICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvcXVlcmllcy9leHRyYWN0aW9uJztcblx0XHRcdEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLCBzZWxmLnJlYWRLZXksIHBhdGgsIHJlcXVlc3RQYXJhbXMsIGNhbGxiYWNrKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5ydW4gPSBLZWVuUXVlcnkuY2xpZW50LnJ1bjtcbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuXHRyZXR1cm4gbmV3IEtlZW5BcGkoY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gZW5jcnlwdFNjb3BlZEtleShhcGlLZXksIG9wdGlvbnMpIHtcblx0dmFyIGl2ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcblx0dmFyIGNpcGhlciA9IGNyeXB0by5jcmVhdGVDaXBoZXJpdihcImFlcy0yNTYtY2JjXCIsIGFwaUtleSwgaXYpO1xuXHR2YXIganNvbk9wdGlvbnMgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblx0dmFyIGVuY3J5cHRPdXRwdXQxID0gY2lwaGVyLnVwZGF0ZShqc29uT3B0aW9ucywgXCJ1dGY4XCIsIFwiaGV4XCIpO1xuXHR2YXIgZW5jcnlwdE91dHB1dDIgPSBjaXBoZXIuZmluYWwoXCJoZXhcIik7XG5cdHZhciBpdlBsdXNFbmNyeXB0ZWQgPSBpdi50b1N0cmluZyhcImhleFwiKSArIGVuY3J5cHRPdXRwdXQxICsgZW5jcnlwdE91dHB1dDI7XG5cdHJldHVybiBpdlBsdXNFbmNyeXB0ZWQ7XG59XG5cbmZ1bmN0aW9uIGRlY3J5cHRTY29wZWRLZXkoYXBpS2V5LCBzY29wZWRLZXkpIHtcblx0dmFyIGhleGVkSXYgPSBzY29wZWRLZXkuc3Vic3RyaW5nKDAsIDMyKTtcblx0dmFyIGhleGVkQ2lwaGVyVGV4dCA9IHNjb3BlZEtleS5zdWJzdHJpbmcoMzIsIHNjb3BlZEtleS5sZW5ndGgpO1xuXHR2YXIgaXYgPSBuZXcgQnVmZmVyKGhleGVkSXYsIFwiaGV4XCIpO1xuXHR2YXIgY2lwaGVyVGV4dCA9IG5ldyBCdWZmZXIoaGV4ZWRDaXBoZXJUZXh0LCBcImhleFwiKTtcblx0dmFyIGRlY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoXCJhZXMtMjU2LWNiY1wiLCBhcGlLZXksIGl2KTtcblx0dmFyIGRlY3J5cHRPdXRwdXQxID0gZGVjaXBoZXIudXBkYXRlKGNpcGhlclRleHQpO1xuXHR2YXIgZGVjcnlwdE91dHB1dDIgPSBkZWNpcGhlci5maW5hbCgpO1xuXHR2YXIgZGVjcnlwdGVkID0gZGVjcnlwdE91dHB1dDEgKyBkZWNyeXB0T3V0cHV0Mjtcblx0cmV0dXJuIEpTT04ucGFyc2UoZGVjcnlwdGVkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGNvbmZpZ3VyZTogY29uZmlndXJlLFxuXHRlbmNyeXB0U2NvcGVkS2V5OiBlbmNyeXB0U2NvcGVkS2V5LFxuXHRkZWNyeXB0U2NvcGVkS2V5OiBkZWNyeXB0U2NvcGVkS2V5LFxuXHRRdWVyeTogS2VlblF1ZXJ5LlF1ZXJ5XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwidmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgS2VlblJlcXVlc3RzID0gcmVxdWlyZSgnLi9yZXF1ZXN0cycpO1xuXG4vKiFcbiogLS0tLS0tLS0tLS0tLS0tLS1cbiogS2VlbiBJTyBRdWVyeSBKU1xuKiAtLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxudmFyIEtlZW4gPSB7fTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBLZWVuLlJlcXVlc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5LZWVuLlJlcXVlc3QgPSBmdW5jdGlvbigpe1xuICB0aGlzLmRhdGEgPSB7fTtcbiAgdGhpcy5jb25maWd1cmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuS2Vlbi5SZXF1ZXN0LnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbihjbGllbnQsIHF1ZXJpZXMsIGNhbGxiYWNrKXtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIHRoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgdGhpcy5ydW4oKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5LZWVuLlJlcXVlc3QucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGNvbXBsZXRpb25zID0gMCxcbiAgICAgIHJlc3BvbnNlID0gW107XG5cbiAgdmFyIGhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgIGlmIChlcnIgJiYgc2VsZi5jYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCBudWxsKTtcbiAgICB9XG4gICAgcmVzcG9uc2VbYXJndW1lbnRzWzJdXSA9IHJlcywgY29tcGxldGlvbnMrKztcbiAgICBpZiAoY29tcGxldGlvbnMgPT0gc2VsZi5xdWVyaWVzLmxlbmd0aCkge1xuICAgICAgc2VsZi5kYXRhID0gKHNlbGYucXVlcmllcy5sZW5ndGggPT0gMSkgPyByZXNwb25zZVswXSA6IHJlc3BvbnNlO1xuICAgICAgaWYgKHNlbGYuY2FsbGJhY2spIHNlbGYuY2FsbGJhY2sobnVsbCwgc2VsZi5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgXy5lYWNoKHNlbGYucXVlcmllcywgZnVuY3Rpb24ocXVlcnksIGluZGV4KXtcbiAgICB2YXIgZGF0YSwgcGF0aCA9ICcvcHJvamVjdHMvJyArIHNlbGYuY2xpZW50LnByb2plY3RJZDtcbiAgICB2YXIgY2FsbGJhY2tTZXF1ZW5jZXIgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gICAgICBoYW5kbGVSZXNwb25zZShlcnIsIHJlcywgaW5kZXgpO1xuICAgIH07XG5cbiAgICBpZiAocXVlcnkgaW5zdGFuY2VvZiBLZWVuLlF1ZXJ5KSB7XG4gICAgICBwYXRoICs9IHF1ZXJ5LnBhdGg7XG4gICAgICBkYXRhID0gcXVlcnkucGFyYW1zIHx8IHt9O1xuICAgIH1cbiAgICAvKiBUT0RPOiBUZXN0IGFuZCBkZXBsb3kgdGhpc1xuICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcocXVlcnkpKSB7XG4gICAgICBwYXRoICs9ICcvc2F2ZWRfcXVlcmllcy8nICsgcXVlcnkgKyAnL3Jlc3VsdCc7XG4gICAgICBkYXRhID0geyBhcGlfa2V5OiBzZWxmLmNsaWVudC5yZWFkS2V5IH07XG4gICAgfSovXG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1ZXJ5ICMnICsgKGluZGV4KzEpICArJyBpcyBub3QgdmFsaWQnKTtcblxuICAgIH1cblxuICAgIEtlZW5SZXF1ZXN0cy5nZXQuY2FsbChzZWxmLmNsaWVudCwgc2VsZi5jbGllbnQucmVhZEtleSwgcGF0aCwgZGF0YSwgY2FsbGJhY2tTZXF1ZW5jZXIpO1xuICB9KTtcblxuICByZXR1cm4gc2VsZjtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBLZWVuLlF1ZXJ5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuS2Vlbi5RdWVyeSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuY29uZmlndXJlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5LZWVuLlF1ZXJ5LnByb3RvdHlwZS5jb25maWd1cmUgPSBmdW5jdGlvbihhbmFseXNpc1R5cGUsIHBhcmFtcyl7XG4gIC8vaWYgKCFjb2xsZWN0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IENvbGxlY3Rpb24gbmFtZSBpcyByZXF1aXJlZCcpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYucGF0aCA9ICcvcXVlcmllcy8nICsgYW5hbHlzaXNUeXBlO1xuICBzZWxmLnBhcmFtcyA9IHt9O1xuICBzZWxmLnNldChwYXJhbXMpO1xuICByZXR1cm4gc2VsZjtcbn07XG5cbktlZW4uUXVlcnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xuICBpZiAodGhpcy5wYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXNbYXR0cmlidXRlXSB8fCBudWxsO1xuICB9XG59O1xuXG5LZWVuLlF1ZXJ5LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihhdHRyaWJ1dGVzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgXy5lYWNoKGF0dHJpYnV0ZXMsIGZ1bmN0aW9uKHYsIGspe1xuICAgIHZhciBrZXkgPSBrLCB2YWx1ZSA9IHY7XG4gICAgaWYgKGsubWF0Y2gobmV3IFJlZ0V4cChcIltBLVpdXCIpKSkge1xuICAgICAga2V5ID0gay5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKCQxKSB7IHJldHVybiBcIl9cIiskMS50b0xvd2VyQ2FzZSgpOyB9KTtcbiAgICB9XG4gICAgc2VsZi5wYXJhbXNba2V5XSA9IHZhbHVlO1xuXG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIF8uZWFjaCh2YWx1ZSwgZnVuY3Rpb24oZHYsIGluZGV4KXtcbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZHYpKSB7XG4gICAgICAgICAgXy5lYWNoKGR2LCBmdW5jdGlvbihkZWVwVmFsdWUsIGRlZXBLZXkpe1xuICAgICAgICAgICAgaWYgKGRlZXBLZXkubWF0Y2gobmV3IFJlZ0V4cChcIltBLVpdXCIpKSkge1xuICAgICAgICAgICAgICB2YXIgX2RlZXBLZXkgPSBkZWVwS2V5LnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHsgcmV0dXJuIFwiX1wiKyQxLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgICAgICAgICAgICBkZWxldGUgc2VsZi5wYXJhbXNba2V5XVtpbmRleF1bZGVlcEtleV07XG4gICAgICAgICAgICAgIHNlbGYucGFyYW1zW2tleV1baW5kZXhdW19kZWVwS2V5XSA9IGRlZXBWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuICByZXR1cm4gc2VsZjtcbn07XG5cblxuLy8gRXhwb3J0IE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsaWVudDoge1xuICAgIHJ1bjogZnVuY3Rpb24ocXVlcnksIGNhbGxiYWNrKXtcbiAgICAgIGlmICghcXVlcnkpIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3Qgb25lIHF1ZXJ5IGlzIHJlcXVpcmVkJyk7XG4gICAgICB2YXIgcXVlcmllcyA9IChfLmlzQXJyYXkocXVlcnkpKSA/IHF1ZXJ5IDogW3F1ZXJ5XTtcbiAgICAgIHJldHVybiBuZXcgS2Vlbi5SZXF1ZXN0KHRoaXMsIHF1ZXJpZXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG4gIFF1ZXJ5OiBLZWVuLlF1ZXJ5XG59O1xuIiwidmFyIHJlc3QgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cbi8vIEhhbmRsZSBsb2dpYyBvZiBwcm9jZXNzaW5nIHJlc3BvbnNlLCBpbmNsdWRpbmcgZXJyb3IgbWVzc2FnZXNcbi8vIFRoZSBlcnJvciBoYW5kbGluZyBzaG91bGQgYmUgc3RyZW5ndGhlbmVkIG92ZXIgdGltZSB0byBiZSBtb3JlXG4vLyBtZWFuaW5nZnVsIGFuZCByb2J1c3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UoZXJyLCByZXMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICBpZiAocmVzICYmICFyZXMub2sgJiYgIWVycikge1xuICAgIHZhciBpc19lcnIgPSByZXMuYm9keSAmJiByZXMuYm9keS5lcnJvcl9jb2RlO1xuICAgIGVyciA9IG5ldyBFcnJvcihpc19lcnIgPyByZXMuYm9keS5tZXNzYWdlIDogJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICBlcnIuY29kZSA9IGlzX2VyciA/IHJlcy5ib2R5LmVycm9yX2NvZGUgOiAnVW5rbm93bkVycm9yJztcbiAgfVxuXG4gIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcmVzLmJvZHkpO1xufVxuXG5mdW5jdGlvbiBidWlsZFF1ZXJ5U3RyaW5nKHBhcmFtcyl7XG4gIHZhciBxdWVyeSA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtc1trZXldKSB7XG4gICAgICB2YXIgdmFsdWUgPSBwYXJhbXNba2V5XTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgIHF1ZXJ5LnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCI/XCIgKyBxdWVyeS5qb2luKCcmJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGFwaUtleSwgcGF0aCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICByZXN0XG4gICAgLmdldCh0aGlzLmJhc2VVcmwgKyB0aGlzLmFwaVZlcnNpb24gKyBwYXRoICsgYnVpbGRRdWVyeVN0cmluZyhkYXRhKSlcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYXBpS2V5KVxuICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgIHByb2Nlc3NSZXNwb25zZShlcnIsIHJlcywgY2FsbGJhY2spO1xuICAgIH0pO1xuICB9LFxuICBwb3N0OiBmdW5jdGlvbihhcGlLZXksIHBhdGgsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgcmVzdFxuICAgIC5wb3N0KHRoaXMuYmFzZVVybCArIHRoaXMuYXBpVmVyc2lvbiArIHBhdGgpXG4gICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGFwaUtleSlcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgLnNlbmQoZGF0YSB8fCB7fSlcbiAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICBwcm9jZXNzUmVzcG9uc2UoZXJyLCByZXMsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfSxcbiAgZGVsOiBmdW5jdGlvbihhcGlLZXksIHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgcmVzdFxuICAgIC5kZWwodGhpcy5iYXNlVXJsICsgdGhpcy5hcGlWZXJzaW9uICsgcGF0aClcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYXBpS2V5KVxuICAgIC5zZXQoJ0NvbnRlbnQtTGVuZ3RoJywgMClcbiAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICBwcm9jZXNzUmVzcG9uc2UoZXJyLCByZXMsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfVxufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCdyZWR1Y2UnKTtcblxuLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdCA9ICd1bmRlZmluZWQnID09IHR5cGVvZiB3aW5kb3dcbiAgPyB0aGlzXG4gIDogd2luZG93O1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe307XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogVE9ETzogZnV0dXJlIHByb29mLCBtb3ZlIHRvIGNvbXBvZW50IGxhbmRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNIb3N0KG9iaikge1xuICB2YXIgc3RyID0ge30udG9TdHJpbmcuY2FsbChvYmopO1xuXG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSAnW29iamVjdCBGaWxlXSc6XG4gICAgY2FzZSAnW29iamVjdCBCbG9iXSc6XG4gICAgY2FzZSAnW29iamVjdCBGb3JtRGF0YV0nOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxuZnVuY3Rpb24gZ2V0WEhSKCkge1xuICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdFxuICAgICYmICgnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2wgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICB0aGlzLnRleHQgPSB0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0IFxuICAgICA6IG51bGw7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dClcbiAgICA6IG51bGw7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKXtcbiAgLy8gY29udGVudC10eXBlXG4gIHZhciBjdCA9IHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgdGhpcy50eXBlID0gdHlwZShjdCk7XG5cbiAgLy8gcGFyYW1zXG4gIHZhciBvYmogPSBwYXJhbXMoY3QpO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB0aGlzW2tleV0gPSBvYmpba2V5XTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUucGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKXtcbiAgdmFyIHBhcnNlID0gcmVxdWVzdC5wYXJzZVt0aGlzLnR5cGVdO1xuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIHN0ci5sZW5ndGhcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBmbGFncyBzdWNoIGFzIGAub2tgIGJhc2VkIG9uIGBzdGF0dXNgLlxuICpcbiAqIEZvciBleGFtcGxlIGEgMnh4IHJlc3BvbnNlIHdpbGwgZ2l2ZSB5b3UgYSBgLm9rYCBvZiBfX3RydWVfX1xuICogd2hlcmVhcyA1eHggd2lsbCBiZSBfX2ZhbHNlX18gYW5kIGAuZXJyb3JgIHdpbGwgYmUgX190cnVlX18uIFRoZVxuICogYC5jbGllbnRFcnJvcmAgYW5kIGAuc2VydmVyRXJyb3JgIGFyZSBhbHNvIGF2YWlsYWJsZSB0byBiZSBtb3JlXG4gKiBzcGVjaWZpYywgYW5kIGAuc3RhdHVzVHlwZWAgaXMgdGhlIGNsYXNzIG9mIGVycm9yIHJhbmdpbmcgZnJvbSAxLi41XG4gKiBzb21ldGltZXMgdXNlZnVsIGZvciBtYXBwaW5nIHJlc3BvbmQgY29sb3JzIGV0Yy5cbiAqXG4gKiBcInN1Z2FyXCIgcHJvcGVydGllcyBhcmUgYWxzbyBkZWZpbmVkIGZvciBjb21tb24gY2FzZXMuIEN1cnJlbnRseSBwcm92aWRpbmc6XG4gKlxuICogICAtIC5ub0NvbnRlbnRcbiAqICAgLSAuYmFkUmVxdWVzdFxuICogICAtIC51bmF1dGhvcml6ZWRcbiAqICAgLSAubm90QWNjZXB0YWJsZVxuICogICAtIC5ub3RGb3VuZFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24oc3RhdHVzKXtcbiAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xuXG4gIC8vIHN0YXR1cyAvIGNsYXNzXG4gIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlO1xuXG4gIC8vIGJhc2ljc1xuICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gIHRoaXMub2sgPSAyID09IHR5cGU7XG4gIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XG4gIHRoaXMuc2VydmVyRXJyb3IgPSA1ID09IHR5cGU7XG4gIHRoaXMuZXJyb3IgPSAoNCA9PSB0eXBlIHx8IDUgPT0gdHlwZSlcbiAgICA/IHRoaXMudG9FcnJvcigpXG4gICAgOiBmYWxzZTtcblxuICAvLyBzdWdhclxuICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgdGhpcy5ub0NvbnRlbnQgPSAyMDQgPT0gc3RhdHVzIHx8IDEyMjMgPT0gc3RhdHVzO1xuICB0aGlzLmJhZFJlcXVlc3QgPSA0MDAgPT0gc3RhdHVzO1xuICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gIHRoaXMubm90QWNjZXB0YWJsZSA9IDQwNiA9PSBzdGF0dXM7XG4gIHRoaXMubm90Rm91bmQgPSA0MDQgPT0gc3RhdHVzO1xuICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG5cbiAgdmFyIG1zZyA9ICdjYW5ub3QgJyArIG1ldGhvZCArICcgJyArIHVybCArICcgKCcgKyB0aGlzLnN0YXR1cyArICcpJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG5cbiAgcmV0dXJuIGVycjtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZWAuXG4gKi9cblxucmVxdWVzdC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBFbWl0dGVyLmNhbGwodGhpcyk7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTtcbiAgdGhpcy5faGVhZGVyID0ge307XG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpOyBcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgIH1cblxuICAgIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgZmlsZW5hbWVgLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmF0dGFjaChuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgZmlsZW5hbWUpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqKSByZXR1cm4gdGhpcztcbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgaWYgKDIgPT0gZm4ubGVuZ3RoKSByZXR1cm4gZm4oZXJyLCByZXMpO1xuICBpZiAoZXJyKSByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIGZuKHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IGdldFhIUigpO1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBzdGF0ZSBjaGFuZ2VcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKDQgIT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBpZiAoMCA9PSB4aHIuc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICBpZiAoeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICAgIH07XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplW3RoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKV07XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0YC5cbiAqL1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIElzc3VlIGEgcmVxdWVzdDpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXF1ZXN0KCdHRVQnLCAnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJywgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHVybCBvciBjYWxsYmFja1xuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZGVsID0gZnVuY3Rpb24odXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBhdGNoID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcbiIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcbiIsIlxuLyoqXG4gKiBSZWR1Y2UgYGFycmAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxcbiAqXG4gKiBUT0RPOiBjb21iYXRpYmxlIGVycm9yIGhhbmRsaW5nP1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBmbiwgaW5pdGlhbCl7ICBcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgY3VyciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gM1xuICAgID8gaW5pdGlhbFxuICAgIDogYXJyW2lkeCsrXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgY3VyciA9IGZuLmNhbGwobnVsbCwgY3VyciwgYXJyW2lkeF0sICsraWR4LCBhcnIpO1xuICB9XG4gIFxuICByZXR1cm4gY3Vycjtcbn07IiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS41LjJcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGV4cG9ydHNgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgY29uY2F0ICAgICAgICAgICA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVGb3JFYWNoICAgICAgPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwICAgICAgICAgID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICBuYXRpdmVGaWx0ZXIgICAgICAgPSBBcnJheVByb3RvLmZpbHRlcixcbiAgICBuYXRpdmVFdmVyeSAgICAgICAgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgICAgICAgICA9IEFycmF5UHJvdG8uc29tZSxcbiAgICBuYXRpdmVJbmRleE9mICAgICAgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kO1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdCB2aWEgYSBzdHJpbmcgaWRlbnRpZmllcixcbiAgLy8gZm9yIENsb3N1cmUgQ29tcGlsZXIgXCJhZHZhbmNlZFwiIG1vZGUuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNS4yJztcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPSBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5hdGl2ZUZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IG5hdGl2ZUZvckVhY2gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgYW55KG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgfSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBldmVyeWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVFdmVyeSAmJiBvYmouZXZlcnkgPT09IG5hdGl2ZUV2ZXJ5KSByZXR1cm4gb2JqLmV2ZXJ5KGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIShyZXN1bHQgPSByZXN1bHQgJiYgaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocmVzdWx0IHx8IChyZXN1bHQgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgb2JqLmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXSkuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuIHZhbHVlW2tleV07IH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMsIGZpcnN0KSB7XG4gICAgaWYgKF8uaXNFbXB0eShhdHRycykpIHJldHVybiBmaXJzdCA/IHZvaWQgMCA6IFtdO1xuICAgIHJldHVybiBfW2ZpcnN0ID8gJ2ZpbmQnIDogJ2ZpbHRlciddKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoYXR0cnNba2V5XSAhPT0gdmFsdWVba2V5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy53aGVyZShvYmosIGF0dHJzLCB0cnVlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCBvciAoZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIC8vIENhbid0IG9wdGltaXplIGFycmF5cyBvZiBpbnRlZ2VycyBsb25nZXIgdGhhbiA2NSw1MzUgZWxlbWVudHMuXG4gIC8vIFNlZSBbV2ViS2l0IEJ1ZyA4MDc5N10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgwNzk3KVxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gLUluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiAtSW5maW5pdHksIHZhbHVlOiAtSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA+IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIEluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiBJbmZpbml0eSwgdmFsdWU6IEluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPCByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBTaHVmZmxlIGFuIGFycmF5LCB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlIFxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByYW5kO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNodWZmbGVkID0gW107XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oaW5kZXgrKyk7XG4gICAgICBzaHVmZmxlZFtpbmRleCAtIDFdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50IGZyb20gdGhlIGFycmF5LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIgfHwgZ3VhcmQpIHtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgcmV0dXJuIF8uc2h1ZmZsZShvYmopLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBsb29rdXAgaXRlcmF0b3JzLlxuICB2YXIgbG9va3VwSXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUgOiBmdW5jdGlvbihvYmopeyByZXR1cm4gb2JqW3ZhbHVlXTsgfTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0b3IuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHZhciBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdClcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICAgIH0pLCAndmFsdWUnKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG4gIHZhciBncm91cCA9IGZ1bmN0aW9uKGJlaGF2aW9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHZhbHVlID09IG51bGwgPyBfLmlkZW50aXR5IDogbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICAgIGJlaGF2aW9yKHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICAoXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0gOiAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0rKyA6IHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3IgPT0gbnVsbCA/IF8uaWRlbnRpdHkgOiBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVttaWRdKSA8IHZhbHVlID8gbG93ID0gbWlkICsgMSA6IGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyBhcnJheVswXSA6IHNsaWNlLmNhbGwoYXJyYXksIDAsIG4pO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGhcbiAgLy8gYF8ubWFwYC5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtICgobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKChuID09IG51bGwpIHx8IGd1YXJkKSB7XG4gICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBNYXRoLm1heChhcnJheS5sZW5ndGggLSBuLCAwKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqXG4gIC8vIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgb3V0cHV0KSB7XG4gICAgaWYgKHNoYWxsb3cgJiYgXy5ldmVyeShpbnB1dCwgXy5pc0FycmF5KSkge1xuICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShvdXRwdXQsIGlucHV0KTtcbiAgICB9XG4gICAgZWFjaChpbnB1dCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSB7XG4gICAgICAgIHNoYWxsb3cgPyBwdXNoLmFwcGx5KG91dHB1dCwgdmFsdWUpIDogZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgb3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdG9yO1xuICAgICAgaXRlcmF0b3IgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpbml0aWFsID0gaXRlcmF0b3IgPyBfLm1hcChhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIDogYXJyYXk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGVhY2goaW5pdGlhbCwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICBpZiAoaXNTb3J0ZWQgPyAoIWluZGV4IHx8IHNlZW5bc2Vlbi5sZW5ndGggLSAxXSAhPT0gdmFsdWUpIDogIV8uY29udGFpbnMoc2VlbiwgdmFsdWUpKSB7XG4gICAgICAgIHNlZW4ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJlc3VsdHMucHVzaChhcnJheVtpbmRleF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoXy5mbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihfLnVuaXEoYXJyYXkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gXy5ldmVyeShyZXN0LCBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gXy5pbmRleE9mKG90aGVyLCBpdGVtKSA+PSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJndW1lbnRzLCBcImxlbmd0aFwiKS5jb25jYXQoMCkpO1xuICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0c1tpXSA9IF8ucGx1Y2soYXJndW1lbnRzLCAnJyArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgaWYgKGxpc3QgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcGx5IHVzIHdpdGggaW5kZXhPZiAoSSdtIGxvb2tpbmcgYXQgeW91LCAqKk1TSUUqKiksXG4gIC8vIHdlIG5lZWQgdGhpcyBmdW5jdGlvbi4gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhblxuICAvLyBpdGVtIGluIGFuIGFycmF5LCBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgaW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlzU29ydGVkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgaXNTb3J0ZWQgPT0gJ251bWJlcicpIHtcbiAgICAgICAgaSA9IChpc1NvcnRlZCA8IDAgPyBNYXRoLm1heCgwLCBsZW5ndGggKyBpc1NvcnRlZCkgOiBpc1NvcnRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gXy5zb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpXSA9PT0gaXRlbSA/IGkgOiAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgYXJyYXkuaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSwgaXNTb3J0ZWQpO1xuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBsYXN0SW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICBfLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGZyb20pIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBoYXNJbmRleCA9IGZyb20gIT0gbnVsbDtcbiAgICBpZiAobmF0aXZlTGFzdEluZGV4T2YgJiYgYXJyYXkubGFzdEluZGV4T2YgPT09IG5hdGl2ZUxhc3RJbmRleE9mKSB7XG4gICAgICByZXR1cm4gaGFzSW5kZXggPyBhcnJheS5sYXN0SW5kZXhPZihpdGVtLCBmcm9tKSA6IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgaSA9IChoYXNJbmRleCA/IGZyb20gOiBhcnJheS5sZW5ndGgpO1xuICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBhcmd1bWVudHNbMl0gfHwgMTtcblxuICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIHJhbmdlID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZShpZHggPCBsZW5ndGgpIHtcbiAgICAgIHJhbmdlW2lkeCsrXSA9IHN0YXJ0O1xuICAgICAgc3RhcnQgKz0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXVzYWJsZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgcHJvdG90eXBlIHNldHRpbmcuXG4gIHZhciBjdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIHZhciBhcmdzLCBib3VuZDtcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3I7XG4gICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkpIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBmdW5jLnByb3RvdHlwZTtcbiAgICAgIHZhciBzZWxmID0gbmV3IGN0b3I7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gICAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseShzZWxmLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGFsbCBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXRcbiAgLy8gYWxsIGNhbGxiYWNrcyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBmdW5jcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzXCIpO1xuICAgIGVhY2goZnVuY3MsIGZ1bmN0aW9uKGYpIHsgb2JqW2ZdID0gXy5iaW5kKG9ialtmXSwgb2JqKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IHt9O1xuICAgIGhhc2hlciB8fCAoaGFzaGVyID0gXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF8uaGFzKG1lbW8sIGtleSkgPyBtZW1vW2tleV0gOiAobWVtb1trZXldID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gXy5kZWxheS5hcHBseShfLCBbZnVuYywgMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbmV3IERhdGU7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gbmV3IERhdGU7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgaWYgKGxhc3QgPCB3YWl0KSB7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gW2Z1bmNdO1xuICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHdyYXBwZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnVuY3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBmb3IgKHZhciBpID0gZnVuY3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFtmdW5jc1tpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBhZnRlciBiZWluZyBjYWxsZWQgTiB0aW1lcy5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBuYXRpdmVLZXlzIHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogIT09IE9iamVjdChvYmopKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9iamVjdCcpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvYmpba2V5c1tpXV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWlyc1tpXSA9IFtrZXlzW2ldLCBvYmpba2V5c1tpXV1dO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbb2JqW2tleXNbaV1dXSA9IGtleXNbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYFxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5IGluIG9iaikgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFfLmNvbnRhaW5zKGtleXMsIGtleSkpIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChvYmpbcHJvcF0gPT09IHZvaWQgMCkgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gYSA9PSBTdHJpbmcoYik7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLiBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yXG4gICAgICAgIC8vIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gYSAhPSArYSA/IGIgIT0gK2IgOiAoYSA9PSAwID8gMSAvIGEgPT0gMSAvIGIgOiBhID09ICtiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PSArYjtcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyIHNvdXJjZSBwYXR0ZXJucyBhbmQgZmxhZ3MuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgICByZXR1cm4gYS5zb3VyY2UgPT0gYi5zb3VyY2UgJiZcbiAgICAgICAgICAgICAgIGEuZ2xvYmFsID09IGIuZ2xvYmFsICYmXG4gICAgICAgICAgICAgICBhLm11bHRpbGluZSA9PSBiLm11bHRpbGluZSAmJlxuICAgICAgICAgICAgICAgYS5pZ25vcmVDYXNlID09IGIuaWdub3JlQ2FzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09IGI7XG4gICAgfVxuICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3Rgc1xuICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIChhQ3RvciBpbnN0YW5jZW9mIGFDdG9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIChiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuICAgIHZhciBzaXplID0gMCwgcmVzdWx0ID0gdHJ1ZTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoY2xhc3NOYW1lID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBiLmxlbmd0aDtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICBlc2NhcGU6IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiN4Mjc7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx0JzogICAgICd0JyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx0fFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciByZW5kZXI7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICAgICAgLnJlcGxhY2UoZXNjYXBlciwgZnVuY3Rpb24obWF0Y2gpIHsgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdOyB9KTtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArIFwicmV0dXJuIF9fcDtcXG5cIjtcblxuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHJldHVybiByZW5kZXIoZGF0YSwgXyk7XG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbiBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAoc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicpICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZXIuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXyhvYmopLmNoYWluKCk7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09ICdzaGlmdCcgfHwgbmFtZSA9PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKF8ucHJvdG90eXBlLCB7XG5cbiAgICAvLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY2hhaW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICAgIH1cblxuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpcy1hcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciBrTWF4TGVuZ3RoID0gMHgzZmZmZmZmZlxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IHN1YmplY3QgPiAwID8gc3ViamVjdCA+Pj4gMCA6IDBcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnKVxuICAgICAgc3ViamVjdCA9IGJhc2U2NGNsZWFuKHN1YmplY3QpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgc3ViamVjdCAhPT0gbnVsbCkgeyAvLyBhc3N1bWUgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgICBpZiAoc3ViamVjdC50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KHN1YmplY3QuZGF0YSkpXG4gICAgICBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoID4gMCA/IE1hdGguZmxvb3IoK3N1YmplY3QubGVuZ3RoKSA6IDBcbiAgfSBlbHNlXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcnKVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IGtNYXhMZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9ICgoc3ViamVjdFtpXSAlIDI1NikgKyAyNTYpICUgMjU2XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3RbLCBsZW5ndGhdKScpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCA+Pj4gMVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLy8gcHJlLXNldCBmb3IgdmFsdWVzIHRoYXQgbWF5IGV4aXN0IGluIHRoZSBmdXR1cmVcbkJ1ZmZlci5wcm90b3R5cGUubGVuZ3RoID0gdW5kZWZpbmVkXG5CdWZmZXIucHJvdG90eXBlLnBhcmVudCA9IHVuZGVmaW5lZFxuXG4vLyB0b1N0cmluZyhlbmNvZGluZywgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPT09IEluZmluaXR5ID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KVxuICAgICAgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4oYnl0ZSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgsIDIpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IGJpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApXG4gICAgICBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgZW5kID0gc3RhcnRcblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKVxuICAgIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBpZiAodGFyZ2V0X3N0YXJ0IDwgMCB8fCB0YXJnZXRfc3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLmNvbnN0cnVjdG9yID0gQnVmZmVyXG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS16XS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3Rikge1xuICAgICAgYnl0ZUFycmF5LnB1c2goYilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKykge1xuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoLCB1bml0U2l6ZSkge1xuICBpZiAodW5pdFNpemUpIGxlbmd0aCAtPSBsZW5ndGggJSB1bml0U2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcbiIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBjcmVhdGVIYXNoID0gcmVxdWlyZSgnc2hhLmpzJylcblxudmFyIG1kNSA9IHRvQ29uc3RydWN0b3IocmVxdWlyZSgnLi9tZDUnKSlcbnZhciBybWQxNjAgPSB0b0NvbnN0cnVjdG9yKHJlcXVpcmUoJ3JpcGVtZDE2MCcpKVxuXG5mdW5jdGlvbiB0b0NvbnN0cnVjdG9yIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBidWZmZXJzID0gW11cbiAgICB2YXIgbT0ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZGF0YSwgZW5jKSB7XG4gICAgICAgIGlmKCFCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIGRhdGEgPSBuZXcgQnVmZmVyKGRhdGEsIGVuYylcbiAgICAgICAgYnVmZmVycy5wdXNoKGRhdGEpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9LFxuICAgICAgZGlnZXN0OiBmdW5jdGlvbiAoZW5jKSB7XG4gICAgICAgIHZhciBidWYgPSBCdWZmZXIuY29uY2F0KGJ1ZmZlcnMpXG4gICAgICAgIHZhciByID0gZm4oYnVmKVxuICAgICAgICBidWZmZXJzID0gbnVsbFxuICAgICAgICByZXR1cm4gZW5jID8gci50b1N0cmluZyhlbmMpIDogclxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFsZykge1xuICBpZignbWQ1JyA9PT0gYWxnKSByZXR1cm4gbmV3IG1kNSgpXG4gIGlmKCdybWQxNjAnID09PSBhbGcpIHJldHVybiBuZXcgcm1kMTYwKClcbiAgcmV0dXJuIGNyZWF0ZUhhc2goYWxnKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIGNyZWF0ZUhhc2ggPSByZXF1aXJlKCcuL2NyZWF0ZS1oYXNoJylcblxudmFyIGJsb2Nrc2l6ZSA9IDY0XG52YXIgemVyb0J1ZmZlciA9IG5ldyBCdWZmZXIoYmxvY2tzaXplKTsgemVyb0J1ZmZlci5maWxsKDApXG5cbm1vZHVsZS5leHBvcnRzID0gSG1hY1xuXG5mdW5jdGlvbiBIbWFjIChhbGcsIGtleSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBIbWFjKSkgcmV0dXJuIG5ldyBIbWFjKGFsZywga2V5KVxuICB0aGlzLl9vcGFkID0gb3BhZFxuICB0aGlzLl9hbGcgPSBhbGdcblxuICBrZXkgPSB0aGlzLl9rZXkgPSAhQnVmZmVyLmlzQnVmZmVyKGtleSkgPyBuZXcgQnVmZmVyKGtleSkgOiBrZXlcblxuICBpZihrZXkubGVuZ3RoID4gYmxvY2tzaXplKSB7XG4gICAga2V5ID0gY3JlYXRlSGFzaChhbGcpLnVwZGF0ZShrZXkpLmRpZ2VzdCgpXG4gIH0gZWxzZSBpZihrZXkubGVuZ3RoIDwgYmxvY2tzaXplKSB7XG4gICAga2V5ID0gQnVmZmVyLmNvbmNhdChba2V5LCB6ZXJvQnVmZmVyXSwgYmxvY2tzaXplKVxuICB9XG5cbiAgdmFyIGlwYWQgPSB0aGlzLl9pcGFkID0gbmV3IEJ1ZmZlcihibG9ja3NpemUpXG4gIHZhciBvcGFkID0gdGhpcy5fb3BhZCA9IG5ldyBCdWZmZXIoYmxvY2tzaXplKVxuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBibG9ja3NpemU7IGkrKykge1xuICAgIGlwYWRbaV0gPSBrZXlbaV0gXiAweDM2XG4gICAgb3BhZFtpXSA9IGtleVtpXSBeIDB4NUNcbiAgfVxuXG4gIHRoaXMuX2hhc2ggPSBjcmVhdGVIYXNoKGFsZykudXBkYXRlKGlwYWQpXG59XG5cbkhtYWMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmMpIHtcbiAgdGhpcy5faGFzaC51cGRhdGUoZGF0YSwgZW5jKVxuICByZXR1cm4gdGhpc1xufVxuXG5IbWFjLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIHZhciBoID0gdGhpcy5faGFzaC5kaWdlc3QoKVxuICByZXR1cm4gY3JlYXRlSGFzaCh0aGlzLl9hbGcpLnVwZGF0ZSh0aGlzLl9vcGFkKS51cGRhdGUoaCkuZGlnZXN0KGVuYylcbn1cblxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIGludFNpemUgPSA0O1xudmFyIHplcm9CdWZmZXIgPSBuZXcgQnVmZmVyKGludFNpemUpOyB6ZXJvQnVmZmVyLmZpbGwoMCk7XG52YXIgY2hyc3ogPSA4O1xuXG5mdW5jdGlvbiB0b0FycmF5KGJ1ZiwgYmlnRW5kaWFuKSB7XG4gIGlmICgoYnVmLmxlbmd0aCAlIGludFNpemUpICE9PSAwKSB7XG4gICAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGggKyAoaW50U2l6ZSAtIChidWYubGVuZ3RoICUgaW50U2l6ZSkpO1xuICAgIGJ1ZiA9IEJ1ZmZlci5jb25jYXQoW2J1ZiwgemVyb0J1ZmZlcl0sIGxlbik7XG4gIH1cblxuICB2YXIgYXJyID0gW107XG4gIHZhciBmbiA9IGJpZ0VuZGlhbiA/IGJ1Zi5yZWFkSW50MzJCRSA6IGJ1Zi5yZWFkSW50MzJMRTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpICs9IGludFNpemUpIHtcbiAgICBhcnIucHVzaChmbi5jYWxsKGJ1ZiwgaSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHRvQnVmZmVyKGFyciwgc2l6ZSwgYmlnRW5kaWFuKSB7XG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHNpemUpO1xuICB2YXIgZm4gPSBiaWdFbmRpYW4gPyBidWYud3JpdGVJbnQzMkJFIDogYnVmLndyaXRlSW50MzJMRTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbi5jYWxsKGJ1ZiwgYXJyW2ldLCBpICogNCwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuZnVuY3Rpb24gaGFzaChidWYsIGZuLCBoYXNoU2l6ZSwgYmlnRW5kaWFuKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9IG5ldyBCdWZmZXIoYnVmKTtcbiAgdmFyIGFyciA9IGZuKHRvQXJyYXkoYnVmLCBiaWdFbmRpYW4pLCBidWYubGVuZ3RoICogY2hyc3opO1xuICByZXR1cm4gdG9CdWZmZXIoYXJyLCBoYXNoU2l6ZSwgYmlnRW5kaWFuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGhhc2g6IGhhc2ggfTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbnZhciBybmcgPSByZXF1aXJlKCcuL3JuZycpXG5cbmZ1bmN0aW9uIGVycm9yICgpIHtcbiAgdmFyIG0gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpXG4gIHRocm93IG5ldyBFcnJvcihbXG4gICAgbSxcbiAgICAnd2UgYWNjZXB0IHB1bGwgcmVxdWVzdHMnLFxuICAgICdodHRwOi8vZ2l0aHViLmNvbS9kb21pbmljdGFyci9jcnlwdG8tYnJvd3NlcmlmeSdcbiAgICBdLmpvaW4oJ1xcbicpKVxufVxuXG5leHBvcnRzLmNyZWF0ZUhhc2ggPSByZXF1aXJlKCcuL2NyZWF0ZS1oYXNoJylcblxuZXhwb3J0cy5jcmVhdGVIbWFjID0gcmVxdWlyZSgnLi9jcmVhdGUtaG1hYycpXG5cbmV4cG9ydHMucmFuZG9tQnl0ZXMgPSBmdW5jdGlvbihzaXplLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCkge1xuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHVuZGVmaW5lZCwgbmV3IEJ1ZmZlcihybmcoc2l6ZSkpKVxuICAgIH0gY2F0Y2ggKGVycikgeyBjYWxsYmFjayhlcnIpIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihybmcoc2l6ZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaChhLCBmKSB7XG4gIGZvcih2YXIgaSBpbiBhKVxuICAgIGYoYVtpXSwgaSlcbn1cblxuZXhwb3J0cy5nZXRIYXNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbJ3NoYTEnLCAnc2hhMjU2JywgJ21kNScsICdybWQxNjAnXVxuXG59XG5cbnZhciBwID0gcmVxdWlyZSgnLi9wYmtkZjInKShleHBvcnRzLmNyZWF0ZUhtYWMpXG5leHBvcnRzLnBia2RmMiA9IHAucGJrZGYyXG5leHBvcnRzLnBia2RmMlN5bmMgPSBwLnBia2RmMlN5bmNcblxuXG4vLyB0aGUgbGVhc3QgSSBjYW4gZG8gaXMgbWFrZSBlcnJvciBtZXNzYWdlcyBmb3IgdGhlIHJlc3Qgb2YgdGhlIG5vZGUuanMvY3J5cHRvIGFwaS5cbmVhY2goWydjcmVhdGVDcmVkZW50aWFscydcbiwgJ2NyZWF0ZUNpcGhlcidcbiwgJ2NyZWF0ZUNpcGhlcml2J1xuLCAnY3JlYXRlRGVjaXBoZXInXG4sICdjcmVhdGVEZWNpcGhlcml2J1xuLCAnY3JlYXRlU2lnbidcbiwgJ2NyZWF0ZVZlcmlmeSdcbiwgJ2NyZWF0ZURpZmZpZUhlbGxtYW4nXG5dLCBmdW5jdGlvbiAobmFtZSkge1xuICBleHBvcnRzW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIGVycm9yKCdzb3JyeSwnLCBuYW1lLCAnaXMgbm90IGltcGxlbWVudGVkIHlldCcpXG4gIH1cbn0pXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIvKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4xIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwMi5cbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuXG52YXIgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBjb3JlX21kNSh4LCBsZW4pXG57XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKChsZW4pICUgMzIpO1xuICB4WygoKGxlbiArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsZW47XG5cbiAgdmFyIGEgPSAgMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9ICAyNzE3MzM4Nzg7XG5cbiAgZm9yKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KVxuICB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuXG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDBdLCA3ICwgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKyA0XSwgNyAsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDcgLCAgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKzEyXSwgNyAsICAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XG5cbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDUgLCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsgNl0sIDkgLCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDVdLCA1ICwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krMTBdLCA5ICwgIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDUgLCAgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsxNF0sIDkgLCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKzEzXSwgNSAsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsgMl0sIDkgLCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG5cbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDQgLCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDFdLCA0ICwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKyA0XSwgMTEsICAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krMTNdLCA0ICwgIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krIDZdLCAyMywgIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDQgLCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE2LCAgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcblxuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKyAwXSwgNiAsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsxMl0sIDYgLCAgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krIDhdLCA2ICwgIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDYgLCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG5cbiAgICBhID0gc2FmZV9hZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVfYWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlX2FkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZV9hZGQoZCwgb2xkZCk7XG4gIH1cbiAgcmV0dXJuIEFycmF5KGEsIGIsIGMsIGQpO1xuXG59XG5cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5mdW5jdGlvbiBtZDVfY21uKHEsIGEsIGIsIHgsIHMsIHQpXG57XG4gIHJldHVybiBzYWZlX2FkZChiaXRfcm9sKHNhZmVfYWRkKHNhZmVfYWRkKGEsIHEpLCBzYWZlX2FkZCh4LCB0KSksIHMpLGIpO1xufVxuZnVuY3Rpb24gbWQ1X2ZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKChiICYgYykgfCAoKH5iKSAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNV9nZyhhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbigoYiAmIGQpIHwgKGMgJiAofmQpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfaGgoYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNV9paShhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbihjIF4gKGIgfCAofmQpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5mdW5jdGlvbiBzYWZlX2FkZCh4LCB5KVxue1xuICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xufVxuXG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5mdW5jdGlvbiBiaXRfcm9sKG51bSwgY250KVxue1xuICByZXR1cm4gKG51bSA8PCBjbnQpIHwgKG51bSA+Pj4gKDMyIC0gY250KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWQ1KGJ1Zikge1xuICByZXR1cm4gaGVscGVycy5oYXNoKGJ1ZiwgY29yZV9tZDUsIDE2KTtcbn07XG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG5cbm1vZHVsZS5leHBvcnRzID0gcmlwZW1kMTYwXG5cblxuXG4vKlxuQ3J5cHRvSlMgdjMuMS4yXG5jb2RlLmdvb2dsZS5jb20vcC9jcnlwdG8tanNcbihjKSAyMDA5LTIwMTMgYnkgSmVmZiBNb3R0LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuY29kZS5nb29nbGUuY29tL3AvY3J5cHRvLWpzL3dpa2kvTGljZW5zZVxuKi9cbi8qKiBAcHJlc2VydmVcbihjKSAyMDEyIGJ5IEPDqWRyaWMgTWVzbmlsLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAtIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAtIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuLy8gQ29uc3RhbnRzIHRhYmxlXG52YXIgemwgPSBbXG4gICAgMCwgIDEsICAyLCAgMywgIDQsICA1LCAgNiwgIDcsICA4LCAgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSxcbiAgICA3LCAgNCwgMTMsICAxLCAxMCwgIDYsIDE1LCAgMywgMTIsICAwLCAgOSwgIDUsICAyLCAxNCwgMTEsICA4LFxuICAgIDMsIDEwLCAxNCwgIDQsICA5LCAxNSwgIDgsICAxLCAgMiwgIDcsICAwLCAgNiwgMTMsIDExLCAgNSwgMTIsXG4gICAgMSwgIDksIDExLCAxMCwgIDAsICA4LCAxMiwgIDQsIDEzLCAgMywgIDcsIDE1LCAxNCwgIDUsICA2LCAgMixcbiAgICA0LCAgMCwgIDUsICA5LCAgNywgMTIsICAyLCAxMCwgMTQsICAxLCAgMywgIDgsIDExLCAgNiwgMTUsIDEzXTtcbnZhciB6ciA9IFtcbiAgICA1LCAxNCwgIDcsICAwLCAgOSwgIDIsIDExLCAgNCwgMTMsICA2LCAxNSwgIDgsICAxLCAxMCwgIDMsIDEyLFxuICAgIDYsIDExLCAgMywgIDcsICAwLCAxMywgIDUsIDEwLCAxNCwgMTUsICA4LCAxMiwgIDQsICA5LCAgMSwgIDIsXG4gICAgMTUsICA1LCAgMSwgIDMsICA3LCAxNCwgIDYsICA5LCAxMSwgIDgsIDEyLCAgMiwgMTAsICAwLCAgNCwgMTMsXG4gICAgOCwgIDYsICA0LCAgMSwgIDMsIDExLCAxNSwgIDAsICA1LCAxMiwgIDIsIDEzLCAgOSwgIDcsIDEwLCAxNCxcbiAgICAxMiwgMTUsIDEwLCAgNCwgIDEsICA1LCAgOCwgIDcsICA2LCAgMiwgMTMsIDE0LCAgMCwgIDMsICA5LCAxMV07XG52YXIgc2wgPSBbXG4gICAgIDExLCAxNCwgMTUsIDEyLCAgNSwgIDgsICA3LCAgOSwgMTEsIDEzLCAxNCwgMTUsICA2LCAgNywgIDksICA4LFxuICAgIDcsIDYsICAgOCwgMTMsIDExLCAgOSwgIDcsIDE1LCAgNywgMTIsIDE1LCAgOSwgMTEsICA3LCAxMywgMTIsXG4gICAgMTEsIDEzLCAgNiwgIDcsIDE0LCAgOSwgMTMsIDE1LCAxNCwgIDgsIDEzLCAgNiwgIDUsIDEyLCAgNywgIDUsXG4gICAgICAxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCAgOSwgIDgsICA5LCAxNCwgIDUsICA2LCAgOCwgIDYsICA1LCAxMixcbiAgICA5LCAxNSwgIDUsIDExLCAgNiwgIDgsIDEzLCAxMiwgIDUsIDEyLCAxMywgMTQsIDExLCAgOCwgIDUsICA2IF07XG52YXIgc3IgPSBbXG4gICAgOCwgIDksICA5LCAxMSwgMTMsIDE1LCAxNSwgIDUsICA3LCAgNywgIDgsIDExLCAxNCwgMTQsIDEyLCAgNixcbiAgICA5LCAxMywgMTUsICA3LCAxMiwgIDgsICA5LCAxMSwgIDcsICA3LCAxMiwgIDcsICA2LCAxNSwgMTMsIDExLFxuICAgIDksICA3LCAxNSwgMTEsICA4LCAgNiwgIDYsIDE0LCAxMiwgMTMsICA1LCAxNCwgMTMsIDEzLCAgNywgIDUsXG4gICAgMTUsICA1LCAgOCwgMTEsIDE0LCAxNCwgIDYsIDE0LCAgNiwgIDksIDEyLCAgOSwgMTIsICA1LCAxNSwgIDgsXG4gICAgOCwgIDUsIDEyLCAgOSwgMTIsICA1LCAxNCwgIDYsICA4LCAxMywgIDYsICA1LCAxNSwgMTMsIDExLCAxMSBdO1xuXG52YXIgaGwgPSAgWyAweDAwMDAwMDAwLCAweDVBODI3OTk5LCAweDZFRDlFQkExLCAweDhGMUJCQ0RDLCAweEE5NTNGRDRFXTtcbnZhciBociA9ICBbIDB4NTBBMjhCRTYsIDB4NUM0REQxMjQsIDB4NkQ3MDNFRjMsIDB4N0E2RDc2RTksIDB4MDAwMDAwMDBdO1xuXG52YXIgYnl0ZXNUb1dvcmRzID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gIHZhciB3b3JkcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgYiA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgYiArPSA4KSB7XG4gICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgfVxuICByZXR1cm4gd29yZHM7XG59O1xuXG52YXIgd29yZHNUb0J5dGVzID0gZnVuY3Rpb24gKHdvcmRzKSB7XG4gIHZhciBieXRlcyA9IFtdO1xuICBmb3IgKHZhciBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpIHtcbiAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59O1xuXG52YXIgcHJvY2Vzc0Jsb2NrID0gZnVuY3Rpb24gKEgsIE0sIG9mZnNldCkge1xuXG4gIC8vIFN3YXAgZW5kaWFuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgIHZhciBvZmZzZXRfaSA9IG9mZnNldCArIGk7XG4gICAgdmFyIE1fb2Zmc2V0X2kgPSBNW29mZnNldF9pXTtcblxuICAgIC8vIFN3YXBcbiAgICBNW29mZnNldF9pXSA9IChcbiAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSAgfCAoTV9vZmZzZXRfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcbiAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCAyNCkgfCAoTV9vZmZzZXRfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG4gICAgKTtcbiAgfVxuXG4gIC8vIFdvcmtpbmcgdmFyaWFibGVzXG4gIHZhciBhbCwgYmwsIGNsLCBkbCwgZWw7XG4gIHZhciBhciwgYnIsIGNyLCBkciwgZXI7XG5cbiAgYXIgPSBhbCA9IEhbMF07XG4gIGJyID0gYmwgPSBIWzFdO1xuICBjciA9IGNsID0gSFsyXTtcbiAgZHIgPSBkbCA9IEhbM107XG4gIGVyID0gZWwgPSBIWzRdO1xuICAvLyBDb21wdXRhdGlvblxuICB2YXIgdDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSArPSAxKSB7XG4gICAgdCA9IChhbCArICBNW29mZnNldCt6bFtpXV0pfDA7XG4gICAgaWYgKGk8MTYpe1xuICAgICAgICB0ICs9ICBmMShibCxjbCxkbCkgKyBobFswXTtcbiAgICB9IGVsc2UgaWYgKGk8MzIpIHtcbiAgICAgICAgdCArPSAgZjIoYmwsY2wsZGwpICsgaGxbMV07XG4gICAgfSBlbHNlIGlmIChpPDQ4KSB7XG4gICAgICAgIHQgKz0gIGYzKGJsLGNsLGRsKSArIGhsWzJdO1xuICAgIH0gZWxzZSBpZiAoaTw2NCkge1xuICAgICAgICB0ICs9ICBmNChibCxjbCxkbCkgKyBobFszXTtcbiAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XG4gICAgICAgIHQgKz0gIGY1KGJsLGNsLGRsKSArIGhsWzRdO1xuICAgIH1cbiAgICB0ID0gdHwwO1xuICAgIHQgPSAgcm90bCh0LHNsW2ldKTtcbiAgICB0ID0gKHQrZWwpfDA7XG4gICAgYWwgPSBlbDtcbiAgICBlbCA9IGRsO1xuICAgIGRsID0gcm90bChjbCwgMTApO1xuICAgIGNsID0gYmw7XG4gICAgYmwgPSB0O1xuXG4gICAgdCA9IChhciArIE1bb2Zmc2V0K3pyW2ldXSl8MDtcbiAgICBpZiAoaTwxNil7XG4gICAgICAgIHQgKz0gIGY1KGJyLGNyLGRyKSArIGhyWzBdO1xuICAgIH0gZWxzZSBpZiAoaTwzMikge1xuICAgICAgICB0ICs9ICBmNChicixjcixkcikgKyBoclsxXTtcbiAgICB9IGVsc2UgaWYgKGk8NDgpIHtcbiAgICAgICAgdCArPSAgZjMoYnIsY3IsZHIpICsgaHJbMl07XG4gICAgfSBlbHNlIGlmIChpPDY0KSB7XG4gICAgICAgIHQgKz0gIGYyKGJyLGNyLGRyKSArIGhyWzNdO1xuICAgIH0gZWxzZSB7Ly8gaWYgKGk8ODApIHtcbiAgICAgICAgdCArPSAgZjEoYnIsY3IsZHIpICsgaHJbNF07XG4gICAgfVxuICAgIHQgPSB0fDA7XG4gICAgdCA9ICByb3RsKHQsc3JbaV0pIDtcbiAgICB0ID0gKHQrZXIpfDA7XG4gICAgYXIgPSBlcjtcbiAgICBlciA9IGRyO1xuICAgIGRyID0gcm90bChjciwgMTApO1xuICAgIGNyID0gYnI7XG4gICAgYnIgPSB0O1xuICB9XG4gIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG4gIHQgICAgPSAoSFsxXSArIGNsICsgZHIpfDA7XG4gIEhbMV0gPSAoSFsyXSArIGRsICsgZXIpfDA7XG4gIEhbMl0gPSAoSFszXSArIGVsICsgYXIpfDA7XG4gIEhbM10gPSAoSFs0XSArIGFsICsgYnIpfDA7XG4gIEhbNF0gPSAoSFswXSArIGJsICsgY3IpfDA7XG4gIEhbMF0gPSAgdDtcbn07XG5cbmZ1bmN0aW9uIGYxKHgsIHksIHopIHtcbiAgcmV0dXJuICgoeCkgXiAoeSkgXiAoeikpO1xufVxuXG5mdW5jdGlvbiBmMih4LCB5LCB6KSB7XG4gIHJldHVybiAoKCh4KSYoeSkpIHwgKCh+eCkmKHopKSk7XG59XG5cbmZ1bmN0aW9uIGYzKHgsIHksIHopIHtcbiAgcmV0dXJuICgoKHgpIHwgKH4oeSkpKSBeICh6KSk7XG59XG5cbmZ1bmN0aW9uIGY0KHgsIHksIHopIHtcbiAgcmV0dXJuICgoKHgpICYgKHopKSB8ICgoeSkmKH4oeikpKSk7XG59XG5cbmZ1bmN0aW9uIGY1KHgsIHksIHopIHtcbiAgcmV0dXJuICgoeCkgXiAoKHkpIHwofih6KSkpKTtcbn1cblxuZnVuY3Rpb24gcm90bCh4LG4pIHtcbiAgcmV0dXJuICh4PDxuKSB8ICh4Pj4+KDMyLW4pKTtcbn1cblxuZnVuY3Rpb24gcmlwZW1kMTYwKG1lc3NhZ2UpIHtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhFRkNEQUI4OSwgMHg5OEJBRENGRSwgMHgxMDMyNTQ3NiwgMHhDM0QyRTFGMF07XG5cbiAgaWYgKHR5cGVvZiBtZXNzYWdlID09ICdzdHJpbmcnKVxuICAgIG1lc3NhZ2UgPSBuZXcgQnVmZmVyKG1lc3NhZ2UsICd1dGY4Jyk7XG5cbiAgdmFyIG0gPSBieXRlc1RvV29yZHMobWVzc2FnZSk7XG5cbiAgdmFyIG5CaXRzTGVmdCA9IG1lc3NhZ2UubGVuZ3RoICogODtcbiAgdmFyIG5CaXRzVG90YWwgPSBtZXNzYWdlLmxlbmd0aCAqIDg7XG5cbiAgLy8gQWRkIHBhZGRpbmdcbiAgbVtuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuICBtWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSAoXG4gICAgICAoKChuQml0c1RvdGFsIDw8IDgpICB8IChuQml0c1RvdGFsID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuICAgICAgKCgobkJpdHNUb3RhbCA8PCAyNCkgfCAobkJpdHNUb3RhbCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG4gICk7XG5cbiAgZm9yICh2YXIgaT0wIDsgaTxtLmxlbmd0aDsgaSArPSAxNikge1xuICAgIHByb2Nlc3NCbG9jayhILCBtLCBpKTtcbiAgfVxuXG4gIC8vIFN3YXAgZW5kaWFuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAvLyBTaG9ydGN1dFxuICAgIHZhciBIX2kgPSBIW2ldO1xuXG4gICAgLy8gU3dhcFxuICAgIEhbaV0gPSAoKChIX2kgPDwgOCkgIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcbiAgICAgICAgICAoKChIX2kgPDwgMjQpIHwgKEhfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuICB9XG5cbiAgdmFyIGRpZ2VzdGJ5dGVzID0gd29yZHNUb0J5dGVzKEgpO1xuICByZXR1cm4gbmV3IEJ1ZmZlcihkaWdlc3RieXRlcyk7XG59XG5cblxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwidmFyIHUgPSByZXF1aXJlKCcuL3V0aWwnKVxudmFyIHdyaXRlID0gdS53cml0ZVxudmFyIGZpbGwgPSB1Lnplcm9GaWxsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJ1ZmZlcikge1xuXG4gIC8vcHJvdG90eXBlIGNsYXNzIGZvciBoYXNoIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBIYXNoIChibG9ja1NpemUsIGZpbmFsU2l6ZSkge1xuICAgIHRoaXMuX2Jsb2NrID0gbmV3IEJ1ZmZlcihibG9ja1NpemUpIC8vbmV3IFVpbnQzMkFycmF5KGJsb2NrU2l6ZS80KVxuICAgIHRoaXMuX2ZpbmFsU2l6ZSA9IGZpbmFsU2l6ZVxuICAgIHRoaXMuX2Jsb2NrU2l6ZSA9IGJsb2NrU2l6ZVxuICAgIHRoaXMuX2xlbiA9IDBcbiAgICB0aGlzLl9zID0gMFxuICB9XG5cbiAgSGFzaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zID0gMFxuICAgIHRoaXMuX2xlbiA9IDBcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlbmd0aE9mKGRhdGEsIGVuYykge1xuICAgIGlmKGVuYyA9PSBudWxsKSAgICAgcmV0dXJuIGRhdGEuYnl0ZUxlbmd0aCB8fCBkYXRhLmxlbmd0aFxuICAgIGlmKGVuYyA9PSAnYXNjaWknIHx8IGVuYyA9PSAnYmluYXJ5JykgIHJldHVybiBkYXRhLmxlbmd0aFxuICAgIGlmKGVuYyA9PSAnaGV4JykgICAgcmV0dXJuIGRhdGEubGVuZ3RoLzJcbiAgICBpZihlbmMgPT0gJ2Jhc2U2NCcpIHJldHVybiBkYXRhLmxlbmd0aC8zXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jKSB7XG4gICAgdmFyIGJsID0gdGhpcy5fYmxvY2tTaXplXG5cbiAgICAvL0knZCByYXRoZXIgZG8gdGhpcyB3aXRoIGEgc3RyZWFtaW5nIGVuY29kZXIsIGxpa2UgdGhlIG9wcG9zaXRlIG9mXG4gICAgLy9odHRwOi8vbm9kZWpzLm9yZy9hcGkvc3RyaW5nX2RlY29kZXIuaHRtbFxuICAgIHZhciBsZW5ndGhcbiAgICAgIGlmKCFlbmMgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBkYXRhKVxuICAgICAgICBlbmMgPSAndXRmOCdcblxuICAgIGlmKGVuYykge1xuICAgICAgaWYoZW5jID09PSAndXRmLTgnKVxuICAgICAgICBlbmMgPSAndXRmOCdcblxuICAgICAgaWYoZW5jID09PSAnYmFzZTY0JyB8fCBlbmMgPT09ICd1dGY4JylcbiAgICAgICAgZGF0YSA9IG5ldyBCdWZmZXIoZGF0YSwgZW5jKSwgZW5jID0gbnVsbFxuXG4gICAgICBsZW5ndGggPSBsZW5ndGhPZihkYXRhLCBlbmMpXG4gICAgfSBlbHNlXG4gICAgICBsZW5ndGggPSBkYXRhLmJ5dGVMZW5ndGggfHwgZGF0YS5sZW5ndGhcblxuICAgIHZhciBsID0gdGhpcy5fbGVuICs9IGxlbmd0aFxuICAgIHZhciBzID0gdGhpcy5fcyA9ICh0aGlzLl9zIHx8IDApXG4gICAgdmFyIGYgPSAwXG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2Jsb2NrXG4gICAgd2hpbGUocyA8IGwpIHtcbiAgICAgIHZhciB0ID0gTWF0aC5taW4obGVuZ3RoLCBmICsgYmwpXG4gICAgICB3cml0ZShidWZmZXIsIGRhdGEsIGVuYywgcyVibCwgZiwgdClcbiAgICAgIHZhciBjaCA9ICh0IC0gZik7XG4gICAgICBzICs9IGNoOyBmICs9IGNoXG5cbiAgICAgIGlmKCEocyVibCkpXG4gICAgICAgIHRoaXMuX3VwZGF0ZShidWZmZXIpXG4gICAgfVxuICAgIHRoaXMuX3MgPSBzXG5cbiAgICByZXR1cm4gdGhpc1xuXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoZW5jKSB7XG4gICAgdmFyIGJsID0gdGhpcy5fYmxvY2tTaXplXG4gICAgdmFyIGZsID0gdGhpcy5fZmluYWxTaXplXG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbio4XG5cbiAgICB2YXIgeCA9IHRoaXMuX2Jsb2NrXG5cbiAgICB2YXIgYml0cyA9IGxlbiAlIChibCo4KVxuXG4gICAgLy9hZGQgZW5kIG1hcmtlciwgc28gdGhhdCBhcHBlbmRpbmcgMCdzIGNyZWF0cyBhIGRpZmZlcmVudCBoYXNoLlxuICAgIHhbdGhpcy5fbGVuICUgYmxdID0gMHg4MFxuICAgIGZpbGwodGhpcy5fYmxvY2ssIHRoaXMuX2xlbiAlIGJsICsgMSlcblxuICAgIGlmKGJpdHMgPj0gZmwqOCkge1xuICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX2Jsb2NrKVxuICAgICAgdS56ZXJvRmlsbCh0aGlzLl9ibG9jaywgMClcbiAgICB9XG5cbiAgICAvL1RPRE86IGhhbmRsZSBjYXNlIHdoZXJlIHRoZSBiaXQgbGVuZ3RoIGlzID4gTWF0aC5wb3coMiwgMjkpXG4gICAgeC53cml0ZUludDMyQkUobGVuLCBmbCArIDQpIC8vYmlnIGVuZGlhblxuXG4gICAgdmFyIGhhc2ggPSB0aGlzLl91cGRhdGUodGhpcy5fYmxvY2spIHx8IHRoaXMuX2hhc2goKVxuICAgIGlmKGVuYyA9PSBudWxsKSByZXR1cm4gaGFzaFxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKGVuYylcbiAgfVxuXG4gIEhhc2gucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdfdXBkYXRlIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgc3ViY2xhc3MnKVxuICB9XG5cbiAgcmV0dXJuIEhhc2hcbn1cbiIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWxnKSB7XG4gIHZhciBBbGcgPSBleHBvcnRzW2FsZ11cbiAgaWYoIUFsZykgdGhyb3cgbmV3IEVycm9yKGFsZyArICcgaXMgbm90IHN1cHBvcnRlZCAod2UgYWNjZXB0IHB1bGwgcmVxdWVzdHMpJylcbiAgcmV0dXJuIG5ldyBBbGcoKVxufVxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyXG52YXIgSGFzaCAgID0gcmVxdWlyZSgnLi9oYXNoJykoQnVmZmVyKVxuXG5leHBvcnRzLnNoYSA9XG5leHBvcnRzLnNoYTEgPSByZXF1aXJlKCcuL3NoYTEnKShCdWZmZXIsIEhhc2gpXG5leHBvcnRzLnNoYTI1NiA9IHJlcXVpcmUoJy4vc2hhMjU2JykoQnVmZmVyLCBIYXNoKVxuIiwiLypcbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgU2VjdXJlIEhhc2ggQWxnb3JpdGhtLCBTSEEtMSwgYXMgZGVmaW5lZFxuICogaW4gRklQUyBQVUIgMTgwLTFcbiAqIFZlcnNpb24gMi4xYSBDb3B5cmlnaHQgUGF1bCBKb2huc3RvbiAyMDAwIC0gMjAwMi5cbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIGRldGFpbHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJ1ZmZlciwgSGFzaCkge1xuXG4gIHZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbmhlcml0c1xuXG4gIGluaGVyaXRzKFNoYTEsIEhhc2gpXG5cbiAgdmFyIEEgPSAwfDBcbiAgdmFyIEIgPSA0fDBcbiAgdmFyIEMgPSA4fDBcbiAgdmFyIEQgPSAxMnwwXG4gIHZhciBFID0gMTZ8MFxuXG4gIHZhciBCRSA9IGZhbHNlXG4gIHZhciBMRSA9IHRydWVcblxuICB2YXIgVyA9IG5ldyBJbnQzMkFycmF5KDgwKVxuXG4gIHZhciBQT09MID0gW11cblxuICBmdW5jdGlvbiBTaGExICgpIHtcbiAgICBpZihQT09MLmxlbmd0aClcbiAgICAgIHJldHVybiBQT09MLnBvcCgpLmluaXQoKVxuXG4gICAgaWYoISh0aGlzIGluc3RhbmNlb2YgU2hhMSkpIHJldHVybiBuZXcgU2hhMSgpXG4gICAgdGhpcy5fdyA9IFdcbiAgICBIYXNoLmNhbGwodGhpcywgMTYqNCwgMTQqNClcbiAgXG4gICAgdGhpcy5faCA9IG51bGxcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgU2hhMS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9hID0gMHg2NzQ1MjMwMVxuICAgIHRoaXMuX2IgPSAweGVmY2RhYjg5XG4gICAgdGhpcy5fYyA9IDB4OThiYWRjZmVcbiAgICB0aGlzLl9kID0gMHgxMDMyNTQ3NlxuICAgIHRoaXMuX2UgPSAweGMzZDJlMWYwXG5cbiAgICBIYXNoLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgU2hhMS5wcm90b3R5cGUuX1BPT0wgPSBQT09MXG5cbiAgLy8gYXNzdW1lIHRoYXQgYXJyYXkgaXMgYSBVaW50MzJBcnJheSB3aXRoIGxlbmd0aD0xNixcbiAgLy8gYW5kIHRoYXQgaWYgaXQgaXMgdGhlIGxhc3QgYmxvY2ssIGl0IGFscmVhZHkgaGFzIHRoZSBsZW5ndGggYW5kIHRoZSAxIGJpdCBhcHBlbmRlZC5cblxuXG4gIHZhciBpc0RWID0gbmV3IEJ1ZmZlcigxKSBpbnN0YW5jZW9mIERhdGFWaWV3XG4gIGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChYLCBpKSB7XG4gICAgcmV0dXJuIGlzRFZcbiAgICAgID8gWC5nZXRJbnQzMihpLCBmYWxzZSlcbiAgICAgIDogWC5yZWFkSW50MzJCRShpKVxuICB9XG5cbiAgU2hhMS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuXG4gICAgdmFyIFggPSB0aGlzLl9ibG9ja1xuICAgIHZhciBoID0gdGhpcy5faFxuICAgIHZhciBhLCBiLCBjLCBkLCBlLCBfYSwgX2IsIF9jLCBfZCwgX2VcblxuICAgIGEgPSBfYSA9IHRoaXMuX2FcbiAgICBiID0gX2IgPSB0aGlzLl9iXG4gICAgYyA9IF9jID0gdGhpcy5fY1xuICAgIGQgPSBfZCA9IHRoaXMuX2RcbiAgICBlID0gX2UgPSB0aGlzLl9lXG5cbiAgICB2YXIgdyA9IHRoaXMuX3dcblxuICAgIGZvcih2YXIgaiA9IDA7IGogPCA4MDsgaisrKSB7XG4gICAgICB2YXIgVyA9IHdbal1cbiAgICAgICAgPSBqIDwgMTZcbiAgICAgICAgLy8/IFguZ2V0SW50MzIoaio0LCBmYWxzZSlcbiAgICAgICAgLy8/IHJlYWRJbnQzMkJFKFgsIGoqNCkgLy8qLyBYLnJlYWRJbnQzMkJFKGoqNCkgLy8qL1xuICAgICAgICA/IFgucmVhZEludDMyQkUoaio0KVxuICAgICAgICA6IHJvbCh3W2ogLSAzXSBeIHdbaiAtICA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSlcblxuICAgICAgdmFyIHQgPVxuICAgICAgICBhZGQoXG4gICAgICAgICAgYWRkKHJvbChhLCA1KSwgc2hhMV9mdChqLCBiLCBjLCBkKSksXG4gICAgICAgICAgYWRkKGFkZChlLCBXKSwgc2hhMV9rdChqKSlcbiAgICAgICAgKTtcblxuICAgICAgZSA9IGRcbiAgICAgIGQgPSBjXG4gICAgICBjID0gcm9sKGIsIDMwKVxuICAgICAgYiA9IGFcbiAgICAgIGEgPSB0XG4gICAgfVxuXG4gICAgdGhpcy5fYSA9IGFkZChhLCBfYSlcbiAgICB0aGlzLl9iID0gYWRkKGIsIF9iKVxuICAgIHRoaXMuX2MgPSBhZGQoYywgX2MpXG4gICAgdGhpcy5fZCA9IGFkZChkLCBfZClcbiAgICB0aGlzLl9lID0gYWRkKGUsIF9lKVxuICB9XG5cbiAgU2hhMS5wcm90b3R5cGUuX2hhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoUE9PTC5sZW5ndGggPCAxMDApIFBPT0wucHVzaCh0aGlzKVxuICAgIHZhciBIID0gbmV3IEJ1ZmZlcigyMClcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2F8MCwgdGhpcy5fYnwwLCB0aGlzLl9jfDAsIHRoaXMuX2R8MCwgdGhpcy5fZXwwKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2F8MCwgQSlcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9ifDAsIEIpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fY3wwLCBDKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2R8MCwgRClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9lfDAsIEUpXG4gICAgcmV0dXJuIEhcbiAgfVxuXG4gIC8qXG4gICAqIFBlcmZvcm0gdGhlIGFwcHJvcHJpYXRlIHRyaXBsZXQgY29tYmluYXRpb24gZnVuY3Rpb24gZm9yIHRoZSBjdXJyZW50XG4gICAqIGl0ZXJhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gc2hhMV9mdCh0LCBiLCBjLCBkKSB7XG4gICAgaWYodCA8IDIwKSByZXR1cm4gKGIgJiBjKSB8ICgofmIpICYgZCk7XG4gICAgaWYodCA8IDQwKSByZXR1cm4gYiBeIGMgXiBkO1xuICAgIGlmKHQgPCA2MCkgcmV0dXJuIChiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKTtcbiAgICByZXR1cm4gYiBeIGMgXiBkO1xuICB9XG5cbiAgLypcbiAgICogRGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSBhZGRpdGl2ZSBjb25zdGFudCBmb3IgdGhlIGN1cnJlbnQgaXRlcmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBzaGExX2t0KHQpIHtcbiAgICByZXR1cm4gKHQgPCAyMCkgPyAgMTUxODUwMDI0OSA6ICh0IDwgNDApID8gIDE4NTk3NzUzOTMgOlxuICAgICAgICAgICAodCA8IDYwKSA/IC0xODk0MDA3NTg4IDogLTg5OTQ5NzUxNDtcbiAgfVxuXG4gIC8qXG4gICAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAgICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAgICogLy9kb21pbmljdGFycjogdGhpcyBpcyAxMCB5ZWFycyBvbGQsIHNvIG1heWJlIHRoaXMgY2FuIGJlIGRyb3BwZWQ/KVxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkKHgsIHkpIHtcbiAgICByZXR1cm4gKHggKyB5ICkgfCAwXG4gIC8vbGV0cyBzZWUgaG93IHRoaXMgZ29lcyBvbiB0ZXN0bGluZy5cbiAgLy8gIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XG4gIC8vICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIC8vICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcbiAgfVxuXG4gIC8qXG4gICAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAgICovXG4gIGZ1bmN0aW9uIHJvbChudW0sIGNudCkge1xuICAgIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbiAgfVxuXG4gIHJldHVybiBTaGExXG59XG4iLCJcbi8qKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBTZWN1cmUgSGFzaCBBbGdvcml0aG0sIFNIQS0yNTYsIGFzIGRlZmluZWRcbiAqIGluIEZJUFMgMTgwLTJcbiAqIFZlcnNpb24gMi4yLWJldGEgQ29weXJpZ2h0IEFuZ2VsIE1hcmluLCBQYXVsIEpvaG5zdG9uIDIwMDAgLSAyMDA5LlxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICpcbiAqL1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcbnZhciBCRSAgICAgICA9IGZhbHNlXG52YXIgTEUgICAgICAgPSB0cnVlXG52YXIgdSAgICAgICAgPSByZXF1aXJlKCcuL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIsIEhhc2gpIHtcblxuICB2YXIgSyA9IFtcbiAgICAgIDB4NDI4QTJGOTgsIDB4NzEzNzQ0OTEsIDB4QjVDMEZCQ0YsIDB4RTlCNURCQTUsXG4gICAgICAweDM5NTZDMjVCLCAweDU5RjExMUYxLCAweDkyM0Y4MkE0LCAweEFCMUM1RUQ1LFxuICAgICAgMHhEODA3QUE5OCwgMHgxMjgzNUIwMSwgMHgyNDMxODVCRSwgMHg1NTBDN0RDMyxcbiAgICAgIDB4NzJCRTVENzQsIDB4ODBERUIxRkUsIDB4OUJEQzA2QTcsIDB4QzE5QkYxNzQsXG4gICAgICAweEU0OUI2OUMxLCAweEVGQkU0Nzg2LCAweDBGQzE5REM2LCAweDI0MENBMUNDLFxuICAgICAgMHgyREU5MkM2RiwgMHg0QTc0ODRBQSwgMHg1Q0IwQTlEQywgMHg3NkY5ODhEQSxcbiAgICAgIDB4OTgzRTUxNTIsIDB4QTgzMUM2NkQsIDB4QjAwMzI3QzgsIDB4QkY1OTdGQzcsXG4gICAgICAweEM2RTAwQkYzLCAweEQ1QTc5MTQ3LCAweDA2Q0E2MzUxLCAweDE0MjkyOTY3LFxuICAgICAgMHgyN0I3MEE4NSwgMHgyRTFCMjEzOCwgMHg0RDJDNkRGQywgMHg1MzM4MEQxMyxcbiAgICAgIDB4NjUwQTczNTQsIDB4NzY2QTBBQkIsIDB4ODFDMkM5MkUsIDB4OTI3MjJDODUsXG4gICAgICAweEEyQkZFOEExLCAweEE4MUE2NjRCLCAweEMyNEI4QjcwLCAweEM3NkM1MUEzLFxuICAgICAgMHhEMTkyRTgxOSwgMHhENjk5MDYyNCwgMHhGNDBFMzU4NSwgMHgxMDZBQTA3MCxcbiAgICAgIDB4MTlBNEMxMTYsIDB4MUUzNzZDMDgsIDB4Mjc0ODc3NEMsIDB4MzRCMEJDQjUsXG4gICAgICAweDM5MUMwQ0IzLCAweDRFRDhBQTRBLCAweDVCOUNDQTRGLCAweDY4MkU2RkYzLFxuICAgICAgMHg3NDhGODJFRSwgMHg3OEE1NjM2RiwgMHg4NEM4NzgxNCwgMHg4Q0M3MDIwOCxcbiAgICAgIDB4OTBCRUZGRkEsIDB4QTQ1MDZDRUIsIDB4QkVGOUEzRjcsIDB4QzY3MTc4RjJcbiAgICBdXG5cbiAgaW5oZXJpdHMoU2hhMjU2LCBIYXNoKVxuICB2YXIgVyA9IG5ldyBBcnJheSg2NClcbiAgdmFyIFBPT0wgPSBbXVxuICBmdW5jdGlvbiBTaGEyNTYoKSB7XG4gICAgaWYoUE9PTC5sZW5ndGgpIHtcbiAgICAgIC8vcmV0dXJuIFBPT0wuc2hpZnQoKS5pbml0KClcbiAgICB9XG4gICAgLy90aGlzLl9kYXRhID0gbmV3IEJ1ZmZlcigzMilcblxuICAgIHRoaXMuaW5pdCgpXG5cbiAgICB0aGlzLl93ID0gVyAvL25ldyBBcnJheSg2NClcblxuICAgIEhhc2guY2FsbCh0aGlzLCAxNio0LCAxNCo0KVxuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMuX2EgPSAweDZhMDllNjY3fDBcbiAgICB0aGlzLl9iID0gMHhiYjY3YWU4NXwwXG4gICAgdGhpcy5fYyA9IDB4M2M2ZWYzNzJ8MFxuICAgIHRoaXMuX2QgPSAweGE1NGZmNTNhfDBcbiAgICB0aGlzLl9lID0gMHg1MTBlNTI3ZnwwXG4gICAgdGhpcy5fZiA9IDB4OWIwNTY4OGN8MFxuICAgIHRoaXMuX2cgPSAweDFmODNkOWFifDBcbiAgICB0aGlzLl9oID0gMHg1YmUwY2QxOXwwXG5cbiAgICB0aGlzLl9sZW4gPSB0aGlzLl9zID0gMFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhciBzYWZlX2FkZCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgbHN3ID0gKHggJiAweEZGRkYpICsgKHkgJiAweEZGRkYpO1xuICAgIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFMgKFgsIG4pIHtcbiAgICByZXR1cm4gKFggPj4+IG4pIHwgKFggPDwgKDMyIC0gbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gUiAoWCwgbikge1xuICAgIHJldHVybiAoWCA+Pj4gbik7XG4gIH1cblxuICBmdW5jdGlvbiBDaCAoeCwgeSwgeikge1xuICAgIHJldHVybiAoKHggJiB5KSBeICgofngpICYgeikpO1xuICB9XG5cbiAgZnVuY3Rpb24gTWFqICh4LCB5LCB6KSB7XG4gICAgcmV0dXJuICgoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeikpO1xuICB9XG5cbiAgZnVuY3Rpb24gU2lnbWEwMjU2ICh4KSB7XG4gICAgcmV0dXJuIChTKHgsIDIpIF4gUyh4LCAxMykgXiBTKHgsIDIyKSk7XG4gIH1cblxuICBmdW5jdGlvbiBTaWdtYTEyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgNikgXiBTKHgsIDExKSBeIFMoeCwgMjUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdhbW1hMDI1NiAoeCkge1xuICAgIHJldHVybiAoUyh4LCA3KSBeIFMoeCwgMTgpIF4gUih4LCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBHYW1tYTEyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgMTcpIF4gUyh4LCAxOSkgXiBSKHgsIDEwKSk7XG4gIH1cblxuICBTaGEyNTYucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbihtKSB7XG4gICAgdmFyIE0gPSB0aGlzLl9ibG9ja1xuICAgIHZhciBXID0gdGhpcy5fd1xuICAgIHZhciBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoXG4gICAgdmFyIFQxLCBUMlxuXG4gICAgYSA9IHRoaXMuX2EgfCAwXG4gICAgYiA9IHRoaXMuX2IgfCAwXG4gICAgYyA9IHRoaXMuX2MgfCAwXG4gICAgZCA9IHRoaXMuX2QgfCAwXG4gICAgZSA9IHRoaXMuX2UgfCAwXG4gICAgZiA9IHRoaXMuX2YgfCAwXG4gICAgZyA9IHRoaXMuX2cgfCAwXG4gICAgaCA9IHRoaXMuX2ggfCAwXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyBqKyspIHtcbiAgICAgIHZhciB3ID0gV1tqXSA9IGogPCAxNlxuICAgICAgICA/IE0ucmVhZEludDMyQkUoaiAqIDQpXG4gICAgICAgIDogR2FtbWExMjU2KFdbaiAtIDJdKSArIFdbaiAtIDddICsgR2FtbWEwMjU2KFdbaiAtIDE1XSkgKyBXW2ogLSAxNl1cblxuICAgICAgVDEgPSBoICsgU2lnbWExMjU2KGUpICsgQ2goZSwgZiwgZykgKyBLW2pdICsgd1xuXG4gICAgICBUMiA9IFNpZ21hMDI1NihhKSArIE1haihhLCBiLCBjKTtcbiAgICAgIGggPSBnOyBnID0gZjsgZiA9IGU7IGUgPSBkICsgVDE7IGQgPSBjOyBjID0gYjsgYiA9IGE7IGEgPSBUMSArIFQyO1xuICAgIH1cblxuICAgIHRoaXMuX2EgPSAoYSArIHRoaXMuX2EpIHwgMFxuICAgIHRoaXMuX2IgPSAoYiArIHRoaXMuX2IpIHwgMFxuICAgIHRoaXMuX2MgPSAoYyArIHRoaXMuX2MpIHwgMFxuICAgIHRoaXMuX2QgPSAoZCArIHRoaXMuX2QpIHwgMFxuICAgIHRoaXMuX2UgPSAoZSArIHRoaXMuX2UpIHwgMFxuICAgIHRoaXMuX2YgPSAoZiArIHRoaXMuX2YpIHwgMFxuICAgIHRoaXMuX2cgPSAoZyArIHRoaXMuX2cpIHwgMFxuICAgIHRoaXMuX2ggPSAoaCArIHRoaXMuX2gpIHwgMFxuXG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5faGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihQT09MLmxlbmd0aCA8IDEwKVxuICAgICAgUE9PTC5wdXNoKHRoaXMpXG5cbiAgICB2YXIgSCA9IG5ldyBCdWZmZXIoMzIpXG5cbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9hLCAgMClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9iLCAgNClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9jLCAgOClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9kLCAxMilcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9lLCAxNilcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9mLCAyMClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9nLCAyNClcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9oLCAyOClcblxuICAgIHJldHVybiBIXG4gIH1cblxuICByZXR1cm4gU2hhMjU2XG5cbn1cbiIsImV4cG9ydHMud3JpdGUgPSB3cml0ZVxuZXhwb3J0cy56ZXJvRmlsbCA9IHplcm9GaWxsXG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZ1xuXG5mdW5jdGlvbiB3cml0ZSAoYnVmZmVyLCBzdHJpbmcsIGVuYywgc3RhcnQsIGZyb20sIHRvLCBMRSkge1xuICB2YXIgbCA9ICh0byAtIGZyb20pXG4gIGlmKGVuYyA9PT0gJ2FzY2lpJyB8fCBlbmMgPT09ICdiaW5hcnknKSB7XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGJ1ZmZlcltzdGFydCArIGldID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIGZyb20pXG4gICAgfVxuICB9XG4gIGVsc2UgaWYoZW5jID09IG51bGwpIHtcbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgYnVmZmVyW3N0YXJ0ICsgaV0gPSBzdHJpbmdbaSArIGZyb21dXG4gICAgfVxuICB9XG4gIGVsc2UgaWYoZW5jID09PSAnaGV4Jykge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBqID0gZnJvbSArIGlcbiAgICAgIGJ1ZmZlcltzdGFydCArIGldID0gcGFyc2VJbnQoc3RyaW5nW2oqMl0gKyBzdHJpbmdbKGoqMikrMV0sIDE2KVxuICAgIH1cbiAgfVxuICBlbHNlIGlmKGVuYyA9PT0gJ2Jhc2U2NCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Jhc2U2NCBlbmNvZGluZyBub3QgeWV0IHN1cHBvcnRlZCcpXG4gIH1cbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcihlbmMgKycgZW5jb2Rpbmcgbm90IHlldCBzdXBwb3J0ZWQnKVxufVxuXG4vL2Fsd2F5cyBmaWxsIHRvIHRoZSBlbmQhXG5mdW5jdGlvbiB6ZXJvRmlsbChidWYsIGZyb20pIHtcbiAgZm9yKHZhciBpID0gZnJvbTsgaSA8IGJ1Zi5sZW5ndGg7IGkrKylcbiAgICBidWZbaV0gPSAwXG59XG5cbiIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbi8vIEphdmFTY3JpcHQgUEJLREYyIEltcGxlbWVudGF0aW9uXG4vLyBCYXNlZCBvbiBodHRwOi8vZ2l0LmlvL3FzdjJ6d1xuLy8gTGljZW5zZWQgdW5kZXIgTEdQTCB2M1xuLy8gQ29weXJpZ2h0IChjKSAyMDEzIGpkdW5jYW5hdG9yXG5cbnZhciBibG9ja3NpemUgPSA2NFxudmFyIHplcm9CdWZmZXIgPSBuZXcgQnVmZmVyKGJsb2Nrc2l6ZSk7IHplcm9CdWZmZXIuZmlsbCgwKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjcmVhdGVIbWFjLCBleHBvcnRzKSB7XG4gIGV4cG9ydHMgPSBleHBvcnRzIHx8IHt9XG5cbiAgZXhwb3J0cy5wYmtkZjIgPSBmdW5jdGlvbihwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuLCBjYikge1xuICAgIGlmKCdmdW5jdGlvbicgIT09IHR5cGVvZiBjYilcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2FsbGJhY2sgcHJvdmlkZWQgdG8gcGJrZGYyJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYihudWxsLCBleHBvcnRzLnBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbikpXG4gICAgfSlcbiAgfVxuXG4gIGV4cG9ydHMucGJrZGYyU3luYyA9IGZ1bmN0aW9uKGtleSwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuKSB7XG4gICAgaWYoJ251bWJlcicgIT09IHR5cGVvZiBpdGVyYXRpb25zKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSXRlcmF0aW9ucyBub3QgYSBudW1iZXInKVxuICAgIGlmKGl0ZXJhdGlvbnMgPCAwKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGl0ZXJhdGlvbnMnKVxuICAgIGlmKCdudW1iZXInICE9PSB0eXBlb2Yga2V5bGVuKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignS2V5IGxlbmd0aCBub3QgYSBudW1iZXInKVxuICAgIGlmKGtleWxlbiA8IDApXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQga2V5IGxlbmd0aCcpXG5cbiAgICAvL3N0cmV0Y2gga2V5IHRvIHRoZSBjb3JyZWN0IGxlbmd0aCB0aGF0IGhtYWMgd2FudHMgaXQsXG4gICAgLy9vdGhlcndpc2UgdGhpcyB3aWxsIGhhcHBlbiBldmVyeSB0aW1lIGhtYWMgaXMgY2FsbGVkXG4gICAgLy90d2ljZSBwZXIgaXRlcmF0aW9uLlxuICAgIHZhciBrZXkgPSAhQnVmZmVyLmlzQnVmZmVyKGtleSkgPyBuZXcgQnVmZmVyKGtleSkgOiBrZXlcblxuICAgIGlmKGtleS5sZW5ndGggPiBibG9ja3NpemUpIHtcbiAgICAgIGtleSA9IGNyZWF0ZUhhc2goYWxnKS51cGRhdGUoa2V5KS5kaWdlc3QoKVxuICAgIH0gZWxzZSBpZihrZXkubGVuZ3RoIDwgYmxvY2tzaXplKSB7XG4gICAgICBrZXkgPSBCdWZmZXIuY29uY2F0KFtrZXksIHplcm9CdWZmZXJdLCBibG9ja3NpemUpXG4gICAgfVxuXG4gICAgdmFyIEhNQUM7XG4gICAgdmFyIGNwbGVuLCBwID0gMCwgaSA9IDEsIGl0bXAgPSBuZXcgQnVmZmVyKDQpLCBkaWd0bXA7XG4gICAgdmFyIG91dCA9IG5ldyBCdWZmZXIoa2V5bGVuKTtcbiAgICBvdXQuZmlsbCgwKTtcbiAgICB3aGlsZShrZXlsZW4pIHtcbiAgICAgIGlmKGtleWxlbiA+IDIwKVxuICAgICAgICBjcGxlbiA9IDIwO1xuICAgICAgZWxzZVxuICAgICAgICBjcGxlbiA9IGtleWxlbjtcblxuICAgICAgLyogV2UgYXJlIHVubGlrZWx5IHRvIGV2ZXIgdXNlIG1vcmUgdGhhbiAyNTYgYmxvY2tzICg1MTIwIGJpdHMhKVxuICAgICAgICAgKiBidXQganVzdCBpbiBjYXNlLi4uXG4gICAgICAgICAqL1xuICAgICAgICBpdG1wWzBdID0gKGkgPj4gMjQpICYgMHhmZjtcbiAgICAgICAgaXRtcFsxXSA9IChpID4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgaXRtcFsyXSA9IChpID4+IDgpICYgMHhmZjtcbiAgICAgICAgICBpdG1wWzNdID0gaSAmIDB4ZmY7XG5cbiAgICAgICAgICBITUFDID0gY3JlYXRlSG1hYygnc2hhMScsIGtleSk7XG4gICAgICAgICAgSE1BQy51cGRhdGUoc2FsdClcbiAgICAgICAgICBITUFDLnVwZGF0ZShpdG1wKTtcbiAgICAgICAgZGlndG1wID0gSE1BQy5kaWdlc3QoKTtcbiAgICAgICAgZGlndG1wLmNvcHkob3V0LCBwLCAwLCBjcGxlbik7XG5cbiAgICAgICAgZm9yKHZhciBqID0gMTsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICAgIEhNQUMgPSBjcmVhdGVIbWFjKCdzaGExJywga2V5KTtcbiAgICAgICAgICBITUFDLnVwZGF0ZShkaWd0bXApO1xuICAgICAgICAgIGRpZ3RtcCA9IEhNQUMuZGlnZXN0KCk7XG4gICAgICAgICAgZm9yKHZhciBrID0gMDsgayA8IGNwbGVuOyBrKyspIHtcbiAgICAgICAgICAgIG91dFtrXSBePSBkaWd0bXBba107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBrZXlsZW4gLT0gY3BsZW47XG4gICAgICBpKys7XG4gICAgICBwICs9IGNwbGVuO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICByZXR1cm4gZXhwb3J0c1xufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xuLy8gT3JpZ2luYWwgY29kZSBhZGFwdGVkIGZyb20gUm9iZXJ0IEtpZWZmZXIuXG4vLyBkZXRhaWxzIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkXG5cblxuKGZ1bmN0aW9uKCkge1xuICB2YXIgX2dsb2JhbCA9IHRoaXM7XG5cbiAgdmFyIG1hdGhSTkcsIHdoYXR3Z1JORztcblxuICAvLyBOT1RFOiBNYXRoLnJhbmRvbSgpIGRvZXMgbm90IGd1YXJhbnRlZSBcImNyeXB0b2dyYXBoaWMgcXVhbGl0eVwiXG4gIG1hdGhSTkcgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IEJ1ZmZlcihzaXplKTtcbiAgICB2YXIgcjtcblxuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgYnl0ZXNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ5dGVzO1xuICB9XG5cbiAgaWYgKF9nbG9iYWwuY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICB3aGF0d2dSTkcgPSBmdW5jdGlvbihzaXplKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgQnVmZmVyKHNpemUpOyAvL2luIGJyb3dzZXJpZnksIHRoaXMgaXMgYW4gZXh0ZW5kZWQgVWludDhBcnJheVxuICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3aGF0d2dSTkcgfHwgbWF0aFJORztcblxufSgpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJxdk1ZY0NcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIid1c2Ugc3RyaWN0JztcbnZhciBLZWVuID0gcmVxdWlyZSgna2Vlbi5pbycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gZm9vQ29udHJvbGxlcigkc2NvcGUsICRodHRwLCAkdGltZW91dCkge1xuICBcdHZhciBwcm9mZXNzaW9uYWxzID0gbnVsbDtcbiAgICB2YXIgcmF0ZWRQcm9mZXNzaW9uYWxzID0ge2NvdW50OjB9O1xuICBcdC8vIHRvZG8gOiBtb3ZlIHRoaXMgaW4gYSBzZXJ2aWNlXG4gIFx0dmFyIGtlZW5DbGllbnQgPSBLZWVuLmNvbmZpZ3VyZSh7XG4gIFx0XHRwcm9qZWN0SWQgOiAnNTQ5ZjNjOTVkMmVhYWEwMmRhMTU3MDUyJyxcbiAgXHRcdHdyaXRlS2V5IDogJzRhYWZkNzc0MTIwZWExOGVhMGI4NTIyNDU4YjU5MDM4NDkxNmZhNzNhMTY0ZjQxZDdiY2M0NDk2YWQ0ODk2NWZjZWZmMGM3ZTMzMWY3YWYzY2YwNTlmOTM0MWRmMjU2NmEwN2FjZDRhODA0ZWJjNjEyYzEzY2RhOGVmOGI3NjgxZmU4N2RiMzkwYTZhMDVlM2VmMGU4NjU1ZGQ4M2E4MTBiMmJmZWEwNzM2ODFjZmYwMTFjMThmODA1YTYzNTQ4YjlkYTBiNWM4YjgyMWIxMTAyMGRlNmFhMWE5M2VlZTBjJyxcbiAgXHRcdHJlYWRLZXkgOiAnOTIyMjU0OGYwODEwNjhmZjRmZGMxMDNlYjFiZTEyNzljYTRjZDY3OTA5M2Y5MmRiMmZmYWJlNWRhZjlkOTNlY2U1ZTBjYThmODJiZGJhNWEzZDc1ZGNkNzRjYjNjNzk0NDcyNGU5NTRkMzFkZDNiZDQ5MzBhYTkzMjAxMWMyZDJmZDExZTc0OWY0NGQ3MTQ1NmY0YjY4ZWEzNjMxNmI5MGYwYTA3MTM3YTRkZGVkM2VlODMxMzZjYjE2MTUzOGQ5ZDg3YmFhYTRhYWFiMjFiZTdiNTBlOTUyYmI3Mzg1N2InXG4gIFx0fSk7XG5cbiAgXHRmdW5jdGlvbiBzZXROZXh0UHJvZmVzc2lvbmFsKCl7XG4gIFx0XHR2YXIgcHJvZmVzc2lvbm5hbEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJvZmVzc2lvbmFscy5sZW5ndGgpO1xuICAgICAgICB2YXIgcHJvZmVzc2lvbmFsID0gcHJvZmVzc2lvbmFsc1twcm9mZXNzaW9ubmFsSW5kZXhdO1xuICAgICAgICB3aGlsZShyYXRlZFByb2Zlc3Npb25hbHNbcHJvZmVzc2lvbmFsLklEXSAmJiByYXRlZFByb2Zlc3Npb25hbHMuY291bnQgPCBwcm9mZXNzaW9uYWwubGVuZ3RoKXtcbiAgICAgICAgICAgIGlmKHByb2Zlc3Npb25uYWxJbmRleCA9PSBwcm9mZXNzaW9uYWxzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5hbEluZGV4ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9mZXNzaW9ubmFsSW5kZXgrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZmVzc2lvbmFsID0gcHJvZmVzc2lvbmFsc1twcm9mZXNzaW9ubmFsSW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgICRzY29wZS5jdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwgPSBwcm9mZXNzaW9uYWxzW3Byb2Zlc3Npb25uYWxJbmRleF07XG4gIFx0fVxuXG4gIFx0JHNjb3BlLnJhdGUgPSBmdW5jdGlvbihyYXRpbmcsIGV2ZW50KXtcbiAgXHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICBcdFx0JCgnI3Byb2Zlc3Npb25hbCcpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlT3V0RG93bicpO1xuICBcdFx0a2VlbkNsaWVudC5hZGRFdmVudCgncmF0aW5nJywge3Byb2Zlc3Npb25hbElEOiAkc2NvcGUuY3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLklELCByYXRpbmc6cmF0aW5nfSk7XG4gICAgICAgIHJhdGVkUHJvZmVzc2lvbmFsc1skc2NvcGUuY3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLklEXSA9IHRydWU7XG4gICAgICAgIHJhdGVkUHJvZmVzc2lvbmFscy5jb3VudCsrO1xuICBcdFx0JHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgXHRcdFx0c2V0TmV4dFByb2Zlc3Npb25hbCgpO1xuICBcdFx0XHQkKCcjcHJvZmVzc2lvbmFsJykucmVtb3ZlQ2xhc3MoJ2ZhZGVPdXREb3duJyk7XG4gIFx0XHRcdCQoJyNwcm9mZXNzaW9uYWwnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluRG93bicpO1x0XG4gIFx0XHR9LCAxMDAwKTtcbiAgXHR9O1xuXG4gIFx0JGh0dHAuZ2V0KCdhc3NldHMvZGF0YS9wcm9mZXNzaW9uYWxzLmpzb24nKVxuICBcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHByb2Zlc3Npb25hbHMgPSBkYXRhO1xuXHRcdHNldE5leHRQcm9mZXNzaW9uYWwoKTtcblx0fSk7XG4gIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYW5ndWxhci5tb2R1bGUoJ3p1bHVhcHAuZm9vJywgW1xuICAgIC8vbG9hZCB5b3VyIGZvbyBzdWJtb2R1bGVzIGhlcmUsIGUuZy46XG4gICAgLy9yZXF1aXJlKCcuL2JhcicpLm5hbWVcbiAgXSlcbiAgLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnZm9vJywge1xuICAgICAgdXJsOiAnJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Zvby9sYXlvdXQuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnZm9vQ29udHJvbGxlcidcbiAgICB9KTtcbiAgfSlcbiAgLmNvbnRyb2xsZXIoJ2Zvb0NvbnRyb2xsZXInLCByZXF1aXJlKCcuL2Zvb0NvbnRyb2xsZXInKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYW5ndWxhci5tb2R1bGUoJ3p1bHVhcHAnLCBbXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgLy9sb2FkIGV4dHJhIGV4dGVybmFsIGRlcGVuZGVuY2llcyBoZXJlLCBlLmcuOlxuICAgIC8vJ25nQW5pbWF0ZScsXG4gICAgLy9odG1sIHRlbXBsYXRlcyBpbiAkdGVtcGxhdGVDYWNoZSBnZW5lcmF0ZWQgYnkgR3VscDpcbiAgICByZXF1aXJlKCcuLi8uLi8uLi90bXAvdGVtcGxhdGVzJykubmFtZSxcbiAgICAvL3VzZWZ1bCBkaXJlY3RpdmVzLCBmaWx0ZXJzLCBzZXJ2aWNlcyBzaGFyZWQgYWNyb3NzIHRoZSBhcHBcbiAgICAvL2V4YW1wbGUgYXBwIG1vZHVsZTpcbiAgICByZXF1aXJlKCcuL2ZvbycpLm5hbWUsXG4gIF0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL2Jyb3dzZXJpZnktc2hpbSBkZXBlbmRlbmNpZXMgKGNhbiBiZSBlZGl0ZWQgaW4gcGFja2FnZS5qc29uKVxucmVxdWlyZSgnYW5ndWxhcicpO1xuXG4gIHJlcXVpcmUoJ2FuZ3VsYXItdWktYm9vdHN0cmFwJyk7XG4gIHJlcXVpcmUoJ2FuZ3VsYXItdWktcm91dGVyJyk7XG4vL2FwcCBlbnRyeSBwb2ludFxucmVxdWlyZSgnLi9hcHAnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9mb28vbGF5b3V0Lmh0bWxcIixcIjxkaXYgaWQ9XFxcInByb2Zlc3Npb25hbFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG5cdDxpbWcgY2xhc3M9XFxcImltZy1jaXJjbGVcXFwiIG5nLXNyYz1cXFwie3tjdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwucGljdHVyZVVybH19XFxcIj5cXG5cdDxoMT57e2N1cnJlbnRSYXRlZFByb2Zlc3Npb25hbC5uYW1lfX08L2gxPlxcblx0PHAgY2xhc3M9XFxcInByb2Zlc3Npb25cXFwiPnt7Y3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLnByb2Zlc3Npb259fTwvcD5cXG5cdDxkaXYgY2xhc3M9XFxcInJvdyB0ZXh0LWNlbnRlciByYXRpbmctYm94XFxcIj5cXG5cdFx0PGg0PlF1ZWxsZSBub3RlIGx1aSBkb25uZXMtdHUgPzwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtM1xcXCI+XFxuXHRcdFx0PGltZyBzcmM9XFxcImFzc2V0cy9pbWFnZXMvYm9yZWQuc3ZnXFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctcmVwZWF0PVxcXCJyYXRpbmcgaW4gWzEsMiwzLDQsNV1cXFwiIG5nLWNsaWNrPVxcXCJyYXRlKHJhdGluZywgJGV2ZW50KVxcXCI+Jm5ic3A7e3tyYXRpbmd9fSZuYnNwOzwvYnV0dG9uPlxcblx0XHRcdDwvZGl2Plxcblx0XHRcdDxpbWcgc3JjPVxcXCJhc3NldHMvaW1hZ2VzL2V4Y2l0ZWQuc3ZnXFxcIj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG5cdFxcblxcblwiKTt9XSk7Il19
