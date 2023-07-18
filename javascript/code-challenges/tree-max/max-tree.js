'use strict'
const Node = require("./Node");

class BinaryTree{
    constructor(root=null){ 
        this.root= root
    }
    preOrder(){  
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            result.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right) 
        }
        traverse(this.root)
        return result
    }
    inOrder(){
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            if(node.left) traverse(node.left)
            result.push(node.value)
            if(node.right) traverse(node.right) 
    
        }
        traverse(this.root)
        return result
        
    }
    postOrder(){
        if (this.root === null) {
            return null;
          }
        let result =[]
        let traverse= (node)=>{
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right) 
            result.push(node.value)
    
        }
        traverse(this.root)
        return result

    }

    getMax() {
        let maxNum = this.root;
        let traverse = (node) => {
          if (node.value > maxNum.value) {
            maxNum = node;
          }
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
        };
        traverse(this.root);
        return maxNum.value;
      }
}

module.exports= BinaryTree;