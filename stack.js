'use strict';

class Stack {

    constructor(){
       this.placeHolder = [];
    }

    push(obj){
        return this.placeHolder.push(obj);
    }

    size(){
        return this.placeHolder.length;
    }

    peek() {
        if (this.placeHolder.length > 0) {
            return this.placeHolder[this.placeHolder.length - 1]
        } else {
            throw new Error('Stack empty');
        }

    }
    pop(){
        if(this.placeHolder.length > 0){
            return this.placeHolder.splice(this.placeHolder.length-1, 1)
        } else{
            throw new Error('Stack empty');
        }

    }
    empty(){
        return this.placeHolder.length > 0;
    }

    search(searchObj) {
        const index = this.placeHolder.indexOf(searchObj);
        if(index > -1){
            return this.placeHolder.length - this.placeHolder.indexOf(searchObj);
        } else {
            return -1;
        }

    }

}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(10);
stack.push(15);

console.log('search 0'+ stack.search(0));
console.log('search 1'+ stack.search(1));
console.log('search 3'+ stack.search(3));
console.log('search 15'+ stack.search(15));

console.log('before peek' + stack.size());
console.log('peek value'+ stack.peek());
console.log('after peek' + stack.size());


console.log('before pop' + stack.size());
stack.pop();
console.log('after pop' + stack.size());


