goog.provide('simple_app.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("simple-app.events","initialize-db","simple-app.events/initialize-db",1250698271),(function (_,___$1){
return simple_app.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("simple-app.events","navigate","simple-app.events/navigate",1757705222),(function (_,p__16057){
var vec__16058 = p__16057;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("simple-app.events","set-active-panel","simple-app.events/set-active-panel",-1792780695),(function (p__16061,p__16062){
var map__16063 = p__16061;
var map__16063__$1 = cljs.core.__destructure_map(map__16063);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16063__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16064 = p__16062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log: Setting active panel to: ",active_panel], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-radio","set-selected-radio",-1309808609),(function (db,p__16067){
var vec__16068 = p__16067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068,(0),null);
var selected_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-radio","selected-radio",-1432612446),selected_value);
}));

//# sourceMappingURL=simple_app.events.js.map
