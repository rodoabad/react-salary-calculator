import * as actionCreators from '../../src/action-creators';
import actions from '../../src/actions';
import {expect} from 'code';

describe('Given the action creators for salary calculator', () => {

    describe('when updating the salary', () => {

        let updateSalaryAction;

        beforeEach(() => {

            updateSalaryAction = actionCreators.updateSalary(100);

        });

        it('should have a type', () => {

            expect(updateSalaryAction.type).string().equal(actions.UPDATE_SALARY);

        });

        it('should have a new salary', () => {

            const expectedNewSalary = 100;

            expect(updateSalaryAction.newSalary).number().equal(expectedNewSalary);

        });

    });

    describe('when updating the year', () => {

        let updateYearAction;

        beforeEach(() => {

            updateYearAction = actionCreators.updateYear(2016);

        });

        it('should have a type', () => {

            expect(updateYearAction.type).string().equal(actions.UPDATE_YEAR);

        });

        it('should have a new salary', () => {

            const expectedNewYear = 2016;

            expect(updateYearAction.newYear).number().equal(expectedNewYear);

        });

    });

});
