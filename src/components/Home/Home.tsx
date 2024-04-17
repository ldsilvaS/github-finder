import { useState, KeyboardEvent } from "react"


import { Container, TextContainer, InputContainer, ResultContainer, FormUser } from "./style"
import { UserProps } from "../../types/user"
import toast, { Toaster } from 'react-hot-toast';

import { LuUsers2 } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";


const Home = () => {   

    const [userName, setUserName] = useState("")    // Variável que guardo a digitação do usuário

    const [user, setUser] = useState<UserProps | null>(null);   // Setando a variável que vai receber o response.

    const [userRepo, setUserRepo] = useState([]);

    const loadUser = async (userName: string) => {     // Função que pega o response da API
        
        const response = await fetch(`https://api.github.com/users/${userName}`)  // Pegando o resultado da API, passando como parâmetro o userName.
        
        const response_repos = await fetch(`https://api.github.com/users/${userName}/repos`)
        
        const data = await response.json()  // Colocando o response em forma de json dentro do data.

        const data_repos = await response_repos.json()

        //console.log(data_repos)

        //console.log(data);

        if(!data.message){    // Se não encontrar nenhum erro.
            const {name, login, avatar_url, company, location, followers, following, html_url} = data    // Pegando apenas esses valores do data.

            const userData: UserProps = {
                name, login, avatar_url, company, location, followers, following, html_url    // Guardando esses valores dentro da variável userData.
            };
            
            setUser(userData)    // Setando o usuário

            setUserRepo(data_repos);

            console.log(userRepo);

            setTimeout(() => {   // Limpando o input
                setUserName("");
            }, 2000)
            
        }else {      // Se encontrar error
            toast.error('Usuário não encontrado!', {
                duration: 3000,
                position: 'top-center',
            });

            setUser(null);

            console.log("Usuário não encontrado")

            setTimeout(() => {
                setUserName("");
            }, 2000)
        }
        
    }

    const resultEnter = (e: KeyboardEvent) => {  // Função para fazer a ação também com o Enter
        if(e.key === 'Enter'){
            loadUser(userName);
        }
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
                        onKeyDown={resultEnter}
                    />
                    <button className="button" onClick={() => loadUser(userName)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                        </svg>
                        <div className="text">Search</div>
                    </button>
                </InputContainer>
                <Toaster/>
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