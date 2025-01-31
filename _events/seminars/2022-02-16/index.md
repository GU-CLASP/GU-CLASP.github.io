---
lecturer: "Tal Linzen from New York University"
title: "Causal analysis of the syntactic representations of Transformers"
type: seminar
date: 2022-02-16
duration: "2 hours"
venue: "Gothenburg and Online"
---

Abstract:
 
The success of artificial neural networks in language processing tasks has underscored the need to understand how they accomplish their behavior, and, in particular, how their internal vector representations support that behavior. The probing paradigm, which has often been invoked to address this question, relies on the (typically implicit) assumption that if a classifier can decode a particular piece of information from the model's intermediate representation, then that information plays a role in shaping the model's behavior. This assumption is not necessarily justified. Using the test case of everyone's favorite syntactic phenomenon - English subject-verb number agreement - I will present an approach that provides much stronger evidence for the *causal* role of the encoding of a particular linguistic feature in the model's behavior. This approach, which we refer to as AlterRep, modifies the internal representation in question such that it encodes the opposite value of that feature; e.g., if BERT originally encoded a particular word as occurring inside a relative clause, we modify the representation to encode that it is not inside the relative clause. I will show that the conclusions of this method diverge from those of the probing method. Finally, I will present a method based on causal mediation analysis that makes it possible to draw causal conclusions by applying counterfactual interventions to the *inputs*, contrasting with AlterRep which intervenes on the model's internal representations.

Bio:

Tal Linzen is an Assistant Professor of Linguistics and Data Science at New York University. Before moving to NYU in 2020, he was a faculty member at Johns Hopkins University, a postdoctoral researcher at the École Normale Supérieure in Paris, and a PhD student at NYU. At NYU, Tal directs the Computational Psycholinguistics Lab, which develops computational models of human language comprehension and acquisition, as well as methods for interpreting and evaluating neural network models for language technologies.