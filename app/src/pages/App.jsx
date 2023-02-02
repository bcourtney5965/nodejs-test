import { useEffect, useState } from 'react'
import axios from 'axios';
import LeftTable from '../components/LeftTable';
import RightTable from '../components/RightTable';
import Image from '../components/Image';
import './App.css';
import stubData from '../stubData.json'
import { findLastIndex } from 'ramda';

function App() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    // axios.get('http://localhost:3000/members')
    // .then(function (response) {
    //   // handle success
    //   setMembers(response.data)
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // });
    setMembers(stubData);
  }, [])

  return (
    <div className="App bg-white">
      {members.map((member, i) => {
        return (
          <div key={member.id} className="grid grid-cols-3">
            <LeftTable
              firstName={member.firstName}
              lastName={member.lastName}
              company={member.company}
              title={member.title}
              dept={member.department}
              />
            <RightTable
              phone={member.phone}
              address={member.address}
              city={member.city}
              state={member.state}
              zip={member.zip}
              url={member.url}
            />
            <Image
              url={member.image}
              width={173}
              height={104}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App