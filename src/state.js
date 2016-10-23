import BigNumber from 'bignumber.js';
import moment from 'moment';
import t from 'tcomb';

const yearlyIncome = salary =>
    new BigNumber(salary)
        .dividedBy(12)
        .round(2)
        .toNumber();

const SalaryCalculator = t.struct({
    salary: t.Number,
    taxYear: t.Number,
    yearlyIncome: t.Function
}, {
    name: 'SalaryCalculator',
    strict: true
});

export const getDefaultState = () =>
    new SalaryCalculator({
        salary: 0,
        taxYear: moment().year(),
        yearlyIncome

    });

export default SalaryCalculator;
