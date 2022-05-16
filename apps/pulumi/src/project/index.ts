import * as gcp from "@pulumi/gcp";

export const projectModule = () => {
  const apis = [
    "apigateway.googleapis.com",
    "servicecontrol.googleapis.com",
    "bigquery.googleapis.com",
    "bigquerydatatransfer.googleapis.com",
    "cloudbuild.googleapis.com",
    "compute.googleapis.com",
    "cloudtasks.googleapis.com",
    "iamcredentials.googleapis.com",
    "run.googleapis.com",
    "firebase.googleapis.com",
    "firestore.googleapis.com",
    "pubsub.googleapis.com",
    "workflows.googleapis.com",
    "workflowexecutions.googleapis.com",
    "eventarc.googleapis.com",
    "artifactregistry.googleapis.com",
    "secretmanager.googleapis.com",
  ];

  const services = apis.map(
    (name) =>
      new gcp.projects.Service(name, {
        project: "dashfriction-pulumi-dev",
        service: name,
      })
  );

  return {
    services,
  };
};
