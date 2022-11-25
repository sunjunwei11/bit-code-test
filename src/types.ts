type Patterns = string[];

type DetectFunction = (bit: string) => Patterns;

interface validateFunReturnName {
    patternName: string;
}

type validateFunReturn = boolean | validateFunReturnName;

interface PatternDetectorItem {
    name: string;
    validateFun: (bit: string) => validateFunReturn;
    subPatternDetectors: PatternDetectorItem[];
}

export { Patterns, DetectFunction, PatternDetectorItem };
