import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../../requests"
import { useNotificationDispatch } from "../NotificationContext"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()

  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({ 
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: () => {
      dispatch({
        type: 'SHOW-NOTIFICATION',
        payload: `too short anecdote, must have length 5 or more`
      })
      setTimeout(() =>
        dispatch({
          type: 'HIDE-NOTIFICATION',
          payload: ''
        })
      , 5000)
    }
  })

  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    if(newAnecdoteMutation.isSuccess) {
      dispatch({
        type: 'SHOW-NOTIFICATION',
        payload: `anecdote "${content}" added`
      })
      setTimeout(() =>
        dispatch({
          type: 'HIDE-NOTIFICATION',
          payload: ''
        })
      , 5000)
    }
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
