import moment from 'moment';
import t from 'tcomb';

const SalaryCalculator = t.struct({
    dependents: t.Number,
    federalTax: t.Number,
    filingStatus: t.String,
    filingStatuses: t.list(t.struct({
        label: t.String,
        value: t.String
    }), 'FilingStatusList'),
    salary: t.maybe(t.Number),
    socialSecurity: t.Number,
    takeHomeBiWeekly: t.Number,
    takeHomeMonthly: t.Number,
    takeHomeWeekly: t.Number,
    takeHomeYearly: t.Number,
    taxYear: t.Number,
    taxableIncome: t.Number
}, {
    name: 'SalaryCalculator',
    strict: true
});

export const getDefaultState = () =>
    new SalaryCalculator({
        dependents: 0,
        federalTax: 0,
        filingStatus: 'SINGLE',
        filingStatuses: [
            {
                label: 'Head of Household',
                value: 'HEAD_OF_HOUSEHOLD'
            },
            {
                label: 'Married (Joint)',
                value: 'MARRIED_FILING_JOINTLY'
            },
            {
                label: 'Married (Separate)',
                value: 'MARRIED_FILING_SEPARATELY'
            },
            {
                label: 'Single',
                value: 'SINGLE'
            }
        ],
        salary: 0,
        socialSecurity: 0,
        takeHomeBiWeekly: 0,
        takeHomeMonthly: 0,
        takeHomeWeekly: 0,
        takeHomeYearly: 0,
        taxYear: moment().year(),
        taxableIncome: 0
    });

export default SalaryCalculator;
