goog.provide('clojure_exposure.core');
clojure_exposure.core.dev_setup = (function clojure_exposure$core$dev_setup(){
if(clojure_exposure.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
clojure_exposure.core.mount_root = (function clojure_exposure$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.main_view], null),root_el);
});
clojure_exposure.core.init = (function clojure_exposure$core$init(){
clojure_exposure.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-exposure.events","initialize-db","clojure-exposure.events/initialize-db",839483989)], null));

clojure_exposure.core.dev_setup();

return clojure_exposure.core.mount_root();
});

//# sourceMappingURL=clojure_exposure.core.js.map
