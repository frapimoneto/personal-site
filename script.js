document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('languageToggle');
    const languageLabel = document.getElementById('languageLabel');
    const elements = document.querySelectorAll('[data-pt]');
  
    // Function to switch language
    function switchLanguage() {
      const isEnglish = toggle.checked;
  
      elements.forEach(element => {
        if (isEnglish) {
          element.innerHTML = element.getAttribute('data-en');
        } else {
          element.innerHTML = element.getAttribute('data-pt');
        }
      });
  
    }
  
    // Add event listener to the toggle switch
    toggle.addEventListener('change', switchLanguage);
  
    // Initialize language based on the current state of the toggle
    switchLanguage();
  });
  