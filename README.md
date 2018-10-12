# 30-seconds-code Snippet
[![License](https://img.shields.io/github/license/gluons/vscode-atom-javascript-snippet.svg?style=flat-square)](https://tldrlegal.com/license/mit-license)

[30-seconds-code](https://github.com/30-seconds/30-seconds-of-code)

The extension that provide [JavaScript](https://github.com/atom/language-javascript) for using in [Visual Studio Code](https://code.visualstudio.com/).

## Recommended configurations

To keep snippets to show on the top of suggestions for easy using, use this configuration.

```json
{
	"editor.snippetSuggestions": "top"
}
```

## Snippets

[30-seconds-code](https://github.com/30-seconds/30-seconds-of-code)


## usage 
### tc-all
```js
const all = (arr, fn = Boolean) => arr.every(fn);
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
### tc-allEqual
```js
const allEqual = arr => arr.every(val => val === arr[0]);
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
### tc-*
