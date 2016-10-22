import moment from 'moment';
import t from 'tcomb';

const TakeHome = t.struct({
    salary: t.Number,
    year: t.Number
}, {
    name: 'TakeHome',
    strict: true
});

export const getDefaultState = () =>
    new TakeHome({
        salary: 0,
        year: moment().year()
    });

export default TakeHome;
