goog.provide('simple_app.core');
simple_app.core.dev_setup = (function simple_app$core$dev_setup(){
if(simple_app.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
simple_app.core.mount_root = (function simple_app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple_app.views.main_view], null),root_el);
});
simple_app.core.init = (function simple_app$core$init(){
simple_app.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("simple-app.events","initialize-db","simple-app.events/initialize-db",1250698271)], null));

simple_app.core.dev_setup();

return simple_app.core.mount_root();
});

//# sourceMappingURL=simple_app.core.js.map
