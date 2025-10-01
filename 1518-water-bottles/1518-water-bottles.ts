function numWaterBottles(numBottles: number, numExchange: number): number {
    // 처음 numBottles개를 모두 마심
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;
    
    // 빈 병으로 교환할 수 있는 동안 반복
    while (emptyBottles >= numExchange) {
        // 빈 병을 새 병으로 교환
        const newBottles = Math.floor(emptyBottles / numExchange);
        
        // 새 병을 마심
        totalDrunk += newBottles;
        
        // 빈 병 = 교환 후 남은 빈 병 + 방금 마신 병
        emptyBottles = (emptyBottles % numExchange) + newBottles;
    }
    
    return totalDrunk;
}