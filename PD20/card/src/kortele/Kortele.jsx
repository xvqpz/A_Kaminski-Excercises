import './Kortele.css';
import Ava from '../Avatar/Ava.jsx';
import Aprasymas from '../Aprasymas/Aprasymas.jsx';
import AllSkills from '../AllSkills/AllSkills.jsx';


function Kortele(){
    
    
    return(
        <>
        <div className="card-border">
           <Ava/> 
           <Aprasymas/>
           <AllSkills/>
        </div>
        
        </>
    )


}



export default Kortele