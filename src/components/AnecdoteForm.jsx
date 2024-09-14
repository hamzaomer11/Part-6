import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { clearNotification, setNotification } from "../reducers/notificationReducer"

const NewAnecdote = () => {
    const dispatch = useDispatch()
    
    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
        dispatch(setNotification(`You add the anecdote: ${content}`))
        setTimeout(() => {
          dispatch(clearNotification())
        }, 5000)
    }

    return (
      <form onSubmit={addAnecdotes}>
        <h2>create new</h2>
        <div>
            <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote