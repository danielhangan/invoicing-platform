from django.db import models


class User(models.Model):
    email = models.CharField(max_length=255, primary_key=True, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    second_name = models.CharField(max_length=30, blank=False)
    password = models.TextField(blank=False)
    created_at = models.DateTimeField()

    def __repr__(self):
        return f"Created user {self.email}"