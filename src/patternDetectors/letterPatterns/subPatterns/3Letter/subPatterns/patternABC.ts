import { PatternDetectorItem } from '../../../../../types';
import { getABCPattern } from '../../../../../utils';
import { isCommonLetter } from '../validators';

const getPatternDetector = (patternName: string): PatternDetectorItem => {
    const patternDetector: PatternDetectorItem = {
        name: patternName,
        validateFun: (bit: string) => {
            return isCommonLetter(bit, 3) && getABCPattern(bit) === patternName;
        },
        subPatternDetectors: []
    };
    return patternDetector;
};

const AAADetector = getPatternDetector('AAA');
const ABBDetector = getPatternDetector('ABB');
const ABADetector = getPatternDetector('ABA');
const AABDetector = getPatternDetector('AAB');

export { AAADetector, ABBDetector, ABADetector, AABDetector };
