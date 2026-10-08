---
id: overview
title: Ferrox-Java Overview
sidebar_position: 1
---

# Ferrox-Java Overview

## 1. Overview (What does this do?)
The Ferrox-Java ecosystem brings the ultra-performant, 7-Layer Onion Request Pipeline architecture to the JVM. Designed as a massive, Spring-Boot-style multi-module ecosystem, it offers a monolithic-like developer experience (`ferrox-starter`) while preserving strict architectural isolation. It incorporates `ferrox-java-cqrs`, `ferrox-java-event-manager`, and uniquely, `ferrox-java-offheap` for memory management outside the traditional JVM garbage collector limits.

## 2. Philosophy (Why does it exist?)
Ferrox-Java exists to bridge the gap between Java's vast enterprise ecosystem and Ferrox's Zero-Trust, Zero-Latency philosophy. It prevents the typical "spaghetti code" seen in legacy Java monoliths by forcing I/O bounds and domain logic to be decoupled. Furthermore, by introducing `ferrox-java-offheap`, it explicitly aims to solve the GC pause issues that traditionally plague high-throughput Java trading systems or data platforms, aligning JVM performance closely with Rust.

## 3. Target Audience (Who is it for?)
This framework is intended for Enterprise backend engineers, financial tech architects, and systems engineers who require the vast integration capabilities of the JVM (and Spring paradigms) without sacrificing microsecond-level latency and strict Zero-Trust security. It is built for teams operating at massive scale.

## 4. Architecture (How does it work?)
Ferrox-Java utilizes a modular architecture connected via a unified IoC container and the `ferrox-starter` auto-configuration system. The pipeline integrates seamlessly with standard Java Servlets via custom interceptors:
1. **Security Filter** (`SentinelFilter.java`)
2. **Polymorphic Route Token**
3. **Identity Interceptor**
4. **Auth [Guards](/docs/ferrox/abstractions/guards) (PASETO)**
5. **[Validation](/docs/ferrox/abstractions/validation) Pipe**
6. **Controller Handlers**
7. **Business Service** (Powered by `ferrox-java-cqrs` and `ferrox-java-event-manager`)

## 5. Installation / Setup
To bootstrap a Ferrox-Java application, you only need to include the `ferrox-starter` dependency in your `build.gradle` or `pom.xml`.

```groovy
dependencies {
    implementation 'io.github.ai-autistic-intelligence:ferrox-starter:1.0.0'
}
```
This automatically wires up the [CQRS](/docs/ferrox/architectures/cqrs) bus, the IoC container, and the [Sentinel](/docs/ferrox/security/ferrox-sentinel) Web filters.

## 6. Quickstart (Usage)
Bootstrapping the application requires annotating your main class with the Ferrox configuration and utilizing the generated starter context:

```java
import dev.ferrox.web.FerroxAutoConfiguration;

@FerroxAutoConfiguration
public class FerroxApplication {
    public static void main(String[] args) {
        FerroxApp.run(FerroxApplication.class, args);
    }
}
```

## 7. Ecosystem Integration
Ferrox-Java modules are designed for extreme synergy. For instance, `ferrox-java-data` seamlessly streams massive datasets into `ferrox-java-offheap` to avoid memory pressure, while `ferrox-java-observability` natively exports metrics from the `ferrox-java-event-manager` to your dashboards. The `SentinelFilter` acts as the overarching shield, validating all inbound traffic before it reaches the Controller layers.
