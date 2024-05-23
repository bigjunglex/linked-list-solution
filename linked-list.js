import Node from "./node.js"

function linkedList () {
    let head = null

    const append = (value) => {
        const subjNode = new Node(value);
        if(head === null){
            head = subjNode
        } else {
            if (head['next'] === null){
                head['next'] = subjNode
            } else {
                let lastNode = head
                while (lastNode['next'] !== null) {
                    lastNode = lastNode['next']
                }
                lastNode['next'] = subjNode;
            }
        }
    
    }    
    
    const prepend = (value) => head['item'] === null ? head = new Node(value) : head = new Node(value, head);

    const size = () => {
        if (head === null) return 0
        let count = 1,
            lastNode = head;
        while (lastNode['next'] !== null){
            lastNode = lastNode['next']
            count++
        }
        return count
    }   
    
    const getHead = () => head
    
    const getTail = () => {
        let lastNode = head;
        while (lastNode['next'] !== null){
            lastNode = lastNode['next']
        }
        return lastNode
    }

    const at = (index) => {
        let currentIndex = 1,
            lastNode = head;
        while(index !== currentIndex){
            if (lastNode['next'] === null) return 'invalid index'
            lastNode = lastNode['next']
            currentIndex++
        }
        return lastNode
    }

    const pop = () => {
        const prevNode = at(size() - 1);
        prevNode['next'] = null
    }

    const contains = (value) => {
        for (let i = 1; i <= size(); i++){
            const currentNode = at(i);
            if (currentNode['item']  === value) return true
        }

        return false
    }

    const find = (value) => {
        for (let i = 1; i <= size(); i++){
            const currentNode = at(i);
            if (currentNode['item']  === value) return i
        }

        return null
    }

    const toString = () => {
        let nodeStr = '';
        for (let i = 1; i <= size(); i++){
            const currentNode = at(i);
            nodeStr += `( ${currentNode.item} ) -> `
                        + `${currentNode.next === null ? "null" : ""} `;
        }

        return nodeStr
    }


    const insertAt = (value, index) => {
        if (index > size() || index < 0) return 
        const targetNode = new Node(value, at(index))
        if (index > 1 ) {
            at(index - 1)['next'] = targetNode;
        }
    }

    const removeAt = (index) => {
        if (index > size() || index < 0) return 
        if (at(index)['next'] === null) {
            at(index - 1)['next'] =  null
        } else if (index > 1) {
            at(index - 1)['next'] = at(index + 1)
        } else {
            head = at(index + 1)
        }
    }

    return {
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
} 
