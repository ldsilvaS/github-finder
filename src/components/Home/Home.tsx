import { useState } from "react"


import { Container, TextContainer, InputContainer, ResultContainer, FormUser } from "./style"
import { UserProps } from "../../types/user"

import { LuUsers2 } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";


const Home = () => {

    const [userName, setUserName] = useState("")

    const [user, setUser] = useState<UserProps | null>(null);

    const loadUser = async (userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json()

        console.log(data);

        const {name, login, avatar_url, company, location, followers, following, html_url} = data

        const userData: UserProps = {
            name, login, avatar_url, company, location, followers, following, html_url
        };

        setUser(userData)

        
    }

    const urlImage = user?.avatar_url;

    const visitProfile = () => {
        if(user && user.html_url){
            window.open(user.html_url, "_blank");
        }
    }


    
    return(
        <>
            <Container>
                <TextContainer>
                    <h1>GitHub Finder</h1>
                    <p>Encontre qualquer perfil do GitHub com apenas um clique!</p>
                </TextContainer>
                <InputContainer>
                    <input
                        type="text"
                        placeholder="GitHub Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button className="button" onClick={() => loadUser(userName)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        <div className="text">Search</div>
                    </button>
                </InputContainer>
            </Container>
            {!user ? "" : 
                <ResultContainer>
                    <FormUser>
                        <img className="avatar" src={urlImage}></img>
                        <p className="userName">{user.name}</p>
                        <p className="userLogin">{user.login}</p>
                        <button className="visitUrl" onClick={visitProfile}>Visitar</button>
                        <div className="div-row">
                            <LuUsers2/>
                            <p className="followers">{user.followers}<span>followers</span></p>
                            <span className="dot-follow">·</span>
                            <p className="followers">{user.following}<span>following</span></p>
                            
                        </div>
                        <p className="company">
                            <GoOrganization />
                            <span>{user.company}</span>
                        </p>
                        <p className="location">
                            <IoLocationOutline />
                            <span>{user.location}</span>
                        </p>
                    </FormUser>
                    
                </ResultContainer>
            }
            
        </>
    )



}

export default Home