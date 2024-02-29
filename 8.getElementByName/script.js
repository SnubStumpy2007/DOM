function collectData() {
  const languageProficiency = document.getElementsByName("languageProficiency");
  console.log(languageProficiency);

  for (let i = 0; i < languageProficiency.length; i++) {
    if (languageProficiency[i].checked) {
      console.log(`selected language is ${languageProficiency[i].value}`);
    }
  }
}
