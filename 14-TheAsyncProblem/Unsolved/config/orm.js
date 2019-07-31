var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, resultHandler) {
    // var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    var queryString = `SELECT * FROM ${tableInput} WHERE ${colToSearch} = ${valOfCol}`;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      resultHandler(result)
    });
  }
};

module.exports = orm;
