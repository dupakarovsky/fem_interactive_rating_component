import "./style.scss";
document.querySelector("#app");
/////////////////////////////////////////////////////////////////

(function () {
   // DOM variables
   const form = document.querySelector("#form");
   const contentContainer = document.querySelector("#content");

   // Create HTLM markup to be injected into a DIV
   function _generateMarkup(rating, total) {
      return `
            <img src="/img/illustration-thank-you.svg" alt="thank-you" class="sr" />
            <p class="rating__selected">You selected ${rating} out of ${total}</p>
            <div class="rating__message centered">
               <p class="rating__header">Thank you!</p>
               <p class="rating__text">
                  We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate
                  to get in touch!
               </p>
            </div>`;
   }

   // Attach the created markup to a parent element.
   function _attachMarkup(parent, content) {
      parent.classList.replace("rating__content", "rating__submited");
      parent.innerHTML = "";
      parent.insertAdjacentHTML("afterbegin", content);
   }

   // Clear previous selection
   function _clearRadios(nodeList) {
      nodeList.forEach((nodeEl) => (nodeEl.checked = false));
   }

   // Listen to form sumbission
   form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      //    const numRadios = [...evt.target.elements].filter((el) => el.type === "radio").length;
      const totalRadios = this.querySelectorAll("input[type='radio']");
      const [[_, value]] = new FormData(this);
      const markup = _generateMarkup(value, totalRadios.length);
      _attachMarkup(contentContainer, markup);
      _clearRadios(totalRadios);
   });
})();
