function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    
        const newArray = [];

        for(let i=0; i<arr.length; i++){

            newArray.push(fn(arr[i],i))
        }

        console.log(newArray)


        return newArray
};