import Feature from '@/components/Feature'
import NewProducts from '@/components/NewProducts';
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product';

export default async function Home() {
  const featuredProductId = '655ba33c28db1948d2aeb36c'
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const productNews = await Product.find({},null,{sort:{_id:-1}});
  const featuredProduct = JSON.parse(JSON.stringify(product));
  const newsProduct = JSON.parse(JSON.stringify(productNews));
  console.log(featuredProduct);
  console.log(newsProduct);
  return (
    <>
     <Feature product={featuredProduct}/>
     <NewProducts products={newsProduct}/>
    </>
  )
}
