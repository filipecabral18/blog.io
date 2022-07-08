import { NextApiRequest, NextApiResponse} from 'next'

export default (request : NextApiRequest, response: NextApiResponse)=>{
    const users =[
        {id: 1, name: 'Filipe'},
        {id: 1, name: 'Henrico'},
        {id: 1, name: 'Paulo'},
        {id: 1, name: 'Tiago'},
    ] 

    return response.json(users)
}