import { isFixedNumDigital, isNationalFlagDigit, isCommonDigit } from '../../validator';

const is5Digital = (bit: string) => {
    return isFixedNumDigital(bit, 5) || isNationalFlagDigit(bit, 5);
};

const is100kDigit = (bit: string) => {
    return isCommonDigit(bit, 5);
};

export * from '../../validator';

export { is5Digital, is100kDigit };
