function longestCommonPrefix(strs: string[]): string {

        if(strs.length ===0 ) return ""
        
        let result=""
        let minLength = Math.min(...strs.map((item)=>item.length))
        let common: {[key:number]: string} = {}

        for(let i=0; i<minLength; i++){

                let isCommon = true;

                for(let j=0; j<strs.length; j++){

                    let currentWord = strs[j]
                    let currentChar = currentWord[i]

                    console.log(currentWord,currentChar)

                    if(j===0){

                          common[i] =currentChar  
                    
                    }else {
                        
                        if(common[i] !== currentChar ){

                            isCommon= false;
                            break;
                        }
                    }

                }



                 if(isCommon) {

                        result+=common[i]
                 }else {
                    break;
                 }


        }


        return result

};