angular.module('imgRead', [])
    .controller('Controller', controller)

    .directive("fileDef", [function () {
        return {
            scope: {
                fileDef: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    scope.$apply(function () {
                        scope.fileDef = changeEvent.target.files[0];
                        // or all selected files:
                        // scope.fileread = changeEvent.target.files;
                    });
                });
            }
        }
    }]);

function controller($scope) {
    $scope.submitImg = function () {
        console.log($scope.formImage);
    };
}