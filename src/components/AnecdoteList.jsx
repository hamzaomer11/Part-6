import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

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

    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
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
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
        </div>
      )
}

export default AnecdoteList