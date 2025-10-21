function finalValueAfterOperations(operations: string[]): number {

        let result = 0;

        for(let i=0; i<operations.length ; i++){

                let item = operations[i] 

                if(item === "++X" || item ==="X++"){
                        result ++
                }else if(item === "--X" || item ==="X--"){
                        result --
                }
        }

        return result
};