export async function asset(asset_name) {
    const path = `/asset/${asset_name}/`;
    const response = await fetch(path);
    const data = await response.text();
    
    return data;
}
