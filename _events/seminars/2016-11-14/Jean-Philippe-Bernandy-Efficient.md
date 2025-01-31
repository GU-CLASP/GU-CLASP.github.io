---
date: 2016-11-14
title: "Efficient Parallel and Incremental Parsing of Practical Context-Free Languages"
lecturer: "Jean-Philippe Bernandy"
duration: "2 hours"
venue: "Gothenburg"
slides: ./1605218_jean-philippe_clasp.pdf
---



We present a divide-and-conquer algorithm for parsing context-free languages efficiently. Our algorithm is an instance of Valiant's (1975), who reduced the problem of parsing to matrix multiplications. We show that, while the conquer step of Valiant's is O(n3), it improves to O(log2 n) under certain conditions satisfied by many useful inputs.

One observes that inputs written by humans generally satisfy those conditions. Thus, there appears to be a link between the ability for a computer to efficiently parse an input in parallel and the ability for a human to comprehend such an input.




