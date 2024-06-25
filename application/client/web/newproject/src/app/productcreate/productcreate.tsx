import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./productcreate.scss";
import  {service}   from './productcreate.service';

class Productcreate extends React.Component<any, any> {
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
    }
    Create  () {
    this.test.Create(this.state.productlist).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">productcreate</h2>
        <div id="template-ih8b">
    <div id="template-ih8b">
        <div id="template-irsi" className="gjs-row">
            <div id="template-iqkr" className="gjs-cell">
                <input type="text" id="template-ii01" placeholder="product Name" required="true"
                onChange={this.handlechange} name="productname" value={this.state.productlist.productname}className="form-control "
                />
            </div>
            <div id="template-i0wv" className="gjs-cell">
                <input type="text" id="template-ix7x" placeholder="price" required="true"
                onChange={this.handlechange} name="price" value={this.state.productlist.price}className="form-control "
                />
            </div>
            <div id="template-ilmx" className="gjs-cell">
                <input type="text" id="template-isy7" placeholder="details" required="true"
                onChange={this.handlechange} name="details" value={this.state.productlist.details}className="form-control "
                />
            </div>
        </div>
        <div type="button" id="template-ipop" onClick={()=>this.Create()} className="btn btn-primary "> create</div>
    </div>
</div>
    </>
    );
    };
    };

    export default Productcreate;