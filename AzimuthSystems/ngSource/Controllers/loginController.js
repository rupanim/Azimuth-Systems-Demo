
app.controller('LoginController', ['$scope', '$sce', '$location', 'AbbrvList', 'DefinitionList', 'MatchFunc', function ($scope, $sce, $location, abbrvList, definitionList, matchFunc) {

    var matchResult = {},
        success = "Its a match!",
        failure = "Not a match.",
        defaultOption = 'Select';

    $scope.History = [];
    $scope.viewHistory = false;

    $scope.abbrvSelected = defaultOption;
    $scope.AbbrvList = [defaultOption];
    $scope.AbbrvList = $scope.AbbrvList.concat(abbrvList());

    $scope.definitionSelected = defaultOption;
    $scope.DefinitionList = [defaultOption];
    $scope.DefinitionList = $scope.DefinitionList.concat(definitionList());

    $scope.DefaultOption = function(ddlName) {
        if (ddlName == 'Abbrv') {
            if ($scope.abbrvSelected == defaultOption) {
                return "form-control borderRed";
            } else {
                return "form-control borderGreen";
            }
        }

        if (ddlName == 'Definition') {
            if ($scope.definitionSelected == defaultOption) {
                return "form-control borderRed";
            } else {
                return "form-control borderGreen";
            }
        }

        return "form-control";
    }

    $scope.ValidateForm = function() {
        if ($scope.abbrvSelected != defaultOption && $scope.definitionSelected != defaultOption) {
            return true;
        } else {
            return false;
        }
    }

    $scope.Match = function () {
        var ret = matchFunc($scope.abbrvSelected, $scope.definitionSelected);
        matchResult.abbrv = $scope.abbrvSelected;
        matchResult.value = $scope.definitionSelected;
        if (ret == true) {
            matchResult.result = "<span style=\'color: green\'>" +success + "</span>" ;
        } else {
            matchResult.result = "<span style=\'color: red\'>" + failure + "</span>";
        }

        $scope.History = [{ abbrv: $scope.abbrvSelected, value: $scope.definitionSelected, result: $sce.trustAsHtml(matchResult.result) }].concat($scope.History);
        $scope.viewHistory = true;
    }
}]);


