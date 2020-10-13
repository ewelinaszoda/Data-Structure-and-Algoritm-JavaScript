function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // only positive values, sorted
  A = A.filter(x => x >= 1).sort((a, b) => a - b)

  let x = 1
// if we find a smaller number no need to continue, cause the array is sorted
  for (let i = 0; i < A.length; i++) {
    if (x < A[i]) {
      return x
    }
    x = A[i] + 1
  }
  return x
}