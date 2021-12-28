class Queue {
  constructor(
    private items: any = {},
    private front: number = 0,
    private end: number = 0
  ) {
    this.items = items;
    this.front = front;
    this.end = end;
  }

  getSize() {
    return this.end - this.front;
  }

  isEmpty() {
    return this.front === this.end;
  }

  enqueue(item: any) {
    this.items[this.end] = item;
    this.end++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.front];
  }

  clear() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }

  print() {
    if (this.isEmpty()) {
      return undefined;
    }
    const arr = [];
    for (let i = this.front; i < this.end; i++) {
      arr.push(this.items[i]);
    }
    return arr;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());

console.log(queue.getSize());
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());

console.log(queue);

console.log(queue.isEmpty());
console.log(queue.getSize());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.print());
