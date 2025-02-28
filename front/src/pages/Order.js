import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify';

function Order() {

    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.user);
    const [orders, setOrders] = useState([]);
    // console.log(user);

    const fetchOrders = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order/list/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => {
                console.log(res);
                if (res.data.success) {
                    toast.success(res.data.message);
                    setOrders(res.data.data);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch(e => {
                console.log(e);
                toast.error('Error:' + e.response.data.message);
            });
    }

    useEffect(() => {
        fetchOrders();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(orders);
    }, [orders])

    return (
        <div>
            {
                orders.length > 0 ?
                    <div>orders</div>
                    :
                    <h2>No orders here</h2>
            }
        </div>
    )
}

export default Order