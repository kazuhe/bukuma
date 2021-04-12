import axios from 'axios'

export default function({ $axios }) {
  $axios.onRequest(config => {
    if (process.env.ACCESS_TOKEN) {
      axios.defaults.headers.common.Authorization = process.env.ACCESS_TOKEN
    }
    return config
  })
}
