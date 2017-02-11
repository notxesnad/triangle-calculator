'use strict';

/* Services */

angular.module('myApp.services', [])
.service('CalculatorService', function() {

	this.isTriangle = function(sidesArray) {	

		// Find the max value
		var max = Math.max(...sidesArray);
		
		// Sum the Array
		var sum = sidesArray.reduce(function(a, b) {
  			return a + b;
		}, 0);

		// Check if Max side is greater than sum of the other sides 
		var isTriangle = (sum - max) >= max;

		return isTriangle;
	}


	this.numUniqueSides = function (sidesArray) {
		return sidesArray.filter(removeDuplicates).length;
	}

	function removeDuplicates ( item, index, inputArray ) {
		return inputArray.indexOf(item) == index;
	}

});
