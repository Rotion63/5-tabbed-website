function loadHomeContent() {
    const tabContentDiv = document.getElementById("tabContent");
    tabContentDiv.innerHTML = `
      <h2>Home</h2>
      <p>Welcome to our homepage!</p>
      <!-- Add additional content specific to the Home tab here -->
    `;

      // Update Open Graph metadata for the Home tab
  document.querySelector('meta[property="og:title"]').setAttribute('content', 'Home Page');
  document.querySelector('meta[property="og:description"]').setAttribute('content', 'Welcome to our homepage!');
  document.querySelector('meta[property="og:image"]').setAttribute('content', 'home-image.jpg');
  }
  