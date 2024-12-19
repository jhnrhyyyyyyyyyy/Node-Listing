class Node {
    constructor(value) {
        this.value = value;  
        this.next = null;     
    }
}

class LinkedList {
    constructor() {
        this.head = null;   
        this.size = 0;     
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++; 
        this.print();
    }

    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(`Current Linked List: [${elements.join(" -> ")}]`);
    }
}

const linkedList = new LinkedList();

const items = [
    "Data Structures - Array",
    "Variable Type - Integer",
    "Sorting Algorithm - Bubble Sort"
];

items.forEach(item => linkedList.append(item));
