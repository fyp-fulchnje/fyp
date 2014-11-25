app.controller('datasetController', ['$scope', '$resource', 
	function($scope, $resource){

	//base url for REST API
	var Dataset = $resource('/api/datasets');


	// request datasets from database
	Dataset.query(function (results) {
		$scope.datasets = results;
	});

	$scope.datasets = []

	$scope.createDataset = function () {
		var dataset = new Dataset();
		dataset.name = $scope.datasetName;
		dataset.$save(function (result){
			$scope.datasets.push(result);
			$scope.datasetName = "";
		});
	}


}]);

