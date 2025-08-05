/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
  if(head === null) return false;
  let currentNode = head;
  const nodeList = [currentNode];

  while(currentNode.next !== null){
    currentNode = currentNode.next;
    if(nodeList.includes(currentNode)) return true;
    nodeList.push(currentNode);
  }

  return false;
};
// @lc code=end

