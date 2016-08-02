angular.module('directoryApp', [] )
	.controller('directoryController', function($scope) {
		$scope.list = [{name:'Scott' , age:20},
				{name:'Ross' , age:21},
				{name:'Ben' , age:22},
				{name:'Courtney' , age:23}
			]
	});