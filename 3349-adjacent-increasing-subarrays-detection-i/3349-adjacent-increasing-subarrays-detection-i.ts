function hasIncreasingSubarrays(nums: number[], k: number): boolean {

      // 배열의 길이 확인
      if(nums.length < k*2) return false;

      // 순증가 판별 함수
      function isStrictlyIncreasing(start:number):boolean{
            
            for( let i=start; i<start + k -1; i++){

                if(nums[i] >= nums[i+1]){
                    return false
                }


            }

            return true
      }

      // 실행 함수
      for(let i=0; i<=nums.length - k * 2; i++){

            if(isStrictlyIncreasing(i) && isStrictlyIncreasing(i+k)){

                return true
            }
      }

      return false
};