import * as actionCreators from '../../../../src/action-creators';
import {mockEventValue, mockReduxStore} from '../../../utils';
import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/salary';
import Salary from '../../../../src/take-home/salary/salary';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Salary/> connector', () => {

    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            dependents: chance.natural(),
            filingStatus: chance.string(),
            salary: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        sandbox.stub(actionCreators, 'updateSalary');

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    afterEach(() => sandbox.restore());

    it('should be connecting the right component', () => {

        expect(component.type()).equal(Salary);
        expect(component.props().dependents).equal(mockProps.dependents);
        expect(component.props().filingStatus).equal(mockProps.filingStatus);
        expect(component.props().salary).equal(mockProps.salary);

    });

    it('should update the salary when salary changes', () => {

        const expectedNewSalary = chance.natural();

        const expectedArgsToUpdateSalary = [
            expectedNewSalary,
            mockProps.filingStatus,
            mockProps.dependents
        ];

        component.props().handleSalaryChange(mockEventValue(expectedNewSalary));

        sinon.assert.calledOnce(actionCreators.updateSalary);
        sinon.assert.calledWithExactly(actionCreators.updateSalary, ...expectedArgsToUpdateSalary);

    });

    it('should reset the salary back to default if the new salary is invalid', () => {

        const expectedNewSalary = undefined; // eslint-disable-line no-undefined

        const expectedArgsToUpdateSalary = [
            0,
            mockProps.filingStatus,
            mockProps.dependents
        ];

        component.props().handleSalaryChange(mockEventValue(expectedNewSalary));

        sinon.assert.calledOnce(actionCreators.updateSalary);
        sinon.assert.calledWithExactly(actionCreators.updateSalary, ...expectedArgsToUpdateSalary);

    });

});
