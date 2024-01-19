import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import './Todo.css';
export default function Todo() {
   
  const [Inputvlue,setValue] = useState('');
  const [data, setValues] = useState([]);
  const [edit , setEdit] = useState(false)
  const  [completed,setCompleted] = useState([])

   console.log(data)
  function createValue(e){
    setValue(e.target.value)

  }
  function formSubmit(e){
   e.preventDefault()
   if(edit !== false){
    data[edit]= Inputvlue
    setEdit(false)
   }
   else{
    setValues([...data,Inputvlue])
   }
   
   setValue('')
  } 
function handleDelete(e,index){
  e.preventDefault()
  setValues(data.filter((val, id)=>{
    return id !== index
  }))

}

function handleEdit(e,index){
 e.preventDefault()
 setValue(data[index])
 setEdit(index)

  
}

function handleCheck(e,index){
e.preventDefault()
setCompleted([...completed,index])
}

  return (
    <>
    <from onSubmit={formSubmit}>

     <input type="text"placeholder='Enter Your Task' value={Inputvlue} onChange={createValue}/>

    <button onClick={formSubmit}>add</button>
      <div>
       { data.map((val,index)=>{
         return(
           <li className={completed.includes(index)?"completed":""} key={index}> <a href="" onClick={(e)=> handleDelete(e,index)} >{val} <DeleteIcon/></a>
           <a href="" onClick={(e)=> handleEdit(e,index)}> <EditIcon/> </a>
           <a href="" onClick={(e)=>handleCheck(e,index)}> <CheckIcon/> </a>
           </li>
           )
          })
          
          
        }
      </div>
        </from>
      </>
  )
}
