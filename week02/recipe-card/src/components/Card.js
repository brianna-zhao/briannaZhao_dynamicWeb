import './RecipeCard.css'

const Card =(props)=>{
    const {childern} = props
    return<div className="card">
            {childern}
        </div>
        
    
}
export default Card

