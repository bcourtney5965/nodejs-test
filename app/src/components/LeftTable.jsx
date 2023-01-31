function LeftTable({firstName, lastName, company, title, dept}) {
  return (
    <table>
      <tr>
        <td>Name:</td>
        <td>{firstName} {lastName}</td>
      </tr>
      <tr>
        <td>Company:</td>
        <td>{company}</td>
      </tr>
      <tr>
        <td>Title:</td>
        <td>{title}</td>
      </tr>
      <tr>
        <td>Department:</td>
        <td>{dept}</td>
      </tr>
    </table>
  )
}

export default LeftTable;
