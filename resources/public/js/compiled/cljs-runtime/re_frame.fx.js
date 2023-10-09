goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23678 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23679 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23679);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23815 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23815)){
var new_db_23816 = temp__5804__auto___23815;
var fexpr__23687_23817 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23687_23817.cljs$core$IFn$_invoke$arity$1 ? fexpr__23687_23817.cljs$core$IFn$_invoke$arity$1(new_db_23816) : fexpr__23687_23817.call(null,new_db_23816));
} else {
}

var seq__23689 = cljs.core.seq(effects_without_db);
var chunk__23690 = null;
var count__23691 = (0);
var i__23692 = (0);
while(true){
if((i__23692 < count__23691)){
var vec__23701 = chunk__23690.cljs$core$IIndexed$_nth$arity$2(null,i__23692);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(1),null);
var temp__5802__auto___23818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23818)){
var effect_fn_23819 = temp__5802__auto___23818;
(effect_fn_23819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23819.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23820 = seq__23689;
var G__23821 = chunk__23690;
var G__23822 = count__23691;
var G__23823 = (i__23692 + (1));
seq__23689 = G__23820;
chunk__23690 = G__23821;
count__23691 = G__23822;
i__23692 = G__23823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23689);
if(temp__5804__auto__){
var seq__23689__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23689__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23689__$1);
var G__23824 = cljs.core.chunk_rest(seq__23689__$1);
var G__23825 = c__5568__auto__;
var G__23826 = cljs.core.count(c__5568__auto__);
var G__23827 = (0);
seq__23689 = G__23824;
chunk__23690 = G__23825;
count__23691 = G__23826;
i__23692 = G__23827;
continue;
} else {
var vec__23706 = cljs.core.first(seq__23689__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23706,(1),null);
var temp__5802__auto___23828 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23828)){
var effect_fn_23829 = temp__5802__auto___23828;
(effect_fn_23829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23830 = cljs.core.next(seq__23689__$1);
var G__23831 = null;
var G__23832 = (0);
var G__23833 = (0);
seq__23689 = G__23830;
chunk__23690 = G__23831;
count__23691 = G__23832;
i__23692 = G__23833;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23206__auto___23834 = re_frame.interop.now();
var duration__23207__auto___23835 = (end__23206__auto___23834 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23207__auto___23835,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23206__auto___23834);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23678);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23836 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23836)){
var new_db_23837 = temp__5804__auto___23836;
var fexpr__23714_23838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23714_23838.cljs$core$IFn$_invoke$arity$1 ? fexpr__23714_23838.cljs$core$IFn$_invoke$arity$1(new_db_23837) : fexpr__23714_23838.call(null,new_db_23837));
} else {
}

var seq__23715 = cljs.core.seq(effects_without_db);
var chunk__23716 = null;
var count__23717 = (0);
var i__23718 = (0);
while(true){
if((i__23718 < count__23717)){
var vec__23752 = chunk__23716.cljs$core$IIndexed$_nth$arity$2(null,i__23718);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23752,(1),null);
var temp__5802__auto___23839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23839)){
var effect_fn_23840 = temp__5802__auto___23839;
(effect_fn_23840.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23840.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23840.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23842 = seq__23715;
var G__23843 = chunk__23716;
var G__23844 = count__23717;
var G__23845 = (i__23718 + (1));
seq__23715 = G__23842;
chunk__23716 = G__23843;
count__23717 = G__23844;
i__23718 = G__23845;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23715);
if(temp__5804__auto__){
var seq__23715__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23715__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23715__$1);
var G__23848 = cljs.core.chunk_rest(seq__23715__$1);
var G__23849 = c__5568__auto__;
var G__23850 = cljs.core.count(c__5568__auto__);
var G__23851 = (0);
seq__23715 = G__23848;
chunk__23716 = G__23849;
count__23717 = G__23850;
i__23718 = G__23851;
continue;
} else {
var vec__23757 = cljs.core.first(seq__23715__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23757,(1),null);
var temp__5802__auto___23852 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23852)){
var effect_fn_23855 = temp__5802__auto___23852;
(effect_fn_23855.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23855.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23855.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23856 = cljs.core.next(seq__23715__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23715 = G__23856;
chunk__23716 = G__23857;
count__23717 = G__23858;
i__23718 = G__23859;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23763){
var map__23765 = p__23763;
var map__23765__$1 = cljs.core.__destructure_map(map__23765);
var effect = map__23765__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23765__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23765__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23767 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23768 = null;
var count__23769 = (0);
var i__23770 = (0);
while(true){
if((i__23770 < count__23769)){
var effect = chunk__23768.cljs$core$IIndexed$_nth$arity$2(null,i__23770);
re_frame.fx.dispatch_later(effect);


var G__23860 = seq__23767;
var G__23861 = chunk__23768;
var G__23862 = count__23769;
var G__23863 = (i__23770 + (1));
seq__23767 = G__23860;
chunk__23768 = G__23861;
count__23769 = G__23862;
i__23770 = G__23863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23767);
if(temp__5804__auto__){
var seq__23767__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23767__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23767__$1);
var G__23864 = cljs.core.chunk_rest(seq__23767__$1);
var G__23865 = c__5568__auto__;
var G__23866 = cljs.core.count(c__5568__auto__);
var G__23867 = (0);
seq__23767 = G__23864;
chunk__23768 = G__23865;
count__23769 = G__23866;
i__23770 = G__23867;
continue;
} else {
var effect = cljs.core.first(seq__23767__$1);
re_frame.fx.dispatch_later(effect);


var G__23868 = cljs.core.next(seq__23767__$1);
var G__23869 = null;
var G__23870 = (0);
var G__23871 = (0);
seq__23767 = G__23868;
chunk__23768 = G__23869;
count__23769 = G__23870;
i__23770 = G__23871;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23775 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23776 = null;
var count__23777 = (0);
var i__23778 = (0);
while(true){
if((i__23778 < count__23777)){
var vec__23795 = chunk__23776.cljs$core$IIndexed$_nth$arity$2(null,i__23778);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23795,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23875 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23875)){
var effect_fn_23876 = temp__5802__auto___23875;
(effect_fn_23876.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23876.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23876.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23877 = seq__23775;
var G__23878 = chunk__23776;
var G__23879 = count__23777;
var G__23880 = (i__23778 + (1));
seq__23775 = G__23877;
chunk__23776 = G__23878;
count__23777 = G__23879;
i__23778 = G__23880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23775);
if(temp__5804__auto__){
var seq__23775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23775__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23775__$1);
var G__23882 = cljs.core.chunk_rest(seq__23775__$1);
var G__23883 = c__5568__auto__;
var G__23884 = cljs.core.count(c__5568__auto__);
var G__23885 = (0);
seq__23775 = G__23882;
chunk__23776 = G__23883;
count__23777 = G__23884;
i__23778 = G__23885;
continue;
} else {
var vec__23799 = cljs.core.first(seq__23775__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23891 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23891)){
var effect_fn_23892 = temp__5802__auto___23891;
(effect_fn_23892.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23892.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23892.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23893 = cljs.core.next(seq__23775__$1);
var G__23894 = null;
var G__23895 = (0);
var G__23896 = (0);
seq__23775 = G__23893;
chunk__23776 = G__23894;
count__23777 = G__23895;
i__23778 = G__23896;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23802 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23803 = null;
var count__23804 = (0);
var i__23805 = (0);
while(true){
if((i__23805 < count__23804)){
var event = chunk__23803.cljs$core$IIndexed$_nth$arity$2(null,i__23805);
re_frame.router.dispatch(event);


var G__23898 = seq__23802;
var G__23899 = chunk__23803;
var G__23900 = count__23804;
var G__23901 = (i__23805 + (1));
seq__23802 = G__23898;
chunk__23803 = G__23899;
count__23804 = G__23900;
i__23805 = G__23901;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23802);
if(temp__5804__auto__){
var seq__23802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23802__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23802__$1);
var G__23902 = cljs.core.chunk_rest(seq__23802__$1);
var G__23903 = c__5568__auto__;
var G__23904 = cljs.core.count(c__5568__auto__);
var G__23905 = (0);
seq__23802 = G__23902;
chunk__23803 = G__23903;
count__23804 = G__23904;
i__23805 = G__23905;
continue;
} else {
var event = cljs.core.first(seq__23802__$1);
re_frame.router.dispatch(event);


var G__23907 = cljs.core.next(seq__23802__$1);
var G__23908 = null;
var G__23909 = (0);
var G__23910 = (0);
seq__23802 = G__23907;
chunk__23803 = G__23908;
count__23804 = G__23909;
i__23805 = G__23910;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23808 = cljs.core.seq(value);
var chunk__23809 = null;
var count__23810 = (0);
var i__23811 = (0);
while(true){
if((i__23811 < count__23810)){
var event = chunk__23809.cljs$core$IIndexed$_nth$arity$2(null,i__23811);
clear_event(event);


var G__23913 = seq__23808;
var G__23914 = chunk__23809;
var G__23915 = count__23810;
var G__23916 = (i__23811 + (1));
seq__23808 = G__23913;
chunk__23809 = G__23914;
count__23810 = G__23915;
i__23811 = G__23916;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23808);
if(temp__5804__auto__){
var seq__23808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23808__$1);
var G__23918 = cljs.core.chunk_rest(seq__23808__$1);
var G__23919 = c__5568__auto__;
var G__23920 = cljs.core.count(c__5568__auto__);
var G__23921 = (0);
seq__23808 = G__23918;
chunk__23809 = G__23919;
count__23810 = G__23920;
i__23811 = G__23921;
continue;
} else {
var event = cljs.core.first(seq__23808__$1);
clear_event(event);


var G__23922 = cljs.core.next(seq__23808__$1);
var G__23923 = null;
var G__23924 = (0);
var G__23925 = (0);
seq__23808 = G__23922;
chunk__23809 = G__23923;
count__23810 = G__23924;
i__23811 = G__23925;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
