import React from 'react'
import styled from 'styled-components'
import { createTransaction } from '../../apicalls'
import save from '../../assets/save.svg'
import cross from '../../assets/cross.svg'

const Maindiv = styled.div`
  display: flex;
  height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const WrapperDiv = styled.div`
  margin: auto;
  width: 50%;
  padding: 30px;
  height: 50%;
  border: 8px solid black;
`

const TextDiv = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
`

const Content = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
`

const Input = styled.input`
  width: 70%;
  border: 0;
  border-bottom: 1px solid lightgray;
`

const TextArea = styled.textarea`
  width: 70%;
  border: 0;
  border-bottom: 1px solid lightgray;
`
const Select = styled.select`
  width: 70%;
  border: 0;
  border-bottom: 1px solid lightgray;
`

const ButtonDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${( props ) => props.background };
  color: ${(props) => props.color};
  height: 40px;
  padding: 20px;
  margin: 5px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  
`

const Span = styled.span`
  padding: 5px;
  font-size: 16px;
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
      <WrapperDiv>
        <TextDiv> New Transaction</TextDiv>
        <Form>
          <Content>
            <label>
              Transaction Type
          </label>
            <Select name="type" value={state.type} onChange={handleChange}>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Select>
          </Content>
          <Content>
            <label>
              Amount
            </label>
            <Input type="text" required name="amount" value={state.amount} onChange={handleChange} />
          </Content>
          <Content>
            <label>
              Description
            </label>
            <TextArea name="description" required value={state.description} onChange={handleChange} />
          </Content>

        </Form>
        <ButtonDiv>
        <Button background="lightblue" color="white" onClick={handleSubmit}> <img src={save} alt="save" height="20px"/> <Span>SAVE</Span></Button>
        <Button background="lightgray" onClick={() => props.history.push('/')}> <img src={cross} alt="save" height="20px"/> <Span>CANCEL</Span> </Button>
        </ButtonDiv>
      </WrapperDiv>
    </Maindiv>
  )
}

export default AddTransaction