# **Homework 1**
### Collaborators
* ### Prashil Bhimani
* ### Shayon Gupta
---
### Question 1 : Define the term essential difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an essential difficulty.

### Answer:

Brooks analyzes the problems in software engineering in the paper, "No Silver Bullet: Essence and Accidents of Software Engineering". He then goes on to categorise them into two ctegories, essential difficulties and accidental difficulties. He defines essential difficulties as the difficulties that are inherent in the nature of software.

He explains that a software is a complex system with many "interlocking concepts", like, data sets, relationships among data items, algorithms, and invocations of functions. This lends every piece of software a unique yet abstract identity. He explains that many elements of a software maybe similar to another software, yet the outcome of the amalgamation of that unique combination yields a unique identity for every software. This complex set of interlocking yields an inherent set of difficulties, the essential difficulties.

Brooks explains that the hard part of building software is the specification, design and testing of the conceptual construct in the software. He explains that errors due to humane mistakes like syntactitcal error or other "accidental errors" are "fuzz" compared with the conceptual or essential errors in most systems.

This is the reason he believes that building a software will always be very difficult and there is "No Silver Bullet" to solve these problems.

Example: Due to "invisibility" of the strucutre needed to craft a software, a client might want a product that is very difficult to implement. For this example let us consider a product that needs language modelling abilities using recurring neural networks. The client thinks modeling a language is very easy and is willing to pay a fraction of the cost of the product (as the client does not understand the underelying "complexity" of the product he wants). This leads to essential difficulties for the software engineers.

### Question 2 : Define the term accidental difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an accidental difficulty.

### Answer:

Brooks in his paper takes about the various difficulties that has led to no solution that will lead to a magnitude if improvement in its productivity, reliability and simplicity. Further categorizing the difficulties in 2 parts namely essential and accidental difficulties he states that accidental difficulties are the one that most of the solutions are attacking and it won't be enough just to solve them.

According to Brooks, accidental difficulties are the one which are not inherent to the process of software development but are a part of a solution that is proposed to solve it. In the view of Brooks, accidental difficulties can be eliminated if we choose a different solution that will solve that accidental difficulty. But as no solution is 100% accurate it is safe to say that a new solution will lead to new accidental difficulties. So, any solution is not capable to solve all accidental difficulties.

In his paper Brooks has given multiple examples of solutions that solved accidental difficulties. One of the most prominent being high level programming languages. It was one the major accidental difficulties. Writing in ancient languages that were prone to many syntax errors and had verbose syntax for many functionalities which newer languages like Python and C++ has made to be be compact and less prone to errors. Syntax errors are a type of accidental difficulty as it is not inherent to the process of software development but is caused by human errors. Current set of high level programming languages are also not immune to the accidental difficulties but they are definitely reduced as compared to the ancient low level programming languages.


### Question 3> List and briefly describe the four essential difficulties of developing software systems that Brooks identifies. Provide additional examples of each type of the four essential difficulties.

### Answer:

Brooks lists the essential difficulties in developing software systems as: *complexity, conformity, changeability, and invisibility.*

**Complexity.** Software systems are inherently composed of many units, each unit is composed of thousands of lines of code by itself. This makes the smallest of software systems extremely complex, as no two systems are identical inspite of having (somtimes) similar units. This is very different from other human contructs like bridges, buildings, factories, automobiles etc. which share similar characteristics to varying degrees.

Brooks states that digital computers themselves are incredibly complex because of the sheer number of states it possesses. Software systems further multiplies the number of states, hence incresing the degree of an already complex system. Moreover, scaling software not only increases the number of functional elemetns of a software but also how they interact wit each other. Non-linear interaction within such systems ensure the complexity rises much faster than a simple linear rise.

Unlike other branches of science which reduce complexities by impeding necessary details the nature software engineering prohibits such an effort as software systems without the necessary details will lose its function. Thus, complexity is an inherent nature of software and hence it is considered an essential difficulty.

Examples:
1. When a large piece of software system has many engineers working on it, there is a communication gap among team members unless proper version control is maintained.
2. Unforeseen complexity can lead to missed deadlines and escalation of softwares development cost.
3. Management task becomes difficult as overview of the system turns out to be diabolical.

**Conformity.** Software systems due to its sense of invisibility is considered to be extremely malleable, hence whenever the need to conform to a system arises the first target is the software. This is a major problem as sometimes the deemed conformity seeks arbitrary changes imposed by a superior who is oblivious about the complex cascade of changes that will be needed in the software ensure it "conforms" to the new demands.

Brooks points out thay, in most cases, much complexity comes from conformation to other interfaces; this complexity cannot be simplified out by any redesign of the software alone. The most important issue is there is no way to plan for arbitrary changes. Hence, due to the nature of software this is an inherent difficulty (an essential difficulty).

Examples:
1. A client has a change in management and decides to overhaul the systems they use. This overhaul comes with a change in the companies they work with and hecne they demand the existing software needs to be updated with a new set of APIs ensuring their new partners become a part of the software.
2. A new law is passed which imposes a new set of security conformities that every software must abide by. This leads to a race against time to update the security protocols within the set deadline.

**Changeability.** The software entity is constantly subject to pressures for change. Of course, so are buildings, cars, computers. But manufactured things are infrequently changed after manufacture; they are superseded by later models, or essential changes are incorporated into later-serial-number copies of the same basic design. Call-backs of automobiles are really quite infrequent; field changes of computers somewhat less so. Both are much less frequent than modifications to fielded software.

In part, this is so because the software of a system embodies its function, and the function is the part that most feels the pressures of change. In part it is because software can be changed more easily—it is pure thought-stuff, infinitely malleable. Buildings do in fact get changed, but the high costs of change, understood by all, serve to dampen the whims of the changers.

All successful software gets changed. Two processes are at work. First, as a software product is found to be useful, people try it in new cases at the edge of or beyond the original domain. The pressures for extended function come chiefly from users who like the basic function and invent new uses for it.

Second, successful software survives beyond the normal life of the machine vehicle for which it is first written. If not new computers, then at least new disks, new displays, new printers come along; and the software must be conformed to its new vehicles of opportunity.

In short, the software product is embedded in a cultural matrix of applications, users, laws, and machine vehicles. These all change continually, and their changes inexorably force change upon the software product.

**Invisibility.** Software is invisible and unvisualizable. Geometric abstractions are powerful tools. The floor plan of a building helps both architect and client evaluate spaces, traffic flows, views. Contradictions and omissions become obvious. Scale drawings of mechanical parts and stick-figure models of molecules, although abstractions, serve the same purpose. A geometric reality is captured in a geometric abstraction.

The reality of software is not inherently embedded in space. Hence, it has no ready geometric representation in the way that land has maps, silicon chips have diagrams, computers have connectivity schematics. As soon as we attempt to diagram software structure, we find it to constitute not one, but several, general directed graphs superimposed one upon another. The several graphs may represent the flow of control, the flow of data, patterns of dependency, time sequence, name-space relationships. These graphs are usually not even planar, much less hierarchical. Indeed, one of the ways of establishing conceptual control over such structure is to enforce link cutting until one or more of the graphs becomes hierarchical [1].

In spite of progress in restricting and simplifying the structures of software, they remain inherently unvisualizable, and thus do not permit the mind to use some of its most powerful conceptual tools. This lack not only impedes the process of design within one mind, it severely hinders communication among minds.

### Question 4 : Define what Brooks means by a silver bullet and reconstruct his argument as to why he believes there is no silver bullet for software engineering.

### Answer:

Brooks define the silver bullet as:
> There is no single development, in either technology or in management technique, that by itself promises even one order-of-magnitude improvement in productivity, in reliability, in simplicity.

In other words, any advancement in technology to build software or managing the complicated process of software engineering will not lead to 10-fold increase in either the output of the software or the quality or the reduction in its complexity. 

Brooks believe that most of the advancements like high level languages, OOPs concepts, AI, development environments etc. are attacking the accidental difficulties and not essential difficulties. And supposing even if 90 % of all the difficulties are accidental difficulties and we come up with a perfect solution to achieve a 10-fold improvement Brooks believe that no solution is perfect and any new technology or solution will have its own issue and that accidental difficulties do not contribute to 90% of the overall difficulties. Hence Brooks feels to achieve a revolutionary 10-fold increase is not achievable and thus there is no silver bullet.

### Question 5 : In lecture, software engineering's relationship to computer science was described by analogy by discussing the differences between a chemist (chemistry) and a chemical engineer (chemical engineering). Define software engineering and its relationship to computer science; make use of the chemist vs. chemical engineer analogy when answering this question.

### Answer:

### Question 6 : In lecture, we discussed the importance of the following concepts to software engineers: abstractions, conversations, specification, translation, and iteration. Define each of these concepts as they are related to software engineering and discuss their importance.

### Answer : 

#### Abstraction 

Abstraction is creating a layer of complexity which is easy for the user to understand hiding the underlying complexity of the system. There are multiple layers of abstraction on which software engineering takes place. API’s are very good examples of abstraction. It hides the internal complexity of how the problem was solved and only provides with an interface to solve the problem. Another very good example of abstraction is high level programming languages as they abstract the actual assembly level commands and provides with a neat interface in terms of high level syntax. Classes are also examples of abstractions (So basically the whole Object Oriented Programming)

Abstraction is important in software engineering as it can break down the complexity of a large software to divide it into small problems which can be individually tacked and the solution to those problems used as a layer to solve bigger problems. As stated in a blog by the developers of Git-tower that one of the good practices of software development is to create internal API’s. 

#### Conversations

Conversations in software engineering is not just about 2 people talking, although it is very important, it is also about conversations via code or specifications or any other means. It is very important to have a proper conversation to improve the quality of the product and make sure it meets the requirements it was made for. An important example of software which employees large scale communication is Linux where thousands of programmers communicate via the code or the feature request or the issue requests to solve it and provide a robust software that is used in various critical tasks. Conversation between the clients, developers, marketers and various other stake holders is the key to good software specifications and software quality.

#### Specification

Softwares are fairly complex systems and for large scale software development it is very important that there is no ambiguity in the specification of the exact purpose of the software and how it behaves under various conditions. 

As Prof. Ken Anderson stated
> Everything in software engineering is specification. 

Leading from the actual requirements, the way to implement it, the software design, the test cases which are required to test the software, the actual implementation of test cases, the type of software life cycle needed to solve the issue all comes under specification. The code is also a kind of specification that will mention the actual implementation of how the problem will be solved.

#### Translation

Translation in software engineerning is to transalte the problem into smaller parts and then transalating those parts to even smaller parts till then can be solved individually. This type of transaltion is bascially diving down the level of absractions. Once the smaller level work are done we then transalte it to perfom higher level of work and so on till the problem is not solved. Translation not only occurs in programming but also in specification where we transalate one type of specification like the use case diagram to some other type of specification like the class diagram. The work of software engineer is to transalte various specifications and code so as to solve them.

#### Iteration

Iteration in software engineering is basically building the software in small parts and iterating it repeatedly. Such small iterations make sure that the software is working and so that any new feature or iteration added is not breaking the software. Iterations are done till the task is not complete. Iterations should be incorporated in everything software engineers do. This also helps in finding mistakes and solving them immediately. Every increment should be tested so that we make sure there are no mistakes in any iteration. Iterations in specifications and passing the iterations via your customer help in clarifying every detail of the software.
