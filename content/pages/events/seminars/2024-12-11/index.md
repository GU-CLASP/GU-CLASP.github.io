---
lecturer: "Denitsa Saynova and Lovisa Hagström from Chalmers"
title: "Fact Recall, Heuristics or Pure Guesswork? Precise Interpretations of Language Models for Fact Completion"
type: seminar
date: 2024-12-11
duration: "2 hours"
venue: "Gothenburg and online"
slides: "Denitsa Saynova and Lovisa Hagström 11.12.2024.pdf"
---

Abstract: Previous interpretations of language models (LMs) miss important distinctions in how these models process factual information. For example, given the query “Astrid Lindgren was born in” with the corresponding completion “Sweden”, no difference is made between whether the prediction was based on having the exact knowledge of the birthplace of the Swedish author or assuming that a person with a Swedish-sounding name was born in Sweden. In this talk, we will investigate four different prediction scenarios for which the LM can be expected to show distinct behaviours. These scenarios correspond to different levels of model reliability and types of information being processed - some being less desirable for factual predictions. To facilitate precise interpretations of LMs for fact completion, we also propose a model-specific recipe called PrISM for constructing datasets with examples of each scenario based on a set of diagnostic criteria. We apply a popular interpretability method, causal tracing (CT), to the four prediction scenarios and find that while CT produces different results for each scenario, aggregations over a set of mixed examples may only represent the results from the scenario with the strongest measured signal.
