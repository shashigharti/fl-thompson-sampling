# About project

This is a research project related to reinforcement learning/multiarmed bandit/federated learing.

# Team Members

- Maddie Shang (Team Lead)
- Shashi Gharti

# Folder structure:

- Backend server folder (django) => server
- Frontend client => client

# Getting Started

## Backend Server

Create virtual env for python and run the following commands:

### Install dependencies

- Go to the folder server and install dependencies
  pip install -r requirements.php

### Run Migrations

- python manage.py makemigrations
- python manage.py migrate

### Seed ServerData Table

- python manage.py loaddata core/fixtures/init-data.json

### Run Server

- python manage.py runserver

## Frontend Server

- Go to the folder client and install dependencies
  npm install

### Set ENV

- Rename .env.sample file to .env
  API_ENDPOINT=127.0.0.1:8000
  NO_OF_CLIENTS=2
  UICLIENT_DIM=24
  STOP_AFTER=1000
  TIME_INTERVAL_FOR_POLICY_CHANGE=300

### Run Client

- npm run start
