import React, { useEffect } from 'react'



const ApiCard = () => {

    // using usestate hooks
    const [data, setData] = setState()
    // using useeffect hooks

    useEffect(() => {

        fetch("https://reqres.in/api/users/");
    .then((Response) => Response.json);
        .then((data) => setData(data.message));
        .catch(error=> console.log(error))

}, [data])


return (
    <div>
        <div className= "ashi">
            <div>
                <div>
                    {data}
                    </div>
                    </div>
                    </div>
                    </div>
)
}

export default ApiCard;