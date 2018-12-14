import React from 'react'
import { Link } from 'react-router-dom'

const BillsList = props => {
  console.log(props)
  console.log('bills', props.bills)
  console.log('billsUserIsOwed', props.bills.billsUserIsOwed)
  console.log('billsUserOwes', props.bills.billsUserOwes)

  return (
    <div className="bills-list">
      <h2>Bills</h2>
      <table>
        <tbody>
          {props.bills.billsUserIsOwed &&
            props.bills.billsUserIsOwed.map(bill => (
              <tr>
                <td className="date">{bill.date}</td>
                <td className="description">{bill.description}</td>
                <td className="right-column">
                  <span className="lighter-text">{bill.name} owes you </span>
                  <span className="green">${bill.amount}</span>{' '}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table>
        <tbody>
          {props.bills.billsUserOwes &&
            props.bills.billsUserOwes.map(bill => (
              <tr>
                <td className="date">{bill.date}</td>
                <td className="description">{bill.description}</td>

                <td className="right-column">
                  <span className="lighter-text">{bill.name} lent you </span>
                  <span className="red">${bill.amount}</span>{' '}
                  <button
                    className="pay-btn"
                    onClick={() => props.payBill(bill)}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BillsList
