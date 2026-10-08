---
id: sentinel-algorithms
title: Sentinel AI Algorithms
sidebar_position: 4
---

# [Sentinel](/docs/ferrox-php/security/sentinel-engine) AI Algorithms

## 1. Overview (What does this do?)
The [Sentinel](/docs/ferrox-php/security/sentinel-engine) AI Algorithms module extends Ferrox-PHP with advanced, probabilistic threat detection. Utilizing the new `AIGuardrails.php` and `MarkovSequence.php` classes, it allows PHP applications to defend against modern AI prompt injections and detect bot-like behavioral sequences directly in memory.

## 2. Philosophy (Why does it exist?)
PHP backend systems running on persistent architectures like Swoole or RoadRunner process thousands of requests per second. Relying on external ML microservices for every request introduces unacceptable latency. This module exists to bring high-performance, in-memory algorithmic threat detection natively into the PHP ecosystem, adhering to the Zero-Trust and Zero-Latency philosophy.

## 3. Target Audience (Who is it for?)
This documentation is for PHP system architects and DevSecOps engineers deploying highly scalable Web3 platforms, FinTech APIs, or AI-integrated services where preventing automated bot scraping and LLM injection is paramount.

## 4. Architecture (How does it work?)
The algorithms are located under `packages/security/src/[Sentinel](/docs/ferrox-php/security/sentinel-engine)/Algorithms`:
- **`AIGuardrails`**: A highly optimized text parser that computes risk scores and blocks malicious text payloads attempting to bypass system instructions.
- **`MarkovSequenceDetector`**: Analyzes the transition probabilities of user actions within an active session. Using a pre-defined state transition matrix, it spots non-human interaction patterns in O(1) time.

## 5. Installation / Setup
These classes are natively included within the `ferrox-php/security` package. Make sure it is required in your `composer.json`:

```json
{
    "require": {
        "ferrox/security": "^1.0"
    }
}
```

## 6. Quickstart (Usage)
You can easily inject the [Sentinel](/docs/ferrox-php/security/sentinel-engine) algorithms into your Swoole request handlers or middleware:

```php
use Ferrox\Security\[Sentinel](/docs/ferrox-php/security/sentinel-engine)\Algorithms\AIGuardrails;
use Ferrox\Security\[Sentinel](/docs/ferrox-php/security/sentinel-engine)\Algorithms\MarkovSequenceDetector;

$guardrails = new AIGuardrails(0.85);

if (!$guardrails->checkPayload($requestBody)) {
    throw new SecurityException("Payload blocked by [Sentinel](/docs/ferrox-php/security/sentinel-engine) AI Guardrails");
}

$markov = new MarkovSequenceDetector($transitionMatrix);
if ($markov->isAnomalous($userSessionPath)) {
    throw new SecurityException("Anomalous sequence detected");
}
```

## 7. Ecosystem Integration
These components are deeply integrated with the broader Ferrox-PHP Security pipeline. When used in conjunction with the `MTDEngine.php` (Moving Target Defense) and `DualTokenManager.php`, they create a multi-layered shield. A failed Markov check can automatically trigger an MTD route mutation for that specific user, severely limiting automated attacks.
