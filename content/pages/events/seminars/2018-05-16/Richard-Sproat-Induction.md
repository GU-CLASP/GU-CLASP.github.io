---
date: 2018-05-16
title: "Induction of Finite-State Covering Grammars for Text Normalization (joint work with Kyle Gorman)"
lecturer: "Richard Sproat"
duration: "2 hours"
venue: "Gothenburg"
slides: ./1689827_gothenburg2.pdf
---



In this talk I will introduce our work on applying neural methods to the problem of text normalization. Though the performance of the system overall is good, it is prone to what we term "silly errors", where for example, "2mA" is read as "two million liters". We have found that finite-state covering grammars are useful for mitigating such errors, and I will discuss induction of such covering grammars from data. I start with presenting our work on inducing grammars for number names (123 verbalized as one hundred (and) twenty three). This work draws inspiration from the (small) linguistics literature on number names, and our method allows one to train finite-state transducers with small amounts of data (a few hundred examples). I will compare the performance with that of an RNN trained on orders of magnitude more data. I will then report on our ongoing work on inducing grammars for a wider range of text normalization problems.




