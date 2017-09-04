import Chance from 'chance';
import {FormattedMessage} from 'react-intl';
import React from 'react';
import Salary from '../../../../src/take-home/salary/salary';
import {expect} from 'code';
import {mockEventValue} from '../../../utils';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Salary/> component', () => {

    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            handleSalaryChange: sandbox.stub(),
            salary: chance.natural()
        };

        component = shallow(<Salary {...mockProps}/>);

    });

    afterEach(() => sandbox.restore());

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('salary');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('SALARY');

    });

    it('should have an input box to change the salary', () => {

        const inputBox = component.children('input');

        const expectedNewSalary = chance.natural();

        expect(inputBox.props().inputMode).equal('numeric');
        expect(inputBox.props().pattern).equal('[0-9]*');
        expect(inputBox.props().type).equal('number');
        expect(inputBox.props().min).equal('0');
        expect(inputBox.props().value).equal(mockProps.salary);

        inputBox.simulate('change', mockEventValue(expectedNewSalary));

        sinon.assert.calledOnce(mockProps.handleSalaryChange);

    });

});
