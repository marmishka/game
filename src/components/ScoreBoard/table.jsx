import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'; 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} striped hover>
          <TableHeaderColumn isKey dataField='name'>
            Имя
          </TableHeaderColumn>
          <TableHeaderColumn dataField='score'>
            Очки
          </TableHeaderColumn>
          <TableHeaderColumn dataField='level'>
            Уровень
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;
