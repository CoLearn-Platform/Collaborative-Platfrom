function App() {
  return (
    <Fragment>
        <Routes>
          <Route path="/" element = {<Layout />}/>
          <Route index element = {<Home />}/>
          <Route path="/" element = {<Project/>}/>
          <Route path="/" element = {<Learing_Room/>}/>
          <Route path="/" element = {<About_Us/>}/>
        </Routes>
    </Fragment>
  )
}

export default App
