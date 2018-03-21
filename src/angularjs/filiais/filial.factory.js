modulo.factory("svcFilial", function($http){
   return {
      carregarFiliais : function(emCasoDeSucesso, top){
         var url = "http://qua.ux.linx.com.br/Service/5.X/LinxCadastroBaseCadastroPfj/GetTbcFilialByEntitySearchNoAssociations";
         
         var parametrosHttp = {
            "$orderby" : "IdPfj",
            "$top" : top,
            "$inlinecount" : "allpages",
            "jEntitySearch" : "TbcFilial{}TbcPfjTelefone{}TbcPfjEndEletronico{}LjvLoja{}StkDeposito{}TbcFilialIestUf{}"
         };

         request(url, $http, emCasoDeSucesso, parametrosHttp);
      }
   }
});