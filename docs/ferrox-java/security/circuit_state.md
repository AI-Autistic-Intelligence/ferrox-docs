---
id: circuit-state
title: Circuit State
sidebar_position: 10
---

# Circuit State

## 1. Overview (What does this do?)
The `Circuit State` module is a core enterprise component built natively for the Java Virtual Machine (JVM). Enum representing OPEN, CLOSED, or HALF_OPEN circuit states. It leverages the massive ecosystem power of Java while enforcing the strict Ferrox Zero-Trust architecture, operating entirely independently of legacy Spring assumptions.

## 2. Philosophy (Why does it exist?)
Java applications are often bogged down by massive heap allocations and tightly coupled "Service" classes. `Circuit State` exists to forcefully separate Resilience logic into isolated, testable, and highly performant boundaries. By strictly adhering to these constraints, Ferrox-Java applications can scale to millions of requests without encountering the dreaded "GC Pause" or cascading network failures.

## 3. Target Audience (Who is it for?)
Designed for Enterprise Java Architects, FinTech Backend Engineers, and organizations migrating massive Spring Boot monoliths into strict, ultra-low-latency [CQRS](/docs/ferrox-java/architectures/cqrs_tests) microservices where Resilience operations must be impeccable.

## 4. Architecture (How does it work?)
`Circuit State` is deeply woven into the `ferrox-starter` auto-configuration system.
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
Integrating `Circuit State` into your application is done through standard constructor injection or Ferrox annotations:

```java
import dev.ferrox.core.CircuitState;
import org.springframework.stereotype.Service;

@Service
public class EnterpriseLogicService {

    private final CircuitState component;

    public EnterpriseLogicService(CircuitState component) {
        this.component = component;
    }

    public void executeOperation() {
        // Safely execute the operation through the Ferrox boundary
        component.initialize(true);
    }
}
```

## 7. Ecosystem Integration
The `Circuit State` component communicates flawlessly with the [CQRS Bus](/docs/ferrox-java/architectures/cqrs) and the Java [Sentinel](/docs/ferrox-java/security/sentinel-threat-engine). If anomalies are detected during Resilience, the Java engine will immediately fire a DomainEvent via the EventBus, allowing side-car containers or [Webhooks](/docs/ferrox/integrations/webhooks) to react instantly.
