type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    // 빈 배열이거나 크기가 0 이하인 경우 처리
    if (arr.length === 0 || size <= 0) {
        return [];
    }

    let result : Obj[][] = []
    
    for(let i=0; i<arr.length; i+=size){

        let newArray = arr.slice(i, i + size)            

        result.push(newArray)
        
    }
    

    return result

}