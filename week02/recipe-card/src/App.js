import Card from './components/Card'
import RecipeInfo from './components/RecipeInfo'
import './components/RecipeCard.css'
import {RECIPE} from './components/recipe-data'
import IngreidentList from './components/IngredientList'
import InstructionList from './components/InstructionList'
import RecipeImg from './components/RecipeImg'


const App = () => {
  return (
    <div>
      <Card>
        <RecipeImg imgSrc={RECIPE.imgSrc} />
        <div className="card_text">
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
          <div className="card_lists">
            <IngreidentList data={RECIPE.ingredients} />
            <InstructionList data={RECIPE.instructions} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default App