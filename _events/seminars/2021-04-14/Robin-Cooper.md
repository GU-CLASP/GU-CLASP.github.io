---
date: 2021-04-14
title: "Types and probability: Implementing probabilistic TTR"
lecturer: "Robin Cooper"
duration: "2 hours"
venue: "Gothenburg"
slides: typprob-slides.pdf 
---
This talk is a report on work in progress on implementing probabilistic TTR (https://www.aclweb.org/anthology/2015.lilt-10.4/) as an extension of the Python implementation pyttr (see the Python notebook https://github.com/GU-CLASP/pyttr/blob/master/probttr.ipynb).

Pyttr is an attempt to implement TTR in a way that will be useful for agents like robots which are observing and negotiating a changing environment. Two key aspects of this are: Dynamic processing -- witnesses can be added to types during computation (meant to be useful for agents observing new objects and making judgements about their types) and witness conditions can be added to a type during computation (meant to be useful for agents engaging in a learning process and refining the definition of a type on the fly). Types as an interface to an extra-typetheoretical world -- witness conditions for types can call on arbitrary external modules which need not be implemented in pyttr, for example, classifiers created by standard machine-learning techniques.

In non-probabilistic pyttr, objects which have been judged to be witnesses for a type are stored in a witness cache for that type. In probabilistic pyttr objects which have been judged for a type are stored in the witness cache paired together with a probability interval, [n,m], indicating that the object is judged to be of the type with minimum probability n and maximum probability m. One interesting consequence of this is that we can store a negative judgement of an object (i.e. paired with the interval [0,0]). Also "Don't know" results ([0,1]) can be returned (since all probabilities are between 0 and 1).

In the talk I will go through some of the examples in the probttr notebook cited above and discuss some of the questions that this approach raises -- to which I suspect the audience may have different answers than those which I have assumed in the implementation...
