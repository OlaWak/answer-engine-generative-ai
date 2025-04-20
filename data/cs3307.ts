// data/cs3307.ts
export type Question = {
  question: string;
  code?: string;             
  choices: string[];
  correctAnswer: string;
  image?: string;
};

const cs3307: Question[] = [
  {
    question: 'In C++, a non-null pointer always “points to” data allocated on the heap.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    question: 'If a variable i is declared as:\nconst int i = 0;\nthen the value of i cannot be changed in subsequent code.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'The syntax const int *bob indicates that bob is a:',
    choices: [
      'Regular pointer to regular int type',
      'Constant pointer to regular int type',
      'Regular pointer to constant int type',
      'Constant pointer to constant int type'
    ],
    correctAnswer: 'Regular pointer to constant int type'
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    question: "In C++, the destructor for an object is always called when the object is destroyed.",
    choices: ["True", "False"],
    correctAnswer: "True"
  },
  {
    question: "In C++, only operations that are declared to be virtual can be overridden in derived classes.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "All member functions in a C++ class have a this pointer.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
  {
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
  {
    question: "In a UML class diagram, there can never be more than one association or relationship between any two classes in the diagram.",
    choices: ["True", "False"],
    correctAnswer: "False"
  },
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    question: 'The name C++ is derived from the ++ increment operator in C.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'Before being called C++, the language was originally referred to as C with Classes.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
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
  {
    question: 'The C++ language is a strict superset of C.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    question: 'Classes are mandatory in all valid C++ programs.',
    choices: ['True', 'False'],
    correctAnswer: ''
  },
  {
    question: 'A valid C++ program can have how many main() functions:',
    choices: ['0', '1', 'More than 1', 'All of the above are, in fact, valid'],
    correctAnswer: '1'
  },
  {
    question: 'The following is the simplest statement in C++: \n;',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'In C++, a class and a struct are more-or-less equivalent, except for their default visibilities.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
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
  {
    question: 'In C++, the destructor for an object is always called when the object is destroyed.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'Friendship between classes in C++ is:',
    choices: [
      'Both reciprocal and transitive',
      'Reciprocal but not transitive',
      'Transitive but not reciprocal',
      'Neither reciprocal nor transitive'
    ],
    correctAnswer: 'Neither reciprocal nor transitive'
  },
  {
    question: 'Static member functions in C++ have a this pointer.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
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
  {
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
  {
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
  {
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
  {
    question: 'The Prototype pattern, as discussed in class, works by wrapping one object inside another with the same interface.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'The Bridge pattern, as discussed in class, defines a family of algorithms, encapsulates each one, and makes them interchangeable. Bridge lets the algorithm vary independently from clients that use it.',
    choices: ['True', 'False'],
    correctAnswer: 'False'
  },
  {
    question: 'The Command pattern decouples the object that invokes an operation from the one that knows how to perform it.',
    choices: ['True', 'False'],
    correctAnswer: 'True'
  },
  {
    question: 'Which key difference distinguishes Abstract Factory from Factory Method, according to the PowerPoint?',
    choices: [
      'Factory Method uses aggregation/composition, Abstract Factory uses inheritance',
      'Factory Method is for creating families, Abstract Factory is for a single product',
      'Factory Method uses inheritance; Abstract Factory uses composition and creates families',
      'Both are identical except for naming conventions'
    ],
    correctAnswer: 'Abstract Factory uses aggregation/composition; Factory Method uses inheritance'
  },
  {
    question: 'What is one major limitation of the Abstract Factory pattern according to the slides?',
    choices: [
      'Difficult to support new kinds of products',
      'Does not work with inheritance',
      'Requires dynamic memory allocation',
      'Needs multiple singletons'
    ],
    correctAnswer: 'Difficult to support new kinds of products'
  },
  {
    question: 'The Abstract Factory pattern is applicable when:',
    choices: [
      'A system should be configured with one of multiple families of products',
      'An object should be created only once',
      'There’s a need to extend existing hierarchies',
      'A superclass needs to override behavior of a subclass'
    ],
    correctAnswer: 'A system should be configured with one of multiple families of products'
  },
  {
    question: 'Which of the following code usage characteristics most strongly supports this being an Abstract Factory pattern?',
    choices: [
      'Aggregation/composition of multiple factory methods',
      'A single overridden factory function',
      'Usage of friend classes',
      'A static method creating global instances'
    ],
    correctAnswer: 'Aggregation/composition of multiple factory methods'
  },
 
  {
    question: 'The Abstract Factory pattern is applicable when:\n“A system should be independent of how its products are created.”\nWhich other scenario also matches its applicability?',
    choices: [
      'When objects require dynamic configuration at runtime',
      'When a system should be configured with one of multiple families of products',
      'When only one instance of a class must exist',
      'When object creation should be delegated to subclasses'
    ],
    correctAnswer: 'When a system should be configured with one of multiple families of products'
  },
  {
    question: 'In the Abstract Factory design pattern, which statement is true about client responsibilities?',
    choices: [
      'Client inherits the concrete factory class to instantiate objects.',
      'Client must be aware of all possible product subclasses.',
      'Client controls when objects are created, while factory controls what is created.',
      'Client directly instantiates the product classes using new.'
    ],
    correctAnswer: 'Client controls when objects are created, while factory controls what is created.'
  },

  {
    question: '“Provide an interface for creating families of related or dependent objects without specifying their concrete classes.” Which design pattern does this definition describe?',
    choices: [
      'Abstract Factory',
      'Singleton',
      'Factory Method',
      'Adapter'
    ],
    correctAnswer: 'Abstract Factory'
  },
  
  {
    question: '“Separate the construction of a complex object from its representation so that the same construction process can create different representations.” Which design pattern is this the textbook definition of?',
    choices: [
      'Builder',
      'Factory Method',
      'Abstract Factory',
      'Adapter'
    ],
    correctAnswer: 'Builder'
  },
  
  {
    question: 'Which of the following is NOT a listed consequence of the Builder pattern from the slides?',
    choices: [
      'Lets you vary a product’s internal representation',
      'Isolates code for construction and representation',
      'Makes exchanging product families easy',
      'Gives you finer control over the construction process'
    ],
    correctAnswer: 'Makes exchanging product families easy'
  },
  

  {
    question: 'What is not a listed consequence of the Builder pattern?',
    choices: [
      'Lets you vary a product’s internal representation',
      'Isolates code for construction and representation',
      'Allows run-time class generation',
      'Gives you finer control over the construction process'
    ],
    correctAnswer: 'Allows run-time class generation'
  },
  {
    question: 'Which of the following statements about Builder vs. Abstract Factory is correct?',
    choices: [
      'Builder creates families of related objects available immediately',
      'Abstract Factory assembles one complex object',
      'Abstract Factory is used when parts are created and assembled in steps',
      'Builder creates one, complex product, usually made up of different parts'
    ],
    correctAnswer: 'Builder creates one, complex product, usually made up of different parts'
  },
  {
    question: 'Which of the following best explains why the Builder pattern is suitable when constructing complex objects in a consistent way?',
    choices: [
      'Different objects may require runtime injection of dependencies',
      'The construction process must allow different representations for the object that’s constructed',
      'You want to ensure product variants remain consistent with their factory source',
      'Object creation should be decoupled from class hierarchy and handled via interfaces'
    ],
    correctAnswer: 'The construction process must allow different representations for the object that’s constructed'
  },
  
  {
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
  {
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
  {
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
 
  {
    question: `Why can’t a copy constructor be used to duplicate AppConfig objects in the prototype example (refer to slides)?`,
    choices: [
      'Because AppConfig is a template class',
      'Because AppConfig is abstract and cannot be instantiated directly',
      'Because the compiler disables copy constructors by default',
      'Because clone() uses deep copying'
    ],
    correctAnswer: 'Because AppConfig is abstract and cannot be instantiated directly'
  },
 
  {
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
  {
    question: `When might you prefer using prototypes instead of factory subclasses to build game levels?`,
    choices: [
      'When you want the client to have strict control over object creation',
      'When the object creation depends on external configuration files',
      'When you want flexible combinations of products without requiring subclassing',
      'When object creation needs to be restricted to a single instance'
    ],
    correctAnswer: 'When you want flexible combinations of products without requiring subclassing'
  },


  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
    question: '“There must be exactly one instance of a class. It must be accessible to clients from a well-known access point.” This is the applicability condition for which design pattern?',
    choices: ['Builder', 'Abstract Factory', 'Singleton', 'Decorator'],
    correctAnswer: 'Singleton'
  },
  {
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
  {
    question: 'Why is the Logger constructor declared protected in the Singleton pattern?',
    choices: [
      'To prevent subclassing',
      'To prevent inheritance',
      'To prevent instantiation from outside the class',
      'To allow static inheritance'
    ],
    correctAnswer: 'To prevent instantiation from outside the class'
  },
  {
    question: 'Which design pattern requires you to “worry about who deletes the instance” unless smart pointers are used?',
    choices: ['Builder', 'Singleton', 'Factory Method', 'Adapter'],
    correctAnswer: 'Singleton'
  },
  {
    question: 'Which of the following is an applicability condition listed directly on the Singleton slide?',
    choices: [
      'There must be no global access to the object',
      'The object must support deep copying',
      'The sole instance should be extensible by subclassing',
      'The object should be composed of multiple products'
    ],
    correctAnswer: 'The sole instance should be extensible by subclassing'
  },
  {
    code: `virtual Student* createStudent(const std::string& name) = 0;`,
    question: 'This line defines a method that defers instantiation to subclasses. Which design pattern is this an example of?',
    choices: ['Factory Method', 'Prototype', 'Singleton', 'Abstract Factory'],
    correctAnswer: 'Factory Method'
  },
  {
    question: '“A class can’t anticipate the class of objects it must create” is an Applicability condition for which design pattern?',
    choices: ['Prototype', 'Abstract Factory', 'Factory Method', 'Strategy'],
    correctAnswer: 'Factory Method'
  },
  {
    question: 'Which of the following is not listed under the Consequences slide for the Factory Method pattern?',
    choices: [
      'Eliminates the need to bind application-specific classes into our code',
      'Clients have to subclass the Creator class',
      'Code only deals with the Product interface',
      'Allows creation of entire families of related objects'
    ],
    correctAnswer: 'Allows creation of entire families of related objects'
  },
  {
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
  {
    question: 'What is one sentence from the slides that explains how Factory Method avoids tightly coupling your app logic to specific concrete classes?',
    choices: [
      'The code only deals with the Product interface, so it can work with any user-defined ConcreteProduct classes',
      'It instantiates all its subclasses directly using new',
      'The interface itself handles all memory cleanup',
      'The code depends on static factory selectors'
    ],
    correctAnswer: 'The code only deals with the Product interface, so it can work with any user-defined ConcreteProduct classes'
  },
  {
    question: 'You’re designing a flexible system where the base class shouldn’t care what concrete product is made, but you still want new products without modifying that base. What drawback might you run into when using the Factory Method pattern?',
    choices: [
      'You’ll have to subclass the Creator class just to create a particular ConcreteProduct object',
      'You won’t be able to enforce abstract interfaces',
      'You must recompile the codebase every time a subclass is made',
      'You can’t pass parameters into constructors'
    ],
    correctAnswer: 'You’ll have to subclass the Creator class just to create a particular ConcreteProduct object'
  },
  {
    question: 'Your dev team is tired of adding else-if statements every time a new student department is created. What statement from the slides explains why this is a problem?',
    choices: [
      'We are binding application-specific logic into a dynamic class',
      'We are using the wrong polymorphic signature',
      'We have to violate the Open-Closed Principle each time we add a new department',
      'We forgot to use the adapter pattern'
    ],
    correctAnswer: 'We have to violate the Open-Closed Principle each time we add a new department'
  },
  {
    question: 'What phrase from the slides illustrates how Factory Method can support user-defined products without rewriting existing logic?',
    choices: [
      'It dynamically casts interfaces at runtime',
      'It allows classes to be serialized from XML',
      'It stores object type in a runtime string',
      'It can work with any user-defined ConcreteProduct classes'
    ],
    correctAnswer: 'It can work with any user-defined ConcreteProduct classes'
  },
  {
    question: 'Factory methods eliminate the need to:',
    choices: [
      'explicitly instantiate derived interfaces',
      'bind application-specific classes into our code',
      'recompile after each subclass change',
      'store type metadata in a visitor object'
    ],
    correctAnswer: 'bind application-specific classes into our code'
  },
  {
    question: 'Which pattern is defined as:\n“Define an interface for creating an object, but let subclasses decide which class to instantiate”?',
    choices: ['Abstract Factory', 'Builder', 'Factory Method', 'Prototype'],
    correctAnswer: 'Factory Method'
  },
  {
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
  {
    question: 'You’re building a loan system where the behavior of withdraw() should change at runtime depending on whether the account is in New, Applied, or Open state. What design pattern fits best here?',
    choices: ['Builder', 'Abstract Factory', 'State', 'Observer'],
    correctAnswer: 'State'
  },
  {
    question: 'Which of the following quotes best describes a consequence of applying the State design pattern?',
    choices: [
      'Makes state transitions explicit',
      'Supports interface segregation',
      'Enables recursive backtracking',
      'Decouples product creation from client logic'
    ],
    correctAnswer: 'Makes state transitions explicit'
  },
  {
    question: '“Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class.” What design pattern is being defined here?',
    choices: ['State', 'Strategy', 'Factory Method', 'Decorator'],
    correctAnswer: 'State'
  },
  {
    question: 'What makes LineOfCreditState objects easy to reuse and localize behavior, according to the slides?',
    choices: [
      'They are registered as global statics',
      'They use composition instead of inheritance',
      'State-specific behaviour is localized into separate state classes',
      'They inherit from an abstract interface of the credit manager'
    ],
    correctAnswer: 'State-specific behaviour is localized into separate state classes'
  },
  {
    question: 'What’s the correct reason, straight from the slides, why a class like OpenState might work across multiple objects instead of making a new one every time?',
    choices: [
      'State objects can be shared',
      'Singleton construction avoids runtime errors',
      'Enumerated types can’t be dynamically subclassed',
      'Factory methods must return default types'
    ],
    correctAnswer: 'State objects can be shared'
  },
  {
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
  {
    question: 'What statement from the slides reflects why all subclasses of LineOfCreditState override the same methods like apply() and cancel()?',
    choices: [
      'Often, several operations will contain this same conditional structure',
      'Overriding is not supported in C++ without pure virtual functions',
      'State transitions must be inherited through a factory',
      'Function pointers are preferred over subclassing'
    ],
    correctAnswer: 'Often, several operations will contain this same conditional structure'
  },
  {
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
  {
    question: '“Define a family of algorithms, encapsulate each one, and make them interchangeable.” This best defines which design pattern?',
    choices: ['Strategy', 'Abstract Factory', 'State', 'Prototype'],
    correctAnswer: 'Strategy'
  },
  {
    question: 'The client must know about different formatter types to construct the object. Based on the slides’ consequences, what is a drawback of the Strategy pattern?',
    choices: [
      'Lack of encapsulation',
      'Clients must be aware of different strategies',
      'High memory usage',
      'Tight coupling'
    ],
    correctAnswer: 'Clients must be aware of different strategies'
  },
  {
    question: 'Why does the Strategy pattern help in configuring a class with one of many behaviours, as per the slides?',
    choices: [
      'To allow polymorphism between client and factory',
      'To define variant product families',
      'Because many related classes differ only in their behaviour',
      'Because it creates a registry of components'
    ],
    correctAnswer: 'Because many related classes differ only in their behaviour'
  },
  {
    question: 'What is a key reason to apply the Strategy pattern, based on its applicability in the slides?',
    choices: [
      'To simplify object creation logic through factories',
      'When you need different variants of an algorithm, such as for time/space tradeoffs',
      'When multiple classes must share global state',
      'To inherit formatting behavior directly from a base class'
    ],
    correctAnswer: 'When you need different variants of an algorithm, such as for time/space tradeoffs'
  }  
  
  
   

];

export default cs3307;
