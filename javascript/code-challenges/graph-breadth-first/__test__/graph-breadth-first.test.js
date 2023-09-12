const Graph = require('../graph-breadth-first'); 

describe('Graph Class', () => {
  let g;
  
  beforeEach(() => {
    g = new Graph();
  });

  describe('addVertex method', () => {
    it('should add a vertex to the graph', () => {
      g.addVertex('A');
      expect(g.vertices).toContain('A');
    });

    it('should add multiple vertices to the graph', () => {
      g.addVertex('A');
      g.addVertex('B');
      g.addVertex('C');
      expect(g.vertices).toContain('A');
      expect(g.vertices).toContain('B');
      expect(g.vertices).toContain('C');
    });
  });

  describe('addEdge method', () => {
    it('should add an edge between two vertices', () => {
      g.addVertex('A');
      g.addVertex('B');
      g.addEdge('A', 'B');
      expect(g.adjacent['A']).toContain('B');
      expect(g.adjacent['B']).toContain('A');
    });

    it('should update the number of edges', () => {
      g.addVertex('A');
      g.addVertex('B');
      g.addEdge('A', 'B');
      expect(g.edges).toBe(1);
    });
  });

  describe('bfs method', () => {
    it('should perform BFS traversal starting from a given node', () => {
      g.addVertex('A');
      g.addVertex('B');
      g.addVertex('C');
      g.addVertex('D');
      g.addEdge('A', 'B');
      g.addEdge('A', 'C');
      g.addEdge('B', 'D');
      const result = g.bfs('A');
      expect(result).toEqual(['A', 'B', 'C', 'D']);
    });
  });
});
