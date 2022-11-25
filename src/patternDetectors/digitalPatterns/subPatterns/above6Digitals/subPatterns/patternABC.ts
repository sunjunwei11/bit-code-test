import { PatternDetectorItem } from '../../../../../types';
import { getABCPattern } from '../../../../../utils';
import { isCommonDigit } from '../validators';

const getPatternDetector = (patternName: string): PatternDetectorItem => {
    const patternDetector: PatternDetectorItem = {
        name: patternName,
        validateFun: (bit: string) => {
            return isCommonDigit(bit) && getABCPattern(bit) === patternName;
        },
        subPatternDetectors: []
    };
    return patternDetector;
};

const AAAAAAADetector = getPatternDetector('AAAAAAA');
const ABBBBBBDetector = getPatternDetector('ABBBBBB');
const AAABBBBDetector = getPatternDetector('AAABBBB');
const AAAAABBBBBDetector = getPatternDetector('AAAAABBBBB');

export { AAAAAAADetector, ABBBBBBDetector, AAABBBBDetector, AAAAABBBBBDetector };
