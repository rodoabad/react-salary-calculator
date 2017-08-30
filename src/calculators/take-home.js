import BigNumber from 'bignumber.js';

export const getTakeHome = (grossIncome, federalTax, socialSecurity) => {

    const BI_WEEKLY = 26;
    const MONTHLY = 12;
    const WEEKLY = 52;

    const yearly = new BigNumber(grossIncome)
        .minus(federalTax)
        .minus(socialSecurity);

    return {
        biWeekly: yearly.dividedBy(BI_WEEKLY).round(2).toNumber(),
        monthly: yearly.dividedBy(MONTHLY).round(2).toNumber(),
        weekly: yearly.dividedBy(WEEKLY).round(2).toNumber(),
        yearly: yearly.round(2).toNumber()
    };

};
