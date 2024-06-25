import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./productupdate.scss";
import  {service}   from './productupdate.service';

class Productupdate extends React.Component<any, any> {
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
    Update  () {
    this.test.Update(this.state.productlist).then((data:any) => {
    
    },
    (error:any) => {
    console.log('Error', error);
    });
    }

    render(){
    return(
    <>
        <h2 className="screen-align">productupdate</h2>
        <div id="template-i4m8">
    <div id="template-i4m8">
        <div id="template-if62" className="gjs-row">
            <div id="template-iutw" className="gjs-cell">
                <input type="text" id="template-i90d" placeholder="product Name" required="true"
                onChange={this.handlechange} name="productname" value={this.state.productlist.productname}className="form-control "
                />
            </div>
            <div id="template-i9yf" className="gjs-cell">
                <input type="text" id="template-i54v" placeholder="price" required="true"
                onChange={this.handlechange} name="price" value={this.state.productlist.price}className="form-control "
                />
            </div>
            <div id="template-ispo" className="gjs-cell">
                <input type="text" id="template-irao" placeholder="details" required="true"
                onChange={this.handlechange} name="details" value={this.state.productlist.details}className="form-control "
                />
            </div>
        </div>
        <div type="button" id="template-isrl" onClick={()=>this.Update()} className="btn btn-primary "></div>
    </div>
</div>
    </>
    );
    };
    };

    export default Productupdate;