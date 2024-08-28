"use client"
import React, { useEffect, useState } from 'react'
import EditFeedbackField from '@/components/FeedbackFields/EditFeedbackField'
const Page = ({params}) => {
    const id = params.id;
  

  return (
    <div>
        <EditFeedbackField id={id}/>
    </div>
  )
}

export default Page
