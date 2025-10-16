function isPalindrome(x: number): boolean {

        // 0이면 바로 통과
        if(x ===0) return true

        // 음수면 바로 실패
        if(x < 0) return false

        const array = String(x).split("")

        console.log(array, array.reverse())

        for(let i=0; i<array.length; i++){

            if(array[i] !== array.reverse()[i]){
                return false
            }
        }


        return true
};