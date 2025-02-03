import { model, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const collection = "products";

const schema = new Schema({
    name: { type: String, index: true, required: true },
    description: { type: String, },
    stock: { type: Number, default: 1 },
    price: { type: Number, default: 1 },
    image: { type: String, default: "https://via.placeholder.com/150" },
    category: { type: String, enum: ["", "computadoras", "perifericos", "celulares"] },
}, { timestamps: true });

schema.plugin(paginate);

const Product = model(collection, schema);
export default Product;