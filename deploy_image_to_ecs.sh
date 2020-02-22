#!/bin/bash

# Getting old task definition
TASK_DEFINITION=$(aws ecs describe-task-definition --task-definition first-run-task-definition --region eu-west-1)

# Creating new task definition
NEW_TASK_DEFINTIION=$(echo $TASK_DEFINITION | jq --arg IMAGE "097786803906.dkr.ecr.eu-west-1.amazonaws.com/top100albums" '.taskDefinition | .containerDefinitions[0].image = "097786803906.dkr.ecr.eu-west-1.amazonaws.com/top100albums" | del(.taskDefinitionArn) | del(.revision) | del(.status) | del(.requiresAttributes) | del(.compatibilities)')

# Updating task definition in aws
aws ecs register-task-definition --region "eu-west-1" --cli-input-json "$NEW_TASK_DEFINTIION"

# Updating cluster
aws ecs update-service --cluster default --service withlb-service --task-definition first-run-task-definition