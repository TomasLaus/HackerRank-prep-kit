function miniMaxSum_T(arr: number[]): void {
    // Write your code here

    //sorting function (instead of using .sort())
    function bubbleSort(arr: number[]) {
        //reminder
        let done: boolean = false;
        while (!done) {
            done = true;
            //sorting
            for (let i = 1; i < arr.length; i += 1) {
                if (arr[i - 1] > arr[i]) {
                    done = false;
                    //swap positions
                    let tmp: number = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                }
            }
        }

        return arr;
    }

    //using the sorted array
    let array = bubbleSort(arr)

    let min: number = 0
    let max: number = 0

    //starting from pos 0, we remove the last element (like .pop())
    for (let i = 0; i < array.length - 1; i++) {
        min += array[i]
    }

    //we start from the second pos (arr[1]), we're removing the firts element
    for (let j = 1; j < array.length; j++) {
        max += array[j]
    }

    //output
    console.log(min, max)
}