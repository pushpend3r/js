const leftChildof = i => i * 2 + 1;
const rightChildof = i => i * 2 + 2;
const parentOf = i => parseInt(i / 2) - 1;

function heapify(heap, index) {
  let parent = index;
  const leftChild = leftChildof(index);
  const rightChild = rightChildof(index);

  if (leftChild < heap.length && heap[leftChild] < heap[parent])
    parent = leftChild;

  if (rightChild < heap.length && heap[rightChild] < heap[parent])
    parent = rightChild;

  if (index !== parent) {
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    heapify(heap, parent);
  }
}

let array = [3, 9, 2, 1, 4, 5];

for (let i = parentOf(array.length); i >= 0; --i) {
  heapify(array, i);
  console.log(array);
}
