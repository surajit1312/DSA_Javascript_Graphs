const consoleUtils = require("console-log-pattern/src/index");

consoleUtils.logTitle(
  "Print Breadth First Search traversal of a Graph for a given Adjacency List",
  "◉",
  "green"
);

consoleUtils.logExeBlock(
  `Coding Ninjas: https://www.codingninjas.com/studio/problems/bfs-in-graph_973002`,
  true,
  "green"
);

consoleUtils.logExeBlock(
  `Print Breadth First Search traversal of a Graph for a given Adjacency List as given below : `,
  true,
  "magenta"
);

consoleUtils.logExeBlock(
  `Input: [[1, 2, 3], [4], [5], [], [], []]`,
  true,
  "yellow"
);

const adjList = [[1, 2, 3], [4], [5], [], [], []];
const n = 6;

const bfsTraversal = function (n, adjList) {
  const path = [];
  bfsHelper(n, adjList, path, 0);
  return path;
};

const bfsHelper = function (n, adjList, path, start) {
  const visited = new Array(n);
  visited.fill(false);
  visited[0] = true;
  const queue = [start];
  while (queue.length > 0) {
    const current = queue.shift();
    path.push(current);
    for (let i = 0; i < adjList[current].length; i++) {
      if (!visited[adjList[current][i]]) {
        visited[adjList[current][i]] = true;
        queue.push(adjList[current][i]);
      }
    }
  }
};

const bfsTraversalData = bfsTraversal(n, adjList);
consoleUtils.logConsole(
  `BFS Traversal of Graph: ${JSON.stringify(bfsTraversalData)}`,
  true,
  "yellow"
);
