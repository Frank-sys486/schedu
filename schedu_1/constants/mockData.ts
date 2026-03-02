// c:\Users\Frank\Documents\code\18 thesis\schedu_1\constants\mockData.ts

export const DASHBOARD_DATA = {
  header: {
    upcoming: "Upcoming",
    date: "Friday, October 30",
    overview: "Overview",
    lesson: "Lesson 3: Polynomials",
  },
  schedule: [
    {
      id: '1',
      subject: 'MAT10',
      grade: 'Grade 10 - Newton',
      time: '11:30 AM to 1:30 PM',
      title: 'Lesson 3: Polynomials',
      color: '#fe76a8', // Pink indicator
      subItems: [
        { 
          id: 's1', 
          title: 'Lesson 4: Quadratic Function', 
          borderColor: '#8ebda7' // Greenish border
        },
        { 
          id: 's2', 
          title: 'SW 3: Polynomials', 
          borderColor: '#aeb6e6' // Purple/Blue border
        },
      ]
    },
    {
      id: '2',
      subject: 'MAT10',
      grade: 'Grade 10 - Einstein',
      time: '3:00 PM to 4:00 PM',
      color: '#fe76a8',
      subItems: []
    }
  ],
  educationalContent: {
    title: "Polynomials",
    definition: "A polynomial is a mathematical expression composed of variables, coefficients, and exponents, involving only the operations of addition, subtraction, and multiplication. It consists of a finite number of terms, where each term is a constant or a product of a constant and one or more variables raised to a non-negative integer power. The highest exponent in a polynomial determines its degree.",
    types: [
      "Monomial: A polynomial with one term",
      "Binomial: A polynomial with two terms",
      "Trinomial: A polynomial with three terms"
    ]
  }
};

export const SUBJECTS_DATA = [
  {
    id: 'mat10',
    code: 'MAT10',
    title: 'Mathematics',
    institution: 'Hephzibah School Inc.',
    color: '#fe76a8',
    image: require('@/assets/images/image 1.png'),
    chapters: [
      { id: 'ch1', title: 'Chapter 1', subtitle: 'The Human Body' },
      { id: 'ch2', title: 'Chapter 2', subtitle: 'Anatomy of Plants' },
      { id: 'ch3', title: 'Chapter 3', subtitle: 'Plants and Animals' },
    ],
    writtenWork: [
      { id: 'ww1', title: 'Seatwork 1', type: 'seatwork' },
      { id: 'ww2', title: 'Seatwork 2', type: 'seatwork' },
      { id: 'ww3', title: 'Seatwork 3', type: 'seatwork' },
      { id: 'q1', title: 'Quiz 1', type: 'quiz' },
      { id: 'q2', title: 'Quiz 2', type: 'quiz' },
    ],
    performanceTasks: [
      { id: 'pt1', title: 'Body System Diagram' }
    ]
  },
  {
    id: 'sci9',
    code: 'SCI9',
    title: 'Science',
    institution: 'Hephzibah School Inc.',
    color: '#5290d9',
    image: require('@/assets/images/image 2.png'),
    chapters: [],
    writtenWork: [],
    performanceTasks: []
  },
  {
    id: 'sci8',
    code: 'SCI8',
    title: 'Science',
    institution: 'Hephzibah School Inc.',
    color: '#7a95b4',
    image: require('@/assets/images/image 3.png'),
    chapters: [],
    writtenWork: [],
    performanceTasks: []
  }
];

export const CALENDAR_EVENTS = [
  { day: 1, currentMonth: true, eventColor: '#8ebda7', isStart: true, title: 'Lesson 3', subtitle: 'Polynomials' },
  { day: 2, currentMonth: true, eventColor: '#8ebda7', isEnd: true, title: 'Lesson 3', subtitle: 'Polynomials' },
  { day: 5, currentMonth: true, eventColor: '#8ebda7', isStart: true, title: 'Lesson 4', subtitle: 'Quadratic Function' },
  { day: 6, currentMonth: true, eventColor: '#8ebda7' },
  { day: 7, currentMonth: true, eventColor: '#8ebda7' },
  { day: 8, currentMonth: true, eventColor: '#8ebda7' },
  { day: 9, currentMonth: true, eventColor: '#8ebda7', isEnd: true },
  { day: 12, currentMonth: true, eventColor: '#94a2f2', isStart: true, title: 'SW 3', subtitle: 'Polynomials' },
  { day: 13, currentMonth: true, eventColor: '#94a2f2' },
  { day: 14, currentMonth: true, eventColor: '#94a2f2' },
  { day: 15, currentMonth: true, eventColor: '#94a2f2' },
  { day: 16, currentMonth: true, eventColor: '#94a2f2', isEnd: true, title: 'SW 3', subtitle: 'Polynomials' },
  { day: 19, currentMonth: true, eventColor: '#d37676', isStart: true, title: 'Performance Task', subtitle: 'Body System Diagram' },
  { day: 20, currentMonth: true, eventColor: '#d37676' },
  { day: 21, currentMonth: true, eventColor: '#d37676' },
  { day: 22, currentMonth: true, eventColor: '#d37676' },
  { day: 23, currentMonth: true, eventColor: '#d37676', isEnd: true },
  { day: 26, currentMonth: true, eventColor: '#d37676', isStart: true, title: 'Performance Task', subtitle: 'Body System Diagram' },
  { day: 27, currentMonth: true, eventColor: '#d37676' },
  { day: 28, currentMonth: true, eventColor: '#d37676', isEnd: true },
  { day: 30, currentMonth: true, selected: true },
];

export const PLANS_DATA = [
  { id: 'p1', subjectCode: 'MAT10', gradeSection: 'Grade 10 - Einstein', color: '#fe76a8' },
  { id: 'p2', subjectCode: 'MAT10', gradeSection: 'Grade 10 - Newton', color: '#fe76a8' },
  { id: 'p3', subjectCode: 'SCI8', gradeSection: 'Grade 8 - Tesla', color: '#5290d9' },
  { id: 'p4', subjectCode: 'SCI9', gradeSection: 'Grade 9 - Bohr', color: '#7a95b4' },
  { id: 'p5', subjectCode: 'SCI9', gradeSection: 'Grade 9 - Curie', color: '#5290d9' },
];

export const SECTIONS_DATA = [
  { id: 's1', name: 'Grade 8 - Tesla' },
  { id: 's2', name: 'Grade 9 - Bohr' },
  { id: 's3', name: 'Grade 9 - Curie' },
];
