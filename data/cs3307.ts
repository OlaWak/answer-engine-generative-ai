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
  // ... (rest of questions unchanged) ...
];

export default cs3307;
