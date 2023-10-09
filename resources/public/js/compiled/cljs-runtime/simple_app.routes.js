goog.provide('simple_app.routes');
if((typeof simple_app !== 'undefined') && (typeof simple_app.routes !== 'undefined') && (typeof simple_app.routes.panels !== 'undefined')){
} else {
simple_app.routes.panels = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__14799 = cljs.core.get_global_hierarchy;
return (fexpr__14799.cljs$core$IFn$_invoke$arity$0 ? fexpr__14799.cljs$core$IFn$_invoke$arity$0() : fexpr__14799.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("simple-app.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
simple_app.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
simple_app.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 4, ["home",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543),"data",new cljs.core.Keyword(null,"data","data",-232669377),"test",new cljs.core.Keyword(null,"test","test",577538877)], null)], null));
simple_app.routes.parse = (function simple_app$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(simple_app.routes.routes),url);
});
simple_app.routes.url_for = (function simple_app$routes$url_for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14801 = arguments.length;
var i__5770__auto___14802 = (0);
while(true){
if((i__5770__auto___14802 < len__5769__auto___14801)){
args__5775__auto__.push((arguments[i__5770__auto___14802]));

var G__14803 = (i__5770__auto___14802 + (1));
i__5770__auto___14802 = G__14803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return simple_app.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(simple_app.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(simple_app.routes.routes)], null),args));
}));

(simple_app.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(simple_app.routes.url_for.cljs$lang$applyTo = (function (seq14800){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14800));
}));

simple_app.routes.dispatch = (function simple_app$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("simple-app.events","set-active-panel","simple-app.events/set-active-panel",-1792780695),panel], null));
});
if((typeof simple_app !== 'undefined') && (typeof simple_app.routes !== 'undefined') && (typeof simple_app.routes.history !== 'undefined')){
} else {
simple_app.routes.history = pushy.core.pushy(simple_app.routes.dispatch,simple_app.routes.parse);
}
simple_app.routes.navigate_BANG_ = (function simple_app$routes$navigate_BANG_(handler){
return simple_app.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,simple_app.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
simple_app.routes.start_BANG_ = (function simple_app$routes$start_BANG_(){
return simple_app.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return simple_app.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=simple_app.routes.js.map
