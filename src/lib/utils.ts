export const formatPrice = (price: number | null) =>{
    if(!price) return "Sem preço"
    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(price / 100);
}