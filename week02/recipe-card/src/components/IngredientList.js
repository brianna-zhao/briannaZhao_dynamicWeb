import './RecipeCard.css'

const IngreidentList =(props)=>{
    const{data} = props
    return(
       <div className='ingredient_list'>
        <h3 className='list_title'>Ingrendients</h3>
        <ul>{data.map((item,index)=>{
            return<li key={index} className='list_item'>
                {item}
                </li>
        })}</ul>
       </div>
      
        
    )
}

export default IngreidentList