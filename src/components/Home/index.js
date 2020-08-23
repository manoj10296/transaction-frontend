import React from 'react'
import moment from 'moment'
import { getTransactions } from '../../apicalls/index'
const data = [
  { date: '12/12/2019', description: 'hello', credit: 122, debit: 122, runningBalance: 12 }
]

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
      <table>
        <tr>
          <th>Office Transactions</th>
          <th></th>
          <th></th>
          <th></th>
          <th onClick={() => props.history.push('/addtransaction')} >+Add Transaction</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Running Balance</th>
        </tr>
        <tbody>
          {
            apiData.length > 0 && apiData.map(d => (
              <tr>
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
                  -
               </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home