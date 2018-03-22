var request = function(url, $http, emCasoDeSucesso, parametros){
		
   var $headers = {
         Application: "6d26d800-bbf8-4843-bca9-51dbfa200bc2",
         AuthorizationToken: "5f3704a7-c7ac-421d-8a01-5893bba88e8f",
         Branch: -1,
         CurrentCompany: "74351065-0a60-48b7-9774-ba97d99f1c9f",
         CurrentUser: "77d21861-51fa-4af1-8063-3392c65936ac",
         EconomicGroup: "74351065-0a60-48b7-9774-ba97d99f1c9f",
         Environment: 1062
   };

   var parametrosRequisicao = {
      headers : $headers,
      url : url,
      method : 'GET',
      crossDomain: true,
   };

   
   //if (method == 'POST')
   //		parametrosRequisicao.data = requestData;
   //else
   
   parametrosRequisicao.params = parametros;
   
   $http(parametrosRequisicao).then(function(res){
      emCasoDeSucesso(res);
   }, function(err){
      console.log(err);
   });
};