import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price:9999,
      name: "Iphone 10x max",
      quantity:0,
    },
    {
      price:999,
      name: "Redmi Note 10x max",
      quantity:0,
    }
  ]

  let [productList , setProductList]= useState(products);
  let [totalAmount , settotalAmount]= useState(0);

   
  const incrementQuantity= (index)=>{
    let newProductList=[...productList];
    let newtotalAmount=totalAmount;

    newProductList[index].quantity++;
    newtotalAmount+=newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  }

  const decrementQuantity =(index)=>{
    let newProductList=[...productList];
    let newtotalAmount=totalAmount;

   if( newProductList[index].quantity >0){
    newProductList[index].quantity-- ;
   }
    newtotalAmount-=newProductList[index].price;
    settotalAmount(newtotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity=()=>{
    let newProductList=[...productList];
    newProductList.map(products=>{
      products.quantity=0;
    })
    setProductList(newProductList);
    settotalAmount(0);
  }

  const removeItem=(index)=>{
    let newProductList=[...productList];
    let newtotalAmount=totalAmount;
    newtotalAmount -= 
    newProductList[index].quantity* newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    settotalAmount(newtotalAmount);
  }

  const addItem=(name,price)=>{
    let newProductList=[...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0,
    });
    setProductList(newProductList);
  }
  return (
   <>
   <Navbar/>
   <main className='container mt-5'> 
     <AddItem addItem={addItem}/>
     <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
        removeItem={removeItem}/>
   </main>
   <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
  
   </>
  );
}

export default App;
