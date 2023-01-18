---
presented_by: "Djamé Seddah from Université Paris-Sorbonne (Paris 4)"
title: "CamemBERT must die! (jk,lol) or "Beyond Sesame street-based naming schemes: Camembert vs CharacterBert, a study on the performance robustness of large monolingual language models and their character-based counterparts""
type: seminar
date: 2023-01-27
year: 2023
expired: false
---

Abstract: As cliché as it sounds, pretrained language models are now ubiquitous in Natural Language Processing, the most prominent ones being arguably Bert (Delvin et al, 2018). Many works have shown that Bert-based models are able to capture meaningful syntactic information using nothing else than raw data for training (eg. Jawahar et al, 2019) and this ability is probably one of the reasons of its success.

Anyway, until November 2019 and the release of CamemBERT, most available models were trained on English data or on the concatenation of data in multiple languages. In this talk, I’ll present the results of a work that investigates the feasibility of training monolingual Transformer-based language models for other languages, taking French as an example and evaluating our language models on part-of-speech tagging, dependency parsing, named entity recognition and natural language inference tasks. We show that the use of web crawled data is preferable to the use of Wikipedia data. Our best performing model established the state of the art in all four downstream tasks. More surprisingly, we show that a relatively small web crawled dataset (a few gigabytes) leads to results that are as good as those obtained using two magnitudes larger datasets.

Important questions still remain though:  What to do in case of dialects with high variabilities in scarce resource scenarios? I’ll present a first round of results using a CharacterBERT model trained on very little data and evaluated on noisy French user-generated content and dialectal north-African Arabic written in Latin script (Arabizi), as commonly found in social media. Our experiments show that those models exhibit strong performance when facing noisy-content but so do “classical” Bert-based models trained on literally 100x more data. This questions the usefulness of those characterBert models in relatively resource-rich scenarios, even when facing very noisy text.

Presented by Djamé Seddah, joint work with Louis Martin, Benjamin Muller, Pedro Javier Ortiz Suárez, Yoann Dupont, Laurent Romary, Éric Villemonte de la Clergerie, and Benoît Sagot for the CamemBert part. With Arij Riabi for the CharacterBert experiments and Ganesh Jawahar for the Bertology parts. 








Location: Attend in person at J406 or via Zoom, https://gu-se.zoom.us/j/66299274809?pwd=Yjc2ejc2VVhraXVJMmhWeWtOQ2NuUT09

Time: 13:15-15:00
