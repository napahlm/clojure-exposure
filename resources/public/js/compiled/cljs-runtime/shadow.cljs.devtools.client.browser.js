goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24294 = arguments.length;
var i__5770__auto___24295 = (0);
while(true){
if((i__5770__auto___24295 < len__5769__auto___24294)){
args__5775__auto__.push((arguments[i__5770__auto___24295]));

var G__24296 = (i__5770__auto___24295 + (1));
i__5770__auto___24295 = G__24296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23853){
var G__23854 = cljs.core.first(seq23853);
var seq23853__$1 = cljs.core.next(seq23853);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23854,seq23853__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23886 = cljs.core.seq(sources);
var chunk__23887 = null;
var count__23888 = (0);
var i__23889 = (0);
while(true){
if((i__23889 < count__23888)){
var map__23926 = chunk__23887.cljs$core$IIndexed$_nth$arity$2(null,i__23889);
var map__23926__$1 = cljs.core.__destructure_map(map__23926);
var src = map__23926__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23926__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23926__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23926__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23926__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23927){var e_24297 = e23927;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24297);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24297.message)].join('')));
}

var G__24298 = seq__23886;
var G__24299 = chunk__23887;
var G__24300 = count__23888;
var G__24301 = (i__23889 + (1));
seq__23886 = G__24298;
chunk__23887 = G__24299;
count__23888 = G__24300;
i__23889 = G__24301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23886);
if(temp__5804__auto__){
var seq__23886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23886__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23886__$1);
var G__24302 = cljs.core.chunk_rest(seq__23886__$1);
var G__24303 = c__5568__auto__;
var G__24304 = cljs.core.count(c__5568__auto__);
var G__24305 = (0);
seq__23886 = G__24302;
chunk__23887 = G__24303;
count__23888 = G__24304;
i__23889 = G__24305;
continue;
} else {
var map__23930 = cljs.core.first(seq__23886__$1);
var map__23930__$1 = cljs.core.__destructure_map(map__23930);
var src = map__23930__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23930__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23932){var e_24306 = e23932;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24306);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24306.message)].join('')));
}

var G__24307 = cljs.core.next(seq__23886__$1);
var G__24308 = null;
var G__24309 = (0);
var G__24310 = (0);
seq__23886 = G__24307;
chunk__23887 = G__24308;
count__23888 = G__24309;
i__23889 = G__24310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23938 = cljs.core.seq(js_requires);
var chunk__23939 = null;
var count__23940 = (0);
var i__23941 = (0);
while(true){
if((i__23941 < count__23940)){
var js_ns = chunk__23939.cljs$core$IIndexed$_nth$arity$2(null,i__23941);
var require_str_24311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24311);


var G__24312 = seq__23938;
var G__24313 = chunk__23939;
var G__24314 = count__23940;
var G__24315 = (i__23941 + (1));
seq__23938 = G__24312;
chunk__23939 = G__24313;
count__23940 = G__24314;
i__23941 = G__24315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23938);
if(temp__5804__auto__){
var seq__23938__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23938__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23938__$1);
var G__24316 = cljs.core.chunk_rest(seq__23938__$1);
var G__24317 = c__5568__auto__;
var G__24318 = cljs.core.count(c__5568__auto__);
var G__24319 = (0);
seq__23938 = G__24316;
chunk__23939 = G__24317;
count__23940 = G__24318;
i__23941 = G__24319;
continue;
} else {
var js_ns = cljs.core.first(seq__23938__$1);
var require_str_24320 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24320);


var G__24321 = cljs.core.next(seq__23938__$1);
var G__24322 = null;
var G__24323 = (0);
var G__24324 = (0);
seq__23938 = G__24321;
chunk__23939 = G__24322;
count__23940 = G__24323;
i__23941 = G__24324;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23947){
var map__23948 = p__23947;
var map__23948__$1 = cljs.core.__destructure_map(map__23948);
var msg = map__23948__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23948__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23948__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23949(s__23950){
return (new cljs.core.LazySeq(null,(function (){
var s__23950__$1 = s__23950;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23950__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23955 = cljs.core.first(xs__6360__auto__);
var map__23955__$1 = cljs.core.__destructure_map(map__23955);
var src = map__23955__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23955__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23955__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__23950__$1,map__23955,map__23955__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23948,map__23948__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23949_$_iter__23951(s__23952){
return (new cljs.core.LazySeq(null,((function (s__23950__$1,map__23955,map__23955__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23948,map__23948__$1,msg,info,reload_info){
return (function (){
var s__23952__$1 = s__23952;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23952__$1);
if(temp__5804__auto____$1){
var s__23952__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23952__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23952__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23954 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23953 = (0);
while(true){
if((i__23953 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__23953);
cljs.core.chunk_append(b__23954,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24325 = (i__23953 + (1));
i__23953 = G__24325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23954),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23949_$_iter__23951(cljs.core.chunk_rest(s__23952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23954),null);
}
} else {
var warning = cljs.core.first(s__23952__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23949_$_iter__23951(cljs.core.rest(s__23952__$2)));
}
} else {
return null;
}
break;
}
});})(s__23950__$1,map__23955,map__23955__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23948,map__23948__$1,msg,info,reload_info))
,null,null));
});})(s__23950__$1,map__23955,map__23955__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23948,map__23948__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23949(cljs.core.rest(s__23950__$1)));
} else {
var G__24326 = cljs.core.rest(s__23950__$1);
s__23950__$1 = G__24326;
continue;
}
} else {
var G__24327 = cljs.core.rest(s__23950__$1);
s__23950__$1 = G__24327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23960_24328 = cljs.core.seq(warnings);
var chunk__23961_24329 = null;
var count__23962_24330 = (0);
var i__23963_24331 = (0);
while(true){
if((i__23963_24331 < count__23962_24330)){
var map__23969_24332 = chunk__23961_24329.cljs$core$IIndexed$_nth$arity$2(null,i__23963_24331);
var map__23969_24333__$1 = cljs.core.__destructure_map(map__23969_24332);
var w_24334 = map__23969_24333__$1;
var msg_24335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24333__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23969_24333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24338)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24336),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24337),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24335__$1)].join(''));


var G__24339 = seq__23960_24328;
var G__24340 = chunk__23961_24329;
var G__24341 = count__23962_24330;
var G__24342 = (i__23963_24331 + (1));
seq__23960_24328 = G__24339;
chunk__23961_24329 = G__24340;
count__23962_24330 = G__24341;
i__23963_24331 = G__24342;
continue;
} else {
var temp__5804__auto___24343 = cljs.core.seq(seq__23960_24328);
if(temp__5804__auto___24343){
var seq__23960_24344__$1 = temp__5804__auto___24343;
if(cljs.core.chunked_seq_QMARK_(seq__23960_24344__$1)){
var c__5568__auto___24345 = cljs.core.chunk_first(seq__23960_24344__$1);
var G__24346 = cljs.core.chunk_rest(seq__23960_24344__$1);
var G__24347 = c__5568__auto___24345;
var G__24348 = cljs.core.count(c__5568__auto___24345);
var G__24349 = (0);
seq__23960_24328 = G__24346;
chunk__23961_24329 = G__24347;
count__23962_24330 = G__24348;
i__23963_24331 = G__24349;
continue;
} else {
var map__23970_24350 = cljs.core.first(seq__23960_24344__$1);
var map__23970_24351__$1 = cljs.core.__destructure_map(map__23970_24350);
var w_24352 = map__23970_24351__$1;
var msg_24353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23970_24351__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23970_24351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23970_24351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23970_24351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24356)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24354),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24355),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24353__$1)].join(''));


var G__24357 = cljs.core.next(seq__23960_24344__$1);
var G__24358 = null;
var G__24359 = (0);
var G__24360 = (0);
seq__23960_24328 = G__24357;
chunk__23961_24329 = G__24358;
count__23962_24330 = G__24359;
i__23963_24331 = G__24360;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23946_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23946_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23977){
var map__23978 = p__23977;
var map__23978__$1 = cljs.core.__destructure_map(map__23978);
var msg = map__23978__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23978__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23978__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23981 = cljs.core.seq(updates);
var chunk__23983 = null;
var count__23984 = (0);
var i__23985 = (0);
while(true){
if((i__23985 < count__23984)){
var path = chunk__23983.cljs$core$IIndexed$_nth$arity$2(null,i__23985);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24166_24361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24170_24362 = null;
var count__24171_24363 = (0);
var i__24172_24364 = (0);
while(true){
if((i__24172_24364 < count__24171_24363)){
var node_24365 = chunk__24170_24362.cljs$core$IIndexed$_nth$arity$2(null,i__24172_24364);
if(cljs.core.not(node_24365.shadow$old)){
var path_match_24366 = shadow.cljs.devtools.client.browser.match_paths(node_24365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24366)){
var new_link_24367 = (function (){var G__24198 = node_24365.cloneNode(true);
G__24198.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24198;
})();
(node_24365.shadow$old = true);

(new_link_24367.onload = ((function (seq__24166_24361,chunk__24170_24362,count__24171_24363,i__24172_24364,seq__23981,chunk__23983,count__23984,i__23985,new_link_24367,path_match_24366,node_24365,path,map__23978,map__23978__$1,msg,updates,reload_info){
return (function (e){
var seq__24199_24368 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24201_24369 = null;
var count__24202_24370 = (0);
var i__24203_24371 = (0);
while(true){
if((i__24203_24371 < count__24202_24370)){
var map__24207_24372 = chunk__24201_24369.cljs$core$IIndexed$_nth$arity$2(null,i__24203_24371);
var map__24207_24373__$1 = cljs.core.__destructure_map(map__24207_24372);
var task_24374 = map__24207_24373__$1;
var fn_str_24375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207_24373__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24207_24373__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24377 = goog.getObjectByName(fn_str_24375,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24376)].join(''));

(fn_obj_24377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24377.cljs$core$IFn$_invoke$arity$2(path,new_link_24367) : fn_obj_24377.call(null,path,new_link_24367));


var G__24378 = seq__24199_24368;
var G__24379 = chunk__24201_24369;
var G__24380 = count__24202_24370;
var G__24381 = (i__24203_24371 + (1));
seq__24199_24368 = G__24378;
chunk__24201_24369 = G__24379;
count__24202_24370 = G__24380;
i__24203_24371 = G__24381;
continue;
} else {
var temp__5804__auto___24382 = cljs.core.seq(seq__24199_24368);
if(temp__5804__auto___24382){
var seq__24199_24383__$1 = temp__5804__auto___24382;
if(cljs.core.chunked_seq_QMARK_(seq__24199_24383__$1)){
var c__5568__auto___24384 = cljs.core.chunk_first(seq__24199_24383__$1);
var G__24385 = cljs.core.chunk_rest(seq__24199_24383__$1);
var G__24386 = c__5568__auto___24384;
var G__24387 = cljs.core.count(c__5568__auto___24384);
var G__24388 = (0);
seq__24199_24368 = G__24385;
chunk__24201_24369 = G__24386;
count__24202_24370 = G__24387;
i__24203_24371 = G__24388;
continue;
} else {
var map__24208_24389 = cljs.core.first(seq__24199_24383__$1);
var map__24208_24390__$1 = cljs.core.__destructure_map(map__24208_24389);
var task_24391 = map__24208_24390__$1;
var fn_str_24392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24208_24390__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24208_24390__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24394 = goog.getObjectByName(fn_str_24392,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24393)].join(''));

(fn_obj_24394.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24394.cljs$core$IFn$_invoke$arity$2(path,new_link_24367) : fn_obj_24394.call(null,path,new_link_24367));


var G__24395 = cljs.core.next(seq__24199_24383__$1);
var G__24396 = null;
var G__24397 = (0);
var G__24398 = (0);
seq__24199_24368 = G__24395;
chunk__24201_24369 = G__24396;
count__24202_24370 = G__24397;
i__24203_24371 = G__24398;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24365);
});})(seq__24166_24361,chunk__24170_24362,count__24171_24363,i__24172_24364,seq__23981,chunk__23983,count__23984,i__23985,new_link_24367,path_match_24366,node_24365,path,map__23978,map__23978__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24366], 0));

goog.dom.insertSiblingAfter(new_link_24367,node_24365);


var G__24399 = seq__24166_24361;
var G__24400 = chunk__24170_24362;
var G__24401 = count__24171_24363;
var G__24402 = (i__24172_24364 + (1));
seq__24166_24361 = G__24399;
chunk__24170_24362 = G__24400;
count__24171_24363 = G__24401;
i__24172_24364 = G__24402;
continue;
} else {
var G__24403 = seq__24166_24361;
var G__24404 = chunk__24170_24362;
var G__24405 = count__24171_24363;
var G__24406 = (i__24172_24364 + (1));
seq__24166_24361 = G__24403;
chunk__24170_24362 = G__24404;
count__24171_24363 = G__24405;
i__24172_24364 = G__24406;
continue;
}
} else {
var G__24407 = seq__24166_24361;
var G__24408 = chunk__24170_24362;
var G__24409 = count__24171_24363;
var G__24410 = (i__24172_24364 + (1));
seq__24166_24361 = G__24407;
chunk__24170_24362 = G__24408;
count__24171_24363 = G__24409;
i__24172_24364 = G__24410;
continue;
}
} else {
var temp__5804__auto___24411 = cljs.core.seq(seq__24166_24361);
if(temp__5804__auto___24411){
var seq__24166_24412__$1 = temp__5804__auto___24411;
if(cljs.core.chunked_seq_QMARK_(seq__24166_24412__$1)){
var c__5568__auto___24413 = cljs.core.chunk_first(seq__24166_24412__$1);
var G__24414 = cljs.core.chunk_rest(seq__24166_24412__$1);
var G__24415 = c__5568__auto___24413;
var G__24416 = cljs.core.count(c__5568__auto___24413);
var G__24417 = (0);
seq__24166_24361 = G__24414;
chunk__24170_24362 = G__24415;
count__24171_24363 = G__24416;
i__24172_24364 = G__24417;
continue;
} else {
var node_24418 = cljs.core.first(seq__24166_24412__$1);
if(cljs.core.not(node_24418.shadow$old)){
var path_match_24419 = shadow.cljs.devtools.client.browser.match_paths(node_24418.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24419)){
var new_link_24420 = (function (){var G__24209 = node_24418.cloneNode(true);
G__24209.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24419),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24209;
})();
(node_24418.shadow$old = true);

(new_link_24420.onload = ((function (seq__24166_24361,chunk__24170_24362,count__24171_24363,i__24172_24364,seq__23981,chunk__23983,count__23984,i__23985,new_link_24420,path_match_24419,node_24418,seq__24166_24412__$1,temp__5804__auto___24411,path,map__23978,map__23978__$1,msg,updates,reload_info){
return (function (e){
var seq__24210_24421 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24212_24422 = null;
var count__24213_24423 = (0);
var i__24214_24424 = (0);
while(true){
if((i__24214_24424 < count__24213_24423)){
var map__24218_24425 = chunk__24212_24422.cljs$core$IIndexed$_nth$arity$2(null,i__24214_24424);
var map__24218_24426__$1 = cljs.core.__destructure_map(map__24218_24425);
var task_24427 = map__24218_24426__$1;
var fn_str_24428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24218_24426__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24218_24426__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24430 = goog.getObjectByName(fn_str_24428,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24429)].join(''));

(fn_obj_24430.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24430.cljs$core$IFn$_invoke$arity$2(path,new_link_24420) : fn_obj_24430.call(null,path,new_link_24420));


var G__24431 = seq__24210_24421;
var G__24432 = chunk__24212_24422;
var G__24433 = count__24213_24423;
var G__24434 = (i__24214_24424 + (1));
seq__24210_24421 = G__24431;
chunk__24212_24422 = G__24432;
count__24213_24423 = G__24433;
i__24214_24424 = G__24434;
continue;
} else {
var temp__5804__auto___24435__$1 = cljs.core.seq(seq__24210_24421);
if(temp__5804__auto___24435__$1){
var seq__24210_24436__$1 = temp__5804__auto___24435__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24210_24436__$1)){
var c__5568__auto___24437 = cljs.core.chunk_first(seq__24210_24436__$1);
var G__24438 = cljs.core.chunk_rest(seq__24210_24436__$1);
var G__24439 = c__5568__auto___24437;
var G__24440 = cljs.core.count(c__5568__auto___24437);
var G__24441 = (0);
seq__24210_24421 = G__24438;
chunk__24212_24422 = G__24439;
count__24213_24423 = G__24440;
i__24214_24424 = G__24441;
continue;
} else {
var map__24219_24442 = cljs.core.first(seq__24210_24436__$1);
var map__24219_24443__$1 = cljs.core.__destructure_map(map__24219_24442);
var task_24444 = map__24219_24443__$1;
var fn_str_24445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24219_24443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24219_24443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24447 = goog.getObjectByName(fn_str_24445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24446)].join(''));

(fn_obj_24447.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24447.cljs$core$IFn$_invoke$arity$2(path,new_link_24420) : fn_obj_24447.call(null,path,new_link_24420));


var G__24448 = cljs.core.next(seq__24210_24436__$1);
var G__24449 = null;
var G__24450 = (0);
var G__24451 = (0);
seq__24210_24421 = G__24448;
chunk__24212_24422 = G__24449;
count__24213_24423 = G__24450;
i__24214_24424 = G__24451;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24418);
});})(seq__24166_24361,chunk__24170_24362,count__24171_24363,i__24172_24364,seq__23981,chunk__23983,count__23984,i__23985,new_link_24420,path_match_24419,node_24418,seq__24166_24412__$1,temp__5804__auto___24411,path,map__23978,map__23978__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24419], 0));

goog.dom.insertSiblingAfter(new_link_24420,node_24418);


var G__24452 = cljs.core.next(seq__24166_24412__$1);
var G__24453 = null;
var G__24454 = (0);
var G__24455 = (0);
seq__24166_24361 = G__24452;
chunk__24170_24362 = G__24453;
count__24171_24363 = G__24454;
i__24172_24364 = G__24455;
continue;
} else {
var G__24456 = cljs.core.next(seq__24166_24412__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24166_24361 = G__24456;
chunk__24170_24362 = G__24457;
count__24171_24363 = G__24458;
i__24172_24364 = G__24459;
continue;
}
} else {
var G__24460 = cljs.core.next(seq__24166_24412__$1);
var G__24461 = null;
var G__24462 = (0);
var G__24463 = (0);
seq__24166_24361 = G__24460;
chunk__24170_24362 = G__24461;
count__24171_24363 = G__24462;
i__24172_24364 = G__24463;
continue;
}
}
} else {
}
}
break;
}


var G__24464 = seq__23981;
var G__24465 = chunk__23983;
var G__24466 = count__23984;
var G__24467 = (i__23985 + (1));
seq__23981 = G__24464;
chunk__23983 = G__24465;
count__23984 = G__24466;
i__23985 = G__24467;
continue;
} else {
var G__24468 = seq__23981;
var G__24469 = chunk__23983;
var G__24470 = count__23984;
var G__24471 = (i__23985 + (1));
seq__23981 = G__24468;
chunk__23983 = G__24469;
count__23984 = G__24470;
i__23985 = G__24471;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23981);
if(temp__5804__auto__){
var seq__23981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23981__$1);
var G__24472 = cljs.core.chunk_rest(seq__23981__$1);
var G__24473 = c__5568__auto__;
var G__24474 = cljs.core.count(c__5568__auto__);
var G__24475 = (0);
seq__23981 = G__24472;
chunk__23983 = G__24473;
count__23984 = G__24474;
i__23985 = G__24475;
continue;
} else {
var path = cljs.core.first(seq__23981__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24220_24476 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24224_24477 = null;
var count__24225_24478 = (0);
var i__24226_24479 = (0);
while(true){
if((i__24226_24479 < count__24225_24478)){
var node_24480 = chunk__24224_24477.cljs$core$IIndexed$_nth$arity$2(null,i__24226_24479);
if(cljs.core.not(node_24480.shadow$old)){
var path_match_24481 = shadow.cljs.devtools.client.browser.match_paths(node_24480.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24481)){
var new_link_24482 = (function (){var G__24252 = node_24480.cloneNode(true);
G__24252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24481),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24252;
})();
(node_24480.shadow$old = true);

(new_link_24482.onload = ((function (seq__24220_24476,chunk__24224_24477,count__24225_24478,i__24226_24479,seq__23981,chunk__23983,count__23984,i__23985,new_link_24482,path_match_24481,node_24480,path,seq__23981__$1,temp__5804__auto__,map__23978,map__23978__$1,msg,updates,reload_info){
return (function (e){
var seq__24253_24483 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24255_24484 = null;
var count__24256_24485 = (0);
var i__24257_24486 = (0);
while(true){
if((i__24257_24486 < count__24256_24485)){
var map__24261_24487 = chunk__24255_24484.cljs$core$IIndexed$_nth$arity$2(null,i__24257_24486);
var map__24261_24488__$1 = cljs.core.__destructure_map(map__24261_24487);
var task_24489 = map__24261_24488__$1;
var fn_str_24490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24261_24488__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24261_24488__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24492 = goog.getObjectByName(fn_str_24490,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24491)].join(''));

(fn_obj_24492.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24492.cljs$core$IFn$_invoke$arity$2(path,new_link_24482) : fn_obj_24492.call(null,path,new_link_24482));


var G__24493 = seq__24253_24483;
var G__24494 = chunk__24255_24484;
var G__24495 = count__24256_24485;
var G__24496 = (i__24257_24486 + (1));
seq__24253_24483 = G__24493;
chunk__24255_24484 = G__24494;
count__24256_24485 = G__24495;
i__24257_24486 = G__24496;
continue;
} else {
var temp__5804__auto___24497__$1 = cljs.core.seq(seq__24253_24483);
if(temp__5804__auto___24497__$1){
var seq__24253_24498__$1 = temp__5804__auto___24497__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24253_24498__$1)){
var c__5568__auto___24499 = cljs.core.chunk_first(seq__24253_24498__$1);
var G__24500 = cljs.core.chunk_rest(seq__24253_24498__$1);
var G__24501 = c__5568__auto___24499;
var G__24502 = cljs.core.count(c__5568__auto___24499);
var G__24503 = (0);
seq__24253_24483 = G__24500;
chunk__24255_24484 = G__24501;
count__24256_24485 = G__24502;
i__24257_24486 = G__24503;
continue;
} else {
var map__24262_24504 = cljs.core.first(seq__24253_24498__$1);
var map__24262_24505__$1 = cljs.core.__destructure_map(map__24262_24504);
var task_24506 = map__24262_24505__$1;
var fn_str_24507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262_24505__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24262_24505__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24509 = goog.getObjectByName(fn_str_24507,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24508)].join(''));

(fn_obj_24509.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24509.cljs$core$IFn$_invoke$arity$2(path,new_link_24482) : fn_obj_24509.call(null,path,new_link_24482));


var G__24510 = cljs.core.next(seq__24253_24498__$1);
var G__24511 = null;
var G__24512 = (0);
var G__24513 = (0);
seq__24253_24483 = G__24510;
chunk__24255_24484 = G__24511;
count__24256_24485 = G__24512;
i__24257_24486 = G__24513;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24480);
});})(seq__24220_24476,chunk__24224_24477,count__24225_24478,i__24226_24479,seq__23981,chunk__23983,count__23984,i__23985,new_link_24482,path_match_24481,node_24480,path,seq__23981__$1,temp__5804__auto__,map__23978,map__23978__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24481], 0));

goog.dom.insertSiblingAfter(new_link_24482,node_24480);


var G__24514 = seq__24220_24476;
var G__24515 = chunk__24224_24477;
var G__24516 = count__24225_24478;
var G__24517 = (i__24226_24479 + (1));
seq__24220_24476 = G__24514;
chunk__24224_24477 = G__24515;
count__24225_24478 = G__24516;
i__24226_24479 = G__24517;
continue;
} else {
var G__24518 = seq__24220_24476;
var G__24519 = chunk__24224_24477;
var G__24520 = count__24225_24478;
var G__24521 = (i__24226_24479 + (1));
seq__24220_24476 = G__24518;
chunk__24224_24477 = G__24519;
count__24225_24478 = G__24520;
i__24226_24479 = G__24521;
continue;
}
} else {
var G__24522 = seq__24220_24476;
var G__24523 = chunk__24224_24477;
var G__24524 = count__24225_24478;
var G__24525 = (i__24226_24479 + (1));
seq__24220_24476 = G__24522;
chunk__24224_24477 = G__24523;
count__24225_24478 = G__24524;
i__24226_24479 = G__24525;
continue;
}
} else {
var temp__5804__auto___24526__$1 = cljs.core.seq(seq__24220_24476);
if(temp__5804__auto___24526__$1){
var seq__24220_24527__$1 = temp__5804__auto___24526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24220_24527__$1)){
var c__5568__auto___24528 = cljs.core.chunk_first(seq__24220_24527__$1);
var G__24529 = cljs.core.chunk_rest(seq__24220_24527__$1);
var G__24530 = c__5568__auto___24528;
var G__24531 = cljs.core.count(c__5568__auto___24528);
var G__24532 = (0);
seq__24220_24476 = G__24529;
chunk__24224_24477 = G__24530;
count__24225_24478 = G__24531;
i__24226_24479 = G__24532;
continue;
} else {
var node_24533 = cljs.core.first(seq__24220_24527__$1);
if(cljs.core.not(node_24533.shadow$old)){
var path_match_24534 = shadow.cljs.devtools.client.browser.match_paths(node_24533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24534)){
var new_link_24535 = (function (){var G__24263 = node_24533.cloneNode(true);
G__24263.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24263;
})();
(node_24533.shadow$old = true);

(new_link_24535.onload = ((function (seq__24220_24476,chunk__24224_24477,count__24225_24478,i__24226_24479,seq__23981,chunk__23983,count__23984,i__23985,new_link_24535,path_match_24534,node_24533,seq__24220_24527__$1,temp__5804__auto___24526__$1,path,seq__23981__$1,temp__5804__auto__,map__23978,map__23978__$1,msg,updates,reload_info){
return (function (e){
var seq__24264_24536 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24266_24537 = null;
var count__24267_24538 = (0);
var i__24268_24539 = (0);
while(true){
if((i__24268_24539 < count__24267_24538)){
var map__24272_24540 = chunk__24266_24537.cljs$core$IIndexed$_nth$arity$2(null,i__24268_24539);
var map__24272_24541__$1 = cljs.core.__destructure_map(map__24272_24540);
var task_24542 = map__24272_24541__$1;
var fn_str_24543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24272_24541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24545 = goog.getObjectByName(fn_str_24543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24544)].join(''));

(fn_obj_24545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24545.cljs$core$IFn$_invoke$arity$2(path,new_link_24535) : fn_obj_24545.call(null,path,new_link_24535));


var G__24546 = seq__24264_24536;
var G__24547 = chunk__24266_24537;
var G__24548 = count__24267_24538;
var G__24549 = (i__24268_24539 + (1));
seq__24264_24536 = G__24546;
chunk__24266_24537 = G__24547;
count__24267_24538 = G__24548;
i__24268_24539 = G__24549;
continue;
} else {
var temp__5804__auto___24550__$2 = cljs.core.seq(seq__24264_24536);
if(temp__5804__auto___24550__$2){
var seq__24264_24551__$1 = temp__5804__auto___24550__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24264_24551__$1)){
var c__5568__auto___24552 = cljs.core.chunk_first(seq__24264_24551__$1);
var G__24553 = cljs.core.chunk_rest(seq__24264_24551__$1);
var G__24554 = c__5568__auto___24552;
var G__24555 = cljs.core.count(c__5568__auto___24552);
var G__24556 = (0);
seq__24264_24536 = G__24553;
chunk__24266_24537 = G__24554;
count__24267_24538 = G__24555;
i__24268_24539 = G__24556;
continue;
} else {
var map__24273_24557 = cljs.core.first(seq__24264_24551__$1);
var map__24273_24558__$1 = cljs.core.__destructure_map(map__24273_24557);
var task_24559 = map__24273_24558__$1;
var fn_str_24560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273_24558__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273_24558__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24562 = goog.getObjectByName(fn_str_24560,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24561)].join(''));

(fn_obj_24562.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24562.cljs$core$IFn$_invoke$arity$2(path,new_link_24535) : fn_obj_24562.call(null,path,new_link_24535));


var G__24563 = cljs.core.next(seq__24264_24551__$1);
var G__24564 = null;
var G__24565 = (0);
var G__24566 = (0);
seq__24264_24536 = G__24563;
chunk__24266_24537 = G__24564;
count__24267_24538 = G__24565;
i__24268_24539 = G__24566;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24533);
});})(seq__24220_24476,chunk__24224_24477,count__24225_24478,i__24226_24479,seq__23981,chunk__23983,count__23984,i__23985,new_link_24535,path_match_24534,node_24533,seq__24220_24527__$1,temp__5804__auto___24526__$1,path,seq__23981__$1,temp__5804__auto__,map__23978,map__23978__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24534], 0));

goog.dom.insertSiblingAfter(new_link_24535,node_24533);


var G__24567 = cljs.core.next(seq__24220_24527__$1);
var G__24568 = null;
var G__24569 = (0);
var G__24570 = (0);
seq__24220_24476 = G__24567;
chunk__24224_24477 = G__24568;
count__24225_24478 = G__24569;
i__24226_24479 = G__24570;
continue;
} else {
var G__24571 = cljs.core.next(seq__24220_24527__$1);
var G__24572 = null;
var G__24573 = (0);
var G__24574 = (0);
seq__24220_24476 = G__24571;
chunk__24224_24477 = G__24572;
count__24225_24478 = G__24573;
i__24226_24479 = G__24574;
continue;
}
} else {
var G__24575 = cljs.core.next(seq__24220_24527__$1);
var G__24576 = null;
var G__24577 = (0);
var G__24578 = (0);
seq__24220_24476 = G__24575;
chunk__24224_24477 = G__24576;
count__24225_24478 = G__24577;
i__24226_24479 = G__24578;
continue;
}
}
} else {
}
}
break;
}


var G__24579 = cljs.core.next(seq__23981__$1);
var G__24580 = null;
var G__24581 = (0);
var G__24582 = (0);
seq__23981 = G__24579;
chunk__23983 = G__24580;
count__23984 = G__24581;
i__23985 = G__24582;
continue;
} else {
var G__24583 = cljs.core.next(seq__23981__$1);
var G__24584 = null;
var G__24585 = (0);
var G__24586 = (0);
seq__23981 = G__24583;
chunk__23983 = G__24584;
count__23984 = G__24585;
i__23985 = G__24586;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__24274){
var map__24275 = p__24274;
var map__24275__$1 = cljs.core.__destructure_map(map__24275);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24275__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__24276){
var map__24277 = p__24276;
var map__24277__$1 = cljs.core.__destructure_map(map__24277);
var _ = map__24277__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24277__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24278,done,error){
var map__24279 = p__24278;
var map__24279__$1 = cljs.core.__destructure_map(map__24279);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24279__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24280,done,error){
var map__24281 = p__24280;
var map__24281__$1 = cljs.core.__destructure_map(map__24281);
var msg = map__24281__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24281__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24281__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24281__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24282){
var map__24283 = p__24282;
var map__24283__$1 = cljs.core.__destructure_map(map__24283);
var src = map__24283__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24283__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24284 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24284) : done.call(null,G__24284));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24285){
var map__24286 = p__24285;
var map__24286__$1 = cljs.core.__destructure_map(map__24286);
var msg__$1 = map__24286__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24287){var ex = e24287;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24288){
var map__24289 = p__24288;
var map__24289__$1 = cljs.core.__destructure_map(map__24289);
var env = map__24289__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24289__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24290){
var map__24291 = p__24290;
var map__24291__$1 = cljs.core.__destructure_map(map__24291);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24291__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24291__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24292){
var map__24293 = p__24292;
var map__24293__$1 = cljs.core.__destructure_map(map__24293);
var svc = map__24293__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
