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
    },
    leftJoin: function(selection, leftTable, rightTable, leftColumn, rightColumn) {
        var query = `SELECT ${selection} FROM ${leftTable} AS tOne LEFT JOIN ${rightTable} AS tTwo ON tOne.${leftColumn} = tTwo.${rightColumn}`
        console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;