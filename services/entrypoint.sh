#!/bin/bash

echo "📦 Running migrations..."
python manage.py make migrations
python manage.py migrate

echo "🚀 Starting Django dev server..."
exec python manage.py runserver 0.0.0.0:8000
