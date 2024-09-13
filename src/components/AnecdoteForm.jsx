import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const NewAnecdote = () => {
    const dispatch = useDispatch()
    
    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
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