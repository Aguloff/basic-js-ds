const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
   this.rootTree = addIn(this.rootTree, data);

   function addIn(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (node.data === value) {
      return node;
    }

    if (value < node.data) {
      node.left = addIn(node.left, value);
    } else {
      node.right = addIn(node.right, value);
    }

    return node;
   }
  }

  has(data) {
   return search(this.rootTree, data);

   function search(node, value) {
    if (!node) {
      return false;
    }

    if (node.data === value) {
      return true;
    }

    if (value < node.data) {
      return search(node.left, value);
    } else {
      return search(node.right, value);
    }
   }

  }

  find(data) {
    return search(this.rootTree, data);

   function search(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return search(node.left, value);
      } else {
        return search(node.right, value);
      }
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);
  
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let minRight = minimal(node.right);
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
      function minimal(node) {
        if (node.left) {
          return minimal(node.left);
        }
        return node;
      }
    }
  }
  

  min() {
    let current = this.rootTree;
    if (!current) {
      return null;
    }
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootTree;
    if (!current) {
      return null;
    }
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};