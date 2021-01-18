# Generated by Django 3.1.3 on 2021-01-18 07:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('stockmgmt', '0005_stock_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]