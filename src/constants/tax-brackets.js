/* eslint-disable max-lines */

export const taxBrackets = new Map();

taxBrackets.set('HEAD_OF_HOUSEHOLD', {
    0.1: {
        begin: 0,
        end: 13350
    },
    0.15: {
        begin: 13350,
        end: 50800
    },
    0.25: {
        begin: 50800,
        end: 131200
    },
    0.28: {
        begin: 131200,
        end: 212500
    },
    0.33: {
        begin: 212500,
        end: 416700
    },
    0.35: {
        begin: 416700,
        end: 444550
    },
    0.396: {
        begin: 444550
    }
});
taxBrackets.set('MARRIED_FILING_JOINTLY', {
    0.1: {
        begin: 0,
        end: 18650
    },
    0.15: {
        begin: 18650,
        end: 75900
    },
    0.25: {
        begin: 75900,
        end: 153100
    },
    0.28: {
        begin: 153100,
        end: 233350
    },
    0.33: {
        begin: 233350,
        end: 416700
    },
    0.35: {
        begin: 416700,
        end: 470700
    },
    0.396: {
        begin: 470700
    }
});
taxBrackets.set('MARRIED_FILING_SEPARATELY', {
    0.1: {
        begin: 0,
        end: 9325
    },
    0.15: {
        begin: 9325,
        end: 37950
    },
    0.25: {
        begin: 37950,
        end: 76550
    },
    0.28: {
        begin: 76550,
        end: 116675
    },
    0.33: {
        begin: 116675,
        end: 208350
    },
    0.35: {
        begin: 208350,
        end: 235350
    },
    0.396: {
        begin: 235350
    }
});
taxBrackets.set('SINGLE', {
    0.1: {
        begin: 0,
        end: 9325
    },
    0.15: {
        begin: 9325,
        end: 37950
    },
    0.25: {
        begin: 37950,
        end: 91900
    },
    0.28: {
        begin: 91900,
        end: 191650
    },
    0.33: {
        begin: 191650,
        end: 416700
    },
    0.35: {
        begin: 416700,
        end: 418400
    },
    0.396: {
        begin: 418400,
        end: 0
    }
});
