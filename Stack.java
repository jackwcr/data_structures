public class Stack {
  // basics of a node
  private static class Node {
    private int data;
    private Node next;

    // constructor for node
    private Node(int data) {
      this.data = data;
    }
  }

  // the top of a stack since it is LIFO
  private Node top;

  // check if the stack is empty
  public boolean isEmpty() {
    return top == null;
  }

  // check the next data in the stack
  public int peek() {
    return top.data;
  }

  // add the next node into the stack
  public void push(int data){
    Node node = new Node(data);
    node.next = top;
    top = node;
  }


  public void pop(){
    int data = top.data;
    top = top.next;
    return data;
  }
}