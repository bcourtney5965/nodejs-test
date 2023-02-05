import { Spinner } from '@chakra-ui/react'

function ConditionallyRender(Component) {
  return function ConditionallyRenderComponent({isLoading, ...props}) {
    return isLoading ? <Spinner {...props} /> : <Component {...props}/>
  }
}

export default ConditionallyRender;
