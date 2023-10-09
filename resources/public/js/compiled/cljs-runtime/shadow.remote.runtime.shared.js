goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16959,res){
var map__16961 = p__16959;
var map__16961__$1 = cljs.core.__destructure_map(map__16961);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16961__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16961__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16968 = res;
var G__16968__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16968,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16968);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16968__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16968__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16996 = arguments.length;
switch (G__16996) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17001,msg,handlers,timeout_after_ms){
var map__17002 = p__17001;
var map__17002__$1 = cljs.core.__destructure_map(map__17002);
var runtime = map__17002__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17002__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17470 = arguments.length;
var i__5770__auto___17471 = (0);
while(true){
if((i__5770__auto___17471 < len__5769__auto___17470)){
args__5775__auto__.push((arguments[i__5770__auto___17471]));

var G__17472 = (i__5770__auto___17471 + (1));
i__5770__auto___17471 = G__17472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17018,ev,args){
var map__17019 = p__17018;
var map__17019__$1 = cljs.core.__destructure_map(map__17019);
var runtime = map__17019__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17019__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17025 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17028 = null;
var count__17029 = (0);
var i__17030 = (0);
while(true){
if((i__17030 < count__17029)){
var ext = chunk__17028.cljs$core$IIndexed$_nth$arity$2(null,i__17030);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17480 = seq__17025;
var G__17481 = chunk__17028;
var G__17482 = count__17029;
var G__17483 = (i__17030 + (1));
seq__17025 = G__17480;
chunk__17028 = G__17481;
count__17029 = G__17482;
i__17030 = G__17483;
continue;
} else {
var G__17484 = seq__17025;
var G__17485 = chunk__17028;
var G__17486 = count__17029;
var G__17487 = (i__17030 + (1));
seq__17025 = G__17484;
chunk__17028 = G__17485;
count__17029 = G__17486;
i__17030 = G__17487;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17025);
if(temp__5804__auto__){
var seq__17025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17025__$1);
var G__17488 = cljs.core.chunk_rest(seq__17025__$1);
var G__17489 = c__5568__auto__;
var G__17490 = cljs.core.count(c__5568__auto__);
var G__17491 = (0);
seq__17025 = G__17488;
chunk__17028 = G__17489;
count__17029 = G__17490;
i__17030 = G__17491;
continue;
} else {
var ext = cljs.core.first(seq__17025__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17494 = cljs.core.next(seq__17025__$1);
var G__17495 = null;
var G__17496 = (0);
var G__17497 = (0);
seq__17025 = G__17494;
chunk__17028 = G__17495;
count__17029 = G__17496;
i__17030 = G__17497;
continue;
} else {
var G__17498 = cljs.core.next(seq__17025__$1);
var G__17499 = null;
var G__17500 = (0);
var G__17501 = (0);
seq__17025 = G__17498;
chunk__17028 = G__17499;
count__17029 = G__17500;
i__17030 = G__17501;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17010){
var G__17011 = cljs.core.first(seq17010);
var seq17010__$1 = cljs.core.next(seq17010);
var G__17012 = cljs.core.first(seq17010__$1);
var seq17010__$2 = cljs.core.next(seq17010__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17011,G__17012,seq17010__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17154,p__17155){
var map__17157 = p__17154;
var map__17157__$1 = cljs.core.__destructure_map(map__17157);
var runtime = map__17157__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17157__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17160 = p__17155;
var map__17160__$1 = cljs.core.__destructure_map(map__17160);
var msg = map__17160__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17160__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17163 = cljs.core.deref(state_ref);
var map__17163__$1 = cljs.core.__destructure_map(map__17163);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17172){
var map__17174 = p__17172;
var map__17174__$1 = cljs.core.__destructure_map(map__17174);
var runtime = map__17174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17180,msg){
var map__17182 = p__17180;
var map__17182__$1 = cljs.core.__destructure_map(map__17182);
var runtime = map__17182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17209,key,p__17210){
var map__17211 = p__17209;
var map__17211__$1 = cljs.core.__destructure_map(map__17211);
var state = map__17211__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17211__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17213 = p__17210;
var map__17213__$1 = cljs.core.__destructure_map(map__17213);
var spec = map__17213__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17213__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17227,key,spec){
var map__17228 = p__17227;
var map__17228__$1 = cljs.core.__destructure_map(map__17228);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17231_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17231_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17232_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17232_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17233_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17233_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17234_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17234_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17235_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17235_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17290,key){
var map__17293 = p__17290;
var map__17293__$1 = cljs.core.__destructure_map(map__17293);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17293__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17324,msg){
var map__17327 = p__17324;
var map__17327__$1 = cljs.core.__destructure_map(map__17327);
var runtime = map__17327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17359,p__17360){
var map__17362 = p__17359;
var map__17362__$1 = cljs.core.__destructure_map(map__17362);
var runtime = map__17362__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17363 = p__17360;
var map__17363__$1 = cljs.core.__destructure_map(map__17363);
var msg = map__17363__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17363__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17381 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17383 = null;
var count__17384 = (0);
var i__17385 = (0);
while(true){
if((i__17385 < count__17384)){
var map__17424 = chunk__17383.cljs$core$IIndexed$_nth$arity$2(null,i__17385);
var map__17424__$1 = cljs.core.__destructure_map(map__17424);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17424__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17620 = seq__17381;
var G__17621 = chunk__17383;
var G__17622 = count__17384;
var G__17623 = (i__17385 + (1));
seq__17381 = G__17620;
chunk__17383 = G__17621;
count__17384 = G__17622;
i__17385 = G__17623;
continue;
} else {
var G__17625 = seq__17381;
var G__17626 = chunk__17383;
var G__17627 = count__17384;
var G__17628 = (i__17385 + (1));
seq__17381 = G__17625;
chunk__17383 = G__17626;
count__17384 = G__17627;
i__17385 = G__17628;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17381);
if(temp__5804__auto__){
var seq__17381__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17381__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17381__$1);
var G__17629 = cljs.core.chunk_rest(seq__17381__$1);
var G__17630 = c__5568__auto__;
var G__17631 = cljs.core.count(c__5568__auto__);
var G__17632 = (0);
seq__17381 = G__17629;
chunk__17383 = G__17630;
count__17384 = G__17631;
i__17385 = G__17632;
continue;
} else {
var map__17435 = cljs.core.first(seq__17381__$1);
var map__17435__$1 = cljs.core.__destructure_map(map__17435);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17634 = cljs.core.next(seq__17381__$1);
var G__17635 = null;
var G__17636 = (0);
var G__17637 = (0);
seq__17381 = G__17634;
chunk__17383 = G__17635;
count__17384 = G__17636;
i__17385 = G__17637;
continue;
} else {
var G__17638 = cljs.core.next(seq__17381__$1);
var G__17639 = null;
var G__17640 = (0);
var G__17641 = (0);
seq__17381 = G__17638;
chunk__17383 = G__17639;
count__17384 = G__17640;
i__17385 = G__17641;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
