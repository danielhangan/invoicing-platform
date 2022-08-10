
import axios from "axios"
export default async function get_invoice_by_id(req, res) {
    const invoice_id = req.query.id
    // const payload = JSON.parse(req.body)
    if (req.method === 'GET') {
        axios.get(`${process.env.BASE_URL}/invoices/${invoice_id}`,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(200).json(data.data)
        })
        .catch((err) => {
            res.status(400).end()
        })
    }

    if (req.method === 'PUT') {
        const payload = JSON.parse(req.body)
        axios.put(`${process.env.BASE_URL}/invoices/${invoice_id}`, payload,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(200).json(data.data)
        })
        .catch((err) => {
            res.status(400).end()
        })
    }

    if (req.method === 'DELETE') {
        axios.delete(`${process.env.BASE_URL}/invoices/${invoice_id}`,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(200).json(data.data)
        })
        .catch((err) => {
            res.status(400).end()
        })
    }
}