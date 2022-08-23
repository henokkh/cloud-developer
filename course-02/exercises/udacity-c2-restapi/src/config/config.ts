require('dotenv').config();

export const config = {
  "dev": {
    // credentials for AWS RDS
    "host": process.env.DEV_POSTGRES_HOST,
    "username": process.env.DEV_POSTGRES_USER,
    "password": process.env.DEV_POSTGRES_PASSWORD,
    "database": process.env.DEV_POSTGRES_DATABASE,
    "dialect": "postgres",

    // credentials for AWS S3
      // get the Access Key ID and Secret Access Key from AWS CLI config
    "aws_profile": process.env.DEV_AWS_PROFILE, 
    "aws_region": process.env.DEV_AWS_REGION,
    "aws_media_bucket": process.env.DEV_AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.DEV_JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
