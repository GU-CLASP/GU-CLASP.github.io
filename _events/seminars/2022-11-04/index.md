---
lecturer: "Sebastian Schuster from Saarland University"
title: "Entity tracking in pre-trained language models"
type: seminar
date: 2022-11-04
duration: "2 hours"
venue: "Gothenburg and Online"
slides: Sebastian Schuster 4.11.2022.pdf
---

Abstract

Understanding longer narratives or participating in conversations requires tracking of entities that have been mentioned and tracking how their properties change over the course of a discourse. In my talk, I will present two studies which assess the ability of large-scale pre-trained language models such as GPT-2/3 or T5 to track discourse entities.

I first consider the interactions between indefinite noun phrases and sentential operators and embedding verbs. For example, while 'a dog' in 'Arthur owns a dog' introduces an entity of a discourse, the sentence 'Arthur doesn't own a dog' does not due to the presence of negation. I adapt the psycholinguistic assessment of language models paradigm to higher-level linguistic phenomena and introduce an English evaluation suite that targets the knowledge of the interactions between sentential operators and indefinite NPs. I use this evaluation suite for a fine-grained investigation of the entity tracking abilities of the Transformer-based models GPT-2 and GPT-3.

In the second part of my talk, I'll focus on the extent to which the Transformer-based model T5 tracks updates to different entities as a discourse unfolds. I'll present a series of behavioral experiments that probe whether the model can systematically parse an initial state description and then track changes made to entities in subsequent sentences.

I'll conclude with a brief discussion of the implications for the learnability of meaning from large corpora, and ideas for how to improve entity tracking abilities in language models.
