function isValid(s: string): boolean {
   
        if(s.length ===0) return false

        if(s.length % 2 ===1 ) return false

        const stack:string[] = []
        const braket :Record<string,string> = {

                "(": ")",
                "[": "]",
                "{": "}",
        
        }

        for(let i=0; i<s.length; i++){

            let currentChar = s[i]

            if(braket[currentChar]){

                stack.push(braket[currentChar])
            }else {

                if(stack.length ===0 || stack.pop() !== currentChar){

                    return false
                }
            }

        }

        return stack.length === 0 

}