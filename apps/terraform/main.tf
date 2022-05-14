terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.20.0"
    }
  }
}

variable "gcp_region" {
  default = "europe-west1"
}

variable "gcp_project" {
  type        = string
  description = "Project ID for the GCP project"
}

provider "google" {
  region  = var.gcp_region
  project = var.gcp_project
}

