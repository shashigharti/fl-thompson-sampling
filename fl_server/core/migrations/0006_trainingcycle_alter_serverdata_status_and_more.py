# Generated by Django 4.0 on 2021-12-27 06:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_serverdata_max_workers_alter_serverdata_group_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TrainingCycle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cycle', models.CharField(max_length=25)),
                ('start_alpha', models.CharField(default='', max_length=200)),
                ('start_beta', models.CharField(default='', max_length=200)),
                ('end_alpha', models.CharField(default='', max_length=200)),
                ('end_beta', models.CharField(default='', max_length=200)),
                ('status', models.CharField(default='inactive', max_length=25)),
                ('workers_participated', models.IntegerField(default=2)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AlterField(
            model_name='serverdata',
            name='status',
            field=models.CharField(default='inactive', max_length=25),
        ),
        migrations.DeleteModel(
            name='Training',
        ),
        migrations.AddField(
            model_name='trainingcycle',
            name='server',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.serverdata'),
        ),
    ]
