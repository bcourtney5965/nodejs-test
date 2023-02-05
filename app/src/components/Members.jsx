import LeftTable from '../components/LeftTable';
import RightTable from '../components/RightTable';

function Members({members=[]}) {
  return (
    <>
      <div className="grid grid-cols-1">
        {members.map( member => {
          return (
            <div key={member.id} className="grid grid-cols-3 gap-x-4 py-4 member-row">
              <LeftTable
                firstName={member.firstName}
                lastName={member.lastName}
                company={member.company}
                title={member.title}
                dept={member.department}
                className="table"
                />
              <RightTable
                phone={member.phone}
                address={member.address}
                city={member.city}
                state={member.state}
                zip={member.zip}
                url={member.url}
                className="table"
              />
              <div>
                <img
                  className="member-img"
                  src={member.image}
                  alt={`image of ${member.firstName} ${member.lastName}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Members;