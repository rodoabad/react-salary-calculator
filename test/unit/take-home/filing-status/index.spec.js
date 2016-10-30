import * as actionCreators from '../../../../src/action-creators';
import FilingStatus from '../../../../src/take-home/filing-status/filing-status';
import React from 'react';
import StateConnector from '../../../../src/take-home/filing-status';
import {expect} from 'code';
import {getDefaultState} from '../../../../src/state';
import {mockReduxStore} from '../../../utils/mock-redux-store';
import {shallow} from 'enzyme';

describe('Given the state connector for <FilingStatus/>', () => {

    let stateConnectorEl,
        testProps;

    beforeEach(() => {

        const store = mockReduxStore({
            ...getDefaultState()
        });

        testProps = Object.freeze({
            store
        });

        stateConnectorEl = shallow(<StateConnector {...testProps}/>);

    });

    it('should be connecting <FilingStatus/>', () => {

        expect(stateConnectorEl.type()).function().equal(FilingStatus);

    });

    Object.keys(actionCreators).forEach(actionCreator => {

        it(`should have bounded \`${actionCreator}\` as an action`, () => {

            expect(stateConnectorEl.props().actions[actionCreator]).function();

        });

    });

});
