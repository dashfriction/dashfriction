import * as gcp from "@pulumi/gcp";

export const storageModule = () => {
  // Create a GCP resource (Storage Bucket)
  const bucket = new gcp.storage.Bucket("my-bucket", {
    location: "US",
  });

  // Export the DNS name of the bucket
  const bucketName = bucket.url;

  return {
    bucket,
    bucketName,
  };
};
