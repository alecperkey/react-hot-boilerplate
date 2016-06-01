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


### React Lifecyle approach for jQuery DataTables

1. Get data from source in componentWillMount, & set it to the state varaible with setState
2. Initial render(): add table markup `<table id="my-table">` using simple map function from the data in state.
3. Initialise datatable in componentDidMount for some `$('#my-table')`
4. If state is changed, then componentShouldUpdate could have logic to determine if you do/don't want to re-render.
5. componentWillUpdate, you can 
-- (a) persist any config which might be lost from DataTable instance (what might this be? I don't know)
-- (b) destroy table
6. Re-render is called, same as step 2
7. componentDidUpdate, initialize the new table from step 6, potentially with persisted DataTables-specific config from 5(a)
8. componentWillUnmount, destroy table


###Warning

Many have warned jQuery DataTables and React shouldn't be used together as both are trying to manipulate the DOM and it can cause conflicts. 

If you understand React lifecycle hook methods & are not changing the underlying data too often (i.e. not inline editing like its Google sheets, polling async data sources etc), it might not be a problem.

Still, if the underlying data is constantly being updated with many rows, it will probably be a performance bottleneck for these use cases.

Angular DataTables is quite nice as an alternative.

Boilerplate forked from https://github.com/gaearon/react-hot-boilerplate as a React base. pasted that readme below:
