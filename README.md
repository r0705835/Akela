# Akela

## Pushing to dockerhub

docker buildx build --platform linux/arm/v7 -t r0705835/akela .
docker tag arm-build r0705835/akela
docker push r0705835/akela

## Running on raspberry pi

docker pull r0705835/akela:latest
docker run -d r0705835/akela
