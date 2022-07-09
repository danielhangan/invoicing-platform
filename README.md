# [CS50 x Web Development] Invoicing Platform for Freelancers and Remote Workers.

Tech stack: Django, Ninja API, Nextjs, ChakraUI \n

- One of the big challenges I had was migrations. Every time I wanted to change something in my schema I had to makemigrations and apply them.
  I spent more time debugging migrations that writing the actually logic behind my backend!!!

- I had to change invoice user_id from internal users to all users using a string
  The idea is that a user will not be able to send an invoice to a person or email that is not in the database.
  This is why I had to change the issuer_email and billed_email from ForeignKeys to CharField
