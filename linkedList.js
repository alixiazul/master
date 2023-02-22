class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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
        const newNode = new Node(value);

        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
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

    reverse() {
        if (this.length === 1)
        {
            return this;
        }

        let first = this.head;
        let second = this.head.next;
        while(second) {
            let third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = first;
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

const myLinkedList = new LinkedList(10);
//console.log(myLinkedList);
//1->10->15->16
myLinkedList.append(15); 
myLinkedList.append(16); 
myLinkedList.prepend(1);
myLinkedList.printList();
//1->10->99->15->16
myLinkedList.insert(2, 99);
//1->10->15->16
myLinkedList.remove(7);
//16->15->10->1
myLinkedList.reverse();