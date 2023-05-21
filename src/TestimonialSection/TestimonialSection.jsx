import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'John Doe is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/R0GkhQ0/radu-florin-Jy-Vc-AIUAc-PM-unsplash.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Jane Smith is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/mv8HM3r/reza-biazar-e-Sjm-ZW97c-H8-unsplash.jpg',
    },
    {
      id: 3,
      name: 'Willam key',
      comment: 'Willam key is a highly skilled developer, recognized for their expertise in various programming',
      image: 'https://i.ibb.co/6FCX7JK/ospan-ali-6xv4-A1-VA1r-U-unsplash.jpg',
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 className='text-4xl font-serif'>Our Happy Client</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="testimonial-content">
              <p>{testimonial.comment}</p>
              <span className="testimonial-name">{testimonial.name}</span>
            </div>
            <img  className='md:h-[400px]' src={testimonial.image} alt={testimonial.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
