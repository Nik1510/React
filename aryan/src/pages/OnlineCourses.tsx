import React from 'react';
import { Book, Clock, Star } from 'lucide-react';

const OnlineCourses: React.FC = () => {
  const courses = [
    { title: 'Introduction to Data Science', duration: '8 weeks', rating: 4.8, category: 'Technology' },
    { title: 'Digital Marketing Fundamentals', duration: '6 weeks', rating: 4.6, category: 'Marketing' },
    { title: 'Project Management Essentials', duration: '10 weeks', rating: 4.9, category: 'Business' },
    { title: 'UX/UI Design Principles', duration: '7 weeks', rating: 4.7, category: 'Design' },
    { title: 'Financial Planning and Analysis', duration: '9 weeks', rating: 4.5, category: 'Finance' },
    { title: 'Agile Methodologies', duration: '5 weeks', rating: 4.8, category: 'Technology' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Online Courses</h1>
      <p className="text-lg mb-8">
        Enhance your skills and advance your career with our curated selection of online courses. These programs are designed to align with current industry demands and future trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard: React.FC<{ title: string; duration: string; rating: number; category: string }> = ({ title, duration, rating, category }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full mb-4 inline-block">
      {category}
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="flex items-center text-gray-600 mb-2">
      <Clock className="w-4 h-4 mr-2" />
      <span>{duration}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-4">
      <Star className="w-4 h-4 mr-2 text-yellow-500" />
      <span>{rating.toFixed(1)}</span>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300 w-full">
      Enroll Now
    </button>
  </div>
);

export default OnlineCourses;