---
id: post-quantum
title: Post Quantum
sidebar_position: 10
---

# Post Quantum

## 1. Overview (What does this do?)
The `Post Quantum` module is an advanced component of the Ferrox ecosystem natively implemented in Rust. Kyber and Dilithium implementations for post-quantum resistant cryptography. It leverages the sheer performance of the Rust memory model to perform these operations with virtually zero latency, tightly integrating with the broader [Sentinel](/docs/ferrox/security/ferrox-sentinel) mesh and [CQRS](/docs/ferrox/architectures/cqrs) bus.

## 2. Philosophy (Why does it exist?)
In modern Enterprise architectures, relying on external services or API gateways for Cryptography operations introduces unacceptable network I/O bounds and points of failure. By embedding `Post Quantum` directly into the Ferrox binary, we adhere to the Zero-Trust and Zero-Latency philosophy, ensuring that security and performance are mathematically guaranteed at compile-time rather than bolted on as an afterthought.

## 3. Target Audience (Who is it for?)
This module is designed for DevSecOps engineers, system architects, and Rust developers building hyper-scale systems, financial exchanges, or military-grade data platforms where Cryptography is absolutely mission-critical.

## 4. Architecture (How does it work?)
`Post Quantum` operates natively within the `ferrox` execution graph. When an inbound request hits the `FerroxApp` transport layer, it is processed through the 7-Layer Onion Pipeline. At the appropriate layer, this module intercepts the payload or context:
- It runs highly optimized Rust structures (often bypassing standard allocations using `Bumpalo` or `[Singleflight](/docs/ferrox/security/singleflight)`).
- It evaluates the state deterministically.
- It yields a Result `Ok()` to continue the pipeline, or an `AppError` which immediately aborts the connection.

## 5. Installation / Setup
Because this is part of the core Ferrox Rust crates, it is available out-of-the-box when you use the `ferrox` metapackage. 

```toml
[dependencies]
ferrox = { version = "1.0", features = ["post-quantum"] }
```

## 6. Quickstart (Usage)
Integrating `Post Quantum` into your Rust application is entirely declarative:

```rust
use ferrox::security::sentinel::PostQuantum;
use ferrox::app::FerroxApp;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut app = FerroxApp::new();
    
    // Injecting the Post Quantum into the [Sentinel](/docs/ferrox/security/ferrox-sentinel) Pipeline
    let guard = PostQuantum::new()
        .with_strict_mode(true)
        .build();
        
    app.add_guard(guard);
    
    app.start().await
}
```

## 7. Ecosystem Integration
This component is designed to work in perfect harmony with the rest of the Ferrox ecosystem. For example, if `Post Quantum` blocks a request, it automatically triggers an event on the [Event Bus](/docs/ferrox/architectures/events), which can be caught by the [Webhooks](/docs/ferrox/integrations/webhooks) system to alert administrators, or by the [DataGrid](/docs/ferrox/transports/datagrid) for dashboard monitoring.
