const discoverPhone = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=$%7BsearchText%7D')
        .then(res => res.json())
        .then(data => discoverDreamPhone(data))
};
const discoverDreamPhone = data => {
    console.log(data.data)
}