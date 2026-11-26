export const EMAIL = "nathanwillmartins@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/nathanwmartins/";
export const GITHUB_URL = "https://github.com/NathanWMartins";
export const RESUME_URL = "/CurriculoNathanWill.pdf";

// O wa.me exige o número completo, com o código do país (55).
export const WHATSAPP_DISPLAY = "+55 48 99847-2801";
export const whatsappUrl = (message: string) =>
    `https://wa.me/5548998472801?text=${encodeURIComponent(message)}`;
