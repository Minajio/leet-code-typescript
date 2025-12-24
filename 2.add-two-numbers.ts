/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  const returnArray: number[] = [];

  let remainder = 0;

  while(l1 !== null || l2 !== null){
    const n1 = l1 === null ? 0 : l1.val;
    const n2 = l2 === null ? 0 : l2.val;

    let sum = n1 + n2 + remainder;

    remainder = 0;

    while(sum > 9){
      sum %= 10;
      remainder++;
    }

    returnArray.push(sum);

    l1 = l1 === null ? null : l1.next;
    l2 = l2 === null ? null : l2.next;

  }

  if(remainder > 0){
    returnArray.push(remainder);
  }

  if(returnArray.length < 2){
    return new ListNode(returnArray[0], null);
  }

  let childNode: ListNode | null = null;

  for(let i = returnArray.length - 1; i > 0; i--){

    let node = new ListNode(returnArray[i], childNode);

    childNode = node;

  }

  return new ListNode(returnArray[0], childNode);

};
// @lc code=end

