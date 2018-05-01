import test, { TestContext } from 'ava';

import { greeter } from '../src/main';

test('test', async (t: TestContext) => {
    const greet = await greeter('Mike');

    t.is(greet, 'Hello, Mike');
});
