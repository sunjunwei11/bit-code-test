import { PatternDetectorItem } from '../../../../../types';
import { getABCPattern } from '../../../../../utils';
import { isCommonLetter } from '../validators';

const getPatternDetector = (patternName: string): PatternDetectorItem => {
    const patternDetector: PatternDetectorItem = {
        name: patternName,
        validateFun: (bit: string) => {
            return isCommonLetter(bit, 4) && getABCPattern(bit) === patternName;
        },
        subPatternDetectors: []
    };
    return patternDetector;
};

const AAAADetector = getPatternDetector('AAAA');
const AABBDetector = getPatternDetector('AABB');
const ABBBDetector = getPatternDetector('ABBB');
const ABBADetector = getPatternDetector('ABBA');
const AAABDetector = getPatternDetector('AAAB');

export { AAAADetector, AABBDetector, ABBBDetector, ABBADetector, AAABDetector };
