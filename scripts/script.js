const popup = document.querySelector("#popup_user");
const popupCard = document.querySelector("#popup_card");
const userInfoEdit = document.querySelector(".user_info_edit");
const cardInfoEdit = document.querySelector(".top_button");
const popupClose = popup.querySelector(".popup_close_user");
const popupCloseCard = popupCard.querySelector(".popup_close_card");
const card_template = document.querySelector("#card_template");
const container = document.querySelector(".card_container");
const formButtonUser = document.querySelector("#form_button-user");
const formButtonCard = document.querySelector("#form_button-card");
const formName = document.querySelector(".form_name");
const formDespcription = document.querySelector(".form_description");
const userInfoName = document.querySelector(".profile_name");
const userInfoDescription = document.querySelector(".profile_description");
const form = document.querySelector(".form");

const formCardInputs = document.querySelectorAll(".form_card__input");

const formChar = document.querySelector("#form-player");

const data = [
  {
    title: "spider-man",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdM5h1DWeSLtaVcPz-cTuOhoztD0kglhf3e5kQ1T-3cg&s=10",
    description: "Marvel-1962",
  },
  {
    title: "Superman",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWFjBDjfoXpEif4D0zqGn0j_hmLGJBDFWvf3heow7iA&s=10",
    description: "DC-1938",
  },
  {
    title: "Invincible",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uns95rkZSQFimR23uCu7GdxdjO6ebSk6jV--ImFyXQ&s=10",
    description: "Image-2002",
  },

  {
    title: "NightCrawler",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiq3iNQUDXQkWI7WGhOu6MoKTok-xy9pST-82-WzWFyQ&s=10",
    description: "Marvel-1975",
  },
  {
    title: "Flash (Wally West)",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYW4-T2lJVC411BEIrMph0aZ-9VHO9KHZq-23l_I7wqQ&s=10",
    description: "DC-1959",
  },
  {
    title: "Rexsplode",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JwUG9gPe4o23Mg2RP9WdUFeYdbalwS3iD8x7N-j4xA&s=10",
    description: "Image-2002",
  },
  {
    title: "Hulk",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyqFg_-uiEMuaQJzevamLzPEYUTIGsB57q39DE-YoZQ&s=10",
    description: "Marvel-1962",
  },
  {
    title: "Wonder Woman",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2EXwnQlqX11QAmJswomxcrEyt3iZsdUe716kQ3JgNA&s=10",
    description: "DC-1941",
  },
  {
    title: "Omniman",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphJmkDmvmXiqZ2BFOqWfHcvSZXEFevWMxQrRU90nVgw&s=10",
    description: "Image-2002",
  },
];

const createCard = (personaje) => {
  const card = card_template.content.cloneNode(true);
  const cardTitle = card.querySelector(".card_title");
  const cardImage = card.querySelector(".card_image");
  const cardDescription = card.querySelector(".card_description");
  const cardButton = card.querySelector(".card_button");
  const cardButtonDown = card.querySelector(".downvote");
  const cardCounter = card.querySelector(".card_counter");
  const cardVoteImgG = card.querySelector(".card_vote_image_good");
  const cardVoteImgB = card.querySelector(".card_vote_image_bad");

  cardTitle.textContent = personaje.title;
  cardImage.src = personaje.link;
  cardImage.alt = personaje.title;
  cardDescription.textContent = personaje.description;

  let counter = 0;

  const updateVoteImage = () => {
    if (counter >= 0) {
      cardVoteImgG.classList.add("card_vote_image_open");
      cardVoteImgB.classList.remove("card_vote_image_open");
    } else {
      cardVoteImgG.classList.remove("card_vote_image_open");
      cardVoteImgB.classList.add("card_vote_image_open");
    }
  };
  updateVoteImage();
  cardButton.addEventListener("click", () => {
    console.log(cardTitle.textContent);

    cardCounter.innerHTML = ++counter;
    updateVoteImage();
  });

  cardButtonDown.addEventListener("click", () => {
    console.log(cardTitle.textContent);
    cardCounter.innerHTML = --counter;
    updateVoteImage();
  });

  container.prepend(card);
};

data.forEach((personaje) => {
  createCard(personaje);
});

userInfoEdit.addEventListener("click", () => {
  popup.classList.toggle("popup_open");
  console.log("ola");
});

cardInfoEdit.addEventListener("click", () => {
  popupCard.classList.toggle("popup_open");
  console.log("ola");
});

popupClose.addEventListener("click", () => {
  popup.classList.toggle("popup_open");
  console.log("boton de cerrar usuario");
});

popupCloseCard.addEventListener("click", () => {
  popupCard.classList.toggle("popup_open");
  console.log("boton de cerrar tarjeta");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInfoName.textContent = formName.value;
  userInfoDescription.textContent = formDespcription.value;

  console.log("kadfk");
  popup.classList.toggle("popup_open");
});

formChar.addEventListener("submit", (e) => {
  e.preventDefault();

  const card = {};

  formCardInputs.forEach((formCardInput) => {
    card[formCardInput.name] = formCardInput.value;
  });

  console.log(card);

  data.push(card);
  createCard(card);
  console.log(data);
});
