import React from "react";

const BalancesDetails = props => {
  return (
    <React.Fragment>
      <div className="balances-column">
        <h3 className="red-header">You Owe</h3>

        <div className="list you-owe">
          <table>
            <tbody>
              {!props.balancesData.obligationsUserOwes
                ? null
                : props.balancesData.obligationsUserOwes.map(key => (
                    <tr key={key.id}>
                      <td>{key.name}</td>
                      <td>
                        <span className="red balance-amount">
                          ${key.amount}
                        </span>
                      </td>
                      <button className="pay-btn">Pay</button>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <button className="pay-all-btn">Pay</button> */}

      <div className="balances-column">
        <h3 className="green-header">You Are Owed</h3>
        <div className="list you-are-owed">
          <table>
            <tbody>
              {!props.balancesData.obligationsUserIsOwed
                ? null
                : props.balancesData.obligationsUserIsOwed.map(key => (
                    <tr key={key.id}>
                      <td>{key.name}</td>
                      <td>
                        <span className="green balance-amount">
                          ${key.amount}
                        </span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BalancesDetails;
