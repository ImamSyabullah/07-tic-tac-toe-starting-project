import {useState} from 'react'

export default function Player({initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditClick() {
        setIsEditing(editing => !editing)
        // setIsEditing(editing => !editing)
    }

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value)

    }

    let playerNameBox = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit'

    if (isEditing) {
        playerNameBox = <input type="text" required value={playerName} onChange={handleChange} />
        // btnCaption = 'Save'
    }
    
    return (
        <li>
            <span className="player">
              {playerNameBox}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}