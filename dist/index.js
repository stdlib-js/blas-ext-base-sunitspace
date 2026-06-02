"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(w,o){
function m(e,r,i,a,j){var s,t;if(e<=0)return i;for(s=j,t=0;t<e;t++)i[s]=r+t,s+=a;return i}o.exports=m
});var q=u(function(z,c){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=n();function R(e,r,i,a){return l(e,r,i,a,x(e,a))}c.exports=R
});var d=u(function(A,f){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),E=n();_(p,"ndarray",E);f.exports=p
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=d(),v,y=b(O(__dirname,"./native.js"));g(y)?v=h:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
