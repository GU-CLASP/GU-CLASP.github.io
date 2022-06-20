---
lecturer: "Yuval Marton from University of Washington"
title: "Is more better? Is better always better? Where’s the learning?\nThe baffling case of computational thematic fit"
type: seminar
date: 2022-05-11
duration: "2 hours"
venue: "Gothenburg and Online"
slides: Yuval Marton 11.5.2022.pdf
---

Abstract:

Modeling thematic fit (a verb–argument compositional semantics task) currently requires a very large burden of labeled data, and yet the results are mediocre. How can we improve, given the limitations of the current text-based approach and evaluation datasets? Can we improve the (labeled) data? Can we learn from peeking into the model and the learned representation?  

To examine the labeled data direction, we modify the training dataset. The training dataset used by the previous state-of-the-art is a linguistically machine-annotated large corpus, which, due to its size, consists of outputs from mediocre but fast taggers. We replace these annotation layers with output from higher-quality, more modern taggers. We compare the old and new corpus versions’ impact on verb–argument fit modeling tasks, using a high-performing neural approach similar to the previous state-of-the-art. We discover that higher annotation quality dramatically reduces our data requirement while demonstrating better supervised predicate-argument classification. 

But in applying the model to psycholinguistic tasks (thematic fit) outside the training objective, we see clear gains at scale, but only in one of two thematic fit estimation tasks, and no clear gains on the other. We also see that quality improves with training size, but perhaps plateauing or even declining in one task. Baffling. No less baffling is that random word embeddings perform as well as pre-trained embeddings. Why? We explore what settings allow for this and examine where most of the learning is encoded: the word embeddings, the semantic role embeddings, or “the network” (model). We find nuanced answers, depending on the task and its relation to the training objective. We replicate previous studies while modifying certain role representation details, and set a new state-of-the-art in event modeling, using a fraction of the data. We also make the new corpus version public.

And leave you baffled.

Bio:

Yuval Marton, PhD, is a computational linguist and artificial intelligence (AI) expert, active in both the industry (IBM, Microsoft, and most recently in the finance industry: Morgan Stanley and Bloomberg) and academia (affiliate professor at University of Washington; industry mentor at Columbia University, UCSC and UMass).  Dr. Marton’s experience spans lexical semantics, paraphrasing, semantic role labeling, parsing, statistical machine translation, information retrieval (search engine result ranking, “big data”), and dialog systems (a.k.a. personal digital assistants or chatbots). He has been particularly interested in adapting machine learning (including deep learning) methods for natural language processing and understanding (NLP/NLU) – and using linguistically informed design to make such methods more effective and informative. More recently he has been interested also in technical mentoring for best practices in data science, and in increasing awareness to various forms of bias in NLP/AI, and how to develop and use these disruptive technologies ethically, given their substantial potential social impact for good or bad.  Dr. Marton co-organized several NLP workshops, mostly in top-tier conferences such as ACL; served as the publication chair of several NLP conferences (EMNLP and *SEM); and delivered a tutorial session: “On-Demand Distributional Paraphrasing” at the NAACL-HLT conference.  He received his Ph.D. in Linguistics from University of Maryland in 2009, concentrating on computational linguistics, with a Neuroscience and Cognitive Science (NACS) Program Certificate.  He received his Masters in Computer Science from NYU/Poly in 2004.
