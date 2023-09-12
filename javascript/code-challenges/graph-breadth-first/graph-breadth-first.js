class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }
  
    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }
  
    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }

    bfs(startNode) {
        const queue = [];
        const visitedNodes = [];
    
        queue.push(startNode);
        visitedNodes.push(startNode);
    
        while (queue.length > 0) {
            const currentNode = queue.shift();
    
            for (const neighbor of this.adjacent[currentNode]) {
                if (!visitedNodes.includes(neighbor)) {
                    visitedNodes.push(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return visitedNodes;
    }
  }
 
  const g = new Graph();
  
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  g.addVertex("G");
  
  g.addEdge("A","B");
  g.addEdge("A","C");
  g.addEdge("A","D");
  g.addEdge("B","C");
  g.addEdge("B","D");
  g.addEdge("C","D");
  g.addEdge("C","E");
  g.addEdge("D","F");
  g.addEdge("F","G");
  
  console.log(g.bfs("A"));
  
module.exports = Graph;