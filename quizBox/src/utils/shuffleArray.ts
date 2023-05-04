function swap(A, i, j) {
  let temp = A[i]
  A[i] = A[j]
  A[j] = temp
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(array, i, j)
  }
  return array;
}