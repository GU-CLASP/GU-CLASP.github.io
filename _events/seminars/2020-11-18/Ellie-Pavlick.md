---
date: 2020-11-18
title: "You can lead a horse to water...: Representing vs. Using Features in Neural NLP"
lecturer: "Ellie Pavlick"
duration: "2 hours"
venue: "Gothenburg"
slides: ./Ellie Pavlick 18.11.pdf
---



 A wave of recent work has sought to understand how pretrained language models work. Such analyses have resulted in two seemingly contradictory sets of results. On one hand, work based on "probing classifiers" generally suggests that SOTA language models contain rich information about linguistic structure (e.g., parts of speech, syntax, semantic roles). On the other hand, work which measures performance on linguistic "challenge sets" shows that models consistently fail to use this information when making predictions. In this talk, I will present a series of results that attempt to bridge this gap. Our recent experiments suggest that the disconnect is not due to catastrophic forgetting nor is it (entirely) explained by insufficient training data. Rather, it is best explained in terms of how "accessible" features are to the model following pretraining, where "accessibility" can be quantified using an information-theoretic interpretation of probing classifiers.
