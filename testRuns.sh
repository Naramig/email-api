#!/bin/bash

docker run --restart=always \
        --name email-api \
        --net=host \
        -d email-api
