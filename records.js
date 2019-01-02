// This class represents Hastables of past records
// we want to run BFS from user to his recods. 

const express = require('express');
const bodyParser = require('body-parser');
// https://www.npmjs.com/package/simple-hashtable
const SimpleHashTable = require('simple-hashtable');

class records {

    constructor(owner) {
        var hashtable = new SimpleHashTable();
        this.owner = owner;	
	}

    // Once a new carpooling happened, adding him to user's hashtable
    // in the future we want to add a condition for if the ride was successfull
    newDriver (name){
        hashtable.put(name, name.phone);
        return;
    }

}
module.exports = Records;
