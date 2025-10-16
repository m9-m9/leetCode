function isPalindrome(x: number): boolean {

        // 0이면 바로 통과
        if(x ===0) return true

        // 음수면 바로 실패
        if(x < 0) return false

        const array = String(x).split("")
        const arrage = Math.floor(array.length/2)

        for(let i=0; i<arrage; i++){    
            console.log(i,array[i], array[(array.length-1)-i],array[i] === array[array.length-i])


            if(array[i] !== array[array.length-i-1]) return false
        }

        return true
};