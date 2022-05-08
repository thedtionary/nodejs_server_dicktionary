const {OrderedMap} = require('immutable');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

class Connection {


    constructor(app) {
        this.app = app;

        this.clients = new OrderedMap();

    }

    getClients() {

        return this.clients;
    }

    addClient(id, client) {

        this.clients = this.clients.set(id, client);
    }

    removeClient(id) {
        this.clients = this.clients.remove(id);
    }


}

exports.connection = Connection;