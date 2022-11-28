import _ from 'lodash';

export function getSum(transaction, type){
    let sum = _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            if (!type) return _.sumBy(objs, 'amount');
            return {
                'type': key,
                'color' : objs[0]
            }
        })
        .value();
    console.log(sum);    
}

export function getLabels() {
    
}