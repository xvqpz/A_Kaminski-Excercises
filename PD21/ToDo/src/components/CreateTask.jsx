import AddIcon from '@mui/icons-material/Add';
function CreateTask(){
    return(
        <>
        <div className='flex flex-row gap-32 mt-4'>

        <div>
            <h2 className='font-bold w-32'>Task List</h2>
        </div>

        <div>
            <button className='w-36 h-9 bg-slate-500 text-white rounded '><AddIcon/>Robka</button>
        </div>

        </div>
        </>
    )
}

export default CreateTask 