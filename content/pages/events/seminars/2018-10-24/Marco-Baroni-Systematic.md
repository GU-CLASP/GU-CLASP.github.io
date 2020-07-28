---
date: 2018-10-24
title: "Systematic compositionality in recurrent neural networks (and, if time allows, humans) (joint work with Brenden Lake, João Loula, Adam Liska, Germán Kruszewski, Tal Linzen)"
lecturer: "Marco Baroni"
duration: "2 hours"
venue: "Gothenburg"
slides: ./1704969_marco-clasp-oct2018-composition.pdf
---



Recurrent neural networks (RNNs) are remarkably general learning systems that, given appropriate training examples, can handle complex sequential processing tasks, such as those frequently encountered in language and reasoning. However, RNNs are remarkably sample-heavy, typically requiring hundreds of thousands of examples to master tasks that humans can solve after just a few exposures. The first set of experiments I will present shows that modern RNNs, just like their nineties ancestors, have problems with systematic compositionality, that is, the ability to extract general rules from the training data, and combine them to process new examples. As systematic compositionality allows very fast generalization to unseen cases, lack of compositional learning might be one root of RNNs training data thirst. I will next present a study where RNNs must solve an apparently simple task where correct generalization relies on function composition. The results suggest that a large random search in RNN space finds a small portion of models that converged to a (limited) compositional solution. Finally, if time allows, I will present ongoing work in which we study the compositional abilities of human subjects, trying to uncover the priors that subtend their generalization skills.




