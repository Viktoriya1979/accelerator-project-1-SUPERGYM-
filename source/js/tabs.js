const tabsWrapperElement = document.querySelector('.price__tabs-wrapper');
const navButtonElements = tabsWrapperElement.querySelectorAll('.price__tab-nav-button');
const contentListElements = tabsWrapperElement.querySelectorAll('.price__tabs-content-list');

contentListElements.forEach((list) => {
  if (list.classList.contains('price__tabs-content-list--nojs')) {
    list.classList.remove('price__tabs-content-list--nojs');
  }
});

function onTabClick(item) {
  item.addEventListener('click', () => {
    const currentNavButton = item;
    const tabId = currentNavButton.getAttribute('data-tab-name');
    const currentContentList = tabsWrapperElement.querySelector(tabId);

    if (!currentNavButton.classList.contains('price__tab-nav-button--active')) {
      navButtonElements.forEach((button) => {
        button.classList.remove('price__tab-nav-button--active');
      });

      contentListElements.forEach((list) => {
        list.classList.remove('price__tabs-content-list--active');
      });

      currentNavButton.classList.add('price__tab-nav-button--active');
      currentContentList.classList.add('price__tabs-content-list--active');
    }
  });
}

const openTab = function () {
  navButtonElements.forEach(onTabClick);
};

openTab();

export { openTab };
