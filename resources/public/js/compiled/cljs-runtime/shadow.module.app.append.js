
shadow.cljs.devtools.client.env.module_loaded('app');

try { clojure_exposure.core.init(); } catch (e) { console.error("An error occurred when calling (clojure-exposure.core/init)"); throw(e); }