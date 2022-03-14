import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] =  useState('');

  const onSubmit = (e) => {
    if(firstName === '' || lastName === '') {
      M.toast({html: 'Please enterthe first and last name'})
    } else {
      console.log(firstName, lastName)

      
      // Clear fields
      setFirstName('')
      setLastName('')
   
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input type='text' 
              name='firstName' 
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="input" 
            />
            <label htmlFor="firstName" className='active'>
            first Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type='text' 
              name='lastName' 
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="input" 
            />
            <label htmlFor="lastName" className='active'>
            last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close blue waves-green btn">
          Enter  
        </a>  
      </div>  
    </div>
  )
}

export default AddLogModal