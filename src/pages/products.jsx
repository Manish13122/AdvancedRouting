import React from 'react'
import {products} from '../data/data'
import { useLocation ,useNavigate} from 'react-router-dom'
const Products = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const queryParams=new URLSearchParams(location.search)//these helps in distucturing the query selectors
    console.log(queryParams)
    //extract the parameters 
    const category=queryParams.get("category")
    const sort=queryParams.get("sort")

    //filtering the products
    const filteredProducts=products.filter((product)=>category?product.category===category:true)

    //soting the products
    if(sort=="asc"){
        filteredProducts.sort((a,b)=>a.price-b.price)
    }
    else if(sort=="des"){
        filteredProducts.sort((a,b)=>b.price-a.price)
    }

    function HandleFilter(key,value){
        if(value){
            queryParams.set(key,value);
        }else{
            queryParams.delete(key);
        }
        navigate(`?${queryParams.toString()}`)
    }
  return (
    <div>
      <h1>Shop the Winter Best Deals</h1>
    {/* category filter start*/}
    <div className="category">
      <h3 className='he'>Filter By Category</h3>
      <div className="container">
    <div className="row justify-content-center">
    <div className="col-12 col-md-6">
      <div className="btn-group my-1 px-1 shadow d-flex flex-wrap" role="group" aria-label="Basic example">
        <button type="button" onClick={() => HandleFilter("category", "men's clothing")} className="btn btn-primary flex-fill m-1">Men's clothing</button>
        <button type="button" onClick={() => HandleFilter("category", "jewelery")} className="btn btn-secondary flex-fill m-1">Jewelery</button>
        <button type="button" onClick={() => HandleFilter("category", "electronics")} className="btn btn-warning flex-fill m-1">Electronics</button>
        <button type="button" onClick={() => HandleFilter("category", "women's clothing")} className="btn btn-danger flex-fill m-1">Women's clothing</button>
        <button type="button" onClick={() => HandleFilter("category", "")} className="btn btn-success flex-fill m-1">All Products</button>
      </div>
    </div>
  </div>
</div>
    </div>
    {/* category filter end*/}

    {/* Sorting buttons start*/}
    <div className="sort-products py-1">
        <div>
            <h3 className='he'>Sort By</h3>
        </div>
    <div className="btn-group px-1 mb-3" role="group" aria-label="Basic example">
      <button type="button" onClick={()=>HandleFilter("sort","asc")} className="btn btn-dark">Low</button>
      <button type="button" onClick={()=>HandleFilter("sort","des")} className="btn btn-secondary">High</button>
    </div>
    </div>
    {/* Sorting buttons end*/}

    {/* Product start*/}
    <div className="container">
    <div className="row justify-content-center">
        {
            filteredProducts.length > 0 ? filteredProducts.map((ele) => (
                <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={ele.id}>
                    <div className="card mx-auto " style={{ width: '300px' }}>
                        <img src={ele.image} className="card-img-top  p-4" height={'230px'} alt={ele.title} />
                        <div className="card-body border">
                            <h3 className="card-title">{ele.title.slice(0, 11)}</h3>
                            <p className="card-text">${ele.price}</p>
                        </div>
                    </div>
                </div>
            )) : <div className="col-12">no-products found</div> // Center the message
        }
    </div>
</div>
    {/* Product end*/}
 
      </div>
  )
}

export default Products