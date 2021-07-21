import React from "react"
import faker from 'faker'
import BlogDetails from './BlogDetails'



export default function App() {
  return <div>
    <BlogDetails author="Jack"
          date={"13pm"}
          text={"Zoom"}
          avatar={faker.image.avatar()}
    />
    <BlogDetails author={"Nick"}
          date={"12pm"}
          text={"Hello there!"}
          avatar={faker.image.avatar()}
    />
    <BlogDetails author={"Jay"}
          date={"13pm"}
          text={"Yo!"}
          avatar={faker.image.avatar()}
    />
  </div>
}
