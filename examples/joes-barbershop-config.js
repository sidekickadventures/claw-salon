/**
 * ClawSalon Configuration - Demo: Joe's Barbershop
 * 
 * This shows how easy it is to customize for a client!
 */

const SALON_CONFIG = {
    // ============================================
    // JOE'S BARBERSHOP - Custom Branding
    // ============================================
    
    name: "Joe's Barbershop",
    greeting: "Welcome to Joe's! 💈 What can we do for you today?",
    
    // ============================================
    // SERVICES - Barbershop-specific
    // ============================================
    
    services: [
        { id: "haircut", name: "Haircut", icon: "💇", price: 25 },
        { id: "beard", name: "Beard Trim", icon: "🧔", price: 15 },
        { id: "shave", name: "Hot Shave", icon: "🪒", price: 20 },
        { id: "combo", name: "Haircut + Beard", icon: "💈", price: 35 },
        { id: "kids", name: "Kids Cut", icon: "👦", price: 18 },
        { id: "senior", name: "Senior Cut", icon: "👴", price: 20 }
    ],
    
    // No chair fee for barbershops
    chairFee: { min: 0, max: 0 },
    
    // ============================================
    // HOURS
    // ============================================
    
    hours: [
        "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", 
        "4:00 PM", "5:00 PM", "6:00 PM"
    ],
    
    // ============================================
    // STYLISTS
    // ============================================
    
    stylists: [
        { id: "joe", name: "Joe (Owner)" },
        { id: "mike", name: "Mike" },
        { id: "any", name: "First Available" }
    ],
    
    // ============================================
    // DISCLAIMER
    // ============================================
    
    priceDisclaimer: "Prices may vary. Final price confirmed at checkout."
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SALON_CONFIG;
}