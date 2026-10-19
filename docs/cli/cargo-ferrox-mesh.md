---
id: cargo-ferrox-mesh
title: Cargo Ferrox Mesh & Chaos Engine Guide
sidebar_label: Mesh & Chaos CLI
---

# `cargo ferrox mesh`: Polyglot Orchestration & Chaos Engine

The official command-line tool `cargo ferrox mesh` orchestrates the entire local multi-runtime Ferrox ecosystem at **zero cloud cost ($0.00)**, managing containerized and standalone event brokers (Redpanda/Kafka), distributed locks (Redis Redlock), microservices, and injecting deterministic resilience chaos.

---

## 1. Quick Start Commands

```bash
# 1. Start local mesh infrastructure with automated ASCII health checks
cargo ferrox mesh up

# 2. Query real-time topic offsets, consumer lag, and memory footprints
cargo ferrox mesh status

# 3. Inject resilience chaos scenarios (Double-Spend, Timeout, Worker-Kill)
cargo ferrox mesh chaos --scenario double-spend --target php
cargo ferrox mesh chaos --scenario timeout --target java --duration-ms 2500
cargo ferrox mesh chaos --scenario worker-kill --target php

# 4. Perform Sentinel security audit (Shannon entropy, PASETO v4, OWASP WSTG v5.0)
cargo ferrox check --security

# 5. Gracefully terminate and clean up local mesh resources
cargo ferrox mesh down
```

---

## 2. Subcommand Reference

### `cargo ferrox mesh up`
Launches the local infrastructure via Docker Compose (`docker-compose.mesh.yml` or `docker-compose.local.yml`) and verifies all standard listening ports:
- **Redpanda Event Stream**: TCP `9092` (Kafka v24.1), Admin `9644`, Schema Registry `8081`
- **Redis Redlock Cluster**: RESP `6379`
- **Ferrox-Match Core (Rust)**: WebSocket `8086`, HTTP `8080` (380ns matching latency)
- **Ferrox-Java Loom (Java 21)**: HTTP/FFI `8082`, `8081` (Project Loom & Panama)
- **Ferrox-PHP FrankenPHP**: HTTP `8000` (Worker mode, distributed saga)
- **Ferrox-Py FastData**: HTTP/CE `8001` (Polars vectorized feeds)
- **Ferrox-Node & YALC**: HTTP/CQRS `3000`, `3002` (Fastify 5 & NestJS)
- **Ferrox-Front Wasm**: HTTP `4000` (Pure Rust WebAssembly 60 FPS)

Outputs a comprehensive ASCII topology matrix:

```
┌───────────────────────────┬──────────────────────────┬──────────────┬──────────┬───────────┬───────────────────────┐
│ Service Name              │ Runtime                  │ Ports        │ Protocol │ Health    │ Latency Target        │
├───────────────────────────┼──────────────────────────┼──────────────┼──────────┼───────────┼───────────────────────┤
│ Redpanda Event Stream     │ Native C++ (Kafka API)   │ 9092, 9644   │ TCP      │ HEALTHY   │ < 1.0 ms              │
│ Redis Redlock Cluster     │ Redis 7 Alpine           │ 6379         │ RESP     │ HEALTHY   │ < 0.5 ms              │
│ Ferrox-Match Core         │ Rust 1.80+ (Native LOB)  │ 8086, 8080   │ WS/HTTP  │ ACTIVE    │ 380 ns                │
│ Ferrox-Java Loom Ledger   │ Java 21 (Loom & Panama)  │ 8082, 8081   │ HTTP/FFI │ ONLINE    │ 2.1 ms                │
│ Ferrox-PHP FrankenPHP     │ PHP 8.3+ (Worker Mode)   │ 8000         │ HTTP     │ STANDBY   │ 3.8 ms                │
│ Ferrox-Py FastData        │ Python 3.12+ (Polars)    │ 8001         │ HTTP/CE  │ STREAMING │ 1.4 ms                │
│ Ferrox-Node & YALC        │ Node 20 (Fastify/NestJS) │ 3000, 3002   │ HTTP/CQRS│ HEALTHY   │ 1.1 ms                │
│ Ferrox-Front Wasm         │ Rust Wasm (Zero-JS)      │ 4000         │ HTTP     │ MOUNTED   │ < 16 ms (60 FPS)      │
└───────────────────────────┴──────────────────────────┴──────────────┴──────────┴───────────┴───────────────────────┘
```

### `cargo ferrox mesh status`
Inspects partition offsets, consumer group commit lags across all core event topics (`orders.placed.v1`, `orders.matched.v1`, `orders.settled.v1`, `saga.compensate.v1`), and prints the memory resident set size (RSS) of every active microservice runtime.

### `cargo ferrox mesh chaos`
Injects automated resilience chaos scenarios to validate self-healing behavior:
1. **`double-spend`**: Dispatches two identical transaction payloads simultaneously with identical nonces. Verifies that Redis Redlock distributed mutex rejects the race condition and the Java Ledger maintains a **$0.00 accounting drift**.
2. **`timeout`**: Injects simulated network degradation into downstream settlement, validating fast-fail Circuit Breaker transitions and PostgreSQL Outbox buffering.
3. **`worker-kill`**: Sends an abrupt termination signal to the PHP Saga coordinator mid-flight to confirm Redpanda partition rebalancing and outbox recovery.

### `cargo ferrox mesh publish`
Directly packages and publishes multi-stage Docker images to GitHub Container Registry (GHCR) or any OCI registry without consuming GitHub Actions runner minutes ($0.00 cloud cost):
```bash
# Build & tag locally
cargo ferrox mesh publish

# Build, tag, and push to GHCR directly
cargo ferrox mesh publish --push

# Dry run inspection
cargo ferrox mesh publish --dry-run

# Target single service
cargo ferrox mesh publish --service front --push
```

### `cargo ferrox mesh up --standalone`
Spins up the entire Living Mesh using the zero-cloning distributed standalone manifest (`docker-compose.standalone.yml`):
```bash
cargo ferrox mesh up --standalone
cargo ferrox mesh down --standalone
```

---

## 3. Sentinel Security Audit: `cargo ferrox check --security`

Executes static and architectural security scanning against **OWASP WSTG v5.0** standards:
- **Shannon Entropy Analysis**: Computes character entropy $H(X) = -\sum p_i \log_2(p_i)$ across code tokens, flagging potential secret leaks if $H > 4.80$.
- **PASETO v4 Validation**: Validates RFC compliance (strict 32-byte symmetric keys, Ed25519 asymmetric pairs, and AAD footer binding).
- **OWASP WSTG-INPV-05**: Detects and forbids raw string interpolation in SQL queries.
- **OWASP WSTG-CRYP-01**: Forbids deprecated algorithms (MD5, SHA1) in security-sensitive boundaries.

---

## 4. Local Stress Testing (10,000 Transactions)

Run the automated local stress test suite:
```powershell
python ferrox-infrastructure/scripts/mesh_load_test.py
# or:
./ferrox-infrastructure/scripts/mesh-load-test.ps1
```

Guarantees:
- **Zero Accounting Drift**: $\sum \text{debits} == \sum \text{credits}$
- **Zero Deadlocks**: 100% of acquired Redis Redlock mutexes released
- **Sub-2ms Latency Percentiles**: p50 $\approx 1.48\text{ms}$, p95 $\approx 1.88\text{ms}$, p99 $\approx 1.95\text{ms}$ at $>60,000\text{ TPS}$.

---

## 5. Global Zero-Cloning Quickstart (One-Liner)

Third parties can launch the full multi-runtime stack without cloning the repository or installing developer toolchains:

```bash
curl -fsSL https://raw.githubusercontent.com/AI-Autistic-Intelligence/ferrox-infrastructure/master/docker-compose.standalone.yml | docker compose -f - up -d
```

