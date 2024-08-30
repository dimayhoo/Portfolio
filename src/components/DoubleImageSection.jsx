import { useRef, useEffect } from 'react'
import useObserverElement from '../hooks/ScrollAnimations'

// qq How to store images in objects and use values as sources in js?

function DoubleImageSection({data}) {
  const [img1, img2, img3, img4] = data
  const positions = {
    'center': 'p-8',
    'x-center': 'px-8 pt-8',
    'bottom-left': 'pr-8 pt-8',
    'bottom-right': 'pl-8 pt-8'
  }

  const backgrounds = {

  }

  // qq How to get multiple nodeElements from html in react?
  const images = useRef([]);

  useEffect(() => {
    for (const img of images.current) {
        useObserverElement(img);
    }
  }, [])

  return (
    <section className='flex flex-col space-y-16 px-14 h-[280vh]'>
        <div className={`flex-[5] project-image-wrapper
        ${positions[img1.position]} ${backgrounds[img1.bg]}`}>
            <img ref={el => images.current.push(el)} alt="image from project" 
            src={img1.src} className='project-image'/>
        </div>
        <div className='flex flex-[4] space-x-16 project-image-wrapper'>
            <div className={`flex-1 
            ${positions[img2.position]} ${backgrounds[img2.bg]}`}>
                <img ref={el => images.current.push(el)} alt="image from project" 
                src={img2.src} className='project-image'/>                                
            </div>
            <div className={`flex-1 
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