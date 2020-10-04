import React from 'react';
import { connect } from 'react-redux';

 const SongDetails=({song})=>{
      // console.log(props); 
      if(!song){
          return <h1>Click on a Song</h1>
      }
    return (
                <div>
                    <h1>Song Details :</h1>
                    <h1>{song.title}</h1>
                     <p>{song.duration}</p>
                </div>
            );
 }

const mapStateToProps=(state)=>{

    return {song :state.selectedSongReducer };
}

 export default connect(mapStateToProps)(SongDetails);