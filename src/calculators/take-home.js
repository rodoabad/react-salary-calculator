import BigNumber from 'bignumber.js';

export const getTakeHome = (grossIncome, federalTax, socialSecurity) => {

    const BI_WEEKLY = 26;
    const MONTHLY = 12;
    const WEEKLY = 52;

    const yearly = new BigNumber(grossIncome)
        .minus(federalTax)
        .minus(socialSecurity);

    return {
        takeHomeBiWeekly: yearly.dividedBy(BI_WEEKLY).round(2).toNumber(),
        takeHomeMonthly: yearly.dividedBy(MONTHLY).round(2).toNumber(),
        takeHomeWeekly: yearly.dividedBy(WEEKLY).round(2).toNumber(),
        takeHomeYearly: yearly.round(2).toNumber()
    };

};
