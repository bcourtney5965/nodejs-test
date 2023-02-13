import SubTable from './SubTable';
import classNames from 'classnames';

function Members({members=[], styles=[], rowStyles=[]}) {
  return (
    <div className={classNames([...styles])}>
      {members.map( member => {
        return (
          <div key={member.id} className={classNames([...rowStyles])}>
            <SubTable colStyles={["w-1/3"]} styles={["table", "text-left"]}>
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{member.firstName} {member.lastName}</td>
                </tr>
                <tr>
                  <th>Company:</th>
                  <td>{member.company}</td>
                </tr>
                <tr>
                  <th>Title:</th>
                  <td>{member.title}</td>
                </tr>
                <tr>
                  <th>Department:</th>
                  <td>{member.department}</td>
                </tr>
              </tbody>
            </SubTable>
            <SubTable colStyles={["w-1/3"]} styles={["table", "text-left"]}>
              <tbody>
                <tr>
                  <th>Phone:</th>
                  <td>{member.phone}</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{member.address}</td>
                </tr>
                <tr>
                  <th>{" "}</th>
                  <td>{member.city}, {member.state} {member.zip}</td>
                </tr>
                <tr>
                  <th>Website:</th>
                  <td>{member.url}</td>
                </tr>
              </tbody>
            </SubTable>
            <div>
              <img
                className={classNames("member-img")}
                src={member.image}
                alt={`image of ${member.firstName} ${member.lastName}`}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Members;