import axios from "axios"
export default async function get_all_invoices(req, res) {
    if (req.method === 'GET') {
        axios.get(`${process.env.BASE_URL}/invoices/`,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(200).json(data.data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).end()
        })
    }
}