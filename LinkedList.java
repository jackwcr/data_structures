public class LinkedList {
  Node head;

  // add to the end of the linkedlist
  public void append(int data) {
    if (head == null) {
      head = new Node(data);
      return;
    }
    Node current = head;
    while(current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }

  // delete value
  public void deleteWithValue(int data) {
    if (head == null) return;
    if (head.data == data) {
      head = head.next;
      return;
    }
  
    Node current = head;
    while (current != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return
      }
      current = current.next;
    }
  }

}


class Node {
  Node next = null;
  int data;

  public Node(int data) {
    this.data = data;
  }
}