from django.db import models


class User(models.Model):
    email = models.CharField(max_length=255, primary_key=True, unique=True)
    full_name = models.CharField(max_length=255, blank=False)
    profession = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField()

    def __repr__(self):
        return f"Created user {self.email}"
