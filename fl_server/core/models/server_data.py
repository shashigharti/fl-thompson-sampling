from django.db import models


class ServerData(models.Model):
    group_name = models.CharField(max_length=25, unique=True, default="")
    alpha = models.CharField(max_length=200, default="")
    beta = models.CharField(max_length=200, default="")
    dim = models.IntegerField(default=0)
    max_workers = models.IntegerField(default=2)
    status = models.CharField(max_length=25, default="inactive")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)