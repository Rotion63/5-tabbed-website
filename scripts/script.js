function openTab(tabIndex) {
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
  