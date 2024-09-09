import React from 'react'

interface CommentType{
    name: string,
    text: string,
    image: string
}

function Comment({name, text, image} : CommentType) {
  return (
    <div className="aspect-video p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
    <div className="flex gap-4 items-center">
      <div className="w-12 h-12">
        <img className="w-12 h-12 object-cover rounded-full" alt='comment' src={image} loading="lazy"/>
      </div>
        <h6 className="text-lg font-medium text-gray-700">{name}</h6>
    </div>
    <p className="mt-8">{text}</p>
  </div>
  )
}

export default Comment
