import React from 'react'

const page = ({ params }: { params: { id: string}}) => {
    const { id } = params;

    return (
    <div>Esse é o usuario {id}</div>
  )
}

export default page