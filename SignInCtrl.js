// SignInCtrl.js
    function SignInCtrl(Backand, $cookieStore) {
        $scope.signIn = function() {
            Backand.signin($scope.username, $scope.password, $scope.appName)
            .then(
              function (token) {
                //save the token in the cookie
                $cookieStore.put(Backand.configuration.tokenName, token);
              },
              function (data, status, headers, config) {
                //handel error
              }
            );
        }
    }    
        
