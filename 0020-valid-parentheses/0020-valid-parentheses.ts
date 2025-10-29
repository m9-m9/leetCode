function isValid(s: string): boolean {
   
            if(s.length ===0) return false       
            if(s.length % 2 ===1 ) return false

            const stack:string[] = [] 
            const braket : Record<string,string> = {

                "(" : ")",
                "[" : "]",
                "{" : "}"

             }

             for(let i=0; i<s.length; i++){

                    let currentChar = s[i]

                    if(braket[currentChar]){

                        stack.push(braket[currentChar])

                        console.log(stack, " 여는괄호 추가")

                    }else {
                        

                        
                        if(stack.pop() !== currentChar ){

                            console.log(stack.pop(), "현재값과 같지 않은 경우")

                            return false;
                        }

                        
                    }

             }


            console.log(stack)

            return stack.length===0
}