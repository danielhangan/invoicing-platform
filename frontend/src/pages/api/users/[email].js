import axios from "axios"


export default async function delete_user(req, res) {
    const user_email = req.query.email
    if (req.method === "DELETE") {
      await axios.delete(`${process.env.BASE_URL}/users/${user_email}`, {
          headers: {
              Authorization: `Bearer ${process.env.AUTH_SECRET}`
          }
      })
      .then((response) => {
          return res.status(204)
      })
      .catch((err) => {
          console.log(err)
      })
    }

    if (req.method === "PUT") {
      const profile = JSON.parse(req.body).profile
      const company = JSON.parse(req.body).company
      await axios.put(`${process.env.BASE_URL}/users/${user_email}`, profile,
        {
            headers: {
                Authorization: `Bearer ${process.env.AUTH_SECRET}`
            },
        })
        .then(async(res_profile) => {
            await axios.put(`${process.env.BASE_URL}/companies/profile/${user_email}`, company,
              {
                  headers: {
                      Authorization: `Bearer ${process.env.AUTH_SECRET}`
                  },
              })
              .then((res_company) => {
                return { res: "accepted"}
              })
              .catch((err) => {
                  console.log(err)
              })
            })
        .catch((err) => {
            console.log(err)
        })
      res.status(200).json({ res: "hello" })
    }
  }