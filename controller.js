
src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js";
var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});