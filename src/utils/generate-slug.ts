  export function generateSlug (text: string): string{
    return text
    .normalize("NFD") // Normaliza os caracteres para decompor os acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase() // Converte para minúsculas
    .replace(/[^a-z0-9]/g, "-") // Substitui caracteres especiais por hífens
    .replace(/-+/g, "-") // Remove múltiplos hífens consecutivos
    .replace(/^-|-$/g, ""); // Remove hífens no início e no fim
}