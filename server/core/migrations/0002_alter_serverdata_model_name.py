# Generated by Django 4.0.1 on 2022-02-15 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serverdata',
            name='model_name',
            field=models.CharField(max_length=25),
        ),
    ]