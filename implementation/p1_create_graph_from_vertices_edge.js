const consoleUtils = require("console-log-pattern/src/index");

consoleUtils.logTitle(
  "Implement a Graph using Vertices and Edges",
  "◉",
  "green"
);

consoleUtils.logExeBlock(
  `Implement a Graph using vertices and edges below: `,
  true,
  "magenta"
);

consoleUtils.logNote(
  ` 
           0
            *       3
             *     * *
              *   *   *
               * *     *
                2 * * * 1
`,
  false,
  "",
  "",
  "magenta"
);
consoleUtils.logExeBlock("", true, "magenta");

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map();
  }

  // This is initialize all vertices with a blank array and set key, value pairs to 'adjList'
  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  // This is to connect src with dest and vice-versa to push them into adjency List
  addEdge(src, dest) {
    this.adjList.get(src).push(dest);
  }

  // print graph
  printGraph() {
    for (let key of this.adjList.keys()) {
      const list = this.adjList.get(key);
      const listVal = `[${list.join(", ")}]`;
      consoleUtils.logConsole(`${key} ˃ ${listVal}`, false, "yellow");
    }
  }
}
const vertices = [0, 1, 2, 3];

const g = new Graph(4);
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge(0, 2);

g.addEdge(1, 2);
g.addEdge(1, 3);

g.addEdge(2, 0);
g.addEdge(2, 1);
g.addEdge(2, 3);

g.addEdge(3, 1);
g.addEdge(3, 2);

g.printGraph();
