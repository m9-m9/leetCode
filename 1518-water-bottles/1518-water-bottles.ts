function numWaterBottles(numBottles: number, numExchange: number): number {
  
    let totalDrunks = numBottles;
    let emptyBottles = numBottles;
    
    while(emptyBottles>=numExchange){

        totalDrunks += Math.floor( emptyBottles / numExchange)
        emptyBottles = Math.floor( emptyBottles / numExchange) + emptyBottles % numExchange
    }
    
    return totalDrunks;
}