// NotePad Pro - Konfigürasyon Dosyası
// Bu dosyayı Formspree hesabınızı kurduktan sonra güncelleyin

const CONFIG = {
    // Formspree Form Endpoint
    // 1. https://formspree.io adresinden hesap açın
    // 2. Yeni form oluşturun
    // 3. Aldığınız form ID'sini aşağıya ekleyin
    FORMSPREE_ENDPOINT: 'https://formspree.io/f/mvgqnpar',
    
    // Email ayarları (Formspree otomatik olarak yapacak)
    // Geri bildirimler bu email adresine gelecek
    ADMIN_EMAIL: 'garazovski@gmail.com',
    
    // Uygulama ayarları
    APP_NAME: 'NotePad Pro',
    VERSION: '1.0.0',
    
    // Formspree form konfigürasyonu
    FORM_CONFIG: {
        // Spam koruması
        honeypot: true,
        // Email doğrulama
        confirmation: true,
        // Özel teşekkür mesajı
        next: null
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
