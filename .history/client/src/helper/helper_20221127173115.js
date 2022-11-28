import _ from 'lodash';

export function getSum(transaction){
    let sum = _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            return _.sumBy
        })
        .value();
    console.log(sum);    
}

export function getLabels() {
    
}