import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import * as api from '../../../../services/api'
import useAuth from '../../../../hooks/useAuth'
import styles from '../styles'

function Views({ count, id, update, setUpdate }){
  const { auth } = useAuth()
  const [views, setViews] = useState(count)

  useEffect(() => {
    if(update){
      api.updateViewsCount(auth, id)
      .then(response => {
        console.log(response.data.views)
        setViews(response.data.views)
        setUpdate(!update)
      })
    }
  }, [update, auth, id, setUpdate])

  return (
    <Typography sx={styles.text}>Visualizações: {views}</Typography>
  )
}

export default Views