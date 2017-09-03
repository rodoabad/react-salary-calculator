import * as actionCreators from '../../../../src/action-creators';
import {mockEventValue, mockReduxStore} from '../../../utils';
import Chance from 'chance';
import Dependents from '../../../../src/take-home/dependents/dependents';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/dependents';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Dependends/> connector', () => {

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

        expect(component.type()).equal(Dependents);
        expect(component.props().dependents).equal(mockProps.dependents);
        expect(component.props().filingStatus).equal(mockProps.filingStatus);
        expect(component.props().salary).equal(mockProps.salary);

    });

    it('should update the salary when dependents change', () => {

        const expectedNewDependents = chance.natural();

        const expectedArgsToUpdateSalary = [
            mockProps.salary,
            mockProps.filingStatus,
            expectedNewDependents
        ];

        component.props().handleDependentsChange(mockEventValue(expectedNewDependents));

        sinon.assert.calledOnce(actionCreators.updateSalary);
        sinon.assert.calledWithExactly(actionCreators.updateSalary, ...expectedArgsToUpdateSalary);

    });

    it('should reset the number of dependents back to default if the new number of dependents is invalid', () => {

        const expectedNewDependents = undefined; // eslint-disable-line no-undefined

        const expectedArgsToUpdateSalary = [
            mockProps.salary,
            mockProps.filingStatus,
            0
        ];

        component.props().handleDependentsChange(mockEventValue(expectedNewDependents));

        sinon.assert.calledOnce(actionCreators.updateSalary);
        sinon.assert.calledWithExactly(actionCreators.updateSalary, ...expectedArgsToUpdateSalary);

    });

});
