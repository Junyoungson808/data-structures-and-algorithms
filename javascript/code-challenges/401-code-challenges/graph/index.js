'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight || null;
  }
}

module.exports = class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    this.vertices.add(newVertex);
    return newVertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    const newEdge = new Edge(endVertex, weight);
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  getVertices(){
    return this.vertices.values();
  }

  getSize(){
    return this.vertices.size;
  }

  breadthFirst(vertex){
    const queue = [];
    const visitedNodes = new Set();
    queue.push(vertex);
    visitedNodes.add(vertex);
    while(queue.length) {
      const current = queue.shift();
      let neighbors = this.getNeighbors(current);
      for (let adjacencyList of neighbors) {
        let neighbor = adjacencyList.vertex;
        if(!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }
    return visitedNodes;
  }
};

