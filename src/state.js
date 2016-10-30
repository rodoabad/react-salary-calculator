import moment from 'moment';
import t from 'tcomb';

const SalaryCalculator = t.struct({
    federalTax: t.Number,
    filingStatus: t.enums({
        headOfHousehold: 'HeadOfHousehold',
        marriedJoint: 'MarriedJoint',
        marriedSeparate: 'MarriedSeparate',
        single: 'Single'
    }, 'FilingStatus'),
    filingStatusList: t.list(t.struct({
        label: t.String,
        value: t.String
    }), 'FilingStatusList'),
    salary: t.Number,
    taxYear: t.Number,
    taxableIncome: t.Number
}, {
    name: 'SalaryCalculator',
    strict: true
});

export const getDefaultState = () =>
    new SalaryCalculator({
        federalTax: 0,
        filingStatus: 'single',
        filingStatusList: [
            {
                label: 'Head of Household',
                value: 'headOfHousehold'
            },
            {
                label: 'Married (Joint)',
                value: 'marriedJoint'
            },
            {
                label: 'Married (Separate)',
                value: 'marriedSeparate'
            },
            {
                label: 'Single',
                value: 'single'
            }
        ],
        salary: 0,
        taxYear: moment().year(),
        taxableIncome: 0
    });

export default SalaryCalculator;
