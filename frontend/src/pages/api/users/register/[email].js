import axios from "axios"

export default async function check_user_registration(req, res) {
    const user_email = req.query.email
    const user_data = await axios.get(`${process.env.BASE_URL}/users/profile/${user_email}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.AUTH_SECRET}`
        }
    }
    ).then((data) => {
        res.status(200).json(data.data).end()
    }).catch((err) => {
        if (err.response?.data?.detail.includes("doesn't exist")) {
            res.status(400).json({data: "user doesn't exist"})
        }
    })
}