import { useRef, useEffect } from 'react'
import useObserverElement from '../hooks/ScrollAnimations'

function DoubleImageSection({data}) {
  const positions = {
    'center': 'items-center justify-center p-8',
    'x-center': 'items-end justify-center px-8 pt-8',
    'bottom-left': 'items-end justify-start pr-8 pt-8',
    'bottom-right': 'items-center justify-end pl-8 pt-8'
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
    <section className='flex flex-col space-y-16 px-14 h-[200vh]'>
        <div className='project-image-wrapper'>
            <img ref={el => images.current.push(el)} alt="image from project" className='project-image'/>
        </div>
        <div className='flex space-x-16 project-image-wrapper'>
            <div className='flex-1'>
                <img ref={el => images.current.push(el)} alt="image from project" className='project-image'/>                                
            </div>
            <div className='flex-1'>
                <img ref={el => images.current.push(el)} alt="image from project" className='project-image'/>
            </div>
        </div>
        <div className='project-image-wrapper'>
            <img ref={el => images.current.push(el)} alt="image from project" className='project-image'/>
        </div>
    </section>
  )
}

export default DoubleImageSection