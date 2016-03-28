'use strict';

/**
 * @ngdoc function
 * @name carSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carSearchApp
 */
angular.module('carSearchApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  	//Key: zkbr4yqu9vcpx36drfgp4gsv


    $scope.testVariable = 'hi';

    $http({
    	// url: 'http://api.hotwire.com/v1/search/car?apikey=zkbr4yqu9vcpx36drfgp4gsv&dest=LAX&dropofftime=13:30&enddate=05%2F23%2F2016&pickuptime=10:00&startdate=05%2F20%2F2016',
    	url: 'http://api.hotwire.com/v1/search/car', 
    	method: 'GET',
    	params: {
    		apikey: 'zkbr4yqu9vcpx36drfgp4gsv',
    		dest: 'LAX',
    		startdate: '05%2F20%2F2016',
    		enddate: '05%2F23%2F2016',
    		pickuptime: '10:00',
    		dropofftime: '13:30'
    	}
    	// headers: {
     //    	'Content-Type': 'text/xml;charset=UTF-8',
     //    	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    	// }
	})
	.then(function(response) {
		console.log(response);
	}, function(error) {
		console.log(error);
	});


  }]);
