import PropTypes from 'prop-types'

const App = ({ title, subTitle, director }) => {

  return (
  <>
    <h1> {title} </h1>
    <h2> {subTitle} </h2>
    <h3> {director} </h3>
  </>
)}
// especifica los types de las props
App.propTypes = {
  title: PropTypes.string.isRequired,
  subTile: PropTypes.number,
}
// inicializa las props con valores
App.defaultProps = {
  title: 'El bosque',
  subTitle: '1999',
  director: 'Steven'
}

export default App
