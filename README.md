Prototype of using Jquery DataTables in React Webpack architecture.
=====================

```
npm install
npm start
open http://localhost:3000
```

###jQuery DataTables & Webpack

- https://github.com/DataTables/DataTables/issues/434#issuecomment-218863925
- https://datatables.net/q/webpack

###React & jQuery DataTables

- https://gist.github.com/checkraiser/8555856

Note:

Many have warned jQuery DataTables and React shouldn't be used together as both are trying to manipulate the DOM and it can cause conflicts. 

If you understand React lifecycle hook methods & are not changing the underlying data too often (i.e. not inline editing like its Google sheets, polling async data sources etc), it might not be a problem.

Still, if the underlying data is constantly being updated with many rows, it will probably be a performance bottleneck for these use cases.

Angular DataTables is quite nice as an alternative.

Boilerplate forked from https://github.com/gaearon/react-hot-boilerplate as a React base. pasted that readme below:
