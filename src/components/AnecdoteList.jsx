import { useDispatch, useSelector } from "react-redux"
import { updateVote } from "../reducers/anecdoteReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const orderByvotes = (a, b) => b.votes - a.votes
    const anecdotes = useSelector(({filter, anecdotes}) => {
      if(filter === '') {
        return anecdotes
      }
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
    )

    const vote = (id, content) => {
        console.log('vote', id)
        dispatch(updateVote(id))
        dispatch(setNotification(`You voted ${content}`))
        setTimeout(() => {
          dispatch(clearNotification())
        }, 5000)
    }

    return (
        <div>
          {[...anecdotes].sort(orderByvotes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
              </div>
            </div>
          )}
        </div>
      )
}

export default AnecdoteList