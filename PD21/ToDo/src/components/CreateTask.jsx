import AddIcon from '@mui/icons-material/Add';
function CreateTask(){


    function addTask(){
    }
    
    return(
        <>
        <div className='flex flex-row gap-[14.5rem] mt-4'>
        <div>
            <h2 className='font-bold w-32 text-2xl'>Task List</h2>
        </div>
        <div>
            <button className='w-36 h-9 bg-yellow-400 hover:bg-yellow-500 rounded border-2 border-black text-black' onClick={addTask}><AddIcon/>Robka</button>
        </div>

        </div>
        </>
    )
}

export default CreateTask 