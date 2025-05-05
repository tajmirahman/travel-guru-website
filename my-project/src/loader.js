export const hotelDetailsLoader = async ({ params }) => {
    const res = await fetch('/hotelData.json'); // use full path (root-relative)
    const data = await res.json();
  
    const hotel = data.find(h => h.id === Number(params.id));
  
    if (!hotel) {
      throw new Response("Hotel not found", { status: 404 });
    }
  
    return hotel; // Return only the matched hotel
  };
  