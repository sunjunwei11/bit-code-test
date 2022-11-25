import { PatternDetectorItem } from '../../../../types';
import { degreeDetector, isChinese3D, isJapanese3D, isFlag3D } from './subPatterns';
import { is3Digital } from './validators';

const threeDigitalDetector: PatternDetectorItem = {
    name: '3D',
    validateFun: (bit: string): boolean => {
        return is3Digital(bit);
    },
    subPatternDetectors: [degreeDetector, isChinese3D, isJapanese3D, isFlag3D]
};

export default threeDigitalDetector;
