function longestCommonPrefix(strs: string[]): string {
   
        // 길이가 0이면 return 

        if(strs.length ===0) return ""

        
        for(let referIdx = 0; referIdx<strs[0].length; referIdx++){


                // 기준점이 되는 문자는 배열의 첫번째 요소의 referIdx
                let referWord = strs[0][referIdx]


                // strs 의 1번째 요소부터 검사
                for(let currentIdx=1 ; currentIdx < strs.length; currentIdx++){

                        let currentWord = strs[currentIdx]
                // 함수가 종료되는 2가지 조건 
                // 1. 배열의 길이가 0번째 요소가 더 긴경우 
                // 2. 각 인덱스의 값이 다른 경우 

                    if(referIdx >= currentWord.length || referWord !== currentWord[referIdx] ){

                        return strs[0].substring(0,referIdx)
                    }

                }
                        
        }


        return strs[0]

}