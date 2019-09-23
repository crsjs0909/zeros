module.exports = function zeros(expression) {


    let tokens = expression.split("*");
    let five = 0;
    let odd = 0;
    for (let i=0; i<tokens.length; i++) {
        let nums=facToArray(tokens[i]);
        for (let num=0; num<nums.length; num++){
            five+=extractPow(nums[num], 5);
            odd+=extractPow(nums[num], 2);
        }
    }
    return Math.min(five, odd);
}

function extractPow(num, mul) {
    let ecx = 0;
    while (num % mul === 0) {
        if (num === 0) {
            break;
        }
        ecx++;
        num = Math.floor(num/mul);
    }
    return ecx;
}

function facToArray(token) {
    let result = [];
    let step = token.endsWith("!!") ? 2 : 1;
    let val=parseInt(token.replace("!", ""));
    while (val>0){
        result.push(val);
        val-=step;
    }
    return result;
}
