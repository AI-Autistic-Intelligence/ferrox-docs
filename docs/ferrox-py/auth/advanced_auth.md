---
id: advanced-auth
title: Advanced Auth
sidebar_position: 10
---

# Advanced Auth

## 1. Overview (What does this do?)
The `Advanced Auth` module is a dedicated component of the Ferrox-Py ecosystem. Multi-factor authentication (MFA) and OAuth2 OIDC advanced flows. Designed natively for Python 3.11+ and FastAPI, it strictly enforces the Ferrox Enterprise Architecture, completely separating Security concerns from the underlying transport layer.

## 2. Philosophy (Why does it exist?)
Python is notoriously flexible, which often leads to "spaghetti architecture" in large-scale applications. The `Advanced Auth` module exists to provide a rigid, Enterprise-grade abstraction. Instead of developers writing ad-hoc Security logic inside route handlers, they are forced to utilize this decoupled service, ensuring testability, compliance, and Zero-Trust isolation.

## 3. Target Audience (Who is it for?)
This module is tailored for Senior Backend Python Engineers and Architects migrating from monolithic Django/Flask applications to high-performance, strictly-typed microservices where Security operations require maximum reliability.

## 4. Architecture (How does it work?)
`Advanced Auth` is deeply integrated into the Ferrox-Py IoC (Inversion of Control) Container. 
- It leverages Pydantic V2 for rigorous memory layout and validation.
- It operates asynchronously utilizing Python's `asyncio` event loop.
- It is instantiated as a Singleton or Transient dependency via the core `Container`, guaranteeing that dependencies are injected perfectly without global state side-effects.

## 5. Installation / Setup
Ensure that the correct Ferrox-Py satellite package is installed in your Poetry or Pip environment.

```bash
pip install ferrox-py
```

## 6. Quickstart (Usage)
Integrating `Advanced Auth` into your FastAPI controllers or services is done via standard dependency injection:

```python
from ferrox_py.core.container import Container
from ferrox_py_auth.advanced_auth import AdvancedAuth

# Resolve the service from the IoC Container
container = Container()
service = container.resolve(AdvancedAuth)

async def execute_task():
    # Perform the enterprise operation
    result = await service.execute(strict_mode=True)
    return result
```

## 7. Ecosystem Integration
The `Advanced Auth` integrates beautifully with the rest of the ecosystem. It emits standardized events that can be picked up by the [Event Bus](/docs/ferrox-py/architectures/events) and securely validates all its inbound data traversing the 7-Layer Onion Pipeline.
