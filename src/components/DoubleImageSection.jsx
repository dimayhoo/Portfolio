import { useRef, useEffect } from 'react'
import useObserverElement from '../hooks/ScrollAnimations'

// qq How to store images in objects and use values as sources in js?

function DoubleImageSection({data}) {
  const [img1, img2, img3, img4] = data
  const positions = {
    'center': 'p-12',
    'x-center': 'px-16 pt-12',
    'x-center-top': 'px-16 pb-12',
    'bottom-right': 'pl-16 pt-12'
  }

  const backgrounds = {
    '1': 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900', 
    '2': 'bg-gray-300', 
    '3': 'bg-gradient-to-tl from-gray-200 to-white', 
    '4': 'bg-gradient-to-bl from-blue-50 to-gray-200', 
    '5': 'bg-gradient-to-l from-blue-100 via-purple-200 to-blue-200',
    '6': 'bg-gradient-to-tr from-purple-100 via-gray-200 to-gray-300',
    '7': 'bg-gradient-to-bl from-gray-300 via-blue-100 to-gray-200',
    '8': 'bg-gradient-to-br from-purple-400 via-blue-200 to-purple-300',
  }
  
  // qq How to get multiple nodeElements from html in react?
  const images = useRef([]);

  useEffect(() => {
    for (const img of images.current) {
        useObserverElement(img);
    }
  }, [])

  return (
    <section className='flex flex-col space-y-16 px-14'>
        <div className={`flex-[5] project-image-wrapper
        ${positions[img1.position]} ${backgrounds[img1.bg]}`}>
            <img ref={el => images.current.push(el)} alt="image from project" 
            src={img1.src} className='project-image'/>
        </div>
        <div className='flex flex-[4] space-x-16 project-image-wrapper'>
            <div className={`flex-1 rounded-xl
            ${positions[img2.position]} ${backgrounds[img2.bg]}`}>
                <img ref={el => images.current.push(el)} alt="image from project" 
                src={img2.src} className='project-image'/>                                
            </div>
            <div className={`flex-1 rounded-xl
            ${positions[img3.position]} ${backgrounds[img3.bg]}`}>
                <img ref={el => images.current.push(el)} alt="image from project" 
                src={img3.src} className='project-image'/>
            </div>
        </div>
        <div className={`flex-[5] project-image-wrapper 
        ${positions[img4.position]} ${backgrounds[img4.bg]}`}>
            <img ref={el => images.current.push(el)} alt="image from project" 
            src={img4.src} className='project-image'/>
        </div>
    </section>
  )
}

export default DoubleImageSection