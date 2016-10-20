import actions from '../../src/actions';
import {expect} from 'code';

describe('Given the salary calculator actions', () => {

    it('should update the salary', () => {

        expect(actions.UPDATE_SALARY).string().equal('UPDATE_SALARY');

    });

    it('should update the year', () => {

        expect(actions.UPDATE_YEAR).string().equal('UPDATE_YEAR');

    });

});
