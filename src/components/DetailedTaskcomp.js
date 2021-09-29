import React,{useContext} from 'react';
import { useParams,  } from 'react-router';
import { MyContext } from '../context/Mycontext';

export default function DetailedTaskcomp() {
    const {tasks} = useContext(MyContext)
   

    const {text}=useParams()
    console.log(text)

    let searchTask= tasks.find(item=>item.text===text)
    console.log(searchTask, "search item")
    return (
        <div>
          <h1>Task : {searchTask && searchTask.text}</h1>
          <p>Status :{searchTask && searchTask.done.toString()}</p>  
        </div>
    )
}
