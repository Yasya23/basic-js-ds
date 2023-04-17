const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);
    function addData(currentNode, data) {
      if (!currentNode) return new Node(data);
      if (currentNode.data === data) return currentNode;
      data < currentNode.data
        ? (currentNode.left = addData(currentNode.left, data))
        : (currentNode.right = addData(currentNode.right, data));
      return currentNode;
    }
  }

  has(data) {
    return searchData(this.rootNode, data);
    function searchData(currentNode, data) {
      if (!currentNode) return false;
      if (currentNode.data === data) return true;
      return data < currentNode.data
        ? searchData(currentNode.left, data)
        : searchData(currentNode.right, data);
    }
  }

  find(data) {
    return findData(this.rootNode, data);
    function findData(currentNode, data) {
      if (!currentNode) return null;
      if (currentNode.data === data) return currentNode;
      return data < currentNode.data
        ? findData(currentNode.left, data)
        : findData(currentNode.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);
    function removeData(currentNode, data) {
      if (!currentNode) return null;
      if (data === currentNode.data) {
        if (!currentNode.left && !currentNode.right) return null;
        if (!currentNode.left) return currentNode.right;
        if (!currentNode.right) return currentNode.left;

        let minRightNode = currentNode.right;
        while (minRightNode.left) {
          minRightNode = minRightNode.left;
        }
        currentNode.data = minRightNode.data;
        currentNode.right = removeData(currentNode.right, minRightNode.data);
        return currentNode;
      }

      data < currentNode.data
        ? (currentNode.left = removeData(currentNode.left, data))
        : (currentNode.right = removeData(currentNode.right, data));

      return currentNode;
    }
  }

  min() {
    if (!this.rootNode) return;
    let currentNode = this.rootNode;
    while (currentNode.left !== null) currentNode = currentNode.left;
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) return;
    let currentNode = this.rootNode;
    while (currentNode.right !== null) currentNode = currentNode.right;
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
