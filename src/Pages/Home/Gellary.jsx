import React from 'react';

const Gellary = () => {
  // Your gallery data
  const galleryItems = [
    {
      id: 1,
      image: 'https://i.ibb.co/H737Ks4/marcin-lukasik-u-Yp-OYy-Jdh-RE-unsplash.jpg',
      title: 'Bat Man ',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/ZGsWGJm/judeus-samson-r-Aomx-Xul-MNM-unsplash.jpg',
      title: 'Spider Man',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/ThDHSVz/joey-nicotra-a-QSPWSx-Cwe-Y-unsplash.jpg',
      title: 'Aqua Man',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/x6xV4MF/alex-gruber-ZOCb5-G9t-A7-A-unsplash.jpg',
      title: 'Flying Man',
    },
    {
      id: 5,
      image: 'https://i.ibb.co/RYQNY24/tk-q-JDk-JRTed-Nw-unsplash.jpg',
      title: 'Child Bat Man',
    },
    {
      id: 6,
      image: 'https://i.ibb.co/8K8GnNW/jean-philippe-delberghe-9-XAn-XWHu9-4-unsplash.jpg',
      title: 'SuperMan',
    },
    // Add more gallery items as needed
  ];

  return (
   <div className='px-2'>
    <h2 className='text-center text-4xl font-serif font-semibold pb-12'>Star Force Heros</h2>
     <div className="gallery grid md:grid-cols-3 md:gap-2 ">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item py-4">
            <img src={item.image} alt={item.title} className='rounded-md h-full '/>
            <div className="gallery-caption text-center text-lg font-serif font-medium">{item.title}</div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Gellary ;
