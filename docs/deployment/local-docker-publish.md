---
id: local-docker-publish
title: Local Docker Packaging & Zero-Cloning Publishing ($0.00 Cloud Cost)
sidebar_label: Local Docker Publishing
---

# Local Docker Packaging & Publishing: Host Direct GHCR Push

This guide outlines the production packaging and publishing process for the entire Ferrox polyglot ecosystem, designed to operate **100% locally with zero cloud costs ($0.00)** and without consuming GitHub Actions runner quotas.

---

## 1. Architectural Principles

1. **Zero GitHub Actions Quota**: All multi-stage container builds, tagging, and registry pushes are executed directly on the developer host machine (Windows / WSL2 / Linux).
2. **Zero Cloud Infrastructure Cost ($0.00)**: Leverages GitHub Container Registry (GHCR) as the public registry (`ghcr.io/ai-autistic-intelligence`).
3. **Zero-Cloning Experience for Third Parties**: End users, reviewers, and external contributors can spin up the entire Living Mesh with a single `curl | docker compose` command, without needing `git clone`, Node.js, Rust, Gradle, or PHP installed locally.

---

## 2. Pre-Requisites & GHCR Authentication

To publish images to the GitHub Container Registry from your local terminal, generate a Personal Access Token (PAT with `write:packages`, `read:packages`, and `delete:packages` scopes) and log in:

### Linux / macOS / WSL2
```bash
echo $CR_PAT | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
```

### Windows (PowerShell)
```powershell
$env:CR_PAT | docker login ghcr.io -u <YOUR_GITHUB_USERNAME> --password-stdin
```

---

## 3. Subcommand: `cargo ferrox mesh publish`

The official Ferrox CLI tooling includes native multi-service container builds and publishing:

```bash
# 1. Dry-run inspection: review all build contexts and image tags without invoking Docker
cargo ferrox mesh publish --dry-run

# 2. Build and tag all 7 microservices locally
cargo ferrox mesh publish

# 3. Build, tag, and directly push all images to GHCR
cargo ferrox mesh publish --push

# 4. Build and push with custom version tag and forced cache bypass
cargo ferrox mesh publish --tag v1.0.0 --no-cache --push

# 5. Build and publish a single targeted service (e.g., ferrox-front)
cargo ferrox mesh publish --service front --push
```

### Supported Services Matrix

| Service ID | Subsystem Name | Local Source Context | Published Container Image | Est. Size |
| :--- | :--- | :--- | :--- | :--- |
| `front` | **Ferrox-Front** (Reactive Wasm Dashboard) | `ferrox-front/` | `ghcr.io/ai-autistic-intelligence/ferrox-front:latest` | ~24.5 MB |
| `match` | **Ferrox-Match** (Zero-Alloc Order Engine) | `ferrox-match/` | `ghcr.io/ai-autistic-intelligence/ferrox-match:latest` | ~18.2 MB |
| `saas` | **Ferrox-SaaS** (Rust CQRS Core Engine) | `ferrox/` | `ghcr.io/ai-autistic-intelligence/ferrox-saas-backend:latest` | ~21.8 MB |
| `java` | **Ferrox-Java** (Project Loom Ledger) | `ferrox-java/` | `ghcr.io/ai-autistic-intelligence/ferrox-java:latest` | ~168.0 MB |
| `php` | **Ferrox-PHP** (FrankenPHP Saga Coordinator) | `ferrox-php/` | `ghcr.io/ai-autistic-intelligence/ferrox-php:latest` | ~95.4 MB |
| `node` | **Ferrox-Node** (Fastify / NestJS CQRS Audit) | `ferrox-node/` | `ghcr.io/ai-autistic-intelligence/ferrox-node:latest` | ~82.1 MB |
| `py` | **Ferrox-Py** (Polars Analytics Worker) | `ferrox-py/` | `ghcr.io/ai-autistic-intelligence/ferrox-py:latest` | ~114.5 MB |

---

## 4. Automation Scripts (PowerShell & Bash)

Dedicated automation scripts are provided in `ferrox-infrastructure/scripts` for native host execution:

### Windows PowerShell
```powershell
# Dry-run validation
.\ferrox-infrastructure\scripts\publish-mesh-images.ps1 -DryRun

# Build and Push all services
.\ferrox-infrastructure\scripts\publish-mesh-images.ps1 -Push

# Target single service
.\ferrox-infrastructure\scripts\publish-mesh-images.ps1 -Service match -Push
```

### Linux / WSL2 Bash
```bash
# Dry-run validation
./ferrox-infrastructure/scripts/publish-mesh-images.sh --dry-run

# Build and Push all services
./ferrox-infrastructure/scripts/publish-mesh-images.sh --push

# Target single service
./ferrox-infrastructure/scripts/publish-mesh-images.sh --service front --push
```

---

## 5. Standalone Zero-Cloning Manifest (`docker-compose.standalone.yml`)

The file `docker-compose.standalone.yml` contains zero `build:` blocks and zero host folder mounts. All state is maintained in isolated named Docker volumes (`ferrox_standalone_*_data`).

### Local Verification via CLI
Developers can test the distributed registry images locally as a third-party user would:

```bash
# Start standalone mesh using published GHCR images
cargo ferrox mesh up --standalone

# Stop standalone mesh
cargo ferrox mesh down --standalone
```

---

## 6. The Global One-Liner Quickstart

Any user or system anywhere can launch the entire 7-service polyglot stack and streaming infrastructure with a single terminal command:

```bash
curl -fsSL https://raw.githubusercontent.com/AI-Autistic-Intelligence/ferrox-infrastructure/master/docker-compose.standalone.yml | docker compose -f - up -d
```

### Available Endpoints Once Running

- **Mission Control 3.0 Web UI**: `http://localhost:4000`
- **Sub-microsecond Match WebSocket**: `ws://localhost:8086`
- **Rust SaaS Core API**: `http://localhost:8080`
- **Java 21 Loom Ledger**: `http://localhost:8082`
- **PHP FrankenPHP Saga E-Shop**: `http://localhost:8000`
- **Node Fastify / NestJS Audit**: `http://localhost:3000`
- **Python FastData Analytics**: `http://localhost:8001`
- **Redpanda Kafka Broker**: `127.0.0.1:19092`
- **Redis In-Memory & Locks**: `127.0.0.1:6379`
- **PostgreSQL Database**: `127.0.0.1:5432`
