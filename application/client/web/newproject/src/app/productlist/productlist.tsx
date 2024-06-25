import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./productlist.scss";
import  {service}   from './productlist.service';
import  BootstrapTable   from 'react-bootstrap-table-next';
import  paginationFactory   from 'react-bootstrap-table2-paginator';
import  'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'  ;
import  'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'  ;

class Productlist extends React.Component<any, any> {
    columnDefs: any = [{ dataField: 'productname', text: 'Product name' },{ dataField: 'price', text: 'Productprice' },{ dataField: 'details', text: 'Product details' },];
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    productlist : {
    productname: '',
    price: '',
    details: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ productlist: { ...this.state.productlist, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.productlist.created_by = sessionStorage.getItem('email')||'{}';
    this.GpGetAllValues();
    }
    GetAllValues  () {
    this.test.GetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    rowclick ={onClick: (e: any, row: any, rowIndex: any) => 
    {this.props.history.push({ pathname: "/",state:{id:row} });
    }}

    render(){
    return(
    <>
        <h2 className="screen-align">productlist</h2>
        <div>
    <div id="template-ijax">
        <div id="template-i4hr">
            <div id="template-ih8u">
                <div>
                    <BootstrapTable keyField='_id' data={this.state.rowData} columns={this.columnDefs}
                    rowEvents={this.rowclick} pagination={paginationFactory({ sizePerPageList:
                    [{ text: '5', value: 5 }, { text: '25', value: 25 }, { text: '50', value:
                    50 }], } ) } />
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Productlist;