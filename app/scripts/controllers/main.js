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


    $scope.onLoad = function() {
        
    };

    $scope.pickupTimes = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];
    $scope.dropoffTimes = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];

    $scope.searchAction = function(myPickupDate, myPickupTime, myDropoffDate, myDropoffTime) {
        // var formatedPickupDate = myPickupDate.split(" ")[2];
        console.log('search clicked');

        var startMonth = '';
        if ((myPickupDate.getMonth() + 1) < 10) {
            startMonth = '0' + (myPickupDate.getMonth() + 1);
        } else {
            startMonth = (myPickupDate.getMonth() + 1);
        }
        var startDate = '';
        if (myPickupDate.getDate() < 10) {
            startDate = '0' + (myPickupDate.getDate());
        } else {
            startDate = (myPickupDate.getDate());
        }
        var endMonth = '';
        if ((myDropoffDate.getMonth() + 1) < 10) {
            endMonth = '0' + (myDropoffDate.getMonth() + 1);
        } else {
            endMonth = (myDropoffDate.getMonth() + 1);
        }
        var endDate = '';
        if (myDropoffDate.getDate() < 10) {
            endDate = '0' + (myDropoffDate.getDate());
        } else {
            endDate = (myDropoffDate.getDate());
        }


        var myParams = {
            apikey: 'zkbr4yqu9vcpx36drfgp4gsv',
            dest: 'LAX',
            startdate: (startMonth + '/' + startDate + '/' + myPickupDate.getFullYear()),
            pickuptime: myPickupTime,
            enddate: (endMonth + '/' + endDate + '/' + myDropoffDate.getFullYear()),
            dropofftime: myDropoffTime
        };
        console.log(myParams);
        $scope.sendRequest(myParams);
    };

    $scope.sendRequest = function(myParams) {

        $http({
            // url: 'http://api.hotwire.com/v1/search/car?apikey=zkbr4yqu9vcpx36drfgp4gsv&dest=LAX&dropofftime=13:30&enddate=05%2F23%2F2016&pickuptime=10:00&startdate=05%2F20%2F2016',
            url: 'http://api.hotwire.com/v1/search/car', 
            method: 'GET',
            params: myParams,
            headers: {
                // 'Content-Type': 'text/xml;charset=UTF-8',
                'Accept': 'text/html,application/json;q=0.9,image/webp,*/*;q=0.8'
            }
        })
        .success(function(response) {
            var x2js = new X2JS();
            var jsonResponse = x2js.xml_str2json(response);
            console.log(jsonResponse);
            $scope.myCars = jsonResponse.Hotwire.MetaData.CarMetaData.CarTypes.CarType;
            console.log($scope.myCars);
        })
        .error(function(error) {
            console.log(error);
        });

    };

    $scope.onLoad();

  }])
  .config(['$httpProvider', '$mdDateLocaleProvider', function($httpProvider, $mdDateLocaleProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
