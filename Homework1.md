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

**Complexity.** Software entities are more complex for their size than perhaps any other human construct because no two parts are alike (at least above the statement level). If they are, we make the two similar parts into a subroutine—open or closed. In this respect, software systems differ profoundly from computers, buildings, or automobiles, where repeated elements abound.

Digital computers are themselves more complex than most things people build: They have very large numbers of states. This makes conceiving, describing, and testing them hard. Software systems have orders-of- magnitude more states than computers do.

Likewise, a scaling-up of a software entity is not merely a repetition of the same elements in larger sizes, it is necessarily an increase in the number of different elements. In most cases, the elements interact with each other in some nonlinear fashion, and the complexity of the whole increases much more than linearly.

The complexity of software is an essential property, not an accidental one. Hence, descriptions of a software entity that abstract away its complexity often abstract away its essence. For three centuries, mathematics and the physical sciences made great strides by constructing simplified models of complex phenomena, deriving properties from the models, and verifying those properties by experiment. This paradigm worked because the complexities ignored in the models were not the essential properties of the phenomena. It does not work when the complexities are the essence.

Many of the classic problems of developing software products derive from this essential complexity and its nonlinear increases with size. From the complexity comes the difficulty of communication among team members, which leads to product flaws, cost overruns, schedule delays. From the complexity comes the difficulty of enumerating, much less understanding, all the possible states of the program, and from that comes the unreliability. From complexity of function comes the difficulty of invoking function, which makes programs hard to use. From complexity of structure comes the difficulty of extending programs to new functions without creating side effects. From complexity of structure come the unvisualized states that constitute security trapdoors.

Not only technical problems, but management problems as well come from the complexity. It makes overview hard, thus impeding conceptual integrity. It makes it hard to find and control all the loose ends. It creates the tremendous learning and understanding burden that makes personnel turnover a disaster.

**Conformity.** Software people are not alone in facing complexity. Physics deals with terribly complex objects even at the fundamental particle level. The physicist labors on, however, in a firm faith that there are unifying principles to be found, whether in quarks or in unified field theories. Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary.

No such faith comforts the software engineer. Much of the complexity that he must master is arbitrary complexity, forced without rhyme or reason by the many human institutions and systems to which his interfaces must conform. These differ from interface to interface, and from time to time, not because of necessity but only because they were designed by different people, rather than by God.

In many cases, the software must conform because it is the most recent arrival on the scene. In others, it must conform because it is perceived as the most conformable. But in all cases, much complexity comes from conformation to other interfaces; this complexity cannot be simplified out by any redesign of the software alone.

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
