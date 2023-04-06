import { multiply } from "mathjs";

/**
 * 校验是否是正整数
 * @param val
 * @returns {boolean}
 */
export function validateIntNum(val) {
    var reg = /^\+?[1-9][0-9]*$/;
    return reg.test(val) ? true : false;
}

/**
 * 字符串指定位置插入新字符
 * @param str1 主字符
 * @param n    插入位置
 * @param str2 插入的字符
 * @returns {string|*}
 */
export function insertStr(str1 = '', n, str2) {
    var s1 = '';
    var s2 = '';
    if (str1.length < n) {
        return str1 + str2;
    } else {
        s1 = str1.substring(0, n);
        s2 = str1.substring(n, str1.length);
        return s1 + str2 + s2;
    }
}

/**
 * 深拷贝
 * @param obj 对象
 */
export function deepCopy(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(deepCopy(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = deepCopy(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}

/**
 * 获取字符串字节长度（一个中文算2个字节）
 * @param value 字符串
 * @returns {number}
 */
export function getStrByteLength(value) {
    var str = new String(value);
    var byteCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            byteCount += 1;
        } else {
            byteCount += 2;
        }
    }
    return byteCount;
}

/**
 * 使用spilt方法实现模糊查询
 * @param  {Array}  list     进行查询的数组
 * @param  {String} keyWord  查询的关键词
 * @return {Array}           查询的结果
 */
export function fuzzyQuery(list, keyWord) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].name && list[i].name.split(keyWord).length > 1) {
            arr.push(list[i]);
        }
    }
    return arr;
}

/**
 * 校验合法uri
 * @param url
 * @returns {*|boolean}
 */
 export function validateURL(url) {
    var reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url);
}

/**
 * 去除字符串前后空格
 * @returns {string}
 */
 export function myTrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
 }

/**
 * 格式化数字：每三位用逗号隔开
 * @param value
 * @returns {string}
 */
export function ctl_formatNum(value) {
    if (!value || value == 0) return '-';
    var str = value.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
}


/**
 * 小数转百分比
 * @param value  需要转换的小数
 * @param len  保留小数点后几位（默认2位）
 * @returns {string}
 */
export function ctl_decimalToPercent(value, len) {
    if (!value || value == 0) return '-';
    // return parseFloat(value).myMul(100).toFixed(len || 2) + '%';
    return multiply(parseFloat(value), 100).toFixed(len || 2) + '%';
}



/**
 * 格式化数字金额，每三位用逗号隔开并保留两位小数
 * @param v  需要转换的数字
 * @param len  保留小数点后几位（默认2位）
 * @param split  分隔符,默认','
 * @returns {string}
 */
export function ctl_formatMoney(v, len, split) {
    if (!v || v == 0) return '-';
    split = split || ","; len = Math.abs((+len) % 20 || 2);
    v = parseFloat((v + "").replace(/[^\d\.-]/g, "")).toFixed(len) + "";
    return v.replace(/\d+/, function (v) {
        var lit = v.length % 3 == 0;
        var index = lit ? v.length - 3 : -1;
        return v.split('').reverse().join('').replace(/\d{3}/g, function (k, l) {
            return k + ((l == index && lit) ? "" : split);
        }).split('').reverse().join('')
    }
    );
}


/**
 * 获取字符串字节长度（一个中文算2个字节）
 * @param value 字符串
 * @returns {number}
 */
export function ctl_getStrByteLength(value) {
    var str = new String(value);
    var byteCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            byteCount += 1;
        } else {
            byteCount += 2;
        }
    }
    return byteCount;
}

/**
 * 格式化文件大小单位
 * @param fileSize
 * @returns {string}
 */
export function ctl_formatFileSize(fileSize) {
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024 * 1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024 * 1024 * 1024)) {
        var temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        var temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}


/**
 * @param  {[type]} format 
 * @param  {[type]} stamp  
 * @return {[type]}        
 */
export function ctl_date(format, stamp) {

    var D = stamp || new Date(), format = format || 'Y-m-d H:i:s', week = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], dd = {};
    if (/^\d+$/.test(D)) {
        if (D.toString().length == 10) D *= 1000;
        D = new Date(D);
    }
    dd = {
        'year': D.getYear(),
        'month': D.getMonth() + 1,
        'date': D.getDate(),
        'day': week[D.getDay()],
        'hours': D.getHours(),
        'minutes': D.getMinutes(),
        'seconds': D.getSeconds()
    };
    dd.g = dd.hours > 12 ? Math.ceil(dd.hours / 2) : dd.hours;

    var oType = {
        'Y': D.getFullYear(),
        'y': dd.year,
        'm': dd.month < 10 ? '0' + dd.month : dd.month,
        'n': dd.month,
        'd': dd.date < 10 ? '0' + dd.date : dd.date,
        'j': dd.date,
        'D': dd.day,
        'H': dd.hours < 10 ? '0' + dd.hours : dd.hours,
        'h': dd.g < 10 ? '0' + dd.g : dd.g,
        'G': dd.hours,
        'g': dd.g,
        'i': dd.minutes < 10 ? '0' + dd.minutes : dd.minutes,
        's': dd.seconds < 10 ? '0' + dd.seconds : dd.seconds
    };
    for (var i in oType) {
        format = format.replace(i, oType[i]);
    }

    return format;

}

/**
 * 字符串指定位置插入新字符
 * @param str1 主字符
 * @param n    插入位置
 * @param str2 插入的字符
 * @returns {string|*}
 */
export function ctl_insertStr(str1 = '', n, str2) {
    var s1 = '';
    var s2 = '';
    if (str1.length < n) {
        return str1 + str2;
    } else {
        s1 = str1.substring(0, n);
        s2 = str1.substring(n, str1.length);
        return s1 + str2 + s2;
    }
}

/**
 * 生成随机字母
 * @param number
 * @returns {string}
 */
export function ctl_getRandomLetters(number) {
    var result = [];
    for (var i = 0; i < number; i++) {
        var randomNum = Math.ceil(Math.random() * 25);
        result.push(String.fromCharCode(65 + randomNum));
    }
    return result.join('');
}


/**
 * 以字节为单位截取字符串（从索引0开始）
 * @param val 字符串
 * @param n 字节长度
 * @returns {*}
 */
export function ctl_realSubstring(val, n) {
    var str = val || '';
    if (ctl_getStrByteLength(str) <= n) {
        return str
    }
    var m = Math.ceil(n / 2);
    for (var i = m; i <= str.length; i++) {
        if (ctl_getStrByteLength(str.substr(0, i)) > n) {
            return str.substr(0, i - 1)
        }
    }
    return str
}