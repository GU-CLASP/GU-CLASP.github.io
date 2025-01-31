---
lecturer: "Stephen Clark, Head of ArtificiaI Intelligence, Quantinuum"
title: "Hybrid Recurrent Architectures for Quantum-Classical NLP"
type: seminar
date: 2023-09-06
duration: "2 hours"
venue: "Gothenburg and online"
slides: "Stephen Clark 6.9.2023.pdf"
---

Abstract
In this talk I will describe various recurrent architectures based around Parameterised Quantum Circuits (PQCs). A PQC is applied at each time step to produce a quantum state, and each application of the PQC is determined by an angle encoding of the corresponding word (via its classical word embedding). The quantum state can then be measured in order to produce a classical output. All the parameters of the hybrid model can be learned end-to-end using classical optimisers applied to some NLP task, in this case a standard sentiment analysis dataset. The models are trained and tested in simulation, with the potential to be run on real quantum hardware. Our experiments demonstrate encouraging performance compared to a classical RNN baseline.

Bio: Prior to joining Quantinuum as Head of AI, Stephen Clark spent 18 years working at UK universities, first as a postdoctoral researcher at the University of Edinburgh, then as a member of Faculty at the Universities of Oxford and Cambridge, including 4 years as a Tutorial Fellow at Keble College, Oxford. He has also been an Honorary Professor at Queen Mary University of London. From 2016 to 2021 he was a Senior Research Scientist at DeepMind in London. Stephen Clark holds an undergraduate degree in Philosophy from the University of Cambridge (Gonville and Caius College) and a PhD in Computer Science and Artificial Intelligence from the University of Sussex. Much of his research has been concerned with the syntactic and semantic analysis of text, which he currently investigates in the context of quantum computing.
