
shadow.cljs.devtools.client.env.module_loaded('app');

try { simple_app.core.init(); } catch (e) { console.error("An error occurred when calling (simple-app.core/init)"); throw(e); }