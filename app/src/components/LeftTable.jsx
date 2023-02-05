function LeftTable({firstName, lastName, company, title, dept, id, className}) {
  return (
    <table id={id} className={className}>
      <col span="1" className="w-1/3" />
      <tbody className="text-left">
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
