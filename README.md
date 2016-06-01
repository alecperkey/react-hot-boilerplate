Prototype of using Jquery DataTables in React Webpack architecture.
=====================

```npm install
npm start
open http://localhost:3000```


Started from discussion here: https://gist.github.com/checkraiser/8555856

People say it shouldn't be done since both are trying to manipulate the DOM and it can cause conflicts. They might be wrong and just don't understand React lifecycle hook methods...

Either way, Angular DataTables is much easier and more stable out of the box for working with DataTables.net .
Still, it should be possible in React, IMO. 
If data is constantly being edited with many rows, it will probably be a performance bottleneck for these use cases.

Forked from https://github.com/gaearon/react-hot-boilerplate as a React base. pasted that readme below:
