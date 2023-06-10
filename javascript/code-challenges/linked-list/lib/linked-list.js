'use strict';
const node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value){
        let newNode = new node(value);
        if (this.head === null){
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;          
        }}
    includes(value){
        if (this.head === null){
            return 'false';
        }else{
            let current = this.head;
            while (current){
                if (current.value === value){
                    return 'true';
                }
                current = current.next;
            }
            return 'false';
        }}
    toString(){
        let string = '';
        if (this.head === null){
            return 'the list is empty';
    }else{
        let current = this.head;
        while (current){
            string += `{${current.value}} -> `;
            current = current.next;
        }
        return string += 'NULL';
    }}}
module.exports = LinkedList;