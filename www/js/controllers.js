angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http) {
	
})

.controller('comicsCtrl', function($scope, $http){
	var publicKey =  'ee052280db83b6ffcd0e4973fc66bcc1';
	var privateKey = 'd36c40ce761dc6c397e37edd3885ccdb1db66d4b';

	var timestamp = Math.floor(Date.now() / 1000);
	var hashMd5 = timestamp + privateKey + publicKey;
	
	var hash = md5(hashMd5);

	var url = 'http://gateway.marvel.com/v1/public/comics?ts='+ timestamp +'&apikey='+ publicKey +'&hash='+hash;

	$http.get(url).then(function(response){
		$scope['comics'] = response['data']['data']['results'];
		console.log($scope['comics']);
	});
});

