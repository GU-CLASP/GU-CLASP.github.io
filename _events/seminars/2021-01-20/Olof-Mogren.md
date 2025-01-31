---
date: 2021-01-20
title: "Learned representations and what they encode"
lecturer: "Olof Mogren"
duration: "2 hours"
venue: "Gothenburg"
slides: mogren-clasp-seminar-2021-01(1).pdf
---

Learned continuous embeddings for language units was some of the first trembling steps of making neural networks useful for natural language processing (NLP), and promised a future with semantically rich representations for downstream solutions. NLP has now seen some of the progress that previously happened in image processing: the availability of increased computing power and the development of algorithms have allowed people to train larger models that perform better than ever. Such models also make it possible to use transfer learning for language tasks, thus leveraging large widely available datasets.

In 2016, Bolukbasi, et.al., presented their paper "Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings", shedding lights on some of the gender bias that was available in trained word embeddings at the time. Datasets obviously encode the social bias that surrounds us, and models trained on that data may expose the bias in their decisions. Similarly, learned representations may encode sensitive details about individuals in the datasets; allowing the disclosure of such information through distributed models or their outputs. All of these aspects are crucial in many application areas, not the least in the processing of medical texts.

Some solutions have been proposed to limit the expression of social bias in NLP systems. These include techniques such as data augmentation, representation calibration, and adversarial learning. Similar approaches may also be relevant for privacy and disentangled representations. In this talk, we'll discuss some of these issues, and go through some of the solutions that have been proposed recently to limit bias and to enhance privacy in various settings.
