// This class constructs a user. 
// Each user has a few fields of personal data and a 
// Hashtable of their contacts

const express = require('express');
const bodyParser = require('body-parser');
const records = require('records');
// https://www.npmjs.com/package/data-tree 
const graph = require('data-tree');
// https://www.npmjs.com/package/regex 
const regex = require('regex')
// Allowing to use records
const records = require('./records')

class user extends records {
  
    constructor(id, name, phonenumber, records, graph) {
        this.id = id;
        this.name = name;
        this.phonenumber = phonenumber;
        this.records = records;	
        this.graph = graph;	
	}

    // Constructing tree and adding the first root node
    // Root node has a value of an array of size 2 with the name and phone number
    // and a hashtable of records 
    newGraph (){
        graph = dataTree.create();
        var node = graph.insert({
            key: [name, phonenumber],
            value: records
          });
    }

    // Adding a new user as a node
    addPhoneContact (name, phonenumber){
        this.graph.insert({
            key: [name, phonenumber],
            value: records
          });
        return;
    }

    // Adding a new driver to user's record history
    newRideForUser (user){
        this.records.newDriver(user);
    }

    // A function for the future. Normalizing all the phone numbers so they can be used
    // as proper IDs
    normalizePhoneNumber(phonenumber) {
        //group number 9 is the actual number we want to use
        var regex = new Regex(/((0)+|[+])([ ]*)(([0-9]-)*)((972)*)([ ]*)(.*)/);
        //should add a +972 based on the local location
        return //group 9 of the regex above
    }

}
module.exports = User;
