modulo.factory("svcTitulos", function($http){
   return {
      carregaTitulosAPagar : function(emCasoDeSucesso, codigoFilial){

         var parametros = {
            "$orderby" : "Adquirente",
            "jEntitySearch" : "FinReceberAnalitico{EmissaoDe#>=#T2018-03-01%2000%3A00%3A00.000;EmissaoDe#<=#T2018-03-01%2023%3A59%3A59.999;LxTipo#==#I1;CodigoFilial#==#S"+codigoFilial+"}"
         };

         request(urlTitulos, $http, function(res){
            emCasoDeSucesso(res);
         }, parametros);
      }
   }
});