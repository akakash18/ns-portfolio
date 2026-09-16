import type { EducationItem } from '../types';

export const educationIntro = "My academic background in Computer Science and Computer Applications provides a strong foundation in technology, data analysis, problem-solving and business-oriented digital operations.";

export const educationData: EducationItem[] = [
  {
    id: 'mca',
    period: '2021 – 2023',
    institution: 'VMV Commerce, JMT Arts & JJP Science College',
    location: 'Nagpur, Maharashtra',
    major: 'Master of Computer Applications (MCA)',
    details: 'Focused on advanced concepts in computer applications, data analysis, software development, database systems, and business technology operations.',
    badge: 'MCA DEGREE',
    relevantCourses: [
      'Advanced Computer Applications',
      'Data Analysis & Database Systems',
      'Software Engineering & Project Management',
      'Business Operations & Digital Systems'
    ]
  },
  {
    id: 'bsc-cs',
    period: '2018 – 2021',
    institution: 'Dharampeth M.P. Deo Memorial Science College',
    location: 'Nagpur, Maharashtra',
    major: 'Bachelor of Computer Science (B.Sc. CS)',
    details: 'Built a strong foundation in computer science, programming, data structures, algorithm design, and analytical problem-solving.',
    badge: 'B.SC. CS DEGREE',
    relevantCourses: [
      'Computer Science Fundamentals',
      'Data Structures & Programming',
      'Database Management',
      'Analytical Problem Solving'
    ]
  }
];
