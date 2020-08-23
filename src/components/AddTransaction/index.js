import React from 'react'
import styled from 'styled-components'
import { createTransaction } from '../../apicalls'

const Maindiv = styled.div`
display:flex;
heigth: 100%;
`
const Form = styled.form`
 display: flex;
 height: 100%;
`

const intialState = {
  type: 'credit',
  amount: '',
  description: ''
}



const AddTransaction = (props) => {


  const [state, updateState] = React.useState(intialState)

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    updateState({ ...state, [name]: value })
  }

  const handleSubmit = (event) => {
    // event.preventDefault()
    (async function apiCall() {
      const res = await createTransaction({ type: state.type, amount: state.amount, description: state.description })
      if (res) {
        props.history.push('/')
      }
    })()
  }

  console.log(state)
  return (
    <Maindiv>
      <form>
        <label>
          Transaction Type
          </label>
          <select name="type" value={state.type} onChange={handleChange}>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <label>
            Amount
            </label>
          <input type="text" required name="amount" value={state.amount} onChange={handleChange} />
          
          <label>
            Description:
            </label>
          <textarea name="description" required value={state.description} onChange={handleChange} />

        
      </form>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </Maindiv>
  )
}

export default AddTransaction