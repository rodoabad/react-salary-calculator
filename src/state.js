import moment from 'moment';
import t from 'tcomb';

const SalaryCalculator = t.struct({
    federalTax: t.Number,
    filingStatus: t.String,
    filingStatuses: t.list(t.struct({
        label: t.String,
        value: t.String
    }), 'FilingStatusList'),
    salary: t.Number,
    socialSecurity: t.Number,
    takeHome: t.struct({
        biWeekly: t.Number,
        monthly: t.Number,
        weekly: t.Number,
        yearly: t.Number
    }),
    taxYear: t.Number,
    taxableIncome: t.Number
}, {
    name: 'SalaryCalculator',
    strict: true
});

export const getDefaultState = () =>
    new SalaryCalculator({
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
        takeHome: {
            biWeekly: 0,
            monthly: 0,
            weekly: 0,
            yearly: 0
        },
        taxYear: moment().year(),
        taxableIncome: 0
    });

export default SalaryCalculator;
