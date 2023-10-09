goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16426 = arguments.length;
switch (G__16426) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16435 = (function (f,blockable,meta16436){
this.f = f;
this.blockable = blockable;
this.meta16436 = meta16436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16437,meta16436__$1){
var self__ = this;
var _16437__$1 = this;
return (new cljs.core.async.t_cljs$core$async16435(self__.f,self__.blockable,meta16436__$1));
}));

(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16437){
var self__ = this;
var _16437__$1 = this;
return self__.meta16436;
}));

(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16436","meta16436",-1863465589,null)], null);
}));

(cljs.core.async.t_cljs$core$async16435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16435");

(cljs.core.async.t_cljs$core$async16435.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16435.
 */
cljs.core.async.__GT_t_cljs$core$async16435 = (function cljs$core$async$__GT_t_cljs$core$async16435(f__$1,blockable__$1,meta16436){
return (new cljs.core.async.t_cljs$core$async16435(f__$1,blockable__$1,meta16436));
});

}

return (new cljs.core.async.t_cljs$core$async16435(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16498 = arguments.length;
switch (G__16498) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16527 = arguments.length;
switch (G__16527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19882 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19882) : fn1.call(null,val_19882));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19882) : fn1.call(null,val_19882));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16541 = arguments.length;
switch (G__16541) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19892 = n;
var x_19893 = (0);
while(true){
if((x_19893 < n__5636__auto___19892)){
(a[x_19893] = x_19893);

var G__19894 = (x_19893 + (1));
x_19893 = G__19894;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16556 = (function (flag,meta16557){
this.flag = flag;
this.meta16557 = meta16557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16558,meta16557__$1){
var self__ = this;
var _16558__$1 = this;
return (new cljs.core.async.t_cljs$core$async16556(self__.flag,meta16557__$1));
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16558){
var self__ = this;
var _16558__$1 = this;
return self__.meta16557;
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16557","meta16557",-2011948152,null)], null);
}));

(cljs.core.async.t_cljs$core$async16556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16556");

(cljs.core.async.t_cljs$core$async16556.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16556.
 */
cljs.core.async.__GT_t_cljs$core$async16556 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16556(flag__$1,meta16557){
return (new cljs.core.async.t_cljs$core$async16556(flag__$1,meta16557));
});

}

return (new cljs.core.async.t_cljs$core$async16556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16572 = (function (flag,cb,meta16573){
this.flag = flag;
this.cb = cb;
this.meta16573 = meta16573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16574,meta16573__$1){
var self__ = this;
var _16574__$1 = this;
return (new cljs.core.async.t_cljs$core$async16572(self__.flag,self__.cb,meta16573__$1));
}));

(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16574){
var self__ = this;
var _16574__$1 = this;
return self__.meta16573;
}));

(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16573","meta16573",356792722,null)], null);
}));

(cljs.core.async.t_cljs$core$async16572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16572");

(cljs.core.async.t_cljs$core$async16572.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16572.
 */
cljs.core.async.__GT_t_cljs$core$async16572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16572(flag__$1,cb__$1,meta16573){
return (new cljs.core.async.t_cljs$core$async16572(flag__$1,cb__$1,meta16573));
});

}

return (new cljs.core.async.t_cljs$core$async16572(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16580_SHARP_){
var G__16585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16580_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16585) : fret.call(null,G__16585));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16581_SHARP_){
var G__16586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16581_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16586) : fret.call(null,G__16586));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19901 = (i + (1));
i = G__19901;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19902 = arguments.length;
var i__5770__auto___19903 = (0);
while(true){
if((i__5770__auto___19903 < len__5769__auto___19902)){
args__5775__auto__.push((arguments[i__5770__auto___19903]));

var G__19904 = (i__5770__auto___19903 + (1));
i__5770__auto___19903 = G__19904;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16596){
var map__16597 = p__16596;
var map__16597__$1 = cljs.core.__destructure_map(map__16597);
var opts = map__16597__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16592){
var G__16593 = cljs.core.first(seq16592);
var seq16592__$1 = cljs.core.next(seq16592);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16593,seq16592__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16604 = arguments.length;
switch (G__16604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16335__auto___19911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_16693){
var state_val_16695 = (state_16693[(1)]);
if((state_val_16695 === (7))){
var inst_16671 = (state_16693[(2)]);
var state_16693__$1 = state_16693;
var statearr_16717_19912 = state_16693__$1;
(statearr_16717_19912[(2)] = inst_16671);

(statearr_16717_19912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (1))){
var state_16693__$1 = state_16693;
var statearr_16722_19913 = state_16693__$1;
(statearr_16722_19913[(2)] = null);

(statearr_16722_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (4))){
var inst_16629 = (state_16693[(7)]);
var inst_16629__$1 = (state_16693[(2)]);
var inst_16643 = (inst_16629__$1 == null);
var state_16693__$1 = (function (){var statearr_16730 = state_16693;
(statearr_16730[(7)] = inst_16629__$1);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16643)){
var statearr_16731_19914 = state_16693__$1;
(statearr_16731_19914[(1)] = (5));

} else {
var statearr_16739_19915 = state_16693__$1;
(statearr_16739_19915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (13))){
var state_16693__$1 = state_16693;
var statearr_16746_19917 = state_16693__$1;
(statearr_16746_19917[(2)] = null);

(statearr_16746_19917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (6))){
var inst_16629 = (state_16693[(7)]);
var state_16693__$1 = state_16693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16693__$1,(11),to,inst_16629);
} else {
if((state_val_16695 === (3))){
var inst_16673 = (state_16693[(2)]);
var state_16693__$1 = state_16693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16693__$1,inst_16673);
} else {
if((state_val_16695 === (12))){
var state_16693__$1 = state_16693;
var statearr_16757_19919 = state_16693__$1;
(statearr_16757_19919[(2)] = null);

(statearr_16757_19919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (2))){
var state_16693__$1 = state_16693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16693__$1,(4),from);
} else {
if((state_val_16695 === (11))){
var inst_16662 = (state_16693[(2)]);
var state_16693__$1 = state_16693;
if(cljs.core.truth_(inst_16662)){
var statearr_16758_19920 = state_16693__$1;
(statearr_16758_19920[(1)] = (12));

} else {
var statearr_16760_19921 = state_16693__$1;
(statearr_16760_19921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (9))){
var state_16693__$1 = state_16693;
var statearr_16763_19922 = state_16693__$1;
(statearr_16763_19922[(2)] = null);

(statearr_16763_19922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (5))){
var state_16693__$1 = state_16693;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16764_19923 = state_16693__$1;
(statearr_16764_19923[(1)] = (8));

} else {
var statearr_16765_19924 = state_16693__$1;
(statearr_16765_19924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (14))){
var inst_16669 = (state_16693[(2)]);
var state_16693__$1 = state_16693;
var statearr_16766_19925 = state_16693__$1;
(statearr_16766_19925[(2)] = inst_16669);

(statearr_16766_19925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (10))){
var inst_16659 = (state_16693[(2)]);
var state_16693__$1 = state_16693;
var statearr_16768_19926 = state_16693__$1;
(statearr_16768_19926[(2)] = inst_16659);

(statearr_16768_19926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16695 === (8))){
var inst_16651 = cljs.core.async.close_BANG_(to);
var state_16693__$1 = state_16693;
var statearr_16770_19930 = state_16693__$1;
(statearr_16770_19930[(2)] = inst_16651);

(statearr_16770_19930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_16776 = [null,null,null,null,null,null,null,null];
(statearr_16776[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_16776[(1)] = (1));

return statearr_16776;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_16693){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_16693);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e16778){var ex__15872__auto__ = e16778;
var statearr_16780_19933 = state_16693;
(statearr_16780_19933[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_16693[(4)]))){
var statearr_16781_19935 = state_16693;
(statearr_16781_19935[(1)] = cljs.core.first((state_16693[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19936 = state_16693;
state_16693 = G__19936;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_16693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_16693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_16782 = f__16336__auto__();
(statearr_16782[(6)] = c__16335__auto___19911);

return statearr_16782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16796){
var vec__16797 = p__16796;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16797,(1),null);
var job = vec__16797;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16335__auto___19941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_16816){
var state_val_16817 = (state_16816[(1)]);
if((state_val_16817 === (1))){
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16816__$1,(2),res,v);
} else {
if((state_val_16817 === (2))){
var inst_16813 = (state_16816[(2)]);
var inst_16814 = cljs.core.async.close_BANG_(res);
var state_16816__$1 = (function (){var statearr_16823 = state_16816;
(statearr_16823[(7)] = inst_16813);

return statearr_16823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16816__$1,inst_16814);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_16826 = [null,null,null,null,null,null,null,null];
(statearr_16826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__);

(statearr_16826[(1)] = (1));

return statearr_16826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1 = (function (state_16816){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_16816);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e16827){var ex__15872__auto__ = e16827;
var statearr_16828_19942 = state_16816;
(statearr_16828_19942[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_16816[(4)]))){
var statearr_16830_19943 = state_16816;
(statearr_16830_19943[(1)] = cljs.core.first((state_16816[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19944 = state_16816;
state_16816 = G__19944;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = function(state_16816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1.call(this,state_16816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_16832 = f__16336__auto__();
(statearr_16832[(6)] = c__16335__auto___19941);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16833){
var vec__16834 = p__16833;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16834,(1),null);
var job = vec__16834;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19946 = n;
var __19948 = (0);
while(true){
if((__19948 < n__5636__auto___19946)){
var G__16841_19951 = type;
var G__16841_19952__$1 = (((G__16841_19951 instanceof cljs.core.Keyword))?G__16841_19951.fqn:null);
switch (G__16841_19952__$1) {
case "compute":
var c__16335__auto___19954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19948,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = ((function (__19948,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function (state_16857){
var state_val_16858 = (state_16857[(1)]);
if((state_val_16858 === (1))){
var state_16857__$1 = state_16857;
var statearr_16864_19955 = state_16857__$1;
(statearr_16864_19955[(2)] = null);

(statearr_16864_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16858 === (2))){
var state_16857__$1 = state_16857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16857__$1,(4),jobs);
} else {
if((state_val_16858 === (3))){
var inst_16855 = (state_16857[(2)]);
var state_16857__$1 = state_16857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16857__$1,inst_16855);
} else {
if((state_val_16858 === (4))){
var inst_16846 = (state_16857[(2)]);
var inst_16847 = process__$1(inst_16846);
var state_16857__$1 = state_16857;
if(cljs.core.truth_(inst_16847)){
var statearr_16867_19959 = state_16857__$1;
(statearr_16867_19959[(1)] = (5));

} else {
var statearr_16869_19960 = state_16857__$1;
(statearr_16869_19960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16858 === (5))){
var state_16857__$1 = state_16857;
var statearr_16871_19961 = state_16857__$1;
(statearr_16871_19961[(2)] = null);

(statearr_16871_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16858 === (6))){
var state_16857__$1 = state_16857;
var statearr_16872_19962 = state_16857__$1;
(statearr_16872_19962[(2)] = null);

(statearr_16872_19962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16858 === (7))){
var inst_16853 = (state_16857[(2)]);
var state_16857__$1 = state_16857;
var statearr_16873_19964 = state_16857__$1;
(statearr_16873_19964[(2)] = inst_16853);

(statearr_16873_19964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19948,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
;
return ((function (__19948,switch__15868__auto__,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_16877 = [null,null,null,null,null,null,null];
(statearr_16877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__);

(statearr_16877[(1)] = (1));

return statearr_16877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1 = (function (state_16857){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_16857);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e16878){var ex__15872__auto__ = e16878;
var statearr_16879_19965 = state_16857;
(statearr_16879_19965[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_16857[(4)]))){
var statearr_16880_19966 = state_16857;
(statearr_16880_19966[(1)] = cljs.core.first((state_16857[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19967 = state_16857;
state_16857 = G__19967;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = function(state_16857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1.call(this,state_16857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__;
})()
;})(__19948,switch__15868__auto__,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
})();
var state__16337__auto__ = (function (){var statearr_16881 = f__16336__auto__();
(statearr_16881[(6)] = c__16335__auto___19954);

return statearr_16881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
});})(__19948,c__16335__auto___19954,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
);


break;
case "async":
var c__16335__auto___19969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19948,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = ((function (__19948,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function (state_16897){
var state_val_16898 = (state_16897[(1)]);
if((state_val_16898 === (1))){
var state_16897__$1 = state_16897;
var statearr_16899_19972 = state_16897__$1;
(statearr_16899_19972[(2)] = null);

(statearr_16899_19972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (2))){
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16897__$1,(4),jobs);
} else {
if((state_val_16898 === (3))){
var inst_16895 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16897__$1,inst_16895);
} else {
if((state_val_16898 === (4))){
var inst_16887 = (state_16897[(2)]);
var inst_16888 = async(inst_16887);
var state_16897__$1 = state_16897;
if(cljs.core.truth_(inst_16888)){
var statearr_16907_19975 = state_16897__$1;
(statearr_16907_19975[(1)] = (5));

} else {
var statearr_16910_19976 = state_16897__$1;
(statearr_16910_19976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (5))){
var state_16897__$1 = state_16897;
var statearr_16911_19978 = state_16897__$1;
(statearr_16911_19978[(2)] = null);

(statearr_16911_19978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (6))){
var state_16897__$1 = state_16897;
var statearr_16912_19979 = state_16897__$1;
(statearr_16912_19979[(2)] = null);

(statearr_16912_19979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (7))){
var inst_16893 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16917_19980 = state_16897__$1;
(statearr_16917_19980[(2)] = inst_16893);

(statearr_16917_19980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19948,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
;
return ((function (__19948,switch__15868__auto__,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_16919 = [null,null,null,null,null,null,null];
(statearr_16919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__);

(statearr_16919[(1)] = (1));

return statearr_16919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1 = (function (state_16897){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_16897);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e16921){var ex__15872__auto__ = e16921;
var statearr_16924_19981 = state_16897;
(statearr_16924_19981[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_16897[(4)]))){
var statearr_16925_19982 = state_16897;
(statearr_16925_19982[(1)] = cljs.core.first((state_16897[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19983 = state_16897;
state_16897 = G__19983;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = function(state_16897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1.call(this,state_16897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__;
})()
;})(__19948,switch__15868__auto__,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
})();
var state__16337__auto__ = (function (){var statearr_16927 = f__16336__auto__();
(statearr_16927[(6)] = c__16335__auto___19969);

return statearr_16927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
});})(__19948,c__16335__auto___19969,G__16841_19951,G__16841_19952__$1,n__5636__auto___19946,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16841_19952__$1)].join('')));

}

var G__19984 = (__19948 + (1));
__19948 = G__19984;
continue;
} else {
}
break;
}

var c__16335__auto___19985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_16955){
var state_val_16956 = (state_16955[(1)]);
if((state_val_16956 === (7))){
var inst_16949 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16984_19992 = state_16955__$1;
(statearr_16984_19992[(2)] = inst_16949);

(statearr_16984_19992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (1))){
var state_16955__$1 = state_16955;
var statearr_16990_19996 = state_16955__$1;
(statearr_16990_19996[(2)] = null);

(statearr_16990_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (4))){
var inst_16931 = (state_16955[(7)]);
var inst_16931__$1 = (state_16955[(2)]);
var inst_16932 = (inst_16931__$1 == null);
var state_16955__$1 = (function (){var statearr_16994 = state_16955;
(statearr_16994[(7)] = inst_16931__$1);

return statearr_16994;
})();
if(cljs.core.truth_(inst_16932)){
var statearr_16995_19998 = state_16955__$1;
(statearr_16995_19998[(1)] = (5));

} else {
var statearr_16997_19999 = state_16955__$1;
(statearr_16997_19999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (6))){
var inst_16936 = (state_16955[(8)]);
var inst_16931 = (state_16955[(7)]);
var inst_16936__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16941 = [inst_16931,inst_16936__$1];
var inst_16942 = (new cljs.core.PersistentVector(null,2,(5),inst_16940,inst_16941,null));
var state_16955__$1 = (function (){var statearr_16998 = state_16955;
(statearr_16998[(8)] = inst_16936__$1);

return statearr_16998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16955__$1,(8),jobs,inst_16942);
} else {
if((state_val_16956 === (3))){
var inst_16951 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16955__$1,inst_16951);
} else {
if((state_val_16956 === (2))){
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16955__$1,(4),from);
} else {
if((state_val_16956 === (9))){
var inst_16946 = (state_16955[(2)]);
var state_16955__$1 = (function (){var statearr_17004 = state_16955;
(statearr_17004[(9)] = inst_16946);

return statearr_17004;
})();
var statearr_17005_20008 = state_16955__$1;
(statearr_17005_20008[(2)] = null);

(statearr_17005_20008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (5))){
var inst_16934 = cljs.core.async.close_BANG_(jobs);
var state_16955__$1 = state_16955;
var statearr_17006_20009 = state_16955__$1;
(statearr_17006_20009[(2)] = inst_16934);

(statearr_17006_20009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (8))){
var inst_16936 = (state_16955[(8)]);
var inst_16944 = (state_16955[(2)]);
var state_16955__$1 = (function (){var statearr_17009 = state_16955;
(statearr_17009[(10)] = inst_16944);

return statearr_17009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16955__$1,(9),results,inst_16936);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_17014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__);

(statearr_17014[(1)] = (1));

return statearr_17014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1 = (function (state_16955){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_16955);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17015){var ex__15872__auto__ = e17015;
var statearr_17016_20010 = state_16955;
(statearr_17016_20010[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_16955[(4)]))){
var statearr_17017_20011 = state_16955;
(statearr_17017_20011[(1)] = cljs.core.first((state_16955[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20012 = state_16955;
state_16955 = G__20012;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17020 = f__16336__auto__();
(statearr_17020[(6)] = c__16335__auto___19985);

return statearr_17020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


var c__16335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17089){
var state_val_17090 = (state_17089[(1)]);
if((state_val_17090 === (7))){
var inst_17085 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
var statearr_17108_20013 = state_17089__$1;
(statearr_17108_20013[(2)] = inst_17085);

(statearr_17108_20013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (20))){
var state_17089__$1 = state_17089;
var statearr_17115_20015 = state_17089__$1;
(statearr_17115_20015[(2)] = null);

(statearr_17115_20015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (1))){
var state_17089__$1 = state_17089;
var statearr_17117_20016 = state_17089__$1;
(statearr_17117_20016[(2)] = null);

(statearr_17117_20016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (4))){
var inst_17041 = (state_17089[(7)]);
var inst_17041__$1 = (state_17089[(2)]);
var inst_17043 = (inst_17041__$1 == null);
var state_17089__$1 = (function (){var statearr_17127 = state_17089;
(statearr_17127[(7)] = inst_17041__$1);

return statearr_17127;
})();
if(cljs.core.truth_(inst_17043)){
var statearr_17130_20017 = state_17089__$1;
(statearr_17130_20017[(1)] = (5));

} else {
var statearr_17139_20018 = state_17089__$1;
(statearr_17139_20018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (15))){
var inst_17065 = (state_17089[(8)]);
var state_17089__$1 = state_17089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17089__$1,(18),to,inst_17065);
} else {
if((state_val_17090 === (21))){
var inst_17079 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
var statearr_17151_20019 = state_17089__$1;
(statearr_17151_20019[(2)] = inst_17079);

(statearr_17151_20019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (13))){
var inst_17082 = (state_17089[(2)]);
var state_17089__$1 = (function (){var statearr_17152 = state_17089;
(statearr_17152[(9)] = inst_17082);

return statearr_17152;
})();
var statearr_17153_20020 = state_17089__$1;
(statearr_17153_20020[(2)] = null);

(statearr_17153_20020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (6))){
var inst_17041 = (state_17089[(7)]);
var state_17089__$1 = state_17089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17089__$1,(11),inst_17041);
} else {
if((state_val_17090 === (17))){
var inst_17074 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
if(cljs.core.truth_(inst_17074)){
var statearr_17161_20024 = state_17089__$1;
(statearr_17161_20024[(1)] = (19));

} else {
var statearr_17162_20025 = state_17089__$1;
(statearr_17162_20025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (3))){
var inst_17087 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17089__$1,inst_17087);
} else {
if((state_val_17090 === (12))){
var inst_17062 = (state_17089[(10)]);
var state_17089__$1 = state_17089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17089__$1,(14),inst_17062);
} else {
if((state_val_17090 === (2))){
var state_17089__$1 = state_17089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17089__$1,(4),results);
} else {
if((state_val_17090 === (19))){
var state_17089__$1 = state_17089;
var statearr_17165_20028 = state_17089__$1;
(statearr_17165_20028[(2)] = null);

(statearr_17165_20028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (11))){
var inst_17062 = (state_17089[(2)]);
var state_17089__$1 = (function (){var statearr_17170 = state_17089;
(statearr_17170[(10)] = inst_17062);

return statearr_17170;
})();
var statearr_17171_20029 = state_17089__$1;
(statearr_17171_20029[(2)] = null);

(statearr_17171_20029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (9))){
var state_17089__$1 = state_17089;
var statearr_17173_20030 = state_17089__$1;
(statearr_17173_20030[(2)] = null);

(statearr_17173_20030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (5))){
var state_17089__$1 = state_17089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17175_20031 = state_17089__$1;
(statearr_17175_20031[(1)] = (8));

} else {
var statearr_17176_20032 = state_17089__$1;
(statearr_17176_20032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (14))){
var inst_17068 = (state_17089[(11)]);
var inst_17065 = (state_17089[(8)]);
var inst_17065__$1 = (state_17089[(2)]);
var inst_17067 = (inst_17065__$1 == null);
var inst_17068__$1 = cljs.core.not(inst_17067);
var state_17089__$1 = (function (){var statearr_17179 = state_17089;
(statearr_17179[(11)] = inst_17068__$1);

(statearr_17179[(8)] = inst_17065__$1);

return statearr_17179;
})();
if(inst_17068__$1){
var statearr_17181_20035 = state_17089__$1;
(statearr_17181_20035[(1)] = (15));

} else {
var statearr_17183_20037 = state_17089__$1;
(statearr_17183_20037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (16))){
var inst_17068 = (state_17089[(11)]);
var state_17089__$1 = state_17089;
var statearr_17194_20038 = state_17089__$1;
(statearr_17194_20038[(2)] = inst_17068);

(statearr_17194_20038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (10))){
var inst_17054 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
var statearr_17199_20040 = state_17089__$1;
(statearr_17199_20040[(2)] = inst_17054);

(statearr_17199_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (18))){
var inst_17071 = (state_17089[(2)]);
var state_17089__$1 = state_17089;
var statearr_17206_20041 = state_17089__$1;
(statearr_17206_20041[(2)] = inst_17071);

(statearr_17206_20041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17090 === (8))){
var inst_17051 = cljs.core.async.close_BANG_(to);
var state_17089__$1 = state_17089;
var statearr_17207_20042 = state_17089__$1;
(statearr_17207_20042[(2)] = inst_17051);

(statearr_17207_20042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_17212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__);

(statearr_17212[(1)] = (1));

return statearr_17212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1 = (function (state_17089){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17089);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17220){var ex__15872__auto__ = e17220;
var statearr_17221_20043 = state_17089;
(statearr_17221_20043[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17089[(4)]))){
var statearr_17222_20048 = state_17089;
(statearr_17222_20048[(1)] = cljs.core.first((state_17089[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20049 = state_17089;
state_17089 = G__20049;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__ = function(state_17089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1.call(this,state_17089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17224 = f__16336__auto__();
(statearr_17224[(6)] = c__16335__auto__);

return statearr_17224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

return c__16335__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17236 = arguments.length;
switch (G__17236) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17301 = arguments.length;
switch (G__17301) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17361 = arguments.length;
switch (G__17361) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16335__auto___20059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17410){
var state_val_17413 = (state_17410[(1)]);
if((state_val_17413 === (7))){
var inst_17403 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
var statearr_17417_20061 = state_17410__$1;
(statearr_17417_20061[(2)] = inst_17403);

(statearr_17417_20061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (1))){
var state_17410__$1 = state_17410;
var statearr_17418_20062 = state_17410__$1;
(statearr_17418_20062[(2)] = null);

(statearr_17418_20062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (4))){
var inst_17375 = (state_17410[(7)]);
var inst_17375__$1 = (state_17410[(2)]);
var inst_17377 = (inst_17375__$1 == null);
var state_17410__$1 = (function (){var statearr_17426 = state_17410;
(statearr_17426[(7)] = inst_17375__$1);

return statearr_17426;
})();
if(cljs.core.truth_(inst_17377)){
var statearr_17429_20063 = state_17410__$1;
(statearr_17429_20063[(1)] = (5));

} else {
var statearr_17431_20064 = state_17410__$1;
(statearr_17431_20064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (13))){
var state_17410__$1 = state_17410;
var statearr_17434_20065 = state_17410__$1;
(statearr_17434_20065[(2)] = null);

(statearr_17434_20065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (6))){
var inst_17375 = (state_17410[(7)]);
var inst_17390 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17375) : p.call(null,inst_17375));
var state_17410__$1 = state_17410;
if(cljs.core.truth_(inst_17390)){
var statearr_17444_20066 = state_17410__$1;
(statearr_17444_20066[(1)] = (9));

} else {
var statearr_17447_20068 = state_17410__$1;
(statearr_17447_20068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (3))){
var inst_17405 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17410__$1,inst_17405);
} else {
if((state_val_17413 === (12))){
var state_17410__$1 = state_17410;
var statearr_17448_20070 = state_17410__$1;
(statearr_17448_20070[(2)] = null);

(statearr_17448_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (2))){
var state_17410__$1 = state_17410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17410__$1,(4),ch);
} else {
if((state_val_17413 === (11))){
var inst_17375 = (state_17410[(7)]);
var inst_17394 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17410__$1,(8),inst_17394,inst_17375);
} else {
if((state_val_17413 === (9))){
var state_17410__$1 = state_17410;
var statearr_17455_20073 = state_17410__$1;
(statearr_17455_20073[(2)] = tc);

(statearr_17455_20073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (5))){
var inst_17387 = cljs.core.async.close_BANG_(tc);
var inst_17388 = cljs.core.async.close_BANG_(fc);
var state_17410__$1 = (function (){var statearr_17461 = state_17410;
(statearr_17461[(8)] = inst_17387);

return statearr_17461;
})();
var statearr_17462_20074 = state_17410__$1;
(statearr_17462_20074[(2)] = inst_17388);

(statearr_17462_20074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (14))){
var inst_17401 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
var statearr_17464_20076 = state_17410__$1;
(statearr_17464_20076[(2)] = inst_17401);

(statearr_17464_20076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (10))){
var state_17410__$1 = state_17410;
var statearr_17469_20077 = state_17410__$1;
(statearr_17469_20077[(2)] = fc);

(statearr_17469_20077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (8))){
var inst_17396 = (state_17410[(2)]);
var state_17410__$1 = state_17410;
if(cljs.core.truth_(inst_17396)){
var statearr_17476_20079 = state_17410__$1;
(statearr_17476_20079[(1)] = (12));

} else {
var statearr_17479_20081 = state_17410__$1;
(statearr_17479_20081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_17502 = [null,null,null,null,null,null,null,null,null];
(statearr_17502[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_17502[(1)] = (1));

return statearr_17502;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_17410){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17410);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17508){var ex__15872__auto__ = e17508;
var statearr_17509_20083 = state_17410;
(statearr_17509_20083[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17410[(4)]))){
var statearr_17510_20084 = state_17410;
(statearr_17510_20084[(1)] = cljs.core.first((state_17410[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20085 = state_17410;
state_17410 = G__20085;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_17410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_17410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17519 = f__16336__auto__();
(statearr_17519[(6)] = c__16335__auto___20059);

return statearr_17519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17581){
var state_val_17582 = (state_17581[(1)]);
if((state_val_17582 === (7))){
var inst_17574 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17590_20086 = state_17581__$1;
(statearr_17590_20086[(2)] = inst_17574);

(statearr_17590_20086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (1))){
var inst_17554 = init;
var inst_17555 = inst_17554;
var state_17581__$1 = (function (){var statearr_17596 = state_17581;
(statearr_17596[(7)] = inst_17555);

return statearr_17596;
})();
var statearr_17597_20088 = state_17581__$1;
(statearr_17597_20088[(2)] = null);

(statearr_17597_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (4))){
var inst_17558 = (state_17581[(8)]);
var inst_17558__$1 = (state_17581[(2)]);
var inst_17559 = (inst_17558__$1 == null);
var state_17581__$1 = (function (){var statearr_17599 = state_17581;
(statearr_17599[(8)] = inst_17558__$1);

return statearr_17599;
})();
if(cljs.core.truth_(inst_17559)){
var statearr_17602_20091 = state_17581__$1;
(statearr_17602_20091[(1)] = (5));

} else {
var statearr_17604_20093 = state_17581__$1;
(statearr_17604_20093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (6))){
var inst_17563 = (state_17581[(9)]);
var inst_17555 = (state_17581[(7)]);
var inst_17558 = (state_17581[(8)]);
var inst_17563__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17555,inst_17558) : f.call(null,inst_17555,inst_17558));
var inst_17564 = cljs.core.reduced_QMARK_(inst_17563__$1);
var state_17581__$1 = (function (){var statearr_17613 = state_17581;
(statearr_17613[(9)] = inst_17563__$1);

return statearr_17613;
})();
if(inst_17564){
var statearr_17614_20097 = state_17581__$1;
(statearr_17614_20097[(1)] = (8));

} else {
var statearr_17618_20098 = state_17581__$1;
(statearr_17618_20098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (3))){
var inst_17576 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17581__$1,inst_17576);
} else {
if((state_val_17582 === (2))){
var state_17581__$1 = state_17581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17581__$1,(4),ch);
} else {
if((state_val_17582 === (9))){
var inst_17563 = (state_17581[(9)]);
var inst_17555 = inst_17563;
var state_17581__$1 = (function (){var statearr_17633 = state_17581;
(statearr_17633[(7)] = inst_17555);

return statearr_17633;
})();
var statearr_17642_20100 = state_17581__$1;
(statearr_17642_20100[(2)] = null);

(statearr_17642_20100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (5))){
var inst_17555 = (state_17581[(7)]);
var state_17581__$1 = state_17581;
var statearr_17645_20102 = state_17581__$1;
(statearr_17645_20102[(2)] = inst_17555);

(statearr_17645_20102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (10))){
var inst_17571 = (state_17581[(2)]);
var state_17581__$1 = state_17581;
var statearr_17646_20104 = state_17581__$1;
(statearr_17646_20104[(2)] = inst_17571);

(statearr_17646_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17582 === (8))){
var inst_17563 = (state_17581[(9)]);
var inst_17567 = cljs.core.deref(inst_17563);
var state_17581__$1 = state_17581;
var statearr_17652_20106 = state_17581__$1;
(statearr_17652_20106[(2)] = inst_17567);

(statearr_17652_20106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15869__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15869__auto____0 = (function (){
var statearr_17654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17654[(0)] = cljs$core$async$reduce_$_state_machine__15869__auto__);

(statearr_17654[(1)] = (1));

return statearr_17654;
});
var cljs$core$async$reduce_$_state_machine__15869__auto____1 = (function (state_17581){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17581);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17655){var ex__15872__auto__ = e17655;
var statearr_17656_20107 = state_17581;
(statearr_17656_20107[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17581[(4)]))){
var statearr_17658_20108 = state_17581;
(statearr_17658_20108[(1)] = cljs.core.first((state_17581[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20109 = state_17581;
state_17581 = G__20109;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15869__auto__ = function(state_17581){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15869__auto____1.call(this,state_17581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15869__auto____0;
cljs$core$async$reduce_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15869__auto____1;
return cljs$core$async$reduce_$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17662 = f__16336__auto__();
(statearr_17662[(6)] = c__16335__auto__);

return statearr_17662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

return c__16335__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17675){
var state_val_17676 = (state_17675[(1)]);
if((state_val_17676 === (1))){
var inst_17670 = cljs.core.async.reduce(f__$1,init,ch);
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17675__$1,(2),inst_17670);
} else {
if((state_val_17676 === (2))){
var inst_17672 = (state_17675[(2)]);
var inst_17673 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17672) : f__$1.call(null,inst_17672));
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17675__$1,inst_17673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15869__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15869__auto____0 = (function (){
var statearr_17681 = [null,null,null,null,null,null,null];
(statearr_17681[(0)] = cljs$core$async$transduce_$_state_machine__15869__auto__);

(statearr_17681[(1)] = (1));

return statearr_17681;
});
var cljs$core$async$transduce_$_state_machine__15869__auto____1 = (function (state_17675){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17675);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17682){var ex__15872__auto__ = e17682;
var statearr_17683_20114 = state_17675;
(statearr_17683_20114[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17675[(4)]))){
var statearr_17684_20115 = state_17675;
(statearr_17684_20115[(1)] = cljs.core.first((state_17675[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20116 = state_17675;
state_17675 = G__20116;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15869__auto__ = function(state_17675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15869__auto____1.call(this,state_17675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15869__auto____0;
cljs$core$async$transduce_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15869__auto____1;
return cljs$core$async$transduce_$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17689 = f__16336__auto__();
(statearr_17689[(6)] = c__16335__auto__);

return statearr_17689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

return c__16335__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17694 = arguments.length;
switch (G__17694) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17720){
var state_val_17721 = (state_17720[(1)]);
if((state_val_17721 === (7))){
var inst_17702 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
var statearr_17728_20125 = state_17720__$1;
(statearr_17728_20125[(2)] = inst_17702);

(statearr_17728_20125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (1))){
var inst_17696 = cljs.core.seq(coll);
var inst_17697 = inst_17696;
var state_17720__$1 = (function (){var statearr_17729 = state_17720;
(statearr_17729[(7)] = inst_17697);

return statearr_17729;
})();
var statearr_17730_20126 = state_17720__$1;
(statearr_17730_20126[(2)] = null);

(statearr_17730_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (4))){
var inst_17697 = (state_17720[(7)]);
var inst_17700 = cljs.core.first(inst_17697);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17720__$1,(7),ch,inst_17700);
} else {
if((state_val_17721 === (13))){
var inst_17714 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
var statearr_17737_20127 = state_17720__$1;
(statearr_17737_20127[(2)] = inst_17714);

(statearr_17737_20127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (6))){
var inst_17705 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
if(cljs.core.truth_(inst_17705)){
var statearr_17738_20130 = state_17720__$1;
(statearr_17738_20130[(1)] = (8));

} else {
var statearr_17740_20131 = state_17720__$1;
(statearr_17740_20131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (3))){
var inst_17718 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17720__$1,inst_17718);
} else {
if((state_val_17721 === (12))){
var state_17720__$1 = state_17720;
var statearr_17743_20135 = state_17720__$1;
(statearr_17743_20135[(2)] = null);

(statearr_17743_20135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (2))){
var inst_17697 = (state_17720[(7)]);
var state_17720__$1 = state_17720;
if(cljs.core.truth_(inst_17697)){
var statearr_17744_20136 = state_17720__$1;
(statearr_17744_20136[(1)] = (4));

} else {
var statearr_17745_20137 = state_17720__$1;
(statearr_17745_20137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (11))){
var inst_17711 = cljs.core.async.close_BANG_(ch);
var state_17720__$1 = state_17720;
var statearr_17746_20140 = state_17720__$1;
(statearr_17746_20140[(2)] = inst_17711);

(statearr_17746_20140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (9))){
var state_17720__$1 = state_17720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17747_20141 = state_17720__$1;
(statearr_17747_20141[(1)] = (11));

} else {
var statearr_17748_20142 = state_17720__$1;
(statearr_17748_20142[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (5))){
var inst_17697 = (state_17720[(7)]);
var state_17720__$1 = state_17720;
var statearr_17749_20146 = state_17720__$1;
(statearr_17749_20146[(2)] = inst_17697);

(statearr_17749_20146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (10))){
var inst_17716 = (state_17720[(2)]);
var state_17720__$1 = state_17720;
var statearr_17751_20147 = state_17720__$1;
(statearr_17751_20147[(2)] = inst_17716);

(statearr_17751_20147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17721 === (8))){
var inst_17697 = (state_17720[(7)]);
var inst_17707 = cljs.core.next(inst_17697);
var inst_17697__$1 = inst_17707;
var state_17720__$1 = (function (){var statearr_17753 = state_17720;
(statearr_17753[(7)] = inst_17697__$1);

return statearr_17753;
})();
var statearr_17754_20148 = state_17720__$1;
(statearr_17754_20148[(2)] = null);

(statearr_17754_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_17755 = [null,null,null,null,null,null,null,null];
(statearr_17755[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_17755[(1)] = (1));

return statearr_17755;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_17720){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17720);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e17756){var ex__15872__auto__ = e17756;
var statearr_17757_20149 = state_17720;
(statearr_17757_20149[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17720[(4)]))){
var statearr_17758_20150 = state_17720;
(statearr_17758_20150[(1)] = cljs.core.first((state_17720[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20154 = state_17720;
state_17720 = G__20154;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_17720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_17720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_17771 = f__16336__auto__();
(statearr_17771[(6)] = c__16335__auto__);

return statearr_17771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

return c__16335__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17774 = arguments.length;
switch (G__17774) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20159 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20159(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20164 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20164(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20168 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20168(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20169 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20169(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17811 = (function (ch,cs,meta17812){
this.ch = ch;
this.cs = cs;
this.meta17812 = meta17812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17813,meta17812__$1){
var self__ = this;
var _17813__$1 = this;
return (new cljs.core.async.t_cljs$core$async17811(self__.ch,self__.cs,meta17812__$1));
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17813){
var self__ = this;
var _17813__$1 = this;
return self__.meta17812;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17811.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17812","meta17812",293116796,null)], null);
}));

(cljs.core.async.t_cljs$core$async17811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17811");

(cljs.core.async.t_cljs$core$async17811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17811.
 */
cljs.core.async.__GT_t_cljs$core$async17811 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17811(ch__$1,cs__$1,meta17812){
return (new cljs.core.async.t_cljs$core$async17811(ch__$1,cs__$1,meta17812));
});

}

return (new cljs.core.async.t_cljs$core$async17811(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16335__auto___20186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_17962){
var state_val_17963 = (state_17962[(1)]);
if((state_val_17963 === (7))){
var inst_17957 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_17964_20187 = state_17962__$1;
(statearr_17964_20187[(2)] = inst_17957);

(statearr_17964_20187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (20))){
var inst_17859 = (state_17962[(7)]);
var inst_17874 = cljs.core.first(inst_17859);
var inst_17875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17874,(0),null);
var inst_17876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17874,(1),null);
var state_17962__$1 = (function (){var statearr_17969 = state_17962;
(statearr_17969[(8)] = inst_17875);

return statearr_17969;
})();
if(cljs.core.truth_(inst_17876)){
var statearr_17970_20191 = state_17962__$1;
(statearr_17970_20191[(1)] = (22));

} else {
var statearr_17971_20192 = state_17962__$1;
(statearr_17971_20192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (27))){
var inst_17911 = (state_17962[(9)]);
var inst_17906 = (state_17962[(10)]);
var inst_17828 = (state_17962[(11)]);
var inst_17904 = (state_17962[(12)]);
var inst_17911__$1 = cljs.core._nth(inst_17904,inst_17906);
var inst_17912 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17911__$1,inst_17828,done);
var state_17962__$1 = (function (){var statearr_17973 = state_17962;
(statearr_17973[(9)] = inst_17911__$1);

return statearr_17973;
})();
if(cljs.core.truth_(inst_17912)){
var statearr_17974_20196 = state_17962__$1;
(statearr_17974_20196[(1)] = (30));

} else {
var statearr_17975_20197 = state_17962__$1;
(statearr_17975_20197[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (1))){
var state_17962__$1 = state_17962;
var statearr_17976_20198 = state_17962__$1;
(statearr_17976_20198[(2)] = null);

(statearr_17976_20198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (24))){
var inst_17859 = (state_17962[(7)]);
var inst_17881 = (state_17962[(2)]);
var inst_17882 = cljs.core.next(inst_17859);
var inst_17837 = inst_17882;
var inst_17838 = null;
var inst_17839 = (0);
var inst_17840 = (0);
var state_17962__$1 = (function (){var statearr_17977 = state_17962;
(statearr_17977[(13)] = inst_17881);

(statearr_17977[(14)] = inst_17840);

(statearr_17977[(15)] = inst_17837);

(statearr_17977[(16)] = inst_17839);

(statearr_17977[(17)] = inst_17838);

return statearr_17977;
})();
var statearr_17978_20199 = state_17962__$1;
(statearr_17978_20199[(2)] = null);

(statearr_17978_20199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (39))){
var state_17962__$1 = state_17962;
var statearr_17983_20200 = state_17962__$1;
(statearr_17983_20200[(2)] = null);

(statearr_17983_20200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (4))){
var inst_17828 = (state_17962[(11)]);
var inst_17828__$1 = (state_17962[(2)]);
var inst_17829 = (inst_17828__$1 == null);
var state_17962__$1 = (function (){var statearr_17986 = state_17962;
(statearr_17986[(11)] = inst_17828__$1);

return statearr_17986;
})();
if(cljs.core.truth_(inst_17829)){
var statearr_17987_20205 = state_17962__$1;
(statearr_17987_20205[(1)] = (5));

} else {
var statearr_17988_20208 = state_17962__$1;
(statearr_17988_20208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (15))){
var inst_17840 = (state_17962[(14)]);
var inst_17837 = (state_17962[(15)]);
var inst_17839 = (state_17962[(16)]);
var inst_17838 = (state_17962[(17)]);
var inst_17855 = (state_17962[(2)]);
var inst_17856 = (inst_17840 + (1));
var tmp17980 = inst_17837;
var tmp17981 = inst_17839;
var tmp17982 = inst_17838;
var inst_17837__$1 = tmp17980;
var inst_17838__$1 = tmp17982;
var inst_17839__$1 = tmp17981;
var inst_17840__$1 = inst_17856;
var state_17962__$1 = (function (){var statearr_17990 = state_17962;
(statearr_17990[(18)] = inst_17855);

(statearr_17990[(14)] = inst_17840__$1);

(statearr_17990[(15)] = inst_17837__$1);

(statearr_17990[(16)] = inst_17839__$1);

(statearr_17990[(17)] = inst_17838__$1);

return statearr_17990;
})();
var statearr_17994_20216 = state_17962__$1;
(statearr_17994_20216[(2)] = null);

(statearr_17994_20216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (21))){
var inst_17885 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18002_20217 = state_17962__$1;
(statearr_18002_20217[(2)] = inst_17885);

(statearr_18002_20217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (31))){
var inst_17911 = (state_17962[(9)]);
var inst_17915 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17911);
var state_17962__$1 = state_17962;
var statearr_18003_20218 = state_17962__$1;
(statearr_18003_20218[(2)] = inst_17915);

(statearr_18003_20218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (32))){
var inst_17906 = (state_17962[(10)]);
var inst_17905 = (state_17962[(19)]);
var inst_17903 = (state_17962[(20)]);
var inst_17904 = (state_17962[(12)]);
var inst_17917 = (state_17962[(2)]);
var inst_17918 = (inst_17906 + (1));
var tmp17999 = inst_17905;
var tmp18000 = inst_17903;
var tmp18001 = inst_17904;
var inst_17903__$1 = tmp18000;
var inst_17904__$1 = tmp18001;
var inst_17905__$1 = tmp17999;
var inst_17906__$1 = inst_17918;
var state_17962__$1 = (function (){var statearr_18005 = state_17962;
(statearr_18005[(10)] = inst_17906__$1);

(statearr_18005[(19)] = inst_17905__$1);

(statearr_18005[(20)] = inst_17903__$1);

(statearr_18005[(21)] = inst_17917);

(statearr_18005[(12)] = inst_17904__$1);

return statearr_18005;
})();
var statearr_18009_20219 = state_17962__$1;
(statearr_18009_20219[(2)] = null);

(statearr_18009_20219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (40))){
var inst_17930 = (state_17962[(22)]);
var inst_17934 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17930);
var state_17962__$1 = state_17962;
var statearr_18010_20220 = state_17962__$1;
(statearr_18010_20220[(2)] = inst_17934);

(statearr_18010_20220[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (33))){
var inst_17921 = (state_17962[(23)]);
var inst_17923 = cljs.core.chunked_seq_QMARK_(inst_17921);
var state_17962__$1 = state_17962;
if(inst_17923){
var statearr_18012_20224 = state_17962__$1;
(statearr_18012_20224[(1)] = (36));

} else {
var statearr_18017_20225 = state_17962__$1;
(statearr_18017_20225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (13))){
var inst_17849 = (state_17962[(24)]);
var inst_17852 = cljs.core.async.close_BANG_(inst_17849);
var state_17962__$1 = state_17962;
var statearr_18018_20226 = state_17962__$1;
(statearr_18018_20226[(2)] = inst_17852);

(statearr_18018_20226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (22))){
var inst_17875 = (state_17962[(8)]);
var inst_17878 = cljs.core.async.close_BANG_(inst_17875);
var state_17962__$1 = state_17962;
var statearr_18019_20231 = state_17962__$1;
(statearr_18019_20231[(2)] = inst_17878);

(statearr_18019_20231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (36))){
var inst_17921 = (state_17962[(23)]);
var inst_17925 = cljs.core.chunk_first(inst_17921);
var inst_17926 = cljs.core.chunk_rest(inst_17921);
var inst_17927 = cljs.core.count(inst_17925);
var inst_17903 = inst_17926;
var inst_17904 = inst_17925;
var inst_17905 = inst_17927;
var inst_17906 = (0);
var state_17962__$1 = (function (){var statearr_18024 = state_17962;
(statearr_18024[(10)] = inst_17906);

(statearr_18024[(19)] = inst_17905);

(statearr_18024[(20)] = inst_17903);

(statearr_18024[(12)] = inst_17904);

return statearr_18024;
})();
var statearr_18027_20238 = state_17962__$1;
(statearr_18027_20238[(2)] = null);

(statearr_18027_20238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (41))){
var inst_17921 = (state_17962[(23)]);
var inst_17936 = (state_17962[(2)]);
var inst_17937 = cljs.core.next(inst_17921);
var inst_17903 = inst_17937;
var inst_17904 = null;
var inst_17905 = (0);
var inst_17906 = (0);
var state_17962__$1 = (function (){var statearr_18034 = state_17962;
(statearr_18034[(10)] = inst_17906);

(statearr_18034[(25)] = inst_17936);

(statearr_18034[(19)] = inst_17905);

(statearr_18034[(20)] = inst_17903);

(statearr_18034[(12)] = inst_17904);

return statearr_18034;
})();
var statearr_18037_20243 = state_17962__$1;
(statearr_18037_20243[(2)] = null);

(statearr_18037_20243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (43))){
var state_17962__$1 = state_17962;
var statearr_18043_20244 = state_17962__$1;
(statearr_18043_20244[(2)] = null);

(statearr_18043_20244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (29))){
var inst_17945 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18046_20245 = state_17962__$1;
(statearr_18046_20245[(2)] = inst_17945);

(statearr_18046_20245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (44))){
var inst_17954 = (state_17962[(2)]);
var state_17962__$1 = (function (){var statearr_18048 = state_17962;
(statearr_18048[(26)] = inst_17954);

return statearr_18048;
})();
var statearr_18049_20246 = state_17962__$1;
(statearr_18049_20246[(2)] = null);

(statearr_18049_20246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (6))){
var inst_17895 = (state_17962[(27)]);
var inst_17894 = cljs.core.deref(cs);
var inst_17895__$1 = cljs.core.keys(inst_17894);
var inst_17896 = cljs.core.count(inst_17895__$1);
var inst_17897 = cljs.core.reset_BANG_(dctr,inst_17896);
var inst_17902 = cljs.core.seq(inst_17895__$1);
var inst_17903 = inst_17902;
var inst_17904 = null;
var inst_17905 = (0);
var inst_17906 = (0);
var state_17962__$1 = (function (){var statearr_18058 = state_17962;
(statearr_18058[(10)] = inst_17906);

(statearr_18058[(27)] = inst_17895__$1);

(statearr_18058[(28)] = inst_17897);

(statearr_18058[(19)] = inst_17905);

(statearr_18058[(20)] = inst_17903);

(statearr_18058[(12)] = inst_17904);

return statearr_18058;
})();
var statearr_18066_20249 = state_17962__$1;
(statearr_18066_20249[(2)] = null);

(statearr_18066_20249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (28))){
var inst_17921 = (state_17962[(23)]);
var inst_17903 = (state_17962[(20)]);
var inst_17921__$1 = cljs.core.seq(inst_17903);
var state_17962__$1 = (function (){var statearr_18069 = state_17962;
(statearr_18069[(23)] = inst_17921__$1);

return statearr_18069;
})();
if(inst_17921__$1){
var statearr_18070_20250 = state_17962__$1;
(statearr_18070_20250[(1)] = (33));

} else {
var statearr_18072_20251 = state_17962__$1;
(statearr_18072_20251[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (25))){
var inst_17906 = (state_17962[(10)]);
var inst_17905 = (state_17962[(19)]);
var inst_17908 = (inst_17906 < inst_17905);
var inst_17909 = inst_17908;
var state_17962__$1 = state_17962;
if(cljs.core.truth_(inst_17909)){
var statearr_18075_20252 = state_17962__$1;
(statearr_18075_20252[(1)] = (27));

} else {
var statearr_18076_20253 = state_17962__$1;
(statearr_18076_20253[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (34))){
var state_17962__$1 = state_17962;
var statearr_18081_20254 = state_17962__$1;
(statearr_18081_20254[(2)] = null);

(statearr_18081_20254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (17))){
var state_17962__$1 = state_17962;
var statearr_18083_20255 = state_17962__$1;
(statearr_18083_20255[(2)] = null);

(statearr_18083_20255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (3))){
var inst_17959 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17962__$1,inst_17959);
} else {
if((state_val_17963 === (12))){
var inst_17890 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18087_20256 = state_17962__$1;
(statearr_18087_20256[(2)] = inst_17890);

(statearr_18087_20256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (2))){
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17962__$1,(4),ch);
} else {
if((state_val_17963 === (23))){
var state_17962__$1 = state_17962;
var statearr_18088_20257 = state_17962__$1;
(statearr_18088_20257[(2)] = null);

(statearr_18088_20257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (35))){
var inst_17943 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18089_20258 = state_17962__$1;
(statearr_18089_20258[(2)] = inst_17943);

(statearr_18089_20258[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (19))){
var inst_17859 = (state_17962[(7)]);
var inst_17865 = cljs.core.chunk_first(inst_17859);
var inst_17866 = cljs.core.chunk_rest(inst_17859);
var inst_17867 = cljs.core.count(inst_17865);
var inst_17837 = inst_17866;
var inst_17838 = inst_17865;
var inst_17839 = inst_17867;
var inst_17840 = (0);
var state_17962__$1 = (function (){var statearr_18098 = state_17962;
(statearr_18098[(14)] = inst_17840);

(statearr_18098[(15)] = inst_17837);

(statearr_18098[(16)] = inst_17839);

(statearr_18098[(17)] = inst_17838);

return statearr_18098;
})();
var statearr_18103_20262 = state_17962__$1;
(statearr_18103_20262[(2)] = null);

(statearr_18103_20262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (11))){
var inst_17859 = (state_17962[(7)]);
var inst_17837 = (state_17962[(15)]);
var inst_17859__$1 = cljs.core.seq(inst_17837);
var state_17962__$1 = (function (){var statearr_18112 = state_17962;
(statearr_18112[(7)] = inst_17859__$1);

return statearr_18112;
})();
if(inst_17859__$1){
var statearr_18117_20263 = state_17962__$1;
(statearr_18117_20263[(1)] = (16));

} else {
var statearr_18123_20264 = state_17962__$1;
(statearr_18123_20264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (9))){
var inst_17892 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18126_20265 = state_17962__$1;
(statearr_18126_20265[(2)] = inst_17892);

(statearr_18126_20265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (5))){
var inst_17835 = cljs.core.deref(cs);
var inst_17836 = cljs.core.seq(inst_17835);
var inst_17837 = inst_17836;
var inst_17838 = null;
var inst_17839 = (0);
var inst_17840 = (0);
var state_17962__$1 = (function (){var statearr_18130 = state_17962;
(statearr_18130[(14)] = inst_17840);

(statearr_18130[(15)] = inst_17837);

(statearr_18130[(16)] = inst_17839);

(statearr_18130[(17)] = inst_17838);

return statearr_18130;
})();
var statearr_18132_20267 = state_17962__$1;
(statearr_18132_20267[(2)] = null);

(statearr_18132_20267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (14))){
var state_17962__$1 = state_17962;
var statearr_18135_20268 = state_17962__$1;
(statearr_18135_20268[(2)] = null);

(statearr_18135_20268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (45))){
var inst_17951 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18139_20269 = state_17962__$1;
(statearr_18139_20269[(2)] = inst_17951);

(statearr_18139_20269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (26))){
var inst_17895 = (state_17962[(27)]);
var inst_17947 = (state_17962[(2)]);
var inst_17948 = cljs.core.seq(inst_17895);
var state_17962__$1 = (function (){var statearr_18142 = state_17962;
(statearr_18142[(29)] = inst_17947);

return statearr_18142;
})();
if(inst_17948){
var statearr_18148_20270 = state_17962__$1;
(statearr_18148_20270[(1)] = (42));

} else {
var statearr_18149_20271 = state_17962__$1;
(statearr_18149_20271[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (16))){
var inst_17859 = (state_17962[(7)]);
var inst_17863 = cljs.core.chunked_seq_QMARK_(inst_17859);
var state_17962__$1 = state_17962;
if(inst_17863){
var statearr_18155_20272 = state_17962__$1;
(statearr_18155_20272[(1)] = (19));

} else {
var statearr_18156_20273 = state_17962__$1;
(statearr_18156_20273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (38))){
var inst_17940 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18158_20274 = state_17962__$1;
(statearr_18158_20274[(2)] = inst_17940);

(statearr_18158_20274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (30))){
var state_17962__$1 = state_17962;
var statearr_18163_20275 = state_17962__$1;
(statearr_18163_20275[(2)] = null);

(statearr_18163_20275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (10))){
var inst_17840 = (state_17962[(14)]);
var inst_17838 = (state_17962[(17)]);
var inst_17848 = cljs.core._nth(inst_17838,inst_17840);
var inst_17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17848,(0),null);
var inst_17850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17848,(1),null);
var state_17962__$1 = (function (){var statearr_18167 = state_17962;
(statearr_18167[(24)] = inst_17849);

return statearr_18167;
})();
if(cljs.core.truth_(inst_17850)){
var statearr_18169_20276 = state_17962__$1;
(statearr_18169_20276[(1)] = (13));

} else {
var statearr_18172_20277 = state_17962__$1;
(statearr_18172_20277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (18))){
var inst_17888 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_18176_20279 = state_17962__$1;
(statearr_18176_20279[(2)] = inst_17888);

(statearr_18176_20279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (42))){
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17962__$1,(45),dchan);
} else {
if((state_val_17963 === (37))){
var inst_17921 = (state_17962[(23)]);
var inst_17828 = (state_17962[(11)]);
var inst_17930 = (state_17962[(22)]);
var inst_17930__$1 = cljs.core.first(inst_17921);
var inst_17931 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17930__$1,inst_17828,done);
var state_17962__$1 = (function (){var statearr_18184 = state_17962;
(statearr_18184[(22)] = inst_17930__$1);

return statearr_18184;
})();
if(cljs.core.truth_(inst_17931)){
var statearr_18185_20283 = state_17962__$1;
(statearr_18185_20283[(1)] = (39));

} else {
var statearr_18187_20284 = state_17962__$1;
(statearr_18187_20284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (8))){
var inst_17840 = (state_17962[(14)]);
var inst_17839 = (state_17962[(16)]);
var inst_17842 = (inst_17840 < inst_17839);
var inst_17843 = inst_17842;
var state_17962__$1 = state_17962;
if(cljs.core.truth_(inst_17843)){
var statearr_18192_20288 = state_17962__$1;
(statearr_18192_20288[(1)] = (10));

} else {
var statearr_18194_20289 = state_17962__$1;
(statearr_18194_20289[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15869__auto__ = null;
var cljs$core$async$mult_$_state_machine__15869__auto____0 = (function (){
var statearr_18205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18205[(0)] = cljs$core$async$mult_$_state_machine__15869__auto__);

(statearr_18205[(1)] = (1));

return statearr_18205;
});
var cljs$core$async$mult_$_state_machine__15869__auto____1 = (function (state_17962){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_17962);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e18206){var ex__15872__auto__ = e18206;
var statearr_18207_20291 = state_17962;
(statearr_18207_20291[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_17962[(4)]))){
var statearr_18212_20292 = state_17962;
(statearr_18212_20292[(1)] = cljs.core.first((state_17962[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20293 = state_17962;
state_17962 = G__20293;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15869__auto__ = function(state_17962){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15869__auto____1.call(this,state_17962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15869__auto____0;
cljs$core$async$mult_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15869__auto____1;
return cljs$core$async$mult_$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_18217 = f__16336__auto__();
(statearr_18217[(6)] = c__16335__auto___20186);

return statearr_18217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18234 = arguments.length;
switch (G__18234) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20297 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20297(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20298 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20298(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20299 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20299(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20300 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20300(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20301 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20301(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20302 = arguments.length;
var i__5770__auto___20303 = (0);
while(true){
if((i__5770__auto___20303 < len__5769__auto___20302)){
args__5775__auto__.push((arguments[i__5770__auto___20303]));

var G__20304 = (i__5770__auto___20303 + (1));
i__5770__auto___20303 = G__20304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18330){
var map__18331 = p__18330;
var map__18331__$1 = cljs.core.__destructure_map(map__18331);
var opts = map__18331__$1;
var statearr_18332_20305 = state;
(statearr_18332_20305[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18336_20307 = state;
(statearr_18336_20307[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18338_20313 = state;
(statearr_18338_20313[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18313){
var G__18314 = cljs.core.first(seq18313);
var seq18313__$1 = cljs.core.next(seq18313);
var G__18315 = cljs.core.first(seq18313__$1);
var seq18313__$2 = cljs.core.next(seq18313__$1);
var G__18316 = cljs.core.first(seq18313__$2);
var seq18313__$3 = cljs.core.next(seq18313__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18314,G__18315,G__18316,seq18313__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18341 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18342){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18342 = meta18342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18343,meta18342__$1){
var self__ = this;
var _18343__$1 = this;
return (new cljs.core.async.t_cljs$core$async18341(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18342__$1));
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18343){
var self__ = this;
var _18343__$1 = this;
return self__.meta18342;
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18341.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18342","meta18342",-697062149,null)], null);
}));

(cljs.core.async.t_cljs$core$async18341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18341");

(cljs.core.async.t_cljs$core$async18341.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18341.
 */
cljs.core.async.__GT_t_cljs$core$async18341 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18341(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18342){
return (new cljs.core.async.t_cljs$core$async18341(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18342));
});

}

return (new cljs.core.async.t_cljs$core$async18341(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16335__auto___20343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_18419){
var state_val_18420 = (state_18419[(1)]);
if((state_val_18420 === (7))){
var inst_18376 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
if(cljs.core.truth_(inst_18376)){
var statearr_18423_20345 = state_18419__$1;
(statearr_18423_20345[(1)] = (8));

} else {
var statearr_18424_20347 = state_18419__$1;
(statearr_18424_20347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (20))){
var inst_18369 = (state_18419[(7)]);
var state_18419__$1 = state_18419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18419__$1,(23),out,inst_18369);
} else {
if((state_val_18420 === (1))){
var inst_18350 = calc_state();
var inst_18351 = cljs.core.__destructure_map(inst_18350);
var inst_18352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18351,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18351,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18351,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18355 = inst_18350;
var state_18419__$1 = (function (){var statearr_18428 = state_18419;
(statearr_18428[(8)] = inst_18355);

(statearr_18428[(9)] = inst_18353);

(statearr_18428[(10)] = inst_18354);

(statearr_18428[(11)] = inst_18352);

return statearr_18428;
})();
var statearr_18429_20351 = state_18419__$1;
(statearr_18429_20351[(2)] = null);

(statearr_18429_20351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (24))){
var inst_18359 = (state_18419[(12)]);
var inst_18355 = inst_18359;
var state_18419__$1 = (function (){var statearr_18430 = state_18419;
(statearr_18430[(8)] = inst_18355);

return statearr_18430;
})();
var statearr_18431_20352 = state_18419__$1;
(statearr_18431_20352[(2)] = null);

(statearr_18431_20352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (4))){
var inst_18369 = (state_18419[(7)]);
var inst_18371 = (state_18419[(13)]);
var inst_18368 = (state_18419[(2)]);
var inst_18369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368,(0),null);
var inst_18370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18368,(1),null);
var inst_18371__$1 = (inst_18369__$1 == null);
var state_18419__$1 = (function (){var statearr_18435 = state_18419;
(statearr_18435[(14)] = inst_18370);

(statearr_18435[(7)] = inst_18369__$1);

(statearr_18435[(13)] = inst_18371__$1);

return statearr_18435;
})();
if(cljs.core.truth_(inst_18371__$1)){
var statearr_18436_20359 = state_18419__$1;
(statearr_18436_20359[(1)] = (5));

} else {
var statearr_18437_20360 = state_18419__$1;
(statearr_18437_20360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (15))){
var inst_18360 = (state_18419[(15)]);
var inst_18390 = (state_18419[(16)]);
var inst_18390__$1 = cljs.core.empty_QMARK_(inst_18360);
var state_18419__$1 = (function (){var statearr_18438 = state_18419;
(statearr_18438[(16)] = inst_18390__$1);

return statearr_18438;
})();
if(inst_18390__$1){
var statearr_18443_20361 = state_18419__$1;
(statearr_18443_20361[(1)] = (17));

} else {
var statearr_18444_20362 = state_18419__$1;
(statearr_18444_20362[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (21))){
var inst_18359 = (state_18419[(12)]);
var inst_18355 = inst_18359;
var state_18419__$1 = (function (){var statearr_18446 = state_18419;
(statearr_18446[(8)] = inst_18355);

return statearr_18446;
})();
var statearr_18447_20363 = state_18419__$1;
(statearr_18447_20363[(2)] = null);

(statearr_18447_20363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (13))){
var inst_18383 = (state_18419[(2)]);
var inst_18384 = calc_state();
var inst_18355 = inst_18384;
var state_18419__$1 = (function (){var statearr_18450 = state_18419;
(statearr_18450[(8)] = inst_18355);

(statearr_18450[(17)] = inst_18383);

return statearr_18450;
})();
var statearr_18453_20366 = state_18419__$1;
(statearr_18453_20366[(2)] = null);

(statearr_18453_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (22))){
var inst_18410 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
var statearr_18457_20367 = state_18419__$1;
(statearr_18457_20367[(2)] = inst_18410);

(statearr_18457_20367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (6))){
var inst_18370 = (state_18419[(14)]);
var inst_18374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18370,change);
var state_18419__$1 = state_18419;
var statearr_18461_20368 = state_18419__$1;
(statearr_18461_20368[(2)] = inst_18374);

(statearr_18461_20368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (25))){
var state_18419__$1 = state_18419;
var statearr_18464_20369 = state_18419__$1;
(statearr_18464_20369[(2)] = null);

(statearr_18464_20369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (17))){
var inst_18370 = (state_18419[(14)]);
var inst_18361 = (state_18419[(18)]);
var inst_18392 = (inst_18361.cljs$core$IFn$_invoke$arity$1 ? inst_18361.cljs$core$IFn$_invoke$arity$1(inst_18370) : inst_18361.call(null,inst_18370));
var inst_18393 = cljs.core.not(inst_18392);
var state_18419__$1 = state_18419;
var statearr_18466_20370 = state_18419__$1;
(statearr_18466_20370[(2)] = inst_18393);

(statearr_18466_20370[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (3))){
var inst_18414 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18419__$1,inst_18414);
} else {
if((state_val_18420 === (12))){
var state_18419__$1 = state_18419;
var statearr_18471_20371 = state_18419__$1;
(statearr_18471_20371[(2)] = null);

(statearr_18471_20371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (2))){
var inst_18355 = (state_18419[(8)]);
var inst_18359 = (state_18419[(12)]);
var inst_18359__$1 = cljs.core.__destructure_map(inst_18355);
var inst_18360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18359__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18359__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18359__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18419__$1 = (function (){var statearr_18475 = state_18419;
(statearr_18475[(18)] = inst_18361);

(statearr_18475[(12)] = inst_18359__$1);

(statearr_18475[(15)] = inst_18360);

return statearr_18475;
})();
return cljs.core.async.ioc_alts_BANG_(state_18419__$1,(4),inst_18363);
} else {
if((state_val_18420 === (23))){
var inst_18401 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
if(cljs.core.truth_(inst_18401)){
var statearr_18480_20372 = state_18419__$1;
(statearr_18480_20372[(1)] = (24));

} else {
var statearr_18482_20373 = state_18419__$1;
(statearr_18482_20373[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (19))){
var inst_18396 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
var statearr_18487_20374 = state_18419__$1;
(statearr_18487_20374[(2)] = inst_18396);

(statearr_18487_20374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (11))){
var inst_18370 = (state_18419[(14)]);
var inst_18380 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18370);
var state_18419__$1 = state_18419;
var statearr_18489_20375 = state_18419__$1;
(statearr_18489_20375[(2)] = inst_18380);

(statearr_18489_20375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (9))){
var inst_18370 = (state_18419[(14)]);
var inst_18387 = (state_18419[(19)]);
var inst_18360 = (state_18419[(15)]);
var inst_18387__$1 = (inst_18360.cljs$core$IFn$_invoke$arity$1 ? inst_18360.cljs$core$IFn$_invoke$arity$1(inst_18370) : inst_18360.call(null,inst_18370));
var state_18419__$1 = (function (){var statearr_18490 = state_18419;
(statearr_18490[(19)] = inst_18387__$1);

return statearr_18490;
})();
if(cljs.core.truth_(inst_18387__$1)){
var statearr_18491_20376 = state_18419__$1;
(statearr_18491_20376[(1)] = (14));

} else {
var statearr_18492_20377 = state_18419__$1;
(statearr_18492_20377[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (5))){
var inst_18371 = (state_18419[(13)]);
var state_18419__$1 = state_18419;
var statearr_18493_20378 = state_18419__$1;
(statearr_18493_20378[(2)] = inst_18371);

(statearr_18493_20378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (14))){
var inst_18387 = (state_18419[(19)]);
var state_18419__$1 = state_18419;
var statearr_18496_20379 = state_18419__$1;
(statearr_18496_20379[(2)] = inst_18387);

(statearr_18496_20379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (26))){
var inst_18406 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
var statearr_18501_20380 = state_18419__$1;
(statearr_18501_20380[(2)] = inst_18406);

(statearr_18501_20380[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (16))){
var inst_18398 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
if(cljs.core.truth_(inst_18398)){
var statearr_18503_20381 = state_18419__$1;
(statearr_18503_20381[(1)] = (20));

} else {
var statearr_18504_20382 = state_18419__$1;
(statearr_18504_20382[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (10))){
var inst_18412 = (state_18419[(2)]);
var state_18419__$1 = state_18419;
var statearr_18507_20386 = state_18419__$1;
(statearr_18507_20386[(2)] = inst_18412);

(statearr_18507_20386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (18))){
var inst_18390 = (state_18419[(16)]);
var state_18419__$1 = state_18419;
var statearr_18514_20387 = state_18419__$1;
(statearr_18514_20387[(2)] = inst_18390);

(statearr_18514_20387[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18420 === (8))){
var inst_18369 = (state_18419[(7)]);
var inst_18378 = (inst_18369 == null);
var state_18419__$1 = state_18419;
if(cljs.core.truth_(inst_18378)){
var statearr_18516_20388 = state_18419__$1;
(statearr_18516_20388[(1)] = (11));

} else {
var statearr_18517_20389 = state_18419__$1;
(statearr_18517_20389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15869__auto__ = null;
var cljs$core$async$mix_$_state_machine__15869__auto____0 = (function (){
var statearr_18522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18522[(0)] = cljs$core$async$mix_$_state_machine__15869__auto__);

(statearr_18522[(1)] = (1));

return statearr_18522;
});
var cljs$core$async$mix_$_state_machine__15869__auto____1 = (function (state_18419){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_18419);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e18527){var ex__15872__auto__ = e18527;
var statearr_18528_20396 = state_18419;
(statearr_18528_20396[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_18419[(4)]))){
var statearr_18529_20397 = state_18419;
(statearr_18529_20397[(1)] = cljs.core.first((state_18419[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20398 = state_18419;
state_18419 = G__20398;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15869__auto__ = function(state_18419){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15869__auto____1.call(this,state_18419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15869__auto____0;
cljs$core$async$mix_$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15869__auto____1;
return cljs$core$async$mix_$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_18532 = f__16336__auto__();
(statearr_18532[(6)] = c__16335__auto___20343);

return statearr_18532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20399 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20399(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20400 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20400(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20401 = (function() {
var G__20402 = null;
var G__20402__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20402__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20402 = function(p,v){
switch(arguments.length){
case 1:
return G__20402__1.call(this,p);
case 2:
return G__20402__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20402.cljs$core$IFn$_invoke$arity$1 = G__20402__1;
G__20402.cljs$core$IFn$_invoke$arity$2 = G__20402__2;
return G__20402;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18604 = arguments.length;
switch (G__18604) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20401(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20401(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18628 = arguments.length;
switch (G__18628) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18621_SHARP_){
if(cljs.core.truth_((p1__18621_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18621_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18621_SHARP_.call(null,topic)))){
return p1__18621_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18621_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18642 = meta18642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18643,meta18642__$1){
var self__ = this;
var _18643__$1 = this;
return (new cljs.core.async.t_cljs$core$async18641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18642__$1));
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18643){
var self__ = this;
var _18643__$1 = this;
return self__.meta18642;
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18642","meta18642",-1597424475,null)], null);
}));

(cljs.core.async.t_cljs$core$async18641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18641");

(cljs.core.async.t_cljs$core$async18641.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18641.
 */
cljs.core.async.__GT_t_cljs$core$async18641 = (function cljs$core$async$__GT_t_cljs$core$async18641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18642){
return (new cljs.core.async.t_cljs$core$async18641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18642));
});

}

return (new cljs.core.async.t_cljs$core$async18641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16335__auto___20414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_18797){
var state_val_18798 = (state_18797[(1)]);
if((state_val_18798 === (7))){
var inst_18791 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18806_20415 = state_18797__$1;
(statearr_18806_20415[(2)] = inst_18791);

(statearr_18806_20415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (20))){
var state_18797__$1 = state_18797;
var statearr_18810_20416 = state_18797__$1;
(statearr_18810_20416[(2)] = null);

(statearr_18810_20416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (1))){
var state_18797__$1 = state_18797;
var statearr_18812_20417 = state_18797__$1;
(statearr_18812_20417[(2)] = null);

(statearr_18812_20417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (24))){
var inst_18771 = (state_18797[(7)]);
var inst_18782 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18771);
var state_18797__$1 = state_18797;
var statearr_18814_20418 = state_18797__$1;
(statearr_18814_20418[(2)] = inst_18782);

(statearr_18814_20418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (4))){
var inst_18705 = (state_18797[(8)]);
var inst_18705__$1 = (state_18797[(2)]);
var inst_18707 = (inst_18705__$1 == null);
var state_18797__$1 = (function (){var statearr_18817 = state_18797;
(statearr_18817[(8)] = inst_18705__$1);

return statearr_18817;
})();
if(cljs.core.truth_(inst_18707)){
var statearr_18819_20419 = state_18797__$1;
(statearr_18819_20419[(1)] = (5));

} else {
var statearr_18822_20420 = state_18797__$1;
(statearr_18822_20420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (15))){
var inst_18764 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18823_20421 = state_18797__$1;
(statearr_18823_20421[(2)] = inst_18764);

(statearr_18823_20421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (21))){
var inst_18788 = (state_18797[(2)]);
var state_18797__$1 = (function (){var statearr_18825 = state_18797;
(statearr_18825[(9)] = inst_18788);

return statearr_18825;
})();
var statearr_18828_20422 = state_18797__$1;
(statearr_18828_20422[(2)] = null);

(statearr_18828_20422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (13))){
var inst_18739 = (state_18797[(10)]);
var inst_18742 = cljs.core.chunked_seq_QMARK_(inst_18739);
var state_18797__$1 = state_18797;
if(inst_18742){
var statearr_18830_20423 = state_18797__$1;
(statearr_18830_20423[(1)] = (16));

} else {
var statearr_18831_20424 = state_18797__$1;
(statearr_18831_20424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (22))){
var inst_18777 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
if(cljs.core.truth_(inst_18777)){
var statearr_18835_20437 = state_18797__$1;
(statearr_18835_20437[(1)] = (23));

} else {
var statearr_18838_20438 = state_18797__$1;
(statearr_18838_20438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (6))){
var inst_18773 = (state_18797[(11)]);
var inst_18771 = (state_18797[(7)]);
var inst_18705 = (state_18797[(8)]);
var inst_18771__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18705) : topic_fn.call(null,inst_18705));
var inst_18772 = cljs.core.deref(mults);
var inst_18773__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18772,inst_18771__$1);
var state_18797__$1 = (function (){var statearr_18840 = state_18797;
(statearr_18840[(11)] = inst_18773__$1);

(statearr_18840[(7)] = inst_18771__$1);

return statearr_18840;
})();
if(cljs.core.truth_(inst_18773__$1)){
var statearr_18842_20439 = state_18797__$1;
(statearr_18842_20439[(1)] = (19));

} else {
var statearr_18843_20440 = state_18797__$1;
(statearr_18843_20440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (25))){
var inst_18784 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18850_20442 = state_18797__$1;
(statearr_18850_20442[(2)] = inst_18784);

(statearr_18850_20442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (17))){
var inst_18739 = (state_18797[(10)]);
var inst_18754 = cljs.core.first(inst_18739);
var inst_18756 = cljs.core.async.muxch_STAR_(inst_18754);
var inst_18757 = cljs.core.async.close_BANG_(inst_18756);
var inst_18758 = cljs.core.next(inst_18739);
var inst_18719 = inst_18758;
var inst_18720 = null;
var inst_18721 = (0);
var inst_18722 = (0);
var state_18797__$1 = (function (){var statearr_18852 = state_18797;
(statearr_18852[(12)] = inst_18722);

(statearr_18852[(13)] = inst_18719);

(statearr_18852[(14)] = inst_18721);

(statearr_18852[(15)] = inst_18720);

(statearr_18852[(16)] = inst_18757);

return statearr_18852;
})();
var statearr_18855_20444 = state_18797__$1;
(statearr_18855_20444[(2)] = null);

(statearr_18855_20444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (3))){
var inst_18793 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18797__$1,inst_18793);
} else {
if((state_val_18798 === (12))){
var inst_18766 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18858_20446 = state_18797__$1;
(statearr_18858_20446[(2)] = inst_18766);

(statearr_18858_20446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (2))){
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18797__$1,(4),ch);
} else {
if((state_val_18798 === (23))){
var state_18797__$1 = state_18797;
var statearr_18862_20447 = state_18797__$1;
(statearr_18862_20447[(2)] = null);

(statearr_18862_20447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (19))){
var inst_18773 = (state_18797[(11)]);
var inst_18705 = (state_18797[(8)]);
var inst_18775 = cljs.core.async.muxch_STAR_(inst_18773);
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18797__$1,(22),inst_18775,inst_18705);
} else {
if((state_val_18798 === (11))){
var inst_18719 = (state_18797[(13)]);
var inst_18739 = (state_18797[(10)]);
var inst_18739__$1 = cljs.core.seq(inst_18719);
var state_18797__$1 = (function (){var statearr_18868 = state_18797;
(statearr_18868[(10)] = inst_18739__$1);

return statearr_18868;
})();
if(inst_18739__$1){
var statearr_18870_20448 = state_18797__$1;
(statearr_18870_20448[(1)] = (13));

} else {
var statearr_18871_20449 = state_18797__$1;
(statearr_18871_20449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (9))){
var inst_18768 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18873_20450 = state_18797__$1;
(statearr_18873_20450[(2)] = inst_18768);

(statearr_18873_20450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (5))){
var inst_18716 = cljs.core.deref(mults);
var inst_18717 = cljs.core.vals(inst_18716);
var inst_18718 = cljs.core.seq(inst_18717);
var inst_18719 = inst_18718;
var inst_18720 = null;
var inst_18721 = (0);
var inst_18722 = (0);
var state_18797__$1 = (function (){var statearr_18877 = state_18797;
(statearr_18877[(12)] = inst_18722);

(statearr_18877[(13)] = inst_18719);

(statearr_18877[(14)] = inst_18721);

(statearr_18877[(15)] = inst_18720);

return statearr_18877;
})();
var statearr_18879_20453 = state_18797__$1;
(statearr_18879_20453[(2)] = null);

(statearr_18879_20453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (14))){
var state_18797__$1 = state_18797;
var statearr_18886_20454 = state_18797__$1;
(statearr_18886_20454[(2)] = null);

(statearr_18886_20454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (16))){
var inst_18739 = (state_18797[(10)]);
var inst_18745 = cljs.core.chunk_first(inst_18739);
var inst_18746 = cljs.core.chunk_rest(inst_18739);
var inst_18747 = cljs.core.count(inst_18745);
var inst_18719 = inst_18746;
var inst_18720 = inst_18745;
var inst_18721 = inst_18747;
var inst_18722 = (0);
var state_18797__$1 = (function (){var statearr_18894 = state_18797;
(statearr_18894[(12)] = inst_18722);

(statearr_18894[(13)] = inst_18719);

(statearr_18894[(14)] = inst_18721);

(statearr_18894[(15)] = inst_18720);

return statearr_18894;
})();
var statearr_18896_20455 = state_18797__$1;
(statearr_18896_20455[(2)] = null);

(statearr_18896_20455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (10))){
var inst_18722 = (state_18797[(12)]);
var inst_18719 = (state_18797[(13)]);
var inst_18721 = (state_18797[(14)]);
var inst_18720 = (state_18797[(15)]);
var inst_18728 = cljs.core._nth(inst_18720,inst_18722);
var inst_18729 = cljs.core.async.muxch_STAR_(inst_18728);
var inst_18730 = cljs.core.async.close_BANG_(inst_18729);
var inst_18731 = (inst_18722 + (1));
var tmp18882 = inst_18719;
var tmp18883 = inst_18721;
var tmp18884 = inst_18720;
var inst_18719__$1 = tmp18882;
var inst_18720__$1 = tmp18884;
var inst_18721__$1 = tmp18883;
var inst_18722__$1 = inst_18731;
var state_18797__$1 = (function (){var statearr_18903 = state_18797;
(statearr_18903[(12)] = inst_18722__$1);

(statearr_18903[(13)] = inst_18719__$1);

(statearr_18903[(14)] = inst_18721__$1);

(statearr_18903[(17)] = inst_18730);

(statearr_18903[(15)] = inst_18720__$1);

return statearr_18903;
})();
var statearr_18904_20456 = state_18797__$1;
(statearr_18904_20456[(2)] = null);

(statearr_18904_20456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (18))){
var inst_18761 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18905_20457 = state_18797__$1;
(statearr_18905_20457[(2)] = inst_18761);

(statearr_18905_20457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18798 === (8))){
var inst_18722 = (state_18797[(12)]);
var inst_18721 = (state_18797[(14)]);
var inst_18724 = (inst_18722 < inst_18721);
var inst_18725 = inst_18724;
var state_18797__$1 = state_18797;
if(cljs.core.truth_(inst_18725)){
var statearr_18906_20458 = state_18797__$1;
(statearr_18906_20458[(1)] = (10));

} else {
var statearr_18907_20459 = state_18797__$1;
(statearr_18907_20459[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_18909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18909[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_18909[(1)] = (1));

return statearr_18909;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_18797){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_18797);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e18910){var ex__15872__auto__ = e18910;
var statearr_18911_20460 = state_18797;
(statearr_18911_20460[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_18797[(4)]))){
var statearr_18912_20461 = state_18797;
(statearr_18912_20461[(1)] = cljs.core.first((state_18797[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20462 = state_18797;
state_18797 = G__20462;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_18797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_18797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_18913 = f__16336__auto__();
(statearr_18913[(6)] = c__16335__auto___20414);

return statearr_18913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18916 = arguments.length;
switch (G__18916) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18920 = arguments.length;
switch (G__18920) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18923 = arguments.length;
switch (G__18923) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16335__auto___20473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var state_18966__$1 = state_18966;
var statearr_18968_20474 = state_18966__$1;
(statearr_18968_20474[(2)] = null);

(statearr_18968_20474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (1))){
var state_18966__$1 = state_18966;
var statearr_18969_20475 = state_18966__$1;
(statearr_18969_20475[(2)] = null);

(statearr_18969_20475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (4))){
var inst_18926 = (state_18966[(7)]);
var inst_18927 = (state_18966[(8)]);
var inst_18929 = (inst_18927 < inst_18926);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18929)){
var statearr_18973_20476 = state_18966__$1;
(statearr_18973_20476[(1)] = (6));

} else {
var statearr_18974_20477 = state_18966__$1;
(statearr_18974_20477[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (15))){
var inst_18952 = (state_18966[(9)]);
var inst_18957 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18952);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18966__$1,(17),out,inst_18957);
} else {
if((state_val_18967 === (13))){
var inst_18952 = (state_18966[(9)]);
var inst_18952__$1 = (state_18966[(2)]);
var inst_18953 = cljs.core.some(cljs.core.nil_QMARK_,inst_18952__$1);
var state_18966__$1 = (function (){var statearr_18980 = state_18966;
(statearr_18980[(9)] = inst_18952__$1);

return statearr_18980;
})();
if(cljs.core.truth_(inst_18953)){
var statearr_18982_20480 = state_18966__$1;
(statearr_18982_20480[(1)] = (14));

} else {
var statearr_18983_20482 = state_18966__$1;
(statearr_18983_20482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (6))){
var state_18966__$1 = state_18966;
var statearr_18986_20483 = state_18966__$1;
(statearr_18986_20483[(2)] = null);

(statearr_18986_20483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (17))){
var inst_18959 = (state_18966[(2)]);
var state_18966__$1 = (function (){var statearr_18996 = state_18966;
(statearr_18996[(10)] = inst_18959);

return statearr_18996;
})();
var statearr_18999_20485 = state_18966__$1;
(statearr_18999_20485[(2)] = null);

(statearr_18999_20485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (3))){
var inst_18964 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (12))){
var _ = (function (){var statearr_19000 = state_18966;
(statearr_19000[(4)] = cljs.core.rest((state_18966[(4)])));

return statearr_19000;
})();
var state_18966__$1 = state_18966;
var ex18991 = (state_18966__$1[(2)]);
var statearr_19001_20487 = state_18966__$1;
(statearr_19001_20487[(5)] = ex18991);


if((ex18991 instanceof Object)){
var statearr_19003_20489 = state_18966__$1;
(statearr_19003_20489[(1)] = (11));

(statearr_19003_20489[(5)] = null);

} else {
throw ex18991;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (2))){
var inst_18925 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18926 = cnt;
var inst_18927 = (0);
var state_18966__$1 = (function (){var statearr_19013 = state_18966;
(statearr_19013[(7)] = inst_18926);

(statearr_19013[(11)] = inst_18925);

(statearr_19013[(8)] = inst_18927);

return statearr_19013;
})();
var statearr_19014_20490 = state_18966__$1;
(statearr_19014_20490[(2)] = null);

(statearr_19014_20490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (11))){
var inst_18931 = (state_18966[(2)]);
var inst_18932 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18966__$1 = (function (){var statearr_19018 = state_18966;
(statearr_19018[(12)] = inst_18931);

return statearr_19018;
})();
var statearr_19021_20491 = state_18966__$1;
(statearr_19021_20491[(2)] = inst_18932);

(statearr_19021_20491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (9))){
var inst_18927 = (state_18966[(8)]);
var _ = (function (){var statearr_19022 = state_18966;
(statearr_19022[(4)] = cljs.core.cons((12),(state_18966[(4)])));

return statearr_19022;
})();
var inst_18938 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18927) : chs__$1.call(null,inst_18927));
var inst_18939 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18927) : done.call(null,inst_18927));
var inst_18940 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18938,inst_18939);
var ___$1 = (function (){var statearr_19023 = state_18966;
(statearr_19023[(4)] = cljs.core.rest((state_18966[(4)])));

return statearr_19023;
})();
var state_18966__$1 = state_18966;
var statearr_19024_20492 = state_18966__$1;
(statearr_19024_20492[(2)] = inst_18940);

(statearr_19024_20492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (5))){
var inst_18950 = (state_18966[(2)]);
var state_18966__$1 = (function (){var statearr_19028 = state_18966;
(statearr_19028[(13)] = inst_18950);

return statearr_19028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(13),dchan);
} else {
if((state_val_18967 === (14))){
var inst_18955 = cljs.core.async.close_BANG_(out);
var state_18966__$1 = state_18966;
var statearr_19031_20494 = state_18966__$1;
(statearr_19031_20494[(2)] = inst_18955);

(statearr_19031_20494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (16))){
var inst_18962 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19033_20503 = state_18966__$1;
(statearr_19033_20503[(2)] = inst_18962);

(statearr_19033_20503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (10))){
var inst_18927 = (state_18966[(8)]);
var inst_18943 = (state_18966[(2)]);
var inst_18944 = (inst_18927 + (1));
var inst_18927__$1 = inst_18944;
var state_18966__$1 = (function (){var statearr_19034 = state_18966;
(statearr_19034[(14)] = inst_18943);

(statearr_19034[(8)] = inst_18927__$1);

return statearr_19034;
})();
var statearr_19038_20504 = state_18966__$1;
(statearr_19038_20504[(2)] = null);

(statearr_19038_20504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (8))){
var inst_18948 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_19039_20506 = state_18966__$1;
(statearr_19039_20506[(2)] = inst_18948);

(statearr_19039_20506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19041[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19041[(1)] = (1));

return statearr_19041;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_18966){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19042){var ex__15872__auto__ = e19042;
var statearr_19043_20508 = state_18966;
(statearr_19043_20508[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_18966[(4)]))){
var statearr_19045_20509 = state_18966;
(statearr_19045_20509[(1)] = cljs.core.first((state_18966[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20510 = state_18966;
state_18966 = G__20510;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19048 = f__16336__auto__();
(statearr_19048[(6)] = c__16335__auto___20473);

return statearr_19048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19051 = arguments.length;
switch (G__19051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var inst_19071 = (state_19095[(7)]);
var inst_19070 = (state_19095[(8)]);
var inst_19070__$1 = (state_19095[(2)]);
var inst_19071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19070__$1,(0),null);
var inst_19072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19070__$1,(1),null);
var inst_19073 = (inst_19071__$1 == null);
var state_19095__$1 = (function (){var statearr_19103 = state_19095;
(statearr_19103[(7)] = inst_19071__$1);

(statearr_19103[(9)] = inst_19072);

(statearr_19103[(8)] = inst_19070__$1);

return statearr_19103;
})();
if(cljs.core.truth_(inst_19073)){
var statearr_19104_20529 = state_19095__$1;
(statearr_19104_20529[(1)] = (8));

} else {
var statearr_19108_20530 = state_19095__$1;
(statearr_19108_20530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var inst_19060 = cljs.core.vec(chs);
var inst_19061 = inst_19060;
var state_19095__$1 = (function (){var statearr_19112 = state_19095;
(statearr_19112[(10)] = inst_19061);

return statearr_19112;
})();
var statearr_19113_20531 = state_19095__$1;
(statearr_19113_20531[(2)] = null);

(statearr_19113_20531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var inst_19061 = (state_19095[(10)]);
var state_19095__$1 = state_19095;
return cljs.core.async.ioc_alts_BANG_(state_19095__$1,(7),inst_19061);
} else {
if((state_val_19096 === (6))){
var inst_19091 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19116_20543 = state_19095__$1;
(statearr_19116_20543[(2)] = inst_19091);

(statearr_19116_20543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (3))){
var inst_19093 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (2))){
var inst_19061 = (state_19095[(10)]);
var inst_19063 = cljs.core.count(inst_19061);
var inst_19064 = (inst_19063 > (0));
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_19064)){
var statearr_19118_20545 = state_19095__$1;
(statearr_19118_20545[(1)] = (4));

} else {
var statearr_19119_20546 = state_19095__$1;
(statearr_19119_20546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (11))){
var inst_19061 = (state_19095[(10)]);
var inst_19083 = (state_19095[(2)]);
var tmp19117 = inst_19061;
var inst_19061__$1 = tmp19117;
var state_19095__$1 = (function (){var statearr_19120 = state_19095;
(statearr_19120[(10)] = inst_19061__$1);

(statearr_19120[(11)] = inst_19083);

return statearr_19120;
})();
var statearr_19121_20548 = state_19095__$1;
(statearr_19121_20548[(2)] = null);

(statearr_19121_20548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (9))){
var inst_19071 = (state_19095[(7)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19095__$1,(11),out,inst_19071);
} else {
if((state_val_19096 === (5))){
var inst_19089 = cljs.core.async.close_BANG_(out);
var state_19095__$1 = state_19095;
var statearr_19130_20549 = state_19095__$1;
(statearr_19130_20549[(2)] = inst_19089);

(statearr_19130_20549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (10))){
var inst_19086 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19134_20550 = state_19095__$1;
(statearr_19134_20550[(2)] = inst_19086);

(statearr_19134_20550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (8))){
var inst_19071 = (state_19095[(7)]);
var inst_19061 = (state_19095[(10)]);
var inst_19072 = (state_19095[(9)]);
var inst_19070 = (state_19095[(8)]);
var inst_19078 = (function (){var cs = inst_19061;
var vec__19066 = inst_19070;
var v = inst_19071;
var c = inst_19072;
return (function (p1__19049_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19049_SHARP_);
});
})();
var inst_19079 = cljs.core.filterv(inst_19078,inst_19061);
var inst_19061__$1 = inst_19079;
var state_19095__$1 = (function (){var statearr_19136 = state_19095;
(statearr_19136[(10)] = inst_19061__$1);

return statearr_19136;
})();
var statearr_19142_20553 = state_19095__$1;
(statearr_19142_20553[(2)] = null);

(statearr_19142_20553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19146[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19146[(1)] = (1));

return statearr_19146;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19095){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19095);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19148){var ex__15872__auto__ = e19148;
var statearr_19149_20554 = state_19095;
(statearr_19149_20554[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19095[(4)]))){
var statearr_19151_20558 = state_19095;
(statearr_19151_20558[(1)] = cljs.core.first((state_19095[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20561 = state_19095;
state_19095 = G__20561;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19156 = f__16336__auto__();
(statearr_19156[(6)] = c__16335__auto___20522);

return statearr_19156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19171 = arguments.length;
switch (G__19171) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19206){
var state_val_19208 = (state_19206[(1)]);
if((state_val_19208 === (7))){
var inst_19187 = (state_19206[(7)]);
var inst_19187__$1 = (state_19206[(2)]);
var inst_19188 = (inst_19187__$1 == null);
var inst_19189 = cljs.core.not(inst_19188);
var state_19206__$1 = (function (){var statearr_19216 = state_19206;
(statearr_19216[(7)] = inst_19187__$1);

return statearr_19216;
})();
if(inst_19189){
var statearr_19217_20569 = state_19206__$1;
(statearr_19217_20569[(1)] = (8));

} else {
var statearr_19218_20570 = state_19206__$1;
(statearr_19218_20570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (1))){
var inst_19180 = (0);
var state_19206__$1 = (function (){var statearr_19223 = state_19206;
(statearr_19223[(8)] = inst_19180);

return statearr_19223;
})();
var statearr_19225_20572 = state_19206__$1;
(statearr_19225_20572[(2)] = null);

(statearr_19225_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (4))){
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19206__$1,(7),ch);
} else {
if((state_val_19208 === (6))){
var inst_19200 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19229_20573 = state_19206__$1;
(statearr_19229_20573[(2)] = inst_19200);

(statearr_19229_20573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (3))){
var inst_19202 = (state_19206[(2)]);
var inst_19203 = cljs.core.async.close_BANG_(out);
var state_19206__$1 = (function (){var statearr_19231 = state_19206;
(statearr_19231[(9)] = inst_19202);

return statearr_19231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19206__$1,inst_19203);
} else {
if((state_val_19208 === (2))){
var inst_19180 = (state_19206[(8)]);
var inst_19183 = (inst_19180 < n);
var state_19206__$1 = state_19206;
if(cljs.core.truth_(inst_19183)){
var statearr_19232_20576 = state_19206__$1;
(statearr_19232_20576[(1)] = (4));

} else {
var statearr_19233_20577 = state_19206__$1;
(statearr_19233_20577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (11))){
var inst_19180 = (state_19206[(8)]);
var inst_19192 = (state_19206[(2)]);
var inst_19193 = (inst_19180 + (1));
var inst_19180__$1 = inst_19193;
var state_19206__$1 = (function (){var statearr_19236 = state_19206;
(statearr_19236[(8)] = inst_19180__$1);

(statearr_19236[(10)] = inst_19192);

return statearr_19236;
})();
var statearr_19237_20578 = state_19206__$1;
(statearr_19237_20578[(2)] = null);

(statearr_19237_20578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (9))){
var state_19206__$1 = state_19206;
var statearr_19240_20579 = state_19206__$1;
(statearr_19240_20579[(2)] = null);

(statearr_19240_20579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (5))){
var state_19206__$1 = state_19206;
var statearr_19241_20581 = state_19206__$1;
(statearr_19241_20581[(2)] = null);

(statearr_19241_20581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (10))){
var inst_19197 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19242_20582 = state_19206__$1;
(statearr_19242_20582[(2)] = inst_19197);

(statearr_19242_20582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (8))){
var inst_19187 = (state_19206[(7)]);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19206__$1,(11),out,inst_19187);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19248[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19248[(1)] = (1));

return statearr_19248;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19206){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19206);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19249){var ex__15872__auto__ = e19249;
var statearr_19250_20594 = state_19206;
(statearr_19250_20594[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19206[(4)]))){
var statearr_19252_20595 = state_19206;
(statearr_19252_20595[(1)] = cljs.core.first((state_19206[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20596 = state_19206;
state_19206 = G__20596;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19256 = f__16336__auto__();
(statearr_19256[(6)] = c__16335__auto___20564);

return statearr_19256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19259 = (function (f,ch,meta19260){
this.f = f;
this.ch = ch;
this.meta19260 = meta19260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19261,meta19260__$1){
var self__ = this;
var _19261__$1 = this;
return (new cljs.core.async.t_cljs$core$async19259(self__.f,self__.ch,meta19260__$1));
}));

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19261){
var self__ = this;
var _19261__$1 = this;
return self__.meta19260;
}));

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19271 = (function (f,ch,meta19260,_,fn1,meta19272){
this.f = f;
this.ch = ch;
this.meta19260 = meta19260;
this._ = _;
this.fn1 = fn1;
this.meta19272 = meta19272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19273,meta19272__$1){
var self__ = this;
var _19273__$1 = this;
return (new cljs.core.async.t_cljs$core$async19271(self__.f,self__.ch,self__.meta19260,self__._,self__.fn1,meta19272__$1));
}));

(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19273){
var self__ = this;
var _19273__$1 = this;
return self__.meta19272;
}));

(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19258_SHARP_){
var G__19285 = (((p1__19258_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19258_SHARP_) : self__.f.call(null,p1__19258_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19285) : f1.call(null,G__19285));
});
}));

(cljs.core.async.t_cljs$core$async19271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19260","meta19260",-1054143425,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19259","cljs.core.async/t_cljs$core$async19259",1867468911,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19272","meta19272",-2101318812,null)], null);
}));

(cljs.core.async.t_cljs$core$async19271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19271");

(cljs.core.async.t_cljs$core$async19271.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19271.
 */
cljs.core.async.__GT_t_cljs$core$async19271 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19271(f__$1,ch__$1,meta19260__$1,___$2,fn1__$1,meta19272){
return (new cljs.core.async.t_cljs$core$async19271(f__$1,ch__$1,meta19260__$1,___$2,fn1__$1,meta19272));
});

}

return (new cljs.core.async.t_cljs$core$async19271(self__.f,self__.ch,self__.meta19260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19289 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19289) : self__.f.call(null,G__19289));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19260","meta19260",-1054143425,null)], null);
}));

(cljs.core.async.t_cljs$core$async19259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19259");

(cljs.core.async.t_cljs$core$async19259.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19259.
 */
cljs.core.async.__GT_t_cljs$core$async19259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19259(f__$1,ch__$1,meta19260){
return (new cljs.core.async.t_cljs$core$async19259(f__$1,ch__$1,meta19260));
});

}

return (new cljs.core.async.t_cljs$core$async19259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19300 = (function (f,ch,meta19301){
this.f = f;
this.ch = ch;
this.meta19301 = meta19301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19302,meta19301__$1){
var self__ = this;
var _19302__$1 = this;
return (new cljs.core.async.t_cljs$core$async19300(self__.f,self__.ch,meta19301__$1));
}));

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19302){
var self__ = this;
var _19302__$1 = this;
return self__.meta19301;
}));

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19301","meta19301",1675812009,null)], null);
}));

(cljs.core.async.t_cljs$core$async19300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19300");

(cljs.core.async.t_cljs$core$async19300.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19300.
 */
cljs.core.async.__GT_t_cljs$core$async19300 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19300(f__$1,ch__$1,meta19301){
return (new cljs.core.async.t_cljs$core$async19300(f__$1,ch__$1,meta19301));
});

}

return (new cljs.core.async.t_cljs$core$async19300(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19318 = (function (p,ch,meta19319){
this.p = p;
this.ch = ch;
this.meta19319 = meta19319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19320,meta19319__$1){
var self__ = this;
var _19320__$1 = this;
return (new cljs.core.async.t_cljs$core$async19318(self__.p,self__.ch,meta19319__$1));
}));

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19320){
var self__ = this;
var _19320__$1 = this;
return self__.meta19319;
}));

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19319","meta19319",1076318363,null)], null);
}));

(cljs.core.async.t_cljs$core$async19318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19318");

(cljs.core.async.t_cljs$core$async19318.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19318.
 */
cljs.core.async.__GT_t_cljs$core$async19318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19318(p__$1,ch__$1,meta19319){
return (new cljs.core.async.t_cljs$core$async19318(p__$1,ch__$1,meta19319));
});

}

return (new cljs.core.async.t_cljs$core$async19318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19336 = arguments.length;
switch (G__19336) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19357){
var state_val_19358 = (state_19357[(1)]);
if((state_val_19358 === (7))){
var inst_19353 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19359_20632 = state_19357__$1;
(statearr_19359_20632[(2)] = inst_19353);

(statearr_19359_20632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (1))){
var state_19357__$1 = state_19357;
var statearr_19361_20633 = state_19357__$1;
(statearr_19361_20633[(2)] = null);

(statearr_19361_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (4))){
var inst_19339 = (state_19357[(7)]);
var inst_19339__$1 = (state_19357[(2)]);
var inst_19340 = (inst_19339__$1 == null);
var state_19357__$1 = (function (){var statearr_19363 = state_19357;
(statearr_19363[(7)] = inst_19339__$1);

return statearr_19363;
})();
if(cljs.core.truth_(inst_19340)){
var statearr_19364_20635 = state_19357__$1;
(statearr_19364_20635[(1)] = (5));

} else {
var statearr_19365_20636 = state_19357__$1;
(statearr_19365_20636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (6))){
var inst_19339 = (state_19357[(7)]);
var inst_19344 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19339) : p.call(null,inst_19339));
var state_19357__$1 = state_19357;
if(cljs.core.truth_(inst_19344)){
var statearr_19367_20637 = state_19357__$1;
(statearr_19367_20637[(1)] = (8));

} else {
var statearr_19370_20638 = state_19357__$1;
(statearr_19370_20638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (3))){
var inst_19355 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19357__$1,inst_19355);
} else {
if((state_val_19358 === (2))){
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19357__$1,(4),ch);
} else {
if((state_val_19358 === (11))){
var inst_19347 = (state_19357[(2)]);
var state_19357__$1 = state_19357;
var statearr_19375_20640 = state_19357__$1;
(statearr_19375_20640[(2)] = inst_19347);

(statearr_19375_20640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (9))){
var state_19357__$1 = state_19357;
var statearr_19376_20641 = state_19357__$1;
(statearr_19376_20641[(2)] = null);

(statearr_19376_20641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (5))){
var inst_19342 = cljs.core.async.close_BANG_(out);
var state_19357__$1 = state_19357;
var statearr_19378_20643 = state_19357__$1;
(statearr_19378_20643[(2)] = inst_19342);

(statearr_19378_20643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (10))){
var inst_19350 = (state_19357[(2)]);
var state_19357__$1 = (function (){var statearr_19380 = state_19357;
(statearr_19380[(8)] = inst_19350);

return statearr_19380;
})();
var statearr_19381_20648 = state_19357__$1;
(statearr_19381_20648[(2)] = null);

(statearr_19381_20648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19358 === (8))){
var inst_19339 = (state_19357[(7)]);
var state_19357__$1 = state_19357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19357__$1,(11),out,inst_19339);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19383 = [null,null,null,null,null,null,null,null,null];
(statearr_19383[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19383[(1)] = (1));

return statearr_19383;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19357){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19357);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19384){var ex__15872__auto__ = e19384;
var statearr_19385_20649 = state_19357;
(statearr_19385_20649[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19357[(4)]))){
var statearr_19387_20650 = state_19357;
(statearr_19387_20650[(1)] = cljs.core.first((state_19357[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20657 = state_19357;
state_19357 = G__20657;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19393 = f__16336__auto__();
(statearr_19393[(6)] = c__16335__auto___20631);

return statearr_19393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19398 = arguments.length;
switch (G__19398) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16335__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19484){
var state_val_19485 = (state_19484[(1)]);
if((state_val_19485 === (7))){
var inst_19479 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19494_20662 = state_19484__$1;
(statearr_19494_20662[(2)] = inst_19479);

(statearr_19494_20662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (20))){
var inst_19443 = (state_19484[(7)]);
var inst_19460 = (state_19484[(2)]);
var inst_19461 = cljs.core.next(inst_19443);
var inst_19416 = inst_19461;
var inst_19417 = null;
var inst_19418 = (0);
var inst_19419 = (0);
var state_19484__$1 = (function (){var statearr_19498 = state_19484;
(statearr_19498[(8)] = inst_19416);

(statearr_19498[(9)] = inst_19419);

(statearr_19498[(10)] = inst_19417);

(statearr_19498[(11)] = inst_19418);

(statearr_19498[(12)] = inst_19460);

return statearr_19498;
})();
var statearr_19499_20663 = state_19484__$1;
(statearr_19499_20663[(2)] = null);

(statearr_19499_20663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (1))){
var state_19484__$1 = state_19484;
var statearr_19500_20664 = state_19484__$1;
(statearr_19500_20664[(2)] = null);

(statearr_19500_20664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (4))){
var inst_19405 = (state_19484[(13)]);
var inst_19405__$1 = (state_19484[(2)]);
var inst_19406 = (inst_19405__$1 == null);
var state_19484__$1 = (function (){var statearr_19504 = state_19484;
(statearr_19504[(13)] = inst_19405__$1);

return statearr_19504;
})();
if(cljs.core.truth_(inst_19406)){
var statearr_19505_20665 = state_19484__$1;
(statearr_19505_20665[(1)] = (5));

} else {
var statearr_19506_20666 = state_19484__$1;
(statearr_19506_20666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (15))){
var state_19484__$1 = state_19484;
var statearr_19510_20672 = state_19484__$1;
(statearr_19510_20672[(2)] = null);

(statearr_19510_20672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (21))){
var state_19484__$1 = state_19484;
var statearr_19511_20676 = state_19484__$1;
(statearr_19511_20676[(2)] = null);

(statearr_19511_20676[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (13))){
var inst_19416 = (state_19484[(8)]);
var inst_19419 = (state_19484[(9)]);
var inst_19417 = (state_19484[(10)]);
var inst_19418 = (state_19484[(11)]);
var inst_19439 = (state_19484[(2)]);
var inst_19440 = (inst_19419 + (1));
var tmp19507 = inst_19416;
var tmp19508 = inst_19417;
var tmp19509 = inst_19418;
var inst_19416__$1 = tmp19507;
var inst_19417__$1 = tmp19508;
var inst_19418__$1 = tmp19509;
var inst_19419__$1 = inst_19440;
var state_19484__$1 = (function (){var statearr_19512 = state_19484;
(statearr_19512[(8)] = inst_19416__$1);

(statearr_19512[(9)] = inst_19419__$1);

(statearr_19512[(10)] = inst_19417__$1);

(statearr_19512[(14)] = inst_19439);

(statearr_19512[(11)] = inst_19418__$1);

return statearr_19512;
})();
var statearr_19513_20677 = state_19484__$1;
(statearr_19513_20677[(2)] = null);

(statearr_19513_20677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (22))){
var state_19484__$1 = state_19484;
var statearr_19514_20678 = state_19484__$1;
(statearr_19514_20678[(2)] = null);

(statearr_19514_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (6))){
var inst_19405 = (state_19484[(13)]);
var inst_19414 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19405) : f.call(null,inst_19405));
var inst_19415 = cljs.core.seq(inst_19414);
var inst_19416 = inst_19415;
var inst_19417 = null;
var inst_19418 = (0);
var inst_19419 = (0);
var state_19484__$1 = (function (){var statearr_19515 = state_19484;
(statearr_19515[(8)] = inst_19416);

(statearr_19515[(9)] = inst_19419);

(statearr_19515[(10)] = inst_19417);

(statearr_19515[(11)] = inst_19418);

return statearr_19515;
})();
var statearr_19520_20679 = state_19484__$1;
(statearr_19520_20679[(2)] = null);

(statearr_19520_20679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (17))){
var inst_19443 = (state_19484[(7)]);
var inst_19453 = cljs.core.chunk_first(inst_19443);
var inst_19454 = cljs.core.chunk_rest(inst_19443);
var inst_19455 = cljs.core.count(inst_19453);
var inst_19416 = inst_19454;
var inst_19417 = inst_19453;
var inst_19418 = inst_19455;
var inst_19419 = (0);
var state_19484__$1 = (function (){var statearr_19521 = state_19484;
(statearr_19521[(8)] = inst_19416);

(statearr_19521[(9)] = inst_19419);

(statearr_19521[(10)] = inst_19417);

(statearr_19521[(11)] = inst_19418);

return statearr_19521;
})();
var statearr_19522_20686 = state_19484__$1;
(statearr_19522_20686[(2)] = null);

(statearr_19522_20686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (3))){
var inst_19481 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19484__$1,inst_19481);
} else {
if((state_val_19485 === (12))){
var inst_19469 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19523_20691 = state_19484__$1;
(statearr_19523_20691[(2)] = inst_19469);

(statearr_19523_20691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (2))){
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19484__$1,(4),in$);
} else {
if((state_val_19485 === (23))){
var inst_19477 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19524_20692 = state_19484__$1;
(statearr_19524_20692[(2)] = inst_19477);

(statearr_19524_20692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (19))){
var inst_19464 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19525_20693 = state_19484__$1;
(statearr_19525_20693[(2)] = inst_19464);

(statearr_19525_20693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (11))){
var inst_19416 = (state_19484[(8)]);
var inst_19443 = (state_19484[(7)]);
var inst_19443__$1 = cljs.core.seq(inst_19416);
var state_19484__$1 = (function (){var statearr_19526 = state_19484;
(statearr_19526[(7)] = inst_19443__$1);

return statearr_19526;
})();
if(inst_19443__$1){
var statearr_19528_20700 = state_19484__$1;
(statearr_19528_20700[(1)] = (14));

} else {
var statearr_19532_20701 = state_19484__$1;
(statearr_19532_20701[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (9))){
var inst_19471 = (state_19484[(2)]);
var inst_19472 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19484__$1 = (function (){var statearr_19533 = state_19484;
(statearr_19533[(15)] = inst_19471);

return statearr_19533;
})();
if(cljs.core.truth_(inst_19472)){
var statearr_19534_20702 = state_19484__$1;
(statearr_19534_20702[(1)] = (21));

} else {
var statearr_19535_20703 = state_19484__$1;
(statearr_19535_20703[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (5))){
var inst_19408 = cljs.core.async.close_BANG_(out);
var state_19484__$1 = state_19484;
var statearr_19538_20705 = state_19484__$1;
(statearr_19538_20705[(2)] = inst_19408);

(statearr_19538_20705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (14))){
var inst_19443 = (state_19484[(7)]);
var inst_19451 = cljs.core.chunked_seq_QMARK_(inst_19443);
var state_19484__$1 = state_19484;
if(inst_19451){
var statearr_19539_20706 = state_19484__$1;
(statearr_19539_20706[(1)] = (17));

} else {
var statearr_19540_20707 = state_19484__$1;
(statearr_19540_20707[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (16))){
var inst_19467 = (state_19484[(2)]);
var state_19484__$1 = state_19484;
var statearr_19542_20708 = state_19484__$1;
(statearr_19542_20708[(2)] = inst_19467);

(statearr_19542_20708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19485 === (10))){
var inst_19419 = (state_19484[(9)]);
var inst_19417 = (state_19484[(10)]);
var inst_19437 = cljs.core._nth(inst_19417,inst_19419);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19484__$1,(13),out,inst_19437);
} else {
if((state_val_19485 === (18))){
var inst_19443 = (state_19484[(7)]);
var inst_19458 = cljs.core.first(inst_19443);
var state_19484__$1 = state_19484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19484__$1,(20),out,inst_19458);
} else {
if((state_val_19485 === (8))){
var inst_19419 = (state_19484[(9)]);
var inst_19418 = (state_19484[(11)]);
var inst_19428 = (inst_19419 < inst_19418);
var inst_19429 = inst_19428;
var state_19484__$1 = state_19484;
if(cljs.core.truth_(inst_19429)){
var statearr_19544_20714 = state_19484__$1;
(statearr_19544_20714[(1)] = (10));

} else {
var statearr_19545_20715 = state_19484__$1;
(statearr_19545_20715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____0 = (function (){
var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19546[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__);

(statearr_19546[(1)] = (1));

return statearr_19546;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____1 = (function (state_19484){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19484);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19547){var ex__15872__auto__ = e19547;
var statearr_19548_20720 = state_19484;
(statearr_19548_20720[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19484[(4)]))){
var statearr_19549_20721 = state_19484;
(statearr_19549_20721[(1)] = cljs.core.first((state_19484[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20722 = state_19484;
state_19484 = G__20722;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__ = function(state_19484){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____1.call(this,state_19484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15869__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19550 = f__16336__auto__();
(statearr_19550[(6)] = c__16335__auto__);

return statearr_19550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));

return c__16335__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19553 = arguments.length;
switch (G__19553) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19557 = arguments.length;
switch (G__19557) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19563 = arguments.length;
switch (G__19563) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19587){
var state_val_19588 = (state_19587[(1)]);
if((state_val_19588 === (7))){
var inst_19582 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19589_20742 = state_19587__$1;
(statearr_19589_20742[(2)] = inst_19582);

(statearr_19589_20742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (1))){
var inst_19564 = null;
var state_19587__$1 = (function (){var statearr_19590 = state_19587;
(statearr_19590[(7)] = inst_19564);

return statearr_19590;
})();
var statearr_19591_20743 = state_19587__$1;
(statearr_19591_20743[(2)] = null);

(statearr_19591_20743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (4))){
var inst_19567 = (state_19587[(8)]);
var inst_19567__$1 = (state_19587[(2)]);
var inst_19568 = (inst_19567__$1 == null);
var inst_19569 = cljs.core.not(inst_19568);
var state_19587__$1 = (function (){var statearr_19592 = state_19587;
(statearr_19592[(8)] = inst_19567__$1);

return statearr_19592;
})();
if(inst_19569){
var statearr_19593_20748 = state_19587__$1;
(statearr_19593_20748[(1)] = (5));

} else {
var statearr_19594_20749 = state_19587__$1;
(statearr_19594_20749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (6))){
var state_19587__$1 = state_19587;
var statearr_19595_20750 = state_19587__$1;
(statearr_19595_20750[(2)] = null);

(statearr_19595_20750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (3))){
var inst_19584 = (state_19587[(2)]);
var inst_19585 = cljs.core.async.close_BANG_(out);
var state_19587__$1 = (function (){var statearr_19596 = state_19587;
(statearr_19596[(9)] = inst_19584);

return statearr_19596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19587__$1,inst_19585);
} else {
if((state_val_19588 === (2))){
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19587__$1,(4),ch);
} else {
if((state_val_19588 === (11))){
var inst_19567 = (state_19587[(8)]);
var inst_19576 = (state_19587[(2)]);
var inst_19564 = inst_19567;
var state_19587__$1 = (function (){var statearr_19597 = state_19587;
(statearr_19597[(7)] = inst_19564);

(statearr_19597[(10)] = inst_19576);

return statearr_19597;
})();
var statearr_19598_20752 = state_19587__$1;
(statearr_19598_20752[(2)] = null);

(statearr_19598_20752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (9))){
var inst_19567 = (state_19587[(8)]);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19587__$1,(11),out,inst_19567);
} else {
if((state_val_19588 === (5))){
var inst_19564 = (state_19587[(7)]);
var inst_19567 = (state_19587[(8)]);
var inst_19571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19567,inst_19564);
var state_19587__$1 = state_19587;
if(inst_19571){
var statearr_19600_20754 = state_19587__$1;
(statearr_19600_20754[(1)] = (8));

} else {
var statearr_19603_20755 = state_19587__$1;
(statearr_19603_20755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (10))){
var inst_19579 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19606_20756 = state_19587__$1;
(statearr_19606_20756[(2)] = inst_19579);

(statearr_19606_20756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (8))){
var inst_19564 = (state_19587[(7)]);
var tmp19599 = inst_19564;
var inst_19564__$1 = tmp19599;
var state_19587__$1 = (function (){var statearr_19607 = state_19587;
(statearr_19607[(7)] = inst_19564__$1);

return statearr_19607;
})();
var statearr_19609_20757 = state_19587__$1;
(statearr_19609_20757[(2)] = null);

(statearr_19609_20757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19614[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19614[(1)] = (1));

return statearr_19614;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19587){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19587);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19616){var ex__15872__auto__ = e19616;
var statearr_19618_20763 = state_19587;
(statearr_19618_20763[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19587[(4)]))){
var statearr_19619_20764 = state_19587;
(statearr_19619_20764[(1)] = cljs.core.first((state_19587[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20765 = state_19587;
state_19587 = G__20765;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19621 = f__16336__auto__();
(statearr_19621[(6)] = c__16335__auto___20741);

return statearr_19621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19624 = arguments.length;
switch (G__19624) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19666){
var state_val_19667 = (state_19666[(1)]);
if((state_val_19667 === (7))){
var inst_19662 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
var statearr_19668_20770 = state_19666__$1;
(statearr_19668_20770[(2)] = inst_19662);

(statearr_19668_20770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (1))){
var inst_19629 = (new Array(n));
var inst_19630 = inst_19629;
var inst_19631 = (0);
var state_19666__$1 = (function (){var statearr_19669 = state_19666;
(statearr_19669[(7)] = inst_19631);

(statearr_19669[(8)] = inst_19630);

return statearr_19669;
})();
var statearr_19670_20771 = state_19666__$1;
(statearr_19670_20771[(2)] = null);

(statearr_19670_20771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (4))){
var inst_19634 = (state_19666[(9)]);
var inst_19634__$1 = (state_19666[(2)]);
var inst_19635 = (inst_19634__$1 == null);
var inst_19636 = cljs.core.not(inst_19635);
var state_19666__$1 = (function (){var statearr_19671 = state_19666;
(statearr_19671[(9)] = inst_19634__$1);

return statearr_19671;
})();
if(inst_19636){
var statearr_19672_20772 = state_19666__$1;
(statearr_19672_20772[(1)] = (5));

} else {
var statearr_19673_20773 = state_19666__$1;
(statearr_19673_20773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (15))){
var inst_19656 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
var statearr_19674_20777 = state_19666__$1;
(statearr_19674_20777[(2)] = inst_19656);

(statearr_19674_20777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (13))){
var state_19666__$1 = state_19666;
var statearr_19675_20778 = state_19666__$1;
(statearr_19675_20778[(2)] = null);

(statearr_19675_20778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (6))){
var inst_19631 = (state_19666[(7)]);
var inst_19652 = (inst_19631 > (0));
var state_19666__$1 = state_19666;
if(cljs.core.truth_(inst_19652)){
var statearr_19680_20779 = state_19666__$1;
(statearr_19680_20779[(1)] = (12));

} else {
var statearr_19682_20780 = state_19666__$1;
(statearr_19682_20780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (3))){
var inst_19664 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19666__$1,inst_19664);
} else {
if((state_val_19667 === (12))){
var inst_19630 = (state_19666[(8)]);
var inst_19654 = cljs.core.vec(inst_19630);
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19666__$1,(15),out,inst_19654);
} else {
if((state_val_19667 === (2))){
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19666__$1,(4),ch);
} else {
if((state_val_19667 === (11))){
var inst_19646 = (state_19666[(2)]);
var inst_19647 = (new Array(n));
var inst_19630 = inst_19647;
var inst_19631 = (0);
var state_19666__$1 = (function (){var statearr_19683 = state_19666;
(statearr_19683[(7)] = inst_19631);

(statearr_19683[(10)] = inst_19646);

(statearr_19683[(8)] = inst_19630);

return statearr_19683;
})();
var statearr_19684_20785 = state_19666__$1;
(statearr_19684_20785[(2)] = null);

(statearr_19684_20785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (9))){
var inst_19630 = (state_19666[(8)]);
var inst_19644 = cljs.core.vec(inst_19630);
var state_19666__$1 = state_19666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19666__$1,(11),out,inst_19644);
} else {
if((state_val_19667 === (5))){
var inst_19631 = (state_19666[(7)]);
var inst_19630 = (state_19666[(8)]);
var inst_19639 = (state_19666[(11)]);
var inst_19634 = (state_19666[(9)]);
var inst_19638 = (inst_19630[inst_19631] = inst_19634);
var inst_19639__$1 = (inst_19631 + (1));
var inst_19640 = (inst_19639__$1 < n);
var state_19666__$1 = (function (){var statearr_19689 = state_19666;
(statearr_19689[(12)] = inst_19638);

(statearr_19689[(11)] = inst_19639__$1);

return statearr_19689;
})();
if(cljs.core.truth_(inst_19640)){
var statearr_19690_20787 = state_19666__$1;
(statearr_19690_20787[(1)] = (8));

} else {
var statearr_19691_20788 = state_19666__$1;
(statearr_19691_20788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (14))){
var inst_19659 = (state_19666[(2)]);
var inst_19660 = cljs.core.async.close_BANG_(out);
var state_19666__$1 = (function (){var statearr_19693 = state_19666;
(statearr_19693[(13)] = inst_19659);

return statearr_19693;
})();
var statearr_19694_20791 = state_19666__$1;
(statearr_19694_20791[(2)] = inst_19660);

(statearr_19694_20791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (10))){
var inst_19650 = (state_19666[(2)]);
var state_19666__$1 = state_19666;
var statearr_19695_20792 = state_19666__$1;
(statearr_19695_20792[(2)] = inst_19650);

(statearr_19695_20792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19667 === (8))){
var inst_19630 = (state_19666[(8)]);
var inst_19639 = (state_19666[(11)]);
var tmp19692 = inst_19630;
var inst_19630__$1 = tmp19692;
var inst_19631 = inst_19639;
var state_19666__$1 = (function (){var statearr_19700 = state_19666;
(statearr_19700[(7)] = inst_19631);

(statearr_19700[(8)] = inst_19630__$1);

return statearr_19700;
})();
var statearr_19701_20793 = state_19666__$1;
(statearr_19701_20793[(2)] = null);

(statearr_19701_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19702[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19702[(1)] = (1));

return statearr_19702;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19666){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19666);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19703){var ex__15872__auto__ = e19703;
var statearr_19704_20797 = state_19666;
(statearr_19704_20797[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19666[(4)]))){
var statearr_19707_20798 = state_19666;
(statearr_19707_20798[(1)] = cljs.core.first((state_19666[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20803 = state_19666;
state_19666 = G__20803;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19708 = f__16336__auto__();
(statearr_19708[(6)] = c__16335__auto___20768);

return statearr_19708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19710 = arguments.length;
switch (G__19710) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16335__auto___20808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16336__auto__ = (function (){var switch__15868__auto__ = (function (state_19758){
var state_val_19759 = (state_19758[(1)]);
if((state_val_19759 === (7))){
var inst_19754 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19763_20812 = state_19758__$1;
(statearr_19763_20812[(2)] = inst_19754);

(statearr_19763_20812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (1))){
var inst_19712 = [];
var inst_19713 = inst_19712;
var inst_19714 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19758__$1 = (function (){var statearr_19764 = state_19758;
(statearr_19764[(7)] = inst_19713);

(statearr_19764[(8)] = inst_19714);

return statearr_19764;
})();
var statearr_19765_20813 = state_19758__$1;
(statearr_19765_20813[(2)] = null);

(statearr_19765_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (4))){
var inst_19718 = (state_19758[(9)]);
var inst_19718__$1 = (state_19758[(2)]);
var inst_19719 = (inst_19718__$1 == null);
var inst_19720 = cljs.core.not(inst_19719);
var state_19758__$1 = (function (){var statearr_19767 = state_19758;
(statearr_19767[(9)] = inst_19718__$1);

return statearr_19767;
})();
if(inst_19720){
var statearr_19769_20814 = state_19758__$1;
(statearr_19769_20814[(1)] = (5));

} else {
var statearr_19770_20815 = state_19758__$1;
(statearr_19770_20815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (15))){
var inst_19713 = (state_19758[(7)]);
var inst_19746 = cljs.core.vec(inst_19713);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19758__$1,(18),out,inst_19746);
} else {
if((state_val_19759 === (13))){
var inst_19740 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19771_20817 = state_19758__$1;
(statearr_19771_20817[(2)] = inst_19740);

(statearr_19771_20817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (6))){
var inst_19713 = (state_19758[(7)]);
var inst_19743 = inst_19713.length;
var inst_19744 = (inst_19743 > (0));
var state_19758__$1 = state_19758;
if(cljs.core.truth_(inst_19744)){
var statearr_19773_20818 = state_19758__$1;
(statearr_19773_20818[(1)] = (15));

} else {
var statearr_19774_20819 = state_19758__$1;
(statearr_19774_20819[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (17))){
var inst_19751 = (state_19758[(2)]);
var inst_19752 = cljs.core.async.close_BANG_(out);
var state_19758__$1 = (function (){var statearr_19776 = state_19758;
(statearr_19776[(10)] = inst_19751);

return statearr_19776;
})();
var statearr_19777_20820 = state_19758__$1;
(statearr_19777_20820[(2)] = inst_19752);

(statearr_19777_20820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (3))){
var inst_19756 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19758__$1,inst_19756);
} else {
if((state_val_19759 === (12))){
var inst_19713 = (state_19758[(7)]);
var inst_19733 = cljs.core.vec(inst_19713);
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19758__$1,(14),out,inst_19733);
} else {
if((state_val_19759 === (2))){
var state_19758__$1 = state_19758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19758__$1,(4),ch);
} else {
if((state_val_19759 === (11))){
var inst_19718 = (state_19758[(9)]);
var inst_19713 = (state_19758[(7)]);
var inst_19722 = (state_19758[(11)]);
var inst_19730 = inst_19713.push(inst_19718);
var tmp19780 = inst_19713;
var inst_19713__$1 = tmp19780;
var inst_19714 = inst_19722;
var state_19758__$1 = (function (){var statearr_19782 = state_19758;
(statearr_19782[(7)] = inst_19713__$1);

(statearr_19782[(12)] = inst_19730);

(statearr_19782[(8)] = inst_19714);

return statearr_19782;
})();
var statearr_19783_20821 = state_19758__$1;
(statearr_19783_20821[(2)] = null);

(statearr_19783_20821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (9))){
var inst_19714 = (state_19758[(8)]);
var inst_19726 = cljs.core.keyword_identical_QMARK_(inst_19714,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19758__$1 = state_19758;
var statearr_19784_20822 = state_19758__$1;
(statearr_19784_20822[(2)] = inst_19726);

(statearr_19784_20822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (5))){
var inst_19718 = (state_19758[(9)]);
var inst_19722 = (state_19758[(11)]);
var inst_19714 = (state_19758[(8)]);
var inst_19723 = (state_19758[(13)]);
var inst_19722__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19718) : f.call(null,inst_19718));
var inst_19723__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19722__$1,inst_19714);
var state_19758__$1 = (function (){var statearr_19785 = state_19758;
(statearr_19785[(11)] = inst_19722__$1);

(statearr_19785[(13)] = inst_19723__$1);

return statearr_19785;
})();
if(inst_19723__$1){
var statearr_19786_20826 = state_19758__$1;
(statearr_19786_20826[(1)] = (8));

} else {
var statearr_19787_20827 = state_19758__$1;
(statearr_19787_20827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (14))){
var inst_19718 = (state_19758[(9)]);
var inst_19722 = (state_19758[(11)]);
var inst_19735 = (state_19758[(2)]);
var inst_19736 = [];
var inst_19737 = inst_19736.push(inst_19718);
var inst_19713 = inst_19736;
var inst_19714 = inst_19722;
var state_19758__$1 = (function (){var statearr_19788 = state_19758;
(statearr_19788[(7)] = inst_19713);

(statearr_19788[(14)] = inst_19735);

(statearr_19788[(15)] = inst_19737);

(statearr_19788[(8)] = inst_19714);

return statearr_19788;
})();
var statearr_19789_20828 = state_19758__$1;
(statearr_19789_20828[(2)] = null);

(statearr_19789_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (16))){
var state_19758__$1 = state_19758;
var statearr_19790_20829 = state_19758__$1;
(statearr_19790_20829[(2)] = null);

(statearr_19790_20829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (10))){
var inst_19728 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
if(cljs.core.truth_(inst_19728)){
var statearr_19791_20830 = state_19758__$1;
(statearr_19791_20830[(1)] = (11));

} else {
var statearr_19792_20831 = state_19758__$1;
(statearr_19792_20831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (18))){
var inst_19748 = (state_19758[(2)]);
var state_19758__$1 = state_19758;
var statearr_19793_20832 = state_19758__$1;
(statearr_19793_20832[(2)] = inst_19748);

(statearr_19793_20832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19759 === (8))){
var inst_19723 = (state_19758[(13)]);
var state_19758__$1 = state_19758;
var statearr_19794_20833 = state_19758__$1;
(statearr_19794_20833[(2)] = inst_19723);

(statearr_19794_20833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15869__auto__ = null;
var cljs$core$async$state_machine__15869__auto____0 = (function (){
var statearr_19796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19796[(0)] = cljs$core$async$state_machine__15869__auto__);

(statearr_19796[(1)] = (1));

return statearr_19796;
});
var cljs$core$async$state_machine__15869__auto____1 = (function (state_19758){
while(true){
var ret_value__15870__auto__ = (function (){try{while(true){
var result__15871__auto__ = switch__15868__auto__(state_19758);
if(cljs.core.keyword_identical_QMARK_(result__15871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15871__auto__;
}
break;
}
}catch (e19797){var ex__15872__auto__ = e19797;
var statearr_19798_20838 = state_19758;
(statearr_19798_20838[(2)] = ex__15872__auto__);


if(cljs.core.seq((state_19758[(4)]))){
var statearr_19799_20839 = state_19758;
(statearr_19799_20839[(1)] = cljs.core.first((state_19758[(4)])));

} else {
throw ex__15872__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20841 = state_19758;
state_19758 = G__20841;
continue;
} else {
return ret_value__15870__auto__;
}
break;
}
});
cljs$core$async$state_machine__15869__auto__ = function(state_19758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15869__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15869__auto____1.call(this,state_19758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15869__auto____0;
cljs$core$async$state_machine__15869__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15869__auto____1;
return cljs$core$async$state_machine__15869__auto__;
})()
})();
var state__16337__auto__ = (function (){var statearr_19800 = f__16336__auto__();
(statearr_19800[(6)] = c__16335__auto___20808);

return statearr_19800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16337__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
