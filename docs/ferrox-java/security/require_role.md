---
id: require-role
title: Require Role
sidebar_position: 10
---

# Require Role

## 1. Overview (What does this do?)
The `Require Role` module is a core enterprise component built natively for the Java Virtual Machine (JVM). Method-level AOP annotation for strict Role-Based Access Control. It leverages the massive ecosystem power of Java while enforcing the strict Ferrox Zero-Trust architecture, operating entirely independently of legacy Spring assumptions.

## 2. Philosophy (Why does it exist?)
Java applications are often bogged down by massive heap allocations and tightly coupled "Service" classes. `Require Role` exists to forcefully separate Authorization logic into isolated, testable, and highly performant boundaries. By strictly adhering to these constraints, Ferrox-Java applications can scale to millions of requests without encountering the dreaded "GC Pause" or cascading network failures.

## 3. Target Audience (Who is it for?)
Designed for Enterprise Java Architects, FinTech Backend Engineers, and organizations migrating massive Spring Boot monoliths into strict, ultra-low-latency [CQRS](/docs/ferrox-java/architectures/cqrs_tests) microservices where Authorization operations must be impeccable.

## 4. Architecture (How does it work?)
`Require Role` is deeply woven into the `ferrox-starter` auto-configuration system.
- It utilizes standard Java interfaces but is heavily optimized (often utilizing `DirectByteBuffer` or `StampedLock`).
- It is instantiated securely via the ApplicationContext.
- It intercepts or handles data before it reaches the vulnerable layers of the application, ensuring a perfect 7-Layer Onion Pipeline.

## 5. Installation / Setup
Ensure that you have imported the relevant starter in your `pom.xml` or `build.gradle`:

```xml
<dependency>
    <groupId>io.github.ai-autistic-intelligence</groupId>
    <artifactId>ferrox-java-core</artifactId>
    <version>1.0.0</version>
</dependency>
```

## 6. Quickstart (Usage)
Integrating `Require Role` into your application is done through standard constructor injection or Ferrox annotations:

```java
import dev.ferrox.core.RequireRole;
import org.springframework.stereotype.Service;

@Service
public class EnterpriseLogicService {

    private final RequireRole component;

    public EnterpriseLogicService(RequireRole component) {
        this.component = component;
    }

    public void executeOperation() {
        // Safely execute the operation through the Ferrox boundary
        component.initialize(true);
    }
}
```

## 7. Ecosystem Integration
The `Require Role` component communicates flawlessly with the [CQRS Bus](/docs/ferrox-java/architectures/cqrs) and the Java [Sentinel](/docs/ferrox-java/security/sentinel-threat-engine). If anomalies are detected during Authorization, the Java engine will immediately fire a DomainEvent via the EventBus, allowing side-car containers or [Webhooks](/docs/ferrox/integrations/webhooks) to react instantly.
