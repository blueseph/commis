# Commis (@mise/test)

[Commis](https://en.wiktionary.org/wiki/commis) is a testing suite for Mise that makes it easy to test Mise components. Commis properly sets up your environment to handle components and simplify renders.

We strongly suggest using Commis with [Jest](https://www.npmjs.com/package/jest).

#### Installation
```
npm i --save-dev @mise/test
```

In your actual project

```javascript
import { commis } from '@mise/test';
```

##### Example
```javascript
import { dom, component } from '@mise/core';
import { commis } from '@mise/test';

import { template, state, actions, middleware } from './component/index';

const { render } = commis();

describe('component test', () => {
  beforeEach(async () => {
    component({
      template,
      state,
      actions,
      middleware, 
    });

    await render();
  });

  it('should render a div', () => {
    expect(document.querySelectorAll('div').length).toBe(1);
  });

  it('should render after an action', async () => {
    document.querySelector('button').click();

    /* optionally, render takes in a millisecond parameter to wait for a render to occur */
    await render(100);
    
    expect(document.querySelector('span').textContent).toEqual('success');
  });
})
```
