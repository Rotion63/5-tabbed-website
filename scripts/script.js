document.addEventListener("DOMContentLoaded", function () {
    // Load the Home tab content and update URL by default
    loadTab(1);
  });
  
  function openTab(tabIndex) {
    loadTab(tabIndex);
    const tabName = getTabName(tabIndex);
    const url = `/${tabName}`;
    history.pushState({tabIndex}, null, url);
  }
  
  function loadTab(tabIndex) {
    switch (tabIndex) {
      case 1:
        loadHomeContent();
        break;
      case 2:
        loadBlogsContent();
        break;
      case 3:
        loadAboutContent();
        break;
      case 4:
        loadWeeklyChallangesContent();
        break;
      case 5:
        loadWinnersContent();
        break;
      // Add cases for other tabs here (3, 4, and 5)
      default:
        console.log("Invalid tab index.");
    }
  }
  
  function getTabName(tabIndex) {
    switch (tabIndex) {
      case 1:
        return "home";
      case 2:
        return "blogs";
      case 3:
        return "about";
      case 4:
        return "weekly_challenges";
      case 5:
        return "winners";
      // Add cases for other tabs here (3, 4, and 5)
      default:
        console.log("Invalid tab index.");
        return "";
    }
  }
  
  window.addEventListener("popstate", function(event) {
    const tabIndex = event.state ? event.state.tabIndex : 1;
    loadTab(tabIndex);
  });
  