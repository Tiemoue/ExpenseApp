import _ from 'lodash';

export function getSum(transaction){
    let sum = _(transaction)
        .groupBy(type)
        .map((objs, key) => {
            return objs
        });
}

export function getLabels() {
    
}