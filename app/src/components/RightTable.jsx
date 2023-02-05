function RightTable({phone, address, city, state, zip, url, id, className}) {
  return (
    <table id={id} className={className}>
      <col span="1" className="w-1/3" />
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
