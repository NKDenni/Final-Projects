# Generated by Django 2.2 on 2021-10-10 12:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first', models.CharField(max_length=200)),
                ('last', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('birthday', models.DateField()),
                ('password', models.CharField(max_length=16)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, default='', upload_to='child/%Y/%m/%d/')),
                ('name', models.CharField(default='Name', max_length=200)),
                ('birthday', models.DateField()),
                ('gender', models.CharField(blank=True, max_length=50)),
                ('econtact', models.CharField(blank=True, max_length=200)),
                ('enumber', models.CharField(blank=True, max_length=13)),
                ('summary', models.TextField(blank=True, max_length=800)),
                ('likes', models.TextField(blank=True, max_length=200)),
                ('dislikes', models.TextField(blank=True, max_length=200)),
                ('strengths', models.TextField(blank=True, max_length=200)),
                ('weaknesses', models.TextField(blank=True, max_length=200)),
                ('diag', models.TextField(blank=True, max_length=100)),
                ('diet', models.TextField(blank=True, max_length=100)),
                ('phys', models.TextField(blank=True, max_length=100)),
                ('meds', models.TextField(blank=True, max_length=100)),
                ('doc', models.TextField(blank=True, max_length=300)),
                ('guardian', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='children', to='main.User')),
            ],
        ),
    ]