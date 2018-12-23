import React from 'react'
// import DefaultLayout from '../containers/DefaultLayout';

const Article = React.lazy(() => import(`@/views/Article`))
const EditArticle = React.lazy(() => import(`@/views/EditArticle`))
const Tag = React.lazy(() => import(`@/views/Tag`))
const NotFound = React.lazy(() => import(`@/views/NotFound`))

export default [
  // { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/home/article', component: Article },
  { path: '/home/editArticle', exact: true, component: EditArticle },
  { path: '/home/editArticle/:id', component: EditArticle },
  { path: '/home/tag', component: Tag },
  { path: '*', component: NotFound }
]
