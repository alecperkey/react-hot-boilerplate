import React, {Component} from 'react';

var $       = require( 'jquery' );
var dt      = require( 'datatables.net-bs' );
var buttons = require( 'datatables.net-buttons-bs' );

require( 'datatables.net-buttons/js/buttons.colVis.js' ); // Column visibility
require( 'datatables.net-buttons/js/buttons.html5.js' );  // HTML 5 file export
require( 'datatables.net-buttons/js/buttons.flash.js' );  // Flash file export
require( 'datatables.net-buttons/js/buttons.print.js' );  // Print view button

export default class App extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      data: [{index: 1, name: 'Joe'}, {index: 2, name: 'Benny'}]
    };
  }


  componentDidMount() {
    console.log('componentDidMount');
    var self = this;

    var table = $('#dt');
    console.log('table', table);

    table.DataTable({
      dom: '<"html5buttons"B>lTfgitp',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ],
      "pagingType": "numbers",
      "bAutoWidth": false,
      "bDestroy": true,
      "fnDrawCallback": function () {
        self.forceUpdate();
      }
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /** UPDATING TABLE DATA

   // When state data populating DataTable must change,
   // use the table.destroy() function prior to setting the state
   // (or in react lifecycle method such as componentWillReceiveProps should work)
   // then recreated the datatable after that returns.

   // In my case the data doesn't change that often and there is no polling from the browser.
   // ref: https://gist.github.com/checkraiser/8555856, https://gist.github.com/checkraiser/8555856#gistcomment-1748210

   //i.e.:

   loadItemsFromServer: function() {
    $.ajax({
        url: this.props.l_url + this.state.session_id,
        dataType: "json",
        type: "POST",
        cache: false,
        success: function(data) {
            $("#dataTables-example").DataTable().destroy();
            this.setState({ data: data });
            $("#dataTables-example").dataTable();
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
};

   **/

  render() {
    console.log('render');

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
