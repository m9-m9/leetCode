type F = (x: number) => number;

function compose(functions: F[]): F {
    
   
    

    return function(x){ 


        if (functions.length ===0) {
            return x
        }

        let result = x;
        let answer = 0;

        for(let i=functions.length-1; i>=0; i--){

            console.log(result, "매개변수",i)

            answer = functions[i](result)

            console.log(answer, "리턴값")
            result = answer

        }

            return answer
        
    }

     

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */