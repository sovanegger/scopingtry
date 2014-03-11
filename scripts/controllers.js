function CoruscantController($scope, $rootScope, $log, CrossBinding) {
    //$scope.data = CrossBinding;
    $scope.data = CrossBinding;
//    $rootScope.$watch('knight', function(dataOld, dataNew) {
//        $log.log(dataOld);
//    });
}

function AstoriaController($scope, $rootScope, CrossBinding) {
    //$scope.data = CrossBinding;
    $scope.data = CrossBinding;
}

scopingtryApp.controller('CoruscantController', ['$scope', '$rootScope', '$log', 'CrossBinding', CoruscantController]);
scopingtryApp.controller('AstoriaController', ['$scope', '$rootScope', 'CrossBinding', AstoriaController]);