import { useEffect } from 'react';
import axios from 'axios';;
import LeftTable from '../components/LeftTable';
import RightTable from '../components/RightTable';
import Image from '../components/Image';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setMembers, setFilteredMembers, filterMembers } from '../Redux/memberSlice'

function App() {
  const membersFiltered = useSelector(state => state.members.membersFiltered);
  const dispatch = useDispatch();

  const getMembers = () => {
    axios.get('http://localhost:3000/api/members')
      .then(function (response) {
        // handle success
        dispatch(setMembers(response.data));
        dispatch(setFilteredMembers(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    getMembers();
  }, [])

  return (
    <>
      <Image
        url={"/logo.png"}
        width={100}
        height={104}
      />
      <h2>U.S. Ski and Snowboard Coding Test</h2>
      <input type="text" onChange={e=> {
        const val = e.target.value
        dispatch(filterMembers(val));
        if (!val) {
          // refresh state
          getMembers();
        }
      }} />
      <div className="App bg-white">
        {membersFiltered.map((member, i) => {
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
    </>
  )
}

export default App;
