goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22112,p__22113){
var map__22114 = p__22112;
var map__22114__$1 = cljs.core.__destructure_map(map__22114);
var svc = map__22114__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22114__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22114__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22114__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22115 = p__22113;
var map__22115__$1 = cljs.core.__destructure_map(map__22115);
var msg = map__22115__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22115__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22115__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22126,p__22127){
var map__22128 = p__22126;
var map__22128__$1 = cljs.core.__destructure_map(map__22128);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22128__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22129 = p__22127;
var map__22129__$1 = cljs.core.__destructure_map(map__22129);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22129__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22138,p__22139){
var map__22141 = p__22138;
var map__22141__$1 = cljs.core.__destructure_map(map__22141);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22141__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22141__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22142 = p__22139;
var map__22142__$1 = cljs.core.__destructure_map(map__22142);
var msg = map__22142__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22142__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22147,tid){
var map__22148 = p__22147;
var map__22148__$1 = cljs.core.__destructure_map(map__22148);
var svc = map__22148__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22148__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22159 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22160 = null;
var count__22161 = (0);
var i__22162 = (0);
while(true){
if((i__22162 < count__22161)){
var vec__22180 = chunk__22160.cljs$core$IIndexed$_nth$arity$2(null,i__22162);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22180,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22207 = seq__22159;
var G__22208 = chunk__22160;
var G__22209 = count__22161;
var G__22210 = (i__22162 + (1));
seq__22159 = G__22207;
chunk__22160 = G__22208;
count__22161 = G__22209;
i__22162 = G__22210;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22159);
if(temp__5804__auto__){
var seq__22159__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22159__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22159__$1);
var G__22211 = cljs.core.chunk_rest(seq__22159__$1);
var G__22212 = c__5568__auto__;
var G__22213 = cljs.core.count(c__5568__auto__);
var G__22214 = (0);
seq__22159 = G__22211;
chunk__22160 = G__22212;
count__22161 = G__22213;
i__22162 = G__22214;
continue;
} else {
var vec__22184 = cljs.core.first(seq__22159__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22184,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22219 = cljs.core.next(seq__22159__$1);
var G__22220 = null;
var G__22221 = (0);
var G__22222 = (0);
seq__22159 = G__22219;
chunk__22160 = G__22220;
count__22161 = G__22221;
i__22162 = G__22222;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22149_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22149_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22152_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22152_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22153_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22153_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22154_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22154_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22188){
var map__22189 = p__22188;
var map__22189__$1 = cljs.core.__destructure_map(map__22189);
var svc = map__22189__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22189__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
