/* use strict */
var app = angular.module("RavensApp", []);

app.service("ravensService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('resources/json/jsonplaceholder-photo.json').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getPhotos = function ()
	{
		return deferred.promise;
	}
})

.controller("ravensCtrl", function ($scope, ravensService)
{
	var promise = ravensService.getPhotos();
	promise.then(function (data)
	{
		$scope.photos = data.data;
		console.log($scope.photos);
	});
})



	equalheight = function(container){

	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {

	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;

	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}
	$(window).load(function() {
	  equalheight('.set-equal h3');
	});

	$(window).resize(function(){
	  equalheight('.set-equal h3');
	});

	$(window).load(function() {
	  equalheight('.set-equal .equal');
	});

	$(window).resize(function(){
	  equalheight('.set-equal .equal');
	});



