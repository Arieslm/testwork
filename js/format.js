import timeFilter from 'moment'


const formatUnixTime = timestamp => {
    if (timestamp == null) {
        return '-'
    }

    return timeFilter.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
}

//为空返回-
const changeNull = (data)=>{
  if(data == null){
    return '-'
  }else{
    return data
  }
}

// 折扣
const formatDiscount = discount => {

        if (discount == null) {
            return '-'
        }
        return (parseFloat(discount) * 100).toFixed(1) + '%'
    }
    // 折扣
const formatDiscountAll = (discount, i = 2) => {

    if (discount == null) {
        return '-'
    }
    if (discount > 0) {
        return (parseFloat(discount) * 100).toFixed(i) + '%'
    }
    if (discount < 0) {
        return '-' + (parseFloat(Math.abs(discount)) * 100).toFixed(i) + '%'
    }
}

// 金额
const formatPrice = price => {

        if (price == null) {
            return '-'
        }

        return parseFloat(price).toFixed(0).replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");

    }
    // ￥ 金额
const formatPriceWithSymbol = price => {

    if (price == null) {
        return '-'
    }

    return '¥' + parseFloat(price).toFixed(0).replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");

}

// 除null
const nullFilter = v => {

    if (v == null) {
        return '-'
    }

    return v

}


const affectFilter = v => {

        if (v == null) {
            return '-'
        }

        if (v >= 0) {
            return "+" + v
        }

        return v

    }
    //保留两位小数,不带百分号
const decimalTwo = (nums, y = true, i = 2) => {
    if (nums == null) {
        return '-'
    }
    if (+nums) {
        return y ? (parseFloat(+nums) * 100).toFixed(i) : (parseFloat(+nums)).toFixed(i);
    } else {
        return nums
    }
}

//保留1位小数,不带百分号
const decimalTwo1 = (nums, y = true, i = 1) => {
    if (nums == null) {
        return '-'
    }
    if (+nums) {
        return y ? (parseFloat(+nums) * 100).toFixed(i) : (parseFloat(+nums)).toFixed(i);
    } else {
        return nums
    }
}

//销售趋势图 小数处理
const decimalTwo2 = (nums, y = true, i = 1) => {
    if (nums == '-') {
        return '-'
    } else {
        return nums + '%'
    }
}

//小数转百分数
const percentageNumber = (v, length = 2, withSymbol = true) => {
    if (v == null) {
        return '-'
    }
    if (Math.abs(v) < 0.000001) {
        v = 0
    }
    //console.log(v)
    return withSymbol ? (v * 100).toFixed(length) + '%' : (v * 100).toFixed(length)
}

//小数转百分数 超过三位返回‘-’
const percentageNumberTwo = (v, length = 2, withSymbol = true) => {
    if (v == null ) {
        return '-'
    }
    if (v < -9.99 || v > 9.99) {
        return v > 0 ? 999 + '%+' : -999 + '%+'
    }
    if (Math.abs(v) < 0.000001) {
        v = 0
    }
    //console.log(v)
    return withSymbol ? (v * 100).toFixed(length) + '%' : (v * 100).toFixed(length)
}

const formatNumber = (v, length = 2) => {
    if (v == null) {
        return '-'
    }
    return parseFloat(v).toFixed(length)
}

const negativeFillter = (v) => {
    if (v != '-') {
        if (v.split("")[0] == "-") {
            return v = v.substring("1")

        }
    }
    return v
}

const formatPriceTruncDis = str => { // 去0取整 * 100 + %
    if (str == null) {
        return '-'
    }
    return (parseFloat(str) * 100).toFixed(0) + '%';
}

const formatPriceTrunc = price => { // 去0取整
    if (price == null) {
        return '-'
    }
    return parseFloat(price).toFixed(0);
}

const formatPriceWithD = price => { //  金额格式化
    if (price == null || price == '') {
        return '-'
    }
    if (price >= 100000) {
        return  parseFloat(price / 1000).toFixed(0) + 'K';
    }
    return parseFloat(price).toFixed(0).replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
}

const formatPriceWithK = price => { // ¥ 金额格式化

    if (price == null || price == '') {
        return '-'
    }
    if (price >= 100000) {
        return '￥' + parseFloat(price / 1000).toFixed(0) + 'K';
    }
    return '￥' + parseFloat(price).toFixed(0).replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
}
const formatterQty  = function(str){
    if(str==null || str==''){
         return null;
    }
    let a=parseFloat(str);
    return a.toFixed(2);
}
const formatDate = function(str, f){
    if (!str || str == null) {
        return '-'
    }
    let dates = str+'';
    return `${dates.substr(0,4)}${f}${dates.substr(4,2)}${f}${dates.substr(6,2)}`;
}
export default {
    negativeFillter: negativeFillter,
    formatUnixTime: formatUnixTime,
    formatDiscount: formatDiscount,
    formatPrice: formatPrice,
    formatPriceWithSymbol: formatPriceWithSymbol,
    nullFilter: nullFilter,
    affectFilter: affectFilter,
    decimalTwo: decimalTwo,
    formatDiscountAll: formatDiscountAll,
    percentageNumber: percentageNumber,
    formatNumber: formatNumber,
    decimalTwo1: decimalTwo1,
    decimalTwo2: decimalTwo2,
    changeNull:changeNull,
    formatPriceTruncDis: formatPriceTruncDis,
    formatPriceTrunc: formatPriceTrunc,
    formatPriceWithD: formatPriceWithD,
    formatPriceWithK: formatPriceWithK,
    formatterQty: formatterQty,
    percentageNumberTwo: percentageNumberTwo,
    formatDate: formatDate,
}
