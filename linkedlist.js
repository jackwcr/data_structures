// Linked List function
//  _____________________
//  |         |         |
//  | element |  next   |
//  |_________|_________|
//

function LinkedList() {
  let length = 0;
  let head = null;
  // determining what a Node contains, in this case data = element and the pointer = next
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  // a function to determine what the size of the linkedlist is referencing a length datatype created before
  this.size = () => {
    return length;
  };

  // a function to return the head of the node that it is at currently?
  this.head = () => {
    return head;
  };

  // a function to add to the end of the linkedlist
  this.add = (element) => {
    // must declare the new Node that will be made
    let node = new Node(element);
    //if head is null that means that you are at the end of the list
    // else it will progress through the linkedlist until it reaches a null head
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // a function to remove a node from the linkedlist
  this.remove = (element) => {
    let currrentNode = head;
    let previousNode;

    // If the current node is the same as the element that is provided, head will be set to the next node
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      // iterate through as long as the current node element != element setting the previous node to be the current node and the current node to be the next node
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //    set previousNode.next to be the current node
      previousNode.next = currentNode.next;
    }
    // reduce the length of the node by 1
    length--;
  };

  // check if the node is empty, if it is returns true, else return false
  this.isEmpty = () => {
    return length === 0;
  };

  // check the index of the node at an element
  this.indexOf = (element) => {
    let currentNode = head;
    let index = -1;

    // while currentNode is not equal to null
    while (currentNode) {
      index++;
      // if the current nodes element is equal to element param set the currentNode to be equal to the next
      if (currentNode.element === element) {
        currentNode = currentNode.next;
      }
    }
    return -1;
  };

  // check the element at a point
  this.elementAt = (index) => {
    let currentNode = head;
    let count = 0;

    // while index is greater then count, iterate count and set the currentNode to be the next node
    while (index > count) {
      count++;
      currentNode = currentNode.next;
    }
  };

  // add at a spot in the linkedlist
  this.addAt = (index, element) => {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    // check if index is greater then length, if it is return false
    if (index > length) {
      return false;
    }

    // if index is equal to 0 the next node is equal to the currentNode, the head is equal to the current Node
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      // if index is > current index iterate over currentindex and set the previous node = to this node and this node to be the next node
      while (index > currentIndex) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // the next node is this node and this node is this node?
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  // remove at a node
  this.removeAt = (index) => {
    let currentNode = head;
    let previouNode;
    let currentIndex = 0;

    // if index < 0 or index is >= length, return null
    if (index < 0 || index >= length) {
      return null;
    }
    // if index equal to 0 then the head is the next node
    if (index === 0) {
      head = currentNode.next;
    } else {
      // if currentIndex < index, iterate currentIndex make the previousnode = currentnode and the currentnode = to the next node
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // this node equals this node?
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

var conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log(conga.size());
