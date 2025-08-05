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
    
    // Show/hide posts based on selected language
    function filterPostsByLanguage(lang) {
        const posts = document.querySelectorAll('.post');
        const noPostsMessage = document.querySelector('.no-posts-found');
        
        let visibleCount = 0;
        
        posts.forEach(post => {
            const postLanguage = post.dataset.language;
            
            if (lang === 'all' || postLanguage === lang) {
                post.style.display = 'block';
                visibleCount++;
            } else {
                post.style.display = 'none';
            }
        });
        
        // Show/hide "no posts" message
        if (noPostsMessage) {
            if (visibleCount === 0) {
                noPostsMessage.style.display = 'block';
            } else {
                noPostsMessage.style.display = 'none';
            }
        }
    }
    
    // Initialize language switcher
    function initLanguageSwitcher() {
        const currentLang = getCurrentLanguage();
        setActiveButton(currentLang);
        
        // If we're on the main page, filter posts by the current language selection
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            const savedLang = localStorage.getItem('selectedLanguage') || 'all';
            setActiveButton(savedLang);
            filterPostsByLanguage(savedLang);
        }
        
        // Add click event listeners
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const selectedLang = this.dataset.lang;
                
                // Save to localStorage
                localStorage.setItem('selectedLanguage', selectedLang);
                
                // If we're on the main page, just filter posts
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    setActiveButton(selectedLang);
                    filterPostsByLanguage(selectedLang);
                } else {
                    // Navigate to appropriate page
                    navigateToLanguage(selectedLang);
                }
            });
        });
    }
    
    // Initialize on page load
    initLanguageSwitcher();
}); 