function removeDuplicates(nums: number[]): number {

        if(nums.length<=0) return 0

        let uniqueIdx = 1;

        for(let currentIdx=1; currentIdx<nums.length; currentIdx++){

            

            if(nums[currentIdx] !== nums[currentIdx-1]) {

                    nums[uniqueIdx] = nums[currentIdx]
                    uniqueIdx++
            }


           
        }


        return uniqueIdx

}