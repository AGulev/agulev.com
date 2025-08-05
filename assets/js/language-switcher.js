document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Detect browser language and return appropriate language preference
    function detectBrowserLanguage() {
        // Get browser language preferences
        const browserLanguages = navigator.languages || [navigator.language] || ['en'];
        
        // Check if Russian is in the language list
        const hasRussian = browserLanguages.some(lang => 
            lang.toLowerCase().startsWith('ru') || 
            lang.toLowerCase().startsWith('ru-')
        );
        
        // If Russian is detected, prefer Russian, otherwise use English
        return hasRussian ? 'ru' : 'en';
    }
    
    // Get current language from URL path
    function getCurrentLanguage() {
        const path = window.location.pathname;
        
        // Check if we're on a language-specific page
        if (path.startsWith('/ru/')) {
            return 'ru';
        } else if (path.startsWith('/en/')) {
            return 'en';
        } else {
            // On the main page, return 'all'
            return 'all';
        }
    }
    
    // Set active button based on current language
    function setActiveButton(lang) {
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Navigate to the appropriate page for the selected language
    function navigateToLanguage(lang) {
        const currentPage = window.location.search;
        
        let newUrl;
        
        if (lang === 'all') {
            // Navigate to main page
            newUrl = '/';
        } else if (lang === 'ru') {
            // Navigate to Russian posts page
            newUrl = '/ru/';
        } else if (lang === 'en') {
            // Navigate to English posts page
            newUrl = '/en/';
        }
        
        // Always navigate to the main page (page 1) of the target language
        // This prevents issues when switching from a page that doesn't exist in the target language
        
        // Add search parameters if any
        if (currentPage) {
            newUrl += currentPage;
        }
        
        window.location.href = newUrl;
    }
    
    // Auto-navigate based on browser language (only on first visit)
    function autoNavigateIfNeeded() {
        const path = window.location.pathname;
        const savedLang = localStorage.getItem('selectedLanguage');
        
        // Only auto-navigate if:
        // 1. We're on the main page
        // 2. No language preference is saved OR saved language is invalid
        // 3. User hasn't explicitly chosen a language
        if (path === '/' && (!savedLang || !['ru', 'en', 'all'].includes(savedLang))) {
            const detectedLang = detectBrowserLanguage();
            localStorage.setItem('selectedLanguage', detectedLang);
            
            // Navigate to the detected language page
            navigateToLanguage(detectedLang);
            return true; // Indicate that we navigated
        }
        
        return false; // No navigation occurred
    }
    
    // Initialize language switcher
    function initLanguageSwitcher() {
        // Try auto-navigation first
        if (autoNavigateIfNeeded()) {
            return; // Don't continue if we navigated
        }
        
        const currentLang = getCurrentLanguage();
        setActiveButton(currentLang);
        
        // Add click event listeners
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedLang = this.dataset.lang;
                
                // Save to localStorage
                localStorage.setItem('selectedLanguage', selectedLang);
                
                // Navigate to appropriate page
                navigateToLanguage(selectedLang);
            });
        });
    }
    
    // Initialize on page load
    initLanguageSwitcher();
}); 