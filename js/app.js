const discoverPhone = () => {
    const discoverPhone = document.getElementById('discover-phone');
    const discoverText = discoverPhone.value;
    // Empty input field 
    discoverPhone.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${discoverText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}