// var app=angular.module("my_mod",[]);
// app.controller("up",function($scope){
//     $scope.name="divyanshu singh";
//     $scope.name1="anurag singh";
//     $scope.arr={name:"Divyanshu Singh",class:"btech 3",rollno:201500236}
//     $scope.number=0;
//     $scope.sum=function(){
//         $scope.number++;
//     }

// });

// 9.02.2023
// var t=angular.module("mymod",[])
// t.controller("low",function($scope){
//     $scope.date=new Date;
// // $scope.name=["Divyanshu","Anurag","Aryan","Isha"];
// // $scope.arr={name:"Divyanshu Singh",class:"btech 3",rollno:201500236};
// // $scope.friends = [
// //     {name:'Divyanshu', rollno:21, city:"Sasni"},
// //     {name:'Isha', rollno:40,city:"Agra"},
// //     {name:'Anurag', rollno:21,city:"sasni"}
// //   ];
// });


var tr=angular.module("my_mod2",[])
tr.controller("time", function($scope){
    // $scope.arr=["divyanshu", "anurag", "aryan", "Isha", "gauri"];
    $scope.friends = [
    {name:'Divyanshu', rollno:21, city:"Sasni", salary:56},
    {name:'Isha', rollno:1,city:"Agra", salary:85},
    {name:'Anurag', rollno:2,city:"sasni", salary:59}
  ];
  // $scope.myfun=function(f){
  //   $scope.order=f;
  // }
});

// my_mod.filter('my_fit',function(){
//     return function(text){
//       var i=0, count;
//     for(i=0;i<text.length;i++){
//         count=text[i];
//       if(i%2!=0){
//         t+=count.toUpperCase();
//       }
//       else{
//         t+=count;
//       }
//     }
//     }
// });

var t=angular.module("my_mod",[])
t.controller("mymod",function($scope){
    $scope.date="Controller 1";

  });
 
t.controller("mymod2",function($scope){
    $scope.date="Controller 2";

  });
t.run( function($rootScope){
    $rootScope.date="root scope Controller ";

  });
