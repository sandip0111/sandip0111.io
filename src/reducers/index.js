import { combineReducers} from "redux";

const songReducer =()=>{

    return [
        {title :'No Scurbs',duration :'4:05'},
        {title :'Macarena',duration :'2:30'},
        {title :'All Star',duration :'3:15'},
        {title :'I Want it that way',duration :'6:05'}
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{

    if(action.type === 'SELECTED_SONG'){
        return action.payload ;
    }

    return selectedSong;

};

export default combineReducers({
    songs : songReducer,
    selectedSongReducer : selectedSongReducer
});