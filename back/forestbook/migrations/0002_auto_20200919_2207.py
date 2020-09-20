# Generated by Django 3.1.1 on 2020-09-19 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forestbook', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forestbook',
            name='description',
            field=models.TextField(verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='fullname',
            field=models.CharField(max_length=100, verbose_name='fullname'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='habitat',
            field=models.CharField(max_length=20, verbose_name='habitat'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='img',
            field=models.CharField(blank=True, max_length=100, verbose_name='img'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='name',
            field=models.CharField(max_length=20, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='season',
            field=models.IntegerField(blank=True, verbose_name='season'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='species',
            field=models.CharField(max_length=20, verbose_name='species'),
        ),
        migrations.AlterField(
            model_name='forestbook',
            name='type',
            field=models.IntegerField(blank=True, verbose_name='type'),
        ),
        migrations.AlterField(
            model_name='userbook',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='date'),
        ),
        migrations.AlterField(
            model_name='userbook',
            name='img',
            field=models.CharField(blank=True, max_length=100, verbose_name='img'),
        ),
    ]
