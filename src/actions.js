"use server";

export async function addToCart(prevState, queryData) {
    const itemTitle = queryData.get('itemTitle');
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      message: `${itemTitle} added to cart!`,
      size: prevState.size + 1
    };
}
