provider "aws" {
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
    region = "us-west-1"
}

resource "aws_dynamodb_table" "textbook-requests" {
  name        = "${var.table_name}"
  billing_mode = "${var.table_billing_mode}"
  hash_key       = "id"
  attribute {
    name = "id"
    type = "S"
  }
  tags = {
    environment  = "${var.environment}"
  }

}
