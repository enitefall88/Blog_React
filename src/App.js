import React from "react"
import faker from 'faker'
import BlogDetails from './BlogDetails'
import ApprovalCard from "./ApprovalCard";



export default function App() {
  return <div className="ui container comments">
   <div>
    <ApprovalCard/>
    <BlogDetails author="Jack"
          date={"13pm"}
          text={"Zoom"}
          avatar={faker.image.avatar()}
    />
    </div>
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
