
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function MyOrder() {

  
    const [orderData, setOrderData] = useState({}); // Consider changing this to an empty array if you're mapping over it later

    const fetchMyOrder = async () => {
        try {
            console.log(localStorage.getItem('userEmail'));
            const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setOrderData(data);
        } catch (error) {
            console.error('There was an error fetching the order data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

        return (
            <div>
                <div>
                    <Navbar />
                </div>
    
                <div className='container'>
                    <div className='row'>
    
                        {Object.keys(orderData).length!==0 ? Array(orderData).map(data => {
                            return (
                                data.orderData ?
                                    data.orderData.order_data.slice(0).reverse().map((item) => {
                                        return (
                                            item.map((arrayData) => {
                                                return (
                                                    <div  >
                                                        {arrayData.Order_date ? <div className='m-auto mt-5'>
    
                                                            {data = arrayData.Order_date}
                                                            <hr />
                                                        </div> :
    
                                                            <div className='col-12 col-md-6 col-lg-3' >
                                                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                    <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">{arrayData.name}</h5>
                                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                            <span className='m-1'>{arrayData.qty}</span>
                                                                            <span className='m-1'>{arrayData.size}</span>
                                                                            <span className='m-1'>{data}</span>
                                                                            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                                ₹{arrayData.price}/-
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
    
                                                            </div>
    
    
    
                                                        }
    
                                                    </div>
                                                )
                                            })
    
                                        )
                                    }) : ""
                            )
                        }) : ""}
                    </div>
    
    
                </div>
    
                <Footer />
            </div>
        )
    }

