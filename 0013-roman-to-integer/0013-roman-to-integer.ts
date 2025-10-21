// 뺄셍 경우의 수
// IV => 4 , XL => 40, XC => 90, CD => 400, CM => 900 

function romanToInt(s: string): number {

    
    
    
    let list ={ I : 1, V : 5, X : 10, L : 50, C : 100, D : 500, M : 1000}
    let subList = { IX:9, IV : 4, XL : 40 , XC : 90, CD : 400, CM : 900 }
    let result = 0

    for(let i=0; i<s.length; i++){

        let cur = s[i]
        let next = s[i+1]

      

            if(subList[cur + next]){

                result += subList[cur + next]
                i++
            }else {
                result+= list[cur]
            }
         
           

        
    }
    
    return result
};