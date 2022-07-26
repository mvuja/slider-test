const tabs = document.querySelectorAll('#pregled-proizvoda .tab')
const scrollHandle = document.querySelector('#pregled-proizvoda .tabs-bar-handle')
const firstTab = document.querySelector('.tab[data-first]')
const tabSliders = document.querySelectorAll('.tab-sliders .tab-slider')
const timeoutDisplay = 200
const timeoutClass = 400


// PREPP ON FIRST LOAD
if (scrollHandle) {
  scrollHandle.style.width = `${firstTab.offsetWidth}px`
}
tabSliders.forEach((el) => {
  if (!el.classList.contains('active')) {
    el.style.display = 'none'
  }
})


tabs.forEach((tab) => {

  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')

    if (tab.hasAttribute('data-first')) {
      const width = tab.offsetWidth
      scrollHandle.style.width = `${width}px`
      scrollHandle.style.left = `0`
      scrollHandle.style.transform = `translateX(0)`
      tabSliders.forEach((el) => {
        if (el.hasAttribute('data-first')) {
          setTimeout(() => {
            el.style.display = 'grid'
          }, timeoutDisplay)
          setTimeout(() => {
            el.classList.add('active')
          }, timeoutClass)
        } else {
          el.classList.remove('active')
          setTimeout(() => {
            el.style.display = 'none'
          }, timeoutDisplay)
        }
      })
    } else if (tab.hasAttribute('data-second')) {
      const width = tab.offsetWidth
      scrollHandle.style.width = `${width}px`
      scrollHandle.style.left = `50%`
      scrollHandle.style.transform = `translateX(-50%)`
      tabSliders.forEach((el) => {
        if (el.hasAttribute('data-second')) {
          setTimeout(() => {
            el.style.display = 'grid'
          }, timeoutDisplay)
          setTimeout(() => {
            el.classList.add('active')
          }, timeoutClass)
        } else {
          el.classList.remove('active')
          setTimeout(() => {
            el.style.display = 'none'
          }, timeoutDisplay)
        }
      })
    } else if (tab.hasAttribute('data-third')) {
      const width = tab.offsetWidth
      scrollHandle.style.width = `${width}px`
      scrollHandle.style.left = `100%`
      scrollHandle.style.transform = `translateX(-100%)`
      tabSliders.forEach((el) => {
        if (el.hasAttribute('data-third')) {
          setTimeout(() => {
            el.style.display = 'grid'
          }, timeoutDisplay)
          setTimeout(() => {
            el.classList.add('active')
          }, timeoutClass)
        } else {
          el.classList.remove('active')
          setTimeout(() => {
            el.style.display = 'none'
          }, timeoutDisplay)
        }
      })
    }

  })

})