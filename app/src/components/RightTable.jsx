function RightTable({phone, address, city, state, zip, url}) {
  return (
    <table>
      <tr>
        <td>Phone:</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Address:</td>
        <td>{address}</td>
      </tr>
      <tr>
        <td>{" "}</td>
        <td>{city}, {state} {zip}</td>
      </tr>
      <tr>
        <td>Website:</td>
        <td>{url}</td>
      </tr>
    </table>
  )
}

export default RightTable;
