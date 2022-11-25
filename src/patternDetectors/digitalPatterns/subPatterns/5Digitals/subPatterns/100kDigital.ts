import { PatternDetectorItem } from '../../../../../types';
import { is100kDigit } from '../validators';

const is100k: PatternDetectorItem = {
    name: '100K',
    validateFun: (bit: string): boolean => {
        return is100kDigit(bit);
    },
    subPatternDetectors: []
};

export { is100k };
