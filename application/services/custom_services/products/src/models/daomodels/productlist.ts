
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const productlistSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   productname: { type: String },
   price: { type: Number },
   details: { type: String }
})

const productlistModel = mongoose.model('productlist', productlistSchema, 'productlist');
export default productlistModel;
