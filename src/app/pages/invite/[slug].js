import React from 'react'
import { useRouter } from 'next/router'

const page = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Invite: {router.query.slug}</h1>
    </div>
  )
}

export default page
