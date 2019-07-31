var orm = require("./orm/orm.js")

// orm.wholeTable("clients")
// orm.wholeTable("parties")
// orm.allWhere("parties", "party_type", "'grown-up'");
orm.leftJoin(["client_name", "party_name"], "clients", "parties", "id", "client_id")