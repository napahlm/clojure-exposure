goog.provide('clojure_exposure.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("clojure-exposure.events","initialize-db","clojure-exposure.events/initialize-db",839483989),(function (_,___$1){
return clojure_exposure.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("clojure-exposure.events","navigate","clojure-exposure.events/navigate",-1321152896),(function (_,p__14963){
var vec__14964 = p__14963;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("clojure-exposure.events","set-active-panel","clojure-exposure.events/set-active-panel",983496931),(function (p__14967,p__14968){
var map__14969 = p__14967;
var map__14969__$1 = cljs.core.__destructure_map(map__14969);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14969__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__14970 = p__14968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log: Setting active panel to: ",active_panel], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-radio","set-selected-radio",-1309808609),(function (db,p__14973){
var vec__14974 = p__14973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14974,(0),null);
var selected_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14974,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-radio","selected-radio",-1432612446),selected_value);
}));

//# sourceMappingURL=clojure_exposure.events.js.map
