---
presented_by: "Murathan Kurfali from RISE"
title: "Conflict Blindness: How LLMs Handle Contradictory Evidence"
type: seminar
date: 2026-06-03
time: 13:15-15:00
venue: Gothenburg University, Humanisten and online
address: Renströmsgatan 6, 412 55 Göteborg
room: J335
zoom: https://gu-se.zoom.us/j/67063108947?pwd=kPpjvMLCekxNTBVzq4uYP5gFZ6Y6vd.1 
slides: "kurfali_presentation.pdf"
---

## Abstract
Large language models are increasingly used to retrieve, summarize, and reason over large collections of text. Such systems are generally expected to take into account all relevant information provided in the context. But real-world contexts are rarely perfectly consistent: sources may disagree, information may be outdated, claims may be repeated unevenly, and multilingual evidence may point in different directions. This talk examines what happens when LLMs are asked to answer questions from contexts that contain explicitly conflicting information. I will present ongoing joint work with Robert Östling (SU) on what we call _conflict blindness_: the tendency of LLMs to ignore contradictions in the provided context and instead produce a single answer with confidence. Our work extends the classic “needle in a haystack” paradigm by inserting multiple mutually incompatible pieces of information into long documents. Across monolingual and multilingual settings, we show that models’ choices are systematically shaped by factors such as repetition, position, layout, surface form, and language. I will discuss what this reveals about long-context processing and retrieval-augmented generation, and outline ongoing work on evaluating and mitigating conflict blindness.
