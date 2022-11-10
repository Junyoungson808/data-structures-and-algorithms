'use strict';

const Graph = require('../index');

describe('Testing Graph Built-in Methods', () => {
  it('Node can be successfully added to the graph', ()=> {   // 1
    let graph = new Graph();
    let vertex1 = graph.addVertex(1);
    expect(graph.vertices.has(vertex1)).toBeTruthy();
  });
  it('An edge can be successfully added to the graph', ()=> {   //2
    let graph = new Graph();
    let vertex1 = graph.addVertex(1);
    let vertex2 = graph.addVertex(2);
    let vertex3 = graph.addVertex(3);
    let vertex4 = graph.addVertex(4);
    graph.addDirectedEdge(vertex1,vertex2,vertex3,vertex4);
    let vertex1edges = graph.adjacencyList.get(vertex1).length;
    expect(vertex1edges).toBe(1);
  });
  it('A collection of all nodes can be properly retrieved from the graph', ()=> {   //3
    let graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    let vertices = graph.vertices;
    expect(vertices.size).toBe(4);
  });
  it('All appropriate neighbors can be retrieved from the graph', ()=> {   //4
    let graph = new Graph();
    let vertex1 = graph.addVertex(1);
    let vertex2 = graph.addVertex(2);
    let vertex3 = graph.addVertex(3);
    let vertex4 = graph.addVertex(4);
    graph.addDirectedEdge(vertex1,vertex3);
    graph.addDirectedEdge(vertex1,vertex4);
    graph.addDirectedEdge(vertex1,vertex2);
    let vertex1edges = graph.getNeighbors(vertex1);
    expect(vertex1edges.length).toBe(3);
  });
  it('Neighbors are returned with the weight between nodes included', ()=> {   //5
    let graph = new Graph();
    let vertex1 = graph.addVertex(1);
    let vertex2 = graph.addVertex(2);
    let vertex3 = graph.addVertex(3);
    let vertex4 = graph.addVertex(4);
    graph.addDirectedEdge(vertex1,vertex2, 1);
    graph.addDirectedEdge(vertex1,vertex3, 3);
    graph.addDirectedEdge(vertex1,vertex4, 4);
    let vertex1edges = graph.adjacencyList.get(vertex1);
    expect(vertex1edges[0].weight).toBe(1);
    expect(vertex1edges[1].weight).toBe(3);
    expect(vertex1edges[2].weight).toBe(4);
  });
  it('The proper size is returned, representing the number of nodes in the graph', ()=> {     //6
    let graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    let size = graph.getSize();
    expect(size).toBe(4);
  });
  it('A graph with only one node and edge can be properly returned', ()=> {    //7
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph).toBeTruthy();
  });
  it('Breadth Test 1', ()=> {  
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph).toBeTruthy();
  });
  it('Breadth Test 2', ()=> {
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph).toBeTruthy();
  });
  it('Breadth Test 3', ()=> {
    let graph = new Graph();
    graph.addVertex(1);
    expect(graph).toBeTruthy();
  });
  it('Depth Test 1', ()=> {
    let graph = new Graph(4);
    graph.addVertex(0, 1);
    graph.addVertex(0, 2);
    graph.addVertex(1, 2);
    graph.addVertex(2, 0);
    graph.addVertex(2, 3);
    graph.addVertex(3, 3);
    graph.breadthFirst(2);
    console.log(breadthFirst(2));
  });

});
