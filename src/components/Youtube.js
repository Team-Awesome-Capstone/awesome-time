import React from "react";

function Youtube() {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC-ONELPaxI1nO36Sz9LjWtg&maxResults=1&order=relevance&key=AIzaSyDBHeLTqL8z1l6yGCTRyPv0C95JWt97KwQ`)
.then((livestreamResult) => {
  return (
    livestreamResult.json()
)
.then((data) => {
    let video = data.items
    console.log(data)
    let livestreamContainer = document.querySelector(".youtube-container")
    for(video of video) {
        livestreamContainer.innerHTML += `
       
        <a target="_blank" href="https://www.youtube.com/channel/UC-ONELPaxI1nO36Sz9LjWtg/streams"><img src="${video.snippet.thumbnails.medium.url}"></a>
        `
    }
 
});

  
});
}

export default Youtube;