class Graph {

    constructor() {
        /** adjacency list */
        this.nodesIndexes = {};
        this.nodes = {};
    }

    add(key, value) {
        if(!key)
            throw new Error('key is not given');
        if(typeof key === 'object') {
            for(let i of key)
                this.add(i);
        } else {
            if(!value) value = key;
            this.nodes[key] = value;
            this.nodesIndexes[key] = [];
        }
    }

    connections(keyA, array) {
        if(!this.nodesIndexes[keyA] || !array || typeof array != 'object')
            throw new Exception('key must exist and array of existing keys must be given');
        for(let i of array) 
            this.connect(keyA, i)
    }

}

class UndirectedGraph extends Graph {

    constructor() {
        super();
    }

    connect(keyA, keyB) {
        if(!this.nodesIndexes[keyA] || !this.nodesIndexes[keyB])
            throw new Error('nodeA and/or nodeB does not exist');
        this.nodesIndexes[keyA].push(keyB);
        this.nodesIndexes[keyB].push(keyA);
    }

}

class DirectedGraph extends Graph {

    constructor() {
        super();
    }

    connect(keyA, keyB) {
        if(!this.nodesIndexes[keyA] || !this.nodesIndexes[keyB])
            throw new Error('nodeA and/or nodeB does not exist');
        this.nodesIndexes[keyA].push(keyB);
    }

}

module.exports = { UndirectedGraph, DirectedGraph };