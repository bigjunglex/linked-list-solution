import Node from "./node.js"

function LinkedList () {
    let head = null


    const append = (value) => {
        const subjNode = new Node(value);
        if(head === null){
            head = subjNode
        } else {
            if (head['next'] === null){
                head['next'] === subjNode
            } else {
                let lastNode = head
                while (!lastNode['next']) {
                    lastNode = lastNode['next']
                }
                lastNode['next'] = subjNode;
            }
        }
    } 
    
    
    const prepend = (value) => {
        if(head === null){
            const subjNode = new Node(value);
            head = subjNode
    }



    contains(value) .
    find(value) 
    toString 



insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index.

} 