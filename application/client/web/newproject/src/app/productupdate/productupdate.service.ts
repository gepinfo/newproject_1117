import axios from 'axios';
import React from "react";
import { Web } from '../../shared/shared.service';



export class service extends React.Component { 

   Update=(productlist:any) => {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return axios.put(Web() + '/productlist' + `?jwt_token=${jwt_token}`, productlist);
    }
}