function removeElement(nums: number[], val: number): number {

        if(nums.length<=0) return 0

        let currentIdx = 0

       
        while(currentIdx <= nums.length){
            if(nums[currentIdx] !== val){

                currentIdx ++
                
            }else {

                nums.splice(currentIdx,1)
            }

        }




        return nums.length
};