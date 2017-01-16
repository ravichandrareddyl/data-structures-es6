'use strict';

class Queue{
    constructor(length = 10){

        this.MAXSIZE = length; //length of queue
        this.placeHolder = [];
    }
    isFull(){
        return this.placeHolder.length === this.MAXSIZE;
    }

    isEmpty(){
        return this.placeHolder.length === 0;
    }

    enqueue(element){
        if(!this.isFull()){
            return this.placeHolder.push(element);
        }
        else{
            throw new Error('Queue is full');
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            return this.placeHolder.splice(0,1);
        }
        else {
            throw new Error('Queue is Empty');
        }
    }

    peek(){
        return this.placeHolder[0];
    }

    print() {
        console.log(this.placeHolder.join(' '));
    }
}


let queue = new Queue(10);

for(let i = 0; i < 10 ; i ++){
    queue.enqueue(i);
}

console.log('isEmpty'+ queue.isEmpty());
console.log('isFull'+ queue.isFull());
console.log(`value from front of queue should be 0: ${queue.peek()}`);
console.log(`value from dequeue should return 0: ${queue.dequeue()}`);
console.log(`value from front of queue should be 1 : ${queue.peek()}`);


console.log('printing queue contents');
queue.print();
try {
    queue.enqueue(10);
    console.log('isFull after inserting 10: '+ queue.isFull());
    queue.enqueue(11);
    console.log('isFull after inserting 11: '+ queue.isFull());
    queue.enqueue(12);
    console.log('isFull after inserting 12: '+ queue.isFull());
} catch(err) {
    console.error(err);
}


