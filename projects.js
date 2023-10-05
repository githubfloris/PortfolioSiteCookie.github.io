var projectPage;



function openInfo(projectValue) {
    switch (projectValue) {
      case 0:
        document.getElementById("pjctInfo0").style.height = "100%";
        projectPage = 0;
        break;
      case 1:
        document.getElementById("pjctInfo").style.height = "100%";
        projectPage = 1;
        break;
      case 2:
        document.getElementById("pjctInfo2").style.height = "100%";
        projectPage = 2;
        break;
      case 3:
        document.getElementById("pjctInfo3").style.height = "100%";
        projectPage = 3;
        break;
      case 4:
        document.getElementById("pjctInfo4").style.height = "100%";
        projectPage = 4;
        break;
    }
  }
  
  function closeInfo(projectValue) {
    switch (projectValue) {
      case 0:
        document.getElementById("pjctInfo0").style.height = "0%";
        break;
      case 1:
        document.getElementById("pjctInfo").style.height = "0%";
        break;
      case 2:
        document.getElementById("pjctInfo2").style.height = "0%";
        break;
      case 3:
        document.getElementById("pjctInfo3").style.height = "0%";
        break;
      case 4:
        document.getElementById("pjctInfo4").style.height = "0%";
        break;
    }
  }

  //Overlay
  function openImgOverlay() {
    document.getElementById("imgOverlay").style.display = "block";
      setTimeout(function(){document.getElementById("imgOverlay").style.opacity = "100%";}, 1);
    }
    
    function closeImgOverlay() {
      document.getElementById("imgOverlay").style.opacity = "0%";
      setTimeout(function(){document.getElementById("imgOverlay").style.display = "none";}, 300);
    
    }

      //Overlay Before After
function openImgOverlayBA() {
  document.getElementById("imgOverlayBA").style.display = "block";
    setTimeout(function(){document.getElementById("imgOverlayBA").style.opacity = "100%";}, 1);
  }
  
  function closeImgOverlayBA() {
    document.getElementById("imgOverlayBA").style.opacity = "0%";
    setTimeout(function(){document.getElementById("imgOverlayBA").style.display = "none";}, 300);
  
  }
  
  function selectImage(si) {
      var imgSrc = si.src;
      document.getElementById("imgOverlayImage").src = imgSrc;
  }
  function selectText(text) {
    var titleText = text.getAttribute('Titletext');
    var text = text.getAttribute('text');
    console.log(titleText)
    console.log(text)
    console.log(projectPage)


    switch (projectPage) {
      case 0:
        document.getElementById("imgOverlayTitle").innerHTML = titleText;
        document.getElementById("imgOverlayText").innerHTML = text;
      
        document.getElementById("imgOverlayTitleMain0").innerHTML = titleText;
        document.getElementById("imgOverlayTextMain0").innerHTML = text;
       
        break;
      case 1:
        document.getElementById("imgOverlayTitle").innerHTML = titleText;
        document.getElementById("imgOverlayText").innerHTML = text;
      
        document.getElementById("imgOverlayTitleMain").innerHTML = titleText;
        document.getElementById("imgOverlayTextMain").innerHTML = text;
       
        break;
      case 2:
        document.getElementById("imgOverlayTitle").innerHTML = titleText;
        document.getElementById("imgOverlayText").innerHTML = text;
      
        document.getElementById("imgOverlayTitleMain2").innerHTML = titleText;
        document.getElementById("imgOverlayTextMain2").innerHTML = text;

        break;
      case 3:
        document.getElementById("imgOverlayTitle").innerHTML = titleText;
        document.getElementById("imgOverlayText").innerHTML = text;

        document.getElementById("imgOverlayTitleBA").innerHTML = titleText;
        document.getElementById("imgOverlayTextBA").innerHTML = text;
      
        document.getElementById("imgOverlayTitleMain3").innerHTML = titleText;
        document.getElementById("imgOverlayTextMain3").innerHTML = text;

        break;
        case 4:
        document.getElementById("imgOverlayTitle").innerHTML = titleText;
        document.getElementById("imgOverlayText").innerHTML = text;

        document.getElementById("imgOverlayTitleBA").innerHTML = titleText;
        document.getElementById("imgOverlayTextBA").innerHTML = text;
      
        document.getElementById("imgOverlayTitleMain4").innerHTML = titleText;
        document.getElementById("imgOverlayTextMain4").innerHTML = text;

        break;
    }
  }

  function bAImage(imageValue) {
    switch (imageValue) {
      case 1:
        document.getElementById("imgOverlayImageAfter").src = "images/projects/li/li_BA1_After.jpg";
        document.getElementById("imgOverlayImageBefore").src = "images/projects/li/li_BA1_Before.jpg";
        break;
      case 2:
        document.getElementById("imgOverlayImageAfter").src = "images/projects/li/li_BA2_After.jpg";
        document.getElementById("imgOverlayImageBefore").src = "images/projects/li/li_BA2_Before.jpg";
        break;
      case 3:
        document.getElementById("imgOverlayImageAfter").src = "images/projects/wi17/Map1_dev2.jpg";
        document.getElementById("imgOverlayImageBefore").src = "images/projects/wi17/Map1_dev1.jpg";
        break;

    }
  }
  