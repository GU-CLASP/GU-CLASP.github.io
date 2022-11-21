---
lecturer: "Joakim Nivre from Uppsala University and RISE Research Institutes of Sweden"
title: "Nucleus Composition in Transition-Based Dependency Parsing"
type: seminar
date: 2022-11-18
duration: "2 hours"
venue: "Gothenburg and Online"
slides: Joakim Nivre 18.11.2022.pdf
---

Abstract

Dependency-based approaches to syntactic analysis assume that syntactic structure can be analyzed in terms of binary asymmetric dependency relations holding between elementary syntactic units. Computational models for dependency parsing almost universally assume that an elementary syntactic unit is a word, while the influential theory of Lucien Tesnière instead posits a more abstract notion of nucleus, which may be realized as one or more words. In this article, we investigate the effect of enriching computational parsing models with a concept of nucleus inspired by Tesnière. We begin by reviewing how the concept of nucleus can be defined in the framework of Universal Dependencies, which has become the de facto standard for training and evaluating supervised dependency parsers, and explaining how composition functions can be used to make neural transition-based dependency parsers aware of the nuclei thus defined. We then perform an extensive experimental study, using data from 20 languages to assess the impact of nucleus composition across languages with different typological characteristics, and employing a variety of analytical tools including ablation, linear mixed-effects models, diagnostic classifiers and dimensionality reduction. The analysis reveals that nucleus composition gives small but consistent improvements in parsing accuracy for most languages, and that the improvement mainly concerns the analysis of main predicates, nominal dependents, clausal dependents and coordination structures. Significant factors explaining the rate of improvement across languages include entropy in coordination structures and frequency of certain function words, in particular determiners. Analysis using dimensionality reduction and diagnostic classifiers suggests that nucleus composition increases the similarity of vectors representing nuclei of the same syntactic type.

Joint work with Ali Basirat, Luise Dürlich and Adam Moss.
