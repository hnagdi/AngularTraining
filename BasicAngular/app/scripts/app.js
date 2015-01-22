angular.module("todoApp", [])
    .controller("MainController", function ($scope) {
        $scope.todos = [ ];

        $scope.addTodo = function() {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo ={};
        }

        $scope.removeTodo = function(item) {
            $scope.todos.splice($scope.todos.indexOf(item), 1);
        }

        $scope.clearCompletedTodos = function() {
           for (var index =0; index <  $scope.todos.length; index++) {
               var completed = $scope.todos[index].completed;
               if (completed || completed === "true") {
                   $scope.todos.splice(index, 1);
                   index--;
               }
           }
        }
    });
