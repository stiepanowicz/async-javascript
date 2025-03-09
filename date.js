const tick = Date.now();

const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    // let i = 0;
    // while (i < 1000000000) {i++}
    // return 'Billion loops are done';

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while (i < 1000000000) {i++}
    //     resolve('Billion loops are done');
    // })

    return Promise.resolve().then( v => {
        let i = 0;
        while (i < 1000000000) {i++}
        return ('Billion loops are done');
    });
}

log('Synchronous 1');

codeBlocker().then(log);

log('Synchronous 2');