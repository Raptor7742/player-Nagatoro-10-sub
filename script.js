const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Arrête de me chauffer, Nagatoro  - épisode 10 VOSTFR",
      description: "Vous regardez",
      image: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/animes/animes%20wallpapers/ijiranaide-nagatorocarousel.jpg",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m202.syncusercontent.com/mfs-60:70f6b3467f2cf5ca144378ae4f408285=============================/p/épisode%2010.mp4?allowdd=0&datakey=pHS9cBQjD2OF3bTzL602ChTFXp5B/JuuqZu2lWV7bYAF1OgWCRSgh9Ssnglq1fXCRCGLZTePuLpWqSlkHOIpFYTy5capT0vsLfquBNhmCzj3aHLpvY2mtfyZtgkhBCOsZ94wuSbr9H82SVgZ6XH01JN8jQpjnkQgFjJXmBsjPju1aAvQIhz96jwmsxa2oEPxRBeogz82b/tAAe9ghu/3gwG/kwtv71CYYGc7ALBZBPq9GgfpHYkXcU1i0rPRKLEmxL9yoqX6EPqUW+unPsj0COrg0sZGv6WeZnQgyA4hyJldTvoHwBg+gjVAzGeyo7+tRCqClnu8vipxBg2NcDwvug&engine=ln-2.3.7.3&errurl=JkZtU1layzfxCPCt3285bPzgulqpeE/oeRdk9MCLeL0lM4h6XUAac4fx5zOxj21JRXirkTWx7mvCe8PQsCqWAnFSGmH11W8rs3z/Ce5CnjMEZn38qPBOcDlP4G+9WfP4kklrrrIXtCxu7iAmS5s+ArVbttSSNEh9QmI1FVIivNzlYPUtP5k10orf/hXkgz4vWyz1M4B1n8K2/HafMvHRr9xFBrKBtEgMPlvZrR2eVVqWywv0xxR6xm1hUPY0IK26aetCLhPO3dMLUZypJHjizekeITlTjEf468h+SplpRrA7jxd30cDyWymuy9Prxiy9UoUaFreTxND8KRtz5/YUCA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJUMzJUE5cGlzb2RlJTIwMTAubXA0IjtmaWxlbmFtZSo9VVRGLTgnJyVDMyVBOXBpc29kZSUyMDEwLm1wNDs&ipaddress=1458994159&linkcachekey=4527df9c0&linkoid=1982890011&mode=101&sharelink_id=9628532230011&timestamp=1672610976246&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=107e8eac84d266f65454338c6a13f294b66f1377&cachekey=60:70f6b3467f2cf5ca144378ae4f408285=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
