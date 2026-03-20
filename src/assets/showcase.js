const projectList =[
    {title : "Calculator", linkPreview : "https://inkyless.github.io/calculator-project/",
        tags : ["WebDev"],
        // description : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    githubLink : "https://github.com/inkyless/calculator-project", thumbnail : "../src/calculator-thumnail.png"},
    {title : "Admin Dashboard", linkPreview : "https://inkyless.github.io/admin-dashboard/",
        tags : ["WebDev"],
        // description : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    githubLink : "https://github.com/inkyless/admin-dashboard", thumbnail : "../src/dashboard-thumnail.png"},
    {title : "Landing Page", linkPreview : "https://inkyless.github.io/basic-landing-page/",
        tags : ["WebDev", "Web Design"],
        // description : "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    githubLink : "https://github.com/inkyless/basic-landing-page", thumbnail : "../src/landing-page-thumnail.png"},
]

function createTags(tagsArray){
 const tagsList = document.createElement("ul")
 tagsList.classList.add("tagsList")
 tagsList.style.listStyle = "none"
 tagsList.style.display =  "flex";
 tagsList.style.flexDirection =  "row";
 tagsList.style.flexWrap =  "wrap";
 tagsList.style.gap =  "0.5em";
 
 tagsArray.forEach(tag => {
    const tagName = document.createElement("li")
    tagName.textContent = tag
    tagName.style.color = "white"
    tagName.className = "tags"
    if (tagName.textContent == "WebDev"){
        tagName.style.backgroundColor = "#8ED5E4"
    } else if (tagName.textContent == "Web Design"){
                tagName.style.backgroundColor = "#D44E65"
    } else{
                tagName.style.backgroundColor = "#D4914E"

    }
    tagsList.append(tagName)
 });
 return tagsList;
}

function createThumbnailAndTitle(thumbLink, textTitle, textDescription,tagsArray, card){
    //Create the base elements needed (thumbnail, title, description)
    const thumbnail = document.createElement("div")
    thumbnail.className = "card-image"
    const title = document.createElement("h3")
    const description = document.createElement("p")
    const tagsList = createTags(tagsArray)
    card.appendChild(thumbnail)
    card.appendChild(title)
    card.append(tagsList)
    card.appendChild(description)

    thumbnail.style.backgroundImage = `url(${thumbLink})`;
    title.textContent = textTitle;
    description.textContent = textDescription;
}

function createButtons(previewValue, githubValue, card) { 
    //Add a div to fit two buttons
    const buttonList = document.createElement("div")
    buttonList.className = "button-list"
    card.appendChild(buttonList)

    //Create base buttons needed (live-preview & github link)
    const previewLink =   document.createElement("a")
    previewLink.setAttribute("id", "preview-link")
    previewLink.target = "_blank";
    previewLink.rel ="noopener noreferrer";
    previewLink.href = previewValue;

    const githubLink =  document.createElement("a")
    githubLink.setAttribute("id", "github-link")
    githubLink.target = "_blank";
    githubLink.rel ="noopener noreferrer";
    githubLink.href= githubValue

    const livePreview = document.createElement("button")
    livePreview.className = "live-preview"
    livePreview.textContent = "Live Preview"
    const githubButton = document.createElement("button")
    githubButton.className = "github-button"
    githubButton.textContent = "Github"

    const previewIcon = document.createElement("i")
    previewIcon.textContent = "preview";
    previewIcon.classList.add("material-icons");

    const githubIcon = document.createElement("i")
    githubIcon.textContent = "code";
    githubIcon.classList.add("material-icons")

    // First add button element to link element then append it to div
    previewLink.appendChild(previewIcon)
    githubLink.appendChild(githubIcon)

    previewLink.appendChild(livePreview)
    githubLink.appendChild(githubButton)

    buttonList.appendChild(previewLink)
    buttonList.appendChild(githubLink)


}


function createProjectCard(array) {
    const cardList = document.querySelector(".card-list")
    array.map((item) => {
        const getCard = document.createElement("article")
        getCard.className = "card"

        createThumbnailAndTitle(item.thumbnail, item.title, item.description, item.tags, getCard);
        createButtons(item.linkPreview, item.githubLink, getCard);

        cardList.appendChild(getCard)

    });

    
}
createProjectCard(projectList)