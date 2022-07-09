import axios from "axios";


export default async function get_profile(req, res) {
    const user_email = req.query.email

    if (req.method === "GET") {
        await axios.get(`${process.env.BASE_URL}/users/profile/${user_email}`, 
        {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_SECRET}`
            }
        }
        ).then((data) => {
            return {res: data}
        })
    }
}