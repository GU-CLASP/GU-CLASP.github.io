---
date: 2018-10-03
title: "A Compositional Bayesian Semantics for Natural Language"
lecturer: "Rasmus Blanck"
duration: "2 hours"
venue: "Gothenburg"
slides: ./1705608_bbcl_clasp_handout-rasmus.pdf
---



We propose a compositional Bayesian semantics that interprets declarative sentences in a natural language by assigning them probability conditions. These are conditional probabilities that estimate the likelihood that a competent speaker would endorse an assertion, given certain hypotheses. Our semantics is implemented in a functional programming language. It estimates the marginal probability of a sentence through Markov Chain Monte Carlo (MCMC) sampling of objects in vector space models satisfying specified hypotheses. We apply our semantics to examples with several predicates and generalised quantifiers, including higher-order quantifiers. It captures the vagueness of predication (both gradable and non-gradable), without positing a precise boundary for classifier application. We present a basic account of semantic learning based on our semantic system. We compare our proposal to other current theories of probabilistic semantics, and we show that it offers several important advantages over these accounts.




