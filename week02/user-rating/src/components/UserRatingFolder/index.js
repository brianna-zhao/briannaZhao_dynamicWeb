import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'
import './heart.css'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) return
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) return
    setCount(count - 1)
  }

  return (
    <div className="rating-page"> 
      <div className="rating-row">
        {/* looked up hpw to wriite ifelse statement here */}
        {count > 0 ? (
          <button onClick={handleMinusClick} className="btn minus">[-]</button>
        ) : (
          <span className="btn-spacer minus" />
        )}

        <div className="hearts" aria-hidden>
          {[...Array(count)].map((_, index) => (
            <span key={index} className="heart">
              <Favorite className="heart-icon" />
              
            </span>
          ))}
        </div>

        {count < 5 ? (
          <button onClick={handlePlusClick} className="btn plus">[+]</button>
        ) : (
          <span className="btn-spacer plus" />
        )}
      </div>
    </div>
  )
}

export default UserRating
