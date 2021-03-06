# **Homework 1**
### Collaborators
* ### Prashil Bhimani
* ### Shayon Gupta
---
### Question 1 : Define the term essential difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an essential difficulty.

### Answer:

Brooks analyzes the problems in software engineering in the paper, "No Silver Bullet: Essence and Accidents of Software Engineering". He then goes on to categorize them into two categories, essential difficulties and accidental difficulties. He defines essential difficulties as the difficulties that are inherent in the nature of software.

He explains that a software is a complex system with many "interlocking concepts", like, data sets, relationships among data items, algorithms, and invocations of functions. This lends every piece of software a unique yet abstract identity. He explains that many elements of a software maybe similar to another software, yet the outcome of the amalgamation of that unique combination yields a unique identity for every software. This complex set of interlocking yields an inherent set of difficulties, the essential difficulties.

Brooks explains that the hard part of building software is the specification, design and testing of the conceptual construct in the software. He explains that errors due to humane mistakes like syntactical error or other "accidental errors" are "fuzz" compared with the conceptual or essential errors in most systems.

This is the reason he believes that building a software will always be very difficult and there is "No Silver Bullet" to solve these problems.

Example: Due to "invisibility" of the structure needed to craft a software, a client might want a product that is very difficult to implement. For this example let us consider a product that needs language modelling abilities using recurring neural networks. The client thinks modeling a language is very easy and is willing to pay a fraction of the cost of the product (as the client does not understand the underlying "complexity" of the product he wants). This leads to essential difficulties for the software engineers.

### Question 2 : Define the term accidental difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an accidental difficulty.

### Answer:

Brooks in his paper talks about the various difficulties that has plagued the software industry but has yielded no solution (of an order of magnitude improvement in productivity, reliability and simplicity). Further categorizing the difficulties into two parts namely essential and accidental difficulties, he states that accidental difficulties are the difficulties that most of the solutions are targeting and that isn't enough to demystify the woes of software engineering.

According to Brooks, accidental difficulties are not inherent to the process of software development but comes as a part of solving essential difficulties. In his purview, accidental difficulties can be eliminated with targeted solutions. However, no solution is 100% accurate, hence, it is safe to say each solution conceives its own set of difficulties. Thus, there is no panacea available!

Brooks proceeds to present multiple examples of solutions that solved accidental difficulties. One of the most prominent being high level programming languages.  Writing in lower level languages (especially the dreaded machine level code) that were prone to syntax errors due to laborious syntactical formalities which newer languages like Java, Python and C++ has compacted in effect alleviating the mentioned problems.

Example: Syntax errors are a type of accidental difficulty as it is not inherent to the process of software development but is caused by human errors. Current set of high level programming languages are not immune to all accidental difficulties, but they are definitely reduced as compared to the older low level programming languages.



### Question 3 : List and briefly describe the four essential difficulties of developing software systems that Brooks identifies. Provide additional examples of each type of the four essential difficulties.

### Answer:

Brooks lists the essential difficulties in developing software systems as: *complexity, conformity, changeability, and invisibility.*

**Complexity.** Software systems are inherently composed of many units, each unit is composed of thousands of lines of code by itself. This makes the smallest of software systems extremely complex, as no two systems are identical in spite of having (sometimes) similar units. This is very different from other human constructs like bridges, buildings, factories, automobiles etc. which share similar characteristics to varying degrees.

Brooks states that digital computers themselves are incredibly complex because of the sheer number of states it possesses. Software systems further multiplies the number of states, hence increasing the degree of an already complex system. Moreover, scaling software not only increases the number of functional elements of a software but also how they interact wit each other. Non-linear interaction within such systems ensure the complexity rises much faster than a simple linear rise.

Unlike other branches of science which reduce complexities by impeding necessary details the nature software engineering prohibits such an effort as software systems without the necessary details will lose its function. Thus, complexity is an inherent nature of software and hence it is considered an essential difficulty.

Examples:
1. When a large piece of software system has many engineers working on it, there is a communication gap among team members unless proper version control is maintained.
2. Unforeseen complexity can lead to missed deadlines and escalation of software development cost.
3. Management task becomes difficult as overview of the system turns out to be diabolical.

**Conformity.** Software systems due to its sense of invisibility is considered to be extremely malleable, hence whenever the need to conform to a system arises the first target is the software. This is a major problem as sometimes the deemed conformity seeks arbitrary changes imposed by a superior who is oblivious about the complex cascade of changes that will be needed in the software ensure it "conforms" to the new demands.

Brooks points out that, in most cases, much complexity comes from conformation to other interfaces; this complexity cannot be simplified out by any redesign of the software alone. The most important issue is there is no way to plan for arbitrary changes. Hence, due to the nature of software this is an inherent difficulty (an essential difficulty).

Examples:
1. A client has a change in management and decides to overhaul the systems they use. This overhaul comes with a change in the companies they work with and hence they demand the existing software needs to be updated with a new set of APIs ensuring their new partners become a part of the software.
2. A new law is passed which imposes a new set of security conformities that every software must abide by. This leads to a race against time to update the security protocols within the set deadline.

**Changeability.** Software systems are constantly required to be changed. Other creations of human beings like cars, buildings etc. are also subject to change. However in most case changes are confined to the superseding models or updates to the current model which is launched as a separate entity.

The most challenging difficulty however is the fact that everyone sees and understands the cost involved with remodeling a building. In case of software unless the client has knowledge about software (which is rarely the case) it does not receive the same amount of consideration, as the amount of work required to make the necessary change is unfathomable by the client.

Moreover, in a project the functionality is what undergoes the change and software forms an integral part of that overhaul. Thus the pressure on software changes are greater than other aspects of the project.

Brooks explains, "The software product is embedded in a cultural matrix of applications, users, laws, and machine vehicles. These all change continually, and their changes inexorably force change upon the software product."

Example:
1. The client is impressed by the functionality and user-friendly behavior of a word processing software. Now the client wants the software to handle graphics to enable embedding pictures and videos in a document. This includes a vast number of changes that is beyond the periphery of the client's understanding of software systems.

**Invisibility.** Software, by nature, is invisible and unvisualizable. Unlike building blueprints where the exact dimension of the final product can be scaled, visualized and perceived, in the software world such a comprehensible mechanism does not exist. For instance UML diagrams in theory can break software down into fundamental units, this itself encompasses 13 different types of diagrams as software system so indeed require 13 different aspects to be represented!

Thus to visualize the simplest of software systems a cluttered diagram of overlapping graphs spoils the effort. This makes visualization a futile exercise when it comes to software systems hence impairing the use of the powerful visual skills of human beings.

Example:
1. When a client decides to understand the working of a software, his senses are impaired because he does not understand how the software works. This is due to the lack of visualization or invisibility of the complex constructs within a system. Hence he proposes a change or undermines the complexity, the problem is rooted in this essential difficulty, "invisibility". 

### Question 4 : Define what Brooks means by a silver bullet and reconstruct his argument as to why he believes there is no silver bullet for software engineering.

### Answer:

Brooks defines the silver bullet as:
> There is no single development, in either technology or in management technique, that by itself promises even one order-of-magnitude improvement in productivity, in reliability, in simplicity.

In other words, any advancement in technology to build software or managing the complicated process of software engineering will not lead to an order of magnitude increase in either the output or the quality of the software or the difficulties faced in the process of crafting the software.

Brooks believes that most of the advancements like high level languages, OOPs concepts, AI, development environments etc. are tackling the accidental difficulties and not essential difficulties. Considering a moonshot metric, even if we consider that 90% of all the difficulties are accidental difficulties and we come up with a perfect solution to achieve a 10-fold improvement Brooks believes that no solution is perfect and the new technology or solution will have its own issues. Moreover, realistically, accidental difficulties do not contribute to 90% of the overall difficulties. Hence, Brooks feels that achieving an order of magnitude increment in software engineering performance is not practicable now, or in the near future. Although he ends with a hint of bleak optimism and thus does not dismiss the future and the potential of inventions in software engineering.

### Question 5 : In lecture, software engineering's relationship to computer science was described by analogy by discussing the differences between a chemist (chemistry) and a chemical engineer (chemical engineering). Define software engineering and its relationship to computer science; make use of the chemist vs. chemical engineer analogy when answering this question.

### Answer:

Professor Anderson when using the analogy between a chemist and chemical engineer explained that one develops the science and the other engineers and implements the science in real world products. For instance a team of chemists can develop a world class graphene battery that will last longer than a lithium ion battery. However, engineering a real world product from this concept that can be mass produced requires years and years of engineering effort.

Similarly a computer scientist develops ideas and concepts that adheres to the laws of science, not necessarily something that can be used by the real world right away. A software engineer uses the concepts developed by the scientists to craft tools that can be used by the real world. This process of engineering differentiates what can be done in the laboratory to what is suitable and applicable for the real world. Thus, as explained by Professor Anderson, "Software Engineering is the application of scientific principles (conceived by Computer Scientists) in the context of practical constraints."

### Question 6 : In lecture, we discussed the importance of the following concepts to software engineers: abstractions, conversations, specification, translation, and iteration. Define each of these concepts as they are related to software engineering and discuss their importance.

### Answer : 

#### Abstraction 

Abstraction is the concept of concealing the innate complexity of a system with an additional layer. Software Engineering usually relies on multiple layers of abstraction. APIs are very good examples of abstraction. It hides the internal complexity of how the problem was solved and only provides an interface to solve the problem. Another example of abstraction is high level programming languages as they abstract the actual assembly level commands and provides with a neat interface in terms of high level syntax. Classes are also examples of abstractions (Abstraction is one of the key concepts in Object Oriented Programming).

This concept is integral in software engineering as it can break down the complexity of a large software. Hence, dividing it into small problems which can be tackled individually. Thus, the solution to those problems use a layer (or layers) to solve much larger problems. As stated in a blog by the developers of Git-tower, "One of the best practices of software development is to create internal API’s". 

#### Conversations

Conversations in software engineering is not just about 2 people talking, although that is also important, it is about conversations via code or specifications or any other means. It is very important to have a proper conversation (communication) to improve the quality of the product and make sure it meets the requirements it was made for. An important example of a software where employees engage in large scale communication is Linux where thousands of programmers communicate via the code or the feature request or the issue requests to solve it and provide a robust software that is used in various critical tasks. Conversation between the clients, developers, marketers and various other stake holders is the key to good software specifications and software quality.

#### Specification

Software are fairly complex systems and for large scale software development it is very important that there is no ambiguity in the specification of the exact purpose of the software and how it behaves under various conditions.

As Prof. Ken Anderson stated
> Everything in software engineering is specification. 

Leading from the actual requirements-
1. The way to implement it.
2. The software design.
3. The test cases which are required to test the software.
4. The actual implementation of test cases.
5. The type of software life cycle needed to solve the issue.

All the above come under specification. The code is also a kind of specification that will mention the actual implementation of how the problem will be solved.

#### Translation

Translation in software engineering pertains to modularity and atomicity. The concept of translation transpired to the act of translating the problem into smaller parts and then translating those parts to even smaller parts. This is continued until each part can be solved individually. This type of translation is basically "diving down" the levels of abstraction. Once the primary level of work is completed we translate it to perform secondary (upper tier) level of work and so on till the problem is not solved. Translation not only occurs in programming but also in specification where we translate one type of specification like the use case diagram to some other type of specification like the class diagram. The work of a software engineer is to translate various specifications and code so as to solve them.

#### Iteration

Iteration in software engineering is basically building the software in small parts and iterating over them repeatedly. Such small iterations make sure that the software is working at all times and any new feature or iteration is not breaking the software. Iterations are done till the task (in its entirety) is not complete. Iterations should be incorporated in everything software engineers do. This also helps in finding mistakes and solving them immediately. Every increment should be tested to ensure that there are no mistakes in any iteration. Moreover, running every iteration by the customer helps in clarifying every detail of the desired software.
