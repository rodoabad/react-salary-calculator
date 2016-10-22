import BigNumber from 'bignumber.js';
import moment from 'moment';
import t from 'tcomb';

class TakeHome extends t.struct({
    salary: t.Number,
    taxYear: t.Number
}, {
    name: 'TakeHome',
    strict: true
}) {

    yearlyIncome() {

        return new BigNumber(this.salary)
            .dividedBy(12)
            .round(2)
            .toNumber();

    }

}

export const getDefaultState = () =>
    new TakeHome({
        salary: 0,
        taxYear: moment().year()
    });

export default TakeHome;
