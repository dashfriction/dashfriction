import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Modules
import { projectModule } from "./src/project";
import { storageModule } from "./src/storage";

// Initialize project modules
const project = projectModule();
const storage = storageModule();

// CLI outputs
export const bucketName = storage.bucketName;