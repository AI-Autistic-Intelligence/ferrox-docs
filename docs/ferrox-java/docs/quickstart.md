---
id: quickstart
title: Quickstart Guide
sidebar_position: 2
---

# Quickstart Guide

This guide will help you scaffold your first high-performance, Virtual Thread-native API using the `ferrox-java` ecosystem.

## 1. Installation

Ferrox-Java modules are hosted on GitHub Packages. You need to configure your `build.gradle.kts` to authenticate with your GitHub Personal Access Token (PAT).

```kotlin
plugins {
    id("org.springframework.boot") version "3.2.5"
    id("io.spring.dependency-management") version "1.1.4"
    java
}

repositories {
    mavenCentral()
    maven {
        url = uri("https://maven.pkg.github.com/YOUR_ORG/ferrox-java")
        credentials {
            username = System.getenv("GITHUB_ACTOR")
            password = System.getenv("GITHUB_TOKEN")
        }
    }
}

dependencies {
    // Import the Onion Pipeline and Core Abstractions
    implementation("dev.ferrox:ferrox-java-web:1.0.0")
    implementation("dev.ferrox:ferrox-java-cqrs:1.0.0")
    
    // Add Security and Observability
    implementation("dev.ferrox:ferrox-java-security:1.0.0")
    implementation("dev.ferrox:ferrox-java-observability:1.0.0")
}
```

## 2. Enabling Virtual Threads

Project Loom is the foundation of our concurrency model. You must explicitly enable Virtual Threads in your `application.yml` or `application.properties`:

```yaml
spring:
  threads:
    virtual:
      enabled: true
```

## 3. Your First CQRS Endpoint

Do not build `@Service` classes that inject repositories. Instead, build **Commands** and **Handlers**.

### Step 3a. Define the Command

```java
import dev.ferrox.cqrs.Command;

public record CreateUserCommand(String email, String plaintextPassword) implements Command<String> {}
```

### Step 3b. Define the Handler

```java
import dev.ferrox.cqrs.CommandHandler;
import org.springframework.stereotype.Service;

@Service
public class CreateUserHandler implements CommandHandler<CreateUserCommand, String> {

    @Override
    public String handle(CreateUserCommand command) {
        // Business logic here. Runs on a Virtual Thread automatically!
        return "user_id_123";
    }
}
```

### Step 3c. Dispatch from the Controller

```java
import dev.ferrox.cqrs.CommandBus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final CommandBus commandBus;

    public UserController(CommandBus commandBus) {
        this.commandBus = commandBus;
    }

    @PostMapping
    public String create(@RequestBody CreateUserCommand command) {
        // Dynamic dispatch! No direct service injection needed.
        return commandBus.dispatch(command);
    }
}
```

## 4. Run your Application
Boot your Spring application. The `ferrox-java-web` module will automatically auto-configure the *7-Layer Onion Pipeline*, mounting the Sentinel Threat Engine and PASETO verifiers. 

You are now running at Rust-like speeds on the JVM!
