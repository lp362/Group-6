import React from 'react'
import './CSS/coursecategory.css'
import{coursecontext} from '../context/coursecontext'
import dropdown from '../components/assets/dropdown.png'
import course from '../components/item'

const coursecategory =(props) => {
    const {data}=useContext(coursecontext);
    return(
        <div className='course-category'>
            <div className='coursecategory-indexSort'>
                <p>
                    <span>Showing 1-2</span> out of 2 products
                </p>
                <div className='coursecategory-sort'>
                    Sort by <img src={dopdown} alt=""/>
                </div>
            </div>
            <div className="coursecategory-products">
                {data.map((item, i)=>{
                    if (props.category===course.category) {
                        return <item key={i} id={id} name={name} img={image} type={course_type}/>
                    }
                    else{
                        return null
                    }
                })}
            </div>
        </div>
    )
}

export default coursecategory
