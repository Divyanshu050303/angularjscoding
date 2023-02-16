var app=angular.module("my_mod",[]);
app.directive("customTime",function(){
    var sun="This is angular class"
    return {template:sun};
});