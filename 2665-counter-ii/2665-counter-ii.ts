type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    
    let count = init;
    
    return {
        increment() {
            return ++count;  // 전위 연산자: 먼저 증가시키고 반환
        },

        decrement() {
            return --count;  // 전위 연산자: 먼저 감소시키고 반환
        },

        reset() {
            count = init;
            return count;
        }
    }
}

// 테스트
// const counter = createCounter(5);
// console.log(counter.increment()); // 6 
// console.log(counter.reset());     // 5 
// console.log(counter.decrement()); // 4 