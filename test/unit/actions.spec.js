import actions from '../../src/actions';
import {expect} from 'code';

describe('Given the salary calculator actions', () => {

    it('should have an action for updating the salary', () => {

        expect(actions.UPDATE_SALARY).string().equal('UPDATE_SALARY');

    });

});
