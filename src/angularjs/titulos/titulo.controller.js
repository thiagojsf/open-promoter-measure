modulo.controller("tituloController", function($scope, svcTitulos, svcFilial) {
   $scope.ontem = new Date(2018, 3, 20);
   $scope.hoje = new Date();
   $scope.dataEmissao = new Date(2018, 3, 20);
   $scope.dataVencimento = new Date(2018, 6, 20);
   $scope.valorTotal = 5000;
   $scope.valorEmAberto = 0;
   $scope.numeroTitulo = 5321;
   $scope.numeroNota = 32531;
   $scope.serieNota = 1;
   $scope.parcela = 3;
   $scope.fornecedor = "SAMSUNG";
   $scope.filial = "Linx SP";

   svcTitulos.carregaTitulosAPagar(function(res){
      $scope.Titulos = res.data;
      for (var i = 0; i < $scope.Titulos.length; i++) {

         $scope.Titulos[i].Emissao = new Date($scope.Titulos[i].Emissao);
         $scope.Titulos[i].Vencimento = new Date($scope.Titulos[i].Vencimento);

         if ($scope.Titulos[i].Vencimento <= new Date())
         {
            $scope.Titulos[i].TextoVencimento = "Venceu";
            $scope.Titulos[i].EstaVencido = true;
            
         }
         else
         {
            $scope.Titulos[i].TextoVencimento = "Vence";
            $scope.Titulos[i].EstaVencido = false;
         }

         if ($scope.Titulos[i].LxStatusDocName != undefined && $scope.Titulos[i].LxStatusDocName.length > 0)
         {
            $scope.Titulos[i].AbreviacaoTitulo = $scope.Titulos[i].LxStatusDocName.substring(0,1);
         }
         else
         {

         }
         
      }
   });

   setTimeout(function(){
      console.log("X");
   }, 20000);

   svcFilial.carregarFiliais(function(res){
      $scope.Filiais = res.data.Results;
      $scope.FilialSelecionada = $scope.Filiais[0];
      $scope.ExibirMatrizesContabeis = true;
      $scope.ExibirFiliais = true;
   }, 500);
   
   $scope.selecionarFilial = function(filial) {
      $scope.FilialSelecionada = filial;
   }
   
   
})