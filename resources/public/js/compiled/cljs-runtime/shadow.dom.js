goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21103 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21103(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21104 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21104(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19890 = coll;
var G__19891 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19890,G__19891) : shadow.dom.lazy_native_coll_seq.call(null,G__19890,G__19891));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19918 = arguments.length;
switch (G__19918) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19931 = arguments.length;
switch (G__19931) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19940 = arguments.length;
switch (G__19940) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19950 = arguments.length;
switch (G__19950) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19970 = arguments.length;
switch (G__19970) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__20000 = arguments.length;
switch (G__20000) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e20021){if((e20021 instanceof Object)){
var e = e20021;
return console.log("didnt support attachEvent",el,e);
} else {
throw e20021;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__20044 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20045 = null;
var count__20046 = (0);
var i__20047 = (0);
while(true){
if((i__20047 < count__20046)){
var el = chunk__20045.cljs$core$IIndexed$_nth$arity$2(null,i__20047);
var handler_21139__$1 = ((function (seq__20044,chunk__20045,count__20046,i__20047,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20044,chunk__20045,count__20046,i__20047,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21139__$1);


var G__21149 = seq__20044;
var G__21150 = chunk__20045;
var G__21151 = count__20046;
var G__21152 = (i__20047 + (1));
seq__20044 = G__21149;
chunk__20045 = G__21150;
count__20046 = G__21151;
i__20047 = G__21152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20044);
if(temp__5804__auto__){
var seq__20044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20044__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20044__$1);
var G__21153 = cljs.core.chunk_rest(seq__20044__$1);
var G__21154 = c__5568__auto__;
var G__21155 = cljs.core.count(c__5568__auto__);
var G__21156 = (0);
seq__20044 = G__21153;
chunk__20045 = G__21154;
count__20046 = G__21155;
i__20047 = G__21156;
continue;
} else {
var el = cljs.core.first(seq__20044__$1);
var handler_21157__$1 = ((function (seq__20044,chunk__20045,count__20046,i__20047,el,seq__20044__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20044,chunk__20045,count__20046,i__20047,el,seq__20044__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21157__$1);


var G__21158 = cljs.core.next(seq__20044__$1);
var G__21159 = null;
var G__21160 = (0);
var G__21161 = (0);
seq__20044 = G__21158;
chunk__20045 = G__21159;
count__20046 = G__21160;
i__20047 = G__21161;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__20090 = arguments.length;
switch (G__20090) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__20118 = cljs.core.seq(events);
var chunk__20119 = null;
var count__20120 = (0);
var i__20121 = (0);
while(true){
if((i__20121 < count__20120)){
var vec__20143 = chunk__20119.cljs$core$IIndexed$_nth$arity$2(null,i__20121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20143,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21184 = seq__20118;
var G__21185 = chunk__20119;
var G__21186 = count__20120;
var G__21187 = (i__20121 + (1));
seq__20118 = G__21184;
chunk__20119 = G__21185;
count__20120 = G__21186;
i__20121 = G__21187;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20118);
if(temp__5804__auto__){
var seq__20118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20118__$1);
var G__21188 = cljs.core.chunk_rest(seq__20118__$1);
var G__21189 = c__5568__auto__;
var G__21190 = cljs.core.count(c__5568__auto__);
var G__21191 = (0);
seq__20118 = G__21188;
chunk__20119 = G__21189;
count__20120 = G__21190;
i__20121 = G__21191;
continue;
} else {
var vec__20151 = cljs.core.first(seq__20118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20151,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21201 = cljs.core.next(seq__20118__$1);
var G__21202 = null;
var G__21203 = (0);
var G__21204 = (0);
seq__20118 = G__21201;
chunk__20119 = G__21202;
count__20120 = G__21203;
i__20121 = G__21204;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20160 = cljs.core.seq(styles);
var chunk__20161 = null;
var count__20162 = (0);
var i__20163 = (0);
while(true){
if((i__20163 < count__20162)){
var vec__20176 = chunk__20161.cljs$core$IIndexed$_nth$arity$2(null,i__20163);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20176,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21220 = seq__20160;
var G__21221 = chunk__20161;
var G__21222 = count__20162;
var G__21223 = (i__20163 + (1));
seq__20160 = G__21220;
chunk__20161 = G__21221;
count__20162 = G__21222;
i__20163 = G__21223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20160);
if(temp__5804__auto__){
var seq__20160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20160__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20160__$1);
var G__21224 = cljs.core.chunk_rest(seq__20160__$1);
var G__21225 = c__5568__auto__;
var G__21226 = cljs.core.count(c__5568__auto__);
var G__21227 = (0);
seq__20160 = G__21224;
chunk__20161 = G__21225;
count__20162 = G__21226;
i__20163 = G__21227;
continue;
} else {
var vec__20193 = cljs.core.first(seq__20160__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20193,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21232 = cljs.core.next(seq__20160__$1);
var G__21233 = null;
var G__21234 = (0);
var G__21235 = (0);
seq__20160 = G__21232;
chunk__20161 = G__21233;
count__20162 = G__21234;
i__20163 = G__21235;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20215_21239 = key;
var G__20215_21240__$1 = (((G__20215_21239 instanceof cljs.core.Keyword))?G__20215_21239.fqn:null);
switch (G__20215_21240__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21258 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21258,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21258,"aria-");
}
})())){
el.setAttribute(ks_21258,value);
} else {
(el[ks_21258] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20278){
var map__20280 = p__20278;
var map__20280__$1 = cljs.core.__destructure_map(map__20280);
var props = map__20280__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20280__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20285 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20290 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20290,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20290;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20296 = arguments.length;
switch (G__20296) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20306){
var vec__20309 = p__20306;
var seq__20310 = cljs.core.seq(vec__20309);
var first__20311 = cljs.core.first(seq__20310);
var seq__20310__$1 = cljs.core.next(seq__20310);
var nn = first__20311;
var first__20311__$1 = cljs.core.first(seq__20310__$1);
var seq__20310__$2 = cljs.core.next(seq__20310__$1);
var np = first__20311__$1;
var nc = seq__20310__$2;
var node = vec__20309;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20314 = nn;
var G__20315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20314,G__20315) : create_fn.call(null,G__20314,G__20315));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20316 = nn;
var G__20317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20316,G__20317) : create_fn.call(null,G__20316,G__20317));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20318 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(1),null);
var seq__20321_21300 = cljs.core.seq(node_children);
var chunk__20322_21301 = null;
var count__20323_21302 = (0);
var i__20324_21303 = (0);
while(true){
if((i__20324_21303 < count__20323_21302)){
var child_struct_21305 = chunk__20322_21301.cljs$core$IIndexed$_nth$arity$2(null,i__20324_21303);
var children_21306 = shadow.dom.dom_node(child_struct_21305);
if(cljs.core.seq_QMARK_(children_21306)){
var seq__20390_21310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21306));
var chunk__20392_21311 = null;
var count__20393_21312 = (0);
var i__20394_21313 = (0);
while(true){
if((i__20394_21313 < count__20393_21312)){
var child_21314 = chunk__20392_21311.cljs$core$IIndexed$_nth$arity$2(null,i__20394_21313);
if(cljs.core.truth_(child_21314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21314);


var G__21315 = seq__20390_21310;
var G__21316 = chunk__20392_21311;
var G__21317 = count__20393_21312;
var G__21318 = (i__20394_21313 + (1));
seq__20390_21310 = G__21315;
chunk__20392_21311 = G__21316;
count__20393_21312 = G__21317;
i__20394_21313 = G__21318;
continue;
} else {
var G__21319 = seq__20390_21310;
var G__21320 = chunk__20392_21311;
var G__21321 = count__20393_21312;
var G__21322 = (i__20394_21313 + (1));
seq__20390_21310 = G__21319;
chunk__20392_21311 = G__21320;
count__20393_21312 = G__21321;
i__20394_21313 = G__21322;
continue;
}
} else {
var temp__5804__auto___21324 = cljs.core.seq(seq__20390_21310);
if(temp__5804__auto___21324){
var seq__20390_21326__$1 = temp__5804__auto___21324;
if(cljs.core.chunked_seq_QMARK_(seq__20390_21326__$1)){
var c__5568__auto___21327 = cljs.core.chunk_first(seq__20390_21326__$1);
var G__21328 = cljs.core.chunk_rest(seq__20390_21326__$1);
var G__21329 = c__5568__auto___21327;
var G__21330 = cljs.core.count(c__5568__auto___21327);
var G__21331 = (0);
seq__20390_21310 = G__21328;
chunk__20392_21311 = G__21329;
count__20393_21312 = G__21330;
i__20394_21313 = G__21331;
continue;
} else {
var child_21332 = cljs.core.first(seq__20390_21326__$1);
if(cljs.core.truth_(child_21332)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21332);


var G__21334 = cljs.core.next(seq__20390_21326__$1);
var G__21335 = null;
var G__21336 = (0);
var G__21337 = (0);
seq__20390_21310 = G__21334;
chunk__20392_21311 = G__21335;
count__20393_21312 = G__21336;
i__20394_21313 = G__21337;
continue;
} else {
var G__21339 = cljs.core.next(seq__20390_21326__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__20390_21310 = G__21339;
chunk__20392_21311 = G__21340;
count__20393_21312 = G__21341;
i__20394_21313 = G__21342;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21306);
}


var G__21345 = seq__20321_21300;
var G__21346 = chunk__20322_21301;
var G__21347 = count__20323_21302;
var G__21348 = (i__20324_21303 + (1));
seq__20321_21300 = G__21345;
chunk__20322_21301 = G__21346;
count__20323_21302 = G__21347;
i__20324_21303 = G__21348;
continue;
} else {
var temp__5804__auto___21350 = cljs.core.seq(seq__20321_21300);
if(temp__5804__auto___21350){
var seq__20321_21351__$1 = temp__5804__auto___21350;
if(cljs.core.chunked_seq_QMARK_(seq__20321_21351__$1)){
var c__5568__auto___21352 = cljs.core.chunk_first(seq__20321_21351__$1);
var G__21353 = cljs.core.chunk_rest(seq__20321_21351__$1);
var G__21354 = c__5568__auto___21352;
var G__21355 = cljs.core.count(c__5568__auto___21352);
var G__21356 = (0);
seq__20321_21300 = G__21353;
chunk__20322_21301 = G__21354;
count__20323_21302 = G__21355;
i__20324_21303 = G__21356;
continue;
} else {
var child_struct_21357 = cljs.core.first(seq__20321_21351__$1);
var children_21358 = shadow.dom.dom_node(child_struct_21357);
if(cljs.core.seq_QMARK_(children_21358)){
var seq__20408_21359 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21358));
var chunk__20410_21360 = null;
var count__20411_21361 = (0);
var i__20412_21362 = (0);
while(true){
if((i__20412_21362 < count__20411_21361)){
var child_21363 = chunk__20410_21360.cljs$core$IIndexed$_nth$arity$2(null,i__20412_21362);
if(cljs.core.truth_(child_21363)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21363);


var G__21364 = seq__20408_21359;
var G__21365 = chunk__20410_21360;
var G__21366 = count__20411_21361;
var G__21367 = (i__20412_21362 + (1));
seq__20408_21359 = G__21364;
chunk__20410_21360 = G__21365;
count__20411_21361 = G__21366;
i__20412_21362 = G__21367;
continue;
} else {
var G__21369 = seq__20408_21359;
var G__21370 = chunk__20410_21360;
var G__21371 = count__20411_21361;
var G__21372 = (i__20412_21362 + (1));
seq__20408_21359 = G__21369;
chunk__20410_21360 = G__21370;
count__20411_21361 = G__21371;
i__20412_21362 = G__21372;
continue;
}
} else {
var temp__5804__auto___21373__$1 = cljs.core.seq(seq__20408_21359);
if(temp__5804__auto___21373__$1){
var seq__20408_21374__$1 = temp__5804__auto___21373__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20408_21374__$1)){
var c__5568__auto___21375 = cljs.core.chunk_first(seq__20408_21374__$1);
var G__21376 = cljs.core.chunk_rest(seq__20408_21374__$1);
var G__21377 = c__5568__auto___21375;
var G__21378 = cljs.core.count(c__5568__auto___21375);
var G__21379 = (0);
seq__20408_21359 = G__21376;
chunk__20410_21360 = G__21377;
count__20411_21361 = G__21378;
i__20412_21362 = G__21379;
continue;
} else {
var child_21381 = cljs.core.first(seq__20408_21374__$1);
if(cljs.core.truth_(child_21381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21381);


var G__21384 = cljs.core.next(seq__20408_21374__$1);
var G__21385 = null;
var G__21386 = (0);
var G__21387 = (0);
seq__20408_21359 = G__21384;
chunk__20410_21360 = G__21385;
count__20411_21361 = G__21386;
i__20412_21362 = G__21387;
continue;
} else {
var G__21388 = cljs.core.next(seq__20408_21374__$1);
var G__21389 = null;
var G__21390 = (0);
var G__21391 = (0);
seq__20408_21359 = G__21388;
chunk__20410_21360 = G__21389;
count__20411_21361 = G__21390;
i__20412_21362 = G__21391;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21358);
}


var G__21392 = cljs.core.next(seq__20321_21351__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__20321_21300 = G__21392;
chunk__20322_21301 = G__21393;
count__20323_21302 = G__21394;
i__20324_21303 = G__21395;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20465 = cljs.core.seq(node);
var chunk__20466 = null;
var count__20467 = (0);
var i__20468 = (0);
while(true){
if((i__20468 < count__20467)){
var n = chunk__20466.cljs$core$IIndexed$_nth$arity$2(null,i__20468);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21400 = seq__20465;
var G__21401 = chunk__20466;
var G__21402 = count__20467;
var G__21403 = (i__20468 + (1));
seq__20465 = G__21400;
chunk__20466 = G__21401;
count__20467 = G__21402;
i__20468 = G__21403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20465);
if(temp__5804__auto__){
var seq__20465__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20465__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20465__$1);
var G__21404 = cljs.core.chunk_rest(seq__20465__$1);
var G__21405 = c__5568__auto__;
var G__21406 = cljs.core.count(c__5568__auto__);
var G__21407 = (0);
seq__20465 = G__21404;
chunk__20466 = G__21405;
count__20467 = G__21406;
i__20468 = G__21407;
continue;
} else {
var n = cljs.core.first(seq__20465__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21408 = cljs.core.next(seq__20465__$1);
var G__21409 = null;
var G__21410 = (0);
var G__21411 = (0);
seq__20465 = G__21408;
chunk__20466 = G__21409;
count__20467 = G__21410;
i__20468 = G__21411;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20488 = arguments.length;
switch (G__20488) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20495 = arguments.length;
switch (G__20495) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20544 = arguments.length;
switch (G__20544) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21455 = arguments.length;
var i__5770__auto___21456 = (0);
while(true){
if((i__5770__auto___21456 < len__5769__auto___21455)){
args__5775__auto__.push((arguments[i__5770__auto___21456]));

var G__21461 = (i__5770__auto___21456 + (1));
i__5770__auto___21456 = G__21461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20583_21462 = cljs.core.seq(nodes);
var chunk__20584_21463 = null;
var count__20585_21464 = (0);
var i__20586_21465 = (0);
while(true){
if((i__20586_21465 < count__20585_21464)){
var node_21466 = chunk__20584_21463.cljs$core$IIndexed$_nth$arity$2(null,i__20586_21465);
fragment.appendChild(shadow.dom._to_dom(node_21466));


var G__21467 = seq__20583_21462;
var G__21468 = chunk__20584_21463;
var G__21469 = count__20585_21464;
var G__21470 = (i__20586_21465 + (1));
seq__20583_21462 = G__21467;
chunk__20584_21463 = G__21468;
count__20585_21464 = G__21469;
i__20586_21465 = G__21470;
continue;
} else {
var temp__5804__auto___21471 = cljs.core.seq(seq__20583_21462);
if(temp__5804__auto___21471){
var seq__20583_21472__$1 = temp__5804__auto___21471;
if(cljs.core.chunked_seq_QMARK_(seq__20583_21472__$1)){
var c__5568__auto___21473 = cljs.core.chunk_first(seq__20583_21472__$1);
var G__21474 = cljs.core.chunk_rest(seq__20583_21472__$1);
var G__21475 = c__5568__auto___21473;
var G__21476 = cljs.core.count(c__5568__auto___21473);
var G__21477 = (0);
seq__20583_21462 = G__21474;
chunk__20584_21463 = G__21475;
count__20585_21464 = G__21476;
i__20586_21465 = G__21477;
continue;
} else {
var node_21478 = cljs.core.first(seq__20583_21472__$1);
fragment.appendChild(shadow.dom._to_dom(node_21478));


var G__21480 = cljs.core.next(seq__20583_21472__$1);
var G__21481 = null;
var G__21482 = (0);
var G__21483 = (0);
seq__20583_21462 = G__21480;
chunk__20584_21463 = G__21481;
count__20585_21464 = G__21482;
i__20586_21465 = G__21483;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20574){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20574));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20602_21495 = cljs.core.seq(scripts);
var chunk__20603_21496 = null;
var count__20604_21497 = (0);
var i__20605_21498 = (0);
while(true){
if((i__20605_21498 < count__20604_21497)){
var vec__20614_21499 = chunk__20603_21496.cljs$core$IIndexed$_nth$arity$2(null,i__20605_21498);
var script_tag_21500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614_21499,(0),null);
var script_body_21501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614_21499,(1),null);
eval(script_body_21501);


var G__21502 = seq__20602_21495;
var G__21503 = chunk__20603_21496;
var G__21504 = count__20604_21497;
var G__21505 = (i__20605_21498 + (1));
seq__20602_21495 = G__21502;
chunk__20603_21496 = G__21503;
count__20604_21497 = G__21504;
i__20605_21498 = G__21505;
continue;
} else {
var temp__5804__auto___21506 = cljs.core.seq(seq__20602_21495);
if(temp__5804__auto___21506){
var seq__20602_21507__$1 = temp__5804__auto___21506;
if(cljs.core.chunked_seq_QMARK_(seq__20602_21507__$1)){
var c__5568__auto___21508 = cljs.core.chunk_first(seq__20602_21507__$1);
var G__21509 = cljs.core.chunk_rest(seq__20602_21507__$1);
var G__21510 = c__5568__auto___21508;
var G__21511 = cljs.core.count(c__5568__auto___21508);
var G__21512 = (0);
seq__20602_21495 = G__21509;
chunk__20603_21496 = G__21510;
count__20604_21497 = G__21511;
i__20605_21498 = G__21512;
continue;
} else {
var vec__20617_21513 = cljs.core.first(seq__20602_21507__$1);
var script_tag_21514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617_21513,(0),null);
var script_body_21515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617_21513,(1),null);
eval(script_body_21515);


var G__21516 = cljs.core.next(seq__20602_21507__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__20602_21495 = G__21516;
chunk__20603_21496 = G__21517;
count__20604_21497 = G__21518;
i__20605_21498 = G__21519;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20620){
var vec__20621 = p__20620;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20642 = arguments.length;
switch (G__20642) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20687 = cljs.core.seq(style_keys);
var chunk__20688 = null;
var count__20689 = (0);
var i__20690 = (0);
while(true){
if((i__20690 < count__20689)){
var it = chunk__20688.cljs$core$IIndexed$_nth$arity$2(null,i__20690);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21533 = seq__20687;
var G__21534 = chunk__20688;
var G__21536 = count__20689;
var G__21538 = (i__20690 + (1));
seq__20687 = G__21533;
chunk__20688 = G__21534;
count__20689 = G__21536;
i__20690 = G__21538;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20687);
if(temp__5804__auto__){
var seq__20687__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20687__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20687__$1);
var G__21547 = cljs.core.chunk_rest(seq__20687__$1);
var G__21548 = c__5568__auto__;
var G__21549 = cljs.core.count(c__5568__auto__);
var G__21550 = (0);
seq__20687 = G__21547;
chunk__20688 = G__21548;
count__20689 = G__21549;
i__20690 = G__21550;
continue;
} else {
var it = cljs.core.first(seq__20687__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21557 = cljs.core.next(seq__20687__$1);
var G__21558 = null;
var G__21559 = (0);
var G__21560 = (0);
seq__20687 = G__21557;
chunk__20688 = G__21558;
count__20689 = G__21559;
i__20690 = G__21560;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20711,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20724 = k20711;
var G__20724__$1 = (((G__20724 instanceof cljs.core.Keyword))?G__20724.fqn:null);
switch (G__20724__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20711,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20731){
var vec__20732 = p__20731;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20732,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20710){
var self__ = this;
var G__20710__$1 = this;
return (new cljs.core.RecordIter((0),G__20710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20712,other20713){
var self__ = this;
var this20712__$1 = this;
return (((!((other20713 == null)))) && ((((this20712__$1.constructor === other20713.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20712__$1.x,other20713.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20712__$1.y,other20713.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20712__$1.__extmap,other20713.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20711){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20769 = k20711;
var G__20769__$1 = (((G__20769 instanceof cljs.core.Keyword))?G__20769.fqn:null);
switch (G__20769__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20711);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20710){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20774 = cljs.core.keyword_identical_QMARK_;
var expr__20775 = k__5352__auto__;
if(cljs.core.truth_((pred__20774.cljs$core$IFn$_invoke$arity$2 ? pred__20774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20775) : pred__20774.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20775)))){
return (new shadow.dom.Coordinate(G__20710,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20774.cljs$core$IFn$_invoke$arity$2 ? pred__20774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20775) : pred__20774.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20775)))){
return (new shadow.dom.Coordinate(self__.x,G__20710,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20710),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20710){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20710,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20717){
var extmap__5385__auto__ = (function (){var G__20816 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20717,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20717)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20816);
} else {
return G__20816;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20717),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20717),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20835,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20842 = k20835;
var G__20842__$1 = (((G__20842 instanceof cljs.core.Keyword))?G__20842.fqn:null);
switch (G__20842__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20835,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20843){
var vec__20844 = p__20843;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20834){
var self__ = this;
var G__20834__$1 = this;
return (new cljs.core.RecordIter((0),G__20834__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20836,other20837){
var self__ = this;
var this20836__$1 = this;
return (((!((other20837 == null)))) && ((((this20836__$1.constructor === other20837.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20836__$1.w,other20837.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20836__$1.h,other20837.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20836__$1.__extmap,other20837.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20835){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20857 = k20835;
var G__20857__$1 = (((G__20857 instanceof cljs.core.Keyword))?G__20857.fqn:null);
switch (G__20857__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20835);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20834){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20858 = cljs.core.keyword_identical_QMARK_;
var expr__20859 = k__5352__auto__;
if(cljs.core.truth_((pred__20858.cljs$core$IFn$_invoke$arity$2 ? pred__20858.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20859) : pred__20858.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20859)))){
return (new shadow.dom.Size(G__20834,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20858.cljs$core$IFn$_invoke$arity$2 ? pred__20858.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20859) : pred__20858.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20859)))){
return (new shadow.dom.Size(self__.w,G__20834,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20834),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20834){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20834,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20840){
var extmap__5385__auto__ = (function (){var G__20864 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20840,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20864);
} else {
return G__20864;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20840),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20840),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21659 = (i + (1));
var G__21660 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21659;
ret = G__21660;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20874){
var vec__20875 = p__20874;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20875,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20883 = arguments.length;
switch (G__20883) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21671 = ps;
var G__21672 = (i + (1));
el__$1 = G__21671;
i = G__21672;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20898 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20898,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20898,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20898,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20901_21677 = cljs.core.seq(props);
var chunk__20902_21678 = null;
var count__20903_21679 = (0);
var i__20904_21680 = (0);
while(true){
if((i__20904_21680 < count__20903_21679)){
var vec__20925_21681 = chunk__20902_21678.cljs$core$IIndexed$_nth$arity$2(null,i__20904_21680);
var k_21682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20925_21681,(0),null);
var v_21683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20925_21681,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21682);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21682),v_21683);


var G__21684 = seq__20901_21677;
var G__21685 = chunk__20902_21678;
var G__21686 = count__20903_21679;
var G__21687 = (i__20904_21680 + (1));
seq__20901_21677 = G__21684;
chunk__20902_21678 = G__21685;
count__20903_21679 = G__21686;
i__20904_21680 = G__21687;
continue;
} else {
var temp__5804__auto___21688 = cljs.core.seq(seq__20901_21677);
if(temp__5804__auto___21688){
var seq__20901_21689__$1 = temp__5804__auto___21688;
if(cljs.core.chunked_seq_QMARK_(seq__20901_21689__$1)){
var c__5568__auto___21690 = cljs.core.chunk_first(seq__20901_21689__$1);
var G__21691 = cljs.core.chunk_rest(seq__20901_21689__$1);
var G__21692 = c__5568__auto___21690;
var G__21693 = cljs.core.count(c__5568__auto___21690);
var G__21694 = (0);
seq__20901_21677 = G__21691;
chunk__20902_21678 = G__21692;
count__20903_21679 = G__21693;
i__20904_21680 = G__21694;
continue;
} else {
var vec__20930_21695 = cljs.core.first(seq__20901_21689__$1);
var k_21696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930_21695,(0),null);
var v_21697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930_21695,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21696);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21696),v_21697);


var G__21701 = cljs.core.next(seq__20901_21689__$1);
var G__21702 = null;
var G__21703 = (0);
var G__21704 = (0);
seq__20901_21677 = G__21701;
chunk__20902_21678 = G__21702;
count__20903_21679 = G__21703;
i__20904_21680 = G__21704;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20938 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20938,(1),null);
var seq__20942_21705 = cljs.core.seq(node_children);
var chunk__20944_21706 = null;
var count__20945_21707 = (0);
var i__20946_21708 = (0);
while(true){
if((i__20946_21708 < count__20945_21707)){
var child_struct_21709 = chunk__20944_21706.cljs$core$IIndexed$_nth$arity$2(null,i__20946_21708);
if((!((child_struct_21709 == null)))){
if(typeof child_struct_21709 === 'string'){
var text_21710 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21710),child_struct_21709].join(''));
} else {
var children_21711 = shadow.dom.svg_node(child_struct_21709);
if(cljs.core.seq_QMARK_(children_21711)){
var seq__21023_21712 = cljs.core.seq(children_21711);
var chunk__21025_21713 = null;
var count__21026_21714 = (0);
var i__21027_21715 = (0);
while(true){
if((i__21027_21715 < count__21026_21714)){
var child_21716 = chunk__21025_21713.cljs$core$IIndexed$_nth$arity$2(null,i__21027_21715);
if(cljs.core.truth_(child_21716)){
node.appendChild(child_21716);


var G__21717 = seq__21023_21712;
var G__21718 = chunk__21025_21713;
var G__21719 = count__21026_21714;
var G__21720 = (i__21027_21715 + (1));
seq__21023_21712 = G__21717;
chunk__21025_21713 = G__21718;
count__21026_21714 = G__21719;
i__21027_21715 = G__21720;
continue;
} else {
var G__21721 = seq__21023_21712;
var G__21722 = chunk__21025_21713;
var G__21723 = count__21026_21714;
var G__21724 = (i__21027_21715 + (1));
seq__21023_21712 = G__21721;
chunk__21025_21713 = G__21722;
count__21026_21714 = G__21723;
i__21027_21715 = G__21724;
continue;
}
} else {
var temp__5804__auto___21725 = cljs.core.seq(seq__21023_21712);
if(temp__5804__auto___21725){
var seq__21023_21726__$1 = temp__5804__auto___21725;
if(cljs.core.chunked_seq_QMARK_(seq__21023_21726__$1)){
var c__5568__auto___21727 = cljs.core.chunk_first(seq__21023_21726__$1);
var G__21728 = cljs.core.chunk_rest(seq__21023_21726__$1);
var G__21729 = c__5568__auto___21727;
var G__21730 = cljs.core.count(c__5568__auto___21727);
var G__21731 = (0);
seq__21023_21712 = G__21728;
chunk__21025_21713 = G__21729;
count__21026_21714 = G__21730;
i__21027_21715 = G__21731;
continue;
} else {
var child_21735 = cljs.core.first(seq__21023_21726__$1);
if(cljs.core.truth_(child_21735)){
node.appendChild(child_21735);


var G__21736 = cljs.core.next(seq__21023_21726__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21023_21712 = G__21736;
chunk__21025_21713 = G__21737;
count__21026_21714 = G__21738;
i__21027_21715 = G__21739;
continue;
} else {
var G__21740 = cljs.core.next(seq__21023_21726__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21023_21712 = G__21740;
chunk__21025_21713 = G__21741;
count__21026_21714 = G__21742;
i__21027_21715 = G__21743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21711);
}
}


var G__21744 = seq__20942_21705;
var G__21745 = chunk__20944_21706;
var G__21746 = count__20945_21707;
var G__21747 = (i__20946_21708 + (1));
seq__20942_21705 = G__21744;
chunk__20944_21706 = G__21745;
count__20945_21707 = G__21746;
i__20946_21708 = G__21747;
continue;
} else {
var G__21748 = seq__20942_21705;
var G__21749 = chunk__20944_21706;
var G__21750 = count__20945_21707;
var G__21751 = (i__20946_21708 + (1));
seq__20942_21705 = G__21748;
chunk__20944_21706 = G__21749;
count__20945_21707 = G__21750;
i__20946_21708 = G__21751;
continue;
}
} else {
var temp__5804__auto___21752 = cljs.core.seq(seq__20942_21705);
if(temp__5804__auto___21752){
var seq__20942_21753__$1 = temp__5804__auto___21752;
if(cljs.core.chunked_seq_QMARK_(seq__20942_21753__$1)){
var c__5568__auto___21755 = cljs.core.chunk_first(seq__20942_21753__$1);
var G__21756 = cljs.core.chunk_rest(seq__20942_21753__$1);
var G__21757 = c__5568__auto___21755;
var G__21758 = cljs.core.count(c__5568__auto___21755);
var G__21759 = (0);
seq__20942_21705 = G__21756;
chunk__20944_21706 = G__21757;
count__20945_21707 = G__21758;
i__20946_21708 = G__21759;
continue;
} else {
var child_struct_21760 = cljs.core.first(seq__20942_21753__$1);
if((!((child_struct_21760 == null)))){
if(typeof child_struct_21760 === 'string'){
var text_21761 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21761),child_struct_21760].join(''));
} else {
var children_21763 = shadow.dom.svg_node(child_struct_21760);
if(cljs.core.seq_QMARK_(children_21763)){
var seq__21043_21765 = cljs.core.seq(children_21763);
var chunk__21045_21766 = null;
var count__21046_21767 = (0);
var i__21047_21768 = (0);
while(true){
if((i__21047_21768 < count__21046_21767)){
var child_21772 = chunk__21045_21766.cljs$core$IIndexed$_nth$arity$2(null,i__21047_21768);
if(cljs.core.truth_(child_21772)){
node.appendChild(child_21772);


var G__21773 = seq__21043_21765;
var G__21774 = chunk__21045_21766;
var G__21775 = count__21046_21767;
var G__21776 = (i__21047_21768 + (1));
seq__21043_21765 = G__21773;
chunk__21045_21766 = G__21774;
count__21046_21767 = G__21775;
i__21047_21768 = G__21776;
continue;
} else {
var G__21778 = seq__21043_21765;
var G__21779 = chunk__21045_21766;
var G__21780 = count__21046_21767;
var G__21781 = (i__21047_21768 + (1));
seq__21043_21765 = G__21778;
chunk__21045_21766 = G__21779;
count__21046_21767 = G__21780;
i__21047_21768 = G__21781;
continue;
}
} else {
var temp__5804__auto___21782__$1 = cljs.core.seq(seq__21043_21765);
if(temp__5804__auto___21782__$1){
var seq__21043_21783__$1 = temp__5804__auto___21782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21043_21783__$1)){
var c__5568__auto___21784 = cljs.core.chunk_first(seq__21043_21783__$1);
var G__21785 = cljs.core.chunk_rest(seq__21043_21783__$1);
var G__21786 = c__5568__auto___21784;
var G__21787 = cljs.core.count(c__5568__auto___21784);
var G__21788 = (0);
seq__21043_21765 = G__21785;
chunk__21045_21766 = G__21786;
count__21046_21767 = G__21787;
i__21047_21768 = G__21788;
continue;
} else {
var child_21789 = cljs.core.first(seq__21043_21783__$1);
if(cljs.core.truth_(child_21789)){
node.appendChild(child_21789);


var G__21790 = cljs.core.next(seq__21043_21783__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21043_21765 = G__21790;
chunk__21045_21766 = G__21791;
count__21046_21767 = G__21792;
i__21047_21768 = G__21793;
continue;
} else {
var G__21794 = cljs.core.next(seq__21043_21783__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21043_21765 = G__21794;
chunk__21045_21766 = G__21795;
count__21046_21767 = G__21796;
i__21047_21768 = G__21797;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21763);
}
}


var G__21798 = cljs.core.next(seq__20942_21753__$1);
var G__21799 = null;
var G__21800 = (0);
var G__21801 = (0);
seq__20942_21705 = G__21798;
chunk__20944_21706 = G__21799;
count__20945_21707 = G__21800;
i__20946_21708 = G__21801;
continue;
} else {
var G__21802 = cljs.core.next(seq__20942_21753__$1);
var G__21803 = null;
var G__21804 = (0);
var G__21805 = (0);
seq__20942_21705 = G__21802;
chunk__20944_21706 = G__21803;
count__20945_21707 = G__21804;
i__20946_21708 = G__21805;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21810 = arguments.length;
var i__5770__auto___21811 = (0);
while(true){
if((i__5770__auto___21811 < len__5769__auto___21810)){
args__5775__auto__.push((arguments[i__5770__auto___21811]));

var G__21812 = (i__5770__auto___21811 + (1));
i__5770__auto___21811 = G__21812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21057){
var G__21058 = cljs.core.first(seq21057);
var seq21057__$1 = cljs.core.next(seq21057);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21058,seq21057__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21061 = arguments.length;
switch (G__21061) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__16335__auto___21822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_21066){
var state_val_21067 = (state_21066[(1)]);
if((state_val_21067 === (1))){
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21066__$1,(2),once_or_cleanup);
} else {
if((state_val_21067 === (2))){
var inst_21063 = (state_21066[(2)]);
var inst_21064 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21066__$1 = (function (){var statearr_21070 = state_21066;
(statearr_21070[(7)] = inst_21063);

return statearr_21070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21066__$1,inst_21064);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15869__auto__ = null;
var shadow$dom$state_machine__15869__auto____0 = (function (){
var statearr_21071 = [null,null,null,null,null,null,null,null];
(statearr_21071[(0)] = shadow$dom$state_machine__15869__auto__);

(statearr_21071[(1)] = (1));

return statearr_21071;
});
var shadow$dom$state_machine__15869__auto____1 = (function (state_21066){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_21066);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e21076){var ex__15872__auto__ = e21076;
var statearr_21077_21823 = state_21066;
(statearr_21077_21823[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_21066[(4)]))){
var statearr_21078_21824 = state_21066;
(statearr_21078_21824[(1)] = cljs.core.first((state_21066[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21825 = state_21066;
state_21066 = G__21825;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
shadow$dom$state_machine__15869__auto__ = function(state_21066){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15869__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15869__auto____1.call(this,state_21066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15869__auto____0;
shadow$dom$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15869__auto____1;
return shadow$dom$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_21079 = f__16336__auto__();
(statearr_21079[(6)] = c__16335__auto___21822);

return statearr_21079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
