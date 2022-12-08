import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const CounterApp = ({value}) => {
   // console.log('render');
   const [counter, setCounter ] = useState ( value )

   const handleAdd = () => {
      setCounter(counter + 1)
   }

   const handleRest = () => {
      setCounter(counter - 1 )
   }

   const handleReset = () => {
      setCounter(value)
   }

  return (
   <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      {/* los argumentos del onClick pasan a handleAdd */}
      <button onClick={ handleAdd }> + </button>
      <button onClick={ handleRest }> - </button>
      <button onClick={ handleReset }> Reset </button>
   </>
  )
}

CounterApp.propTypes = {
   value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
   value: 0,
}
export default CounterApp