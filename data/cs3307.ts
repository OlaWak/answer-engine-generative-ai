// data/cs3307.ts
export type Question = {
  question: string;
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
  }
];

export default cs3307;
