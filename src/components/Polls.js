import React from 'react'
import 

const key = 'KQ6MGP8J8HMZGTJTJYM8MYNS74MF';
const base = 'https://api.pollsapi.com/v1';

export default async function Polls() {
    const response = await fetch(base + '/create/poll'  + key)
  return (
    <div>Polls</div>
  )
}
