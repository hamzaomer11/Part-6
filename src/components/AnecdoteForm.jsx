import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { clearNotification, setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const NewAnecdote = () => {
    const dispatch = useDispatch()
    
    const addAnecdotes = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(addAnecdote(newAnecdote))
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