function dbfuncs($scope)
{
    
  $scope.createTodo = function() {
		               $http.post('/api/todos', $scope.formData)
			                      .success(function(data) {
				                            $scope.formData = {}; // clear the form so our user is ready to enter 
				                            $scope.todos = data;
                                            $scope.check=data;
				                            console.log("hi hello"+data);
			                                               })
			                                .error(function(data) {
				                            console.log('Error: ' + data);
			                                              });
	                                              };
                 $scope.getTodo = function() {
                     $http.get('/api/todos')
		                       .success(function(data) {
			                           $scope.todos = data;
                                       alert($scope.todos[$scope.todos.length-1].text1);
                                       $scope.check=$scope.todos[$scope.todos.length-1].text;
		                        })
		                       .error(function(data) {
			                          console.log('Error: ' + data);
		                        });            
                 };
                  
                 $scope.deleteTodo = function(id) {
		                 $http.delete('/api/todos/' + id)
			                     .success(function(data) {
				                       $scope.todos = data;
                                       $scope.check=data;
			                     })
			                     .error(function(data) {
				                         console.log('Error: ' + data);
			                      });
	              };  
    
};