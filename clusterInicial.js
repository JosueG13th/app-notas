var cluster = require('cluster');
var http = require('http');
var numCPUs = 5;

if (cluster.isMaster) {
 for (var i = 0; i < numCPUs; i++) {
  cluster.fork();
 }
} else {
    require("./main");
    console.log("Cluster activated.")
}