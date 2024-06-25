import { Request, Response, NextFunction } from "express";
import { productlistController } from '../controller/productlistController';


export class Routes {
    private productlist: productlistController = new productlistController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/productlist/:id').delete(this.productlist.Delete);
app.route('/productlist/get/search').get(this.productlist.Search);
app.route('/productlist').put(this.productlist.Update);
app.route('/productlist/:id').get(this.productlist.GetEntityById);
app.route('/productlist').get(this.productlist.GetAllValues);
app.route('/productlist').post(this.productlist.Create);
app.route('/productlist/userid/created_by').get(this.productlist.GetNounCreatedBy);
     }

}