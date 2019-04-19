#!/usr/bin/env bash

command="$1"
image="qa/iu7.corp:0.0.1"

if [[ "$command" = "build" ]]; then
  docker build -t "$image" . --no-cache
elif [[ "$command" = "push" ]]; then
  echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin \
    && docker push "$image"
elif [[ "$command" = "remove" ]]; then
  docker rmi "$image"
else
  echo "command expected 'build/push/remove'"
  exit -1
fi
