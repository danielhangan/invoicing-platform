

export async function get_user_companies(email) {
    const user_companies = await fetch(`${process.env.BASE_URL}/companies/${email}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.AUTH_SECRET}`
        }
    }
    ).then((data) => {
        return data
    }).catch((err) => {
        console.log(err)
    })
}