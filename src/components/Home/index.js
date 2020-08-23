import React from 'react'
import moment from 'moment'
import styled, { css } from 'styled-components'
import { getTransactions } from '../../apicalls/index'
// const data = [
//   { date: '12/12/2019', description: 'hello', credit: 122, debit: 122, runningBalance: 12 }
// ]

 const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    text-align: center;
    border: 1px solid lightgray;
    :nth-child(2) {
    text-align: left;
    }
    
 `
  const THead = styled.thead`
  border: 0;
  padding: 10px;
  cursor: default;
  `
  const Headtr = styled.tr`
  height: 40px;
  ${(props) => props.customColor && css `
    background: lightblue;
    color: white;
  `}
`


const Home = (props) => {
  console.log(props)
  const [apiData, updateApiData] = React.useState([])

  React.useEffect(() => {
    (async function api() {
      const res = await getTransactions()
      updateApiData(res)
    })()
  }, [])
  console.log(apiData)
  return (
    <div>
      <Table>
        <THead>
          <Headtr>
          <th>Office Transactions</th>
          <th></th>
          <th></th>
          <th></th>
          <th onClick={() => props.history.push('/addtransaction')} >+Add Transaction</th>
          </Headtr>
        </THead>
        <THead>
          <Headtr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          </Headtr>
        </THead>
        <Headtr customColor>
          <th>Date</th>
          <th>Description</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Running Balance</th>
        </Headtr>
        <tbody>
          {
            apiData.length > 0 && apiData.map(d => (
              <Headtr>
                <td>
                  {moment(d.createdAt).format('MM/DD/YYYY')}
                </td>
                <td>
                  {d.description}
                </td>
                <td>
                  {d.type === 'credit' ? d.amount : null}
                </td>
                <td>
                  {d.type === 'debit' ? d.amount : null}
                </td>
                <td>
                  {d.runningBalance}
               </td>
              </Headtr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home