/**
 * Created by hojefan on 1/23/2015.
 */
angular.module('todo')
    .controller("MainController", ["$scope", "TodoService", function ($scope, TodoService) {
        console.log(TodoService.todos);

        $scope.todos = TodoService.todos;


        $scope.addTodo = function() {
            TodoService.add($scope.newTodo);
            $scope.newTodo = {}
        }

        $scope.keyPress = function() {
            if (event.keyCode === 13) {
                $scope.addTodo();
            }
        }
        $scope.removeTodo = function(item) {
            TodoService.delete(item);
        }

        $scope.clearCompletedTodos = function() {
            TodoService.clearCompleted();
        }
    }]);