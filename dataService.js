//dataService.js
    function dataService($http, Backand) {
        var self = this;
        //get the table name and optional parameters
        self.tableData = function(tableName, pageSize, pageNumber, sort, filter) {
            return $http({
                method: 'GET',
                url: Backand.configuration.apiUrl + '/1/table/data/' + tableName,
                params: {
                    pageSize: pageSize || 20,
                    pageNumber: pageNumber || 1,
                    filter: filter || '',
                    sort: sort || ''
                }
            });
        }
    }
