
const express = require('express');
const bodyParser = require('body-parser');
// https://www.npmjs.com/package/data-tree 
const graph = require('data-tree');

// Constructing tree
var tree = dataTree.create();

// for every new ride
newRide(rider, driver){
    rider.newRide(driver);
}

// Conduct a BFS search
var node = tree.traverser().searchBFS(function(data){
    return data.key === '#apple';
});