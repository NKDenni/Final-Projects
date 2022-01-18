class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        const new_node = new Node(val);
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    addNode(val) {
        if (this.head != null) {
            var runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            var newNode = new Node(val);
            runner.next = newNode;
        } else {
            this.head = new Node(val);
        }

        return this;
    }

    front() {
        if (this.head == null) {
            console.log(this.head);
            return this;
        }
        var kore = this.head;
        console.log(kore.data);
        return this;
    }

    length(){
        let count = 0;
        if(this.head == null){
            return count;
        }
        let curr = this.head;
        count++;
        while(curr != null){
            if(curr.next == null){
                return count;
            }
            curr = curr.next;
            count++;
        }
    }
}

let new_list = new SLL();
console.log(new_list);
new_list.addNode(3);
new_list.addNode(5);
new_list.addNode(7);
new_list.addNode(9);
new_list.addNode(11);
new_list.addNode(13);
console.log(new_list);
console.log(new_list.length());