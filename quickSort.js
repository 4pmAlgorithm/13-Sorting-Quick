//PIVOT pseudo code
// 1. It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and the array length minus1, respectively)
// 2. Grab the pivot from the start of the array. 
// 3. Store the current pivot index in a variable(this will keep track of where the pivot should end up)
// 4. Loop through the array from the start until the end
//     4-1. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// 5. swap the starting element (i.e. the pivot) with the pivot index
// 6. return the pivot index

function swap (arr, idx1, idx2){
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ] 
    return arr
}
//console.log(swap([1,2,3], 1,2))

function pivotIdxFunc(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let swapIdx = start;

    for(let i = start+1; i < arr.length; i++){
        let currentEle = arr[i]
        console.log(pivot)
        console.log(currentEle)
        if(pivot > currentEle){
            swapIdx++
            swap(arr, swapIdx, i)
            console.log(arr)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

//quicksort pseudocode
// 1. call the pivot helper function on the array
// 2. when the helper returns to you the updated pivot index,
// recursively call the pivot helper on the subarray to the left of that index, and the subaray to the right of that index
// 3. your base case occurs when you consider a subarray with less than 2 elements. 

function quickSort(arr, left = 0, right = arr.length -1){

    // The base case is an array with less than 2 elements because no sorting would be required.
    //The base case of quicksort is an array with one element because a one element array requires no sorting. In your code, p is the index of the first element and r is the index of the last element. The predicate p < r is only true for an array of at least size 2. In other words, if p >= r then you have an array of size 1 (or zero, or nonsense) and there is no work to do.

    if(left < right){ 

    let pivotIdx = pivotIdxFunc(arr, left, right);
    quickSort(arr, left, pivotIdx-1) //leftside 
    quickSort(arr, pivotIdx+1, right) //rightside 

    }
    return arr
} 

console.log(quickSort([9,8,7,11,6]))