import React from "react"
import faker from 'faker'
import BlogDetails from './BlogDetails'
import ApprovalCard from "./ApprovalCard";



export default function App() {
  return <div className="ui container comments">
   <div>
    <ApprovalCard>
      <BlogDetails author="Jack"
          date={"13pm"}
          text={"Zoom"}
          avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    </div>
   <ApprovalCard>
     <BlogDetails author={"Nick"}
          date={"12pm"}
          text={"Hello there!"}
          avatar={faker.image.avatar()}
     />
    </ApprovalCard>
    <ApprovalCard>
      <BlogDetails author={"Jay"}
          date={"13pm"}
          text={"Yo!"}
          avatar={faker.image.avatar()}
      />
     </ApprovalCard>
  </div>
}
