import * as actionCreators from '../../../../src/action-creators';
import {mockEventValue, mockReduxStore} from '../../../utils';
import Chance from 'chance';
import FilingStatus from '../../../../src/take-home/filing-status/filing-status';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/filing-status';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <FilingStatus/> connector', () => {

    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            dependents: chance.natural(),
            filingStatus: chance.string(),
            filingStatuses: [],
            salary: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        sandbox.stub(actionCreators, 'updateSalary');

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    afterEach(() => sandbox.restore());

    it('should be connecting the right component', () => {

        expect(component.type()).equal(FilingStatus);
        expect(component.props().dependents).equal(mockProps.dependents);
        expect(component.props().filingStatus).equal(mockProps.filingStatus);
        expect(component.props().filingStatuses).equal(mockProps.filingStatuses);
        expect(component.props().salary).equal(mockProps.salary);

    });

    it('should update the salary when the filing status changes', () => {

        const expectedNewFilingStatus = chance.string();

        const expectedArgsToUpdateSalary = [
            mockProps.salary,
            expectedNewFilingStatus,
            mockProps.dependents
        ];

        component.props().handleFilingStatusChange(mockEventValue(expectedNewFilingStatus));

        sinon.assert.calledOnce(actionCreators.updateSalary);
        sinon.assert.calledWithExactly(actionCreators.updateSalary, ...expectedArgsToUpdateSalary);

    });

});
