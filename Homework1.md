# **Homework 1**

### Question 1 : Define the term essential difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an essential difficulty.

### Answer:

Brooks analyzes the problems in software engineering in the paper, "No Silver Bullet: Essence and Accidents of Software Engineering". He then goes on to categorise them into two ctegories, essential difficulties and accidental difficulties. He defines essential difficulties as the difficulties that are inherent in the nature of software.

He explains that a software is a complex system with many "interlocking concepts", like, data sets, relationships among data items, algorithms, and invocations of functions. This lends every piece of software a unique yet abstract identity. He explains that many elements of a software maybe similar to another software, yet the outcome of the amalgamation of that unique combination yields a unique identity for every software.

Brooks explains that the hard part of building software is the specification, design and testing of the conceptual construct in the software. He explains that errors due to humane mistakes like syntactitcal error or other "accidental errors" are "fuzz" compared with the conceptual or essential errors in most systems.

This is the reason he believes that building a software will always be very difficult and there is "No Silver Bullet" to solve these problems.

Examples: Due to "invisibility", a client might want a product that is very difficult to implement. For this example let us consider a product that needs language modelling abilities using recurring neural networks. The client thinks modeling a language is very easy and is willing to pay a fraction of the cost of the product (as the client does not understand the underelying "complexity" of the product he wants).

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

### Question 5> In lecture, software engineering's relationship to computer science was described by analogy by discussing the differences between a chemist (chemistry) and a chemical engineer (chemical engineering). Define software engineering and its relationship to computer science; make use of the chemist vs. chemical engineer analogy when answering this question.

### Answer:

