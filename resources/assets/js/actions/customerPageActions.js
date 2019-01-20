import axios from 'axios';

export function getAllCustomerData() {
    axios.get('/api/customers')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            alert("Customers loading failed !! server may be down ..try starting the server and reload the page again");
            return err;
        });
}