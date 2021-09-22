const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElements = document.querySelectorAll('[data-tabs-field]');

const designTitles = document.querySelectorAll('.design__title');

for(let btn of tabsHandlerElements){
    btn.addEventListener('click', () => {
        tabsHandlerElements.forEach(item => {
            item.classList.remove('design-list__item_active');
            btn.classList.add('design-list__item_active')
        })

        tabsContentElements.forEach(element => {
            element.dataset.tabsField === btn.dataset.tabsHandler
                                       ? element.classList.remove('hidden')
                                       : element.classList.add('hidden');
        });

        designTitles.forEach(title => title.classList.toggle('hidden'));
    });
};