const discoverPhone = () => {
    const discoverPhone = document.getElementById('discover-phone');
    const discoverText = discoverPhone.value;
    // Empty input field 
    discoverPhone.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${discoverText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDiscoveredPhones(data.data))
}
const showDiscoveredPhones = phones => {
    const searchResult = document.getElementById('search-result');
    // console.log(phones)
    phones.slice(0, 20).forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 p-5 g-5">
                <img src="${phone.image}" class="card-img-top" alt="Photo of phone" />
                <div class="card-body">
                    <h3 class="card-title">${phone.phone_name}</h3>
                    <h5>${phone.brand}</h5>
                </div>
                <button class="text-white btn btn-success" onclick="showPhoneDetails('${phone.slug}')">Details</button>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

const showPhoneDetails = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.mainFeatures));

};