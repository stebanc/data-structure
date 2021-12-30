class Stack {
  constructor(private items: any = {}, private top: number = 0) {
    this.items = items;
    this.top = top;
  }

  isEmpty() {
    return this.top === 0;
  }

  clear() {
    this.items = {};
    this.top = 0;
  }

  push(item: any) {
    this.items[this.top] = item;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.top--;
    const item = this.items[this.top];
    delete this.items[this.top];
    return item;
  }

  getSize() {
    return this.top;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.top - 1];
  }

  print() {
    if (this.isEmpty()) {
      return undefined;
    }
    const arr = [];
    for (let i = 0; i < this.top; i++) {
      arr.push(this.items[i]);
    }
    return arr;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();

console.log(stack);

console.log(stack.getSize());

console.log(stack.peek());

console.log(stack.print());

stack.clear();

console.log(stack);
