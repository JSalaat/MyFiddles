angular.module('imgRead', [])
    .controller('Controller', controller)

    .directive("imageRead", [function () {
        return {
            scope: {
                imageRead: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.imageRead = loadEvent.target.result;
                        });
                    };
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }])

function controller($scope) {
    $scope.submitImg = function (form) {
        console.log($scope.formImg);
    };
}