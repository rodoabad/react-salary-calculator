import Chance from 'chance';
import Dependents from '../../../../src/take-home/dependents/dependents';
import {FormattedMessage} from 'react-intl';
import React from 'react';
import {expect} from 'code';
import {mockEventValue} from '../../../utils';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <Dependents/> component', () => {

    const chance = new Chance();
    const sandbox = sinon.createSandbox();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            dependents: chance.natural(),
            handleDependentsChange: sandbox.stub()
        };

        component = shallow(<Dependents {...mockProps}/>);

    });

    afterEach(() => sandbox.restore());

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('dependents');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('NUMBER_OF_DEPENDENTS');

    });

    it('should have an input box to change dependents', () => {

        const inputBox = component.children('input');

        const expectedNewDependents = chance.natural();

        expect(inputBox.props().type).equal('number');
        expect(inputBox.props().min).equal('0');
        expect(inputBox.props().value).equal(mockProps.dependents);

        inputBox.simulate('change', mockEventValue(expectedNewDependents));

        sinon.assert.calledOnce(mockProps.handleDependentsChange);

    });

});
