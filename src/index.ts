import patternDetectors from './patternDetectors';
import { Patterns, PatternDetectorItem } from './types';

/**
 *
 * @param bit {string} 要检测的字符串
 * @returns {string} 检测到的pattern列表数组
 */
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

/**
 *
 * @param bit {string} 要检测的字符串
 * @param patterns {Patterns} 当前检测到的pattern列表
 * @param patternDetectors {PatternDetectorItem[]} 后续要执行检测的检测器列表
 */
function doDetect(bit: string, patterns: Patterns, patternDetectors: PatternDetectorItem[]) {
    patternDetectors.forEach((detector) => {
        const { name, validateFun, subPatternDetectors } = detector;
        const validateFunRes = validateFun(bit);
        if (validateFunRes) {
            if (typeof validateFunRes === 'object' && validateFunRes.patternName) {
                // 支持在validate函数中动态设置patternName
                patterns.push(validateFunRes.patternName);
            } else {
                // 静态设置的pattenName，大部分情况应该走的这个分支
                name && patterns.push(name);
            }
            doDetect(bit, patterns, subPatternDetectors); // 递归执行检测
        }
    });
}

export { detectPatterns };
