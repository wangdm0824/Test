
function OrgList($scope, $http) {

    $scope.Schools = [{
        "name": "大智学校",
        "snippet": "大智学校123",
        "age": 0
    }, {
        "name": "齐鲁医院",
        "snippet": "齐鲁医院123",
        "age": 2
    }, {
        "name": "东方豪客",
        "snippet": "东方豪客123",
        "age": 1
    }];

    $scope.Courses = [{
        "id": "1",
        "name": "初中"
    }, {
        "id": "2",
        "name": "高中"
    }, {
        "id": "3",
        "name": "大学"
    }];

    $scope.Title = "AngularJS";

    $http.get('data.json').success(function (data) {
        $scope.Schools = data.splice(0, 5);
    });
}

OrgList.$inject = ['$scope', '$http'];
