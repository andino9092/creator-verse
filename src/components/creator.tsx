import { useNavigate } from "react-router-dom"

export interface CreatorProps{
    id: string,
    name: string,
    url: string, 
    description: string,
    imageUrl: string,

}

export default function Creator({id, name, url, description, imageUrl}: CreatorProps){

    return (
        <div>
            
            {id}
            <h1>
                {name}
            </h1>
            {url}
            {description}
            <img src={imageUrl} alt="imageUrl"></img>

        </div>
    )
}