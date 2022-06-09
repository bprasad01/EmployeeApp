import React, { Component } from 'react';
import _ from "lodash";

class TableBody extends Component {
     
    renderCell = (column, item) => {
        if(column.content) return column.content(item);

        return _.get(item, column.path);
    }

    createkey = (item, column) => {
        return item.id + (column.path || column.key);
    }

    render() { 

        const {columns, data } = this.props;
        return (
            <tbody>
                {data.map(item => <tr key={item.id}>
                    {columns.map(column => <td key={this.createkey(item, column)}>{this.renderCell(column, item)}</td>)}
                    </tr> )}

            </tbody>
        );
    }
}
 
export default TableBody;   