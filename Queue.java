public class Queue {
  // need a node class to refer to each object (think of an index in an array)
  private static class Node {
    // each node will have data and a reference to the next node
    private int data;
    private Node next;

    private Node(int data) {
      this.data = data;
    }
  }

  // the head is the front of the queue and the tail is the end we dont work with the middle 
  private Node head; //remove from the front
  private Node tail; //add to the end

  // check if the queue is empty
  public void isEmpty() {
    return head == null;
  }

  //peek at the queue 
  public void peek() {
    return head.data;
  }

  // add a node to the queue
  public void add(int data) {
    // create the node to add
    Node node = new Node(data);

    // if the tail is empty then we create the node after
    if (tail != null) {
      tail.next = node;
    }
    tail = node;
    // if queue is empty, the head should be the node;
    if (head == null) {
      head = node;
    }
  }

  // remove a node from the queue, it doesnt need parameters because its always removing from the front
  public void remove() {
    int data = head.data
    head = head.next;

    if (head == null) {
      tail = null;
    }
    return data;
  }
}