proof of concept of using Jquery DataTables in React Webpack architecture.
=====================

*** seeking contributors for: React jQuery DataTables(https://github.com/alecperkey/react-jquery-datatables/blob/master/README.md) ***

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


### React Lifecyle approach for jQuery DataTables

1. Get data from source in componentWillMount, & set it to the state varaible with setState
2. Initial render(): add table markup `<table id="my-table">` using simple map function from the data in state.
3. Initialise as jQuery DataTable in componentDidMount `$('#my-table').DataTable()`
-- Not invoked on the server-rendering, (so SSR needs some solution. Suggestions?)
4. Optional: componentShouldUpdate logic to determine if you do/don't want to re-render depending on differences changes in props and state.
5. componentWillUpdate:
-- (a) persist any config which might be lost from DataTable instance (What might this be? Not sure yet.)
-- (b) destroy table
6. Re-render is called, same as step 2
7. componentDidUpdate, initialize the new table created in step 6, potentially with persisted DataTables-specific config from 5(a)
8. componentWillUnmount, destroy table


###Warning

Many have warned jQuery DataTables and React shouldn't be used together as both are trying to manipulate the DOM and it can cause conflicts. 

If you understand React lifecycle hook methods & are not changing the underlying data too often (i.e. not inline editing like its Google sheets, polling async data sources etc), it might not be a problem.

Still, if the underlying data is constantly being updated with many rows, it will probably be a performance bottleneck for these use cases.

Angular DataTables is quite nice as an alternative.

Boilerplate forked from https://github.com/gaearon/react-hot-boilerplate as a React & Webpack base.
