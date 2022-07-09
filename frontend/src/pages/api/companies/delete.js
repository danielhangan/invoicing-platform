import axios from "axios"

export default async function delete_user_company(req, res) {
    const body = JSON.parse(req.body)
    if (req.method === 'DELETE') {
        axios.delete(`${process.env.BASE_URL}/companies/${body.user_email}/${body.company_id}`,
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(204).end()
        })
        .catch((err) => {
            // console.log(err)
            res.status(400).end()
        })
    }
}