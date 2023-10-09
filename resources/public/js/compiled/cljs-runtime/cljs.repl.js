goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21068){
var map__21069 = p__21068;
var map__21069__$1 = cljs.core.__destructure_map(map__21069);
var m = map__21069__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21072_21527 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21073_21528 = null;
var count__21074_21529 = (0);
var i__21075_21530 = (0);
while(true){
if((i__21075_21530 < count__21074_21529)){
var f_21531 = chunk__21073_21528.cljs$core$IIndexed$_nth$arity$2(null,i__21075_21530);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21531], 0));


var G__21532 = seq__21072_21527;
var G__21535 = chunk__21073_21528;
var G__21537 = count__21074_21529;
var G__21539 = (i__21075_21530 + (1));
seq__21072_21527 = G__21532;
chunk__21073_21528 = G__21535;
count__21074_21529 = G__21537;
i__21075_21530 = G__21539;
continue;
} else {
var temp__5804__auto___21540 = cljs.core.seq(seq__21072_21527);
if(temp__5804__auto___21540){
var seq__21072_21541__$1 = temp__5804__auto___21540;
if(cljs.core.chunked_seq_QMARK_(seq__21072_21541__$1)){
var c__5568__auto___21542 = cljs.core.chunk_first(seq__21072_21541__$1);
var G__21543 = cljs.core.chunk_rest(seq__21072_21541__$1);
var G__21544 = c__5568__auto___21542;
var G__21545 = cljs.core.count(c__5568__auto___21542);
var G__21546 = (0);
seq__21072_21527 = G__21543;
chunk__21073_21528 = G__21544;
count__21074_21529 = G__21545;
i__21075_21530 = G__21546;
continue;
} else {
var f_21551 = cljs.core.first(seq__21072_21541__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21551], 0));


var G__21552 = cljs.core.next(seq__21072_21541__$1);
var G__21553 = null;
var G__21554 = (0);
var G__21555 = (0);
seq__21072_21527 = G__21552;
chunk__21073_21528 = G__21553;
count__21074_21529 = G__21554;
i__21075_21530 = G__21555;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21556 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21556], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21556)))?cljs.core.second(arglists_21556):arglists_21556)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21082_21562 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21083_21563 = null;
var count__21084_21564 = (0);
var i__21085_21565 = (0);
while(true){
if((i__21085_21565 < count__21084_21564)){
var vec__21099_21566 = chunk__21083_21563.cljs$core$IIndexed$_nth$arity$2(null,i__21085_21565);
var name_21567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21099_21566,(0),null);
var map__21102_21568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21099_21566,(1),null);
var map__21102_21569__$1 = cljs.core.__destructure_map(map__21102_21568);
var doc_21570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21567], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21571], 0));

if(cljs.core.truth_(doc_21570)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21570], 0));
} else {
}


var G__21572 = seq__21082_21562;
var G__21573 = chunk__21083_21563;
var G__21574 = count__21084_21564;
var G__21575 = (i__21085_21565 + (1));
seq__21082_21562 = G__21572;
chunk__21083_21563 = G__21573;
count__21084_21564 = G__21574;
i__21085_21565 = G__21575;
continue;
} else {
var temp__5804__auto___21576 = cljs.core.seq(seq__21082_21562);
if(temp__5804__auto___21576){
var seq__21082_21577__$1 = temp__5804__auto___21576;
if(cljs.core.chunked_seq_QMARK_(seq__21082_21577__$1)){
var c__5568__auto___21578 = cljs.core.chunk_first(seq__21082_21577__$1);
var G__21579 = cljs.core.chunk_rest(seq__21082_21577__$1);
var G__21580 = c__5568__auto___21578;
var G__21581 = cljs.core.count(c__5568__auto___21578);
var G__21582 = (0);
seq__21082_21562 = G__21579;
chunk__21083_21563 = G__21580;
count__21084_21564 = G__21581;
i__21085_21565 = G__21582;
continue;
} else {
var vec__21105_21583 = cljs.core.first(seq__21082_21577__$1);
var name_21584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21105_21583,(0),null);
var map__21108_21585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21105_21583,(1),null);
var map__21108_21586__$1 = cljs.core.__destructure_map(map__21108_21585);
var doc_21587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108_21586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108_21586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21584], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21588], 0));

if(cljs.core.truth_(doc_21587)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21587], 0));
} else {
}


var G__21590 = cljs.core.next(seq__21082_21577__$1);
var G__21591 = null;
var G__21592 = (0);
var G__21593 = (0);
seq__21082_21562 = G__21590;
chunk__21083_21563 = G__21591;
count__21084_21564 = G__21592;
i__21085_21565 = G__21593;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21113 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21114 = null;
var count__21115 = (0);
var i__21116 = (0);
while(true){
if((i__21116 < count__21115)){
var role = chunk__21114.cljs$core$IIndexed$_nth$arity$2(null,i__21116);
var temp__5804__auto___21594__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21594__$1)){
var spec_21595 = temp__5804__auto___21594__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21595)], 0));
} else {
}


var G__21597 = seq__21113;
var G__21599 = chunk__21114;
var G__21600 = count__21115;
var G__21601 = (i__21116 + (1));
seq__21113 = G__21597;
chunk__21114 = G__21599;
count__21115 = G__21600;
i__21116 = G__21601;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21113);
if(temp__5804__auto____$1){
var seq__21113__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21113__$1);
var G__21607 = cljs.core.chunk_rest(seq__21113__$1);
var G__21608 = c__5568__auto__;
var G__21609 = cljs.core.count(c__5568__auto__);
var G__21610 = (0);
seq__21113 = G__21607;
chunk__21114 = G__21608;
count__21115 = G__21609;
i__21116 = G__21610;
continue;
} else {
var role = cljs.core.first(seq__21113__$1);
var temp__5804__auto___21611__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21611__$2)){
var spec_21612 = temp__5804__auto___21611__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21612)], 0));
} else {
}


var G__21614 = cljs.core.next(seq__21113__$1);
var G__21615 = null;
var G__21616 = (0);
var G__21617 = (0);
seq__21113 = G__21614;
chunk__21114 = G__21615;
count__21115 = G__21616;
i__21116 = G__21617;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21620 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21621 = cljs.core.ex_cause(t);
via = G__21620;
t = G__21621;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21267 = datafied_throwable;
var map__21267__$1 = cljs.core.__destructure_map(map__21267);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21267__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21268 = cljs.core.last(via);
var map__21268__$1 = cljs.core.__destructure_map(map__21268);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21268__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21269 = data;
var map__21269__$1 = cljs.core.__destructure_map(map__21269);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21269__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21269__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21269__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21270 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21270__$1 = cljs.core.__destructure_map(map__21270);
var top_data = map__21270__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21278 = phase;
var G__21278__$1 = (((G__21278 instanceof cljs.core.Keyword))?G__21278.fqn:null);
switch (G__21278__$1) {
case "read-source":
var map__21279 = data;
var map__21279__$1 = cljs.core.__destructure_map(map__21279);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21279__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21282__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21282,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21282);
var G__21282__$2 = (cljs.core.truth_((function (){var fexpr__21289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21289.cljs$core$IFn$_invoke$arity$1 ? fexpr__21289.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21289.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21282__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21282__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21282__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21290 = top_data;
var G__21290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21290);
var G__21290__$2 = (cljs.core.truth_((function (){var fexpr__21292 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21292.cljs$core$IFn$_invoke$arity$1 ? fexpr__21292.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21292.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21290__$1);
var G__21290__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21290__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21290__$2);
var G__21290__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21290__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21290__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21290__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21290__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21295 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21295,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21295,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21295,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21295,(3),null);
var G__21298 = top_data;
var G__21298__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21298,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21298);
var G__21298__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21298__$1);
var G__21298__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21298__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21298__$2);
var G__21298__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21298__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21298__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21298__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21298__$4;
}

break;
case "execution":
var vec__21307 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21250_SHARP_){
var or__5045__auto__ = (p1__21250_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__21325 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21325.cljs$core$IFn$_invoke$arity$1 ? fexpr__21325.cljs$core$IFn$_invoke$arity$1(p1__21250_SHARP_) : fexpr__21325.call(null,p1__21250_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__21338 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21338__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21338,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21338);
var G__21338__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21338__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21338__$1);
var G__21338__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21338__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21338__$2);
var G__21338__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21338__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21338__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21338__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21338__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21278__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21398){
var map__21399 = p__21398;
var map__21399__$1 = cljs.core.__destructure_map(map__21399);
var triage_data = map__21399__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21417 = phase;
var G__21417__$1 = (((G__21417 instanceof cljs.core.Keyword))?G__21417.fqn:null);
switch (G__21417__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21420 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21421 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21422 = loc;
var G__21423 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21425_21646 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21426_21647 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21427_21648 = true;
var _STAR_print_fn_STAR__temp_val__21428_21649 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21427_21648);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21428_21649);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21426_21647);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21425_21646);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21420,G__21421,G__21422,G__21423) : format.call(null,G__21420,G__21421,G__21422,G__21423));

break;
case "macroexpansion":
var G__21436 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21437 = cause_type;
var G__21438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21439 = loc;
var G__21440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21436,G__21437,G__21438,G__21439,G__21440) : format.call(null,G__21436,G__21437,G__21438,G__21439,G__21440));

break;
case "compile-syntax-check":
var G__21441 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21442 = cause_type;
var G__21443 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21444 = loc;
var G__21445 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21441,G__21442,G__21443,G__21444,G__21445) : format.call(null,G__21441,G__21442,G__21443,G__21444,G__21445));

break;
case "compilation":
var G__21446 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21447 = cause_type;
var G__21448 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21449 = loc;
var G__21450 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21446,G__21447,G__21448,G__21449,G__21450) : format.call(null,G__21446,G__21447,G__21448,G__21449,G__21450));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21451 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21452 = symbol;
var G__21453 = loc;
var G__21454 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21457_21661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21458_21662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21459_21663 = true;
var _STAR_print_fn_STAR__temp_val__21460_21664 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21459_21663);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21460_21664);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21397_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21397_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21458_21662);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21457_21661);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21451,G__21452,G__21453,G__21454) : format.call(null,G__21451,G__21452,G__21453,G__21454));
} else {
var G__21485 = "Execution error%s at %s(%s).\n%s\n";
var G__21486 = cause_type;
var G__21487 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21488 = loc;
var G__21489 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21485,G__21486,G__21487,G__21488,G__21489) : format.call(null,G__21485,G__21486,G__21487,G__21488,G__21489));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21417__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
