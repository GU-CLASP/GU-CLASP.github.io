---
presented_by: "Mike Zhang from the University of Copenhagen"
title: "Contrastive Self-Distillation for Multilingual Preference Tuning"
type: seminar
date: 2026-05-06
time: 13:15-15:00
venue: Gothenburg University, Humanisten and online
address: Renströmsgatan 6, 412 55 Göteborg
room: J335
zoom: https://gu-se.zoom.us/j/67063108947?pwd=kPpjvMLCekxNTBVzq4uYP5gFZ6Y6vd.1 
slides: ""
---

## Abstract
Aligning large language models typically relies on two ingredients: a policy model that generates on-policy responses, and a reward model that guides the selection of training data. Recent work has shown that, in English, the contrastiveness between self-generated samples — measured via reward scores — is a key lever for downstream performance in preference optimization. Does this finding hold beyond English? This talk presents work in progress on what we call contrastive self-distillation: a recipe in which a single policy generates its own candidates, and preference pairs are mined from opposite ends of the resulting reward distribution. We extend this recipe to seven European languages and evaluate across 44 language-specific evaluation sets. The results show that constructing preference pairs from self-distilled samples (whether monolingually or multilingually) improves over standard baselines and, critically, avoids the catastrophic forgetting that plagues naive post-training in the target languages. The talk will close with open questions on the role of translation, prompt language, and language family, and what they suggest about where multilingual preference tuning should go next.
