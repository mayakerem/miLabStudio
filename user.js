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

class user extends records {
    id
    name
    phonenumber
    records
    graph

    constructor(id, name, phonenumber, records, graph) {
        this.id = id;
        this.name = name;
        this.phonenumber = phonenumber;
        this.records = records;	
        this.graph = graph;	
	}

    normalize_phonenumber(phonenumber){
                                //group number is hte actual Id
        var regex = new Regex(/((0)+|[+])([ ]*)(([0-9]-)*)((972)*)([ ]*)(.*)/);
        if (phonenumber)
    }
    
    // Constructing tree
    newGraph (){
        this.graph = dataTree.create();
    }

// for every new ride
new_ride (rider, driver) {
    tree.insert({
        key: '#apple',
        value: { name: 'Apple', color: 'Red'}
    });
}

}
