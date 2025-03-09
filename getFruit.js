import delay from 'delay';

const tick = Date.now();
const log = (v) => console.log(`Elapsed: ${Date.now() - tick}ms`);

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    return fruits[name];
}

await delay(1000);

const makeSmoothie = async() => {
    const a = getFruit('strawberry');
    const b = getFruit('pineapple');
    const smoothie = await Promise.all([a,b])
    return smoothie;
}



// getFruit('strawberry').then(console.log);
// log(makeSmoothie().then(console.log));
makeSmoothie().then(console.log).then(log);