import React from 'react'

import { CategoryCard } from 'category-card'
import 'category-card/dist/index.css'

const App = () => {
  return <CategoryCard imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxks_DB3i-aU7oxs1njJGoZ1UowanGg8c5MpLPrXvADKTcIC59u-RI127sYu7amSQOKpE&usqp=CAU' onClick={() => alert('you are clicked the component')} categoryName='Drinks' />
}

export default App
