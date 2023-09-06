const Graph = require('../Graphs'); 

describe('Graph Tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('Should add a vertex to the graph', () => {
    graph.addVertex('A');
    const vertices = graph.getVertices();
    if (!vertices.includes('A')) {
      throw new Error('Vertex A was not added to the graph.');
    }
  });

  it('Should add an edge to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 2);
    const neighbors = graph.getNeighbors('A');
    if (neighbors.length !== 1 || neighbors[0].vertex !== 'B' || neighbors[0].weight !== 2) {
      throw new Error('Edge A-B with weight 2 was not added properly.');
    }
  });

  it('Should retrieve all vertices from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    const vertices = graph.getVertices();
    if (vertices.length !== 2 || !vertices.includes('A') || !vertices.includes('B')) {
      throw new Error('Vertices A and B were not retrieved properly.');
    }
  });

  it('Should retrieve appropriate neighbors from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 3);
    const neighbors = graph.getNeighbors('A');
    if (neighbors.length !== 2 || !neighbors.map(n => n.vertex).includes('B') || !neighbors.map(n => n.vertex).includes('C')) {
      throw new Error('Neighbors of vertex A were not retrieved properly.');
    }
  });

  it('Should return neighbors with weights included', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 2);
    const neighbors = graph.getNeighbors('A');
    if (neighbors[0].weight !== 2) {
      throw new Error('Weight was not included in the neighbors.');
    }
  });

  it('Should return the proper size of the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    const size = graph.size();
    if (size !== 3) {
      throw new Error('Graph size was not calculated properly.');
    }
  });
});
