function LeftTable({firstName, lastName, company, title, dept}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name:</th>
          <td>{firstName} {lastName}</td>
        </tr>
        <tr>
          <th>Company:</th>
          <td>{company}</td>
        </tr>
        <tr>
          <th>Title:</th>
          <td>{title}</td>
        </tr>
        <tr>
          <th>Department:</th>
          <td>{dept}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default LeftTable;
