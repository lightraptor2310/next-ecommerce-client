import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function POST( req: Request ) {
    await mongooseConnect();
    var products = [];
    const ids = await req.json();
    for (var i = 0 ; i < ids.ids.length; i++) {
        products[i] = await Product.findOne({_id: ids.ids[i]});
        //console.log(products[i]);

    }
    console.log(products);
    return Response.json( products );
}