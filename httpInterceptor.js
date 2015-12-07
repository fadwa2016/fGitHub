 //Option 2: Use an Angular HTTP Interceptor to add the authentication token to each HTTP request
    function httpInterceptor($q, $log, $cookieStore) {
        return {
            request: function(config) {
                config.headers['Authorization'] = $cookieStore.get('backand_token');
                return config;
            }
        };
    }
