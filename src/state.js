import moment from 'moment';
import t from 'tcomb';

const TakeHome = t.struct({
    salary: t.Number,
    taxYear: t.Number
}, {
    name: 'TakeHome',
    strict: true
});

export const getDefaultState = () =>
    new TakeHome({
        salary: 0,
        taxYear: moment().year()
    });

export default TakeHome;
