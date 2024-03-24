import Brightness1Icon from '@mui/icons-material/Brightness1';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Task(){

   




    return(
        <>
        <div className="mx-auto w-[31.5rem] h-16 px-2 py-2 bg-white mt-3 rounded inline-flex gap-7 border-2 border-black">
            <div className='w-32'>
                <p className="text-gray-400">Task</p>
                <h4 className="font-semibold">Take out the snail</h4>
            </div>
            <div className='w-16'>
                <p className="text-gray-400">Priority</p>
                <h4 className="text-red-600 font-semibold">High</h4>
            </div>
            <div>
                <h3 className="text-gray-400 bg-gray-300 rounded-lg w-20 h-7 mt-3 px-4">To Do</h3>
            </div>

            <div>
                <Brightness1OutlinedIcon className='text-yellow-400 mt-3'></Brightness1OutlinedIcon>
            </div>

            <div className='flex gap-3 mt-[0.75rem]'> 
                <EditOutlinedIcon className='cursor-pointer'></EditOutlinedIcon>
                <DeleteOutlineOutlinedIcon className='text-red-500 w-[200%] cursor-pointer'></DeleteOutlineOutlinedIcon>
            </div>


        </div>

        <div className="mx-auto w-[31.5rem] h-16 px-2 py-2 bg-white mt-3 rounded inline-flex gap-7 border-2 border-black">
            <div className='w-32'>
                <p className="text-gray-400">Task</p>
                <h4 className="font-semibold">Walk the fish</h4>
            </div>
            <div className='w-16'>
                <p className="text-gray-400">Priority</p>
                <h4 className="text-yellow-500 font-semibold">Medium</h4>
            </div>
            <div>
                <h3 className="text-gray-400 bg-gray-300 rounded-lg w-20 h-7 mt-3 px-4">Done</h3>
            </div>

            <div>
                <Brightness1Icon className='text-yellow-400 mt-3'></Brightness1Icon>
            </div>

            <div className='flex gap-3 mt-[0.75rem]'> 
                <EditOutlinedIcon className='cursor-pointer'></EditOutlinedIcon>
                <DeleteOutlineOutlinedIcon className='text-red-500 w-[200%] cursor-pointer'></DeleteOutlineOutlinedIcon>
            </div>
        </div>

        <div className="mx-auto w-[31.5rem] h-16 px-2 py-2 bg-white mt-3 rounded inline-flex gap-6 border-2 border-black">
            <div className='w-32'>
                <p className="text-gray-400">Task</p>
                <h4 className="font-semibold">Swim with dog</h4>
            </div>
            <div className='w-16'>
                <p className="text-gray-400">Priority</p>
                <h4 className="text-green-500 font-semibold">Low</h4>
            </div>
            <div>
                <h3 className="text-gray-400 bg-gray-300 rounded-lg w-24 h-7 mt-3 px-2">In progress</h3>
            </div>

            <div>
                <Brightness3Icon className='text-yellow-400 mt-3'></Brightness3Icon>
            </div>

            <div className='flex gap-3 mt-[0.75rem]'> 
                <EditOutlinedIcon className='cursor-pointer'></EditOutlinedIcon>
                <DeleteOutlineOutlinedIcon className='text-red-500 w-[200%] cursor-pointer'></DeleteOutlineOutlinedIcon>
            </div>
        </div>
        </>
    )
}

export default Task