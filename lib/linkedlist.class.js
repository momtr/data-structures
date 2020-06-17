class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(key) {
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

    addMultiple(array) {
        if(!array || typeof array != 'object')
            throw new Error('array must be given')
        for(let i of array)
            this.add(i);
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

    get value() {
        return this.key;
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

module.exports = { DoublyLinkedList, Node }