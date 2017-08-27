/* eslint-disable max-lines */

export const taxBrackets = new Map();

taxBrackets.set('HEAD_OF_HOUSEHOLD', {
    0.1: {
        begin: 0,
        end: 13250
    },
    0.15: {
        begin: 13251,
        end: 50400
    },
    0.25: {
        begin: 50401,
        end: 130150
    },
    0.28: {
        begin: 130151,
        end: 210800
    },
    0.33: {
        begin: 210801,
        end: 413350
    },
    0.35: {
        begin: 413351,
        end: 441000
    },
    0.396: {
        begin: 441001
    }
});
taxBrackets.set('MARRIED_FILING_JOINTLY', {
    0.1: {
        begin: 0,
        end: 18550
    },
    0.15: {
        begin: 18551,
        end: 75300
    },
    0.25: {
        begin: 75301,
        end: 151900
    },
    0.28: {
        begin: 151901,
        end: 231450
    },
    0.33: {
        begin: 231451,
        end: 413350
    },
    0.35: {
        begin: 413351,
        end: 466950
    },
    0.396: {
        begin: 466951
    }
});
taxBrackets.set('MARRIED_FILING_SEPARATELY', {
    0.1: {
        begin: 0,
        end: 9275
    },
    0.15: {
        begin: 9275,
        end: 37650
    },
    0.25: {
        begin: 37651,
        end: 75950
    },
    0.28: {
        begin: 75951,
        end: 115725
    },
    0.33: {
        begin: 115726,
        end: 206675
    },
    0.35: {
        begin: 206676,
        end: 233475
    },
    0.396: {
        begin: 233476
    }
});
taxBrackets.set('SINGLE', {
    0.1: {
        begin: 0,
        end: 9275
    },
    0.15: {
        begin: 9275,
        end: 37650
    },
    0.25: {
        begin: 37650,
        end: 91150
    },
    0.28: {
        begin: 91150,
        end: 190150
    },
    0.33: {
        begin: 190150,
        end: 413350
    },
    0.35: {
        begin: 413350,
        end: 415050
    },
    0.396: {
        begin: 415050,
        end: 0
    }
});
