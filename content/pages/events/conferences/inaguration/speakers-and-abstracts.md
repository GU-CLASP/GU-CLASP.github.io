---
title: "Language and Probability: The CLASP Inauguration Workshop"
hideInSearchResults: true
date: 2015-08-27
venue: "Gothia Towers (Gothenburg)"
duration: "1 day"
---

* [Programme](./programme)
* [Registration](./registration)
* [Speakers and Abstracts](./speakers-and-abstracts)
* [Videos](./videos)

# Speakers and abstracts

## Speakers

-   Lars Borin, University of Gothenburg
-   Ellen Breitholtz, University of Gothenburg
-   Stegios Chatzikyriakidis, University of Gothenburg, CLASP member
-   Alexander Clark, King\'s College London, CLASP Scientific Advisory
    Committee
-   Simon Dobnik, University of Gothenburg, CLASP member
-   Devdatt Dubhashi, Chalmers University of Technology
-   Katrin Erk, University of Texas at Austin, CLASP Scientific Advisory
    Committee
-   Grants and Innovation Office representative, University of
    Gothenburg
-   Margareta Hallberg, Dean, Faculty of Arts
-   Chris Howes, University of Gothenburg
-   Shalom Lappin, University of Gothenburg and King\'s College London,
    CLASP Director
-   Staffan Larsson, University of Gothenburg, CLASP member
-   Joakim Nivre, Uppsala University, CLASP Scientific Advisory
    Committee
-   Aarne Ranta, Chalmers University of Technology
-   Charalambos Themistocleous, University of Gothenburg and Princeton
    University, CLASP member
-   Christina Thomsen Thörnqvist, Prefekt, FLOV

## Abstracts

### Lars Borin, University of Gothenburg: Multi-word expressions - eels in sheep's clothing?

Multi-word expressions (MWEs) have attracted much attention in NLP over
the last decade or so, and in general linguistics, the interest in
phraseology - which includes the linguistic study of MWEs - goes back
much further. However, the broad comparative approach characteristic of
research in linguistic typology seems not to have played any role in any
of this work so far. On the contrary, comparative studies of MWEs in NLP
(or phraseology in linguistics) have generally been contrastive rather
than typological in scope, i.e., they deal with (a convenience sample
of) a few languages, rather than with a systematic typological sample
representative of the world's linguistic diversity, with the result that
no unitary cross-linguistically valid notion of MWE can be found in the
literature. Approaching MWEs from a broad cross-linguistic perspective
raises a number of intriguing theoretical and methodological questions,
for linguistics and NLP alike. In fact, closer connections between NLP
work on MWEs and linguistic research on lexical and semantic typology
could have an important role to play for developing new research
directions in both fields.

### Stergios Chatzikyriakidis, University of Gothenburg: Modern Type Theoretical Semantics, Inference and Probability Theory

In this talk I report on-going work on the use of Modern Type Theories
(MTTs), i.e. type theories within the tradition of Martin Löf (1974,
1981), in the study of linguistic semantics. In particular, I exemplify
the use of Luo's type theory with coercive sub-typing and show its
applicability for a wide range of semantic phenomena, including
adjectival/adverbial modification, co-predication and belief
intensionality among others. I will then argue that the proof-theoretic
nature of MTTs has the further advantage that these can be further
implemented into reasoning engines in order to perform reasoning tasks.
In particular, this proof-theoretic aspect has been the main reason that
a number of proof-assistants implement variants of MTTs. One such
proof-assistant, Coq, will be used as a way to show the applicability of
MTTs in dealing with Natural Language Inference (NLI). Lastly, I will
discuss the issue of introducing probabilities into type theory. In
particular, I want to focus on the problems that such endeavour might
face and discuss possibilities on how such an extension of MTTs can be
at least initiated.

### Alex Clark, King\'s College London: Learning Syntactic Structure: Weak Learning, Strong Learning and Canonical Grammars

The origin of syntactic structure has been a difficult problem for
theoretical linguistics for many decades. One standard assumption is
that it must be bootstrapped in some way from some external source of
information, typically some hierarchically structured semantic
representation. We will explore a radical alternative to this view: that
distributional patterns in the raw data may suffice. Under some
circumstances formal languages will have a unique canonical grammar
which can form the basis for a learning algorithm which recovers a
reasonable notion of syntactic structure: this approach relies on
identifying irreducible elements of an algebraic structure - the
syntactic concept lattice - canonically associated with every formal
language. 

### Simon Dobnik, University of Gothenburg: On Interfacing Language, Spatial Perception, Dialogue, and Cognition

I will give an overview of our work on building computational models of
meaning of spatial descriptions in dialogue interaction such as \"the
chair is to the left of the table\" or \"turn right at the next
crossroad\" which include both linguistic and perceptual
representations, for example those used in computer vision and robotics.
As such models interface perceptional and conceptual domains they
invariably require an application of statistical models and machine
learning. Physical sciences have developed ways in which space can be
described with high degree of accuracy, for example by measuring
distances and angles. Such measures can be represented on a continuous
scale of real numbers. However, humans refer to space quite differently:
they use reference to discrete units such as points, regions and volumes
and they also take into account what they know about the world and the
objects, for example the dynamic kinematic routines between them.
Spatial descriptions are also notoriously underspecified and vague and
they have to be interpreted against appropriate perceptual and discourse
contexts. In my ongoing work with Robin Cooper, Shalom Lappin and
Staffan Larsson on Type Theory with Records (TTR) I have tried to give
this practical experience theoretical foundations by exploring how such
models relate to linguistic theory, in particular to formal semantics,
and use the models as a test-bed for theory development.

### Devdatt Dubhashi, Chalmers University of Technology: Distributed representations in NLP

Distributed representations such as Google\'s word2vec and Stanford\'s
GloVe which have emerged out of the Deep Learning research community,
have been shown to be capture deep semantic information and thus
constitute powerful and highly scalable data driven frameworks for NLP.
We show examples from work of our research group of how they can be used
for word sense induction and automatic document summarisation and how
they can be extended to capture time dynamics of language change. 

### Katrin Erk, University of Texas at Austin: Semantics as a Heterogeneous Mess, and How to Reason Over It

Many phenomena in lexical semantics seem to involve gradedness. Synonymy
is a case at hand: Instead of absolute synonymy, we find near-synonymy
of words that are often substitutable but still differ in nuances of
meaning. Polysemy also seems to come in degrees, with different uses of
a word differing in their perceived similarity. We use distributional
models to describe degrees of similarity of word instances, and combine
them with logical form representations of sentence meaning. In this
talk, we show how to use Markov Logic Networks (MLNs) to perform
probabilistic inference over logical form with weighted distributional
inference rules for the task of Recognising Textual Entailment (RTE). We
also speculate how a human agent could make use of distributional
information and integrate it with everything else they know through a
probabilistic framework. We argue that if semantics is a heterogeneous
mess (which seems likely), it is important to find the right
probabilistic framework for reasoning over it.

### Chris Howes, University of Gothenburg: Incremental Reasoning in Dialogue (IncReD), work with Ellen Breitholtz and Robin Cooper

In this talk, we will outline our grant proposal \'IncReD\' (Incremental
Reasoning in Dialogue). This project aims to extend insights on
incrementality in language processing beyond the utterance level.
Reasoning - which often plays the role of providing coherence and
structure in larger chunks of language - is also incremental in the
sense that we tend to form hypotheses regarding the arguments of our
conversational partners before these arguments are fully explicit. In
this sense incrementality in reasoning is analogous to syntactic and
semantic incrementality. We aim to combine insights from a variety of
fields (e.g. Artificial Intelligence, Formal Linguistics,
Psycholinguistics, Philosophy) and use corpus methods, state of the art
experimental techniques (e.g. the Dialogue Experimental Toolkit (DiET))
and formal models from syntactic, semantic and pragmatic domains (e.g.
Dynamic Syntax (DS) and Type Theory with Records (TTR)) to develop a
model of dialogue that accounts for a range of dialogue phenomena
including reasoning. Specifically we intend to investigate: (1) What
types of reasoning do people use in dialogue? What resources does this
reasoning rely on and how are these resources accessed incrementally?
(2) What happens in a dialogue (linguistically and interactionally) when
there is a mismatch in the resources for reasoning between participants?
What factors influence the arguments a person uses when conflicting
resources are available? (3) How can this incremental human reasoning
ability be formally modelled? 

### Shalom Lappin, King\'s College London and University of Gothenburg: A Probabilistic View of Grammaticality Joint work with Jey Han Lau and Alexander Clark, King\'s College London

The question of whether grammatical competence should be represented by
a formal grammar that provides a binary membership condition for the set
of well-formed sentences (and their associated structures) in a
language, or as a probabilistic system for determining relative values
of grammatical acceptability has been a central issue in computational
linguistics and cognitive science over the past two decades. In this
talk I will present experimental evidence that speakers\' judgements of
grammatical acceptability are intrinsically gradient. I will show that
unsupervised language models, augmented with grammatical scoring
functions, can predict these judgements with an encouraging degree of
accuracy over distinct domains and different languages. These results
provide motivation for the view that grammatical competence is a
probabilistic system. They also raise interesting questions about the
nature of the language acquisition process. One of the main concerns of
the talk will be to clarify the relationship between grammatical
acceptability and probability. This work was done within the framework
of my Economic and Social Research Council of the UK project Statistical
Models of Grammaticality (SMOG).

### Staffan Larsson, University of Gothenburg: Vagueness and Learning in Probabilistic TTR, work with Raquel Fernandez

We present a formal account of the meaning of vague scalar adjectives
such as \"tall\" formulated in probabilistic Type Theory with Records.
Our approach makes precise how perceptual information can be integrated
into the meaning representation of these predicates; how an agent
evaluates whether an entity counts as tall; and how the proposed
semantics can be learned and dynamically updated through experience.

### Joakim Nivre, Uppsala University: Towards a Universal Grammar for Natural Language Processing

Universal Dependencies is a recent initiative to develop
cross-linguistically consistent tree-bank annotation for many languages,
with the goal of facilitating multilingual parser development,
cross-lingual learning, and parsing research from a language typology
perspective. In this talk, I outline the motivation behind the
initiative and explain how the basic design principles follow from these
requirements. I then discuss the different components of the annotation
standard, including principles for word segmentation, morphological
annotation, and syntactic annotation. I conclude with some thoughts on
the challenges that lie ahead.

### Aarne Ranta, Chalmers University of Technology: What are grammars good for?

In formal language theory, a language is a set of strings and a grammar
is an inductive definition of this set. It generates all and only the
valid strings of the language. In linguistics, generative grammars have
similarly aimed at defining all and only the valid sentences of natural
languages - in other words, the notion of grammaticality. One objection
to this idea is that grammaticality in natural language is not a binary
notion but a gradient one. Does this imply that grammars are useless and
should be replaced by probabilistic models of language?

In our view, not. We should just abandon the idea that the purpose of
grammars is to define grammaticality. Grammars should rather be seen as
ways of structuring data. Even statistical language models need
grammars, often just very simple ones, For instance, a grammar might
have the sequences of strings as its only structure. But we want to show
how richer grammatical structures - often together with statistics - are
a useful model that can for instance compensate for sparse data. We will
also discuss the wide-spread beliefs that hand-written grammars cannot
be robust and that they require too much work to be useful in practice.

### Charalambos Themistocleous, University of Gothenburg and Princeton University: Learning Linguistic Categories from Acoustic Structure: Towards a Speech Time Frequency Model

[Linguistic information is hard-coded in speech signal. By analysing
specific acoustic properties, such as vowel formants and fundamental
frequency, acoustic models of speech production aim to elicit this
information. I summarise evidence from my research on speech processing
and argue that these acoustic models provide only incomplete spectral
description and under-represent interactions between acoustic
properties. Consequently, they do not do justice to the complex
linguistic information encoded in speech. I then propose a model for
speech processing based on parameterised resonant signal elements and an
algorithm that analyses vowel samples based on the proposed model. The
algorithm provides a rich description of any given segmented vowel
sample by using a large number of resonant elements with parameters that
are chosen to accurately capture the time-frequency structure of the
vowel. The parameters are then used to calculate probabilities. An
application of the model successfully classifies vowels, stress, and
speech variety. This model is an improvement over methods that only use
a small number of formants to describe vowels, has the potential to be
used in automatic speech recognition, and is promising for use in
applications of forensic linguistics, and speech pathology. Finally, I 
discuss an ongoing work that aims to extend the model for the analysis of 
prosody.
