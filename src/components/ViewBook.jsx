import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  return (
    <div>
        <Navbar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">BookName</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alchemist</td>
      <td>Otto</td>
      <td>300</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mayavi</td>
      <td>Thornton</td>
      <td>50</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Luttappi</td>
      <td>Thornton</td>
      <td>50</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Minnaram</td>
      <td>Thornton</td>
      <td>110</td>
    </tr>


  </tbody>
</table>

 
            </div>
        </div>
       </div>
    </div>
  )
}

export default ViewBook