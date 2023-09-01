import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setfeedback] = useState([{
        id : 1,
        rating : 10,
        text : 'THis is feedback 1',
},
{
    id : 2,
    rating : 10,
    text : 'THis is feedback 2',
},
{
    id : 3,
    rating : 10,
    text : 'THis is feedback 3',
},
])

const [feedbackEdit,setfeedbackEdit] = useState({
    item : {},
    edit : false
})

const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id,updItem)=>{
    setfeedback(feedback.map((item)=>(item.id===id?{...item,...updItem}:item)))
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setfeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) =>{
    setfeedbackEdit({   
        item,
        edit : true
    })
  }

    return <FeedbackContext.Provider value={{
        feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit , updateFeedback,
    }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext