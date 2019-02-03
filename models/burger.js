var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);

        })
    },
    update: function(id, cb){
        orm.update("burger", id, cb)
    },

    create: function(name, cb){
        orm.create("burger", name, cb);
    }
}

module.exports = burger;