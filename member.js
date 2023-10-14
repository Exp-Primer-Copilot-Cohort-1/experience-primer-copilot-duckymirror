function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'app/components/skills/member.html',
        controller: function ($scope) {
            $scope.member.skills = $scope.member.skills || [];
            $scope.addSkill = function () {
                $scope.member.skills.push({
                    name: '',
                    level: 0
                });
            };
            $scope.removeSkill = function (index) {
                $scope.member.skills.splice(index, 1);
            };
        }
    };
}