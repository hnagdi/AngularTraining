/**
 * Created by hojefan on 1/23/2015.
 */
angular.module('todo')
    .filter('TodoFilter', [function () {
        return function (array,criteria) {
            var filteredArray=[];
            

            array.forEach(function(item){
                if(criteria==='All'){
                    filteredArray.push(item);
                }
                else if(criteria==='Active' && item.completed !== true){
                    filteredArray.push(item);
                }
                else if(criteria==='Completed' && item.completed === true){
                    filteredArray.push(item);
                }
            });
            return filteredArray;
        };
    }]);