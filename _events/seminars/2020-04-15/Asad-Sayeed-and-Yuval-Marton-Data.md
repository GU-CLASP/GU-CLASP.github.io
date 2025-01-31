---
date: 2020-04-15
title: "Data requirements for thematic fit modeling"
lecturer: "Asad Sayeed and Yuval Marton"
duration: "2 hours"
venue: "Gothenburg"
slides: null
---

Asad Sayeed and Yuval Marton's presentation slidesThematic fit is the extent to which a given noun fits a given semantic role that is associated with a given verb. For example, "knife" fits better as an instrument for the verb "cut" than does "towel". Previous work (Hong, Sayeed, and Demberg, 2018; Sayeed, Shkadzko, and Demberg,2018) modeled human thematic fit judgements through a neural network approach that involved a very large automatically-annotated corpus. Received wisdom in the machine learning era is that more data with poorer-quality annotation is cheaper and more effective than a smaller amount of higher-quality annotation (Petrov et al., 2010).

Calling into question the wide applicability of this received wisdom, we replace some automatic annotation layers in the Sayeed et al. dataset with annotations derived from a better SRL tool, parser, and morphological analyzer. We obtained higher correlations with human-collected thematic fit judgements by training our models on dramatically less data with higher annotation quality. We therefore call for more nuanced judgment in automatic annotation design decisions in the NLP community.

Joint work between Yuval Marton (University of Washington; Bloomberg LP) and Asad Sayeed (University of Gothenburg).


