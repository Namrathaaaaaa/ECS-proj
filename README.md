# ECS-proj
# 🚀 Deploy Docker App on AWS ECS with ECR & Load Balancer

A minimal setup to deploy a Dockerized app using **AWS ECS (Fargate)**, **ECR**, and an **Application Load Balancer (ALB)**.

---

## 🧰 Tech Used

- Docker
- AWS ECR
- AWS ECS (Fargate)
- ALB (Application Load Balancer)

---

## 🪜 Quick Setup Steps

### 1. 📦 Build & Push Docker Image to ECR

```bash
# Build your image
docker build -t my-ecs-app .

# Create ECR repository
aws ecr create-repository --repository-name my-ecs-app

# Authenticate & push image
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
docker tag my-ecs-app:latest <account>.dkr.ecr.<region>.amazonaws.com/my-ecs-app
docker push <account>.dkr.ecr.<region>.amazonaws.com/my-ecs-app
