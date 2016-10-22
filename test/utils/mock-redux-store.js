export const mockReduxStore = rootState => ({
    dispatch: () => ({}),
    getState: () => {

        if (rootState) {

            return rootState;

        }

        throw new Error('You need to pass an initial state object.');

    },
    subscribe: () => { // eslint-disable-line no-empty-function
    }
});
