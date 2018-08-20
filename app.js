var app = angular.module("demoApp",[]);
app.controller("homeController",function(peopleService){
    var ctrl = this;
    peopleService.get().then(function(response){
        ctrl.people = response.data.People;
    });
});

app.service("peopleService",function($http){
    this.get = function(){
        return $http.get("people.json");
    }
});