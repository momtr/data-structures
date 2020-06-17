/** FIFO data structure; implemented with doubly linked lists */
class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(key) {
        if(key === undefined) 
            throw new Error('key must be given')
        let newNode = new Node(key);
        if(!this.head && !this.tail) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.pointPrev(this.tail);
            this.tail = newNode;
            this.tail.prev.pointNext(newNode);
        }
    }

    dequeue() {
        let el = this.head.key;
        this.head = this.head.next;
        this.head.pointPrev(null);
        return el;
    }

    traverse(callback) {
        let current = this.head;
        while(current != null) {
            callback(current);
            current = current.next;
        }
    }

    toString() {
        let string = '';
        this.traverse(node => string += `${node.toString()},`);
        return string.slice(0, string.length-1);
    }

    print() {
        console.log(this.toString());
    }

}

class Node {

    constructor(key) {
        if(key === undefined) 
            throw new Error('key must be given')
        this.key = key;
        this.next = null;
        this.prev = null;
    }

    pointNext(node) {
        this.next = node;
    }

    pointPrev(node) {
        this.prev = node;
    }

    toString() {
        return `${this.key}`;
    }

}

module.exports = { Queue, Node };