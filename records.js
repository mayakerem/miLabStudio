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

    newride (name){
        hashtable.put(name, name.phone)
    }
    
    //get

    //update

}
