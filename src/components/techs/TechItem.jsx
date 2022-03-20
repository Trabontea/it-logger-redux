import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({tech: {id, firstName, lastName}, deleteTech}) => {
  const onDelete = () => {
    deleteTech(id)
    M.toast({html:'Technician deleted'})
  }

  return (
    <li className="collection-item">
      <div>
        <span>{firstName}</span>{' '}<span>{lastName}</span>
        <a href="#!" className='secondary-content'
          onClick={onDelete}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
}

export default connect(null, {deleteTech})(TechItem)