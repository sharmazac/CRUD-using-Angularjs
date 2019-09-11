var app= angular.module("mainApp",[]); 

app.controller("CRUDController", function($scope){


    $scope.EmpList=[];

    //Add Data
    $scope.AddData = function(){
        var emp ={
            Name:$scope.Name,
            Age: $scope.Age,
            Salary:$scope.Salary

        };
        $scope.EmpList.push(emp);
        ClearModel();
    };


    //Delete Data
    $scope.DeleteData = function(emp){
        var index=$scope.EmpList.indexOf(emp);
        $scope.EmpList.splice(index,1);
    };

    //Bind Data for edit
    $scope.BindSelectedData = function(emp){
        $scope.Name =emp.Name;
        $scope.Age = emp.Age;
        $scope.Salary =emp.Salary;
    };


    //Update Data
    $scope.UpdateData = function(){
        $.grep($scope.EmpList, function(e){
            if(e.Id == $scope.Id)
            {
                e.Name = $scope.Name;
                e.Age= $scope.Age;
                e.Salary= $scope.Salary;
            }
        });
    };



    //Clear Data
    function ClearModel(){
        
        $scope.Name='';
        $scope.Age=0;
        $scope.Salary=0;
    }
});