---
lecturer: "Katrin Erk from the University of Texas"
title: "Contextualized embeddings for semantics: some steps along the way"
date: 2021-10-27
duration: "2 hours"
venue: "Gothenburg"
---

Abstract: Word vectors, more recently called embeddings, capture regularities about a word's observed context items. In their most recent incarnation, contextualized word embeddings -- vectors for words in context -- are learned in contextualized language models. These embeddings could maybe become a great resource for lexical semantics, and a building block for structured sentence semantics. But in order to get there, we need to figure out how best to use contextualized embeddings for characterizing lexical meaning, and understand what kind of lexical meaning they provide, which theory of lexical meaning they best match. In this talk, I will discuss some recent steps that we have taken in this direction. There are several proposals in the
recent literature for how best to use contextualized embeddings for lexical semantics -- intriguingly with conflicting findings. In our own proposal, we proposed computing multi-prototype representations from contextualized embeddings. With this representation, we can recover the old distinction of word similarity (as in dog-cat) versus word relatedness (as in dog-kennel) at different layers of embeddings from BERT, a contextualized language model. Taking a closer look at those multi-prototype embeddings, we see that they often match typical scenes or stories connected to a word, rather than different denotations. We argue that embeddings reflect a human perspective on the world as expressed in the way that humans use words: what humans find important, useful, and useless, what judgments they make, and what stories they like to tell using the words -- similar to Fillmore's Semantics of Understanding. This "story bias" is not new in contextualized embeddings, rather it has been observed, again and again, in bits and pieces, even with count-based vectors, and it is instructive to put all the pieces of evidence together. We argue that this "story bias" is not a flaw, not noise, but worth studying in its own right.