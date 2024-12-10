import { createRoot } from "react-dom/client";
import "./index.css"

const root = createRoot(document.getElementById("root"))

console.log(<h1>Hi</h1>) //creates an object which react can use to fill in the vuew

root.render(
  <Page />
)

function TemporaryName() {
  return (
    <main>
    <img src="src/assets/React_logo_logotype_emblem-2514382006.png" width="40 px" alt="React logo" />

    <h1>Fun facts about React</h1>

    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is Maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
  )
}

function Page() {
  return (
      <div>
      <header>
          <img src = "react-logo.png" width = "40 px" alt = "React Logo"/>
      </header>
      <main>
          <h1>
              Reasons I'm excited to learn React
          </h1>
          <ol>
              <li>High paying job</li>
              <li>Lot of job opportunities</li>
          </ol>
      </main>
      <footer>
          ©2024 Umar development. All rights reserved.
      </footer>
      </div>
      
  )
}
