/**
 * 最小硬币找零
 * @param {*} coins 面额：可根据不同币种随意设置
 * @param {*} amount 标数：要找零的总数
 * @returns 
 */

function minCoinChange(coins,amount){
    const cache = [];  //缓存计算结果
    // 找零计算的函数
    const makeChange = value =>{  
        // 总额为0，不需要找零
        if(!value){
            return []
        }
        //找零额度已被计算过，已被缓存，直接返回
        if(cache[value]){
            return cache[value]
        }
        let min = []; //先被计算的结果
        let newMin;  //新的计算结果
        let newAmount; //每次找零之后更新的找零数额
        //遍历面额数组
        for(let i = 0;i<coins.length;i++){
            const coin = coins[i]
            newAmount = value - coin  //总数额减去当前值产生的新数额
            if(newAmount>=0){  //余数大于0时，继续递归计算
                newMin = makeChange(newAmount)
            }
            // 当余数大于0且有新的数组，且新数组长度小于旧的，则使用新数组取代旧的
            //这一步是为寻求最优解，即最小找零数
            if(newAmount>=0 && (newMin.length<min.length-1 || !min.length)&&(newMin.length||!newAmount)){
                min = [coin].concat(newMin)
            }
        }
        //计算完毕，将结果缓存
        return (cache[value] = min)
    }
    //返回计算结果
    return makeChange(amount)
}
minCoinChange([1,2,5,10,20],75)
// [ 5, 10, 20, 20, 20 ]