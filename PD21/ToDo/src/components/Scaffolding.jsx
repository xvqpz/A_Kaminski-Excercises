import { useState } from "react";
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';





//TODO  Edit mode, Icon, and deletion. Would be nice to have a create task button too.


function Scaffolding(props){

    const [priority , setPriority] = useState('Low');
    const [completion , setCompletion] = useState('To do')

    const toggleCompletion = () => {

        if (completion === 'To do'){
            setCompletion('In progress')
        } else if (completion === 'In progress') {
            setCompletion('Complete')
        } else {
            setCompletion('To do')
        }
    };


    const togglePriority = () => {


        if (priority === 'Low') {
          setPriority('Normal');
            // color.classList.replace("text-green-500", "text-yellow-400")
        } else if (priority === 'Normal') {
          setPriority('High');
        //   color.classList.replace("text-yellow-400", "text-red-500")
        } else {
          setPriority('Low');
        //   color.classList.replace("text-red-500", "text-green-500")
        }
      };



    return( 
        <>
        <div className="mx-auto w-[36.75rem] h-16 px-2 py-2 bg-white mt-3 rounded inline-flex gap-7 border-2 border-black">
            <div className='w-32'>
                <p className="text-gray-400">Task</p>
                <h4 className="font-semibold">{props.task}</h4>
            </div>
            <div className='w-16 mr-7'>
                <p className="text-gray-400">Priority</p>
                <div>
                <h4 className={`font-semibold cursor-pointer select-none ${priority === 'Low' ? 'text-green-500' : priority === 'Normal' ? 'text-yellow-400' : 'text-red-500'}`} onClick={togglePriority}>{priority}</h4>
                </div>
            </div>
            <div className="text-gray-400 bg-gray-300 rounded-lg w-32 py-1 h-7 my-2 px-4 cursor-pointer ">
                <h3 className="text-l text-center select-none" onClick={toggleCompletion}>{completion}</h3>
            </div>

            <div>
                <Brightness1OutlinedIcon className='text-yellow-400 mt-3'></Brightness1OutlinedIcon>
            </div>

            <div className='flex gap-3 mt-[0.75rem]'> 
                <EditOutlinedIcon className='cursor-pointer'></EditOutlinedIcon>
                <DeleteOutlineOutlinedIcon className='text-red-500 w-[200%] cursor-pointer'></DeleteOutlineOutlinedIcon>
            </div>


        </div>
        </>
    )
}

export default Scaffolding