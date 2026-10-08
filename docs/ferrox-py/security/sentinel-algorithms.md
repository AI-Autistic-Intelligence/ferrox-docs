---
id: sentinel-algorithms
title: [Sentinel](/docs/ferrox-py/security/sentinel-algorithms) AI Algorithms
sidebar_position: 4
---

# [Sentinel](/docs/ferrox-py/security/sentinel-algorithms) AI Algorithms

## 1. Overview (What does this do?)
The [Sentinel](/docs/ferrox-py/security/sentinel-algorithms) AI Algorithms module provides the advanced threat detection capabilities for Ferrox-Py. By integrating `ai_guardrails.py` and `markov_sequence.py`, it elevates the Python security layer beyond basic RBAC, offering intelligent, context-aware protection against LLM Prompt Injection and anomalous bot-like behavior.

## 2. Philosophy (Why does it exist?)
Modern web applications and AI-driven platforms face sophisticated attacks that traditional static rules (like rate limiting) cannot catch. This module exists to provide a Zero-Trust intelligent mesh, ensuring that every payload and request sequence is probabilistically evaluated for malicious intent before it reaches the core [CQRS](/docs/ferrox-py/architectures/cqrs) bus.

## 3. Target Audience (Who is it for?)
This module is designed for DevSecOps engineers and backend developers building AI integrations, financial services, or any high-stakes API in Python where automated bots and prompt injections are a critical threat.

## 4. Architecture (How does it work?)
The algorithms are instantiated as core security dependencies inside the `ferrox_py_auth.security.sentinel` package:
- **AI Guardrails (`ai_guardrails.py`)**: Intercepts textual payloads and evaluates them against known injection patterns and dimensional risk models (calculating a dynamic `risk_score`).
- **Markov Sequence Detector (`markov_sequence.py`)**: Tracks the sequence of actions a user takes and evaluates it against a trained Transition Matrix. If the transition probability drops below a critical threshold, it indicates non-human (bot/scraper) behavior.

## 5. Installation / Setup
These algorithms are natively included within the `ferrox-py-auth` package. Ensure it is installed in your virtual environment:

```bash
pip install ferrox-py-auth
```

## 6. Quickstart (Usage)
You can inject these detectors directly into your FastAPI dependencies or middleware:

```python
from ferrox_py_auth.security.sentinel.ai_guardrails import AIGuardrails
from ferrox_py_auth.security.sentinel.markov_sequence import MarkovSequenceDetector

guardrails = AIGuardrails(block_threshold=0.85)

# Checking a payload before processing
if not guardrails.check_payload(user_input):
    raise HTTPException(status_code=403, detail="Payload blocked by [Sentinel](/docs/ferrox-py/security/sentinel-algorithms) AI Guardrails")
```

## 7. Ecosystem Integration
These algorithms are designed to sit perfectly at Layer 3 of the Ferrox Onion Pipeline ([Sentinel](/docs/ferrox-py/security/sentinel-algorithms) Threat Engine). When a Markov Sequence or AI Guardrail is triggered, the system automatically logs the event to the [Observability](/docs/ferrox-py/observability/observability) module and can dynamically invoke MTD (Moving Target Defense) strategies to ban the offending IP across the entire distributed cluster.
