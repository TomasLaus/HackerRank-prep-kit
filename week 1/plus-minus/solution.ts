function plusMinusTypescript(arr: number[]): void {
    // Write your code here

    let pos: number = 0
    let neg: number = 0
    let zero: number = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else {
            zero++
        }
    }

    const calculateProportions = (pos: number, neg: number, zero: number): void => {
        // const positive = pos/arr.length.toFixed(6)

        // More 'vanilla' JS
        const positive = Math.round((pos / arr.length) * 1000000) / 1000000
        console.log(positive)
        //
        const negative = Math.round((neg / arr.length) * 1000000) / 1000000
        console.log(negative)
        //
        const z = Math.round((zero / arr.length) * 1000000) / 1000000
        console.log(z)
    }
    calculateProportions(pos, neg, zero)
}