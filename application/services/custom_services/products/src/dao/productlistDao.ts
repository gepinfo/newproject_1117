import * as mongoose from 'mongoose';
import productlistModel from '../models/daomodels/productlist';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class productlistDao {
    private productlist = productlistModel;

    

    constructor() { }
    
    public async Delete(productlistId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: Delete');

    

    
    
    
    this.productlist.findByIdAndRemove(productlistId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(productlistData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(productlistData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.productlist.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(productlistData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: Update');

    

    
    
    
    this.productlist.findOneAndUpdate({ _id: productlistData._id }, productlistData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(productlistId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GetEntityById');

    

    
    
    
    this.productlist.findById(productlistId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GetAllValues');

    

    
    
    
    this.productlist.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(productlistData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: Create');

    let temp = new productlistModel(productlistData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(productlistData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into productlistDao.ts: GetNounCreatedBy');

    

    
    
    
    this.productlist.aggregate(([
                        { $match: { $and: [{ created_by: productlistData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from productlistDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}