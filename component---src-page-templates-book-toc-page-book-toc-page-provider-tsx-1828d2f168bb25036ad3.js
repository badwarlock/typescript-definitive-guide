(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"19Yi":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o=n("q1tI"),r=Object(o.createContext)(null),a=function(){return Object(o.useContext)(r)}},"3Ynt":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("hGi/"),r=n("q1tI"),a=n.n(r),c=n("aSAQ"),i=(n("TSYQ"),n("9Aqu")),l=(n("Wbzz"),n("eW31")),s=n("KwDJ"),u=Object(l.a)((function(e){return Object(o.a)(e),a.a.createElement(c.a,null,a.a.createElement(s.a,null),a.a.createElement(i.a,null))}))},"8qo5":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),r=n.n(o),a=function(e){var t=e.children;return r.a.createElement("div",{className:"content__control-bar"},t)}},DEsH:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),r=n.n(o),a=function(e){var t=e.controlBar,n=e.content;return r.a.createElement("div",{className:"content-layout"},r.a.createElement("div",{className:"content-layout__control-bar"},t),r.a.createElement("div",{className:"content-layout__content"},n))}},H2Hk:function(e,t,n){},T1DM:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("mrSG"),r=function(e){function t(t,n){var o=e.call(this,t,n)||this;return o.scheduler=t,o.work=n,o.pending=!1,o}return o.a(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(o,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,o=void 0;try{this.work(e)}catch(r){n=!0,o=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),o},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,o=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&n.splice(o,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return o.a(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(n("pugT").a)),a=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),c=new(function(e){function t(n,o){void 0===o&&(o=a.now);var r=e.call(this,n,(function(){return t.delegate&&t.delegate!==r?t.delegate.now():o()}))||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return o.a(t,e),t.prototype.schedule=function(n,o,r){return void 0===o&&(o=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,o,r):e.prototype.schedule.call(this,n,o,r)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(a))(r)},pVqq:function(e,t,n){"use strict";n.r(t);var o,r,a,c=n("zLVn"),i=n("q1tI"),l=n.n(i),s=n("hGi/"),u=(n("H2Hk"),n("T3EJ")),p=n("eW31"),d=n("bnLi"),m=n("Z+f3"),f=n("TSYQ"),h=n.n(f);!function(e){e.Common="Общее",e.TypingIntroduction="Экскурс в типизацию",e.SyntacticConstruction="Синтаксические конструкции",e.Types="Типы",e.TypescriptFeatures="Тонкости TypeScript",e.WorkingWithTypes="Работа с типами",e.Typing="Типизация",e.ExtendedTypes="Расширенные типы",e.React="React",e.Assembly="Сборка",e.Compiler="Компилятор",e.Classes="Классы",e.All="all"}(o||(o={})),function(e){e.Common="common",e.TypingIntroduction="typingIntroduction",e.SyntacticConstruction="syntacticConstruction",e.Types="types",e.TypescriptFeatures="typescriptFeatures",e.WorkingWithTypes="workingWithTypes",e.Typing="typing",e.ExtendedTypes="extendedTypes",e.React="react",e.Assembly="assembly",e.Compiler="compiler",e.Classes="classes",e.All="all"}(r||(r={})),function(e){e.Common="common",e.TypingIntroduction="typing-introduction",e.SyntacticConstruction="syntactic-construction",e.Types="types",e.TypescriptFeatures="typescript-features",e.WorkingWithTypes="working-with-types",e.Typing="typing",e.ExtendedTypes="extended-types",e.React="react",e.Assembly="assembly",e.Compiler="compiler",e.Classes="classes",e.All=""}(a||(a={}));var b=new Map([[o.Common,r.Common],[o.TypingIntroduction,r.TypingIntroduction],[o.SyntacticConstruction,r.SyntacticConstruction],[o.Types,r.Types],[o.TypescriptFeatures,r.TypescriptFeatures],[o.WorkingWithTypes,r.WorkingWithTypes],[o.Typing,r.Typing],[o.ExtendedTypes,r.ExtendedTypes],[o.React,r.React],[o.Assembly,r.Assembly],[o.Compiler,r.Compiler],[o.Classes,r.Classes],[o.All,r.All]]),v=new Map([[r.Common,a.Common],[r.TypingIntroduction,a.TypingIntroduction],[r.SyntacticConstruction,a.SyntacticConstruction],[r.Types,a.Types],[r.TypescriptFeatures,a.TypescriptFeatures],[r.WorkingWithTypes,a.WorkingWithTypes],[r.Typing,a.Typing],[r.ExtendedTypes,a.ExtendedTypes],[r.React,a.React],[r.Assembly,a.Assembly],[r.Compiler,a.Compiler],[r.Classes,a.Classes],[r.All,a.All]]),y=function(e,t){void 0===t&&(t="ru");var n=b.get(e);if(!n)throw new Error('Unknown section name "'+e+'".');var o=v.get(n);if(void 0===o)throw new Error('Class for section name "'+e+'" not exists.');return function(e){return"book-toc__section-color_bg-color_"+e}(o)},_=n("bZSS"),E=n("Qi+0"),C=n("S8kh"),g=n("ql8V"),T=n("vuIU"),k=n("2vnA"),w=function(){function e(t){this.showTocWithSectionName=e.BOOK_TOC_SECTION_NAME_ALL,this.tree=t,this.sectionMatchCount=e.getNumSection(this.tree)}Object(T.a)(e,[{key:"isAllSection",get:function(){return this.showTocWithSectionName===e.BOOK_TOC_SECTION_NAME_ALL}},{key:"treeFiltered",get:function(){var e=this;return this.isAllSection?this.tree:this.tree.filter((function(t){return t.data.section===e.showTocWithSectionName}))}}]);var t=e.prototype;return t.hideBySectionName=function(e){this.showTocWithSectionName=e},t.showAll=function(){this.showTocWithSectionName=""},t.getSectionMatchCount=function(e){var t;return null!==(t=this.sectionMatchCount.get(e))&&void 0!==t?t:0},e}();w.BOOK_TOC_SECTION_NAME_ALL="",w.getNumSection=function(e){return e.reduce((function(e,t){var n,o=t.data.section,r=e.has(o)?(null!==(n=e.get(o))&&void 0!==n?n:0)+1:1;return e.set(o,r),e}),new Map)},Object(k.d)(w,{isAllSection:k.c,treeFiltered:k.c,showTocWithSectionName:k.f});var N=function(){function e(){}return e.getInstance=function(t){return e.instance||(e.instance=e.create(t)),e.instance},e}();N.create=function(e){var t=e.bookTocTree,n=e.location,o=C.a.create({location:n}),r=new _.a(_.b.Close),a=new g.a(t,!1);return{router:o,tocFilterStore:r,bookTocCollapseStore:a,bookTocSectionStore:new w(a.tree),behaviorNotificationStore:Object(E.c)()}};var S=Object(i.createContext)(null),O=function(){return Object(i.useContext)(S)},x=Object(p.a)((function(){var e=Object(d.b)()[0].lang,t=O().bookTocSectionStore,n=t.treeFiltered[t.treeFiltered.length-1].data.section,o=h()("bt-tree_close-decor",y(n,e));return l.a.createElement("div",{className:o})})),j=function(e){var t=e.children;return l.a.createElement("div",{className:"toc-menu__section"},t)},A=function(e){var t=e.sectionName,n=Object(d.b)()[0].lang,o=h()("toc-menu__section-label",y(t,n));return l.a.createElement("div",{className:o},l.a.createElement("span",null,t))},I=function(e){var t=e.sectionName,n=e.children,o=Object(d.b)()[0].lang,r=h()("toc-menu__section-content",function(e,t){void 0===t&&(t="ru");var n=b.get(e);if(!n)throw new Error('Unknown section name "'+e+'".');var o=v.get(n);if(void 0===o)throw new Error('Class for section name "'+e+'" not exists.');return function(e){return"book-toc__section-color_border-color_"+e}(o)}(t,o));return l.a.createElement("div",{className:r},n)},B=Object(i.createContext)({id:"",isCollapse:!1,toggle:function(){}}),W=function(){return Object(i.useContext)(B)},F=Object(p.a)((function(e){var t=e.id,n=(e.isCollapse,e.children),o=O().bookTocCollapseStore,r=o.getNodeById(t);if(!r)throw new Error('CollapseNode with id "'+t+'" not found.');return l.a.createElement(B.Provider,{value:{id:t,isCollapse:r.isCollapse,toggle:function(){return o.toggleById(t)}}},l.a.createElement("div",{className:"collapse","is-collapse":r.isCollapse?"true":"false"},n))}));(function(){function e(){}return e.registerGroup=function(t){e.map.set(t.id,t)},e.unregisterGroup=function(t){e.map.delete(t.id)},e.getCollapseGroup=function(t){return e.map.get(t)},e}()).map=new Map;var M=Object(i.createContext)({id:"",isCollapse:!1,toggle:function(){}}),P=Object(p.a)((function(e){var t=e.children,n=function(e){return e?"true":"false"},o=W(),r=Object(i.useContext)(M),a=Object(i.useState)(n(o.isCollapse)),c=a[0],s=a[1];return Object(i.useEffect)((function(){s(n(o.isCollapse))}),[o.isCollapse]),Object(i.useEffect)((function(){o.isCollapse=r.isCollapse}),[r.isCollapse]),l.a.createElement("div",{className:"collapse__collapsed","is-collapse":c},t)})),G=function(e){var t=e.level,n=e.children,o=h()("tree","tree-level_"+t);return l.a.createElement("div",{className:o},n)},L=function(e){var t=e.children;return l.a.createElement("div",{className:"toc-menu__item"},t)},q=function(e){var t=e.index;return l.a.createElement("span",{className:"toc-menu-item__index"},t)},z=n("crWK"),R=n("Wbzz"),K=n("KraK"),V=n("ouma"),Y=n("4KgZ"),D=function(e){var t=e.onClick,n=Object(d.b)(m.a.BookChaptersPageGui)[0];return l.a.createElement(K.a,{className:"toc-control__copy-to-buffer-button toc-menu__control_button_offset-for-center",size:K.b.SM,onClick:t},l.a.createElement(V.p,{className:"copy-to-buffer-button__svg-icon"}),l.a.createElement(Y.a,{position:Y.b.BottomCenter},n.tocItem.copyLinkToBufferButton.tooltip))},H=function(e){var t,n=e.isToggle,o=e.className,r=e.children,a=h()("rotate-container",o,((t={})["rotate-container_rotate_180deg"]=n,t));return l.a.createElement("div",{className:a},r)},$=n("MM21"),J=function(e){var t=e.isCollapse,n=e.onClick,o=Object(d.b)(m.a.BookChaptersPageGui)[0];return l.a.createElement(K.a,{className:"toc-control__collapse-button toc-control__button_offset-for-center",size:K.b.SM,onClick:n},l.a.createElement(H,{isToggle:!t},l.a.createElement(V.c,{className:"collapse-button__svg-icon"})),l.a.createElement(Y.a,{position:Y.b.BottomCenter},l.a.createElement($.a,{condition:t},o.tocItem.collapseTocButton.tooltip.openState),l.a.createElement($.a,{condition:!t},o.tocItem.collapseTocButton.tooltip.closeState)))},Q=Object(p.a)((function(e){Object(s.a)(e);var t=W();return l.a.createElement(J,{isCollapse:t.isCollapse,onClick:t.toggle})})),U=function(){function e(){}return e.create=function(t,n){var o;return void 0===n&&(n=!1),null!==(o=e.map.get(t))&&void 0!==o?o:e.map.set(t,new Z(t,n)).get(t)},e.destroy=function(t){return e.map.delete(t)},e.getCollapseById=function(t){return e.map.get(t)},e}();U.map=new Map;var Z=function(e,t){var n=this;void 0===t&&(t=!1),this.toggle=function(){n.isCollapse=!n.isCollapse},this.id=e,this.isCollapse=t};Object(k.d)(Z,{isCollapse:k.f,toggle:k.b});var X=function(e){var t=e.id,n=e.isCollapse,o=e.children;return l.a.createElement(M.Provider,{value:U.create(t,n)},o)},ee=Object(p.a)((function(e){Object(s.a)(e);Object(d.b)(m.a.BookChaptersPageGui)[0];var t=O(),n=t.bookTocCollapseStore,o=t.bookTocSectionStore;function r(e){return e[e.length-1]}var a=o.treeFiltered.reduce((function(e,t){return 0!==e.length&&function(e,t){return r(e).section===t.data.section}(e,t)?r(e).items.push(t):e.push({section:t.data.section,items:[t]}),e}),[]).map((function(e,t){var o=e.section+"_"+t,r=e.items.map((function(e){var t=n.getNodeById(e.id);if(!t)throw new Error('Book tree node with id "'+e.id+'" not found.');var o=t.index,r=t.data,a=r.title,c=r.path,i=r.subtitles,s=l.a.createElement(L,null,l.a.createElement("div",{className:"toc-menu__section_left"},l.a.createElement(q,{index:o.toString()})),l.a.createElement("div",{className:"toc-menu__section_center"},l.a.createElement(R.Link,{className:"toc-menu-item__gatsby-link",to:z.a.toRelativePath(c)},a)),l.a.createElement("div",{className:"toc-menu__section_right"},l.a.createElement("div",{className:"toc-menu-item__control"},l.a.createElement(D,{onClick:function(){}}),l.a.createElement(Q,null)))),u=i.map((function(e,t){var n=e.path,r=e.subtitle;return l.a.createElement(L,{key:o+"."+t},l.a.createElement("div",{className:"toc-menu__section_left"},l.a.createElement(q,{index:o.toString()+"."+t})),l.a.createElement("div",{className:"toc-menu__section_center"},l.a.createElement(R.Link,{className:"toc-menu-item__gatsby-link",to:z.a.toRelativePath(n)},r)),l.a.createElement("div",{className:"toc-menu__section_right"},l.a.createElement("div",{className:"toc-menu-item__control"},l.a.createElement(D,{onClick:function(){}}))))}));return l.a.createElement(F,{key:o,id:o.toString()},l.a.createElement(G,{level:0},s),l.a.createElement(P,null,l.a.createElement(G,{level:1},u)))}));return l.a.createElement(j,{key:o},l.a.createElement(A,{sectionName:e.section}),l.a.createElement(I,{sectionName:e.section},r))}));return l.a.createElement("main",{className:"content content-without-control book-toc-content-layout__toc",filter:o.showTocWithSectionName},l.a.createElement(X,{id:"book-toc",isCollapse:!1},a),l.a.createElement(x,null))})),te=n("DEsH"),ne=Object(p.a)((function(e){var t=e.className,n=(e.collapseGroupId,Object(d.b)(m.a.BookChaptersPageGui)[0]),o=O().bookTocCollapseStore,r=h()("toc-collapse-all-button",t);return l.a.createElement(K.a,{className:r,size:K.b.SM,onClick:function(){return o.collapseAll()}},l.a.createElement(H,{isToggle:!o.isCollapseAll},l.a.createElement(V.c,null)),l.a.createElement(Y.a,{position:Y.b.BottomCenter},l.a.createElement($.a,{condition:o.isCollapseAll},n.secondaryContentBar.tocCollapseAllButton.tooltip.openState),l.a.createElement($.a,{condition:!o.isCollapseAll},n.secondaryContentBar.tocCollapseAllButton.tooltip.closeState)))})),oe=n("kmFt"),re=n("Va/Y"),ae=n("OaiF"),ce=function(e){var t=e.section,n=e.sectionMatchCount,o=e.className,r=e.children,a=e.onClick,c=Object(d.b)()[0].lang,i=h()("book-toc__tag",o,y(t,c));return l.a.createElement("div",{className:i,onClick:a},l.a.createElement("div",{className:"book-toc__section-match-count"},n),l.a.createElement("div",{className:"book-toc__tag-label"},l.a.createElement("span",null,r)))},ie=n("K9Ia"),le=n("T1DM"),se=n("mrSG"),ue=n("FFOo"),pe=n("6blF"),de=n("DKTb");function me(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var fe=me(),he=n("xTla");var be=n("McSo"),ve=function(e){if(e&&"function"==typeof e[he.a])return a=e,function(e){var t=a[he.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if((r=e)&&"number"==typeof r.length&&"function"!=typeof r)return o=e,function(e){for(var t=0,n=o.length;t<n&&!e.closed;t++)e.next(o[t]);e.complete()};if(function(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,de.a),e};if(e&&"function"==typeof e[fe])return t=e,function(e){for(var n=t[fe]();;){var o=void 0;try{o=n.next()}catch(r){return e.error(r),e}if(o.done){e.complete();break}if(e.next(o.value),e.closed)break}return"function"==typeof n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,o,r,a,c=Object(be.a)(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+c+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")},ye=function(e){function t(t){var n=e.call(this)||this;return n.parent=t,n}return se.a(t,e),t.prototype._next=function(e){this.parent.notifyNext(e)},t.prototype._error=function(e){this.parent.notifyError(e),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},t}(ue.a),_e=(ue.a,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return se.a(t,e),t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.destination.complete()},t}(ue.a));ue.a;var Ee=function(){function e(e){this.durationSelector=e}return e.prototype.call=function(e,t){return t.subscribe(new Ce(e,this.durationSelector))},e}(),Ce=function(e){function t(t,n){var o=e.call(this,t)||this;return o.durationSelector=n,o.hasValue=!1,o}return se.a(t,e),t.prototype._next=function(e){if(this.value=e,this.hasValue=!0,!this.throttled){var t=void 0;try{t=(0,this.durationSelector)(e)}catch(o){return this.destination.error(o)}var n=function(e,t){if(!t.closed)return e instanceof pe.a?e.subscribe(t):ve(e)(t)}(t,new ye(this));!n||n.closed?this.clearThrottle():this.add(this.throttled=n)}},t.prototype.clearThrottle=function(){var e=this.value,t=this.hasValue,n=this.throttled;n&&(this.remove(n),this.throttled=void 0,n.unsubscribe()),t&&(this.value=void 0,this.hasValue=!1,this.destination.next(e))},t.prototype.notifyNext=function(){this.clearThrottle()},t.prototype.notifyComplete=function(){this.clearThrottle()},t}(_e),ge=n("isby");function Te(e){return!Object(ge.a)(e)&&e-parseFloat(e)+1>=0}function ke(e){return e&&"function"==typeof e.schedule}function we(e){var t=e.index,n=e.period,o=e.subscriber;if(o.next(t),!o.closed){if(-1===n)return o.complete();e.index=t+1,this.schedule(e,n)}}function Ne(e,t){return void 0===t&&(t=le.a),n=function(){return function(e,t,n){void 0===e&&(e=0);var o=-1;return Te(t)?o=Number(t)<1?1:Number(t):ke(t)&&(n=t),ke(n)||(n=le.a),new pe.a((function(t){var r=Te(e)?e:+e-n.now();return n.schedule(we,r,{index:0,period:o,subscriber:t})}))}(e,t)},function(e){return e.lift(new Ee(n))};var n}function Se(){}var Oe=n("2Bdj");var xe=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new je(e,this.nextOrObserver,this.error,this.complete))},e}(),je=function(e){function t(t,n,o,r){var a=e.call(this,t)||this;return a._tapNext=Se,a._tapError=Se,a._tapComplete=Se,a._tapError=o||Se,a._tapComplete=r||Se,Object(Oe.a)(n)?(a._context=a,a._tapNext=n):n&&(a._context=n,a._tapNext=n.next||Se,a._tapError=n.error||Se,a._tapComplete=n.complete||Se),a}return se.a(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(ue.a),Ae=function(e){Object(s.a)(e);var t=Object(d.b)(m.a.BookChaptersPageGui)[0],n=O(),o=(n.bookTocCollapseStore,n.bookTocSectionStore),r=n.tocFilterStore,a=Object(i.useRef)({bookTocTree$:null,filterSection:null});Object(i.useEffect)((function(){var e,t,n;a.current.bookTocTree$=new ie.a,a.current.filterSection=a.current.bookTocTree$.pipe(Ne(400),(e=function(e){window.scrollTo(window.scrollX,0),r.close(),""===e?o.showAll():o.hideBySectionName(e)},function(o){return o.lift(new xe(e,t,n))}));var c=a.current.filterSection.subscribe();return function(){c.unsubscribe()}}),[]);var c=o.tree.reduce((function(e,t){return e.add(t.data.section)}),new Set),u=Array.from(c).sort((function(e,t){return e.charCodeAt(0)-t.charCodeAt(0)})).map((function(e,t){return l.a.createElement(ce,{key:t,section:e,sectionMatchCount:o.getSectionMatchCount(e),onClick:function(){return function(e){var t;return null===(t=a.current.bookTocTree$)||void 0===t?void 0:t.next(e)}(e)}},e)}));return l.a.createElement("div",{className:"book-toc__tag-bar"},l.a.createElement("div",{className:"book-toc__tag book-toc__tag_clear-filter",onClick:function(){var e;return null===(e=a.current.bookTocTree$)||void 0===e?void 0:e.next("")}},t.asideLayout.tagBar.cleanFilterButton),u)},Ie=function(){var e=Object(d.b)(m.a.BookChaptersPageGui)[0];return l.a.createElement(oe.a,{className:"bt-filter-dropdown filter-dropdown"},l.a.createElement(re.a,null,l.a.createElement(K.a,{size:K.b.SM},l.a.createElement(V.m,null),l.a.createElement(Y.a,{position:Y.b.BottomCenter},e.secondaryContentBar.tocFilterButton.tooltip))),l.a.createElement(ae.a,{className:"bt-filter-dropdown__menu filter-dropdown__menu content__control-bar-dropdown-item",openClassName:"filter-dropdown__menu_open-state",closeClassName:"filter-dropdown__menu_close-state"},l.a.createElement("div",{className:"bt-filter-dropdown__card card"},l.a.createElement("header",{className:"card__header"},l.a.createElement("span",{className:"card-header__title"},"Фильтр разделов")),l.a.createElement("div",{className:"card__content"},l.a.createElement("div",{className:"scroll-wrapper"},l.a.createElement(Ae,null))))))},Be=n("8qo5"),We=function(){var e=Object(d.b)(m.a.BookChaptersPageGui)[0];return l.a.createElement(Be.a,null,l.a.createElement("div",{className:"book-toc-control-bar-layer"},l.a.createElement("span",{className:"book-toc-control-bar-layer__label"},e.secondaryContentBar.label),l.a.createElement("div",{className:"book-toc-control-bar-layer__control"},l.a.createElement("div",{className:"book-toc-control-bar-layer__control-item"},l.a.createElement(Ie,null)),l.a.createElement("div",{className:"book-toc-control-bar-layer__control-item"},l.a.createElement(ne,{className:"book-toc-control__item",collapseGroupId:"book-toc"})))))},Fe=n("3Ynt"),Me=function(e){return Object(s.a)(e),l.a.createElement(u.a,{driver:l.a.createElement(Fe.a,null),content:l.a.createElement(te.a,{controlBar:l.a.createElement(We,null),content:l.a.createElement(ee,null)})})},Pe=n("H8eV"),Ge=n("73Uz"),Le=n("19Yi");t.default=function(e){var t=e.pageContext,n=e.location,o=t.bookTocTree,r=t.localization,a=(r.pages,Object(c.a)(r,["pages"])),s=N.getInstance({bookTocTree:o,location:n}),u=s.router;return Object(i.useLayoutEffect)((function(){u.setLocation(n)}),[]),l.a.createElement(S.Provider,{value:s},l.a.createElement(Le.a.Provider,{value:s.behaviorNotificationStore},l.a.createElement(d.a.Provider,{value:r},l.a.createElement(C.b.Provider,{value:s.router},l.a.createElement(Ge.a,null,l.a.createElement(Pe.a,Object.assign({},a)),l.a.createElement(Me,null))))))}}}]);
//# sourceMappingURL=component---src-page-templates-book-toc-page-book-toc-page-provider-tsx-1828d2f168bb25036ad3.js.map