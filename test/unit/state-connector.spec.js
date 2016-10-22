import * as actionCreators from '../../src/action-creators';
import React from 'react';
import StateConnector from '../../src/state-connector';
import {TakeHome} from '../../src/take-home';
import {expect} from 'code';
import {mockReduxStore} from '../utils/mock-redux-store';
import {shallow} from 'enzyme';

describe('Given the <StateConnector/> component', () => {

    let stateConnectorEl,
        testProps;

    beforeEach(() => {

        const store = mockReduxStore({});

        testProps = Object.freeze({
            store
        });

        stateConnectorEl = shallow(<StateConnector {...testProps}/>);

    });

    it('should be connecting <TakeHome/>', () => {

        expect(stateConnectorEl.type()).function().equal(TakeHome);

    });

    Object.keys(actionCreators).forEach(actionCreator => {

        it(`should have bounded \`${actionCreator}\` as an action`, () => {

            expect(stateConnectorEl.props().actions[actionCreator]).function();

        });

    });

});
