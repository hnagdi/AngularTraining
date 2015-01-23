/**
 * Created by hojefan on 1/23/2015.
 */
angular.module('todo')
    .service("TodoService", [function(){
        var service = {};
        service.todos = [];
        service.add = function(newTodo) {
            this.todos.push(newTodo);
        };

        service.delete = function(item) {
            this.todos.splice(this.todos.indexOf(item), 1);
        };

        service.clearCompleted = function() {
            for (var index =0; index <  this.todos.length; index++) {
                var completed = this.todos[index].completed;
                if (completed || completed === "true") {
                    this.todos.splice(index, 1);
                    index--;
                }
            }
        };
        return service;
    }]);