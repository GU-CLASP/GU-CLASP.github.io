---
lecturer: "Ryan Cotterell, University of Zürich"
title: "Two New Insights into Beam Search"
type: seminar
date: 2021-11-24
duration: "2 hours"
venue: "Gothenburg and Online"
---

Abstract: “As a simple search heuristic, beam search has been used to decode models developed by the NLP community for decades. Indeed, it is noteworthy that beam search is one of the few NLP algorithms that has stood the test of time: It has remained a cornerstone of NLP systems since the 1970s (Reddy, 1977). As such, beam search became the natural choice for decoding neural probabilistic text generators—whose design makes evaluating the full search space impossible While there is no formal guarantee that beam search will return—or even approximate—the highest-scoring candidate under a model, it has repeatedly proven its merit in practice and, thus, has largely been tolerated—even embraced—as NLP’s go-to search heuristic. This talk further embraces beam search. We discuss two novel formal insights into beam search. In the first act, we discuss an algorithmic advance that allows beam search to be prioritized, i.e. it returns the best hypothesis (modulo the beam size) first. Our algorithmic extension yields a Dijkstra-ified beam search that provably emulates standard beam search. In the second act, we draw a connection between the uniform information density hypothesis from cognitive science and beam search’s efficacy as a search heuristic. We offer a linguistic reason why beam search may work so well in practice even though, as an approximation to the argmax, it may be arbitrarily bad. The work described in this talk is described in publications at TACL (20200 and EMNLP (2020) and won an honorable mention for best paper at the latter.”

 

Bio:
Ryan Cotterell completed his undergraduate degree at Johns Hopkins University in Cognitive Science (with focal areas in Linguistics and Computational Methods) under the tutelage of Colin Wilson. He was then recruited by Jason Eisner to do a Ph.D. in Computer Science at Johns Hopkins University where he was a member of the Center for Language and Speech Processing. He is currently a tenure-track assistant professor at ETH Zürich in the Department of Computer Science where he is a member of the Institut für maschinelles Lernen. He was previously a Lecturer at the Computer Laboratory at the University of Cambridge in the United Kingdom where he is still affiliated. He has also done research stints at Google AI, Facebook AI Research and the Ludwig Maximilian University of Munich.