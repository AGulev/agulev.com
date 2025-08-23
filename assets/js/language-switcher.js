// Language detection utility - available globally
window.LanguageUtils = {
    // Detect browser language and return appropriate language preference
    detectBrowserLanguage: function() {
        const browserLanguages = navigator.languages || [navigator.language] || ['en'];
        const hasRussian = browserLanguages.some(lang => 
            lang.toLowerCase().startsWith('ru') || 
            lang.toLowerCase().startsWith('ru-')
        );
        return hasRussian ? 'ru' : 'en';
    },
    
    // Get saved language or detect from browser
    getInitialLanguage: function() {
        let savedLang = localStorage.getItem('selectedLanguage');
        if (!savedLang || !['ru', 'en', 'all'].includes(savedLang)) {
            savedLang = this.detectBrowserLanguage();
            localStorage.setItem('selectedLanguage', savedLang);
        }
        return savedLang;
    },
    
    // Save language preference
    saveLanguage: function(lang) {
        localStorage.setItem('selectedLanguage', lang);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
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
            const detectedLang = LanguageUtils.detectBrowserLanguage();
            LanguageUtils.saveLanguage(detectedLang);
            
            // Navigate to the detected language page
            navigateToLanguage(detectedLang);
            return true; // Indicate that we navigated
        }
        
        return false; // No navigation occurred
    }
    
    // Initialize language switcher
    function initLanguageSwitcher() {
        const path = window.location.pathname;
        
        // Skip language switcher functionality for archive and tags pages
        if (path === '/archive/' || path === '/tags/') {
            return;
        }
        
        // Try auto-navigation first
        if (autoNavigateIfNeeded()) {
            return; // Don't continue if we navigated
        }
        
        const currentLang = getCurrentLanguage();
        const savedLang = localStorage.getItem('selectedLanguage');
        
        // If on main page and have saved preference, navigate to that language
        if (path === '/' && savedLang && savedLang !== 'all' && savedLang !== currentLang) {
            navigateToLanguage(savedLang);
            return;
        }
        
        setActiveButton(currentLang);
        
        // Add click event listeners
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedLang = this.dataset.lang;
                
                // Save to localStorage
                LanguageUtils.saveLanguage(selectedLang);
                
                // Navigate to appropriate page
                navigateToLanguage(selectedLang);
            });
        });
    }
    
    // Initialize on page load
    initLanguageSwitcher();
}); 