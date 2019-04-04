import { localize } from '_common/localize';

/*
* For validation we could :
*   1. Show the data in order. e.g first bottom, second bottom.
*   2. Then, print a warning on console.
*/

const contract_config = {
    ASIANU: {
        name    : localize('Asian Up'),
        position: 'top',
    },
    ASIAND: {
        name    : localize('Asian Down'),
        position: 'bottom',
    },
    CALL: {
        name    : localize('Rise'),
        position: 'top',
    },
    PUT: {
        name    : localize('Fall'),
        position: 'bottom',
    },
    CALLE: {
        name    : localize('Higher or equal'),
        position: 'top',
    },
    PUTE: {
        name    : localize('Lower or equal'),
        position: 'bottom',
    },
    DIGITMATCH: {
        name    : localize('Matches'),
        position: 'top',
    },
    DIGITDIFF: {
        name    : localize('Differs'),
        position: 'bottom',
    },
    DIGITODD: {
        name    : localize('Odd'),
        position: 'top',
    },
    DIGITEVEN: {
        name    : localize('Even'),
        position: 'bottom',
    },
    DIGITOVER: {
        name    : localize('Over'),
        position: 'top',
    },
    DIGITUNDER: {
        name    : localize('Under'),
        position: 'bottom',
    },
    EXPIRYMISS: {
        name    : localize('Ends Outside'),
        position: 'top',
    },
    EXPIRYRANGE: {
        name    : localize('Ends Between'),
        position: 'bottom',
    },
    EXPIRYRANGEE: {
        name    : localize('Ends Between'),
        position: 'top',
    },
    LBFLOATCALL: {
        name    : localize('Close-Low'),
        position: 'bottom',
    },
    LBFLOATPUT: {
        name    : localize('High-Close'),
        position: 'top',
    },
    LBHIGHLOW: {
        name    : localize('High-Low'),
        position: 'bottom',
    },
    RANGE: {
        name    : localize('Stays Between'),
        position: 'top',
    },
    UPORDOWN: {
        name    : localize('Goes Outside'),
        position: 'bottom',
    },
    ONETOUCH: {
        name    : localize('Touch'),
        position: 'top',
    },
    NOTOUCH: {
        name    : localize('No Touch'),
        position: 'bottom',
    },
};

export const getContractTypeDisplay = (type) => (contract_config[type].name);
