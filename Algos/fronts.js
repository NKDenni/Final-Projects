class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor(){
        this.head = null;
    }
    addFront(val){
        const new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next=this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if(this.head == null){
            return this;
        }
        let kore = this.head;
        this.head = kore.next
        return this;
    }
    front(){
        if(this.head == null){
            console.log(this.head);
            return this;
        }
        var kore = this.head;
        console.log(kore.data);
        return this;
    }
    contains(value){
        var kore = this.head;
        while (kore != null){
            if(kore.data == value){
                console.log('true')
            } else {
                console.log('false')
            }
            kore = kore.next;
        }
        return this;
    }
    display(){
        var kore = this.head;
        var arr = [];
        while(kore != null){
            arr.push(kore.data);
            kore = kore.next;
        }
        console.log(...arr)
        return arr;
    }
}

let new_list = new SLL();
console.log(new_list);
var node1 = new Node(23);
console.log(node1);
new_list.head = node1;
new_list.addFront(64);
new_list.addFront(11);
new_list.addFront(612);
new_list.addFront(14);
new_list.contains(23);
new_list.display();
new_list.removeFront();
new_list.display();
new_list.removeFront();
new_list.display();
