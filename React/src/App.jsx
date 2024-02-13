import Write from "./text.jsx"
import PropTypes from 'prop-types'
function App() {

  return (
    <>
      <Write name={false?'helo':33}/>
      <Write name='Maa' />
      <Write></Write>
    </>
  )
}

Write.propTypes={
  name:PropTypes.string,
}
Write.defaultProps={
  name:'SOme',
}

export default App
