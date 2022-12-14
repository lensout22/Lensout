# Generated by Django 2.2.7 on 2022-07-29 12:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contest',
            name='contest_end',
        ),
        migrations.RemoveField(
            model_name='contest',
            name='contest_start',
        ),
        migrations.AddField(
            model_name='contest',
            name='type',
            field=models.CharField(choices=[('free', 'Free'), ('paid', 'Paid')], default=django.utils.timezone.now, max_length=20),
            preserve_default=False,
        ),
    ]
