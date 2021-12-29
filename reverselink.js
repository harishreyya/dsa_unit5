const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    var previous=null,next=null;
    var current=head;
    while(current!=null){
        next=current.next;
        current.next=previous;
        previous=current;
        current=next;
    }
    head=previous;
    return head
}