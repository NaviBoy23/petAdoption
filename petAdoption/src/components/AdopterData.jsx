import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
    const {formData, handleGoBack } = this.props;
    console.log(formData);


    return (
      <>

      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            formData.map( (item,index) => {
              return <tr key={index}>
                <td>{item.petName}</td>
                <td>{item.petType}</td>
                <td>{item.breed}</td>
                <td>{item.adopterName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            })
          }
        </tbody>
      </table>

      <div
      style={{
        margin:"auto 55em",
        borderRadius:"10px"
      }}>
        <button onClick={handleGoBack}>
          Go Back
        </button>
      </div>

      </>
    )
  }
}

export default AdopterData