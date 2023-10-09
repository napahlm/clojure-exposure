goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19329__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19331__i = 0, G__19331__a = new Array(arguments.length -  0);
while (G__19331__i < G__19331__a.length) {G__19331__a[G__19331__i] = arguments[G__19331__i + 0]; ++G__19331__i;}
  args = new cljs.core.IndexedSeq(G__19331__a,0,null);
} 
return G__19329__delegate.call(this,args);};
G__19329.cljs$lang$maxFixedArity = 0;
G__19329.cljs$lang$applyTo = (function (arglist__19332){
var args = cljs.core.seq(arglist__19332);
return G__19329__delegate(args);
});
G__19329.cljs$core$IFn$_invoke$arity$variadic = G__19329__delegate;
return G__19329;
})()
);

(o.error = (function() { 
var G__19333__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19334__i = 0, G__19334__a = new Array(arguments.length -  0);
while (G__19334__i < G__19334__a.length) {G__19334__a[G__19334__i] = arguments[G__19334__i + 0]; ++G__19334__i;}
  args = new cljs.core.IndexedSeq(G__19334__a,0,null);
} 
return G__19333__delegate.call(this,args);};
G__19333.cljs$lang$maxFixedArity = 0;
G__19333.cljs$lang$applyTo = (function (arglist__19335){
var args = cljs.core.seq(arglist__19335);
return G__19333__delegate(args);
});
G__19333.cljs$core$IFn$_invoke$arity$variadic = G__19333__delegate;
return G__19333;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
