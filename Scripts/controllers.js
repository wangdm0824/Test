
function OrgList($scope) {

    $scope.Schools = [{
        "name": "大智学校",
        "snippet": "大智学校123"
    }, {
        "name": "齐鲁医院",
        "snippet": "齐鲁医院123"
    }, {
        "name": "东方豪客",
        "snippet": "东方豪客123"
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
}