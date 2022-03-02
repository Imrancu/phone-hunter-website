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
    if (phones == false) {
        document.getElementById('show-error').style.display = 'block';

    } else {
        document.getElementById('show-error').style.display = 'none';
        const searchResult = document.getElementById('search-result');
        // Previous Data will be disappeared
        searchResult.textContent = '';
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
                <button class="text-white btn btn-success" onclick="phoneDetails('${phone.slug}')">Details</button>
            </div>
        `;
            searchResult.appendChild(div);
        });
    }
};

const phoneDetails = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data));
};
const showPhoneDetails = phone => {
    const singlePhoneDetails = document.getElementById('single-phone-details');
    const div = document.createElement('div');
    div.classList.add('card', 'px-5', 'mb-4', 'mx-auto');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-25 mx-auto pt-4" alt="photo" />
    <div class="card-body">
        <h5>${phone.releaseDate?phone.releaseDate:"Release Date is empty!"}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${phone.mainFeatures.chipSet}</li>
            <li class="list-group-item">${phone.mainFeatures.displaySize}</li>
            <li class="list-group-item">${phone.mainFeatures.memory}</li>
            <li class="list-group-item">${phone.mainFeatures.memory}</li>
            <li class="list-group-item">${phone.mainFeatures.storage}</li>
            <li class="list-group-item">${phone.mainFeatures.sensors}</li>
            <li class="list-group-item">${phone.others?.WLAN?phone.others.WLAN:"This Item is empty"}</li>
            <li class="list-group-item">${phone.others?.Bluetooth?phone.others.Bluetooth:"This Item is empty"}</li>
            <li class="list-group-item">${phone.others?.GPS?phone.others.GPS:"This Item is empty"}</li>
            <li class="list-group-item">${phone.others?.USB?phone.others.USB:"This Item is empty"}</li>
            <li class="list-group-item">${phone.others?.NFC?phone.others.NFC:"This Item is empty"}</li>
            <li class="list-group-item">${phone.others?.Radio?phone.others.Radio:"This Item is empty"}</li>
        </ul>
    </div>
    `;
    // Hide previous phone details
    singlePhoneDetails.textContent = ''
    singlePhoneDetails.appendChild(div);
};