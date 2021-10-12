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
    printSSL(){
        var kore = this.head;
        while(kore != null){
            console.log(kore.data);
            kore = kore.next;
        }
        return this;
    }
}

let new_list = new SLL();
console.log(new_list);
var node1 = new Node(23);
console.log(node1);
new_list.head = node1;
new_list.addFront(64); 
new_list.front();
new_list.printSSL();
console.log(new_list);
new_list.removeFront();
new_list.printSSL();
new_list.removeFront();
new_list.printSSL();
