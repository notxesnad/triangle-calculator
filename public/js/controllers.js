'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('AppCtrl', function ($scope, CalculatorService) {

	$scope.side_a = 2.1;
	$scope.side_b = 2.1;
	$scope.side_c = 4;
	$scope.active = 'active';
	
	$scope.triangles = [{
		name: 'not',
		uniqueSides: 0
	}, {
		name: 'equilateral',
		uniqueSides: 1
	}, {
		name: 'isoscelse',
		uniqueSides: 2
	}, {
		name: 'scalene',
		uniqueSides: 3
	}];


	$scope.calculate = function(){
		
		var sides = [$scope.side_a, $scope.side_b, $scope.side_c]
		
		if ( CalculatorService.isTriangle(sides) ){
			$scope.numUniqueSides = CalculatorService.numUniqueSides(sides);
		} else {
			$scope.numUniqueSides = 0;
		}
	}

	$scope.calculate();
});