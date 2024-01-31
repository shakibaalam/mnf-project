function showScreenplayPopup() {
  document.querySelector(".conversion-landing-page-wrapper").style.display =
    "none";
  document.querySelector(".screenplay-popup-wrapper").style.display = "flex";
}

function updateLanguageInActionLines() {
  const dropDown = document.getElementById("action-lines-language-dropdown");
  dropDown.style.pointerEvents = "none";
  dropDown.style.border = "none";
  dropDown.style.appearance = "none";
  dropDown.style.webkitAppearance = "none";
  dropDown.style.MozAppearance = "none";
  document.getElementById("dialogues-dropdown-container").style.display =
    "flex";
  const updatedText = document.getElementById(
    "action-lines-updated-source-text"
  );
  updatedText.textContent =
    "Source Action Lines are mainly in ASL (ASC). Convert these into:";
}

function updateLanguageInDialogues() {
  document.getElementById("dialogues-script-dropdown").style.display = "block";
}

function updateScriptInDialogues() {
  const updatedText = document.getElementById("dialogues-updated-source-text");
  const language = document.getElementById("dialogues-language-dropdown");
  const script = document.getElementById("dialogues-script-dropdown");
  updatedText.textContent = `Source Dialogues are mainly in GSL (GSC). Convert these into: ${language.value} Language written in ${script.value}`;
  language.style.display = "none";
  script.style.display = "none";
  document.getElementById("dialogues-content-wrapper").style.display = "block";
}

function wantConvert() {
  // Hide checkboxes
  let checkboxes = document.querySelectorAll('#dialogues-content-wrapper input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
      checkbox.style.display = 'none';
  });

  let h2Tag = document.querySelector('#dialogues-content-wrapper h2');
  h2Tag.style.display = 'none';

  // Hide continue button
  let continueButton = document.querySelector('#dialogues-content-wrapper button');
  continueButton.style.display = 'none';

  document.getElementById("dialogues-content-wrapper2").style.display = "block";
}

function wantTextConvert() {
  console.log('clicked');
  let chooseLanguageSection = document.getElementById('choose-language-section');

  chooseLanguageSection.style.display = 'block';

  // Hide checkboxes and text
  let checkboxes = document.querySelectorAll('#dialogues-content-wrapper2 input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
      checkbox.style.display = 'none';
  });

  let h2Tag = document.querySelector('#dialogues-content-wrapper2 h2');
  h2Tag.style.display = 'none';

  // Hide continue button
  let continueButton = document.querySelector('#dialogues-content-wrapper2 button');
  continueButton.style.display = 'none';
}