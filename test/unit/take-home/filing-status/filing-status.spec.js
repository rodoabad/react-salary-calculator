import Chance from 'chance';
import FilingStatus from '../../../../src/take-home/filing-status/filing-status';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

const chance = new Chance();
const sandbox = sinon.sandbox.create();

describe('Given the <FilingStatus/> component', () => {

    let filingStatusEl,
        testProps;

    beforeEach(() => {

        testProps = Object.freeze({
            actions: {
                updateSalary: sandbox.stub()
            },
            filingStatus: chance.string(),
            filingStatuses: [
                {
                    label: chance.string(),
                    value: chance.string()
                }
            ],
            salary: chance.natural()
        });

        filingStatusEl = shallow(<FilingStatus {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <section/>', () => {

        expect(filingStatusEl.type()).string().equal('section');
        expect(filingStatusEl.props().className).string().equal('filing-status');

    });

    describe('and its filing status dropdown', () => {

        let selectOptionsEl;

        beforeEach(() => {

            selectOptionsEl = filingStatusEl.find('select');

        });

        it('should be a <select/>', () => {

            expect(selectOptionsEl.props().name).string().equal('filing-status');
            expect(selectOptionsEl.props().value).string().equal(testProps.filingStatus);

        });

        it('should update the salary a new filing status has been selected', () => {

            const expectedValue = chance.string();

            sinon.assert.notCalled(testProps.actions.updateSalary);

            selectOptionsEl.simulate('change', {
                target: {
                    value: expectedValue
                }
            });

            sinon.assert.calledOnce(testProps.actions.updateSalary);
            sinon.assert.calledWithExactly(testProps.actions.updateSalary, testProps.salary, expectedValue);

        });

        it('should have filing status options', () => {

            selectOptionsEl.children().forEach((option, index) => {

                expect(option.type()).string().equal('option');
                expect(option.key()).string().equal(testProps.filingStatuses[index].value);
                expect(option.props().value).string().equal(testProps.filingStatuses[index].value);
                expect(option.text()).string().equal(testProps.filingStatuses[index].label);

            });

        });

    });

});
