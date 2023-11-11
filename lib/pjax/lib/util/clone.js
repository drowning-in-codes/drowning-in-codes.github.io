module.exports=function(r){
/* istanbul ignore if */
if(null===r||"object"!=typeof r)return r;var o=r.constructor();for(var t in r)r.hasOwnProperty(t)&&(o[t]=r[t]);return o};