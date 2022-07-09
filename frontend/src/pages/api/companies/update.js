
import axios from "axios"

export default async function update_user_client_company(req, res) {
    const body = JSON.parse(req.body)

    if (req.method === 'PUT') {
        axios.put(`${process.env.BASE_URL}/companies/clients/${body.user_email}/${body.company_id}`, 
        {
            company_name: body.company_name,
            url: body.url,
            address_street: body.address_street,
            address_city: body.address_city,
            address_country: body.address_country,
            address_post_code: body.address_post_code,
            vat_number: body.vat_number,
            tax_number: body.tax_number
        },
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