document.getElementById('hamburger').addEventListener('click', () => {
  const mobileMenu = document.querySelector('section.mobile-menu');
  mobileMenu.style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', () => {
  const mobileMenu = document.querySelector('section.mobile-menu');
  mobileMenu.style.display = 'none';
});

const mobileMenuOptions = document.querySelectorAll('ul.mobile-list li');
mobileMenuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const mobileMenu = document.querySelector('section.mobile-menu');
    mobileMenu.style.display = 'none';
  });
});

const popupSection = document.getElementById('popup');
function closePopup() {
  popupSection.classList.add('hide');
}

// Dynamic Implentation of the My WOrk Section
const designNew = document.getElementById('designNew');
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < myWorksArray.length; i += 1) {
    const articleP = document.createElement('article');
    articleP.className += 'project';
    designNew.appendChild(articleP);

    const placeHolder = document.createElement('div');
    placeHolder.className += 'image-placeholder';
    articleP.appendChild(placeHolder);

    const placeHolderImg = document.createElement('img');
    placeHolderImg.alt = 'My Work Snapshot';
    placeHolderImg.src = myWorksArray[i].featuredImage;
    placeHolder.appendChild(placeHolderImg);

    const multi = document.createElement('h2');
    multi.className += 'multi';
    multi.innerHTML = myWorksArray[i].name;
    articleP.appendChild(multi);

    const lang = document.createElement('ul');
    lang.className += 'lang';
    articleP.appendChild(lang);

    for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
      const language = document.createElement('li');
      language.className += 'language';
      language.innerHTML = myWorksArray[i].technologies[j];
      lang.appendChild(language);
    }

    const butt = document.createElement('div');
    butt.className += 'butt';
    articleP.appendChild(butt);

    const btn = document.createElement('button');
    btn.className += 'btn';
    btn.innerHTML = ' See Project';
    butt.appendChild(btn);

    btn.addEventListener('click', () => {
      popupSection.classList.remove('hide');
      const contains = `<div class="card">
      <div class="card-header">
        <img class="close-button" id="closeButton" onClick="closePopup();" src="images/icons/cloasepopup.svg" alt="close Button"/>
      </div>
      <div class="card-body">
        <img src="${
  myWorksArray[i].featuredImage
}" alt="my work Portrait"/>
        <div class="two-columns">
          <h4>Keeping track of hundreds of
            components</h4>
          <div class="display-centered">
            <a href="" class="btn-secondary">See Live <img src="images/icons/live.svg" alt="See PRoject Live"/></a>
            <a href="" class="btn-secondary">See Source <img src="images/icons/github.svg" alt="See Source Code"/></a>
          </div>
        </div>
        <div class="childs">
          <div class="asscories">
            <ul class="card-tags">`;

      let newContains = '';
      for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
        const licontains = `<li>${myWorksArray[i].technologies[j]}</li>`;
        newContains += licontains;
      }
      const conatins2 = `</ul>
             
          </div>
          <p>${
  myWorksArray[i].description
}</p>
          <div class="mobile-buttons">
            <a href="${
  myWorksArray[i].linkToLiveVersion
}" class="btn-secondary">See Live <img src="images/icons/live.svg" alt="See PRoject Live"/></a>
            <a href="${
  myWorksArray[i].linkToSource
}" class="btn-secondary">See Source <img src="images/icons/github.svg" alt="See Source Code"/></a>
          </div>
        </div>
      </div>
    </div>`;

      popupSection.innerHTML += contains + newContains + conatins2;
      const closeButton = document.getElementById('closeButton');
      closeButton.addEventListener('click', () => {
        closePopup();
      });
    });
  }
});

// form Validation
const form = document.getElementById("form");
const email = document.getElementById("mail");
const messageBox = document.getElementById("errorMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    messageBox.innerHTML = "Your email should be in lowercase*";
  }
});

// Local storage
form.addEventListener('submit', (e) => {
  e.preventDefault();
  compareAndAlert();
});

const formInputs = document.querySelectorAll('.form-data');

formInputs.forEach((item) => {
  item.addEventListener('keypress', () => {
    saveToLocalStorage();
  });
});