import { chineseSurname, commonChineseName, commonEnglishName } from './names';

// 中文名字判断
// 这里判断规则设置为姓+1到3个中文字判定为名字
function isChineseName(bit: string): boolean {
    const reg = /^([\u4e00-\u9fa5])([\u4e00-\u9fa5]{1,3})$/;
    const matchRes = bit.match(reg);
    if (matchRes) {
        const surname = matchRes[1]; // 姓
        const lastname = matchRes[2]; // 名
        return chineseSurname.includes(surname) && lastname.length >= 1 && lastname.length <= 3;
    }
    return false;
}

// 判断是否是中文的姓
function isChineseSurname(bit: string): boolean {
    return chineseSurname.includes(bit);
}

// 判断是否为常用的中文名
function isCommonChineseName(bit: string): boolean {
    return commonChineseName.includes(bit);
}

// 判断是否为常用的英文名
function isCommonEnglishName(bit: string): boolean {
    return commonEnglishName.includes(bit);
}

export { isChineseName, isCommonChineseName, isCommonEnglishName, isChineseSurname };
