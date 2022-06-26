

/**
 * 动态 创建 Script 标签
 * @param {*} scriptSrc 
 * @param {*} cb 
 */
export const createScript = (scriptSrc, cb) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = function () {
        typeof cb === 'function' && cb()
    }
    script.src = scriptSrc
    return script
}

/**
 * 插入脚本到 head
 * @param {*} script 
 */
export const injectScriptInHead = script => {
    if (script) {
        const head = document.getElementsByTagName('head')[0]
        head.appendChild(script)
    } else {
        throw new Error('script 不可为空')
    }

}


/**
 * 加载script 
 * @param {*} scriptsrc 
 * @returns 
 */
export const loadScript = scriptsrc => {
    return new Promise((revose) => {
        const script = createScript(scriptsrc, () => {
            revose('script onload ready')
        })
        injectScriptInHead(script)
    })

}

/**
 * 生成一个随机串
 * @param {*} length =10
 */
export const randomString = (length = 10) => {
    let str = "";
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const array = new Array(length).fill(1)
    const arrRandomLen = arr.length - 1
    array.forEach(() => {
        const pos = Math.round(Math.random() * arrRandomLen)
        str += arr[pos]
    })
    return str
}


/**
* 生成一个时间戳  
*  
*/
export const createTimestamp = ()=> {
    return Math.floor(new Date().getTime() / 1000)
}
