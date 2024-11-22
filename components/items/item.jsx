import React from 'react' 
import './item.css'
const item=(props)=> {
    return(
        <div className='item'>
            <link to={'/product/{props.id}'}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></link>
            <p>{props.name}</p>
            <div className="course-type">
                <div className="course-type-easy">
                    {props.easy_course}
                </div>
                <div className="course-type-hard">
                    {props.hard_course}
                </div>
            </div>
        </div>
    )
}

export default item