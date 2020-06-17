class BinaryTree {

    constructor(key) {
        this.head = new Node(key);
    }

    set(reference, parent, key) {
        reference = new Node(key);
        reference.parent = parent; 
    }

    preOrder(callback, node) {
        if(!node)
            node = this.head;
        callback(node);
        if(node.left != null)
            this.preOrder(callback, node.left)
        if(node.right != null)
            this.preOrder(callback, node.right)
    }

    postOrder(callback, node) {
        if(!node)
            node = this.head;
        if(node.left != null)
            this.postOrder(callback, node.left)
        if(node.right != null)
            this.postOrder(callback, node.right)
        callback(node);
    }

    inOrder(callback, node) {
        if(!node)
            node = this.head;
        if(node.left != null)
            this.inOrder(callback, node.left)
        callback(node);
        if(node.right != null)
            this.inOrder(callback, node.right)
    }

}

class Node {

    constructor(key) {
        this.key = key;
        this.parent = null;
        this.left = null;
        this.reight = null;
    }

}

module.exports = { BinaryTree, Node }