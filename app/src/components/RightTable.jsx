function RightTable({phone, address, city, state, zip, url}) {
  return (
    <table>
      <tbody className="text-left">
        <tr>
          <th>Phone:</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>Address:</th>
          <td>{address}</td>
        </tr>
        <tr>
          <th>{" "}</th>
          <td>{city}, {state} {zip}</td>
        </tr>
        <tr>
          <th>Website:</th>
          <td>{url}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default RightTable;
