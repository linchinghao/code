/**
 * Stack 栈
 *
 * push(element)：添加一个（或几个）新元素到栈顶。
 * pop()：移除栈顶的元素，同时返回被移除的元素。
 * peek()：返回栈顶的元素，不对栈做任何修改。
 * isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
 * clear()：移除栈里的所有元素。
 * size()：返回栈里的元素个数。
 */

class Stack {
  constructor() {
    this.list = []
  }

  push(ele) {
    this.list.push(ele)
  }

  pop() {
    return this.list.pop()
  }

  peek() {
    return this.list[this.list.length - 1]
  }

  isEmpty() {
    return this.list.length === 0
  }

  clear() {
    this.list = []
  }

  size() {
    return this.list.length
  }

  print() {
    console.log(this.list.toString())
  }
}
