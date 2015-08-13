# camel-to-snake
change a string from camelCase to snake_case

## usage
```javascript
  var toSnake = require('camel-to-snake');

  toSnake('addListener'); // 'add_listener'
  toSnake('getJSON'); // 'get_json'
  toSnake('getJSONObject'); // 'get_json_object'
  toSnake('useSeparator', '-'); // 'use-separator'
```