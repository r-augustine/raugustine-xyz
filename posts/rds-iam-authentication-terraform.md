---
title: "AWS IAM database authentication for PostgreSQL using Terraform"
date: "2023-01-01"
---

A short introduction here referencing removing credentials from containers
and increasing security.

Define the steps involved and show terraform examples

### Create RDS databse

```hcl

## Creates a random password
data "aws_secretsmanager_random_password" "db_password" {
  password_length = 12
}

## Creates the database instance
resource "aws_db_instance" "default" {
  allocated_storage                   = 20
  db_name                             = "pg-db"
  engine                              = "postres"
  engine_version                      = "11"
  family                              = "postgres11"
  instance_class                      = "db.t3.micro"
  port                                = "5432"
  username                            = "foo"
  password                            = data.aws_secretsmanager_random_password.db_password
  iam_database_authentication_enabled = true
}
```

### Create an IAM policy for database access

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["rds-db:connect"],
      "Resource": [
        "arn:aws:rds-db:us-east-2:1234567890:dbuser:cluster-ABCDEFGHIJKL01234/jack"
      ]
    }
  ]
}
```
