import patternDetectors from './patternDetectors';
import { Patterns, PatternDetectorItem } from './types';

function detectPatterns(bit: string): string {
    // 先检测传入的是否是.bit字符串
    if (!bit || typeof bit !== 'string' || !/^.+\.bit$/) {
        return '';
    }
    const detectedString = bit.replace(/\.bit$/, '');
    const patterns: Patterns = [];
    doDetect(detectedString, patterns, patternDetectors);
    return patterns.reverse().toString();
}

function doDetect(bit: string, patterns: Patterns, patternDetectors: PatternDetectorItem[]) {
    patternDetectors.forEach((detector) => {
        const { name, validateFun, subPatternDetectors } = detector;
        // 检测该bit是否符合该pattern，如果不符合则不需要再校验相关的Sub Patterns
        const validateFunRes = validateFun(bit);
        // 若该bit通过了对应的Pattern校验，则将该Pattern的name添加到返回的数组中
        if (validateFunRes) {
            if (typeof validateFunRes === 'object' && validateFunRes.patternName) {
                // 支持在validate函数中动态设置patternName
                patterns.push(validateFunRes.patternName);
            } else {
                // 静态设置的pattenName，大部分情况应该走的这个分支
                name && patterns.push(name);
            }
            doDetect(bit, patterns, subPatternDetectors); // 递归
        }
    });
    return patterns.toString();
}

export { detectPatterns };
