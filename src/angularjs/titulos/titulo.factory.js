modulo.factory("svcTitulos", function($http){
   return {
      carregaTitulosAPagar : function(emCasoDeSucesso, codigoFilial){

         var parametros = {
            "$orderby" : "Adquirente",
            "jEntitySearch" : "FinReceberAnalitico{CodigoFilial#==#S"+codigoFilial+"}"
         };

         request(urlTitulos, $http, function(res){
            emCasoDeSucesso(res);
         }, parametros);
      }
   }
});