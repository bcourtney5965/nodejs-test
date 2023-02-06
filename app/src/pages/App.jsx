import { useEffect, useState } from 'react';
import axios from 'axios';;
import ConditionallyRender from '../components/ConditionallyRender';
import Members from '../components/Members';
import { Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setMembers, setFilteredMembers, filterMembers } from '../Redux/memberSlice'

const ConditionallyRenderMembers = ConditionallyRender(Members);

function App() {
  const membersFiltered = useSelector(state => state.members.membersFiltered);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const getMembers = () => {
    setIsLoading(true);
    axios.get('http://localhost:3000/api/members')
      .then( res => {
        // handle success
        dispatch(setMembers(res.data));
        dispatch(setFilteredMembers(res.data));
      })
      .catch( err => {
        // handle error
        console.log(err);
      })
      .finally( () => {
        setIsLoading(false);
      })
  }

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(filterMembers(val));
    if (!val) {
      // refresh state
      getMembers();
    }
  }

  useEffect(() => {
    getMembers();
  }, [])

  return (
    <div id="App">
      <div className="flex items-center justify-center">
        <img
          className="logo"
          src="/logo.png"
          alt="U.S. Ski and Snowboard Logo"
        />
        <h1 className="text-white ml-5 font-medium">U.S. Ski and Snowboard Coding Test</h1>
      </div>
      <Input
        placeholder="Search..."
        backgroundColor="white"
        width="22rem"
        variant="outline"
        onChange={handleChange}
        className="mt-4 mb-3"
      />
      <div id="members" className="bg-white">
        <ConditionallyRenderMembers
          isLoading={isLoading}
          members={membersFiltered}
          color='#7B86A1'
          thickness='3px'
          size='xl'
        />
      </div>
    </div>
  )
}

export default App;
