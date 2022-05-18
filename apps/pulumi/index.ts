import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";


// Modules
import { projectServices } from "./src/project";
import { storageServices } from "./src/storage";

// Initialize project modules
const project = projectServices();
const storage = storageServices();

// CLI outputs
export const bucketName = storage.bucketName;
