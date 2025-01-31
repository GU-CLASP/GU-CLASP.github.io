---
date: 2017-09-13
title: "What is it? Disambiguating the different readings of the pronoun 'it'"
lecturer: "Sharid Loaiciga"
duration: "2 hours"
venue: "Gothenburg"
slides: ./1657021_whatisit-slides.pdf
---



Machine translation of pronouns is problematic for different reasons. Languages differ in their pronoun systems, creating mismatches in features like gender, number, case, formality, animacy and overtness. Another reason is functional ambiguity. Some pronouns have the same surface form but different functions. In this talk, I will address the problem of predicting one of three functions of the English pronoun 'it': anaphoric (e.g., 'The party ended late. It was fun.'), event reference (e.g., 'He can't speak Finnish. It annoys me.') and pleonastic (e.g., 'It's been raining all day.').

I will present experiments using a maximum entropy classifier (MaxEnt) trained on gold-standard data and self-training experiments with a recurrent neural network classifier (RNN) trained on silver standard data, annotated using the MaxEnt classifier. I will show an analysis demonstrating that these models, rather than one being better than the other, have different strengths. I will also present an example of the integration of source pronoun function into an n-gram language model used for target pronoun translation prediction.

The it-disambiguation task is valuable for MT but also for the field of coreference resolution. Standard coreference resolution systems focus on identifying nominal-referential instances, de facto grouping together and discarding the event and pleonastic categories. Linguistically, however, event instances are also referential. I will finish the talk by brainstorming some ideas about how to integrate my work into this field.




