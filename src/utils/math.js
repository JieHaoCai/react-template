const $math = require('mathjs')
// import * as $math from 'mathjs'

function comp(_func, args) {
    let t = $math.chain($math.bignumber(args[0]))
    for (let i = 1; i < args.length; i++) {
        t = t[_func]($math.bignumber(args[i]))
    }
    // 防止超过6位使用科学计数法
    return parseFloat(t.done())
}

export function add() {
    return comp('add', arguments)
}

export function subtract() {
    return comp('subtract', arguments)
}

export function multiply() {
    return comp('multiply', arguments)
}

export function divide() {
    return comp('divide', arguments)
}
