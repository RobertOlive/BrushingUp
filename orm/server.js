var orm = require("./orm/orm.js")

orm.wholeTable("clients")
orm.wholeTable("parties")
orm.allWhere("parties", "party_type", "'grown-up'");