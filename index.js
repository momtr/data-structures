/** data structures */

/** graphs */
const graphs = require('./lib/graph.class');

const undirectedGraph = new graphs.UndirectedGraph();
undirectedGraph.add(['A', 'B', 'C']);
undirectedGraph.connections('A', ['B', 'C']);

const directedGraph = new graphs.DirectedGraph();
directedGraph.add(['A', 'B', 'C']);
directedGraph.connections('A', ['B', 'C']);

/** linked lists */
const lists = require('./lib/linkedlist.class');

const linkedList = new lists.DoublyLinkedList();
linkedList.addMultiple([0, 1, 2, 3, 4]);

/** stack (with doubly linked lists) */
const stacks = require('./lib/stack.class');

const stack = new stacks.Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.pop();

/** queue */
const queues = require('./lib/queue.class');

const queue = new queues.Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();

/** trees */
const trees = require('./lib/trees.class');

const tree = new trees.BinaryTree(0);
tree.head.left = new trees.Node(1);
tree.head.right = new trees.Node(2);
tree.head.left.left = new trees.Node(3);
tree.head.left.parent = tree.head;
tree.head.right.parent = tree.head;
tree.head.left.left.parent = tree.head.left;

tree.postOrder(i => console.log(i.key))