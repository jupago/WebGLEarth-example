Array.prototype.contains=function(x){
 for(i in this){
   if((x.city==this[i].city || x.firstName==this[i].firstname || x.lastName==this[i].lastname))
     return true;
   }
 return false;
}
