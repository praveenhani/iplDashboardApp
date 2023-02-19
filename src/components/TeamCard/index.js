// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="list-item">
        <img src={teamImageUrl} className="image-url" alt={`${name}`} />
        <p className="card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
