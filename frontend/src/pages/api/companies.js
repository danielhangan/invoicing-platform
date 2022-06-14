
import axios from "axios"

export default async function new_user_company(req, res) {
    if (req.method === 'POST') {
        axios.post(`${process.env.BASE_URL}/companies/`, req.body,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(201).end()
        })
        .catch((err) => {
            res.status(400).end()
        })
    }
}