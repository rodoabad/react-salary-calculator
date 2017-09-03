import Chance from 'chance';
import FilingStatus from '../../../../src/take-home/filing-status/filing-status';
import {FormattedMessage} from 'react-intl';
import React from 'react';
import {expect} from 'code';
import {mockEventValue} from '../../../utils/mock-event-value';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <FilingStatus/> component', () => {

    const chance = new Chance();
    const sandbox = sinon.sandbox.create();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = Object.freeze({
            filingStatus: chance.string(),
            filingStatuses: [
                {
                    label: chance.string(),
                    value: chance.string()
                }
            ],
            handleFilingStatusChange: sandbox.stub(),
            salary: chance.natural()
        });

        component = shallow(<FilingStatus {...mockProps}/>);

    });

    afterEach(() => sandbox.restore());

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('filing-status');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('FILING_STATUS');

    });

    describe('and its filing status drop down', () => {

        let filingStatuses;

        beforeEach(() => {

            filingStatuses = component.find('select');

        });

        it('should have a drop down to change the filing status', () => {

            const expectedNewFilingStatus = chance.string();

            expect(filingStatuses.props().name).equal('filing-status');
            expect(filingStatuses.props().value).equal(mockProps.filingStatus);

            filingStatuses.simulate('change', mockEventValue(expectedNewFilingStatus));

            sinon.assert.calledOnce(mockProps.handleFilingStatusChange);

        });

        it('should have filing status options', () => {

            filingStatuses.children().forEach((option, index) => {

                const mockMessage = chance.string();

                expect(option.type()).equal(FormattedMessage);
                expect(option.key()).equal(mockProps.filingStatuses[index].value);
                expect(option.props().id).equal(mockProps.filingStatuses[index].value);
                expect(option.props().children(mockMessage).props.value).equal(mockProps.filingStatuses[index].value);

            });

        });

    });

});
