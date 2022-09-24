import './App.css'
import React, { useEffect, useState } from 'react'




function App() {

  const [user, suser] = useState([]);


  const getUsers = async () => {

    const res = await fetch('https://api.github.com/users');
    suser(await res.json());

  }



  useEffect(() => {
    getUsers();
  }, []);



  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <h2>List of GitHub Users</h2>


          <div className="card">
            {
              user.map((Elem) => {
                return (
                  <div  key={Elem.id}>
                  <div>
                    <div className="icard">


                      <div className="image">
                        <img src={Elem.avatar_url} width="100px" style={{}} alt="img" />
                      </div>


                      <div className="content">
                        <h4 className="name">{Elem.login}</h4>
                        <span className="prof"></span>

                       # Api not having required data
                        <div className="mainc">
                          <div className="art">
                            <span className="articles">Articles</span> <span className="number1">38</span> </div>
                          <div className="foll">
                            <span className="followers">Followers</span> <span className="number2">980</span> </div>
                          <div className="rat">
                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                        </div>
                      </div>



                    </div>
                    </div>
                  </div>
                )
              })
            }



          </div>
        </div>
      </div>
    </>
  );
}

export default App;
