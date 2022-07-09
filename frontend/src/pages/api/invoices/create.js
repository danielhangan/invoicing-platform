import axios from "axios"

export default async function create_new_invoice(req, res) {
    // const body = JSON.parse(req.body)
    const user_email = req.body.created_by_user
    if (req.method === 'POST') {
        const today_date = new Date().toISOString().split("T")[0]
        await axios.post(`${process.env.BASE_URL}/invoices/`,
        {
            created_by_user: user_email,
            invoice_code: "",
            issuer_email: "",
            issuer_company_name: "",
            issuer_address_street: "",
            issuer_address_city: "",
            issuer_address_country: "",
            issuer_address_post_code: "",
            issuer_vat_number: "",
            issuer_tax_number: "",
            billed_email: "",
            billed_company_name: "",
            billed_address_street: "",
            billed_address_city: "",
            billed_address_country: "",
            billed_address_post_code: "",
            billed_vat_number: "",
            billed_tax_number: "",

            service_date_from: today_date,
            service_date_to: today_date,
            due_date: today_date,
            currency: "USD",
            status: "draft",
            product_type: "service",
        },
        {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
        })
        .then((data) => {
            res.status(201).json(data.data)
        })
        .catch((err) => {
            // console.log(err)
            res.status(400).end()
        })
    }
}