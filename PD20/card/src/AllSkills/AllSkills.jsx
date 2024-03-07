import './AllSkills.css'
import Git from './Skills/Git'
import Java from './Skills/Java'
import Python from './Skills/Python'
import Svelte from './Skills/Svelte'

function AllSkills(){
    return(
    <>
    <div className='mama'>
        <Git/>
        <Java/>
        <Python/>
        <Svelte/>
    </div>
    </>
    )
}

export default AllSkills