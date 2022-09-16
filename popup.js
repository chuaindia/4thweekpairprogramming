const projectsData = [
    {
      title: 'Tonic',
      subtitle: 'CANOPY',
      backEnd: 'Back End Dev',
      year: 2015,
      phone: './image/cardone.svg',
      desk: './image/deskone.png',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descFull: '“Lorem” is not even a Latin word — it is the second half of “dolorem,” meaning “pain” or “sorrow”. Thus Lorem Ipsum was born, and began its long journey to ubiquity. The Guardian quoted a Latin scholar on just what the scrambled Cicero “means” to someone who understands Latin.',
      lang: ['html', 'css', 'javascript'],
      expertPop: ['html', 'css', 'javascript'],
      live: 'https://chuaindia.github.io/4thweekpairprogramming/',
      source: 'https://github.com/chuaindia/4thweekpairprogramming',
    },
    {
      title: 'Multi Post Stories',
      subtitle: 'CANOPY',
      backEnd: 'Back End Dev',
      year: 2015,
      phone: './image/cardtwo.svg',
      desk: './image/desktwo.png',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descFull: '“Lorem” is not even a Latin word — it is the second half of “dolorem,” meaning “pain” or “sorrow”. Thus Lorem Ipsum was born, and began its long journey to ubiquity. The Guardian quoted a Latin scholar on just what the scrambled Cicero “means” to someone who understands Latin.',
      lang: ['html','Ruby on Rails','css','javascript'],
      expertPop: ['html','Ruby on Rails','css','javascript'],
      live: 'https://chuaindia.github.io/4thweekpairprogramming/',
      source: 'https://github.com/chuaindia/4thweekpairprogramming',
    },
    {
      title: 'Tonic',
      subtitle: 'CANOPY',
      backEnd: 'Back End Dev',
      year: 2015,
      phone: './image/cardthree.svg',
      desk: './image/deskthree.png',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descFull: '“Lorem” is not even a Latin word — it is the second half of “dolorem,” meaning “pain” or “sorrow”. Thus Lorem Ipsum was born, and began its long journey to ubiquity. The Guardian quoted a Latin scholar on just what the scrambled Cicero “means” to someone who understands Latin.',
      lang: ['html','Ruby on Rails','css','javascript'],
      expertPop: ['html','Ruby on Rails','css','javascript'],
      live: 'https://chuaindia.github.io/4thweekpairprogramming/',
      source: 'https://github.com/chuaindia/4thweekpairprogramming',
    },
    {
      title: 'Multi Post Stories',
      subtitle: 'CANOPY',
      backEnd: 'Back End Dev',
      year: 2015,
      phone: './image/cardfour.svg',
      desk: './image/deskfour.png',
      desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      descFull: '“Lorem” is not even a Latin word — it is the second half of “dolorem,” meaning “pain” or “sorrow”. Thus Lorem Ipsum was born, and began its long journey to ubiquity. The Guardian quoted a Latin scholar on just what the scrambled Cicero “means” to someone who understands Latin.',
      lang: ['html','Ruby on Rails','css','javascript'],
      expertPop: ['html','Ruby on Rails','css','javascript'],
      live: 'https://chuaindia.github.io/4thweekpairprogramming/',
      source: 'https://github.com/chuaindia/4thweekpairprogramming',
    },
  ];
  
  const projectCardString = projectsData.map((project) => `
      <div class="containerx">
        <div class="noqs">
          <div class="cardimg card1">
            <img class="imgmobile"
              src="${project.phone}"
              alt="some img"
            />
            <img class="imagedesktop"
            src="${project.desk}"
            alt="some img"
          />
          </div>
          <div class="card-title">
            <h2>${project.title}</h2>
            <ul class="flex-cards">
              <li class="all-list first">${project.subtitle}</li>
              <li class="all-list second">${project.backEnd}</li>
              <li class="all-list second">${project.year}</li>
            </ul>
            <p class="paragraph-cards">${project.desc}</p>
            <ul class="flex-button">
              ${project.lang.map((tech) => `<li class="button">${tech}</li>`).join('')}
            </ul>
            <div class="see-container">
              <button type="button" class="project-btn btn see-button">
                See Project
              </button>
              </div>
          </div>
        </div>
      </div>
    `);
  
  const popupContainer = document.querySelector('.pop-window');
  const recentWork = document.querySelector('.works');
  const parser = new DOMParser();
  projectCardString.forEach((projectString, index) => {
    const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
    const mobilePopup = `
        <div class="project-popup-hidden ">
          <div class="backgroundpop"></div>
            <div class="project-popup">
              <div class="project-header">
                <i class="fa-solid fa-xmark project-close">x</i>
                <h2>${projectsData[index].title}</h2>
                <p class="all-list first">${projectsData[index].subtitle} <span class="all-list second">${projectsData[index].backEnd}</span> <span class="all-list second">${projectsData[index].year}</span></p>
              </div>
              <div class="cardimg card1">
                <img class="imgmobile pop-img" src="${projectsData[index].phone}" alt="card image">
                <img class="imagedesktop project-img"  src="${projectsData[index].desk}" alt="card image">            
              <div class="project-footer">
                <p class="project-desc">${projectsData[index].descFull}</p>
                <div>
                  <ul class = ("prfee")>
                    ${projectsData[index].expertPop.map((tech) => `<li>${tech}</li>`).join('')}
                  </ul>
                  <div class="project-links">
                    <a href="${projectsData[index].live}">See Live <i class="close"></i></a>
                    <a href="${projectsData[index].source}">See Source <i class="close"></i></a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      `;
  
    const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;
    const projectBtn = projectElement.querySelector('.see-button');
    const closeBtn = mobilePopupElement.querySelector('.project-close');
    projectBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });
    closeBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });
    recentWork.append(projectElement);
    popupContainer.append(mobilePopupElement);
  });