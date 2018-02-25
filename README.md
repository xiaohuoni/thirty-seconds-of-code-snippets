# Oni JavaScript Snippet
[![License](https://img.shields.io/github/license/gluons/vscode-atom-javascript-snippet.svg?style=flat-square)](https://tldrlegal.com/license/mit-license)

Oni JavaScript Snippet for Visual Studio Code

The extension that provide [JavaScript](https://github.com/atom/language-javascript) and [umi](https://umijs.org/) snippets for using in [Visual Studio Code](https://code.visualstudio.com/).

## Recommended configurations

To keep snippets to show on the top of suggestions for easy using, use this configuration.

```json
{
	"editor.snippetSuggestions": "top"
}
```

## Snippets

### JavaScript Snippets
like: define、forof、forin、foreach、function...
### UMI Snippets

### [`umi-mock`] Umi Mock
```javascript
'/api/hello'(req, res) {
    res.end(`hello ${Math.random()}`);
},
```

### [`umi-subscriptions`] Umi model subscriptions
```javascript
setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
},
```

### [`umi-effects`] Umi model effects
```javascript
*fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
```

### [`umi-service`] Umi service request
```javascript
export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
```