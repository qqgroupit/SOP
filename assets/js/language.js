// Language Switcher for Camera and Crop Parameters SOP
// Supports Chinese (Traditional) and English

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'zh';
        this.init();
    }

    init() {
        console.log('LanguageSwitcher init started');
        console.log('Current language:', this.currentLang);

        // Apply saved language on load
        this.applyLanguage(this.currentLang);

        // Add event listeners to language buttons
        const buttons = document.querySelectorAll('.lang-btn');
        console.log('Found buttons:', buttons.length);

        buttons.forEach(btn => {
            console.log('Adding listener to button:', btn.dataset.lang);
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                console.log('Button clicked, switching to:', lang);
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage(lang);
    }

    applyLanguage(lang) {
        console.log('Applying language:', lang);

        // Hide all language content
        const allElements = document.querySelectorAll('[data-lang]');
        console.log('Total elements with data-lang:', allElements.length);

        allElements.forEach(el => {
            // Don't hide buttons
            if (el.tagName !== 'BUTTON') {
                el.style.display = 'none';
                console.log('Hiding:', el.tagName, el.dataset.lang);
            }
        });

        // Show selected language content
        const selectedElements = document.querySelectorAll(`[data-lang="${lang}"]`);
        console.log('Elements to show for', lang, ':', selectedElements.length);

        selectedElements.forEach(el => {
            // Don't modify buttons
            if (el.tagName !== 'BUTTON') {
                el.style.display = 'block';
                console.log('Showing:', el.tagName, el.dataset.lang);
            }
        });

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update page title if exists
        const titleElement = document.querySelector(`[data-lang="${lang}"] .page-title`);
        if (titleElement) {
            document.title = titleElement.textContent;
        }
    }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});

// Translation helper for dynamic content
const translations = {
    zh: {
        home: '首頁',
        back: '返回',
        next: '下一步',
        previous: '上一步',
        save: '保存',
        cancel: '取消',
        confirm: '確認',
        warning: '警告',
        note: '注意',
        step: '步驟'
    },
    en: {
        home: 'Home',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        warning: 'Warning',
        note: 'Note',
        step: 'Step'
    }
};

// Get translation function
function t(key) {
    const lang = localStorage.getItem('language') || 'zh';
    return translations[lang][key] || key;
}
