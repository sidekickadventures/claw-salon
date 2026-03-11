/**
 * ClawSalon Configuration
 * 
 * Edit these values to customize for your salon/barbershop
 * 
 * No code changes needed - just edit this file!
 */

const SALON_CONFIG = {
    // ============================================
    // BASIC INFO - Change these for your business
    // ============================================
    
    name: "ClawSalon",           // Bot/salon name
    greeting: "Welcome to ClawSalon! I can help you schedule an appointment, check our services, or start a booking request. What brings you in today?",
    
    // ============================================
    // SERVICES & PRICES - Edit as needed
    // ============================================
    
    services: [
        { id: "braids", name: "Braids", icon: "🧝", price: 120 },
        { id: "haircut", name: "Haircut", icon: "✂️", price: 35 },
        { id: "wig_install", name: "Wig Install", icon: "👩‍🦰", price: 150 },
        { id: "coloring", name: "Hair Coloring", icon: "🎨", price: 120 },
        { id: "styling", name: "Hair Styling", icon: "💇", price: 40 },
        { id: "treatment", name: "Deep Treatment", icon: "🧴", price: 60 },
        { id: "loc", name: "Loc Maintenance", icon: "🪢", price: 90 },
        { id: "natural", name: "Natural Hair Care", icon: "🌿", price: 50 }
    ],
    
    // Base chair fee (added to all services)
    chairFee: { min: 100, max: 150 },
    
    // ============================================
    // SCHEDULING OPTIONS
    // ============================================
    
    hours: [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ],
    
    // Stylist options (set to [] to hide)
    stylists: [
        { id: "any", name: "First Available" },
        { id: "no_preference", name: "No Preference" }
    ],
    
    // ============================================
    // PRICING DISCLAIMER
    // ============================================
    
    priceDisclaimer: "Final pricing depends on hair length, complexity, and materials. Your stylist will confirm the final price after reviewing your hair."
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SALON_CONFIG;
}