import './RecipeCard.css'

const InstructionList =(props)=>{
    const{data} = props
    return(
       <div className='instruction_list'>
        <h3 className='list_title'>Instruction</h3>
        <ul>{data.map((item,index)=>{
            return<li key={index} className='list_item'>
                {item}
                </li>
        })}</ul>
       </div>
      
        
    )
}

export default InstructionList
