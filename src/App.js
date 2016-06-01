import React, {Component} from 'react';
import $ from 'jquery';
import 'datatables.net';
import dt from 'datatables.net-bs';
import buttons from 'datatables.net-buttons';
dt(window, $);
buttons(window, $);
// import buttons from 'datatables.net-buttons-bs';

// var $       = require( 'jquery' );
// var dt      = require( 'datatables.net-bs' );
// var buttons = require( 'datatables.net-buttons' );
// dt(window, $);
// require( 'datatables.net-buttons' )( window, $ );

require( 'datatables.net-buttons/js/buttons.colVis.js' )(); // Column visibility
require( 'datatables.net-buttons/js/buttons.html5.js' )();  // HTML 5 file export
require( 'datatables.net-buttons/js/buttons.flash.js' )();  // Flash file export
require( 'datatables.net-buttons/js/buttons.print.js' )();  // Print view button
//
// import 'datatables.net-buttons/js/buttons.colVis.js'; // Column visibility
// import 'datatables.net-buttons/js/buttons.html5.js';  // HTML 5 file export
// import 'datatables.net-buttons/js/buttons.flash.js';  // Flash file export
// import 'datatables.net-buttons/js/buttons.print.js';  // Print view button

buttons(window, $);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{index: 1, name: 'Joe'}, {index: 2, name: 'Benny'}]
    };
    console.log('constructor');
    // console.log($);
    // console.log(dt);
    // console.log(buttons);
  }
  componentDidMount() {
    console.log('did mount');
    // console.log($);
    // console.log(dt);
    // console.log(buttons);
    var self = this;
    console.log('mounted');
    var table = $('#dt').DataTable({
      dom: 'Blfrtip',
      // buttons: true,
      buttons: [
        'copy', 'excel', 'pdf'
      ],
      "pagingType": "numbers",
      "bAutoWidth": false,
      "bDestroy": true,
      "fnDrawCallback": function () {
        self.forceUpdate();
      }
    });
    console.log('table', table);
    console.log('buttons mount');
    // console.log($.fn.dataTable.Buttons);
  }

  componentDidUpdate() {
    console.log('updated');
    console.log($('#dt_wrapper'));
    console.log('buttons update');
    console.log($.fn);
    console.log($.fn.dataTable.Buttons);
    // console.log($);
    // console.log(dt);
    // console.log(buttons);
    // $('#dt').dataTable(
    //   {
    //   "pagingType": "numbers",
    //   "bAutoWidth": false,
    //   "bDestroy": true
    // }
    // );
  }

  render() {

    console.log('render');
    console.log($('#dt_wrapper'));
    // console.log($);
    // console.log(dt);
    // console.log(buttons);

    var x = this.state.data.map(function (d, index) {
      return <tr>
        <td>{index + 1}</td>
        <td>{d.name}</td>
      </tr>
    });

    return (
      <div className="table-responsive">
        <h4>DataTable</h4>
        <table className="table table-bordered" id="dt">
          <thead>
          <tr className="success">
            <td>Index</td>
            <td>Name</td>
          </tr>
          </thead>
          <tbody>
          { x }
          </tbody>
        </table>
      </div>
    )
  }
}
