import _ from 'lodash';

export function getSum(transaction, type){
    let sum = _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            return _.sumBy(objs, 'amount')
        })
        .value();
    console.log(sum);    
}

export function getLabels() {
    
}