modulo.factory("svcTitulos", function($http){
   return {
      carregaTitulosAPagar : function(emCasoDeSucesso){
         request(urlTitulos, $http, function(res){
            emCasoDeSucesso(res);
         })
      }
   }
});