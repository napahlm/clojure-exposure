goog.provide('clojure_exposure.views');
clojure_exposure.views.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure_exposure.views.counting_component = (function clojure_exposure$views$counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null),": ",cljs.core.deref(clojure_exposure.views.click_count)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure_exposure.views.click_count,cljs.core.inc);
})], null)], null)], null);
});
clojure_exposure.views.timer_component = (function clojure_exposure$views$timer_component(){
var seconds_elapsed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds_elapsed,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds elapsed: ",cljs.core.deref(seconds_elapsed)], null);
});
});
clojure_exposure.views.atom_input = (function clojure_exposure$views$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14982_SHARP_){
return cljs.core.reset_BANG_(value,p1__14982_SHARP_.target.value);
})], null)], null);
});
clojure_exposure.views.shared_state = (function clojure_exposure$views$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("test");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.atom_input,val], null)], null)], null);
});
});
clojure_exposure.views.radio_list = (function clojure_exposure$views$radio_list(){
var selected_radio = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-radio","selected-radio",-1432612446)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5523__auto__ = (function clojure_exposure$views$radio_list_$_iter__14983(s__14984){
return (new cljs.core.LazySeq(null,(function (){
var s__14984__$1 = s__14984;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14984__$1);
if(temp__5804__auto__){
var s__14984__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14984__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__14984__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__14986 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__14985 = (0);
while(true){
if((i__14985 < size__5522__auto__)){
var option = cljs.core._nth(c__5521__auto__,i__14985);
cljs.core.chunk_append(b__14986,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"value","value",305978217),option,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_radio),option),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__14985,option,c__5521__auto__,size__5522__auto__,b__14986,s__14984__$2,temp__5804__auto__,selected_radio){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-radio","set-selected-radio",-1309808609),option], null));
});})(i__14985,option,c__5521__auto__,size__5522__auto__,b__14986,s__14984__$2,temp__5804__auto__,selected_radio))
], null)], null),option], null));

var G__14987 = (i__14985 + (1));
i__14985 = G__14987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14986),clojure_exposure$views$radio_list_$_iter__14983(cljs.core.chunk_rest(s__14984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14986),null);
}
} else {
var option = cljs.core.first(s__14984__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"value","value",305978217),option,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_radio),option),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (option,s__14984__$2,temp__5804__auto__,selected_radio){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-radio","set-selected-radio",-1309808609),option], null));
});})(option,s__14984__$2,temp__5804__auto__,selected_radio))
], null)], null),option], null),clojure_exposure$views$radio_list_$_iter__14983(cljs.core.rest(s__14984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Option 1","Option 2","Option 3"], null));
})()], null);
});
});
clojure_exposure.views.nav_link = (function clojure_exposure$views$nav_link(panel,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-exposure.events","navigate","clojure-exposure.events/navigate",-1321152896),panel], null));
})], null),label], null);
});
clojure_exposure.views.navbar = (function clojure_exposure$views$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"topnav"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.nav_link,new cljs.core.Keyword(null,"home","home",-74557309),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.nav_link,new cljs.core.Keyword(null,"about","about",1423892543),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.nav_link,new cljs.core.Keyword(null,"data","data",-232669377),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.nav_link,new cljs.core.Keyword(null,"test","test",577538877),"Test"], null)], null)], null)], null);
});
clojure_exposure.views.home_panel = (function clojure_exposure$views$home_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-exposure.subs","name","clojure-exposure.subs/name",904439744)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["This is a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(name))," web page."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Check out the navbar to look at different implementations."], null)], null);
});
clojure_exposure.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.home_panel], null);
}));
clojure_exposure.views.about_panel = (function clojure_exposure$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The contents"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This web page is made using the day8 re-frame template using bibi/pushy for routing."], null)], null);
});
clojure_exposure.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.about_panel], null);
}));
clojure_exposure.views.data_panel = (function clojure_exposure$views$data_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Dummy data"], null)], null);
});
clojure_exposure.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"data-panel","data-panel",198148393),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.data_panel], null);
}));
clojure_exposure.views.test_panel = (function clojure_exposure$views$test_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-exposure.subs","name","clojure-exposure.subs/name",904439744)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref(name)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.counting_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.timer_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.shared_state], null)], null);
});
clojure_exposure.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"test-panel","test-panel",-200039982),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.test_panel], null);
}));
clojure_exposure.views.main_panel = (function clojure_exposure$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("clojure-exposure.subs","active-panel","clojure-exposure.subs/active-panel",-595419867)], null));
return clojure_exposure.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel));
});
clojure_exposure.views.main_view = (function clojure_exposure$views$main_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_exposure.views.main_panel], null)], null);
});

//# sourceMappingURL=clojure_exposure.views.js.map
