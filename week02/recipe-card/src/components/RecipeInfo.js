
import styles from './RecipeCard.module.css'


const RecipeInfo = (props) => {
  const {title, description} = props

  return (
    <div className={styles.recipe_info}>
      <h2 classNames={styles.recipe_title}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default RecipeInfo