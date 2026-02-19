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
