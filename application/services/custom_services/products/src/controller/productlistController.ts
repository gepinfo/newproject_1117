import { Request, Response } from 'express';
import { productlistService } from '../service/productlistService';
import { CustomLogger } from '../config/Logger'
let productlist = new productlistService();

export class productlistController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    productlist.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productlistController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productlistController.ts: GetNounCreatedBy');
    })}


}