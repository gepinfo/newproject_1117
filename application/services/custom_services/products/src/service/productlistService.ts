import { Request, Response } from 'express';
import {productlistDao} from '../dao/productlistDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';















let productlist = new productlistDao();

export class productlistService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: Delete')
     let  productlistId = req.params.id;
     productlist.Delete(productlistId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: Search')
     let  productlistData = req.query;
     productlist.Search(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: Update')
     let  productlistData = req.body;
     productlist.Update(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GetEntityById')
     let  productlistId = req.params.id;
     productlist.GetEntityById(productlistId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GetAllValues')
     
     productlist.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: Create')
     let  productlistData = req.body;
     productlist.Create(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productlistService.ts: GetNounCreatedBy')
     let  productlistData = { created_by: req.query.createdby };
     productlist.GetNounCreatedBy(productlistData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productlistService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}