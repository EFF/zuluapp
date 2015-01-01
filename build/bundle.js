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
  		keenClient.addEvent('rating', {professionalID: $scope.currentRatedProfessional.ID, rating:rating});
      addToRated($scope.currentRatedProfessional.ID, rating);
      getNextView()
  	};

  	$http.get('assets/data/professionals.json')
  	.success(function(data){
		professionals = data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItYm9vdHN0cmFwL3VpLWJvb3RzdHJhcC10cGxzLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ib3dlcl9jb21wb25lbnRzL2FuZ3VsYXItdWktcm91dGVyL3JlbGVhc2UvYW5ndWxhci11aS1yb3V0ZXIubWluLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL2Jvd2VyX2NvbXBvbmVudHMvYW5ndWxhci9hbmd1bGFyLm1pbi5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMva2Vlbi5pby9saWIvcXVlcnkuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbGliL3JlcXVlc3RzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL2tlZW4uaW8vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L25vZGVfbW9kdWxlcy9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy9rZWVuLmlvL25vZGVfbW9kdWxlcy91bmRlcnNjb3JlL3VuZGVyc2NvcmUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pcy1hcnJheS9pbmRleC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2NyeXB0by1icm93c2VyaWZ5L2NyZWF0ZS1oYXNoLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvY3JlYXRlLWhtYWMuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9oZWxwZXJzLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9tZDUuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcmlwZW1kMTYwL2xpYi9yaXBlbWQxNjAuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2hhc2guanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL2luZGV4LmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGExLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvY3J5cHRvLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3NoYS5qcy9zaGEyNTYuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvc2hhLmpzL3V0aWwuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9wYmtkZjIuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9jcnlwdG8tYnJvd3NlcmlmeS9ybmcuanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvZm9vL2hvbWVDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VmZl9pdC9wcm9qZWN0cy96dWx1YXBwL3NyYy9tb2R1bGVzL2FwcC9mb28vaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvYXBwL2Zvby9yYXRlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lZmZfaXQvcHJvamVjdHMvenVsdWFwcC9zcmMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvc3JjL21vZHVsZXMvaW5kZXguanMiLCIvVXNlcnMvZWZmX2l0L3Byb2plY3RzL3p1bHVhcHAvdG1wL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNXZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBhbmd1bGFyLXVpLWJvb3RzdHJhcFxuICogaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmlvL2Jvb3RzdHJhcC9cblxuICogVmVyc2lvbjogMC4xMS4yIC0gMjAxNC0wOS0yNlxuICogTGljZW5zZTogTUlUXG4gKi9cbmFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwXCIsW1widWkuYm9vdHN0cmFwLnRwbHNcIixcInVpLmJvb3RzdHJhcC50cmFuc2l0aW9uXCIsXCJ1aS5ib290c3RyYXAuY29sbGFwc2VcIixcInVpLmJvb3RzdHJhcC5hY2NvcmRpb25cIixcInVpLmJvb3RzdHJhcC5hbGVydFwiLFwidWkuYm9vdHN0cmFwLmJpbmRIdG1sXCIsXCJ1aS5ib290c3RyYXAuYnV0dG9uc1wiLFwidWkuYm9vdHN0cmFwLmNhcm91c2VsXCIsXCJ1aS5ib290c3RyYXAuZGF0ZXBhcnNlclwiLFwidWkuYm9vdHN0cmFwLnBvc2l0aW9uXCIsXCJ1aS5ib290c3RyYXAuZGF0ZXBpY2tlclwiLFwidWkuYm9vdHN0cmFwLmRyb3Bkb3duXCIsXCJ1aS5ib290c3RyYXAubW9kYWxcIixcInVpLmJvb3RzdHJhcC5wYWdpbmF0aW9uXCIsXCJ1aS5ib290c3RyYXAudG9vbHRpcFwiLFwidWkuYm9vdHN0cmFwLnBvcG92ZXJcIixcInVpLmJvb3RzdHJhcC5wcm9ncmVzc2JhclwiLFwidWkuYm9vdHN0cmFwLnJhdGluZ1wiLFwidWkuYm9vdHN0cmFwLnRhYnNcIixcInVpLmJvb3RzdHJhcC50aW1lcGlja2VyXCIsXCJ1aS5ib290c3RyYXAudHlwZWFoZWFkXCJdKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50cGxzXCIsW1widGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5odG1sXCIsXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLmh0bWxcIixcInRlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIixcInRlbXBsYXRlL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWxcIixcInRlbXBsYXRlL2Nhcm91c2VsL3NsaWRlLmh0bWxcIixcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIsXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL21vbnRoLmh0bWxcIixcInRlbXBsYXRlL2RhdGVwaWNrZXIvcG9wdXAuaHRtbFwiLFwidGVtcGxhdGUvZGF0ZXBpY2tlci95ZWFyLmh0bWxcIixcInRlbXBsYXRlL21vZGFsL2JhY2tkcm9wLmh0bWxcIixcInRlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sXCIsXCJ0ZW1wbGF0ZS9wYWdpbmF0aW9uL3BhZ2VyLmh0bWxcIixcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sXCIsXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtaHRtbC11bnNhZmUtcG9wdXAuaHRtbFwiLFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWxcIixcInRlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci5odG1sXCIsXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwiLFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLFwidGVtcGxhdGUvcmF0aW5nL3JhdGluZy5odG1sXCIsXCJ0ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsXCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsXCJ0ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sXCIsXCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLXBvcHVwLmh0bWxcIl0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRyYW5zaXRpb25cIixbXSkuZmFjdG9yeShcIiR0cmFuc2l0aW9uXCIsW1wiJHFcIixcIiR0aW1lb3V0XCIsXCIkcm9vdFNjb3BlXCIsZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7Zm9yKHZhciBiIGluIGEpaWYodm9pZCAwIT09Zi5zdHlsZVtiXSlyZXR1cm4gYVtiXX12YXIgZT1mdW5jdGlvbihkLGYsZyl7Zz1nfHx7fTt2YXIgaD1hLmRlZmVyKCksaT1lW2cuYW5pbWF0aW9uP1wiYW5pbWF0aW9uRW5kRXZlbnROYW1lXCI6XCJ0cmFuc2l0aW9uRW5kRXZlbnROYW1lXCJdLGo9ZnVuY3Rpb24oKXtjLiRhcHBseShmdW5jdGlvbigpe2QudW5iaW5kKGksaiksaC5yZXNvbHZlKGQpfSl9O3JldHVybiBpJiZkLmJpbmQoaSxqKSxiKGZ1bmN0aW9uKCl7YW5ndWxhci5pc1N0cmluZyhmKT9kLmFkZENsYXNzKGYpOmFuZ3VsYXIuaXNGdW5jdGlvbihmKT9mKGQpOmFuZ3VsYXIuaXNPYmplY3QoZikmJmQuY3NzKGYpLGl8fGgucmVzb2x2ZShkKX0pLGgucHJvbWlzZS5jYW5jZWw9ZnVuY3Rpb24oKXtpJiZkLnVuYmluZChpLGopLGgucmVqZWN0KFwiVHJhbnNpdGlvbiBjYW5jZWxsZWRcIil9LGgucHJvbWlzZX0sZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJhbnNcIiksZz17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifSxoPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0QW5pbWF0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcImFuaW1hdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib0FuaW1hdGlvbkVuZFwiLHRyYW5zaXRpb246XCJhbmltYXRpb25lbmRcIn07cmV0dXJuIGUudHJhbnNpdGlvbkVuZEV2ZW50TmFtZT1kKGcpLGUuYW5pbWF0aW9uRW5kRXZlbnROYW1lPWQoaCksZX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5jb2xsYXBzZVwiLFtcInVpLmJvb3RzdHJhcC50cmFuc2l0aW9uXCJdKS5kaXJlY3RpdmUoXCJjb2xsYXBzZVwiLFtcIiR0cmFuc2l0aW9uXCIsZnVuY3Rpb24oYSl7cmV0dXJue2xpbms6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoYil7ZnVuY3Rpb24gZCgpe2o9PT1lJiYoaj12b2lkIDApfXZhciBlPWEoYyxiKTtyZXR1cm4gaiYmai5jYW5jZWwoKSxqPWUsZS50aGVuKGQsZCksZX1mdW5jdGlvbiBmKCl7az8oaz0hMSxnKCkpOihjLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VcIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLGUoe2hlaWdodDpjWzBdLnNjcm9sbEhlaWdodCtcInB4XCJ9KS50aGVuKGcpKX1mdW5jdGlvbiBnKCl7Yy5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIiksYy5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpLGMuY3NzKHtoZWlnaHQ6XCJhdXRvXCJ9KX1mdW5jdGlvbiBoKCl7aWYoaylrPSExLGkoKSxjLmNzcyh7aGVpZ2h0OjB9KTtlbHNle2MuY3NzKHtoZWlnaHQ6Y1swXS5zY3JvbGxIZWlnaHQrXCJweFwifSk7e2NbMF0ub2Zmc2V0V2lkdGh9Yy5yZW1vdmVDbGFzcyhcImNvbGxhcHNlIGluXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKSxlKHtoZWlnaHQ6MH0pLnRoZW4oaSl9fWZ1bmN0aW9uIGkoKXtjLnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKSxjLmFkZENsYXNzKFwiY29sbGFwc2VcIil9dmFyIGosaz0hMDtiLiR3YXRjaChkLmNvbGxhcHNlLGZ1bmN0aW9uKGEpe2E/aCgpOmYoKX0pfX19XSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuYWNjb3JkaW9uXCIsW1widWkuYm9vdHN0cmFwLmNvbGxhcHNlXCJdKS5jb25zdGFudChcImFjY29yZGlvbkNvbmZpZ1wiLHtjbG9zZU90aGVyczohMH0pLmNvbnRyb2xsZXIoXCJBY2NvcmRpb25Db250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcImFjY29yZGlvbkNvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjKXt0aGlzLmdyb3Vwcz1bXSx0aGlzLmNsb3NlT3RoZXJzPWZ1bmN0aW9uKGQpe3ZhciBlPWFuZ3VsYXIuaXNEZWZpbmVkKGIuY2xvc2VPdGhlcnMpP2EuJGV2YWwoYi5jbG9zZU90aGVycyk6Yy5jbG9zZU90aGVycztlJiZhbmd1bGFyLmZvckVhY2godGhpcy5ncm91cHMsZnVuY3Rpb24oYSl7YSE9PWQmJihhLmlzT3Blbj0hMSl9KX0sdGhpcy5hZGRHcm91cD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuZ3JvdXBzLnB1c2goYSksYS4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Yi5yZW1vdmVHcm91cChhKX0pfSx0aGlzLnJlbW92ZUdyb3VwPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ3JvdXBzLmluZGV4T2YoYSk7LTEhPT1iJiZ0aGlzLmdyb3Vwcy5zcGxpY2UoYiwxKX19XSkuZGlyZWN0aXZlKFwiYWNjb3JkaW9uXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLGNvbnRyb2xsZXI6XCJBY2NvcmRpb25Db250cm9sbGVyXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiExLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sXCJ9fSkuZGlyZWN0aXZlKFwiYWNjb3JkaW9uR3JvdXBcIixmdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwiXmFjY29yZGlvblwiLHJlc3RyaWN0OlwiRUFcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWxcIixzY29wZTp7aGVhZGluZzpcIkBcIixpc09wZW46XCI9P1wiLGlzRGlzYWJsZWQ6XCI9P1wifSxjb250cm9sbGVyOmZ1bmN0aW9uKCl7dGhpcy5zZXRIZWFkaW5nPWZ1bmN0aW9uKGEpe3RoaXMuaGVhZGluZz1hfX0sbGluazpmdW5jdGlvbihhLGIsYyxkKXtkLmFkZEdyb3VwKGEpLGEuJHdhdGNoKFwiaXNPcGVuXCIsZnVuY3Rpb24oYil7YiYmZC5jbG9zZU90aGVycyhhKX0pLGEudG9nZ2xlT3Blbj1mdW5jdGlvbigpe2EuaXNEaXNhYmxlZHx8KGEuaXNPcGVuPSFhLmlzT3Blbil9fX19KS5kaXJlY3RpdmUoXCJhY2NvcmRpb25IZWFkaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHRyYW5zY2x1ZGU6ITAsdGVtcGxhdGU6XCJcIixyZXBsYWNlOiEwLHJlcXVpcmU6XCJeYWNjb3JkaW9uR3JvdXBcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQsZSl7ZC5zZXRIZWFkaW5nKGUoYSxmdW5jdGlvbigpe30pKX19fSkuZGlyZWN0aXZlKFwiYWNjb3JkaW9uVHJhbnNjbHVkZVwiLGZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJeYWNjb3JkaW9uR3JvdXBcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2EuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGRbYy5hY2NvcmRpb25UcmFuc2NsdWRlXX0sZnVuY3Rpb24oYSl7YSYmKGIuaHRtbChcIlwiKSxiLmFwcGVuZChhKSl9KX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuYWxlcnRcIixbXSkuY29udHJvbGxlcihcIkFsZXJ0Q29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxiKXthLmNsb3NlYWJsZT1cImNsb3NlXCJpbiBifV0pLmRpcmVjdGl2ZShcImFsZXJ0XCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLGNvbnRyb2xsZXI6XCJBbGVydENvbnRyb2xsZXJcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2FsZXJ0L2FsZXJ0Lmh0bWxcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITAsc2NvcGU6e3R5cGU6XCJAXCIsY2xvc2U6XCImXCJ9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmJpbmRIdG1sXCIsW10pLmRpcmVjdGl2ZShcImJpbmRIdG1sVW5zYWZlXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oYSxiLGMpe2IuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGMuYmluZEh0bWxVbnNhZmUpLGEuJHdhdGNoKGMuYmluZEh0bWxVbnNhZmUsZnVuY3Rpb24oYSl7Yi5odG1sKGF8fFwiXCIpfSl9fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuYnV0dG9uc1wiLFtdKS5jb25zdGFudChcImJ1dHRvbkNvbmZpZ1wiLHthY3RpdmVDbGFzczpcImFjdGl2ZVwiLHRvZ2dsZUV2ZW50OlwiY2xpY2tcIn0pLmNvbnRyb2xsZXIoXCJCdXR0b25zQ29udHJvbGxlclwiLFtcImJ1dHRvbkNvbmZpZ1wiLGZ1bmN0aW9uKGEpe3RoaXMuYWN0aXZlQ2xhc3M9YS5hY3RpdmVDbGFzc3x8XCJhY3RpdmVcIix0aGlzLnRvZ2dsZUV2ZW50PWEudG9nZ2xlRXZlbnR8fFwiY2xpY2tcIn1dKS5kaXJlY3RpdmUoXCJidG5SYWRpb1wiLGZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6W1wiYnRuUmFkaW9cIixcIm5nTW9kZWxcIl0sY29udHJvbGxlcjpcIkJ1dHRvbnNDb250cm9sbGVyXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kWzBdLGY9ZFsxXTtmLiRyZW5kZXI9ZnVuY3Rpb24oKXtiLnRvZ2dsZUNsYXNzKGUuYWN0aXZlQ2xhc3MsYW5ndWxhci5lcXVhbHMoZi4kbW9kZWxWYWx1ZSxhLiRldmFsKGMuYnRuUmFkaW8pKSl9LGIuYmluZChlLnRvZ2dsZUV2ZW50LGZ1bmN0aW9uKCl7dmFyIGQ9Yi5oYXNDbGFzcyhlLmFjdGl2ZUNsYXNzKTsoIWR8fGFuZ3VsYXIuaXNEZWZpbmVkKGMudW5jaGVja2FibGUpKSYmYS4kYXBwbHkoZnVuY3Rpb24oKXtmLiRzZXRWaWV3VmFsdWUoZD9udWxsOmEuJGV2YWwoYy5idG5SYWRpbykpLGYuJHJlbmRlcigpfSl9KX19fSkuZGlyZWN0aXZlKFwiYnRuQ2hlY2tib3hcIixmdW5jdGlvbigpe3JldHVybntyZXF1aXJlOltcImJ0bkNoZWNrYm94XCIsXCJuZ01vZGVsXCJdLGNvbnRyb2xsZXI6XCJCdXR0b25zQ29udHJvbGxlclwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZnVuY3Rpb24gZSgpe3JldHVybiBnKGMuYnRuQ2hlY2tib3hUcnVlLCEwKX1mdW5jdGlvbiBmKCl7cmV0dXJuIGcoYy5idG5DaGVja2JveEZhbHNlLCExKX1mdW5jdGlvbiBnKGIsYyl7dmFyIGQ9YS4kZXZhbChiKTtyZXR1cm4gYW5ndWxhci5pc0RlZmluZWQoZCk/ZDpjfXZhciBoPWRbMF0saT1kWzFdO2kuJHJlbmRlcj1mdW5jdGlvbigpe2IudG9nZ2xlQ2xhc3MoaC5hY3RpdmVDbGFzcyxhbmd1bGFyLmVxdWFscyhpLiRtb2RlbFZhbHVlLGUoKSkpfSxiLmJpbmQoaC50b2dnbGVFdmVudCxmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7aS4kc2V0Vmlld1ZhbHVlKGIuaGFzQ2xhc3MoaC5hY3RpdmVDbGFzcyk/ZigpOmUoKSksaS4kcmVuZGVyKCl9KX0pfX19KSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5jYXJvdXNlbFwiLFtcInVpLmJvb3RzdHJhcC50cmFuc2l0aW9uXCJdKS5jb250cm9sbGVyKFwiQ2Fyb3VzZWxDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkdGltZW91dFwiLFwiJHRyYW5zaXRpb25cIixmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZCgpe2UoKTt2YXIgYz0rYS5pbnRlcnZhbDshaXNOYU4oYykmJmM+PTAmJihnPWIoZixjKSl9ZnVuY3Rpb24gZSgpe2cmJihiLmNhbmNlbChnKSxnPW51bGwpfWZ1bmN0aW9uIGYoKXtoPyhhLm5leHQoKSxkKCkpOmEucGF1c2UoKX12YXIgZyxoLGk9dGhpcyxqPWkuc2xpZGVzPWEuc2xpZGVzPVtdLGs9LTE7aS5jdXJyZW50U2xpZGU9bnVsbDt2YXIgbD0hMTtpLnNlbGVjdD1hLnNlbGVjdD1mdW5jdGlvbihlLGYpe2Z1bmN0aW9uIGcoKXtpZighbCl7aWYoaS5jdXJyZW50U2xpZGUmJmFuZ3VsYXIuaXNTdHJpbmcoZikmJiFhLm5vVHJhbnNpdGlvbiYmZS4kZWxlbWVudCl7ZS4kZWxlbWVudC5hZGRDbGFzcyhmKTt7ZS4kZWxlbWVudFswXS5vZmZzZXRXaWR0aH1hbmd1bGFyLmZvckVhY2goaixmdW5jdGlvbihhKXthbmd1bGFyLmV4dGVuZChhLHtkaXJlY3Rpb246XCJcIixlbnRlcmluZzohMSxsZWF2aW5nOiExLGFjdGl2ZTohMX0pfSksYW5ndWxhci5leHRlbmQoZSx7ZGlyZWN0aW9uOmYsYWN0aXZlOiEwLGVudGVyaW5nOiEwfSksYW5ndWxhci5leHRlbmQoaS5jdXJyZW50U2xpZGV8fHt9LHtkaXJlY3Rpb246ZixsZWF2aW5nOiEwfSksYS4kY3VycmVudFRyYW5zaXRpb249YyhlLiRlbGVtZW50LHt9KSxmdW5jdGlvbihiLGMpe2EuJGN1cnJlbnRUcmFuc2l0aW9uLnRoZW4oZnVuY3Rpb24oKXtoKGIsYyl9LGZ1bmN0aW9uKCl7aChiLGMpfSl9KGUsaS5jdXJyZW50U2xpZGUpfWVsc2UgaChlLGkuY3VycmVudFNsaWRlKTtpLmN1cnJlbnRTbGlkZT1lLGs9bSxkKCl9fWZ1bmN0aW9uIGgoYixjKXthbmd1bGFyLmV4dGVuZChiLHtkaXJlY3Rpb246XCJcIixhY3RpdmU6ITAsbGVhdmluZzohMSxlbnRlcmluZzohMX0pLGFuZ3VsYXIuZXh0ZW5kKGN8fHt9LHtkaXJlY3Rpb246XCJcIixhY3RpdmU6ITEsbGVhdmluZzohMSxlbnRlcmluZzohMX0pLGEuJGN1cnJlbnRUcmFuc2l0aW9uPW51bGx9dmFyIG09ai5pbmRleE9mKGUpO3ZvaWQgMD09PWYmJihmPW0+az9cIm5leHRcIjpcInByZXZcIiksZSYmZSE9PWkuY3VycmVudFNsaWRlJiYoYS4kY3VycmVudFRyYW5zaXRpb24/KGEuJGN1cnJlbnRUcmFuc2l0aW9uLmNhbmNlbCgpLGIoZykpOmcoKSl9LGEuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2w9ITB9KSxpLmluZGV4T2ZTbGlkZT1mdW5jdGlvbihhKXtyZXR1cm4gai5pbmRleE9mKGEpfSxhLm5leHQ9ZnVuY3Rpb24oKXt2YXIgYj0oaysxKSVqLmxlbmd0aDtyZXR1cm4gYS4kY3VycmVudFRyYW5zaXRpb24/dm9pZCAwOmkuc2VsZWN0KGpbYl0sXCJuZXh0XCIpfSxhLnByZXY9ZnVuY3Rpb24oKXt2YXIgYj0wPmstMT9qLmxlbmd0aC0xOmstMTtyZXR1cm4gYS4kY3VycmVudFRyYW5zaXRpb24/dm9pZCAwOmkuc2VsZWN0KGpbYl0sXCJwcmV2XCIpfSxhLmlzQWN0aXZlPWZ1bmN0aW9uKGEpe3JldHVybiBpLmN1cnJlbnRTbGlkZT09PWF9LGEuJHdhdGNoKFwiaW50ZXJ2YWxcIixkKSxhLiRvbihcIiRkZXN0cm95XCIsZSksYS5wbGF5PWZ1bmN0aW9uKCl7aHx8KGg9ITAsZCgpKX0sYS5wYXVzZT1mdW5jdGlvbigpe2Eubm9QYXVzZXx8KGg9ITEsZSgpKX0saS5hZGRTbGlkZT1mdW5jdGlvbihiLGMpe2IuJGVsZW1lbnQ9YyxqLnB1c2goYiksMT09PWoubGVuZ3RofHxiLmFjdGl2ZT8oaS5zZWxlY3QoaltqLmxlbmd0aC0xXSksMT09ai5sZW5ndGgmJmEucGxheSgpKTpiLmFjdGl2ZT0hMX0saS5yZW1vdmVTbGlkZT1mdW5jdGlvbihhKXt2YXIgYj1qLmluZGV4T2YoYSk7ai5zcGxpY2UoYiwxKSxqLmxlbmd0aD4wJiZhLmFjdGl2ZT9pLnNlbGVjdChiPj1qLmxlbmd0aD9qW2ItMV06altiXSk6az5iJiZrLS19fV0pLmRpcmVjdGl2ZShcImNhcm91c2VsXCIsW2Z1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITAsY29udHJvbGxlcjpcIkNhcm91c2VsQ29udHJvbGxlclwiLHJlcXVpcmU6XCJjYXJvdXNlbFwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbFwiLHNjb3BlOntpbnRlcnZhbDpcIj1cIixub1RyYW5zaXRpb246XCI9XCIsbm9QYXVzZTpcIj1cIn19fV0pLmRpcmVjdGl2ZShcInNsaWRlXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIl5jYXJvdXNlbFwiLHJlc3RyaWN0OlwiRUFcIix0cmFuc2NsdWRlOiEwLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsc2NvcGU6e2FjdGl2ZTpcIj0/XCJ9LGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZC5hZGRTbGlkZShhLGIpLGEuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2QucmVtb3ZlU2xpZGUoYSl9KSxhLiR3YXRjaChcImFjdGl2ZVwiLGZ1bmN0aW9uKGIpe2ImJmQuc2VsZWN0KGEpfSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLmRhdGVwYXJzZXJcIixbXSkuc2VydmljZShcImRhdGVQYXJzZXJcIixbXCIkbG9jYWxlXCIsXCJvcmRlckJ5RmlsdGVyXCIsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3ZhciBjPVtdLGQ9YS5zcGxpdChcIlwiKTtyZXR1cm4gYW5ndWxhci5mb3JFYWNoKGUsZnVuY3Rpb24oYixlKXt2YXIgZj1hLmluZGV4T2YoZSk7aWYoZj4tMSl7YT1hLnNwbGl0KFwiXCIpLGRbZl09XCIoXCIrYi5yZWdleCtcIilcIixhW2ZdPVwiJFwiO2Zvcih2YXIgZz1mKzEsaD1mK2UubGVuZ3RoO2g+ZztnKyspZFtnXT1cIlwiLGFbZ109XCIkXCI7YT1hLmpvaW4oXCJcIiksYy5wdXNoKHtpbmRleDpmLGFwcGx5OmIuYXBwbHl9KX19KSx7cmVnZXg6bmV3IFJlZ0V4cChcIl5cIitkLmpvaW4oXCJcIikrXCIkXCIpLG1hcDpiKGMsXCJpbmRleFwiKX19ZnVuY3Rpb24gZChhLGIsYyl7cmV0dXJuIDE9PT1iJiZjPjI4PzI5PT09YyYmKGElND09PTAmJmElMTAwIT09MHx8YSU0MDA9PT0wKTozPT09Ynx8NT09PWJ8fDg9PT1ifHwxMD09PWI/MzE+YzohMH10aGlzLnBhcnNlcnM9e307dmFyIGU9e3l5eXk6e3JlZ2V4OlwiXFxcXGR7NH1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLnllYXI9K2F9fSx5eTp7cmVnZXg6XCJcXFxcZHsyfVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMueWVhcj0rYSsyZTN9fSx5OntyZWdleDpcIlxcXFxkezEsNH1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLnllYXI9K2F9fSxNTU1NOntyZWdleDphLkRBVEVUSU1FX0ZPUk1BVFMuTU9OVEguam9pbihcInxcIiksYXBwbHk6ZnVuY3Rpb24oYil7dGhpcy5tb250aD1hLkRBVEVUSU1FX0ZPUk1BVFMuTU9OVEguaW5kZXhPZihiKX19LE1NTTp7cmVnZXg6YS5EQVRFVElNRV9GT1JNQVRTLlNIT1JUTU9OVEguam9pbihcInxcIiksYXBwbHk6ZnVuY3Rpb24oYil7dGhpcy5tb250aD1hLkRBVEVUSU1FX0ZPUk1BVFMuU0hPUlRNT05USC5pbmRleE9mKGIpfX0sTU06e3JlZ2V4OlwiMFsxLTldfDFbMC0yXVwiLGFwcGx5OmZ1bmN0aW9uKGEpe3RoaXMubW9udGg9YS0xfX0sTTp7cmVnZXg6XCJbMS05XXwxWzAtMl1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLm1vbnRoPWEtMX19LGRkOntyZWdleDpcIlswLTJdWzAtOV17MX18M1swLTFdezF9XCIsYXBwbHk6ZnVuY3Rpb24oYSl7dGhpcy5kYXRlPSthfX0sZDp7cmVnZXg6XCJbMS0yXT9bMC05XXsxfXwzWzAtMV17MX1cIixhcHBseTpmdW5jdGlvbihhKXt0aGlzLmRhdGU9K2F9fSxFRUVFOntyZWdleDphLkRBVEVUSU1FX0ZPUk1BVFMuREFZLmpvaW4oXCJ8XCIpfSxFRUU6e3JlZ2V4OmEuREFURVRJTUVfRk9STUFUUy5TSE9SVERBWS5qb2luKFwifFwiKX19O3RoaXMucGFyc2U9ZnVuY3Rpb24oYixlKXtpZighYW5ndWxhci5pc1N0cmluZyhiKXx8IWUpcmV0dXJuIGI7ZT1hLkRBVEVUSU1FX0ZPUk1BVFNbZV18fGUsdGhpcy5wYXJzZXJzW2VdfHwodGhpcy5wYXJzZXJzW2VdPWMoZSkpO3ZhciBmPXRoaXMucGFyc2Vyc1tlXSxnPWYucmVnZXgsaD1mLm1hcCxpPWIubWF0Y2goZyk7aWYoaSYmaS5sZW5ndGgpe2Zvcih2YXIgaixrPXt5ZWFyOjE5MDAsbW9udGg6MCxkYXRlOjEsaG91cnM6MH0sbD0xLG09aS5sZW5ndGg7bT5sO2wrKyl7dmFyIG49aFtsLTFdO24uYXBwbHkmJm4uYXBwbHkuY2FsbChrLGlbbF0pfXJldHVybiBkKGsueWVhcixrLm1vbnRoLGsuZGF0ZSkmJihqPW5ldyBEYXRlKGsueWVhcixrLm1vbnRoLGsuZGF0ZSxrLmhvdXJzKSksan19fV0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnBvc2l0aW9uXCIsW10pLmZhY3RvcnkoXCIkcG9zaXRpb25cIixbXCIkZG9jdW1lbnRcIixcIiR3aW5kb3dcIixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxjKXtyZXR1cm4gYS5jdXJyZW50U3R5bGU/YS5jdXJyZW50U3R5bGVbY106Yi5nZXRDb21wdXRlZFN0eWxlP2IuZ2V0Q29tcHV0ZWRTdHlsZShhKVtjXTphLnN0eWxlW2NdfWZ1bmN0aW9uIGQoYSl7cmV0dXJuXCJzdGF0aWNcIj09PShjKGEsXCJwb3NpdGlvblwiKXx8XCJzdGF0aWNcIil9dmFyIGU9ZnVuY3Rpb24oYil7Zm9yKHZhciBjPWFbMF0sZT1iLm9mZnNldFBhcmVudHx8YztlJiZlIT09YyYmZChlKTspZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8Y307cmV0dXJue3Bvc2l0aW9uOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMub2Zmc2V0KGIpLGQ9e3RvcDowLGxlZnQ6MH0sZj1lKGJbMF0pO2YhPWFbMF0mJihkPXRoaXMub2Zmc2V0KGFuZ3VsYXIuZWxlbWVudChmKSksZC50b3ArPWYuY2xpZW50VG9wLWYuc2Nyb2xsVG9wLGQubGVmdCs9Zi5jbGllbnRMZWZ0LWYuc2Nyb2xsTGVmdCk7dmFyIGc9YlswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57d2lkdGg6Zy53aWR0aHx8Yi5wcm9wKFwib2Zmc2V0V2lkdGhcIiksaGVpZ2h0OmcuaGVpZ2h0fHxiLnByb3AoXCJvZmZzZXRIZWlnaHRcIiksdG9wOmMudG9wLWQudG9wLGxlZnQ6Yy5sZWZ0LWQubGVmdH19LG9mZnNldDpmdW5jdGlvbihjKXt2YXIgZD1jWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybnt3aWR0aDpkLndpZHRofHxjLnByb3AoXCJvZmZzZXRXaWR0aFwiKSxoZWlnaHQ6ZC5oZWlnaHR8fGMucHJvcChcIm9mZnNldEhlaWdodFwiKSx0b3A6ZC50b3ArKGIucGFnZVlPZmZzZXR8fGFbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksbGVmdDpkLmxlZnQrKGIucGFnZVhPZmZzZXR8fGFbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpfX0scG9zaXRpb25FbGVtZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpPWMuc3BsaXQoXCItXCIpLGo9aVswXSxrPWlbMV18fFwiY2VudGVyXCI7ZT1kP3RoaXMub2Zmc2V0KGEpOnRoaXMucG9zaXRpb24oYSksZj1iLnByb3AoXCJvZmZzZXRXaWR0aFwiKSxnPWIucHJvcChcIm9mZnNldEhlaWdodFwiKTt2YXIgbD17Y2VudGVyOmZ1bmN0aW9uKCl7cmV0dXJuIGUubGVmdCtlLndpZHRoLzItZi8yfSxsZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUubGVmdH0scmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5sZWZ0K2Uud2lkdGh9fSxtPXtjZW50ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gZS50b3ArZS5oZWlnaHQvMi1nLzJ9LHRvcDpmdW5jdGlvbigpe3JldHVybiBlLnRvcH0sYm90dG9tOmZ1bmN0aW9uKCl7cmV0dXJuIGUudG9wK2UuaGVpZ2h0fX07c3dpdGNoKGope2Nhc2VcInJpZ2h0XCI6aD17dG9wOm1ba10oKSxsZWZ0Omxbal0oKX07YnJlYWs7Y2FzZVwibGVmdFwiOmg9e3RvcDptW2tdKCksbGVmdDplLmxlZnQtZn07YnJlYWs7Y2FzZVwiYm90dG9tXCI6aD17dG9wOm1bal0oKSxsZWZ0Omxba10oKX07YnJlYWs7ZGVmYXVsdDpoPXt0b3A6ZS50b3AtZyxsZWZ0Omxba10oKX19cmV0dXJuIGh9fX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5kYXRlcGlja2VyXCIsW1widWkuYm9vdHN0cmFwLmRhdGVwYXJzZXJcIixcInVpLmJvb3RzdHJhcC5wb3NpdGlvblwiXSkuY29uc3RhbnQoXCJkYXRlcGlja2VyQ29uZmlnXCIse2Zvcm1hdERheTpcImRkXCIsZm9ybWF0TW9udGg6XCJNTU1NXCIsZm9ybWF0WWVhcjpcInl5eXlcIixmb3JtYXREYXlIZWFkZXI6XCJFRUVcIixmb3JtYXREYXlUaXRsZTpcIk1NTU0geXl5eVwiLGZvcm1hdE1vbnRoVGl0bGU6XCJ5eXl5XCIsZGF0ZXBpY2tlck1vZGU6XCJkYXlcIixtaW5Nb2RlOlwiZGF5XCIsbWF4TW9kZTpcInllYXJcIixzaG93V2Vla3M6ITAsc3RhcnRpbmdEYXk6MCx5ZWFyUmFuZ2U6MjAsbWluRGF0ZTpudWxsLG1heERhdGU6bnVsbH0pLmNvbnRyb2xsZXIoXCJEYXRlcGlja2VyQ29udHJvbGxlclwiLFtcIiRzY29wZVwiLFwiJGF0dHJzXCIsXCIkcGFyc2VcIixcIiRpbnRlcnBvbGF0ZVwiLFwiJHRpbWVvdXRcIixcIiRsb2dcIixcImRhdGVGaWx0ZXJcIixcImRhdGVwaWNrZXJDb25maWdcIixmdW5jdGlvbihhLGIsYyxkLGUsZixnLGgpe3ZhciBpPXRoaXMsaj17JHNldFZpZXdWYWx1ZTphbmd1bGFyLm5vb3B9O3RoaXMubW9kZXM9W1wiZGF5XCIsXCJtb250aFwiLFwieWVhclwiXSxhbmd1bGFyLmZvckVhY2goW1wiZm9ybWF0RGF5XCIsXCJmb3JtYXRNb250aFwiLFwiZm9ybWF0WWVhclwiLFwiZm9ybWF0RGF5SGVhZGVyXCIsXCJmb3JtYXREYXlUaXRsZVwiLFwiZm9ybWF0TW9udGhUaXRsZVwiLFwibWluTW9kZVwiLFwibWF4TW9kZVwiLFwic2hvd1dlZWtzXCIsXCJzdGFydGluZ0RheVwiLFwieWVhclJhbmdlXCJdLGZ1bmN0aW9uKGMsZSl7aVtjXT1hbmd1bGFyLmlzRGVmaW5lZChiW2NdKT84PmU/ZChiW2NdKShhLiRwYXJlbnQpOmEuJHBhcmVudC4kZXZhbChiW2NdKTpoW2NdfSksYW5ndWxhci5mb3JFYWNoKFtcIm1pbkRhdGVcIixcIm1heERhdGVcIl0sZnVuY3Rpb24oZCl7YltkXT9hLiRwYXJlbnQuJHdhdGNoKGMoYltkXSksZnVuY3Rpb24oYSl7aVtkXT1hP25ldyBEYXRlKGEpOm51bGwsaS5yZWZyZXNoVmlldygpfSk6aVtkXT1oW2RdP25ldyBEYXRlKGhbZF0pOm51bGx9KSxhLmRhdGVwaWNrZXJNb2RlPWEuZGF0ZXBpY2tlck1vZGV8fGguZGF0ZXBpY2tlck1vZGUsYS51bmlxdWVJZD1cImRhdGVwaWNrZXItXCIrYS4kaWQrXCItXCIrTWF0aC5mbG9vcigxZTQqTWF0aC5yYW5kb20oKSksdGhpcy5hY3RpdmVEYXRlPWFuZ3VsYXIuaXNEZWZpbmVkKGIuaW5pdERhdGUpP2EuJHBhcmVudC4kZXZhbChiLmluaXREYXRlKTpuZXcgRGF0ZSxhLmlzQWN0aXZlPWZ1bmN0aW9uKGIpe3JldHVybiAwPT09aS5jb21wYXJlKGIuZGF0ZSxpLmFjdGl2ZURhdGUpPyhhLmFjdGl2ZURhdGVJZD1iLnVpZCwhMCk6ITF9LHRoaXMuaW5pdD1mdW5jdGlvbihhKXtqPWEsai4kcmVuZGVyPWZ1bmN0aW9uKCl7aS5yZW5kZXIoKX19LHRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7aWYoai4kbW9kZWxWYWx1ZSl7dmFyIGE9bmV3IERhdGUoai4kbW9kZWxWYWx1ZSksYj0haXNOYU4oYSk7Yj90aGlzLmFjdGl2ZURhdGU9YTpmLmVycm9yKCdEYXRlcGlja2VyIGRpcmVjdGl2ZTogXCJuZy1tb2RlbFwiIHZhbHVlIG11c3QgYmUgYSBEYXRlIG9iamVjdCwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDAxLjAxLjE5NzAgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIFJGQzI4MjIgb3IgSVNPIDg2MDEgZGF0ZS4nKSxqLiRzZXRWYWxpZGl0eShcImRhdGVcIixiKX10aGlzLnJlZnJlc2hWaWV3KCl9LHRoaXMucmVmcmVzaFZpZXc9ZnVuY3Rpb24oKXtpZih0aGlzLmVsZW1lbnQpe3RoaXMuX3JlZnJlc2hWaWV3KCk7dmFyIGE9ai4kbW9kZWxWYWx1ZT9uZXcgRGF0ZShqLiRtb2RlbFZhbHVlKTpudWxsO2ouJHNldFZhbGlkaXR5KFwiZGF0ZS1kaXNhYmxlZFwiLCFhfHx0aGlzLmVsZW1lbnQmJiF0aGlzLmlzRGlzYWJsZWQoYSkpfX0sdGhpcy5jcmVhdGVEYXRlT2JqZWN0PWZ1bmN0aW9uKGEsYil7dmFyIGM9ai4kbW9kZWxWYWx1ZT9uZXcgRGF0ZShqLiRtb2RlbFZhbHVlKTpudWxsO3JldHVybntkYXRlOmEsbGFiZWw6ZyhhLGIpLHNlbGVjdGVkOmMmJjA9PT10aGlzLmNvbXBhcmUoYSxjKSxkaXNhYmxlZDp0aGlzLmlzRGlzYWJsZWQoYSksY3VycmVudDowPT09dGhpcy5jb21wYXJlKGEsbmV3IERhdGUpfX0sdGhpcy5pc0Rpc2FibGVkPWZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLm1pbkRhdGUmJnRoaXMuY29tcGFyZShjLHRoaXMubWluRGF0ZSk8MHx8dGhpcy5tYXhEYXRlJiZ0aGlzLmNvbXBhcmUoYyx0aGlzLm1heERhdGUpPjB8fGIuZGF0ZURpc2FibGVkJiZhLmRhdGVEaXNhYmxlZCh7ZGF0ZTpjLG1vZGU6YS5kYXRlcGlja2VyTW9kZX0pfSx0aGlzLnNwbGl0PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2EubGVuZ3RoPjA7KWMucHVzaChhLnNwbGljZSgwLGIpKTtyZXR1cm4gY30sYS5zZWxlY3Q9ZnVuY3Rpb24oYil7aWYoYS5kYXRlcGlja2VyTW9kZT09PWkubWluTW9kZSl7dmFyIGM9ai4kbW9kZWxWYWx1ZT9uZXcgRGF0ZShqLiRtb2RlbFZhbHVlKTpuZXcgRGF0ZSgwLDAsMCwwLDAsMCwwKTtjLnNldEZ1bGxZZWFyKGIuZ2V0RnVsbFllYXIoKSxiLmdldE1vbnRoKCksYi5nZXREYXRlKCkpLGouJHNldFZpZXdWYWx1ZShjKSxqLiRyZW5kZXIoKX1lbHNlIGkuYWN0aXZlRGF0ZT1iLGEuZGF0ZXBpY2tlck1vZGU9aS5tb2Rlc1tpLm1vZGVzLmluZGV4T2YoYS5kYXRlcGlja2VyTW9kZSktMV19LGEubW92ZT1mdW5jdGlvbihhKXt2YXIgYj1pLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSthKihpLnN0ZXAueWVhcnN8fDApLGM9aS5hY3RpdmVEYXRlLmdldE1vbnRoKCkrYSooaS5zdGVwLm1vbnRoc3x8MCk7aS5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGIsYywxKSxpLnJlZnJlc2hWaWV3KCl9LGEudG9nZ2xlTW9kZT1mdW5jdGlvbihiKXtiPWJ8fDEsYS5kYXRlcGlja2VyTW9kZT09PWkubWF4TW9kZSYmMT09PWJ8fGEuZGF0ZXBpY2tlck1vZGU9PT1pLm1pbk1vZGUmJi0xPT09Ynx8KGEuZGF0ZXBpY2tlck1vZGU9aS5tb2Rlc1tpLm1vZGVzLmluZGV4T2YoYS5kYXRlcGlja2VyTW9kZSkrYl0pfSxhLmtleXM9ezEzOlwiZW50ZXJcIiwzMjpcInNwYWNlXCIsMzM6XCJwYWdldXBcIiwzNDpcInBhZ2Vkb3duXCIsMzU6XCJlbmRcIiwzNjpcImhvbWVcIiwzNzpcImxlZnRcIiwzODpcInVwXCIsMzk6XCJyaWdodFwiLDQwOlwiZG93blwifTt2YXIgaz1mdW5jdGlvbigpe2UoZnVuY3Rpb24oKXtpLmVsZW1lbnRbMF0uZm9jdXMoKX0sMCwhMSl9O2EuJG9uKFwiZGF0ZXBpY2tlci5mb2N1c1wiLGspLGEua2V5ZG93bj1mdW5jdGlvbihiKXt2YXIgYz1hLmtleXNbYi53aGljaF07aWYoYyYmIWIuc2hpZnRLZXkmJiFiLmFsdEtleSlpZihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSxcImVudGVyXCI9PT1jfHxcInNwYWNlXCI9PT1jKXtpZihpLmlzRGlzYWJsZWQoaS5hY3RpdmVEYXRlKSlyZXR1cm47YS5zZWxlY3QoaS5hY3RpdmVEYXRlKSxrKCl9ZWxzZSFiLmN0cmxLZXl8fFwidXBcIiE9PWMmJlwiZG93blwiIT09Yz8oaS5oYW5kbGVLZXlEb3duKGMsYiksaS5yZWZyZXNoVmlldygpKTooYS50b2dnbGVNb2RlKFwidXBcIj09PWM/MTotMSksaygpKX19XSkuZGlyZWN0aXZlKFwiZGF0ZXBpY2tlclwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmh0bWxcIixzY29wZTp7ZGF0ZXBpY2tlck1vZGU6XCI9P1wiLGRhdGVEaXNhYmxlZDpcIiZcIn0scmVxdWlyZTpbXCJkYXRlcGlja2VyXCIsXCI/Xm5nTW9kZWxcIl0sY29udHJvbGxlcjpcIkRhdGVwaWNrZXJDb250cm9sbGVyXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kWzBdLGY9ZFsxXTtmJiZlLmluaXQoZil9fX0pLmRpcmVjdGl2ZShcImRheXBpY2tlclwiLFtcImRhdGVGaWx0ZXJcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIscmVxdWlyZTpcIl5kYXRlcGlja2VyXCIsbGluazpmdW5jdGlvbihiLGMsZCxlKXtmdW5jdGlvbiBmKGEsYil7cmV0dXJuIDEhPT1ifHxhJTQhPT0wfHxhJTEwMD09PTAmJmElNDAwIT09MD9pW2JdOjI5fWZ1bmN0aW9uIGcoYSxiKXt2YXIgYz1uZXcgQXJyYXkoYiksZD1uZXcgRGF0ZShhKSxlPTA7Zm9yKGQuc2V0SG91cnMoMTIpO2I+ZTspY1tlKytdPW5ldyBEYXRlKGQpLGQuc2V0RGF0ZShkLmdldERhdGUoKSsxKTtyZXR1cm4gY31mdW5jdGlvbiBoKGEpe3ZhciBiPW5ldyBEYXRlKGEpO2Iuc2V0RGF0ZShiLmdldERhdGUoKSs0LShiLmdldERheSgpfHw3KSk7dmFyIGM9Yi5nZXRUaW1lKCk7cmV0dXJuIGIuc2V0TW9udGgoMCksYi5zZXREYXRlKDEpLE1hdGguZmxvb3IoTWF0aC5yb3VuZCgoYy1iKS84NjRlNSkvNykrMX1iLnNob3dXZWVrcz1lLnNob3dXZWVrcyxlLnN0ZXA9e21vbnRoczoxfSxlLmVsZW1lbnQ9Yzt2YXIgaT1bMzEsMjgsMzEsMzAsMzEsMzAsMzEsMzEsMzAsMzEsMzAsMzFdO2UuX3JlZnJlc2hWaWV3PWZ1bmN0aW9uKCl7dmFyIGM9ZS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksZD1lLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSxmPW5ldyBEYXRlKGMsZCwxKSxpPWUuc3RhcnRpbmdEYXktZi5nZXREYXkoKSxqPWk+MD83LWk6LWksaz1uZXcgRGF0ZShmKTtqPjAmJmsuc2V0RGF0ZSgtaisxKTtmb3IodmFyIGw9ZyhrLDQyKSxtPTA7NDI+bTttKyspbFttXT1hbmd1bGFyLmV4dGVuZChlLmNyZWF0ZURhdGVPYmplY3QobFttXSxlLmZvcm1hdERheSkse3NlY29uZGFyeTpsW21dLmdldE1vbnRoKCkhPT1kLHVpZDpiLnVuaXF1ZUlkK1wiLVwiK219KTtiLmxhYmVscz1uZXcgQXJyYXkoNyk7Zm9yKHZhciBuPTA7Nz5uO24rKyliLmxhYmVsc1tuXT17YWJicjphKGxbbl0uZGF0ZSxlLmZvcm1hdERheUhlYWRlciksZnVsbDphKGxbbl0uZGF0ZSxcIkVFRUVcIil9O2lmKGIudGl0bGU9YShlLmFjdGl2ZURhdGUsZS5mb3JtYXREYXlUaXRsZSksYi5yb3dzPWUuc3BsaXQobCw3KSxiLnNob3dXZWVrcyl7Yi53ZWVrTnVtYmVycz1bXTtmb3IodmFyIG89aChiLnJvd3NbMF1bMF0uZGF0ZSkscD1iLnJvd3MubGVuZ3RoO2Iud2Vla051bWJlcnMucHVzaChvKyspPHA7KTt9fSxlLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IERhdGUoYS5nZXRGdWxsWWVhcigpLGEuZ2V0TW9udGgoKSxhLmdldERhdGUoKSktbmV3IERhdGUoYi5nZXRGdWxsWWVhcigpLGIuZ2V0TW9udGgoKSxiLmdldERhdGUoKSl9LGUuaGFuZGxlS2V5RG93bj1mdW5jdGlvbihhKXt2YXIgYj1lLmFjdGl2ZURhdGUuZ2V0RGF0ZSgpO2lmKFwibGVmdFwiPT09YSliLT0xO2Vsc2UgaWYoXCJ1cFwiPT09YSliLT03O2Vsc2UgaWYoXCJyaWdodFwiPT09YSliKz0xO2Vsc2UgaWYoXCJkb3duXCI9PT1hKWIrPTc7ZWxzZSBpZihcInBhZ2V1cFwiPT09YXx8XCJwYWdlZG93blwiPT09YSl7dmFyIGM9ZS5hY3RpdmVEYXRlLmdldE1vbnRoKCkrKFwicGFnZXVwXCI9PT1hPy0xOjEpO2UuYWN0aXZlRGF0ZS5zZXRNb250aChjLDEpLGI9TWF0aC5taW4oZihlLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxlLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSksYil9ZWxzZVwiaG9tZVwiPT09YT9iPTE6XCJlbmRcIj09PWEmJihiPWYoZS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCksZS5hY3RpdmVEYXRlLmdldE1vbnRoKCkpKTtlLmFjdGl2ZURhdGUuc2V0RGF0ZShiKX0sZS5yZWZyZXNoVmlldygpfX19XSkuZGlyZWN0aXZlKFwibW9udGhwaWNrZXJcIixbXCJkYXRlRmlsdGVyXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvZGF0ZXBpY2tlci9tb250aC5odG1sXCIscmVxdWlyZTpcIl5kYXRlcGlja2VyXCIsbGluazpmdW5jdGlvbihiLGMsZCxlKXtlLnN0ZXA9e3llYXJzOjF9LGUuZWxlbWVudD1jLGUuX3JlZnJlc2hWaWV3PWZ1bmN0aW9uKCl7Zm9yKHZhciBjPW5ldyBBcnJheSgxMiksZD1lLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSxmPTA7MTI+ZjtmKyspY1tmXT1hbmd1bGFyLmV4dGVuZChlLmNyZWF0ZURhdGVPYmplY3QobmV3IERhdGUoZCxmLDEpLGUuZm9ybWF0TW9udGgpLHt1aWQ6Yi51bmlxdWVJZCtcIi1cIitmfSk7Yi50aXRsZT1hKGUuYWN0aXZlRGF0ZSxlLmZvcm1hdE1vbnRoVGl0bGUpLGIucm93cz1lLnNwbGl0KGMsMyl9LGUuY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRGF0ZShhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpKS1uZXcgRGF0ZShiLmdldEZ1bGxZZWFyKCksYi5nZXRNb250aCgpKX0sZS5oYW5kbGVLZXlEb3duPWZ1bmN0aW9uKGEpe3ZhciBiPWUuYWN0aXZlRGF0ZS5nZXRNb250aCgpO2lmKFwibGVmdFwiPT09YSliLT0xO2Vsc2UgaWYoXCJ1cFwiPT09YSliLT0zO2Vsc2UgaWYoXCJyaWdodFwiPT09YSliKz0xO2Vsc2UgaWYoXCJkb3duXCI9PT1hKWIrPTM7ZWxzZSBpZihcInBhZ2V1cFwiPT09YXx8XCJwYWdlZG93blwiPT09YSl7dmFyIGM9ZS5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkrKFwicGFnZXVwXCI9PT1hPy0xOjEpO2UuYWN0aXZlRGF0ZS5zZXRGdWxsWWVhcihjKX1lbHNlXCJob21lXCI9PT1hP2I9MDpcImVuZFwiPT09YSYmKGI9MTEpO2UuYWN0aXZlRGF0ZS5zZXRNb250aChiKX0sZS5yZWZyZXNoVmlldygpfX19XSkuZGlyZWN0aXZlKFwieWVhcnBpY2tlclwiLFtcImRhdGVGaWx0ZXJcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIscmVxdWlyZTpcIl5kYXRlcGlja2VyXCIsbGluazpmdW5jdGlvbihhLGIsYyxkKXtmdW5jdGlvbiBlKGEpe3JldHVybiBwYXJzZUludCgoYS0xKS9mLDEwKSpmKzF9dmFyIGY9ZC55ZWFyUmFuZ2U7ZC5zdGVwPXt5ZWFyczpmfSxkLmVsZW1lbnQ9YixkLl9yZWZyZXNoVmlldz1mdW5jdGlvbigpe2Zvcih2YXIgYj1uZXcgQXJyYXkoZiksYz0wLGc9ZShkLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7Zj5jO2MrKyliW2NdPWFuZ3VsYXIuZXh0ZW5kKGQuY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZShnK2MsMCwxKSxkLmZvcm1hdFllYXIpLHt1aWQ6YS51bmlxdWVJZCtcIi1cIitjfSk7YS50aXRsZT1bYlswXS5sYWJlbCxiW2YtMV0ubGFiZWxdLmpvaW4oXCIgLSBcIiksYS5yb3dzPWQuc3BsaXQoYiw1KX0sZC5jb21wYXJlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuZ2V0RnVsbFllYXIoKS1iLmdldEZ1bGxZZWFyKCl9LGQuaGFuZGxlS2V5RG93bj1mdW5jdGlvbihhKXt2YXIgYj1kLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcImxlZnRcIj09PWE/Yi09MTpcInVwXCI9PT1hP2ItPTU6XCJyaWdodFwiPT09YT9iKz0xOlwiZG93blwiPT09YT9iKz01OlwicGFnZXVwXCI9PT1hfHxcInBhZ2Vkb3duXCI9PT1hP2IrPShcInBhZ2V1cFwiPT09YT8tMToxKSpkLnN0ZXAueWVhcnM6XCJob21lXCI9PT1hP2I9ZShkLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk6XCJlbmRcIj09PWEmJihiPWUoZC5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpK2YtMSksZC5hY3RpdmVEYXRlLnNldEZ1bGxZZWFyKGIpfSxkLnJlZnJlc2hWaWV3KCl9fX1dKS5jb25zdGFudChcImRhdGVwaWNrZXJQb3B1cENvbmZpZ1wiLHtkYXRlcGlja2VyUG9wdXA6XCJ5eXl5LU1NLWRkXCIsY3VycmVudFRleHQ6XCJUb2RheVwiLGNsZWFyVGV4dDpcIkNsZWFyXCIsY2xvc2VUZXh0OlwiRG9uZVwiLGNsb3NlT25EYXRlU2VsZWN0aW9uOiEwLGFwcGVuZFRvQm9keTohMSxzaG93QnV0dG9uQmFyOiEwfSkuZGlyZWN0aXZlKFwiZGF0ZXBpY2tlclBvcHVwXCIsW1wiJGNvbXBpbGVcIixcIiRwYXJzZVwiLFwiJGRvY3VtZW50XCIsXCIkcG9zaXRpb25cIixcImRhdGVGaWx0ZXJcIixcImRhdGVQYXJzZXJcIixcImRhdGVwaWNrZXJQb3B1cENvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpcIm5nTW9kZWxcIixzY29wZTp7aXNPcGVuOlwiPT9cIixjdXJyZW50VGV4dDpcIkBcIixjbGVhclRleHQ6XCJAXCIsY2xvc2VUZXh0OlwiQFwiLGRhdGVEaXNhYmxlZDpcIiZcIn0sbGluazpmdW5jdGlvbihoLGksaixrKXtmdW5jdGlvbiBsKGEpe3JldHVybiBhLnJlcGxhY2UoLyhbQS1aXSkvZyxmdW5jdGlvbihhKXtyZXR1cm5cIi1cIithLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiBtKGEpe2lmKGEpe2lmKGFuZ3VsYXIuaXNEYXRlKGEpJiYhaXNOYU4oYSkpcmV0dXJuIGsuJHNldFZhbGlkaXR5KFwiZGF0ZVwiLCEwKSxhO2lmKGFuZ3VsYXIuaXNTdHJpbmcoYSkpe3ZhciBiPWYucGFyc2UoYSxuKXx8bmV3IERhdGUoYSk7cmV0dXJuIGlzTmFOKGIpP3ZvaWQgay4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsITEpOihrLiRzZXRWYWxpZGl0eShcImRhdGVcIiwhMCksYil9cmV0dXJuIHZvaWQgay4kc2V0VmFsaWRpdHkoXCJkYXRlXCIsITEpfXJldHVybiBrLiRzZXRWYWxpZGl0eShcImRhdGVcIiwhMCksbnVsbH12YXIgbixvPWFuZ3VsYXIuaXNEZWZpbmVkKGouY2xvc2VPbkRhdGVTZWxlY3Rpb24pP2guJHBhcmVudC4kZXZhbChqLmNsb3NlT25EYXRlU2VsZWN0aW9uKTpnLmNsb3NlT25EYXRlU2VsZWN0aW9uLHA9YW5ndWxhci5pc0RlZmluZWQoai5kYXRlcGlja2VyQXBwZW5kVG9Cb2R5KT9oLiRwYXJlbnQuJGV2YWwoai5kYXRlcGlja2VyQXBwZW5kVG9Cb2R5KTpnLmFwcGVuZFRvQm9keTtoLnNob3dCdXR0b25CYXI9YW5ndWxhci5pc0RlZmluZWQoai5zaG93QnV0dG9uQmFyKT9oLiRwYXJlbnQuJGV2YWwoai5zaG93QnV0dG9uQmFyKTpnLnNob3dCdXR0b25CYXIsaC5nZXRUZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBoW2ErXCJUZXh0XCJdfHxnW2ErXCJUZXh0XCJdfSxqLiRvYnNlcnZlKFwiZGF0ZXBpY2tlclBvcHVwXCIsZnVuY3Rpb24oYSl7bj1hfHxnLmRhdGVwaWNrZXJQb3B1cCxrLiRyZW5kZXIoKX0pO3ZhciBxPWFuZ3VsYXIuZWxlbWVudChcIjxkaXYgZGF0ZXBpY2tlci1wb3B1cC13cmFwPjxkaXYgZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj5cIik7cS5hdHRyKHtcIm5nLW1vZGVsXCI6XCJkYXRlXCIsXCJuZy1jaGFuZ2VcIjpcImRhdGVTZWxlY3Rpb24oKVwifSk7dmFyIHI9YW5ndWxhci5lbGVtZW50KHEuY2hpbGRyZW4oKVswXSk7ai5kYXRlcGlja2VyT3B0aW9ucyYmYW5ndWxhci5mb3JFYWNoKGguJHBhcmVudC4kZXZhbChqLmRhdGVwaWNrZXJPcHRpb25zKSxmdW5jdGlvbihhLGIpe3IuYXR0cihsKGIpLGEpfSksaC53YXRjaERhdGE9e30sYW5ndWxhci5mb3JFYWNoKFtcIm1pbkRhdGVcIixcIm1heERhdGVcIixcImRhdGVwaWNrZXJNb2RlXCJdLGZ1bmN0aW9uKGEpe2lmKGpbYV0pe3ZhciBjPWIoalthXSk7aWYoaC4kcGFyZW50LiR3YXRjaChjLGZ1bmN0aW9uKGIpe2gud2F0Y2hEYXRhW2FdPWJ9KSxyLmF0dHIobChhKSxcIndhdGNoRGF0YS5cIithKSxcImRhdGVwaWNrZXJNb2RlXCI9PT1hKXt2YXIgZD1jLmFzc2lnbjtoLiR3YXRjaChcIndhdGNoRGF0YS5cIithLGZ1bmN0aW9uKGEsYil7YSE9PWImJmQoaC4kcGFyZW50LGEpfSl9fX0pLGouZGF0ZURpc2FibGVkJiZyLmF0dHIoXCJkYXRlLWRpc2FibGVkXCIsXCJkYXRlRGlzYWJsZWQoeyBkYXRlOiBkYXRlLCBtb2RlOiBtb2RlIH0pXCIpLGsuJHBhcnNlcnMudW5zaGlmdChtKSxoLmRhdGVTZWxlY3Rpb249ZnVuY3Rpb24oYSl7YW5ndWxhci5pc0RlZmluZWQoYSkmJihoLmRhdGU9YSksay4kc2V0Vmlld1ZhbHVlKGguZGF0ZSksay4kcmVuZGVyKCksbyYmKGguaXNPcGVuPSExLGlbMF0uZm9jdXMoKSl9LGkuYmluZChcImlucHV0IGNoYW5nZSBrZXl1cFwiLGZ1bmN0aW9uKCl7aC4kYXBwbHkoZnVuY3Rpb24oKXtoLmRhdGU9ay4kbW9kZWxWYWx1ZX0pfSksay4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9ay4kdmlld1ZhbHVlP2Uoay4kdmlld1ZhbHVlLG4pOlwiXCI7aS52YWwoYSksaC5kYXRlPW0oay4kbW9kZWxWYWx1ZSl9O3ZhciBzPWZ1bmN0aW9uKGEpe2guaXNPcGVuJiZhLnRhcmdldCE9PWlbMF0mJmguJGFwcGx5KGZ1bmN0aW9uKCl7aC5pc09wZW49ITF9KX0sdD1mdW5jdGlvbihhKXtoLmtleWRvd24oYSl9O2kuYmluZChcImtleWRvd25cIix0KSxoLmtleWRvd249ZnVuY3Rpb24oYSl7Mjc9PT1hLndoaWNoPyhhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSxoLmNsb3NlKCkpOjQwIT09YS53aGljaHx8aC5pc09wZW58fChoLmlzT3Blbj0hMCl9LGguJHdhdGNoKFwiaXNPcGVuXCIsZnVuY3Rpb24oYSl7YT8oaC4kYnJvYWRjYXN0KFwiZGF0ZXBpY2tlci5mb2N1c1wiKSxoLnBvc2l0aW9uPXA/ZC5vZmZzZXQoaSk6ZC5wb3NpdGlvbihpKSxoLnBvc2l0aW9uLnRvcD1oLnBvc2l0aW9uLnRvcCtpLnByb3AoXCJvZmZzZXRIZWlnaHRcIiksYy5iaW5kKFwiY2xpY2tcIixzKSk6Yy51bmJpbmQoXCJjbGlja1wiLHMpfSksaC5zZWxlY3Q9ZnVuY3Rpb24oYSl7aWYoXCJ0b2RheVwiPT09YSl7dmFyIGI9bmV3IERhdGU7YW5ndWxhci5pc0RhdGUoay4kbW9kZWxWYWx1ZSk/KGE9bmV3IERhdGUoay4kbW9kZWxWYWx1ZSksYS5zZXRGdWxsWWVhcihiLmdldEZ1bGxZZWFyKCksYi5nZXRNb250aCgpLGIuZ2V0RGF0ZSgpKSk6YT1uZXcgRGF0ZShiLnNldEhvdXJzKDAsMCwwLDApKX1oLmRhdGVTZWxlY3Rpb24oYSl9LGguY2xvc2U9ZnVuY3Rpb24oKXtoLmlzT3Blbj0hMSxpWzBdLmZvY3VzKCl9O3ZhciB1PWEocSkoaCk7cS5yZW1vdmUoKSxwP2MuZmluZChcImJvZHlcIikuYXBwZW5kKHUpOmkuYWZ0ZXIodSksaC4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7dS5yZW1vdmUoKSxpLnVuYmluZChcImtleWRvd25cIix0KSxjLnVuYmluZChcImNsaWNrXCIscyl9KX19fV0pLmRpcmVjdGl2ZShcImRhdGVwaWNrZXJQb3B1cFdyYXBcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0cmFuc2NsdWRlOiEwLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvZGF0ZXBpY2tlci9wb3B1cC5odG1sXCIsbGluazpmdW5jdGlvbihhLGIpe2IuYmluZChcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCl9KX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAuZHJvcGRvd25cIixbXSkuY29uc3RhbnQoXCJkcm9wZG93bkNvbmZpZ1wiLHtvcGVuQ2xhc3M6XCJvcGVuXCJ9KS5zZXJ2aWNlKFwiZHJvcGRvd25TZXJ2aWNlXCIsW1wiJGRvY3VtZW50XCIsZnVuY3Rpb24oYSl7dmFyIGI9bnVsbDt0aGlzLm9wZW49ZnVuY3Rpb24oZSl7Ynx8KGEuYmluZChcImNsaWNrXCIsYyksYS5iaW5kKFwia2V5ZG93blwiLGQpKSxiJiZiIT09ZSYmKGIuaXNPcGVuPSExKSxiPWV9LHRoaXMuY2xvc2U9ZnVuY3Rpb24oZSl7Yj09PWUmJihiPW51bGwsYS51bmJpbmQoXCJjbGlja1wiLGMpLGEudW5iaW5kKFwia2V5ZG93blwiLGQpKX07dmFyIGM9ZnVuY3Rpb24oYSl7dmFyIGM9Yi5nZXRUb2dnbGVFbGVtZW50KCk7YSYmYyYmY1swXS5jb250YWlucyhhLnRhcmdldCl8fGIuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5pc09wZW49ITF9KX0sZD1mdW5jdGlvbihhKXsyNz09PWEud2hpY2gmJihiLmZvY3VzVG9nZ2xlRWxlbWVudCgpLGMoKSl9fV0pLmNvbnRyb2xsZXIoXCJEcm9wZG93bkNvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwiJHBhcnNlXCIsXCJkcm9wZG93bkNvbmZpZ1wiLFwiZHJvcGRvd25TZXJ2aWNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZyxoPXRoaXMsaT1hLiRuZXcoKSxqPWQub3BlbkNsYXNzLGs9YW5ndWxhci5ub29wLGw9Yi5vblRvZ2dsZT9jKGIub25Ub2dnbGUpOmFuZ3VsYXIubm9vcDt0aGlzLmluaXQ9ZnVuY3Rpb24oZCl7aC4kZWxlbWVudD1kLGIuaXNPcGVuJiYoZz1jKGIuaXNPcGVuKSxrPWcuYXNzaWduLGEuJHdhdGNoKGcsZnVuY3Rpb24oYSl7aS5pc09wZW49ISFhfSkpfSx0aGlzLnRvZ2dsZT1mdW5jdGlvbihhKXtyZXR1cm4gaS5pc09wZW49YXJndW1lbnRzLmxlbmd0aD8hIWE6IWkuaXNPcGVufSx0aGlzLmlzT3Blbj1mdW5jdGlvbigpe3JldHVybiBpLmlzT3Blbn0saS5nZXRUb2dnbGVFbGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGgudG9nZ2xlRWxlbWVudH0saS5mb2N1c1RvZ2dsZUVsZW1lbnQ9ZnVuY3Rpb24oKXtoLnRvZ2dsZUVsZW1lbnQmJmgudG9nZ2xlRWxlbWVudFswXS5mb2N1cygpfSxpLiR3YXRjaChcImlzT3BlblwiLGZ1bmN0aW9uKGIsYyl7ZltiP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGguJGVsZW1lbnQsaiksYj8oaS5mb2N1c1RvZ2dsZUVsZW1lbnQoKSxlLm9wZW4oaSkpOmUuY2xvc2UoaSksayhhLGIpLGFuZ3VsYXIuaXNEZWZpbmVkKGIpJiZiIT09YyYmbChhLHtvcGVuOiEhYn0pfSksYS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsZnVuY3Rpb24oKXtpLmlzT3Blbj0hMX0pLGEuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2kuJGRlc3Ryb3koKX0pfV0pLmRpcmVjdGl2ZShcImRyb3Bkb3duXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJDQVwiLGNvbnRyb2xsZXI6XCJEcm9wZG93bkNvbnRyb2xsZXJcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2QuaW5pdChiKX19fSkuZGlyZWN0aXZlKFwiZHJvcGRvd25Ub2dnbGVcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkNBXCIscmVxdWlyZTpcIj9eZHJvcGRvd25cIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGQpe2QudG9nZ2xlRWxlbWVudD1iO3ZhciBlPWZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxiLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fGMuZGlzYWJsZWR8fGEuJGFwcGx5KGZ1bmN0aW9uKCl7ZC50b2dnbGUoKX0pfTtiLmJpbmQoXCJjbGlja1wiLGUpLGIuYXR0cih7XCJhcmlhLWhhc3BvcHVwXCI6ITAsXCJhcmlhLWV4cGFuZGVkXCI6ITF9KSxhLiR3YXRjaChkLmlzT3BlbixmdW5jdGlvbihhKXtiLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsISFhKX0pLGEuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2IudW5iaW5kKFwiY2xpY2tcIixlKX0pfX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAubW9kYWxcIixbXCJ1aS5ib290c3RyYXAudHJhbnNpdGlvblwiXSkuZmFjdG9yeShcIiQkc3RhY2tlZE1hcFwiLGZ1bmN0aW9uKCl7cmV0dXJue2NyZWF0ZU5ldzpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybnthZGQ6ZnVuY3Rpb24oYixjKXthLnB1c2goe2tleTpiLHZhbHVlOmN9KX0sZ2V0OmZ1bmN0aW9uKGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKGI9PWFbY10ua2V5KXJldHVybiBhW2NdfSxrZXlzOmZ1bmN0aW9uKCl7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyliLnB1c2goYVtjXS5rZXkpO3JldHVybiBifSx0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gYVthLmxlbmd0aC0xXX0scmVtb3ZlOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYz0tMSxkPTA7ZDxhLmxlbmd0aDtkKyspaWYoYj09YVtkXS5rZXkpe2M9ZDticmVha31yZXR1cm4gYS5zcGxpY2UoYywxKVswXX0scmVtb3ZlVG9wOmZ1bmN0aW9uKCl7cmV0dXJuIGEuc3BsaWNlKGEubGVuZ3RoLTEsMSlbMF19LGxlbmd0aDpmdW5jdGlvbigpe3JldHVybiBhLmxlbmd0aH19fX19KS5kaXJlY3RpdmUoXCJtb2RhbEJhY2tkcm9wXCIsW1wiJHRpbWVvdXRcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9tb2RhbC9iYWNrZHJvcC5odG1sXCIsbGluazpmdW5jdGlvbihiLGMsZCl7Yi5iYWNrZHJvcENsYXNzPWQuYmFja2Ryb3BDbGFzc3x8XCJcIixiLmFuaW1hdGU9ITEsYShmdW5jdGlvbigpe2IuYW5pbWF0ZT0hMH0pfX19XSkuZGlyZWN0aXZlKFwibW9kYWxXaW5kb3dcIixbXCIkbW9kYWxTdGFja1wiLFwiJHRpbWVvdXRcIixmdW5jdGlvbihhLGIpe3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6e2luZGV4OlwiQFwiLGFuaW1hdGU6XCI9XCJ9LHJlcGxhY2U6ITAsdHJhbnNjbHVkZTohMCx0ZW1wbGF0ZVVybDpmdW5jdGlvbihhLGIpe3JldHVybiBiLnRlbXBsYXRlVXJsfHxcInRlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sXCJ9LGxpbms6ZnVuY3Rpb24oYyxkLGUpe2QuYWRkQ2xhc3MoZS53aW5kb3dDbGFzc3x8XCJcIiksYy5zaXplPWUuc2l6ZSxiKGZ1bmN0aW9uKCl7Yy5hbmltYXRlPSEwLGRbMF0ucXVlcnlTZWxlY3RvckFsbChcIlthdXRvZm9jdXNdXCIpLmxlbmd0aHx8ZFswXS5mb2N1cygpfSksYy5jbG9zZT1mdW5jdGlvbihiKXt2YXIgYz1hLmdldFRvcCgpO2MmJmMudmFsdWUuYmFja2Ryb3AmJlwic3RhdGljXCIhPWMudmFsdWUuYmFja2Ryb3AmJmIudGFyZ2V0PT09Yi5jdXJyZW50VGFyZ2V0JiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCksYS5kaXNtaXNzKGMua2V5LFwiYmFja2Ryb3AgY2xpY2tcIikpfX19fV0pLmRpcmVjdGl2ZShcIm1vZGFsVHJhbnNjbHVkZVwiLGZ1bmN0aW9uKCl7cmV0dXJue2xpbms6ZnVuY3Rpb24oYSxiLGMsZCxlKXtlKGEuJHBhcmVudCxmdW5jdGlvbihhKXtiLmVtcHR5KCksYi5hcHBlbmQoYSl9KX19fSkuZmFjdG9yeShcIiRtb2RhbFN0YWNrXCIsW1wiJHRyYW5zaXRpb25cIixcIiR0aW1lb3V0XCIsXCIkZG9jdW1lbnRcIixcIiRjb21waWxlXCIsXCIkcm9vdFNjb3BlXCIsXCIkJHN0YWNrZWRNYXBcIixmdW5jdGlvbihhLGIsYyxkLGUsZil7ZnVuY3Rpb24gZygpe2Zvcih2YXIgYT0tMSxiPW4ua2V5cygpLGM9MDtjPGIubGVuZ3RoO2MrKyluLmdldChiW2NdKS52YWx1ZS5iYWNrZHJvcCYmKGE9Yyk7cmV0dXJuIGF9ZnVuY3Rpb24gaChhKXt2YXIgYj1jLmZpbmQoXCJib2R5XCIpLmVxKDApLGQ9bi5nZXQoYSkudmFsdWU7bi5yZW1vdmUoYSksaihkLm1vZGFsRG9tRWwsZC5tb2RhbFNjb3BlLDMwMCxmdW5jdGlvbigpe2QubW9kYWxTY29wZS4kZGVzdHJveSgpLGIudG9nZ2xlQ2xhc3MobSxuLmxlbmd0aCgpPjApLGkoKX0pfWZ1bmN0aW9uIGkoKXtpZihrJiYtMT09ZygpKXt2YXIgYT1sO2ooayxsLDE1MCxmdW5jdGlvbigpe2EuJGRlc3Ryb3koKSxhPW51bGx9KSxrPXZvaWQgMCxsPXZvaWQgMH19ZnVuY3Rpb24gaihjLGQsZSxmKXtmdW5jdGlvbiBnKCl7Zy5kb25lfHwoZy5kb25lPSEwLGMucmVtb3ZlKCksZiYmZigpKX1kLmFuaW1hdGU9ITE7dmFyIGg9YS50cmFuc2l0aW9uRW5kRXZlbnROYW1lO2lmKGgpe3ZhciBpPWIoZyxlKTtjLmJpbmQoaCxmdW5jdGlvbigpe2IuY2FuY2VsKGkpLGcoKSxkLiRhcHBseSgpfSl9ZWxzZSBiKGcpfXZhciBrLGwsbT1cIm1vZGFsLW9wZW5cIixuPWYuY3JlYXRlTmV3KCksbz17fTtyZXR1cm4gZS4kd2F0Y2goZyxmdW5jdGlvbihhKXtsJiYobC5pbmRleD1hKX0pLGMuYmluZChcImtleWRvd25cIixmdW5jdGlvbihhKXt2YXIgYjsyNz09PWEud2hpY2gmJihiPW4udG9wKCksYiYmYi52YWx1ZS5rZXlib2FyZCYmKGEucHJldmVudERlZmF1bHQoKSxlLiRhcHBseShmdW5jdGlvbigpe28uZGlzbWlzcyhiLmtleSxcImVzY2FwZSBrZXkgcHJlc3NcIil9KSkpfSksby5vcGVuPWZ1bmN0aW9uKGEsYil7bi5hZGQoYSx7ZGVmZXJyZWQ6Yi5kZWZlcnJlZCxtb2RhbFNjb3BlOmIuc2NvcGUsYmFja2Ryb3A6Yi5iYWNrZHJvcCxrZXlib2FyZDpiLmtleWJvYXJkfSk7dmFyIGY9Yy5maW5kKFwiYm9keVwiKS5lcSgwKSxoPWcoKTtpZihoPj0wJiYhayl7bD1lLiRuZXcoITApLGwuaW5kZXg9aDt2YXIgaT1hbmd1bGFyLmVsZW1lbnQoXCI8ZGl2IG1vZGFsLWJhY2tkcm9wPjwvZGl2PlwiKTtpLmF0dHIoXCJiYWNrZHJvcC1jbGFzc1wiLGIuYmFja2Ryb3BDbGFzcyksaz1kKGkpKGwpLGYuYXBwZW5kKGspfXZhciBqPWFuZ3VsYXIuZWxlbWVudChcIjxkaXYgbW9kYWwtd2luZG93PjwvZGl2PlwiKTtqLmF0dHIoe1widGVtcGxhdGUtdXJsXCI6Yi53aW5kb3dUZW1wbGF0ZVVybCxcIndpbmRvdy1jbGFzc1wiOmIud2luZG93Q2xhc3Msc2l6ZTpiLnNpemUsaW5kZXg6bi5sZW5ndGgoKS0xLGFuaW1hdGU6XCJhbmltYXRlXCJ9KS5odG1sKGIuY29udGVudCk7dmFyIG89ZChqKShiLnNjb3BlKTtuLnRvcCgpLnZhbHVlLm1vZGFsRG9tRWw9byxmLmFwcGVuZChvKSxmLmFkZENsYXNzKG0pfSxvLmNsb3NlPWZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYSk7YyYmKGMudmFsdWUuZGVmZXJyZWQucmVzb2x2ZShiKSxoKGEpKX0sby5kaXNtaXNzPWZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYSk7YyYmKGMudmFsdWUuZGVmZXJyZWQucmVqZWN0KGIpLGgoYSkpfSxvLmRpc21pc3NBbGw9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMuZ2V0VG9wKCk7YjspdGhpcy5kaXNtaXNzKGIua2V5LGEpLGI9dGhpcy5nZXRUb3AoKX0sby5nZXRUb3A9ZnVuY3Rpb24oKXtyZXR1cm4gbi50b3AoKX0sb31dKS5wcm92aWRlcihcIiRtb2RhbFwiLGZ1bmN0aW9uKCl7dmFyIGE9e29wdGlvbnM6e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwfSwkZ2V0OltcIiRpbmplY3RvclwiLFwiJHJvb3RTY29wZVwiLFwiJHFcIixcIiRodHRwXCIsXCIkdGVtcGxhdGVDYWNoZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRtb2RhbFN0YWNrXCIsZnVuY3Rpb24oYixjLGQsZSxmLGcsaCl7ZnVuY3Rpb24gaShhKXtyZXR1cm4gYS50ZW1wbGF0ZT9kLndoZW4oYS50ZW1wbGF0ZSk6ZS5nZXQoYW5ndWxhci5pc0Z1bmN0aW9uKGEudGVtcGxhdGVVcmwpP2EudGVtcGxhdGVVcmwoKTphLnRlbXBsYXRlVXJsLHtjYWNoZTpmfSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5kYXRhfSl9ZnVuY3Rpb24gaihhKXt2YXIgYz1bXTtyZXR1cm4gYW5ndWxhci5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7KGFuZ3VsYXIuaXNGdW5jdGlvbihhKXx8YW5ndWxhci5pc0FycmF5KGEpKSYmYy5wdXNoKGQud2hlbihiLmludm9rZShhKSkpfSksY312YXIgaz17fTtyZXR1cm4gay5vcGVuPWZ1bmN0aW9uKGIpe3ZhciBlPWQuZGVmZXIoKSxmPWQuZGVmZXIoKSxrPXtyZXN1bHQ6ZS5wcm9taXNlLG9wZW5lZDpmLnByb21pc2UsY2xvc2U6ZnVuY3Rpb24oYSl7aC5jbG9zZShrLGEpfSxkaXNtaXNzOmZ1bmN0aW9uKGEpe2guZGlzbWlzcyhrLGEpfX07aWYoYj1hbmd1bGFyLmV4dGVuZCh7fSxhLm9wdGlvbnMsYiksYi5yZXNvbHZlPWIucmVzb2x2ZXx8e30sIWIudGVtcGxhdGUmJiFiLnRlbXBsYXRlVXJsKXRocm93IG5ldyBFcnJvcihcIk9uZSBvZiB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybCBvcHRpb25zIGlzIHJlcXVpcmVkLlwiKTt2YXIgbD1kLmFsbChbaShiKV0uY29uY2F0KGooYi5yZXNvbHZlKSkpO3JldHVybiBsLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGQ9KGIuc2NvcGV8fGMpLiRuZXcoKTtkLiRjbG9zZT1rLmNsb3NlLGQuJGRpc21pc3M9ay5kaXNtaXNzO3ZhciBmLGk9e30saj0xO2IuY29udHJvbGxlciYmKGkuJHNjb3BlPWQsaS4kbW9kYWxJbnN0YW5jZT1rLGFuZ3VsYXIuZm9yRWFjaChiLnJlc29sdmUsZnVuY3Rpb24oYixjKXtpW2NdPWFbaisrXX0pLGY9ZyhiLmNvbnRyb2xsZXIsaSksYi5jb250cm9sbGVyQXMmJihkW2IuY29udHJvbGxlckFzXT1mKSksaC5vcGVuKGsse3Njb3BlOmQsZGVmZXJyZWQ6ZSxjb250ZW50OmFbMF0sYmFja2Ryb3A6Yi5iYWNrZHJvcCxrZXlib2FyZDpiLmtleWJvYXJkLGJhY2tkcm9wQ2xhc3M6Yi5iYWNrZHJvcENsYXNzLHdpbmRvd0NsYXNzOmIud2luZG93Q2xhc3Msd2luZG93VGVtcGxhdGVVcmw6Yi53aW5kb3dUZW1wbGF0ZVVybCxzaXplOmIuc2l6ZX0pfSxmdW5jdGlvbihhKXtlLnJlamVjdChhKX0pLGwudGhlbihmdW5jdGlvbigpe2YucmVzb2x2ZSghMCl9LGZ1bmN0aW9uKCl7Zi5yZWplY3QoITEpfSksa30sa31dfTtyZXR1cm4gYX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnBhZ2luYXRpb25cIixbXSkuY29udHJvbGxlcihcIlBhZ2luYXRpb25Db250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9eyRzZXRWaWV3VmFsdWU6YW5ndWxhci5ub29wfSxmPWIubnVtUGFnZXM/YyhiLm51bVBhZ2VzKS5hc3NpZ246YW5ndWxhci5ub29wO3RoaXMuaW5pdD1mdW5jdGlvbihmLGcpe2U9Zix0aGlzLmNvbmZpZz1nLGUuJHJlbmRlcj1mdW5jdGlvbigpe2QucmVuZGVyKCl9LGIuaXRlbXNQZXJQYWdlP2EuJHBhcmVudC4kd2F0Y2goYyhiLml0ZW1zUGVyUGFnZSksZnVuY3Rpb24oYil7ZC5pdGVtc1BlclBhZ2U9cGFyc2VJbnQoYiwxMCksYS50b3RhbFBhZ2VzPWQuY2FsY3VsYXRlVG90YWxQYWdlcygpfSk6dGhpcy5pdGVtc1BlclBhZ2U9Zy5pdGVtc1BlclBhZ2V9LHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcz1mdW5jdGlvbigpe3ZhciBiPXRoaXMuaXRlbXNQZXJQYWdlPDE/MTpNYXRoLmNlaWwoYS50b3RhbEl0ZW1zL3RoaXMuaXRlbXNQZXJQYWdlKTtyZXR1cm4gTWF0aC5tYXgoYnx8MCwxKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24oKXthLnBhZ2U9cGFyc2VJbnQoZS4kdmlld1ZhbHVlLDEwKXx8MX0sYS5zZWxlY3RQYWdlPWZ1bmN0aW9uKGIpe2EucGFnZSE9PWImJmI+MCYmYjw9YS50b3RhbFBhZ2VzJiYoZS4kc2V0Vmlld1ZhbHVlKGIpLGUuJHJlbmRlcigpKX0sYS5nZXRUZXh0PWZ1bmN0aW9uKGIpe3JldHVybiBhW2IrXCJUZXh0XCJdfHxkLmNvbmZpZ1tiK1wiVGV4dFwiXX0sYS5ub1ByZXZpb3VzPWZ1bmN0aW9uKCl7cmV0dXJuIDE9PT1hLnBhZ2V9LGEubm9OZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGEucGFnZT09PWEudG90YWxQYWdlc30sYS4kd2F0Y2goXCJ0b3RhbEl0ZW1zXCIsZnVuY3Rpb24oKXthLnRvdGFsUGFnZXM9ZC5jYWxjdWxhdGVUb3RhbFBhZ2VzKCl9KSxhLiR3YXRjaChcInRvdGFsUGFnZXNcIixmdW5jdGlvbihiKXtmKGEuJHBhcmVudCxiKSxhLnBhZ2U+Yj9hLnNlbGVjdFBhZ2UoYik6ZS4kcmVuZGVyKCl9KX1dKS5jb25zdGFudChcInBhZ2luYXRpb25Db25maWdcIix7aXRlbXNQZXJQYWdlOjEwLGJvdW5kYXJ5TGlua3M6ITEsZGlyZWN0aW9uTGlua3M6ITAsZmlyc3RUZXh0OlwiRmlyc3RcIixwcmV2aW91c1RleHQ6XCJQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dFwiLGxhc3RUZXh0OlwiTGFzdFwiLHJvdGF0ZTohMH0pLmRpcmVjdGl2ZShcInBhZ2luYXRpb25cIixbXCIkcGFyc2VcIixcInBhZ2luYXRpb25Db25maWdcIixmdW5jdGlvbihhLGIpe3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6e3RvdGFsSXRlbXM6XCI9XCIsZmlyc3RUZXh0OlwiQFwiLHByZXZpb3VzVGV4dDpcIkBcIixuZXh0VGV4dDpcIkBcIixsYXN0VGV4dDpcIkBcIn0scmVxdWlyZTpbXCJwYWdpbmF0aW9uXCIsXCI/bmdNb2RlbFwiXSxjb250cm9sbGVyOlwiUGFnaW5hdGlvbkNvbnRyb2xsZXJcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sXCIscmVwbGFjZTohMCxsaW5rOmZ1bmN0aW9uKGMsZCxlLGYpe2Z1bmN0aW9uIGcoYSxiLGMpe3JldHVybntudW1iZXI6YSx0ZXh0OmIsYWN0aXZlOmN9fWZ1bmN0aW9uIGgoYSxiKXt2YXIgYz1bXSxkPTEsZT1iLGY9YW5ndWxhci5pc0RlZmluZWQoaykmJmI+aztmJiYobD8oZD1NYXRoLm1heChhLU1hdGguZmxvb3Ioay8yKSwxKSxlPWQray0xLGU+YiYmKGU9YixkPWUtaysxKSk6KGQ9KE1hdGguY2VpbChhL2spLTEpKmsrMSxlPU1hdGgubWluKGQray0xLGIpKSk7Zm9yKHZhciBoPWQ7ZT49aDtoKyspe3ZhciBpPWcoaCxoLGg9PT1hKTtjLnB1c2goaSl9aWYoZiYmIWwpe2lmKGQ+MSl7dmFyIGo9ZyhkLTEsXCIuLi5cIiwhMSk7Yy51bnNoaWZ0KGopfWlmKGI+ZSl7dmFyIG09ZyhlKzEsXCIuLi5cIiwhMSk7Yy5wdXNoKG0pfX1yZXR1cm4gY312YXIgaT1mWzBdLGo9ZlsxXTtpZihqKXt2YXIgaz1hbmd1bGFyLmlzRGVmaW5lZChlLm1heFNpemUpP2MuJHBhcmVudC4kZXZhbChlLm1heFNpemUpOmIubWF4U2l6ZSxsPWFuZ3VsYXIuaXNEZWZpbmVkKGUucm90YXRlKT9jLiRwYXJlbnQuJGV2YWwoZS5yb3RhdGUpOmIucm90YXRlO2MuYm91bmRhcnlMaW5rcz1hbmd1bGFyLmlzRGVmaW5lZChlLmJvdW5kYXJ5TGlua3MpP2MuJHBhcmVudC4kZXZhbChlLmJvdW5kYXJ5TGlua3MpOmIuYm91bmRhcnlMaW5rcyxjLmRpcmVjdGlvbkxpbmtzPWFuZ3VsYXIuaXNEZWZpbmVkKGUuZGlyZWN0aW9uTGlua3MpP2MuJHBhcmVudC4kZXZhbChlLmRpcmVjdGlvbkxpbmtzKTpiLmRpcmVjdGlvbkxpbmtzLGkuaW5pdChqLGIpLGUubWF4U2l6ZSYmYy4kcGFyZW50LiR3YXRjaChhKGUubWF4U2l6ZSksZnVuY3Rpb24oYSl7az1wYXJzZUludChhLDEwKSxpLnJlbmRlcigpXG59KTt2YXIgbT1pLnJlbmRlcjtpLnJlbmRlcj1mdW5jdGlvbigpe20oKSxjLnBhZ2U+MCYmYy5wYWdlPD1jLnRvdGFsUGFnZXMmJihjLnBhZ2VzPWgoYy5wYWdlLGMudG90YWxQYWdlcykpfX19fX1dKS5jb25zdGFudChcInBhZ2VyQ29uZmlnXCIse2l0ZW1zUGVyUGFnZToxMCxwcmV2aW91c1RleHQ6XCLCqyBQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dCDCu1wiLGFsaWduOiEwfSkuZGlyZWN0aXZlKFwicGFnZXJcIixbXCJwYWdlckNvbmZpZ1wiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIsc2NvcGU6e3RvdGFsSXRlbXM6XCI9XCIscHJldmlvdXNUZXh0OlwiQFwiLG5leHRUZXh0OlwiQFwifSxyZXF1aXJlOltcInBhZ2VyXCIsXCI/bmdNb2RlbFwiXSxjb250cm9sbGVyOlwiUGFnaW5hdGlvbkNvbnRyb2xsZXJcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnZXIuaHRtbFwiLHJlcGxhY2U6ITAsbGluazpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1lWzBdLGc9ZVsxXTtnJiYoYi5hbGlnbj1hbmd1bGFyLmlzRGVmaW5lZChkLmFsaWduKT9iLiRwYXJlbnQuJGV2YWwoZC5hbGlnbik6YS5hbGlnbixmLmluaXQoZyxhKSl9fX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC50b29sdGlwXCIsW1widWkuYm9vdHN0cmFwLnBvc2l0aW9uXCIsXCJ1aS5ib290c3RyYXAuYmluZEh0bWxcIl0pLnByb3ZpZGVyKFwiJHRvb2x0aXBcIixmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dmFyIGI9L1tBLVpdL2csYz1cIi1cIjtyZXR1cm4gYS5yZXBsYWNlKGIsZnVuY3Rpb24oYSxiKXtyZXR1cm4oYj9jOlwiXCIpK2EudG9Mb3dlckNhc2UoKX0pfXZhciBiPXtwbGFjZW1lbnQ6XCJ0b3BcIixhbmltYXRpb246ITAscG9wdXBEZWxheTowfSxjPXttb3VzZWVudGVyOlwibW91c2VsZWF2ZVwiLGNsaWNrOlwiY2xpY2tcIixmb2N1czpcImJsdXJcIn0sZD17fTt0aGlzLm9wdGlvbnM9ZnVuY3Rpb24oYSl7YW5ndWxhci5leHRlbmQoZCxhKX0sdGhpcy5zZXRUcmlnZ2Vycz1mdW5jdGlvbihhKXthbmd1bGFyLmV4dGVuZChjLGEpfSx0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGNvbXBpbGVcIixcIiR0aW1lb3V0XCIsXCIkcGFyc2VcIixcIiRkb2N1bWVudFwiLFwiJHBvc2l0aW9uXCIsXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihlLGYsZyxoLGksaixrKXtyZXR1cm4gZnVuY3Rpb24oZSxsLG0pe2Z1bmN0aW9uIG4oYSl7dmFyIGI9YXx8by50cmlnZ2VyfHxtLGQ9Y1tiXXx8YjtyZXR1cm57c2hvdzpiLGhpZGU6ZH19dmFyIG89YW5ndWxhci5leHRlbmQoe30sYixkKSxwPWEoZSkscT1rLnN0YXJ0U3ltYm9sKCkscj1rLmVuZFN5bWJvbCgpLHM9XCI8ZGl2IFwiK3ArJy1wb3B1cCB0aXRsZT1cIicrcStcInR0X3RpdGxlXCIrcisnXCIgY29udGVudD1cIicrcStcInR0X2NvbnRlbnRcIityKydcIiBwbGFjZW1lbnQ9XCInK3ErXCJ0dF9wbGFjZW1lbnRcIityKydcIiBhbmltYXRpb249XCJ0dF9hbmltYXRpb25cIiBpcy1vcGVuPVwidHRfaXNPcGVuXCI+PC9kaXY+JztyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOiEwLGNvbXBpbGU6ZnVuY3Rpb24oKXt2YXIgYT1mKHMpO3JldHVybiBmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZigpe2IudHRfaXNPcGVuP20oKTprKCl9ZnVuY3Rpb24gaygpeygheXx8Yi4kZXZhbChkW2wrXCJFbmFibGVcIl0pKSYmKGIudHRfcG9wdXBEZWxheT92fHwodj1nKHAsYi50dF9wb3B1cERlbGF5LCExKSx2LnRoZW4oZnVuY3Rpb24oYSl7YSgpfSkpOnAoKSgpKX1mdW5jdGlvbiBtKCl7Yi4kYXBwbHkoZnVuY3Rpb24oKXtxKCl9KX1mdW5jdGlvbiBwKCl7cmV0dXJuIHY9bnVsbCx1JiYoZy5jYW5jZWwodSksdT1udWxsKSxiLnR0X2NvbnRlbnQ/KHIoKSx0LmNzcyh7dG9wOjAsbGVmdDowLGRpc3BsYXk6XCJibG9ja1wifSksdz9pLmZpbmQoXCJib2R5XCIpLmFwcGVuZCh0KTpjLmFmdGVyKHQpLHooKSxiLnR0X2lzT3Blbj0hMCxiLiRkaWdlc3QoKSx6KTphbmd1bGFyLm5vb3B9ZnVuY3Rpb24gcSgpe2IudHRfaXNPcGVuPSExLGcuY2FuY2VsKHYpLHY9bnVsbCxiLnR0X2FuaW1hdGlvbj91fHwodT1nKHMsNTAwKSk6cygpfWZ1bmN0aW9uIHIoKXt0JiZzKCksdD1hKGIsZnVuY3Rpb24oKXt9KSxiLiRkaWdlc3QoKX1mdW5jdGlvbiBzKCl7dT1udWxsLHQmJih0LnJlbW92ZSgpLHQ9bnVsbCl9dmFyIHQsdSx2LHc9YW5ndWxhci5pc0RlZmluZWQoby5hcHBlbmRUb0JvZHkpP28uYXBwZW5kVG9Cb2R5OiExLHg9bih2b2lkIDApLHk9YW5ndWxhci5pc0RlZmluZWQoZFtsK1wiRW5hYmxlXCJdKSx6PWZ1bmN0aW9uKCl7dmFyIGE9ai5wb3NpdGlvbkVsZW1lbnRzKGMsdCxiLnR0X3BsYWNlbWVudCx3KTthLnRvcCs9XCJweFwiLGEubGVmdCs9XCJweFwiLHQuY3NzKGEpfTtiLnR0X2lzT3Blbj0hMSxkLiRvYnNlcnZlKGUsZnVuY3Rpb24oYSl7Yi50dF9jb250ZW50PWEsIWEmJmIudHRfaXNPcGVuJiZxKCl9KSxkLiRvYnNlcnZlKGwrXCJUaXRsZVwiLGZ1bmN0aW9uKGEpe2IudHRfdGl0bGU9YX0pLGQuJG9ic2VydmUobCtcIlBsYWNlbWVudFwiLGZ1bmN0aW9uKGEpe2IudHRfcGxhY2VtZW50PWFuZ3VsYXIuaXNEZWZpbmVkKGEpP2E6by5wbGFjZW1lbnR9KSxkLiRvYnNlcnZlKGwrXCJQb3B1cERlbGF5XCIsZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VJbnQoYSwxMCk7Yi50dF9wb3B1cERlbGF5PWlzTmFOKGMpP28ucG9wdXBEZWxheTpjfSk7dmFyIEE9ZnVuY3Rpb24oKXtjLnVuYmluZCh4LnNob3csayksYy51bmJpbmQoeC5oaWRlLG0pfTtkLiRvYnNlcnZlKGwrXCJUcmlnZ2VyXCIsZnVuY3Rpb24oYSl7QSgpLHg9bihhKSx4LnNob3c9PT14LmhpZGU/Yy5iaW5kKHguc2hvdyxmKTooYy5iaW5kKHguc2hvdyxrKSxjLmJpbmQoeC5oaWRlLG0pKX0pO3ZhciBCPWIuJGV2YWwoZFtsK1wiQW5pbWF0aW9uXCJdKTtiLnR0X2FuaW1hdGlvbj1hbmd1bGFyLmlzRGVmaW5lZChCKT8hIUI6by5hbmltYXRpb24sZC4kb2JzZXJ2ZShsK1wiQXBwZW5kVG9Cb2R5XCIsZnVuY3Rpb24oYSl7dz1hbmd1bGFyLmlzRGVmaW5lZChhKT9oKGEpKGIpOnd9KSx3JiZiLiRvbihcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixmdW5jdGlvbigpe2IudHRfaXNPcGVuJiZxKCl9KSxiLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtnLmNhbmNlbCh1KSxnLmNhbmNlbCh2KSxBKCkscygpfSl9fX19fV19KS5kaXJlY3RpdmUoXCJ0b29sdGlwUG9wdXBcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCxzY29wZTp7Y29udGVudDpcIkBcIixwbGFjZW1lbnQ6XCJAXCIsYW5pbWF0aW9uOlwiJlwiLGlzT3BlbjpcIiZcIn0sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtcG9wdXAuaHRtbFwifX0pLmRpcmVjdGl2ZShcInRvb2x0aXBcIixbXCIkdG9vbHRpcFwiLGZ1bmN0aW9uKGEpe3JldHVybiBhKFwidG9vbHRpcFwiLFwidG9vbHRpcFwiLFwibW91c2VlbnRlclwiKX1dKS5kaXJlY3RpdmUoXCJ0b29sdGlwSHRtbFVuc2FmZVBvcHVwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsc2NvcGU6e2NvbnRlbnQ6XCJAXCIscGxhY2VtZW50OlwiQFwiLGFuaW1hdGlvbjpcIiZcIixpc09wZW46XCImXCJ9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLWh0bWwtdW5zYWZlLXBvcHVwLmh0bWxcIn19KS5kaXJlY3RpdmUoXCJ0b29sdGlwSHRtbFVuc2FmZVwiLFtcIiR0b29sdGlwXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEoXCJ0b29sdGlwSHRtbFVuc2FmZVwiLFwidG9vbHRpcFwiLFwibW91c2VlbnRlclwiKX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5wb3BvdmVyXCIsW1widWkuYm9vdHN0cmFwLnRvb2x0aXBcIl0pLmRpcmVjdGl2ZShcInBvcG92ZXJQb3B1cFwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXBsYWNlOiEwLHNjb3BlOnt0aXRsZTpcIkBcIixjb250ZW50OlwiQFwiLHBsYWNlbWVudDpcIkBcIixhbmltYXRpb246XCImXCIsaXNPcGVuOlwiJlwifSx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci5odG1sXCJ9fSkuZGlyZWN0aXZlKFwicG9wb3ZlclwiLFtcIiR0b29sdGlwXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEoXCJwb3BvdmVyXCIsXCJwb3BvdmVyXCIsXCJjbGlja1wiKX1dKSxhbmd1bGFyLm1vZHVsZShcInVpLmJvb3RzdHJhcC5wcm9ncmVzc2JhclwiLFtdKS5jb25zdGFudChcInByb2dyZXNzQ29uZmlnXCIse2FuaW1hdGU6ITAsbWF4OjEwMH0pLmNvbnRyb2xsZXIoXCJQcm9ncmVzc0NvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwicHJvZ3Jlc3NDb25maWdcIixmdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPWFuZ3VsYXIuaXNEZWZpbmVkKGIuYW5pbWF0ZSk/YS4kcGFyZW50LiRldmFsKGIuYW5pbWF0ZSk6Yy5hbmltYXRlO3RoaXMuYmFycz1bXSxhLm1heD1hbmd1bGFyLmlzRGVmaW5lZChiLm1heCk/YS4kcGFyZW50LiRldmFsKGIubWF4KTpjLm1heCx0aGlzLmFkZEJhcj1mdW5jdGlvbihiLGMpe2V8fGMuY3NzKHt0cmFuc2l0aW9uOlwibm9uZVwifSksdGhpcy5iYXJzLnB1c2goYiksYi4kd2F0Y2goXCJ2YWx1ZVwiLGZ1bmN0aW9uKGMpe2IucGVyY2VudD0rKDEwMCpjL2EubWF4KS50b0ZpeGVkKDIpfSksYi4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7Yz1udWxsLGQucmVtb3ZlQmFyKGIpfSl9LHRoaXMucmVtb3ZlQmFyPWZ1bmN0aW9uKGEpe3RoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYSksMSl9fV0pLmRpcmVjdGl2ZShcInByb2dyZXNzXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdHJhbnNjbHVkZTohMCxjb250cm9sbGVyOlwiUHJvZ3Jlc3NDb250cm9sbGVyXCIscmVxdWlyZTpcInByb2dyZXNzXCIsc2NvcGU6e30sdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCJ9fSkuZGlyZWN0aXZlKFwiYmFyXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdHJhbnNjbHVkZTohMCxyZXF1aXJlOlwiXnByb2dyZXNzXCIsc2NvcGU6e3ZhbHVlOlwiPVwiLHR5cGU6XCJAXCJ9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe2QuYWRkQmFyKGEsYil9fX0pLmRpcmVjdGl2ZShcInByb2dyZXNzYmFyXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHJlcGxhY2U6ITAsdHJhbnNjbHVkZTohMCxjb250cm9sbGVyOlwiUHJvZ3Jlc3NDb250cm9sbGVyXCIsc2NvcGU6e3ZhbHVlOlwiPVwiLHR5cGU6XCJAXCJ9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMsZCl7ZC5hZGRCYXIoYSxhbmd1bGFyLmVsZW1lbnQoYi5jaGlsZHJlbigpWzBdKSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnJhdGluZ1wiLFtdKS5jb25zdGFudChcInJhdGluZ0NvbmZpZ1wiLHttYXg6NSxzdGF0ZU9uOm51bGwsc3RhdGVPZmY6bnVsbH0pLmNvbnRyb2xsZXIoXCJSYXRpbmdDb250cm9sbGVyXCIsW1wiJHNjb3BlXCIsXCIkYXR0cnNcIixcInJhdGluZ0NvbmZpZ1wiLGZ1bmN0aW9uKGEsYixjKXt2YXIgZD17JHNldFZpZXdWYWx1ZTphbmd1bGFyLm5vb3B9O3RoaXMuaW5pdD1mdW5jdGlvbihlKXtkPWUsZC4kcmVuZGVyPXRoaXMucmVuZGVyLHRoaXMuc3RhdGVPbj1hbmd1bGFyLmlzRGVmaW5lZChiLnN0YXRlT24pP2EuJHBhcmVudC4kZXZhbChiLnN0YXRlT24pOmMuc3RhdGVPbix0aGlzLnN0YXRlT2ZmPWFuZ3VsYXIuaXNEZWZpbmVkKGIuc3RhdGVPZmYpP2EuJHBhcmVudC4kZXZhbChiLnN0YXRlT2ZmKTpjLnN0YXRlT2ZmO3ZhciBmPWFuZ3VsYXIuaXNEZWZpbmVkKGIucmF0aW5nU3RhdGVzKT9hLiRwYXJlbnQuJGV2YWwoYi5yYXRpbmdTdGF0ZXMpOm5ldyBBcnJheShhbmd1bGFyLmlzRGVmaW5lZChiLm1heCk/YS4kcGFyZW50LiRldmFsKGIubWF4KTpjLm1heCk7YS5yYW5nZT10aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzKGYpfSx0aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7Yz5iO2IrKylhW2JdPWFuZ3VsYXIuZXh0ZW5kKHtpbmRleDpifSx7c3RhdGVPbjp0aGlzLnN0YXRlT24sc3RhdGVPZmY6dGhpcy5zdGF0ZU9mZn0sYVtiXSk7cmV0dXJuIGF9LGEucmF0ZT1mdW5jdGlvbihiKXshYS5yZWFkb25seSYmYj49MCYmYjw9YS5yYW5nZS5sZW5ndGgmJihkLiRzZXRWaWV3VmFsdWUoYiksZC4kcmVuZGVyKCkpfSxhLmVudGVyPWZ1bmN0aW9uKGIpe2EucmVhZG9ubHl8fChhLnZhbHVlPWIpLGEub25Ib3Zlcih7dmFsdWU6Yn0pfSxhLnJlc2V0PWZ1bmN0aW9uKCl7YS52YWx1ZT1kLiR2aWV3VmFsdWUsYS5vbkxlYXZlKCl9LGEub25LZXlkb3duPWZ1bmN0aW9uKGIpey8oMzd8Mzh8Mzl8NDApLy50ZXN0KGIud2hpY2gpJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCksYS5yYXRlKGEudmFsdWUrKDM4PT09Yi53aGljaHx8Mzk9PT1iLndoaWNoPzE6LTEpKSl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7YS52YWx1ZT1kLiR2aWV3VmFsdWV9fV0pLmRpcmVjdGl2ZShcInJhdGluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOltcInJhdGluZ1wiLFwibmdNb2RlbFwiXSxzY29wZTp7cmVhZG9ubHk6XCI9P1wiLG9uSG92ZXI6XCImXCIsb25MZWF2ZTpcIiZcIn0sY29udHJvbGxlcjpcIlJhdGluZ0NvbnRyb2xsZXJcIix0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3JhdGluZy9yYXRpbmcuaHRtbFwiLHJlcGxhY2U6ITAsbGluazpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1kWzBdLGY9ZFsxXTtmJiZlLmluaXQoZil9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRhYnNcIixbXSkuY29udHJvbGxlcihcIlRhYnNldENvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9Yi50YWJzPWEudGFicz1bXTtiLnNlbGVjdD1mdW5jdGlvbihhKXthbmd1bGFyLmZvckVhY2goYyxmdW5jdGlvbihiKXtiLmFjdGl2ZSYmYiE9PWEmJihiLmFjdGl2ZT0hMSxiLm9uRGVzZWxlY3QoKSl9KSxhLmFjdGl2ZT0hMCxhLm9uU2VsZWN0KCl9LGIuYWRkVGFiPWZ1bmN0aW9uKGEpe2MucHVzaChhKSwxPT09Yy5sZW5ndGg/YS5hY3RpdmU9ITA6YS5hY3RpdmUmJmIuc2VsZWN0KGEpfSxiLnJlbW92ZVRhYj1mdW5jdGlvbihhKXt2YXIgZD1jLmluZGV4T2YoYSk7aWYoYS5hY3RpdmUmJmMubGVuZ3RoPjEpe3ZhciBlPWQ9PWMubGVuZ3RoLTE/ZC0xOmQrMTtiLnNlbGVjdChjW2VdKX1jLnNwbGljZShkLDEpfX1dKS5kaXJlY3RpdmUoXCJ0YWJzZXRcIixmdW5jdGlvbigpe3JldHVybntyZXN0cmljdDpcIkVBXCIsdHJhbnNjbHVkZTohMCxyZXBsYWNlOiEwLHNjb3BlOnt0eXBlOlwiQFwifSxjb250cm9sbGVyOlwiVGFic2V0Q29udHJvbGxlclwiLHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLGxpbms6ZnVuY3Rpb24oYSxiLGMpe2EudmVydGljYWw9YW5ndWxhci5pc0RlZmluZWQoYy52ZXJ0aWNhbCk/YS4kcGFyZW50LiRldmFsKGMudmVydGljYWwpOiExLGEuanVzdGlmaWVkPWFuZ3VsYXIuaXNEZWZpbmVkKGMuanVzdGlmaWVkKT9hLiRwYXJlbnQuJGV2YWwoYy5qdXN0aWZpZWQpOiExfX19KS5kaXJlY3RpdmUoXCJ0YWJcIixbXCIkcGFyc2VcIixmdW5jdGlvbihhKXtyZXR1cm57cmVxdWlyZTpcIl50YWJzZXRcIixyZXN0cmljdDpcIkVBXCIscmVwbGFjZTohMCx0ZW1wbGF0ZVVybDpcInRlbXBsYXRlL3RhYnMvdGFiLmh0bWxcIix0cmFuc2NsdWRlOiEwLHNjb3BlOnthY3RpdmU6XCI9P1wiLGhlYWRpbmc6XCJAXCIsb25TZWxlY3Q6XCImc2VsZWN0XCIsb25EZXNlbGVjdDpcIiZkZXNlbGVjdFwifSxjb250cm9sbGVyOmZ1bmN0aW9uKCl7fSxjb21waWxlOmZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gZnVuY3Rpb24oYixjLGUsZil7Yi4kd2F0Y2goXCJhY3RpdmVcIixmdW5jdGlvbihhKXthJiZmLnNlbGVjdChiKX0pLGIuZGlzYWJsZWQ9ITEsZS5kaXNhYmxlZCYmYi4kcGFyZW50LiR3YXRjaChhKGUuZGlzYWJsZWQpLGZ1bmN0aW9uKGEpe2IuZGlzYWJsZWQ9ISFhfSksYi5zZWxlY3Q9ZnVuY3Rpb24oKXtiLmRpc2FibGVkfHwoYi5hY3RpdmU9ITApfSxmLmFkZFRhYihiKSxiLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtmLnJlbW92ZVRhYihiKX0pLGIuJHRyYW5zY2x1ZGVGbj1kfX19fV0pLmRpcmVjdGl2ZShcInRhYkhlYWRpbmdUcmFuc2NsdWRlXCIsW2Z1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6XCJedGFiXCIsbGluazpmdW5jdGlvbihhLGIpe2EuJHdhdGNoKFwiaGVhZGluZ0VsZW1lbnRcIixmdW5jdGlvbihhKXthJiYoYi5odG1sKFwiXCIpLGIuYXBwZW5kKGEpKX0pfX19XSkuZGlyZWN0aXZlKFwidGFiQ29udGVudFRyYW5zY2x1ZGVcIixmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGEudGFnTmFtZSYmKGEuaGFzQXR0cmlidXRlKFwidGFiLWhlYWRpbmdcIil8fGEuaGFzQXR0cmlidXRlKFwiZGF0YS10YWItaGVhZGluZ1wiKXx8XCJ0YWItaGVhZGluZ1wiPT09YS50YWdOYW1lLnRvTG93ZXJDYXNlKCl8fFwiZGF0YS10YWItaGVhZGluZ1wiPT09YS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpfXJldHVybntyZXN0cmljdDpcIkFcIixyZXF1aXJlOlwiXnRhYnNldFwiLGxpbms6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWIuJGV2YWwoZC50YWJDb250ZW50VHJhbnNjbHVkZSk7ZS4kdHJhbnNjbHVkZUZuKGUuJHBhcmVudCxmdW5jdGlvbihiKXthbmd1bGFyLmZvckVhY2goYixmdW5jdGlvbihiKXthKGIpP2UuaGVhZGluZ0VsZW1lbnQ9YjpjLmFwcGVuZChiKX0pfSl9fX0pLGFuZ3VsYXIubW9kdWxlKFwidWkuYm9vdHN0cmFwLnRpbWVwaWNrZXJcIixbXSkuY29uc3RhbnQoXCJ0aW1lcGlja2VyQ29uZmlnXCIse2hvdXJTdGVwOjEsbWludXRlU3RlcDoxLHNob3dNZXJpZGlhbjohMCxtZXJpZGlhbnM6bnVsbCxyZWFkb25seUlucHV0OiExLG1vdXNld2hlZWw6ITB9KS5jb250cm9sbGVyKFwiVGltZXBpY2tlckNvbnRyb2xsZXJcIixbXCIkc2NvcGVcIixcIiRhdHRyc1wiLFwiJHBhcnNlXCIsXCIkbG9nXCIsXCIkbG9jYWxlXCIsXCJ0aW1lcGlja2VyQ29uZmlnXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYpe2Z1bmN0aW9uIGcoKXt2YXIgYj1wYXJzZUludChhLmhvdXJzLDEwKSxjPWEuc2hvd01lcmlkaWFuP2I+MCYmMTM+YjpiPj0wJiYyND5iO3JldHVybiBjPyhhLnNob3dNZXJpZGlhbiYmKDEyPT09YiYmKGI9MCksYS5tZXJpZGlhbj09PXBbMV0mJihiKz0xMikpLGIpOnZvaWQgMH1mdW5jdGlvbiBoKCl7dmFyIGI9cGFyc2VJbnQoYS5taW51dGVzLDEwKTtyZXR1cm4gYj49MCYmNjA+Yj9iOnZvaWQgMH1mdW5jdGlvbiBpKGEpe3JldHVybiBhbmd1bGFyLmlzRGVmaW5lZChhKSYmYS50b1N0cmluZygpLmxlbmd0aDwyP1wiMFwiK2E6YX1mdW5jdGlvbiBqKGEpe2soKSxvLiRzZXRWaWV3VmFsdWUobmV3IERhdGUobikpLGwoYSl9ZnVuY3Rpb24gaygpe28uJHNldFZhbGlkaXR5KFwidGltZVwiLCEwKSxhLmludmFsaWRIb3Vycz0hMSxhLmludmFsaWRNaW51dGVzPSExfWZ1bmN0aW9uIGwoYil7dmFyIGM9bi5nZXRIb3VycygpLGQ9bi5nZXRNaW51dGVzKCk7YS5zaG93TWVyaWRpYW4mJihjPTA9PT1jfHwxMj09PWM/MTI6YyUxMiksYS5ob3Vycz1cImhcIj09PWI/YzppKGMpLGEubWludXRlcz1cIm1cIj09PWI/ZDppKGQpLGEubWVyaWRpYW49bi5nZXRIb3VycygpPDEyP3BbMF06cFsxXX1mdW5jdGlvbiBtKGEpe3ZhciBiPW5ldyBEYXRlKG4uZ2V0VGltZSgpKzZlNCphKTtuLnNldEhvdXJzKGIuZ2V0SG91cnMoKSxiLmdldE1pbnV0ZXMoKSksaigpfXZhciBuPW5ldyBEYXRlLG89eyRzZXRWaWV3VmFsdWU6YW5ndWxhci5ub29wfSxwPWFuZ3VsYXIuaXNEZWZpbmVkKGIubWVyaWRpYW5zKT9hLiRwYXJlbnQuJGV2YWwoYi5tZXJpZGlhbnMpOmYubWVyaWRpYW5zfHxlLkRBVEVUSU1FX0ZPUk1BVFMuQU1QTVM7dGhpcy5pbml0PWZ1bmN0aW9uKGMsZCl7bz1jLG8uJHJlbmRlcj10aGlzLnJlbmRlcjt2YXIgZT1kLmVxKDApLGc9ZC5lcSgxKSxoPWFuZ3VsYXIuaXNEZWZpbmVkKGIubW91c2V3aGVlbCk/YS4kcGFyZW50LiRldmFsKGIubW91c2V3aGVlbCk6Zi5tb3VzZXdoZWVsO2gmJnRoaXMuc2V0dXBNb3VzZXdoZWVsRXZlbnRzKGUsZyksYS5yZWFkb25seUlucHV0PWFuZ3VsYXIuaXNEZWZpbmVkKGIucmVhZG9ubHlJbnB1dCk/YS4kcGFyZW50LiRldmFsKGIucmVhZG9ubHlJbnB1dCk6Zi5yZWFkb25seUlucHV0LHRoaXMuc2V0dXBJbnB1dEV2ZW50cyhlLGcpfTt2YXIgcT1mLmhvdXJTdGVwO2IuaG91clN0ZXAmJmEuJHBhcmVudC4kd2F0Y2goYyhiLmhvdXJTdGVwKSxmdW5jdGlvbihhKXtxPXBhcnNlSW50KGEsMTApfSk7dmFyIHI9Zi5taW51dGVTdGVwO2IubWludXRlU3RlcCYmYS4kcGFyZW50LiR3YXRjaChjKGIubWludXRlU3RlcCksZnVuY3Rpb24oYSl7cj1wYXJzZUludChhLDEwKX0pLGEuc2hvd01lcmlkaWFuPWYuc2hvd01lcmlkaWFuLGIuc2hvd01lcmlkaWFuJiZhLiRwYXJlbnQuJHdhdGNoKGMoYi5zaG93TWVyaWRpYW4pLGZ1bmN0aW9uKGIpe2lmKGEuc2hvd01lcmlkaWFuPSEhYixvLiRlcnJvci50aW1lKXt2YXIgYz1nKCksZD1oKCk7YW5ndWxhci5pc0RlZmluZWQoYykmJmFuZ3VsYXIuaXNEZWZpbmVkKGQpJiYobi5zZXRIb3VycyhjKSxqKCkpfWVsc2UgbCgpfSksdGhpcy5zZXR1cE1vdXNld2hlZWxFdmVudHM9ZnVuY3Rpb24oYixjKXt2YXIgZD1mdW5jdGlvbihhKXthLm9yaWdpbmFsRXZlbnQmJihhPWEub3JpZ2luYWxFdmVudCk7dmFyIGI9YS53aGVlbERlbHRhP2Eud2hlZWxEZWx0YTotYS5kZWx0YVk7cmV0dXJuIGEuZGV0YWlsfHxiPjB9O2IuYmluZChcIm1vdXNld2hlZWwgd2hlZWxcIixmdW5jdGlvbihiKXthLiRhcHBseShkKGIpP2EuaW5jcmVtZW50SG91cnMoKTphLmRlY3JlbWVudEhvdXJzKCkpLGIucHJldmVudERlZmF1bHQoKX0pLGMuYmluZChcIm1vdXNld2hlZWwgd2hlZWxcIixmdW5jdGlvbihiKXthLiRhcHBseShkKGIpP2EuaW5jcmVtZW50TWludXRlcygpOmEuZGVjcmVtZW50TWludXRlcygpKSxiLnByZXZlbnREZWZhdWx0KCl9KX0sdGhpcy5zZXR1cElucHV0RXZlbnRzPWZ1bmN0aW9uKGIsYyl7aWYoYS5yZWFkb25seUlucHV0KXJldHVybiBhLnVwZGF0ZUhvdXJzPWFuZ3VsYXIubm9vcCx2b2lkKGEudXBkYXRlTWludXRlcz1hbmd1bGFyLm5vb3ApO3ZhciBkPWZ1bmN0aW9uKGIsYyl7by4kc2V0Vmlld1ZhbHVlKG51bGwpLG8uJHNldFZhbGlkaXR5KFwidGltZVwiLCExKSxhbmd1bGFyLmlzRGVmaW5lZChiKSYmKGEuaW52YWxpZEhvdXJzPWIpLGFuZ3VsYXIuaXNEZWZpbmVkKGMpJiYoYS5pbnZhbGlkTWludXRlcz1jKX07YS51cGRhdGVIb3Vycz1mdW5jdGlvbigpe3ZhciBhPWcoKTthbmd1bGFyLmlzRGVmaW5lZChhKT8obi5zZXRIb3VycyhhKSxqKFwiaFwiKSk6ZCghMCl9LGIuYmluZChcImJsdXJcIixmdW5jdGlvbigpeyFhLmludmFsaWRIb3VycyYmYS5ob3VyczwxMCYmYS4kYXBwbHkoZnVuY3Rpb24oKXthLmhvdXJzPWkoYS5ob3Vycyl9KX0pLGEudXBkYXRlTWludXRlcz1mdW5jdGlvbigpe3ZhciBhPWgoKTthbmd1bGFyLmlzRGVmaW5lZChhKT8obi5zZXRNaW51dGVzKGEpLGooXCJtXCIpKTpkKHZvaWQgMCwhMCl9LGMuYmluZChcImJsdXJcIixmdW5jdGlvbigpeyFhLmludmFsaWRNaW51dGVzJiZhLm1pbnV0ZXM8MTAmJmEuJGFwcGx5KGZ1bmN0aW9uKCl7YS5taW51dGVzPWkoYS5taW51dGVzKX0pfSl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9by4kbW9kZWxWYWx1ZT9uZXcgRGF0ZShvLiRtb2RlbFZhbHVlKTpudWxsO2lzTmFOKGEpPyhvLiRzZXRWYWxpZGl0eShcInRpbWVcIiwhMSksZC5lcnJvcignVGltZXBpY2tlciBkaXJlY3RpdmU6IFwibmctbW9kZWxcIiB2YWx1ZSBtdXN0IGJlIGEgRGF0ZSBvYmplY3QsIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAwMS4wMS4xOTcwIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBSRkMyODIyIG9yIElTTyA4NjAxIGRhdGUuJykpOihhJiYobj1hKSxrKCksbCgpKX0sYS5pbmNyZW1lbnRIb3Vycz1mdW5jdGlvbigpe20oNjAqcSl9LGEuZGVjcmVtZW50SG91cnM9ZnVuY3Rpb24oKXttKDYwKi1xKX0sYS5pbmNyZW1lbnRNaW51dGVzPWZ1bmN0aW9uKCl7bShyKX0sYS5kZWNyZW1lbnRNaW51dGVzPWZ1bmN0aW9uKCl7bSgtcil9LGEudG9nZ2xlTWVyaWRpYW49ZnVuY3Rpb24oKXttKDcyMCoobi5nZXRIb3VycygpPDEyPzE6LTEpKX19XSkuZGlyZWN0aXZlKFwidGltZXBpY2tlclwiLGZ1bmN0aW9uKCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOltcInRpbWVwaWNrZXJcIixcIj9ebmdNb2RlbFwiXSxjb250cm9sbGVyOlwiVGltZXBpY2tlckNvbnRyb2xsZXJcIixyZXBsYWNlOiEwLHNjb3BlOnt9LHRlbXBsYXRlVXJsOlwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWRbMF0sZj1kWzFdO2YmJmUuaW5pdChmLGIuZmluZChcImlucHV0XCIpKX19fSksYW5ndWxhci5tb2R1bGUoXCJ1aS5ib290c3RyYXAudHlwZWFoZWFkXCIsW1widWkuYm9vdHN0cmFwLnBvc2l0aW9uXCIsXCJ1aS5ib290c3RyYXAuYmluZEh0bWxcIl0pLmZhY3RvcnkoXCJ0eXBlYWhlYWRQYXJzZXJcIixbXCIkcGFyc2VcIixmdW5jdGlvbihhKXt2YXIgYj0vXlxccyooW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT9cXHMrZm9yXFxzKyg/OihbXFwkXFx3XVtcXCRcXHdcXGRdKikpXFxzK2luXFxzKyhbXFxzXFxTXSs/KSQvO3JldHVybntwYXJzZTpmdW5jdGlvbihjKXt2YXIgZD1jLm1hdGNoKGIpO2lmKCFkKXRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdHlwZWFoZWFkIHNwZWNpZmljYXRpb24gaW4gZm9ybSBvZiBcIl9tb2RlbFZhbHVlXyAoYXMgX2xhYmVsXyk/IGZvciBfaXRlbV8gaW4gX2NvbGxlY3Rpb25fXCIgYnV0IGdvdCBcIicrYysnXCIuJyk7cmV0dXJue2l0ZW1OYW1lOmRbM10sc291cmNlOmEoZFs0XSksdmlld01hcHBlcjphKGRbMl18fGRbMV0pLG1vZGVsTWFwcGVyOmEoZFsxXSl9fX19XSkuZGlyZWN0aXZlKFwidHlwZWFoZWFkXCIsW1wiJGNvbXBpbGVcIixcIiRwYXJzZVwiLFwiJHFcIixcIiR0aW1lb3V0XCIsXCIkZG9jdW1lbnRcIixcIiRwb3NpdGlvblwiLFwidHlwZWFoZWFkUGFyc2VyXCIsZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9WzksMTMsMjcsMzgsNDBdO3JldHVybntyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oaSxqLGssbCl7dmFyIG0sbj1pLiRldmFsKGsudHlwZWFoZWFkTWluTGVuZ3RoKXx8MSxvPWkuJGV2YWwoay50eXBlYWhlYWRXYWl0TXMpfHwwLHA9aS4kZXZhbChrLnR5cGVhaGVhZEVkaXRhYmxlKSE9PSExLHE9YihrLnR5cGVhaGVhZExvYWRpbmcpLmFzc2lnbnx8YW5ndWxhci5ub29wLHI9YihrLnR5cGVhaGVhZE9uU2VsZWN0KSxzPWsudHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI/YihrLnR5cGVhaGVhZElucHV0Rm9ybWF0dGVyKTp2b2lkIDAsdD1rLnR5cGVhaGVhZEFwcGVuZFRvQm9keT9pLiRldmFsKGsudHlwZWFoZWFkQXBwZW5kVG9Cb2R5KTohMSx1PWIoay5uZ01vZGVsKS5hc3NpZ24sdj1nLnBhcnNlKGsudHlwZWFoZWFkKSx3PWkuJG5ldygpO2kuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe3cuJGRlc3Ryb3koKX0pO3ZhciB4PVwidHlwZWFoZWFkLVwiK3cuJGlkK1wiLVwiK01hdGguZmxvb3IoMWU0Kk1hdGgucmFuZG9tKCkpO2ouYXR0cih7XCJhcmlhLWF1dG9jb21wbGV0ZVwiOlwibGlzdFwiLFwiYXJpYS1leHBhbmRlZFwiOiExLFwiYXJpYS1vd25zXCI6eH0pO3ZhciB5PWFuZ3VsYXIuZWxlbWVudChcIjxkaXYgdHlwZWFoZWFkLXBvcHVwPjwvZGl2PlwiKTt5LmF0dHIoe2lkOngsbWF0Y2hlczpcIm1hdGNoZXNcIixhY3RpdmU6XCJhY3RpdmVJZHhcIixzZWxlY3Q6XCJzZWxlY3QoYWN0aXZlSWR4KVwiLHF1ZXJ5OlwicXVlcnlcIixwb3NpdGlvbjpcInBvc2l0aW9uXCJ9KSxhbmd1bGFyLmlzRGVmaW5lZChrLnR5cGVhaGVhZFRlbXBsYXRlVXJsKSYmeS5hdHRyKFwidGVtcGxhdGUtdXJsXCIsay50eXBlYWhlYWRUZW1wbGF0ZVVybCk7dmFyIHo9ZnVuY3Rpb24oKXt3Lm1hdGNoZXM9W10sdy5hY3RpdmVJZHg9LTEsai5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKX0sQT1mdW5jdGlvbihhKXtyZXR1cm4geCtcIi1vcHRpb24tXCIrYX07dy4kd2F0Y2goXCJhY3RpdmVJZHhcIixmdW5jdGlvbihhKXswPmE/ai5yZW1vdmVBdHRyKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpOmouYXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLEEoYSkpfSk7dmFyIEI9ZnVuY3Rpb24oYSl7dmFyIGI9eyR2aWV3VmFsdWU6YX07cShpLCEwKSxjLndoZW4odi5zb3VyY2UoaSxiKSkudGhlbihmdW5jdGlvbihjKXt2YXIgZD1hPT09bC4kdmlld1ZhbHVlO2lmKGQmJm0paWYoYy5sZW5ndGg+MCl7dy5hY3RpdmVJZHg9MCx3Lm1hdGNoZXMubGVuZ3RoPTA7Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYlt2Lml0ZW1OYW1lXT1jW2VdLHcubWF0Y2hlcy5wdXNoKHtpZDpBKGUpLGxhYmVsOnYudmlld01hcHBlcih3LGIpLG1vZGVsOmNbZV19KTt3LnF1ZXJ5PWEsdy5wb3NpdGlvbj10P2Yub2Zmc2V0KGopOmYucG9zaXRpb24oaiksdy5wb3NpdGlvbi50b3A9dy5wb3NpdGlvbi50b3Arai5wcm9wKFwib2Zmc2V0SGVpZ2h0XCIpLGouYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCl9ZWxzZSB6KCk7ZCYmcShpLCExKX0sZnVuY3Rpb24oKXt6KCkscShpLCExKX0pfTt6KCksdy5xdWVyeT12b2lkIDA7dmFyIEMsRD1mdW5jdGlvbihhKXtDPWQoZnVuY3Rpb24oKXtCKGEpfSxvKX0sRT1mdW5jdGlvbigpe0MmJmQuY2FuY2VsKEMpfTtsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24oYSl7cmV0dXJuIG09ITAsYSYmYS5sZW5ndGg+PW4/bz4wPyhFKCksRChhKSk6QihhKToocShpLCExKSxFKCkseigpKSxwP2E6YT92b2lkIGwuJHNldFZhbGlkaXR5KFwiZWRpdGFibGVcIiwhMSk6KGwuJHNldFZhbGlkaXR5KFwiZWRpdGFibGVcIiwhMCksYSl9KSxsLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXt9O3JldHVybiBzPyhkLiRtb2RlbD1hLHMoaSxkKSk6KGRbdi5pdGVtTmFtZV09YSxiPXYudmlld01hcHBlcihpLGQpLGRbdi5pdGVtTmFtZV09dm9pZCAwLGM9di52aWV3TWFwcGVyKGksZCksYiE9PWM/YjphKX0pLHcuc2VsZWN0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZT17fTtlW3YuaXRlbU5hbWVdPWM9dy5tYXRjaGVzW2FdLm1vZGVsLGI9di5tb2RlbE1hcHBlcihpLGUpLHUoaSxiKSxsLiRzZXRWYWxpZGl0eShcImVkaXRhYmxlXCIsITApLHIoaSx7JGl0ZW06YywkbW9kZWw6YiwkbGFiZWw6di52aWV3TWFwcGVyKGksZSl9KSx6KCksZChmdW5jdGlvbigpe2pbMF0uZm9jdXMoKX0sMCwhMSl9LGouYmluZChcImtleWRvd25cIixmdW5jdGlvbihhKXswIT09dy5tYXRjaGVzLmxlbmd0aCYmLTEhPT1oLmluZGV4T2YoYS53aGljaCkmJihhLnByZXZlbnREZWZhdWx0KCksNDA9PT1hLndoaWNoPyh3LmFjdGl2ZUlkeD0ody5hY3RpdmVJZHgrMSkldy5tYXRjaGVzLmxlbmd0aCx3LiRkaWdlc3QoKSk6Mzg9PT1hLndoaWNoPyh3LmFjdGl2ZUlkeD0ody5hY3RpdmVJZHg/dy5hY3RpdmVJZHg6dy5tYXRjaGVzLmxlbmd0aCktMSx3LiRkaWdlc3QoKSk6MTM9PT1hLndoaWNofHw5PT09YS53aGljaD93LiRhcHBseShmdW5jdGlvbigpe3cuc2VsZWN0KHcuYWN0aXZlSWR4KX0pOjI3PT09YS53aGljaCYmKGEuc3RvcFByb3BhZ2F0aW9uKCkseigpLHcuJGRpZ2VzdCgpKSl9KSxqLmJpbmQoXCJibHVyXCIsZnVuY3Rpb24oKXttPSExfSk7dmFyIEY9ZnVuY3Rpb24oYSl7alswXSE9PWEudGFyZ2V0JiYoeigpLHcuJGRpZ2VzdCgpKX07ZS5iaW5kKFwiY2xpY2tcIixGKSxpLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtlLnVuYmluZChcImNsaWNrXCIsRil9KTt2YXIgRz1hKHkpKHcpO3Q/ZS5maW5kKFwiYm9keVwiKS5hcHBlbmQoRyk6ai5hZnRlcihHKX19fV0pLmRpcmVjdGl2ZShcInR5cGVhaGVhZFBvcHVwXCIsZnVuY3Rpb24oKXtyZXR1cm57cmVzdHJpY3Q6XCJFQVwiLHNjb3BlOnttYXRjaGVzOlwiPVwiLHF1ZXJ5OlwiPVwiLGFjdGl2ZTpcIj1cIixwb3NpdGlvbjpcIj1cIixzZWxlY3Q6XCImXCJ9LHJlcGxhY2U6ITAsdGVtcGxhdGVVcmw6XCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLXBvcHVwLmh0bWxcIixsaW5rOmZ1bmN0aW9uKGEsYixjKXthLnRlbXBsYXRlVXJsPWMudGVtcGxhdGVVcmwsYS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXRjaGVzLmxlbmd0aD4wfSxhLmlzQWN0aXZlPWZ1bmN0aW9uKGIpe3JldHVybiBhLmFjdGl2ZT09Yn0sYS5zZWxlY3RBY3RpdmU9ZnVuY3Rpb24oYil7YS5hY3RpdmU9Yn0sYS5zZWxlY3RNYXRjaD1mdW5jdGlvbihiKXthLnNlbGVjdCh7YWN0aXZlSWR4OmJ9KX19fX0pLmRpcmVjdGl2ZShcInR5cGVhaGVhZE1hdGNoXCIsW1wiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkY29tcGlsZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixzY29wZTp7aW5kZXg6XCI9XCIsbWF0Y2g6XCI9XCIscXVlcnk6XCI9XCJ9LGxpbms6ZnVuY3Rpb24oZSxmLGcpe3ZhciBoPWQoZy50ZW1wbGF0ZVVybCkoZS4kcGFyZW50KXx8XCJ0ZW1wbGF0ZS90eXBlYWhlYWQvdHlwZWFoZWFkLW1hdGNoLmh0bWxcIjthLmdldChoLHtjYWNoZTpifSkuc3VjY2VzcyhmdW5jdGlvbihhKXtmLnJlcGxhY2VXaXRoKGMoYS50cmltKCkpKGUpKX0pfX19XSkuZmlsdGVyKFwidHlwZWFoZWFkSGlnaGxpZ2h0XCIsZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3JldHVybiBhLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLFwiXFxcXCQxXCIpfXJldHVybiBmdW5jdGlvbihiLGMpe3JldHVybiBjPyhcIlwiK2IpLnJlcGxhY2UobmV3IFJlZ0V4cChhKGMpLFwiZ2lcIiksXCI8c3Ryb25nPiQmPC9zdHJvbmc+XCIpOmJ9fSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmh0bWxcIiwnPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XFxuICAgIDxoNCBjbGFzcz1cInBhbmVsLXRpdGxlXCI+XFxuICAgICAgPGEgY2xhc3M9XCJhY2NvcmRpb24tdG9nZ2xlXCIgbmctY2xpY2s9XCJ0b2dnbGVPcGVuKClcIiBhY2NvcmRpb24tdHJhbnNjbHVkZT1cImhlYWRpbmdcIj48c3BhbiBuZy1jbGFzcz1cIntcXCd0ZXh0LW11dGVkXFwnOiBpc0Rpc2FibGVkfVwiPnt7aGVhZGluZ319PC9zcGFuPjwvYT5cXG4gICAgPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWNvbGxhcHNlXCIgY29sbGFwc2U9XCIhaXNPcGVuXCI+XFxuXHQgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvYWNjb3JkaW9uL2FjY29yZGlvbi5odG1sXCIsJzxkaXYgY2xhc3M9XCJwYW5lbC1ncm91cFwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9hbGVydC9hbGVydC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvYWxlcnQvYWxlcnQuaHRtbFwiLCc8ZGl2IGNsYXNzPVwiYWxlcnRcIiBuZy1jbGFzcz1cIltcXCdhbGVydC1cXCcgKyAodHlwZSB8fCBcXCd3YXJuaW5nXFwnKSwgY2xvc2VhYmxlID8gXFwnYWxlcnQtZGlzbWlzc2FibGVcXCcgOiBudWxsXVwiIHJvbGU9XCJhbGVydFwiPlxcbiAgICA8YnV0dG9uIG5nLXNob3c9XCJjbG9zZWFibGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIG5nLWNsaWNrPVwiY2xvc2UoKVwiPlxcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkNsb3NlPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGRpdiBuZy10cmFuc2NsdWRlPjwvZGl2PlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvY2Fyb3VzZWwvY2Fyb3VzZWwuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWxcIiwnPGRpdiBuZy1tb3VzZWVudGVyPVwicGF1c2UoKVwiIG5nLW1vdXNlbGVhdmU9XCJwbGF5KClcIiBjbGFzcz1cImNhcm91c2VsXCIgbmctc3dpcGUtcmlnaHQ9XCJwcmV2KClcIiBuZy1zd2lwZS1sZWZ0PVwibmV4dCgpXCI+XFxuICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIiBuZy1zaG93PVwic2xpZGVzLmxlbmd0aCA+IDFcIj5cXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XCJzbGlkZSBpbiBzbGlkZXMgdHJhY2sgYnkgJGluZGV4XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpc0FjdGl2ZShzbGlkZSl9XCIgbmctY2xpY2s9XCJzZWxlY3Qoc2xpZGUpXCI+PC9saT5cXG4gICAgPC9vbD5cXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG4gICAgPGEgY2xhc3M9XCJsZWZ0IGNhcm91c2VsLWNvbnRyb2xcIiBuZy1jbGljaz1cInByZXYoKVwiIG5nLXNob3c9XCJzbGlkZXMubGVuZ3RoID4gMVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIj48L3NwYW4+PC9hPlxcbiAgICA8YSBjbGFzcz1cInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiBuZy1jbGljaz1cIm5leHQoKVwiIG5nLXNob3c9XCJzbGlkZXMubGVuZ3RoID4gMVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPjwvYT5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2Nhcm91c2VsL3NsaWRlLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9jYXJvdXNlbC9zbGlkZS5odG1sXCIsXCI8ZGl2IG5nLWNsYXNzPVxcXCJ7XFxuICAgICdhY3RpdmUnOiBsZWF2aW5nIHx8IChhY3RpdmUgJiYgIWVudGVyaW5nKSxcXG4gICAgJ3ByZXYnOiAobmV4dCB8fCBhY3RpdmUpICYmIGRpcmVjdGlvbj09J3ByZXYnLFxcbiAgICAnbmV4dCc6IChuZXh0IHx8IGFjdGl2ZSkgJiYgZGlyZWN0aW9uPT0nbmV4dCcsXFxuICAgICdyaWdodCc6IGRpcmVjdGlvbj09J3ByZXYnLFxcbiAgICAnbGVmdCc6IGRpcmVjdGlvbj09J25leHQnXFxuICB9XFxcIiBjbGFzcz1cXFwiaXRlbSB0ZXh0LWNlbnRlclxcXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cXG5cIil9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RhdGVwaWNrZXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5odG1sXCIsJzxkaXYgbmctc3dpdGNoPVwiZGF0ZXBpY2tlck1vZGVcIiByb2xlPVwiYXBwbGljYXRpb25cIiBuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCI+XFxuICA8ZGF5cGlja2VyIG5nLXN3aXRjaC13aGVuPVwiZGF5XCIgdGFiaW5kZXg9XCIwXCI+PC9kYXlwaWNrZXI+XFxuICA8bW9udGhwaWNrZXIgbmctc3dpdGNoLXdoZW49XCJtb250aFwiIHRhYmluZGV4PVwiMFwiPjwvbW9udGhwaWNrZXI+XFxuICA8eWVhcnBpY2tlciBuZy1zd2l0Y2gtd2hlbj1cInllYXJcIiB0YWJpbmRleD1cIjBcIj48L3llYXJwaWNrZXI+XFxuPC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL2RheS5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvZGF0ZXBpY2tlci9kYXkuaHRtbFwiLCc8dGFibGUgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJ7e2FjdGl2ZURhdGVJZH19XCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFwiIG5nLWNsaWNrPVwibW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aCBjb2xzcGFuPVwie3s1ICsgc2hvd1dlZWtzfX1cIj48YnV0dG9uIGlkPVwie3t1bmlxdWVJZH19LXRpdGxlXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgbmctY2xpY2s9XCJ0b2dnbGVNb2RlKClcIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcIiBuZy1jbGljaz1cIm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgPC90cj5cXG4gICAgPHRyPlxcbiAgICAgIDx0aCBuZy1zaG93PVwic2hvd1dlZWtzXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvdGg+XFxuICAgICAgPHRoIG5nLXJlcGVhdD1cImxhYmVsIGluIGxhYmVscyB0cmFjayBieSAkaW5kZXhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+PHNtYWxsIGFyaWEtbGFiZWw9XCJ7e2xhYmVsLmZ1bGx9fVwiPnt7bGFiZWwuYWJicn19PC9zbWFsbD48L3RoPlxcbiAgICA8L3RyPlxcbiAgPC90aGVhZD5cXG4gIDx0Ym9keT5cXG4gICAgPHRyIG5nLXJlcGVhdD1cInJvdyBpbiByb3dzIHRyYWNrIGJ5ICRpbmRleFwiPlxcbiAgICAgIDx0ZCBuZy1zaG93PVwic2hvd1dlZWtzXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBoNlwiPjxlbT57eyB3ZWVrTnVtYmVyc1skaW5kZXhdIH19PC9lbT48L3RkPlxcbiAgICAgIDx0ZCBuZy1yZXBlYXQ9XCJkdCBpbiByb3cgdHJhY2sgYnkgZHQuZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBpZD1cInt7ZHQudWlkfX1cIiBhcmlhLWRpc2FibGVkPVwie3shIWR0LmRpc2FibGVkfX1cIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiBuZy1jbGFzcz1cIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVwiIG5nLWNsaWNrPVwic2VsZWN0KGR0LmRhdGUpXCIgbmctZGlzYWJsZWQ9XCJkdC5kaXNhYmxlZFwiIHRhYmluZGV4PVwiLTFcIj48c3BhbiBuZy1jbGFzcz1cIntcXCd0ZXh0LW11dGVkXFwnOiBkdC5zZWNvbmRhcnksIFxcJ3RleHQtaW5mb1xcJzogZHQuY3VycmVudH1cIj57e2R0LmxhYmVsfX08L3NwYW4+PC9idXR0b24+XFxuICAgICAgPC90ZD5cXG4gICAgPC90cj5cXG4gIDwvdGJvZHk+XFxuPC90YWJsZT5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIvbW9udGguaHRtbFwiLCc8dGFibGUgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ7e3VuaXF1ZUlkfX0tdGl0bGVcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XCJ7e2FjdGl2ZURhdGVJZH19XCI+XFxuICA8dGhlYWQ+XFxuICAgIDx0cj5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdFwiIG5nLWNsaWNrPVwibW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj48L3RoPlxcbiAgICAgIDx0aD48YnV0dG9uIGlkPVwie3t1bmlxdWVJZH19LXRpdGxlXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgbmctY2xpY2s9XCJ0b2dnbGVNb2RlKClcIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxzdHJvbmc+e3t0aXRsZX19PC9zdHJvbmc+PC9idXR0b24+PC90aD5cXG4gICAgICA8dGg+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHRcIiBuZy1jbGljaz1cIm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+PC90aD5cXG4gICAgPC90cj5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XCJyb3cgaW4gcm93cyB0cmFjayBieSAkaW5kZXhcIj5cXG4gICAgICA8dGQgbmctcmVwZWF0PVwiZHQgaW4gcm93IHRyYWNrIGJ5IGR0LmRhdGVcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgaWQ9XCJ7e2R0LnVpZH19XCIgYXJpYS1kaXNhYmxlZD1cInt7ISFkdC5kaXNhYmxlZH19XCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIndpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBuZy1jbGFzcz1cIntcXCdidG4taW5mb1xcJzogZHQuc2VsZWN0ZWQsIGFjdGl2ZTogaXNBY3RpdmUoZHQpfVwiIG5nLWNsaWNrPVwic2VsZWN0KGR0LmRhdGUpXCIgbmctZGlzYWJsZWQ9XCJkdC5kaXNhYmxlZFwiIHRhYmluZGV4PVwiLTFcIj48c3BhbiBuZy1jbGFzcz1cIntcXCd0ZXh0LWluZm9cXCc6IGR0LmN1cnJlbnR9XCI+e3tkdC5sYWJlbH19PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3BvcHVwLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3BvcHVwLmh0bWxcIiwnPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIG5nLXN0eWxlPVwie2Rpc3BsYXk6IChpc09wZW4gJiYgXFwnYmxvY2tcXCcpIHx8IFxcJ25vbmVcXCcsIHRvcDogcG9zaXRpb24udG9wK1xcJ3B4XFwnLCBsZWZ0OiBwb3NpdGlvbi5sZWZ0K1xcJ3B4XFwnfVwiIG5nLWtleWRvd249XCJrZXlkb3duKCRldmVudClcIj5cXG5cdDxsaSBuZy10cmFuc2NsdWRlPjwvbGk+XFxuXHQ8bGkgbmctaWY9XCJzaG93QnV0dG9uQmFyXCIgc3R5bGU9XCJwYWRkaW5nOjEwcHggOXB4IDJweFwiPlxcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bi1ncm91cFwiPlxcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIG5nLWNsaWNrPVwic2VsZWN0KFxcJ3RvZGF5XFwnKVwiPnt7IGdldFRleHQoXFwnY3VycmVudFxcJykgfX08L2J1dHRvbj5cXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIG5nLWNsaWNrPVwic2VsZWN0KG51bGwpXCI+e3sgZ2V0VGV4dChcXCdjbGVhclxcJykgfX08L2J1dHRvbj5cXG5cdFx0PC9zcGFuPlxcblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3MgcHVsbC1yaWdodFwiIG5nLWNsaWNrPVwiY2xvc2UoKVwiPnt7IGdldFRleHQoXFwnY2xvc2VcXCcpIH19PC9idXR0b24+XFxuXHQ8L2xpPlxcbjwvdWw+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9kYXRlcGlja2VyL3llYXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL2RhdGVwaWNrZXIveWVhci5odG1sXCIsJzx0YWJsZSByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWxsZWRieT1cInt7dW5pcXVlSWR9fS10aXRsZVwiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cInt7YWN0aXZlRGF0ZUlkfX1cIj5cXG4gIDx0aGVhZD5cXG4gICAgPHRyPlxcbiAgICAgIDx0aD48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0XCIgbmctY2xpY2s9XCJtb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoIGNvbHNwYW49XCIzXCI+PGJ1dHRvbiBpZD1cInt7dW5pcXVlSWR9fS10aXRsZVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIG5nLWNsaWNrPVwidG9nZ2xlTW9kZSgpXCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48c3Ryb25nPnt7dGl0bGV9fTwvc3Ryb25nPjwvYnV0dG9uPjwvdGg+XFxuICAgICAgPHRoPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0XCIgbmctY2xpY2s9XCJtb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPjwvdGg+XFxuICAgIDwvdHI+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVwicm93IGluIHJvd3MgdHJhY2sgYnkgJGluZGV4XCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cImR0IGluIHJvdyB0cmFjayBieSBkdC5kYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIGlkPVwie3tkdC51aWR9fVwiIGFyaWEtZGlzYWJsZWQ9XCJ7eyEhZHQuZGlzYWJsZWR9fVwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgbmctY2xhc3M9XCJ7XFwnYnRuLWluZm9cXCc6IGR0LnNlbGVjdGVkLCBhY3RpdmU6IGlzQWN0aXZlKGR0KX1cIiBuZy1jbGljaz1cInNlbGVjdChkdC5kYXRlKVwiIG5nLWRpc2FibGVkPVwiZHQuZGlzYWJsZWRcIiB0YWJpbmRleD1cIi0xXCI+PHNwYW4gbmctY2xhc3M9XCJ7XFwndGV4dC1pbmZvXFwnOiBkdC5jdXJyZW50fVwiPnt7ZHQubGFiZWx9fTwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbiAgPC90Ym9keT5cXG48L3RhYmxlPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvbW9kYWwvYmFja2Ryb3AuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL21vZGFsL2JhY2tkcm9wLmh0bWxcIiwnPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wIGZhZGUge3sgYmFja2Ryb3BDbGFzcyB9fVwiXFxuICAgICBuZy1jbGFzcz1cIntpbjogYW5pbWF0ZX1cIlxcbiAgICAgbmctc3R5bGU9XCJ7XFwnei1pbmRleFxcJzogMTA0MCArIChpbmRleCAmJiAxIHx8IDApICsgaW5kZXgqMTB9XCJcXG4+PC9kaXY+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9tb2RhbC93aW5kb3cuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL21vZGFsL3dpbmRvdy5odG1sXCIsJzxkaXYgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBuZy1jbGFzcz1cIntpbjogYW5pbWF0ZX1cIiBuZy1zdHlsZT1cIntcXCd6LWluZGV4XFwnOiAxMDUwICsgaW5kZXgqMTAsIGRpc3BsYXk6IFxcJ2Jsb2NrXFwnfVwiIG5nLWNsaWNrPVwiY2xvc2UoJGV2ZW50KVwiPlxcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgbmctY2xhc3M9XCJ7XFwnbW9kYWwtc21cXCc6IHNpemUgPT0gXFwnc21cXCcsIFxcJ21vZGFsLWxnXFwnOiBzaXplID09IFxcJ2xnXFwnfVwiPjxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgbW9kYWwtdHJhbnNjbHVkZT48L2Rpdj48L2Rpdj5cXG48L2Rpdj4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnZXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnZXIuaHRtbFwiLCc8dWwgY2xhc3M9XCJwYWdlclwiPlxcbiAgPGxpIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCksIHByZXZpb3VzOiBhbGlnbn1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZShwYWdlIC0gMSlcIj57e2dldFRleHQoXFwncHJldmlvdXNcXCcpfX08L2E+PC9saT5cXG4gIDxsaSBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9OZXh0KCksIG5leHQ6IGFsaWdufVwiPjxhIGhyZWYgbmctY2xpY2s9XCJzZWxlY3RQYWdlKHBhZ2UgKyAxKVwiPnt7Z2V0VGV4dChcXCduZXh0XFwnKX19PC9hPjwvbGk+XFxuPC91bD4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmh0bWxcIiwnPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxcbiAgPGxpIG5nLWlmPVwiYm91bmRhcnlMaW5rc1wiIG5nLWNsYXNzPVwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCl9XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UoMSlcIj57e2dldFRleHQoXFwnZmlyc3RcXCcpfX08L2E+PC9saT5cXG4gIDxsaSBuZy1pZj1cImRpcmVjdGlvbkxpbmtzXCIgbmctY2xhc3M9XCJ7ZGlzYWJsZWQ6IG5vUHJldmlvdXMoKX1cIj48YSBocmVmIG5nLWNsaWNrPVwic2VsZWN0UGFnZShwYWdlIC0gMSlcIj57e2dldFRleHQoXFwncHJldmlvdXNcXCcpfX08L2E+PC9saT5cXG4gIDxsaSBuZy1yZXBlYXQ9XCJwYWdlIGluIHBhZ2VzIHRyYWNrIGJ5ICRpbmRleFwiIG5nLWNsYXNzPVwie2FjdGl2ZTogcGFnZS5hY3RpdmV9XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UocGFnZS5udW1iZXIpXCI+e3twYWdlLnRleHR9fTwvYT48L2xpPlxcbiAgPGxpIG5nLWlmPVwiZGlyZWN0aW9uTGlua3NcIiBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9OZXh0KCl9XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UocGFnZSArIDEpXCI+e3tnZXRUZXh0KFxcJ25leHRcXCcpfX08L2E+PC9saT5cXG4gIDxsaSBuZy1pZj1cImJvdW5kYXJ5TGlua3NcIiBuZy1jbGFzcz1cIntkaXNhYmxlZDogbm9OZXh0KCl9XCI+PGEgaHJlZiBuZy1jbGljaz1cInNlbGVjdFBhZ2UodG90YWxQYWdlcylcIj57e2dldFRleHQoXFwnbGFzdFxcJyl9fTwvYT48L2xpPlxcbjwvdWw+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtaHRtbC11bnNhZmUtcG9wdXAuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3Rvb2x0aXAvdG9vbHRpcC1odG1sLXVuc2FmZS1wb3B1cC5odG1sXCIsJzxkaXYgY2xhc3M9XCJ0b29sdGlwIHt7cGxhY2VtZW50fX1cIiBuZy1jbGFzcz1cInsgaW46IGlzT3BlbigpLCBmYWRlOiBhbmltYXRpb24oKSB9XCI+XFxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIiBiaW5kLWh0bWwtdW5zYWZlPVwiY29udGVudFwiPjwvZGl2PlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdG9vbHRpcC90b29sdGlwLXBvcHVwLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90b29sdGlwL3Rvb2x0aXAtcG9wdXAuaHRtbFwiLCc8ZGl2IGNsYXNzPVwidG9vbHRpcCB7e3BsYWNlbWVudH19XCIgbmctY2xhc3M9XCJ7IGluOiBpc09wZW4oKSwgZmFkZTogYW5pbWF0aW9uKCkgfVwiPlxcbiAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCIgbmctYmluZD1cImNvbnRlbnRcIj48L2Rpdj5cXG48L2Rpdj5cXG4nKX1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3BvcG92ZXIvcG9wb3Zlci5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcG9wb3Zlci9wb3BvdmVyLmh0bWxcIiwnPGRpdiBjbGFzcz1cInBvcG92ZXIge3twbGFjZW1lbnR9fVwiIG5nLWNsYXNzPVwieyBpbjogaXNPcGVuKCksIGZhZGU6IGFuaW1hdGlvbigpIH1cIj5cXG4gIDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cInBvcG92ZXItaW5uZXJcIj5cXG4gICAgICA8aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCIgbmctYmluZD1cInRpdGxlXCIgbmctc2hvdz1cInRpdGxlXCI+PC9oMz5cXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCIgbmctYmluZD1cImNvbnRlbnRcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvYmFyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9iYXIuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgbmctY2xhc3M9XCJ0eXBlICYmIFxcJ3Byb2dyZXNzLWJhci1cXCcgKyB0eXBlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cInt7dmFsdWV9fVwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cInt7bWF4fX1cIiBuZy1zdHlsZT1cInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XCIgYXJpYS12YWx1ZXRleHQ9XCJ7e3BlcmNlbnQgfCBudW1iZXI6MH19JVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9wcm9ncmVzc2Jhci9wcm9ncmVzcy5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3MuaHRtbFwiLCc8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBuZy10cmFuc2NsdWRlPjwvZGl2PicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWxcIiwnPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XFxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgbmctY2xhc3M9XCJ0eXBlICYmIFxcJ3Byb2dyZXNzLWJhci1cXCcgKyB0eXBlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cInt7dmFsdWV9fVwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cInt7bWF4fX1cIiBuZy1zdHlsZT1cInt3aWR0aDogcGVyY2VudCArIFxcJyVcXCd9XCIgYXJpYS12YWx1ZXRleHQ9XCJ7e3BlcmNlbnQgfCBudW1iZXI6MH19JVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XFxuPC9kaXY+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS9yYXRpbmcvcmF0aW5nLmh0bWxcIiwnPHNwYW4gbmctbW91c2VsZWF2ZT1cInJlc2V0KClcIiBuZy1rZXlkb3duPVwib25LZXlkb3duKCRldmVudClcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwic2xpZGVyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwie3tyYW5nZS5sZW5ndGh9fVwiIGFyaWEtdmFsdWVub3c9XCJ7e3ZhbHVlfX1cIj5cXG4gICAgPGkgbmctcmVwZWF0PVwiciBpbiByYW5nZSB0cmFjayBieSAkaW5kZXhcIiBuZy1tb3VzZWVudGVyPVwiZW50ZXIoJGluZGV4ICsgMSlcIiBuZy1jbGljaz1cInJhdGUoJGluZGV4ICsgMSlcIiBjbGFzcz1cImdseXBoaWNvblwiIG5nLWNsYXNzPVwiJGluZGV4IDwgdmFsdWUgJiYgKHIuc3RhdGVPbiB8fCBcXCdnbHlwaGljb24tc3RhclxcJykgfHwgKHIuc3RhdGVPZmYgfHwgXFwnZ2x5cGhpY29uLXN0YXItZW1wdHlcXCcpXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4oe3sgJGluZGV4IDwgdmFsdWUgPyBcXCcqXFwnIDogXFwnIFxcJyB9fSk8L3NwYW4+XFxuICAgIDwvaT5cXG48L3NwYW4+Jyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90YWJzL3RhYi5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdGFicy90YWIuaHRtbFwiLCc8bGkgbmctY2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUsIGRpc2FibGVkOiBkaXNhYmxlZH1cIj5cXG4gIDxhIG5nLWNsaWNrPVwic2VsZWN0KClcIiB0YWItaGVhZGluZy10cmFuc2NsdWRlPnt7aGVhZGluZ319PC9hPlxcbjwvbGk+XFxuJyl9XSksYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZS90YWJzL3RhYnNldC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdGFicy90YWJzZXQuaHRtbFwiLCc8ZGl2PlxcbiAgPHVsIGNsYXNzPVwibmF2IG5hdi17e3R5cGUgfHwgXFwndGFic1xcJ319XCIgbmctY2xhc3M9XCJ7XFwnbmF2LXN0YWNrZWRcXCc6IHZlcnRpY2FsLCBcXCduYXYtanVzdGlmaWVkXFwnOiBqdXN0aWZpZWR9XCIgbmctdHJhbnNjbHVkZT48L3VsPlxcbiAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XFxuICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZVwiIFxcbiAgICAgICAgIG5nLXJlcGVhdD1cInRhYiBpbiB0YWJzXCIgXFxuICAgICAgICAgbmctY2xhc3M9XCJ7YWN0aXZlOiB0YWIuYWN0aXZlfVwiXFxuICAgICAgICAgdGFiLWNvbnRlbnQtdHJhbnNjbHVkZT1cInRhYlwiPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdGltZXBpY2tlci90aW1lcGlja2VyLmh0bWxcIixbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7YS5wdXQoXCJ0ZW1wbGF0ZS90aW1lcGlja2VyL3RpbWVwaWNrZXIuaHRtbFwiLCc8dGFibGU+XFxuXHQ8dGJvZHk+XFxuXHRcdDx0ciBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVwiaW5jcmVtZW50SG91cnMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tdXBcIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkPiZuYnNwOzwvdGQ+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVwiaW5jcmVtZW50TWludXRlcygpXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi11cFwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQgbmctc2hvdz1cInNob3dNZXJpZGlhblwiPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHRcdDx0cj5cXG5cdFx0XHQ8dGQgc3R5bGU9XCJ3aWR0aDo1MHB4O1wiIGNsYXNzPVwiZm9ybS1ncm91cFwiIG5nLWNsYXNzPVwie1xcJ2hhcy1lcnJvclxcJzogaW52YWxpZEhvdXJzfVwiPlxcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmctbW9kZWw9XCJob3Vyc1wiIG5nLWNoYW5nZT1cInVwZGF0ZUhvdXJzKClcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiIG5nLW1vdXNld2hlZWw9XCJpbmNyZW1lbnRIb3VycygpXCIgbmctcmVhZG9ubHk9XCJyZWFkb25seUlucHV0XCIgbWF4bGVuZ3RoPVwiMlwiPlxcblx0XHRcdDwvdGQ+XFxuXHRcdFx0PHRkPjo8L3RkPlxcblx0XHRcdDx0ZCBzdHlsZT1cIndpZHRoOjUwcHg7XCIgY2xhc3M9XCJmb3JtLWdyb3VwXCIgbmctY2xhc3M9XCJ7XFwnaGFzLWVycm9yXFwnOiBpbnZhbGlkTWludXRlc31cIj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwibWludXRlc1wiIG5nLWNoYW5nZT1cInVwZGF0ZU1pbnV0ZXMoKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgbmctcmVhZG9ubHk9XCJyZWFkb25seUlucHV0XCIgbWF4bGVuZ3RoPVwiMlwiPlxcblx0XHRcdDwvdGQ+XFxuXHRcdFx0PHRkIG5nLXNob3c9XCJzaG93TWVyaWRpYW5cIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCB0ZXh0LWNlbnRlclwiIG5nLWNsaWNrPVwidG9nZ2xlTWVyaWRpYW4oKVwiPnt7bWVyaWRpYW59fTwvYnV0dG9uPjwvdGQ+XFxuXHRcdDwvdHI+XFxuXHRcdDx0ciBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuXHRcdFx0PHRkPjxhIG5nLWNsaWNrPVwiZGVjcmVtZW50SG91cnMoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93blwiPjwvc3Bhbj48L2E+PC90ZD5cXG5cdFx0XHQ8dGQ+Jm5ic3A7PC90ZD5cXG5cdFx0XHQ8dGQ+PGEgbmctY2xpY2s9XCJkZWNyZW1lbnRNaW51dGVzKClcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIj48L3NwYW4+PC9hPjwvdGQ+XFxuXHRcdFx0PHRkIG5nLXNob3c9XCJzaG93TWVyaWRpYW5cIj48L3RkPlxcblx0XHQ8L3RyPlxcblx0PC90Ym9keT5cXG48L3RhYmxlPlxcbicpfV0pLGFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sXCIsW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLGZ1bmN0aW9uKGEpe2EucHV0KFwidGVtcGxhdGUvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5odG1sXCIsJzxhIHRhYmluZGV4PVwiLTFcIiBiaW5kLWh0bWwtdW5zYWZlPVwibWF0Y2gubGFiZWwgfCB0eXBlYWhlYWRIaWdobGlnaHQ6cXVlcnlcIj48L2E+Jylcbn1dKSxhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiLFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXthLnB1dChcInRlbXBsYXRlL3R5cGVhaGVhZC90eXBlYWhlYWQtcG9wdXAuaHRtbFwiLCc8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgbmctc2hvdz1cImlzT3BlbigpXCIgbmctc3R5bGU9XCJ7dG9wOiBwb3NpdGlvbi50b3ArXFwncHhcXCcsIGxlZnQ6IHBvc2l0aW9uLmxlZnQrXFwncHhcXCd9XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIiByb2xlPVwibGlzdGJveFwiIGFyaWEtaGlkZGVuPVwie3shaXNPcGVuKCl9fVwiPlxcbiAgICA8bGkgbmctcmVwZWF0PVwibWF0Y2ggaW4gbWF0Y2hlcyB0cmFjayBieSAkaW5kZXhcIiBuZy1jbGFzcz1cInthY3RpdmU6IGlzQWN0aXZlKCRpbmRleCkgfVwiIG5nLW1vdXNlZW50ZXI9XCJzZWxlY3RBY3RpdmUoJGluZGV4KVwiIG5nLWNsaWNrPVwic2VsZWN0TWF0Y2goJGluZGV4KVwiIHJvbGU9XCJvcHRpb25cIiBpZD1cInt7bWF0Y2guaWR9fVwiPlxcbiAgICAgICAgPGRpdiB0eXBlYWhlYWQtbWF0Y2ggaW5kZXg9XCIkaW5kZXhcIiBtYXRjaD1cIm1hdGNoXCIgcXVlcnk9XCJxdWVyeVwiIHRlbXBsYXRlLXVybD1cInRlbXBsYXRlVXJsXCI+PC9kaXY+XFxuICAgIDwvbGk+XFxuPC91bD5cXG4nKX1dKTsiLCIvKipcbiAqIFN0YXRlLWJhc2VkIHJvdXRpbmcgZm9yIEFuZ3VsYXJKU1xuICogQHZlcnNpb24gdjAuMi4xM1xuICogQGxpbmsgaHR0cDovL2FuZ3VsYXItdWkuZ2l0aHViLmNvbS9cbiAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlLCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyYmbW9kdWxlLmV4cG9ydHM9PT1leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9XCJ1aS5yb3V0ZXJcIiksZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSxiKXtyZXR1cm4gTShuZXcoTShmdW5jdGlvbigpe30se3Byb3RvdHlwZTphfSkpLGIpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuIEwoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2IhPT1hJiZMKGIsZnVuY3Rpb24oYixjKXthLmhhc093blByb3BlcnR5KGMpfHwoYVtjXT1iKX0pfSksYX1mdW5jdGlvbiBmKGEsYil7dmFyIGM9W107Zm9yKHZhciBkIGluIGEucGF0aCl7aWYoYS5wYXRoW2RdIT09Yi5wYXRoW2RdKWJyZWFrO2MucHVzaChhLnBhdGhbZF0pfXJldHVybiBjfWZ1bmN0aW9uIGcoYSl7aWYoT2JqZWN0LmtleXMpcmV0dXJuIE9iamVjdC5rZXlzKGEpO3ZhciBjPVtdO3JldHVybiBiLmZvckVhY2goYSxmdW5jdGlvbihhLGIpe2MucHVzaChiKX0pLGN9ZnVuY3Rpb24gaChhLGIpe2lmKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKXJldHVybiBhLmluZGV4T2YoYixOdW1iZXIoYXJndW1lbnRzWzJdKXx8MCk7dmFyIGM9YS5sZW5ndGg+Pj4wLGQ9TnVtYmVyKGFyZ3VtZW50c1syXSl8fDA7Zm9yKGQ9MD5kP01hdGguY2VpbChkKTpNYXRoLmZsb29yKGQpLDA+ZCYmKGQrPWMpO2M+ZDtkKyspaWYoZCBpbiBhJiZhW2RdPT09YilyZXR1cm4gZDtyZXR1cm4tMX1mdW5jdGlvbiBpKGEsYixjLGQpe3ZhciBlLGk9ZihjLGQpLGo9e30saz1bXTtmb3IodmFyIGwgaW4gaSlpZihpW2xdLnBhcmFtcyYmKGU9ZyhpW2xdLnBhcmFtcyksZS5sZW5ndGgpKWZvcih2YXIgbSBpbiBlKWgoayxlW21dKT49MHx8KGsucHVzaChlW21dKSxqW2VbbV1dPWFbZVttXV0pO3JldHVybiBNKHt9LGosYil9ZnVuY3Rpb24gaihhLGIsYyl7aWYoIWMpe2M9W107Zm9yKHZhciBkIGluIGEpYy5wdXNoKGQpfWZvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKXt2YXIgZj1jW2VdO2lmKGFbZl0hPWJbZl0pcmV0dXJuITF9cmV0dXJuITB9ZnVuY3Rpb24gayhhLGIpe3ZhciBjPXt9O3JldHVybiBMKGEsZnVuY3Rpb24oYSl7Y1thXT1iW2FdfSksY31mdW5jdGlvbiBsKGEpe3ZhciBiPXt9LGM9QXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShBcnJheS5wcm90b3R5cGUsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTtmb3IodmFyIGQgaW4gYSktMT09aChjLGQpJiYoYltkXT1hW2RdKTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYil7dmFyIGM9SyhhKSxkPWM/W106e307cmV0dXJuIEwoYSxmdW5jdGlvbihhLGUpe2IoYSxlKSYmKGRbYz9kLmxlbmd0aDplXT1hKX0pLGR9ZnVuY3Rpb24gbihhLGIpe3ZhciBjPUsoYSk/W106e307cmV0dXJuIEwoYSxmdW5jdGlvbihhLGQpe2NbZF09YihhLGQpfSksY31mdW5jdGlvbiBvKGEsYil7dmFyIGQ9MSxmPTIsaT17fSxqPVtdLGs9aSxtPU0oYS53aGVuKGkpLHskJHByb21pc2VzOmksJCR2YWx1ZXM6aX0pO3RoaXMuc3R1ZHk9ZnVuY3Rpb24oaSl7ZnVuY3Rpb24gbihhLGMpe2lmKHNbY10hPT1mKXtpZihyLnB1c2goYyksc1tjXT09PWQpdGhyb3cgci5zcGxpY2UoMCxoKHIsYykpLG5ldyBFcnJvcihcIkN5Y2xpYyBkZXBlbmRlbmN5OiBcIityLmpvaW4oXCIgLT4gXCIpKTtpZihzW2NdPWQsSShhKSlxLnB1c2goYyxbZnVuY3Rpb24oKXtyZXR1cm4gYi5nZXQoYSl9XSxqKTtlbHNle3ZhciBlPWIuYW5ub3RhdGUoYSk7TChlLGZ1bmN0aW9uKGEpe2EhPT1jJiZpLmhhc093blByb3BlcnR5KGEpJiZuKGlbYV0sYSl9KSxxLnB1c2goYyxhLGUpfXIucG9wKCksc1tjXT1mfX1mdW5jdGlvbiBvKGEpe3JldHVybiBKKGEpJiZhLnRoZW4mJmEuJCRwcm9taXNlc31pZighSihpKSl0aHJvdyBuZXcgRXJyb3IoXCInaW52b2NhYmxlcycgbXVzdCBiZSBhbiBvYmplY3RcIik7dmFyIHA9ZyhpfHx7fSkscT1bXSxyPVtdLHM9e307cmV0dXJuIEwoaSxuKSxpPXI9cz1udWxsLGZ1bmN0aW9uKGQsZixnKXtmdW5jdGlvbiBoKCl7LS11fHwodnx8ZSh0LGYuJCR2YWx1ZXMpLHIuJCR2YWx1ZXM9dCxyLiQkcHJvbWlzZXM9ci4kJHByb21pc2VzfHwhMCxkZWxldGUgci4kJGluaGVyaXRlZFZhbHVlcyxuLnJlc29sdmUodCkpfWZ1bmN0aW9uIGkoYSl7ci4kJGZhaWx1cmU9YSxuLnJlamVjdChhKX1mdW5jdGlvbiBqKGMsZSxmKXtmdW5jdGlvbiBqKGEpe2wucmVqZWN0KGEpLGkoYSl9ZnVuY3Rpb24gaygpe2lmKCFHKHIuJCRmYWlsdXJlKSl0cnl7bC5yZXNvbHZlKGIuaW52b2tlKGUsZyx0KSksbC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oYSl7dFtjXT1hLGgoKX0sail9Y2F0Y2goYSl7aihhKX19dmFyIGw9YS5kZWZlcigpLG09MDtMKGYsZnVuY3Rpb24oYSl7cy5oYXNPd25Qcm9wZXJ0eShhKSYmIWQuaGFzT3duUHJvcGVydHkoYSkmJihtKyssc1thXS50aGVuKGZ1bmN0aW9uKGIpe3RbYV09YiwtLW18fGsoKX0saikpfSksbXx8aygpLHNbY109bC5wcm9taXNlfWlmKG8oZCkmJmc9PT1jJiYoZz1mLGY9ZCxkPW51bGwpLGQpe2lmKCFKKGQpKXRocm93IG5ldyBFcnJvcihcIidsb2NhbHMnIG11c3QgYmUgYW4gb2JqZWN0XCIpfWVsc2UgZD1rO2lmKGYpe2lmKCFvKGYpKXRocm93IG5ldyBFcnJvcihcIidwYXJlbnQnIG11c3QgYmUgYSBwcm9taXNlIHJldHVybmVkIGJ5ICRyZXNvbHZlLnJlc29sdmUoKVwiKX1lbHNlIGY9bTt2YXIgbj1hLmRlZmVyKCkscj1uLnByb21pc2Uscz1yLiQkcHJvbWlzZXM9e30sdD1NKHt9LGQpLHU9MStxLmxlbmd0aC8zLHY9ITE7aWYoRyhmLiQkZmFpbHVyZSkpcmV0dXJuIGkoZi4kJGZhaWx1cmUpLHI7Zi4kJGluaGVyaXRlZFZhbHVlcyYmZSh0LGwoZi4kJGluaGVyaXRlZFZhbHVlcyxwKSksTShzLGYuJCRwcm9taXNlcyksZi4kJHZhbHVlcz8odj1lKHQsbChmLiQkdmFsdWVzLHApKSxyLiQkaW5oZXJpdGVkVmFsdWVzPWwoZi4kJHZhbHVlcyxwKSxoKCkpOihmLiQkaW5oZXJpdGVkVmFsdWVzJiYoci4kJGluaGVyaXRlZFZhbHVlcz1sKGYuJCRpbmhlcml0ZWRWYWx1ZXMscCkpLGYudGhlbihoLGkpKTtmb3IodmFyIHc9MCx4PXEubGVuZ3RoO3g+dzt3Kz0zKWQuaGFzT3duUHJvcGVydHkocVt3XSk/aCgpOmoocVt3XSxxW3crMV0scVt3KzJdKTtyZXR1cm4gcn19LHRoaXMucmVzb2x2ZT1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5zdHVkeShhKShiLGMsZCl9fWZ1bmN0aW9uIHAoYSxiLGMpe3RoaXMuZnJvbUNvbmZpZz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIEcoYS50ZW1wbGF0ZSk/dGhpcy5mcm9tU3RyaW5nKGEudGVtcGxhdGUsYik6RyhhLnRlbXBsYXRlVXJsKT90aGlzLmZyb21VcmwoYS50ZW1wbGF0ZVVybCxiKTpHKGEudGVtcGxhdGVQcm92aWRlcik/dGhpcy5mcm9tUHJvdmlkZXIoYS50ZW1wbGF0ZVByb3ZpZGVyLGIsYyk6bnVsbH0sdGhpcy5mcm9tU3RyaW5nPWZ1bmN0aW9uKGEsYil7cmV0dXJuIEgoYSk/YShiKTphfSx0aGlzLmZyb21Vcmw9ZnVuY3Rpb24oYyxkKXtyZXR1cm4gSChjKSYmKGM9YyhkKSksbnVsbD09Yz9udWxsOmEuZ2V0KGMse2NhY2hlOmIsaGVhZGVyczp7QWNjZXB0OlwidGV4dC9odG1sXCJ9fSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5kYXRhfSl9LHRoaXMuZnJvbVByb3ZpZGVyPWZ1bmN0aW9uKGEsYixkKXtyZXR1cm4gYy5pbnZva2UoYSxudWxsLGR8fHtwYXJhbXM6Yn0pfX1mdW5jdGlvbiBxKGEsYixlKXtmdW5jdGlvbiBmKGIsYyxkLGUpe2lmKHEucHVzaChiKSxvW2JdKXJldHVybiBvW2JdO2lmKCEvXlxcdysoLStcXHcrKSooPzpcXFtcXF0pPyQvLnRlc3QoYikpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXIgbmFtZSAnXCIrYitcIicgaW4gcGF0dGVybiAnXCIrYStcIidcIik7aWYocFtiXSl0aHJvdyBuZXcgRXJyb3IoXCJEdXBsaWNhdGUgcGFyYW1ldGVyIG5hbWUgJ1wiK2IrXCInIGluIHBhdHRlcm4gJ1wiK2ErXCInXCIpO3JldHVybiBwW2JdPW5ldyBPLlBhcmFtKGIsYyxkLGUpLHBbYl19ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGQ9W1wiXCIsXCJcIl0sZT1hLnJlcGxhY2UoL1tcXFxcXFxbXFxdXFxeJCorPy4oKXx7fV0vZyxcIlxcXFwkJlwiKTtpZighYilyZXR1cm4gZTtzd2l0Y2goYyl7Y2FzZSExOmQ9W1wiKFwiLFwiKVwiXTticmVhaztjYXNlITA6ZD1bXCI/KFwiLFwiKT9cIl07YnJlYWs7ZGVmYXVsdDpkPVtcIihcIitjK1wifFwiLFwiKT9cIl19cmV0dXJuIGUrZFswXStiK2RbMV19ZnVuY3Rpb24gaChjLGUpe3ZhciBmLGcsaCxpLGo7cmV0dXJuIGY9Y1syXXx8Y1szXSxqPWIucGFyYW1zW2ZdLGg9YS5zdWJzdHJpbmcobSxjLmluZGV4KSxnPWU/Y1s0XTpjWzRdfHwoXCIqXCI9PWNbMV0/XCIuKlwiOm51bGwpLGk9Ty50eXBlKGd8fFwic3RyaW5nXCIpfHxkKE8udHlwZShcInN0cmluZ1wiKSx7cGF0dGVybjpuZXcgUmVnRXhwKGcpfSkse2lkOmYscmVnZXhwOmcsc2VnbWVudDpoLHR5cGU6aSxjZmc6an19Yj1NKHtwYXJhbXM6e319LEooYik/Yjp7fSk7dmFyIGksaj0vKFs6Kl0pKFtcXHdcXFtcXF1dKyl8XFx7KFtcXHdcXFtcXF1dKykoPzpcXDooKD86W157fVxcXFxdK3xcXFxcLnxcXHsoPzpbXnt9XFxcXF0rfFxcXFwuKSpcXH0pKykpP1xcfS9nLGs9LyhbOl0/KShbXFx3XFxbXFxdLV0rKXxcXHsoW1xcd1xcW1xcXS1dKykoPzpcXDooKD86W157fVxcXFxdK3xcXFxcLnxcXHsoPzpbXnt9XFxcXF0rfFxcXFwuKSpcXH0pKykpP1xcfS9nLGw9XCJeXCIsbT0wLG49dGhpcy5zZWdtZW50cz1bXSxvPWU/ZS5wYXJhbXM6e30scD10aGlzLnBhcmFtcz1lP2UucGFyYW1zLiQkbmV3KCk6bmV3IE8uUGFyYW1TZXQscT1bXTt0aGlzLnNvdXJjZT1hO2Zvcih2YXIgcixzLHQ7KGk9ai5leGVjKGEpKSYmKHI9aChpLCExKSwhKHIuc2VnbWVudC5pbmRleE9mKFwiP1wiKT49MCkpOylzPWYoci5pZCxyLnR5cGUsci5jZmcsXCJwYXRoXCIpLGwrPWcoci5zZWdtZW50LHMudHlwZS5wYXR0ZXJuLnNvdXJjZSxzLnNxdWFzaCksbi5wdXNoKHIuc2VnbWVudCksbT1qLmxhc3RJbmRleDt0PWEuc3Vic3RyaW5nKG0pO3ZhciB1PXQuaW5kZXhPZihcIj9cIik7aWYodT49MCl7dmFyIHY9dGhpcy5zb3VyY2VTZWFyY2g9dC5zdWJzdHJpbmcodSk7aWYodD10LnN1YnN0cmluZygwLHUpLHRoaXMuc291cmNlUGF0aD1hLnN1YnN0cmluZygwLG0rdSksdi5sZW5ndGg+MClmb3IobT0wO2k9ay5leGVjKHYpOylyPWgoaSwhMCkscz1mKHIuaWQsci50eXBlLHIuY2ZnLFwic2VhcmNoXCIpLG09ai5sYXN0SW5kZXh9ZWxzZSB0aGlzLnNvdXJjZVBhdGg9YSx0aGlzLnNvdXJjZVNlYXJjaD1cIlwiO2wrPWcodCkrKGIuc3RyaWN0PT09ITE/XCIvP1wiOlwiXCIpK1wiJFwiLG4ucHVzaCh0KSx0aGlzLnJlZ2V4cD1uZXcgUmVnRXhwKGwsYi5jYXNlSW5zZW5zaXRpdmU/XCJpXCI6YyksdGhpcy5wcmVmaXg9blswXSx0aGlzLiQkcGFyYW1OYW1lcz1xfWZ1bmN0aW9uIHIoYSl7TSh0aGlzLGEpfWZ1bmN0aW9uIHMoKXtmdW5jdGlvbiBhKGEpe3JldHVybiBudWxsIT1hP2EudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC8vZyxcIiUyRlwiKTphfWZ1bmN0aW9uIGUoYSl7cmV0dXJuIG51bGwhPWE/YS50b1N0cmluZygpLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTphfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIHRoaXMucGF0dGVybi50ZXN0KGEpfWZ1bmN0aW9uIGkoKXtyZXR1cm57c3RyaWN0OnQsY2FzZUluc2Vuc2l0aXZlOnB9fWZ1bmN0aW9uIGooYSl7cmV0dXJuIEgoYSl8fEsoYSkmJkgoYVthLmxlbmd0aC0xXSl9ZnVuY3Rpb24gaygpe2Zvcig7eC5sZW5ndGg7KXt2YXIgYT14LnNoaWZ0KCk7aWYoYS5wYXR0ZXJuKXRocm93IG5ldyBFcnJvcihcIllvdSBjYW5ub3Qgb3ZlcnJpZGUgYSB0eXBlJ3MgLnBhdHRlcm4gYXQgcnVudGltZS5cIik7Yi5leHRlbmQodlthLm5hbWVdLG8uaW52b2tlKGEuZGVmKSl9fWZ1bmN0aW9uIGwoYSl7TSh0aGlzLGF8fHt9KX1PPXRoaXM7dmFyIG8scD0hMSx0PSEwLHU9ITEsdj17fSx3PSEwLHg9W10seT17c3RyaW5nOntlbmNvZGU6YSxkZWNvZGU6ZSxpczpmLHBhdHRlcm46L1teL10qL30sXCJpbnRcIjp7ZW5jb2RlOmEsZGVjb2RlOmZ1bmN0aW9uKGEpe3JldHVybiBwYXJzZUludChhLDEwKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSkmJnRoaXMuZGVjb2RlKGEudG9TdHJpbmcoKSk9PT1hfSxwYXR0ZXJuOi9cXGQrL30sYm9vbDp7ZW5jb2RlOmZ1bmN0aW9uKGEpe3JldHVybiBhPzE6MH0sZGVjb2RlOmZ1bmN0aW9uKGEpe3JldHVybiAwIT09cGFyc2VJbnQoYSwxMCl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09ITB8fGE9PT0hMX0scGF0dGVybjovMHwxL30sZGF0ZTp7ZW5jb2RlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlzKGEpP1thLmdldEZ1bGxZZWFyKCksKFwiMFwiKyhhLmdldE1vbnRoKCkrMSkpLnNsaWNlKC0yKSwoXCIwXCIrYS5nZXREYXRlKCkpLnNsaWNlKC0yKV0uam9pbihcIi1cIik6Y30sZGVjb2RlOmZ1bmN0aW9uKGEpe2lmKHRoaXMuaXMoYSkpcmV0dXJuIGE7dmFyIGI9dGhpcy5jYXB0dXJlLmV4ZWMoYSk7cmV0dXJuIGI/bmV3IERhdGUoYlsxXSxiWzJdLTEsYlszXSk6Y30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlJiYhaXNOYU4oYS52YWx1ZU9mKCkpfSxlcXVhbHM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5pcyhhKSYmdGhpcy5pcyhiKSYmYS50b0lTT1N0cmluZygpPT09Yi50b0lTT1N0cmluZygpfSxwYXR0ZXJuOi9bMC05XXs0fS0oPzowWzEtOV18MVswLTJdKS0oPzowWzEtOV18WzEtMl1bMC05XXwzWzAtMV0pLyxjYXB0dXJlOi8oWzAtOV17NH0pLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKS99LGpzb246e2VuY29kZTpiLnRvSnNvbixkZWNvZGU6Yi5mcm9tSnNvbixpczpiLmlzT2JqZWN0LGVxdWFsczpiLmVxdWFscyxwYXR0ZXJuOi9bXi9dKi99LGFueTp7ZW5jb2RlOmIuaWRlbnRpdHksZGVjb2RlOmIuaWRlbnRpdHksaXM6Yi5pZGVudGl0eSxlcXVhbHM6Yi5lcXVhbHMscGF0dGVybjovLiovfX07cy4kJGdldERlZmF1bHRWYWx1ZT1mdW5jdGlvbihhKXtpZighaihhLnZhbHVlKSlyZXR1cm4gYS52YWx1ZTtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJJbmplY3RhYmxlIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGF0IGNvbmZpZ3VyYXRpb24gdGltZVwiKTtyZXR1cm4gby5pbnZva2UoYS52YWx1ZSl9LHRoaXMuY2FzZUluc2Vuc2l0aXZlPWZ1bmN0aW9uKGEpe3JldHVybiBHKGEpJiYocD1hKSxwfSx0aGlzLnN0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSkmJih0PWEpLHR9LHRoaXMuZGVmYXVsdFNxdWFzaFBvbGljeT1mdW5jdGlvbihhKXtpZighRyhhKSlyZXR1cm4gdTtpZihhIT09ITAmJmEhPT0hMSYmIUkoYSkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzcXVhc2ggcG9saWN5OiBcIithK1wiLiBWYWxpZCBwb2xpY2llczogZmFsc2UsIHRydWUsIGFyYml0cmFyeS1zdHJpbmdcIik7cmV0dXJuIHU9YSxhfSx0aGlzLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHEoYSxNKGkoKSxiKSl9LHRoaXMuaXNNYXRjaGVyPWZ1bmN0aW9uKGEpe2lmKCFKKGEpKXJldHVybiExO3ZhciBiPSEwO3JldHVybiBMKHEucHJvdG90eXBlLGZ1bmN0aW9uKGMsZCl7SChjKSYmKGI9YiYmRyhhW2RdKSYmSChhW2RdKSl9KSxifSx0aGlzLnR5cGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFHKGIpKXJldHVybiB2W2FdO2lmKHYuaGFzT3duUHJvcGVydHkoYSkpdGhyb3cgbmV3IEVycm9yKFwiQSB0eXBlIG5hbWVkICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO3JldHVybiB2W2FdPW5ldyByKE0oe25hbWU6YX0sYikpLGMmJih4LnB1c2goe25hbWU6YSxkZWY6Y30pLHd8fGsoKSksdGhpc30sTCh5LGZ1bmN0aW9uKGEsYil7dltiXT1uZXcgcihNKHtuYW1lOmJ9LGEpKX0pLHY9ZCh2LHt9KSx0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG89YSx3PSExLGsoKSxMKHksZnVuY3Rpb24oYSxiKXt2W2JdfHwodltiXT1uZXcgcihhKSl9KSx0aGlzfV0sdGhpcy5QYXJhbT1mdW5jdGlvbihhLGIsZCxlKXtmdW5jdGlvbiBmKGEpe3ZhciBiPUooYSk/ZyhhKTpbXSxjPS0xPT09aChiLFwidmFsdWVcIikmJi0xPT09aChiLFwidHlwZVwiKSYmLTE9PT1oKGIsXCJzcXVhc2hcIikmJi0xPT09aChiLFwiYXJyYXlcIik7cmV0dXJuIGMmJihhPXt2YWx1ZTphfSksYS4kJGZuPWooYS52YWx1ZSk/YS52YWx1ZTpmdW5jdGlvbigpe3JldHVybiBhLnZhbHVlfSxhfWZ1bmN0aW9uIGkoYixjLGQpe2lmKGIudHlwZSYmYyl0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbSAnXCIrYStcIicgaGFzIHR3byB0eXBlIGNvbmZpZ3VyYXRpb25zLlwiKTtyZXR1cm4gYz9jOmIudHlwZT9iLnR5cGUgaW5zdGFuY2VvZiByP2IudHlwZTpuZXcgcihiLnR5cGUpOlwiY29uZmlnXCI9PT1kP3YuYW55OnYuc3RyaW5nfWZ1bmN0aW9uIGsoKXt2YXIgYj17YXJyYXk6XCJzZWFyY2hcIj09PWU/XCJhdXRvXCI6ITF9LGM9YS5tYXRjaCgvXFxbXFxdJC8pP3thcnJheTohMH06e307cmV0dXJuIE0oYixjLGQpLmFycmF5fWZ1bmN0aW9uIGwoYSxiKXt2YXIgYz1hLnNxdWFzaDtpZighYnx8Yz09PSExKXJldHVybiExO2lmKCFHKGMpfHxudWxsPT1jKXJldHVybiB1O2lmKGM9PT0hMHx8SShjKSlyZXR1cm4gYzt0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNxdWFzaCBwb2xpY3k6ICdcIitjK1wiJy4gVmFsaWQgcG9saWNpZXM6IGZhbHNlLCB0cnVlLCBvciBhcmJpdHJhcnkgc3RyaW5nXCIpfWZ1bmN0aW9uIHAoYSxiLGQsZSl7dmFyIGYsZyxpPVt7ZnJvbTpcIlwiLHRvOmR8fGI/YzpcIlwifSx7ZnJvbTpudWxsLHRvOmR8fGI/YzpcIlwifV07cmV0dXJuIGY9SyhhLnJlcGxhY2UpP2EucmVwbGFjZTpbXSxJKGUpJiZmLnB1c2goe2Zyb206ZSx0bzpjfSksZz1uKGYsZnVuY3Rpb24oYSl7cmV0dXJuIGEuZnJvbX0pLG0oaSxmdW5jdGlvbihhKXtyZXR1cm4tMT09PWgoZyxhLmZyb20pfSkuY29uY2F0KGYpfWZ1bmN0aW9uIHEoKXtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJJbmplY3RhYmxlIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGF0IGNvbmZpZ3VyYXRpb24gdGltZVwiKTtyZXR1cm4gby5pbnZva2UoZC4kJGZuKX1mdW5jdGlvbiBzKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBiLmZyb209PT1hfX1mdW5jdGlvbiBjKGEpe3ZhciBjPW4obSh3LnJlcGxhY2UsYihhKSksZnVuY3Rpb24oYSl7cmV0dXJuIGEudG99KTtyZXR1cm4gYy5sZW5ndGg/Y1swXTphfXJldHVybiBhPWMoYSksRyhhKT93LnR5cGUuZGVjb2RlKGEpOnEoKX1mdW5jdGlvbiB0KCl7cmV0dXJuXCJ7UGFyYW06XCIrYStcIiBcIitiK1wiIHNxdWFzaDogJ1wiK3orXCInIG9wdGlvbmFsOiBcIit5K1wifVwifXZhciB3PXRoaXM7ZD1mKGQpLGI9aShkLGIsZSk7dmFyIHg9aygpO2I9eD9iLiRhc0FycmF5KHgsXCJzZWFyY2hcIj09PWUpOmIsXCJzdHJpbmdcIiE9PWIubmFtZXx8eHx8XCJwYXRoXCIhPT1lfHxkLnZhbHVlIT09Y3x8KGQudmFsdWU9XCJcIik7dmFyIHk9ZC52YWx1ZSE9PWMsej1sKGQseSksQT1wKGQseCx5LHopO00odGhpcyx7aWQ6YSx0eXBlOmIsbG9jYXRpb246ZSxhcnJheTp4LHNxdWFzaDp6LHJlcGxhY2U6QSxpc09wdGlvbmFsOnksdmFsdWU6cyxkeW5hbWljOmMsY29uZmlnOmQsdG9TdHJpbmc6dH0pfSxsLnByb3RvdHlwZT17JCRuZXc6ZnVuY3Rpb24oKXtyZXR1cm4gZCh0aGlzLE0obmV3IGwseyQkcGFyZW50OnRoaXN9KSl9LCQka2V5czpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPVtdLGM9dGhpcyxkPWcobC5wcm90b3R5cGUpO2M7KWIucHVzaChjKSxjPWMuJCRwYXJlbnQ7cmV0dXJuIGIucmV2ZXJzZSgpLEwoYixmdW5jdGlvbihiKXtMKGcoYiksZnVuY3Rpb24oYil7LTE9PT1oKGEsYikmJi0xPT09aChkLGIpJiZhLnB1c2goYil9KX0pLGF9LCQkdmFsdWVzOmZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM9dGhpcztyZXR1cm4gTChjLiQka2V5cygpLGZ1bmN0aW9uKGQpe2JbZF09Y1tkXS52YWx1ZShhJiZhW2RdKX0pLGJ9LCQkZXF1YWxzOmZ1bmN0aW9uKGEsYil7dmFyIGM9ITAsZD10aGlzO3JldHVybiBMKGQuJCRrZXlzKCksZnVuY3Rpb24oZSl7dmFyIGY9YSYmYVtlXSxnPWImJmJbZV07ZFtlXS50eXBlLmVxdWFscyhmLGcpfHwoYz0hMSl9KSxjfSwkJHZhbGlkYXRlczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT0hMCxmPXRoaXM7cmV0dXJuIEwodGhpcy4kJGtleXMoKSxmdW5jdGlvbihnKXtkPWZbZ10sYz1hW2ddLGI9IWMmJmQuaXNPcHRpb25hbCxlPWUmJihifHwhIWQudHlwZS5pcyhjKSl9KSxlfSwkJHBhcmVudDpjfSx0aGlzLlBhcmFtU2V0PWx9ZnVuY3Rpb24gdChhLGQpe2Z1bmN0aW9uIGUoYSl7dmFyIGI9L15cXF4oKD86XFxcXFteYS16QS1aMC05XXxbXlxcXFxcXFtcXF1cXF4kKis/LigpfHt9XSspKikvLmV4ZWMoYS5zb3VyY2UpO3JldHVybiBudWxsIT1iP2JbMV0ucmVwbGFjZSgvXFxcXCguKS9nLFwiJDFcIik6XCJcIn1mdW5jdGlvbiBmKGEsYil7cmV0dXJuIGEucmVwbGFjZSgvXFwkKFxcJHxcXGR7MSwyfSkvLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGJbXCIkXCI9PT1jPzA6TnVtYmVyKGMpXX0pfWZ1bmN0aW9uIGcoYSxiLGMpe2lmKCFjKXJldHVybiExO3ZhciBkPWEuaW52b2tlKGIsYix7JG1hdGNoOmN9KTtyZXR1cm4gRyhkKT9kOiEwfWZ1bmN0aW9uIGgoZCxlLGYsZyl7ZnVuY3Rpb24gaChhLGIsYyl7cmV0dXJuXCIvXCI9PT1wP2E6Yj9wLnNsaWNlKDAsLTEpK2E6Yz9wLnNsaWNlKDEpK2E6YX1mdW5jdGlvbiBtKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGI9YShmLGQpO3JldHVybiBiPyhJKGIpJiZkLnJlcGxhY2UoKS51cmwoYiksITApOiExfWlmKCFhfHwhYS5kZWZhdWx0UHJldmVudGVkKXt2YXIgZT1vJiZkLnVybCgpPT09bztpZihvPWMsZSlyZXR1cm4hMDt2YXIgZyxoPWoubGVuZ3RoO2ZvcihnPTA7aD5nO2crKylpZihiKGpbZ10pKXJldHVybjtrJiZiKGspfX1mdW5jdGlvbiBuKCl7cmV0dXJuIGk9aXx8ZS4kb24oXCIkbG9jYXRpb25DaGFuZ2VTdWNjZXNzXCIsbSl9dmFyIG8scD1nLmJhc2VIcmVmKCkscT1kLnVybCgpO3JldHVybiBsfHxuKCkse3N5bmM6ZnVuY3Rpb24oKXttKCl9LGxpc3RlbjpmdW5jdGlvbigpe3JldHVybiBuKCl9LHVwZGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gYT92b2lkKHE9ZC51cmwoKSk6dm9pZChkLnVybCgpIT09cSYmKGQudXJsKHEpLGQucmVwbGFjZSgpKSl9LHB1c2g6ZnVuY3Rpb24oYSxiLGUpe2QudXJsKGEuZm9ybWF0KGJ8fHt9KSksbz1lJiZlLiQkYXZvaWRSZXN5bmM/ZC51cmwoKTpjLGUmJmUucmVwbGFjZSYmZC5yZXBsYWNlKCl9LGhyZWY6ZnVuY3Rpb24oYyxlLGYpe2lmKCFjLnZhbGlkYXRlcyhlKSlyZXR1cm4gbnVsbDt2YXIgZz1hLmh0bWw1TW9kZSgpO2IuaXNPYmplY3QoZykmJihnPWcuZW5hYmxlZCk7dmFyIGk9Yy5mb3JtYXQoZSk7aWYoZj1mfHx7fSxnfHxudWxsPT09aXx8KGk9XCIjXCIrYS5oYXNoUHJlZml4KCkraSksaT1oKGksZyxmLmFic29sdXRlKSwhZi5hYnNvbHV0ZXx8IWkpcmV0dXJuIGk7dmFyIGo9IWcmJmk/XCIvXCI6XCJcIixrPWQucG9ydCgpO3JldHVybiBrPTgwPT09a3x8NDQzPT09az9cIlwiOlwiOlwiK2ssW2QucHJvdG9jb2woKSxcIjovL1wiLGQuaG9zdCgpLGssaixpXS5qb2luKFwiXCIpfX19dmFyIGksaj1bXSxrPW51bGwsbD0hMTt0aGlzLnJ1bGU9ZnVuY3Rpb24oYSl7aWYoIUgoYSkpdGhyb3cgbmV3IEVycm9yKFwiJ3J1bGUnIG11c3QgYmUgYSBmdW5jdGlvblwiKTtyZXR1cm4gai5wdXNoKGEpLHRoaXN9LHRoaXMub3RoZXJ3aXNlPWZ1bmN0aW9uKGEpe2lmKEkoYSkpe3ZhciBiPWE7YT1mdW5jdGlvbigpe3JldHVybiBifX1lbHNlIGlmKCFIKGEpKXRocm93IG5ldyBFcnJvcihcIidydWxlJyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7cmV0dXJuIGs9YSx0aGlzfSx0aGlzLndoZW49ZnVuY3Rpb24oYSxiKXt2YXIgYyxoPUkoYik7aWYoSShhKSYmKGE9ZC5jb21waWxlKGEpKSwhaCYmIUgoYikmJiFLKGIpKXRocm93IG5ldyBFcnJvcihcImludmFsaWQgJ2hhbmRsZXInIGluIHdoZW4oKVwiKTt2YXIgaT17bWF0Y2hlcjpmdW5jdGlvbihhLGIpe3JldHVybiBoJiYoYz1kLmNvbXBpbGUoYiksYj1bXCIkbWF0Y2hcIixmdW5jdGlvbihhKXtyZXR1cm4gYy5mb3JtYXQoYSl9XSksTShmdW5jdGlvbihjLGQpe3JldHVybiBnKGMsYixhLmV4ZWMoZC5wYXRoKCksZC5zZWFyY2goKSkpfSx7cHJlZml4OkkoYS5wcmVmaXgpP2EucHJlZml4OlwiXCJ9KX0scmVnZXg6ZnVuY3Rpb24oYSxiKXtpZihhLmdsb2JhbHx8YS5zdGlja3kpdGhyb3cgbmV3IEVycm9yKFwid2hlbigpIFJlZ0V4cCBtdXN0IG5vdCBiZSBnbG9iYWwgb3Igc3RpY2t5XCIpO3JldHVybiBoJiYoYz1iLGI9W1wiJG1hdGNoXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGYoYyxhKX1dKSxNKGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGcoYyxiLGEuZXhlYyhkLnBhdGgoKSkpfSx7cHJlZml4OmUoYSl9KX19LGo9e21hdGNoZXI6ZC5pc01hdGNoZXIoYSkscmVnZXg6YSBpbnN0YW5jZW9mIFJlZ0V4cH07Zm9yKHZhciBrIGluIGopaWYoaltrXSlyZXR1cm4gdGhpcy5ydWxlKGlba10oYSxiKSk7dGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCAnd2hhdCcgaW4gd2hlbigpXCIpfSx0aGlzLmRlZmVySW50ZXJjZXB0PWZ1bmN0aW9uKGEpe2E9PT1jJiYoYT0hMCksbD1hfSx0aGlzLiRnZXQ9aCxoLiRpbmplY3Q9W1wiJGxvY2F0aW9uXCIsXCIkcm9vdFNjb3BlXCIsXCIkaW5qZWN0b3JcIixcIiRicm93c2VyXCJdfWZ1bmN0aW9uIHUoYSxlKXtmdW5jdGlvbiBmKGEpe3JldHVybiAwPT09YS5pbmRleE9mKFwiLlwiKXx8MD09PWEuaW5kZXhPZihcIl5cIil9ZnVuY3Rpb24gbChhLGIpe2lmKCFhKXJldHVybiBjO3ZhciBkPUkoYSksZT1kP2E6YS5uYW1lLGc9ZihlKTtpZihnKXtpZighYil0aHJvdyBuZXcgRXJyb3IoXCJObyByZWZlcmVuY2UgcG9pbnQgZ2l2ZW4gZm9yIHBhdGggJ1wiK2UrXCInXCIpO2I9bChiKTtmb3IodmFyIGg9ZS5zcGxpdChcIi5cIiksaT0wLGo9aC5sZW5ndGgsaz1iO2o+aTtpKyspaWYoXCJcIiE9PWhbaV18fDAhPT1pKXtpZihcIl5cIiE9PWhbaV0pYnJlYWs7aWYoIWsucGFyZW50KXRocm93IG5ldyBFcnJvcihcIlBhdGggJ1wiK2UrXCInIG5vdCB2YWxpZCBmb3Igc3RhdGUgJ1wiK2IubmFtZStcIidcIik7az1rLnBhcmVudH1lbHNlIGs9YjtoPWguc2xpY2UoaSkuam9pbihcIi5cIiksZT1rLm5hbWUrKGsubmFtZSYmaD9cIi5cIjpcIlwiKStofXZhciBtPXlbZV07cmV0dXJuIW18fCFkJiYoZHx8bSE9PWEmJm0uc2VsZiE9PWEpP2M6bX1mdW5jdGlvbiBtKGEsYil7elthXXx8KHpbYV09W10pLHpbYV0ucHVzaChiKX1mdW5jdGlvbiBvKGEpe2Zvcih2YXIgYj16W2FdfHxbXTtiLmxlbmd0aDspcChiLnNoaWZ0KCkpfWZ1bmN0aW9uIHAoYil7Yj1kKGIse3NlbGY6YixyZXNvbHZlOmIucmVzb2x2ZXx8e30sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lfX0pO3ZhciBjPWIubmFtZTtpZighSShjKXx8Yy5pbmRleE9mKFwiQFwiKT49MCl0aHJvdyBuZXcgRXJyb3IoXCJTdGF0ZSBtdXN0IGhhdmUgYSB2YWxpZCBuYW1lXCIpO2lmKHkuaGFzT3duUHJvcGVydHkoYykpdGhyb3cgbmV3IEVycm9yKFwiU3RhdGUgJ1wiK2MrXCInJyBpcyBhbHJlYWR5IGRlZmluZWRcIik7dmFyIGU9LTEhPT1jLmluZGV4T2YoXCIuXCIpP2Muc3Vic3RyaW5nKDAsYy5sYXN0SW5kZXhPZihcIi5cIikpOkkoYi5wYXJlbnQpP2IucGFyZW50OkooYi5wYXJlbnQpJiZJKGIucGFyZW50Lm5hbWUpP2IucGFyZW50Lm5hbWU6XCJcIjtpZihlJiYheVtlXSlyZXR1cm4gbShlLGIuc2VsZik7Zm9yKHZhciBmIGluIEIpSChCW2ZdKSYmKGJbZl09QltmXShiLEIuJGRlbGVnYXRlc1tmXSkpO3JldHVybiB5W2NdPWIsIWJbQV0mJmIudXJsJiZhLndoZW4oYi51cmwsW1wiJG1hdGNoXCIsXCIkc3RhdGVQYXJhbXNcIixmdW5jdGlvbihhLGMpe3guJGN1cnJlbnQubmF2aWdhYmxlPT1iJiZqKGEsYyl8fHgudHJhbnNpdGlvblRvKGIsYSx7aW5oZXJpdDohMCxsb2NhdGlvbjohMX0pfV0pLG8oYyksYn1mdW5jdGlvbiBxKGEpe3JldHVybiBhLmluZGV4T2YoXCIqXCIpPi0xfWZ1bmN0aW9uIHIoYSl7dmFyIGI9YS5zcGxpdChcIi5cIiksYz14LiRjdXJyZW50Lm5hbWUuc3BsaXQoXCIuXCIpO2lmKFwiKipcIj09PWJbMF0mJihjPWMuc2xpY2UoaChjLGJbMV0pKSxjLnVuc2hpZnQoXCIqKlwiKSksXCIqKlwiPT09YltiLmxlbmd0aC0xXSYmKGMuc3BsaWNlKGgoYyxiW2IubGVuZ3RoLTJdKSsxLE51bWJlci5NQVhfVkFMVUUpLGMucHVzaChcIioqXCIpKSxiLmxlbmd0aCE9Yy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKVwiKlwiPT09YltkXSYmKGNbZF09XCIqXCIpO3JldHVybiBjLmpvaW4oXCJcIik9PT1iLmpvaW4oXCJcIil9ZnVuY3Rpb24gcyhhLGIpe3JldHVybiBJKGEpJiYhRyhiKT9CW2FdOkgoYikmJkkoYSk/KEJbYV0mJiFCLiRkZWxlZ2F0ZXNbYV0mJihCLiRkZWxlZ2F0ZXNbYV09QlthXSksQlthXT1iLHRoaXMpOnRoaXN9ZnVuY3Rpb24gdChhLGIpe3JldHVybiBKKGEpP2I9YTpiLm5hbWU9YSxwKGIpLHRoaXN9ZnVuY3Rpb24gdShhLGUsZixoLG0sbyxwKXtmdW5jdGlvbiBzKGIsYyxkLGYpe3ZhciBnPWEuJGJyb2FkY2FzdChcIiRzdGF0ZU5vdEZvdW5kXCIsYixjLGQpO2lmKGcuZGVmYXVsdFByZXZlbnRlZClyZXR1cm4gcC51cGRhdGUoKSxCO2lmKCFnLnJldHJ5KXJldHVybiBudWxsO2lmKGYuJHJldHJ5KXJldHVybiBwLnVwZGF0ZSgpLEM7dmFyIGg9eC50cmFuc2l0aW9uPWUud2hlbihnLnJldHJ5KTtyZXR1cm4gaC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGghPT14LnRyYW5zaXRpb24/dTooYi5vcHRpb25zLiRyZXRyeT0hMCx4LnRyYW5zaXRpb25UbyhiLnRvLGIudG9QYXJhbXMsYi5vcHRpb25zKSl9LGZ1bmN0aW9uKCl7cmV0dXJuIEJ9KSxwLnVwZGF0ZSgpLGh9ZnVuY3Rpb24gdChhLGMsZCxnLGksail7dmFyIGw9ZD9jOmsoYS5wYXJhbXMuJCRrZXlzKCksYyksbj17JHN0YXRlUGFyYW1zOmx9O2kucmVzb2x2ZT1tLnJlc29sdmUoYS5yZXNvbHZlLG4saS5yZXNvbHZlLGEpO3ZhciBvPVtpLnJlc29sdmUudGhlbihmdW5jdGlvbihhKXtpLmdsb2JhbHM9YX0pXTtyZXR1cm4gZyYmby5wdXNoKGcpLEwoYS52aWV3cyxmdW5jdGlvbihjLGQpe3ZhciBlPWMucmVzb2x2ZSYmYy5yZXNvbHZlIT09YS5yZXNvbHZlP2MucmVzb2x2ZTp7fTtlLiR0ZW1wbGF0ZT1bZnVuY3Rpb24oKXtyZXR1cm4gZi5sb2FkKGQse3ZpZXc6Yyxsb2NhbHM6bixwYXJhbXM6bCxub3RpZnk6ai5ub3RpZnl9KXx8XCJcIn1dLG8ucHVzaChtLnJlc29sdmUoZSxuLGkucmVzb2x2ZSxhKS50aGVuKGZ1bmN0aW9uKGYpe2lmKEgoYy5jb250cm9sbGVyUHJvdmlkZXIpfHxLKGMuY29udHJvbGxlclByb3ZpZGVyKSl7dmFyIGc9Yi5leHRlbmQoe30sZSxuKTtmLiQkY29udHJvbGxlcj1oLmludm9rZShjLmNvbnRyb2xsZXJQcm92aWRlcixudWxsLGcpfWVsc2UgZi4kJGNvbnRyb2xsZXI9Yy5jb250cm9sbGVyO2YuJCRzdGF0ZT1hLGYuJCRjb250cm9sbGVyQXM9Yy5jb250cm9sbGVyQXMsaVtkXT1mfSkpfSksZS5hbGwobykudGhlbihmdW5jdGlvbigpe3JldHVybiBpfSl9dmFyIHU9ZS5yZWplY3QobmV3IEVycm9yKFwidHJhbnNpdGlvbiBzdXBlcnNlZGVkXCIpKSx6PWUucmVqZWN0KG5ldyBFcnJvcihcInRyYW5zaXRpb24gcHJldmVudGVkXCIpKSxCPWUucmVqZWN0KG5ldyBFcnJvcihcInRyYW5zaXRpb24gYWJvcnRlZFwiKSksQz1lLnJlamVjdChuZXcgRXJyb3IoXCJ0cmFuc2l0aW9uIGZhaWxlZFwiKSk7cmV0dXJuIHcubG9jYWxzPXtyZXNvbHZlOm51bGwsZ2xvYmFsczp7JHN0YXRlUGFyYW1zOnt9fX0seD17cGFyYW1zOnt9LGN1cnJlbnQ6dy5zZWxmLCRjdXJyZW50OncsdHJhbnNpdGlvbjpudWxsfSx4LnJlbG9hZD1mdW5jdGlvbigpe3JldHVybiB4LnRyYW5zaXRpb25Ubyh4LmN1cnJlbnQsbyx7cmVsb2FkOiEwLGluaGVyaXQ6ITEsbm90aWZ5OiEwfSl9LHguZ289ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB4LnRyYW5zaXRpb25UbyhhLGIsTSh7aW5oZXJpdDohMCxyZWxhdGl2ZTp4LiRjdXJyZW50fSxjKSl9LHgudHJhbnNpdGlvblRvPWZ1bmN0aW9uKGIsYyxmKXtjPWN8fHt9LGY9TSh7bG9jYXRpb246ITAsaW5oZXJpdDohMSxyZWxhdGl2ZTpudWxsLG5vdGlmeTohMCxyZWxvYWQ6ITEsJHJldHJ5OiExfSxmfHx7fSk7dmFyIGcsaj14LiRjdXJyZW50LG09eC5wYXJhbXMsbj1qLnBhdGgscT1sKGIsZi5yZWxhdGl2ZSk7aWYoIUcocSkpe3ZhciByPXt0bzpiLHRvUGFyYW1zOmMsb3B0aW9uczpmfSx5PXMocixqLnNlbGYsbSxmKTtpZih5KXJldHVybiB5O2lmKGI9ci50byxjPXIudG9QYXJhbXMsZj1yLm9wdGlvbnMscT1sKGIsZi5yZWxhdGl2ZSksIUcocSkpe2lmKCFmLnJlbGF0aXZlKXRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggc3RhdGUgJ1wiK2IrXCInXCIpO3Rocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlICdcIitiK1wiJyBmcm9tIHN0YXRlICdcIitmLnJlbGF0aXZlK1wiJ1wiKX19aWYocVtBXSl0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdHJhbnNpdGlvbiB0byBhYnN0cmFjdCBzdGF0ZSAnXCIrYitcIidcIik7aWYoZi5pbmhlcml0JiYoYz1pKG8sY3x8e30seC4kY3VycmVudCxxKSksIXEucGFyYW1zLiQkdmFsaWRhdGVzKGMpKXJldHVybiBDO2M9cS5wYXJhbXMuJCR2YWx1ZXMoYyksYj1xO3ZhciBCPWIucGF0aCxEPTAsRT1CW0RdLEY9dy5sb2NhbHMsSD1bXTtpZighZi5yZWxvYWQpZm9yKDtFJiZFPT09bltEXSYmRS5vd25QYXJhbXMuJCRlcXVhbHMoYyxtKTspRj1IW0RdPUUubG9jYWxzLEQrKyxFPUJbRF07aWYodihiLGosRixmKSlyZXR1cm4gYi5zZWxmLnJlbG9hZE9uU2VhcmNoIT09ITEmJnAudXBkYXRlKCkseC50cmFuc2l0aW9uPW51bGwsZS53aGVuKHguY3VycmVudCk7aWYoYz1rKGIucGFyYW1zLiQka2V5cygpLGN8fHt9KSxmLm5vdGlmeSYmYS4kYnJvYWRjYXN0KFwiJHN0YXRlQ2hhbmdlU3RhcnRcIixiLnNlbGYsYyxqLnNlbGYsbSkuZGVmYXVsdFByZXZlbnRlZClyZXR1cm4gcC51cGRhdGUoKSx6O2Zvcih2YXIgST1lLndoZW4oRiksSj1EO0o8Qi5sZW5ndGg7SisrLEU9QltKXSlGPUhbSl09ZChGKSxJPXQoRSxjLEU9PT1iLEksRixmKTt2YXIgSz14LnRyYW5zaXRpb249SS50aGVuKGZ1bmN0aW9uKCl7dmFyIGQsZSxnO2lmKHgudHJhbnNpdGlvbiE9PUspcmV0dXJuIHU7Zm9yKGQ9bi5sZW5ndGgtMTtkPj1EO2QtLSlnPW5bZF0sZy5zZWxmLm9uRXhpdCYmaC5pbnZva2UoZy5zZWxmLm9uRXhpdCxnLnNlbGYsZy5sb2NhbHMuZ2xvYmFscyksZy5sb2NhbHM9bnVsbDtmb3IoZD1EO2Q8Qi5sZW5ndGg7ZCsrKWU9QltkXSxlLmxvY2Fscz1IW2RdLGUuc2VsZi5vbkVudGVyJiZoLmludm9rZShlLnNlbGYub25FbnRlcixlLnNlbGYsZS5sb2NhbHMuZ2xvYmFscyk7cmV0dXJuIHgudHJhbnNpdGlvbiE9PUs/dTooeC4kY3VycmVudD1iLHguY3VycmVudD1iLnNlbGYseC5wYXJhbXM9YyxOKHgucGFyYW1zLG8pLHgudHJhbnNpdGlvbj1udWxsLGYubG9jYXRpb24mJmIubmF2aWdhYmxlJiZwLnB1c2goYi5uYXZpZ2FibGUudXJsLGIubmF2aWdhYmxlLmxvY2Fscy5nbG9iYWxzLiRzdGF0ZVBhcmFtcyx7JCRhdm9pZFJlc3luYzohMCxyZXBsYWNlOlwicmVwbGFjZVwiPT09Zi5sb2NhdGlvbn0pLGYubm90aWZ5JiZhLiRicm9hZGNhc3QoXCIkc3RhdGVDaGFuZ2VTdWNjZXNzXCIsYi5zZWxmLGMsai5zZWxmLG0pLHAudXBkYXRlKCEwKSx4LmN1cnJlbnQpfSxmdW5jdGlvbihkKXtyZXR1cm4geC50cmFuc2l0aW9uIT09Sz91Oih4LnRyYW5zaXRpb249bnVsbCxnPWEuJGJyb2FkY2FzdChcIiRzdGF0ZUNoYW5nZUVycm9yXCIsYi5zZWxmLGMsai5zZWxmLG0sZCksZy5kZWZhdWx0UHJldmVudGVkfHxwLnVwZGF0ZSgpLGUucmVqZWN0KGQpKX0pO3JldHVybiBLfSx4LmlzPWZ1bmN0aW9uKGEsYixkKXtkPU0oe3JlbGF0aXZlOnguJGN1cnJlbnR9LGR8fHt9KTt2YXIgZT1sKGEsZC5yZWxhdGl2ZSk7cmV0dXJuIEcoZSk/eC4kY3VycmVudCE9PWU/ITE6Yj9qKGUucGFyYW1zLiQkdmFsdWVzKGIpLG8pOiEwOmN9LHguaW5jbHVkZXM9ZnVuY3Rpb24oYSxiLGQpe2lmKGQ9TSh7cmVsYXRpdmU6eC4kY3VycmVudH0sZHx8e30pLEkoYSkmJnEoYSkpe2lmKCFyKGEpKXJldHVybiExO2E9eC4kY3VycmVudC5uYW1lfXZhciBlPWwoYSxkLnJlbGF0aXZlKTtyZXR1cm4gRyhlKT9HKHguJGN1cnJlbnQuaW5jbHVkZXNbZS5uYW1lXSk/Yj9qKGUucGFyYW1zLiQkdmFsdWVzKGIpLG8sZyhiKSk6ITA6ITE6Y30seC5ocmVmPWZ1bmN0aW9uKGEsYixkKXtkPU0oe2xvc3N5OiEwLGluaGVyaXQ6ITAsYWJzb2x1dGU6ITEscmVsYXRpdmU6eC4kY3VycmVudH0sZHx8e30pO3ZhciBlPWwoYSxkLnJlbGF0aXZlKTtpZighRyhlKSlyZXR1cm4gbnVsbDtkLmluaGVyaXQmJihiPWkobyxifHx7fSx4LiRjdXJyZW50LGUpKTt2YXIgZj1lJiZkLmxvc3N5P2UubmF2aWdhYmxlOmU7cmV0dXJuIGYmJmYudXJsIT09YyYmbnVsbCE9PWYudXJsP3AuaHJlZihmLnVybCxrKGUucGFyYW1zLiQka2V5cygpLGJ8fHt9KSx7YWJzb2x1dGU6ZC5hYnNvbHV0ZX0pOm51bGx9LHguZ2V0PWZ1bmN0aW9uKGEsYil7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4oZyh5KSxmdW5jdGlvbihhKXtyZXR1cm4geVthXS5zZWxmfSk7dmFyIGM9bChhLGJ8fHguJGN1cnJlbnQpO3JldHVybiBjJiZjLnNlbGY/Yy5zZWxmOm51bGx9LHh9ZnVuY3Rpb24gdihhLGIsYyxkKXtyZXR1cm4gYSE9PWJ8fChjIT09Yi5sb2NhbHN8fGQucmVsb2FkKSYmYS5zZWxmLnJlbG9hZE9uU2VhcmNoIT09ITE/dm9pZCAwOiEwfXZhciB3LHgseT17fSx6PXt9LEE9XCJhYnN0cmFjdFwiLEI9e3BhcmVudDpmdW5jdGlvbihhKXtpZihHKGEucGFyZW50KSYmYS5wYXJlbnQpcmV0dXJuIGwoYS5wYXJlbnQpO3ZhciBiPS9eKC4rKVxcLlteLl0rJC8uZXhlYyhhLm5hbWUpO3JldHVybiBiP2woYlsxXSk6d30sZGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnQmJmEucGFyZW50LmRhdGEmJihhLmRhdGE9YS5zZWxmLmRhdGE9TSh7fSxhLnBhcmVudC5kYXRhLGEuZGF0YSkpLGEuZGF0YX0sdXJsOmZ1bmN0aW9uKGEpe3ZhciBiPWEudXJsLGM9e3BhcmFtczphLnBhcmFtc3x8e319O2lmKEkoYikpcmV0dXJuXCJeXCI9PWIuY2hhckF0KDApP2UuY29tcGlsZShiLnN1YnN0cmluZygxKSxjKTooYS5wYXJlbnQubmF2aWdhYmxlfHx3KS51cmwuY29uY2F0KGIsYyk7aWYoIWJ8fGUuaXNNYXRjaGVyKGIpKXJldHVybiBiO3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXJsICdcIitiK1wiJyBpbiBzdGF0ZSAnXCIrYStcIidcIil9LG5hdmlnYWJsZTpmdW5jdGlvbihhKXtyZXR1cm4gYS51cmw/YTphLnBhcmVudD9hLnBhcmVudC5uYXZpZ2FibGU6bnVsbH0sb3duUGFyYW1zOmZ1bmN0aW9uKGEpe3ZhciBiPWEudXJsJiZhLnVybC5wYXJhbXN8fG5ldyBPLlBhcmFtU2V0O3JldHVybiBMKGEucGFyYW1zfHx7fSxmdW5jdGlvbihhLGMpe2JbY118fChiW2NdPW5ldyBPLlBhcmFtKGMsbnVsbCxhLFwiY29uZmlnXCIpKX0pLGJ9LHBhcmFtczpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnQmJmEucGFyZW50LnBhcmFtcz9NKGEucGFyZW50LnBhcmFtcy4kJG5ldygpLGEub3duUGFyYW1zKTpuZXcgTy5QYXJhbVNldH0sdmlld3M6ZnVuY3Rpb24oYSl7dmFyIGI9e307cmV0dXJuIEwoRyhhLnZpZXdzKT9hLnZpZXdzOntcIlwiOmF9LGZ1bmN0aW9uKGMsZCl7ZC5pbmRleE9mKFwiQFwiKTwwJiYoZCs9XCJAXCIrYS5wYXJlbnQubmFtZSksYltkXT1jfSksYn0scGF0aDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnQ/YS5wYXJlbnQucGF0aC5jb25jYXQoYSk6W119LGluY2x1ZGVzOmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50P00oe30sYS5wYXJlbnQuaW5jbHVkZXMpOnt9O3JldHVybiBiW2EubmFtZV09ITAsYn0sJGRlbGVnYXRlczp7fX07dz1wKHtuYW1lOlwiXCIsdXJsOlwiXlwiLHZpZXdzOm51bGwsXCJhYnN0cmFjdFwiOiEwfSksdy5uYXZpZ2FibGU9bnVsbCx0aGlzLmRlY29yYXRvcj1zLHRoaXMuc3RhdGU9dCx0aGlzLiRnZXQ9dSx1LiRpbmplY3Q9W1wiJHJvb3RTY29wZVwiLFwiJHFcIixcIiR2aWV3XCIsXCIkaW5qZWN0b3JcIixcIiRyZXNvbHZlXCIsXCIkc3RhdGVQYXJhbXNcIixcIiR1cmxSb3V0ZXJcIixcIiRsb2NhdGlvblwiLFwiJHVybE1hdGNoZXJGYWN0b3J5XCJdfWZ1bmN0aW9uIHYoKXtmdW5jdGlvbiBhKGEsYil7cmV0dXJue2xvYWQ6ZnVuY3Rpb24oYyxkKXt2YXIgZSxmPXt0ZW1wbGF0ZTpudWxsLGNvbnRyb2xsZXI6bnVsbCx2aWV3Om51bGwsbG9jYWxzOm51bGwsbm90aWZ5OiEwLGFzeW5jOiEwLHBhcmFtczp7fX07cmV0dXJuIGQ9TShmLGQpLGQudmlldyYmKGU9Yi5mcm9tQ29uZmlnKGQudmlldyxkLnBhcmFtcyxkLmxvY2FscykpLGUmJmQubm90aWZ5JiZhLiRicm9hZGNhc3QoXCIkdmlld0NvbnRlbnRMb2FkaW5nXCIsZCksZX19fXRoaXMuJGdldD1hLGEuJGluamVjdD1bXCIkcm9vdFNjb3BlXCIsXCIkdGVtcGxhdGVGYWN0b3J5XCJdfWZ1bmN0aW9uIHcoKXt2YXIgYT0hMTt0aGlzLnVzZUFuY2hvclNjcm9sbD1mdW5jdGlvbigpe2E9ITB9LHRoaXMuJGdldD1bXCIkYW5jaG9yU2Nyb2xsXCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGE/YjpmdW5jdGlvbihhKXtjKGZ1bmN0aW9uKCl7YVswXS5zY3JvbGxJbnRvVmlldygpfSwwLCExKX19XX1mdW5jdGlvbiB4KGEsYyxkLGUpe2Z1bmN0aW9uIGYoKXtyZXR1cm4gYy5oYXM/ZnVuY3Rpb24oYSl7cmV0dXJuIGMuaGFzKGEpP2MuZ2V0KGEpOm51bGx9OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gYy5nZXQoYSl9Y2F0Y2goYil7cmV0dXJuIG51bGx9fX1mdW5jdGlvbiBnKGEsYil7dmFyIGM9ZnVuY3Rpb24oKXtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxiLGMpe2IuYWZ0ZXIoYSksYygpfSxsZWF2ZTpmdW5jdGlvbihhLGIpe2EucmVtb3ZlKCksYigpfX19O2lmKGopcmV0dXJue2VudGVyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1qLmVudGVyKGEsbnVsbCxiLGMpO2QmJmQudGhlbiYmZC50aGVuKGMpfSxsZWF2ZTpmdW5jdGlvbihhLGIpe3ZhciBjPWoubGVhdmUoYSxiKTtjJiZjLnRoZW4mJmMudGhlbihiKX19O2lmKGkpe3ZhciBkPWkmJmkoYixhKTtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxiLGMpe2QuZW50ZXIoYSxudWxsLGIpLGMoKX0sbGVhdmU6ZnVuY3Rpb24oYSxiKXtkLmxlYXZlKGEpLGIoKX19fXJldHVybiBjKCl9dmFyIGg9ZigpLGk9aChcIiRhbmltYXRvclwiKSxqPWgoXCIkYW5pbWF0ZVwiKSxrPXtyZXN0cmljdDpcIkVDQVwiLHRlcm1pbmFsOiEwLHByaW9yaXR5OjQwMCx0cmFuc2NsdWRlOlwiZWxlbWVudFwiLGNvbXBpbGU6ZnVuY3Rpb24oYyxmLGgpe3JldHVybiBmdW5jdGlvbihjLGYsaSl7ZnVuY3Rpb24gaigpe2wmJihsLnJlbW92ZSgpLGw9bnVsbCksbiYmKG4uJGRlc3Ryb3koKSxuPW51bGwpLG0mJihyLmxlYXZlKG0sZnVuY3Rpb24oKXtsPW51bGx9KSxsPW0sbT1udWxsKX1mdW5jdGlvbiBrKGcpe3ZhciBrLGw9eihjLGksZixlKSxzPWwmJmEuJGN1cnJlbnQmJmEuJGN1cnJlbnQubG9jYWxzW2xdO2lmKGd8fHMhPT1vKXtrPWMuJG5ldygpLG89YS4kY3VycmVudC5sb2NhbHNbbF07dmFyIHQ9aChrLGZ1bmN0aW9uKGEpe3IuZW50ZXIoYSxmLGZ1bmN0aW9uKCl7biYmbi4kZW1pdChcIiR2aWV3Q29udGVudEFuaW1hdGlvbkVuZGVkXCIpLChiLmlzRGVmaW5lZChxKSYmIXF8fGMuJGV2YWwocSkpJiZkKGEpfSksaigpfSk7bT10LG49ayxuLiRlbWl0KFwiJHZpZXdDb250ZW50TG9hZGVkXCIpLG4uJGV2YWwocCl9fXZhciBsLG0sbixvLHA9aS5vbmxvYWR8fFwiXCIscT1pLmF1dG9zY3JvbGwscj1nKGksYyk7Yy4kb24oXCIkc3RhdGVDaGFuZ2VTdWNjZXNzXCIsZnVuY3Rpb24oKXtrKCExKX0pLGMuJG9uKFwiJHZpZXdDb250ZW50TG9hZGluZ1wiLGZ1bmN0aW9uKCl7ayghMSl9KSxrKCEwKX19fTtyZXR1cm4ga31mdW5jdGlvbiB5KGEsYixjLGQpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAsY29tcGlsZTpmdW5jdGlvbihlKXt2YXIgZj1lLmh0bWwoKTtyZXR1cm4gZnVuY3Rpb24oZSxnLGgpe3ZhciBpPWMuJGN1cnJlbnQsaj16KGUsaCxnLGQpLGs9aSYmaS5sb2NhbHNbal07aWYoayl7Zy5kYXRhKFwiJHVpVmlld1wiLHtuYW1lOmosc3RhdGU6ay4kJHN0YXRlfSksZy5odG1sKGsuJHRlbXBsYXRlP2suJHRlbXBsYXRlOmYpO3ZhciBsPWEoZy5jb250ZW50cygpKTtpZihrLiQkY29udHJvbGxlcil7ay4kc2NvcGU9ZTt2YXIgbT1iKGsuJCRjb250cm9sbGVyLGspO2suJCRjb250cm9sbGVyQXMmJihlW2suJCRjb250cm9sbGVyQXNdPW0pLGcuZGF0YShcIiRuZ0NvbnRyb2xsZXJDb250cm9sbGVyXCIsbSksZy5jaGlsZHJlbigpLmRhdGEoXCIkbmdDb250cm9sbGVyQ29udHJvbGxlclwiLG0pfWwoZSl9fX19fWZ1bmN0aW9uIHooYSxiLGMsZCl7dmFyIGU9ZChiLnVpVmlld3x8Yi5uYW1lfHxcIlwiKShhKSxmPWMuaW5oZXJpdGVkRGF0YShcIiR1aVZpZXdcIik7cmV0dXJuIGUuaW5kZXhPZihcIkBcIik+PTA/ZTplK1wiQFwiKyhmP2Yuc3RhdGUubmFtZTpcIlwiKX1mdW5jdGlvbiBBKGEsYil7dmFyIGMsZD1hLm1hdGNoKC9eXFxzKih7W159XSp9KVxccyokLyk7aWYoZCYmKGE9YitcIihcIitkWzFdK1wiKVwiKSxjPWEucmVwbGFjZSgvXFxuL2csXCIgXCIpLm1hdGNoKC9eKFteKF0rPylcXHMqKFxcKCguKilcXCkpPyQvKSwhY3x8NCE9PWMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhdGUgcmVmICdcIithK1wiJ1wiKTtyZXR1cm57c3RhdGU6Y1sxXSxwYXJhbUV4cHI6Y1szXXx8bnVsbH19ZnVuY3Rpb24gQihhKXt2YXIgYj1hLnBhcmVudCgpLmluaGVyaXRlZERhdGEoXCIkdWlWaWV3XCIpO3JldHVybiBiJiZiLnN0YXRlJiZiLnN0YXRlLm5hbWU/Yi5zdGF0ZTp2b2lkIDB9ZnVuY3Rpb24gQyhhLGMpe3ZhciBkPVtcImxvY2F0aW9uXCIsXCJpbmhlcml0XCIsXCJyZWxvYWRcIl07cmV0dXJue3Jlc3RyaWN0OlwiQVwiLHJlcXVpcmU6W1wiP151aVNyZWZBY3RpdmVcIixcIj9edWlTcmVmQWN0aXZlRXFcIl0sbGluazpmdW5jdGlvbihlLGYsZyxoKXt2YXIgaT1BKGcudWlTcmVmLGEuY3VycmVudC5uYW1lKSxqPW51bGwsaz1CKGYpfHxhLiRjdXJyZW50LGw9bnVsbCxtPVwiQVwiPT09Zi5wcm9wKFwidGFnTmFtZVwiKSxuPVwiRk9STVwiPT09ZlswXS5ub2RlTmFtZSxvPW4/XCJhY3Rpb25cIjpcImhyZWZcIixwPSEwLHE9e3JlbGF0aXZlOmssaW5oZXJpdDohMH0scj1lLiRldmFsKGcudWlTcmVmT3B0cyl8fHt9O2IuZm9yRWFjaChkLGZ1bmN0aW9uKGEpe2EgaW4gciYmKHFbYV09clthXSl9KTt2YXIgcz1mdW5jdGlvbihjKXtpZihjJiYoaj1iLmNvcHkoYykpLHApe2w9YS5ocmVmKGkuc3RhdGUsaixxKTt2YXIgZD1oWzFdfHxoWzBdO3JldHVybiBkJiZkLiQkc2V0U3RhdGVJbmZvKGkuc3RhdGUsaiksbnVsbD09PWw/KHA9ITEsITEpOnZvaWQgZy4kc2V0KG8sbCl9fTtpLnBhcmFtRXhwciYmKGUuJHdhdGNoKGkucGFyYW1FeHByLGZ1bmN0aW9uKGEpe2EhPT1qJiZzKGEpfSwhMCksaj1iLmNvcHkoZS4kZXZhbChpLnBhcmFtRXhwcikpKSxzKCksbnx8Zi5iaW5kKFwiY2xpY2tcIixmdW5jdGlvbihiKXt2YXIgZD1iLndoaWNofHxiLmJ1dHRvbjtpZighKGQ+MXx8Yi5jdHJsS2V5fHxiLm1ldGFLZXl8fGIuc2hpZnRLZXl8fGYuYXR0cihcInRhcmdldFwiKSkpe3ZhciBlPWMoZnVuY3Rpb24oKXthLmdvKGkuc3RhdGUsaixxKX0pO2IucHJldmVudERlZmF1bHQoKTt2YXIgZz1tJiYhbD8xOjA7Yi5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2ctLTw9MCYmYy5jYW5jZWwoZSl9fX0pfX19ZnVuY3Rpb24gRChhLGIsYyl7cmV0dXJue3Jlc3RyaWN0OlwiQVwiLGNvbnRyb2xsZXI6W1wiJHNjb3BlXCIsXCIkZWxlbWVudFwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYixkLGUpe2Z1bmN0aW9uIGYoKXtnKCk/ZC5hZGRDbGFzcyhqKTpkLnJlbW92ZUNsYXNzKGopfWZ1bmN0aW9uIGcoKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZS51aVNyZWZBY3RpdmVFcT9oJiZhLmlzKGgubmFtZSxpKTpoJiZhLmluY2x1ZGVzKGgubmFtZSxpKX12YXIgaCxpLGo7aj1jKGUudWlTcmVmQWN0aXZlRXF8fGUudWlTcmVmQWN0aXZlfHxcIlwiLCExKShiKSx0aGlzLiQkc2V0U3RhdGVJbmZvPWZ1bmN0aW9uKGIsYyl7aD1hLmdldChiLEIoZCkpLGk9YyxmKCl9LGIuJG9uKFwiJHN0YXRlQ2hhbmdlU3VjY2Vzc1wiLGYpfV19fWZ1bmN0aW9uIEUoYSl7dmFyIGI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaXMoYil9O3JldHVybiBiLiRzdGF0ZWZ1bD0hMCxifWZ1bmN0aW9uIEYoYSl7dmFyIGI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaW5jbHVkZXMoYil9O3JldHVybiBiLiRzdGF0ZWZ1bD0hMCxifXZhciBHPWIuaXNEZWZpbmVkLEg9Yi5pc0Z1bmN0aW9uLEk9Yi5pc1N0cmluZyxKPWIuaXNPYmplY3QsSz1iLmlzQXJyYXksTD1iLmZvckVhY2gsTT1iLmV4dGVuZCxOPWIuY29weTtiLm1vZHVsZShcInVpLnJvdXRlci51dGlsXCIsW1wibmdcIl0pLGIubW9kdWxlKFwidWkucm91dGVyLnJvdXRlclwiLFtcInVpLnJvdXRlci51dGlsXCJdKSxiLm1vZHVsZShcInVpLnJvdXRlci5zdGF0ZVwiLFtcInVpLnJvdXRlci5yb3V0ZXJcIixcInVpLnJvdXRlci51dGlsXCJdKSxiLm1vZHVsZShcInVpLnJvdXRlclwiLFtcInVpLnJvdXRlci5zdGF0ZVwiXSksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuY29tcGF0XCIsW1widWkucm91dGVyXCJdKSxvLiRpbmplY3Q9W1wiJHFcIixcIiRpbmplY3RvclwiXSxiLm1vZHVsZShcInVpLnJvdXRlci51dGlsXCIpLnNlcnZpY2UoXCIkcmVzb2x2ZVwiLG8pLHAuJGluamVjdD1bXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRpbmplY3RvclwiXSxiLm1vZHVsZShcInVpLnJvdXRlci51dGlsXCIpLnNlcnZpY2UoXCIkdGVtcGxhdGVGYWN0b3J5XCIscCk7dmFyIE87cS5wcm90b3R5cGUuY29uY2F0PWZ1bmN0aW9uKGEsYil7dmFyIGM9e2Nhc2VJbnNlbnNpdGl2ZTpPLmNhc2VJbnNlbnNpdGl2ZSgpLHN0cmljdDpPLnN0cmljdE1vZGUoKSxzcXVhc2g6Ty5kZWZhdWx0U3F1YXNoUG9saWN5KCl9O3JldHVybiBuZXcgcSh0aGlzLnNvdXJjZVBhdGgrYSt0aGlzLnNvdXJjZVNlYXJjaCxNKGMsYiksdGhpcyl9LHEucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc291cmNlfSxxLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBhLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxcXC0vLFwiLVwiKX12YXIgZD1iKGEpLnNwbGl0KC8tKD8hXFxcXCkvKSxlPW4oZCxiKTtyZXR1cm4gbihlLGMpLnJldmVyc2UoKX12YXIgZD10aGlzLnJlZ2V4cC5leGVjKGEpO2lmKCFkKXJldHVybiBudWxsO2I9Ynx8e307dmFyIGUsZixnLGg9dGhpcy5wYXJhbWV0ZXJzKCksaT1oLmxlbmd0aCxqPXRoaXMuc2VnbWVudHMubGVuZ3RoLTEsaz17fTtpZihqIT09ZC5sZW5ndGgtMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmJhbGFuY2VkIGNhcHR1cmUgZ3JvdXAgaW4gcm91dGUgJ1wiK3RoaXMuc291cmNlK1wiJ1wiKTtmb3IoZT0wO2o+ZTtlKyspe2c9aFtlXTt2YXIgbD10aGlzLnBhcmFtc1tnXSxtPWRbZSsxXTtmb3IoZj0wO2Y8bC5yZXBsYWNlO2YrKylsLnJlcGxhY2VbZl0uZnJvbT09PW0mJihtPWwucmVwbGFjZVtmXS50byk7bSYmbC5hcnJheT09PSEwJiYobT1jKG0pKSxrW2ddPWwudmFsdWUobSl9Zm9yKDtpPmU7ZSsrKWc9aFtlXSxrW2ddPXRoaXMucGFyYW1zW2ddLnZhbHVlKGJbZ10pO3JldHVybiBrfSxxLnByb3RvdHlwZS5wYXJhbWV0ZXJzPWZ1bmN0aW9uKGEpe3JldHVybiBHKGEpP3RoaXMucGFyYW1zW2FdfHxudWxsOnRoaXMuJCRwYXJhbU5hbWVzfSxxLnByb3RvdHlwZS52YWxpZGF0ZXM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyYW1zLiQkdmFsaWRhdGVzKGEpfSxxLnByb3RvdHlwZS5mb3JtYXQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGEpLnJlcGxhY2UoLy0vZyxmdW5jdGlvbihhKXtyZXR1cm5cIiU1QyVcIithLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KX1hPWF8fHt9O3ZhciBjPXRoaXMuc2VnbWVudHMsZD10aGlzLnBhcmFtZXRlcnMoKSxlPXRoaXMucGFyYW1zO2lmKCF0aGlzLnZhbGlkYXRlcyhhKSlyZXR1cm4gbnVsbDt2YXIgZixnPSExLGg9Yy5sZW5ndGgtMSxpPWQubGVuZ3RoLGo9Y1swXTtmb3IoZj0wO2k+ZjtmKyspe3ZhciBrPWg+ZixsPWRbZl0sbT1lW2xdLG89bS52YWx1ZShhW2xdKSxwPW0uaXNPcHRpb25hbCYmbS50eXBlLmVxdWFscyhtLnZhbHVlKCksbykscT1wP20uc3F1YXNoOiExLHI9bS50eXBlLmVuY29kZShvKTtpZihrKXt2YXIgcz1jW2YrMV07aWYocT09PSExKW51bGwhPXImJihqKz1LKHIpP24ocixiKS5qb2luKFwiLVwiKTplbmNvZGVVUklDb21wb25lbnQocikpLGorPXM7ZWxzZSBpZihxPT09ITApe3ZhciB0PWoubWF0Y2goL1xcLyQvKT8vXFwvPyguKikvOi8oLiopLztqKz1zLm1hdGNoKHQpWzFdfWVsc2UgSShxKSYmKGorPXErcyl9ZWxzZXtpZihudWxsPT1yfHxwJiZxIT09ITEpY29udGludWU7SyhyKXx8KHI9W3JdKSxyPW4ocixlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oXCImXCIrbCtcIj1cIiksais9KGc/XCImXCI6XCI/XCIpKyhsK1wiPVwiK3IpLGc9ITB9fXJldHVybiBqfSxyLnByb3RvdHlwZS5pcz1mdW5jdGlvbigpe3JldHVybiEwfSxyLnByb3RvdHlwZS5lbmNvZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHIucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbihhKXtyZXR1cm4gYX0sci5wcm90b3R5cGUuZXF1YWxzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PWJ9LHIucHJvdG90eXBlLiRzdWJQYXR0ZXJuPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5wYXR0ZXJuLnRvU3RyaW5nKCk7cmV0dXJuIGEuc3Vic3RyKDEsYS5sZW5ndGgtMil9LHIucHJvdG90eXBlLnBhdHRlcm49Ly4qLyxyLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwie1R5cGU6XCIrdGhpcy5uYW1lK1wifVwifSxyLnByb3RvdHlwZS4kYXNBcnJheT1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGQoYSxiKXtmdW5jdGlvbiBkKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGFbYl0uYXBwbHkoYSxhcmd1bWVudHMpfX1mdW5jdGlvbiBlKGEpe3JldHVybiBLKGEpP2E6RyhhKT9bYV06W119ZnVuY3Rpb24gZihhKXtzd2l0Y2goYS5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gYztjYXNlIDE6cmV0dXJuXCJhdXRvXCI9PT1iP2FbMF06YTtkZWZhdWx0OnJldHVybiBhfX1mdW5jdGlvbiBnKGEpe3JldHVybiFhfWZ1bmN0aW9uIGgoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Yz1lKGMpO3ZhciBkPW4oYyxhKTtyZXR1cm4gYj09PSEwPzA9PT1tKGQsZykubGVuZ3RoOmYoZCl9fWZ1bmN0aW9uIGkoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7dmFyIGQ9ZShiKSxmPWUoYyk7aWYoZC5sZW5ndGghPT1mLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIGc9MDtnPGQubGVuZ3RoO2crKylpZighYShkW2ddLGZbZ10pKXJldHVybiExO3JldHVybiEwfX10aGlzLmVuY29kZT1oKGQoYSxcImVuY29kZVwiKSksdGhpcy5kZWNvZGU9aChkKGEsXCJkZWNvZGVcIikpLHRoaXMuaXM9aChkKGEsXCJpc1wiKSwhMCksdGhpcy5lcXVhbHM9aShkKGEsXCJlcXVhbHNcIikpLHRoaXMucGF0dGVybj1hLnBhdHRlcm4sdGhpcy4kYXJyYXlNb2RlPWJ9aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJhdXRvXCI9PT1hJiYhYil0aHJvdyBuZXcgRXJyb3IoXCInYXV0bycgYXJyYXkgbW9kZSBpcyBmb3IgcXVlcnkgcGFyYW1ldGVycyBvbmx5XCIpO3JldHVybiBuZXcgZCh0aGlzLGEpfSxiLm1vZHVsZShcInVpLnJvdXRlci51dGlsXCIpLnByb3ZpZGVyKFwiJHVybE1hdGNoZXJGYWN0b3J5XCIscyksYi5tb2R1bGUoXCJ1aS5yb3V0ZXIudXRpbFwiKS5ydW4oW1wiJHVybE1hdGNoZXJGYWN0b3J5XCIsZnVuY3Rpb24oKXt9XSksdC4kaW5qZWN0PVtcIiRsb2NhdGlvblByb3ZpZGVyXCIsXCIkdXJsTWF0Y2hlckZhY3RvcnlQcm92aWRlclwiXSxiLm1vZHVsZShcInVpLnJvdXRlci5yb3V0ZXJcIikucHJvdmlkZXIoXCIkdXJsUm91dGVyXCIsdCksdS4kaW5qZWN0PVtcIiR1cmxSb3V0ZXJQcm92aWRlclwiLFwiJHVybE1hdGNoZXJGYWN0b3J5UHJvdmlkZXJcIl0sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikudmFsdWUoXCIkc3RhdGVQYXJhbXNcIix7fSkucHJvdmlkZXIoXCIkc3RhdGVcIix1KSx2LiRpbmplY3Q9W10sYi5tb2R1bGUoXCJ1aS5yb3V0ZXIuc3RhdGVcIikucHJvdmlkZXIoXCIkdmlld1wiLHYpLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLnByb3ZpZGVyKFwiJHVpVmlld1Njcm9sbFwiLHcpLHguJGluamVjdD1bXCIkc3RhdGVcIixcIiRpbmplY3RvclwiLFwiJHVpVmlld1Njcm9sbFwiLFwiJGludGVycG9sYXRlXCJdLHkuJGluamVjdD1bXCIkY29tcGlsZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRzdGF0ZVwiLFwiJGludGVycG9sYXRlXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLmRpcmVjdGl2ZShcInVpVmlld1wiLHgpLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLmRpcmVjdGl2ZShcInVpVmlld1wiLHkpLEMuJGluamVjdD1bXCIkc3RhdGVcIixcIiR0aW1lb3V0XCJdLEQuJGluamVjdD1bXCIkc3RhdGVcIixcIiRzdGF0ZVBhcmFtc1wiLFwiJGludGVycG9sYXRlXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLmRpcmVjdGl2ZShcInVpU3JlZlwiLEMpLmRpcmVjdGl2ZShcInVpU3JlZkFjdGl2ZVwiLEQpLmRpcmVjdGl2ZShcInVpU3JlZkFjdGl2ZUVxXCIsRCksRS4kaW5qZWN0PVtcIiRzdGF0ZVwiXSxGLiRpbmplY3Q9W1wiJHN0YXRlXCJdLGIubW9kdWxlKFwidWkucm91dGVyLnN0YXRlXCIpLmZpbHRlcihcImlzU3RhdGVcIixFKS5maWx0ZXIoXCJpbmNsdWRlZEJ5U3RhdGVcIixGKX0od2luZG93LHdpbmRvdy5hbmd1bGFyKTsiLCIvKlxuIEFuZ3VsYXJKUyB2MS4yLjI4XG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oVyxYLHUpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB6KGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXSxjLGE9XCJbXCIrKGI/YitcIjpcIjpcIlwiKSthK1wiXSBodHRwOi8vZXJyb3JzLmFuZ3VsYXJqcy5vcmcvMS4yLjI4L1wiKyhiP2IrXCIvXCI6XCJcIikrYTtmb3IoYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYT1hKygxPT1jP1wiP1wiOlwiJlwiKStcInBcIisoYy0xKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgYXJndW1lbnRzW2NdP2FyZ3VtZW50c1tjXS50b1N0cmluZygpLnJlcGxhY2UoLyBcXHtbXFxzXFxTXSokLyxcIlwiKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgYXJndW1lbnRzW2NdP1widW5kZWZpbmVkXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGFyZ3VtZW50c1tjXT9KU09OLnN0cmluZ2lmeShhcmd1bWVudHNbY10pOmFyZ3VtZW50c1tjXSk7cmV0dXJuIEVycm9yKGEpfX1mdW5jdGlvbiBTYShiKXtpZihudWxsPT1ifHxKYShiKSlyZXR1cm4hMTtcbnZhciBhPWIubGVuZ3RoO3JldHVybiAxPT09Yi5ub2RlVHlwZSYmYT8hMDpHKGIpfHxMKGIpfHwwPT09YXx8XCJudW1iZXJcIj09PXR5cGVvZiBhJiYwPGEmJmEtMSBpbiBifWZ1bmN0aW9uIHIoYixhLGMpe3ZhciBkO2lmKGIpaWYoTihiKSlmb3IoZCBpbiBiKVwicHJvdG90eXBlXCI9PWR8fChcImxlbmd0aFwiPT1kfHxcIm5hbWVcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCkpfHxhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgaWYoTChiKXx8U2EoYikpZm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgaWYoYi5mb3JFYWNoJiZiLmZvckVhY2ghPT1yKWIuZm9yRWFjaChhLGMpO2Vsc2UgZm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZhLmNhbGwoYyxiW2RdLGQpO3JldHVybiBifWZ1bmN0aW9uIFhiKGIpe3ZhciBhPVtdLGM7Zm9yKGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZhLnB1c2goYyk7cmV0dXJuIGEuc29ydCgpfWZ1bmN0aW9uIFNjKGIsXG5hLGMpe2Zvcih2YXIgZD1YYihiKSxlPTA7ZTxkLmxlbmd0aDtlKyspYS5jYWxsKGMsYltkW2VdXSxkW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBZYihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiKGMsYSl9fWZ1bmN0aW9uIGliKCl7Zm9yKHZhciBiPW5hLmxlbmd0aCxhO2I7KXtiLS07YT1uYVtiXS5jaGFyQ29kZUF0KDApO2lmKDU3PT1hKXJldHVybiBuYVtiXT1cIkFcIixuYS5qb2luKFwiXCIpO2lmKDkwPT1hKW5hW2JdPVwiMFwiO2Vsc2UgcmV0dXJuIG5hW2JdPVN0cmluZy5mcm9tQ2hhckNvZGUoYSsxKSxuYS5qb2luKFwiXCIpfW5hLnVuc2hpZnQoXCIwXCIpO3JldHVybiBuYS5qb2luKFwiXCIpfWZ1bmN0aW9uIFpiKGIsYSl7YT9iLiQkaGFzaEtleT1hOmRlbGV0ZSBiLiQkaGFzaEtleX1mdW5jdGlvbiBFKGIpe3ZhciBhPWIuJCRoYXNoS2V5O3IoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2EhPT1iJiZyKGEsZnVuY3Rpb24oYSxjKXtiW2NdPWF9KX0pO1piKGIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVShiKXtyZXR1cm4gcGFyc2VJbnQoYixcbjEwKX1mdW5jdGlvbiAkYihiLGEpe3JldHVybiBFKG5ldyAoRShmdW5jdGlvbigpe30se3Byb3RvdHlwZTpifSkpLGEpfWZ1bmN0aW9uIHYoKXt9ZnVuY3Rpb24gZ2EoYil7cmV0dXJuIGJ9ZnVuY3Rpb24gYWEoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGJ9fWZ1bmN0aW9uIEYoYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEQoYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBifWZ1bmN0aW9uIFQoYil7cmV0dXJuIG51bGwhPWImJlwib2JqZWN0XCI9PT10eXBlb2YgYn1mdW5jdGlvbiBHKGIpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYn1mdW5jdGlvbiBqYihiKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gdmEoYil7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT1CYS5jYWxsKGIpfWZ1bmN0aW9uIE4oYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24ga2IoYil7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PUJhLmNhbGwoYil9XG5mdW5jdGlvbiBKYShiKXtyZXR1cm4gYiYmYi5kb2N1bWVudCYmYi5sb2NhdGlvbiYmYi5hbGVydCYmYi5zZXRJbnRlcnZhbH1mdW5jdGlvbiBUYyhiKXtyZXR1cm4hKCFifHwhKGIubm9kZU5hbWV8fGIucHJvcCYmYi5hdHRyJiZiLmZpbmQpKX1mdW5jdGlvbiBVYyhiLGEsYyl7dmFyIGQ9W107cihiLGZ1bmN0aW9uKGIsZixnKXtkLnB1c2goYS5jYWxsKGMsYixmLGcpKX0pO3JldHVybiBkfWZ1bmN0aW9uIFRhKGIsYSl7aWYoYi5pbmRleE9mKXJldHVybiBiLmluZGV4T2YoYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspaWYoYT09PWJbY10pcmV0dXJuIGM7cmV0dXJuLTF9ZnVuY3Rpb24gVWEoYixhKXt2YXIgYz1UYShiLGEpOzA8PWMmJmIuc3BsaWNlKGMsMSk7cmV0dXJuIGF9ZnVuY3Rpb24gS2EoYixhLGMsZCl7aWYoSmEoYil8fGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2gpdGhyb3cgVmEoXCJjcHdzXCIpO2lmKGEpe2lmKGI9PT1hKXRocm93IFZhKFwiY3BpXCIpO2M9Y3x8W107XG5kPWR8fFtdO2lmKFQoYikpe3ZhciBlPVRhKGMsYik7aWYoLTEhPT1lKXJldHVybiBkW2VdO2MucHVzaChiKTtkLnB1c2goYSl9aWYoTChiKSlmb3IodmFyIGY9YS5sZW5ndGg9MDtmPGIubGVuZ3RoO2YrKyllPUthKGJbZl0sbnVsbCxjLGQpLFQoYltmXSkmJihjLnB1c2goYltmXSksZC5wdXNoKGUpKSxhLnB1c2goZSk7ZWxzZXt2YXIgZz1hLiQkaGFzaEtleTtMKGEpP2EubGVuZ3RoPTA6cihhLGZ1bmN0aW9uKGIsYyl7ZGVsZXRlIGFbY119KTtmb3IoZiBpbiBiKWU9S2EoYltmXSxudWxsLGMsZCksVChiW2ZdKSYmKGMucHVzaChiW2ZdKSxkLnB1c2goZSkpLGFbZl09ZTtaYihhLGcpfX1lbHNlIGlmKGE9YilMKGIpP2E9S2EoYixbXSxjLGQpOnZhKGIpP2E9bmV3IERhdGUoYi5nZXRUaW1lKCkpOmtiKGIpPyhhPVJlZ0V4cChiLnNvdXJjZSxiLnRvU3RyaW5nKCkubWF0Y2goL1teXFwvXSokLylbMF0pLGEubGFzdEluZGV4PWIubGFzdEluZGV4KTpUKGIpJiYoYT1LYShiLHt9LGMsZCkpO1xucmV0dXJuIGF9ZnVuY3Rpb24gaGEoYixhKXtpZihMKGIpKXthPWF8fFtdO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKWFbY109YltjXX1lbHNlIGlmKFQoYikpZm9yKGMgaW4gYT1hfHx7fSxiKSFsYi5jYWxsKGIsYyl8fFwiJFwiPT09Yy5jaGFyQXQoMCkmJlwiJFwiPT09Yy5jaGFyQXQoMSl8fChhW2NdPWJbY10pO3JldHVybiBhfHxifWZ1bmN0aW9uIENhKGIsYSl7aWYoYj09PWEpcmV0dXJuITA7aWYobnVsbD09PWJ8fG51bGw9PT1hKXJldHVybiExO2lmKGIhPT1iJiZhIT09YSlyZXR1cm4hMDt2YXIgYz10eXBlb2YgYixkO2lmKGM9PXR5cGVvZiBhJiZcIm9iamVjdFwiPT1jKWlmKEwoYikpe2lmKCFMKGEpKXJldHVybiExO2lmKChjPWIubGVuZ3RoKT09YS5sZW5ndGgpe2ZvcihkPTA7ZDxjO2QrKylpZighQ2EoYltkXSxhW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH19ZWxzZXtpZih2YShiKSlyZXR1cm4gdmEoYSk/aXNOYU4oYi5nZXRUaW1lKCkpJiZpc05hTihhLmdldFRpbWUoKSl8fGIuZ2V0VGltZSgpPT09XG5hLmdldFRpbWUoKTohMTtpZihrYihiKSYma2IoYSkpcmV0dXJuIGIudG9TdHJpbmcoKT09YS50b1N0cmluZygpO2lmKGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2h8fGEmJmEuJGV2YWxBc3luYyYmYS4kd2F0Y2h8fEphKGIpfHxKYShhKXx8TChhKSlyZXR1cm4hMTtjPXt9O2ZvcihkIGluIGIpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmIU4oYltkXSkpe2lmKCFDYShiW2RdLGFbZF0pKXJldHVybiExO2NbZF09ITB9Zm9yKGQgaW4gYSlpZighYy5oYXNPd25Qcm9wZXJ0eShkKSYmXCIkXCIhPT1kLmNoYXJBdCgwKSYmYVtkXSE9PXUmJiFOKGFbZF0pKXJldHVybiExO3JldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIEJiKGIsYSl7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoP3dhLmNhbGwoYXJndW1lbnRzLDIpOltdO3JldHVybiFOKGEpfHxhIGluc3RhbmNlb2YgUmVnRXhwP2E6Yy5sZW5ndGg/ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYy5jb25jYXQod2EuY2FsbChhcmd1bWVudHMsXG4wKSkpOmEuYXBwbHkoYixjKX06ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9hLmFwcGx5KGIsYXJndW1lbnRzKTphLmNhbGwoYil9fWZ1bmN0aW9uIFZjKGIsYSl7dmFyIGM9YTtcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiJFwiPT09Yi5jaGFyQXQoMCk/Yz11OkphKGEpP2M9XCIkV0lORE9XXCI6YSYmWD09PWE/Yz1cIiRET0NVTUVOVFwiOmEmJihhLiRldmFsQXN5bmMmJmEuJHdhdGNoKSYmKGM9XCIkU0NPUEVcIik7cmV0dXJuIGN9ZnVuY3Rpb24gb2EoYixhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGI/dTpKU09OLnN0cmluZ2lmeShiLFZjLGE/XCIgIFwiOm51bGwpfWZ1bmN0aW9uIGFjKGIpe3JldHVybiBHKGIpP0pTT04ucGFyc2UoYik6Yn1mdW5jdGlvbiBXYShiKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iPSEwOmImJjAhPT1iLmxlbmd0aD8oYj14KFwiXCIrYiksYj0hKFwiZlwiPT1ifHxcIjBcIj09Ynx8XCJmYWxzZVwiPT1ifHxcIm5vXCI9PWJ8fFwiblwiPT1ifHxcIltdXCI9PWIpKTpiPSExO1xucmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYil7Yj1BKGIpLmNsb25lKCk7dHJ5e2IuZW1wdHkoKX1jYXRjaChhKXt9dmFyIGM9QShcIjxkaXY+XCIpLmFwcGVuZChiKS5odG1sKCk7dHJ5e3JldHVybiAzPT09YlswXS5ub2RlVHlwZT94KGMpOmMubWF0Y2goL14oPFtePl0rPikvKVsxXS5yZXBsYWNlKC9ePChbXFx3XFwtXSspLyxmdW5jdGlvbihhLGIpe3JldHVyblwiPFwiK3goYil9KX1jYXRjaChkKXtyZXR1cm4geChjKX19ZnVuY3Rpb24gYmMoYil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoYil9Y2F0Y2goYSl7fX1mdW5jdGlvbiBjYyhiKXt2YXIgYT17fSxjLGQ7cigoYnx8XCJcIikuc3BsaXQoXCImXCIpLGZ1bmN0aW9uKGIpe2ImJihjPWIucmVwbGFjZSgvXFwrL2csXCIlMjBcIikuc3BsaXQoXCI9XCIpLGQ9YmMoY1swXSksRChkKSYmKGI9RChjWzFdKT9iYyhjWzFdKTohMCxsYi5jYWxsKGEsZCk/TChhW2RdKT9hW2RdLnB1c2goYik6YVtkXT1bYVtkXSxiXTphW2RdPWIpKX0pO3JldHVybiBhfWZ1bmN0aW9uIENiKGIpe3ZhciBhPVxuW107cihiLGZ1bmN0aW9uKGIsZCl7TChiKT9yKGIsZnVuY3Rpb24oYil7YS5wdXNoKERhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIitEYShiLCEwKSkpfSk6YS5wdXNoKERhKGQsITApKyghMD09PWI/XCJcIjpcIj1cIitEYShiLCEwKSkpfSk7cmV0dXJuIGEubGVuZ3RoP2Euam9pbihcIiZcIik6XCJcIn1mdW5jdGlvbiBtYihiKXtyZXR1cm4gRGEoYiwhMCkucmVwbGFjZSgvJTI2L2dpLFwiJlwiKS5yZXBsYWNlKC8lM0QvZ2ksXCI9XCIpLnJlcGxhY2UoLyUyQi9naSxcIitcIil9ZnVuY3Rpb24gRGEoYixhKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGIpLnJlcGxhY2UoLyU0MC9naSxcIkBcIikucmVwbGFjZSgvJTNBL2dpLFwiOlwiKS5yZXBsYWNlKC8lMjQvZyxcIiRcIikucmVwbGFjZSgvJTJDL2dpLFwiLFwiKS5yZXBsYWNlKC8lMjAvZyxhP1wiJTIwXCI6XCIrXCIpfWZ1bmN0aW9uIFdjKGIsYSl7ZnVuY3Rpb24gYyhhKXthJiZkLnB1c2goYSl9dmFyIGQ9W2JdLGUsZixnPVtcIm5nOmFwcFwiLFwibmctYXBwXCIsXCJ4LW5nLWFwcFwiLFxuXCJkYXRhLW5nLWFwcFwiXSxoPS9cXHNuZ1s6XFwtXWFwcCg6XFxzKihbXFx3XFxkX10rKTs/KT9cXHMvO3IoZyxmdW5jdGlvbihhKXtnW2FdPSEwO2MoWC5nZXRFbGVtZW50QnlJZChhKSk7YT1hLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKTtiLnF1ZXJ5U2VsZWN0b3JBbGwmJihyKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIithKSxjKSxyKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIithK1wiXFxcXDpcIiksYykscihiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbXCIrYStcIl1cIiksYykpfSk7cihkLGZ1bmN0aW9uKGEpe2lmKCFlKXt2YXIgYj1oLmV4ZWMoXCIgXCIrYS5jbGFzc05hbWUrXCIgXCIpO2I/KGU9YSxmPShiWzJdfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIsXCIpKTpyKGEuYXR0cmlidXRlcyxmdW5jdGlvbihiKXshZSYmZ1tiLm5hbWVdJiYoZT1hLGY9Yi52YWx1ZSl9KX19KTtlJiZhKGUsZj9bZl06W10pfWZ1bmN0aW9uIGRjKGIsYSl7dmFyIGM9ZnVuY3Rpb24oKXtiPUEoYik7aWYoYi5pbmplY3RvcigpKXt2YXIgYz1iWzBdPT09WD9cblwiZG9jdW1lbnRcIjppYShiKTt0aHJvdyBWYShcImJ0c3RycGRcIixjLnJlcGxhY2UoLzwvLFwiJmx0O1wiKS5yZXBsYWNlKC8+LyxcIiZndDtcIikpO31hPWF8fFtdO2EudW5zaGlmdChbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EudmFsdWUoXCIkcm9vdEVsZW1lbnRcIixiKX1dKTthLnVuc2hpZnQoXCJuZ1wiKTtjPWVjKGEpO2MuaW52b2tlKFtcIiRyb290U2NvcGVcIixcIiRyb290RWxlbWVudFwiLFwiJGNvbXBpbGVcIixcIiRpbmplY3RvclwiLFwiJGFuaW1hdGVcIixmdW5jdGlvbihhLGIsYyxkLGUpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFwiJGluamVjdG9yXCIsZCk7YyhiKShhKX0pfV0pO3JldHVybiBjfSxkPS9eTkdfREVGRVJfQk9PVFNUUkFQIS87aWYoVyYmIWQudGVzdChXLm5hbWUpKXJldHVybiBjKCk7Vy5uYW1lPVcubmFtZS5yZXBsYWNlKGQsXCJcIik7WGEucmVzdW1lQm9vdHN0cmFwPWZ1bmN0aW9uKGIpe3IoYixmdW5jdGlvbihiKXthLnB1c2goYil9KTtjKCl9fWZ1bmN0aW9uIG5iKGIsYSl7YT1cbmF8fFwiX1wiO3JldHVybiBiLnJlcGxhY2UoWGMsZnVuY3Rpb24oYixkKXtyZXR1cm4oZD9hOlwiXCIpK2IudG9Mb3dlckNhc2UoKX0pfWZ1bmN0aW9uIERiKGIsYSxjKXtpZighYil0aHJvdyBWYShcImFyZXFcIixhfHxcIj9cIixjfHxcInJlcXVpcmVkXCIpO3JldHVybiBifWZ1bmN0aW9uIFlhKGIsYSxjKXtjJiZMKGIpJiYoYj1iW2IubGVuZ3RoLTFdKTtEYihOKGIpLGEsXCJub3QgYSBmdW5jdGlvbiwgZ290IFwiKyhiJiZcIm9iamVjdFwiPT09dHlwZW9mIGI/Yi5jb25zdHJ1Y3Rvci5uYW1lfHxcIk9iamVjdFwiOnR5cGVvZiBiKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gRWEoYixhKXtpZihcImhhc093blByb3BlcnR5XCI9PT1iKXRocm93IFZhKFwiYmFkbmFtZVwiLGEpO31mdW5jdGlvbiBmYyhiLGEsYyl7aWYoIWEpcmV0dXJuIGI7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQsZT1iLGY9YS5sZW5ndGgsZz0wO2c8ZjtnKyspZD1hW2ddLGImJihiPShlPWIpW2RdKTtyZXR1cm4hYyYmTihiKT9CYihlLGIpOmJ9ZnVuY3Rpb24gRWIoYil7dmFyIGE9XG5iWzBdO2I9YltiLmxlbmd0aC0xXTtpZihhPT09YilyZXR1cm4gQShhKTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09Yik7cmV0dXJuIEEoYyl9ZnVuY3Rpb24gWWMoYil7dmFyIGE9eihcIiRpbmplY3RvclwiKSxjPXooXCJuZ1wiKTtiPWIuYW5ndWxhcnx8KGIuYW5ndWxhcj17fSk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHx6O3JldHVybiBiLm1vZHVsZXx8KGIubW9kdWxlPWZ1bmN0aW9uKCl7dmFyIGI9e307cmV0dXJuIGZ1bmN0aW9uKGUsZixnKXtpZihcImhhc093blByb3BlcnR5XCI9PT1lKXRocm93IGMoXCJiYWRuYW1lXCIsXCJtb2R1bGVcIik7ZiYmYi5oYXNPd25Qcm9wZXJ0eShlKSYmKGJbZV09bnVsbCk7cmV0dXJuIGJbZV18fChiW2VdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7Y1tlfHxcInB1c2hcIl0oW2EsZCxhcmd1bWVudHNdKTtyZXR1cm4gbn19aWYoIWYpdGhyb3cgYShcIm5vbW9kXCIsXG5lKTt2YXIgYz1bXSxkPVtdLGw9YihcIiRpbmplY3RvclwiLFwiaW52b2tlXCIpLG49e19pbnZva2VRdWV1ZTpjLF9ydW5CbG9ja3M6ZCxyZXF1aXJlczpmLG5hbWU6ZSxwcm92aWRlcjpiKFwiJHByb3ZpZGVcIixcInByb3ZpZGVyXCIpLGZhY3Rvcnk6YihcIiRwcm92aWRlXCIsXCJmYWN0b3J5XCIpLHNlcnZpY2U6YihcIiRwcm92aWRlXCIsXCJzZXJ2aWNlXCIpLHZhbHVlOmIoXCIkcHJvdmlkZVwiLFwidmFsdWVcIiksY29uc3RhbnQ6YihcIiRwcm92aWRlXCIsXCJjb25zdGFudFwiLFwidW5zaGlmdFwiKSxhbmltYXRpb246YihcIiRhbmltYXRlUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGZpbHRlcjpiKFwiJGZpbHRlclByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxjb250cm9sbGVyOmIoXCIkY29udHJvbGxlclByb3ZpZGVyXCIsXCJyZWdpc3RlclwiKSxkaXJlY3RpdmU6YihcIiRjb21waWxlUHJvdmlkZXJcIixcImRpcmVjdGl2ZVwiKSxjb25maWc6bCxydW46ZnVuY3Rpb24oYSl7ZC5wdXNoKGEpO3JldHVybiB0aGlzfX07ZyYmbChnKTtyZXR1cm4gbn0oKSl9fSgpKX1cbmZ1bmN0aW9uIFpjKGIpe0UoYix7Ym9vdHN0cmFwOmRjLGNvcHk6S2EsZXh0ZW5kOkUsZXF1YWxzOkNhLGVsZW1lbnQ6QSxmb3JFYWNoOnIsaW5qZWN0b3I6ZWMsbm9vcDp2LGJpbmQ6QmIsdG9Kc29uOm9hLGZyb21Kc29uOmFjLGlkZW50aXR5OmdhLGlzVW5kZWZpbmVkOkYsaXNEZWZpbmVkOkQsaXNTdHJpbmc6Ryxpc0Z1bmN0aW9uOk4saXNPYmplY3Q6VCxpc051bWJlcjpqYixpc0VsZW1lbnQ6VGMsaXNBcnJheTpMLHZlcnNpb246JGMsaXNEYXRlOnZhLGxvd2VyY2FzZTp4LHVwcGVyY2FzZTpMYSxjYWxsYmFja3M6e2NvdW50ZXI6MH0sJCRtaW5FcnI6eiwkJGNzcDpaYX0pOyRhPVljKFcpO3RyeXskYShcIm5nTG9jYWxlXCIpfWNhdGNoKGEpeyRhKFwibmdMb2NhbGVcIixbXSkucHJvdmlkZXIoXCIkbG9jYWxlXCIsYWQpfSRhKFwibmdcIixbXCJuZ0xvY2FsZVwiXSxbXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe2EucHJvdmlkZXIoeyQkc2FuaXRpemVVcmk6YmR9KTthLnByb3ZpZGVyKFwiJGNvbXBpbGVcIixcbmdjKS5kaXJlY3RpdmUoe2E6Y2QsaW5wdXQ6aGMsdGV4dGFyZWE6aGMsZm9ybTpkZCxzY3JpcHQ6ZWQsc2VsZWN0OmZkLHN0eWxlOmdkLG9wdGlvbjpoZCxuZ0JpbmQ6aWQsbmdCaW5kSHRtbDpqZCxuZ0JpbmRUZW1wbGF0ZTprZCxuZ0NsYXNzOmxkLG5nQ2xhc3NFdmVuOm1kLG5nQ2xhc3NPZGQ6bmQsbmdDbG9hazpvZCxuZ0NvbnRyb2xsZXI6cGQsbmdGb3JtOnFkLG5nSGlkZTpyZCxuZ0lmOnNkLG5nSW5jbHVkZTp0ZCxuZ0luaXQ6dWQsbmdOb25CaW5kYWJsZTp2ZCxuZ1BsdXJhbGl6ZTp3ZCxuZ1JlcGVhdDp4ZCxuZ1Nob3c6eWQsbmdTdHlsZTp6ZCxuZ1N3aXRjaDpBZCxuZ1N3aXRjaFdoZW46QmQsbmdTd2l0Y2hEZWZhdWx0OkNkLG5nT3B0aW9uczpEZCxuZ1RyYW5zY2x1ZGU6RWQsbmdNb2RlbDpGZCxuZ0xpc3Q6R2QsbmdDaGFuZ2U6SGQscmVxdWlyZWQ6aWMsbmdSZXF1aXJlZDppYyxuZ1ZhbHVlOklkfSkuZGlyZWN0aXZlKHtuZ0luY2x1ZGU6SmR9KS5kaXJlY3RpdmUoRmIpLmRpcmVjdGl2ZShqYyk7XG5hLnByb3ZpZGVyKHskYW5jaG9yU2Nyb2xsOktkLCRhbmltYXRlOkxkLCRicm93c2VyOk1kLCRjYWNoZUZhY3Rvcnk6TmQsJGNvbnRyb2xsZXI6T2QsJGRvY3VtZW50OlBkLCRleGNlcHRpb25IYW5kbGVyOlFkLCRmaWx0ZXI6a2MsJGludGVycG9sYXRlOlJkLCRpbnRlcnZhbDpTZCwkaHR0cDpUZCwkaHR0cEJhY2tlbmQ6VWQsJGxvY2F0aW9uOlZkLCRsb2c6V2QsJHBhcnNlOlhkLCRyb290U2NvcGU6WWQsJHE6WmQsJHNjZTokZCwkc2NlRGVsZWdhdGU6YWUsJHNuaWZmZXI6YmUsJHRlbXBsYXRlQ2FjaGU6Y2UsJHRpbWVvdXQ6ZGUsJHdpbmRvdzplZSwkJHJBRjpmZSwkJGFzeW5jQ2FsbGJhY2s6Z2V9KX1dKX1mdW5jdGlvbiBhYihiKXtyZXR1cm4gYi5yZXBsYWNlKGhlLGZ1bmN0aW9uKGEsYixkLGUpe3JldHVybiBlP2QudG9VcHBlckNhc2UoKTpkfSkucmVwbGFjZShpZSxcIk1veiQxXCIpfWZ1bmN0aW9uIEdiKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYil7dmFyIGU9YyYmYj9bdGhpcy5maWx0ZXIoYildOlxuW3RoaXNdLGs9YSxtLGwsbixxLHAscztpZighZHx8bnVsbCE9Yilmb3IoO2UubGVuZ3RoOylmb3IobT1lLnNoaWZ0KCksbD0wLG49bS5sZW5ndGg7bDxuO2wrKylmb3IocT1BKG1bbF0pLGs/cS50cmlnZ2VySGFuZGxlcihcIiRkZXN0cm95XCIpOms9IWsscD0wLHE9KHM9cS5jaGlsZHJlbigpKS5sZW5ndGg7cDxxO3ArKyllLnB1c2goRmEoc1twXSkpO3JldHVybiBmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZj1GYS5mbltiXSxmPWYuJG9yaWdpbmFsfHxmO2UuJG9yaWdpbmFsPWY7RmEuZm5bYl09ZX1mdW5jdGlvbiBTKGIpe2lmKGIgaW5zdGFuY2VvZiBTKXJldHVybiBiO0coYikmJihiPSQoYikpO2lmKCEodGhpcyBpbnN0YW5jZW9mIFMpKXtpZihHKGIpJiZcIjxcIiE9Yi5jaGFyQXQoMCkpdGhyb3cgSGIoXCJub3NlbFwiKTtyZXR1cm4gbmV3IFMoYil9aWYoRyhiKSl7dmFyIGE9YjtiPVg7dmFyIGM7aWYoYz1qZS5leGVjKGEpKWI9W2IuY3JlYXRlRWxlbWVudChjWzFdKV07ZWxzZXt2YXIgZD1cbmIsZTtiPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2M9W107aWYoSWIudGVzdChhKSl7ZD1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7ZT0oa2UuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCk7ZT1kYVtlXXx8ZGEuX2RlZmF1bHQ7ZC5pbm5lckhUTUw9XCI8ZGl2PiYjMTYwOzwvZGl2PlwiK2VbMV0rYS5yZXBsYWNlKGxlLFwiPCQxPjwvJDI+XCIpK2VbMl07ZC5yZW1vdmVDaGlsZChkLmZpcnN0Q2hpbGQpO2ZvcihhPWVbMF07YS0tOylkPWQubGFzdENoaWxkO2E9MDtmb3IoZT1kLmNoaWxkTm9kZXMubGVuZ3RoO2E8ZTsrK2EpYy5wdXNoKGQuY2hpbGROb2Rlc1thXSk7ZD1iLmZpcnN0Q2hpbGQ7ZC50ZXh0Q29udGVudD1cIlwifWVsc2UgYy5wdXNoKGQuY3JlYXRlVGV4dE5vZGUoYSkpO2IudGV4dENvbnRlbnQ9XCJcIjtiLmlubmVySFRNTD1cIlwiO2I9Y31KYih0aGlzLGIpO0EoWC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLmFwcGVuZCh0aGlzKX1lbHNlIEpiKHRoaXMsXG5iKX1mdW5jdGlvbiBLYihiKXtyZXR1cm4gYi5jbG9uZU5vZGUoITApfWZ1bmN0aW9uIE1hKGIpe0xiKGIpO3ZhciBhPTA7Zm9yKGI9Yi5jaGlsZE5vZGVzfHxbXTthPGIubGVuZ3RoO2ErKylNYShiW2FdKX1mdW5jdGlvbiBsYyhiLGEsYyxkKXtpZihEKGQpKXRocm93IEhiKFwib2ZmYXJnc1wiKTt2YXIgZT1wYShiLFwiZXZlbnRzXCIpO3BhKGIsXCJoYW5kbGVcIikmJihGKGEpP3IoZSxmdW5jdGlvbihhLGMpe2JiKGIsYyxhKTtkZWxldGUgZVtjXX0pOnIoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7RihjKT8oYmIoYixhLGVbYV0pLGRlbGV0ZSBlW2FdKTpVYShlW2FdfHxbXSxjKX0pKX1mdW5jdGlvbiBMYihiLGEpe3ZhciBjPWIubmczMzksZD1jYltjXTtkJiYoYT9kZWxldGUgY2JbY10uZGF0YVthXTooZC5oYW5kbGUmJihkLmV2ZW50cy4kZGVzdHJveSYmZC5oYW5kbGUoe30sXCIkZGVzdHJveVwiKSxsYyhiKSksZGVsZXRlIGNiW2NdLGIubmczMzk9dSkpfWZ1bmN0aW9uIHBhKGIsYSxjKXt2YXIgZD1cbmIubmczMzksZD1jYltkfHwtMV07aWYoRChjKSlkfHwoYi5uZzMzOT1kPSsrbWUsZD1jYltkXT17fSksZFthXT1jO2Vsc2UgcmV0dXJuIGQmJmRbYV19ZnVuY3Rpb24gTWIoYixhLGMpe3ZhciBkPXBhKGIsXCJkYXRhXCIpLGU9RChjKSxmPSFlJiZEKGEpLGc9ZiYmIVQoYSk7ZHx8Z3x8cGEoYixcImRhdGFcIixkPXt9KTtpZihlKWRbYV09YztlbHNlIGlmKGYpe2lmKGcpcmV0dXJuIGQmJmRbYV07RShkLGEpfWVsc2UgcmV0dXJuIGR9ZnVuY3Rpb24gTmIoYixhKXtyZXR1cm4gYi5nZXRBdHRyaWJ1dGU/LTE8KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIikuaW5kZXhPZihcIiBcIithK1wiIFwiKTohMX1mdW5jdGlvbiBvYihiLGEpe2EmJmIuc2V0QXR0cmlidXRlJiZyKGEuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwkKChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXG5cIiBcIikucmVwbGFjZShcIiBcIiskKGEpK1wiIFwiLFwiIFwiKSkpfSl9ZnVuY3Rpb24gcGIoYixhKXtpZihhJiZiLnNldEF0dHJpYnV0ZSl7dmFyIGM9KFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIik7cihhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXthPSQoYSk7LTE9PT1jLmluZGV4T2YoXCIgXCIrYStcIiBcIikmJihjKz1hK1wiIFwiKX0pO2Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwkKGMpKX19ZnVuY3Rpb24gSmIoYixhKXtpZihhKXthPWEubm9kZU5hbWV8fCFEKGEubGVuZ3RoKXx8SmEoYSk/W2FdOmE7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYi5wdXNoKGFbY10pfX1mdW5jdGlvbiBtYyhiLGEpe3JldHVybiBxYihiLFwiJFwiKyhhfHxcIm5nQ29udHJvbGxlclwiKStcIkNvbnRyb2xsZXJcIil9ZnVuY3Rpb24gcWIoYixhLGMpezk9PWIubm9kZVR5cGUmJihiPWIuZG9jdW1lbnRFbGVtZW50KTtmb3IoYT1MKGEpP2E6W2FdO2I7KXtmb3IodmFyIGQ9XG4wLGU9YS5sZW5ndGg7ZDxlO2QrKylpZigoYz1BLmRhdGEoYixhW2RdKSkhPT11KXJldHVybiBjO2I9Yi5wYXJlbnROb2RlfHwxMT09PWIubm9kZVR5cGUmJmIuaG9zdH19ZnVuY3Rpb24gbmMoYil7Zm9yKHZhciBhPTAsYz1iLmNoaWxkTm9kZXM7YTxjLmxlbmd0aDthKyspTWEoY1thXSk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKX1mdW5jdGlvbiBvYyhiLGEpe3ZhciBjPXJiW2EudG9Mb3dlckNhc2UoKV07cmV0dXJuIGMmJnBjW2Iubm9kZU5hbWVdJiZjfWZ1bmN0aW9uIG5lKGIsYSl7dmFyIGM9ZnVuY3Rpb24oYyxlKXtjLnByZXZlbnREZWZhdWx0fHwoYy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MucmV0dXJuVmFsdWU9ITF9KTtjLnN0b3BQcm9wYWdhdGlvbnx8KGMuc3RvcFByb3BhZ2F0aW9uPWZ1bmN0aW9uKCl7Yy5jYW5jZWxCdWJibGU9ITB9KTtjLnRhcmdldHx8KGMudGFyZ2V0PWMuc3JjRWxlbWVudHx8WCk7aWYoRihjLmRlZmF1bHRQcmV2ZW50ZWQpKXt2YXIgZj1cbmMucHJldmVudERlZmF1bHQ7Yy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MuZGVmYXVsdFByZXZlbnRlZD0hMDtmLmNhbGwoYyl9O2MuZGVmYXVsdFByZXZlbnRlZD0hMX1jLmlzRGVmYXVsdFByZXZlbnRlZD1mdW5jdGlvbigpe3JldHVybiBjLmRlZmF1bHRQcmV2ZW50ZWR8fCExPT09Yy5yZXR1cm5WYWx1ZX07dmFyIGc9aGEoYVtlfHxjLnR5cGVdfHxbXSk7cihnLGZ1bmN0aW9uKGEpe2EuY2FsbChiLGMpfSk7OD49Uj8oYy5wcmV2ZW50RGVmYXVsdD1udWxsLGMuc3RvcFByb3BhZ2F0aW9uPW51bGwsYy5pc0RlZmF1bHRQcmV2ZW50ZWQ9bnVsbCk6KGRlbGV0ZSBjLnByZXZlbnREZWZhdWx0LGRlbGV0ZSBjLnN0b3BQcm9wYWdhdGlvbixkZWxldGUgYy5pc0RlZmF1bHRQcmV2ZW50ZWQpfTtjLmVsZW09YjtyZXR1cm4gY31mdW5jdGlvbiBOYShiLGEpe3ZhciBjPXR5cGVvZiBiLGQ7XCJmdW5jdGlvblwiPT1jfHxcIm9iamVjdFwiPT1jJiZudWxsIT09Yj9cImZ1bmN0aW9uXCI9PXR5cGVvZihkPVxuYi4kJGhhc2hLZXkpP2Q9Yi4kJGhhc2hLZXkoKTpkPT09dSYmKGQ9Yi4kJGhhc2hLZXk9KGF8fGliKSgpKTpkPWI7cmV0dXJuIGMrXCI6XCIrZH1mdW5jdGlvbiBkYihiLGEpe2lmKGEpe3ZhciBjPTA7dGhpcy5uZXh0VWlkPWZ1bmN0aW9uKCl7cmV0dXJuKytjfX1yKGIsdGhpcy5wdXQsdGhpcyl9ZnVuY3Rpb24gcWMoYil7dmFyIGEsYztcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj8oYT1iLiRpbmplY3QpfHwoYT1bXSxiLmxlbmd0aCYmKGM9Yi50b1N0cmluZygpLnJlcGxhY2Uob2UsXCJcIiksYz1jLm1hdGNoKHBlKSxyKGNbMV0uc3BsaXQocWUpLGZ1bmN0aW9uKGIpe2IucmVwbGFjZShyZSxmdW5jdGlvbihiLGMsZCl7YS5wdXNoKGQpfSl9KSksYi4kaW5qZWN0PWEpOkwoYik/KGM9Yi5sZW5ndGgtMSxZYShiW2NdLFwiZm5cIiksYT1iLnNsaWNlKDAsYykpOllhKGIsXCJmblwiLCEwKTtyZXR1cm4gYX1mdW5jdGlvbiBlYyhiKXtmdW5jdGlvbiBhKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe2lmKFQoYikpcihiLFxuWWIoYSkpO2Vsc2UgcmV0dXJuIGEoYixjKX19ZnVuY3Rpb24gYyhhLGIpe0VhKGEsXCJzZXJ2aWNlXCIpO2lmKE4oYil8fEwoYikpYj1uLmluc3RhbnRpYXRlKGIpO2lmKCFiLiRnZXQpdGhyb3cgZWIoXCJwZ2V0XCIsYSk7cmV0dXJuIGxbYStoXT1ifWZ1bmN0aW9uIGQoYSxiKXtyZXR1cm4gYyhhLHskZ2V0OmJ9KX1mdW5jdGlvbiBlKGEpe3ZhciBiPVtdLGMsZCxmLGg7cihhLGZ1bmN0aW9uKGEpe2lmKCFtLmdldChhKSl7bS5wdXQoYSwhMCk7dHJ5e2lmKEcoYSkpZm9yKGM9JGEoYSksYj1iLmNvbmNhdChlKGMucmVxdWlyZXMpKS5jb25jYXQoYy5fcnVuQmxvY2tzKSxkPWMuX2ludm9rZVF1ZXVlLGY9MCxoPWQubGVuZ3RoO2Y8aDtmKyspe3ZhciBnPWRbZl0saz1uLmdldChnWzBdKTtrW2dbMV1dLmFwcGx5KGssZ1syXSl9ZWxzZSBOKGEpP2IucHVzaChuLmludm9rZShhKSk6TChhKT9iLnB1c2gobi5pbnZva2UoYSkpOllhKGEsXCJtb2R1bGVcIil9Y2F0Y2gocCl7dGhyb3cgTChhKSYmKGE9XG5hW2EubGVuZ3RoLTFdKSxwLm1lc3NhZ2UmJihwLnN0YWNrJiYtMT09cC5zdGFjay5pbmRleE9mKHAubWVzc2FnZSkpJiYocD1wLm1lc3NhZ2UrXCJcXG5cIitwLnN0YWNrKSxlYihcIm1vZHVsZXJyXCIsYSxwLnN0YWNrfHxwLm1lc3NhZ2V8fHApO319fSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZihhLGIpe2Z1bmN0aW9uIGMoZCl7aWYoYS5oYXNPd25Qcm9wZXJ0eShkKSl7aWYoYVtkXT09PWcpdGhyb3cgZWIoXCJjZGVwXCIsZCtcIiA8LSBcIitrLmpvaW4oXCIgPC0gXCIpKTtyZXR1cm4gYVtkXX10cnl7cmV0dXJuIGsudW5zaGlmdChkKSxhW2RdPWcsYVtkXT1iKGQpfWNhdGNoKGUpe3Rocm93IGFbZF09PT1nJiZkZWxldGUgYVtkXSxlO31maW5hbGx5e2suc2hpZnQoKX19ZnVuY3Rpb24gZChhLGIsZSl7dmFyIGY9W10saD1xYyhhKSxnLGsscDtrPTA7Zm9yKGc9aC5sZW5ndGg7azxnO2srKyl7cD1oW2tdO2lmKFwic3RyaW5nXCIhPT10eXBlb2YgcCl0aHJvdyBlYihcIml0a25cIixwKTtmLnB1c2goZSYmZS5oYXNPd25Qcm9wZXJ0eShwKT9cbmVbcF06YyhwKSl9TChhKSYmKGE9YVtnXSk7cmV0dXJuIGEuYXBwbHkoYixmKX1yZXR1cm57aW52b2tlOmQsaW5zdGFudGlhdGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbigpe30sZTtjLnByb3RvdHlwZT0oTChhKT9hW2EubGVuZ3RoLTFdOmEpLnByb3RvdHlwZTtjPW5ldyBjO2U9ZChhLGMsYik7cmV0dXJuIFQoZSl8fE4oZSk/ZTpjfSxnZXQ6Yyxhbm5vdGF0ZTpxYyxoYXM6ZnVuY3Rpb24oYil7cmV0dXJuIGwuaGFzT3duUHJvcGVydHkoYitoKXx8YS5oYXNPd25Qcm9wZXJ0eShiKX19fXZhciBnPXt9LGg9XCJQcm92aWRlclwiLGs9W10sbT1uZXcgZGIoW10sITApLGw9eyRwcm92aWRlOntwcm92aWRlcjphKGMpLGZhY3Rvcnk6YShkKSxzZXJ2aWNlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLFtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLmluc3RhbnRpYXRlKGIpfV0pfSksdmFsdWU6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsYWEoYikpfSksY29uc3RhbnQ6YShmdW5jdGlvbihhLFxuYil7RWEoYSxcImNvbnN0YW50XCIpO2xbYV09YjtxW2FdPWJ9KSxkZWNvcmF0b3I6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmdldChhK2gpLGQ9Yy4kZ2V0O2MuJGdldD1mdW5jdGlvbigpe3ZhciBhPXAuaW52b2tlKGQsYyk7cmV0dXJuIHAuaW52b2tlKGIsbnVsbCx7JGRlbGVnYXRlOmF9KX19fX0sbj1sLiRpbmplY3Rvcj1mKGwsZnVuY3Rpb24oKXt0aHJvdyBlYihcInVucHJcIixrLmpvaW4oXCIgPC0gXCIpKTt9KSxxPXt9LHA9cS4kaW5qZWN0b3I9ZihxLGZ1bmN0aW9uKGEpe2E9bi5nZXQoYStoKTtyZXR1cm4gcC5pbnZva2UoYS4kZ2V0LGEpfSk7cihlKGIpLGZ1bmN0aW9uKGEpe3AuaW52b2tlKGF8fHYpfSk7cmV0dXJuIHB9ZnVuY3Rpb24gS2QoKXt2YXIgYj0hMDt0aGlzLmRpc2FibGVBdXRvU2Nyb2xsaW5nPWZ1bmN0aW9uKCl7Yj0hMX07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2NhdGlvblwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPW51bGw7XG5yKGEsZnVuY3Rpb24oYSl7Ynx8XCJhXCIhPT14KGEubm9kZU5hbWUpfHwoYj1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGYoKXt2YXIgYj1jLmhhc2goKSxkO2I/KGQ9Zy5nZXRFbGVtZW50QnlJZChiKSk/ZC5zY3JvbGxJbnRvVmlldygpOihkPWUoZy5nZXRFbGVtZW50c0J5TmFtZShiKSkpP2Quc2Nyb2xsSW50b1ZpZXcoKTpcInRvcFwiPT09YiYmYS5zY3JvbGxUbygwLDApOmEuc2Nyb2xsVG8oMCwwKX12YXIgZz1hLmRvY3VtZW50O2ImJmQuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaGFzaCgpfSxmdW5jdGlvbigpe2QuJGV2YWxBc3luYyhmKX0pO3JldHVybiBmfV19ZnVuY3Rpb24gZ2UoKXt0aGlzLiRnZXQ9W1wiJCRyQUZcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYixhKXtyZXR1cm4gYi5zdXBwb3J0ZWQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9OmZ1bmN0aW9uKGIpe3JldHVybiBhKGIsMCwhMSl9fV19ZnVuY3Rpb24gc2UoYixhLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7YS5hcHBseShudWxsLFxud2EuY2FsbChhcmd1bWVudHMsMSkpfWZpbmFsbHl7aWYocy0tLDA9PT1zKWZvcig7Si5sZW5ndGg7KXRyeXtKLnBvcCgpKCl9Y2F0Y2goYil7Yy5lcnJvcihiKX19fWZ1bmN0aW9uIGYoYSxiKXsoZnVuY3Rpb24gZWEoKXtyKHcsZnVuY3Rpb24oYSl7YSgpfSk7dD1iKGVhLGEpfSkoKX1mdW5jdGlvbiBnKCl7eSE9aC51cmwoKSYmKHk9aC51cmwoKSxyKGJhLGZ1bmN0aW9uKGEpe2EoaC51cmwoKSl9KSl9dmFyIGg9dGhpcyxrPWFbMF0sbT1iLmxvY2F0aW9uLGw9Yi5oaXN0b3J5LG49Yi5zZXRUaW1lb3V0LHE9Yi5jbGVhclRpbWVvdXQscD17fTtoLmlzTW9jaz0hMTt2YXIgcz0wLEo9W107aC4kJGNvbXBsZXRlT3V0c3RhbmRpbmdSZXF1ZXN0PWU7aC4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50PWZ1bmN0aW9uKCl7cysrfTtoLm5vdGlmeVdoZW5Ob091dHN0YW5kaW5nUmVxdWVzdHM9ZnVuY3Rpb24oYSl7cih3LGZ1bmN0aW9uKGEpe2EoKX0pOzA9PT1zP2EoKTpKLnB1c2goYSl9O1xudmFyIHc9W10sdDtoLmFkZFBvbGxGbj1mdW5jdGlvbihhKXtGKHQpJiZmKDEwMCxuKTt3LnB1c2goYSk7cmV0dXJuIGF9O3ZhciB5PW0uaHJlZixLPWEuZmluZChcImJhc2VcIiksQj1udWxsO2gudXJsPWZ1bmN0aW9uKGEsYyl7bSE9PWIubG9jYXRpb24mJihtPWIubG9jYXRpb24pO2whPT1iLmhpc3RvcnkmJihsPWIuaGlzdG9yeSk7aWYoYSl7aWYoeSE9YSl7dmFyIGU9eSYmR2EoeSk9PT1HYShhKTt5PWE7IWUmJmQuaGlzdG9yeT9jP2wucmVwbGFjZVN0YXRlKG51bGwsXCJcIixhKToobC5wdXNoU3RhdGUobnVsbCxcIlwiLGEpLEsuYXR0cihcImhyZWZcIixLLmF0dHIoXCJocmVmXCIpKSk6KGV8fChCPWEpLGM/bS5yZXBsYWNlKGEpOm0uaHJlZj1hKTtyZXR1cm4gaH19ZWxzZSByZXR1cm4gQnx8bS5ocmVmLnJlcGxhY2UoLyUyNy9nLFwiJ1wiKX07dmFyIGJhPVtdLE89ITE7aC5vblVybENoYW5nZT1mdW5jdGlvbihhKXtpZighTyl7aWYoZC5oaXN0b3J5KUEoYikub24oXCJwb3BzdGF0ZVwiLGcpO2lmKGQuaGFzaGNoYW5nZSlBKGIpLm9uKFwiaGFzaGNoYW5nZVwiLFxuZyk7ZWxzZSBoLmFkZFBvbGxGbihnKTtPPSEwfWJhLnB1c2goYSk7cmV0dXJuIGF9O2guJCRjaGVja1VybENoYW5nZT1nO2guYmFzZUhyZWY9ZnVuY3Rpb24oKXt2YXIgYT1LLmF0dHIoXCJocmVmXCIpO3JldHVybiBhP2EucmVwbGFjZSgvXihodHRwcz9cXDopP1xcL1xcL1teXFwvXSovLFwiXCIpOlwiXCJ9O3ZhciBNPXt9LGNhPVwiXCIsUD1oLmJhc2VIcmVmKCk7aC5jb29raWVzPWZ1bmN0aW9uKGEsYil7dmFyIGQsZSxmLGg7aWYoYSliPT09dT9rLmNvb2tpZT1lc2NhcGUoYSkrXCI9O3BhdGg9XCIrUCtcIjtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI6RyhiKSYmKGQ9KGsuY29va2llPWVzY2FwZShhKStcIj1cIitlc2NhcGUoYikrXCI7cGF0aD1cIitQKS5sZW5ndGgrMSw0MDk2PGQmJmMud2FybihcIkNvb2tpZSAnXCIrYStcIicgcG9zc2libHkgbm90IHNldCBvciBvdmVyZmxvd2VkIGJlY2F1c2UgaXQgd2FzIHRvbyBsYXJnZSAoXCIrZCtcIiA+IDQwOTYgYnl0ZXMpIVwiKSk7ZWxzZXtpZihrLmNvb2tpZSE9PVxuY2EpZm9yKGNhPWsuY29va2llLGQ9Y2Euc3BsaXQoXCI7IFwiKSxNPXt9LGY9MDtmPGQubGVuZ3RoO2YrKyllPWRbZl0saD1lLmluZGV4T2YoXCI9XCIpLDA8aCYmKGE9dW5lc2NhcGUoZS5zdWJzdHJpbmcoMCxoKSksTVthXT09PXUmJihNW2FdPXVuZXNjYXBlKGUuc3Vic3RyaW5nKGgrMSkpKSk7cmV0dXJuIE19fTtoLmRlZmVyPWZ1bmN0aW9uKGEsYil7dmFyIGM7cysrO2M9bihmdW5jdGlvbigpe2RlbGV0ZSBwW2NdO2UoYSl9LGJ8fDApO3BbY109ITA7cmV0dXJuIGN9O2guZGVmZXIuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiBwW2FdPyhkZWxldGUgcFthXSxxKGEpLGUodiksITApOiExfX1mdW5jdGlvbiBNZCgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkbG9nXCIsXCIkc25pZmZlclwiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMsZCl7cmV0dXJuIG5ldyBzZShiLGQsYSxjKX1dfWZ1bmN0aW9uIE5kKCl7dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQpe2Z1bmN0aW9uIGUoYSl7YSE9XG5uJiYocT9xPT1hJiYocT1hLm4pOnE9YSxmKGEubixhLnApLGYoYSxuKSxuPWEsbi5uPW51bGwpfWZ1bmN0aW9uIGYoYSxiKXthIT1iJiYoYSYmKGEucD1iKSxiJiYoYi5uPWEpKX1pZihiIGluIGEpdGhyb3cgeihcIiRjYWNoZUZhY3RvcnlcIikoXCJpaWRcIixiKTt2YXIgZz0wLGg9RSh7fSxkLHtpZDpifSksaz17fSxtPWQmJmQuY2FwYWNpdHl8fE51bWJlci5NQVhfVkFMVUUsbD17fSxuPW51bGwscT1udWxsO3JldHVybiBhW2JdPXtwdXQ6ZnVuY3Rpb24oYSxiKXtpZihtPE51bWJlci5NQVhfVkFMVUUpe3ZhciBjPWxbYV18fChsW2FdPXtrZXk6YX0pO2UoYyl9aWYoIUYoYikpcmV0dXJuIGEgaW4ga3x8ZysrLGtbYV09YixnPm0mJnRoaXMucmVtb3ZlKHEua2V5KSxifSxnZXQ6ZnVuY3Rpb24oYSl7aWYobTxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1sW2FdO2lmKCFiKXJldHVybjtlKGIpfXJldHVybiBrW2FdfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYobTxOdW1iZXIuTUFYX1ZBTFVFKXt2YXIgYj1cbmxbYV07aWYoIWIpcmV0dXJuO2I9PW4mJihuPWIucCk7Yj09cSYmKHE9Yi5uKTtmKGIubixiLnApO2RlbGV0ZSBsW2FdfWRlbGV0ZSBrW2FdO2ctLX0scmVtb3ZlQWxsOmZ1bmN0aW9uKCl7az17fTtnPTA7bD17fTtuPXE9bnVsbH0sZGVzdHJveTpmdW5jdGlvbigpe2w9aD1rPW51bGw7ZGVsZXRlIGFbYl19LGluZm86ZnVuY3Rpb24oKXtyZXR1cm4gRSh7fSxoLHtzaXplOmd9KX19fXZhciBhPXt9O2IuaW5mbz1mdW5jdGlvbigpe3ZhciBiPXt9O3IoYSxmdW5jdGlvbihhLGUpe2JbZV09YS5pbmZvKCl9KTtyZXR1cm4gYn07Yi5nZXQ9ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O3JldHVybiBifX1mdW5jdGlvbiBjZSgpe3RoaXMuJGdldD1bXCIkY2FjaGVGYWN0b3J5XCIsZnVuY3Rpb24oYil7cmV0dXJuIGIoXCJ0ZW1wbGF0ZXNcIil9XX1mdW5jdGlvbiBnYyhiLGEpe3ZhciBjPXt9LGQ9XCJEaXJlY3RpdmVcIixlPS9eXFxzKmRpcmVjdGl2ZVxcOlxccyooW1xcZFxcd19cXC1dKylcXHMrKC4qKSQvLGY9LygoW1xcZFxcd19cXC1dKykoPzpcXDooW147XSspKT87PykvLFxuZz0vXihvblthLXpdK3xmb3JtYWN0aW9uKSQvO3RoaXMuZGlyZWN0aXZlPWZ1bmN0aW9uIGsoYSxlKXtFYShhLFwiZGlyZWN0aXZlXCIpO0coYSk/KERiKGUsXCJkaXJlY3RpdmVGYWN0b3J5XCIpLGMuaGFzT3duUHJvcGVydHkoYSl8fChjW2FdPVtdLGIuZmFjdG9yeShhK2QsW1wiJGluamVjdG9yXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLGZ1bmN0aW9uKGIsZCl7dmFyIGU9W107cihjW2FdLGZ1bmN0aW9uKGMsZil7dHJ5e3ZhciBnPWIuaW52b2tlKGMpO04oZyk/Zz17Y29tcGlsZTphYShnKX06IWcuY29tcGlsZSYmZy5saW5rJiYoZy5jb21waWxlPWFhKGcubGluaykpO2cucHJpb3JpdHk9Zy5wcmlvcml0eXx8MDtnLmluZGV4PWY7Zy5uYW1lPWcubmFtZXx8YTtnLnJlcXVpcmU9Zy5yZXF1aXJlfHxnLmNvbnRyb2xsZXImJmcubmFtZTtnLnJlc3RyaWN0PWcucmVzdHJpY3R8fFwiQVwiO2UucHVzaChnKX1jYXRjaChrKXtkKGspfX0pO3JldHVybiBlfV0pKSxjW2FdLnB1c2goZSkpOnIoYSxZYihrKSk7XG5yZXR1cm4gdGhpc307dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihiKXtyZXR1cm4gRChiKT8oYS5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdChiKSx0aGlzKTphLmltZ1NyY1Nhbml0aXphdGlvbldoaXRlbGlzdCgpfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkaW50ZXJwb2xhdGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRwYXJzZVwiLFwiJGNvbnRyb2xsZXJcIixcIiRyb290U2NvcGVcIixcIiRkb2N1bWVudFwiLFwiJHNjZVwiLFwiJGFuaW1hdGVcIixcIiQkc2FuaXRpemVVcmlcIixmdW5jdGlvbihhLGIsbCxuLHEscCxzLEosdyx0LHksSyl7ZnVuY3Rpb24gQihhLGIsYyxkLGUpe2EgaW5zdGFuY2VvZlxuQXx8KGE9QShhKSk7cihhLGZ1bmN0aW9uKGIsYyl7Mz09Yi5ub2RlVHlwZSYmYi5ub2RlVmFsdWUubWF0Y2goL1xcUysvKSYmKGFbY109QShiKS53cmFwKFwiPHNwYW4+PC9zcGFuPlwiKS5wYXJlbnQoKVswXSl9KTt2YXIgZj1PKGEsYixhLGMsZCxlKTtiYShhLFwibmctc2NvcGVcIik7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkLGUpe0RiKGIsXCJzY29wZVwiKTt2YXIgZz1jP09hLmNsb25lLmNhbGwoYSk6YTtyKGQsZnVuY3Rpb24oYSxiKXtnLmRhdGEoXCIkXCIrYitcIkNvbnRyb2xsZXJcIixhKX0pO2Q9MDtmb3IodmFyIGs9Zy5sZW5ndGg7ZDxrO2QrKyl7dmFyIHA9Z1tkXS5ub2RlVHlwZTsxIT09cCYmOSE9PXB8fGcuZXEoZCkuZGF0YShcIiRzY29wZVwiLGIpfWMmJmMoZyxiKTtmJiZmKGIsZyxnLGUpO3JldHVybiBnfX1mdW5jdGlvbiBiYShhLGIpe3RyeXthLmFkZENsYXNzKGIpfWNhdGNoKGMpe319ZnVuY3Rpb24gTyhhLGIsYyxkLGUsZil7ZnVuY3Rpb24gZyhhLGMsZCxlKXt2YXIgZixwLGwsbSxxLFxubix3O2Y9Yy5sZW5ndGg7dmFyIHM9QXJyYXkoZik7Zm9yKG09MDttPGY7bSsrKXNbbV09Y1ttXTtuPW09MDtmb3IocT1rLmxlbmd0aDttPHE7bisrKXA9c1tuXSxjPWtbbSsrXSxmPWtbbSsrXSxjPyhjLnNjb3BlPyhsPWEuJG5ldygpLEEuZGF0YShwLFwiJHNjb3BlXCIsbCkpOmw9YSx3PWMudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ/TShhLGMudHJhbnNjbHVkZSxlKTohYy50ZW1wbGF0ZU9uVGhpc0VsZW1lbnQmJmU/ZTohZSYmYj9NKGEsYik6bnVsbCxjKGYsbCxwLGQsdykpOmYmJmYoYSxwLmNoaWxkTm9kZXMsdSxlKX1mb3IodmFyIGs9W10scCxsLG0scSxuPTA7bjxhLmxlbmd0aDtuKyspcD1uZXcgT2IsbD1jYShhW25dLFtdLHAsMD09PW4/ZDp1LGUpLChmPWwubGVuZ3RoP0kobCxhW25dLHAsYixjLG51bGwsW10sW10sZik6bnVsbCkmJmYuc2NvcGUmJmJhKHAuJCRlbGVtZW50LFwibmctc2NvcGVcIikscD1mJiZmLnRlcm1pbmFsfHwhKG09YVtuXS5jaGlsZE5vZGVzKXx8IW0ubGVuZ3RoP1xubnVsbDpPKG0sZj8oZi50cmFuc2NsdWRlT25UaGlzRWxlbWVudHx8IWYudGVtcGxhdGVPblRoaXNFbGVtZW50KSYmZi50cmFuc2NsdWRlOmIpLGsucHVzaChmLHApLHE9cXx8Znx8cCxmPW51bGw7cmV0dXJuIHE/ZzpudWxsfWZ1bmN0aW9uIE0oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZil7dmFyIGc9ITE7ZHx8KGQ9YS4kbmV3KCksZz1kLiQkdHJhbnNjbHVkZWQ9ITApO2U9YihkLGUsZixjKTtpZihnKWUub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7ZC4kZGVzdHJveSgpfSk7cmV0dXJuIGV9fWZ1bmN0aW9uIGNhKGEsYixjLGQsZyl7dmFyIGs9Yy4kYXR0cixwO3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIDE6ZWEoYixxYShQYShhKS50b0xvd2VyQ2FzZSgpKSxcIkVcIixkLGcpO2Zvcih2YXIgbCxtLHEsbj1hLmF0dHJpYnV0ZXMsdz0wLHM9biYmbi5sZW5ndGg7dzxzO3crKyl7dmFyIHQ9ITEsSj0hMTtsPW5bd107aWYoIVJ8fDg8PVJ8fGwuc3BlY2lmaWVkKXtwPWwubmFtZTttPVxuJChsLnZhbHVlKTtsPXFhKHApO2lmKHE9VS50ZXN0KGwpKXA9bmIobC5zdWJzdHIoNiksXCItXCIpO3ZhciB5PWwucmVwbGFjZSgvKFN0YXJ0fEVuZCkkLyxcIlwiKTtsPT09eStcIlN0YXJ0XCImJih0PXAsSj1wLnN1YnN0cigwLHAubGVuZ3RoLTUpK1wiZW5kXCIscD1wLnN1YnN0cigwLHAubGVuZ3RoLTYpKTtsPXFhKHAudG9Mb3dlckNhc2UoKSk7a1tsXT1wO2lmKHF8fCFjLmhhc093blByb3BlcnR5KGwpKWNbbF09bSxvYyhhLGwpJiYoY1tsXT0hMCk7UyhhLGIsbSxsKTtlYShiLGwsXCJBXCIsZCxnLHQsSil9fWE9YS5jbGFzc05hbWU7aWYoRyhhKSYmXCJcIiE9PWEpZm9yKDtwPWYuZXhlYyhhKTspbD1xYShwWzJdKSxlYShiLGwsXCJDXCIsZCxnKSYmKGNbbF09JChwWzNdKSksYT1hLnN1YnN0cihwLmluZGV4K3BbMF0ubGVuZ3RoKTticmVhaztjYXNlIDM6eChiLGEubm9kZVZhbHVlKTticmVhaztjYXNlIDg6dHJ5e2lmKHA9ZS5leGVjKGEubm9kZVZhbHVlKSlsPXFhKHBbMV0pLGVhKGIsbCxcIk1cIixkLFxuZykmJihjW2xdPSQocFsyXSkpfWNhdGNoKEIpe319Yi5zb3J0KEYpO3JldHVybiBifWZ1bmN0aW9uIFAoYSxiLGMpe3ZhciBkPVtdLGU9MDtpZihiJiZhLmhhc0F0dHJpYnV0ZSYmYS5oYXNBdHRyaWJ1dGUoYikpe2Rve2lmKCFhKXRocm93IGphKFwidXRlcmRpclwiLGIsYyk7MT09YS5ub2RlVHlwZSYmKGEuaGFzQXR0cmlidXRlKGIpJiZlKyssYS5oYXNBdHRyaWJ1dGUoYykmJmUtLSk7ZC5wdXNoKGEpO2E9YS5uZXh0U2libGluZ313aGlsZSgwPGUpfWVsc2UgZC5wdXNoKGEpO3JldHVybiBBKGQpfWZ1bmN0aW9uIEMoYSxiLGMpe3JldHVybiBmdW5jdGlvbihkLGUsZixnLGspe2U9UChlWzBdLGIsYyk7cmV0dXJuIGEoZCxlLGYsZyxrKX19ZnVuY3Rpb24gSShhLGMsZCxlLGYsZyxrLHEsbil7ZnVuY3Rpb24gdyhhLGIsYyxkKXtpZihhKXtjJiYoYT1DKGEsYyxkKSk7YS5yZXF1aXJlPUgucmVxdWlyZTthLmRpcmVjdGl2ZU5hbWU9ejtpZihLPT09SHx8SC4kJGlzb2xhdGVTY29wZSlhPXJjKGEsXG57aXNvbGF0ZVNjb3BlOiEwfSk7ay5wdXNoKGEpfWlmKGIpe2MmJihiPUMoYixjLGQpKTtiLnJlcXVpcmU9SC5yZXF1aXJlO2IuZGlyZWN0aXZlTmFtZT16O2lmKEs9PT1IfHxILiQkaXNvbGF0ZVNjb3BlKWI9cmMoYix7aXNvbGF0ZVNjb3BlOiEwfSk7cS5wdXNoKGIpfX1mdW5jdGlvbiB0KGEsYixjLGQpe3ZhciBlLGY9XCJkYXRhXCIsZz0hMTtpZihHKGIpKXtmb3IoO1wiXlwiPT0oZT1iLmNoYXJBdCgwKSl8fFwiP1wiPT1lOyliPWIuc3Vic3RyKDEpLFwiXlwiPT1lJiYoZj1cImluaGVyaXRlZERhdGFcIiksZz1nfHxcIj9cIj09ZTtlPW51bGw7ZCYmXCJkYXRhXCI9PT1mJiYoZT1kW2JdKTtlPWV8fGNbZl0oXCIkXCIrYitcIkNvbnRyb2xsZXJcIik7aWYoIWUmJiFnKXRocm93IGphKFwiY3RyZXFcIixiLGEpO31lbHNlIEwoYikmJihlPVtdLHIoYixmdW5jdGlvbihiKXtlLnB1c2godChhLGIsYyxkKSl9KSk7cmV0dXJuIGV9ZnVuY3Rpb24gSihhLGUsZixnLG4pe2Z1bmN0aW9uIHcoYSxiKXt2YXIgYzsyPmFyZ3VtZW50cy5sZW5ndGgmJlxuKGI9YSxhPXUpO0lhJiYoYz1jYSk7cmV0dXJuIG4oYSxiLGMpfXZhciB5LFEsQixNLEMsUCxjYT17fSxyYTt5PWM9PT1mP2Q6aGEoZCxuZXcgT2IoQShmKSxkLiRhdHRyKSk7UT15LiQkZWxlbWVudDtpZihLKXt2YXIgdWU9L15cXHMqKFtAPSZdKShcXD8/KVxccyooXFx3KilcXHMqJC87UD1lLiRuZXcoITApOyFJfHxJIT09SyYmSSE9PUsuJCRvcmlnaW5hbERpcmVjdGl2ZT9RLmRhdGEoXCIkaXNvbGF0ZVNjb3BlTm9UZW1wbGF0ZVwiLFApOlEuZGF0YShcIiRpc29sYXRlU2NvcGVcIixQKTtiYShRLFwibmctaXNvbGF0ZS1zY29wZVwiKTtyKEsuc2NvcGUsZnVuY3Rpb24oYSxjKXt2YXIgZD1hLm1hdGNoKHVlKXx8W10sZj1kWzNdfHxjLGc9XCI/XCI9PWRbMl0sZD1kWzFdLGssbCxuLHE7UC4kJGlzb2xhdGVCaW5kaW5nc1tjXT1kK2Y7c3dpdGNoKGQpe2Nhc2UgXCJAXCI6eS4kb2JzZXJ2ZShmLGZ1bmN0aW9uKGEpe1BbY109YX0pO3kuJCRvYnNlcnZlcnNbZl0uJCRzY29wZT1lO3lbZl0mJihQW2NdPWIoeVtmXSkoZSkpO1xuYnJlYWs7Y2FzZSBcIj1cIjppZihnJiYheVtmXSlicmVhaztsPXAoeVtmXSk7cT1sLmxpdGVyYWw/Q2E6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWJ8fGEhPT1hJiZiIT09Yn07bj1sLmFzc2lnbnx8ZnVuY3Rpb24oKXtrPVBbY109bChlKTt0aHJvdyBqYShcIm5vbmFzc2lnblwiLHlbZl0sSy5uYW1lKTt9O2s9UFtjXT1sKGUpO1AuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGE9bChlKTtxKGEsUFtjXSl8fChxKGEsayk/bihlLGE9UFtjXSk6UFtjXT1hKTtyZXR1cm4gaz1hfSxudWxsLGwubGl0ZXJhbCk7YnJlYWs7Y2FzZSBcIiZcIjpsPXAoeVtmXSk7UFtjXT1mdW5jdGlvbihhKXtyZXR1cm4gbChlLGEpfTticmVhaztkZWZhdWx0OnRocm93IGphKFwiaXNjcFwiLEsubmFtZSxjLGEpO319KX1yYT1uJiZ3O08mJnIoTyxmdW5jdGlvbihhKXt2YXIgYj17JHNjb3BlOmE9PT1LfHxhLiQkaXNvbGF0ZVNjb3BlP1A6ZSwkZWxlbWVudDpRLCRhdHRyczp5LCR0cmFuc2NsdWRlOnJhfSxjO0M9YS5jb250cm9sbGVyO1xuXCJAXCI9PUMmJihDPXlbYS5uYW1lXSk7Yz1zKEMsYik7Y2FbYS5uYW1lXT1jO0lhfHxRLmRhdGEoXCIkXCIrYS5uYW1lK1wiQ29udHJvbGxlclwiLGMpO2EuY29udHJvbGxlckFzJiYoYi4kc2NvcGVbYS5jb250cm9sbGVyQXNdPWMpfSk7Zz0wO2ZvcihCPWsubGVuZ3RoO2c8QjtnKyspdHJ5e009a1tnXSxNKE0uaXNvbGF0ZVNjb3BlP1A6ZSxRLHksTS5yZXF1aXJlJiZ0KE0uZGlyZWN0aXZlTmFtZSxNLnJlcXVpcmUsUSxjYSkscmEpfWNhdGNoKEgpe2woSCxpYShRKSl9Zz1lO0smJihLLnRlbXBsYXRlfHxudWxsPT09Sy50ZW1wbGF0ZVVybCkmJihnPVApO2EmJmEoZyxmLmNoaWxkTm9kZXMsdSxuKTtmb3IoZz1xLmxlbmd0aC0xOzA8PWc7Zy0tKXRyeXtNPXFbZ10sTShNLmlzb2xhdGVTY29wZT9QOmUsUSx5LE0ucmVxdWlyZSYmdChNLmRpcmVjdGl2ZU5hbWUsTS5yZXF1aXJlLFEsY2EpLHJhKX1jYXRjaChEKXtsKEQsaWEoUSkpfX1uPW58fHt9O2Zvcih2YXIgeT0tTnVtYmVyLk1BWF9WQUxVRSxcbk0sTz1uLmNvbnRyb2xsZXJEaXJlY3RpdmVzLEs9bi5uZXdJc29sYXRlU2NvcGVEaXJlY3RpdmUsST1uLnRlbXBsYXRlRGlyZWN0aXZlLGVhPW4ubm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZSxGPSExLEU9ITEsSWE9bi5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZSx4PWQuJCRlbGVtZW50PUEoYyksSCx6LFYsUz1lLFIsSGE9MCxzYT1hLmxlbmd0aDtIYTxzYTtIYSsrKXtIPWFbSGFdO3ZhciBVPUguJCRzdGFydCxZPUguJCRlbmQ7VSYmKHg9UChjLFUsWSkpO1Y9dTtpZih5PkgucHJpb3JpdHkpYnJlYWs7aWYoVj1ILnNjb3BlKU09TXx8SCxILnRlbXBsYXRlVXJsfHwoZmIoXCJuZXcvaXNvbGF0ZWQgc2NvcGVcIixLLEgseCksVChWKSYmKEs9SCkpO3o9SC5uYW1lOyFILnRlbXBsYXRlVXJsJiZILmNvbnRyb2xsZXImJihWPUguY29udHJvbGxlcixPPU98fHt9LGZiKFwiJ1wiK3orXCInIGNvbnRyb2xsZXJcIixPW3pdLEgseCksT1t6XT1IKTtpZihWPUgudHJhbnNjbHVkZSlGPSEwLEguJCR0bGJ8fFxuKGZiKFwidHJhbnNjbHVzaW9uXCIsZWEsSCx4KSxlYT1IKSxcImVsZW1lbnRcIj09Vj8oSWE9ITAseT1ILnByaW9yaXR5LFY9eCx4PWQuJCRlbGVtZW50PUEoWC5jcmVhdGVDb21tZW50KFwiIFwiK3orXCI6IFwiK2Rbel0rXCIgXCIpKSxjPXhbMF0scmEoZix3YS5jYWxsKFYsMCksYyksUz1CKFYsZSx5LGcmJmcubmFtZSx7bm9uVGxiVHJhbnNjbHVkZURpcmVjdGl2ZTplYX0pKTooVj1BKEtiKGMpKS5jb250ZW50cygpLHguZW1wdHkoKSxTPUIoVixlKSk7aWYoSC50ZW1wbGF0ZSlpZihFPSEwLGZiKFwidGVtcGxhdGVcIixJLEgseCksST1ILFY9TihILnRlbXBsYXRlKT9ILnRlbXBsYXRlKHgsZCk6SC50ZW1wbGF0ZSxWPVcoViksSC5yZXBsYWNlKXtnPUg7Vj1JYi50ZXN0KFYpP0EoJChWKSk6W107Yz1WWzBdO2lmKDEhPVYubGVuZ3RofHwxIT09Yy5ub2RlVHlwZSl0aHJvdyBqYShcInRwbHJ0XCIseixcIlwiKTtyYShmLHgsYyk7c2E9eyRhdHRyOnt9fTtWPWNhKGMsW10sc2EpO3ZhciBaPWEuc3BsaWNlKEhhK1xuMSxhLmxlbmd0aC0oSGErMSkpO0smJkQoVik7YT1hLmNvbmNhdChWKS5jb25jYXQoWik7dihkLHNhKTtzYT1hLmxlbmd0aH1lbHNlIHguaHRtbChWKTtpZihILnRlbXBsYXRlVXJsKUU9ITAsZmIoXCJ0ZW1wbGF0ZVwiLEksSCx4KSxJPUgsSC5yZXBsYWNlJiYoZz1IKSxKPXRlKGEuc3BsaWNlKEhhLGEubGVuZ3RoLUhhKSx4LGQsZixGJiZTLGsscSx7Y29udHJvbGxlckRpcmVjdGl2ZXM6TyxuZXdJc29sYXRlU2NvcGVEaXJlY3RpdmU6Syx0ZW1wbGF0ZURpcmVjdGl2ZTpJLG5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6ZWF9KSxzYT1hLmxlbmd0aDtlbHNlIGlmKEguY29tcGlsZSl0cnl7Uj1ILmNvbXBpbGUoeCxkLFMpLE4oUik/dyhudWxsLFIsVSxZKTpSJiZ3KFIucHJlLFIucG9zdCxVLFkpfWNhdGNoKHZlKXtsKHZlLGlhKHgpKX1ILnRlcm1pbmFsJiYoSi50ZXJtaW5hbD0hMCx5PU1hdGgubWF4KHksSC5wcmlvcml0eSkpfUouc2NvcGU9TSYmITA9PT1NLnNjb3BlO0oudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQ9XG5GO0oudGVtcGxhdGVPblRoaXNFbGVtZW50PUU7Si50cmFuc2NsdWRlPVM7bi5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZT1JYTtyZXR1cm4gSn1mdW5jdGlvbiBEKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7YjxjO2IrKylhW2JdPSRiKGFbYl0seyQkaXNvbGF0ZVNjb3BlOiEwfSl9ZnVuY3Rpb24gZWEoYixlLGYsZyxwLG0sbil7aWYoZT09PXApcmV0dXJuIG51bGw7cD1udWxsO2lmKGMuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBxO2U9YS5nZXQoZStkKTtmb3IodmFyIHc9MCxzPWUubGVuZ3RoO3c8czt3KyspdHJ5e3E9ZVt3XSwoZz09PXV8fGc+cS5wcmlvcml0eSkmJi0xIT1xLnJlc3RyaWN0LmluZGV4T2YoZikmJihtJiYocT0kYihxLHskJHN0YXJ0Om0sJCRlbmQ6bn0pKSxiLnB1c2gocSkscD1xKX1jYXRjaCh5KXtsKHkpfX1yZXR1cm4gcH1mdW5jdGlvbiB2KGEsYil7dmFyIGM9Yi4kYXR0cixkPWEuJGF0dHIsZT1hLiQkZWxlbWVudDtyKGEsZnVuY3Rpb24oZCxlKXtcIiRcIiE9XG5lLmNoYXJBdCgwKSYmKGJbZV0mJmJbZV0hPT1kJiYoZCs9KFwic3R5bGVcIj09PWU/XCI7XCI6XCIgXCIpK2JbZV0pLGEuJHNldChlLGQsITAsY1tlXSkpfSk7cihiLGZ1bmN0aW9uKGIsZil7XCJjbGFzc1wiPT1mPyhiYShlLGIpLGFbXCJjbGFzc1wiXT0oYVtcImNsYXNzXCJdP2FbXCJjbGFzc1wiXStcIiBcIjpcIlwiKStiKTpcInN0eWxlXCI9PWY/KGUuYXR0cihcInN0eWxlXCIsZS5hdHRyKFwic3R5bGVcIikrXCI7XCIrYiksYS5zdHlsZT0oYS5zdHlsZT9hLnN0eWxlK1wiO1wiOlwiXCIpK2IpOlwiJFwiPT1mLmNoYXJBdCgwKXx8YS5oYXNPd25Qcm9wZXJ0eShmKXx8KGFbZl09YixkW2ZdPWNbZl0pfSl9ZnVuY3Rpb24gdGUoYSxiLGMsZCxlLGYsZyxrKXt2YXIgcD1bXSxsLG0sdz1iWzBdLHM9YS5zaGlmdCgpLHk9RSh7fSxzLHt0ZW1wbGF0ZVVybDpudWxsLHRyYW5zY2x1ZGU6bnVsbCxyZXBsYWNlOm51bGwsJCRvcmlnaW5hbERpcmVjdGl2ZTpzfSksSj1OKHMudGVtcGxhdGVVcmwpP3MudGVtcGxhdGVVcmwoYixjKTpzLnRlbXBsYXRlVXJsO1xuYi5lbXB0eSgpO24uZ2V0KHQuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKEopLHtjYWNoZTpxfSkuc3VjY2VzcyhmdW5jdGlvbihxKXt2YXIgbix0O3E9VyhxKTtpZihzLnJlcGxhY2Upe3E9SWIudGVzdChxKT9BKCQocSkpOltdO249cVswXTtpZigxIT1xLmxlbmd0aHx8MSE9PW4ubm9kZVR5cGUpdGhyb3cgamEoXCJ0cGxydFwiLHMubmFtZSxKKTtxPXskYXR0cjp7fX07cmEoZCxiLG4pO3ZhciBCPWNhKG4sW10scSk7VChzLnNjb3BlKSYmRChCKTthPUIuY29uY2F0KGEpO3YoYyxxKX1lbHNlIG49dyxiLmh0bWwocSk7YS51bnNoaWZ0KHkpO2w9SShhLG4sYyxlLGIscyxmLGcsayk7cihkLGZ1bmN0aW9uKGEsYyl7YT09biYmKGRbY109YlswXSl9KTtmb3IobT1PKGJbMF0uY2hpbGROb2RlcyxlKTtwLmxlbmd0aDspe3E9cC5zaGlmdCgpO3Q9cC5zaGlmdCgpO3ZhciBLPXAuc2hpZnQoKSxDPXAuc2hpZnQoKSxCPWJbMF07aWYodCE9PXcpe3ZhciBQPXQuY2xhc3NOYW1lO2suaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmUmJlxucy5yZXBsYWNlfHwoQj1LYihuKSk7cmEoSyxBKHQpLEIpO2JhKEEoQiksUCl9dD1sLnRyYW5zY2x1ZGVPblRoaXNFbGVtZW50P00ocSxsLnRyYW5zY2x1ZGUsQyk6QztsKG0scSxCLGQsdCl9cD1udWxsfSkuZXJyb3IoZnVuY3Rpb24oYSxiLGMsZCl7dGhyb3cgamEoXCJ0cGxvYWRcIixkLnVybCk7fSk7cmV0dXJuIGZ1bmN0aW9uKGEsYixjLGQsZSl7YT1lO3A/KHAucHVzaChiKSxwLnB1c2goYykscC5wdXNoKGQpLHAucHVzaChhKSk6KGwudHJhbnNjbHVkZU9uVGhpc0VsZW1lbnQmJihhPU0oYixsLnRyYW5zY2x1ZGUsZSkpLGwobSxiLGMsZCxhKSl9fWZ1bmN0aW9uIEYoYSxiKXt2YXIgYz1iLnByaW9yaXR5LWEucHJpb3JpdHk7cmV0dXJuIDAhPT1jP2M6YS5uYW1lIT09Yi5uYW1lP2EubmFtZTxiLm5hbWU/LTE6MTphLmluZGV4LWIuaW5kZXh9ZnVuY3Rpb24gZmIoYSxiLGMsZCl7aWYoYil0aHJvdyBqYShcIm11bHRpZGlyXCIsYi5uYW1lLGMubmFtZSxhLGlhKGQpKTt9ZnVuY3Rpb24geChhLFxuYyl7dmFyIGQ9YihjLCEwKTtkJiZhLnB1c2goe3ByaW9yaXR5OjAsY29tcGlsZTpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudCgpLmxlbmd0aDtiJiZiYShhLnBhcmVudCgpLFwibmctYmluZGluZ1wiKTtyZXR1cm4gZnVuY3Rpb24oYSxjKXt2YXIgZT1jLnBhcmVudCgpLGY9ZS5kYXRhKFwiJGJpbmRpbmdcIil8fFtdO2YucHVzaChkKTtlLmRhdGEoXCIkYmluZGluZ1wiLGYpO2J8fGJhKGUsXCJuZy1iaW5kaW5nXCIpO2EuJHdhdGNoKGQsZnVuY3Rpb24oYSl7Y1swXS5ub2RlVmFsdWU9YX0pfX19KX1mdW5jdGlvbiB6KGEsYil7aWYoXCJzcmNkb2NcIj09YilyZXR1cm4gdC5IVE1MO3ZhciBjPVBhKGEpO2lmKFwieGxpbmtIcmVmXCI9PWJ8fFwiRk9STVwiPT1jJiZcImFjdGlvblwiPT1ifHxcIklNR1wiIT1jJiYoXCJzcmNcIj09Ynx8XCJuZ1NyY1wiPT1iKSlyZXR1cm4gdC5SRVNPVVJDRV9VUkx9ZnVuY3Rpb24gUyhhLGMsZCxlKXt2YXIgZj1iKGQsITApO2lmKGYpe2lmKFwibXVsdGlwbGVcIj09PWUmJlwiU0VMRUNUXCI9PT1cblBhKGEpKXRocm93IGphKFwic2VsbXVsdGlcIixpYShhKSk7Yy5wdXNoKHtwcmlvcml0eToxMDAsY29tcGlsZTpmdW5jdGlvbigpe3JldHVybntwcmU6ZnVuY3Rpb24oYyxkLGspe2Q9ay4kJG9ic2VydmVyc3x8KGsuJCRvYnNlcnZlcnM9e30pO2lmKGcudGVzdChlKSl0aHJvdyBqYShcIm5vZG9tZXZlbnRzXCIpO2lmKGY9YihrW2VdLCEwLHooYSxlKSkpa1tlXT1mKGMpLChkW2VdfHwoZFtlXT1bXSkpLiQkaW50ZXI9ITAsKGsuJCRvYnNlcnZlcnMmJmsuJCRvYnNlcnZlcnNbZV0uJCRzY29wZXx8YykuJHdhdGNoKGYsZnVuY3Rpb24oYSxiKXtcImNsYXNzXCI9PT1lJiZhIT1iP2suJHVwZGF0ZUNsYXNzKGEsYik6ay4kc2V0KGUsYSl9KX19fX0pfX1mdW5jdGlvbiByYShhLGIsYyl7dmFyIGQ9YlswXSxlPWIubGVuZ3RoLGY9ZC5wYXJlbnROb2RlLGcsaztpZihhKWZvcihnPTAsaz1hLmxlbmd0aDtnPGs7ZysrKWlmKGFbZ109PWQpe2FbZysrXT1jO2s9ZytlLTE7Zm9yKHZhciBwPWEubGVuZ3RoO2c8XG5wO2crKyxrKyspazxwP2FbZ109YVtrXTpkZWxldGUgYVtnXTthLmxlbmd0aC09ZS0xO2JyZWFrfWYmJmYucmVwbGFjZUNoaWxkKGMsZCk7YT1YLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTthLmFwcGVuZENoaWxkKGQpO2NbQS5leHBhbmRvXT1kW0EuZXhwYW5kb107ZD0xO2ZvcihlPWIubGVuZ3RoO2Q8ZTtkKyspZj1iW2RdLEEoZikucmVtb3ZlKCksYS5hcHBlbmRDaGlsZChmKSxkZWxldGUgYltkXTtiWzBdPWM7Yi5sZW5ndGg9MX1mdW5jdGlvbiByYyhhLGIpe3JldHVybiBFKGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxhLGIpfXZhciBPYj1mdW5jdGlvbihhLGIpe3RoaXMuJCRlbGVtZW50PWE7dGhpcy4kYXR0cj1ifHx7fX07T2IucHJvdG90eXBlPXskbm9ybWFsaXplOnFhLCRhZGRDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZ5LmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxcbmEubGVuZ3RoJiZ5LnJlbW92ZUNsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkdXBkYXRlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1zYyhhLGIpLGQ9c2MoYixhKTswPT09Yy5sZW5ndGg/eS5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxkKTowPT09ZC5sZW5ndGg/eS5hZGRDbGFzcyh0aGlzLiQkZWxlbWVudCxjKTp5LnNldENsYXNzKHRoaXMuJCRlbGVtZW50LGMsZCl9LCRzZXQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9b2ModGhpcy4kJGVsZW1lbnRbMF0sYSk7ZSYmKHRoaXMuJCRlbGVtZW50LnByb3AoYSxiKSxkPWUpO3RoaXNbYV09YjtkP3RoaXMuJGF0dHJbYV09ZDooZD10aGlzLiRhdHRyW2FdKXx8KHRoaXMuJGF0dHJbYV09ZD1uYihhLFwiLVwiKSk7ZT1QYSh0aGlzLiQkZWxlbWVudCk7aWYoXCJBXCI9PT1lJiZcImhyZWZcIj09PWF8fFwiSU1HXCI9PT1lJiZcInNyY1wiPT09YSl0aGlzW2FdPWI9SyhiLFwic3JjXCI9PT1hKTshMSE9PWMmJihudWxsPT09Ynx8Yj09PXU/dGhpcy4kJGVsZW1lbnQucmVtb3ZlQXR0cihkKTpcbnRoaXMuJCRlbGVtZW50LmF0dHIoZCxiKSk7KGM9dGhpcy4kJG9ic2VydmVycykmJnIoY1thXSxmdW5jdGlvbihhKXt0cnl7YShiKX1jYXRjaChjKXtsKGMpfX0pfSwkb2JzZXJ2ZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZD1jLiQkb2JzZXJ2ZXJzfHwoYy4kJG9ic2VydmVycz17fSksZT1kW2FdfHwoZFthXT1bXSk7ZS5wdXNoKGIpO0ouJGV2YWxBc3luYyhmdW5jdGlvbigpe2UuJCRpbnRlcnx8YihjW2FdKX0pO3JldHVybiBifX07dmFyIHNhPWIuc3RhcnRTeW1ib2woKSxJYT1iLmVuZFN5bWJvbCgpLFc9XCJ7e1wiPT1zYXx8XCJ9fVwiPT1JYT9nYTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXHtcXHsvZyxzYSkucmVwbGFjZSgvfX0vZyxJYSl9LFU9L15uZ0F0dHJbQS1aXS87cmV0dXJuIEJ9XX1mdW5jdGlvbiBxYShiKXtyZXR1cm4gYWIoYi5yZXBsYWNlKHdlLFwiXCIpKX1mdW5jdGlvbiBzYyhiLGEpe3ZhciBjPVwiXCIsZD1iLnNwbGl0KC9cXHMrLyksZT1hLnNwbGl0KC9cXHMrLyksXG5mPTA7YTpmb3IoO2Y8ZC5sZW5ndGg7ZisrKXtmb3IodmFyIGc9ZFtmXSxoPTA7aDxlLmxlbmd0aDtoKyspaWYoZz09ZVtoXSljb250aW51ZSBhO2MrPSgwPGMubGVuZ3RoP1wiIFwiOlwiXCIpK2d9cmV0dXJuIGN9ZnVuY3Rpb24gT2QoKXt2YXIgYj17fSxhPS9eKFxcUyspKFxccythc1xccysoXFx3KykpPyQvO3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYSxkKXtFYShhLFwiY29udHJvbGxlclwiKTtUKGEpP0UoYixhKTpiW2FdPWR9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiR3aW5kb3dcIixmdW5jdGlvbihjLGQpe3JldHVybiBmdW5jdGlvbihlLGYpe3ZhciBnLGgsaztHKGUpJiYoZz1lLm1hdGNoKGEpLGg9Z1sxXSxrPWdbM10sZT1iLmhhc093blByb3BlcnR5KGgpP2JbaF06ZmMoZi4kc2NvcGUsaCwhMCl8fGZjKGQsaCwhMCksWWEoZSxoLCEwKSk7Zz1jLmluc3RhbnRpYXRlKGUsZik7aWYoayl7aWYoIWZ8fFwib2JqZWN0XCIhPT10eXBlb2YgZi4kc2NvcGUpdGhyb3cgeihcIiRjb250cm9sbGVyXCIpKFwibm9zY3BcIixcbmh8fGUubmFtZSxrKTtmLiRzY29wZVtrXT1nfXJldHVybiBnfX1dfWZ1bmN0aW9uIFBkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihiKXtyZXR1cm4gQShiLmRvY3VtZW50KX1dfWZ1bmN0aW9uIFFkKCl7dGhpcy4kZ2V0PVtcIiRsb2dcIixmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiLmVycm9yLmFwcGx5KGIsYXJndW1lbnRzKX19XX1mdW5jdGlvbiB0YyhiKXt2YXIgYT17fSxjLGQsZTtpZighYilyZXR1cm4gYTtyKGIuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oYil7ZT1iLmluZGV4T2YoXCI6XCIpO2M9eCgkKGIuc3Vic3RyKDAsZSkpKTtkPSQoYi5zdWJzdHIoZSsxKSk7YyYmKGFbY109YVtjXT9hW2NdK1wiLCBcIitkOmQpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gdWMoYil7dmFyIGE9VChiKT9iOnU7cmV0dXJuIGZ1bmN0aW9uKGMpe2F8fChhPXRjKGIpKTtyZXR1cm4gYz9hW3goYyldfHxudWxsOmF9fWZ1bmN0aW9uIHZjKGIsYSxjKXtpZihOKGMpKXJldHVybiBjKGIsXG5hKTtyKGMsZnVuY3Rpb24oYyl7Yj1jKGIsYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBUZCgpe3ZhciBiPS9eXFxzKihcXFt8XFx7W15cXHtdKS8sYT0vW1xcfVxcXV1cXHMqJC8sYz0vXlxcKVxcXVxcfScsP1xcbi8sZD17XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwifSxlPXRoaXMuZGVmYXVsdHM9e3RyYW5zZm9ybVJlc3BvbnNlOltmdW5jdGlvbihkKXtHKGQpJiYoZD1kLnJlcGxhY2UoYyxcIlwiKSxiLnRlc3QoZCkmJmEudGVzdChkKSYmKGQ9YWMoZCkpKTtyZXR1cm4gZH1dLHRyYW5zZm9ybVJlcXVlc3Q6W2Z1bmN0aW9uKGEpe3JldHVybiBUKGEpJiZcIltvYmplY3QgRmlsZV1cIiE9PUJhLmNhbGwoYSkmJlwiW29iamVjdCBCbG9iXVwiIT09QmEuY2FsbChhKT9vYShhKTphfV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0scG9zdDpoYShkKSxwdXQ6aGEoZCkscGF0Y2g6aGEoZCl9LHhzcmZDb29raWVOYW1lOlwiWFNSRi1UT0tFTlwiLFxueHNyZkhlYWRlck5hbWU6XCJYLVhTUkYtVE9LRU5cIn0sZj10aGlzLmludGVyY2VwdG9ycz1bXSxnPXRoaXMucmVzcG9uc2VJbnRlcmNlcHRvcnM9W107dGhpcy4kZ2V0PVtcIiRodHRwQmFja2VuZFwiLFwiJGJyb3dzZXJcIixcIiRjYWNoZUZhY3RvcnlcIixcIiRyb290U2NvcGVcIixcIiRxXCIsXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhLGIsYyxkLG4scSl7ZnVuY3Rpb24gcChhKXtmdW5jdGlvbiBiKGEpe3ZhciBkPUUoe30sYSx7ZGF0YTp2YyhhLmRhdGEsYS5oZWFkZXJzLGMudHJhbnNmb3JtUmVzcG9uc2UpfSk7cmV0dXJuIDIwMDw9YS5zdGF0dXMmJjMwMD5hLnN0YXR1cz9kOm4ucmVqZWN0KGQpfXZhciBjPXttZXRob2Q6XCJnZXRcIix0cmFuc2Zvcm1SZXF1ZXN0OmUudHJhbnNmb3JtUmVxdWVzdCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfSxkPWZ1bmN0aW9uKGEpe3ZhciBiPWUuaGVhZGVycyxjPUUoe30sYS5oZWFkZXJzKSxkLGYsYj1FKHt9LGIuY29tbW9uLGJbeChhLm1ldGhvZCldKTtcbmE6Zm9yKGQgaW4gYil7YT14KGQpO2ZvcihmIGluIGMpaWYoeChmKT09PWEpY29udGludWUgYTtjW2RdPWJbZF19KGZ1bmN0aW9uKGEpe3ZhciBiO3IoYSxmdW5jdGlvbihjLGQpe04oYykmJihiPWMoKSxudWxsIT1iP2FbZF09YjpkZWxldGUgYVtkXSl9KX0pKGMpO3JldHVybiBjfShhKTtFKGMsYSk7Yy5oZWFkZXJzPWQ7Yy5tZXRob2Q9TGEoYy5tZXRob2QpO3ZhciBmPVtmdW5jdGlvbihhKXtkPWEuaGVhZGVyczt2YXIgYz12YyhhLmRhdGEsdWMoZCksYS50cmFuc2Zvcm1SZXF1ZXN0KTtGKGMpJiZyKGQsZnVuY3Rpb24oYSxiKXtcImNvbnRlbnQtdHlwZVwiPT09eChiKSYmZGVsZXRlIGRbYl19KTtGKGEud2l0aENyZWRlbnRpYWxzKSYmIUYoZS53aXRoQ3JlZGVudGlhbHMpJiYoYS53aXRoQ3JlZGVudGlhbHM9ZS53aXRoQ3JlZGVudGlhbHMpO3JldHVybiBzKGEsYyxkKS50aGVuKGIsYil9LHVdLGc9bi53aGVuKGMpO2ZvcihyKHQsZnVuY3Rpb24oYSl7KGEucmVxdWVzdHx8YS5yZXF1ZXN0RXJyb3IpJiZcbmYudW5zaGlmdChhLnJlcXVlc3QsYS5yZXF1ZXN0RXJyb3IpOyhhLnJlc3BvbnNlfHxhLnJlc3BvbnNlRXJyb3IpJiZmLnB1c2goYS5yZXNwb25zZSxhLnJlc3BvbnNlRXJyb3IpfSk7Zi5sZW5ndGg7KXthPWYuc2hpZnQoKTt2YXIgaD1mLnNoaWZ0KCksZz1nLnRoZW4oYSxoKX1nLnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7Zy50aGVuKGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxjKX0pO3JldHVybiBnfTtnLmVycm9yPWZ1bmN0aW9uKGEpe2cudGhlbihudWxsLGZ1bmN0aW9uKGIpe2EoYi5kYXRhLGIuc3RhdHVzLGIuaGVhZGVycyxjKX0pO3JldHVybiBnfTtyZXR1cm4gZ31mdW5jdGlvbiBzKGMsZixnKXtmdW5jdGlvbiBtKGEsYixjLGUpe0MmJigyMDA8PWEmJjMwMD5hP0MucHV0KEEsW2EsYix0YyhjKSxlXSk6Qy5yZW1vdmUoQSkpO3EoYixhLGMsZSk7ZC4kJHBoYXNlfHxkLiRhcHBseSgpfWZ1bmN0aW9uIHEoYSxiLGQsZSl7Yj1NYXRoLm1heChiLDApOygyMDA8PVxuYiYmMzAwPmI/dC5yZXNvbHZlOnQucmVqZWN0KSh7ZGF0YTphLHN0YXR1czpiLGhlYWRlcnM6dWMoZCksY29uZmlnOmMsc3RhdHVzVGV4dDplfSl9ZnVuY3Rpb24gcygpe3ZhciBhPVRhKHAucGVuZGluZ1JlcXVlc3RzLGMpOy0xIT09YSYmcC5wZW5kaW5nUmVxdWVzdHMuc3BsaWNlKGEsMSl9dmFyIHQ9bi5kZWZlcigpLHI9dC5wcm9taXNlLEMsSSxBPUooYy51cmwsYy5wYXJhbXMpO3AucGVuZGluZ1JlcXVlc3RzLnB1c2goYyk7ci50aGVuKHMscyk7IWMuY2FjaGUmJiFlLmNhY2hlfHwoITE9PT1jLmNhY2hlfHxcIkdFVFwiIT09Yy5tZXRob2QmJlwiSlNPTlBcIiE9PWMubWV0aG9kKXx8KEM9VChjLmNhY2hlKT9jLmNhY2hlOlQoZS5jYWNoZSk/ZS5jYWNoZTp3KTtpZihDKWlmKEk9Qy5nZXQoQSksRChJKSl7aWYoSSYmTihJLnRoZW4pKXJldHVybiBJLnRoZW4ocyxzKSxJO0woSSk/cShJWzFdLElbMF0saGEoSVsyXSksSVszXSk6cShJLDIwMCx7fSxcIk9LXCIpfWVsc2UgQy5wdXQoQSxyKTtGKEkpJiZcbigoST1QYihjLnVybCk/Yi5jb29raWVzKClbYy54c3JmQ29va2llTmFtZXx8ZS54c3JmQ29va2llTmFtZV06dSkmJihnW2MueHNyZkhlYWRlck5hbWV8fGUueHNyZkhlYWRlck5hbWVdPUkpLGEoYy5tZXRob2QsQSxmLG0sZyxjLnRpbWVvdXQsYy53aXRoQ3JlZGVudGlhbHMsYy5yZXNwb25zZVR5cGUpKTtyZXR1cm4gcn1mdW5jdGlvbiBKKGEsYil7aWYoIWIpcmV0dXJuIGE7dmFyIGM9W107U2MoYixmdW5jdGlvbihhLGIpe251bGw9PT1hfHxGKGEpfHwoTChhKXx8KGE9W2FdKSxyKGEsZnVuY3Rpb24oYSl7VChhKSYmKGE9dmEoYSk/YS50b0lTT1N0cmluZygpOm9hKGEpKTtjLnB1c2goRGEoYikrXCI9XCIrRGEoYSkpfSkpfSk7MDxjLmxlbmd0aCYmKGErPSgtMT09YS5pbmRleE9mKFwiP1wiKT9cIj9cIjpcIiZcIikrYy5qb2luKFwiJlwiKSk7cmV0dXJuIGF9dmFyIHc9YyhcIiRodHRwXCIpLHQ9W107cihmLGZ1bmN0aW9uKGEpe3QudW5zaGlmdChHKGEpP3EuZ2V0KGEpOnEuaW52b2tlKGEpKX0pO3IoZyxcbmZ1bmN0aW9uKGEsYil7dmFyIGM9RyhhKT9xLmdldChhKTpxLmludm9rZShhKTt0LnNwbGljZShiLDAse3Jlc3BvbnNlOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ud2hlbihhKSl9LHJlc3BvbnNlRXJyb3I6ZnVuY3Rpb24oYSl7cmV0dXJuIGMobi5yZWplY3QoYSkpfX0pfSk7cC5wZW5kaW5nUmVxdWVzdHM9W107KGZ1bmN0aW9uKGEpe3IoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3BbYV09ZnVuY3Rpb24oYixjKXtyZXR1cm4gcChFKGN8fHt9LHttZXRob2Q6YSx1cmw6Yn0pKX19KX0pKFwiZ2V0XCIsXCJkZWxldGVcIixcImhlYWRcIixcImpzb25wXCIpOyhmdW5jdGlvbihhKXtyKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtwW2FdPWZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gcChFKGR8fHt9LHttZXRob2Q6YSx1cmw6YixkYXRhOmN9KSl9fSl9KShcInBvc3RcIixcInB1dFwiLFwicGF0Y2hcIik7cC5kZWZhdWx0cz1lO3JldHVybiBwfV19ZnVuY3Rpb24geGUoYil7aWYoOD49UiYmKCFiLm1hdGNoKC9eKGdldHxwb3N0fGhlYWR8cHV0fGRlbGV0ZXxvcHRpb25zKSQvaSl8fFxuIVcuWE1MSHR0cFJlcXVlc3QpKXJldHVybiBuZXcgVy5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7aWYoVy5YTUxIdHRwUmVxdWVzdClyZXR1cm4gbmV3IFcuWE1MSHR0cFJlcXVlc3Q7dGhyb3cgeihcIiRodHRwQmFja2VuZFwiKShcIm5veGhyXCIpO31mdW5jdGlvbiBVZCgpe3RoaXMuJGdldD1bXCIkYnJvd3NlclwiLFwiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMpe3JldHVybiB5ZShiLHhlLGIuZGVmZXIsYS5hbmd1bGFyLmNhbGxiYWNrcyxjWzBdKX1dfWZ1bmN0aW9uIHllKGIsYSxjLGQsZSl7ZnVuY3Rpb24gZihhLGIsYyl7dmFyIGY9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGc9bnVsbDtmLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtmLnNyYz1hO2YuYXN5bmM9ITA7Zz1mdW5jdGlvbihhKXtiYihmLFwibG9hZFwiLGcpO2JiKGYsXCJlcnJvclwiLGcpO2UuYm9keS5yZW1vdmVDaGlsZChmKTtmPW51bGw7dmFyIGg9LTEscz1cInVua25vd25cIjthJiYoXCJsb2FkXCIhPT1cbmEudHlwZXx8ZFtiXS5jYWxsZWR8fChhPXt0eXBlOlwiZXJyb3JcIn0pLHM9YS50eXBlLGg9XCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDApO2MmJmMoaCxzKX07c2IoZixcImxvYWRcIixnKTtzYihmLFwiZXJyb3JcIixnKTs4Pj1SJiYoZi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtHKGYucmVhZHlTdGF0ZSkmJi9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZi5yZWFkeVN0YXRlKSYmKGYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZyh7dHlwZTpcImxvYWRcIn0pKX0pO2UuYm9keS5hcHBlbmRDaGlsZChmKTtyZXR1cm4gZ312YXIgZz0tMTtyZXR1cm4gZnVuY3Rpb24oZSxrLG0sbCxuLHEscCxzKXtmdW5jdGlvbiBKKCl7dD1nO0smJksoKTtCJiZCLmFib3J0KCl9ZnVuY3Rpb24gdyhhLGQsZSxmLGcpe08mJmMuY2FuY2VsKE8pO0s9Qj1udWxsOzA9PT1kJiYoZD1lPzIwMDpcImZpbGVcIj09eGEoaykucHJvdG9jb2w/NDA0OjApO2EoMTIyMz09PWQ/MjA0OmQsZSxmLGd8fFwiXCIpO2IuJCRjb21wbGV0ZU91dHN0YW5kaW5nUmVxdWVzdCh2KX1cbnZhciB0O2IuJCRpbmNPdXRzdGFuZGluZ1JlcXVlc3RDb3VudCgpO2s9a3x8Yi51cmwoKTtpZihcImpzb25wXCI9PXgoZSkpe3ZhciB5PVwiX1wiKyhkLmNvdW50ZXIrKykudG9TdHJpbmcoMzYpO2RbeV09ZnVuY3Rpb24oYSl7ZFt5XS5kYXRhPWE7ZFt5XS5jYWxsZWQ9ITB9O3ZhciBLPWYoay5yZXBsYWNlKFwiSlNPTl9DQUxMQkFDS1wiLFwiYW5ndWxhci5jYWxsYmFja3MuXCIreSkseSxmdW5jdGlvbihhLGIpe3cobCxhLGRbeV0uZGF0YSxcIlwiLGIpO2RbeV09dn0pfWVsc2V7dmFyIEI9YShlKTtCLm9wZW4oZSxrLCEwKTtyKG4sZnVuY3Rpb24oYSxiKXtEKGEpJiZCLnNldFJlcXVlc3RIZWFkZXIoYixhKX0pO0Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoQiYmND09Qi5yZWFkeVN0YXRlKXt2YXIgYT1udWxsLGI9bnVsbCxjPVwiXCI7dCE9PWcmJihhPUIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksYj1cInJlc3BvbnNlXCJpbiBCP0IucmVzcG9uc2U6Qi5yZXNwb25zZVRleHQpO3Q9PT1nJiZcbjEwPlJ8fChjPUIuc3RhdHVzVGV4dCk7dyhsLHR8fEIuc3RhdHVzLGIsYSxjKX19O3AmJihCLndpdGhDcmVkZW50aWFscz0hMCk7aWYocyl0cnl7Qi5yZXNwb25zZVR5cGU9c31jYXRjaChiYSl7aWYoXCJqc29uXCIhPT1zKXRocm93IGJhO31CLnNlbmQobXx8bnVsbCl9aWYoMDxxKXZhciBPPWMoSixxKTtlbHNlIHEmJk4ocS50aGVuKSYmcS50aGVuKEopfX1mdW5jdGlvbiBSZCgpe3ZhciBiPVwie3tcIixhPVwifX1cIjt0aGlzLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKGEpe3JldHVybiBhPyhiPWEsdGhpcyk6Yn07dGhpcy5lbmRTeW1ib2w9ZnVuY3Rpb24oYil7cmV0dXJuIGI/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHBhcnNlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJHNjZVwiLGZ1bmN0aW9uKGMsZCxlKXtmdW5jdGlvbiBmKGYsbSxsKXtmb3IodmFyIG4scSxwPTAscz1bXSxKPWYubGVuZ3RoLHc9ITEsdD1bXTtwPEo7KS0xIT0obj1mLmluZGV4T2YoYixwKSkmJi0xIT0ocT1mLmluZGV4T2YoYSxcbm4rZykpPyhwIT1uJiZzLnB1c2goZi5zdWJzdHJpbmcocCxuKSkscy5wdXNoKHA9Yyh3PWYuc3Vic3RyaW5nKG4rZyxxKSkpLHAuZXhwPXcscD1xK2gsdz0hMCk6KHAhPUomJnMucHVzaChmLnN1YnN0cmluZyhwKSkscD1KKTsoSj1zLmxlbmd0aCl8fChzLnB1c2goXCJcIiksSj0xKTtpZihsJiYxPHMubGVuZ3RoKXRocm93IHdjKFwibm9jb25jYXRcIixmKTtpZighbXx8dylyZXR1cm4gdC5sZW5ndGg9SixwPWZ1bmN0aW9uKGEpe3RyeXtmb3IodmFyIGI9MCxjPUosZztiPGM7YisrKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihnPXNbYl0pKWlmKGc9ZyhhKSxnPWw/ZS5nZXRUcnVzdGVkKGwsZyk6ZS52YWx1ZU9mKGcpLG51bGw9PWcpZz1cIlwiO2Vsc2Ugc3dpdGNoKHR5cGVvZiBnKXtjYXNlIFwic3RyaW5nXCI6YnJlYWs7Y2FzZSBcIm51bWJlclwiOmc9XCJcIitnO2JyZWFrO2RlZmF1bHQ6Zz1vYShnKX10W2JdPWd9cmV0dXJuIHQuam9pbihcIlwiKX1jYXRjaChoKXthPXdjKFwiaW50ZXJyXCIsZixoLnRvU3RyaW5nKCkpLFxuZChhKX19LHAuZXhwPWYscC5wYXJ0cz1zLHB9dmFyIGc9Yi5sZW5ndGgsaD1hLmxlbmd0aDtmLnN0YXJ0U3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2YuZW5kU3ltYm9sPWZ1bmN0aW9uKCl7cmV0dXJuIGF9O3JldHVybiBmfV19ZnVuY3Rpb24gU2QoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJHdpbmRvd1wiLFwiJHFcIixmdW5jdGlvbihiLGEsYyl7ZnVuY3Rpb24gZChkLGcsaCxrKXt2YXIgbT1hLnNldEludGVydmFsLGw9YS5jbGVhckludGVydmFsLG49Yy5kZWZlcigpLHE9bi5wcm9taXNlLHA9MCxzPUQoaykmJiFrO2g9RChoKT9oOjA7cS50aGVuKG51bGwsbnVsbCxkKTtxLiQkaW50ZXJ2YWxJZD1tKGZ1bmN0aW9uKCl7bi5ub3RpZnkocCsrKTswPGgmJnA+PWgmJihuLnJlc29sdmUocCksbChxLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbcS4kJGludGVydmFsSWRdKTtzfHxiLiRhcHBseSgpfSxnKTtlW3EuJCRpbnRlcnZhbElkXT1uO3JldHVybiBxfXZhciBlPXt9O2QuY2FuY2VsPVxuZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCRpbnRlcnZhbElkIGluIGU/KGVbYi4kJGludGVydmFsSWRdLnJlamVjdChcImNhbmNlbGVkXCIpLGEuY2xlYXJJbnRlcnZhbChiLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbYi4kJGludGVydmFsSWRdLCEwKTohMX07cmV0dXJuIGR9XX1mdW5jdGlvbiBhZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe3JldHVybntpZDpcImVuLXVzXCIsTlVNQkVSX0ZPUk1BVFM6e0RFQ0lNQUxfU0VQOlwiLlwiLEdST1VQX1NFUDpcIixcIixQQVRURVJOUzpbe21pbkludDoxLG1pbkZyYWM6MCxtYXhGcmFjOjMscG9zUHJlOlwiXCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiLVwiLG5lZ1N1ZjpcIlwiLGdTaXplOjMsbGdTaXplOjN9LHttaW5JbnQ6MSxtaW5GcmFjOjIsbWF4RnJhYzoyLHBvc1ByZTpcIlxcdTAwYTRcIixwb3NTdWY6XCJcIixuZWdQcmU6XCIoXFx1MDBhNFwiLG5lZ1N1ZjpcIilcIixnU2l6ZTozLGxnU2l6ZTozfV0sQ1VSUkVOQ1lfU1lNOlwiJFwifSxEQVRFVElNRV9GT1JNQVRTOntNT05USDpcIkphbnVhcnkgRmVicnVhcnkgTWFyY2ggQXByaWwgTWF5IEp1bmUgSnVseSBBdWd1c3QgU2VwdGVtYmVyIE9jdG9iZXIgTm92ZW1iZXIgRGVjZW1iZXJcIi5zcGxpdChcIiBcIiksXG5TSE9SVE1PTlRIOlwiSmFuIEZlYiBNYXIgQXByIE1heSBKdW4gSnVsIEF1ZyBTZXAgT2N0IE5vdiBEZWNcIi5zcGxpdChcIiBcIiksREFZOlwiU3VuZGF5IE1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXkgU2F0dXJkYXlcIi5zcGxpdChcIiBcIiksU0hPUlREQVk6XCJTdW4gTW9uIFR1ZSBXZWQgVGh1IEZyaSBTYXRcIi5zcGxpdChcIiBcIiksQU1QTVM6W1wiQU1cIixcIlBNXCJdLG1lZGl1bTpcIk1NTSBkLCB5IGg6bW06c3MgYVwiLFwic2hvcnRcIjpcIk0vZC95eSBoOm1tIGFcIixmdWxsRGF0ZTpcIkVFRUUsIE1NTU0gZCwgeVwiLGxvbmdEYXRlOlwiTU1NTSBkLCB5XCIsbWVkaXVtRGF0ZTpcIk1NTSBkLCB5XCIsc2hvcnREYXRlOlwiTS9kL3l5XCIsbWVkaXVtVGltZTpcImg6bW06c3MgYVwiLHNob3J0VGltZTpcImg6bW0gYVwifSxwbHVyYWxDYXQ6ZnVuY3Rpb24oYil7cmV0dXJuIDE9PT1iP1wib25lXCI6XCJvdGhlclwifX19fWZ1bmN0aW9uIFFiKGIpe2I9Yi5zcGxpdChcIi9cIik7Zm9yKHZhciBhPWIubGVuZ3RoO2EtLTspYlthXT1cbm1iKGJbYV0pO3JldHVybiBiLmpvaW4oXCIvXCIpfWZ1bmN0aW9uIHhjKGIsYSxjKXtiPXhhKGIsYyk7YS4kJHByb3RvY29sPWIucHJvdG9jb2w7YS4kJGhvc3Q9Yi5ob3N0bmFtZTthLiQkcG9ydD1VKGIucG9ydCl8fHplW2IucHJvdG9jb2xdfHxudWxsfWZ1bmN0aW9uIHljKGIsYSxjKXt2YXIgZD1cIi9cIiE9PWIuY2hhckF0KDApO2QmJihiPVwiL1wiK2IpO2I9eGEoYixjKTthLiQkcGF0aD1kZWNvZGVVUklDb21wb25lbnQoZCYmXCIvXCI9PT1iLnBhdGhuYW1lLmNoYXJBdCgwKT9iLnBhdGhuYW1lLnN1YnN0cmluZygxKTpiLnBhdGhuYW1lKTthLiQkc2VhcmNoPWNjKGIuc2VhcmNoKTthLiQkaGFzaD1kZWNvZGVVUklDb21wb25lbnQoYi5oYXNoKTthLiQkcGF0aCYmXCIvXCIhPWEuJCRwYXRoLmNoYXJBdCgwKSYmKGEuJCRwYXRoPVwiL1wiK2EuJCRwYXRoKX1mdW5jdGlvbiB0YShiLGEpe2lmKDA9PT1hLmluZGV4T2YoYikpcmV0dXJuIGEuc3Vic3RyKGIubGVuZ3RoKX1mdW5jdGlvbiBHYShiKXt2YXIgYT1cbmIuaW5kZXhPZihcIiNcIik7cmV0dXJuLTE9PWE/YjpiLnN1YnN0cigwLGEpfWZ1bmN0aW9uIFJiKGIpe3JldHVybiBiLnN1YnN0cigwLEdhKGIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1mdW5jdGlvbiB6YyhiLGEpe3RoaXMuJCRodG1sNT0hMDthPWF8fFwiXCI7dmFyIGM9UmIoYik7eGMoYix0aGlzLGIpO3RoaXMuJCRwYXJzZT1mdW5jdGlvbihhKXt2YXIgZT10YShjLGEpO2lmKCFHKGUpKXRocm93IFNiKFwiaXB0aHByZnhcIixhLGMpO3ljKGUsdGhpcyxiKTt0aGlzLiQkcGF0aHx8KHRoaXMuJCRwYXRoPVwiL1wiKTt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBhPUNiKHRoaXMuJCRzZWFyY2gpLGI9dGhpcy4kJGhhc2g/XCIjXCIrbWIodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1RYih0aGlzLiQkcGF0aCkrKGE/XCI/XCIrYTpcIlwiKStiO3RoaXMuJCRhYnNVcmw9Yyt0aGlzLiQkdXJsLnN1YnN0cigxKX07dGhpcy4kJHBhcnNlTGlua1VybD1mdW5jdGlvbihkLFxuZSl7dmFyIGYsZzsoZj10YShiLGQpKSE9PXU/KGc9ZixnPShmPXRhKGEsZikpIT09dT9jKyh0YShcIi9cIixmKXx8Zik6YitnKTooZj10YShjLGQpKSE9PXU/Zz1jK2Y6Yz09ZCtcIi9cIiYmKGc9Yyk7ZyYmdGhpcy4kJHBhcnNlKGcpO3JldHVybiEhZ319ZnVuY3Rpb24gVGIoYixhKXt2YXIgYz1SYihiKTt4YyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGQpe3ZhciBlPXRhKGIsZCl8fHRhKGMsZCksZT1cIiNcIj09ZS5jaGFyQXQoMCk/dGEoYSxlKTp0aGlzLiQkaHRtbDU/ZTpcIlwiO2lmKCFHKGUpKXRocm93IFNiKFwiaWhzaHByZnhcIixkLGEpO3ljKGUsdGhpcyxiKTtkPXRoaXMuJCRwYXRoO3ZhciBmPS9eXFwvW0EtWl06KFxcLy4qKS87MD09PWUuaW5kZXhPZihiKSYmKGU9ZS5yZXBsYWNlKGIsXCJcIikpO2YuZXhlYyhlKXx8KGQ9KGU9Zi5leGVjKGQpKT9lWzFdOmQpO3RoaXMuJCRwYXRoPWQ7dGhpcy4kJGNvbXBvc2UoKX07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYz1DYih0aGlzLiQkc2VhcmNoKSxcbmU9dGhpcy4kJGhhc2g/XCIjXCIrbWIodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD1RYih0aGlzLiQkcGF0aCkrKGM/XCI/XCIrYzpcIlwiKStlO3RoaXMuJCRhYnNVcmw9YisodGhpcy4kJHVybD9hK3RoaXMuJCR1cmw6XCJcIil9O3RoaXMuJCRwYXJzZUxpbmtVcmw9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gR2EoYik9PUdhKGEpPyh0aGlzLiQkcGFyc2UoYSksITApOiExfX1mdW5jdGlvbiBBYyhiLGEpe3RoaXMuJCRodG1sNT0hMDtUYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGM9UmIoYik7dGhpcy4kJHBhcnNlTGlua1VybD1mdW5jdGlvbihkLGUpe3ZhciBmLGc7Yj09R2EoZCk/Zj1kOihnPXRhKGMsZCkpP2Y9YithK2c6Yz09PWQrXCIvXCImJihmPWMpO2YmJnRoaXMuJCRwYXJzZShmKTtyZXR1cm4hIWZ9O3RoaXMuJCRjb21wb3NlPWZ1bmN0aW9uKCl7dmFyIGM9Q2IodGhpcy4kJHNlYXJjaCksZT10aGlzLiQkaGFzaD9cIiNcIittYih0aGlzLiQkaGFzaCk6XCJcIjt0aGlzLiQkdXJsPVFiKHRoaXMuJCRwYXRoKStcbihjP1wiP1wiK2M6XCJcIikrZTt0aGlzLiQkYWJzVXJsPWIrYSt0aGlzLiQkdXJsfX1mdW5jdGlvbiB0YihiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tiXX19ZnVuY3Rpb24gQmMoYixhKXtyZXR1cm4gZnVuY3Rpb24oYyl7aWYoRihjKSlyZXR1cm4gdGhpc1tiXTt0aGlzW2JdPWEoYyk7dGhpcy4kJGNvbXBvc2UoKTtyZXR1cm4gdGhpc319ZnVuY3Rpb24gVmQoKXt2YXIgYj1cIlwiLGE9ITE7dGhpcy5oYXNoUHJlZml4PWZ1bmN0aW9uKGEpe3JldHVybiBEKGEpPyhiPWEsdGhpcyk6Yn07dGhpcy5odG1sNU1vZGU9ZnVuY3Rpb24oYil7cmV0dXJuIEQoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsXCIkcm9vdEVsZW1lbnRcIixmdW5jdGlvbihjLGQsZSxmKXtmdW5jdGlvbiBnKGEpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixoLmFic1VybCgpLGEpfXZhciBoLGs9ZC5iYXNlSHJlZigpLG09ZC51cmwoKTtcbmE/KGs9bS5zdWJzdHJpbmcoMCxtLmluZGV4T2YoXCIvXCIsbS5pbmRleE9mKFwiLy9cIikrMikpKyhrfHxcIi9cIiksZT1lLmhpc3Rvcnk/emM6QWMpOihrPUdhKG0pLGU9VGIpO2g9bmV3IGUoayxcIiNcIitiKTtoLiQkcGFyc2VMaW5rVXJsKG0sbSk7dmFyIGw9L15cXHMqKGphdmFzY3JpcHR8bWFpbHRvKTovaTtmLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtpZighYS5jdHJsS2V5JiYhYS5tZXRhS2V5JiYyIT1hLndoaWNoKXtmb3IodmFyIGI9QShhLnRhcmdldCk7XCJhXCIhPT14KGJbMF0ubm9kZU5hbWUpOylpZihiWzBdPT09ZlswXXx8IShiPWIucGFyZW50KCkpWzBdKXJldHVybjt2YXIgZT1iLnByb3AoXCJocmVmXCIpLGc9Yi5hdHRyKFwiaHJlZlwiKXx8Yi5hdHRyKFwieGxpbms6aHJlZlwiKTtUKGUpJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1lLnRvU3RyaW5nKCkmJihlPXhhKGUuYW5pbVZhbCkuaHJlZik7bC50ZXN0KGUpfHwoIWV8fChiLmF0dHIoXCJ0YXJnZXRcIil8fGEuaXNEZWZhdWx0UHJldmVudGVkKCkpfHxcbiFoLiQkcGFyc2VMaW5rVXJsKGUsZykpfHwoYS5wcmV2ZW50RGVmYXVsdCgpLGguYWJzVXJsKCkhPWQudXJsKCkmJihjLiRhcHBseSgpLFcuYW5ndWxhcltcImZmLTY4NDIwOC1wcmV2ZW50RGVmYXVsdFwiXT0hMCkpfX0pO2guYWJzVXJsKCkhPW0mJmQudXJsKGguYWJzVXJsKCksITApO2Qub25VcmxDaGFuZ2UoZnVuY3Rpb24oYSl7aC5hYnNVcmwoKSE9YSYmKGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBiPWguYWJzVXJsKCk7aC4kJHBhcnNlKGEpO2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsYSxiKS5kZWZhdWx0UHJldmVudGVkPyhoLiQkcGFyc2UoYiksZC51cmwoYikpOmcoYil9KSxjLiQkcGhhc2V8fGMuJGRpZ2VzdCgpKX0pO3ZhciBuPTA7Yy4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYT1kLnVybCgpLGI9aC4kJHJlcGxhY2U7biYmYT09aC5hYnNVcmwoKXx8KG4rKyxjLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtjLiRicm9hZGNhc3QoXCIkbG9jYXRpb25DaGFuZ2VTdGFydFwiLFxuaC5hYnNVcmwoKSxhKS5kZWZhdWx0UHJldmVudGVkP2guJCRwYXJzZShhKTooZC51cmwoaC5hYnNVcmwoKSxiKSxnKGEpKX0pKTtoLiQkcmVwbGFjZT0hMTtyZXR1cm4gbn0pO3JldHVybiBofV19ZnVuY3Rpb24gV2QoKXt2YXIgYj0hMCxhPXRoaXM7dGhpcy5kZWJ1Z0VuYWJsZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGI9YSx0aGlzKTpifTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YSBpbnN0YW5jZW9mIEVycm9yJiYoYS5zdGFjaz9hPWEubWVzc2FnZSYmLTE9PT1hLnN0YWNrLmluZGV4T2YoYS5tZXNzYWdlKT9cIkVycm9yOiBcIithLm1lc3NhZ2UrXCJcXG5cIithLnN0YWNrOmEuc3RhY2s6YS5zb3VyY2VVUkwmJihhPWEubWVzc2FnZStcIlxcblwiK2Euc291cmNlVVJMK1wiOlwiK2EubGluZSkpO3JldHVybiBhfWZ1bmN0aW9uIGUoYSl7dmFyIGI9Yy5jb25zb2xlfHx7fSxlPWJbYV18fGIubG9nfHx2O2E9ITE7dHJ5e2E9ISFlLmFwcGx5fWNhdGNoKGspe31yZXR1cm4gYT9cbmZ1bmN0aW9uKCl7dmFyIGE9W107cihhcmd1bWVudHMsZnVuY3Rpb24oYil7YS5wdXNoKGQoYikpfSk7cmV0dXJuIGUuYXBwbHkoYixhKX06ZnVuY3Rpb24oYSxiKXtlKGEsbnVsbD09Yj9cIlwiOmIpfX1yZXR1cm57bG9nOmUoXCJsb2dcIiksaW5mbzplKFwiaW5mb1wiKSx3YXJuOmUoXCJ3YXJuXCIpLGVycm9yOmUoXCJlcnJvclwiKSxkZWJ1ZzpmdW5jdGlvbigpe3ZhciBjPWUoXCJkZWJ1Z1wiKTtyZXR1cm4gZnVuY3Rpb24oKXtiJiZjLmFwcGx5KGEsYXJndW1lbnRzKX19KCl9fV19ZnVuY3Rpb24ga2EoYixhKXtpZihcIl9fZGVmaW5lR2V0dGVyX19cIj09PWJ8fFwiX19kZWZpbmVTZXR0ZXJfX1wiPT09Ynx8XCJfX2xvb2t1cEdldHRlcl9fXCI9PT1ifHxcIl9fbG9va3VwU2V0dGVyX19cIj09PWJ8fFwiX19wcm90b19fXCI9PT1iKXRocm93IGxhKFwiaXNlY2ZsZFwiLGEpO3JldHVybiBifWZ1bmN0aW9uIG1hKGIsYSl7aWYoYil7aWYoYi5jb25zdHJ1Y3Rvcj09PWIpdGhyb3cgbGEoXCJpc2VjZm5cIixhKTtpZihiLmRvY3VtZW50JiZcbmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWwpdGhyb3cgbGEoXCJpc2Vjd2luZG93XCIsYSk7aWYoYi5jaGlsZHJlbiYmKGIubm9kZU5hbWV8fGIucHJvcCYmYi5hdHRyJiZiLmZpbmQpKXRocm93IGxhKFwiaXNlY2RvbVwiLGEpO2lmKGI9PT1PYmplY3QpdGhyb3cgbGEoXCJpc2Vjb2JqXCIsYSk7fXJldHVybiBifWZ1bmN0aW9uIHViKGIsYSxjLGQsZSl7bWEoYixkKTtlPWV8fHt9O2E9YS5zcGxpdChcIi5cIik7Zm9yKHZhciBmLGc9MDsxPGEubGVuZ3RoO2crKyl7Zj1rYShhLnNoaWZ0KCksZCk7dmFyIGg9bWEoYltmXSxkKTtofHwoaD17fSxiW2ZdPWgpO2I9aDtiLnRoZW4mJmUudW53cmFwUHJvbWlzZXMmJih5YShkKSxcIiQkdlwiaW4gYnx8ZnVuY3Rpb24oYSl7YS50aGVuKGZ1bmN0aW9uKGIpe2EuJCR2PWJ9KX0oYiksYi4kJHY9PT11JiYoYi4kJHY9e30pLGI9Yi4kJHYpfWY9a2EoYS5zaGlmdCgpLGQpO21hKGJbZl0sZCk7cmV0dXJuIGJbZl09Y31mdW5jdGlvbiBRYShiKXtyZXR1cm5cImNvbnN0cnVjdG9yXCI9PVxuYn1mdW5jdGlvbiBDYyhiLGEsYyxkLGUsZixnKXtrYShiLGYpO2thKGEsZik7a2EoYyxmKTtrYShkLGYpO2thKGUsZik7dmFyIGg9ZnVuY3Rpb24oYSl7cmV0dXJuIG1hKGEsZil9LGs9Zy5leHBlbnNpdmVDaGVja3MsbT1rfHxRYShiKT9oOmdhLGw9a3x8UWEoYSk/aDpnYSxuPWt8fFFhKGMpP2g6Z2EscT1rfHxRYShkKT9oOmdhLHA9a3x8UWEoZSk/aDpnYTtyZXR1cm4gZy51bndyYXBQcm9taXNlcz9mdW5jdGlvbihnLGgpe3ZhciBrPWgmJmguaGFzT3duUHJvcGVydHkoYik/aDpnLHQ7aWYobnVsbD09aylyZXR1cm4gazsoaz1tKGtbYl0pKSYmay50aGVuJiYoeWEoZiksXCIkJHZcImluIGt8fCh0PWssdC4kJHY9dSx0LnRoZW4oZnVuY3Rpb24oYSl7dC4kJHY9bShhKX0pKSxrPW0oay4kJHYpKTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiB1OyhrPWwoa1thXSkpJiZrLnRoZW4mJih5YShmKSxcIiQkdlwiaW4ga3x8KHQ9ayx0LiQkdj11LHQudGhlbihmdW5jdGlvbihhKXt0LiQkdj1cbmwoYSl9KSksaz1sKGsuJCR2KSk7aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gdTsoaz1uKGtbY10pKSYmay50aGVuJiYoeWEoZiksXCIkJHZcImluIGt8fCh0PWssdC4kJHY9dSx0LnRoZW4oZnVuY3Rpb24oYSl7dC4kJHY9bihhKX0pKSxrPW4oay4kJHYpKTtpZighZClyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiB1OyhrPXEoa1tkXSkpJiZrLnRoZW4mJih5YShmKSxcIiQkdlwiaW4ga3x8KHQ9ayx0LiQkdj11LHQudGhlbihmdW5jdGlvbihhKXt0LiQkdj1xKGEpfSkpLGs9cShrLiQkdikpO2lmKCFlKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHU7KGs9cChrW2VdKSkmJmsudGhlbiYmKHlhKGYpLFwiJCR2XCJpbiBrfHwodD1rLHQuJCR2PXUsdC50aGVuKGZ1bmN0aW9uKGEpe3QuJCR2PXAoYSl9KSksaz1wKGsuJCR2KSk7cmV0dXJuIGt9OmZ1bmN0aW9uKGYsZyl7dmFyIGg9ZyYmZy5oYXNPd25Qcm9wZXJ0eShiKT9nOmY7aWYobnVsbD09aClyZXR1cm4gaDtoPW0oaFtiXSk7XG5pZighYSlyZXR1cm4gaDtpZihudWxsPT1oKXJldHVybiB1O2g9bChoW2FdKTtpZighYylyZXR1cm4gaDtpZihudWxsPT1oKXJldHVybiB1O2g9bihoW2NdKTtpZighZClyZXR1cm4gaDtpZihudWxsPT1oKXJldHVybiB1O2g9cShoW2RdKTtyZXR1cm4gZT9udWxsPT1oP3U6aD1wKGhbZV0pOmh9fWZ1bmN0aW9uIEFlKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7cmV0dXJuIGIoYyxkLHlhLG1hLGEpfX1mdW5jdGlvbiBEYyhiLGEsYyl7dmFyIGQ9YS5leHBlbnNpdmVDaGVja3MsZT1kP0JlOkNlO2lmKGUuaGFzT3duUHJvcGVydHkoYikpcmV0dXJuIGVbYl07dmFyIGY9Yi5zcGxpdChcIi5cIiksZz1mLmxlbmd0aCxoO2lmKGEuY3NwKWg9Nj5nP0NjKGZbMF0sZlsxXSxmWzJdLGZbM10sZls0XSxjLGEpOmZ1bmN0aW9uKGIsZCl7dmFyIGU9MCxoO2RvIGg9Q2MoZltlKytdLGZbZSsrXSxmW2UrK10sZltlKytdLGZbZSsrXSxjLGEpKGIsZCksZD11LGI9aDt3aGlsZShlPGcpO3JldHVybiBofTtcbmVsc2V7dmFyIGs9XCJ2YXIgcDtcXG5cIjtkJiYoays9XCJzID0gZXNvKHMsIGZlKTtcXG5sID0gZXNvKGwsIGZlKTtcXG5cIik7dmFyIG09ZDtyKGYsZnVuY3Rpb24oYixlKXtrYShiLGMpO3ZhciBmPShlP1wic1wiOicoKGwmJmwuaGFzT3duUHJvcGVydHkoXCInK2IrJ1wiKSk/bDpzKScpKydbXCInK2IrJ1wiXScsZz1kfHxRYShiKTtnJiYoZj1cImVzbyhcIitmK1wiLCBmZSlcIixtPSEwKTtrKz1cImlmKHMgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcXG5zPVwiK2YrXCI7XFxuXCI7YS51bndyYXBQcm9taXNlcyYmKGsrPSdpZiAocyAmJiBzLnRoZW4pIHtcXG4gcHcoXCInK2MucmVwbGFjZSgvKFtcIlxcclxcbl0pL2csXCJcXFxcJDFcIikrJ1wiKTtcXG4gaWYgKCEoXCIkJHZcIiBpbiBzKSkge1xcbiBwPXM7XFxuIHAuJCR2ID0gdW5kZWZpbmVkO1xcbiBwLnRoZW4oZnVuY3Rpb24odikge3AuJCR2PScrKGc/XCJlc28odilcIjpcInZcIikrXCI7fSk7XFxufVxcbiBzPVwiKyhnP1wiZXNvKHMuJCR2KVwiOlwicy4kJHZcIikrXCJcXG59XFxuXCIpfSk7ays9XCJyZXR1cm4gcztcIjtcbmg9bmV3IEZ1bmN0aW9uKFwic1wiLFwibFwiLFwicHdcIixcImVzb1wiLFwiZmVcIixrKTtoLnRvU3RyaW5nPWFhKGspO2lmKG18fGEudW53cmFwUHJvbWlzZXMpaD1BZShoLGMpfVwiaGFzT3duUHJvcGVydHlcIiE9PWImJihlW2JdPWgpO3JldHVybiBofWZ1bmN0aW9uIFhkKCl7dmFyIGI9e30sYT17fSxjPXtjc3A6ITEsdW53cmFwUHJvbWlzZXM6ITEsbG9nUHJvbWlzZVdhcm5pbmdzOiEwLGV4cGVuc2l2ZUNoZWNrczohMX07dGhpcy51bndyYXBQcm9taXNlcz1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYy51bndyYXBQcm9taXNlcz0hIWEsdGhpcyk6Yy51bndyYXBQcm9taXNlc307dGhpcy5sb2dQcm9taXNlV2FybmluZ3M9ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSk/KGMubG9nUHJvbWlzZVdhcm5pbmdzPWEsdGhpcyk6Yy5sb2dQcm9taXNlV2FybmluZ3N9O3RoaXMuJGdldD1bXCIkZmlsdGVyXCIsXCIkc25pZmZlclwiLFwiJGxvZ1wiLGZ1bmN0aW9uKGQsZSxmKXtjLmNzcD1lLmNzcDt2YXIgZz17Y3NwOmMuY3NwLFxudW53cmFwUHJvbWlzZXM6Yy51bndyYXBQcm9taXNlcyxsb2dQcm9taXNlV2FybmluZ3M6Yy5sb2dQcm9taXNlV2FybmluZ3MsZXhwZW5zaXZlQ2hlY2tzOiEwfTt5YT1mdW5jdGlvbihhKXtjLmxvZ1Byb21pc2VXYXJuaW5ncyYmIUVjLmhhc093blByb3BlcnR5KGEpJiYoRWNbYV09ITAsZi53YXJuKFwiWyRwYXJzZV0gUHJvbWlzZSBmb3VuZCBpbiB0aGUgZXhwcmVzc2lvbiBgXCIrYStcImAuIEF1dG9tYXRpYyB1bndyYXBwaW5nIG9mIHByb21pc2VzIGluIEFuZ3VsYXIgZXhwcmVzc2lvbnMgaXMgZGVwcmVjYXRlZC5cIikpfTtyZXR1cm4gZnVuY3Rpb24oZSxmKXt2YXIgbTtzd2l0Y2godHlwZW9mIGUpe2Nhc2UgXCJzdHJpbmdcIjp2YXIgbD1mP2E6YjtpZihsLmhhc093blByb3BlcnR5KGUpKXJldHVybiBsW2VdO209Zj9nOmM7dmFyIG49bmV3IFViKG0pO209KG5ldyBnYihuLGQsbSkpLnBhcnNlKGUpO1wiaGFzT3duUHJvcGVydHlcIiE9PWUmJihsW2VdPW0pO3JldHVybiBtO2Nhc2UgXCJmdW5jdGlvblwiOnJldHVybiBlO1xuZGVmYXVsdDpyZXR1cm4gdn19fV19ZnVuY3Rpb24gWmQoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEpe3JldHVybiBEZShmdW5jdGlvbihhKXtiLiRldmFsQXN5bmMoYSl9LGEpfV19ZnVuY3Rpb24gRGUoYixhKXtmdW5jdGlvbiBjKGEpe3JldHVybiBhfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGcoYSl9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgZz1bXSxtLGw7cmV0dXJuIGw9e3Jlc29sdmU6ZnVuY3Rpb24oYSl7aWYoZyl7dmFyIGM9ZztnPXU7bT1mKGEpO2MubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MCxkPWMubGVuZ3RoO2I8ZDtiKyspYT1jW2JdLG0udGhlbihhWzBdLGFbMV0sYVsyXSl9KX19LHJlamVjdDpmdW5jdGlvbihhKXtsLnJlc29sdmUoaChhKSl9LG5vdGlmeTpmdW5jdGlvbihhKXtpZihnKXt2YXIgYz1nO2cubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBiLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYj1cbmNbZF0sYlsyXShhKX0pfX0scHJvbWlzZTp7dGhlbjpmdW5jdGlvbihiLGYsaCl7dmFyIGw9ZSgpLEo9ZnVuY3Rpb24oZCl7dHJ5e2wucmVzb2x2ZSgoTihiKT9iOmMpKGQpKX1jYXRjaChlKXtsLnJlamVjdChlKSxhKGUpfX0sdz1mdW5jdGlvbihiKXt0cnl7bC5yZXNvbHZlKChOKGYpP2Y6ZCkoYikpfWNhdGNoKGMpe2wucmVqZWN0KGMpLGEoYyl9fSx0PWZ1bmN0aW9uKGIpe3RyeXtsLm5vdGlmeSgoTihoKT9oOmMpKGIpKX1jYXRjaChkKXthKGQpfX07Zz9nLnB1c2goW0osdyx0XSk6bS50aGVuKEosdyx0KTtyZXR1cm4gbC5wcm9taXNlfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYyl7dmFyIGQ9ZSgpO2M/ZC5yZXNvbHZlKGEpOmQucmVqZWN0KGEpO3JldHVybiBkLnByb21pc2V9ZnVuY3Rpb24gZChlLGYpe3ZhciBnPW51bGw7dHJ5e2c9KGF8fGMpKCl9Y2F0Y2goaCl7cmV0dXJuIGIoaCxcbiExKX1yZXR1cm4gZyYmTihnLnRoZW4pP2cudGhlbihmdW5jdGlvbigpe3JldHVybiBiKGUsZil9LGZ1bmN0aW9uKGEpe3JldHVybiBiKGEsITEpfSk6YihlLGYpfXJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSwhMCl9LGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITEpfSl9fX19LGY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJk4oYS50aGVuKT9hOnt0aGVuOmZ1bmN0aW9uKGMpe3ZhciBkPWUoKTtiKGZ1bmN0aW9uKCl7ZC5yZXNvbHZlKGMoYSkpfSk7cmV0dXJuIGQucHJvbWlzZX19fSxnPWZ1bmN0aW9uKGEpe3ZhciBiPWUoKTtiLnJlamVjdChhKTtyZXR1cm4gYi5wcm9taXNlfSxoPWZ1bmN0aW9uKGMpe3JldHVybnt0aGVuOmZ1bmN0aW9uKGYsZyl7dmFyIGg9ZSgpO2IoZnVuY3Rpb24oKXt0cnl7aC5yZXNvbHZlKChOKGcpP2c6ZCkoYykpfWNhdGNoKGIpe2gucmVqZWN0KGIpLGEoYil9fSk7cmV0dXJuIGgucHJvbWlzZX19fTtyZXR1cm57ZGVmZXI6ZSxyZWplY3Q6ZyxcbndoZW46ZnVuY3Rpb24oaCxtLGwsbil7dmFyIHE9ZSgpLHAscz1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE4obSk/bTpjKShiKX1jYXRjaChkKXtyZXR1cm4gYShkKSxnKGQpfX0sSj1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE4obCk/bDpkKShiKX1jYXRjaChjKXtyZXR1cm4gYShjKSxnKGMpfX0sdz1mdW5jdGlvbihiKXt0cnl7cmV0dXJuKE4obik/bjpjKShiKX1jYXRjaChkKXthKGQpfX07YihmdW5jdGlvbigpe2YoaCkudGhlbihmdW5jdGlvbihhKXtwfHwocD0hMCxxLnJlc29sdmUoZihhKS50aGVuKHMsSix3KSkpfSxmdW5jdGlvbihhKXtwfHwocD0hMCxxLnJlc29sdmUoSihhKSkpfSxmdW5jdGlvbihhKXtwfHxxLm5vdGlmeSh3KGEpKX0pfSk7cmV0dXJuIHEucHJvbWlzZX0sYWxsOmZ1bmN0aW9uKGEpe3ZhciBiPWUoKSxjPTAsZD1MKGEpP1tdOnt9O3IoYSxmdW5jdGlvbihhLGUpe2MrKztmKGEpLnRoZW4oZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8KGRbZV09YSxcbi0tY3x8Yi5yZXNvbHZlKGQpKX0sZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8Yi5yZWplY3QoYSl9KX0pOzA9PT1jJiZiLnJlc29sdmUoZCk7cmV0dXJuIGIucHJvbWlzZX19fWZ1bmN0aW9uIGZlKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYixhKXt2YXIgYz1iLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8Yi53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGIubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lLGQ9Yi5jYW5jZWxBbmltYXRpb25GcmFtZXx8Yi53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8Yi5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8Yi53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsZT0hIWMsZj1lP2Z1bmN0aW9uKGEpe3ZhciBiPWMoYSk7cmV0dXJuIGZ1bmN0aW9uKCl7ZChiKX19OmZ1bmN0aW9uKGIpe3ZhciBjPWEoYiwxNi42NiwhMSk7cmV0dXJuIGZ1bmN0aW9uKCl7YS5jYW5jZWwoYyl9fTtmLnN1cHBvcnRlZD1cbmU7cmV0dXJuIGZ9XX1mdW5jdGlvbiBZZCgpe3ZhciBiPTEwLGE9eihcIiRyb290U2NvcGVcIiksYz1udWxsO3RoaXMuZGlnZXN0VHRsPWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPWEpO3JldHVybiBifTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJHBhcnNlXCIsXCIkYnJvd3NlclwiLGZ1bmN0aW9uKGQsZSxmLGcpe2Z1bmN0aW9uIGgoKXt0aGlzLiRpZD1pYigpO3RoaXMuJCRwaGFzZT10aGlzLiRwYXJlbnQ9dGhpcy4kJHdhdGNoZXJzPXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPW51bGw7dGhpc1tcInRoaXNcIl09dGhpcy4kcm9vdD10aGlzO3RoaXMuJCRkZXN0cm95ZWQ9ITE7dGhpcy4kJGFzeW5jUXVldWU9W107dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXTt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJCRpc29sYXRlQmluZGluZ3M9XG57fX1mdW5jdGlvbiBrKGIpe2lmKHEuJCRwaGFzZSl0aHJvdyBhKFwiaW5wcm9nXCIscS4kJHBoYXNlKTtxLiQkcGhhc2U9Yn1mdW5jdGlvbiBtKGEsYil7dmFyIGM9ZihhKTtZYShjLGIpO3JldHVybiBjfWZ1bmN0aW9uIGwoYSxiLGMpe2RvIGEuJCRsaXN0ZW5lckNvdW50W2NdLT1iLDA9PT1hLiQkbGlzdGVuZXJDb3VudFtjXSYmZGVsZXRlIGEuJCRsaXN0ZW5lckNvdW50W2NdO3doaWxlKGE9YS4kcGFyZW50KX1mdW5jdGlvbiBuKCl7fWgucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpoLCRuZXc6ZnVuY3Rpb24oYSl7YT8oYT1uZXcgaCxhLiRyb290PXRoaXMuJHJvb3QsYS4kJGFzeW5jUXVldWU9dGhpcy4kJGFzeW5jUXVldWUsYS4kJHBvc3REaWdlc3RRdWV1ZT10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlKToodGhpcy4kJGNoaWxkU2NvcGVDbGFzc3x8KHRoaXMuJCRjaGlsZFNjb3BlQ2xhc3M9ZnVuY3Rpb24oKXt0aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJG5leHRTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9XG50aGlzLiQkY2hpbGRUYWlsPW51bGw7dGhpcy4kJGxpc3RlbmVycz17fTt0aGlzLiQkbGlzdGVuZXJDb3VudD17fTt0aGlzLiRpZD1pYigpO3RoaXMuJCRjaGlsZFNjb3BlQ2xhc3M9bnVsbH0sdGhpcy4kJGNoaWxkU2NvcGVDbGFzcy5wcm90b3R5cGU9dGhpcyksYT1uZXcgdGhpcy4kJGNoaWxkU2NvcGVDbGFzcyk7YVtcInRoaXNcIl09YTthLiRwYXJlbnQ9dGhpczthLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkVGFpbDt0aGlzLiQkY2hpbGRIZWFkP3RoaXMuJCRjaGlsZFRhaWw9dGhpcy4kJGNoaWxkVGFpbC4kJG5leHRTaWJsaW5nPWE6dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPWE7cmV0dXJuIGF9LCR3YXRjaDpmdW5jdGlvbihhLGIsZCl7dmFyIGU9bShhLFwid2F0Y2hcIiksZj10aGlzLiQkd2F0Y2hlcnMsZz17Zm46YixsYXN0Om4sZ2V0OmUsZXhwOmEsZXE6ISFkfTtjPW51bGw7aWYoIU4oYikpe3ZhciBoPW0oYnx8dixcImxpc3RlbmVyXCIpO2cuZm49ZnVuY3Rpb24oYSxcbmIsYyl7aChjKX19aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmUuY29uc3RhbnQpe3ZhciBrPWcuZm47Zy5mbj1mdW5jdGlvbihhLGIsYyl7ay5jYWxsKHRoaXMsYSxiLGMpO1VhKGYsZyl9fWZ8fChmPXRoaXMuJCR3YXRjaGVycz1bXSk7Zi51bnNoaWZ0KGcpO3JldHVybiBmdW5jdGlvbigpe1VhKGYsZyk7Yz1udWxsfX0sJHdhdGNoQ29sbGVjdGlvbjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMsZCxlLGcsaD0xPGIubGVuZ3RoLGs9MCxsPWYoYSksbT1bXSxuPXt9LHE9ITAscj0wO3JldHVybiB0aGlzLiR3YXRjaChmdW5jdGlvbigpe2Q9bChjKTt2YXIgYSxiLGY7aWYoVChkKSlpZihTYShkKSlmb3IoZSE9PW0mJihlPW0scj1lLmxlbmd0aD0wLGsrKyksYT1kLmxlbmd0aCxyIT09YSYmKGsrKyxlLmxlbmd0aD1yPWEpLGI9MDtiPGE7YisrKWY9ZVtiXSE9PWVbYl0mJmRbYl0hPT1kW2JdLGZ8fGVbYl09PT1kW2JdfHwoaysrLGVbYl09ZFtiXSk7ZWxzZXtlIT09biYmKGU9bj17fSxyPTAsXG5rKyspO2E9MDtmb3IoYiBpbiBkKWQuaGFzT3duUHJvcGVydHkoYikmJihhKyssZS5oYXNPd25Qcm9wZXJ0eShiKT8oZj1lW2JdIT09ZVtiXSYmZFtiXSE9PWRbYl0sZnx8ZVtiXT09PWRbYl18fChrKyssZVtiXT1kW2JdKSk6KHIrKyxlW2JdPWRbYl0saysrKSk7aWYocj5hKWZvcihiIGluIGsrKyxlKWUuaGFzT3duUHJvcGVydHkoYikmJiFkLmhhc093blByb3BlcnR5KGIpJiYoci0tLGRlbGV0ZSBlW2JdKX1lbHNlIGUhPT1kJiYoZT1kLGsrKyk7cmV0dXJuIGt9LGZ1bmN0aW9uKCl7cT8ocT0hMSxiKGQsZCxjKSk6YihkLGcsYyk7aWYoaClpZihUKGQpKWlmKFNhKGQpKXtnPUFycmF5KGQubGVuZ3RoKTtmb3IodmFyIGE9MDthPGQubGVuZ3RoO2ErKylnW2FdPWRbYV19ZWxzZSBmb3IoYSBpbiBnPXt9LGQpbGIuY2FsbChkLGEpJiYoZ1thXT1kW2FdKTtlbHNlIGc9ZH0pfSwkZGlnZXN0OmZ1bmN0aW9uKCl7dmFyIGQsZixoLGwsbT10aGlzLiQkYXN5bmNRdWV1ZSxyPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUsXG5LLEIsdT1iLE8sTT1bXSxBLFAsQztrKFwiJGRpZ2VzdFwiKTtnLiQkY2hlY2tVcmxDaGFuZ2UoKTtjPW51bGw7ZG97Qj0hMTtmb3IoTz10aGlzO20ubGVuZ3RoOyl7dHJ5e0M9bS5zaGlmdCgpLEMuc2NvcGUuJGV2YWwoQy5leHByZXNzaW9uKX1jYXRjaChJKXtxLiQkcGhhc2U9bnVsbCxlKEkpfWM9bnVsbH1hOmRve2lmKGw9Ty4kJHdhdGNoZXJzKWZvcihLPWwubGVuZ3RoO0stLTspdHJ5e2lmKGQ9bFtLXSlpZigoZj1kLmdldChPKSkhPT0oaD1kLmxhc3QpJiYhKGQuZXE/Q2EoZixoKTpcIm51bWJlclwiPT09dHlwZW9mIGYmJlwibnVtYmVyXCI9PT10eXBlb2YgaCYmaXNOYU4oZikmJmlzTmFOKGgpKSlCPSEwLGM9ZCxkLmxhc3Q9ZC5lcT9LYShmLG51bGwpOmYsZC5mbihmLGg9PT1uP2Y6aCxPKSw1PnUmJihBPTQtdSxNW0FdfHwoTVtBXT1bXSksUD1OKGQuZXhwKT9cImZuOiBcIisoZC5leHAubmFtZXx8ZC5leHAudG9TdHJpbmcoKSk6ZC5leHAsUCs9XCI7IG5ld1ZhbDogXCIrb2EoZikrXCI7IG9sZFZhbDogXCIrXG5vYShoKSxNW0FdLnB1c2goUCkpO2Vsc2UgaWYoZD09PWMpe0I9ITE7YnJlYWsgYX19Y2F0Y2goRCl7cS4kJHBoYXNlPW51bGwsZShEKX1pZighKGw9Ty4kJGNoaWxkSGVhZHx8TyE9PXRoaXMmJk8uJCRuZXh0U2libGluZykpZm9yKDtPIT09dGhpcyYmIShsPU8uJCRuZXh0U2libGluZyk7KU89Ty4kcGFyZW50fXdoaWxlKE89bCk7aWYoKEJ8fG0ubGVuZ3RoKSYmIXUtLSl0aHJvdyBxLiQkcGhhc2U9bnVsbCxhKFwiaW5mZGlnXCIsYixvYShNKSk7fXdoaWxlKEJ8fG0ubGVuZ3RoKTtmb3IocS4kJHBoYXNlPW51bGw7ci5sZW5ndGg7KXRyeXtyLnNoaWZ0KCkoKX1jYXRjaCh4KXtlKHgpfX0sJGRlc3Ryb3k6ZnVuY3Rpb24oKXtpZighdGhpcy4kJGRlc3Ryb3llZCl7dmFyIGE9dGhpcy4kcGFyZW50O3RoaXMuJGJyb2FkY2FzdChcIiRkZXN0cm95XCIpO3RoaXMuJCRkZXN0cm95ZWQ9ITA7dGhpcyE9PXEmJihyKHRoaXMuJCRsaXN0ZW5lckNvdW50LEJiKG51bGwsbCx0aGlzKSksYS4kJGNoaWxkSGVhZD09XG50aGlzJiYoYS4kJGNoaWxkSGVhZD10aGlzLiQkbmV4dFNpYmxpbmcpLGEuJCRjaGlsZFRhaWw9PXRoaXMmJihhLiQkY2hpbGRUYWlsPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kJHByZXZTaWJsaW5nJiYodGhpcy4kJHByZXZTaWJsaW5nLiQkbmV4dFNpYmxpbmc9dGhpcy4kJG5leHRTaWJsaW5nKSx0aGlzLiQkbmV4dFNpYmxpbmcmJih0aGlzLiQkbmV4dFNpYmxpbmcuJCRwcmV2U2libGluZz10aGlzLiQkcHJldlNpYmxpbmcpLHRoaXMuJHBhcmVudD10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD10aGlzLiRyb290PW51bGwsdGhpcy4kJGxpc3RlbmVycz17fSx0aGlzLiQkd2F0Y2hlcnM9dGhpcy4kJGFzeW5jUXVldWU9dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXSx0aGlzLiRkZXN0cm95PXRoaXMuJGRpZ2VzdD10aGlzLiRhcHBseT12LHRoaXMuJG9uPXRoaXMuJHdhdGNoPWZ1bmN0aW9uKCl7cmV0dXJuIHZ9KX19LFxuJGV2YWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihhKSh0aGlzLGIpfSwkZXZhbEFzeW5jOmZ1bmN0aW9uKGEpe3EuJCRwaGFzZXx8cS4kJGFzeW5jUXVldWUubGVuZ3RofHxnLmRlZmVyKGZ1bmN0aW9uKCl7cS4kJGFzeW5jUXVldWUubGVuZ3RoJiZxLiRkaWdlc3QoKX0pO3RoaXMuJCRhc3luY1F1ZXVlLnB1c2goe3Njb3BlOnRoaXMsZXhwcmVzc2lvbjphfSl9LCQkcG9zdERpZ2VzdDpmdW5jdGlvbihhKXt0aGlzLiQkcG9zdERpZ2VzdFF1ZXVlLnB1c2goYSl9LCRhcHBseTpmdW5jdGlvbihhKXt0cnl7cmV0dXJuIGsoXCIkYXBwbHlcIiksdGhpcy4kZXZhbChhKX1jYXRjaChiKXtlKGIpfWZpbmFsbHl7cS4kJHBoYXNlPW51bGw7dHJ5e3EuJGRpZ2VzdCgpfWNhdGNoKGMpe3Rocm93IGUoYyksYzt9fX0sJG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy4kJGxpc3RlbmVyc1thXTtjfHwodGhpcy4kJGxpc3RlbmVyc1thXT1jPVtdKTtjLnB1c2goYik7dmFyIGQ9dGhpcztkbyBkLiQkbGlzdGVuZXJDb3VudFthXXx8XG4oZC4kJGxpc3RlbmVyQ291bnRbYV09MCksZC4kJGxpc3RlbmVyQ291bnRbYV0rKzt3aGlsZShkPWQuJHBhcmVudCk7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZD1UYShjLGIpOy0xIT09ZCYmKGNbZF09bnVsbCxsKGUsMSxhKSl9fSwkZW1pdDpmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQsZj10aGlzLGc9ITEsaD17bmFtZTphLHRhcmdldFNjb3BlOmYsc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7Zz0hMH0scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXtoLmRlZmF1bHRQcmV2ZW50ZWQ9ITB9LGRlZmF1bHRQcmV2ZW50ZWQ6ITF9LGs9W2hdLmNvbmNhdCh3YS5jYWxsKGFyZ3VtZW50cywxKSksbCxtO2Rve2Q9Zi4kJGxpc3RlbmVyc1thXXx8YztoLmN1cnJlbnRTY29wZT1mO2w9MDtmb3IobT1kLmxlbmd0aDtsPG07bCsrKWlmKGRbbF0pdHJ5e2RbbF0uYXBwbHkobnVsbCxrKX1jYXRjaChuKXtlKG4pfWVsc2UgZC5zcGxpY2UobCwxKSxsLS0sbS0tO2lmKGcpYnJlYWs7XG5mPWYuJHBhcmVudH13aGlsZShmKTtyZXR1cm4gaH0sJGJyb2FkY2FzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLGQ9dGhpcyxmPXtuYW1lOmEsdGFyZ2V0U2NvcGU6dGhpcyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2YuZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0sZz1bZl0uY29uY2F0KHdhLmNhbGwoYXJndW1lbnRzLDEpKSxoLGs7Yz1kOyl7Zi5jdXJyZW50U2NvcGU9YztkPWMuJCRsaXN0ZW5lcnNbYV18fFtdO2g9MDtmb3Ioaz1kLmxlbmd0aDtoPGs7aCsrKWlmKGRbaF0pdHJ5e2RbaF0uYXBwbHkobnVsbCxnKX1jYXRjaChsKXtlKGwpfWVsc2UgZC5zcGxpY2UoaCwxKSxoLS0say0tO2lmKCEoZD1jLiQkbGlzdGVuZXJDb3VudFthXSYmYy4kJGNoaWxkSGVhZHx8YyE9PXRoaXMmJmMuJCRuZXh0U2libGluZykpZm9yKDtjIT09dGhpcyYmIShkPWMuJCRuZXh0U2libGluZyk7KWM9Yy4kcGFyZW50fXJldHVybiBmfX07dmFyIHE9bmV3IGg7XG5yZXR1cm4gcX1dfWZ1bmN0aW9uIGJkKCl7dmFyIGI9L15cXHMqKGh0dHBzP3xmdHB8bWFpbHRvfHRlbHxmaWxlKTovLGE9L15cXHMqKChodHRwcz98ZnRwfGZpbGUpOnxkYXRhOmltYWdlXFwvKS87dGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihhKXtyZXR1cm4gRChhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBEKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9ZD9hOmIsZjtpZighUnx8ODw9UilpZihmPXhhKGMpLmhyZWYsXCJcIiE9PWYmJiFmLm1hdGNoKGUpKXJldHVyblwidW5zYWZlOlwiK2Y7cmV0dXJuIGN9fX1mdW5jdGlvbiBFZShiKXtpZihcInNlbGZcIj09PWIpcmV0dXJuIGI7aWYoRyhiKSl7aWYoLTE8Yi5pbmRleE9mKFwiKioqXCIpKXRocm93IHphKFwiaXdjYXJkXCIsYik7Yj1iLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLFxuXCJcXFxcJDFcIikucmVwbGFjZSgvXFx4MDgvZyxcIlxcXFx4MDhcIikucmVwbGFjZShcIlxcXFwqXFxcXCpcIixcIi4qXCIpLnJlcGxhY2UoXCJcXFxcKlwiLFwiW146Ly4/JjtdKlwiKTtyZXR1cm4gUmVnRXhwKFwiXlwiK2IrXCIkXCIpfWlmKGtiKGIpKXJldHVybiBSZWdFeHAoXCJeXCIrYi5zb3VyY2UrXCIkXCIpO3Rocm93IHphKFwiaW1hdGNoZXJcIik7fWZ1bmN0aW9uIEZjKGIpe3ZhciBhPVtdO0QoYikmJnIoYixmdW5jdGlvbihiKXthLnB1c2goRWUoYikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gYWUoKXt0aGlzLlNDRV9DT05URVhUUz1mYTt2YXIgYj1bXCJzZWxmXCJdLGE9W107dGhpcy5yZXNvdXJjZVVybFdoaXRlbGlzdD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1GYyhhKSk7cmV0dXJuIGJ9O3RoaXMucmVzb3VyY2VVcmxCbGFja2xpc3Q9ZnVuY3Rpb24oYil7YXJndW1lbnRzLmxlbmd0aCYmKGE9RmMoYikpO3JldHVybiBhfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXt2YXIgYj1cbmZ1bmN0aW9uKGEpe3RoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gYX19O2EmJihiLnByb3RvdHlwZT1uZXcgYSk7Yi5wcm90b3R5cGUudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCl9O2IucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKS50b1N0cmluZygpfTtyZXR1cm4gYn12YXIgZT1mdW5jdGlvbihhKXt0aHJvdyB6YShcInVuc2FmZVwiKTt9O2MuaGFzKFwiJHNhbml0aXplXCIpJiYoZT1jLmdldChcIiRzYW5pdGl6ZVwiKSk7dmFyIGY9ZCgpLGc9e307Z1tmYS5IVE1MXT1kKGYpO2dbZmEuQ1NTXT1kKGYpO2dbZmEuVVJMXT1kKGYpO2dbZmEuSlNdPWQoZik7Z1tmYS5SRVNPVVJDRV9VUkxdPWQoZ1tmYS5VUkxdKTtyZXR1cm57dHJ1c3RBczpmdW5jdGlvbihhLGIpe3ZhciBjPWcuaGFzT3duUHJvcGVydHkoYSk/Z1thXTpudWxsO2lmKCFjKXRocm93IHphKFwiaWNvbnRleHRcIixcbmEsYik7aWYobnVsbD09PWJ8fGI9PT11fHxcIlwiPT09YilyZXR1cm4gYjtpZihcInN0cmluZ1wiIT09dHlwZW9mIGIpdGhyb3cgemEoXCJpdHlwZVwiLGEpO3JldHVybiBuZXcgYyhiKX0sZ2V0VHJ1c3RlZDpmdW5jdGlvbihjLGQpe2lmKG51bGw9PT1kfHxkPT09dXx8XCJcIj09PWQpcmV0dXJuIGQ7dmFyIGY9Zy5oYXNPd25Qcm9wZXJ0eShjKT9nW2NdOm51bGw7aWYoZiYmZCBpbnN0YW5jZW9mIGYpcmV0dXJuIGQuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTtpZihjPT09ZmEuUkVTT1VSQ0VfVVJMKXt2YXIgZj14YShkLnRvU3RyaW5nKCkpLGwsbixxPSExO2w9MDtmb3Iobj1iLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YltsXT9QYihmKTpiW2xdLmV4ZWMoZi5ocmVmKSl7cT0hMDticmVha31pZihxKWZvcihsPTAsbj1hLmxlbmd0aDtsPG47bCsrKWlmKFwic2VsZlwiPT09YVtsXT9QYihmKTphW2xdLmV4ZWMoZi5ocmVmKSl7cT0hMTticmVha31pZihxKXJldHVybiBkO3Rocm93IHphKFwiaW5zZWN1cmxcIixcbmQudG9TdHJpbmcoKSk7fWlmKGM9PT1mYS5IVE1MKXJldHVybiBlKGQpO3Rocm93IHphKFwidW5zYWZlXCIpO30sdmFsdWVPZjpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIGY/YS4kJHVud3JhcFRydXN0ZWRWYWx1ZSgpOmF9fX1dfWZ1bmN0aW9uICRkKCl7dmFyIGI9ITA7dGhpcy5lbmFibGVkPWZ1bmN0aW9uKGEpe2FyZ3VtZW50cy5sZW5ndGgmJihiPSEhYSk7cmV0dXJuIGJ9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRzbmlmZmVyXCIsXCIkc2NlRGVsZWdhdGVcIixmdW5jdGlvbihhLGMsZCl7aWYoYiYmYy5tc2llJiY4PmMubXNpZURvY3VtZW50TW9kZSl0aHJvdyB6YShcImllcXVpcmtzXCIpO3ZhciBlPWhhKGZhKTtlLmlzRW5hYmxlZD1mdW5jdGlvbigpe3JldHVybiBifTtlLnRydXN0QXM9ZC50cnVzdEFzO2UuZ2V0VHJ1c3RlZD1kLmdldFRydXN0ZWQ7ZS52YWx1ZU9mPWQudmFsdWVPZjtifHwoZS50cnVzdEFzPWUuZ2V0VHJ1c3RlZD1mdW5jdGlvbihhLGIpe3JldHVybiBifSxcbmUudmFsdWVPZj1nYSk7ZS5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShjKTtyZXR1cm4gZC5saXRlcmFsJiZkLmNvbnN0YW50P2Q6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZS5nZXRUcnVzdGVkKGIsZChhLGMpKX19O3ZhciBmPWUucGFyc2VBcyxnPWUuZ2V0VHJ1c3RlZCxoPWUudHJ1c3RBcztyKGZhLGZ1bmN0aW9uKGEsYil7dmFyIGM9eChiKTtlW2FiKFwicGFyc2VfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBmKGEsYil9O2VbYWIoXCJnZXRfdHJ1c3RlZF9cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX07ZVthYihcInRydXN0X2FzX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gaChhLGIpfX0pO3JldHVybiBlfV19ZnVuY3Rpb24gYmUoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhKXt2YXIgYz17fSxkPVUoKC9hbmRyb2lkIChcXGQrKS8uZXhlYyh4KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCkpfHxbXSlbMV0pLGU9L0JveGVlL2kudGVzdCgoYi5uYXZpZ2F0b3J8fFxue30pLnVzZXJBZ2VudCksZj1hWzBdfHx7fSxnPWYuZG9jdW1lbnRNb2RlLGgsaz0vXihNb3p8d2Via2l0fE98bXMpKD89W0EtWl0pLyxtPWYuYm9keSYmZi5ib2R5LnN0eWxlLGw9ITEsbj0hMTtpZihtKXtmb3IodmFyIHEgaW4gbSlpZihsPWsuZXhlYyhxKSl7aD1sWzBdO2g9aC5zdWJzdHIoMCwxKS50b1VwcGVyQ2FzZSgpK2guc3Vic3RyKDEpO2JyZWFrfWh8fChoPVwiV2Via2l0T3BhY2l0eVwiaW4gbSYmXCJ3ZWJraXRcIik7bD0hIShcInRyYW5zaXRpb25cImluIG18fGgrXCJUcmFuc2l0aW9uXCJpbiBtKTtuPSEhKFwiYW5pbWF0aW9uXCJpbiBtfHxoK1wiQW5pbWF0aW9uXCJpbiBtKTshZHx8bCYmbnx8KGw9RyhmLmJvZHkuc3R5bGUud2Via2l0VHJhbnNpdGlvbiksbj1HKGYuYm9keS5zdHlsZS53ZWJraXRBbmltYXRpb24pKX1yZXR1cm57aGlzdG9yeTohKCFiLmhpc3Rvcnl8fCFiLmhpc3RvcnkucHVzaFN0YXRlfHw0PmR8fGUpLGhhc2hjaGFuZ2U6XCJvbmhhc2hjaGFuZ2VcImluIGImJighZ3x8NzxcbmcpLGhhc0V2ZW50OmZ1bmN0aW9uKGEpe2lmKFwiaW5wdXRcIj09YSYmOT09UilyZXR1cm4hMTtpZihGKGNbYV0pKXt2YXIgYj1mLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Y1thXT1cIm9uXCIrYSBpbiBifXJldHVybiBjW2FdfSxjc3A6WmEoKSx2ZW5kb3JQcmVmaXg6aCx0cmFuc2l0aW9uczpsLGFuaW1hdGlvbnM6bixhbmRyb2lkOmQsbXNpZTpSLG1zaWVEb2N1bWVudE1vZGU6Z319XX1mdW5jdGlvbiBkZSgpe3RoaXMuJGdldD1bXCIkcm9vdFNjb3BlXCIsXCIkYnJvd3NlclwiLFwiJHFcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixhLGMsZCl7ZnVuY3Rpb24gZShlLGgsayl7dmFyIG09Yy5kZWZlcigpLGw9bS5wcm9taXNlLG49RChrKSYmIWs7aD1hLmRlZmVyKGZ1bmN0aW9uKCl7dHJ5e20ucmVzb2x2ZShlKCkpfWNhdGNoKGEpe20ucmVqZWN0KGEpLGQoYSl9ZmluYWxseXtkZWxldGUgZltsLiQkdGltZW91dElkXX1ufHxiLiRhcHBseSgpfSxoKTtsLiQkdGltZW91dElkPWg7ZltoXT1tO1xucmV0dXJuIGx9dmFyIGY9e307ZS5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCR0aW1lb3V0SWQgaW4gZj8oZltiLiQkdGltZW91dElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxkZWxldGUgZltiLiQkdGltZW91dElkXSxhLmRlZmVyLmNhbmNlbChiLiQkdGltZW91dElkKSk6ITF9O3JldHVybiBlfV19ZnVuY3Rpb24geGEoYixhKXt2YXIgYz1iO1ImJihZLnNldEF0dHJpYnV0ZShcImhyZWZcIixjKSxjPVkuaHJlZik7WS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsYyk7cmV0dXJue2hyZWY6WS5ocmVmLHByb3RvY29sOlkucHJvdG9jb2w/WS5wcm90b2NvbC5yZXBsYWNlKC86JC8sXCJcIik6XCJcIixob3N0OlkuaG9zdCxzZWFyY2g6WS5zZWFyY2g/WS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik6XCJcIixoYXNoOlkuaGFzaD9ZLmhhc2gucmVwbGFjZSgvXiMvLFwiXCIpOlwiXCIsaG9zdG5hbWU6WS5ob3N0bmFtZSxwb3J0OlkucG9ydCxwYXRobmFtZTpcIi9cIj09PVkucGF0aG5hbWUuY2hhckF0KDApP1kucGF0aG5hbWU6XG5cIi9cIitZLnBhdGhuYW1lfX1mdW5jdGlvbiBQYihiKXtiPUcoYik/eGEoYik6YjtyZXR1cm4gYi5wcm90b2NvbD09PUdjLnByb3RvY29sJiZiLmhvc3Q9PT1HYy5ob3N0fWZ1bmN0aW9uIGVlKCl7dGhpcy4kZ2V0PWFhKFcpfWZ1bmN0aW9uIGtjKGIpe2Z1bmN0aW9uIGEoZCxlKXtpZihUKGQpKXt2YXIgZj17fTtyKGQsZnVuY3Rpb24oYixjKXtmW2NdPWEoYyxiKX0pO3JldHVybiBmfXJldHVybiBiLmZhY3RvcnkoZCtjLGUpfXZhciBjPVwiRmlsdGVyXCI7dGhpcy5yZWdpc3Rlcj1hO3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGEuZ2V0KGIrYyl9fV07YShcImN1cnJlbmN5XCIsSGMpO2EoXCJkYXRlXCIsSWMpO2EoXCJmaWx0ZXJcIixGZSk7YShcImpzb25cIixHZSk7YShcImxpbWl0VG9cIixIZSk7YShcImxvd2VyY2FzZVwiLEllKTthKFwibnVtYmVyXCIsSmMpO2EoXCJvcmRlckJ5XCIsS2MpO2EoXCJ1cHBlcmNhc2VcIixKZSl9ZnVuY3Rpb24gRmUoKXtyZXR1cm4gZnVuY3Rpb24oYixcbmEsYyl7aWYoIUwoYikpcmV0dXJuIGI7dmFyIGQ9dHlwZW9mIGMsZT1bXTtlLmNoZWNrPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8ZS5sZW5ndGg7YisrKWlmKCFlW2JdKGEpKXJldHVybiExO3JldHVybiEwfTtcImZ1bmN0aW9uXCIhPT1kJiYoYz1cImJvb2xlYW5cIj09PWQmJmM/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWGEuZXF1YWxzKGEsYil9OmZ1bmN0aW9uKGEsYil7aWYoYSYmYiYmXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcIm9iamVjdFwiPT09dHlwZW9mIGIpe2Zvcih2YXIgZCBpbiBhKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJmxiLmNhbGwoYSxkKSYmYyhhW2RdLGJbZF0pKXJldHVybiEwO3JldHVybiExfWI9KFwiXCIrYikudG9Mb3dlckNhc2UoKTtyZXR1cm4tMTwoXCJcIithKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYil9KTt2YXIgZj1mdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYiYmXCIhXCI9PT1iLmNoYXJBdCgwKSlyZXR1cm4hZihhLGIuc3Vic3RyKDEpKTtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpyZXR1cm4gYyhhLFxuYik7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaCh0eXBlb2YgYil7Y2FzZSBcIm9iamVjdFwiOnJldHVybiBjKGEsYik7ZGVmYXVsdDpmb3IodmFyIGQgaW4gYSlpZihcIiRcIiE9PWQuY2hhckF0KDApJiZmKGFbZF0sYikpcmV0dXJuITB9cmV0dXJuITE7Y2FzZSBcImFycmF5XCI6Zm9yKGQ9MDtkPGEubGVuZ3RoO2QrKylpZihmKGFbZF0sYikpcmV0dXJuITA7cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19O3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmE9eyQ6YX07Y2FzZSBcIm9iamVjdFwiOmZvcih2YXIgZyBpbiBhKShmdW5jdGlvbihiKXtcInVuZGVmaW5lZFwiIT09dHlwZW9mIGFbYl0mJmUucHVzaChmdW5jdGlvbihjKXtyZXR1cm4gZihcIiRcIj09Yj9jOmMmJmNbYl0sYVtiXSl9KX0pKGcpO2JyZWFrO2Nhc2UgXCJmdW5jdGlvblwiOmUucHVzaChhKTticmVhaztkZWZhdWx0OnJldHVybiBifWQ9W107Zm9yKGc9MDtnPGIubGVuZ3RoO2crKyl7dmFyIGg9XG5iW2ddO2UuY2hlY2soaCkmJmQucHVzaChoKX1yZXR1cm4gZH19ZnVuY3Rpb24gSGMoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXtGKGQpJiYoZD1hLkNVUlJFTkNZX1NZTSk7cmV0dXJuIExjKGIsYS5QQVRURVJOU1sxXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLDIpLnJlcGxhY2UoL1xcdTAwQTQvZyxkKX19ZnVuY3Rpb24gSmMoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXtyZXR1cm4gTGMoYixhLlBBVFRFUk5TWzBdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsZCl9fWZ1bmN0aW9uIExjKGIsYSxjLGQsZSl7aWYobnVsbD09Ynx8IWlzRmluaXRlKGIpfHxUKGIpKXJldHVyblwiXCI7dmFyIGY9MD5iO2I9TWF0aC5hYnMoYik7dmFyIGc9YitcIlwiLGg9XCJcIixrPVtdLG09ITE7aWYoLTEhPT1nLmluZGV4T2YoXCJlXCIpKXt2YXIgbD1nLm1hdGNoKC8oW1xcZFxcLl0rKWUoLT8pKFxcZCspLyk7bCYmXCItXCI9PWxbMl0mJlxubFszXT5lKzE/KGc9XCIwXCIsYj0wKTooaD1nLG09ITApfWlmKG0pMDxlJiYoLTE8YiYmMT5iKSYmKGg9Yi50b0ZpeGVkKGUpKTtlbHNle2c9KGcuc3BsaXQoTWMpWzFdfHxcIlwiKS5sZW5ndGg7RihlKSYmKGU9TWF0aC5taW4oTWF0aC5tYXgoYS5taW5GcmFjLGcpLGEubWF4RnJhYykpO2I9KyhNYXRoLnJvdW5kKCsoYi50b1N0cmluZygpK1wiZVwiK2UpKS50b1N0cmluZygpK1wiZVwiKy1lKTswPT09YiYmKGY9ITEpO2I9KFwiXCIrYikuc3BsaXQoTWMpO2c9YlswXTtiPWJbMV18fFwiXCI7dmFyIGw9MCxuPWEubGdTaXplLHE9YS5nU2l6ZTtpZihnLmxlbmd0aD49bitxKWZvcihsPWcubGVuZ3RoLW4sbT0wO208bDttKyspMD09PShsLW0pJXEmJjAhPT1tJiYoaCs9YyksaCs9Zy5jaGFyQXQobSk7Zm9yKG09bDttPGcubGVuZ3RoO20rKykwPT09KGcubGVuZ3RoLW0pJW4mJjAhPT1tJiYoaCs9YyksaCs9Zy5jaGFyQXQobSk7Zm9yKDtiLmxlbmd0aDxlOyliKz1cIjBcIjtlJiZcIjBcIiE9PWUmJihoKz1kK2Iuc3Vic3RyKDAsXG5lKSl9ay5wdXNoKGY/YS5uZWdQcmU6YS5wb3NQcmUpO2sucHVzaChoKTtrLnB1c2goZj9hLm5lZ1N1ZjphLnBvc1N1Zik7cmV0dXJuIGsuam9pbihcIlwiKX1mdW5jdGlvbiBWYihiLGEsYyl7dmFyIGQ9XCJcIjswPmImJihkPVwiLVwiLGI9LWIpO2ZvcihiPVwiXCIrYjtiLmxlbmd0aDxhOyliPVwiMFwiK2I7YyYmKGI9Yi5zdWJzdHIoYi5sZW5ndGgtYSkpO3JldHVybiBkK2J9ZnVuY3Rpb24gWihiLGEsYyxkKXtjPWN8fDA7cmV0dXJuIGZ1bmN0aW9uKGUpe2U9ZVtcImdldFwiK2JdKCk7aWYoMDxjfHxlPi1jKWUrPWM7MD09PWUmJi0xMj09YyYmKGU9MTIpO3JldHVybiBWYihlLGEsZCl9fWZ1bmN0aW9uIHZiKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9Y1tcImdldFwiK2JdKCksZj1MYShhP1wiU0hPUlRcIitiOmIpO3JldHVybiBkW2ZdW2VdfX1mdW5jdGlvbiBJYyhiKXtmdW5jdGlvbiBhKGEpe3ZhciBiO2lmKGI9YS5tYXRjaChjKSl7YT1uZXcgRGF0ZSgwKTt2YXIgZj0wLGc9MCxoPWJbOF0/XG5hLnNldFVUQ0Z1bGxZZWFyOmEuc2V0RnVsbFllYXIsaz1iWzhdP2Euc2V0VVRDSG91cnM6YS5zZXRIb3VycztiWzldJiYoZj1VKGJbOV0rYlsxMF0pLGc9VShiWzldK2JbMTFdKSk7aC5jYWxsKGEsVShiWzFdKSxVKGJbMl0pLTEsVShiWzNdKSk7Zj1VKGJbNF18fDApLWY7Zz1VKGJbNV18fDApLWc7aD1VKGJbNl18fDApO2I9TWF0aC5yb3VuZCgxRTMqcGFyc2VGbG9hdChcIjAuXCIrKGJbN118fDApKSk7ay5jYWxsKGEsZixnLGgsYil9cmV0dXJuIGF9dmFyIGM9L14oXFxkezR9KS0/KFxcZFxcZCktPyhcXGRcXGQpKD86VChcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpcXC4oXFxkKykpPyk/KT8oWnwoWystXSkoXFxkXFxkKTo/KFxcZFxcZCkpPyk/JC87cmV0dXJuIGZ1bmN0aW9uKGMsZSl7dmFyIGY9XCJcIixnPVtdLGgsaztlPWV8fFwibWVkaXVtRGF0ZVwiO2U9Yi5EQVRFVElNRV9GT1JNQVRTW2VdfHxlO0coYykmJihjPUtlLnRlc3QoYyk/VShjKTphKGMpKTtqYihjKSYmKGM9bmV3IERhdGUoYykpO1xuaWYoIXZhKGMpKXJldHVybiBjO2Zvcig7ZTspKGs9TGUuZXhlYyhlKSk/KGc9Zy5jb25jYXQod2EuY2FsbChrLDEpKSxlPWcucG9wKCkpOihnLnB1c2goZSksZT1udWxsKTtyKGcsZnVuY3Rpb24oYSl7aD1NZVthXTtmKz1oP2goYyxiLkRBVEVUSU1FX0ZPUk1BVFMpOmEucmVwbGFjZSgvKF4nfCckKS9nLFwiXCIpLnJlcGxhY2UoLycnL2csXCInXCIpfSk7cmV0dXJuIGZ9fWZ1bmN0aW9uIEdlKCl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBvYShiLCEwKX19ZnVuY3Rpb24gSGUoKXtyZXR1cm4gZnVuY3Rpb24oYixhKXtpZighTChiKSYmIUcoYikpcmV0dXJuIGI7YT1JbmZpbml0eT09PU1hdGguYWJzKE51bWJlcihhKSk/TnVtYmVyKGEpOlUoYSk7aWYoRyhiKSlyZXR1cm4gYT8wPD1hP2Iuc2xpY2UoMCxhKTpiLnNsaWNlKGEsYi5sZW5ndGgpOlwiXCI7dmFyIGM9W10sZCxlO2E+Yi5sZW5ndGg/YT1iLmxlbmd0aDphPC1iLmxlbmd0aCYmKGE9LWIubGVuZ3RoKTswPGE/KGQ9MCxlPWEpOihkPVxuYi5sZW5ndGgrYSxlPWIubGVuZ3RoKTtmb3IoO2Q8ZTtkKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfX1mdW5jdGlvbiBLYyhiKXtyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSxiKXtyZXR1cm4gV2EoYik/ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShjLGIpfTphfWZ1bmN0aW9uIGYoYSxiKXt2YXIgYz10eXBlb2YgYSxkPXR5cGVvZiBiO3JldHVybiBjPT1kPyh2YShhKSYmdmEoYikmJihhPWEudmFsdWVPZigpLGI9Yi52YWx1ZU9mKCkpLFwic3RyaW5nXCI9PWMmJihhPWEudG9Mb3dlckNhc2UoKSxiPWIudG9Mb3dlckNhc2UoKSksYT09PWI/MDphPGI/LTE6MSk6YzxkPy0xOjF9aWYoIVNhKGEpKXJldHVybiBhO2M9TChjKT9jOltjXTswPT09Yy5sZW5ndGgmJihjPVtcIitcIl0pO2M9VWMoYyxmdW5jdGlvbihhKXt2YXIgYz0hMSxkPWF8fGdhO2lmKEcoYSkpe2lmKFwiK1wiPT1hLmNoYXJBdCgwKXx8XCItXCI9PWEuY2hhckF0KDApKWM9XCItXCI9PWEuY2hhckF0KDApLGE9YS5zdWJzdHJpbmcoMSk7XG5pZihcIlwiPT09YSlyZXR1cm4gZShmdW5jdGlvbihhLGIpe3JldHVybiBmKGEsYil9LGMpO2Q9YihhKTtpZihkLmNvbnN0YW50KXt2YXIgbT1kKCk7cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihhW21dLGJbbV0pfSxjKX19cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZihkKGEpLGQoYikpfSxjKX0pO3JldHVybiB3YS5jYWxsKGEpLnNvcnQoZShmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdKGEsYik7aWYoMCE9PWUpcmV0dXJuIGV9cmV0dXJuIDB9LGQpKX19ZnVuY3Rpb24gQWEoYil7TihiKSYmKGI9e2xpbms6Yn0pO2IucmVzdHJpY3Q9Yi5yZXN0cmljdHx8XCJBQ1wiO3JldHVybiBhYShiKX1mdW5jdGlvbiBOYyhiLGEsYyxkKXtmdW5jdGlvbiBlKGEsYyl7Yz1jP1wiLVwiK25iKGMsXCItXCIpOlwiXCI7ZC5zZXRDbGFzcyhiLChhP3diOnhiKStjLChhP3hiOndiKStjKX12YXIgZj10aGlzLGc9Yi5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKXx8XG55YixoPTAsaz1mLiRlcnJvcj17fSxtPVtdO2YuJG5hbWU9YS5uYW1lfHxhLm5nRm9ybTtmLiRkaXJ0eT0hMTtmLiRwcmlzdGluZT0hMDtmLiR2YWxpZD0hMDtmLiRpbnZhbGlkPSExO2cuJGFkZENvbnRyb2woZik7Yi5hZGRDbGFzcyhSYSk7ZSghMCk7Zi4kYWRkQ29udHJvbD1mdW5jdGlvbihhKXtFYShhLiRuYW1lLFwiaW5wdXRcIik7bS5wdXNoKGEpO2EuJG5hbWUmJihmW2EuJG5hbWVdPWEpfTtmLiRyZW1vdmVDb250cm9sPWZ1bmN0aW9uKGEpe2EuJG5hbWUmJmZbYS4kbmFtZV09PT1hJiZkZWxldGUgZlthLiRuYW1lXTtyKGssZnVuY3Rpb24oYixjKXtmLiRzZXRWYWxpZGl0eShjLCEwLGEpfSk7VWEobSxhKX07Zi4kc2V0VmFsaWRpdHk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWtbYV07aWYoYilkJiYoVWEoZCxjKSxkLmxlbmd0aHx8KGgtLSxofHwoZShiKSxmLiR2YWxpZD0hMCxmLiRpbnZhbGlkPSExKSxrW2FdPSExLGUoITAsYSksZy4kc2V0VmFsaWRpdHkoYSwhMCxmKSkpO2Vsc2V7aHx8XG5lKGIpO2lmKGQpe2lmKC0xIT1UYShkLGMpKXJldHVybn1lbHNlIGtbYV09ZD1bXSxoKyssZSghMSxhKSxnLiRzZXRWYWxpZGl0eShhLCExLGYpO2QucHVzaChjKTtmLiR2YWxpZD0hMTtmLiRpbnZhbGlkPSEwfX07Zi4kc2V0RGlydHk9ZnVuY3Rpb24oKXtkLnJlbW92ZUNsYXNzKGIsUmEpO2QuYWRkQ2xhc3MoYix6Yik7Zi4kZGlydHk9ITA7Zi4kcHJpc3RpbmU9ITE7Zy4kc2V0RGlydHkoKX07Zi4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXtkLnJlbW92ZUNsYXNzKGIsemIpO2QuYWRkQ2xhc3MoYixSYSk7Zi4kZGlydHk9ITE7Zi4kcHJpc3RpbmU9ITA7cihtLGZ1bmN0aW9uKGEpe2EuJHNldFByaXN0aW5lKCl9KX19ZnVuY3Rpb24gdWEoYixhLGMsZCl7Yi4kc2V0VmFsaWRpdHkoYSxjKTtyZXR1cm4gYz9kOnV9ZnVuY3Rpb24gT2MoYixhKXt2YXIgYyxkO2lmKGEpZm9yKGM9MDtjPGEubGVuZ3RoOysrYylpZihkPWFbY10sYltkXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBOZShiLFxuYSxjLGQsZSl7VChlKSYmKGIuJCRoYXNOYXRpdmVWYWxpZGF0b3JzPSEwLGIuJHBhcnNlcnMucHVzaChmdW5jdGlvbihmKXtpZihiLiRlcnJvclthXXx8T2MoZSxkKXx8IU9jKGUsYykpcmV0dXJuIGY7Yi4kc2V0VmFsaWRpdHkoYSwhMSl9KSl9ZnVuY3Rpb24gQWIoYixhLGMsZCxlLGYpe3ZhciBnPWEucHJvcChPZSksaD1hWzBdLnBsYWNlaG9sZGVyLGs9e30sbT14KGFbMF0udHlwZSk7ZC4kJHZhbGlkaXR5U3RhdGU9ZztpZighZS5hbmRyb2lkKXt2YXIgbD0hMTthLm9uKFwiY29tcG9zaXRpb25zdGFydFwiLGZ1bmN0aW9uKGEpe2w9ITB9KTthLm9uKFwiY29tcG9zaXRpb25lbmRcIixmdW5jdGlvbigpe2w9ITE7bigpfSl9dmFyIG49ZnVuY3Rpb24oZSl7aWYoIWwpe3ZhciBmPWEudmFsKCk7aWYoUiYmXCJpbnB1dFwiPT09KGV8fGspLnR5cGUmJmFbMF0ucGxhY2Vob2xkZXIhPT1oKWg9YVswXS5wbGFjZWhvbGRlcjtlbHNlIGlmKFwicGFzc3dvcmRcIiE9PW0mJldhKGMubmdUcmltfHxcIlRcIikmJlxuKGY9JChmKSksZT1nJiZkLiQkaGFzTmF0aXZlVmFsaWRhdG9ycyxkLiR2aWV3VmFsdWUhPT1mfHxcIlwiPT09ZiYmZSliLiRyb290LiQkcGhhc2U/ZC4kc2V0Vmlld1ZhbHVlKGYpOmIuJGFwcGx5KGZ1bmN0aW9uKCl7ZC4kc2V0Vmlld1ZhbHVlKGYpfSl9fTtpZihlLmhhc0V2ZW50KFwiaW5wdXRcIikpYS5vbihcImlucHV0XCIsbik7ZWxzZXt2YXIgcSxwPWZ1bmN0aW9uKCl7cXx8KHE9Zi5kZWZlcihmdW5jdGlvbigpe24oKTtxPW51bGx9KSl9O2Eub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oYSl7YT1hLmtleUNvZGU7OTE9PT1hfHwoMTU8YSYmMTk+YXx8Mzc8PWEmJjQwPj1hKXx8cCgpfSk7aWYoZS5oYXNFdmVudChcInBhc3RlXCIpKWEub24oXCJwYXN0ZSBjdXRcIixwKX1hLm9uKFwiY2hhbmdlXCIsbik7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7YS52YWwoZC4kaXNFbXB0eShkLiR2aWV3VmFsdWUpP1wiXCI6ZC4kdmlld1ZhbHVlKX07dmFyIHM9Yy5uZ1BhdHRlcm47cyYmKChlPXMubWF0Y2goL15cXC8oLiopXFwvKFtnaW1dKikkLykpP1xuKHM9UmVnRXhwKGVbMV0sZVsyXSksZT1mdW5jdGlvbihhKXtyZXR1cm4gdWEoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGEpfHxzLnRlc3QoYSksYSl9KTplPWZ1bmN0aW9uKGMpe3ZhciBlPWIuJGV2YWwocyk7aWYoIWV8fCFlLnRlc3QpdGhyb3cgeihcIm5nUGF0dGVyblwiKShcIm5vcmVnZXhwXCIscyxlLGlhKGEpKTtyZXR1cm4gdWEoZCxcInBhdHRlcm5cIixkLiRpc0VtcHR5KGMpfHxlLnRlc3QoYyksYyl9LGQuJGZvcm1hdHRlcnMucHVzaChlKSxkLiRwYXJzZXJzLnB1c2goZSkpO2lmKGMubmdNaW5sZW5ndGgpe3ZhciByPVUoYy5uZ01pbmxlbmd0aCk7ZT1mdW5jdGlvbihhKXtyZXR1cm4gdWEoZCxcIm1pbmxlbmd0aFwiLGQuJGlzRW1wdHkoYSl8fGEubGVuZ3RoPj1yLGEpfTtkLiRwYXJzZXJzLnB1c2goZSk7ZC4kZm9ybWF0dGVycy5wdXNoKGUpfWlmKGMubmdNYXhsZW5ndGgpe3ZhciB3PVUoYy5uZ01heGxlbmd0aCk7ZT1mdW5jdGlvbihhKXtyZXR1cm4gdWEoZCxcIm1heGxlbmd0aFwiLGQuJGlzRW1wdHkoYSl8fFxuYS5sZW5ndGg8PXcsYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9fWZ1bmN0aW9uIFdiKGIsYSl7Yj1cIm5nQ2xhc3NcIitiO3JldHVybltcIiRhbmltYXRlXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhLGIpe3ZhciBjPVtdLGQ9MDthOmZvcig7ZDxhLmxlbmd0aDtkKyspe2Zvcih2YXIgZT1hW2RdLGw9MDtsPGIubGVuZ3RoO2wrKylpZihlPT1iW2xdKWNvbnRpbnVlIGE7Yy5wdXNoKGUpfXJldHVybiBjfWZ1bmN0aW9uIGUoYSl7aWYoIUwoYSkpe2lmKEcoYSkpcmV0dXJuIGEuc3BsaXQoXCIgXCIpO2lmKFQoYSkpe3ZhciBiPVtdO3IoYSxmdW5jdGlvbihhLGMpe2EmJihiPWIuY29uY2F0KGMuc3BsaXQoXCIgXCIpKSl9KTtyZXR1cm4gYn19cmV0dXJuIGF9cmV0dXJue3Jlc3RyaWN0OlwiQUNcIixsaW5rOmZ1bmN0aW9uKGYsZyxoKXtmdW5jdGlvbiBrKGEsYil7dmFyIGM9Zy5kYXRhKFwiJGNsYXNzQ291bnRzXCIpfHx7fSxkPVtdO3IoYSxmdW5jdGlvbihhKXtpZigwPFxuYnx8Y1thXSljW2FdPShjW2FdfHwwKStiLGNbYV09PT0rKDA8YikmJmQucHVzaChhKX0pO2cuZGF0YShcIiRjbGFzc0NvdW50c1wiLGMpO3JldHVybiBkLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIG0oYil7aWYoITA9PT1hfHxmLiRpbmRleCUyPT09YSl7dmFyIG09ZShifHxbXSk7aWYoIWwpe3ZhciBwPWsobSwxKTtoLiRhZGRDbGFzcyhwKX1lbHNlIGlmKCFDYShiLGwpKXt2YXIgcz1lKGwpLHA9ZChtLHMpLG09ZChzLG0pLG09ayhtLC0xKSxwPWsocCwxKTswPT09cC5sZW5ndGg/Yy5yZW1vdmVDbGFzcyhnLG0pOjA9PT1tLmxlbmd0aD9jLmFkZENsYXNzKGcscCk6Yy5zZXRDbGFzcyhnLHAsbSl9fWw9aGEoYil9dmFyIGw7Zi4kd2F0Y2goaFtiXSxtLCEwKTtoLiRvYnNlcnZlKFwiY2xhc3NcIixmdW5jdGlvbihhKXttKGYuJGV2YWwoaFtiXSkpfSk7XCJuZ0NsYXNzXCIhPT1iJiZmLiR3YXRjaChcIiRpbmRleFwiLGZ1bmN0aW9uKGMsZCl7dmFyIGc9YyYxO2lmKGchPT0oZCYxKSl7dmFyIGw9ZShmLiRldmFsKGhbYl0pKTtcbmc9PT1hPyhnPWsobCwxKSxoLiRhZGRDbGFzcyhnKSk6KGc9ayhsLC0xKSxoLiRyZW1vdmVDbGFzcyhnKSl9fSl9fX1dfXZhciBPZT1cInZhbGlkaXR5XCIseD1mdW5jdGlvbihiKXtyZXR1cm4gRyhiKT9iLnRvTG93ZXJDYXNlKCk6Yn0sbGI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxMYT1mdW5jdGlvbihiKXtyZXR1cm4gRyhiKT9iLnRvVXBwZXJDYXNlKCk6Yn0sUixBLEZhLHdhPVtdLnNsaWNlLFBlPVtdLnB1c2gsQmE9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxWYT16KFwibmdcIiksWGE9Vy5hbmd1bGFyfHwoVy5hbmd1bGFyPXt9KSwkYSxQYSxuYT1bXCIwXCIsXCIwXCIsXCIwXCJdO1I9VSgoL21zaWUgKFxcZCspLy5leGVjKHgobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxbXSlbMV0pO2lzTmFOKFIpJiYoUj1VKCgvdHJpZGVudFxcLy4qOyBydjooXFxkKykvLmV4ZWMoeChuYXZpZ2F0b3IudXNlckFnZW50KSl8fFtdKVsxXSkpO3YuJGluamVjdD1bXTtnYS4kaW5qZWN0PVtdO3ZhciBMPVxuZnVuY3Rpb24oKXtyZXR1cm4gTihBcnJheS5pc0FycmF5KT9BcnJheS5pc0FycmF5OmZ1bmN0aW9uKGIpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PUJhLmNhbGwoYil9fSgpLCQ9ZnVuY3Rpb24oKXtyZXR1cm4gU3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGIpe3JldHVybiBHKGIpP2IudHJpbSgpOmJ9OmZ1bmN0aW9uKGIpe3JldHVybiBHKGIpP2IucmVwbGFjZSgvXlxcc1xccyovLFwiXCIpLnJlcGxhY2UoL1xcc1xccyokLyxcIlwiKTpifX0oKTtQYT05PlI/ZnVuY3Rpb24oYil7Yj1iLm5vZGVOYW1lP2I6YlswXTtyZXR1cm4gYi5zY29wZU5hbWUmJlwiSFRNTFwiIT1iLnNjb3BlTmFtZT9MYShiLnNjb3BlTmFtZStcIjpcIitiLm5vZGVOYW1lKTpiLm5vZGVOYW1lfTpmdW5jdGlvbihiKXtyZXR1cm4gYi5ub2RlTmFtZT9iLm5vZGVOYW1lOmJbMF0ubm9kZU5hbWV9O3ZhciBaYT1mdW5jdGlvbigpe2lmKEQoWmEuaXNBY3RpdmVfKSlyZXR1cm4gWmEuaXNBY3RpdmVfO3ZhciBiPSEoIVgucXVlcnlTZWxlY3RvcihcIltuZy1jc3BdXCIpJiZcbiFYLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZy1jc3BdXCIpKTtpZighYil0cnl7bmV3IEZ1bmN0aW9uKFwiXCIpfWNhdGNoKGEpe2I9ITB9cmV0dXJuIFphLmlzQWN0aXZlXz1ifSxYYz0vW0EtWl0vZywkYz17ZnVsbDpcIjEuMi4yOFwiLG1ham9yOjEsbWlub3I6Mixkb3Q6MjgsY29kZU5hbWU6XCJmaW5uaXNoLWRpc2VtYmFya2F0aW9uXCJ9O1MuZXhwYW5kbz1cIm5nMzM5XCI7dmFyIGNiPVMuY2FjaGU9e30sbWU9MSxzYj1XLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5hdHRhY2hFdmVudChcIm9uXCIrYSxjKX0sYmI9Vy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuZGV0YWNoRXZlbnQoXCJvblwiK2EsYyl9O1MuX2RhdGE9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY2FjaGVbYlt0aGlzLmV4cGFuZG9dXXx8XG57fX07dmFyIGhlPS8oW1xcOlxcLVxcX10rKC4pKS9nLGllPS9ebW96KFtBLVpdKS8sSGI9eihcImpxTGl0ZVwiKSxqZT0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sSWI9Lzx8JiM/XFx3KzsvLGtlPS88KFtcXHc6XSspLyxsZT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksZGE9e29wdGlvbjpbMSwnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JyxcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtkYS5vcHRncm91cD1kYS5vcHRpb247ZGEudGJvZHk9ZGEudGZvb3Q9ZGEuY29sZ3JvdXA9XG5kYS5jYXB0aW9uPWRhLnRoZWFkO2RhLnRoPWRhLnRkO3ZhciBPYT1TLnByb3RvdHlwZT17cmVhZHk6ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYSgpe2N8fChjPSEwLGIoKSl9dmFyIGM9ITE7XCJjb21wbGV0ZVwiPT09WC5yZWFkeVN0YXRlP3NldFRpbWVvdXQoYSk6KHRoaXMub24oXCJET01Db250ZW50TG9hZGVkXCIsYSksUyhXKS5vbihcImxvYWRcIixhKSl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGI9W107cih0aGlzLGZ1bmN0aW9uKGEpe2IucHVzaChcIlwiK2EpfSk7cmV0dXJuXCJbXCIrYi5qb2luKFwiLCBcIikrXCJdXCJ9LGVxOmZ1bmN0aW9uKGIpe3JldHVybiAwPD1iP0EodGhpc1tiXSk6QSh0aGlzW3RoaXMubGVuZ3RoK2JdKX0sbGVuZ3RoOjAscHVzaDpQZSxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0scmI9e307cihcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtyYlt4KGIpXT1ifSk7XG52YXIgcGM9e307cihcImlucHV0IHNlbGVjdCBvcHRpb24gdGV4dGFyZWEgYnV0dG9uIGZvcm0gZGV0YWlsc1wiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtwY1tMYShiKV09ITB9KTtyKHtkYXRhOk1iLHJlbW92ZURhdGE6TGJ9LGZ1bmN0aW9uKGIsYSl7U1thXT1ifSk7cih7ZGF0YTpNYixpbmhlcml0ZWREYXRhOnFiLHNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiBBLmRhdGEoYixcIiRzY29wZVwiKXx8cWIoYi5wYXJlbnROb2RlfHxiLFtcIiRpc29sYXRlU2NvcGVcIixcIiRzY29wZVwiXSl9LGlzb2xhdGVTY29wZTpmdW5jdGlvbihiKXtyZXR1cm4gQS5kYXRhKGIsXCIkaXNvbGF0ZVNjb3BlXCIpfHxBLmRhdGEoYixcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIpfSxjb250cm9sbGVyOm1jLGluamVjdG9yOmZ1bmN0aW9uKGIpe3JldHVybiBxYihiLFwiJGluamVjdG9yXCIpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGIsYSl7Yi5yZW1vdmVBdHRyaWJ1dGUoYSl9LGhhc0NsYXNzOk5iLGNzczpmdW5jdGlvbihiLFxuYSxjKXthPWFiKGEpO2lmKEQoYykpYi5zdHlsZVthXT1jO2Vsc2V7dmFyIGQ7OD49UiYmKGQ9Yi5jdXJyZW50U3R5bGUmJmIuY3VycmVudFN0eWxlW2FdLFwiXCI9PT1kJiYoZD1cImF1dG9cIikpO2Q9ZHx8Yi5zdHlsZVthXTs4Pj1SJiYoZD1cIlwiPT09ZD91OmQpO3JldHVybiBkfX0sYXR0cjpmdW5jdGlvbihiLGEsYyl7dmFyIGQ9eChhKTtpZihyYltkXSlpZihEKGMpKWM/KGJbYV09ITAsYi5zZXRBdHRyaWJ1dGUoYSxkKSk6KGJbYV09ITEsYi5yZW1vdmVBdHRyaWJ1dGUoZCkpO2Vsc2UgcmV0dXJuIGJbYV18fChiLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKGEpfHx2KS5zcGVjaWZpZWQ/ZDp1O2Vsc2UgaWYoRChjKSliLnNldEF0dHJpYnV0ZShhLGMpO2Vsc2UgaWYoYi5nZXRBdHRyaWJ1dGUpcmV0dXJuIGI9Yi5nZXRBdHRyaWJ1dGUoYSwyKSxudWxsPT09Yj91OmJ9LHByb3A6ZnVuY3Rpb24oYixhLGMpe2lmKEQoYykpYlthXT1jO2Vsc2UgcmV0dXJuIGJbYV19LHRleHQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsXG5kKXt2YXIgZT1hW2Iubm9kZVR5cGVdO2lmKEYoZCkpcmV0dXJuIGU/YltlXTpcIlwiO2JbZV09ZH12YXIgYT1bXTs5PlI/KGFbMV09XCJpbm5lclRleHRcIixhWzNdPVwibm9kZVZhbHVlXCIpOmFbMV09YVszXT1cInRleHRDb250ZW50XCI7Yi4kZHY9XCJcIjtyZXR1cm4gYn0oKSx2YWw6ZnVuY3Rpb24oYixhKXtpZihGKGEpKXtpZihcIlNFTEVDVFwiPT09UGEoYikmJmIubXVsdGlwbGUpe3ZhciBjPVtdO3IoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe2Euc2VsZWN0ZWQmJmMucHVzaChhLnZhbHVlfHxhLnRleHQpfSk7cmV0dXJuIDA9PT1jLmxlbmd0aD9udWxsOmN9cmV0dXJuIGIudmFsdWV9Yi52YWx1ZT1hfSxodG1sOmZ1bmN0aW9uKGIsYSl7aWYoRihhKSlyZXR1cm4gYi5pbm5lckhUTUw7Zm9yKHZhciBjPTAsZD1iLmNoaWxkTm9kZXM7YzxkLmxlbmd0aDtjKyspTWEoZFtjXSk7Yi5pbm5lckhUTUw9YX0sZW1wdHk6bmN9LGZ1bmN0aW9uKGIsYSl7Uy5wcm90b3R5cGVbYV09ZnVuY3Rpb24oYSxkKXt2YXIgZSxcbmYsZz10aGlzLmxlbmd0aDtpZihiIT09bmMmJigyPT1iLmxlbmd0aCYmYiE9PU5iJiZiIT09bWM/YTpkKT09PXUpe2lmKFQoYSkpe2ZvcihlPTA7ZTxnO2UrKylpZihiPT09TWIpYih0aGlzW2VdLGEpO2Vsc2UgZm9yKGYgaW4gYSliKHRoaXNbZV0sZixhW2ZdKTtyZXR1cm4gdGhpc31lPWIuJGR2O2c9ZT09PXU/TWF0aC5taW4oZywxKTpnO2ZvcihmPTA7ZjxnO2YrKyl7dmFyIGg9Yih0aGlzW2ZdLGEsZCk7ZT1lP2UraDpofXJldHVybiBlfWZvcihlPTA7ZTxnO2UrKyliKHRoaXNbZV0sYSxkKTtyZXR1cm4gdGhpc319KTtyKHtyZW1vdmVEYXRhOkxiLGRlYWxvYzpNYSxvbjpmdW5jdGlvbiBhKGMsZCxlLGYpe2lmKEQoZikpdGhyb3cgSGIoXCJvbmFyZ3NcIik7dmFyIGc9cGEoYyxcImV2ZW50c1wiKSxoPXBhKGMsXCJoYW5kbGVcIik7Z3x8cGEoYyxcImV2ZW50c1wiLGc9e30pO2h8fHBhKGMsXCJoYW5kbGVcIixoPW5lKGMsZykpO3IoZC5zcGxpdChcIiBcIiksZnVuY3Rpb24oZCl7dmFyIGY9Z1tkXTtpZighZil7aWYoXCJtb3VzZWVudGVyXCI9PVxuZHx8XCJtb3VzZWxlYXZlXCI9PWQpe3ZhciBsPVguYm9keS5jb250YWluc3x8WC5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGEsYyl7dmFyIGQ9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxlPWMmJmMucGFyZW50Tm9kZTtyZXR1cm4gYT09PWV8fCEhKGUmJjE9PT1lLm5vZGVUeXBlJiYoZC5jb250YWlucz9kLmNvbnRhaW5zKGUpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSkmMTYpKX06ZnVuY3Rpb24oYSxjKXtpZihjKWZvcig7Yz1jLnBhcmVudE5vZGU7KWlmKGM9PT1hKXJldHVybiEwO3JldHVybiExfTtnW2RdPVtdO2EoYyx7bW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIsbW91c2VlbnRlcjpcIm1vdXNlb3ZlclwifVtkXSxmdW5jdGlvbihhKXt2YXIgYz1hLnJlbGF0ZWRUYXJnZXQ7YyYmKGM9PT10aGlzfHxsKHRoaXMsYykpfHxoKGEsZCl9KX1lbHNlIHNiKGMsZCxoKSxnW2RdPVtdO2Y9Z1tkXX1mLnB1c2goZSl9KX0sXG5vZmY6bGMsb25lOmZ1bmN0aW9uKGEsYyxkKXthPUEoYSk7YS5vbihjLGZ1bmN0aW9uIGYoKXthLm9mZihjLGQpO2Eub2ZmKGMsZil9KTthLm9uKGMsZCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGEsYyl7dmFyIGQsZT1hLnBhcmVudE5vZGU7TWEoYSk7cihuZXcgUyhjKSxmdW5jdGlvbihjKXtkP2UuaW5zZXJ0QmVmb3JlKGMsZC5uZXh0U2libGluZyk6ZS5yZXBsYWNlQ2hpbGQoYyxhKTtkPWN9KX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7dmFyIGM9W107cihhLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7MT09PWEubm9kZVR5cGUmJmMucHVzaChhKX0pO3JldHVybiBjfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fGEuY2hpbGROb2Rlc3x8W119LGFwcGVuZDpmdW5jdGlvbihhLGMpe3IobmV3IFMoYyksZnVuY3Rpb24oYyl7MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8YS5hcHBlbmRDaGlsZChjKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKGEsXG5jKXtpZigxPT09YS5ub2RlVHlwZSl7dmFyIGQ9YS5maXJzdENoaWxkO3IobmV3IFMoYyksZnVuY3Rpb24oYyl7YS5pbnNlcnRCZWZvcmUoYyxkKX0pfX0sd3JhcDpmdW5jdGlvbihhLGMpe2M9QShjKVswXTt2YXIgZD1hLnBhcmVudE5vZGU7ZCYmZC5yZXBsYWNlQ2hpbGQoYyxhKTtjLmFwcGVuZENoaWxkKGEpfSxyZW1vdmU6ZnVuY3Rpb24oYSl7TWEoYSk7dmFyIGM9YS5wYXJlbnROb2RlO2MmJmMucmVtb3ZlQ2hpbGQoYSl9LGFmdGVyOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9YSxlPWEucGFyZW50Tm9kZTtyKG5ldyBTKGMpLGZ1bmN0aW9uKGEpe2UuaW5zZXJ0QmVmb3JlKGEsZC5uZXh0U2libGluZyk7ZD1hfSl9LGFkZENsYXNzOnBiLHJlbW92ZUNsYXNzOm9iLHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYyxkKXtjJiZyKGMuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGMpe3ZhciBmPWQ7RihmKSYmKGY9IU5iKGEsYykpOyhmP3BiOm9iKShhLGMpfSl9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4oYT1cbmEucGFyZW50Tm9kZSkmJjExIT09YS5ub2RlVHlwZT9hOm51bGx9LG5leHQ6ZnVuY3Rpb24oYSl7aWYoYS5uZXh0RWxlbWVudFNpYmxpbmcpcmV0dXJuIGEubmV4dEVsZW1lbnRTaWJsaW5nO2ZvcihhPWEubmV4dFNpYmxpbmc7bnVsbCE9YSYmMSE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX0sZmluZDpmdW5jdGlvbihhLGMpe3JldHVybiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYyk6W119LGNsb25lOktiLHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmO2U9Yy50eXBlfHxjO3ZhciBnPShwYShhLFwiZXZlbnRzXCIpfHx7fSlbZV07ZyYmKGU9e3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwfSxpc0RlZmF1bHRQcmV2ZW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMD09PXRoaXMuZGVmYXVsdFByZXZlbnRlZH0sc3RvcFByb3BhZ2F0aW9uOnYsdHlwZTplLHRhcmdldDphfSxcbmMudHlwZSYmKGU9RShlLGMpKSxjPWhhKGcpLGY9ZD9bZV0uY29uY2F0KGQpOltlXSxyKGMsZnVuY3Rpb24oYyl7Yy5hcHBseShhLGYpfSkpfX0sZnVuY3Rpb24oYSxjKXtTLnByb3RvdHlwZVtjXT1mdW5jdGlvbihjLGUsZil7Zm9yKHZhciBnLGg9MDtoPHRoaXMubGVuZ3RoO2grKylGKGcpPyhnPWEodGhpc1toXSxjLGUsZiksRChnKSYmKGc9QShnKSkpOkpiKGcsYSh0aGlzW2hdLGMsZSxmKSk7cmV0dXJuIEQoZyk/Zzp0aGlzfTtTLnByb3RvdHlwZS5iaW5kPVMucHJvdG90eXBlLm9uO1MucHJvdG90eXBlLnVuYmluZD1TLnByb3RvdHlwZS5vZmZ9KTtkYi5wcm90b3R5cGU9e3B1dDpmdW5jdGlvbihhLGMpe3RoaXNbTmEoYSx0aGlzLm5leHRVaWQpXT1jfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXNbTmEoYSx0aGlzLm5leHRVaWQpXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXNbYT1OYShhLHRoaXMubmV4dFVpZCldO2RlbGV0ZSB0aGlzW2FdO3JldHVybiBjfX07dmFyIHBlPVxuL15mdW5jdGlvblxccypbXlxcKF0qXFwoXFxzKihbXlxcKV0qKVxcKS9tLHFlPS8sLyxyZT0vXlxccyooXz8pKFxcUys/KVxcMVxccyokLyxvZT0vKChcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKSkvbWcsZWI9eihcIiRpbmplY3RvclwiKSxRZT16KFwiJGFuaW1hdGVcIiksTGQ9W1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXt0aGlzLiQkc2VsZWN0b3JzPXt9O3RoaXMucmVnaXN0ZXI9ZnVuY3Rpb24oYyxkKXt2YXIgZT1jK1wiLWFuaW1hdGlvblwiO2lmKGMmJlwiLlwiIT1jLmNoYXJBdCgwKSl0aHJvdyBRZShcIm5vdGNzZWxcIixjKTt0aGlzLiQkc2VsZWN0b3JzW2Muc3Vic3RyKDEpXT1lO2EuZmFjdG9yeShlLGQpfTt0aGlzLmNsYXNzTmFtZUZpbHRlcj1mdW5jdGlvbihhKXsxPT09YXJndW1lbnRzLmxlbmd0aCYmKHRoaXMuJCRjbGFzc05hbWVGaWx0ZXI9YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOm51bGwpO3JldHVybiB0aGlzLiQkY2xhc3NOYW1lRmlsdGVyfTt0aGlzLiRnZXQ9W1wiJHRpbWVvdXRcIixcIiQkYXN5bmNDYWxsYmFja1wiLFxuZnVuY3Rpb24oYSxkKXtyZXR1cm57ZW50ZXI6ZnVuY3Rpb24oYSxjLGcsaCl7Zz9nLmFmdGVyKGEpOihjJiZjWzBdfHwoYz1nLnBhcmVudCgpKSxjLmFwcGVuZChhKSk7aCYmZChoKX0sbGVhdmU6ZnVuY3Rpb24oYSxjKXthLnJlbW92ZSgpO2MmJmQoYyl9LG1vdmU6ZnVuY3Rpb24oYSxjLGQsaCl7dGhpcy5lbnRlcihhLGMsZCxoKX0sYWRkQ2xhc3M6ZnVuY3Rpb24oYSxjLGcpe2M9RyhjKT9jOkwoYyk/Yy5qb2luKFwiIFwiKTpcIlwiO3IoYSxmdW5jdGlvbihhKXtwYihhLGMpfSk7ZyYmZChnKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxjLGcpe2M9RyhjKT9jOkwoYyk/Yy5qb2luKFwiIFwiKTpcIlwiO3IoYSxmdW5jdGlvbihhKXtvYihhLGMpfSk7ZyYmZChnKX0sc2V0Q2xhc3M6ZnVuY3Rpb24oYSxjLGcsaCl7cihhLGZ1bmN0aW9uKGEpe3BiKGEsYyk7b2IoYSxnKX0pO2gmJmQoaCl9LGVuYWJsZWQ6dn19XX1dLGphPXooXCIkY29tcGlsZVwiKTtnYy4kaW5qZWN0PVtcIiRwcm92aWRlXCIsXCIkJHNhbml0aXplVXJpUHJvdmlkZXJcIl07XG52YXIgd2U9L14oeFtcXDpcXC1fXXxkYXRhW1xcOlxcLV9dKS9pLHdjPXooXCIkaW50ZXJwb2xhdGVcIiksUmU9L14oW15cXD8jXSopKFxcPyhbXiNdKikpPygjKC4qKSk/JC8semU9e2h0dHA6ODAsaHR0cHM6NDQzLGZ0cDoyMX0sU2I9eihcIiRsb2NhdGlvblwiKTtBYy5wcm90b3R5cGU9VGIucHJvdG90eXBlPXpjLnByb3RvdHlwZT17JCRodG1sNTohMSwkJHJlcGxhY2U6ITEsYWJzVXJsOnRiKFwiJCRhYnNVcmxcIiksdXJsOmZ1bmN0aW9uKGEpe2lmKEYoYSkpcmV0dXJuIHRoaXMuJCR1cmw7YT1SZS5leGVjKGEpO2FbMV0mJnRoaXMucGF0aChkZWNvZGVVUklDb21wb25lbnQoYVsxXSkpOyhhWzJdfHxhWzFdKSYmdGhpcy5zZWFyY2goYVszXXx8XCJcIik7dGhpcy5oYXNoKGFbNV18fFwiXCIpO3JldHVybiB0aGlzfSxwcm90b2NvbDp0YihcIiQkcHJvdG9jb2xcIiksaG9zdDp0YihcIiQkaG9zdFwiKSxwb3J0OnRiKFwiJCRwb3J0XCIpLHBhdGg6QmMoXCIkJHBhdGhcIixmdW5jdGlvbihhKXthPW51bGwhPT1hP2EudG9TdHJpbmcoKTpcblwiXCI7cmV0dXJuXCIvXCI9PWEuY2hhckF0KDApP2E6XCIvXCIrYX0pLHNlYXJjaDpmdW5jdGlvbihhLGMpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIHRoaXMuJCRzZWFyY2g7Y2FzZSAxOmlmKEcoYSl8fGpiKGEpKWE9YS50b1N0cmluZygpLHRoaXMuJCRzZWFyY2g9Y2MoYSk7ZWxzZSBpZihUKGEpKXIoYSxmdW5jdGlvbihjLGUpe251bGw9PWMmJmRlbGV0ZSBhW2VdfSksdGhpcy4kJHNlYXJjaD1hO2Vsc2UgdGhyb3cgU2IoXCJpc3JjaGFyZ1wiKTticmVhaztkZWZhdWx0OkYoYyl8fG51bGw9PT1jP2RlbGV0ZSB0aGlzLiQkc2VhcmNoW2FdOnRoaXMuJCRzZWFyY2hbYV09Y310aGlzLiQkY29tcG9zZSgpO3JldHVybiB0aGlzfSxoYXNoOkJjKFwiJCRoYXNoXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hP2EudG9TdHJpbmcoKTpcIlwifSkscmVwbGFjZTpmdW5jdGlvbigpe3RoaXMuJCRyZXBsYWNlPSEwO3JldHVybiB0aGlzfX07dmFyIGxhPXooXCIkcGFyc2VcIiksRWM9XG57fSx5YSxTZT1GdW5jdGlvbi5wcm90b3R5cGUuY2FsbCxUZT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHksUGM9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsaGI9e1wibnVsbFwiOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LFwidHJ1ZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITB9LFwiZmFsc2VcIjpmdW5jdGlvbigpe3JldHVybiExfSx1bmRlZmluZWQ6dixcIitcIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4gRChkKT9EKGUpP2QrZTpkOkQoZSk/ZTp1fSxcIi1cIjpmdW5jdGlvbihhLGMsZCxlKXtkPWQoYSxjKTtlPWUoYSxjKTtyZXR1cm4oRChkKT9kOjApLShEKGUpP2U6MCl9LFwiKlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykqZShhLGMpfSxcIi9cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpL2UoYSxjKX0sXCIlXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSVlKGEsYyl9LFwiXlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyleXG5lKGEsYyl9LFwiPVwiOnYsXCI9PT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT09ZShhLGMpfSxcIiE9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPT1lKGEsYyl9LFwiPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT1lKGEsYyl9LFwiIT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpIT1lKGEsYyl9LFwiPFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8ZShhLGMpfSxcIj5cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPmUoYSxjKX0sXCI8PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk8PWUoYSxjKX0sXCI+PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk+PWUoYSxjKX0sXCImJlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykmJmUoYSxjKX0sXCJ8fFwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyl8fGUoYSxjKX0sXCImXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxcbmMpJmUoYSxjKX0sXCJ8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGUoYSxjKShhLGMsZChhLGMpKX0sXCIhXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiFkKGEsYyl9fSxVZT17bjpcIlxcblwiLGY6XCJcXGZcIixyOlwiXFxyXCIsdDpcIlxcdFwiLHY6XCJcXHZcIixcIidcIjpcIidcIiwnXCInOidcIid9LFViPWZ1bmN0aW9uKGEpe3RoaXMub3B0aW9ucz1hfTtVYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlViLGxleDpmdW5jdGlvbihhKXt0aGlzLnRleHQ9YTt0aGlzLmluZGV4PTA7dGhpcy5jaD11O3RoaXMubGFzdENoPVwiOlwiO2Zvcih0aGlzLnRva2Vucz1bXTt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt0aGlzLmNoPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7aWYodGhpcy5pcyhcIlxcXCInXCIpKXRoaXMucmVhZFN0cmluZyh0aGlzLmNoKTtlbHNlIGlmKHRoaXMuaXNOdW1iZXIodGhpcy5jaCl8fHRoaXMuaXMoXCIuXCIpJiZ0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSl0aGlzLnJlYWROdW1iZXIoKTtlbHNlIGlmKHRoaXMuaXNJZGVudCh0aGlzLmNoKSl0aGlzLnJlYWRJZGVudCgpO1xuZWxzZSBpZih0aGlzLmlzKFwiKCl7fVtdLiw7Oj9cIikpdGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2h9KSx0aGlzLmluZGV4Kys7ZWxzZSBpZih0aGlzLmlzV2hpdGVzcGFjZSh0aGlzLmNoKSl7dGhpcy5pbmRleCsrO2NvbnRpbnVlfWVsc2V7YT10aGlzLmNoK3RoaXMucGVlaygpO3ZhciBjPWErdGhpcy5wZWVrKDIpLGQ9aGJbdGhpcy5jaF0sZT1oYlthXSxmPWhiW2NdO2Y/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsdGV4dDpjLGZuOmZ9KSx0aGlzLmluZGV4Kz0zKTplPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6YSxmbjplfSksdGhpcy5pbmRleCs9Mik6ZD8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OnRoaXMuY2gsZm46ZH0pLHRoaXMuaW5kZXgrPTEpOnRoaXMudGhyb3dFcnJvcihcIlVuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgXCIsdGhpcy5pbmRleCx0aGlzLmluZGV4K1xuMSl9dGhpcy5sYXN0Q2g9dGhpcy5jaH1yZXR1cm4gdGhpcy50b2tlbnN9LGlzOmZ1bmN0aW9uKGEpe3JldHVybi0xIT09YS5pbmRleE9mKHRoaXMuY2gpfSx3YXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5sYXN0Q2gpfSxwZWVrOmZ1bmN0aW9uKGEpe2E9YXx8MTtyZXR1cm4gdGhpcy5pbmRleCthPHRoaXMudGV4dC5sZW5ndGg/dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4K2EpOiExfSxpc051bWJlcjpmdW5jdGlvbihhKXtyZXR1cm5cIjBcIjw9YSYmXCI5XCI+PWF9LGlzV2hpdGVzcGFjZTpmdW5jdGlvbihhKXtyZXR1cm5cIiBcIj09PWF8fFwiXFxyXCI9PT1hfHxcIlxcdFwiPT09YXx8XCJcXG5cIj09PWF8fFwiXFx2XCI9PT1hfHxcIlxcdTAwYTBcIj09PWF9LGlzSWRlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJhXCI8PWEmJlwielwiPj1hfHxcIkFcIjw9YSYmXCJaXCI+PWF8fFwiX1wiPT09YXx8XCIkXCI9PT1hfSxpc0V4cE9wZXJhdG9yOmZ1bmN0aW9uKGEpe3JldHVyblwiLVwiPT09YXx8XCIrXCI9PT1hfHx0aGlzLmlzTnVtYmVyKGEpfSxcbnRocm93RXJyb3I6ZnVuY3Rpb24oYSxjLGQpe2Q9ZHx8dGhpcy5pbmRleDtjPUQoYyk/XCJzIFwiK2MrXCItXCIrdGhpcy5pbmRleCtcIiBbXCIrdGhpcy50ZXh0LnN1YnN0cmluZyhjLGQpK1wiXVwiOlwiIFwiK2Q7dGhyb3cgbGEoXCJsZXhlcnJcIixhLGMsdGhpcy50ZXh0KTt9LHJlYWROdW1iZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCJcIixjPXRoaXMuaW5kZXg7dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dmFyIGQ9eCh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtpZihcIi5cIj09ZHx8dGhpcy5pc051bWJlcihkKSlhKz1kO2Vsc2V7dmFyIGU9dGhpcy5wZWVrKCk7aWYoXCJlXCI9PWQmJnRoaXMuaXNFeHBPcGVyYXRvcihlKSlhKz1kO2Vsc2UgaWYodGhpcy5pc0V4cE9wZXJhdG9yKGQpJiZlJiZ0aGlzLmlzTnVtYmVyKGUpJiZcImVcIj09YS5jaGFyQXQoYS5sZW5ndGgtMSkpYSs9ZDtlbHNlIGlmKCF0aGlzLmlzRXhwT3BlcmF0b3IoZCl8fGUmJnRoaXMuaXNOdW1iZXIoZSl8fFwiZVwiIT1hLmNoYXJBdChhLmxlbmd0aC1cbjEpKWJyZWFrO2Vsc2UgdGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCBleHBvbmVudFwiKX10aGlzLmluZGV4Kyt9YSo9MTt0aGlzLnRva2Vucy5wdXNoKHtpbmRleDpjLHRleHQ6YSxsaXRlcmFsOiEwLGNvbnN0YW50OiEwLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIGF9fSl9LHJlYWRJZGVudDpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGM9XCJcIixkPXRoaXMuaW5kZXgsZSxmLGcsaDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXtoPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7aWYoXCIuXCI9PT1ofHx0aGlzLmlzSWRlbnQoaCl8fHRoaXMuaXNOdW1iZXIoaCkpXCIuXCI9PT1oJiYoZT10aGlzLmluZGV4KSxjKz1oO2Vsc2UgYnJlYWs7dGhpcy5pbmRleCsrfWlmKGUpZm9yKGY9dGhpcy5pbmRleDtmPHRoaXMudGV4dC5sZW5ndGg7KXtoPXRoaXMudGV4dC5jaGFyQXQoZik7aWYoXCIoXCI9PT1oKXtnPWMuc3Vic3RyKGUtZCsxKTtjPWMuc3Vic3RyKDAsZS1kKTt0aGlzLmluZGV4PWY7YnJlYWt9aWYodGhpcy5pc1doaXRlc3BhY2UoaCkpZisrO1xuZWxzZSBicmVha31kPXtpbmRleDpkLHRleHQ6Y307aWYoaGIuaGFzT3duUHJvcGVydHkoYykpZC5mbj1oYltjXSxkLmxpdGVyYWw9ITAsZC5jb25zdGFudD0hMDtlbHNle3ZhciBrPURjKGMsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7ZC5mbj1FKGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGsoYSxjKX0se2Fzc2lnbjpmdW5jdGlvbihkLGUpe3JldHVybiB1YihkLGMsZSxhLnRleHQsYS5vcHRpb25zKX19KX10aGlzLnRva2Vucy5wdXNoKGQpO2cmJih0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplLHRleHQ6XCIuXCJ9KSx0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplKzEsdGV4dDpnfSkpfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuaW5kZXg7dGhpcy5pbmRleCsrO2Zvcih2YXIgZD1cIlwiLGU9YSxmPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBnPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2c7aWYoZilcInVcIj09PWc/KGY9dGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4K1xuMSx0aGlzLmluZGV4KzUpLGYubWF0Y2goL1tcXGRhLWZdezR9L2kpfHx0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdVwiK2YrXCJdXCIpLHRoaXMuaW5kZXgrPTQsZCs9U3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChmLDE2KSkpOmQrPVVlW2ddfHxnLGY9ITE7ZWxzZSBpZihcIlxcXFxcIj09PWcpZj0hMDtlbHNle2lmKGc9PT1hKXt0aGlzLmluZGV4Kys7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmUsc3RyaW5nOmQsbGl0ZXJhbDohMCxjb25zdGFudDohMCxmbjpmdW5jdGlvbigpe3JldHVybiBkfX0pO3JldHVybn1kKz1nfXRoaXMuaW5kZXgrK310aGlzLnRocm93RXJyb3IoXCJVbnRlcm1pbmF0ZWQgcXVvdGVcIixjKX19O3ZhciBnYj1mdW5jdGlvbihhLGMsZCl7dGhpcy5sZXhlcj1hO3RoaXMuJGZpbHRlcj1jO3RoaXMub3B0aW9ucz1kfTtnYi5aRVJPPUUoZnVuY3Rpb24oKXtyZXR1cm4gMH0se2NvbnN0YW50OiEwfSk7Z2IucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpnYixcbnBhcnNlOmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMudG9rZW5zPXRoaXMubGV4ZXIubGV4KGEpO2E9dGhpcy5zdGF0ZW1lbnRzKCk7MCE9PXRoaXMudG9rZW5zLmxlbmd0aCYmdGhpcy50aHJvd0Vycm9yKFwiaXMgYW4gdW5leHBlY3RlZCB0b2tlblwiLHRoaXMudG9rZW5zWzBdKTthLmxpdGVyYWw9ISFhLmxpdGVyYWw7YS5jb25zdGFudD0hIWEuY29uc3RhbnQ7cmV0dXJuIGF9LHByaW1hcnk6ZnVuY3Rpb24oKXt2YXIgYTtpZih0aGlzLmV4cGVjdChcIihcIikpYT10aGlzLmZpbHRlckNoYWluKCksdGhpcy5jb25zdW1lKFwiKVwiKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwiW1wiKSlhPXRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJ7XCIpKWE9dGhpcy5vYmplY3QoKTtlbHNle3ZhciBjPXRoaXMuZXhwZWN0KCk7KGE9Yy5mbil8fHRoaXMudGhyb3dFcnJvcihcIm5vdCBhIHByaW1hcnkgZXhwcmVzc2lvblwiLGMpO2EubGl0ZXJhbD0hIWMubGl0ZXJhbDthLmNvbnN0YW50PVxuISFjLmNvbnN0YW50fWZvcih2YXIgZDtjPXRoaXMuZXhwZWN0KFwiKFwiLFwiW1wiLFwiLlwiKTspXCIoXCI9PT1jLnRleHQ/KGE9dGhpcy5mdW5jdGlvbkNhbGwoYSxkKSxkPW51bGwpOlwiW1wiPT09Yy50ZXh0PyhkPWEsYT10aGlzLm9iamVjdEluZGV4KGEpKTpcIi5cIj09PWMudGV4dD8oZD1hLGE9dGhpcy5maWVsZEFjY2VzcyhhKSk6dGhpcy50aHJvd0Vycm9yKFwiSU1QT1NTSUJMRVwiKTtyZXR1cm4gYX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMpe3Rocm93IGxhKFwic3ludGF4XCIsYy50ZXh0LGEsYy5pbmRleCsxLHRoaXMudGV4dCx0aGlzLnRleHQuc3Vic3RyaW5nKGMuaW5kZXgpKTt9LHBlZWtUb2tlbjpmdW5jdGlvbigpe2lmKDA9PT10aGlzLnRva2Vucy5sZW5ndGgpdGhyb3cgbGEoXCJ1ZW9lXCIsdGhpcy50ZXh0KTtyZXR1cm4gdGhpcy50b2tlbnNbMF19LHBlZWs6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoMDx0aGlzLnRva2Vucy5sZW5ndGgpe3ZhciBmPXRoaXMudG9rZW5zWzBdLGc9Zi50ZXh0O2lmKGc9PT1cbmF8fGc9PT1jfHxnPT09ZHx8Zz09PWV8fCEoYXx8Y3x8ZHx8ZSkpcmV0dXJuIGZ9cmV0dXJuITF9LGV4cGVjdDpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4oYT10aGlzLnBlZWsoYSxjLGQsZSkpPyh0aGlzLnRva2Vucy5zaGlmdCgpLGEpOiExfSxjb25zdW1lOmZ1bmN0aW9uKGEpe3RoaXMuZXhwZWN0KGEpfHx0aGlzLnRocm93RXJyb3IoXCJpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgW1wiK2ErXCJdXCIsdGhpcy5wZWVrKCkpfSx1bmFyeUZuOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIEUoZnVuY3Rpb24oZCxlKXtyZXR1cm4gYShkLGUsYyl9LHtjb25zdGFudDpjLmNvbnN0YW50fSl9LHRlcm5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIEUoZnVuY3Rpb24oZSxmKXtyZXR1cm4gYShlLGYpP2MoZSxmKTpkKGUsZil9LHtjb25zdGFudDphLmNvbnN0YW50JiZjLmNvbnN0YW50JiZkLmNvbnN0YW50fSl9LGJpbmFyeUZuOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gRShmdW5jdGlvbihlLGYpe3JldHVybiBjKGUsXG5mLGEsZCl9LHtjb25zdGFudDphLmNvbnN0YW50JiZkLmNvbnN0YW50fSl9LHN0YXRlbWVudHM6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W107OylpZigwPHRoaXMudG9rZW5zLmxlbmd0aCYmIXRoaXMucGVlayhcIn1cIixcIilcIixcIjtcIixcIl1cIikmJmEucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpLCF0aGlzLmV4cGVjdChcIjtcIikpcmV0dXJuIDE9PT1hLmxlbmd0aD9hWzBdOmZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlLGY9MDtmPGEubGVuZ3RoO2YrKyl7dmFyIGc9YVtmXTtnJiYoZT1nKGMsZCkpfXJldHVybiBlfX0sZmlsdGVyQ2hhaW46ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5leHByZXNzaW9uKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5maWx0ZXIoKSk7ZWxzZSByZXR1cm4gYX0sZmlsdGVyOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwZWN0KCksYz10aGlzLiRmaWx0ZXIoYS50ZXh0KSxkPVtdOzspaWYoYT10aGlzLmV4cGVjdChcIjpcIikpZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbmVsc2V7dmFyIGU9ZnVuY3Rpb24oYSxlLGgpe2g9W2hdO2Zvcih2YXIgaz0wO2s8ZC5sZW5ndGg7aysrKWgucHVzaChkW2tdKGEsZSkpO3JldHVybiBjLmFwcGx5KGEsaCl9O3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlfX19LGV4cHJlc3Npb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hc3NpZ25tZW50KCl9LGFzc2lnbm1lbnQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRlcm5hcnkoKSxjLGQ7cmV0dXJuKGQ9dGhpcy5leHBlY3QoXCI9XCIpKT8oYS5hc3NpZ258fHRoaXMudGhyb3dFcnJvcihcImltcGxpZXMgYXNzaWdubWVudCBidXQgW1wiK3RoaXMudGV4dC5zdWJzdHJpbmcoMCxkLmluZGV4KStcIl0gY2FuIG5vdCBiZSBhc3NpZ25lZCB0b1wiLGQpLGM9dGhpcy50ZXJuYXJ5KCksZnVuY3Rpb24oZCxmKXtyZXR1cm4gYS5hc3NpZ24oZCxjKGQsZiksZil9KTphfSx0ZXJuYXJ5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5sb2dpY2FsT1IoKSxjLGQ7aWYodGhpcy5leHBlY3QoXCI/XCIpKXtjPXRoaXMuYXNzaWdubWVudCgpO1xuaWYoZD10aGlzLmV4cGVjdChcIjpcIikpcmV0dXJuIHRoaXMudGVybmFyeUZuKGEsYyx0aGlzLmFzc2lnbm1lbnQoKSk7dGhpcy50aHJvd0Vycm9yKFwiZXhwZWN0ZWQgOlwiLGQpfWVsc2UgcmV0dXJuIGF9LGxvZ2ljYWxPUjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmxvZ2ljYWxBTkQoKSxjOzspaWYoYz10aGlzLmV4cGVjdChcInx8XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO2Vsc2UgcmV0dXJuIGF9LGxvZ2ljYWxBTkQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVxdWFsaXR5KCksYztpZihjPXRoaXMuZXhwZWN0KFwiJiZcIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmxvZ2ljYWxBTkQoKSk7cmV0dXJuIGF9LGVxdWFsaXR5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5yZWxhdGlvbmFsKCksYztpZihjPXRoaXMuZXhwZWN0KFwiPT1cIixcIiE9XCIsXCI9PT1cIixcIiE9PVwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZXF1YWxpdHkoKSk7cmV0dXJuIGF9LFxucmVsYXRpb25hbDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuYWRkaXRpdmUoKSxjO2lmKGM9dGhpcy5leHBlY3QoXCI8XCIsXCI+XCIsXCI8PVwiLFwiPj1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnJlbGF0aW9uYWwoKSk7cmV0dXJuIGF9LGFkZGl0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMubXVsdGlwbGljYXRpdmUoKSxjO2M9dGhpcy5leHBlY3QoXCIrXCIsXCItXCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubXVsdGlwbGljYXRpdmUoKSk7cmV0dXJuIGF9LG11bHRpcGxpY2F0aXZlOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMudW5hcnkoKSxjO2M9dGhpcy5leHBlY3QoXCIqXCIsXCIvXCIsXCIlXCIpOylhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMudW5hcnkoKSk7cmV0dXJuIGF9LHVuYXJ5OmZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIHRoaXMuZXhwZWN0KFwiK1wiKT90aGlzLnByaW1hcnkoKTooYT10aGlzLmV4cGVjdChcIi1cIikpP3RoaXMuYmluYXJ5Rm4oZ2IuWkVSTyxhLmZuLFxudGhpcy51bmFyeSgpKTooYT10aGlzLmV4cGVjdChcIiFcIikpP3RoaXMudW5hcnlGbihhLmZuLHRoaXMudW5hcnkoKSk6dGhpcy5wcmltYXJ5KCl9LGZpZWxkQWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cGVjdCgpLnRleHQsZT1EYyhkLHRoaXMub3B0aW9ucyx0aGlzLnRleHQpO3JldHVybiBFKGZ1bmN0aW9uKGMsZCxoKXtyZXR1cm4gZShofHxhKGMsZCkpfSx7YXNzaWduOmZ1bmN0aW9uKGUsZyxoKXsoaD1hKGUsaCkpfHxhLmFzc2lnbihlLGg9e30pO3JldHVybiB1YihoLGQsZyxjLnRleHQsYy5vcHRpb25zKX19KX0sb2JqZWN0SW5kZXg6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxkPXRoaXMuZXhwcmVzc2lvbigpO3RoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIEUoZnVuY3Rpb24oZSxmKXt2YXIgZz1hKGUsZiksaD1kKGUsZiksaztrYShoLGMudGV4dCk7aWYoIWcpcmV0dXJuIHU7KGc9bWEoZ1toXSxjLnRleHQpKSYmKGcudGhlbiYmYy5vcHRpb25zLnVud3JhcFByb21pc2VzKSYmXG4oaz1nLFwiJCR2XCJpbiBnfHwoay4kJHY9dSxrLnRoZW4oZnVuY3Rpb24oYSl7ay4kJHY9YX0pKSxnPWcuJCR2KTtyZXR1cm4gZ30se2Fzc2lnbjpmdW5jdGlvbihlLGYsZyl7dmFyIGg9a2EoZChlLGcpLGMudGV4dCk7KGc9bWEoYShlLGcpLGMudGV4dCkpfHxhLmFzc2lnbihlLGc9e30pO3JldHVybiBnW2hdPWZ9fSl9LGZ1bmN0aW9uQ2FsbDpmdW5jdGlvbihhLGMpe3ZhciBkPVtdO2lmKFwiKVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkbyBkLnB1c2godGhpcy5leHByZXNzaW9uKCkpO3doaWxlKHRoaXMuZXhwZWN0KFwiLFwiKSl9dGhpcy5jb25zdW1lKFwiKVwiKTt2YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbihmLGcpe2Zvcih2YXIgaD1bXSxrPWM/YyhmLGcpOmYsbT0wO208ZC5sZW5ndGg7bSsrKWgucHVzaChtYShkW21dKGYsZyksZS50ZXh0KSk7bT1hKGYsZyxrKXx8djttYShrLGUudGV4dCk7dmFyIGw9ZS50ZXh0O2lmKG0pe2lmKG0uY29uc3RydWN0b3I9PT1tKXRocm93IGxhKFwiaXNlY2ZuXCIsXG5sKTtpZihtPT09U2V8fG09PT1UZXx8UGMmJm09PT1QYyl0aHJvdyBsYShcImlzZWNmZlwiLGwpO31oPW0uYXBwbHk/bS5hcHBseShrLGgpOm0oaFswXSxoWzFdLGhbMl0saFszXSxoWzRdKTtyZXR1cm4gbWEoaCxlLnRleHQpfX0sYXJyYXlEZWNsYXJhdGlvbjpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJdXCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve2lmKHRoaXMucGVlayhcIl1cIikpYnJlYWs7dmFyIGQ9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKGQpO2QuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIEUoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGc9W10saD0wO2g8YS5sZW5ndGg7aCsrKWcucHVzaChhW2hdKGMsZCkpO3JldHVybiBnfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9LG9iamVjdDpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJ9XCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve2lmKHRoaXMucGVlayhcIn1cIikpYnJlYWs7XG52YXIgZD10aGlzLmV4cGVjdCgpLGQ9ZC5zdHJpbmd8fGQudGV4dDt0aGlzLmNvbnN1bWUoXCI6XCIpO3ZhciBlPXRoaXMuZXhwcmVzc2lvbigpO2EucHVzaCh7a2V5OmQsdmFsdWU6ZX0pO2UuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIn1cIik7cmV0dXJuIEUoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGU9e30saz0wO2s8YS5sZW5ndGg7aysrKXt2YXIgbT1hW2tdO2VbbS5rZXldPW0udmFsdWUoYyxkKX1yZXR1cm4gZX0se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfX07dmFyIENlPXt9LEJlPXt9LHphPXooXCIkc2NlXCIpLGZhPXtIVE1MOlwiaHRtbFwiLENTUzpcImNzc1wiLFVSTDpcInVybFwiLFJFU09VUkNFX1VSTDpcInJlc291cmNlVXJsXCIsSlM6XCJqc1wifSxZPVguY3JlYXRlRWxlbWVudChcImFcIiksR2M9eGEoVy5sb2NhdGlvbi5ocmVmLCEwKTtrYy4kaW5qZWN0PVtcIiRwcm92aWRlXCJdO0hjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTtKYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07XG52YXIgTWM9XCIuXCIsTWU9e3l5eXk6WihcIkZ1bGxZZWFyXCIsNCkseXk6WihcIkZ1bGxZZWFyXCIsMiwwLCEwKSx5OlooXCJGdWxsWWVhclwiLDEpLE1NTU06dmIoXCJNb250aFwiKSxNTU06dmIoXCJNb250aFwiLCEwKSxNTTpaKFwiTW9udGhcIiwyLDEpLE06WihcIk1vbnRoXCIsMSwxKSxkZDpaKFwiRGF0ZVwiLDIpLGQ6WihcIkRhdGVcIiwxKSxISDpaKFwiSG91cnNcIiwyKSxIOlooXCJIb3Vyc1wiLDEpLGhoOlooXCJIb3Vyc1wiLDIsLTEyKSxoOlooXCJIb3Vyc1wiLDEsLTEyKSxtbTpaKFwiTWludXRlc1wiLDIpLG06WihcIk1pbnV0ZXNcIiwxKSxzczpaKFwiU2Vjb25kc1wiLDIpLHM6WihcIlNlY29uZHNcIiwxKSxzc3M6WihcIk1pbGxpc2Vjb25kc1wiLDMpLEVFRUU6dmIoXCJEYXlcIiksRUVFOnZiKFwiRGF5XCIsITApLGE6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gMTI+YS5nZXRIb3VycygpP2MuQU1QTVNbMF06Yy5BTVBNU1sxXX0sWjpmdW5jdGlvbihhKXthPS0xKmEuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gYT0oMDw9YT9cIitcIjpcIlwiKSsoVmIoTWF0aFswPFxuYT9cImZsb29yXCI6XCJjZWlsXCJdKGEvNjApLDIpK1ZiKE1hdGguYWJzKGElNjApLDIpKX19LExlPS8oKD86W155TWRIaG1zYVpFJ10rKXwoPzonKD86W14nXXwnJykqJyl8KD86RSt8eSt8TSt8ZCt8SCt8aCt8bSt8cyt8YXxaKSkoLiopLyxLZT0vXlxcLT9cXGQrJC87SWMuJGluamVjdD1bXCIkbG9jYWxlXCJdO3ZhciBJZT1hYSh4KSxKZT1hYShMYSk7S2MuJGluamVjdD1bXCIkcGFyc2VcIl07dmFyIGNkPWFhKHtyZXN0cmljdDpcIkVcIixjb21waWxlOmZ1bmN0aW9uKGEsYyl7OD49UiYmKGMuaHJlZnx8Yy5uYW1lfHxjLiRzZXQoXCJocmVmXCIsXCJcIiksYS5hcHBlbmQoWC5jcmVhdGVDb21tZW50KFwiSUUgZml4XCIpKSk7aWYoIWMuaHJlZiYmIWMueGxpbmtIcmVmJiYhYy5uYW1lKXJldHVybiBmdW5jdGlvbihhLGMpe3ZhciBmPVwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PUJhLmNhbGwoYy5wcm9wKFwiaHJlZlwiKSk/XCJ4bGluazpocmVmXCI6XCJocmVmXCI7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7Yy5hdHRyKGYpfHxcbmEucHJldmVudERlZmF1bHQoKX0pfX19KSxGYj17fTtyKHJiLGZ1bmN0aW9uKGEsYyl7aWYoXCJtdWx0aXBsZVwiIT1hKXt2YXIgZD1xYShcIm5nLVwiK2MpO0ZiW2RdPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxsaW5rOmZ1bmN0aW9uKGEsZixnKXthLiR3YXRjaChnW2RdLGZ1bmN0aW9uKGEpe2cuJHNldChjLCEhYSl9KX19fX19KTtyKFtcInNyY1wiLFwic3Jjc2V0XCIsXCJocmVmXCJdLGZ1bmN0aW9uKGEpe3ZhciBjPXFhKFwibmctXCIrYSk7RmJbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZil7dmFyIGc9YSxoPWE7XCJocmVmXCI9PT1hJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT1CYS5jYWxsKGUucHJvcChcImhyZWZcIikpJiYoaD1cInhsaW5rSHJlZlwiLGYuJGF0dHJbaF09XCJ4bGluazpocmVmXCIsZz1udWxsKTtmLiRvYnNlcnZlKGMsZnVuY3Rpb24oYyl7Yz8oZi4kc2V0KGgsYyksUiYmZyYmZS5wcm9wKGcsZltoXSkpOlwiaHJlZlwiPT09XG5hJiZmLiRzZXQoaCxudWxsKX0pfX19fSk7dmFyIHliPXskYWRkQ29udHJvbDp2LCRyZW1vdmVDb250cm9sOnYsJHNldFZhbGlkaXR5OnYsJHNldERpcnR5OnYsJHNldFByaXN0aW5lOnZ9O05jLiRpbmplY3Q9W1wiJGVsZW1lbnRcIixcIiRhdHRyc1wiLFwiJHNjb3BlXCIsXCIkYW5pbWF0ZVwiXTt2YXIgUWM9ZnVuY3Rpb24oYSl7cmV0dXJuW1wiJHRpbWVvdXRcIixmdW5jdGlvbihjKXtyZXR1cm57bmFtZTpcImZvcm1cIixyZXN0cmljdDphP1wiRUFDXCI6XCJFXCIsY29udHJvbGxlcjpOYyxjb21waWxlOmZ1bmN0aW9uKCl7cmV0dXJue3ByZTpmdW5jdGlvbihhLGUsZixnKXtpZighZi5hY3Rpb24pe3ZhciBoPWZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITF9O3NiKGVbMF0sXCJzdWJtaXRcIixoKTtlLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2MoZnVuY3Rpb24oKXtiYihlWzBdLFwic3VibWl0XCIsaCl9LDAsITEpfSl9dmFyIGs9ZS5wYXJlbnQoKS5jb250cm9sbGVyKFwiZm9ybVwiKSxcbm09Zi5uYW1lfHxmLm5nRm9ybTttJiZ1YihhLG0sZyxtKTtpZihrKWUub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7ay4kcmVtb3ZlQ29udHJvbChnKTttJiZ1YihhLG0sdSxtKTtFKGcseWIpfSl9fX19fV19LGRkPVFjKCkscWQ9UWMoITApLFZlPS9eKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPyQvLFdlPS9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pLFhlPS9eXFxzKihcXC18XFwrKT8oXFxkK3woXFxkKihcXC5cXGQqKSkpXFxzKiQvLFJjPXt0ZXh0OkFiLG51bWJlcjpmdW5jdGlvbihhLGMsZCxlLGYsZyl7QWIoYSxjLGQsZSxmLGcpO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXt2YXIgYz1lLiRpc0VtcHR5KGEpO2lmKGN8fFhlLnRlc3QoYSkpcmV0dXJuIGUuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsXG4hMCksXCJcIj09PWE/bnVsbDpjP2E6cGFyc2VGbG9hdChhKTtlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCExKTtyZXR1cm4gdX0pO05lKGUsXCJudW1iZXJcIixZZSxudWxsLGUuJCR2YWxpZGl0eVN0YXRlKTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGUuJGlzRW1wdHkoYSk/XCJcIjpcIlwiK2F9KTtkLm1pbiYmKGE9ZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VGbG9hdChkLm1pbik7cmV0dXJuIHVhKGUsXCJtaW5cIixlLiRpc0VtcHR5KGEpfHxhPj1jLGEpfSxlLiRwYXJzZXJzLnB1c2goYSksZS4kZm9ybWF0dGVycy5wdXNoKGEpKTtkLm1heCYmKGE9ZnVuY3Rpb24oYSl7dmFyIGM9cGFyc2VGbG9hdChkLm1heCk7cmV0dXJuIHVhKGUsXCJtYXhcIixlLiRpc0VtcHR5KGEpfHxhPD1jLGEpfSxlLiRwYXJzZXJzLnB1c2goYSksZS4kZm9ybWF0dGVycy5wdXNoKGEpKTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGUsXCJudW1iZXJcIixlLiRpc0VtcHR5KGEpfHxcbmpiKGEpLGEpfSl9LHVybDpmdW5jdGlvbihhLGMsZCxlLGYsZyl7QWIoYSxjLGQsZSxmLGcpO2E9ZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGUsXCJ1cmxcIixlLiRpc0VtcHR5KGEpfHxWZS50ZXN0KGEpLGEpfTtlLiRmb3JtYXR0ZXJzLnB1c2goYSk7ZS4kcGFyc2Vycy5wdXNoKGEpfSxlbWFpbDpmdW5jdGlvbihhLGMsZCxlLGYsZyl7QWIoYSxjLGQsZSxmLGcpO2E9ZnVuY3Rpb24oYSl7cmV0dXJuIHVhKGUsXCJlbWFpbFwiLGUuJGlzRW1wdHkoYSl8fFdlLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LHJhZGlvOmZ1bmN0aW9uKGEsYyxkLGUpe0YoZC5uYW1lKSYmYy5hdHRyKFwibmFtZVwiLGliKCkpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkJiZhLiRhcHBseShmdW5jdGlvbigpe2UuJHNldFZpZXdWYWx1ZShkLnZhbHVlKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWQudmFsdWU9PWUuJHZpZXdWYWx1ZX07XG5kLiRvYnNlcnZlKFwidmFsdWVcIixlLiRyZW5kZXIpfSxjaGVja2JveDpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1kLm5nVHJ1ZVZhbHVlLGc9ZC5uZ0ZhbHNlVmFsdWU7RyhmKXx8KGY9ITApO0coZyl8fChnPSExKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7ZS4kc2V0Vmlld1ZhbHVlKGNbMF0uY2hlY2tlZCl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1lLiR2aWV3VmFsdWV9O2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT1mfTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1mfSk7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhP2Y6Z30pfSxoaWRkZW46dixidXR0b246dixzdWJtaXQ6dixyZXNldDp2LGZpbGU6dn0sWWU9W1wiYmFkSW5wdXRcIl0saGM9W1wiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpcIj9uZ01vZGVsXCIsXG5saW5rOmZ1bmN0aW9uKGQsZSxmLGcpe2cmJihSY1t4KGYudHlwZSldfHxSYy50ZXh0KShkLGUsZixnLGMsYSl9fX1dLHdiPVwibmctdmFsaWRcIix4Yj1cIm5nLWludmFsaWRcIixSYT1cIm5nLXByaXN0aW5lXCIsemI9XCJuZy1kaXJ0eVwiLFplPVtcIiRzY29wZVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRhdHRyc1wiLFwiJGVsZW1lbnRcIixcIiRwYXJzZVwiLFwiJGFuaW1hdGVcIixmdW5jdGlvbihhLGMsZCxlLGYsZyl7ZnVuY3Rpb24gaChhLGMpe2M9Yz9cIi1cIituYihjLFwiLVwiKTpcIlwiO2cucmVtb3ZlQ2xhc3MoZSwoYT94Yjp3YikrYyk7Zy5hZGRDbGFzcyhlLChhP3diOnhiKStjKX10aGlzLiRtb2RlbFZhbHVlPXRoaXMuJHZpZXdWYWx1ZT1OdW1iZXIuTmFOO3RoaXMuJHBhcnNlcnM9W107dGhpcy4kZm9ybWF0dGVycz1bXTt0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzPVtdO3RoaXMuJHByaXN0aW5lPSEwO3RoaXMuJGRpcnR5PSExO3RoaXMuJHZhbGlkPSEwO3RoaXMuJGludmFsaWQ9ITE7dGhpcy4kbmFtZT1cbmQubmFtZTt2YXIgaz1mKGQubmdNb2RlbCksbT1rLmFzc2lnbjtpZighbSl0aHJvdyB6KFwibmdNb2RlbFwiKShcIm5vbmFzc2lnblwiLGQubmdNb2RlbCxpYShlKSk7dGhpcy4kcmVuZGVyPXY7dGhpcy4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gRihhKXx8XCJcIj09PWF8fG51bGw9PT1hfHxhIT09YX07dmFyIGw9ZS5pbmhlcml0ZWREYXRhKFwiJGZvcm1Db250cm9sbGVyXCIpfHx5YixuPTAscT10aGlzLiRlcnJvcj17fTtlLmFkZENsYXNzKFJhKTtoKCEwKTt0aGlzLiRzZXRWYWxpZGl0eT1mdW5jdGlvbihhLGMpe3FbYV0hPT0hYyYmKGM/KHFbYV0mJm4tLSxufHwoaCghMCksdGhpcy4kdmFsaWQ9ITAsdGhpcy4kaW52YWxpZD0hMSkpOihoKCExKSx0aGlzLiRpbnZhbGlkPSEwLHRoaXMuJHZhbGlkPSExLG4rKykscVthXT0hYyxoKGMsYSksbC4kc2V0VmFsaWRpdHkoYSxjLHRoaXMpKX07dGhpcy4kc2V0UHJpc3RpbmU9ZnVuY3Rpb24oKXt0aGlzLiRkaXJ0eT0hMTt0aGlzLiRwcmlzdGluZT1cbiEwO2cucmVtb3ZlQ2xhc3MoZSx6Yik7Zy5hZGRDbGFzcyhlLFJhKX07dGhpcy4kc2V0Vmlld1ZhbHVlPWZ1bmN0aW9uKGQpe3RoaXMuJHZpZXdWYWx1ZT1kO3RoaXMuJHByaXN0aW5lJiYodGhpcy4kZGlydHk9ITAsdGhpcy4kcHJpc3RpbmU9ITEsZy5yZW1vdmVDbGFzcyhlLFJhKSxnLmFkZENsYXNzKGUsemIpLGwuJHNldERpcnR5KCkpO3IodGhpcy4kcGFyc2VycyxmdW5jdGlvbihhKXtkPWEoZCl9KTt0aGlzLiRtb2RlbFZhbHVlIT09ZCYmKHRoaXMuJG1vZGVsVmFsdWU9ZCxtKGEsZCkscih0aGlzLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLGZ1bmN0aW9uKGEpe3RyeXthKCl9Y2F0Y2goZCl7YyhkKX19KSl9O3ZhciBwPXRoaXM7YS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1rKGEpO2lmKHAuJG1vZGVsVmFsdWUhPT1jKXt2YXIgZD1wLiRmb3JtYXR0ZXJzLGU9ZC5sZW5ndGg7Zm9yKHAuJG1vZGVsVmFsdWU9YztlLS07KWM9ZFtlXShjKTtwLiR2aWV3VmFsdWUhPT1jJiYocC4kdmlld1ZhbHVlPVxuYyxwLiRyZW5kZXIoKSl9cmV0dXJuIGN9KX1dLEZkPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6W1wibmdNb2RlbFwiLFwiXj9mb3JtXCJdLGNvbnRyb2xsZXI6WmUsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZj1lWzBdLGc9ZVsxXXx8eWI7Zy4kYWRkQ29udHJvbChmKTthLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtnLiRyZW1vdmVDb250cm9sKGYpfSl9fX0sSGQ9YWEoe3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXtlLiR2aWV3Q2hhbmdlTGlzdGVuZXJzLnB1c2goZnVuY3Rpb24oKXthLiRldmFsKGQubmdDaGFuZ2UpfSl9fSksaWM9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpcIj9uZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXtpZihlKXtkLnJlcXVpcmVkPSEwO3ZhciBmPWZ1bmN0aW9uKGEpe2lmKGQucmVxdWlyZWQmJmUuJGlzRW1wdHkoYSkpZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLCExKTtlbHNlIHJldHVybiBlLiRzZXRWYWxpZGl0eShcInJlcXVpcmVkXCIsXG4hMCksYX07ZS4kZm9ybWF0dGVycy5wdXNoKGYpO2UuJHBhcnNlcnMudW5zaGlmdChmKTtkLiRvYnNlcnZlKFwicmVxdWlyZWRcIixmdW5jdGlvbigpe2YoZS4kdmlld1ZhbHVlKX0pfX19fSxHZD1mdW5jdGlvbigpe3JldHVybntyZXF1aXJlOlwibmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7dmFyIGY9KGE9L1xcLyguKilcXC8vLmV4ZWMoZC5uZ0xpc3QpKSYmUmVnRXhwKGFbMV0pfHxkLm5nTGlzdHx8XCIsXCI7ZS4kcGFyc2Vycy5wdXNoKGZ1bmN0aW9uKGEpe2lmKCFGKGEpKXt2YXIgYz1bXTthJiZyKGEuc3BsaXQoZiksZnVuY3Rpb24oYSl7YSYmYy5wdXNoKCQoYSkpfSk7cmV0dXJuIGN9fSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBMKGEpP2Euam9pbihcIiwgXCIpOnV9KTtlLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwhYS5sZW5ndGh9fX19LCRlPS9eKHRydWV8ZmFsc2V8XFxkKykkLyxJZD1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsXG5jb21waWxlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuICRlLnRlc3QoYy5uZ1ZhbHVlKT9mdW5jdGlvbihhLGMsZil7Zi4kc2V0KFwidmFsdWVcIixhLiRldmFsKGYubmdWYWx1ZSkpfTpmdW5jdGlvbihhLGMsZil7YS4kd2F0Y2goZi5uZ1ZhbHVlLGZ1bmN0aW9uKGEpe2YuJHNldChcInZhbHVlXCIsYSl9KX19fX0saWQ9QWEoe2NvbXBpbGU6ZnVuY3Rpb24oYSl7YS5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIik7cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXtkLmRhdGEoXCIkYmluZGluZ1wiLGUubmdCaW5kKTthLiR3YXRjaChlLm5nQmluZCxmdW5jdGlvbihhKXtkLnRleHQoYT09dT9cIlwiOmEpfSl9fX0pLGtkPVtcIiRpbnRlcnBvbGF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yz1hKGQuYXR0cihlLiRhdHRyLm5nQmluZFRlbXBsYXRlKSk7ZC5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsYyk7ZS4kb2JzZXJ2ZShcIm5nQmluZFRlbXBsYXRlXCIsZnVuY3Rpb24oYSl7ZC50ZXh0KGEpfSl9fV0sXG5qZD1bXCIkc2NlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3JldHVybntjb21waWxlOmZ1bmN0aW9uKGQpe2QuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpO3JldHVybiBmdW5jdGlvbihkLGYsZyl7Zi5kYXRhKFwiJGJpbmRpbmdcIixnLm5nQmluZEh0bWwpO3ZhciBoPWMoZy5uZ0JpbmRIdG1sKTtkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybihoKGQpfHxcIlwiKS50b1N0cmluZygpfSxmdW5jdGlvbihjKXtmLmh0bWwoYS5nZXRUcnVzdGVkSHRtbChoKGQpKXx8XCJcIil9KX19fX1dLGxkPVdiKFwiXCIsITApLG5kPVdiKFwiT2RkXCIsMCksbWQ9V2IoXCJFdmVuXCIsMSksb2Q9QWEoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXCJuZ0Nsb2FrXCIsdSk7YS5yZW1vdmVDbGFzcyhcIm5nLWNsb2FrXCIpfX0pLHBkPVtmdW5jdGlvbigpe3JldHVybntzY29wZTohMCxjb250cm9sbGVyOlwiQFwiLHByaW9yaXR5OjUwMH19XSxqYz17fSxhZj17Ymx1cjohMCxmb2N1czohMH07cihcImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgbW91c2VlbnRlciBtb3VzZWxlYXZlIGtleWRvd24ga2V5dXAga2V5cHJlc3Mgc3VibWl0IGZvY3VzIGJsdXIgY29weSBjdXQgcGFzdGVcIi5zcGxpdChcIiBcIiksXG5mdW5jdGlvbihhKXt2YXIgYz1xYShcIm5nLVwiK2EpO2pjW2NdPVtcIiRwYXJzZVwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGQsZSl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZixnKXt2YXIgaD1kKGdbY10sITApO3JldHVybiBmdW5jdGlvbihjLGQpe2Qub24oYSxmdW5jdGlvbihkKXt2YXIgZj1mdW5jdGlvbigpe2goYyx7JGV2ZW50OmR9KX07YWZbYV0mJmUuJCRwaGFzZT9jLiRldmFsQXN5bmMoZik6Yy4kYXBwbHkoZil9KX19fX1dfSk7dmFyIHNkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6NjAwLHRlcm1pbmFsOiEwLHJlc3RyaWN0OlwiQVwiLCQkdGxiOiEwLGxpbms6ZnVuY3Rpb24oYyxkLGUsZixnKXt2YXIgaCxrLG07Yy4kd2F0Y2goZS5uZ0lmLGZ1bmN0aW9uKGYpe1dhKGYpP2t8fChrPWMuJG5ldygpLGcoayxmdW5jdGlvbihjKXtjW2MubGVuZ3RoKytdPVguY3JlYXRlQ29tbWVudChcIiBlbmQgbmdJZjogXCIrZS5uZ0lmK1xuXCIgXCIpO2g9e2Nsb25lOmN9O2EuZW50ZXIoYyxkLnBhcmVudCgpLGQpfSkpOihtJiYobS5yZW1vdmUoKSxtPW51bGwpLGsmJihrLiRkZXN0cm95KCksaz1udWxsKSxoJiYobT1FYihoLmNsb25lKSxhLmxlYXZlKG0sZnVuY3Rpb24oKXttPW51bGx9KSxoPW51bGwpKX0pfX19XSx0ZD1bXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGQsZSxmKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTo0MDAsdGVybWluYWw6ITAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixjb250cm9sbGVyOlhhLm5vb3AsY29tcGlsZTpmdW5jdGlvbihnLGgpe3ZhciBrPWgubmdJbmNsdWRlfHxoLnNyYyxtPWgub25sb2FkfHxcIlwiLGw9aC5hdXRvc2Nyb2xsO3JldHVybiBmdW5jdGlvbihnLGgscCxyLEope3ZhciB3PTAsdCx5LHUsQj1mdW5jdGlvbigpe3kmJih5LnJlbW92ZSgpLHk9bnVsbCk7dCYmKHQuJGRlc3Ryb3koKSx0PW51bGwpO1xudSYmKGUubGVhdmUodSxmdW5jdGlvbigpe3k9bnVsbH0pLHk9dSx1PW51bGwpfTtnLiR3YXRjaChmLnBhcnNlQXNSZXNvdXJjZVVybChrKSxmdW5jdGlvbihmKXt2YXIgaz1mdW5jdGlvbigpeyFEKGwpfHxsJiYhZy4kZXZhbChsKXx8ZCgpfSxwPSsrdztmPyhhLmdldChmLHtjYWNoZTpjfSkuc3VjY2VzcyhmdW5jdGlvbihhKXtpZihwPT09dyl7dmFyIGM9Zy4kbmV3KCk7ci50ZW1wbGF0ZT1hO2E9SihjLGZ1bmN0aW9uKGEpe0IoKTtlLmVudGVyKGEsbnVsbCxoLGspfSk7dD1jO3U9YTt0LiRlbWl0KFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCIpO2cuJGV2YWwobSl9fSkuZXJyb3IoZnVuY3Rpb24oKXtwPT09dyYmQigpfSksZy4kZW1pdChcIiRpbmNsdWRlQ29udGVudFJlcXVlc3RlZFwiKSk6KEIoKSxyLnRlbXBsYXRlPW51bGwpfSl9fX19XSxKZD1bXCIkY29tcGlsZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVDQVwiLHByaW9yaXR5Oi00MDAscmVxdWlyZTpcIm5nSW5jbHVkZVwiLFxubGluazpmdW5jdGlvbihjLGQsZSxmKXtkLmh0bWwoZi50ZW1wbGF0ZSk7YShkLmNvbnRlbnRzKCkpKGMpfX19XSx1ZD1BYSh7cHJpb3JpdHk6NDUwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsYyxkKXthLiRldmFsKGQubmdJbml0KX19fX0pLHZkPUFhKHt0ZXJtaW5hbDohMCxwcmlvcml0eToxRTN9KSx3ZD1bXCIkbG9jYWxlXCIsXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPS97fS9nO3JldHVybntyZXN0cmljdDpcIkVBXCIsbGluazpmdW5jdGlvbihlLGYsZyl7dmFyIGg9Zy5jb3VudCxrPWcuJGF0dHIud2hlbiYmZi5hdHRyKGcuJGF0dHIud2hlbiksbT1nLm9mZnNldHx8MCxsPWUuJGV2YWwoayl8fHt9LG49e30scT1jLnN0YXJ0U3ltYm9sKCkscD1jLmVuZFN5bWJvbCgpLHM9L153aGVuKE1pbnVzKT8oLispJC87cihnLGZ1bmN0aW9uKGEsYyl7cy50ZXN0KGMpJiYobFt4KGMucmVwbGFjZShcIndoZW5cIixcIlwiKS5yZXBsYWNlKFwiTWludXNcIixcIi1cIikpXT1cbmYuYXR0cihnLiRhdHRyW2NdKSl9KTtyKGwsZnVuY3Rpb24oYSxlKXtuW2VdPWMoYS5yZXBsYWNlKGQscStoK1wiLVwiK20rcCkpfSk7ZS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1wYXJzZUZsb2F0KGUuJGV2YWwoaCkpO2lmKGlzTmFOKGMpKXJldHVyblwiXCI7YyBpbiBsfHwoYz1hLnBsdXJhbENhdChjLW0pKTtyZXR1cm4gbltjXShlLGYsITApfSxmdW5jdGlvbihhKXtmLnRleHQoYSl9KX19fV0seGQ9W1wiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9eihcIm5nUmVwZWF0XCIpO3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjFFMyx0ZXJtaW5hbDohMCwkJHRsYjohMCxsaW5rOmZ1bmN0aW9uKGUsZixnLGgsayl7dmFyIG09Zy5uZ1JlcGVhdCxsPW0ubWF0Y2goL15cXHMqKFtcXHNcXFNdKz8pXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpP1xccyokLyksbixxLHAscyx1LHcsdD17JGlkOk5hfTtpZighbCl0aHJvdyBkKFwiaWV4cFwiLFxubSk7Zz1sWzFdO2g9bFsyXTsobD1sWzNdKT8obj1hKGwpLHE9ZnVuY3Rpb24oYSxjLGQpe3cmJih0W3ddPWEpO3RbdV09Yzt0LiRpbmRleD1kO3JldHVybiBuKGUsdCl9KToocD1mdW5jdGlvbihhLGMpe3JldHVybiBOYShjKX0scz1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO2w9Zy5tYXRjaCgvXig/OihbXFwkXFx3XSspfFxcKChbXFwkXFx3XSspXFxzKixcXHMqKFtcXCRcXHddKylcXCkpJC8pO2lmKCFsKXRocm93IGQoXCJpaWRleHBcIixnKTt1PWxbM118fGxbMV07dz1sWzJdO3ZhciB5PXt9O2UuJHdhdGNoQ29sbGVjdGlvbihoLGZ1bmN0aW9uKGEpe3ZhciBnLGgsbD1mWzBdLG4sdD17fSxELEMsSSx4LEcsdix6LEY9W107aWYoU2EoYSkpdj1hLEc9cXx8cDtlbHNle0c9cXx8czt2PVtdO2ZvcihJIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShJKSYmXCIkXCIhPUkuY2hhckF0KDApJiZ2LnB1c2goSSk7di5zb3J0KCl9RD12Lmxlbmd0aDtoPUYubGVuZ3RoPXYubGVuZ3RoO2ZvcihnPTA7ZzxoO2crKylpZihJPWE9PT1cbnY/Zzp2W2ddLHg9YVtJXSxuPUcoSSx4LGcpLEVhKG4sXCJgdHJhY2sgYnlgIGlkXCIpLHkuaGFzT3duUHJvcGVydHkobikpej15W25dLGRlbGV0ZSB5W25dLHRbbl09eixGW2ddPXo7ZWxzZXtpZih0Lmhhc093blByb3BlcnR5KG4pKXRocm93IHIoRixmdW5jdGlvbihhKXthJiZhLnNjb3BlJiYoeVthLmlkXT1hKX0pLGQoXCJkdXBlc1wiLG0sbixvYSh4KSk7RltnXT17aWQ6bn07dFtuXT0hMX1mb3IoSSBpbiB5KXkuaGFzT3duUHJvcGVydHkoSSkmJih6PXlbSV0sZz1FYih6LmNsb25lKSxjLmxlYXZlKGcpLHIoZyxmdW5jdGlvbihhKXthLiQkTkdfUkVNT1ZFRD0hMH0pLHouc2NvcGUuJGRlc3Ryb3koKSk7Zz0wO2ZvcihoPXYubGVuZ3RoO2c8aDtnKyspe0k9YT09PXY/Zzp2W2ddO3g9YVtJXTt6PUZbZ107RltnLTFdJiYobD1GW2ctMV0uY2xvbmVbRltnLTFdLmNsb25lLmxlbmd0aC0xXSk7aWYoei5zY29wZSl7Qz16LnNjb3BlO249bDtkbyBuPW4ubmV4dFNpYmxpbmc7d2hpbGUobiYmbi4kJE5HX1JFTU9WRUQpO1xuei5jbG9uZVswXSE9biYmYy5tb3ZlKEViKHouY2xvbmUpLG51bGwsQShsKSk7bD16LmNsb25lW3ouY2xvbmUubGVuZ3RoLTFdfWVsc2UgQz1lLiRuZXcoKTtDW3VdPXg7dyYmKENbd109SSk7Qy4kaW5kZXg9ZztDLiRmaXJzdD0wPT09ZztDLiRsYXN0PWc9PT1ELTE7Qy4kbWlkZGxlPSEoQy4kZmlyc3R8fEMuJGxhc3QpO0MuJG9kZD0hKEMuJGV2ZW49MD09PShnJjEpKTt6LnNjb3BlfHxrKEMsZnVuY3Rpb24oYSl7YVthLmxlbmd0aCsrXT1YLmNyZWF0ZUNvbW1lbnQoXCIgZW5kIG5nUmVwZWF0OiBcIittK1wiIFwiKTtjLmVudGVyKGEsbnVsbCxBKGwpKTtsPWE7ei5zY29wZT1DO3ouY2xvbmU9YTt0W3ouaWRdPXp9KX15PXR9KX19fV0seWQ9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdTaG93LGZ1bmN0aW9uKGMpe2FbV2EoYyk/XCJyZW1vdmVDbGFzc1wiOlwiYWRkQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSxyZD1bXCIkYW5pbWF0ZVwiLFxuZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMsZCxlKXtjLiR3YXRjaChlLm5nSGlkZSxmdW5jdGlvbihjKXthW1dhKGMpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKGQsXCJuZy1oaWRlXCIpfSl9fV0semQ9QWEoZnVuY3Rpb24oYSxjLGQpe2EuJHdhdGNoKGQubmdTdHlsZSxmdW5jdGlvbihhLGQpe2QmJmEhPT1kJiZyKGQsZnVuY3Rpb24oYSxkKXtjLmNzcyhkLFwiXCIpfSk7YSYmYy5jc3MoYSl9LCEwKX0pLEFkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUFcIixyZXF1aXJlOlwibmdTd2l0Y2hcIixjb250cm9sbGVyOltcIiRzY29wZVwiLGZ1bmN0aW9uKCl7dGhpcy5jYXNlcz17fX1dLGxpbms6ZnVuY3Rpb24oYyxkLGUsZil7dmFyIGc9W10saD1bXSxrPVtdLG09W107Yy4kd2F0Y2goZS5uZ1N3aXRjaHx8ZS5vbixmdW5jdGlvbihkKXt2YXIgbixxO249MDtmb3IocT1rLmxlbmd0aDtuPHE7KytuKWtbbl0ucmVtb3ZlKCk7bj1rLmxlbmd0aD0wO2ZvcihxPVxubS5sZW5ndGg7bjxxOysrbil7dmFyIHA9aFtuXTttW25dLiRkZXN0cm95KCk7a1tuXT1wO2EubGVhdmUocCxmdW5jdGlvbigpe2suc3BsaWNlKG4sMSl9KX1oLmxlbmd0aD0wO20ubGVuZ3RoPTA7aWYoZz1mLmNhc2VzW1wiIVwiK2RdfHxmLmNhc2VzW1wiP1wiXSljLiRldmFsKGUuY2hhbmdlKSxyKGcsZnVuY3Rpb24oZCl7dmFyIGU9Yy4kbmV3KCk7bS5wdXNoKGUpO2QudHJhbnNjbHVkZShlLGZ1bmN0aW9uKGMpe3ZhciBlPWQuZWxlbWVudDtoLnB1c2goYyk7YS5lbnRlcihjLGUucGFyZW50KCksZSl9KX0pfSl9fX1dLEJkPUFhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGYpe2UuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dPWUuY2FzZXNbXCIhXCIrZC5uZ1N3aXRjaFdoZW5dfHxbXTtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXS5wdXNoKHt0cmFuc2NsdWRlOmYsZWxlbWVudDpjfSl9fSksQ2Q9XG5BYSh7dHJhbnNjbHVkZTpcImVsZW1lbnRcIixwcmlvcml0eTo4MDAscmVxdWlyZTpcIl5uZ1N3aXRjaFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSxmKXtlLmNhc2VzW1wiP1wiXT1lLmNhc2VzW1wiP1wiXXx8W107ZS5jYXNlc1tcIj9cIl0ucHVzaCh7dHJhbnNjbHVkZTpmLGVsZW1lbnQ6Y30pfX0pLEVkPUFhKHtsaW5rOmZ1bmN0aW9uKGEsYyxkLGUsZil7aWYoIWYpdGhyb3cgeihcIm5nVHJhbnNjbHVkZVwiKShcIm9ycGhhblwiLGlhKGMpKTtmKGZ1bmN0aW9uKGEpe2MuZW1wdHkoKTtjLmFwcGVuZChhKX0pfX0pLGVkPVtcIiR0ZW1wbGF0ZUNhY2hlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHRlcm1pbmFsOiEwLGNvbXBpbGU6ZnVuY3Rpb24oYyxkKXtcInRleHQvbmctdGVtcGxhdGVcIj09ZC50eXBlJiZhLnB1dChkLmlkLGNbMF0udGV4dCl9fX1dLGJmPXooXCJuZ09wdGlvbnNcIiksRGQ9YWEoe3Rlcm1pbmFsOiEwfSksZmQ9W1wiJGNvbXBpbGVcIixcIiRwYXJzZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9XG4vXlxccyooW1xcc1xcU10rPykoPzpcXHMrYXNcXHMrKFtcXHNcXFNdKz8pKT8oPzpcXHMrZ3JvdXBcXHMrYnlcXHMrKFtcXHNcXFNdKz8pKT9cXHMrZm9yXFxzKyg/OihbXFwkXFx3XVtcXCRcXHddKil8KD86XFwoXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqLFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKlxcKSkpXFxzK2luXFxzKyhbXFxzXFxTXSs/KSg/Olxccyt0cmFja1xccytieVxccysoW1xcc1xcU10rPykpPyQvLGU9eyRzZXRWaWV3VmFsdWU6dn07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6W1wic2VsZWN0XCIsXCI/bmdNb2RlbFwiXSxjb250cm9sbGVyOltcIiRlbGVtZW50XCIsXCIkc2NvcGVcIixcIiRhdHRyc1wiLGZ1bmN0aW9uKGEsYyxkKXt2YXIgaz10aGlzLG09e30sbD1lLG47ay5kYXRhYm91bmQ9ZC5uZ01vZGVsO2suaW5pdD1mdW5jdGlvbihhLGMsZCl7bD1hO249ZH07ay5hZGRPcHRpb249ZnVuY3Rpb24oYyl7RWEoYywnXCJvcHRpb24gdmFsdWVcIicpO21bY109ITA7bC4kdmlld1ZhbHVlPT1jJiYoYS52YWwoYyksbi5wYXJlbnQoKSYmbi5yZW1vdmUoKSl9O1xuay5yZW1vdmVPcHRpb249ZnVuY3Rpb24oYSl7dGhpcy5oYXNPcHRpb24oYSkmJihkZWxldGUgbVthXSxsLiR2aWV3VmFsdWU9PWEmJnRoaXMucmVuZGVyVW5rbm93bk9wdGlvbihhKSl9O2sucmVuZGVyVW5rbm93bk9wdGlvbj1mdW5jdGlvbihjKXtjPVwiPyBcIitOYShjKStcIiA/XCI7bi52YWwoYyk7YS5wcmVwZW5kKG4pO2EudmFsKGMpO24ucHJvcChcInNlbGVjdGVkXCIsITApfTtrLmhhc09wdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gbS5oYXNPd25Qcm9wZXJ0eShhKX07Yy4kb24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7ay5yZW5kZXJVbmtub3duT3B0aW9uPXZ9KX1dLGxpbms6ZnVuY3Rpb24oZSxnLGgsayl7ZnVuY3Rpb24gbShhLGMsZCxlKXtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1kLiR2aWV3VmFsdWU7ZS5oYXNPcHRpb24oYSk/KHgucGFyZW50KCkmJngucmVtb3ZlKCksYy52YWwoYSksXCJcIj09PWEmJncucHJvcChcInNlbGVjdGVkXCIsITApKTpGKGEpJiZ3P2MudmFsKFwiXCIpOmUucmVuZGVyVW5rbm93bk9wdGlvbihhKX07XG5jLm9uKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXthLiRhcHBseShmdW5jdGlvbigpe3gucGFyZW50KCkmJngucmVtb3ZlKCk7ZC4kc2V0Vmlld1ZhbHVlKGMudmFsKCkpfSl9KX1mdW5jdGlvbiBsKGEsYyxkKXt2YXIgZTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgZGIoZC4kdmlld1ZhbHVlKTtyKGMuZmluZChcIm9wdGlvblwiKSxmdW5jdGlvbihjKXtjLnNlbGVjdGVkPUQoYS5nZXQoYy52YWx1ZSkpfSl9O2EuJHdhdGNoKGZ1bmN0aW9uKCl7Q2EoZSxkLiR2aWV3VmFsdWUpfHwoZT1oYShkLiR2aWV3VmFsdWUpLGQuJHJlbmRlcigpKX0pO2Mub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7dmFyIGE9W107cihjLmZpbmQoXCJvcHRpb25cIiksZnVuY3Rpb24oYyl7Yy5zZWxlY3RlZCYmYS5wdXNoKGMudmFsdWUpfSk7ZC4kc2V0Vmlld1ZhbHVlKGEpfSl9KX1mdW5jdGlvbiBuKGUsZixnKXtmdW5jdGlvbiBoKCl7dmFyIGE9e1wiXCI6W119LGM9W1wiXCJdLGQsayxcbnMsdSx2O3M9Zy4kbW9kZWxWYWx1ZTt1PUEoZSl8fFtdO3ZhciBGPW4/WGIodSk6dSxHLFEsQztRPXt9O0M9ITE7aWYocClpZihrPWcuJG1vZGVsVmFsdWUsdyYmTChrKSlmb3IoQz1uZXcgZGIoW10pLGQ9e30sdj0wO3Y8ay5sZW5ndGg7disrKWRbbV09a1t2XSxDLnB1dCh3KGUsZCksa1t2XSk7ZWxzZSBDPW5ldyBkYihrKTt2PUM7dmFyIEUsSztmb3IoQz0wO0c9Ri5sZW5ndGgsQzxHO0MrKyl7az1DO2lmKG4pe2s9RltDXTtpZihcIiRcIj09PWsuY2hhckF0KDApKWNvbnRpbnVlO1Fbbl09a31RW21dPXVba107ZD1yKGUsUSl8fFwiXCI7KGs9YVtkXSl8fChrPWFbZF09W10sYy5wdXNoKGQpKTtwP2Q9RCh2LnJlbW92ZSh3P3coZSxRKTp4KGUsUSkpKToodz8oZD17fSxkW21dPXMsZD13KGUsZCk9PT13KGUsUSkpOmQ9cz09PXgoZSxRKSx2PXZ8fGQpO0U9bChlLFEpO0U9RChFKT9FOlwiXCI7ay5wdXNoKHtpZDp3P3coZSxRKTpuP0ZbQ106QyxsYWJlbDpFLHNlbGVjdGVkOmR9KX1wfHwoenx8bnVsbD09PVxucz9hW1wiXCJdLnVuc2hpZnQoe2lkOlwiXCIsbGFiZWw6XCJcIixzZWxlY3RlZDohdn0pOnZ8fGFbXCJcIl0udW5zaGlmdCh7aWQ6XCI/XCIsbGFiZWw6XCJcIixzZWxlY3RlZDohMH0pKTtRPTA7Zm9yKEY9Yy5sZW5ndGg7UTxGO1ErKyl7ZD1jW1FdO2s9YVtkXTtCLmxlbmd0aDw9UT8ocz17ZWxlbWVudDp5LmNsb25lKCkuYXR0cihcImxhYmVsXCIsZCksbGFiZWw6ay5sYWJlbH0sdT1bc10sQi5wdXNoKHUpLGYuYXBwZW5kKHMuZWxlbWVudCkpOih1PUJbUV0scz11WzBdLHMubGFiZWwhPWQmJnMuZWxlbWVudC5hdHRyKFwibGFiZWxcIixzLmxhYmVsPWQpKTtFPW51bGw7Qz0wO2ZvcihHPWsubGVuZ3RoO0M8RztDKyspZD1rW0NdLCh2PXVbQysxXSk/KEU9di5lbGVtZW50LHYubGFiZWwhPT1kLmxhYmVsJiYoRS50ZXh0KHYubGFiZWw9ZC5sYWJlbCksRS5wcm9wKFwibGFiZWxcIix2LmxhYmVsKSksdi5pZCE9PWQuaWQmJkUudmFsKHYuaWQ9ZC5pZCksRVswXS5zZWxlY3RlZCE9PWQuc2VsZWN0ZWQmJihFLnByb3AoXCJzZWxlY3RlZFwiLFxudi5zZWxlY3RlZD1kLnNlbGVjdGVkKSxSJiZFLnByb3AoXCJzZWxlY3RlZFwiLHYuc2VsZWN0ZWQpKSk6KFwiXCI9PT1kLmlkJiZ6P0s9ejooSz10LmNsb25lKCkpLnZhbChkLmlkKS5wcm9wKFwic2VsZWN0ZWRcIixkLnNlbGVjdGVkKS5hdHRyKFwic2VsZWN0ZWRcIixkLnNlbGVjdGVkKS5wcm9wKFwibGFiZWxcIixkLmxhYmVsKS50ZXh0KGQubGFiZWwpLHUucHVzaCh7ZWxlbWVudDpLLGxhYmVsOmQubGFiZWwsaWQ6ZC5pZCxzZWxlY3RlZDpkLnNlbGVjdGVkfSkscS5hZGRPcHRpb24oZC5sYWJlbCxLKSxFP0UuYWZ0ZXIoSyk6cy5lbGVtZW50LmFwcGVuZChLKSxFPUspO2ZvcihDKys7dS5sZW5ndGg+QzspZD11LnBvcCgpLHEucmVtb3ZlT3B0aW9uKGQubGFiZWwpLGQuZWxlbWVudC5yZW1vdmUoKX1mb3IoO0IubGVuZ3RoPlE7KUIucG9wKClbMF0uZWxlbWVudC5yZW1vdmUoKX12YXIgaztpZighKGs9cy5tYXRjaChkKSkpdGhyb3cgYmYoXCJpZXhwXCIscyxpYShmKSk7dmFyIGw9YyhrWzJdfHxrWzFdKSxcbm09a1s0XXx8a1s2XSxuPWtbNV0scj1jKGtbM118fFwiXCIpLHg9YyhrWzJdP2tbMV06bSksQT1jKGtbN10pLHc9a1s4XT9jKGtbOF0pOm51bGwsQj1bW3tlbGVtZW50OmYsbGFiZWw6XCJcIn1dXTt6JiYoYSh6KShlKSx6LnJlbW92ZUNsYXNzKFwibmctc2NvcGVcIiksei5yZW1vdmUoKSk7Zi5lbXB0eSgpO2Yub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2UuJGFwcGx5KGZ1bmN0aW9uKCl7dmFyIGEsYz1BKGUpfHxbXSxkPXt9LGssbCxxLHIscyx0LHY7aWYocClmb3IobD1bXSxyPTAsdD1CLmxlbmd0aDtyPHQ7cisrKWZvcihhPUJbcl0scT0xLHM9YS5sZW5ndGg7cTxzO3ErKyl7aWYoKGs9YVtxXS5lbGVtZW50KVswXS5zZWxlY3RlZCl7az1rLnZhbCgpO24mJihkW25dPWspO2lmKHcpZm9yKHY9MDt2PGMubGVuZ3RoJiYoZFttXT1jW3ZdLHcoZSxkKSE9ayk7disrKTtlbHNlIGRbbV09Y1trXTtsLnB1c2goeChlLGQpKX19ZWxzZSBpZihrPWYudmFsKCksXCI/XCI9PWspbD11O2Vsc2UgaWYoXCJcIj09PVxuaylsPW51bGw7ZWxzZSBpZih3KWZvcih2PTA7djxjLmxlbmd0aDt2Kyspe2lmKGRbbV09Y1t2XSx3KGUsZCk9PWspe2w9eChlLGQpO2JyZWFrfX1lbHNlIGRbbV09Y1trXSxuJiYoZFtuXT1rKSxsPXgoZSxkKTtnLiRzZXRWaWV3VmFsdWUobCk7aCgpfSl9KTtnLiRyZW5kZXI9aDtlLiR3YXRjaENvbGxlY3Rpb24oQSxoKTtlLiR3YXRjaENvbGxlY3Rpb24oZnVuY3Rpb24oKXt2YXIgYT17fSxjPUEoZSk7aWYoYyl7Zm9yKHZhciBkPUFycmF5KGMubGVuZ3RoKSxmPTAsZz1jLmxlbmd0aDtmPGc7ZisrKWFbbV09Y1tmXSxkW2ZdPWwoZSxhKTtyZXR1cm4gZH19LGgpO3AmJmUuJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbigpe3JldHVybiBnLiRtb2RlbFZhbHVlfSxoKX1pZihrWzFdKXt2YXIgcT1rWzBdO2s9a1sxXTt2YXIgcD1oLm11bHRpcGxlLHM9aC5uZ09wdGlvbnMsej0hMSx3LHQ9QShYLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLHk9QShYLmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSksXG54PXQuY2xvbmUoKTtoPTA7Zm9yKHZhciBCPWcuY2hpbGRyZW4oKSx2PUIubGVuZ3RoO2g8djtoKyspaWYoXCJcIj09PUJbaF0udmFsdWUpe3c9ej1CLmVxKGgpO2JyZWFrfXEuaW5pdChrLHoseCk7cCYmKGsuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fDA9PT1hLmxlbmd0aH0pO3M/bihlLGcsayk6cD9sKGUsZyxrKTptKGUsZyxrLHEpfX19fV0saGQ9W1wiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oYSl7dmFyIGM9e2FkZE9wdGlvbjp2LHJlbW92ZU9wdGlvbjp2fTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oZCxlKXtpZihGKGUudmFsdWUpKXt2YXIgZj1hKGQudGV4dCgpLCEwKTtmfHxlLiRzZXQoXCJ2YWx1ZVwiLGQudGV4dCgpKX1yZXR1cm4gZnVuY3Rpb24oYSxkLGUpe3ZhciBtPWQucGFyZW50KCksbD1tLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKXx8bS5wYXJlbnQoKS5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIik7bCYmbC5kYXRhYm91bmQ/XG5kLnByb3AoXCJzZWxlY3RlZFwiLCExKTpsPWM7Zj9hLiR3YXRjaChmLGZ1bmN0aW9uKGEsYyl7ZS4kc2V0KFwidmFsdWVcIixhKTthIT09YyYmbC5yZW1vdmVPcHRpb24oYyk7bC5hZGRPcHRpb24oYSl9KTpsLmFkZE9wdGlvbihlLnZhbHVlKTtkLm9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2wucmVtb3ZlT3B0aW9uKGUudmFsdWUpfSl9fX19XSxnZD1hYSh7cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITB9KTtXLmFuZ3VsYXIuYm9vdHN0cmFwP2NvbnNvbGUubG9nKFwiV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlwiKTooKEZhPVcualF1ZXJ5KSYmRmEuZm4ub24/KEE9RmEsRShGYS5mbix7c2NvcGU6T2Euc2NvcGUsaXNvbGF0ZVNjb3BlOk9hLmlzb2xhdGVTY29wZSxjb250cm9sbGVyOk9hLmNvbnRyb2xsZXIsaW5qZWN0b3I6T2EuaW5qZWN0b3IsaW5oZXJpdGVkRGF0YTpPYS5pbmhlcml0ZWREYXRhfSksR2IoXCJyZW1vdmVcIiwhMCwhMCwhMSksR2IoXCJlbXB0eVwiLFxuITEsITEsITEpLEdiKFwiaHRtbFwiLCExLCExLCEwKSk6QT1TLFhhLmVsZW1lbnQ9QSxaYyhYYSksQShYKS5yZWFkeShmdW5jdGlvbigpe1djKFgsZGMpfSkpfSkod2luZG93LGRvY3VtZW50KTshd2luZG93LmFuZ3VsYXIuJCRjc3AoKSYmd2luZG93LmFuZ3VsYXIuZWxlbWVudChkb2N1bWVudCkuZmluZChcImhlYWRcIikucHJlcGVuZCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPkBjaGFyc2V0IFwiVVRGLThcIjtbbmdcXFxcOmNsb2FrXSxbbmctY2xvYWtdLFtkYXRhLW5nLWNsb2FrXSxbeC1uZy1jbG9ha10sLm5nLWNsb2FrLC54LW5nLWNsb2FrLC5uZy1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O31uZ1xcXFw6Zm9ybXtkaXNwbGF5OmJsb2NrO30ubmctYW5pbWF0ZS1ibG9jay10cmFuc2l0aW9uc3t0cmFuc2l0aW9uOjBzIGFsbCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOjBzIGFsbCFpbXBvcnRhbnQ7fS5uZy1oaWRlLWFkZC1hY3RpdmUsLm5nLWhpZGUtcmVtb3Zle2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O308L3N0eWxlPicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci5taW4uanMubWFwXG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxudmFyIEtlZW5SZXF1ZXN0cyA9IHJlcXVpcmUoJy4vbGliL3JlcXVlc3RzJyk7XG52YXIgS2VlblF1ZXJ5ID0gcmVxdWlyZSgnLi9saWIvcXVlcnknKTtcblxuZnVuY3Rpb24gS2VlbkFwaShjb25maWcpIHtcblx0aWYgKCFjb25maWcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2NvbmZpZycgcGFyYW1ldGVyIG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgSlMgb2JqZWN0LlwiKTtcblx0fVxuXHRpZiAoIWNvbmZpZy5wcm9qZWN0SWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2NvbmZpZycgb2JqZWN0IG11c3QgY29udGFpbiBhICdwcm9qZWN0SWQnLlwiKTtcblx0fVxuXG5cdHRoaXMucHJvamVjdElkID0gY29uZmlnLnByb2plY3RJZDtcblx0dGhpcy53cml0ZUtleSA9IGNvbmZpZy53cml0ZUtleTtcblx0dGhpcy5yZWFkS2V5ID0gY29uZmlnLnJlYWRLZXk7XG5cdHRoaXMubWFzdGVyS2V5ID0gY29uZmlnLm1hc3RlcktleTtcblx0dGhpcy5iYXNlVXJsID0gY29uZmlnLmJhc2VVcmwgfHwgJ2h0dHBzOi8vYXBpLmtlZW4uaW8vJztcblx0dGhpcy5hcGlWZXJzaW9uID0gY29uZmlnLmFwaVZlcnNpb24gfHwgJzMuMCc7XG5cblx0dmFyIGJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XG5cdHZhciBhcGlWZXJzaW9uID0gdGhpcy5hcGlWZXJzaW9uO1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0Ly8gUHVibGljIE1ldGhvZHNcblxuXHR0aGlzLnByb2plY3RzID0ge1xuXHRcdGxpc3Q6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMnLCBudWxsLCBjYWxsYmFjayk7XG5cdFx0fSxcblx0XHR2aWV3OiBmdW5jdGlvbihwcm9qZWN0SWQsIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCwgbnVsbCwgY2FsbGJhY2spO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmV2ZW50cyA9IHtcblx0XHRsaXN0OiBmdW5jdGlvbihwcm9qZWN0SWQsIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZ2V0LmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzJywgbnVsbCwgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0aW5zZXJ0OiBmdW5jdGlvbihwcm9qZWN0SWQsIGV2ZW50cywgY2FsbGJhY2spIHtcblx0XHRcdGV2ZW50cyA9IGV2ZW50cyB8fCBbXTtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRldmVudHMuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHR2YXIgY29sbGVjdGlvbiA9IGV2ZW50LmNvbGxlY3Rpb247XG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0YVtjb2xsZWN0aW9uXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGRhdGFbY29sbGVjdGlvbl0gPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgaXRlbSA9IChldmVudC5kYXRhIHx8IHt9KTtcblx0XHRcdFx0aWYgKHR5cGVvZiBldmVudC5rZWVuID09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0aXRlbS5rZWVuID0gZXZlbnQua2Vlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhW2NvbGxlY3Rpb25dLnB1c2goaXRlbSk7XG5cdFx0XHR9KTtcblx0XHRcdEtlZW5SZXF1ZXN0cy5wb3N0LmNhbGwoc2VsZiwgc2VsZi53cml0ZUtleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMnLCBkYXRhLCBjYWxsYmFjayk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucHJvcGVydGllcyA9IHtcblx0XHR2aWV3OiBmdW5jdGlvbihwcm9qZWN0SWQsIGNvbGxlY3Rpb24sIHByb3BlcnR5LCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cy8nICsgY29sbGVjdGlvbiArICcvcHJvcGVydGllcy8nICsgcHJvcGVydHksIG51bGwsIGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZTogZnVuY3Rpb24ocHJvamVjdElkLCBjb2xsZWN0aW9uLCBwcm9wZXJ0eSwgY2FsbGJhY2spIHtcblx0XHRcdEtlZW5SZXF1ZXN0cy5kZWwuY2FsbChzZWxmLCBzZWxmLm1hc3RlcktleSwgJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9ldmVudHMvJyArIGNvbGxlY3Rpb24gKyAnL3Byb3BlcnRpZXMvJyArIHByb3BlcnR5LCBjYWxsYmFjayk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuY29sbGVjdGlvbnMgPSB7XG5cdFx0dmlldzogZnVuY3Rpb24ocHJvamVjdElkLCBjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYubWFzdGVyS2V5LCAnL3Byb2plY3RzLycgKyBwcm9qZWN0SWQgKyAnL2V2ZW50cy8nICsgY29sbGVjdGlvbiwgbnVsbCwgY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbihwcm9qZWN0SWQsIGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG5cdFx0XHRLZWVuUmVxdWVzdHMuZGVsLmNhbGwoc2VsZiwgc2VsZi5tYXN0ZXJLZXksICcvcHJvamVjdHMvJyArIHByb2plY3RJZCArICcvZXZlbnRzLycgKyBjb2xsZWN0aW9uLCBjYWxsYmFjayk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuYWRkRXZlbnQgPSBmdW5jdGlvbihldmVudENvbGxlY3Rpb24sIGV2ZW50LCBjYWxsYmFjaykge1xuXHRcdGlmICghdGhpcy53cml0ZUtleSkge1xuXHRcdFx0dmFyIGVycm9yTWVzc2FnZSA9IFwiWW91IG11c3Qgc3BlY2lmeSBhIG5vbi1udWxsLCBub24tZW1wdHkgJ3dyaXRlS2V5JyBpbiB5b3VyICdjb25maWcnIG9iamVjdCB3aGVuIGNhbGxpbmcga2Vlbi5jb25maWd1cmUoKSFcIjtcblx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdEtlZW5SZXF1ZXN0cy5wb3N0LmNhbGwoc2VsZiwgdGhpcy53cml0ZUtleSwgXCIvcHJvamVjdHMvXCIgKyB0aGlzLnByb2plY3RJZCArIFwiL2V2ZW50cy9cIiArIGV2ZW50Q29sbGVjdGlvbiwgZXZlbnQsIGNhbGxiYWNrKTtcblx0fTtcblxuXHR0aGlzLnJlcXVlc3QgPSBmdW5jdGlvbihtZXRob2QsIGtleVR5cGUsIHBhdGgsIHBhcmFtcywgY2FsbGJhY2spIHtcblx0XHRtZXRob2QgPSB0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJyAmJiBtZXRob2QudG9Mb3dlckNhc2UoKTtcblx0XHRrZXlUeXBlICs9ICdLZXknO1xuXHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgKHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbicpICYmIHBhcmFtcztcblxuXHRcdGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHBhdGggPSAnL3Byb2plY3RzLycgKyB0aGlzLnByb2plY3RJZCArICcvJyArIHBhdGgucmVwbGFjZSgvXlxcLy8sJycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1xcJ3BhdGhcXCcgbXVzdCBiZSBhIHN0cmluZy4nKTtcblx0XHR9XG5cblx0XHRpZiAoICEgS2VlblJlcXVlc3RzLmhhc093blByb3BlcnR5KG1ldGhvZCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG11c3QgYmUgb2YgdHlwZTogR0VUL1BPU1QvREVMJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmhhc093blByb3BlcnR5KGtleVR5cGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBtdXN0IGJlIG9mIHR5cGU6IG1hc3Rlci93cml0ZS9yZWFkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzW2tleVR5cGVdKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHNwZWNpZnkgYSBudW4tbnVsbCwgbm9uLWVtcHR5IFxcJycgKyBrZXlUeXBlICsgJ1xcJyBpbiB5b3VyIGNvbmZpZyBvYmplY3QuJyk7XG5cdFx0fVxuXG5cdFx0aWYobWV0aG9kID09PSAncG9zdCcgfHwgbWV0aG9kID09PSAnZ2V0Jykge1xuXHRcdFx0cmV0dXJuIEtlZW5SZXF1ZXN0c1ttZXRob2RdLmNhbGwoc2VsZiwgdGhpc1trZXlUeXBlXSwgcGF0aCwgcGFyYW1zLCBjYWxsYmFjayk7XG5cdFx0fVxuXG5cdFx0S2VlblJlcXVlc3RzW21ldGhvZF0uY2FsbChzZWxmLCB0aGlzW2tleVR5cGVdLCBwYXRoLCBjYWxsYmFjayk7XG5cdH07XG5cblx0dGhpcy5hZGRFdmVudHMgPSBmdW5jdGlvbihldmVudHMsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCF0aGlzLndyaXRlS2V5KSB7XG5cdFx0XHR2YXIgZXJyb3JNZXNzYWdlID0gXCJZb3UgbXVzdCBzcGVjaWZ5IGEgbm9uLW51bGwsIG5vbi1lbXB0eSAnd3JpdGVLZXknIGluIHlvdXIgJ2NvbmZpZycgb2JqZWN0IHdoZW4gY2FsbGluZyBrZWVuLmNvbmZpZ3VyZSgpIVwiO1xuXHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0S2VlblJlcXVlc3RzLnBvc3QuY2FsbChzZWxmLCB0aGlzLndyaXRlS2V5LCBcIi9wcm9qZWN0cy9cIiArIHRoaXMucHJvamVjdElkICsgXCIvZXZlbnRzXCIsIGV2ZW50cywgY2FsbGJhY2spO1xuXHR9O1xuXG5cdHRoaXMucXVlcmllcyA9IHtcblx0XHRleHRyYWN0aW9uOiBmdW5jdGlvbihwcm9qZWN0SWQsIGNvbGxlY3Rpb24sIHBhcmFtcywgY2FsbGJhY2spe1xuXHRcdFx0dmFyIHJlcXVlc3RQYXJhbXMgPSBfLmV4dGVuZCh7fSwgcGFyYW1zLCB7ICdldmVudF9jb2xsZWN0aW9uJzogY29sbGVjdGlvbiB9KTtcblx0XHRcdHZhciBwYXRoID0gJy9wcm9qZWN0cy8nICsgcHJvamVjdElkICsgJy9xdWVyaWVzL2V4dHJhY3Rpb24nO1xuXHRcdFx0S2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYsIHNlbGYucmVhZEtleSwgcGF0aCwgcmVxdWVzdFBhcmFtcywgY2FsbGJhY2spO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLnJ1biA9IEtlZW5RdWVyeS5jbGllbnQucnVuO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG5cdHJldHVybiBuZXcgS2VlbkFwaShjb25maWcpO1xufVxuXG5mdW5jdGlvbiBlbmNyeXB0U2NvcGVkS2V5KGFwaUtleSwgb3B0aW9ucykge1xuXHR2YXIgaXYgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpO1xuXHR2YXIgY2lwaGVyID0gY3J5cHRvLmNyZWF0ZUNpcGhlcml2KFwiYWVzLTI1Ni1jYmNcIiwgYXBpS2V5LCBpdik7XG5cdHZhciBqc29uT3B0aW9ucyA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuXHR2YXIgZW5jcnlwdE91dHB1dDEgPSBjaXBoZXIudXBkYXRlKGpzb25PcHRpb25zLCBcInV0ZjhcIiwgXCJoZXhcIik7XG5cdHZhciBlbmNyeXB0T3V0cHV0MiA9IGNpcGhlci5maW5hbChcImhleFwiKTtcblx0dmFyIGl2UGx1c0VuY3J5cHRlZCA9IGl2LnRvU3RyaW5nKFwiaGV4XCIpICsgZW5jcnlwdE91dHB1dDEgKyBlbmNyeXB0T3V0cHV0Mjtcblx0cmV0dXJuIGl2UGx1c0VuY3J5cHRlZDtcbn1cblxuZnVuY3Rpb24gZGVjcnlwdFNjb3BlZEtleShhcGlLZXksIHNjb3BlZEtleSkge1xuXHR2YXIgaGV4ZWRJdiA9IHNjb3BlZEtleS5zdWJzdHJpbmcoMCwgMzIpO1xuXHR2YXIgaGV4ZWRDaXBoZXJUZXh0ID0gc2NvcGVkS2V5LnN1YnN0cmluZygzMiwgc2NvcGVkS2V5Lmxlbmd0aCk7XG5cdHZhciBpdiA9IG5ldyBCdWZmZXIoaGV4ZWRJdiwgXCJoZXhcIik7XG5cdHZhciBjaXBoZXJUZXh0ID0gbmV3IEJ1ZmZlcihoZXhlZENpcGhlclRleHQsIFwiaGV4XCIpO1xuXHR2YXIgZGVjaXBoZXIgPSBjcnlwdG8uY3JlYXRlRGVjaXBoZXJpdihcImFlcy0yNTYtY2JjXCIsIGFwaUtleSwgaXYpO1xuXHR2YXIgZGVjcnlwdE91dHB1dDEgPSBkZWNpcGhlci51cGRhdGUoY2lwaGVyVGV4dCk7XG5cdHZhciBkZWNyeXB0T3V0cHV0MiA9IGRlY2lwaGVyLmZpbmFsKCk7XG5cdHZhciBkZWNyeXB0ZWQgPSBkZWNyeXB0T3V0cHV0MSArIGRlY3J5cHRPdXRwdXQyO1xuXHRyZXR1cm4gSlNPTi5wYXJzZShkZWNyeXB0ZWQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29uZmlndXJlOiBjb25maWd1cmUsXG5cdGVuY3J5cHRTY29wZWRLZXk6IGVuY3J5cHRTY29wZWRLZXksXG5cdGRlY3J5cHRTY29wZWRLZXk6IGRlY3J5cHRTY29wZWRLZXksXG5cdFF1ZXJ5OiBLZWVuUXVlcnkuUXVlcnlcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCJ2YXIgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUnKTtcbnZhciBLZWVuUmVxdWVzdHMgPSByZXF1aXJlKCcuL3JlcXVlc3RzJyk7XG5cbi8qIVxuKiAtLS0tLS0tLS0tLS0tLS0tLVxuKiBLZWVuIElPIFF1ZXJ5IEpTXG4qIC0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG52YXIgS2VlbiA9IHt9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEtlZW4uUmVxdWVzdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbktlZW4uUmVxdWVzdCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuZGF0YSA9IHt9O1xuICB0aGlzLmNvbmZpZ3VyZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5LZWVuLlJlcXVlc3QucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNsaWVudCwgcXVlcmllcywgY2FsbGJhY2spe1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgdGhpcy5xdWVyaWVzID0gcXVlcmllcztcbiAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB0aGlzLnJ1bigpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbktlZW4uUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgY29tcGxldGlvbnMgPSAwLFxuICAgICAgcmVzcG9uc2UgPSBbXTtcblxuICB2YXIgaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gICAgaWYgKGVyciAmJiBzZWxmLmNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIsIG51bGwpO1xuICAgIH1cbiAgICByZXNwb25zZVthcmd1bWVudHNbMl1dID0gcmVzLCBjb21wbGV0aW9ucysrO1xuICAgIGlmIChjb21wbGV0aW9ucyA9PSBzZWxmLnF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICBzZWxmLmRhdGEgPSAoc2VsZi5xdWVyaWVzLmxlbmd0aCA9PSAxKSA/IHJlc3BvbnNlWzBdIDogcmVzcG9uc2U7XG4gICAgICBpZiAoc2VsZi5jYWxsYmFjaykgc2VsZi5jYWxsYmFjayhudWxsLCBzZWxmLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBfLmVhY2goc2VsZi5xdWVyaWVzLCBmdW5jdGlvbihxdWVyeSwgaW5kZXgpe1xuICAgIHZhciBkYXRhLCBwYXRoID0gJy9wcm9qZWN0cy8nICsgc2VsZi5jbGllbnQucHJvamVjdElkO1xuICAgIHZhciBjYWxsYmFja1NlcXVlbmNlciA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgICAgIGhhbmRsZVJlc3BvbnNlKGVyciwgcmVzLCBpbmRleCk7XG4gICAgfTtcblxuICAgIGlmIChxdWVyeSBpbnN0YW5jZW9mIEtlZW4uUXVlcnkpIHtcbiAgICAgIHBhdGggKz0gcXVlcnkucGF0aDtcbiAgICAgIGRhdGEgPSBxdWVyeS5wYXJhbXMgfHwge307XG4gICAgfVxuICAgIC8qIFRPRE86IFRlc3QgYW5kIGRlcGxveSB0aGlzXG4gICAgZWxzZSBpZiAoXy5pc1N0cmluZyhxdWVyeSkpIHtcbiAgICAgIHBhdGggKz0gJy9zYXZlZF9xdWVyaWVzLycgKyBxdWVyeSArICcvcmVzdWx0JztcbiAgICAgIGRhdGEgPSB7IGFwaV9rZXk6IHNlbGYuY2xpZW50LnJlYWRLZXkgfTtcbiAgICB9Ki9cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVlcnkgIycgKyAoaW5kZXgrMSkgICsnIGlzIG5vdCB2YWxpZCcpO1xuXG4gICAgfVxuXG4gICAgS2VlblJlcXVlc3RzLmdldC5jYWxsKHNlbGYuY2xpZW50LCBzZWxmLmNsaWVudC5yZWFkS2V5LCBwYXRoLCBkYXRhLCBjYWxsYmFja1NlcXVlbmNlcik7XG4gIH0pO1xuXG4gIHJldHVybiBzZWxmO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEtlZW4uUXVlcnlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5LZWVuLlF1ZXJ5ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5jb25maWd1cmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbktlZW4uUXVlcnkucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGFuYWx5c2lzVHlwZSwgcGFyYW1zKXtcbiAgLy9pZiAoIWNvbGxlY3Rpb24pIHRocm93IG5ldyBFcnJvcignRXZlbnQgQ29sbGVjdGlvbiBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5wYXRoID0gJy9xdWVyaWVzLycgKyBhbmFseXNpc1R5cGU7XG4gIHNlbGYucGFyYW1zID0ge307XG4gIHNlbGYuc2V0KHBhcmFtcyk7XG4gIHJldHVybiBzZWxmO1xufTtcblxuS2Vlbi5RdWVyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oYXR0cmlidXRlKSB7XG4gIGlmICh0aGlzLnBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnBhcmFtc1thdHRyaWJ1dGVdIHx8IG51bGw7XG4gIH1cbn07XG5cbktlZW4uUXVlcnkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBfLmVhY2goYXR0cmlidXRlcywgZnVuY3Rpb24odiwgayl7XG4gICAgdmFyIGtleSA9IGssIHZhbHVlID0gdjtcbiAgICBpZiAoay5tYXRjaChuZXcgUmVnRXhwKFwiW0EtWl1cIikpKSB7XG4gICAgICBrZXkgPSBrLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHsgcmV0dXJuIFwiX1wiKyQxLnRvTG93ZXJDYXNlKCk7IH0pO1xuICAgIH1cbiAgICBzZWxmLnBhcmFtc1trZXldID0gdmFsdWU7XG5cbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgXy5lYWNoKHZhbHVlLCBmdW5jdGlvbihkdiwgaW5kZXgpe1xuICAgICAgICBpZiAoXy5pc09iamVjdChkdikpIHtcbiAgICAgICAgICBfLmVhY2goZHYsIGZ1bmN0aW9uKGRlZXBWYWx1ZSwgZGVlcEtleSl7XG4gICAgICAgICAgICBpZiAoZGVlcEtleS5tYXRjaChuZXcgUmVnRXhwKFwiW0EtWl1cIikpKSB7XG4gICAgICAgICAgICAgIHZhciBfZGVlcEtleSA9IGRlZXBLZXkucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbigkMSkgeyByZXR1cm4gXCJfXCIrJDEudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnBhcmFtc1trZXldW2luZGV4XVtkZWVwS2V5XTtcbiAgICAgICAgICAgICAgc2VsZi5wYXJhbXNba2V5XVtpbmRleF1bX2RlZXBLZXldID0gZGVlcFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG4gIHJldHVybiBzZWxmO1xufTtcblxuXG4vLyBFeHBvcnQgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xpZW50OiB7XG4gICAgcnVuOiBmdW5jdGlvbihxdWVyeSwgY2FsbGJhY2spe1xuICAgICAgaWYgKCFxdWVyeSkgdGhyb3cgbmV3IEVycm9yKCdBdCBsZWFzdCBvbmUgcXVlcnkgaXMgcmVxdWlyZWQnKTtcbiAgICAgIHZhciBxdWVyaWVzID0gKF8uaXNBcnJheShxdWVyeSkpID8gcXVlcnkgOiBbcXVlcnldO1xuICAgICAgcmV0dXJuIG5ldyBLZWVuLlJlcXVlc3QodGhpcywgcXVlcmllcywgY2FsbGJhY2spO1xuICAgIH1cbiAgfSxcbiAgUXVlcnk6IEtlZW4uUXVlcnlcbn07XG4iLCJ2YXIgcmVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuLy8gSGFuZGxlIGxvZ2ljIG9mIHByb2Nlc3NpbmcgcmVzcG9uc2UsIGluY2x1ZGluZyBlcnJvciBtZXNzYWdlc1xuLy8gVGhlIGVycm9yIGhhbmRsaW5nIHNob3VsZCBiZSBzdHJlbmd0aGVuZWQgb3ZlciB0aW1lIHRvIGJlIG1vcmVcbi8vIG1lYW5pbmdmdWwgYW5kIHJvYnVzdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShlcnIsIHJlcywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuXG4gIGlmIChyZXMgJiYgIXJlcy5vayAmJiAhZXJyKSB7XG4gICAgdmFyIGlzX2VyciA9IHJlcy5ib2R5ICYmIHJlcy5ib2R5LmVycm9yX2NvZGU7XG4gICAgZXJyID0gbmV3IEVycm9yKGlzX2VyciA/IHJlcy5ib2R5Lm1lc3NhZ2UgOiAnVW5rbm93biBlcnJvciBvY2N1cnJlZCcpO1xuICAgIGVyci5jb2RlID0gaXNfZXJyID8gcmVzLmJvZHkuZXJyb3JfY29kZSA6ICdVbmtub3duRXJyb3InO1xuICB9XG5cbiAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gIHJldHVybiBjYWxsYmFjayhudWxsLCByZXMuYm9keSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcocGFyYW1zKXtcbiAgdmFyIHF1ZXJ5ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zW2tleV0pIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgcXVlcnkucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIj9cIiArIHF1ZXJ5LmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldDogZnVuY3Rpb24oYXBpS2V5LCBwYXRoLCBkYXRhLCBjYWxsYmFjaykge1xuICAgIHJlc3RcbiAgICAuZ2V0KHRoaXMuYmFzZVVybCArIHRoaXMuYXBpVmVyc2lvbiArIHBhdGggKyBidWlsZFF1ZXJ5U3RyaW5nKGRhdGEpKVxuICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBhcGlLZXkpXG4gICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKGVyciwgcmVzLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH0sXG4gIHBvc3Q6IGZ1bmN0aW9uKGFwaUtleSwgcGF0aCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICByZXN0XG4gICAgLnBvc3QodGhpcy5iYXNlVXJsICsgdGhpcy5hcGlWZXJzaW9uICsgcGF0aClcbiAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgYXBpS2V5KVxuICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAuc2VuZChkYXRhIHx8IHt9KVxuICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgIHByb2Nlc3NSZXNwb25zZShlcnIsIHJlcywgY2FsbGJhY2spO1xuICAgIH0pO1xuICB9LFxuICBkZWw6IGZ1bmN0aW9uKGFwaUtleSwgcGF0aCwgY2FsbGJhY2spIHtcbiAgICByZXN0XG4gICAgLmRlbCh0aGlzLmJhc2VVcmwgKyB0aGlzLmFwaVZlcnNpb24gKyBwYXRoKVxuICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBhcGlLZXkpXG4gICAgLnNldCgnQ29udGVudC1MZW5ndGgnLCAwKVxuICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgIHByb2Nlc3NSZXNwb25zZShlcnIsIHJlcywgY2FsbGJhY2spO1xuICAgIH0pO1xuICB9XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ3JlZHVjZScpO1xuXG4vKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvd1xuICA/IHRoaXNcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5mdW5jdGlvbiBnZXRYSFIoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgJiYgKCdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbCB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIHRoaXMudGV4dCA9IHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyBcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHQgXG4gICAgIDogbnVsbDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0KVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgc3RyLmxlbmd0aFxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXMgfHwgMTIyMyA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7IFxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgfVxuXG4gICAgc2VsZi5jYWxsYmFjayhlcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKG5ldyBCbG9iKFsnPGEgaWQ9XCJhXCI+PGIgaWQ9XCJiXCI+aGV5ITwvYj48L2E+J10sIHsgdHlwZTogXCJ0ZXh0L2h0bWxcIn0pKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHBhcmFtIHtCbG9ifEZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uKGZpZWxkLCBmaWxlLCBmaWxlbmFtZSl7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHRoaXMuX2Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChmaWVsZCwgZmlsZSwgZmlsZW5hbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZCBgZGF0YWAsIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gcXVlcnlzdHJpbmdcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtdWx0aXBsZSBkYXRhIFwid3JpdGVzXCJcbiAqICAgICAgIHJlcXVlc3QuZ2V0KCcvc2VhcmNoJylcbiAqICAgICAgICAgLnNlbmQoeyBzZWFyY2g6ICdxdWVyeScgfSlcbiAqICAgICAgICAgLnNlbmQoeyByYW5nZTogJzEuLjUnIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgb3JkZXI6ICdkZXNjJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICAqICAgICAgICAuc2VuZCgnbmFtZT10b2JpJylcbiAgKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAgKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBvYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldEhlYWRlcignQ29udGVudC1UeXBlJyk7XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKG9iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBkYXRhKSB7XG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyA9PSB0eXBlKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YVxuICAgICAgICA/IHRoaXMuX2RhdGEgKyAnJicgKyBkYXRhXG4gICAgICAgIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFvYmopIHJldHVybiB0aGlzO1xuICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnanNvbicpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBpZiAoMiA9PSBmbi5sZW5ndGgpIHJldHVybiBmbihlcnIsIHJlcyk7XG4gIGlmIChlcnIpIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgZm4ocmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gZ2V0WEhSKCk7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICB2YXIgZGF0YSA9IHRoaXMuX2Zvcm1EYXRhIHx8IHRoaXMuX2RhdGE7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoNCAhPSB4aHIucmVhZHlTdGF0ZSkgcmV0dXJuO1xuICAgIGlmICgwID09IHhoci5zdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybiBzZWxmLnRpbWVvdXRFcnJvcigpO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIGlmICh4aHIudXBsb2FkKSB7XG4gICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24oZSl7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRcbiAgaWYgKHRpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLmFib3J0KCk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICAvLyBxdWVyeXN0cmluZ1xuICBpZiAocXVlcnkpIHtcbiAgICBxdWVyeSA9IHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0KHF1ZXJ5KTtcbiAgICB0aGlzLnVybCArPSB+dGhpcy51cmwuaW5kZXhPZignPycpXG4gICAgICA/ICcmJyArIHF1ZXJ5XG4gICAgICA6ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB4aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuXG4gIC8vIENPUlNcbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbiAgLy8gYm9keVxuICBpZiAoJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICFpc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgc2VyaWFsaXplID0gcmVxdWVzdC5zZXJpYWxpemVbdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXTtcbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcbiAgeGhyLnNlbmQoZGF0YSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogSXNzdWUgYSByZXF1ZXN0OlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgIHJlcXVlc3QoJ0dFVCcsICcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnKS5lbmQoY2FsbGJhY2spXG4gKiAgICByZXF1ZXN0KCcvdXNlcnMnLCBjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdXJsIG9yIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmdldCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIERFTEVURSBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5kZWwgPSBmdW5jdGlvbih1cmwsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0RFTEVURScsIHVybCk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBBVENIIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQVVQgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1ZXN0O1xuIiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiXG4vKipcbiAqIFJlZHVjZSBgYXJyYCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFxuICpcbiAqIFRPRE86IGNvbWJhdGlibGUgZXJyb3IgaGFuZGxpbmc/XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGZuLCBpbml0aWFsKXsgIFxuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBjdXJyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAzXG4gICAgPyBpbml0aWFsXG4gICAgOiBhcnJbaWR4KytdO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBjdXJyID0gZm4uY2FsbChudWxsLCBjdXJyLCBhcnJbaWR4XSwgKytpZHgsIGFycik7XG4gIH1cbiAgXG4gIHJldHVybiBjdXJyO1xufTsiLCIvLyAgICAgVW5kZXJzY29yZS5qcyAxLjUuMlxuLy8gICAgIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4vLyAgICAgKGMpIDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuLy8gICAgIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbihmdW5jdGlvbigpIHtcblxuICAvLyBCYXNlbGluZSBzZXR1cFxuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEVzdGFibGlzaCB0aGUgcm9vdCBvYmplY3QsIGB3aW5kb3dgIGluIHRoZSBicm93c2VyLCBvciBgZXhwb3J0c2Agb24gdGhlIHNlcnZlci5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuXG4gIC8vIFNhdmUgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRoZSBgX2AgdmFyaWFibGUuXG4gIHZhciBwcmV2aW91c1VuZGVyc2NvcmUgPSByb290Ll87XG5cbiAgLy8gRXN0YWJsaXNoIHRoZSBvYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIHRvIGJyZWFrIG91dCBvZiBhIGxvb3AgaXRlcmF0aW9uLlxuICB2YXIgYnJlYWtlciA9IHt9O1xuXG4gIC8vIFNhdmUgYnl0ZXMgaW4gdGhlIG1pbmlmaWVkIChidXQgbm90IGd6aXBwZWQpIHZlcnNpb246XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLCBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsIEZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgdmFyXG4gICAgcHVzaCAgICAgICAgICAgICA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSAgICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZSxcbiAgICBjb25jYXQgICAgICAgICAgID0gQXJyYXlQcm90by5jb25jYXQsXG4gICAgdG9TdHJpbmcgICAgICAgICA9IE9ialByb3RvLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ICAgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvLyBBbGwgKipFQ01BU2NyaXB0IDUqKiBuYXRpdmUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb25zIHRoYXQgd2UgaG9wZSB0byB1c2VcbiAgLy8gYXJlIGRlY2xhcmVkIGhlcmUuXG4gIHZhclxuICAgIG5hdGl2ZUZvckVhY2ggICAgICA9IEFycmF5UHJvdG8uZm9yRWFjaCxcbiAgICBuYXRpdmVNYXAgICAgICAgICAgPSBBcnJheVByb3RvLm1hcCxcbiAgICBuYXRpdmVSZWR1Y2UgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZSxcbiAgICBuYXRpdmVSZWR1Y2VSaWdodCAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciAgICAgICA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ICAgICAgICA9IEFycmF5UHJvdG8uZXZlcnksXG4gICAgbmF0aXZlU29tZSAgICAgICAgID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgICAgICA9IEFycmF5UHJvdG8uaW5kZXhPZixcbiAgICBuYXRpdmVMYXN0SW5kZXhPZiAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyAgICAgICAgID0gT2JqZWN0LmtleXMsXG4gICAgbmF0aXZlQmluZCAgICAgICAgID0gRnVuY1Byb3RvLmJpbmQ7XG5cbiAgLy8gQ3JlYXRlIGEgc2FmZSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciB1c2UgYmVsb3cuXG4gIHZhciBfID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIF8pIHJldHVybiBvYmo7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIF8pKSByZXR1cm4gbmV3IF8ob2JqKTtcbiAgICB0aGlzLl93cmFwcGVkID0gb2JqO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgVW5kZXJzY29yZSBvYmplY3QgZm9yICoqTm9kZS5qcyoqLCB3aXRoXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciB0aGUgb2xkIGByZXF1aXJlKClgIEFQSS4gSWYgd2UncmUgaW5cbiAgLy8gdGhlIGJyb3dzZXIsIGFkZCBgX2AgYXMgYSBnbG9iYWwgb2JqZWN0IHZpYSBhIHN0cmluZyBpZGVudGlmaWVyLFxuICAvLyBmb3IgQ2xvc3VyZSBDb21waWxlciBcImFkdmFuY2VkXCIgbW9kZS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gXztcbiAgICB9XG4gICAgZXhwb3J0cy5fID0gXztcbiAgfSBlbHNlIHtcbiAgICByb290Ll8gPSBfO1xuICB9XG5cbiAgLy8gQ3VycmVudCB2ZXJzaW9uLlxuICBfLlZFUlNJT04gPSAnMS41LjInO1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgb2JqZWN0cyB3aXRoIHRoZSBidWlsdC1pbiBgZm9yRWFjaGAsIGFycmF5cywgYW5kIHJhdyBvYmplY3RzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZm9yRWFjaGAgaWYgYXZhaWxhYmxlLlxuICB2YXIgZWFjaCA9IF8uZWFjaCA9IF8uZm9yRWFjaCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaikgPT09IGJyZWFrZXIpIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSByZXN1bHRzIG9mIGFwcGx5aW5nIHRoZSBpdGVyYXRvciB0byBlYWNoIGVsZW1lbnQuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBtYXBgIGlmIGF2YWlsYWJsZS5cbiAgXy5tYXAgPSBfLmNvbGxlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgdmFyIHJlZHVjZUVycm9yID0gJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnO1xuXG4gIC8vICoqUmVkdWNlKiogYnVpbGRzIHVwIGEgc2luZ2xlIHJlc3VsdCBmcm9tIGEgbGlzdCBvZiB2YWx1ZXMsIGFrYSBgaW5qZWN0YCxcbiAgLy8gb3IgYGZvbGRsYC4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZWAgaWYgYXZhaWxhYmxlLlxuICBfLnJlZHVjZSA9IF8uZm9sZGwgPSBfLmluamVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIG1lbW8sIGNvbnRleHQpIHtcbiAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIGlmIChvYmogPT0gbnVsbCkgb2JqID0gW107XG4gICAgaWYgKG5hdGl2ZVJlZHVjZSAmJiBvYmoucmVkdWNlID09PSBuYXRpdmVSZWR1Y2UpIHtcbiAgICAgIGlmIChjb250ZXh0KSBpdGVyYXRvciA9IF8uYmluZChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gaW5pdGlhbCA/IG9iai5yZWR1Y2UoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZShpdGVyYXRvcik7XG4gICAgfVxuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gdmFsdWU7XG4gICAgICAgIGluaXRpYWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtbyA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgbWVtbywgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFRoZSByaWdodC1hc3NvY2lhdGl2ZSB2ZXJzaW9uIG9mIHJlZHVjZSwgYWxzbyBrbm93biBhcyBgZm9sZHJgLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgcmVkdWNlUmlnaHRgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2VSaWdodCA9IF8uZm9sZHIgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2VSaWdodCAmJiBvYmoucmVkdWNlUmlnaHQgPT09IG5hdGl2ZVJlZHVjZVJpZ2h0KSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlUmlnaHQoaXRlcmF0b3IsIG1lbW8pIDogb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yKTtcbiAgICB9XG4gICAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gK2xlbmd0aCkge1xuICAgICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpbmRleCA9IGtleXMgPyBrZXlzWy0tbGVuZ3RoXSA6IC0tbGVuZ3RoO1xuICAgICAgaWYgKCFpbml0aWFsKSB7XG4gICAgICAgIG1lbW8gPSBvYmpbaW5kZXhdO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIG9ialtpbmRleF0sIGluZGV4LCBsaXN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWluaXRpYWwpIHRocm93IG5ldyBUeXBlRXJyb3IocmVkdWNlRXJyb3IpO1xuICAgIHJldHVybiBtZW1vO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlRmlsdGVyICYmIG9iai5maWx0ZXIgPT09IG5hdGl2ZUZpbHRlcikgcmV0dXJuIG9iai5maWx0ZXIoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgZm9yIHdoaWNoIGEgdHJ1dGggdGVzdCBmYWlscy5cbiAgXy5yZWplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIF8uZmlsdGVyKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4gIWl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBhbGwgb2YgdGhlIGVsZW1lbnRzIG1hdGNoIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGV2ZXJ5YCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFsbGAuXG4gIF8uZXZlcnkgPSBfLmFsbCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgaWYgKG5hdGl2ZUV2ZXJ5ICYmIG9iai5ldmVyeSA9PT0gbmF0aXZlRXZlcnkpIHJldHVybiBvYmouZXZlcnkoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmICghKHJlc3VsdCA9IHJlc3VsdCAmJiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBzb21lYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIHZhciBhbnkgPSBfLnNvbWUgPSBfLmFueSA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpdGVyYXRvciB8fCAoaXRlcmF0b3IgPSBfLmlkZW50aXR5KTtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVTb21lICYmIG9iai5zb21lID09PSBuYXRpdmVTb21lKSByZXR1cm4gb2JqLnNvbWUoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpIHJldHVybiBicmVha2VyO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIGFycmF5IG9yIG9iamVjdCBjb250YWlucyBhIGdpdmVuIHZhbHVlICh1c2luZyBgPT09YCkuXG4gIC8vIEFsaWFzZWQgYXMgYGluY2x1ZGVgLlxuICBfLmNvbnRhaW5zID0gXy5pbmNsdWRlID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRhcmdldDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBJbnZva2UgYSBtZXRob2QgKHdpdGggYXJndW1lbnRzKSBvbiBldmVyeSBpdGVtIGluIGEgY29sbGVjdGlvbi5cbiAgXy5pbnZva2UgPSBmdW5jdGlvbihvYmosIG1ldGhvZCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpc0Z1bmMgPSBfLmlzRnVuY3Rpb24obWV0aG9kKTtcbiAgICByZXR1cm4gXy5tYXAob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIChpc0Z1bmMgPyBtZXRob2QgOiB2YWx1ZVttZXRob2RdKS5hcHBseSh2YWx1ZSwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgbWFwYDogZmV0Y2hpbmcgYSBwcm9wZXJ0eS5cbiAgXy5wbHVjayA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpeyByZXR1cm4gdmFsdWVba2V5XTsgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmlsdGVyYDogc2VsZWN0aW5nIG9ubHkgb2JqZWN0c1xuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLndoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycywgZmlyc3QpIHtcbiAgICBpZiAoXy5pc0VtcHR5KGF0dHJzKSkgcmV0dXJuIGZpcnN0ID8gdm9pZCAwIDogW107XG4gICAgcmV0dXJuIF9bZmlyc3QgPyAnZmluZCcgOiAnZmlsdGVyJ10ob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGlmIChhdHRyc1trZXldICE9PSB2YWx1ZVtrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIGEgY29tbW9uIHVzZSBjYXNlIG9mIGBmaW5kYDogZ2V0dGluZyB0aGUgZmlyc3Qgb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgc3BlY2lmaWMgYGtleTp2YWx1ZWAgcGFpcnMuXG4gIF8uZmluZFdoZXJlID0gZnVuY3Rpb24ob2JqLCBhdHRycykge1xuICAgIHJldHVybiBfLndoZXJlKG9iaiwgYXR0cnMsIHRydWUpO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWF4aW11bSBlbGVtZW50IG9yIChlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgLy8gQ2FuJ3Qgb3B0aW1pemUgYXJyYXlzIG9mIGludGVnZXJzIGxvbmdlciB0aGFuIDY1LDUzNSBlbGVtZW50cy5cbiAgLy8gU2VlIFtXZWJLaXQgQnVnIDgwNzk3XShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODA3OTcpXG4gIF8ubWF4ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0FycmF5KG9iaikgJiYgb2JqWzBdID09PSArb2JqWzBdICYmIG9iai5sZW5ndGggPCA2NTUzNSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIG9iaik7XG4gICAgfVxuICAgIGlmICghaXRlcmF0b3IgJiYgXy5pc0VtcHR5KG9iaikpIHJldHVybiAtSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IC1JbmZpbml0eSwgdmFsdWU6IC1JbmZpbml0eX07XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgdmFyIGNvbXB1dGVkID0gaXRlcmF0b3IgPyBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkgOiB2YWx1ZTtcbiAgICAgIGNvbXB1dGVkID4gcmVzdWx0LmNvbXB1dGVkICYmIChyZXN1bHQgPSB7dmFsdWUgOiB2YWx1ZSwgY29tcHV0ZWQgOiBjb21wdXRlZH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBtaW5pbXVtIGVsZW1lbnQgKG9yIGVsZW1lbnQtYmFzZWQgY29tcHV0YXRpb24pLlxuICBfLm1pbiA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gSW5maW5pdHk7XG4gICAgdmFyIHJlc3VsdCA9IHtjb21wdXRlZCA6IEluZmluaXR5LCB2YWx1ZTogSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA8IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFNodWZmbGUgYW4gYXJyYXksIHVzaW5nIHRoZSBtb2Rlcm4gdmVyc2lvbiBvZiB0aGUgXG4gIC8vIFtGaXNoZXItWWF0ZXMgc2h1ZmZsZV0oaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXLigJNZYXRlc19zaHVmZmxlKS5cbiAgXy5zaHVmZmxlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJhbmQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc2h1ZmZsZWQgPSBbXTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJhbmQgPSBfLnJhbmRvbShpbmRleCsrKTtcbiAgICAgIHNodWZmbGVkW2luZGV4IC0gMV0gPSBzaHVmZmxlZFtyYW5kXTtcbiAgICAgIHNodWZmbGVkW3JhbmRdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNodWZmbGVkO1xuICB9O1xuXG4gIC8vIFNhbXBsZSAqKm4qKiByYW5kb20gdmFsdWVzIGZyb20gYW4gYXJyYXkuXG4gIC8vIElmICoqbioqIGlzIG5vdCBzcGVjaWZpZWQsIHJldHVybnMgYSBzaW5nbGUgcmFuZG9tIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXG4gIC8vIFRoZSBpbnRlcm5hbCBgZ3VhcmRgIGFyZ3VtZW50IGFsbG93cyBpdCB0byB3b3JrIHdpdGggYG1hcGAuXG4gIF8uc2FtcGxlID0gZnVuY3Rpb24ob2JqLCBuLCBndWFyZCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCBndWFyZCkge1xuICAgICAgcmV0dXJuIG9ialtfLnJhbmRvbShvYmoubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICByZXR1cm4gXy5zaHVmZmxlKG9iaikuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGxvb2t1cCBpdGVyYXRvcnMuXG4gIHZhciBsb29rdXBJdGVyYXRvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZSA6IGZ1bmN0aW9uKG9iail7IHJldHVybiBvYmpbdmFsdWVdOyB9O1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiBwcm9kdWNlZCBieSBhbiBpdGVyYXRvci5cbiAgXy5zb3J0QnkgPSBmdW5jdGlvbihvYmosIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgIHJldHVybiBfLnBsdWNrKF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY3JpdGVyaWE6IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KVxuICAgICAgfTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWE7XG4gICAgICB2YXIgYiA9IHJpZ2h0LmNyaXRlcmlhO1xuICAgICAgaWYgKGEgIT09IGIpIHtcbiAgICAgICAgaWYgKGEgPiBiIHx8IGEgPT09IHZvaWQgMCkgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhIDwgYiB8fCBiID09PSB2b2lkIDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZWZ0LmluZGV4IC0gcmlnaHQuaW5kZXg7XG4gICAgfSksICd2YWx1ZScpO1xuICB9O1xuXG4gIC8vIEFuIGludGVybmFsIGZ1bmN0aW9uIHVzZWQgZm9yIGFnZ3JlZ2F0ZSBcImdyb3VwIGJ5XCIgb3BlcmF0aW9ucy5cbiAgdmFyIGdyb3VwID0gZnVuY3Rpb24oYmVoYXZpb3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsdWUgPT0gbnVsbCA/IF8uaWRlbnRpdHkgOiBsb29rdXBJdGVyYXRvcih2YWx1ZSk7XG4gICAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBrZXkgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgYmVoYXZpb3IocmVzdWx0LCBrZXksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEdyb3VwcyB0aGUgb2JqZWN0J3MgdmFsdWVzIGJ5IGEgY3JpdGVyaW9uLiBQYXNzIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGVcbiAgLy8gdG8gZ3JvdXAgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjcml0ZXJpb24uXG4gIF8uZ3JvdXBCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5LCB2YWx1ZSkge1xuICAgIChfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSA6IChyZXN1bHRba2V5XSA9IFtdKSkucHVzaCh2YWx1ZSk7XG4gIH0pO1xuXG4gIC8vIEluZGV4ZXMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbiwgc2ltaWxhciB0byBgZ3JvdXBCeWAsIGJ1dCBmb3JcbiAgLy8gd2hlbiB5b3Uga25vdyB0aGF0IHlvdXIgaW5kZXggdmFsdWVzIHdpbGwgYmUgdW5pcXVlLlxuICBfLmluZGV4QnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICAvLyBDb3VudHMgaW5zdGFuY2VzIG9mIGFuIG9iamVjdCB0aGF0IGdyb3VwIGJ5IGEgY2VydGFpbiBjcml0ZXJpb24uIFBhc3NcbiAgLy8gZWl0aGVyIGEgc3RyaW5nIGF0dHJpYnV0ZSB0byBjb3VudCBieSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gIC8vIGNyaXRlcmlvbi5cbiAgXy5jb3VudEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICBfLmhhcyhyZXN1bHQsIGtleSkgPyByZXN1bHRba2V5XSsrIDogcmVzdWx0W2tleV0gPSAxO1xuICB9KTtcblxuICAvLyBVc2UgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgdGhlIHNtYWxsZXN0IGluZGV4IGF0IHdoaWNoXG4gIC8vIGFuIG9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgc28gYXMgdG8gbWFpbnRhaW4gb3JkZXIuIFVzZXMgYmluYXJ5IHNlYXJjaC5cbiAgXy5zb3J0ZWRJbmRleCA9IGZ1bmN0aW9uKGFycmF5LCBvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvciA9PSBudWxsID8gXy5pZGVudGl0eSA6IGxvb2t1cEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgICB2YXIgdmFsdWUgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iaik7XG4gICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBhcnJheS5sZW5ndGg7XG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgIHZhciBtaWQgPSAobG93ICsgaGlnaCkgPj4+IDE7XG4gICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W21pZF0pIDwgdmFsdWUgPyBsb3cgPSBtaWQgKyAxIDogaGlnaCA9IG1pZDtcbiAgICB9XG4gICAgcmV0dXJuIGxvdztcbiAgfTtcblxuICAvLyBTYWZlbHkgY3JlYXRlIGEgcmVhbCwgbGl2ZSBhcnJheSBmcm9tIGFueXRoaW5nIGl0ZXJhYmxlLlxuICBfLnRvQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIFtdO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSkgcmV0dXJuIHNsaWNlLmNhbGwob2JqKTtcbiAgICBpZiAob2JqLmxlbmd0aCA9PT0gK29iai5sZW5ndGgpIHJldHVybiBfLm1hcChvYmosIF8uaWRlbnRpdHkpO1xuICAgIHJldHVybiBfLnZhbHVlcyhvYmopO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9iamVjdC5cbiAgXy5zaXplID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSA/IG9iai5sZW5ndGggOiBfLmtleXMob2JqKS5sZW5ndGg7XG4gIH07XG5cbiAgLy8gQXJyYXkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgZmlyc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBBbGlhc2VkIGFzIGBoZWFkYCBhbmQgYHRha2VgLiBUaGUgKipndWFyZCoqIGNoZWNrXG4gIC8vIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5maXJzdCA9IF8uaGVhZCA9IF8udGFrZSA9IGZ1bmN0aW9uKGFycmF5LCBuLCBndWFyZCkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIHJldHVybiAobiA9PSBudWxsKSB8fCBndWFyZCA/IGFycmF5WzBdIDogc2xpY2UuY2FsbChhcnJheSwgMCwgbik7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgbGFzdCBlbnRyeSBvZiB0aGUgYXJyYXkuIEVzcGVjaWFsbHkgdXNlZnVsIG9uXG4gIC8vIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBQYXNzaW5nICoqbioqIHdpbGwgcmV0dXJuIGFsbCB0aGUgdmFsdWVzIGluXG4gIC8vIHRoZSBhcnJheSwgZXhjbHVkaW5nIHRoZSBsYXN0IE4uIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aFxuICAvLyBgXy5tYXBgLlxuICBfLmluaXRpYWwgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgMCwgYXJyYXkubGVuZ3RoIC0gKChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pKTtcbiAgfTtcblxuICAvLyBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheS4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiB0aGUgbGFzdCBOXG4gIC8vIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKiogY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLmxhc3QgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICBpZiAoKG4gPT0gbnVsbCkgfHwgZ3VhcmQpIHtcbiAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIE1hdGgubWF4KGFycmF5Lmxlbmd0aCAtIG4sIDApKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmV0dXJucyBldmVyeXRoaW5nIGJ1dCB0aGUgZmlyc3QgZW50cnkgb2YgdGhlIGFycmF5LiBBbGlhc2VkIGFzIGB0YWlsYCBhbmQgYGRyb3BgLlxuICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyBhbiAqKm4qKiB3aWxsIHJldHVyblxuICAvLyB0aGUgcmVzdCBOIHZhbHVlcyBpbiB0aGUgYXJyYXkuIFRoZSAqKmd1YXJkKipcbiAgLy8gY2hlY2sgYWxsb3dzIGl0IHRvIHdvcmsgd2l0aCBgXy5tYXBgLlxuICBfLnJlc3QgPSBfLnRhaWwgPSBfLmRyb3AgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbChhcnJheSwgKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyAxIDogbik7XG4gIH07XG5cbiAgLy8gVHJpbSBvdXQgYWxsIGZhbHN5IHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICBfLmNvbXBhY3QgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmZpbHRlcihhcnJheSwgXy5pZGVudGl0eSk7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gb2YgYSByZWN1cnNpdmUgYGZsYXR0ZW5gIGZ1bmN0aW9uLlxuICB2YXIgZmxhdHRlbiA9IGZ1bmN0aW9uKGlucHV0LCBzaGFsbG93LCBvdXRwdXQpIHtcbiAgICBpZiAoc2hhbGxvdyAmJiBfLmV2ZXJ5KGlucHV0LCBfLmlzQXJyYXkpKSB7XG4gICAgICByZXR1cm4gY29uY2F0LmFwcGx5KG91dHB1dCwgaW5wdXQpO1xuICAgIH1cbiAgICBlYWNoKGlucHV0LCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkgfHwgXy5pc0FyZ3VtZW50cyh2YWx1ZSkpIHtcbiAgICAgICAgc2hhbGxvdyA/IHB1c2guYXBwbHkob3V0cHV0LCB2YWx1ZSkgOiBmbGF0dGVuKHZhbHVlLCBzaGFsbG93LCBvdXRwdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gRmxhdHRlbiBvdXQgYW4gYXJyYXksIGVpdGhlciByZWN1cnNpdmVseSAoYnkgZGVmYXVsdCksIG9yIGp1c3Qgb25lIGxldmVsLlxuICBfLmZsYXR0ZW4gPSBmdW5jdGlvbihhcnJheSwgc2hhbGxvdykge1xuICAgIHJldHVybiBmbGF0dGVuKGFycmF5LCBzaGFsbG93LCBbXSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGUgYXJyYXkgdGhhdCBkb2VzIG5vdCBjb250YWluIHRoZSBzcGVjaWZpZWQgdmFsdWUocykuXG4gIF8ud2l0aG91dCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgcmV0dXJuIF8uZGlmZmVyZW5jZShhcnJheSwgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfTtcblxuICAvLyBQcm9kdWNlIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiB0aGUgYXJyYXkuIElmIHRoZSBhcnJheSBoYXMgYWxyZWFkeVxuICAvLyBiZWVuIHNvcnRlZCwgeW91IGhhdmUgdGhlIG9wdGlvbiBvZiB1c2luZyBhIGZhc3RlciBhbGdvcml0aG0uXG4gIC8vIEFsaWFzZWQgYXMgYHVuaXF1ZWAuXG4gIF8udW5pcSA9IF8udW5pcXVlID0gZnVuY3Rpb24oYXJyYXksIGlzU29ydGVkLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGlmIChfLmlzRnVuY3Rpb24oaXNTb3J0ZWQpKSB7XG4gICAgICBjb250ZXh0ID0gaXRlcmF0b3I7XG4gICAgICBpdGVyYXRvciA9IGlzU29ydGVkO1xuICAgICAgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWwgPSBpdGVyYXRvciA/IF8ubWFwKGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkgOiBhcnJheTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzZWVuID0gW107XG4gICAgZWFjaChpbml0aWFsLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGlmIChpc1NvcnRlZCA/ICghaW5kZXggfHwgc2VlbltzZWVuLmxlbmd0aCAtIDFdICE9PSB2YWx1ZSkgOiAhXy5jb250YWlucyhzZWVuLCB2YWx1ZSkpIHtcbiAgICAgICAgc2Vlbi5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGFycmF5W2luZGV4XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSB1bmlvbjogZWFjaCBkaXN0aW5jdCBlbGVtZW50IGZyb20gYWxsIG9mXG4gIC8vIHRoZSBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLnVuaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF8udW5pcShfLmZsYXR0ZW4oYXJndW1lbnRzLCB0cnVlKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGV2ZXJ5IGl0ZW0gc2hhcmVkIGJldHdlZW4gYWxsIHRoZVxuICAvLyBwYXNzZWQtaW4gYXJyYXlzLlxuICBfLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKF8udW5pcShhcnJheSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KHJlc3QsIGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBfLmluZGV4T2Yob3RoZXIsIGl0ZW0pID49IDA7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBUYWtlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gb25lIGFycmF5IGFuZCBhIG51bWJlciBvZiBvdGhlciBhcnJheXMuXG4gIC8vIE9ubHkgdGhlIGVsZW1lbnRzIHByZXNlbnQgaW4ganVzdCB0aGUgZmlyc3QgYXJyYXkgd2lsbCByZW1haW4uXG4gIF8uZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgdmFyIHJlc3QgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuICFfLmNvbnRhaW5zKHJlc3QsIHZhbHVlKTsgfSk7XG4gIH07XG5cbiAgLy8gWmlwIHRvZ2V0aGVyIG11bHRpcGxlIGxpc3RzIGludG8gYSBzaW5nbGUgYXJyYXkgLS0gZWxlbWVudHMgdGhhdCBzaGFyZVxuICAvLyBhbiBpbmRleCBnbyB0b2dldGhlci5cbiAgXy56aXAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gXy5tYXgoXy5wbHVjayhhcmd1bWVudHMsIFwibGVuZ3RoXCIpLmNvbmNhdCgwKSk7XG4gICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRzW2ldID0gXy5wbHVjayhhcmd1bWVudHMsICcnICsgaSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIGxpc3RzIGludG8gb2JqZWN0cy4gUGFzcyBlaXRoZXIgYSBzaW5nbGUgYXJyYXkgb2YgYFtrZXksIHZhbHVlXWBcbiAgLy8gcGFpcnMsIG9yIHR3byBwYXJhbGxlbCBhcnJheXMgb2YgdGhlIHNhbWUgbGVuZ3RoIC0tIG9uZSBvZiBrZXlzLCBhbmQgb25lIG9mXG4gIC8vIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgXy5vYmplY3QgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZXMpIHtcbiAgICBpZiAobGlzdCA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldXSA9IHZhbHVlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtsaXN0W2ldWzBdXSA9IGxpc3RbaV1bMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwbHkgdXMgd2l0aCBpbmRleE9mIChJJ20gbG9va2luZyBhdCB5b3UsICoqTVNJRSoqKSxcbiAgLy8gd2UgbmVlZCB0aGlzIGZ1bmN0aW9uLiBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuXG4gIC8vIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBpbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIC8vIElmIHRoZSBhcnJheSBpcyBsYXJnZSBhbmQgYWxyZWFkeSBpbiBzb3J0IG9yZGVyLCBwYXNzIGB0cnVlYFxuICAvLyBmb3IgKippc1NvcnRlZCoqIHRvIHVzZSBiaW5hcnkgc2VhcmNoLlxuICBfLmluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgaXNTb3J0ZWQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChpc1NvcnRlZCkge1xuICAgICAgaWYgKHR5cGVvZiBpc1NvcnRlZCA9PSAnbnVtYmVyJykge1xuICAgICAgICBpID0gKGlzU29ydGVkIDwgMCA/IE1hdGgubWF4KDAsIGxlbmd0aCArIGlzU29ydGVkKSA6IGlzU29ydGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSBfLnNvcnRlZEluZGV4KGFycmF5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5W2ldID09PSBpdGVtID8gaSA6IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSByZXR1cm4gYXJyYXkuaW5kZXhPZihpdGVtLCBpc1NvcnRlZCk7XG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGxhc3RJbmRleE9mYCBpZiBhdmFpbGFibGUuXG4gIF8ubGFzdEluZGV4T2YgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgZnJvbSkge1xuICAgIGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgdmFyIGhhc0luZGV4ID0gZnJvbSAhPSBudWxsO1xuICAgIGlmIChuYXRpdmVMYXN0SW5kZXhPZiAmJiBhcnJheS5sYXN0SW5kZXhPZiA9PT0gbmF0aXZlTGFzdEluZGV4T2YpIHtcbiAgICAgIHJldHVybiBoYXNJbmRleCA/IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0sIGZyb20pIDogYXJyYXkubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIHZhciBpID0gKGhhc0luZGV4ID8gZnJvbSA6IGFycmF5Lmxlbmd0aCk7XG4gICAgd2hpbGUgKGktLSkgaWYgKGFycmF5W2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYW4gaW50ZWdlciBBcnJheSBjb250YWluaW5nIGFuIGFyaXRobWV0aWMgcHJvZ3Jlc3Npb24uIEEgcG9ydCBvZlxuICAvLyB0aGUgbmF0aXZlIFB5dGhvbiBgcmFuZ2UoKWAgZnVuY3Rpb24uIFNlZVxuICAvLyBbdGhlIFB5dGhvbiBkb2N1bWVudGF0aW9uXShodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvZnVuY3Rpb25zLmh0bWwjcmFuZ2UpLlxuICBfLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICBzdG9wID0gc3RhcnQgfHwgMDtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgc3RlcCA9IGFyZ3VtZW50c1syXSB8fCAxO1xuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApLCAwKTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgcmFuZ2UgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlKGlkeCA8IGxlbmd0aCkge1xuICAgICAgcmFuZ2VbaWR4KytdID0gc3RhcnQ7XG4gICAgICBzdGFydCArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiAoYWhlbSkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldXNhYmxlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGZvciBwcm90b3R5cGUgc2V0dGluZy5cbiAgdmFyIGN0b3IgPSBmdW5jdGlvbigpe307XG5cbiAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gYm91bmQgdG8gYSBnaXZlbiBvYmplY3QgKGFzc2lnbmluZyBgdGhpc2AsIGFuZCBhcmd1bWVudHMsXG4gIC8vIG9wdGlvbmFsbHkpLiBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgRnVuY3Rpb24uYmluZGAgaWZcbiAgLy8gYXZhaWxhYmxlLlxuICBfLmJpbmQgPSBmdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgdmFyIGFyZ3MsIGJvdW5kO1xuICAgIGlmIChuYXRpdmVCaW5kICYmIGZ1bmMuYmluZCA9PT0gbmF0aXZlQmluZCkgcmV0dXJuIG5hdGl2ZUJpbmQuYXBwbHkoZnVuYywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBpZiAoIV8uaXNGdW5jdGlvbihmdW5jKSkgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBib3VuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSkgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IGZ1bmMucHJvdG90eXBlO1xuICAgICAgdmFyIHNlbGYgPSBuZXcgY3RvcjtcbiAgICAgIGN0b3IucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFBhcnRpYWxseSBhcHBseSBhIGZ1bmN0aW9uIGJ5IGNyZWF0aW5nIGEgdmVyc2lvbiB0aGF0IGhhcyBoYWQgc29tZSBvZiBpdHNcbiAgLy8gYXJndW1lbnRzIHByZS1maWxsZWQsIHdpdGhvdXQgY2hhbmdpbmcgaXRzIGR5bmFtaWMgYHRoaXNgIGNvbnRleHQuXG4gIF8ucGFydGlhbCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIEJpbmQgYWxsIG9mIGFuIG9iamVjdCdzIG1ldGhvZHMgdG8gdGhhdCBvYmplY3QuIFVzZWZ1bCBmb3IgZW5zdXJpbmcgdGhhdFxuICAvLyBhbGwgY2FsbGJhY2tzIGRlZmluZWQgb24gYW4gb2JqZWN0IGJlbG9uZyB0byBpdC5cbiAgXy5iaW5kQWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGZ1bmNzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcImJpbmRBbGwgbXVzdCBiZSBwYXNzZWQgZnVuY3Rpb24gbmFtZXNcIik7XG4gICAgZWFjaChmdW5jcywgZnVuY3Rpb24oZikgeyBvYmpbZl0gPSBfLmJpbmQob2JqW2ZdLCBvYmopOyB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIE1lbW9pemUgYW4gZXhwZW5zaXZlIGZ1bmN0aW9uIGJ5IHN0b3JpbmcgaXRzIHJlc3VsdHMuXG4gIF8ubWVtb2l6ZSA9IGZ1bmN0aW9uKGZ1bmMsIGhhc2hlcikge1xuICAgIHZhciBtZW1vID0ge307XG4gICAgaGFzaGVyIHx8IChoYXNoZXIgPSBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5ID0gaGFzaGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gXy5oYXMobWVtbywga2V5KSA/IG1lbW9ba2V5XSA6IChtZW1vW2tleV0gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gRGVsYXlzIGEgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCBhbmQgdGhlbiBjYWxsc1xuICAvLyBpdCB3aXRoIHRoZSBhcmd1bWVudHMgc3VwcGxpZWQuXG4gIF8uZGVsYXkgPSBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7IH0sIHdhaXQpO1xuICB9O1xuXG4gIC8vIERlZmVycyBhIGZ1bmN0aW9uLCBzY2hlZHVsaW5nIGl0IHRvIHJ1biBhZnRlciB0aGUgY3VycmVudCBjYWxsIHN0YWNrIGhhc1xuICAvLyBjbGVhcmVkLlxuICBfLmRlZmVyID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICBfLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBuZXcgRGF0ZTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsYXN0ID0gKG5ldyBEYXRlKCkpIC0gdGltZXN0YW1wO1xuICAgICAgICBpZiAobGFzdCA8IHdhaXQpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgIGlmICghaW1tZWRpYXRlKSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgfVxuICAgICAgaWYgKGNhbGxOb3cpIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCBtb3N0IG9uZSB0aW1lLCBubyBtYXR0ZXIgaG93XG4gIC8vIG9mdGVuIHlvdSBjYWxsIGl0LiBVc2VmdWwgZm9yIGxhenkgaW5pdGlhbGl6YXRpb24uXG4gIF8ub25jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICB2YXIgcmFuID0gZmFsc2UsIG1lbW87XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHJhbikgcmV0dXJuIG1lbW87XG4gICAgICByYW4gPSB0cnVlO1xuICAgICAgbWVtbyA9IGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGZ1bmMgPSBudWxsO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBmaXJzdCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlIHNlY29uZCxcbiAgLy8gYWxsb3dpbmcgeW91IHRvIGFkanVzdCBhcmd1bWVudHMsIHJ1biBjb2RlIGJlZm9yZSBhbmQgYWZ0ZXIsIGFuZFxuICAvLyBjb25kaXRpb25hbGx5IGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICBfLndyYXAgPSBmdW5jdGlvbihmdW5jLCB3cmFwcGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbZnVuY107XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gd3JhcHBlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGlzIHRoZSBjb21wb3NpdGlvbiBvZiBhIGxpc3Qgb2YgZnVuY3Rpb25zLCBlYWNoXG4gIC8vIGNvbnN1bWluZyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGZvbGxvd3MuXG4gIF8uY29tcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmdW5jcyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZvciAodmFyIGkgPSBmdW5jcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW2Z1bmNzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGFmdGVyIGJlaW5nIGNhbGxlZCBOIHRpbWVzLlxuICBfLmFmdGVyID0gZnVuY3Rpb24odGltZXMsIGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoLS10aW1lcyA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IG5hdGl2ZUtleXMgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiAhPT0gT2JqZWN0KG9iaikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb2JqZWN0Jyk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgdmFsdWVzIG9mIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIF8udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGtleXMgPSBfLmtleXMob2JqKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXlzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICAvLyBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGEgbGlzdCBvZiBgW2tleSwgdmFsdWVdYCBwYWlycy5cbiAgXy5wYWlycyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBwYWlycyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhaXJzW2ldID0gW2tleXNbaV0sIG9ialtrZXlzW2ldXV07XG4gICAgfVxuICAgIHJldHVybiBwYWlycztcbiAgfTtcblxuICAvLyBJbnZlcnQgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3QuIFRoZSB2YWx1ZXMgbXVzdCBiZSBzZXJpYWxpemFibGUuXG4gIF8uaW52ZXJ0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdFtvYmpba2V5c1tpXV1dID0ga2V5c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBzb3J0ZWQgbGlzdCBvZiB0aGUgZnVuY3Rpb24gbmFtZXMgYXZhaWxhYmxlIG9uIHRoZSBvYmplY3QuXG4gIC8vIEFsaWFzZWQgYXMgYG1ldGhvZHNgXG4gIF8uZnVuY3Rpb25zID0gXy5tZXRob2RzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbihvYmpba2V5XSkpIG5hbWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzLnNvcnQoKTtcbiAgfTtcblxuICAvLyBFeHRlbmQgYSBnaXZlbiBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgaW4gcGFzc2VkLWluIG9iamVjdChzKS5cbiAgXy5leHRlbmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3Qgb25seSBjb250YWluaW5nIHRoZSB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLnBpY2sgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZWFjaChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgaW4gb2JqKSBjb3B5W2tleV0gPSBvYmpba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IHdpdGhvdXQgdGhlIGJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG4gIF8ub21pdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGtleXMgPSBjb25jYXQuYXBwbHkoQXJyYXlQcm90bywgc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoIV8uY29udGFpbnMoa2V5cywga2V5KSkgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdm9pZCAwKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIChzaGFsbG93LWNsb25lZCkgZHVwbGljYXRlIG9mIGFuIG9iamVjdC5cbiAgXy5jbG9uZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIHJldHVybiBfLmlzQXJyYXkob2JqKSA/IG9iai5zbGljZSgpIDogXy5leHRlbmQoe30sIG9iaik7XG4gIH07XG5cbiAgLy8gSW52b2tlcyBpbnRlcmNlcHRvciB3aXRoIHRoZSBvYmosIGFuZCB0aGVuIHJldHVybnMgb2JqLlxuICAvLyBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIFwidGFwIGludG9cIiBhIG1ldGhvZCBjaGFpbiwgaW5cbiAgLy8gb3JkZXIgdG8gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGludGVybWVkaWF0ZSByZXN1bHRzIHdpdGhpbiB0aGUgY2hhaW4uXG4gIF8udGFwID0gZnVuY3Rpb24ob2JqLCBpbnRlcmNlcHRvcikge1xuICAgIGludGVyY2VwdG9yKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuICB2YXIgZXEgPSBmdW5jdGlvbihhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT0gMSAvIGI7XG4gICAgLy8gQSBzdHJpY3QgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkgYmVjYXVzZSBgbnVsbCA9PSB1bmRlZmluZWRgLlxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gYSA9PT0gYjtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBpZiAoYSBpbnN0YW5jZW9mIF8pIGEgPSBhLl93cmFwcGVkO1xuICAgIGlmIChiIGluc3RhbmNlb2YgXykgYiA9IGIuX3dyYXBwZWQ7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3JcbiAgICAgICAgLy8gb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgIHJldHVybiBhICE9ICthID8gYiAhPSArYiA6IChhID09IDAgPyAxIC8gYSA9PSAxIC8gYiA6IGEgPT0gK2IpO1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgcmV0dXJuICthID09ICtiO1xuICAgICAgLy8gUmVnRXhwcyBhcmUgY29tcGFyZWQgYnkgdGhlaXIgc291cmNlIHBhdHRlcm5zIGFuZCBmbGFncy5cbiAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAgIHJldHVybiBhLnNvdXJjZSA9PSBiLnNvdXJjZSAmJlxuICAgICAgICAgICAgICAgYS5nbG9iYWwgPT0gYi5nbG9iYWwgJiZcbiAgICAgICAgICAgICAgIGEubXVsdGlsaW5lID09IGIubXVsdGlsaW5lICYmXG4gICAgICAgICAgICAgICBhLmlnbm9yZUNhc2UgPT0gYi5pZ25vcmVDYXNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGEgIT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgdmFyIGxlbmd0aCA9IGFTdGFjay5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgIGlmIChhU3RhY2tbbGVuZ3RoXSA9PSBhKSByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT0gYjtcbiAgICB9XG4gICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzXG4gICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKF8uaXNGdW5jdGlvbihhQ3RvcikgJiYgKGFDdG9yIGluc3RhbmNlb2YgYUN0b3IpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNGdW5jdGlvbihiQ3RvcikgJiYgKGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgdmFyIHNpemUgPSAwLCByZXN1bHQgPSB0cnVlO1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgIGlmIChjbGFzc05hbWUgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgICBzaXplID0gYS5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaXplID09IGIubGVuZ3RoO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgICAgaWYgKCEocmVzdWx0ID0gZXEoYVtzaXplXSwgYltzaXplXSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoXy5oYXMoYSwga2V5KSkge1xuICAgICAgICAgIC8vIENvdW50IHRoZSBleHBlY3RlZCBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgICBzaXplKys7XG4gICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyLlxuICAgICAgICAgIGlmICghKHJlc3VsdCA9IF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgIGlmIChfLmhhcyhiLCBrZXkpICYmICEoc2l6ZS0tKSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gIXNpemU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBQZXJmb3JtIGEgZGVlcCBjb21wYXJpc29uIHRvIGNoZWNrIGlmIHR3byBvYmplY3RzIGFyZSBlcXVhbC5cbiAgXy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBlcShhLCBiLCBbXSwgW10pO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gYXJyYXksIHN0cmluZywgb3Igb2JqZWN0IGVtcHR5P1xuICAvLyBBbiBcImVtcHR5XCIgb2JqZWN0IGhhcyBubyBlbnVtZXJhYmxlIG93bi1wcm9wZXJ0aWVzLlxuICBfLmlzRW1wdHkgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChfLmlzQXJyYXkob2JqKSB8fCBfLmlzU3RyaW5nKG9iaikpIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGEgRE9NIGVsZW1lbnQ/XG4gIF8uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDEpO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYW4gYXJyYXk/XG4gIC8vIERlbGVnYXRlcyB0byBFQ01BNSdzIG5hdGl2ZSBBcnJheS5pc0FycmF5XG4gIF8uaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgYW4gb2JqZWN0P1xuICBfLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgLy8gQWRkIHNvbWUgaXNUeXBlIG1ldGhvZHM6IGlzQXJndW1lbnRzLCBpc0Z1bmN0aW9uLCBpc1N0cmluZywgaXNOdW1iZXIsIGlzRGF0ZSwgaXNSZWdFeHAuXG4gIGVhY2goWydBcmd1bWVudHMnLCAnRnVuY3Rpb24nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgX1snaXMnICsgbmFtZV0gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gRGVmaW5lIGEgZmFsbGJhY2sgdmVyc2lvbiBvZiB0aGUgbWV0aG9kIGluIGJyb3dzZXJzIChhaGVtLCBJRSksIHdoZXJlXG4gIC8vIHRoZXJlIGlzbid0IGFueSBpbnNwZWN0YWJsZSBcIkFyZ3VtZW50c1wiIHR5cGUuXG4gIGlmICghXy5pc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gICAgXy5pc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuICEhKG9iaiAmJiBfLmhhcyhvYmosICdjYWxsZWUnKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIE9wdGltaXplIGBpc0Z1bmN0aW9uYCBpZiBhcHByb3ByaWF0ZS5cbiAgaWYgKHR5cGVvZiAoLy4vKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIF8uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG4gICAgfTtcbiAgfVxuXG4gIC8vIElzIGEgZ2l2ZW4gb2JqZWN0IGEgZmluaXRlIG51bWJlcj9cbiAgXy5pc0Zpbml0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBpc0Zpbml0ZShvYmopICYmICFpc05hTihwYXJzZUZsb2F0KG9iaikpO1xuICB9O1xuXG4gIC8vIElzIHRoZSBnaXZlbiB2YWx1ZSBgTmFOYD8gKE5hTiBpcyB0aGUgb25seSBudW1iZXIgd2hpY2ggZG9lcyBub3QgZXF1YWwgaXRzZWxmKS5cbiAgXy5pc05hTiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfLmlzTnVtYmVyKG9iaikgJiYgb2JqICE9ICtvYmo7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIGJvb2xlYW4/XG4gIF8uaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBlcXVhbCB0byBudWxsP1xuICBfLmlzTnVsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSB1bmRlZmluZWQ/XG4gIF8uaXNVbmRlZmluZWQgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB2b2lkIDA7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xuICB9O1xuXG4gIC8vIFV0aWxpdHkgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUnVuIFVuZGVyc2NvcmUuanMgaW4gKm5vQ29uZmxpY3QqIG1vZGUsIHJldHVybmluZyB0aGUgYF9gIHZhcmlhYmxlIHRvIGl0c1xuICAvLyBwcmV2aW91cyBvd25lci4gUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJvb3QuXyA9IHByZXZpb3VzVW5kZXJzY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBLZWVwIHRoZSBpZGVudGl0eSBmdW5jdGlvbiBhcm91bmQgZm9yIGRlZmF1bHQgaXRlcmF0b3JzLlxuICBfLmlkZW50aXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLy8gUnVuIGEgZnVuY3Rpb24gKipuKiogdGltZXMuXG4gIF8udGltZXMgPSBmdW5jdGlvbihuLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciBhY2N1bSA9IEFycmF5KE1hdGgubWF4KDAsIG4pKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykgYWNjdW1baV0gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGkpO1xuICAgIHJldHVybiBhY2N1bTtcbiAgfTtcblxuICAvLyBSZXR1cm4gYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IChpbmNsdXNpdmUpLlxuICBfLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgaWYgKG1heCA9PSBudWxsKSB7XG4gICAgICBtYXggPSBtaW47XG4gICAgICBtaW4gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgfTtcblxuICAvLyBMaXN0IG9mIEhUTUwgZW50aXRpZXMgZm9yIGVzY2FwaW5nLlxuICB2YXIgZW50aXR5TWFwID0ge1xuICAgIGVzY2FwZToge1xuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgXCInXCI6ICcmI3gyNzsnXG4gICAgfVxuICB9O1xuICBlbnRpdHlNYXAudW5lc2NhcGUgPSBfLmludmVydChlbnRpdHlNYXAuZXNjYXBlKTtcblxuICAvLyBSZWdleGVzIGNvbnRhaW5pbmcgdGhlIGtleXMgYW5kIHZhbHVlcyBsaXN0ZWQgaW1tZWRpYXRlbHkgYWJvdmUuXG4gIHZhciBlbnRpdHlSZWdleGVzID0ge1xuICAgIGVzY2FwZTogICBuZXcgUmVnRXhwKCdbJyArIF8ua2V5cyhlbnRpdHlNYXAuZXNjYXBlKS5qb2luKCcnKSArICddJywgJ2cnKSxcbiAgICB1bmVzY2FwZTogbmV3IFJlZ0V4cCgnKCcgKyBfLmtleXMoZW50aXR5TWFwLnVuZXNjYXBlKS5qb2luKCd8JykgKyAnKScsICdnJylcbiAgfTtcblxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXG4gIF8uZWFjaChbJ2VzY2FwZScsICd1bmVzY2FwZSddLCBmdW5jdGlvbihtZXRob2QpIHtcbiAgICBfW21ldGhvZF0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgcmV0dXJuICgnJyArIHN0cmluZykucmVwbGFjZShlbnRpdHlSZWdleGVzW21ldGhvZF0sIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlNYXBbbWV0aG9kXVttYXRjaF07XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBJZiB0aGUgdmFsdWUgb2YgdGhlIG5hbWVkIGBwcm9wZXJ0eWAgaXMgYSBmdW5jdGlvbiB0aGVuIGludm9rZSBpdCB3aXRoIHRoZVxuICAvLyBgb2JqZWN0YCBhcyBjb250ZXh0OyBvdGhlcndpc2UsIHJldHVybiBpdC5cbiAgXy5yZXN1bHQgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gdm9pZCAwO1xuICAgIHZhciB2YWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKG9iamVjdCkgOiB2YWx1ZTtcbiAgfTtcblxuICAvLyBBZGQgeW91ciBvd24gY3VzdG9tIGZ1bmN0aW9ucyB0byB0aGUgVW5kZXJzY29yZSBvYmplY3QuXG4gIF8ubWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICBlYWNoKF8uZnVuY3Rpb25zKG9iaiksIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBmdW5jID0gX1tuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMuX3dyYXBwZWRdO1xuICAgICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBmdW5jLmFwcGx5KF8sIGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaW50ZWdlciBpZCAodW5pcXVlIHdpdGhpbiB0aGUgZW50aXJlIGNsaWVudCBzZXNzaW9uKS5cbiAgLy8gVXNlZnVsIGZvciB0ZW1wb3JhcnkgRE9NIGlkcy5cbiAgdmFyIGlkQ291bnRlciA9IDA7XG4gIF8udW5pcXVlSWQgPSBmdW5jdGlvbihwcmVmaXgpIHtcbiAgICB2YXIgaWQgPSArK2lkQ291bnRlciArICcnO1xuICAgIHJldHVybiBwcmVmaXggPyBwcmVmaXggKyBpZCA6IGlkO1xuICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZSAgICA6IC88JShbXFxzXFxTXSs/KSU+L2csXG4gICAgaW50ZXJwb2xhdGUgOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGUgICAgICA6IC88JS0oW1xcc1xcU10rPyklPi9nXG4gIH07XG5cbiAgLy8gV2hlbiBjdXN0b21pemluZyBgdGVtcGxhdGVTZXR0aW5nc2AsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRlZmluZSBhblxuICAvLyBpbnRlcnBvbGF0aW9uLCBldmFsdWF0aW9uIG9yIGVzY2FwaW5nIHJlZ2V4LCB3ZSBuZWVkIG9uZSB0aGF0IGlzXG4gIC8vIGd1YXJhbnRlZWQgbm90IHRvIG1hdGNoLlxuICB2YXIgbm9NYXRjaCA9IC8oLileLztcblxuICAvLyBDZXJ0YWluIGNoYXJhY3RlcnMgbmVlZCB0byBiZSBlc2NhcGVkIHNvIHRoYXQgdGhleSBjYW4gYmUgcHV0IGludG8gYVxuICAvLyBzdHJpbmcgbGl0ZXJhbC5cbiAgdmFyIGVzY2FwZXMgPSB7XG4gICAgXCInXCI6ICAgICAgXCInXCIsXG4gICAgJ1xcXFwnOiAgICAgJ1xcXFwnLFxuICAgICdcXHInOiAgICAgJ3InLFxuICAgICdcXG4nOiAgICAgJ24nLFxuICAgICdcXHQnOiAgICAgJ3QnLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOSdcbiAgfTtcblxuICB2YXIgZXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHR8XFx1MjAyOHxcXHUyMDI5L2c7XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHRleHQsIGRhdGEsIHNldHRpbmdzKSB7XG4gICAgdmFyIHJlbmRlcjtcbiAgICBzZXR0aW5ncyA9IF8uZGVmYXVsdHMoe30sIHNldHRpbmdzLCBfLnRlbXBsYXRlU2V0dGluZ3MpO1xuXG4gICAgLy8gQ29tYmluZSBkZWxpbWl0ZXJzIGludG8gb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2aWEgYWx0ZXJuYXRpb24uXG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgUmVnRXhwKFtcbiAgICAgIChzZXR0aW5ncy5lc2NhcGUgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2VcbiAgICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgICAgICAucmVwbGFjZShlc2NhcGVyLCBmdW5jdGlvbihtYXRjaCkgeyByZXR1cm4gJ1xcXFwnICsgZXNjYXBlc1ttYXRjaF07IH0pO1xuXG4gICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfLmVzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICB9XG4gICAgICBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICAgIHNvdXJjZSArPSBcIic7XFxuXCI7XG5cbiAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgIGlmICghc2V0dGluZ3MudmFyaWFibGUpIHNvdXJjZSA9ICd3aXRoKG9ianx8e30pe1xcbicgKyBzb3VyY2UgKyAnfVxcbic7XG5cbiAgICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixcIiArXG4gICAgICBcInByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxuXCIgK1xuICAgICAgc291cmNlICsgXCJyZXR1cm4gX19wO1xcblwiO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbmRlciA9IG5ldyBGdW5jdGlvbihzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJywgJ18nLCBzb3VyY2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGUuc291cmNlID0gc291cmNlO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkgcmV0dXJuIHJlbmRlcihkYXRhLCBfKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIChzZXR0aW5ncy52YXJpYWJsZSB8fCAnb2JqJykgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEFkZCBhIFwiY2hhaW5cIiBmdW5jdGlvbiwgd2hpY2ggd2lsbCBkZWxlZ2F0ZSB0byB0aGUgd3JhcHBlci5cbiAgXy5jaGFpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBfKG9iaikuY2hhaW4oKTtcbiAgfTtcblxuICAvLyBPT1BcbiAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElmIFVuZGVyc2NvcmUgaXMgY2FsbGVkIGFzIGEgZnVuY3Rpb24sIGl0IHJldHVybnMgYSB3cmFwcGVkIG9iamVjdCB0aGF0XG4gIC8vIGNhbiBiZSB1c2VkIE9PLXN0eWxlLiBUaGlzIHdyYXBwZXIgaG9sZHMgYWx0ZXJlZCB2ZXJzaW9ucyBvZiBhbGwgdGhlXG4gIC8vIHVuZGVyc2NvcmUgZnVuY3Rpb25zLiBXcmFwcGVkIG9iamVjdHMgbWF5IGJlIGNoYWluZWQuXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnRpbnVlIGNoYWluaW5nIGludGVybWVkaWF0ZSByZXN1bHRzLlxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWluID8gXyhvYmopLmNoYWluKCkgOiBvYmo7XG4gIH07XG5cbiAgLy8gQWRkIGFsbCBvZiB0aGUgVW5kZXJzY29yZSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIgb2JqZWN0LlxuICBfLm1peGluKF8pO1xuXG4gIC8vIEFkZCBhbGwgbXV0YXRvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydwb3AnLCAncHVzaCcsICdyZXZlcnNlJywgJ3NoaWZ0JywgJ3NvcnQnLCAnc3BsaWNlJywgJ3Vuc2hpZnQnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcy5fd3JhcHBlZDtcbiAgICAgIG1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoKG5hbWUgPT0gJ3NoaWZ0JyB8fCBuYW1lID09ICdzcGxpY2UnKSAmJiBvYmoubGVuZ3RoID09PSAwKSBkZWxldGUgb2JqWzBdO1xuICAgICAgcmV0dXJuIHJlc3VsdC5jYWxsKHRoaXMsIG9iaik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQWRkIGFsbCBhY2Nlc3NvciBBcnJheSBmdW5jdGlvbnMgdG8gdGhlIHdyYXBwZXIuXG4gIGVhY2goWydjb25jYXQnLCAnam9pbicsICdzbGljZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IEFycmF5UHJvdG9bbmFtZV07XG4gICAgXy5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBtZXRob2QuYXBwbHkodGhpcy5fd3JhcHBlZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgXy5leHRlbmQoXy5wcm90b3R5cGUsIHtcblxuICAgIC8vIFN0YXJ0IGNoYWluaW5nIGEgd3JhcHBlZCBVbmRlcnNjb3JlIG9iamVjdC5cbiAgICBjaGFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9jaGFpbiA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIGEgd3JhcHBlZCBhbmQgY2hhaW5lZCBvYmplY3QuXG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBwZWQ7XG4gICAgfVxuXG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxudmFyIGtNYXhMZW5ndGggPSAweDNmZmZmZmZmXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIE5vdGU6XG4gKlxuICogLSBJbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMuXG4gKiAgIEZpcmVmb3ggNC0yOSBsYWNrZWQgc3VwcG9ydCwgZml4ZWQgaW4gRmlyZWZveCAzMCsuXG4gKiAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG4gKlxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXkgd2lsbFxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgd2lsbCB3b3JrIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gc3ViamVjdCA+IDAgPyBzdWJqZWN0ID4+PiAwIDogMFxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcpXG4gICAgICBzdWJqZWN0ID0gYmFzZTY0Y2xlYW4oc3ViamVjdClcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7IC8vIGFzc3VtZSBvYmplY3QgaXMgYXJyYXktbGlrZVxuICAgIGlmIChzdWJqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkoc3ViamVjdC5kYXRhKSlcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0LmRhdGFcbiAgICBsZW5ndGggPSArc3ViamVjdC5sZW5ndGggPiAwID8gTWF0aC5mbG9vcigrc3ViamVjdC5sZW5ndGgpIDogMFxuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG5cbiAgaWYgKHRoaXMubGVuZ3RoID4ga01heExlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuICYmIGFbaV0gPT09IGJbaV07IGkrKykge31cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdFssIGxlbmd0aF0pJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0b3RhbExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoID4+PiAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vLyBwcmUtc2V0IGZvciB2YWx1ZXMgdGhhdCBtYXkgZXhpc3QgaW4gdGhlIGZ1dHVyZVxuQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbkJ1ZmZlci5wcm90b3R5cGUucGFyZW50ID0gdW5kZWZpbmVkXG5cbi8vIHRvU3RyaW5nKGVuY29kaW5nLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSlcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpXG4gICAgICBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihieXRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aCwgMilcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBhc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuO1xuICAgIGlmIChzdGFydCA8IDApXG4gICAgICBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMClcbiAgICAgIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydClcbiAgICBlbmQgPSBzdGFydFxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpXG4gICAgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGlmICh0YXJnZXRfc3RhcnQgPCAwIHx8IHRhcmdldF9zdGFydCA+PSB0YXJnZXQubGVuZ3RoKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpdL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKSB7XG4gICAgICBieXRlQXJyYXkucHVzaChiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgsIHVuaXRTaXplKSB7XG4gIGlmICh1bml0U2l6ZSkgbGVuZ3RoIC09IGxlbmd0aCAlIHVuaXRTaXplO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIGNyZWF0ZUhhc2ggPSByZXF1aXJlKCdzaGEuanMnKVxuXG52YXIgbWQ1ID0gdG9Db25zdHJ1Y3RvcihyZXF1aXJlKCcuL21kNScpKVxudmFyIHJtZDE2MCA9IHRvQ29uc3RydWN0b3IocmVxdWlyZSgncmlwZW1kMTYwJykpXG5cbmZ1bmN0aW9uIHRvQ29uc3RydWN0b3IgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1ZmZlcnMgPSBbXVxuICAgIHZhciBtPSB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIChkYXRhLCBlbmMpIHtcbiAgICAgICAgaWYoIUJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkgZGF0YSA9IG5ldyBCdWZmZXIoZGF0YSwgZW5jKVxuICAgICAgICBidWZmZXJzLnB1c2goZGF0YSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH0sXG4gICAgICBkaWdlc3Q6IGZ1bmN0aW9uIChlbmMpIHtcbiAgICAgICAgdmFyIGJ1ZiA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycylcbiAgICAgICAgdmFyIHIgPSBmbihidWYpXG4gICAgICAgIGJ1ZmZlcnMgPSBudWxsXG4gICAgICAgIHJldHVybiBlbmMgPyByLnRvU3RyaW5nKGVuYykgOiByXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWxnKSB7XG4gIGlmKCdtZDUnID09PSBhbGcpIHJldHVybiBuZXcgbWQ1KClcbiAgaWYoJ3JtZDE2MCcgPT09IGFsZykgcmV0dXJuIG5ldyBybWQxNjAoKVxuICByZXR1cm4gY3JlYXRlSGFzaChhbGcpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoJy4vY3JlYXRlLWhhc2gnKVxuXG52YXIgYmxvY2tzaXplID0gNjRcbnZhciB6ZXJvQnVmZmVyID0gbmV3IEJ1ZmZlcihibG9ja3NpemUpOyB6ZXJvQnVmZmVyLmZpbGwoMClcblxubW9kdWxlLmV4cG9ydHMgPSBIbWFjXG5cbmZ1bmN0aW9uIEhtYWMgKGFsZywga2V5KSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIEhtYWMpKSByZXR1cm4gbmV3IEhtYWMoYWxnLCBrZXkpXG4gIHRoaXMuX29wYWQgPSBvcGFkXG4gIHRoaXMuX2FsZyA9IGFsZ1xuXG4gIGtleSA9IHRoaXMuX2tleSA9ICFCdWZmZXIuaXNCdWZmZXIoa2V5KSA/IG5ldyBCdWZmZXIoa2V5KSA6IGtleVxuXG4gIGlmKGtleS5sZW5ndGggPiBibG9ja3NpemUpIHtcbiAgICBrZXkgPSBjcmVhdGVIYXNoKGFsZykudXBkYXRlKGtleSkuZGlnZXN0KClcbiAgfSBlbHNlIGlmKGtleS5sZW5ndGggPCBibG9ja3NpemUpIHtcbiAgICBrZXkgPSBCdWZmZXIuY29uY2F0KFtrZXksIHplcm9CdWZmZXJdLCBibG9ja3NpemUpXG4gIH1cblxuICB2YXIgaXBhZCA9IHRoaXMuX2lwYWQgPSBuZXcgQnVmZmVyKGJsb2Nrc2l6ZSlcbiAgdmFyIG9wYWQgPSB0aGlzLl9vcGFkID0gbmV3IEJ1ZmZlcihibG9ja3NpemUpXG5cbiAgZm9yKHZhciBpID0gMDsgaSA8IGJsb2Nrc2l6ZTsgaSsrKSB7XG4gICAgaXBhZFtpXSA9IGtleVtpXSBeIDB4MzZcbiAgICBvcGFkW2ldID0ga2V5W2ldIF4gMHg1Q1xuICB9XG5cbiAgdGhpcy5faGFzaCA9IGNyZWF0ZUhhc2goYWxnKS51cGRhdGUoaXBhZClcbn1cblxuSG1hYy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuYykge1xuICB0aGlzLl9oYXNoLnVwZGF0ZShkYXRhLCBlbmMpXG4gIHJldHVybiB0aGlzXG59XG5cbkhtYWMucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uIChlbmMpIHtcbiAgdmFyIGggPSB0aGlzLl9oYXNoLmRpZ2VzdCgpXG4gIHJldHVybiBjcmVhdGVIYXNoKHRoaXMuX2FsZykudXBkYXRlKHRoaXMuX29wYWQpLnVwZGF0ZShoKS5kaWdlc3QoZW5jKVxufVxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG52YXIgaW50U2l6ZSA9IDQ7XG52YXIgemVyb0J1ZmZlciA9IG5ldyBCdWZmZXIoaW50U2l6ZSk7IHplcm9CdWZmZXIuZmlsbCgwKTtcbnZhciBjaHJzeiA9IDg7XG5cbmZ1bmN0aW9uIHRvQXJyYXkoYnVmLCBiaWdFbmRpYW4pIHtcbiAgaWYgKChidWYubGVuZ3RoICUgaW50U2l6ZSkgIT09IDApIHtcbiAgICB2YXIgbGVuID0gYnVmLmxlbmd0aCArIChpbnRTaXplIC0gKGJ1Zi5sZW5ndGggJSBpbnRTaXplKSk7XG4gICAgYnVmID0gQnVmZmVyLmNvbmNhdChbYnVmLCB6ZXJvQnVmZmVyXSwgbGVuKTtcbiAgfVxuXG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGZuID0gYmlnRW5kaWFuID8gYnVmLnJlYWRJbnQzMkJFIDogYnVmLnJlYWRJbnQzMkxFO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Zi5sZW5ndGg7IGkgKz0gaW50U2l6ZSkge1xuICAgIGFyci5wdXNoKGZuLmNhbGwoYnVmLCBpKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gdG9CdWZmZXIoYXJyLCBzaXplLCBiaWdFbmRpYW4pIHtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoc2l6ZSk7XG4gIHZhciBmbiA9IGJpZ0VuZGlhbiA/IGJ1Zi53cml0ZUludDMyQkUgOiBidWYud3JpdGVJbnQzMkxFO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuLmNhbGwoYnVmLCBhcnJbaV0sIGkgKiA0LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufVxuXG5mdW5jdGlvbiBoYXNoKGJ1ZiwgZm4sIGhhc2hTaXplLCBiaWdFbmRpYW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gbmV3IEJ1ZmZlcihidWYpO1xuICB2YXIgYXJyID0gZm4odG9BcnJheShidWYsIGJpZ0VuZGlhbiksIGJ1Zi5sZW5ndGggKiBjaHJzeik7XG4gIHJldHVybiB0b0J1ZmZlcihhcnIsIGhhc2hTaXplLCBiaWdFbmRpYW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaGFzaDogaGFzaCB9O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xudmFyIHJuZyA9IHJlcXVpcmUoJy4vcm5nJylcblxuZnVuY3Rpb24gZXJyb3IgKCkge1xuICB2YXIgbSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJylcbiAgdGhyb3cgbmV3IEVycm9yKFtcbiAgICBtLFxuICAgICd3ZSBhY2NlcHQgcHVsbCByZXF1ZXN0cycsXG4gICAgJ2h0dHA6Ly9naXRodWIuY29tL2RvbWluaWN0YXJyL2NyeXB0by1icm93c2VyaWZ5J1xuICAgIF0uam9pbignXFxuJykpXG59XG5cbmV4cG9ydHMuY3JlYXRlSGFzaCA9IHJlcXVpcmUoJy4vY3JlYXRlLWhhc2gnKVxuXG5leHBvcnRzLmNyZWF0ZUhtYWMgPSByZXF1aXJlKCcuL2NyZWF0ZS1obWFjJylcblxuZXhwb3J0cy5yYW5kb21CeXRlcyA9IGZ1bmN0aW9uKHNpemUsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgdW5kZWZpbmVkLCBuZXcgQnVmZmVyKHJuZyhzaXplKSkpXG4gICAgfSBjYXRjaCAoZXJyKSB7IGNhbGxiYWNrKGVycikgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKHJuZyhzaXplKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGEsIGYpIHtcbiAgZm9yKHZhciBpIGluIGEpXG4gICAgZihhW2ldLCBpKVxufVxuXG5leHBvcnRzLmdldEhhc2hlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFsnc2hhMScsICdzaGEyNTYnLCAnbWQ1JywgJ3JtZDE2MCddXG5cbn1cblxudmFyIHAgPSByZXF1aXJlKCcuL3Bia2RmMicpKGV4cG9ydHMuY3JlYXRlSG1hYylcbmV4cG9ydHMucGJrZGYyID0gcC5wYmtkZjJcbmV4cG9ydHMucGJrZGYyU3luYyA9IHAucGJrZGYyU3luY1xuXG5cbi8vIHRoZSBsZWFzdCBJIGNhbiBkbyBpcyBtYWtlIGVycm9yIG1lc3NhZ2VzIGZvciB0aGUgcmVzdCBvZiB0aGUgbm9kZS5qcy9jcnlwdG8gYXBpLlxuZWFjaChbJ2NyZWF0ZUNyZWRlbnRpYWxzJ1xuLCAnY3JlYXRlQ2lwaGVyJ1xuLCAnY3JlYXRlQ2lwaGVyaXYnXG4sICdjcmVhdGVEZWNpcGhlcidcbiwgJ2NyZWF0ZURlY2lwaGVyaXYnXG4sICdjcmVhdGVTaWduJ1xuLCAnY3JlYXRlVmVyaWZ5J1xuLCAnY3JlYXRlRGlmZmllSGVsbG1hbidcbl0sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGV4cG9ydHNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZXJyb3IoJ3NvcnJ5LCcsIG5hbWUsICdpcyBub3QgaW1wbGVtZW50ZWQgeWV0JylcbiAgfVxufSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKSIsIi8qXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjEgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDAyLlxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5cbnZhciBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGNvcmVfbWQ1KHgsIGxlbilcbntcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCAoKGxlbikgJSAzMik7XG4gIHhbKCgobGVuICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IGxlbjtcblxuICB2YXIgYSA9ICAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gIDI3MTczMzg3ODtcblxuICBmb3IodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpXG4gIHtcbiAgICB2YXIgb2xkYSA9IGE7XG4gICAgdmFyIG9sZGIgPSBiO1xuICAgIHZhciBvbGRjID0gYztcbiAgICB2YXIgb2xkZCA9IGQ7XG5cbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDcgLCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDRdLCA3ICwgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKyA4XSwgNyAsICAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1X2ZmKGIsIGMsIGQsIGEsIHhbaSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krMTJdLCA3ICwgIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcblxuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKyAxXSwgNSAsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpKyA2XSwgOSAsIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsgMF0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsgNV0sIDUgLCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1X2dnKGQsIGEsIGIsIGMsIHhbaSsxMF0sIDkgLCAgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKyA5XSwgNSAsICA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpKzE0XSwgOSAsIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1X2dnKGIsIGMsIGQsIGEsIHhbaSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krMTNdLCA1ICwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpKyAyXSwgOSAsIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcblxuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKyA1XSwgNCAsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDQgLCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1X2hoKGEsIGIsIGMsIGQsIHhbaSsxM10sIDQgLCAgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1X2hoKGMsIGQsIGEsIGIsIHhbaSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsgNl0sIDIzLCAgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKyA5XSwgNCAsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuXG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krIDBdLCA2ICwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krIDddLCAxMCwgIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKzEyXSwgNiAsICAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDYgLCAgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKyA0XSwgNiAsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcblxuICAgIGEgPSBzYWZlX2FkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZV9hZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVfYWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlX2FkZChkLCBvbGRkKTtcbiAgfVxuICByZXR1cm4gQXJyYXkoYSwgYiwgYywgZCk7XG5cbn1cblxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cbmZ1bmN0aW9uIG1kNV9jbW4ocSwgYSwgYiwgeCwgcywgdClcbntcbiAgcmV0dXJuIHNhZmVfYWRkKGJpdF9yb2woc2FmZV9hZGQoc2FmZV9hZGQoYSwgcSksIHNhZmVfYWRkKHgsIHQpKSwgcyksYik7XG59XG5mdW5jdGlvbiBtZDVfZmYoYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oKGIgJiBjKSB8ICgofmIpICYgZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1X2dnKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKChiICYgZCkgfCAoYyAmICh+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNV9oaChhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1X2lpKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKGMgXiAoYiB8ICh+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cbmZ1bmN0aW9uIHNhZmVfYWRkKHgsIHkpXG57XG4gIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIChtc3cgPDwgMTYpIHwgKGxzdyAmIDB4RkZGRik7XG59XG5cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cbmZ1bmN0aW9uIGJpdF9yb2wobnVtLCBjbnQpXG57XG4gIHJldHVybiAobnVtIDw8IGNudCkgfCAobnVtID4+PiAoMzIgLSBjbnQpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZDUoYnVmKSB7XG4gIHJldHVybiBoZWxwZXJzLmhhc2goYnVmLCBjb3JlX21kNSwgMTYpO1xufTtcbiIsIihmdW5jdGlvbiAoQnVmZmVyKXtcblxubW9kdWxlLmV4cG9ydHMgPSByaXBlbWQxNjBcblxuXG5cbi8qXG5DcnlwdG9KUyB2My4xLjJcbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qc1xuKGMpIDIwMDktMjAxMyBieSBKZWZmIE1vdHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5jb2RlLmdvb2dsZS5jb20vcC9jcnlwdG8tanMvd2lraS9MaWNlbnNlXG4qL1xuLyoqIEBwcmVzZXJ2ZVxuKGMpIDIwMTIgYnkgQ8OpZHJpYyBNZXNuaWwuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgIC0gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vLyBDb25zdGFudHMgdGFibGVcbnZhciB6bCA9IFtcbiAgICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgIDgsICA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuICAgIDcsICA0LCAxMywgIDEsIDEwLCAgNiwgMTUsICAzLCAxMiwgIDAsICA5LCAgNSwgIDIsIDE0LCAxMSwgIDgsXG4gICAgMywgMTAsIDE0LCAgNCwgIDksIDE1LCAgOCwgIDEsICAyLCAgNywgIDAsICA2LCAxMywgMTEsICA1LCAxMixcbiAgICAxLCAgOSwgMTEsIDEwLCAgMCwgIDgsIDEyLCAgNCwgMTMsICAzLCAgNywgMTUsIDE0LCAgNSwgIDYsICAyLFxuICAgIDQsICAwLCAgNSwgIDksICA3LCAxMiwgIDIsIDEwLCAxNCwgIDEsICAzLCAgOCwgMTEsICA2LCAxNSwgMTNdO1xudmFyIHpyID0gW1xuICAgIDUsIDE0LCAgNywgIDAsICA5LCAgMiwgMTEsICA0LCAxMywgIDYsIDE1LCAgOCwgIDEsIDEwLCAgMywgMTIsXG4gICAgNiwgMTEsICAzLCAgNywgIDAsIDEzLCAgNSwgMTAsIDE0LCAxNSwgIDgsIDEyLCAgNCwgIDksICAxLCAgMixcbiAgICAxNSwgIDUsICAxLCAgMywgIDcsIDE0LCAgNiwgIDksIDExLCAgOCwgMTIsICAyLCAxMCwgIDAsICA0LCAxMyxcbiAgICA4LCAgNiwgIDQsICAxLCAgMywgMTEsIDE1LCAgMCwgIDUsIDEyLCAgMiwgMTMsICA5LCAgNywgMTAsIDE0LFxuICAgIDEyLCAxNSwgMTAsICA0LCAgMSwgIDUsICA4LCAgNywgIDYsICAyLCAxMywgMTQsICAwLCAgMywgIDksIDExXTtcbnZhciBzbCA9IFtcbiAgICAgMTEsIDE0LCAxNSwgMTIsICA1LCAgOCwgIDcsICA5LCAxMSwgMTMsIDE0LCAxNSwgIDYsICA3LCAgOSwgIDgsXG4gICAgNywgNiwgICA4LCAxMywgMTEsICA5LCAgNywgMTUsICA3LCAxMiwgMTUsICA5LCAxMSwgIDcsIDEzLCAxMixcbiAgICAxMSwgMTMsICA2LCAgNywgMTQsICA5LCAxMywgMTUsIDE0LCAgOCwgMTMsICA2LCAgNSwgMTIsICA3LCAgNSxcbiAgICAgIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsICA5LCAgOCwgIDksIDE0LCAgNSwgIDYsICA4LCAgNiwgIDUsIDEyLFxuICAgIDksIDE1LCAgNSwgMTEsICA2LCAgOCwgMTMsIDEyLCAgNSwgMTIsIDEzLCAxNCwgMTEsICA4LCAgNSwgIDYgXTtcbnZhciBzciA9IFtcbiAgICA4LCAgOSwgIDksIDExLCAxMywgMTUsIDE1LCAgNSwgIDcsICA3LCAgOCwgMTEsIDE0LCAxNCwgMTIsICA2LFxuICAgIDksIDEzLCAxNSwgIDcsIDEyLCAgOCwgIDksIDExLCAgNywgIDcsIDEyLCAgNywgIDYsIDE1LCAxMywgMTEsXG4gICAgOSwgIDcsIDE1LCAxMSwgIDgsICA2LCAgNiwgMTQsIDEyLCAxMywgIDUsIDE0LCAxMywgMTMsICA3LCAgNSxcbiAgICAxNSwgIDUsICA4LCAxMSwgMTQsIDE0LCAgNiwgMTQsICA2LCAgOSwgMTIsICA5LCAxMiwgIDUsIDE1LCAgOCxcbiAgICA4LCAgNSwgMTIsICA5LCAxMiwgIDUsIDE0LCAgNiwgIDgsIDEzLCAgNiwgIDUsIDE1LCAxMywgMTEsIDExIF07XG5cbnZhciBobCA9ICBbIDB4MDAwMDAwMDAsIDB4NUE4Mjc5OTksIDB4NkVEOUVCQTEsIDB4OEYxQkJDREMsIDB4QTk1M0ZENEVdO1xudmFyIGhyID0gIFsgMHg1MEEyOEJFNiwgMHg1QzRERDEyNCwgMHg2RDcwM0VGMywgMHg3QTZENzZFOSwgMHgwMDAwMDAwMF07XG5cbnZhciBieXRlc1RvV29yZHMgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcbiAgdmFyIHdvcmRzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpIHtcbiAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICB9XG4gIHJldHVybiB3b3Jkcztcbn07XG5cbnZhciB3b3Jkc1RvQnl0ZXMgPSBmdW5jdGlvbiAod29yZHMpIHtcbiAgdmFyIGJ5dGVzID0gW107XG4gIGZvciAodmFyIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOCkge1xuICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICB9XG4gIHJldHVybiBieXRlcztcbn07XG5cbnZhciBwcm9jZXNzQmxvY2sgPSBmdW5jdGlvbiAoSCwgTSwgb2Zmc2V0KSB7XG5cbiAgLy8gU3dhcCBlbmRpYW5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgdmFyIG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcbiAgICB2YXIgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xuXG4gICAgLy8gU3dhcFxuICAgIE1bb2Zmc2V0X2ldID0gKFxuICAgICAgICAoKChNX29mZnNldF9pIDw8IDgpICB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcbiAgICApO1xuICB9XG5cbiAgLy8gV29ya2luZyB2YXJpYWJsZXNcbiAgdmFyIGFsLCBibCwgY2wsIGRsLCBlbDtcbiAgdmFyIGFyLCBiciwgY3IsIGRyLCBlcjtcblxuICBhciA9IGFsID0gSFswXTtcbiAgYnIgPSBibCA9IEhbMV07XG4gIGNyID0gY2wgPSBIWzJdO1xuICBkciA9IGRsID0gSFszXTtcbiAgZXIgPSBlbCA9IEhbNF07XG4gIC8vIENvbXB1dGF0aW9uXG4gIHZhciB0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcbiAgICB0ID0gKGFsICsgIE1bb2Zmc2V0K3psW2ldXSl8MDtcbiAgICBpZiAoaTwxNil7XG4gICAgICAgIHQgKz0gIGYxKGJsLGNsLGRsKSArIGhsWzBdO1xuICAgIH0gZWxzZSBpZiAoaTwzMikge1xuICAgICAgICB0ICs9ICBmMihibCxjbCxkbCkgKyBobFsxXTtcbiAgICB9IGVsc2UgaWYgKGk8NDgpIHtcbiAgICAgICAgdCArPSAgZjMoYmwsY2wsZGwpICsgaGxbMl07XG4gICAgfSBlbHNlIGlmIChpPDY0KSB7XG4gICAgICAgIHQgKz0gIGY0KGJsLGNsLGRsKSArIGhsWzNdO1xuICAgIH0gZWxzZSB7Ly8gaWYgKGk8ODApIHtcbiAgICAgICAgdCArPSAgZjUoYmwsY2wsZGwpICsgaGxbNF07XG4gICAgfVxuICAgIHQgPSB0fDA7XG4gICAgdCA9ICByb3RsKHQsc2xbaV0pO1xuICAgIHQgPSAodCtlbCl8MDtcbiAgICBhbCA9IGVsO1xuICAgIGVsID0gZGw7XG4gICAgZGwgPSByb3RsKGNsLCAxMCk7XG4gICAgY2wgPSBibDtcbiAgICBibCA9IHQ7XG5cbiAgICB0ID0gKGFyICsgTVtvZmZzZXQrenJbaV1dKXwwO1xuICAgIGlmIChpPDE2KXtcbiAgICAgICAgdCArPSAgZjUoYnIsY3IsZHIpICsgaHJbMF07XG4gICAgfSBlbHNlIGlmIChpPDMyKSB7XG4gICAgICAgIHQgKz0gIGY0KGJyLGNyLGRyKSArIGhyWzFdO1xuICAgIH0gZWxzZSBpZiAoaTw0OCkge1xuICAgICAgICB0ICs9ICBmMyhicixjcixkcikgKyBoclsyXTtcbiAgICB9IGVsc2UgaWYgKGk8NjQpIHtcbiAgICAgICAgdCArPSAgZjIoYnIsY3IsZHIpICsgaHJbM107XG4gICAgfSBlbHNlIHsvLyBpZiAoaTw4MCkge1xuICAgICAgICB0ICs9ICBmMShicixjcixkcikgKyBocls0XTtcbiAgICB9XG4gICAgdCA9IHR8MDtcbiAgICB0ID0gIHJvdGwodCxzcltpXSkgO1xuICAgIHQgPSAodCtlcil8MDtcbiAgICBhciA9IGVyO1xuICAgIGVyID0gZHI7XG4gICAgZHIgPSByb3RsKGNyLCAxMCk7XG4gICAgY3IgPSBicjtcbiAgICBiciA9IHQ7XG4gIH1cbiAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgdCAgICA9IChIWzFdICsgY2wgKyBkcil8MDtcbiAgSFsxXSA9IChIWzJdICsgZGwgKyBlcil8MDtcbiAgSFsyXSA9IChIWzNdICsgZWwgKyBhcil8MDtcbiAgSFszXSA9IChIWzRdICsgYWwgKyBicil8MDtcbiAgSFs0XSA9IChIWzBdICsgYmwgKyBjcil8MDtcbiAgSFswXSA9ICB0O1xufTtcblxuZnVuY3Rpb24gZjEoeCwgeSwgeikge1xuICByZXR1cm4gKCh4KSBeICh5KSBeICh6KSk7XG59XG5cbmZ1bmN0aW9uIGYyKHgsIHksIHopIHtcbiAgcmV0dXJuICgoKHgpJih5KSkgfCAoKH54KSYoeikpKTtcbn1cblxuZnVuY3Rpb24gZjMoeCwgeSwgeikge1xuICByZXR1cm4gKCgoeCkgfCAofih5KSkpIF4gKHopKTtcbn1cblxuZnVuY3Rpb24gZjQoeCwgeSwgeikge1xuICByZXR1cm4gKCgoeCkgJiAoeikpIHwgKCh5KSYofih6KSkpKTtcbn1cblxuZnVuY3Rpb24gZjUoeCwgeSwgeikge1xuICByZXR1cm4gKCh4KSBeICgoeSkgfCh+KHopKSkpO1xufVxuXG5mdW5jdGlvbiByb3RsKHgsbikge1xuICByZXR1cm4gKHg8PG4pIHwgKHg+Pj4oMzItbikpO1xufVxuXG5mdW5jdGlvbiByaXBlbWQxNjAobWVzc2FnZSkge1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweEVGQ0RBQjg5LCAweDk4QkFEQ0ZFLCAweDEwMzI1NDc2LCAweEMzRDJFMUYwXTtcblxuICBpZiAodHlwZW9mIG1lc3NhZ2UgPT0gJ3N0cmluZycpXG4gICAgbWVzc2FnZSA9IG5ldyBCdWZmZXIobWVzc2FnZSwgJ3V0ZjgnKTtcblxuICB2YXIgbSA9IGJ5dGVzVG9Xb3JkcyhtZXNzYWdlKTtcblxuICB2YXIgbkJpdHNMZWZ0ID0gbWVzc2FnZS5sZW5ndGggKiA4O1xuICB2YXIgbkJpdHNUb3RhbCA9IG1lc3NhZ2UubGVuZ3RoICogODtcblxuICAvLyBBZGQgcGFkZGluZ1xuICBtW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG4gIG1bKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcbiAgICAgICgoKG5CaXRzVG90YWwgPDwgOCkgIHwgKG5CaXRzVG90YWwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG4gICAgICAoKChuQml0c1RvdGFsIDw8IDI0KSB8IChuQml0c1RvdGFsID4+PiA4KSkgICYgMHhmZjAwZmYwMClcbiAgKTtcblxuICBmb3IgKHZhciBpPTAgOyBpPG0ubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgcHJvY2Vzc0Jsb2NrKEgsIG0sIGkpO1xuICB9XG5cbiAgLy8gU3dhcCBlbmRpYW5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIC8vIFNob3J0Y3V0XG4gICAgdmFyIEhfaSA9IEhbaV07XG5cbiAgICAvLyBTd2FwXG4gICAgSFtpXSA9ICgoKEhfaSA8PCA4KSAgfCAoSF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG4gIH1cblxuICB2YXIgZGlnZXN0Ynl0ZXMgPSB3b3Jkc1RvQnl0ZXMoSCk7XG4gIHJldHVybiBuZXcgQnVmZmVyKGRpZ2VzdGJ5dGVzKTtcbn1cblxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCJ2YXIgdSA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgd3JpdGUgPSB1LndyaXRlXG52YXIgZmlsbCA9IHUuemVyb0ZpbGxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQnVmZmVyKSB7XG5cbiAgLy9wcm90b3R5cGUgY2xhc3MgZm9yIGhhc2ggZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIEhhc2ggKGJsb2NrU2l6ZSwgZmluYWxTaXplKSB7XG4gICAgdGhpcy5fYmxvY2sgPSBuZXcgQnVmZmVyKGJsb2NrU2l6ZSkgLy9uZXcgVWludDMyQXJyYXkoYmxvY2tTaXplLzQpXG4gICAgdGhpcy5fZmluYWxTaXplID0gZmluYWxTaXplXG4gICAgdGhpcy5fYmxvY2tTaXplID0gYmxvY2tTaXplXG4gICAgdGhpcy5fbGVuID0gMFxuICAgIHRoaXMuX3MgPSAwXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3MgPSAwXG4gICAgdGhpcy5fbGVuID0gMFxuICB9XG5cbiAgZnVuY3Rpb24gbGVuZ3RoT2YoZGF0YSwgZW5jKSB7XG4gICAgaWYoZW5jID09IG51bGwpICAgICByZXR1cm4gZGF0YS5ieXRlTGVuZ3RoIHx8IGRhdGEubGVuZ3RoXG4gICAgaWYoZW5jID09ICdhc2NpaScgfHwgZW5jID09ICdiaW5hcnknKSAgcmV0dXJuIGRhdGEubGVuZ3RoXG4gICAgaWYoZW5jID09ICdoZXgnKSAgICByZXR1cm4gZGF0YS5sZW5ndGgvMlxuICAgIGlmKGVuYyA9PSAnYmFzZTY0JykgcmV0dXJuIGRhdGEubGVuZ3RoLzNcbiAgfVxuXG4gIEhhc2gucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmMpIHtcbiAgICB2YXIgYmwgPSB0aGlzLl9ibG9ja1NpemVcblxuICAgIC8vSSdkIHJhdGhlciBkbyB0aGlzIHdpdGggYSBzdHJlYW1pbmcgZW5jb2RlciwgbGlrZSB0aGUgb3Bwb3NpdGUgb2ZcbiAgICAvL2h0dHA6Ly9ub2RlanMub3JnL2FwaS9zdHJpbmdfZGVjb2Rlci5odG1sXG4gICAgdmFyIGxlbmd0aFxuICAgICAgaWYoIWVuYyAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGRhdGEpXG4gICAgICAgIGVuYyA9ICd1dGY4J1xuXG4gICAgaWYoZW5jKSB7XG4gICAgICBpZihlbmMgPT09ICd1dGYtOCcpXG4gICAgICAgIGVuYyA9ICd1dGY4J1xuXG4gICAgICBpZihlbmMgPT09ICdiYXNlNjQnIHx8IGVuYyA9PT0gJ3V0ZjgnKVxuICAgICAgICBkYXRhID0gbmV3IEJ1ZmZlcihkYXRhLCBlbmMpLCBlbmMgPSBudWxsXG5cbiAgICAgIGxlbmd0aCA9IGxlbmd0aE9mKGRhdGEsIGVuYylcbiAgICB9IGVsc2VcbiAgICAgIGxlbmd0aCA9IGRhdGEuYnl0ZUxlbmd0aCB8fCBkYXRhLmxlbmd0aFxuXG4gICAgdmFyIGwgPSB0aGlzLl9sZW4gKz0gbGVuZ3RoXG4gICAgdmFyIHMgPSB0aGlzLl9zID0gKHRoaXMuX3MgfHwgMClcbiAgICB2YXIgZiA9IDBcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYmxvY2tcbiAgICB3aGlsZShzIDwgbCkge1xuICAgICAgdmFyIHQgPSBNYXRoLm1pbihsZW5ndGgsIGYgKyBibClcbiAgICAgIHdyaXRlKGJ1ZmZlciwgZGF0YSwgZW5jLCBzJWJsLCBmLCB0KVxuICAgICAgdmFyIGNoID0gKHQgLSBmKTtcbiAgICAgIHMgKz0gY2g7IGYgKz0gY2hcblxuICAgICAgaWYoIShzJWJsKSlcbiAgICAgICAgdGhpcy5fdXBkYXRlKGJ1ZmZlcilcbiAgICB9XG4gICAgdGhpcy5fcyA9IHNcblxuICAgIHJldHVybiB0aGlzXG5cbiAgfVxuXG4gIEhhc2gucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uIChlbmMpIHtcbiAgICB2YXIgYmwgPSB0aGlzLl9ibG9ja1NpemVcbiAgICB2YXIgZmwgPSB0aGlzLl9maW5hbFNpemVcbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuKjhcblxuICAgIHZhciB4ID0gdGhpcy5fYmxvY2tcblxuICAgIHZhciBiaXRzID0gbGVuICUgKGJsKjgpXG5cbiAgICAvL2FkZCBlbmQgbWFya2VyLCBzbyB0aGF0IGFwcGVuZGluZyAwJ3MgY3JlYXRzIGEgZGlmZmVyZW50IGhhc2guXG4gICAgeFt0aGlzLl9sZW4gJSBibF0gPSAweDgwXG4gICAgZmlsbCh0aGlzLl9ibG9jaywgdGhpcy5fbGVuICUgYmwgKyAxKVxuXG4gICAgaWYoYml0cyA+PSBmbCo4KSB7XG4gICAgICB0aGlzLl91cGRhdGUodGhpcy5fYmxvY2spXG4gICAgICB1Lnplcm9GaWxsKHRoaXMuX2Jsb2NrLCAwKVxuICAgIH1cblxuICAgIC8vVE9ETzogaGFuZGxlIGNhc2Ugd2hlcmUgdGhlIGJpdCBsZW5ndGggaXMgPiBNYXRoLnBvdygyLCAyOSlcbiAgICB4LndyaXRlSW50MzJCRShsZW4sIGZsICsgNCkgLy9iaWcgZW5kaWFuXG5cbiAgICB2YXIgaGFzaCA9IHRoaXMuX3VwZGF0ZSh0aGlzLl9ibG9jaykgfHwgdGhpcy5faGFzaCgpXG4gICAgaWYoZW5jID09IG51bGwpIHJldHVybiBoYXNoXG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoZW5jKVxuICB9XG5cbiAgSGFzaC5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ191cGRhdGUgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBzdWJjbGFzcycpXG4gIH1cblxuICByZXR1cm4gSGFzaFxufVxuIiwidmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhbGcpIHtcbiAgdmFyIEFsZyA9IGV4cG9ydHNbYWxnXVxuICBpZighQWxnKSB0aHJvdyBuZXcgRXJyb3IoYWxnICsgJyBpcyBub3Qgc3VwcG9ydGVkICh3ZSBhY2NlcHQgcHVsbCByZXF1ZXN0cyknKVxuICByZXR1cm4gbmV3IEFsZygpXG59XG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcbnZhciBIYXNoICAgPSByZXF1aXJlKCcuL2hhc2gnKShCdWZmZXIpXG5cbmV4cG9ydHMuc2hhID1cbmV4cG9ydHMuc2hhMSA9IHJlcXVpcmUoJy4vc2hhMScpKEJ1ZmZlciwgSGFzaClcbmV4cG9ydHMuc2hhMjU2ID0gcmVxdWlyZSgnLi9zaGEyNTYnKShCdWZmZXIsIEhhc2gpXG4iLCIvKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBTZWN1cmUgSGFzaCBBbGdvcml0aG0sIFNIQS0xLCBhcyBkZWZpbmVkXG4gKiBpbiBGSVBTIFBVQiAxODAtMVxuICogVmVyc2lvbiAyLjFhIENvcHlyaWdodCBQYXVsIEpvaG5zdG9uIDIwMDAgLSAyMDAyLlxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgZGV0YWlscy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQnVmZmVyLCBIYXNoKSB7XG5cbiAgdmFyIGluaGVyaXRzID0gcmVxdWlyZSgndXRpbCcpLmluaGVyaXRzXG5cbiAgaW5oZXJpdHMoU2hhMSwgSGFzaClcblxuICB2YXIgQSA9IDB8MFxuICB2YXIgQiA9IDR8MFxuICB2YXIgQyA9IDh8MFxuICB2YXIgRCA9IDEyfDBcbiAgdmFyIEUgPSAxNnwwXG5cbiAgdmFyIEJFID0gZmFsc2VcbiAgdmFyIExFID0gdHJ1ZVxuXG4gIHZhciBXID0gbmV3IEludDMyQXJyYXkoODApXG5cbiAgdmFyIFBPT0wgPSBbXVxuXG4gIGZ1bmN0aW9uIFNoYTEgKCkge1xuICAgIGlmKFBPT0wubGVuZ3RoKVxuICAgICAgcmV0dXJuIFBPT0wucG9wKCkuaW5pdCgpXG5cbiAgICBpZighKHRoaXMgaW5zdGFuY2VvZiBTaGExKSkgcmV0dXJuIG5ldyBTaGExKClcbiAgICB0aGlzLl93ID0gV1xuICAgIEhhc2guY2FsbCh0aGlzLCAxNio0LCAxNCo0KVxuICBcbiAgICB0aGlzLl9oID0gbnVsbFxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBTaGExLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2EgPSAweDY3NDUyMzAxXG4gICAgdGhpcy5fYiA9IDB4ZWZjZGFiODlcbiAgICB0aGlzLl9jID0gMHg5OGJhZGNmZVxuICAgIHRoaXMuX2QgPSAweDEwMzI1NDc2XG4gICAgdGhpcy5fZSA9IDB4YzNkMmUxZjBcblxuICAgIEhhc2gucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBTaGExLnByb3RvdHlwZS5fUE9PTCA9IFBPT0xcblxuICAvLyBhc3N1bWUgdGhhdCBhcnJheSBpcyBhIFVpbnQzMkFycmF5IHdpdGggbGVuZ3RoPTE2LFxuICAvLyBhbmQgdGhhdCBpZiBpdCBpcyB0aGUgbGFzdCBibG9jaywgaXQgYWxyZWFkeSBoYXMgdGhlIGxlbmd0aCBhbmQgdGhlIDEgYml0IGFwcGVuZGVkLlxuXG5cbiAgdmFyIGlzRFYgPSBuZXcgQnVmZmVyKDEpIGluc3RhbmNlb2YgRGF0YVZpZXdcbiAgZnVuY3Rpb24gcmVhZEludDMyQkUgKFgsIGkpIHtcbiAgICByZXR1cm4gaXNEVlxuICAgICAgPyBYLmdldEludDMyKGksIGZhbHNlKVxuICAgICAgOiBYLnJlYWRJbnQzMkJFKGkpXG4gIH1cblxuICBTaGExLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKGFycmF5KSB7XG5cbiAgICB2YXIgWCA9IHRoaXMuX2Jsb2NrXG4gICAgdmFyIGggPSB0aGlzLl9oXG4gICAgdmFyIGEsIGIsIGMsIGQsIGUsIF9hLCBfYiwgX2MsIF9kLCBfZVxuXG4gICAgYSA9IF9hID0gdGhpcy5fYVxuICAgIGIgPSBfYiA9IHRoaXMuX2JcbiAgICBjID0gX2MgPSB0aGlzLl9jXG4gICAgZCA9IF9kID0gdGhpcy5fZFxuICAgIGUgPSBfZSA9IHRoaXMuX2VcblxuICAgIHZhciB3ID0gdGhpcy5fd1xuXG4gICAgZm9yKHZhciBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIHZhciBXID0gd1tqXVxuICAgICAgICA9IGogPCAxNlxuICAgICAgICAvLz8gWC5nZXRJbnQzMihqKjQsIGZhbHNlKVxuICAgICAgICAvLz8gcmVhZEludDMyQkUoWCwgaio0KSAvLyovIFgucmVhZEludDMyQkUoaio0KSAvLyovXG4gICAgICAgID8gWC5yZWFkSW50MzJCRShqKjQpXG4gICAgICAgIDogcm9sKHdbaiAtIDNdIF4gd1tqIC0gIDhdIF4gd1tqIC0gMTRdIF4gd1tqIC0gMTZdLCAxKVxuXG4gICAgICB2YXIgdCA9XG4gICAgICAgIGFkZChcbiAgICAgICAgICBhZGQocm9sKGEsIDUpLCBzaGExX2Z0KGosIGIsIGMsIGQpKSxcbiAgICAgICAgICBhZGQoYWRkKGUsIFcpLCBzaGExX2t0KGopKVxuICAgICAgICApO1xuXG4gICAgICBlID0gZFxuICAgICAgZCA9IGNcbiAgICAgIGMgPSByb2woYiwgMzApXG4gICAgICBiID0gYVxuICAgICAgYSA9IHRcbiAgICB9XG5cbiAgICB0aGlzLl9hID0gYWRkKGEsIF9hKVxuICAgIHRoaXMuX2IgPSBhZGQoYiwgX2IpXG4gICAgdGhpcy5fYyA9IGFkZChjLCBfYylcbiAgICB0aGlzLl9kID0gYWRkKGQsIF9kKVxuICAgIHRoaXMuX2UgPSBhZGQoZSwgX2UpXG4gIH1cblxuICBTaGExLnByb3RvdHlwZS5faGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihQT09MLmxlbmd0aCA8IDEwMCkgUE9PTC5wdXNoKHRoaXMpXG4gICAgdmFyIEggPSBuZXcgQnVmZmVyKDIwKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5fYXwwLCB0aGlzLl9ifDAsIHRoaXMuX2N8MCwgdGhpcy5fZHwwLCB0aGlzLl9lfDApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYXwwLCBBKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2J8MCwgQilcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9jfDAsIEMpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZHwwLCBEKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2V8MCwgRSlcbiAgICByZXR1cm4gSFxuICB9XG5cbiAgLypcbiAgICogUGVyZm9ybSB0aGUgYXBwcm9wcmlhdGUgdHJpcGxldCBjb21iaW5hdGlvbiBmdW5jdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICogaXRlcmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBzaGExX2Z0KHQsIGIsIGMsIGQpIHtcbiAgICBpZih0IDwgMjApIHJldHVybiAoYiAmIGMpIHwgKCh+YikgJiBkKTtcbiAgICBpZih0IDwgNDApIHJldHVybiBiIF4gYyBeIGQ7XG4gICAgaWYodCA8IDYwKSByZXR1cm4gKGIgJiBjKSB8IChiICYgZCkgfCAoYyAmIGQpO1xuICAgIHJldHVybiBiIF4gYyBeIGQ7XG4gIH1cblxuICAvKlxuICAgKiBEZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIGFkZGl0aXZlIGNvbnN0YW50IGZvciB0aGUgY3VycmVudCBpdGVyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHNoYTFfa3QodCkge1xuICAgIHJldHVybiAodCA8IDIwKSA/ICAxNTE4NTAwMjQ5IDogKHQgPCA0MCkgPyAgMTg1OTc3NTM5MyA6XG4gICAgICAgICAgICh0IDwgNjApID8gLTE4OTQwMDc1ODggOiAtODk5NDk3NTE0O1xuICB9XG5cbiAgLypcbiAgICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICAgKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICAgKiAvL2RvbWluaWN0YXJyOiB0aGlzIGlzIDEwIHllYXJzIG9sZCwgc28gbWF5YmUgdGhpcyBjYW4gYmUgZHJvcHBlZD8pXG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBhZGQoeCwgeSkge1xuICAgIHJldHVybiAoeCArIHkgKSB8IDBcbiAgLy9sZXRzIHNlZSBob3cgdGhpcyBnb2VzIG9uIHRlc3RsaW5nLlxuICAvLyAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKTtcbiAgLy8gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgLy8gIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xuICB9XG5cbiAgLypcbiAgICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgZnVuY3Rpb24gcm9sKG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xuICB9XG5cbiAgcmV0dXJuIFNoYTFcbn1cbiIsIlxuLyoqXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFNlY3VyZSBIYXNoIEFsZ29yaXRobSwgU0hBLTI1NiwgYXMgZGVmaW5lZFxuICogaW4gRklQUyAxODAtMlxuICogVmVyc2lvbiAyLjItYmV0YSBDb3B5cmlnaHQgQW5nZWwgTWFyaW4sIFBhdWwgSm9obnN0b24gMjAwMCAtIDIwMDkuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKlxuICovXG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbmhlcml0c1xudmFyIEJFICAgICAgID0gZmFsc2VcbnZhciBMRSAgICAgICA9IHRydWVcbnZhciB1ICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJ1ZmZlciwgSGFzaCkge1xuXG4gIHZhciBLID0gW1xuICAgICAgMHg0MjhBMkY5OCwgMHg3MTM3NDQ5MSwgMHhCNUMwRkJDRiwgMHhFOUI1REJBNSxcbiAgICAgIDB4Mzk1NkMyNUIsIDB4NTlGMTExRjEsIDB4OTIzRjgyQTQsIDB4QUIxQzVFRDUsXG4gICAgICAweEQ4MDdBQTk4LCAweDEyODM1QjAxLCAweDI0MzE4NUJFLCAweDU1MEM3REMzLFxuICAgICAgMHg3MkJFNUQ3NCwgMHg4MERFQjFGRSwgMHg5QkRDMDZBNywgMHhDMTlCRjE3NCxcbiAgICAgIDB4RTQ5QjY5QzEsIDB4RUZCRTQ3ODYsIDB4MEZDMTlEQzYsIDB4MjQwQ0ExQ0MsXG4gICAgICAweDJERTkyQzZGLCAweDRBNzQ4NEFBLCAweDVDQjBBOURDLCAweDc2Rjk4OERBLFxuICAgICAgMHg5ODNFNTE1MiwgMHhBODMxQzY2RCwgMHhCMDAzMjdDOCwgMHhCRjU5N0ZDNyxcbiAgICAgIDB4QzZFMDBCRjMsIDB4RDVBNzkxNDcsIDB4MDZDQTYzNTEsIDB4MTQyOTI5NjcsXG4gICAgICAweDI3QjcwQTg1LCAweDJFMUIyMTM4LCAweDREMkM2REZDLCAweDUzMzgwRDEzLFxuICAgICAgMHg2NTBBNzM1NCwgMHg3NjZBMEFCQiwgMHg4MUMyQzkyRSwgMHg5MjcyMkM4NSxcbiAgICAgIDB4QTJCRkU4QTEsIDB4QTgxQTY2NEIsIDB4QzI0QjhCNzAsIDB4Qzc2QzUxQTMsXG4gICAgICAweEQxOTJFODE5LCAweEQ2OTkwNjI0LCAweEY0MEUzNTg1LCAweDEwNkFBMDcwLFxuICAgICAgMHgxOUE0QzExNiwgMHgxRTM3NkMwOCwgMHgyNzQ4Nzc0QywgMHgzNEIwQkNCNSxcbiAgICAgIDB4MzkxQzBDQjMsIDB4NEVEOEFBNEEsIDB4NUI5Q0NBNEYsIDB4NjgyRTZGRjMsXG4gICAgICAweDc0OEY4MkVFLCAweDc4QTU2MzZGLCAweDg0Qzg3ODE0LCAweDhDQzcwMjA4LFxuICAgICAgMHg5MEJFRkZGQSwgMHhBNDUwNkNFQiwgMHhCRUY5QTNGNywgMHhDNjcxNzhGMlxuICAgIF1cblxuICBpbmhlcml0cyhTaGEyNTYsIEhhc2gpXG4gIHZhciBXID0gbmV3IEFycmF5KDY0KVxuICB2YXIgUE9PTCA9IFtdXG4gIGZ1bmN0aW9uIFNoYTI1NigpIHtcbiAgICBpZihQT09MLmxlbmd0aCkge1xuICAgICAgLy9yZXR1cm4gUE9PTC5zaGlmdCgpLmluaXQoKVxuICAgIH1cbiAgICAvL3RoaXMuX2RhdGEgPSBuZXcgQnVmZmVyKDMyKVxuXG4gICAgdGhpcy5pbml0KClcblxuICAgIHRoaXMuX3cgPSBXIC8vbmV3IEFycmF5KDY0KVxuXG4gICAgSGFzaC5jYWxsKHRoaXMsIDE2KjQsIDE0KjQpXG4gIH07XG5cbiAgU2hhMjU2LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy5fYSA9IDB4NmEwOWU2Njd8MFxuICAgIHRoaXMuX2IgPSAweGJiNjdhZTg1fDBcbiAgICB0aGlzLl9jID0gMHgzYzZlZjM3MnwwXG4gICAgdGhpcy5fZCA9IDB4YTU0ZmY1M2F8MFxuICAgIHRoaXMuX2UgPSAweDUxMGU1MjdmfDBcbiAgICB0aGlzLl9mID0gMHg5YjA1Njg4Y3wwXG4gICAgdGhpcy5fZyA9IDB4MWY4M2Q5YWJ8MFxuICAgIHRoaXMuX2ggPSAweDViZTBjZDE5fDBcblxuICAgIHRoaXMuX2xlbiA9IHRoaXMuX3MgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdmFyIHNhZmVfYWRkID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XG4gICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xuICB9XG5cbiAgZnVuY3Rpb24gUyAoWCwgbikge1xuICAgIHJldHVybiAoWCA+Pj4gbikgfCAoWCA8PCAoMzIgLSBuKSk7XG4gIH1cblxuICBmdW5jdGlvbiBSIChYLCBuKSB7XG4gICAgcmV0dXJuIChYID4+PiBuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENoICh4LCB5LCB6KSB7XG4gICAgcmV0dXJuICgoeCAmIHkpIF4gKCh+eCkgJiB6KSk7XG4gIH1cblxuICBmdW5jdGlvbiBNYWogKHgsIHksIHopIHtcbiAgICByZXR1cm4gKCh4ICYgeSkgXiAoeCAmIHopIF4gKHkgJiB6KSk7XG4gIH1cblxuICBmdW5jdGlvbiBTaWdtYTAyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgMikgXiBTKHgsIDEzKSBeIFMoeCwgMjIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNpZ21hMTI1NiAoeCkge1xuICAgIHJldHVybiAoUyh4LCA2KSBeIFMoeCwgMTEpIF4gUyh4LCAyNSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gR2FtbWEwMjU2ICh4KSB7XG4gICAgcmV0dXJuIChTKHgsIDcpIF4gUyh4LCAxOCkgXiBSKHgsIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdhbW1hMTI1NiAoeCkge1xuICAgIHJldHVybiAoUyh4LCAxNykgXiBTKHgsIDE5KSBeIFIoeCwgMTApKTtcbiAgfVxuXG4gIFNoYTI1Ni5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uKG0pIHtcbiAgICB2YXIgTSA9IHRoaXMuX2Jsb2NrXG4gICAgdmFyIFcgPSB0aGlzLl93XG4gICAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGhcbiAgICB2YXIgVDEsIFQyXG5cbiAgICBhID0gdGhpcy5fYSB8IDBcbiAgICBiID0gdGhpcy5fYiB8IDBcbiAgICBjID0gdGhpcy5fYyB8IDBcbiAgICBkID0gdGhpcy5fZCB8IDBcbiAgICBlID0gdGhpcy5fZSB8IDBcbiAgICBmID0gdGhpcy5fZiB8IDBcbiAgICBnID0gdGhpcy5fZyB8IDBcbiAgICBoID0gdGhpcy5faCB8IDBcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgNjQ7IGorKykge1xuICAgICAgdmFyIHcgPSBXW2pdID0gaiA8IDE2XG4gICAgICAgID8gTS5yZWFkSW50MzJCRShqICogNClcbiAgICAgICAgOiBHYW1tYTEyNTYoV1tqIC0gMl0pICsgV1tqIC0gN10gKyBHYW1tYTAyNTYoV1tqIC0gMTVdKSArIFdbaiAtIDE2XVxuXG4gICAgICBUMSA9IGggKyBTaWdtYTEyNTYoZSkgKyBDaChlLCBmLCBnKSArIEtbal0gKyB3XG5cbiAgICAgIFQyID0gU2lnbWEwMjU2KGEpICsgTWFqKGEsIGIsIGMpO1xuICAgICAgaCA9IGc7IGcgPSBmOyBmID0gZTsgZSA9IGQgKyBUMTsgZCA9IGM7IGMgPSBiOyBiID0gYTsgYSA9IFQxICsgVDI7XG4gICAgfVxuXG4gICAgdGhpcy5fYSA9IChhICsgdGhpcy5fYSkgfCAwXG4gICAgdGhpcy5fYiA9IChiICsgdGhpcy5fYikgfCAwXG4gICAgdGhpcy5fYyA9IChjICsgdGhpcy5fYykgfCAwXG4gICAgdGhpcy5fZCA9IChkICsgdGhpcy5fZCkgfCAwXG4gICAgdGhpcy5fZSA9IChlICsgdGhpcy5fZSkgfCAwXG4gICAgdGhpcy5fZiA9IChmICsgdGhpcy5fZikgfCAwXG4gICAgdGhpcy5fZyA9IChnICsgdGhpcy5fZykgfCAwXG4gICAgdGhpcy5faCA9IChoICsgdGhpcy5faCkgfCAwXG5cbiAgfTtcblxuICBTaGEyNTYucHJvdG90eXBlLl9oYXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKFBPT0wubGVuZ3RoIDwgMTApXG4gICAgICBQT09MLnB1c2godGhpcylcblxuICAgIHZhciBIID0gbmV3IEJ1ZmZlcigzMilcblxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2EsICAwKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2IsICA0KVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2MsICA4KVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2QsIDEyKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2UsIDE2KVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2YsIDIwKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2csIDI0KVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2gsIDI4KVxuXG4gICAgcmV0dXJuIEhcbiAgfVxuXG4gIHJldHVybiBTaGEyNTZcblxufVxuIiwiZXhwb3J0cy53cml0ZSA9IHdyaXRlXG5leHBvcnRzLnplcm9GaWxsID0gemVyb0ZpbGxcblxuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nXG5cbmZ1bmN0aW9uIHdyaXRlIChidWZmZXIsIHN0cmluZywgZW5jLCBzdGFydCwgZnJvbSwgdG8sIExFKSB7XG4gIHZhciBsID0gKHRvIC0gZnJvbSlcbiAgaWYoZW5jID09PSAnYXNjaWknIHx8IGVuYyA9PT0gJ2JpbmFyeScpIHtcbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgYnVmZmVyW3N0YXJ0ICsgaV0gPSBzdHJpbmcuY2hhckNvZGVBdChpICsgZnJvbSlcbiAgICB9XG4gIH1cbiAgZWxzZSBpZihlbmMgPT0gbnVsbCkge1xuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBidWZmZXJbc3RhcnQgKyBpXSA9IHN0cmluZ1tpICsgZnJvbV1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZihlbmMgPT09ICdoZXgnKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGogPSBmcm9tICsgaVxuICAgICAgYnVmZmVyW3N0YXJ0ICsgaV0gPSBwYXJzZUludChzdHJpbmdbaioyXSArIHN0cmluZ1soaioyKSsxXSwgMTYpXG4gICAgfVxuICB9XG4gIGVsc2UgaWYoZW5jID09PSAnYmFzZTY0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignYmFzZTY0IGVuY29kaW5nIG5vdCB5ZXQgc3VwcG9ydGVkJylcbiAgfVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKGVuYyArJyBlbmNvZGluZyBub3QgeWV0IHN1cHBvcnRlZCcpXG59XG5cbi8vYWx3YXlzIGZpbGwgdG8gdGhlIGVuZCFcbmZ1bmN0aW9uIHplcm9GaWxsKGJ1ZiwgZnJvbSkge1xuICBmb3IodmFyIGkgPSBmcm9tOyBpIDwgYnVmLmxlbmd0aDsgaSsrKVxuICAgIGJ1ZltpXSA9IDBcbn1cblxuIiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xuLy8gSmF2YVNjcmlwdCBQQktERjIgSW1wbGVtZW50YXRpb25cbi8vIEJhc2VkIG9uIGh0dHA6Ly9naXQuaW8vcXN2Mnp3XG4vLyBMaWNlbnNlZCB1bmRlciBMR1BMIHYzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTMgamR1bmNhbmF0b3JcblxudmFyIGJsb2Nrc2l6ZSA9IDY0XG52YXIgemVyb0J1ZmZlciA9IG5ldyBCdWZmZXIoYmxvY2tzaXplKTsgemVyb0J1ZmZlci5maWxsKDApXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNyZWF0ZUhtYWMsIGV4cG9ydHMpIHtcbiAgZXhwb3J0cyA9IGV4cG9ydHMgfHwge31cblxuICBleHBvcnRzLnBia2RmMiA9IGZ1bmN0aW9uKHBhc3N3b3JkLCBzYWx0LCBpdGVyYXRpb25zLCBrZXlsZW4sIGNiKSB7XG4gICAgaWYoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNiKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjYWxsYmFjayBwcm92aWRlZCB0byBwYmtkZjInKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKG51bGwsIGV4cG9ydHMucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuKSlcbiAgICB9KVxuICB9XG5cbiAgZXhwb3J0cy5wYmtkZjJTeW5jID0gZnVuY3Rpb24oa2V5LCBzYWx0LCBpdGVyYXRpb25zLCBrZXlsZW4pIHtcbiAgICBpZignbnVtYmVyJyAhPT0gdHlwZW9mIGl0ZXJhdGlvbnMpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJdGVyYXRpb25zIG5vdCBhIG51bWJlcicpXG4gICAgaWYoaXRlcmF0aW9ucyA8IDApXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgaXRlcmF0aW9ucycpXG4gICAgaWYoJ251bWJlcicgIT09IHR5cGVvZiBrZXlsZW4pXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdLZXkgbGVuZ3RoIG5vdCBhIG51bWJlcicpXG4gICAgaWYoa2V5bGVuIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBrZXkgbGVuZ3RoJylcblxuICAgIC8vc3RyZXRjaCBrZXkgdG8gdGhlIGNvcnJlY3QgbGVuZ3RoIHRoYXQgaG1hYyB3YW50cyBpdCxcbiAgICAvL290aGVyd2lzZSB0aGlzIHdpbGwgaGFwcGVuIGV2ZXJ5IHRpbWUgaG1hYyBpcyBjYWxsZWRcbiAgICAvL3R3aWNlIHBlciBpdGVyYXRpb24uXG4gICAgdmFyIGtleSA9ICFCdWZmZXIuaXNCdWZmZXIoa2V5KSA/IG5ldyBCdWZmZXIoa2V5KSA6IGtleVxuXG4gICAgaWYoa2V5Lmxlbmd0aCA+IGJsb2Nrc2l6ZSkge1xuICAgICAga2V5ID0gY3JlYXRlSGFzaChhbGcpLnVwZGF0ZShrZXkpLmRpZ2VzdCgpXG4gICAgfSBlbHNlIGlmKGtleS5sZW5ndGggPCBibG9ja3NpemUpIHtcbiAgICAgIGtleSA9IEJ1ZmZlci5jb25jYXQoW2tleSwgemVyb0J1ZmZlcl0sIGJsb2Nrc2l6ZSlcbiAgICB9XG5cbiAgICB2YXIgSE1BQztcbiAgICB2YXIgY3BsZW4sIHAgPSAwLCBpID0gMSwgaXRtcCA9IG5ldyBCdWZmZXIoNCksIGRpZ3RtcDtcbiAgICB2YXIgb3V0ID0gbmV3IEJ1ZmZlcihrZXlsZW4pO1xuICAgIG91dC5maWxsKDApO1xuICAgIHdoaWxlKGtleWxlbikge1xuICAgICAgaWYoa2V5bGVuID4gMjApXG4gICAgICAgIGNwbGVuID0gMjA7XG4gICAgICBlbHNlXG4gICAgICAgIGNwbGVuID0ga2V5bGVuO1xuXG4gICAgICAvKiBXZSBhcmUgdW5saWtlbHkgdG8gZXZlciB1c2UgbW9yZSB0aGFuIDI1NiBibG9ja3MgKDUxMjAgYml0cyEpXG4gICAgICAgICAqIGJ1dCBqdXN0IGluIGNhc2UuLi5cbiAgICAgICAgICovXG4gICAgICAgIGl0bXBbMF0gPSAoaSA+PiAyNCkgJiAweGZmO1xuICAgICAgICBpdG1wWzFdID0gKGkgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgICBpdG1wWzJdID0gKGkgPj4gOCkgJiAweGZmO1xuICAgICAgICAgIGl0bXBbM10gPSBpICYgMHhmZjtcblxuICAgICAgICAgIEhNQUMgPSBjcmVhdGVIbWFjKCdzaGExJywga2V5KTtcbiAgICAgICAgICBITUFDLnVwZGF0ZShzYWx0KVxuICAgICAgICAgIEhNQUMudXBkYXRlKGl0bXApO1xuICAgICAgICBkaWd0bXAgPSBITUFDLmRpZ2VzdCgpO1xuICAgICAgICBkaWd0bXAuY29weShvdXQsIHAsIDAsIGNwbGVuKTtcblxuICAgICAgICBmb3IodmFyIGogPSAxOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgICAgSE1BQyA9IGNyZWF0ZUhtYWMoJ3NoYTEnLCBrZXkpO1xuICAgICAgICAgIEhNQUMudXBkYXRlKGRpZ3RtcCk7XG4gICAgICAgICAgZGlndG1wID0gSE1BQy5kaWdlc3QoKTtcbiAgICAgICAgICBmb3IodmFyIGsgPSAwOyBrIDwgY3BsZW47IGsrKykge1xuICAgICAgICAgICAgb3V0W2tdIF49IGRpZ3RtcFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGtleWxlbiAtPSBjcGxlbjtcbiAgICAgIGkrKztcbiAgICAgIHAgKz0gY3BsZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG4vLyBPcmlnaW5hbCBjb2RlIGFkYXB0ZWQgZnJvbSBSb2JlcnQgS2llZmZlci5cbi8vIGRldGFpbHMgYXQgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWRcblxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfZ2xvYmFsID0gdGhpcztcblxuICB2YXIgbWF0aFJORywgd2hhdHdnUk5HO1xuXG4gIC8vIE5PVEU6IE1hdGgucmFuZG9tKCkgZG9lcyBub3QgZ3VhcmFudGVlIFwiY3J5cHRvZ3JhcGhpYyBxdWFsaXR5XCJcbiAgbWF0aFJORyA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgQnVmZmVyKHNpemUpO1xuICAgIHZhciByO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBieXRlc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gYnl0ZXM7XG4gIH1cblxuICBpZiAoX2dsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIHdoYXR3Z1JORyA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHZhciBieXRlcyA9IG5ldyBCdWZmZXIoc2l6ZSk7IC8vaW4gYnJvd3NlcmlmeSwgdGhpcyBpcyBhbiBleHRlbmRlZCBVaW50OEFycmF5XG4gICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ5dGVzKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHdoYXR3Z1JORyB8fCBtYXRoUk5HO1xuXG59KCkpXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInF2TVljQ1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gZm9vQ29udHJvbGxlcigkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQpIHtcbiAgICAkc2NvcGUubmF2aWdhdGVUb1JhdGUgPSBmdW5jdGlvbigpe1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcuYmlnLXNlY3Rpb24nKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKTtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICRzdGF0ZS5nbygncmF0ZScpO1xuICAgICAgfSwgNjAwKTtcbiAgICB9O1xuICB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFuZ3VsYXIubW9kdWxlKCd6dWx1YXBwLmZvbycsIFtdKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdyYXRlJywge1xuICAgICAgdXJsOiAnL3JhdGUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZm9vL2xheW91dC5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdyYXRlQ29udHJvbGxlcidcbiAgICB9KVxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mb28vaG9tZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdob21lQ29udHJvbGxlcidcbiAgICB9KTtcbiAgfSlcbiAgLmNvbnRyb2xsZXIoJ3JhdGVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9yYXRlQ29udHJvbGxlcicpKVxuICAuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL2hvbWVDb250cm9sbGVyJykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEtlZW4gPSByZXF1aXJlKCdrZWVuLmlvJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBmb29Db250cm9sbGVyKCRzY29wZSwgJGh0dHAsICR0aW1lb3V0KSB7XG4gIFx0dmFyIHByb2Zlc3Npb25hbHMgPSBudWxsO1xuICAgIHZhciByYXRlZFByb2Zlc3Npb25hbHMgPSB7Y291bnQ6MH07XG4gIFx0Ly8gdG9kbyA6IG1vdmUgdGhpcyBpbiBhIHNlcnZpY2VcbiAgXHR2YXIga2VlbkNsaWVudCA9IEtlZW4uY29uZmlndXJlKHtcbiAgXHRcdHByb2plY3RJZCA6ICc1NDlmM2M5NWQyZWFhYTAyZGExNTcwNTInLFxuICBcdFx0d3JpdGVLZXkgOiAnNGFhZmQ3NzQxMjBlYTE4ZWEwYjg1MjI0NThiNTkwMzg0OTE2ZmE3M2ExNjRmNDFkN2JjYzQ0OTZhZDQ4OTY1ZmNlZmYwYzdlMzMxZjdhZjNjZjA1OWY5MzQxZGYyNTY2YTA3YWNkNGE4MDRlYmM2MTJjMTNjZGE4ZWY4Yjc2ODFmZTg3ZGIzOTBhNmEwNWUzZWYwZTg2NTVkZDgzYTgxMGIyYmZlYTA3MzY4MWNmZjAxMWMxOGY4MDVhNjM1NDhiOWRhMGI1YzhiODIxYjExMDIwZGU2YWExYTkzZWVlMGMnLFxuICBcdFx0cmVhZEtleSA6ICc5MjIyNTQ4ZjA4MTA2OGZmNGZkYzEwM2ViMWJlMTI3OWNhNGNkNjc5MDkzZjkyZGIyZmZhYmU1ZGFmOWQ5M2VjZTVlMGNhOGY4MmJkYmE1YTNkNzVkY2Q3NGNiM2M3OTQ0NzI0ZTk1NGQzMWRkM2JkNDkzMGFhOTMyMDExYzJkMmZkMTFlNzQ5ZjQ0ZDcxNDU2ZjRiNjhlYTM2MzE2YjkwZjBhMDcxMzdhNGRkZWQzZWU4MzEzNmNiMTYxNTM4ZDlkODdiYWFhNGFhYWIyMWJlN2I1MGU5NTJiYjczODU3YidcbiAgXHR9KTtcbiAgICBcbiAgICAkc2NvcGUuY3VycmVudFN0YXRzID0ge1xuICAgICAgYXZlcmFnZTogMCxcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcbiAgICAkc2NvcGUuY3VycmVudEF2ZXJhZ2UgPSAwO1xuICAgICRzY29wZS5OVU1CRVJfSU5fQ1VSUkVOVF9TVEFUUyA9IDEwO1xuICAgICRzY29wZS5jdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwgPSBudWxsO1xuXG4gIFx0ZnVuY3Rpb24gZ2V0TmV4dFByb2Zlc2lvbm5hbCgpe1xuICBcdFx0dmFyIHByb2Zlc3Npb25uYWxJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb2Zlc3Npb25hbHMubGVuZ3RoKTtcbiAgICAgICAgdmFyIHByb2Zlc3Npb25hbCA9IHByb2Zlc3Npb25hbHNbcHJvZmVzc2lvbm5hbEluZGV4XTtcbiAgICAgICAgd2hpbGUocmF0ZWRQcm9mZXNzaW9uYWxzW3Byb2Zlc3Npb25hbC5JRF0gJiYgcmF0ZWRQcm9mZXNzaW9uYWxzLmNvdW50IDwgcHJvZmVzc2lvbmFsLmxlbmd0aCl7XG4gICAgICAgICAgICBpZihwcm9mZXNzaW9ubmFsSW5kZXggPT0gcHJvZmVzc2lvbmFscy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHByb2Zlc3Npb25uYWxJbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgcHJvZmVzc2lvbm5hbEluZGV4KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Zlc3Npb25hbCA9IHByb2Zlc3Npb25hbHNbcHJvZmVzc2lvbm5hbEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUuY3VycmVudFJhdGVkUHJvZmVzc2lvbmFsID0gcHJvZmVzc2lvbmFsc1twcm9mZXNzaW9ubmFsSW5kZXhdO1xuICBcdH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRBdmVyYWdlKHJhdGluZyl7XG4gICAgICB2YXIgbnVtYmVyT2ZDdXJyZW50UmF0ZWQgPSByYXRlZFByb2Zlc3Npb25hbHMuY291bnQgJSAkc2NvcGUuTlVNQkVSX0lOX0NVUlJFTlRfU1RBVFM7IFxuICAgICAgJHNjb3BlLmN1cnJlbnRTdGF0cy5hdmVyYWdlID0gKCgkc2NvcGUuY3VycmVudFN0YXRzLmF2ZXJhZ2UgKiBudW1iZXJPZkN1cnJlbnRSYXRlZCkgKyByYXRpbmcpIC8gKG51bWJlck9mQ3VycmVudFJhdGVkICsgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9SYXRlZChJRCwgcmF0aW5nKXtcbiAgICAgIHVwZGF0ZUN1cnJlbnRBdmVyYWdlKHJhdGluZyk7XG4gICAgICByYXRlZFByb2Zlc3Npb25hbHNbSURdID0gcmF0aW5nO1xuICAgICAgcmF0ZWRQcm9mZXNzaW9uYWxzLmNvdW50Kys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVN0YXRzKCl7XG4gICAgICAkc2NvcGUuY3VycmVudFN0YXRzLnZpc2libGUgPSB0cnVlO1xuICAgICAgYW5ndWxhci5lbGVtZW50KCcjc3RhdHMnKS5yZW1vdmVDbGFzcygnZmFkZU91dERvd24nKTtcbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI3N0YXRzJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbkRvd24nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5TmV4dFByb2Zlc3Npb25hbChkZWxheSl7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBnZXROZXh0UHJvZmVzaW9ubmFsKCk7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI3Byb2Zlc3Npb25hbCcpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW5Eb3duJyk7IFxuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJyNwcm9mZXNzaW9uYWwnKS5yZW1vdmVDbGFzcygnZmFkZU91dERvd24nKTtcbiAgICAgIH0sIGRlbGF5IHx8wqAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXh0Vmlldygpe1xuICAgICAgaWYgKHJhdGVkUHJvZmVzc2lvbmFscy5jb3VudCA+IDAgJiYgcmF0ZWRQcm9mZXNzaW9uYWxzLmNvdW50ICUgJHNjb3BlLk5VTUJFUl9JTl9DVVJSRU5UX1NUQVRTID09IDApIHtcbiAgICAgICAgZGlzcGxheVN0YXRzKCk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGRpc3BsYXlOZXh0UHJvZmVzc2lvbmFsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHNjb3BlLmNvbnRpbnVlID0gZnVuY3Rpb24oKXtcbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI3N0YXRzJykucmVtb3ZlQ2xhc3MoJ2ZhZGVJbkRvd24nKTtcbiAgICAgIGFuZ3VsYXIuZWxlbWVudCgnI3N0YXRzJykuYWRkQ2xhc3MoJ2ZhZGVPdXREb3duJyk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUuY3VycmVudFN0YXRzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRTdGF0cy5hdmVyYWdlID0gMDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgZGlzcGxheU5leHRQcm9mZXNzaW9uYWwoKTtcbiAgICB9O1xuXG4gIFx0JHNjb3BlLnJhdGUgPSBmdW5jdGlvbihyYXRpbmcsIGV2ZW50KXtcbiAgXHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICBcdFx0YW5ndWxhci5lbGVtZW50KCcjcHJvZmVzc2lvbmFsJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXREb3duJyk7XG4gIFx0XHRrZWVuQ2xpZW50LmFkZEV2ZW50KCdyYXRpbmcnLCB7cHJvZmVzc2lvbmFsSUQ6ICRzY29wZS5jdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwuSUQsIHJhdGluZzpyYXRpbmd9KTtcbiAgICAgIGFkZFRvUmF0ZWQoJHNjb3BlLmN1cnJlbnRSYXRlZFByb2Zlc3Npb25hbC5JRCwgcmF0aW5nKTtcbiAgICAgIGdldE5leHRWaWV3KClcbiAgXHR9O1xuXG4gIFx0JGh0dHAuZ2V0KCdhc3NldHMvZGF0YS9wcm9mZXNzaW9uYWxzLmpzb24nKVxuICBcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHByb2Zlc3Npb25hbHMgPSBkYXRhO1xuICAgIGRpc3BsYXlOZXh0UHJvZmVzc2lvbmFsKDEpO1xuXHR9KTtcbiAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPVxuICBhbmd1bGFyLm1vZHVsZSgnenVsdWFwcCcsIFtcbiAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAndWkucm91dGVyJyxcbiAgICAvL2xvYWQgZXh0cmEgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIGhlcmUsIGUuZy46XG4gICAgLy8nbmdBbmltYXRlJyxcbiAgICAvL2h0bWwgdGVtcGxhdGVzIGluICR0ZW1wbGF0ZUNhY2hlIGdlbmVyYXRlZCBieSBHdWxwOlxuICAgIHJlcXVpcmUoJy4uLy4uLy4uL3RtcC90ZW1wbGF0ZXMnKS5uYW1lLFxuICAgIC8vdXNlZnVsIGRpcmVjdGl2ZXMsIGZpbHRlcnMsIHNlcnZpY2VzIHNoYXJlZCBhY3Jvc3MgdGhlIGFwcFxuICAgIC8vZXhhbXBsZSBhcHAgbW9kdWxlOlxuICAgIHJlcXVpcmUoJy4vZm9vJykubmFtZSxcbiAgXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vYnJvd3NlcmlmeS1zaGltIGRlcGVuZGVuY2llcyAoY2FuIGJlIGVkaXRlZCBpbiBwYWNrYWdlLmpzb24pXG5yZXF1aXJlKCdhbmd1bGFyJyk7XG5cbiAgcmVxdWlyZSgnYW5ndWxhci11aS1ib290c3RyYXAnKTtcbiAgcmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbi8vYXBwIGVudHJ5IHBvaW50XG5yZXF1aXJlKCcuL2FwcCcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2Zvby9ob21lLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImJpZy1zZWN0aW9uXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcblx0PGltZyBzcmM9XFxcImFzc2V0cy9pbWFnZXMvZ2VudGxlbWVuLnBuZ1xcXCIgaGVpZ2h0PVxcXCIyNTBcXFwiIGNsYXNzPVxcXCJoaWRkZW4teHNcXFwiPlxcblx0PGltZyBzcmM9XFxcImFzc2V0cy9pbWFnZXMvZ2VudGxlbWVuLnBuZ1xcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGNsYXNzPVxcXCJ2aXNpYmxlLXhzLWJsb2NrXFxcIj5cXG5cdDxoMT5UaGUgWnVsdWFwcDwvaDE+XFxuXHQ8aDI+R2VudGxlbWVuXFwncyBiZXN0IHRpbWUga2lsbGVyPC9oMj5cXG5cdDxidXR0b24gY2xhc3M9XFxcInJvdW5kZWQtYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwibmF2aWdhdGVUb1JhdGUoKVxcXCI+U3RhcnQgbm93PC9idXR0b24+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2Zvby9sYXlvdXQuaHRtbFwiLFwiPGRpdiBpZD1cXFwic3RhdHNcXFwiIGNsYXNzPVxcXCJiaWctc2VjdGlvblxcXCIgbmctc2hvdz1cXFwiY3VycmVudFN0YXRzLnZpc2libGVcXFwiPlxcblx0PGRpdiBjbGFzcz1cXFwiYXZlcmFnZS10aXRsZVxcXCIgPkxhc3Qge3tOVU1CRVJfSU5fQ1VSUkVOVF9TVEFUU319IGF2ZXJhZ2UgaXM8L2Rpdj5cXG5cdDxkaXYgY2xhc3M9XFxcImF2ZXJhZ2VcXFwiPnt7Y3VycmVudFN0YXRzLmF2ZXJhZ2V9fTwvZGl2Plxcblx0PGJ1dHRvbiBjbGFzcz1cXFwicm91bmRlZC1idXR0b25cXFwiIG5nLWNsaWNrPVxcXCJjb250aW51ZSgpXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcbjwvZGl2PlxcbjxkaXYgaWQ9XFxcInByb2Zlc3Npb25hbFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBuZy1oaWRlPVxcXCJjdXJyZW50U3RhdHMudmlzaWJsZSB8fCAhY3VycmVudFJhdGVkUHJvZmVzc2lvbmFsXFxcIj5cXG5cdDxpbWcgY2xhc3M9XFxcImltZy1jaXJjbGVcXFwiIG5nLXNyYz1cXFwie3tjdXJyZW50UmF0ZWRQcm9mZXNzaW9uYWwucGljdHVyZVVybH19XFxcIj5cXG5cdDxoMT57e2N1cnJlbnRSYXRlZFByb2Zlc3Npb25hbC5uYW1lfX08L2gxPlxcblx0PHAgY2xhc3M9XFxcInByb2Zlc3Npb25cXFwiPnt7Y3VycmVudFJhdGVkUHJvZmVzc2lvbmFsLnByb2Zlc3Npb259fTwvcD5cXG5cdDxkaXYgY2xhc3M9XFxcInJvdyB0ZXh0LWNlbnRlciByYXRpbmctYm94XFxcIj5cXG5cdFx0PGg0PldoYXRcXCdzIGhlciBnZW50bGVtYW4gcmF0ZSA/PC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zXFxcIj5cXG5cdFx0XHQ8aW1nIHNyYz1cXFwiYXNzZXRzL2ltYWdlcy9ib3JlZC5zdmdcXFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCB2aXNpYmxlLXhzLWlubGluZS1ibG9jayB2aXNpYmxlLXNtLWlubGluZS1ibG9ja1xcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPlxcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFxcXCIgbmctcmVwZWF0PVxcXCJyYXRpbmcgaW4gWzEsMiwzLDQsNV1cXFwiIG5nLWNsaWNrPVxcXCJyYXRlKHJhdGluZywgJGV2ZW50KVxcXCI+Jm5ic3A7e3tyYXRpbmd9fSZuYnNwOzwvYnV0dG9uPlxcblx0XHRcdDwvZGl2Plxcblx0XHRcdDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBoaWRkZW4tc20gaGlkZGVuLXhzXFxcIiByb2xlPVxcXCJncm91cFxcXCI+XFxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1kZWZhdWx0XFxcIiBuZy1yZXBlYXQ9XFxcInJhdGluZyBpbiBbMSwyLDMsNCw1XVxcXCIgbmctY2xpY2s9XFxcInJhdGUocmF0aW5nLCAkZXZlbnQpXFxcIj4mbmJzcDt7e3JhdGluZ319Jm5ic3A7PC9idXR0b24+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdFx0PGltZyBzcmM9XFxcImFzc2V0cy9pbWFnZXMvZXhjaXRlZC5zdmdcXFwiPlxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcbjwvZGl2PlxcblwiKTt9XSk7Il19
