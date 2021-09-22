---
title: "Seminar by Mark Steedman from University of Edinburgh"
date: 2021-04-28
year: 2021
bannerImage: "meeting-311355_1280.png"
expired: true
---
Cordially welcome to a seminar by Mark Steedman on Wednesday 28th of April, at 13:15 online via Zoom.

Title: "Why we still need Grammars for NLP"

Abstract: "Any theory of natural language consists of two modules: the grammar, which defines the semantics, and the model, which deals with the large amount of ambiguity inherent in natural languages concerning which meaning is in play. Even in linguistics, there is always a question as to the appropriate division of responsibility between the two for any phenomenon under discussion (although this question is not always acknowledged).

In the case of semantic parsing, the mapping of strings of the language onto meaning representations, it has recently become clear that sequence-to-sequence models in which the entire responsibility lies with a neuro-computational machine-learned language model trained on paired strings and structured meaning representations such as treebank trees or dependency graphs can perform as well as rule-based parsing trained on comparable amounts of labeled data. The most data-efficient semantic parsers of this kind use the data to "fine-tune" language models based on contextualized word-embeddings, in which words are associated with vectors in a dimensionally-reduced space which preserve the Euclidean character of the original sparse high-dimensional associative matrix, trained over vast amounts of text.

This triumph of the model in semantic parsing raises the question of whether the embeddings that are so effective in disambiguating words for that purpose might also take the place of word-meanings, with linear-algebraic operations such as vector addition and multiplication providing compositionality in semantic representation.

In particular, it has recently been suggested that sequence-to-sequence transduction can be applied to logical inference, to capture relations of entailment between propositions representing relations over tuples of entities, such as that if Google bought YouTube, then Google owns YouTube.

The talk will compare two distributional approaches to such inference. One is an unsupervised approach, under which entailment between relations like buying and owning is detected by parsing large volumes of text to detect subsumption between distributions of counts of tuples of entities standing in those relations, to build an entailment graph in which the nodes are relations. The other approach is supervised, based on pretrained embeddings, and uses corpora of entailing and nonentailing pairs to fine-tune the embeddings for entailment deduction, using much the same sequence-to-sequence alignment that is used in semantic parsing and neural machine translation.

The talk will argue that the two approaches are complementary, in that the language model-based approach can be used to detect paraphrase, or bidirectional entailment, thereby increasing recall, but will conclude that there is no evidence that it can distinguish directional entailments. It will argue that this deficiency is inherent in the embeddings themselves, which are associative, rather than semantic."

Time: 13.15-15.00

Location: via Zoom, https://gu-se.zoom.us/j/63017385241?pwd=NEdYMkRCUnRUTVQ4UUtuUTM3aDdEUT09
