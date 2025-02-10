#!/bin/bash

cd /home/ubuntu/deployments/

kubectl delete secret ecr-registry-secret

kubectl create secret docker-registry ecr-registry-secret \
  --docker-server=010928179293.dkr.ecr.eu-west-1.amazonaws.com \
  --docker-username=AWS \
  --docker-password=$(aws ecr get-login-password --region us-east-1)

kubectl apply -f node_deploy.yaml
kubectl apply -f node_svc.yaml