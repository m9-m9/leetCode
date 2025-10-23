function longestCommonPrefix(strs: string[]): string {
    // 1단계: 예외 처리
    if (strs.length === 0) return "";
    
    // 2단계: 첫 번째 문자열의 각 문자 위치를 기준으로 반복
    for (let charIndex = 0; charIndex < strs[0].length; charIndex++) {
        const currentChar = strs[0][charIndex]; // 기준이 되는 문자
        
        // 3단계: 나머지 문자열들의 같은 위치 문자와 비교
        for (let stringIndex = 1; stringIndex < strs.length; stringIndex++) {
            const currentString = strs[stringIndex];
            
            // 4단계: 두 가지 종료 조건 확인
            if (charIndex >= currentString.length ||           // 조건1: 문자열 길이 초과
                currentString[charIndex] !== currentChar) {    // 조건2: 문자가 다름
                
                // 5단계: 현재까지의 공통 접두사 리턴
                return strs[0].substring(0, charIndex);
            }
        }
    }
    
    // 6단계: 모든 비교를 통과하면 첫 번째 문자열 전체가 공통 접두사
    return strs[0];
}