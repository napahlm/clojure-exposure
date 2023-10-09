goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21948 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21949 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21949);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__21953 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21954 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21954);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21953);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21948);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21975 = arguments.length;
switch (G__21975) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__21983 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__21996_22038 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__21997_22039 = null;
var count__21998_22040 = (0);
var i__21999_22041 = (0);
while(true){
if((i__21999_22041 < count__21998_22040)){
var vec__22018_22042 = chunk__21997_22039.cljs$core$IIndexed$_nth$arity$2(null,i__21999_22041);
var container_22043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22018_22042,(0),null);
var comp_22044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22018_22042,(1),null);
reagent.dom.re_render_component(comp_22044,container_22043);


var G__22045 = seq__21996_22038;
var G__22046 = chunk__21997_22039;
var G__22047 = count__21998_22040;
var G__22048 = (i__21999_22041 + (1));
seq__21996_22038 = G__22045;
chunk__21997_22039 = G__22046;
count__21998_22040 = G__22047;
i__21999_22041 = G__22048;
continue;
} else {
var temp__5804__auto___22049 = cljs.core.seq(seq__21996_22038);
if(temp__5804__auto___22049){
var seq__21996_22052__$1 = temp__5804__auto___22049;
if(cljs.core.chunked_seq_QMARK_(seq__21996_22052__$1)){
var c__5568__auto___22053 = cljs.core.chunk_first(seq__21996_22052__$1);
var G__22054 = cljs.core.chunk_rest(seq__21996_22052__$1);
var G__22055 = c__5568__auto___22053;
var G__22056 = cljs.core.count(c__5568__auto___22053);
var G__22057 = (0);
seq__21996_22038 = G__22054;
chunk__21997_22039 = G__22055;
count__21998_22040 = G__22056;
i__21999_22041 = G__22057;
continue;
} else {
var vec__22029_22060 = cljs.core.first(seq__21996_22052__$1);
var container_22061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22029_22060,(0),null);
var comp_22062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22029_22060,(1),null);
reagent.dom.re_render_component(comp_22062,container_22061);


var G__22063 = cljs.core.next(seq__21996_22052__$1);
var G__22064 = null;
var G__22065 = (0);
var G__22066 = (0);
seq__21996_22038 = G__22063;
chunk__21997_22039 = G__22064;
count__21998_22040 = G__22065;
i__21999_22041 = G__22066;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
