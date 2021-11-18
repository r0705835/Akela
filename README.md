# Akela

## Introduction

Welcome to the Akela bot! This documentation is here for you curious reader, but also for me since I'm rather forgetful. But you must be wondering what the Akela bot is? (or not but that doesn't matter I'll explain it anyway). The Akela bot is a Discord server managing bot, currently used in The Pub.

## Steps to build

- First of all change the .env_example to .env and fill in the missing variables
- using npm initialize the project
- ``` npm run dev ``` To start the bot

## Pushing to dockerhub

docker buildx build --platform linux/arm/v7 -t r0705835/akela .
docker tag arm-build r0705835/akela
docker push r0705835/akela

## Running on raspberry pi

docker pull r0705835/akela:latest
docker run -d r0705835/akela
