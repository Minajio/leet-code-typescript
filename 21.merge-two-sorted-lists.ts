/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(list1 === null && list2 === null) return null;

  const numberList: number[] = [];

  if(list1 !== null){
    do{
      numberList.push(list1.val);
      list1 = list1.next;
    }while(list1 !== null);
  }

  if(list2 !== null){
    do{
      numberList.push(list2.val);
      list2 = list2.next;
    }while(list2 !== null);
  }

  numberList.sort((a, b) => a - b);

  let answer: ListNode | null = null;

  for(let i = numberList.length - 1; i > -1; i--){
    let temp: ListNode = {
      val: numberList[i],
      next: answer
    };

    answer = {...temp};
  }

  return answer;

};
// @lc code=end

