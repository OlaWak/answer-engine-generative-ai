// data/cs3307.ts
export type Question = {
  question: string;
  code?: string;             
  choices: string[];
  correctAnswer: string;
  image?: string;
  category: string; // NEW
};

const cs3307: Question[] = [
{ category: 'PastExams',
    question: 'In C++, a non-null pointer always “points to” data allocated on the heap.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'If a variable i is declared as:\nconst int i = 0;\nthen the value of i cannot be changed in subsequent code.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'The syntax const int *bob indicates that bob is a:',
    choices: [
      'Regular pointer to regular int type',
      'Constant pointer to regular int type',
      'Regular pointer to constant int type',
      'Constant pointer to constant int type'
    ],
    correctAnswer: 'Regular pointer to constant int type'
  },
{ category: 'PastExams',
    question: 'Under what circumstances should you declare a function as const?',
    choices: [
      'When the function modifies only the object’s member data',
      'When you want to call the function on references to objects of that class',
      'When the function does not modify *this',
      'When the function creates no local variables',
      'None of the above'
    ],
    correctAnswer: 'When the function does not modify *this'
  },
{ category: 'PastExams',
    question: 'Space is always allocated on the stack when:',
    choices: [
      'new is invoked',
      'An assignment statement is executed',
      'A function is called',
      'A local object variable is modified',
      'None of the above'
    ],
    correctAnswer: 'A function is called'
  },
{ category: 'PastExams',
    question: 'Space is always allocated on the heap when:',
    choices: [
      'new is invoked',
      'A local object variable is modified',
      'An object parameter is passed by reference',
      'A constructor is called',
      'None of the above'
    ],
    correctAnswer: 'new is invoked'
  },
{ category: 'PastExams',
    question: 'What will be the output of the following code snippet?',
    image: '/data/imgs/img1.png',
    choices: [
      '4 5 9 44',
      '4 5 4 5',
      '9 5 9 44',
      '9 44 9 44',
      'The snippet will not compile'
    ],
    correctAnswer: '9 44 9 44'
  },
{ category: 'PastExams',
    question: 'Which of the following statements about the class/type T must be true in order for the function to compile and run?',
    image: '/data/imgs/img2.png',
    choices: [
      'It must be some kind of numeric type',
      'It must have the < operator defined',
      'It must have the [] access operator defined',
      'All of the above',
      'None of the above'
    ],
    correctAnswer: 'None of the above'
  },
{ category: 'PastExams',
    question: "In C++, the destructor for an object is always called when the object is destroyed.",
    choices: ["True", "False"],
    correctAnswer: "True"
  },
{ category: 'PastExams',
    question: "In C++, only operations that are declared to be virtual can be overridden in derived classes.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
{ category: 'PastExams',
    question: "All member functions in a C++ class have a this pointer.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
{ category: 'PastExams',
    question: "The story points of a user story:",
    choices: [
      "Have a work-hours equivalent defined specifically in the user story specifications",
      "Cannot change once set",
      "Are used to indicate the approximate size and complexity of a story",
      "Are estimated by the customer",
      "None of the above"
    ],
    correctAnswer: "Are used to indicate the approximate size and complexity of a story"
  },
{ category: 'PastExams',
    question: "In a UML class diagram, there can never be more than one association or relationship between any two classes in the diagram.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
{ category: 'PastExams',
    question: "Which of the following statements is false?",
    choices: [
      "Design principles define guidelines for “good” code",
      "Extensibility is a trait of well-designed software",
      "In specific coding situations, design patterns should be applied as they follow good design and make code more readable to other developers",
      "Low coupling and high cohesion can go together",
      "All of the above statements are true, not false"
    ],
    correctAnswer: "All of the above statements are true, not false"
  },
{ category: 'PastExams',
    question: "Why does the Interface Segregation Principle aim to avoid fat interfaces?",
    choices: [
      "High level modules should not depend on lower level modules, because higher level interfaces are less likely to change",
      "Because a fat interface prevents derived classes from being used as if they were the interface class",
      "While fat interfaces reduce coupling between the subclasses and the interface, the large interface becomes difficult to use",
      "Any class inheriting the interface must provide an implementation for all interface functions, which may be empty or meaningless",
      "None of the above"
    ],
    correctAnswer: "Any class inheriting the interface must provide an implementation for all interface functions, which may be empty or meaningless"
  },
{ category: 'PastExams',
    question: "Which of the following are true about a successful implementation of the Singleton design pattern?",
    choices: [
      "It relies on public constructors",
      "It must use the keyword static",
      "It ensures that exactly one copy of the object always exists during execution",
      "It prohibits refinement through subclassing",
      "None of the above"
    ],
    correctAnswer: "It must use the keyword static"
  },
{ category: 'PastExams',
    question: "Which of the following statements about the Decorator pattern are true?",
    choices: [
      "It can be used to add and remove behaviour dynamically at run time",
      "It is still viewed logically as a single unit, regardless of the number of decorator layers applied",
      "It works by wrapping one object inside another with the same interface",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "All of the above"
  },
{ category: 'PastExams',
    question: "Creational design patterns:",
    choices: [
      "Are all based on some sort of factory pattern",
      "Are used to encapsulate the creation of objects",
      "Are only useful when constructors are statically dispatched",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "Are used to encapsulate the creation of objects"
  },
{ category: 'PastExams',
    question: "The Adapter pattern:",
    choices: [
      "Can be implemented in C++ using multiple inheritance",
      "Can be implemented in C++ without using multiple inheritance",
      "Uses an adapter object to translate requests to an existing interfaces",
      "Both a) and c) are true",
      "All of the above are true"
    ],
    correctAnswer: "Both a) and c) are true"
  },
{ category: 'PastExams',
    question: "The Builder pattern is used to:",
    choices: [
      "Create objects by merging classes with each other",
      "Control the structure of complex, hierarchical class relationships, by building up from the bottom",
      "Control the creation of objects where there are many constructors with long and complex parameter lists",
      "Create objects through a similar process of steps, but allow the actual representation to vary",
      "None of the above"
    ],
    correctAnswer: "Create objects through a similar process of steps, but allow the actual representation to vary"
  },
{ category: 'PastExams',
    question: 'The name C++ is derived from the ++ increment operator in C.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'Before being called C++, the language was originally referred to as C with Classes.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'The following is (are) true about C++.',
    choices: [
      'It is a dynamically typed language',
      'It allows dynamic dispatch of functions',
      'It allows inheritance',
      'It performs garbage collection',
      'More than one of the above statements are true'
    ],
    correctAnswer: 'More than one of the above statements are true'
  },
{ category: 'PastExams',
    question: 'The C++ language is a strict superset of C.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'Classes are mandatory in all valid C++ programs.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'A valid C++ program can have how many main() functions:',
    choices: ['0', '1', 'More than 1', 'All of the above are, in fact, valid'],
    correctAnswer: '1'
  },
{ category: 'PastExams',
    question: 'The following is the simplest statement in C++: \n;',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'In C++, a class and a struct are more-or-less equivalent, except for their default visibilities.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'Which of the following is an acceptable way for a function to exit in C++:',
    choices: [
      'The function executes a return statement, providing an appropriate value as necessary, depending on the function.',
      'The function reaches the end of the function body, which is only allowed in void functions or main().',
      'The function calls a system function that does not return (like exit()).',
      'All of the above',
      'None of the above'
    ],
    correctAnswer: 'All of the above'
  },
{ category: 'PastExams',
    question: 'In C++, the destructor for an object is always called when the object is destroyed.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'PastExams',
    question: 'Friendship between classes in C++ is:',
    choices: [
      'Both reciprocal and transitive',
      'Reciprocal but not transitive',
      'Transitive but not reciprocal',
      'Neither reciprocal nor transitive'
    ],
    correctAnswer: 'Neither reciprocal nor transitive'
  },
{ category: 'PastExams',
    question: 'Static member functions in C++ have a this pointer.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'Consider the following C++ code:\nWhat will be the output of the above code?',
    image: '/data/imgs/img3.png',
    choices: [
      'In Parent default constructor\nIn Parent default constructor\nIn Child default constructor\nIn Child destructor\nIn Parent destructor\nIn Parent destructor',
      'In Parent default constructor\nIn Child default constructor\nIn Parent default constructor\nIn Parent destructor\nIn Child destructor\nIn Parent destructor',
      'In Parent default constructor\nIn Child default constructor\nIn Child destructor\nIn Parent destructor',
      'In Parent default constructor\nIn Parent destructor\nIn Child default constructor\nIn Child destructor',
      'None of the above'
    ],
    correctAnswer: 'In Parent default constructor\nIn Parent default constructor\nIn Child default constructor\nIn Child destructor\nIn Parent destructor\nIn Parent destructor',
  },
{ category: 'PastExams',
    question: 'When overloading a function in C++, the definitions of the function must differ from each other by their:\n1. Name.\n2. Argument types.\n3. Number of arguments.\n4. Return type.\nWhich of the following combinations of statements from the above list is correct:',
    choices: [
      'Statement 1.',
      'Statements 2 and 3.',
      'Statements 1, 2, and 3.',
      'Statement 4.',
      'None of the above options are correct combinations.'
    ],
    correctAnswer: 'Statements 2 and 3.'
  },
{ category: 'PastExams',
    question: 'Which of the following statement(s) about user stories is/are correct:',
    choices: [
      'User stories are generated in a meeting with the client.',
      'They encourage deferring detail until later.',
      'They are intended to avoid “big design up front”.',
      'They should be independent and estimatable.',
      'All of the above statements are correct.'
    ],
    correctAnswer: 'All of the above statements are correct.'
  },
{ category: 'PastExams',
    question: 'When considering the use of aggregation or composition associations in UML, which of the following statements are true for the case of aggregation:',
    choices: [
      'An object comprised of many components owns those components.',
      'Components cannot exist independent of their owner.',
      'Components live or die with their owner.',
      'All of the above.',
      'None of the above.'
    ],
    correctAnswer: 'None of the above.'
  },
{ category: 'PastExams',
    question: 'The Prototype pattern, as discussed in class, works by wrapping one object inside another with the same interface.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'The Bridge pattern, as discussed in class, defines a family of algorithms, encapsulates each one, and makes them interchangeable. Bridge lets the algorithm vary independently from clients that use it.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
{ category: 'PastExams',
    question: 'The Command pattern decouples the object that invokes an operation from the one that knows how to perform it.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
{ category: 'Patterns',
    question: 'Which key difference distinguishes Abstract Factory from Factory Method, according to the PowerPoint?',
    choices: [
      'Factory Method uses aggregation/composition, Abstract Factory uses inheritance',
      'Abstract Factory uses aggregation/composition; Factory Method uses inheritance',
      'Factory Method uses inheritance; Abstract Factory uses composition and creates families',
      'Both are identical except for naming conventions'
    ],
    correctAnswer: 'Abstract Factory uses aggregation/composition; Factory Method uses inheritance'
  },
{ category: 'Patterns',
    question: 'What is one major limitation of the Abstract Factory pattern according to the slides?',
    choices: [
      'Difficult to support new kinds of products',
      'Does not work with inheritance',
      'Requires dynamic memory allocation',
      'Needs multiple singletons'
    ],
    correctAnswer: 'Difficult to support new kinds of products'
  },
{ category: 'Patterns',
    question: 'The Abstract Factory pattern is applicable when:',
    choices: [
      'A system should be configured with one of multiple families of products',
      'An object should be created only once',
      'There’s a need to extend existing hierarchies',
      'A superclass needs to override behavior of a subclass'
    ],
    correctAnswer: 'A system should be configured with one of multiple families of products'
  },
{ category: 'Patterns',
    question: 'Which of the following code usage characteristics most strongly supports this being an Abstract Factory pattern?',
    choices: [
      'Aggregation/composition of multiple factory methods',
      'A single overridden factory function',
      'Usage of friend classes',
      'A static method creating global instances'
    ],
    correctAnswer: 'Aggregation/composition of multiple factory methods'
  },
 
{ category: 'Patterns',
    question: 'The Abstract Factory pattern is applicable when:\n“A system should be independent of how its products are created.”\nWhich other scenario also matches its applicability?',
    choices: [
      'When objects require dynamic configuration at runtime',
      'When a system should be configured with one of multiple families of products',
      'When only one instance of a class must exist',
      'When object creation should be delegated to subclasses'
    ],
    correctAnswer: 'When a system should be configured with one of multiple families of products'
  },
{ category: 'Patterns',
    question: 'In the Abstract Factory design pattern, which statement is true about client responsibilities?',
    choices: [
      'Client inherits the concrete factory class to instantiate objects.',
      'Client must be aware of all possible product subclasses.',
      'Client controls when objects are created, while factory controls what is created.',
      'Client directly instantiates the product classes using new.'
    ],
    correctAnswer: 'Client controls when objects are created, while factory controls what is created.'
  },

{ category: 'Patterns',
    question: '“Provide an interface for creating families of related or dependent objects without specifying their concrete classes.” Which design pattern does this definition describe?',
    choices: [
      'Abstract Factory',
      'Singleton',
      'Factory Method',
      'Adapter'
    ],
    correctAnswer: 'Abstract Factory'
  },
  
{ category: 'Patterns',
    question: '“Separate the construction of a complex object from its representation so that the same construction process can create different representations.” Which design pattern is this the textbook definition of?',
    choices: [
      'Builder',
      'Factory Method',
      'Abstract Factory',
      'Adapter'
    ],
    correctAnswer: 'Builder'
  },
  
{ category: 'Patterns',
    question: 'Which of the following is NOT a listed consequence of the Builder pattern from the slides?',
    choices: [
      'Lets you vary a product’s internal representation',
      'Isolates code for construction and representation',
      'Makes exchanging product families easy',
      'Gives you finer control over the construction process'
    ],
    correctAnswer: 'Makes exchanging product families easy'
  },
  

{ category: 'Patterns',
    question: 'What is not a listed consequence of the Builder pattern?',
    choices: [
      'Lets you vary a product’s internal representation',
      'Isolates code for construction and representation',
      'Allows run-time class generation',
      'Gives you finer control over the construction process'
    ],
    correctAnswer: 'Allows run-time class generation'
  },
{ category: 'Patterns',
    question: 'Which of the following statements about Builder vs. Abstract Factory is correct?',
    choices: [
      'Builder creates families of related objects available immediately',
      'Abstract Factory assembles one complex object',
      'Abstract Factory is used when parts are created and assembled in steps',
      'Builder creates one, complex product, usually made up of different parts'
    ],
    correctAnswer: 'Builder creates one, complex product, usually made up of different parts'
  },
{ category: 'Patterns',
    question: 'Which of the following best explains why the Builder pattern is suitable when constructing complex objects in a consistent way?',
    choices: [
      'Different objects may require runtime injection of dependencies',
      'The construction process must allow different representations for the object that’s constructed',
      'You want to ensure product variants remain consistent with their factory source',
      'Object creation should be decoupled from class hierarchy and handled via interfaces'
    ],
    correctAnswer: 'The construction process must allow different representations for the object that’s constructed'
  },
  
{ category: 'Patterns',
    question: `AppConfig* cfg2 = cfg1->clone();
This code avoids reloading a heavy configuration file by copying an existing object. What design pattern does this illustrate?`,
    choices: [
      'Abstract Factory',
      'Prototype',
      'Singleton',
      'Builder'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    question: `“Specify the kinds of objects to create using a prototypical instance, and create new objects by copying the prototype.”
Which design pattern is described by this definition?`,
    choices: [
      'Builder',
      'Abstract Factory',
      'Prototype',
      'Factory Method'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    question: `Which design pattern is most appropriate when:
“Instances are expensive to create, but easy to copy”?`,
    choices: [
      'Prototype',
      'Singleton',
      'Factory Method',
      'Strategy'
    ],
    correctAnswer: 'Prototype'
  },
 
{ category: 'Patterns',
    question: `Why can’t a copy constructor be used to duplicate AppConfig objects in the prototype example (refer to slides)?`,
    choices: [
      'Because AppConfig is a template class',
      'Because AppConfig is abstract and cannot be instantiated directly',
      'Because the compiler disables copy constructors by default',
      'Because clone() uses deep copying'
    ],
    correctAnswer: 'Because AppConfig is abstract and cannot be instantiated directly'
  },
 
{ category: 'Patterns',
    question: `“Hides the concrete product classes from the client – we don’t have to know which concrete type we’re cloning”
This is a listed consequence of which design pattern?`,
    choices: [
      'Factory Method',
      'Prototype',
      'Abstract Factory',
      'Adapter'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    question: `When might you prefer using prototypes instead of factory subclasses to build game levels?`,
    choices: [
      'When you want the client to have strict control over object creation',
      'When the object creation depends on external configuration files',
      'When you want flexible combinations of products without requiring subclassing',
      'When object creation needs to be restricted to a single instance'
    ],
    correctAnswer: 'When you want flexible combinations of products without requiring subclassing'
  },


{ category: 'Patterns',
    code: `Pizza *pizza = new Pizza(12);
pizza->addTopping("Pineapple");
pizza->addTopping("Ham");

Pizza *pizza = new Pizza(8);
pizza->addTopping("Pepperoni");
pizza->addTopping("Mushroom");
pizza->addTopping("Green Peppers");
pizza->addTopping("Onions");`,
    question: 'According to the slides, what design pattern would best replace this manual construction code?',
    choices: [
      'Abstract Factory',
      'Factory Method',
      'Builder',
      'Prototype'
    ],
    correctAnswer: 'Builder'
  },
{ category: 'Patterns',
    code: `void HawaiianPizzaBuilder::buildToppings() {
    _pizza.addTopping("Ham");
    _pizza.addTopping("Pineapple");
}`,
    question: 'This specific implementation of a builder method most directly represents:',
    choices: [
      'Director',
      'Concrete Builder',
      'Product',
      'Factory Method'
    ],
    correctAnswer: 'Concrete Builder'
  },
{ category: 'Patterns',
    code: `class GameLevel {
public:
    GameLevel(GameObjectFactory* factory) {
        this->_factory = factory;
        Monster* m1 = factory->createMonster();
        Monster* m2 = factory->createMonster();
        Wall*   w1 = factory->createWall();
        // ...
    }
private:
    GameObjectFactory* _factory;
};`,
    question: 'What design pattern does the following code represent?',
    choices: [
      'Abstract Factory',
      'Prototype',
      'Builder',
      'Factory Method'
    ],
    correctAnswer: 'Abstract Factory'
  },
{ category: 'Patterns',
    code: `void Cook::constructPizza() {
    _pizzaBuilder->buildName();
    _pizzaBuilder->buildDough();
    _pizzaBuilder->buildSauce();
    _pizzaBuilder->buildToppings();
}`,
    question: 'Which design pattern does this approach to step-by-step assembly demonstrate?',
    choices: [
      'Builder',
      'Abstract Factory',
      'Template Method',
      'Strategy'
    ],
    correctAnswer: 'Builder'
  },
{ category: 'Patterns',
    code: `AppConfig* cfg2 = cfg1->clone();`,
    question: 'This code avoids reloading a heavy configuration file by copying an existing object. What design pattern does this illustrate?',
    choices: [
      'Abstract Factory',
      'Prototype',
      'Singleton',
      'Builder'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    code: `AppConfig* cfg1 = loadConfig();
AppConfig* cfg2 = loadConfig();`,
    question: 'This method incurs a performance hit because loadConfig() is called multiple times. What design pattern could avoid this overhead while still producing similar objects?',
    choices: [
      'Prototype',
      'Abstract Factory',
      'Builder',
      'Command'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    code: `Monster* monster = f->createMonster();`,
    question: 'In the context of:\nObjectFactory* f = new ObjectFactory(m, w, s);\nWhat design pattern is being used to dynamically return a new object of the same type without requiring a factory subclass for each type?',
    choices: [
      'Prototype',
      'Singleton',
      'Abstract Factory',
      'Bridge'
    ],
    correctAnswer: 'Prototype'
  },
{ category: 'Patterns',
    code: `const Logger* Logger::_instance = NULL;  
  const Logger& Logger::instance() {  
     if (_instance == NULL)  
         _instance = new Logger();  
     return *_instance;  
  }`,
    question: 'Which design pattern does this code implement to ensure a single instance exists and is globally accessible?',
    choices: ['Singleton', 'Prototype', 'Abstract Factory', 'Strategy'],
    correctAnswer: 'Singleton'
  },
{ category: 'Patterns',
    question: '“There must be exactly one instance of a class. It must be accessible to clients from a well-known access point.” This is the applicability condition for which design pattern?',
    choices: ['Builder', 'Abstract Factory', 'Singleton', 'Decorator'],
    correctAnswer: 'Singleton'
  },
{ category: 'Patterns',
    question: 'Which is not a consequence of the Singleton pattern as listed in the slides?',
    choices: [
      'Controlled access to sole instance',
      'Lazy initialization',
      'Allows building related objects with consistent interfaces',
      'Permits refinement through subclassing',
      'Permits a variable number of instances, if needed'
    ],
    correctAnswer: 'Allows building related objects with consistent interfaces'
  },
{ category: 'Patterns',
    question: 'Why is the Logger constructor declared protected in the Singleton pattern?',
    choices: [
      'To prevent subclassing',
      'To prevent inheritance',
      'To prevent instantiation from outside the class',
      'To allow static inheritance'
    ],
    correctAnswer: 'To prevent instantiation from outside the class'
  },
{ category: 'Patterns',
    question: 'Which design pattern requires you to “worry about who deletes the instance” unless smart pointers are used?',
    choices: ['Builder', 'Singleton', 'Factory Method', 'Adapter'],
    correctAnswer: 'Singleton'
  },
{ category: 'Patterns',
    question: 'Which of the following is an applicability condition listed directly on the Singleton slide?',
    choices: [
      'There must be no global access to the object',
      'The object must support deep copying',
      'The sole instance should be extensible by subclassing',
      'The object should be composed of multiple products'
    ],
    correctAnswer: 'The sole instance should be extensible by subclassing'
  },
{ category: 'Patterns',
    code: `virtual Student* createStudent(const std::string& name) = 0;`,
    question: 'This line defines a method that defers instantiation to subclasses. Which design pattern is this an example of?',
    choices: ['Factory Method', 'Prototype', 'Singleton', 'Abstract Factory'],
    correctAnswer: 'Factory Method'
  },
{ category: 'Patterns',
    question: '“A class can’t anticipate the class of objects it must create” is an Applicability condition for which design pattern?',
    choices: ['Prototype', 'Abstract Factory', 'Factory Method', 'Strategy'],
    correctAnswer: 'Factory Method'
  },
{ category: 'Patterns',
    question: 'Which of the following is not listed under the Consequences slide for the Factory Method pattern?',
    choices: [
      'Eliminates the need to bind application-specific classes into our code',
      'Clients have to subclass the Creator class',
      'Code only deals with the Product interface',
      'Allows creation of entire families of related objects'
    ],
    correctAnswer: 'Allows creation of entire families of related objects'
  },
{ category: 'Patterns',
    code: `class FireGameLevel : public GameLevel {
  protected:
      virtual Monster* createMonster() {
          return new FireMonster();
      }
  };`,
    question: 'This subclass customizes object creation. Which design pattern does it implement?',
    choices: ['Prototype', 'Factory Method', 'Builder', 'Singleton'],
    correctAnswer: 'Factory Method'
  },
{ category: 'Patterns',
    question: 'What is one sentence from the slides that explains how Factory Method avoids tightly coupling your app logic to specific concrete classes?',
    choices: [
      'The code only deals with the Product interface, so it can work with any user-defined ConcreteProduct classes',
      'It instantiates all its subclasses directly using new',
      'The interface itself handles all memory cleanup',
      'The code depends on static factory selectors'
    ],
    correctAnswer: 'The code only deals with the Product interface, so it can work with any user-defined ConcreteProduct classes'
  },
{ category: 'Patterns',
    question: 'You’re designing a flexible system where the base class shouldn’t care what concrete product is made, but you still want new products without modifying that base. What drawback might you run into when using the Factory Method pattern?',
    choices: [
      'You’ll have to subclass the Creator class just to create a particular ConcreteProduct object',
      'You won’t be able to enforce abstract interfaces',
      'You must recompile the codebase every time a subclass is made',
      'You can’t pass parameters into constructors'
    ],
    correctAnswer: 'You’ll have to subclass the Creator class just to create a particular ConcreteProduct object'
  },
{ category: 'Patterns',
    question: 'Your dev team is tired of adding else-if statements every time a new student department is created. What statement from the slides explains why this is a problem?',
    choices: [
      'We are binding application-specific logic into a dynamic class',
      'We are using the wrong polymorphic signature',
      'We have to violate the Open-Closed Principle each time we add a new department',
      'We forgot to use the adapter pattern'
    ],
    correctAnswer: 'We have to violate the Open-Closed Principle each time we add a new department'
  },
{ category: 'Patterns',
    question: 'What phrase from the slides illustrates how Factory Method can support user-defined products without rewriting existing logic?',
    choices: [
      'It dynamically casts interfaces at runtime',
      'It allows classes to be serialized from XML',
      'It stores object type in a runtime string',
      'It can work with any user-defined ConcreteProduct classes'
    ],
    correctAnswer: 'It can work with any user-defined ConcreteProduct classes'
  },
{ category: 'Patterns',
    question: 'Factory methods eliminate the need to:',
    choices: [
      'explicitly instantiate derived interfaces',
      'bind application-specific classes into our code',
      'recompile after each subclass change',
      'store type metadata in a visitor object'
    ],
    correctAnswer: 'bind application-specific classes into our code'
  },
{ category: 'Patterns',
    question: 'Which pattern is defined as:\n“Define an interface for creating an object, but let subclasses decide which class to instantiate”?',
    choices: ['Abstract Factory', 'Builder', 'Factory Method', 'Prototype'],
    correctAnswer: 'Factory Method'
  },
{ category: 'Patterns',
    code: `switch (this->_state) {
    case NEW:
    case APPLIED:
      this->_state = CANCELLED;
      break;
  }`,
    question: 'Which design pattern should you consider applying to cleanly replace this repetitive structure?',
    choices: ['Abstract Factory', 'Strategy', 'State', 'Template Method'],
    correctAnswer: 'State'
  },
{ category: 'Patterns',
    question: 'You’re building a loan system where the behavior of withdraw() should change at runtime depending on whether the account is in New, Applied, or Open state. What design pattern fits best here?',
    choices: ['Builder', 'Abstract Factory', 'State', 'Observer'],
    correctAnswer: 'State'
  },
{ category: 'Patterns',
    question: 'Which of the following quotes best describes a consequence of applying the State design pattern?',
    choices: [
      'Makes state transitions explicit',
      'Supports interface segregation',
      'Enables recursive backtracking',
      'Decouples product creation from client logic'
    ],
    correctAnswer: 'Makes state transitions explicit'
  },
{ category: 'Patterns',
    question: '“Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class.” What design pattern is being defined here?',
    choices: ['State', 'Strategy', 'Factory Method', 'Decorator'],
    correctAnswer: 'State'
  },
{ category: 'Patterns',
    question: 'What makes LineOfCreditState objects easy to reuse and localize behavior, according to the slides?',
    choices: [
      'They are registered as global statics',
      'They use composition instead of inheritance',
      'State-specific behaviour is localized into separate state classes',
      'They inherit from an abstract interface of the credit manager'
    ],
    correctAnswer: 'State-specific behaviour is localized into separate state classes'
  },
{ category: 'Patterns',
    question: 'What’s the correct reason, straight from the slides, why a class like OpenState might work across multiple objects instead of making a new one every time?',
    choices: [
      'State objects can be shared',
      'Singleton construction avoids runtime errors',
      'Enumerated types can’t be dynamically subclassed',
      'Factory methods must return default types'
    ],
    correctAnswer: 'State objects can be shared'
  },
{ category: 'Patterns',
    code: `this->_state = new CancelledState;`,
    question: 'In the State pattern, what benefit is shown by making this assignment explicitly in a subclass like OpenState?',
    choices: [
      'Makes state transitions explicit',
      'Breaks the observer subscription cycle',
      'Uses the Abstract Factory\'s product selector',
      'Enables deep copying of runtime states'
    ],
    correctAnswer: 'Makes state transitions explicit'
  },
{ category: 'Patterns',
    question: 'What statement from the slides reflects why all subclasses of LineOfCreditState override the same methods like apply() and cancel()?',
    choices: [
      'Often, several operations will contain this same conditional structure',
      'Overriding is not supported in C++ without pure virtual functions',
      'State transitions must be inherited through a factory',
      'Function pointers are preferred over subclassing'
    ],
    correctAnswer: 'Often, several operations will contain this same conditional structure'
  },
{ category: 'Patterns',
    code: `Date d(2011, 11, 5, 9, 52, 0, new DateOnlyFormatter);
  cout << "Date     : " << d.toString() << endl;
  d.setFormatter(new TimeOnlyFormatter);
  cout << "Time     : " << d.toString() << endl;
  d.setFormatter(new DateTimeFormatter);
  cout << "DateTime : " << d.toString() << endl;`,
    question: 'What design pattern is demonstrated here, where DateFormatter is swapped at runtime?',
    choices: ['Strategy', 'Abstract Factory', 'Template Method', 'Builder'],
    correctAnswer: 'Strategy'
  },
{ category: 'Patterns',
    question: '“Define a family of algorithms, encapsulate each one, and make them interchangeable.” This best defines which design pattern?',
    choices: ['Strategy', 'Abstract Factory', 'State', 'Prototype'],
    correctAnswer: 'Strategy'
  },
{ category: 'Patterns',
    question: 'The client must know about different formatter types to construct the object. Based on the slides’ consequences, what is a drawback of the Strategy pattern?',
    choices: [
      'Lack of encapsulation',
      'Clients must be aware of different strategies',
      'High memory usage',
      'Tight coupling'
    ],
    correctAnswer: 'Clients must be aware of different strategies'
  },
{ category: 'Patterns',
    question: 'Why does the Strategy pattern help in configuring a class with one of many behaviours, as per the slides?',
    choices: [
      'To allow polymorphism between client and factory',
      'To define variant product families',
      'Because many related classes differ only in their behaviour',
      'Because it creates a registry of components'
    ],
    correctAnswer: 'Because many related classes differ only in their behaviour'
  },
{ category: 'Patterns',
    question: 'What is a key reason to apply the Strategy pattern, based on its applicability in the slides?',
    choices: [
      'To simplify object creation logic through factories',
      'When you need different variants of an algorithm, such as for time/space tradeoffs',
      'When multiple classes must share global state',
      'To inherit formatting behavior directly from a base class'
    ],
    correctAnswer: 'When you need different variants of an algorithm, such as for time/space tradeoffs'
  },
{ category: 'Patterns',
    question: 'A stock ticker class broadcasts price changes to any interested trading algorithms. The ticker doesn’t care who those receivers are, and new listeners can be added or removed at runtime. Which pattern best fits this system?',
    choices: ['Abstract Factory', 'Observer', 'Prototype', 'Singleton'],
    correctAnswer: 'Observer'
  },
{ category: 'Patterns',
    code: `class Spreadsheet {
  public:
      void attach(Graph* g);
      void detach(Graph* g);
      void notify(); // updates all attached graphs
  private:
      vector<Graph*> observers;
  };`,
    question: 'When one spreadsheet changes and all dependent graphs update automatically, what design pattern is being used here?',
    choices: ['Mediator', 'Observer', 'Strategy', 'Builder'],
    correctAnswer: 'Observer'
  },
{ category: 'Patterns',
    question: 'Your file watcher is being observed by both a logger and a UI component. When a file changes, both get notified, but the watcher has no knowledge of either. What principle of Observer is being leveraged?',
    choices: [
      'Broadcast communication',
      'Singleton interface inheritance',
      'Encapsulation of build steps',
      'Direct inheritance-based delegation'
    ],
    correctAnswer: 'Broadcast communication'
  },
{ category: 'Patterns',
    question: 'A seemingly minor spreadsheet update triggers a bar graph refresh, which triggers a UI redraw, which triggers a screen resize. Which tricky side effect of Observer is being demonstrated here?',
    choices: [
      'A cascade of updates to Observers and their dependent objects',
      'Multiple singleton creations across graph types',
      'Incorrect factory bindings to context managers',
      'Observer identity mismanagement'
    ],
    correctAnswer: 'A cascade of updates to Observers and their dependent objects'
  },
{ category: 'Patterns',
    question: 'In a system with multiple observers, some may observe more than one subject. An event object is passed to each update() call so observers can know who triggered it. Why is this technique important in Observer-based systems?',
    choices: [
      '“Some Observers may observe more than one subject.”',
      'It allows strategy delegation',
      'It helps factories group observers',
      'It supports state retention via cloning'
    ],
    correctAnswer: '“Some Observers may observe more than one subject.”'
  },
{ category: 'Patterns',
    question: 'In the graph example, the Spreadsheet subject has many attached graphs, but each graph doesn’t know about the others. What consequence of Observer is being leveraged here?',
    choices: [
      'Observers have no knowledge of each other’s presence',
      'Observers rely on static factories',
      'Graphs must use shared state',
      'Updates depend on subclass composition'
    ],
    correctAnswer: 'Observers have no knowledge of each other’s presence'
  },
{ category: 'Patterns',
    question: 'Which pattern is defined as: “Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.”',
    choices: ['Strategy', 'Observer', 'State', 'Adapter'],
    correctAnswer: 'Observer'
  },
{ category: 'Patterns',
    code: `menu.add(new MenuItem("Turn off stereo", cmd6));`,
    question: 'This menu item has no idea how to turn off the stereo—it simply holds a command object. What design pattern allows this decoupling between UI and behavior?',
    choices: ['Strategy', 'Observer', 'Command', 'Template Method'],
    correctAnswer: 'Command'
  },
{ category: 'Patterns',
    question: 'You’re designing a UI library with customizable menu items. The library shouldn’t care what a menu item does when clicked. You just want users to plug in any kind of behavior they want. What design pattern fits this situation perfectly?',
    choices: ['Strategy', 'Command', 'Factory Method', 'Abstract Factory'],
    correctAnswer: 'Command'
  },
{ category: 'Patterns',
    code: `Command* cmd1 = new LightOnCommand(l1);
  Command* cmd3 = new LightOnCommand(l2);`,
    question: 'Two light commands are created for different lights. When each is executed, it affects a different object. What Command pattern benefit is this demonstrating?',
    choices: [
      'We can have multiple receivers',
      'Observers are dynamically registered',
      'Only one invoker is allowed',
      'Factory creates these on demand'
    ],
    correctAnswer: 'We can have multiple receivers'
  },
{ category: 'Patterns',
    code: `void execute() {
     this->_stereo->turnOff();
  }`,
    question: 'Which part of the Command pattern is this function representing?',
    choices: ['ConcreteCommand', 'Invoker', 'Subject', 'Receiver'],
    correctAnswer: 'ConcreteCommand'
  },
{ category: 'Patterns',
    code: `menu.add(new MenuItem("Play stereo", cmd7));`,
    question: 'When this item is selected, it invokes cmd7->execute(). Why is this a clean, modular design?',
    choices: [
      'Commands are first-class objects; they can be manipulated and extended like any other object',
      'Factory binding avoids unnecessary class instantiation',
      'Singleton manages command creation',
      'All menu actions are serialized'
    ],
    correctAnswer: 'Commands are first-class objects; they can be manipulated and extended like any other object'
  },
{ category: 'Patterns',
    question: 'A robotics controller queues a series of move, lift, and rotate commands to execute one by one. Which pattern allows this queuing behavior?',
    choices: ['Command', 'State', 'Interpreter', 'Decorator'],
    correctAnswer: 'Command'
  },
{ category: 'Patterns',
    question: 'You want to support undoing the last action in a text editor (like typing or deleting). Which design pattern directly enables this?',
    choices: ['Command', 'Observer', 'Adapter', 'Strategy'],
    correctAnswer: 'Command'
  },
{ category: 'Patterns',
    question: 'In a client-driven system, the object that knows how to perform an action (like turning on a stereo) is not the one that initiates it. What is the object that executes but doesn’t know how to perform the task called?',
    choices: ['Invoker', 'Receiver', 'ConcreteCommand', 'Subject'],
    correctAnswer: 'Invoker'
  },
{ category: 'Patterns',
    question: 'Which pattern is defined as: “Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.”',
    choices: ['Strategy', 'Observer', 'Command', 'Visitor'],
    correctAnswer: 'Command'
  },
{ category: 'Patterns',
    code: `void HourlyEmployee::accept(EmployeeVisitor* visitor) {
      visitor->visit(this);
  }`,
    question: 'This pattern allows new operations (like reports) to be performed without changing the HourlyEmployee class. What design pattern is used?',
    choices: ['Strategy', 'Visitor', 'Command', 'Builder'],
    correctAnswer: 'Visitor'
  },
{ category: 'Patterns',
    question: 'A company wants to generate multiple reports (hourly pay, salary report, all-pay). They want to add new reports at any time without modifying Employee classes. Which pattern meets this goal without violating the Open-Closed Principle?',
    choices: ['Abstract Factory', 'Visitor', 'Template Method', 'Singleton'],
    correctAnswer: 'Visitor'
  },
{ category: 'Patterns',
    code: `class HourlyPayReport : public EmployeeVisitor {
      void visit(HourlyEmployee* e);
      void visit(SalariedEmployee* e);
  };`,
    question: 'This visitor provides an operation that acts only on HourlyEmployee, doing nothing for salaried staff. What does this demonstrate?',
    choices: [
      'The visitor gathers related operations and separates unrelated ones',
      'The visitor combines all report types into one',
      'The visitor inherits behavior from a composite class',
      'The visitor subclasses employee types directly'
    ],
    correctAnswer: 'The visitor gathers related operations and separates unrelated ones'
  },
{ category: 'Patterns',
    code: `virtual void accept(EmployeeVisitor*) = 0;`,
    question: 'In a system using Visitor, the Employee class has this method:\nWhy can’t you just call rpt1.visit(*it) on an Employee* in main()?',
    choices: [
      'The visit method requires a pointer to an instance of a concrete subclass, not the abstract parent.',
      'The visit method must be private',
      'The Employee object has no public name field',
      'Dynamic dispatch can’t be used with vectors'
    ],
    correctAnswer: 'The visit method requires a pointer to an instance of a concrete subclass, not the abstract parent.'
  },
{ category: 'Patterns',
    question: 'Your architecture involves multiple unrelated operations like HourlyPayReport, AllPayReport, and future ones like TaxReport, all acting on HourlyEmployee and SalariedEmployee. Why is Visitor appropriate here?',
    choices: [
      'The object structure frequently changes',
      'Strategy allows dynamic swapping of employee types',
      'Many distinct and unrelated operations need to be performed on objects in an object structure and you want to avoid polluting their classes with these operations',
      'You can use a factory to store reports'
    ],
    correctAnswer: 'Many distinct and unrelated operations need to be performed on objects in an object structure and you want to avoid polluting their classes with these operations'
  },
{ category: 'Patterns',
    question: 'What is a major limitation of the Visitor pattern according to the slides?',
    choices: [
      'Adding new ConcreteElement classes is hard',
      'Visitors can only return void',
      'You cannot accumulate state',
      'Accept methods cannot be virtual'
    ],
    correctAnswer: 'Adding new ConcreteElement classes is hard'
  },
{ category: 'Patterns',
    code: `Employee* e = new HourlyEmployee("Joe", 60, 25.75);
  e->accept(&rpt1);`,
    question: 'Which benefit of Visitor does this illustrate?',
    choices: [
      'Operations depend on the concrete class of the element',
      'Employee owns all reporting logic',
      'accept defers to a generic report factory',
      'Dynamic dispatch is prevented'
    ],
    correctAnswer: 'Operations depend on the concrete class of the element'
  },
{ category: 'Patterns',
    question: 'Suppose you are using a third-party employee library. You can’t change the source code, but you need to define operations like printing hours or generating CSV. Why is Visitor the best fit?',
    choices: [
      'The classes defining the object structure rarely change (or cannot change), but you want to define new operations',
      'Strategy allows behavior to be changed inside the class',
      'Abstract Factory provides cross-compatibility',
      'State encapsulates third-party field data'
    ],
    correctAnswer: 'The classes defining the object structure rarely change (or cannot change), but you want to define new operations'
  },
{ category: 'Patterns',
    question: 'What pattern is being described here:\n“Represent an operation to be performed on the elements of an object structure. Lets you define a new operation without changing the classes of the elements on which it operates.”',
    choices: ['Visitor', 'Command', 'Decorator', 'Adapter'],
    correctAnswer: 'Visitor'
  },
{ category: 'Patterns',
    question: 'Your organization chart app lets you structure employees into a tree of Manager and RegularEmployee objects. Which Composite feature makes the client code like print() easy to write?',
    choices: [
      'Clients don’t have to distinguish between primitive and composite objects',
      'Managers inherit Observer notifications',
      'All leaves must register themselves with the factory',
      'The Strategy pattern is used to inject print behavior'
    ],
    correctAnswer: 'Clients don’t have to distinguish between primitive and composite objects'
  },
{ category: 'Patterns',
    code: `Employee* dean = new Manager("Matt Davison");
  dean->add(new RegularEmployee("Art Mulder"));
  dean->print();`,
    question: 'Why does this design avoid conditionals like if (isManager()) in the client code?',
    choices: [
      'Because wherever client code expects a primitive object, it can also take a composite object',
      'Because the factory pre-sorts employees',
      'Because employees use polymorphic templates',
      'Because Strategy handles the conditional logic'
    ],
    correctAnswer: 'Because wherever client code expects a primitive object, it can also take a composite object'
  },
{ category: 'Patterns',
    code: `virtual void add(Employee* member) {
      // do nothing -- throw exception?
  }`,
    question: 'This method is defined in the base class Employee, but overridden by Manager. What does this show about how leaf vs. composite behavior is handled in the Composite pattern?',
    choices: [
      'Leaf methods may do nothing, while composites override them for structural behavior',
      'Only composites can be constructed from factories',
      'Leaves cannot call methods on base classes',
      'All methods must be pure virtual in composites'
    ],
    correctAnswer: 'Leaf methods may do nothing, while composites override them for structural behavior'
  },
{ category: 'Patterns',
    question: 'Why does this line in the slides reflect the core motivation for using Composite?\n“You want clients to be able to ignore the difference between compositions of objects and individual objects.”',
    choices: [
      'It simplifies client code that works on both Manager and RegularEmployee',
      'It enforces strict separation of interfaces',
      'It reduces memory usage via pointer compression',
      'It allows type-erasure polymorphism'
    ],
    correctAnswer: 'It simplifies client code that works on both Manager and RegularEmployee'
  },
{ category: 'Patterns',
    question: 'Which of the following is the exact definition of the Composite pattern, according to the slides?',
    choices: [
      'Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.',
      'Encapsulate algorithms into interchangeable behaviors',
      'Define one-to-many relationships for dynamic events',
      'Represent operations on elements of object structures'
    ],
    correctAnswer: 'Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.'
  },
{ category: 'Patterns',
    code: `for (Employee* e : organization) {
      e->print();
  }`,
    question: 'This loop works seamlessly whether e is a Manager or RegularEmployee. Which line from the Consequences slide explains this?',
    choices: [
      'Composite prevents recursion errors',
      'Leaves provide base case print overrides',
      'Newly-defined Leaf/Composite subclasses work automatically with existing structures and client code',
      'Composite components require special wrappers'
    ],
    correctAnswer: 'Newly-defined Leaf/Composite subclasses work automatically with existing structures and client code'
  },
{ category: 'Patterns',
    question: 'What is one downside of the Composite pattern explicitly mentioned in the slides?',
    choices: [
      'Can make the code overly general',
      'Requires tight coupling between leaves and containers',
      'Cannot handle nested hierarchies',
      'Only supports one level of inheritance'
    ],
    correctAnswer: 'Can make the code overly general'
  },
{ category: 'Patterns',
    question: 'You’re modeling a filesystem where files and folders both implement print(). Which pattern should you use that is “Often used to model files and directories,” to let folders contain files and other folders without changing the client logic?',
    choices: ['Adapter', 'Decorator', 'Composite', 'Command'],
    correctAnswer: 'Composite'
  },
{ category: 'Patterns',
    code: `FileInputStream fis = new FileInputStream("file.gz");
  BufferedInputStream bis = new BufferedInputStream(fis);
  GZIPInputStream gis = new GZIPInputStream(bis);`,
    question: 'This layering of input streams enhances functionality at runtime without subclassing. What design pattern is this?',
    choices: ['Decorator', 'Bridge', 'Factory Method', 'Adapter'],
    correctAnswer: 'Decorator'
  },
{ category: 'Patterns',
    question: 'From the Decorator slides why is it inappropriate to add GZIP compression logic directly into the InputStream base class?',
    choices: [
      'Java does not support multiple readers',
      'Streams cannot implement gzip by inheritance',
      'Subclassing limits interface use',
      'It violates the Open / Closed Principle'
    ],
    correctAnswer: 'It violates the Open / Closed Principle'
  },
{ category: 'Patterns',
    question: 'You’re designing a GUI where windows can optionally include scrollbars, borders, or shadows. These should be attachable in any combination. Why is subclassing not ideal here?',
    choices: [
      'Subclassing is slower than procedural logic',
      'Scrollbars can’t inherit from shadows',
      'Subclassing would produce an explosion of subclasses to support every combination',
      'Strategy cannot apply styling'
    ],
    correctAnswer: 'Subclassing would produce an explosion of subclasses to support every combination'
  },
{ category: 'Patterns',
    question: 'What is the exact definition of the Decorator pattern from the slides?',
    choices: [
      'Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.',
      'Let objects appear to change their class',
      'Define a common interface for multiple styles. Decorators provide a flexible alternative to subclassing for extending functionality.',
      'Allow recursive composition of styles'
    ],
    correctAnswer: 'Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.'
  },
{ category: 'Patterns',
    question: 'Which example best demonstrates runtime flexibility offered by the Decorator pattern?',
    choices: [
      'Decorators must be attached at compile time',
      'You can add or remove decorators dynamically without changing the base object',
      'Only concrete base classes may be extended',
      'Decorators must use static inheritance'
    ],
    correctAnswer: 'You can add or remove decorators dynamically without changing the base object'
  },
{ category: 'Patterns',
    question: 'Why is BufferedInputStream a better design than putting buffering directly into all types of InputStream subclasses?',
    choices: [
      'It reduces runtime casting',
      'It prevents serialization',
      'It avoids feature-laden classes high up in the hierarchy',
      'It limits polymorphism'
    ],
    correctAnswer: 'It avoids feature-laden classes high up in the hierarchy'
  },
{ category: 'Patterns',
    code: `GZIPInputStream gis = new GZIPInputStream(new BufferedInputStream(new FileInputStream("file.gz")));`,
    question: 'What does the following structure reveal about how Decorator objects are organized?',
    choices: [
      'Decorators must be flattened at runtime',
      'Each wrapper has unique interface requirements',
      'Layers can only be composed by factories',
      'Decorators act as transparent enclosures'
    ],
    correctAnswer: 'Decorators act as transparent enclosures'
  },
{ category: 'Patterns',
    question: 'Which drawback of the Decorator pattern is listed in the slides and commonly felt by new Java devs?',
    choices: [
      'Lots of big objects',
      'Decorators must be stateless',
      'Lots of little objects',
      'Decorators cannot be garbage collected'
    ],
    correctAnswer: 'Lots of little objects'
  },
{ category: 'Patterns',
    question: 'Why might a developer struggle with Decorator-based Java I/O the first time they encounter it?',
    choices: [
      '“Decorators force inline subclassing.”',
      '“File readers must inherit from their data stream.”',
      '“What happened to simple file I/O?”',
      '“Java lacks recursive decorators.”'
    ],
    correctAnswer: '“What happened to simple file I/O?”'
  },
{ category: 'Patterns',
    question: 'What does the Decorator pattern allow you to do that Strategy and Composite do not?',
    choices: [
      'Separate interface and implementation',
      'Treat individual and grouped objects uniformly',
      'Allow encapsulated behavior to be shared',
      'Add responsibilities to individual objects dynamically without affecting other objects'
    ],
    correctAnswer: 'Add responsibilities to individual objects dynamically without affecting other objects'
  },
{ category: 'Patterns',
    code: `void CiscoDvrAdapter::play(int h, int m, int s) {
    Time t; t.hour = h; t.minute = m; t.second = s;
    this->beginPlayBack(t);
  }`,
    question: 'This code converts one interface to another at runtime. What pattern is being used here?',
    choices: ['Adapter', 'Strategy', 'Proxy', 'Bridge'],
    correctAnswer: 'Adapter'
  },
{ category: 'Patterns',
    question: 'You are given three DVR libraries with different play() methods:\nbeginPlayBack(Time)\nstartPlayback(long)\nplayFrom(h, m, s)\nWhat makes Adapter necessary in this situation?',
    choices: [
      'We must dynamically clone each DVR',
      'The clients require a static binding to constructors',
      'Each library has a different interface, but we want to treat all DVRs uniformly',
      'Adapter supports interface inheritance, not delegation'
    ],
    correctAnswer: 'Each library has a different interface, but we want to treat all DVRs uniformly'
  },
{ category: 'Patterns',
    question: 'What is the exact definition of the Adapter design pattern, according to the slides?',
    choices: [
      'Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.',
      'Use delegation to swap implementations',
      'Bridge two unrelated classes with a shared parent',
      'Merge objects using runtime polymorphism. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.'
    ],
    correctAnswer: 'Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.'
  },
{ category: 'Patterns',
    question: 'Which of the following is a clear sign you need the Adapter pattern according to the Applicability slide?',
    choices: [
      'You want to use an existing class, but its interface does not match the one you need',
      'You need to implement observer callbacks',
      'You want to subclass different GUI components',
      'You are trying to pass multiple strategies at once'
    ],
    correctAnswer: 'You want to use an existing class, but its interface does not match the one you need'
  },
{ category: 'Patterns',
    code: `class CiscoDvrAdapter : public Dvr, private CiscoDvr {
  public:
      void play(int h, int m, int s);
  };`,
    question: 'What kind of adapter is this?',
    choices: ['Class Adapter', 'Object Adapter', 'Strategy Adapter', 'Proxy Adapter'],
    correctAnswer: 'Class Adapter'
  },
{ category: 'Patterns',
    question: 'Which is a consequence of class adapters mentioned in the slides?',
    choices: [
      'Introduces only one object, and no additional pointer indirection is needed',
      'Requires shared pointer ownership',
      'Requires subclassing each client type',
      'Causes recursive delegation problems'
    ],
    correctAnswer: 'Introduces only one object, and no additional pointer indirection is needed'
  },
{ category: 'Patterns',
    question: 'Which is a drawback of class adapters according to the slides?',
    choices: [
      'A class adapter must be created per instance',
      'You cannot override Adaptee methods',
      'Class adapters require public inheritance',
      'A class adapter won’t work when we want to adapt a class and all of its subclasses'
    ],
    correctAnswer: 'A class adapter won’t work when we want to adapt a class and all of its subclasses'
  },
{ category: 'Patterns',
    question: 'Which of the following is a benefit of object adapters?',
    choices: [
      'Lets a single adapter work with many Adaptees',
      'Allows multiple interface inheritance',
      'Forces all subclasses to override the same method',
      'Prevents subclass slicing'
    ],
    correctAnswer: 'Lets a single adapter work with many Adaptees'
  },
{ category: 'Patterns',
    question: 'Which of the following is a limitation of object adapters?',
    choices: [
      'Makes it harder to override Adaptee behaviour',
      'Introduces identity mismatch',
      'Cannot use dynamic polymorphism',
      'Cannot inherit interfaces'
    ],
    correctAnswer: 'Makes it harder to override Adaptee behaviour'
  },
{ category: 'Patterns',
    code: `template <class T>
  class List {
  public:
      List(ListImpl<T>* impl) : _listImpl(impl) {}
      virtual void add(T value) {
          this->_listImpl->add(value);
      }
  };`,
    question: 'What pattern separates the high-level List interface from implementation details like storage?',
    choices: ['Bridge', 'Composite', 'Decorator', 'Factory'],
    correctAnswer: 'Bridge'
  },
{ category: 'Patterns',
    question: 'You want to define multiple List interfaces (VerboseList, PrintableList) while swapping between storage implementations (ArrayListImpl, SetListImpl). What makes Bridge the most appropriate pattern here?',
    choices: [
      'You want to avoid a permanent binding between an abstraction and its implementation',
      'You want to encapsulate a collection traversal strategy',
      'You want to use recursive trees for your list',
      'You want to enforce only compile-time interface selection'
    ],
    correctAnswer: 'You want to avoid a permanent binding between an abstraction and its implementation'
  },
{ category: 'Patterns',
    question: 'What is the exact definition of the Bridge design pattern as per the slide?',
    choices: [
      'Decouple an abstraction from its implementation so that the two can vary dependently',
      'Decouple an abstraction from its implementation so that the two can vary independently',
      'Couples an abstraction to its implementation so that the two cannot vary independently',
      'Couples an abstraction to its implementation so that the two cannot vary dependently'
    ],
    correctAnswer: 'Decouple an abstraction from its implementation so that the two can vary independently'
  },
{ category: 'Patterns',
    question: 'Which consequence of Bridge is directly stated in the slides?',
    choices: [
      'Hides accessors and mutators from subclasses',
      'Increases the number of constructors',
      'Decouples interface and implementation → the two are not bound permanently',
      'Requires adapters for runtime delegation'
    ],
    correctAnswer: 'Decouples interface and implementation → the two are not bound permanently'
  },
{ category: 'Patterns',
    question: 'What Bridge applicability statement explains why it\'s useful when you expect to add new storage types or interfaces later?',
    choices: [
      'Multiple constructors allow context-passing',
      'Recursion trees require duplicate visitor entry points',
      'Heterogeneous objects must be sliced',
      'Changes in the implementation of an abstraction should have no impact on clients'
    ],
    correctAnswer: 'Changes in the implementation of an abstraction should have no impact on clients'
  },
{ category: 'Patterns',
    question: 'Bridge and Strategy both decouple behaviors — but what\'s the key difference, according to the final slides?',
    choices: [
      'Bridge decouples algorithms; Strategy decouples abstractions from implementations',
      'Strategy allows interface reuse; Bridge uses shared memory',
      'Strategy decouples algorithms; Bridge decouples abstractions from implementations',
      'Bridge favors deep copying; Strategy uses shallow state'
    ],
    correctAnswer: 'Strategy decouples algorithms; Bridge decouples abstractions from implementations'
  },
{ category: 'Patterns',
    question: 'Which Bridge consequence explains why clients don’t need to know if ArrayListImpl or SetListImpl is used?',
    choices: [
      'Hides implementation details from clients',
      'Encapsulates polymorphic context',
      'Applies visitor lazily',
      'Creates a common root for all interfaces'
    ],
    correctAnswer: 'Hides implementation details from clients'
  },
{ category: 'Patterns',
    question: 'Why is Bridge preferable over deep subclass hierarchies when multiple dimensions of change are expected?',
    choices: [
      'It collapses subclasses into a single hierarchy',
      'Improved extensibility → can extend Abstraction and Implementor independently',
      'It uses only interface inheritance',
      'Bridge eliminates all memory allocation'
    ],
    correctAnswer: 'Improved extensibility → can extend Abstraction and Implementor independently'
  },
{ category: 'Patterns',
    code: `list = new PrintableList<int>(new SetListImpl<int>());
  testList(list, values);`,
    question: 'What runtime flexibility of the Bridge pattern does this demonstrate?',
    choices: [
      'You can change the implementation at run-time',
      'You must construct the implementation in the abstraction',
      'You have compile-time binding of list behavior',
      'You can avoid function pointers entirely'
    ],
    correctAnswer: 'You can change the implementation at run-time'
  },
{ category: 'C++',
    code: `int a = 3, b = 2;
  int* p = &a;
  *p = b;
  std::cout << a << " " << *p << std::endl;`,
    question: 'What is the output of the following program?',
    choices: ['2 2', '3 2', '2 3', 'Undefined behavior'],
    correctAnswer: '2 2'
  },
{ category: 'C++',
    code: `int arr[] = {1, 2, 3};
  int* p = arr + 1;
  std::cout << *(p + 1);`,
    question: 'What is printed by this code?',
    choices: ['1', '2', '3', 'Compilation error'],
    correctAnswer: '3'
  },
{ category: 'C++',
    code: `int x = 5;
  int* ptr = &x;
  *ptr = *ptr + 3;
  int y = *ptr;`,
    question: 'What is the value of y after this code executes?',
    choices: ['5', '3', '8', 'Undefined'],
    correctAnswer: '8'
  },
{ category: 'C++',
    code: `int a = 10;
  int* p = &a;
  int** pp = &p;
  **pp = 20;
  std::cout << a;`,
    question: 'What is the output?',
    choices: ['10', '20', '0', 'Segmentation fault'],
    correctAnswer: '20'
  },
{ category: 'C++',
    code: `int a = 5;
  int b = 10;
  int* p = &a;
  p = &b;
  *p = *p + 1;
  std::cout << a << " " << b;`,
    question: 'What does the following code output?',
    choices: ['5 11', '6 10', '6 11', '5 10'],
    correctAnswer: '5 11'
  },
{ category: 'C++',
    code: `void modify(int &x) {
      x *= 2;
  }
  int main() {
      int a = 3;
      modify(a);
      std::cout << a;
  }`,
    question: 'What is the output?',
    choices: ['3', '6', 'Compilation error', 'Undefined'],
    correctAnswer: '6'
  },
{ category: 'C++',
    code: `int a = 4;
  int* p = &a;
  *p += 6;
  std::cout << a;`,
    question: 'What is printed?',
    choices: ['4', '6', '10', 'Compilation error'],
    correctAnswer: '10'
  },
{ category: 'C++',
    code: `void foo(int x) {
      x = 100;
  }
  int main() {
      int y = 10;
      foo(y);
      std::cout << y;
  }`,
    question: 'What is the output?',
    choices: ['10', '100', 'Garbage value', 'Compilation error'],
    correctAnswer: '10'
  },
{ category: 'C++',
    code: `int arr[] = {10, 20, 30};
  int* p = arr;
  p += 2;
  std::cout << *p;`,
    question: 'What is printed?',
    choices: ['10', '20', '30', 'Undefined behavior'],
    correctAnswer: '30'
  },
{ category: 'C++',
    code: `int x = 10;
  int* ptr = &x;
  int& ref = *ptr;
  ref = 50;
  std::cout << x;`,
    question: 'What does this output?',
    choices: ['10', '50', 'Address of x', 'Compilation error'],
    correctAnswer: '50'
  },
{ category: 'C++',
    question: 'What is the correct way to pass a variable to a function without allowing it to be changed?',
    choices: [
      'void func(int x)',
      'void func(int* x)',
      'void func(int& x)',
      'void func(const int& x)'
    ],
    correctAnswer: 'void func(const int& x)'
  },
{ category: 'C++',
    question: 'Which of the following correctly declares a pointer to a double?',
    choices: [
      'double ptr;',
      'double *ptr;',
      'ptr double*;',
      'pointer<double> ptr;'
    ],
    correctAnswer: 'double *ptr;'
  },
{ category: 'C++',
    question: 'What does this line do: int *p = new int[10];',
    choices: [
      'Allocates 10 integers on the stack.',
      'Allocates 10 integers on the heap.',
      'Creates a pointer to 10 integers on the heap.',
      'a and b'
    ],
    correctAnswer: 'Allocates 10 integers on the heap.'
  },
{ category: 'C++',
    question: 'Which of the following about const is TRUE?',
    choices: [
      'It prevents a function from modifying its parameters.',
      'It prevents assignment to a pointer.',
      'It removes the need for headers.',
      'It is only used with int.'
    ],
    correctAnswer: 'It prevents a function from modifying its parameters.'
  },
{ category: 'C++',
    question: 'How do you deallocate memory allocated with new for an array?',
    choices: [
      'free(p);',
      'delete p;',
      'delete[] p;',
      'release(p);'
    ],
    correctAnswer: 'delete[] p;'
  },
{ category: 'C++',
    question: 'Which line is a valid function definition?',
    choices: [
      'int swap(x, y);',
      'void swap(int a, int b) { return a + b; }',
      'void swap(int a, int b);',
      'void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }'
    ],
    correctAnswer: 'void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }'
  },
{ category: 'C++',
    code: `#define square(x) x * x
  int main() {
      std::cout << square(5 + 2);
  }`,
    question: 'What is the output of this snippet?',
    choices: ['49', '35', '5 + 2 * 5 + 2', '19'],
    correctAnswer: '5 + 2 * 5 + 2'
  },
{ category: 'C++',
    code: `int* ptr = nullptr;
  *ptr = 5;`,
    question: 'What happens in this code?',
    choices: [
      'Sets memory to 5',
      'Runtime segmentation fault',
      'Compiles and runs fine',
      'Syntax error'
    ],
    correctAnswer: 'Runtime segmentation fault'
  },
{ category: 'C++',
    question: 'What is the purpose of #ifndef and #define in a header file?',
    choices: [
      'Memory allocation',
      'Avoid multiple definitions',
      'Importing functions',
      'Creating templates'
    ],
    correctAnswer: 'Avoid multiple definitions'
  },
{ category: 'C++',
    question: 'Which of the following best describes what a namespace does?',
    choices: [
      'Prevents pointer issues',
      'Groups related code and avoids naming conflicts',
      'Increases execution speed',
      'Allows dynamic memory'
    ],
    correctAnswer: 'Groups related code and avoids naming conflicts'
  },
{ category: 'C++',
    code: `int a = 4;
  int b = 5;
  int* p = &a;
  int* q = &b;
  *p = *q;
  std::cout << a << " " << b;`,
    question: 'What is the output of the following?',
    choices: ['5 5', '4 5', '5 4', 'Compilation error'],
    correctAnswer: '5 5'
  },
{ category: 'C++',
    code: `int x = 7;
  int y = 10;
  int* a = &x;
  int* b = a;
  *b = y;
  std::cout << x;`,
    question: 'What is the output?',
    choices: ['7', '10', 'Compilation error', 'Garbage value'],
    correctAnswer: '10'
  },
{ category: 'C++',
    code: `void update(int*& ptr) {
      static int x = 100;
      ptr = &x;
  }
  int* p = nullptr;
  update(p);
  std::cout << *p;`,
    question: 'Given the function and code, what is printed?',
    choices: ['0', '100', 'Compilation error', 'Undefined behavior'],
    correctAnswer: '100'
  },
{ category: 'C++',
    code: `int a = 5;
  int* p = &a;
  int** pp = &p;
  **pp += 10;
  std::cout << a;`,
    question: 'What does this program print?',
    choices: ['10', '5', '15', 'Segmentation fault'],
    correctAnswer: '15'
  },
{ category: 'C++',
    code: `int* arr = new int[3]{1, 2, 3};
  std::cout << *(arr + 1);
  delete[] arr;`,
    question: 'What happens in this code?',
    choices: ['1', '2', '3', 'Compilation error'],
    correctAnswer: '2'
  },
{ category: 'C++',
    code: `int foo(int x) {
      static int y = x;
      y++;
      return y;
  }
  std::cout << foo(5) << foo(5);`,
    question: 'What is the result of running this?',
    choices: ['66', '56', '67', 'Compilation error'],
    correctAnswer: '67'
  },
{ category: 'C++',
    code: `void func(int x = 10) {
      std::cout << x;
  }
  int main() {
      func();
  }`,
    question: 'What will this print?',
    choices: ['Nothing', '0', '10', 'Compilation error'],
    correctAnswer: '10'
  },
{ category: 'C++',
    code: `constexpr int square(int x) {
      return x * x;
  }
  int y = square(5);
  std::cout << y;`,
    question: 'What happens here?',
    choices: ['Compilation error', '25', 'Address', '10'],
    correctAnswer: '25'
  },
{ category: 'C++',
    code: `#define SQUARE(x) x * x
  int y = SQUARE(1 + 2);`,
    question: 'What’s the bug here?',
    choices: ['9 is stored in y', '1 + 2 * 1 + 2 = 5', '3 is stored', 'Compiler warning'],
    correctAnswer: '1 + 2 * 1 + 2 = 5'
  },
{ category: 'C++',
    code: `struct Point {
      int x, y;
  };
  Point p1 = {3, 4};
  Point p2;
  p2 = p1;
  std::cout << p2.x << p2.y;`,
    question: 'Consider this code. What is printed?',
    choices: ['34', 'Compilation error', '43', 'Undefined behavior'],
    correctAnswer: '34'
  },
{ category: 'C++',
    code: `int a[] = {1, 2, 3};
  int* p = a;
  p++;
  std::cout << *p;`,
    question: 'What will this print?',
    choices: ['1', '2', '3', 'Undefined'],
    correctAnswer: '2'
  },
{ category: 'C++',
    code: `int arr[3] = {1, 2, 3};
  int* p = &arr[1];
  p++;
  std::cout << *p;`,
    question: 'Given the array and pointer manipulation, what is printed?',
    choices: ['1', '2', '3', 'Garbage value'],
    correctAnswer: '3'
  },
{ category: 'C++',
    code: `int x = 3;
  int* y = &x;
  int z = *y + 1;
  std::cout << z;`,
    question: 'What is the output of this code?',
    choices: ['2', '3', '4', 'Compilation error'],
    correctAnswer: '4'
  },
{ category: 'C++',
    code: `void setVal(int* x) {
      *x = 50;
  }
  int main() {
      int y = 25;
      setVal(&y);
      std::cout << y;
  }`,
    question: 'What will main print?',
    choices: ['25', '50', 'Undefined', 'Compilation error'],
    correctAnswer: '50'
  },
{ category: 'C++',
    code: `class Base { public: void foo(int) {} };
  class Derived : public Base { public: void foo(int) {} };
  int main() {
      Derived d;
      d.foo(10);
  }`,
    question: 'Which version of foo is called?',
    choices: ['Base::foo', 'Derived::foo', 'Compilation error', 'Ambiguous'],
    correctAnswer: 'Derived::foo'
  },
{ category: 'C++',
    code: `void greet(std::string name = "World") {
      std::cout << "Hello, " << name;
  }
  int main() {
      greet();
  }`,
    question: 'What happens here?',
    choices: ['Hello,', 'Hello, World', 'Compilation error', 'Runtime error'],
    correctAnswer: 'Hello, World'
  },
{ category: 'C++',
    question: 'Which part of memory does new int[5] allocate to?',
    choices: ['Stack', 'Code segment', 'Heap', 'Data segment'],
    correctAnswer: 'Heap'
  },
{ category: 'C++',
    question: 'Which operator is used to free memory from heap?',
    choices: ['delete', 'remove', 'free', 'release'],
    correctAnswer: 'delete'
  },
{ category: 'C++',
    code: `int x = 100;
  int* px = &x;
  std::cout << *px;`,
    question: 'What does this code print?',
    choices: ['Memory address', '100', '*px', 'Garbage'],
    correctAnswer: '100'
  },
{ category: 'C++',
    code: `int x;
  int* p = &x;
  delete p;`,
    question: "What's wrong with this?",
    choices: ['Nothing', "p wasn't dynamically allocated", 'x will be deleted', 'p is invalid'],
    correctAnswer: "p wasn't dynamically allocated"
  },
{ category: 'C++',
    question: 'In C++, the default visibility of struct members is:',
    choices: ['Private', 'Public', 'Protected', 'Static'],
    correctAnswer: 'Public'
  },
{ category: 'C++',
    question: 'In C++, the default visibility of class members is:',
    choices: ['Private', 'Public', 'Protected', 'Static'],
    correctAnswer: 'Private'
  },
{ category: 'C++',
    question: 'What does using namespace std; do?',
    choices: [
      'Includes all system headers',
      'Makes std:: optional for things like cout',
      'Declares a new namespace',
      'Adds preprocessor definitions'
    ],
    correctAnswer: 'Makes std:: optional for things like cout'
  },
{ category: 'C++',
    code: `int* p;
  *p = 42;`,
    question: 'What is wrong with this?',
    choices: [
      'Nothing',
      'Assigning through uninitialized pointer',
      'Memory leak',
      'Valid if inside a function'
    ],
    correctAnswer: 'Assigning through uninitialized pointer'
  },
{ category: 'C++',
    code: `int foo(int x) {
      return x + 1;
  }
  int main() {
      std::cout << foo(foo(2));
  }`,
    question: 'What is the output of this?',
    choices: ['4', '5', '6', 'Compilation error'],
    correctAnswer: '4'
  },
{ category: 'C++',
    code: `int x = 10;
  int* px = &x;
  *px += 5;
  std::cout << x;`,
    question: 'What happens here?',
    choices: ['10', '15', '5', 'Compilation error'],
    correctAnswer: '15'
  },
{ category: 'C++',
    code: `int a = 1;
  int b = 2;
  int* p = &a;
  p = &b;
  std::cout << *p;`,
    question: 'What is the output of this?',
    choices: ['1', '2', 'Undefined', 'Compilation error'],
    correctAnswer: '2'
  },
{ category: 'C++',
    code: `#define MAX(x, y) x > y ? x : y
  int a = MAX(2, 3) * 2;`,
    question: 'What’s the problem with this macro?',
    choices: ['Expansion error', 'Result is 6', 'Result is 4 due to lack of brackets', 'Segfault'],
    correctAnswer: 'Result is 6'
  },
{ category: 'C++',
    code: `namespace A {
      int x = 5;
  }
  int main() {
      std::cout << A::x;
  }`,
    question: 'What is the output?',
    choices: ['0', '5', 'Compilation error', 'x'],
    correctAnswer: '5'
  },
{ category: 'C++',
    code: `int arr[] = {5, 10};
  int* p = arr;
  std::cout << *(p + 1);`,
    question: 'What will be printed?',
    choices: ['5', '10', 'Garbage', 'Compilation error'],
    correctAnswer: '10'
  },
{ category: 'C++',
    code: `constexpr int x = 10;`,
    question: 'What does this line mean?',
    choices: [
      'x is a constant evaluated at runtime',
      'x must be initialized at runtime',
      'x is evaluated at compile-time',
      'constexpr can’t be used for ints'
    ],
    correctAnswer: 'x is evaluated at compile-time'
  },
  {
    category: 'UML',
    question: "What is the purpose of UML being called a 'Language'?",
    choices: [
      'It restricts the communication to only formal programming languages',
      'It provides the means to communicate this design in a logical, consistent, and comprehensible fashion',
      'It forces design into a single programming paradigm',
      'It allows runtime code generation from diagrams'
    ],
    correctAnswer: 'It provides the means to communicate this design in a logical, consistent, and comprehensible fashion'
  },
  {
    category: 'UML',
    question: 'What was one primary motivation for creating UML?',
    choices: [
      'To allow faster runtime performance',
      'To replace all existing object-oriented languages',
      'To resolve the clutter and confusion caused by dozens of modeling variants',
      'To enforce agile programming standards'
    ],
    correctAnswer: 'To resolve the clutter and confusion caused by dozens of modeling variants'
  },
  {
    category: 'UML',
    question: 'Which of the following is NOT a goal of UML?',
    choices: [
      'Enable the modeling of object-oriented designs',
      'Visually depict aspects of a solution’s design',
      'Standardize variable names in codebases',
      'Be independent of particular programming languages and processes'
    ],
    correctAnswer: 'Standardize variable names in codebases'
  },
  {
    category: 'UML',
    question: 'What does the solid line with an arrowhead in a class diagram signify?',
    choices: [
      'An abstract dependency',
      'A unidirectional association',
      'A composition relationship',
      'A type conversion'
    ],
    correctAnswer: 'A unidirectional association'
  },
  {
    category: 'UML',
    question: 'In UML, what does a filled diamond represent?',
    choices: [
      'Multiplicity',
      'Aggregation',
      'Composition',
      'Generalization'
    ],
    correctAnswer: 'Composition'
  },
  {
    category: 'UML',
    question: 'Which of these is not a visibility symbol used in class diagrams?',
    choices: ['+', '#', '/', '-'],
    correctAnswer: '/'
  },
  {
    category: 'UML',
    question: "Which of the following best defines 'aggregation' as shown in UML?",
    choices: [
      'It shows an object permanently embedded within another',
      'It uses a filled diamond to indicate strong ownership',
      'It is a part-of relationship with independent parts',
      'It indicates inheritance between two classes'
    ],
    correctAnswer: 'It is a part-of relationship with independent parts'
  },
  {
    category: 'UML',
    question: 'In UML, what does a generalization relationship model?',
    choices: [
      'A one-to-many multiplicity',
      'A bidirectional aggregation',
      'Inheritance between parent and child classes',
      'A dependency with notes'
    ],
    correctAnswer: 'Inheritance between parent and child classes'
  },
  {
    category: 'UML',
    question: 'Which of the following is TRUE about composition in UML?',
    choices: [
      'Components can be shared among multiple classes',
      'The relationship is depicted by a hollow diamond',
      'Instances may have multiple owners',
      'Components cannot exist independent of their owner'
    ],
    correctAnswer: 'Components cannot exist independent of their owner'
  },
  {
    category: 'UML',
    question: 'What UML construct supports ‘parent-child’ relationships?',
    choices: [
      'Dependency',
      'Association',
      'Generalization',
      'Aggregation'
    ],
    correctAnswer: 'Generalization'
  },
  {
    category: 'UML',
    question: 'What happens to a composed component when its owner is destroyed?',
    choices: [
      'The component persists independently',
      'The component is reassigned to another owner',
      'The component dies with the owner',
      'Nothing happens unless explicitly removed'
    ],
    correctAnswer: 'The component dies with the owner'
  },
  {
    category: 'UML',
    question: 'What does this mean in UML? -name : string = "guest"',
    choices: [
      'Protected variable with default null',
      'Private string variable with default value "guest"',
      'Public static function returning a string',
      'Read-only global constant'
    ],
    correctAnswer: 'Private string variable with default value "guest"'
  },
  {
    category: 'UML',
    question: 'According to the slides, which is NOT one of the three main parts of a class box in UML?',
    choices: [
      'Name',
      'Operations',
      'Dependencies',
      'Attributes'
    ],
    correctAnswer: 'Dependencies'
  },
  {
    category: 'UML',
    question: 'What is true about class diagrams in early-stage agile development?',
    choices: [
      'All attributes must be filled in at the start',
      'Only abstract classes are shown',
      'Some classes or details might be missing',
      'Only associations are allowed, not aggregations'
    ],
    correctAnswer: 'Some classes or details might be missing'
  },
  {
    category: 'UML',
    question: 'What does a dashed line in UML indicate?',
    choices: [
      'A generalization',
      'A dependency',
      'A bidirectional aggregation',
      'An interface implementation'
    ],
    correctAnswer: 'A dependency'
  },

{
      category: 'C++',
      question: 'What happens when the user enters “John Doe” using cin >> name?',
      choices: [
        'It throws a runtime error.',
        'The variable name will contain John.',
        'The variable name will contain John Doe.',
        'The entire input will be ignored due to whitespace.'
      ],
      correctAnswer: 'The variable name will contain John.'
    },
    {
      category: 'C++',
      question: 'In class diagrams, private members of a class are:',
      choices: [
        'Only accessible by derived classes.',
        'Accessible from anywhere in the same program.',
        'Accessible only by member functions of the same class.',
        'Always visible in header files.'
      ],
      correctAnswer: 'Accessible only by member functions of the same class.'
    },
    {
      category: 'C++',
      question: 'What is true of class constructors?',
      choices: [
        'They must always return an object.',
        'They are optional, and if not provided, a default one is created.',
        'They are called only for heap-allocated objects.',
        'They must be virtual to be invoked.'
      ],
      correctAnswer: 'They are optional, and if not provided, a default one is created.'
    },
    {
      category: 'C++',
      question: 'What keyword is used to define a generic function or class in C++?',
      choices: ['gen', 'generic', 'typedef', 'template'],
      correctAnswer: 'template'
    },
    {
      category: 'C++',
      question: 'In multiple inheritance, how is the derivation list structured?',
      choices: [
        'One class only, followed by ...',
        'One class followed by public',
        'A comma-separated list after :',
        'It must use virtual base classes'
      ],
      correctAnswer: 'A comma-separated list after :'
    },
    {
      category: 'C++',
      question: 'Which access modifier allows derived classes access but hides from external code?',
      choices: ['public', 'private', 'protected', 'static'],
      correctAnswer: 'protected'
    },
    {
      category: 'C++',
      question: 'What is the default access specifier for class inheritance in C++?',
      choices: ['public', 'private', 'protected', 'friend'],
      correctAnswer: 'private'
    },
    {
      category: 'C++',
      question: 'What is the output stream for errors called in C++?',
      choices: ['cin', 'cout', 'cerr', 'cerrout'],
      correctAnswer: 'cerr'
    },
    {
      category: 'C++',
      question: 'What distinguishes getline(cin, str) from cin >> str?',
      choices: [
        'getline reads entire lines including spaces.',
        'getline is buffered differently.',
        'getline requires a pointer as an argument.',
        'They are the same but one is deprecated.'
      ],
      correctAnswer: 'getline reads entire lines including spaces.'
    },
    {
      category: 'C++',
      question: 'What does friend allow in a class?',
      choices: [
        'Access to global functions',
        'Private inheritance',
        'A non-member to access private/protected members',
        'Forward declarations'
      ],
      correctAnswer: 'A non-member to access private/protected members'
    },
    {
      category: 'C++',
      question: 'What operator is overloaded to print user-defined objects using cout?',
      choices: ['>>', '->', '<<', '::'],
      correctAnswer: '<<'
    },
    {
      category: 'C++',
      question: 'What’s a key downside of dynamic dispatching with virtual?',
      choices: [
        'Less object flexibility',
        'Slower compile time',
        'Performance overhead at runtime',
        'Cannot use destructors'
      ],
      correctAnswer: 'Performance overhead at runtime'
    },
    {
      category: 'C++',
      question: 'Which constructor is called first when instantiating a derived object?',
      choices: [
        'The most derived one',
        'The one listed first in multiple inheritance',
        'The base class constructor',
        'The virtual constructor'
      ],
      correctAnswer: 'The base class constructor'
    },
    {
      category: 'C++',
      question: 'When does the compiler create an implicit copy constructor?',
      choices: [
        'Always',
        'If no constructor is provided',
        'If no copy constructor is defined explicitly',
        'If all variables are private'
      ],
      correctAnswer: 'If no copy constructor is defined explicitly'
    },
    {
      category: 'C++',
      question: 'What is the correct syntax for defining a class template?',
      choices: [
        'template class<T> class Foo',
        'template<typename T> class Foo',
        'generic<class T> class Foo',
        'template T class Foo'
      ],
      correctAnswer: 'template<typename T> class Foo'
    },
    {
      category: 'C++',
      question: 'Which inheritance type results in public members of base becoming protected in derived?',
      choices: ['public', 'private', 'protected', 'friend'],
      correctAnswer: 'protected'
    },
    {
      category: 'C++',
      question: 'How does a Rectangle class gain access to private data of a Square class?',
      choices: [
        'Inheritance',
        'Using public getter functions',
        'Declaring Rectangle as a friend class',
        'Using global functions'
      ],
      correctAnswer: 'Declaring Rectangle as a friend class'
    },
    {
      category: 'C++',
      question: 'What does template<class T> allow you to do?',
      choices: [
        'Create a function only for integers',
        'Dynamically create memory',
        'Define functions/classes that work with different types',
        'Use inheritance with templates'
      ],
      correctAnswer: 'Define functions/classes that work with different types'
    },
    {
      category: 'C++',
      question: 'What is true about polymorphism in C++?',
      choices: [
        'It only applies to overloaded constructors',
        'It only works with abstract classes',
        'It lets derived classes be accessed via base class pointers',
        'It breaks encapsulation'
      ],
      correctAnswer: 'It lets derived classes be accessed via base class pointers'
    },
    {
      category: 'C++',
      question: 'What does virtual void sayHello() = 0; signify?',
      choices: [
        'Overloaded method',
        'Inline function',
        'Pure virtual method',
        'Static dispatch method'
      ],
      correctAnswer: 'Pure virtual method'
    },
    {
      category: 'C++',
      question: 'Which of these cannot be overloaded in C++?',
      choices: ['+', '<<', '[]', '.'],
      correctAnswer: '.'
    },
    {
      category: 'C++',
      question: 'Why would using operator+ incorrectly be dangerous?',
      choices: [
        'It causes memory leaks',
        'It alters virtual tables',
        'It makes the code semantically confusing',
        'It compiles but does not link'
      ],
      correctAnswer: 'It makes the code semantically confusing'
    },
    {
      category: 'C++',
      question: 'What is the effect of defining Rectangle(Rectangle &r) without const?',
      choices: [
        'Nothing changes',
        'The object can\'t be passed to the constructor',
        'It allows modification of the source',
        'The copy constructor is now invalid'
      ],
      correctAnswer: 'It allows modification of the source'
    },
    {
      category: 'C++',
      question: 'Which STL component allows stepping through elements of collections of objects?',
      choices: ['Generics', 'Algorithms', 'Iterators', 'Data Templates'],
      correctAnswer: 'Iterators'
    },
    {
      category: 'C++',
      question: 'Which STL component acts on containers?',
      choices: ['Algorithms', 'Iterators', 'Data Templates'],
      correctAnswer: 'Algorithms'
    },
    {
      category: 'C++',
      code: `int x;
  cout << "Enter number: ";
  cin >> x;
  cout << "You entered: " << x;
  // Input: abc`,
      question: 'What is printed?',
      choices: [
        'Runtime error',
        'You entered: 0',
        'You entered: abc',
        'Nothing'
      ],
      correctAnswer: 'You entered: 0'
    },
    {
      category: 'C++',
      code: `string name;
  getline(cin, name);
  cout << name;
  // Input: John Doe`,
      question: 'What does this print?',
      choices: ['John', 'John Doe', 'Doe', 'Error'],
      correctAnswer: 'John Doe'
    },
    {
      category: 'C++',
      code: `template <typename T>
  T add(T a, T b) { return a + b; }
  
  int main() {
    cout << add(3, 4);
  }`,
      question: 'What is printed?',
      choices: ['7', '34', '0', 'Error'],
      correctAnswer: '7'
    },
    {
      category: 'C++',
      code: `Person* p;
  Student* s = new Student();
  p = s;
  p->sayHello();`,
      question: 'Which method is called?',
      choices: [
        'Person’s sayHello',
        'Student’s sayHello',
        'Error',
        'Undefined'
      ],
      correctAnswer: 'Person’s sayHello'
    },
    {
      category: 'C++',
      question: 'What changes this output to “I am a Student” instead of “I am a Person”?',
      choices: [
        'Add static to sayHello',
        'Add virtual to base class sayHello',
        'Use composition',
        'Remove inheritance'
      ],
      correctAnswer: 'Add virtual to base class sayHello'
    },
    {
      category: 'C++',
      code: `Person *p = new Person();
  // When Person has a pure virtual function.`,
      question: 'What happens here?',
      choices: [
        'Runs fine',
        'Error at compile time',
        'Error at runtime',
        'Instantiates abstract class'
      ],
      correctAnswer: 'Error at compile time'
    },
    {
      category: 'C++',
      question: 'In the expression Triangle *tr1 = new Triangle;, what does new do?',
      choices: [
        'Initializes variables to zero',
        'Declares a reference',
        'Allocates memory on the heap and calls the constructor',
        'Invokes a copy constructor'
      ],
      correctAnswer: 'Allocates memory on the heap and calls the constructor'
    },
    {
      category: 'C++',
      question: 'What does it mean to instantiate a class in C++?',
      choices: [
        'Create a function inside a class',
        'Define a constructor',
        'Create an object of the class',
        'Declare a template'
      ],
      correctAnswer: 'Create an object of the class'
    },
    {
      category: 'C++',
      question: 'When is a stack-allocated object destroyed in C++?',
      choices: [
        'When delete is called',
        'When main() returns',
        'When the function it was declared in returns',
        'At runtime manually'
      ],
      correctAnswer: 'When the function it was declared in returns'
    },
    {
      category: 'C++',
      question: 'What does “low coupling” indicate in object-oriented design?',
      choices: [
        'All classes share memory',
        'Classes are highly interdependent',
        'Classes are loosely connected and changes are isolated',
        'The program will run faster'
      ],
      correctAnswer: 'Classes are loosely connected and changes are isolated'
    },
    {
      category: 'C++',
      question: 'Which of the following scenarios describes high cohesion?',
      choices: [
        'A class performs unrelated tasks',
        'A class provides a single, well-defined functionality',
        'A class has many public data members',
        'A class delegates behavior to multiple external methods'
      ],
      correctAnswer: 'A class provides a single, well-defined functionality'
    },
    {
      category: 'C++',
      question: 'Why is high cohesion desirable in a C++ class?',
      choices: [
        'It increases runtime speed',
        'It minimizes constructor overhead',
        'It improves readability, maintainability, and reuse',
        'It ensures faster memory allocation'
      ],
      correctAnswer: 'It improves readability, maintainability, and reuse'
    },
    {
      category: 'C++',
      question: 'What best describes coupling in OOP?',
      choices: [
        'The amount of template usage in a class',
        'The dependency between components or classes',
        'The number of constructors a class defines',
        'Whether or not inheritance is used'
      ],
      correctAnswer: 'The dependency between components or classes'
    },
    {
      category: 'C++',
      question: 'Which of the following causes tight coupling in design?',
      choices: [
        'Using composition instead of inheritance',
        'Depending on hard-coded class implementations',
        'Using virtual functions and interfaces',
        'Delegating behavior through loose references'
      ],
      correctAnswer: 'Depending on hard-coded class implementations'
    },
    {
      category: 'C++',
      question: 'What is the downside of tight coupling between classes?',
      choices: [
        'It makes code easier to modify',
        'It allows access to private members',
        'It makes changes in one class affect many others',
        'It increases polymorphism'
      ],
      correctAnswer: 'It makes changes in one class affect many others'
    },
      {
        category: 'Design',
        question: 'What does high coupling lead to, according to the slides?',
        choices: [
          'Better maintainability',
          'Stable interfaces',
          'Interdependent entities, hard-to-change design',
          'Increased code reuse'
        ],
        correctAnswer: 'Interdependent entities, hard-to-change design'
      },
      {
        category: 'Design',
        question: 'What is a consequence of low cohesion?',
        choices: [
          'Improved clarity of dependencies',
          'Entity’s members contribute to a well-defined purpose',
          'Vague entity names and unrelated functionality',
          'Easier to maintain and extend'
        ],
        correctAnswer: 'Vague entity names and unrelated functionality'
      },
      {
        category: 'Design',
        question: 'What principle is illustrated by: “Take the parts that vary and encapsulate them”?',
        choices: [
          'Open/Closed Principle',
          'Encapsulation Principle',
          'Interface Segregation Principle',
          'Encapsulate What Varies'
        ],
        correctAnswer: 'Encapsulate What Varies'
      },
      {
        category: 'Design',
        question: 'What is the main downside of high coupling in object-oriented systems?',
        choices: [
          'Components are reusable',
          'Interfaces are well-isolated',
          'Changes in one entity ripple through many others',
          'You save time during debugging'
        ],
        correctAnswer: 'Changes in one entity ripple through many others'
      },
      {
        category: 'Design',
        question: 'What defines low coupling?',
        choices: [
          'Passing entire objects',
          'Sharing global variables',
          'Using C++ friend classes',
          'Sharing only data through parameters and returns'
        ],
        correctAnswer: 'Sharing only data through parameters and returns'
      },
      {
        category: 'Design',
        question: 'According to the slides, what does “code to an interface” really mean?',
        choices: [
          'Always use Java interfaces',
          'Code only against abstract classes',
          'Code to a supertype, not a subtype',
          'Use design patterns like Adapter'
        ],
        correctAnswer: 'Code to a supertype, not a subtype'
      },
      {
        category: 'Design',
        question: 'What is a drawback of creating a large inheritance hierarchy, according to the athlete/team example?',
        choices: [
          'Promotes flexibility',
          'Respects the Open/Closed Principle',
          'Causes extensive code duplication',
          'Increases interface cohesion'
        ],
        correctAnswer: 'Causes extensive code duplication'
      },
      {
        category: 'Design',
        question: 'What kind of relationship does composition establish?',
        choices: ['IS-A', 'HAS-A', 'IS-LIKE-A', 'USES-A'],
        correctAnswer: 'HAS-A'
      },
      {
        category: 'Design',
        question: 'What principle is best followed by delegating behavior through behavior objects?',
        choices: [
          'Liskov Substitution',
          'Encapsulate What Varies',
          'Dependency Inversion',
          'Interface Segregation'
        ],
        correctAnswer: 'Encapsulate What Varies'
      },
      {
        category: 'Design',
        question: 'What is the goal of the Interface Segregation Principle?',
        choices: [
          'Keep clients dependent on fewer modules',
          'Avoid adding new subclasses',
          'Avoid fat interfaces and promote cohesive ones',
          'Remove public methods'
        ],
        correctAnswer: 'Avoid fat interfaces and promote cohesive ones'
      },
      {
        category: 'Design',
        question: 'Which principle states “Abstractions should not depend upon details”?',
        choices: [
          'Open/Closed Principle',
          'Interface Segregation',
          'Dependency Inversion',
          'Liskov Substitution'
        ],
        correctAnswer: 'Dependency Inversion'
      },
      {
        category: 'Design',
        question: 'What does the Dependency Inversion Principle suggest about modules?',
        choices: [
          'High-level modules should depend on low-level modules',
          'Both should depend on abstractions',
          'Details should be built first',
          'Interface code should be written last'
        ],
        correctAnswer: 'Both should depend on abstractions'
      },
      {
        category: 'Design',
        question: 'What design risk arises when we add every new method to a base class?',
        choices: [
          'Improved reusability',
          'Interface becomes too cohesive',
          'Violates the Liskov Substitution Principle',
          'Violates the Open/Closed Principle'
        ],
        correctAnswer: 'Violates the Open/Closed Principle'
      },
      {
        category: 'Design',
        question: 'What’s the downside of adapting code to fit a design pattern instead of the reverse?',
        choices: [
          'Increased flexibility',
          'Risk of missing out on standardization',
          'Risk of solving the wrong problem',
          'Simpler implementation'
        ],
        correctAnswer: 'Risk of solving the wrong problem'
      },
      {
        category: 'Design',
        question: 'What do patterns encourage when used properly?',
        choices: [
          'Early code writing',
          'Inheritance-heavy architectures',
          'Shared learning and abstract thinking',
          'Runtime performance focus'
        ],
        correctAnswer: 'Shared learning and abstract thinking'
      },
      {
        category: 'Design',
        question: 'What is the consequence component of a design pattern used for?',
        choices: [
          'Naming the pattern',
          'Describing the class diagram',
          'Evaluating trade-offs of applying the pattern',
          'Explaining the runtime behavior'
        ],
        correctAnswer: 'Evaluating trade-offs of applying the pattern'
      },
      {
        category: 'Design',
        question: 'What are the three types of design patterns identified by the Gang of Four?',
        choices: [
          'Creation, Delegation, Abstract',
          'Subclass, Composition, Observer',
          'Creational, Structural, Behavioural',
          'Simple, Complex, Abstract'
        ],
        correctAnswer: 'Creational, Structural, Behavioural'
      },
      {
        category: 'Design',
        question: 'Which of the following is NOT a benefit listed under design pattern usage?',
        choices: [
          'Faster development',
          'Less abstraction in code',
          'More modular systems',
          'Common terminology among developers'
        ],
        correctAnswer: 'Less abstraction in code'
      },
      {
        category: 'Design',
        question: 'What is the definition of the Single Responsibility Principle?',
        choices: [
          'A class should only have one method',
          'Every object in a system should be closed to modification',
          'Every object in a system should have a single responsibility, and all the object’s services should be focused on carrying out that single responsibility',
          'A class must implement all methods of its interface'
        ],
        correctAnswer: 'Every object in a system should have a single responsibility, and all the object’s services should be focused on carrying out that single responsibility'
      },
      {
        category: 'Design',
        question: 'What is the Open/Closed Principle?',
        choices: [
          'Classes should be editable and testable',
          'Classes should be open for modification and closed to inheritance',
          'Classes should be open for extension, and closed for modification',
          'You should avoid extending existing classes'
        ],
        correctAnswer: 'Classes should be open for extension, and closed for modification'
      },
      {
        category: 'Design',
        question: 'What is the Liskov Substitution Principle?',
        choices: [
          'All base classes should have a constructor',
          'Subtypes must be substitutable for their base types',
          'Subtypes must override every virtual method of the base class',
          'All derived classes should only use composition'
        ],
        correctAnswer: 'Subtypes must be substitutable for their base types'
      },
      {
        category: 'Design',
        question: 'What does the Interface Segregation Principle state?',
        choices: [
          'Code should use only concrete classes',
          'One large interface is better than many specific ones',
          'Many client-specific interfaces are better than one general purpose interface',
          'All clients must inherit from a base class'
        ],
        correctAnswer: 'Many client-specific interfaces are better than one general purpose interface'
      },
      {
        category: 'Design',
        question: 'What is the Dependency Inversion Principle?',
        choices: [
          'Lower-level modules should not call higher-level modules',
          'Code should depend only on concrete implementations',
          'High-level modules should not depend upon low-level modules. Both should depend upon abstractions.',
          'Modules should always inherit behavior'
        ],
        correctAnswer: 'High-level modules should not depend upon low-level modules. Both should depend upon abstractions.'
      },
      {
        category: 'Design',
        question: 'What is the meaning of “Encapsulate What Varies”?',
        choices: [
          'Keep everything in the same class for simplicity',
          'Put all similar code into static helper classes',
          'Take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don’t',
          'Create an abstract interface for every method'
        ],
        correctAnswer: 'Take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don’t'
      },
      {
        category: 'Design',
        question: 'What does “Code to an Interface, Not an Implementation” mean?',
        choices: [
          'Always use language-level interfaces',
          'Create a subclass for each new feature',
          'Interact with a supertype, not a subtype',
          'Define all logic in constructors'
        ],
        correctAnswer: 'Interact with a supertype, not a subtype'
      },
      {
        category: 'Design',
        question: 'What is the principle behind “Favour Composition Over Inheritance”?',
        choices: [
          'You should never use inheritance in OOP',
          'Always override parent methods in derived classes',
          'By favouring delegation, composition, and aggregation over inheritance, we can produce software that is more flexible, and easier to maintain, extend, and reuse',
          'Create the largest inheritance tree to reduce code duplication'
        ],
        correctAnswer: 'By favouring delegation, composition, and aggregation over inheritance, we can produce software that is more flexible, and easier to maintain, extend, and reuse'
      },
      {
        category: 'Design',
        question: 'What does the principle of High Cohesion imply?',
        choices: [
          'Group unrelated methods to reduce memory',
          'All members of a class should be private',
          'A class should have functions that act on the same set of data and contribute to a specific purpose',
          'Every function in the system should be public'
        ],
        correctAnswer: 'A class should have functions that act on the same set of data and contribute to a specific purpose'
      },
      {
        category: 'Design',
        question: 'What is Low Coupling associated with?',
        choices: [
          'Strong dependencies between objects',
          'Sharing global variables across modules',
          'Hiding data and minimizing dependencies between classes',
          'Making classes friend with each other'
        ],
        correctAnswer: 'Hiding data and minimizing dependencies between classes'
      },
      {
        category: 'Design',
        question: 'What is a direct benefit of adhering to the Single Responsibility Principle?',
        choices: [
          'Lower run-time overhead',
          'Higher coupling',
          'Increased cohesion',
          'More global access'
        ],
        correctAnswer: 'Increased cohesion'
      },
      {
        category: 'Design',
        question: 'Which principle is directly violated when a class must override methods it doesn\'t use?',
        choices: [
          'Liskov Substitution',
          'Open/Closed',
          'Interface Segregation',
          'Dependency Inversion'
        ],
        correctAnswer: 'Interface Segregation'
      },
      {
        category: 'Design',
        question: 'What does the SOLID acronym stand for?',
        choices: [
          'Structured, Open, Limited, Interchangeable, Defined',
          'Substitution, Object-orientation, Logic, Interface, Design',
          'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
          'Static Objects, Linked Interfaces, Design patterns'
        ],
        correctAnswer: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion'
      },
      {
        category: 'Design',
        question: 'A Square subclass overrides setWidth() and setHeight() from Rectangle, changing both at once. This violates which principle?',
        choices: [
          'Interface Segregation',
          'Liskov Substitution',
          'Single Responsibility',
          'Dependency Inversion'
        ],
        correctAnswer: 'Liskov Substitution'
      },
      {
        category: 'Design',
        question: 'A new feature requires modifying an existing, well-tested Shape class. This breaks which principle?',
        choices: [
          'Open/Closed Principle',
          'Liskov Substitution Principle',
          'Single Responsibility Principle',
          'Interface Segregation'
        ],
        correctAnswer: 'Open/Closed Principle'
      },
      {
        category: 'Design',
        question: 'You create a fat interface Printer, which includes scan(), fax(), and print(). Your BasicPrinter must implement scan() and fax() but does nothing in them. What principle is violated?',
        choices: [
          'Liskov',
          'Open/Closed',
          'Interface Segregation',
          'Single Responsibility'
        ],
        correctAnswer: 'Interface Segregation'
      },
      {
        category: 'Design',
        question: 'A single UserAccount class stores data, manages sessions, and logs activity. This violates which principle?',
        choices: [
          'Liskov Substitution',
          'Open/Closed',
          'Single Responsibility',
          'Dependency Inversion'
        ],
        correctAnswer: 'Single Responsibility'
      },
      {
        category: 'Design',
        question: 'You create a subclass just to change a few private variables. The parent class was modified directly for this. What principle was violated?',
        choices: [
          'Open/Closed',
          'Liskov Substitution',
          'Interface Segregation',
          'Dependency Inversion'
        ],
        correctAnswer: 'Open/Closed'
      },
      {
        category: 'Design',
        question: 'A class hierarchy breaks when a subclass’s method overrides behavior in a way that breaks a test on the parent class. This is a classic example of violating:',
        choices: [
          'Liskov Substitution',
          'Interface Segregation',
          'Open/Closed',
          'Composition Principle'
        ],
        correctAnswer: 'Liskov Substitution'
      },
      {
        category: 'User',
        question: 'Which of the following is a key reason stories should be Independent?',
        choices: [
          'To make developers work alone on tasks',
          'To reduce code duplication in design',
          'So they can be freely reordered or moved in the release schedule',
          'So they require detailed technical specifications up front'
        ],
        correctAnswer: 'So they can be freely reordered or moved in the release schedule'
      },
      {
        category: 'User',
        question: 'What does the “N” in INVEST mean according to your slides?',
        choices: [
          'Stories should be nested',
          'Stories must include numeric IDs',
          'Stories are not contracts; they are negotiable and discussed',
          'Stories are non-functional by design'
        ],
        correctAnswer: 'Stories are not contracts; they are negotiable and discussed'
      },
      {
        category: 'User',
        question: 'What is a common danger when a user story includes too much detail up front?',
        choices: [
          'The dev team gets bored',
          'The story loses relevance',
          'It may be mistaken as complete, and conversation stops',
          'It becomes testable'
        ],
        correctAnswer: 'It may be mistaken as complete, and conversation stops'
      },
      {
        category: 'User',
        question: 'According to the “V” in INVEST, what is a red flag in user stories?',
        choices: [
          'Stories written in the third person',
          'Stories focused on technical implementation (e.g., connection pooling)',
          'Stories with fewer than three acceptance tests',
          'Stories that use a persona'
        ],
        correctAnswer: 'Stories focused on technical implementation (e.g., connection pooling)'
      },
      {
        category: 'User',
        question: 'Which story is a better example of value to the user, based on the slide?',
        choices: [
          '“All logging will use Log4J v3.”',
          '“Connection pooling should follow standard practices.”',
          '“Up to 50 users can use the app with a 5-user DB license.”',
          '“Exceptions are caught and stack traces logged.”'
        ],
        correctAnswer: '“Up to 50 users can use the app with a 5-user DB license.”'
      },
      {
        category: 'User',
        question: 'What makes a story un-estimatable, according to the slides?',
        choices: [
          'It’s written in passive voice',
          'The acceptance tests are too strict',
          'It’s too big or developers lack technical/domain knowledge',
          'It hasn’t been approved by the customer'
        ],
        correctAnswer: 'It’s too big or developers lack technical/domain knowledge'
      },
      {
        category: 'User',
        question: 'What is a spike in story estimation used for?',
        choices: [
          'Stress testing',
          'Performance validation',
          'A short, timeboxed experiment to learn just enough to estimate',
          'A placeholder for missing features'
        ],
        correctAnswer: 'A short, timeboxed experiment to learn just enough to estimate'
      },
      {
        category: 'User',
        question: 'What is the INVEST guideline around story size?',
        choices: [
          'Stories should be at least a week of work',
          'Stories should be small but not too small',
          'Stories should include 10–20 sub-tasks',
          'Stories should be broken down into separate UMLs'
        ],
        correctAnswer: 'Stories should be small but not too small'
      },
      {
        category: 'User',
        question: 'Why is it important for a story to be testable?',
        choices: [
          'To avoid writing unit tests',
          'So it can be discussed by the whole team',
          'So developers know when the story is done',
          'So testers can manually check off items'
        ],
        correctAnswer: 'So developers know when the story is done'
      },
      {
        category: 'User',
        question: 'Which of the following violates the “Testable” principle?',
        choices: [
          '“A user must never have to wait long for a screen to appear.”',
          '“User logs in with credentials.”',
          '“Error messages must be visible.”',
          '“A user can reset their password.”'
        ],
        correctAnswer: '“A user must never have to wait long for a screen to appear.”'
      },
      {
        category: 'User',
        question: 'What’s the recommended automation level for testable stories?',
        choices: ['50%', '75%', '10%', '99%'],
        correctAnswer: '99%'
      },
      {
        category: 'User',
        question: 'What INVEST principle is violated when you require a backend to be implemented before you can start on a frontend story?',
        choices: ['Valuable', 'Negotiable', 'Independent', 'Testable'],
        correctAnswer: 'Independent'
      },
      {
        category: 'User',
        question: 'Which of these is not a suggested fix for stories that are too dependent?',
        choices: [
          'Combine them into a larger independent story',
          'Find a different way to split them',
          'Assign them all the same point value',
          'Prioritize conversations between customer and devs'
        ],
        correctAnswer: 'Assign them all the same point value'
      },
      {
        category: 'User',
        question: 'Why is it helpful to defer story detail until later in development?',
        choices: [
          'It’s faster to write',
          'You avoid wasting time on stories that might not be needed',
          'You can skip confirmation',
          'So testers can write the test cases themselves'
        ],
        correctAnswer: 'You avoid wasting time on stories that might not be needed'
      },
      {
        category: 'User',
        question: 'Why is using domain language critical in user stories?',
        choices: [
          'It makes translation easier',
          'It keeps stories compatible with test scripts',
          'It helps both devs and customers understand the story',
          'It’s required by IEEE 830 standard'
        ],
        correctAnswer: 'It helps both devs and customers understand the story'
      },
      {
        category: 'User',
        question: 'What does the “S” in INVEST stand for, and what does it imply?',
        choices: [
          'Secure – must follow all security rules',
          'Specific – should not be vague',
          'Small – should be small enough to fit in a sprint',
          'Standardized – must follow IEEE story format'
        ],
        correctAnswer: 'Small – should be small enough to fit in a sprint'
      },
      {
        category: 'User',
        question: 'A team cannot complete a story in one sprint, even after breaking it down. What INVEST property is being violated?',
        choices: ['Testable', 'Estimable', 'Small', 'Independent'],
        correctAnswer: 'Small'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/abs.png',
        choices: ['Bridge','Factory Method','Abstract Factory','Adapter'
        ],
        correctAnswer: 'Abstract Factory'
      },
 
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/adapter.png',
        choices: ['Bridge','Strategy','Abstract Factory','Adapter'
        ],
        correctAnswer: 'Adapter'
      },
    
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/bridge.png',
        choices: ['Bridge','Strategy','Builder','Adapter'
        ],
        correctAnswer: 'Bridge'
      }, 
      
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/builder.png',
        choices: ['Bridge','Strategy','Builder','Bob'
        ],
        correctAnswer: 'Builder'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/command.png',
        choices: ['Bridge','Command','Observer','Composite'
        ],
        correctAnswer: 'Command'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/composite.png',
        choices: ['Bridge','Command','Visitor','Composite'
        ],
        correctAnswer: 'Composite'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/decorator.png',
        choices: ['Decorator','Command','Visitor','Composite'
        ],
        correctAnswer: 'Decorator'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/factory.png',
        choices: ['Decorator','Factory Method','Visitor','Abstract Factory'
        ],
        correctAnswer: 'Factory Method'
      },
  
      
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/fly.png',
        choices: ['Decorator','Factory Method','Flyweight','Abstract Factory'
        ],
        correctAnswer: 'Flyweight'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/obs.png',
        choices: ['Decorator','Observer','Flyweight','Abstract Factory'
        ],
        correctAnswer: 'Observer'
      },
  
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/proto.png',
        choices: ['Decorator','Prototype','Flyweight','Abstract Factory'
        ],
        correctAnswer: 'Prototype'
      },
  
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/single.png',
        choices: ['Observer','Prototype','Flyweight','Singlton'
        ],
        correctAnswer: 'Singlton'
      },
  
      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/state.png',
        choices: ['Observer','State','Strategy','Singlton'
        ],
        correctAnswer: 'State'
      },

      { category: 'Patterns',
        question: 'What is the following desgin pattern?',
        image: '/data/imgs/visitor.png',
        choices: ['Visiting','State','Visitor','Singlton'
        ],
        correctAnswer: 'Visitor'
      },
];

export default cs3307;
