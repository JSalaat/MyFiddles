/**
 * Created by junaid.salaat on 8/11/2015.
 */

angular.module('directive', [])
    .directive('filteredTotal', function () {
        return {
            restrict: 'A',
            template: '<div ng-repeat="obj in filteredObj track by $index" class="">{{obj.dish_n}}: Rs {{obj.price}}</div>',
            link: function postLink(scope, element, attrs) {
                scope.$watch("filterNo", function (newValue, oldValue) {
                    scope.filteredObj = [];
                    scope.demoCart.forEach(function (obj) {
                        if (obj.price < newValue) {
                            scope.filteredObj.push(obj);
                        }
                    });
                });

            }
        };
    })
    .controller('Controller', controller);

function controller($scope) {
    $scope.demoCart = [{
        "dish_n": "ROWTISSERES chicken",
        "dish_quantity": "Quarter chicken",
        "price": 425
    }, {
        "dish_n": "Garlic Potato Slices",
        "dish_quantity": "Delicious golden garlic wedges served with Ranch sauce",
        "price": 235
    }, {
        "dish_n": "Spicy Chicken Wings",
        "dish_quantity": "Chilli & Garlic infused Chicken wings served with Crispy vegetable sticks and a duo of dipping sauces.",
        "price": 370
    }, {
        "dish_n": "Whole Wheat Pancakes",
        "dish_quantity": "Prepared with organic wholewheat flour, and served with your choice of N‘eco’s toppings",
        "price": 319
    }];

}