const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
    let title = item.querySelector('h2'),
        elements = item.querySelectorAll('li')
    console.log(`Category: ${title.textContent}`)
    console.log(`Amount: ${elements.length}`)
})