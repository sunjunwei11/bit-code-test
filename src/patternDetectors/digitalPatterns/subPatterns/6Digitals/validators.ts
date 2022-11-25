import { isFixedNumDigital, isNationalFlagDigit } from '../../validator';
import { AShare } from './constants';

const is6Digital = (bit: string) => {
    return isFixedNumDigital(bit, 6) || isNationalFlagDigit(bit, 6);
};

const isAShare = (bit: string) => {
    return AShare.includes(bit);
};

export * from '../../validator';

export { is6Digital, isAShare };
