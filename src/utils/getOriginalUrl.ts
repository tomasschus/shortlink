export const getOriginalUrl = async (hash: string) => {
    const res = await fetch("/api/url", {
        method: 'POST',
        body: JSON.stringify({shortUrl: hash})
    })
    const data = await res.json();
    return data.data;
}
