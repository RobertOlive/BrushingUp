var connection = require("../config/connection");

var orm = {
    wholeTable: function(table) {
        connection.query(
            "SELECT * FROM "+table,
            function (err, result) {
                if(err) throw err;
                console.log(result)
        })
    },
    allWhere: function(table, column, value) {
        var query = "SELECT * FROM " + table + " WHERE " + column + " = " + value
        console.log(query);
        connection.query(
            query,
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        )
    }
}

module.exports = orm;