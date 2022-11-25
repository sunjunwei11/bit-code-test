import { LeopardPhoneNumber } from './constants';

const isMoreThan6Digital = (bit: string) => {
    return /^\d{7,}$/.test(bit);
};

const isLeopardPhoneNumber = (bit: string) => {
    return LeopardPhoneNumber.includes(bit);
};

export * from '../../validator';

export { isMoreThan6Digital, isLeopardPhoneNumber };
