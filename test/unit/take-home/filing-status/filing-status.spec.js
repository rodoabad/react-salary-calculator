import Chance from 'chance';
import FilingStatus from '../../../../src/take-home/filing-status/filing-status';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <FilingStatus/> component', () => {

    let chance,
        filingStatusEl,
        sandbox,
        testProps;

    beforeEach(() => {

        chance = new Chance();
        sandbox = sinon.sandbox.create();

    });

    beforeEach(() => {

        testProps = Object.freeze({
            actions: {
                updateFilingStatus: sandbox.stub()
            },
            filingStatusList: [
                {
                    label: chance.string(),
                    value: chance.string()
                }
            ],
            selectedFilingStatus: chance.string()
        });

        filingStatusEl = shallow(<FilingStatus {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <section/>', () => {

        expect(filingStatusEl.type()).string().equal('section');

    });

    describe('and its select options', () => {

        let selectOptionsEl;

        beforeEach(() => {

            selectOptionsEl = filingStatusEl.childAt(0);

        });

        it('should be a <select/>', () => {

            expect(selectOptionsEl.type()).string().equal('select');

        });

        it('should have a name', () => {

            const expectedName = 'filing-status';

            expect(selectOptionsEl.props().name).string().equal(expectedName);

        });

        it('should use the `selectedFilingStatus` as the current value', () => {

            expect(selectOptionsEl.props().value).string().equal(testProps.selectedFilingStatus);

        });

        it('should update the filing status if <select/> changes with the right value', () => {

            const expectedValue = chance.string();

            sinon.assert.notCalled(testProps.actions.updateFilingStatus);

            selectOptionsEl.simulate('change', {
                target: {
                    value: expectedValue
                }
            });

            sinon.assert.calledOnce(testProps.actions.updateFilingStatus);
            sinon.assert.calledWithExactly(testProps.actions.updateFilingStatus, expectedValue);

        });

        it('should have <option/> that display filing statuses', () => {

            selectOptionsEl.children().forEach((option, index) => {

                expect(option.type()).string().equal('option');
                expect(option.key()).string().equal(index.toString());
                expect(option.props().value).string().equal(testProps.filingStatusList[index].value);
                expect(option.text()).string().equal(testProps.filingStatusList[index].label);

            });

        });

    });

});
