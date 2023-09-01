import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from './context/FeedbackContext'


function Feedbacklist() {

  const{feedback} = useContext(FeedbackContext)

    if((!feedback)){
        return <p>No feedback yet</p>
    }
    return (
      <div className='feedback-list'>
      <AnimatePresence>
          {feedback.map((item)=>(
            <motion.div key ={item.id} initial ={{opacity: 0}} animate={{opacity:1}} exit = {{opacity:0}}>
              <FeedbackItem key = {item.id} item = {item} text = {item.text} rating = {item.rating}  />
              </motion.div>
          ))}
          </AnimatePresence>
      </div>
    )
  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((item)=>(
  //           <FeedbackItem key = {item.id} item = {item} text = {item.text} rating = {item.rating} handleDelete = {handleDelete} />
  //       ))}
  //   </div>
  // )
}



export default Feedbacklist