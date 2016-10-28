import moment from 'moment';
import t from 'tcomb';

const SalaryCalculator = t.struct({
    salary: t.Number,
    taxYear: t.Number,
    taxableIncome: t.Number
}, {
    name: 'SalaryCalculator',
    strict: true
});

export const getDefaultState = () =>
    new SalaryCalculator({
        salary: 0,
        taxYear: moment().year(),
        taxableIncome: 0
    });

export default SalaryCalculator;
