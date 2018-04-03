// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data){
    let node = new Node(data);
    if (node.data < this.data) {
      node.data = this.left.data;
    }else{
      node.data = this.right.data;
    }
  }

  contains(data){

  }
}

module.exports = Node;
