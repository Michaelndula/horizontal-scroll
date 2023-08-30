import React, { useState, useEffect } from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = React.createRef();
  const imageWidth = 520;

  const scrollInterval = 3000;

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
    setScrollPosition(scrollPosition - 220);
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
    setScrollPosition(scrollPosition + 220);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, scrollInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <img
        className='w-full h-[240px] object-cover'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''
      />
      <div className='relative flex items-center'>
      <MdChevronLeft
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideLeft}
        size={40}
      />
      <div
        id='slider'
        ref={sliderRef}
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        style={{
          scrollBehavior: 'smooth',
          transition: 'transform 0.5s ease-in-out',
          
        }}

      >
        {data.map((item) => (
          <div
            key={item.img}
            className='w-[520px] h-[200px] inline-block relative m-2'
          >
            <div
            className='rounded-lg w-[520px] h-[200px] inline-block relative m-2'
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 128, 0, 0.9), transparent), url(${item.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
            }}
          ></div>
            <div className='absolute top-10 left-10 p-2 opacity-90'>
              <h3 className='text-lg font-semibold'>Title</h3>
              <p className='text-sm'>description</p>
              <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded-full'>
                Learn More
              </button>
            </div>
          </div>
          
        ))}
      </div>
      <MdChevronRight
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideRight}
        size={40}
      />
    </div>

    </>
  );
}

export default App;
