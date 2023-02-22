class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;        
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const leaderNode = this.traverseToIndex(index-1);
        const followerNode = leaderNode.next;
        const newNode = new Node(value);

        newNode.next = followerNode;
        newNode.previous = leaderNode;
        leaderNode.next = newNode;
        followerNode.previous = newNode;
        this.length++;
        return this.printList();
    }

    remove(index){
        let currentNode = this.head;
        if (index <= 0) {
            this.head = currentNode.next;
            this.length--;
            return this.printList();
        }

        if (index > this.length-1) {
            return this.printList();
        }
        const leadingNode = this.traverseToIndex(index-1);
        leadingNode.next = leadingNode.next.next;
        this.length--;
        return this.printList();
    }

    printList() {
        let array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    }
}

const myLinkedList = new DoubleLinkedList(10);
//console.log(myLinkedList);
//1->10->15->16
myLinkedList.append(15); 
myLinkedList.append(16); 
myLinkedList.prepend(1);
myLinkedList.printList();
// //1->10->99->15->16
myLinkedList.insert(2, 99);
// //1->10->15->16
myLinkedList.remove(2);