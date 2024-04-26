// Referenced: 
// https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/
// https://www.geeksforgeeks.org/convert-adjacency-list-to-adjacency-matrix-representation-of-a-graph/

function convertToAdjList(adjMatrix) {
    let list = [];
    for (let v = 0; v < adjMatrix.length; v++) {
        list[v] = [];
        for (let j = 0; j < adjMatrix[v].length; j++) {
            if(adjMatrix[v][j] == 1) { list[v].push(j); }
        }
    }
    return list;
}

function convertToAdjMtrx(adjList) {
    let matrix = [];
    for (let i = 0; i < adjList.length; i++) {
        matrix[i] = Array(adjList.length).fill(0);
    }
    for (let v = 0; v < adjList.length; v++) {
        for (let j = 0; j < adjList[v].length; j++) { 
            matrix[v][adjList[v][j]] = 1; 
        }
    }
    return matrix;
}
