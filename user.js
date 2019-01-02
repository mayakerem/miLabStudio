// This class constructs a user. 
// Each user has a few fields of personal data and a 
// Hashtable of their contacts

const express = require('express');
const bodyParser = require('body-parser');
const records = require('records');

class user {
    name
    phonenumber
    records

    constructor(name, phonenumber, records) {
		this.name = name;
        this.phonenumber = phonenumber;
        this.records = records;		
	}

    normalize_phonenumber(phonenumber){
        //use regex
    }
    
    //get


}
